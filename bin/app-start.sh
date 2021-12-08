#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`

## start the app server containers
cd $BASE_DIR/cloud-jasper && docker-compose up -d

cd $BASE_DIR/cloud-partner && docker-compose up -d

cd $BASE_DIR/cloud-epayment && docker-compose up -d

cd $BASE_DIR/cloud-obo2 && docker-compose up -d

cd $RUN_DIR
