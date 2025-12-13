#!/bin/bash

echo "=================================================="
echo "   COD MASTER PRO - Professional COD App Demo   "
echo "=================================================="
echo ""
echo "Starting local development server..."
echo ""
echo "🚀 App will be available at:"
echo "   http://localhost:8000"
echo ""
echo "📚 Features included:"
echo "   ✓ Advanced Form Builder"
echo "   ✓ Quantity Offers & Discounts"
echo "   ✓ Upsells & Downsells"
echo "   ✓ Order Management"
echo "   ✓ Integrations Hub"
echo "   ✓ Analytics Dashboard"
echo "   ✓ Comprehensive Settings"
echo ""
echo "Press Ctrl+C to stop the server"
echo "=================================================="
echo ""

cd /mnt/user-data/outputs/cod-master-pro
python3 -m http.server 8000
