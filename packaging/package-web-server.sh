#!/bin/bash

#rm -rf root-server
#mkdir root-server
#
#cp Dockerfile.root-server root-server/
#cp -r ../gateway root-server/
#
#cd root-server
#
#docker build -f Dockerfile.root-server .
#
#cd ../
#rm -rf root-server


cd ../

sudo docker build -f packaging/Dockerfile.web-server .


