# Parameters

The Couchbase deployment package contains a sequence software (referred to as "components") required for Couchbase to run. The important information such as the component name, installation directory path, configuration file path, port, version, etc. are listed below.

## Path

### Couchbase

Couchbase Server installation directory: */opt/couchbase*  
Couchbase Server configuration file: */opt/couchbase/etc/couchbase/static_config*  
Couchbase Server data directory: */opt/couchbase/var/lib/couchbase*  
Couchbase Server logs file: */opt/couchbase/var/lib/couchbase/logs*

### Nginx

Nginx vhost configuration file: */etc/nginx/conf.d/default.conf*  
Nginx main configuration file: */etc/nginx/nginx.conf*  
Nginx logs file: */var/log/nginx/*

## Ports

These Ports is need when use Couchbase, refer to [Safe Group Setting on Cloud Console](https://support.websoft9.com/docs/faq/tech-instance.html)

| Name | Number | Use |  Necessity |
| --- | --- | --- | --- |
| HTTP | 80 | HTTP requests for Couchbase by Nginx proxy | Required |
| HTTPS | 443 | HTTPS requests Couchbase by Nginx proxy | Optional |
| Couchbase | 8091 | Remote connect Couchbase | Optional |

## Version

You can see the version from product page of Marketplace. However, after being deployed to your server, the components will be automatically updated, resulting in a certain change in the version number. Therefore, the exact version number should be viewed by running the command on the server:

```shell
```shell
# Linux Version
lsb_release -a

# Nginx version:
nginx -v

# cat Couchbase version
cat /opt/couchbase/VERSION.txt
```
