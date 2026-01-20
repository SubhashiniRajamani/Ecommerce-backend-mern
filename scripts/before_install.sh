#!/bin/bash
echo "Stopping old app"
pm2 stop all || true

echo "Deleting old node_modules"
rm -rf /home/ubuntu/Ecommerce-backend-mern-main/node_modules
