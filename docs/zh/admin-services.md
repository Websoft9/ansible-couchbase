# 服务启停

使用由Websoft9提供的Couchbase部署方案，可能需要用到的服务如下：

### Couchbase Server

```shell
sudo systemctl start couchbase-server
sudo systemctl stop couchbase-server
sudo systemctl restart couchbase-server
sudo systemctl status couchbase-server
```

### Nginx

```shell
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx
sudo systemctl status nginx
```