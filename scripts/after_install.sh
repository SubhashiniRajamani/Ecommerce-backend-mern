#!/bin/bash
cd /home/ubuntu/Ecommerce-backend-mern-main
echo "Installing dependencies"
npm install --legacy-peer-deps
pm2 start 'node app.js'
