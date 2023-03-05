#!/bin/bash

rm -rf backend-server
mkdir backend-server

cp Dockerfile.backend-server backend-server/
cp -r ../backend-server backend-server/

cd backend-server

docker build -f Dockerfile.backend-server .

cd ../
rm -rf backend-server





