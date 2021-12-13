#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`

## start the system containers
cd $BASE_DIR/nginx && docker-compose -f docker-compose.yml -f docker-compose-private.yml up -d

cd $BASE_DIR/rabbitmq && docker-compose up -d

cd $BASE_DIR/redis && docker-compose up -d

cd $BASE_DIR/cloud-gdx-node && docker-compose up -d


## start the app server containers
cd $BASE_DIR/cloud-jasper && docker-compose up -d

cd $BASE_DIR/cloud-partner && docker-compose up -d

cd $BASE_DIR/cloud-epayment && docker-compose up -d

cd $BASE_DIR/cloud-obo2 && docker-compose up -d


## start the web app containers 
cd $BASE_DIR/cloud-filipizen && docker-compose up -d

## cd $BASE_DIR/filipizen && docker-compose up -d
