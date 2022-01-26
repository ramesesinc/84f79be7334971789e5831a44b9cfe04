#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`
cd $BASE_DIR/cloud-epayment && docker-compose down
cd $BASE_DIR/cloud-epayment && docker-compose up -d
cd $BASE_DIR/cloud-epayment && docker-compose logs -f cloud-epayment-server
