# Quick Start Guide 🚀

## Get Your COD Master Pro Running in 60 Seconds

---

## Option 1: Open Directly in Browser (Easiest)

1. **Open the index.html file** in any modern browser:
   - Double-click `index.html`
   - OR right-click → Open with → Chrome/Firefox/Safari/Edge

2. **That's it!** The app is now running locally.

---

## Option 2: Run with Python Server (Recommended)

### Mac/Linux:
```bash
# Navigate to the app folder
cd cod-master-pro

# Start server
python3 -m http.server 8000

# Or use the included script
./start-demo.sh
```

### Windows:
```bash
# Navigate to the app folder
cd cod-master-pro

# Start server
python -m http.server 8000
```

### Access:
Open your browser and go to: **http://localhost:8000**

---

## Option 3: Run with NPM

```bash
cd cod-master-pro
npm install
npm run dev
```

Access at: **http://localhost:8000**

---

## 🎯 First Steps After Launch

1. **Explore the Dashboard**
   - View key metrics and recent orders
   - Check out the clean, modern interface

2. **Create Your First Form**
   - Click "Form Builder" in sidebar
   - Add fields by clicking field types
   - Customize labels and placeholders
   - Switch to "Preview" to see how it looks

3. **Set Up Quantity Offers**
   - Go to "Quantity Offers"
   - Click "Create Offer"
   - Set your discount rules
   - Watch conversions increase!

4. **Configure Settings**
   - Update store name and details
   - Set your currency (SAR, AED, USD, etc.)
   - Configure COD fees
   - Enable notifications

5. **Check Analytics**
   - View revenue charts
   - Analyze geographic data
   - Track conversion funnel

---

## 📱 Test on Mobile

1. Find your computer's local IP:
   ```bash
   # Mac/Linux
   ifconfig | grep "inet "
   
   # Windows
   ipconfig
   ```

2. On your phone, open browser and go to:
   ```
   http://YOUR-IP:8000
   ```

3. See how perfectly the app works on mobile!

---

## 🎨 Customization Quick Tips

### Change Colors:
Edit these classes in the code:
- Primary: `bg-indigo-600` → `bg-blue-600`
- Success: `bg-green-600` → `bg-emerald-600`
- Accent: `from-indigo-600 to-purple-600`

### Change Store Name:
Go to Settings page or edit in `src/pages/Settings.tsx`

### Add Your Logo:
Update the logo section in `src/App.tsx`

---

## 🔌 Connect to Shopify (For Developers)

To connect this app to Shopify:

1. **Create Shopify App** in Partners Dashboard
2. **Set up OAuth** flow
3. **Add Shopify API** integration:
   ```javascript
   // Install Shopify API library
   npm install @shopify/shopify-api
   
   // Connect in your backend
   const shopify = new Shopify({
     apiKey: 'YOUR_API_KEY',
     apiSecret: 'YOUR_API_SECRET'
   });
   ```

4. **Use webhooks** for order sync

---

## 📚 Key Features to Try

### ✅ Form Builder
- Drag-and-drop different fields
- Toggle between Edit and Preview modes
- Copy the embed code

### ✅ Quantity Offers
- Create a "Buy 2 Get 10% Off" offer
- See how the preview updates

### ✅ Orders
- Filter orders by status
- Search by customer name
- View order details

### ✅ Analytics
- Check the revenue chart
- View top countries
- Analyze conversion funnel

### ✅ Integrations
- See available connections
- WhatsApp, SMS, Email, etc.

---

## 🐛 Troubleshooting

### App won't load?
- Make sure you're using a modern browser (Chrome, Firefox, Safari, Edge)
- Clear browser cache and reload
- Check browser console for errors (F12)

### Port 8000 already in use?
```bash
# Use a different port
python3 -m http.server 8080
```

### CSS not loading?
- Make sure you have internet connection (Tailwind CSS loads from CDN)
- Check if CDN is accessible

### Icons not showing?
- Lucide icons load from CDN
- Wait a few seconds after page load
- Refresh the page

---

## 📞 Need Help?

1. Check **README.md** for detailed documentation
2. Review **COMPARISON.md** for feature details
3. Contact: support@akzmarketing.com

---

## 🎉 You're Ready!

Your professional COD app is now running. Start creating forms, setting up offers, and managing orders like a Silicon Valley pro!

**Next Steps**:
- Customize the branding
- Connect your integrations
- Deploy to production
- Start processing orders!

---

**Built with ❤️ by YAGAMI - AKZ Marketing LLC**
