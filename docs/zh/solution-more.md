# 更多...

下面每一个方案，都经过实践证明行之有效，希望能够对你有帮助

## 域名绑定

绑定域名的前置条件是：Couchbase已经可以通过解析后的域名访问。  

虽然如此，从服务器安全和后续维护考量，**域名绑定**步骤不可省却  

Couchbase 域名绑定操作步骤：

1. 登录云服务器
2. 修改 [Nginx虚拟机主机配置文件](/zh/stack-components.md#nginx)，将其中的 **server_name** 项的值 *_* 修改为你的域名
   ```text
   server {
      listen 80;
      server_name    _; # 改为自定义域名
   ...
   ```
3. 保存配置文件，重启[Nginx服务](/zh/admin-services.md#nginx)

## 命令操作Couchbase

通过如下几个步骤来使用命令操作 Couchbase

1. 通过 SSH 连接到服务器
2. 进入 *opt/couchbase/bin* 目录
3. 连接到 Couchbase 数据库实例（示例连接字符串）： *./cbq -u Administrator -p admin123 -engine=http:127.0.0.1:8091/*
   ![Couchbase Connect](https://libs.websoft9.com/Websoft9/DocsPicture/en/couchbase/couchbase-command-websoft9.png)

   - Administrator is username
   - admin123 is password

4. 连接成功

## 管理集群

暂无

## CLI

cli工具存放路径:

* /opt/couchbase/bin
* /opt/couchbase/bin/install 
* /opt/couchbase/bin/tools

提供 cbbackupmgr,cbbackup,cbepctl,cbrestore,cbrestore,cbstats 等

