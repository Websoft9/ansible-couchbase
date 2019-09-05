# 初始化安装

在云服务器上部署 Couchbase 预装包之后，请参考下面的步骤快速入门。

## 准备

1. 在云控制台获取您的 **服务器公网IP地址** 
2. 在云控制台安全组中，检查 **Inbound（入）规则** 下的 **TCP:8091** 端口是否开启
3. 若想用域名访问 Couchbase，请先到 **域名控制台** 完成一个域名解析

## Couchbase 安装向导

1. 使用本地电脑的 Chrome 或 Firefox 浏览器访问网址：*http://域名:8091* 或 *http://Internet IP:8091*, 就进入了软件的引导首页
![Couchbase初始化页面](https://libs.websoft9.com/Websoft9/DocsPicture/en/couchbase/couchbase-start-websoft9.png)

2. 软件的加载速度比较慢，耐心等待1-3分钟，直至出现如下的界面。
![开始安装Couchbase](https://libs.websoft9.com/Websoft9/DocsPicture/en/couchbase/couchbase-newcluster-websoft9.png)

3. 点击“让我们开始吧”，接下来首先设置登录账号，完成后进入下一步
4. 添加你的数据：可以选择使用的数据类型来连接一个需要分析的外部数据库，如果没有也可以点击“我之后再添加”，这样系统会默认给 Couchbase 增加一个H2演示数据
![配置Couchbase](https://libs.websoft9.com/Websoft9/DocsPicture/en/couchbase/couchbase-accept-websoft9.png)

4. 添加你的数据：可以选择使用的数据类型来连接一个需要分析的外部数据库，如果没有也可以点击“我之后再添加”，这样系统会默认给 Couchbase 增加一个H2演示数据
![配置Couchbase](https://libs.websoft9.com/Websoft9/DocsPicture/en/couchbase/couchbase-console-websoft9.png)

5. ddd
![配置Couchbase](https://libs.websoft9.com/Websoft9/DocsPicture/en/couchbase/couchbase-listservers-websoft9.png)

6. 增加用户
![配置Couchbase](https://libs.websoft9.com/Websoft9/DocsPicture/en/couchbase/couchbase-adduser-websoft9.png)

7. log
![配置Couchbase](https://libs.websoft9.com/Websoft9/DocsPicture/en/couchbase/couchbase-logs-websoft9.png)


> 需要了解更多Couchbase的使用，请参考官方文档：[Couchbase Server Documentation](https://docs.couchbase.com/server)

## 常见问题

#### 浏览器打开IP地址，无法访问 Couchbase（白屏没有结果）？

您的服务器对应的安全组80端口没有开启（入规则），导致浏览器无法访问到服务器的任何内容

#### 本部署包采用的哪个数据库来存储 Couchbase 数据？

是MySQL
