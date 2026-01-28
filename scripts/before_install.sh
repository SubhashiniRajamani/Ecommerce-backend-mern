#!/bin/bash
echo "Stopping old app"
pm2 stop all

echo "Deleting old node_modules"
cd /home/ubuntu/Ecommerce-backend-mern-main
rm -rf *
