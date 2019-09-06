# Initial Installation

If you have completed the Couchbase deployment on Cloud Platform, the following steps is for you to start use it quikly

## Preparation

1. Get the **Internet IP** on your Cloud Platform
2. Check you **[Inbound of Security Group Rule](https://support.websoft9.com/docs/faq/tech-instance.html)** of Cloud Console to ensure the TCP:80 is allowed
3. Make a domain resolution on your DNS Console if you want to use domain for Couchbase

## Couchbase Installation Wizard

1. Using local Chrome or Firefox to visit the URL *http://domain name* or *http://Internet IP*, you will enter the register interface of Couchbase
![Couchbase初始化页面](https://libs.websoft9.com/Websoft9/DocsPicture/en/couchbase/couchbase-start-websoft9.png)

2. Create new Cluster and Administrator user, then go to next step    
![Couchbase new Cluster](https://libs.websoft9.com/Websoft9/DocsPicture/en/couchbase/couchbase-newcluster-websoft9.png)

3. Accept "Term & conditions", then configure it by click **Filish With Defaults** or other
![配置Couchbase](https://libs.websoft9.com/Websoft9/DocsPicture/en/couchbase/couchbase-accept-websoft9.png)

4. Go to Couchbase Dashboard  
![Couchbase Servers](https://libs.websoft9.com/Websoft9/DocsPicture/en/couchbase/couchbase-console-websoft9.png)

5. Click the **Servers** on the left memu, list all the servers in this cluster  
![Couchbase servers](https://libs.websoft9.com/Websoft9/DocsPicture/en/couchbase/couchbase-listservers-websoft9.png)

6. Click the  **Servers** on the left memu, then **Add User** to create new user
![Couchbase Add user](https://libs.websoft9.com/Websoft9/DocsPicture/en/couchbase/couchbase-adduser-websoft9.png)

7. Click the **Logs** on the left memu to view logs
![Couchbase logs](https://libs.websoft9.com/Websoft9/DocsPicture/en/couchbase/couchbase-logs-websoft9.png)

> More useful Couchbase guide, please refer to [Couchbase Documentation](https://docs.couchbase.com/server)

## Q&A

#### I can't visit the start page of Couchbase?

Your TCP:80 of Security Group Rules is not allowed so there no response from Chrome or Firefox

#### Can Couchbase Dashboard connect to a non-native database?

Yes
