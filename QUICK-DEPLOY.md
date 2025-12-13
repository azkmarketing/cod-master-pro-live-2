# ⚡ Quick Deploy Commands - COD Master Pro

## 🚀 Deploy to Shopify in 30 Minutes

Copy and paste these commands in order!

---

## 📋 BEFORE YOU START

Make sure you have:
1. Shopify Partners account created
2. App created in Partners Dashboard (get API key & secret)
3. MongoDB Atlas account with connection string

---

## 💻 STEP 1: INSTALL DEPENDENCIES

```bash
# Navigate to your app folder
cd cod-master-pro

# Install Node.js dependencies
npm install
```

---

## 🔧 STEP 2: CREATE ENVIRONMENT FILE

```bash
# Copy example env file
cp .env.example .env

# Edit the file (use nano, vim, or any text editor)
nano .env
```

**Paste these values (replace with your actual values):**
```env
SHOPIFY_API_KEY=your_api_key_from_partners_dashboard
SHOPIFY_API_SECRET=your_api_secret_from_partners_dashboard
HOST=https://your-app-name.herokuapp.com
SESSION_SECRET=generate_random_32_char_string_here
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=production
```

**To generate SESSION_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## 📦 STEP 3: SETUP GIT

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial deployment - COD Master Pro"
```

---

## ☁️ STEP 4: DEPLOY TO HEROKU

### Install Heroku CLI (if not installed):

**Mac:**
```bash
brew tap heroku/brew && brew install heroku
```

**Windows:**
Download from: https://devcenter.heroku.com/articles/heroku-cli

**Linux:**
```bash
curl https://cli-assets.heroku.com/install.sh | sh
```

### Deploy:

```bash
# Login to Heroku
heroku login

# Create your app (replace 'yourname' with something unique)
heroku create cod-master-pro-yourname

# Set environment variables (replace with your actual values)
heroku config:set SHOPIFY_API_KEY=your_api_key_here
heroku config:set SHOPIFY_API_SECRET=your_api_secret_here
heroku config:set HOST=https://cod-master-pro-yourname.herokuapp.com
heroku config:set SESSION_SECRET=$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
heroku config:set MONGODB_URI=your_mongodb_connection_string_here
heroku config:set NODE_ENV=production

# Deploy!
git push heroku main
# OR if using master branch:
git push heroku master

# Check if it's running
heroku logs --tail
```

---

## ✅ STEP 5: UPDATE SHOPIFY SETTINGS

1. Go to: **Shopify Partners Dashboard** > **Apps** > **Your App**
2. Click **"App setup"**
3. Update these fields:
   - **App URL**: `https://cod-master-pro-yourname.herokuapp.com`
   - **Allowed redirection URL(s)**: `https://cod-master-pro-yourname.herokuapp.com/auth/callback`
4. Click **"Save"**

---

## 🎯 STEP 6: INSTALL TO YOUR STORE

**Your installation URL:**
```
https://cod-master-pro-yourname.herokuapp.com/auth?shop=your-store.myshopify.com
```

1. Open this URL in browser
2. Replace `yourname` with your Heroku app name
3. Replace `your-store` with your Shopify store name
4. Click "Install"
5. Approve permissions
6. Done! 🎉

---

## 🔄 UPDATING YOUR APP

### Make changes and redeploy:
```bash
# Make your code changes

# Commit changes
git add .
git commit -m "Your update message"

# Push to Heroku
git push heroku main

# View logs
heroku logs --tail
```

---

## 📊 USEFUL HEROKU COMMANDS

### View logs:
```bash
heroku logs --tail
```

### Restart app:
```bash
heroku restart
```

### Open app in browser:
```bash
heroku open
```

### Check app status:
```bash
heroku ps
```

### See environment variables:
```bash
heroku config
```

### Set new environment variable:
```bash
heroku config:set VARIABLE_NAME=value
```

### SSH into app:
```bash
heroku run bash
```

### Scale dynos:
```bash
heroku ps:scale web=1
```

---

## 🐛 TROUBLESHOOTING

### App won't start?
```bash
# Check logs
heroku logs --tail

# Common issues:
# - Missing environment variables
# - MongoDB connection failed
# - Port not set correctly
```

### Can't install on Shopify?
```bash
# Verify:
# 1. API key and secret are correct
# 2. Redirect URL matches exactly
# 3. App URL is correct
# 4. Scopes are configured
```

### Database connection failed?
```bash
# Check:
# 1. MONGODB_URI is correct
# 2. Password has no special characters
# 3. IP whitelist includes 0.0.0.0/0
# 4. User has correct permissions
```

### Orders not creating?
```bash
# Verify:
# 1. write_orders scope is enabled
# 2. API connection is working
# 3. Check Heroku logs for errors
```

---

## 🔒 SECURITY BEST PRACTICES

### Secure your SESSION_SECRET:
```bash
# Generate new random secret
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# Update on Heroku
heroku config:set SESSION_SECRET=your_new_secret
```

### Rotate API credentials:
```bash
# 1. Generate new credentials in Shopify Partners
# 2. Update on Heroku:
heroku config:set SHOPIFY_API_KEY=new_key
heroku config:set SHOPIFY_API_SECRET=new_secret

# 3. Restart app
heroku restart
```

---

## 📈 MONITORING

### Setup monitoring (Optional but recommended):

**1. Error Tracking (Sentry):**
```bash
# Add Sentry
heroku addons:create sentry:f1

# Get DSN
heroku config:get SENTRY_DSN
```

**2. Uptime Monitoring:**
- UptimeRobot: https://uptimerobot.com (Free)
- Pingdom: https://www.pingdom.com

**3. Performance:**
```bash
# Add New Relic
heroku addons:create newrelic:wayne
```

---

## 💰 COST OPTIMIZATION

### Free Tier (Good for starting):
```bash
# Your app runs free on Heroku Eco dynos
# MongoDB Atlas free tier (512MB)
# Total: $0/month
```

### When to upgrade:
- More than 1,000 hours/month usage → Upgrade Heroku
- More than 512MB data → Upgrade MongoDB
- Need 24/7 uptime → Paid dynos

---

## 🎯 CHECKLIST

- [ ] Heroku CLI installed
- [ ] Logged into Heroku
- [ ] App created on Heroku
- [ ] Environment variables set
- [ ] Code pushed to Heroku
- [ ] App running (check logs)
- [ ] Shopify URLs updated
- [ ] App installed on test store
- [ ] All pages working
- [ ] Orders can be created
- [ ] Mobile tested

---

## 📞 QUICK HELP

**Heroku not working?**
```bash
heroku help
heroku status
```

**MongoDB connection issues?**
- Check MongoDB Atlas Network Access
- Verify connection string format
- Test with MongoDB Compass

**Shopify installation issues?**
- Double-check API credentials
- Verify redirect URL exactly matches
- Check scopes are configured

**Need more help?**
- Read: SHOPIFY-DEPLOYMENT.md (detailed guide)
- Check: DEPLOYMENT-CHECKLIST.md (full checklist)
- Email: support@akzmarketing.com

---

## 🎉 SUCCESS!

If you've completed all steps:
✅ Your app is live on Heroku
✅ Shopify can install it
✅ You're processing COD orders

**Congratulations! You've successfully deployed COD Master Pro to Shopify! 🚀**

---

**Next steps:**
1. Test thoroughly
2. Add to more stores
3. Monitor performance
4. Gather feedback
5. Keep improving

**Built with ❤️ by YAGAMI - AKZ Marketing LLC**
