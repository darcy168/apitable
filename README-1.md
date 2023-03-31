## 本地编译打包流程
    mkdir -p /media/darcy/vms3/apitable-package-softs/nginx
    #上传 download.conf 和 gradle-7.5-bin.zip 文件到 /media/darcy/vms3/apitable-package-softs/nginx 目录下

    # 启动nginx
    docker run -itd --name ng -p 80:80 -p 443:443 -v /media/darcy/vms3/apitable-package-softs/nginx/:/etc/nginx/conf.d  nginx:1.23.4

    # 项目中搜索 distributionUrl= ，将需要的 gradle版本 都下载后放在 /media/darcy/vms3/apitable-package-softs/nginx, 并将 下载地址替换成 nginx 下载地址
    
    

