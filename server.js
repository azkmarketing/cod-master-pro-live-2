// server.js - Backend for COD Master Pro Shopify App
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const { Shopify, ApiVersion } = require('@shopify/shopify-api');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve your React app

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key-change-this',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
  }
}));

// Initialize Shopify API
const shopify = new Shopify({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET,
  scopes: ['read_products', 'write_products', 'read_orders', 'write_orders', 'read_customers', 'write_customers'],
  hostName: process.env.HOST.replace(/https?:\/\//, ''),
  hostScheme: process.env.HOST.split('://')[0],
  apiVersion: ApiVersion.April23,
  isEmbeddedApp: true,
  sessionStorage: new Shopify.Session.MemorySessionStorage(),
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/cod-master-pro', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Connected to MongoDB');
}).catch(err => {
  console.error('❌ MongoDB connection error:', err);
});

// Database Models
const FormSchema = new mongoose.Schema({
  shop: String,
  formName: String,
  fields: Array,
  settings: Object,
  createdAt: { type: Date, default: Date.now }
});

const OfferSchema = new mongoose.Schema({
  shop: String,
  name: String,
  minQuantity: Number,
  maxQuantity: Number,
  discountType: String,
  discountValue: Number,
  status: String,
  createdAt: { type: Date, default: Date.now }
});

const OrderSchema = new mongoose.Schema({
  shop: String,
  orderId: String,
  customer: Object,
  items: Array,
  amount: Number,
  status: String,
  paymentMethod: String,
  createdAt: { type: Date, default: Date.now }
});

const Form = mongoose.model('Form', FormSchema);
const Offer = mongoose.model('Offer', OfferSchema);
const Order = mongoose.model('Order', OrderSchema);

// ============================================
// AUTHENTICATION ROUTES
// ============================================

// OAuth start
app.get('/auth', async (req, res) => {
  try {
    const authRoute = await shopify.auth.begin({
      shop: req.query.shop,
      callbackPath: '/auth/callback',
      isOnline: false,
      rawRequest: req,
      rawResponse: res,
    });
    res.redirect(authRoute);
  } catch (error) {
    console.error('Auth error:', error);
    res.status(500).send('Authentication failed');
  }
});

// OAuth callback
app.get('/auth/callback', async (req, res) => {
  try {
    const callback = await shopify.auth.callback({
      rawRequest: req,
      rawResponse: res,
    });
    
    req.session.shop = callback.session.shop;
    req.session.accessToken = callback.session.accessToken;
    
    // Redirect to app
    res.redirect('/?shop=' + callback.session.shop);
  } catch (error) {
    console.error('Callback error:', error);
    res.status(500).send('Authentication callback failed');
  }
});

// ============================================
// API ROUTES
// ============================================

// Middleware to verify Shopify session
const verifyShopify = (req, res, next) => {
  if (!req.session.shop || !req.session.accessToken) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  req.shop = req.session.shop;
  req.accessToken = req.session.accessToken;
  next();
};

// ===== FORMS API =====

// Get all forms
app.get('/api/forms', verifyShopify, async (req, res) => {
  try {
    const forms = await Form.find({ shop: req.shop });
    res.json(forms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create form
app.post('/api/forms', verifyShopify, async (req, res) => {
  try {
    const form = new Form({
      shop: req.shop,
      ...req.body
    });
    await form.save();
    res.json(form);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update form
app.put('/api/forms/:id', verifyShopify, async (req, res) => {
  try {
    const form = await Form.findOneAndUpdate(
      { _id: req.params.id, shop: req.shop },
      req.body,
      { new: true }
    );
    res.json(form);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete form
app.delete('/api/forms/:id', verifyShopify, async (req, res) => {
  try {
    await Form.findOneAndDelete({ _id: req.params.id, shop: req.shop });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ===== OFFERS API =====

// Get all offers
app.get('/api/offers', verifyShopify, async (req, res) => {
  try {
    const offers = await Offer.find({ shop: req.shop });
    res.json(offers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create offer
app.post('/api/offers', verifyShopify, async (req, res) => {
  try {
    const offer = new Offer({
      shop: req.shop,
      ...req.body
    });
    await offer.save();
    res.json(offer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update offer
app.put('/api/offers/:id', verifyShopify, async (req, res) => {
  try {
    const offer = await Offer.findOneAndUpdate(
      { _id: req.params.id, shop: req.shop },
      req.body,
      { new: true }
    );
    res.json(offer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete offer
app.delete('/api/offers/:id', verifyShopify, async (req, res) => {
  try {
    await Offer.findOneAndDelete({ _id: req.params.id, shop: req.shop });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ===== ORDERS API =====

// Get all orders
app.get('/api/orders', verifyShopify, async (req, res) => {
  try {
    const orders = await Order.find({ shop: req.shop })
      .sort({ createdAt: -1 })
      .limit(100);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create order (from COD form submission)
app.post('/api/orders', verifyShopify, async (req, res) => {
  try {
    const order = new Order({
      shop: req.shop,
      ...req.body
    });
    await order.save();
    
    // Create order in Shopify
    const client = new shopify.clients.Rest({session: {shop: req.shop, accessToken: req.accessToken}});
    const shopifyOrder = await client.post({
      path: 'orders',
      data: {
        order: {
          email: req.body.customer.email,
          fulfillment_status: 'unfulfilled',
          financial_status: 'pending',
          line_items: req.body.items,
          shipping_address: req.body.customer.address,
          tags: 'COD, COD-Master-Pro',
          note: 'Order placed via COD Master Pro'
        }
      }
    });
    
    res.json({ order, shopifyOrder: shopifyOrder.body.order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update order status
app.put('/api/orders/:id', verifyShopify, async (req, res) => {
  try {
    const order = await Order.findOneAndUpdate(
      { _id: req.params.id, shop: req.shop },
      { status: req.body.status },
      { new: true }
    );
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ===== ANALYTICS API =====

// Get dashboard stats
app.get('/api/analytics/dashboard', verifyShopify, async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments({ shop: req.shop });
    const totalRevenue = await Order.aggregate([
      { $match: { shop: req.shop } },
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);
    
    res.json({
      totalOrders,
      totalRevenue: totalRevenue[0]?.total || 0,
      // Add more analytics as needed
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ===== WEBHOOKS =====

// Order created webhook
app.post('/webhooks/orders/create', async (req, res) => {
  try {
    // Handle Shopify order creation
    console.log('Order created:', req.body);
    res.status(200).send('OK');
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).send('Error');
  }
});

// ============================================
// SERVE REACT APP
// ============================================

// Serve the React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// ============================================
// START SERVER
// ============================================

app.listen(PORT, () => {
  console.log('='.repeat(50));
  console.log('🚀 COD Master Pro Server Started!');
  console.log('='.repeat(50));
  console.log(`📍 Server running on port ${PORT}`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📊 Database: ${process.env.MONGODB_URI ? 'Connected' : 'Local'}`);
  console.log('='.repeat(50));
});

module.exports = app;
