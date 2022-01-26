#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`

## start the web app containers 
cd $BASE_DIR/cloud-filipizen && docker-compose up -d

## cd $BASE_DIR/filipizen && docker-compose up -d

cd $RUN_DIR
