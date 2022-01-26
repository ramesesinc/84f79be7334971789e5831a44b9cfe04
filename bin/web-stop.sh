#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`


## stop the web app containers 
cd $BASE_DIR/cloud-filipizen && docker-compose down

cd $BASE_DIR/filipizen && docker-compose down

cd $RUN_DIR
