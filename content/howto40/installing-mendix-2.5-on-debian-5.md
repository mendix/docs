---
title: "Installing Mendix 2.5 on Debian 5"
category: "General"
---
## Installing Mendix 2.5 on Debian Lenny

This tutorial describes a basic installation of Mendix on Debian Lenny. In this example, the database server and the webserver are on one psychical machine; of course you can experiment to find the best solution in your situation. While Apache is one of the most webservers used today, we use Nginx instead because it's very lightweight. Because of this we recommend giving Nginx a try.

### Prerequisites

*   Installed Debian 5 Lenny operating system
*   Mendix release in .tar.gz format provided by Mendix
*   M2ee tools provided by Mendix
*   License key provided by Mendix

### Nginx From Backports

We use Nginx as webserver. To support IPv6, we install a backport from lenny-backports.

Add the following to /etc/apt/preferences:

```java
Package: nginx
Pin: release a=lenny-backports, o=Debian Backports
Pin-Priority: 991

```

Add the following to /etc/apt/sources.list if you didn't do so previously.

```java
deb http://ftp.nl.debian.org/backports.org/ lenny-backports main

```

### Install External Packages

*   Nginx
*   sun-java6-jre
*   oidentd
*   sqlite3
*   unzip
*   bzip2
*   python-simplejson
*   python-yaml
*   python-simplejson
*   python-httplib2
*   syslog-ng
*   postgresql-8.3

After these applicationa have been installed we have a Webserver (Nginx), Database (PostgreSQL) and Java 6\. Now the server can be configured to run Mendix Applications.

### Create XAS Specific User and Groups

```java
addgroup --system mxadmin
adduser --system --ingroup mxadmin --shell /bin/bash mxdeploy
addgroup xas2

```

### Public Key Authentication

If you are using public key authentication instead of passwords, you need to change /etc/ssh/sshd_config such that 'mxadmin' and 'xas2' are also among the allowed groups.

```java
AllowGroups root mxadmin xas2

```

### Configure the Server

There are some folders that need to be created. The first folder is the location where the logfiles will be saved. The second folder is the location where Mendix Runtime will be extracted.

```java
mkdir -p /var/log/xas2/
mkdir -p /usr/local/share/mendix/
mkdir -p /etc/m2ee/

```

Create example project directory structure:

```java
mkdir -p /srv/mxinstances/example/data/database/
mkdir -p /srv/mxinstances/example/data/files/
mkdir -p /srv/mxinstances/example/data/model-upload/
mkdir -p /srv/mxinstances/example/data/tmp/
mkdir -p /srv/mxinstances/example/model/
mkdir -p /srv/mxinstances/example/web/

```

Add the following to the mxdeploy user .bashrc so that when logging in as mxdeploy so you don't have to change the folder anymore.

```java
change /home/mxdeploy/.bashrc
cd /usr/local/share/mendix/

```

Change /etc/syslog-ng/syslog-ng.conf and add:

```java
# Logging from XAS
filter f_local6 { facility(local6); };

### XAS ###
filter f_xas2 { facility(local6) and program("^(.*)$"); };
destination df_xas2 { file("/var/log/xas2/$1.log" group(xas2) perm(0640)); };
log { source(s_all); filter(f_xas2); destination(df_xas2); };

```

Create /etc/m2ee/m2eerc and add:

```java
mxnode:
 # mxjar_repo, containing directories with version-numbering, which contain
 # mxruntime and m2ee-server directories with java libraries
 mxjar_repo: /usr/local/share/mendix/

```

### Add kernel.shmmax for Postgresql

For PostgreSQL we need to add kernel.shmmax to /etc/sysctl.conf. With sysctl -p you can list the current settings of kernel variables.

```java
kernel.shmmax = 1073741824

```

### Configure Postgresql

Change /etc/postgresql/8.3/main/pg_hba.conf and add if you want to use ident authentication:

```java
# IPv4 local connections:
host    sameuser    all         127.0.0.1/32          ident sameuser
# IPv6 local connections:
host    sameuser    all         ::1/128               ident sameuser

```

### Change Owner of xas Directories

The 'mxdeploy' user is used to extract new Mendix releases. These Mendix releases are extracted in the /usr/local/share/mendix/ folder.

```java
chown mxdeploy:mxadmin /home/mxdeploy -R
chown mxdeploy:mxadmin /usr/local/share/mendix/

```

Now it's possible to upload the new Mendix release. After uploading the tar.gz file as the 'mxdeploy' user to the /usr/local/share/mendix/ folder we can extract it by issuing the command 'tar xvf <filename>'. Afther this has been done you can remove the tar.gz file.

### Create Application User

```java
MXURL=example.mendix.nl
MXPORT=????
MXADMPORT=????
MXADMPASS=???? -> Please be sure to use strong passwords
MXUSER=example
MXPROJECT="Example Project"

```

Add an application user in the 'xas2' group. As you can see we don't use passwords for users, and use Public Key authentication instead. We recommend you do the same.

```java
adduser --disabled-password --ingroup xas2 --gecos "$MXPROJECT,,," $MXUSER

```

### Create Database and Database User

```java
create database example;
create role example login connection limit ????;

```

### Change Application User

Change /home/$MXUSER/.bashrc

Add:

```java
alias cdm="cd /srv/mxinstances/$LOGNAME"
export PGHOST=localhost
export PGPORT=5432

if [ -d /srv/mxinstances/$LOGNAME ]
then
echo "Redirecting you to /srv/mxinstances/$LOGNAME"
cd /srv/mxinstances/$LOGNAME
fi

```

### Change Variables in Configuration File

Change /home/$MXUSER/.m2eerc with the variables that ahve just been created.

```java
sed -i "s/_MXUSER/$MXUSER/;s/MXURL/$MXURL/;s/MXPORT/$MXPORT/;s/MXADMPORT/$MXADMPORT/;s/MXADMPASS/$MXADMPASS/;s/MXPROJECT_/$MXPROJECT/" /home/$MXUSER/.m2eerc

```

Now we have to create a new project folder. There is already an example folder located in /srv/mxinstances/ ; we can can use a copy of this. By entering the following commands, a copy of the /srv/mxinstances/example folder is created and the owner of the new folders is changed to the application user.

```java
cd /srv/mxinstances/
cp -a example $MXUSER
chown $MXUSER:xas2 $MXUSER/* -R
chmod 700 $MXUSER/model $MXUSER/data

```

### Automatic start your application when the server boots

```java
Command: crontab -u $MXUSER -e
Add: @reboot /usr/bin/m2ee start

```

### Install M2ee tools

Upload the .deb file provided by Mendix to the server and install the .deb package by issuing dpkg -i m2eetools.deb

### Nginx configuration

Now we are going to configure Nginx. The wiki page of Nginx is wiki.nginx.org. In this example we will show some basic configuration. In Apache the following is called virtualhost.

```java
server {
        listen [::]:443;
        listen 0.0.0.0:443;
        server_name example.mendix.nl;
        root /srv/mxinstances/example/web/;
        location = /xas/ {
                proxy_pass http://127.0.0.1:$MXPORT/xas/;
        }
        location = /file {
                proxy_pass http://127.0.0.1:$MXPORT/file;
                client_max_body_size 20M;
        }
}

```

Gzip configuration is shown here. Gzip is a very good method to lower used bandwidth. To see what this configuration means you should take a look at [http://wiki.nginx.org/NginxHttpGzipModule](http://wiki.nginx.org/NginxHttpGzipModule) and [http://wiki.nginx.org/NginxHttpGzipStaticModule](http://wiki.nginx.org/NginxHttpGzipStaticModule).

```java
http {
        //STUFF + MORE STUFF

        gzip on;
        gzip_proxied any;
        gzip_disable "MSIE [1-6]";
        gzip_types application/json;
        gzip_static on;
}

```

### Install has been completed

Congratulations! Mendix has been installed on your system.
