#!/bin/bash
set -e

echo "Stopping existing backend container (if any)..."

docker stop ecommerce-backend || true
docker rm ecommerce-backend || true

echo "Cleaning unused Docker images..."
docker system prune -af || true
