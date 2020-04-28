# More

Each of the following solutions has been proven to be effective and We hope to be helpful to you.

## Domain binding

The precondition for binding a domain is that Couchbase can accessed by domain name.

Nonetheless, from the perspective of server security and subsequent maintenance considerations, the **Domain Binding** step cannot be omitted.

Couchbase domain name binding steps:

1. Connect your Cloud Server
2. Modify [Nginx vhost configuration file](/stack-components.md#nginx), change the **server_name**'s value *_* to your domain name
   ```text
   server {
      listen 80;
      server_name    _; # Change to a your domain name
   ...
   ```
3. Save it and restart [Nginx Service](/admin-services.md#nginx)

## Use Command

You can use command to manage Couchbase

1. Use SSH to connect instance
2. CD to *opt/couchbase/bin*
3. Connect Couchbase by the your String *./cbq -u Administrator -p admin123 -engine=http:127.0.0.1:8091/*
   ![Couchbase Connect](https://libs.websoft9.com/Websoft9/DocsPicture/en/couchbase/couchbase-command-websoft9.png)

   - Administrator is username
   - admin123 is password

4. Connect successful

## Manage Cluster

Coming soon

## CLI

CouchBase provided CLI for user to manage, you can find them from these directory

* /opt/couchbase/bin
* /opt/couchbase/bin/install 
* /opt/couchbase/bin/tools

`cbbackupmgr,cbbackup,cbepctl,cbrestore,cbrestore,cbstats`
