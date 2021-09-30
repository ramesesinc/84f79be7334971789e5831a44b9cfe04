#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`
cd $BASE_DIR/cloud-sms && docker-compose down
cd $BASE_DIR/cloud-sms && docker-compose up -d
cd $BASE_DIR/cloud-sms && docker-compose logs -f
cd $RUN_DIR
