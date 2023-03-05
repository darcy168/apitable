#!/bin/bash

rm -rf tmp
mkdir tmp

cp Dockerfile tmp/
cp canvas-v2.9.1-node-v93-linux-glibc-x64.tar.gz tmp/
cp -r ../../../gateway tmp/
cp -r script tmp/
cp ecosystem.config.js tmp/

cd tmp

docker build .

cd ../
rm -rf tmp





