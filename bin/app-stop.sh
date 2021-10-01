#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`

## stop the app server containers
cd $BASE_DIR/cloud-partner && docker-compose down

cd $BASE_DIR/cloud-epayment && docker-compose down

cd $BASE_DIR/cloud-obo2 && docker-compose down

cd $RUN_DIR
