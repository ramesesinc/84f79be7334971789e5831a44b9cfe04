#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`

cd $BASE_DIR/nginx && docker-compose up -d

cd $BASE_DIR/rabbitmq && docker-compose up -d

cd $BASE_DIR/redis && docker-compose up -d

cd $BASE_DIR/cloud-gdx-node && docker-compose up -d

cd $BASE_DIR/cloud-jasper-node && docker-compose up -d

cd $RUN_DIR
