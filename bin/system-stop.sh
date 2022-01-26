#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`

cd $BASE_DIR/nginx && docker-compose down

cd $BASE_DIR/rabbitmq && docker-compose down

cd $BASE_DIR/redis && docker-compose down

cd $BASE_DIR/cloud-gdx-node && docker-compose down

cd $BASE_DIR/cloud-jasper-node && docker-compose down

cd $RUN_DIR
