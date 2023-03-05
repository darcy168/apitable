#!/bin/bash

rm -rf openresty
mkdir openresty

cp Dockerfile.openresty openresty/
cp -r ../gateway openresty/

cd openresty

docker build -f Dockerfile.openresty .

cd ../
rm -rf openresty





