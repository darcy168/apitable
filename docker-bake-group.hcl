group "default" {
  targets = ["backend-server", "room-server", "web-server", "init-db", "openresty"]
}

# 打包成功的模块
backend-server
openresty
init-db

room-server", "web-server", "", ""