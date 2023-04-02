## 本地编译打包流程
    mkdir -p /media/darcy/vms3/apitable-package-softs/nginx
    #上传 download.conf 和 gradle-7.5-bin.zip 文件到 /media/darcy/vms3/apitable-package-softs/nginx 目录下

    # 启动nginx
    docker run -itd --name ng -p 80:80 -p 443:443 -v /media/darcy/vms3/apitable-package-softs/nginx/:/etc/nginx/conf.d  nginx:1.23.4

    # 项目中搜索 distributionUrl= ，将需要的 gradle版本 都下载后放在 /media/darcy/vms3/apitable-package-softs/nginx, 并将 下载地址替换成 nginx 下载地址
    
    # 打包
    make install

    make build-docker








## 1、分模块打包说明

### 1.1、backend-server
    # 已调 build.gradle Maven仓库地址为本地仓库地址；
    make build-docker-backend-server

### 1.2、init-db
    make build-docker-init-db

### 1.3、openresty
    make build-docker-openresty

### 1.4、room-server、web-server

    # 这俩模块需要使用docker build方式打包，并且需要开启 docker 代理模式

    docker build --network host -f packaging/Dockerfile.room-server -t apitable/room-server:2023-03-31 .
    docker build --network host -f packaging/Dockerfile.web-server -t apitable/web-server:2023-03-31 .

### 1.5、web-server
    make build-docker-web-server

    