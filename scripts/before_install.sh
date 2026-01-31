#!/bin/bash
set -e

echo "Stopping existing backend container (if any)..."

docker rm -f 313530061217.dkr.ecr.us-east-1.amazonaws.com/ecommerce-backend

echo "Cleaning unused Docker images..."
docker system prune -af || true

cd /home/ubuntu/Ecommerce-backend-mern-main
rm -rf * .*
