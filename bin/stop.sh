#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`
cd $BASE_DIR/filipizen && docker-compose down
cd $BASE_DIR/cloud-epayment && docker-compose down
cd $BASE_DIR/cloud-partner && docker-compose down
cd $BASE_DIR/cloud-obo && docker-compose down
cd $RUN_DIR
docker system prune -f
