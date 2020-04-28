#Couchbase Notes

组件名称：Couchbase 
安装文档：https://docs.couchbase.com/server/6.5/install/rhel-suse-install-intro.html  
配置文档:   无
支持平台： Debian家族 | RHEL家族 | Windows |macOS |Docker  

责任人：zxc

## 概要
Couchbase是CouchDB和MemBase的合并。而memBase是基于Memcached的。因此couchbase联合了couchbase的简单可靠和memcached的高性能，以及membase的可扩展性。

## 环境要求

* 程序语言：  Erlang语言
* 应用服务器：Couchbase-server
* 数据库：couchbase
* 依赖组件：无
* 其他：

## 安装说明

官方建议从红帽仓库直接下载Couchbase源码包,再安装其元软件,然后yum可以使用它来安装Couchbase以及所有依赖关系。

下面基于不同的安装平台，分别进行安装说明。

### CentOS

```shell
# 下载Couchbase源码包
curl -O https://packages.couchbase.com/releases/couchbase-release/couchbase-release-1.0-6-x86_64.rpm

# 安装元软件包
sudo rpm -i ./couchbase-release-1.0-6-x86_64.rpm

#1.安装最新版Couchbase-server
sudo yum install couchbase-server

#2.列出可用版本
yum list --showduplicates couchbase-server

#指定安装版本并安装
sudo yum install couchbase-server-version-build
sudo yum install couchbase-server-6.0.0-1693

#启动与开机自启
systemctl  restart  couchbase
systemctl enable   couchbase

#永久开放防火墙端口并重启(*以8091端口为例)
firewall-cmd --permanent  --add-port=8091/tcp
firewall-cmd --reload
```

## 路径

* 程序路径：/opt/couchbase/bin
* 日志路径：/opt/couchbase/var/lib/couchbase/logs  
* 配置文件路径：  无
* 其他...

##配置

*通过web控制台页面配置

## 服务

本项目安装后自动生成：couchbase 服务

备注：如果开机没有服务，程序无法运行的情况下，需要自行编写服务

服务的模板如下：

```
[Unit]
Description=Redmine
After=nginx.service
[Service]
Environment=RAILS_ENV=production
Type=simple
WorkingDirectory=/data/wwwroot/redmine
ExecStart=/usr/local/bin/puma -b tcp://127.0.0.1:9292 -e production 
User=redmine
[Install]
WantedBy=multi-user.target
```

## 环境变量
无

## 版本号

通过如下的命令获取主要组件的版本号: 

```
# Check Couchbase version
rpm -qa |grep couchbase
```

## 常见问题

#### 有没有管理控制台？

有,浏览器输入http://ip地址:8901即可进入管理控制台,需自行输入数据库名/用户名/密码

#### 本项目需要开启哪些端口？

| item      | port  |
| --------- | ----- |
|Web Administration | 8091 |
| Couchbase API      | 8092 |
| Internal Cluster       | 11209|
| Internal Cluster       | 11210|
| Client interface      | 11211|
|Erlang Port Mappe | 4369 |
|Node data exchange | 21100 to 21199 |

#### 有没有CLI工具？
有,cli工具存放路径:/opt/couchbase/bin, /opt/couchbase/bin/install, and /opt/couchbase/bin/tools
提供 cbbackupmgr,cbbackup,cbepctl,cbrestore,cbrestore,cbstats 这些工具


## 日志

* 2020-04-16完成CentOS安装研究
