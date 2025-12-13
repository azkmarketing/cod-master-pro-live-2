# 🚀 Complete Shopify Deployment Guide

## How to Deploy COD Master Pro to Shopify

---

## 📋 Prerequisites Checklist

Before you start, make sure you have:
- [ ] Shopify Partners Account (free at https://partners.shopify.com)
- [ ] Node.js installed (v14 or higher)
- [ ] MongoDB database (free at MongoDB Atlas)
- [ ] Hosting provider account (Heroku/DigitalOcean/AWS)
- [ ] Domain name (optional but recommended)
- [ ] Git installed

---

## 🎯 Step-by-Step Deployment

### **STEP 1: Setup Shopify Partners Account**

#### 1.1 Create Partners Account
```
1. Go to: https://partners.shopify.com/signup
2. Fill in details:
   - Business name: AKZ Marketing LLC
   - Email: your-email@akzmarketing.com
   - Password: [secure password]
3. Verify email
4. Complete profile setup
```

#### 1.2 Create App in Partners Dashboard
```
1. Login to Partners Dashboard
2. Navigate to: Apps > Create app
3. Choose: "Create app manually"
4. Fill in:
   - App name: COD Master Pro
   - App type: Public app
5. Click "Create app"
```

#### 1.3 Get API Credentials
```
1. In your app page, go to: "App setup"
2. Copy these values:
   - API key: xxxxxxxxxxxxxxxx
   - API secret: xxxxxxxxxxxxxxxx
3. Save them securely (you'll need these later)
```

---

### **STEP 2: Setup MongoDB Database**

#### 2.1 Create MongoDB Atlas Account (FREE)
```
1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Create free account
3. Select: "Shared" (Free tier)
4. Choose region: Closest to your users (e.g., Middle East/Saudi)
5. Create cluster (takes 5-10 minutes)
```

#### 2.2 Setup Database Access
```
1. In Atlas Dashboard, go to: "Database Access"
2. Click "Add New Database User"
3. Create user:
   - Username: codmasterpro
   - Password: [generate secure password]
   - Database User Privileges: Read and write to any database
4. Click "Add User"
```

#### 2.3 Setup Network Access
```
1. Go to: "Network Access"
2. Click "Add IP Address"
3. Choose: "Allow Access from Anywhere" (0.0.0.0/0)
   - For production: Add specific IPs of your servers
4. Click "Confirm"
```

#### 2.4 Get Connection String
```
1. Go to: "Database" > "Connect"
2. Choose: "Connect your application"
3. Copy connection string:
   mongodb+srv://codmasterpro:<password>@cluster0.xxxxx.mongodb.net/cod-master-pro
4. Replace <password> with your database password
5. Save this string
```

---

### **STEP 3: Deploy to Heroku (Easiest Option)**

#### 3.1 Create Heroku Account
```
1. Go to: https://signup.heroku.com/
2. Create free account
3. Verify email
```

#### 3.2 Install Heroku CLI
```bash
# Mac
brew tap heroku/brew && brew install heroku

# Windows
Download from: https://devcenter.heroku.com/articles/heroku-cli

# Linux
sudo snap install --classic heroku
```

#### 3.3 Login to Heroku
```bash
heroku login
# Opens browser for authentication
```

#### 3.4 Prepare Your App

```bash
# Navigate to your app directory
cd cod-master-pro

# Initialize git (if not already)
git init
git add .
git commit -m "Initial commit"

# Create Heroku app
heroku create cod-master-pro-yourname
# Note: Replace 'yourname' with something unique
```

#### 3.5 Set Environment Variables
```bash
# Set Shopify credentials
heroku config:set SHOPIFY_API_KEY=your_api_key_here
heroku config:set SHOPIFY_API_SECRET=your_api_secret_here

# Set your Heroku app URL
heroku config:set HOST=https://cod-master-pro-yourname.herokuapp.com

# Set session secret (generate random string)
heroku config:set SESSION_SECRET=$(openssl rand -hex 32)

# Set MongoDB connection
heroku config:set MONGODB_URI=your_mongodb_connection_string

# Set environment
heroku config:set NODE_ENV=production
```

#### 3.6 Create Procfile
```bash
# Create Procfile in your app directory
echo "web: node server.js" > Procfile
```

#### 3.7 Deploy to Heroku
```bash
# Push to Heroku
git push heroku main

# If using master branch:
git push heroku master

# Check logs
heroku logs --tail
```

#### 3.8 Your App URL
```
Your app is now live at:
https://cod-master-pro-yourname.herokuapp.com
```

---

### **STEP 4: Configure Shopify App Settings**

#### 4.1 Update App URLs in Partners Dashboard
```
1. Go to: Partners Dashboard > Apps > Your App
2. Navigate to: "App setup"
3. Update URLs:
   - App URL: https://cod-master-pro-yourname.herokuapp.com
   - Allowed redirection URL(s): 
     https://cod-master-pro-yourname.herokuapp.com/auth/callback
4. Click "Save"
```

#### 4.2 Set App Scopes
```
In App setup, under "API access":
1. Select scopes:
   ✅ read_products
   ✅ write_products
   ✅ read_orders
   ✅ write_orders
   ✅ read_customers
   ✅ write_customers
   ✅ read_fulfillments
   ✅ write_fulfillments
2. Save changes
```

#### 4.3 Setup App Distribution (Optional)
```
For public app (to sell on Shopify App Store):
1. Go to: "Distribution" tab
2. Fill in app listing details
3. Add screenshots
4. Set pricing (or free)
5. Submit for review

For private app (just for your stores):
1. Stay in development mode
2. Install directly to your store
```

---

### **STEP 5: Install App to Your Store**

#### 5.1 Get Installation URL
```
Your installation URL:
https://cod-master-pro-yourname.herokuapp.com/auth?shop=your-store.myshopify.com
```

#### 5.2 Install Process
```
1. Open installation URL in browser
2. Enter your store domain: your-store.myshopify.com
3. Click "Install"
4. Review permissions
5. Click "Install app"
6. You'll be redirected to your app dashboard
```

---

### **STEP 6: Setup Frontend Files**

#### 6.1 Move Frontend to Public Folder
```bash
# In your project directory
mkdir public
mv index.html public/
mv src public/

# Or if you prefer to keep structure:
# Just ensure server.js serves from correct directory
```

#### 6.2 Update Server.js
```javascript
// Make sure this line is in server.js:
app.use(express.static('public'));

// And this for catch-all route:
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
```

---

### **STEP 7: Setup Integrations (Optional)**

#### 7.1 WhatsApp Business API
```
1. Apply for WhatsApp Business API
2. Get API credentials
3. Add to Heroku config:
   heroku config:set WHATSAPP_API_KEY=your_key
   heroku config:set WHATSAPP_PHONE_NUMBER=+966500000000
```

#### 7.2 SMS (Twilio Example)
```
1. Create Twilio account: https://www.twilio.com/try-twilio
2. Get credentials
3. Add to Heroku:
   heroku config:set TWILIO_ACCOUNT_SID=your_sid
   heroku config:set TWILIO_AUTH_TOKEN=your_token
   heroku config:set TWILIO_PHONE_NUMBER=+966500000000
```

#### 7.3 Email (SendGrid)
```
1. Create SendGrid account: https://signup.sendgrid.com/
2. Create API key
3. Add to Heroku:
   heroku config:set SENDGRID_API_KEY=your_api_key
   heroku config:set FROM_EMAIL=noreply@lubanbio.com
```

---

### **STEP 8: Testing**

#### 8.1 Test Installation
```
1. Install app to test store
2. Navigate through all pages
3. Create a test form
4. Submit a test order
5. Check if data saves to MongoDB
6. Verify Shopify order creation
```

#### 8.2 Test Webhooks
```
1. Setup webhooks in Partners Dashboard
2. Test order creation
3. Check webhook logs in Heroku
```

---

### **STEP 9: Custom Domain (Optional)**

#### 9.1 Add Custom Domain
```bash
# In Heroku
heroku domains:add codmasterpro.com
heroku domains:add www.codmasterpro.com

# Get DNS target
heroku domains
```

#### 9.2 Update DNS Records
```
Add CNAME records in your domain registrar:
- Type: CNAME
- Name: www
- Value: [heroku DNS target from above]

For apex domain (codmasterpro.com):
- Type: ALIAS or ANAME (if supported)
- Value: [heroku DNS target]
```

#### 9.3 Update Environment
```bash
heroku config:set HOST=https://codmasterpro.com
```

---

## 🔧 Alternative Hosting Options

### **Option 2: DigitalOcean (More Control)**

#### Setup Droplet
```bash
# 1. Create account: https://www.digitalocean.com/
# 2. Create Droplet (Ubuntu 22.04)
# 3. SSH into server:
ssh root@your-droplet-ip

# 4. Install Node.js:
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 5. Install PM2 (process manager):
sudo npm install -g pm2

# 6. Clone your app:
git clone your-repo-url
cd cod-master-pro

# 7. Install dependencies:
npm install

# 8. Create .env file:
nano .env
# Paste your environment variables

# 9. Start app with PM2:
pm2 start server.js --name "cod-master-pro"
pm2 save
pm2 startup
```

#### Setup Nginx
```bash
# Install Nginx
sudo apt install nginx

# Create config
sudo nano /etc/nginx/sites-available/cod-master-pro

# Add:
server {
    listen 80;
    server_name codmasterpro.com www.codmasterpro.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Enable site
sudo ln -s /etc/nginx/sites-available/cod-master-pro /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### Setup SSL (Free)
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d codmasterpro.com -d www.codmasterpro.com

# Auto-renewal is setup automatically
```

---

### **Option 3: AWS (Enterprise Scale)**

#### EC2 Setup
```
1. Create AWS account
2. Launch EC2 instance (t2.micro for free tier)
3. Configure security groups (ports 80, 443, 3000)
4. Follow similar steps as DigitalOcean above
5. Use ELB (Elastic Load Balancer) for scaling
6. Use RDS for managed MongoDB if needed
```

---

## 📊 Post-Deployment Checklist

### Immediate Tasks:
- [ ] Test app installation on store
- [ ] Verify all pages load correctly
- [ ] Test form creation and submission
- [ ] Check order creation in Shopify
- [ ] Test all integrations
- [ ] Verify mobile responsiveness
- [ ] Check SSL certificate (HTTPS)
- [ ] Test webhook delivery

### Within 24 Hours:
- [ ] Monitor error logs
- [ ] Check database connections
- [ ] Test with real products
- [ ] Setup monitoring (e.g., Sentry)
- [ ] Configure backups
- [ ] Test payment processing
- [ ] Verify analytics tracking

### Within 1 Week:
- [ ] Gather user feedback
- [ ] Optimize performance
- [ ] Fix any bugs
- [ ] Update documentation
- [ ] Setup automated testing
- [ ] Create backup strategy
- [ ] Plan feature updates

---

## 🐛 Common Issues & Solutions

### Issue 1: "App installation failed"
**Solution:**
```
- Check SHOPIFY_API_KEY and SHOPIFY_API_SECRET
- Verify redirect URLs match exactly
- Check server logs for errors
- Ensure HOST variable is set correctly
```

### Issue 2: "Database connection failed"
**Solution:**
```
- Verify MONGODB_URI is correct
- Check network access in MongoDB Atlas
- Ensure password has no special characters (or URL encode)
- Test connection locally first
```

### Issue 3: "Orders not creating in Shopify"
**Solution:**
```
- Check API scopes include write_orders
- Verify access token is valid
- Check Shopify API rate limits
- Review error logs
```

### Issue 4: "Frontend not loading"
**Solution:**
```
- Verify files are in public/ directory
- Check express.static path
- Clear browser cache
- Check server logs for 404 errors
```

---

## 📞 Support & Resources

### Official Documentation:
- Shopify App Dev: https://shopify.dev/docs/apps
- Shopify API: https://shopify.dev/api
- Node.js: https://nodejs.org/docs/
- MongoDB: https://docs.mongodb.com/
- Heroku: https://devcenter.heroku.com/

### Useful Tools:
- Postman (API testing): https://www.postman.com/
- MongoDB Compass (DB GUI): https://www.mongodb.com/products/compass
- Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli

### Community:
- Shopify Partners Slack
- Stack Overflow
- Shopify Community Forums

---

## 💰 Cost Breakdown

### Free Tier (Recommended for Starting):
- **Heroku**: Free (with limits)
- **MongoDB Atlas**: Free (512MB storage)
- **Shopify Partners**: Free
- **Total**: $0/month

### Production Tier:
- **Heroku Hobby**: $7/month
- **MongoDB Atlas M10**: $57/month (or stick with free)
- **Domain**: $12/year
- **SSL**: Free (Let's Encrypt)
- **Total**: ~$8-65/month

### Enterprise Tier:
- **Heroku Professional**: $25-50/month
- **MongoDB Atlas M30**: $188/month
- **AWS/DigitalOcean**: $20-100/month
- **CDN (Cloudflare)**: $20/month
- **Total**: $250-350/month

---

## 🎉 Congratulations!

If you've followed all steps, your COD Master Pro app is now:
✅ Live on Shopify
✅ Processing orders
✅ Integrated with your store
✅ Ready for customers

**Next Steps:**
1. Market your app
2. Gather feedback
3. Iterate and improve
4. Scale as needed

**Need Help?** Contact: support@akzmarketing.com

---

**Built with ❤️ by YAGAMI - AKZ Marketing LLC**
