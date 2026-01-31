#!/bin/bash
set -e

echo "Stopping existing backend container (if any)..."

docker stop ecommerce-backend-container || true
docker rm ecommerce-backend-container || true

echo "Cleaning unused Docker images..."
docker system prune -af || true

cd /home/ubuntu/Ecommerce-backend-mern-main
rm -rf * .*
