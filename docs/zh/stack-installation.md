# 初始化安装

在云服务器上部署 Couchbase 预装包之后，请参考下面的步骤快速入门。

## 准备

1. 在云控制台获取您的 **服务器公网IP地址** 
2. 在云控制台安全组中，检查 **Inbound（入）规则** 下的 **TCP:80 和 8091** 端口是否开启
3. 若想用域名访问 Couchbase，请先到 **域名控制台** 完成一个域名解析

## Couchbase 安装向导

1. 使用本地电脑的 Chrome 或 Firefox 浏览器访问网址：*http://域名* 或 *http://Internet IP*, 进入初始化界面  
![Couchbase初始化页面](https://libs.websoft9.com/Websoft9/DocsPicture/en/couchbase/couchbase-start-websoft9.png)

2. 创建一个新集群和管理员账号，然后进去下一步  
![Couchbase 创建管理员](https://libs.websoft9.com/Websoft9/DocsPicture/en/couchbase/couchbase-newcluster-websoft9.png)

3. 接受许可协议，建议点击“Filish With Defaults”完成配置  
![配置Couchbase](https://libs.websoft9.com/Websoft9/DocsPicture/en/couchbase/couchbase-accept-websoft9.png)

4. 进入 Couchbase Dashboard 界面
![Couchbase Servers](https://libs.websoft9.com/Websoft9/DocsPicture/en/couchbase/couchbase-console-websoft9.png)

5. 点击左侧菜单下的【Servers】，列出已经连接的数据库服务  
![配置Couchbase](https://libs.websoft9.com/Websoft9/DocsPicture/en/couchbase/couchbase-listservers-websoft9.png)

6. 依次点击：【Security】>【Add User】 创建新用户
![配置Couchbase](https://libs.websoft9.com/Websoft9/DocsPicture/en/couchbase/couchbase-adduser-websoft9.png)

7. 点击左侧菜单下的【Logs】，查看日志  
![配置Couchbase](https://libs.websoft9.com/Websoft9/DocsPicture/en/couchbase/couchbase-logs-websoft9.png)


> 需要了解更多Couchbase的使用，请参考官方文档：[Couchbase Server Documentation](https://docs.couchbase.com/server)

## 常见问题

#### 浏览器打开IP地址，无法访问 Couchbase（白屏没有结果）？

您的服务器对应的安全组80端口没有开启（入规则），导致浏览器无法访问到服务器的任何内容

#### Couchbase Dashboard 是否可以连接非本机的数据库？

可以
