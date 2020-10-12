#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`
cd $BASE_DIR/cloud-filipizen && docker-compose down
docker system prune -f
cd $BASE_DIR/cloud-filipizen && docker-compose up -d
cd $BASE_DIR/cloud-filipizen && docker-compose logs -f cloud-filipizen-server
