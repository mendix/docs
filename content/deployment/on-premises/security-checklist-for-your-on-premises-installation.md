---
title: "Implement Security for Your On-Premises Installation"
category: "On-Premises"
tags: []
---

## 1 Introduction

This how-to serves as a checklist for implementing security for your on-premises installation.

**This how-to will teach you how to do the following:**

* Use a Mendix version containing the lasteset security patches
* Configure file system access
* Use an HTTP reverse proxy with SSL support
* Configure your firewall

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Use a Mendix version containing the latest security patches
    * If your app runs in the Mendix Cloud and uses Mendix version 3.3.3, 4.3.0, or higher, it will automatically comply with this checklist once it is deployed

## 3 Using an Unprivileged Dedicated User Account for Every Application

For every Mendix application you run on a server, use a separate unprivileged operating system user account. Never run an application using Administrator or root permissions. Under Windows, only the Windows Service Console itself has to run under a privileged account. Never configure this account as service user account for the applications.

## 4 Configuring File System Access

Make sure the separate unprivileged user account is the only user that has read and/or write permissions on the data (files, database, etc.) and the model directory in your project location. User accounts used for different Mendix applications should never be able to read each other's files or configuration. An exception to this is the public content in the web directory of the project, which does not need to be protected, so it can be read and directly served by a separate web server.

## 5 Using a HTTP Reverse Proxy with SSL Support

Configure a reverse proxy (for example, Nginx, IIS, or Apache) as close to the application process as possible that implements SSL on the HTTP connection. This is so users using a web browser will connect to the application via the reverse proxy, using a `https://` URL. Make sure the correct certificates are in place that match the URL being used and that are either recognized by the certificate authorities present in modern web browsers or by an internal certificate authority of your company that has been distributed to the web browsers of all your users.

On the reverse proxy, which acts as the SSL termination point, insert the `X-Forwarded-Scheme` HTTP header with a value set to `https` into the requests that are sent to the Mendix application. This will communicate to the Mendix Runtime that the user is using the application over HTTPS and will set the secure flag on session cookies. When the secure flag on session cookies is not set, browsers will also send cookies when trying to connect over a normal HTTP connection. So, when secure is not set on the cookies, or when only implementing a redirect to HTTPS on a normal HTTP port, session cookies will be sent in the clear over the network. The `X-Forwarded-Scheme` request header has to be inserted at the reverse proxy, because it is the only way the Mendix Runtime will automatically detect the use of HTTPS.

## 6 Configuring Your Firewall

Make sure that when configuring firewall rules, it is impossible to directly connect to the application process (for example, on port 8000), except for the reverse proxy. End-users or attackers should not be able to circumvent using `https` by directly connecting to the application port. 

You are required to explicitly configure the application to be able to connect from the network instead of only at the local server.

## 7 Letting the HTTP Reverse Proxy Serve Static Content

Mendix strongly recommendeds configuring the reverse proxy to directly serve static content from the `web` directory on the root location of the application URL and the Mendix client system (located in the correct version to be used of the installed Mendix runtime distribution) on `/mxclientsystem`. The application process itself should only handle dynamic content (like the `/xas/` and `/ws/` sub-URLs).

## 8 Securing Access to the Admin Port (for m2ee-tools and Windows Service Console Access)

Make sure that when configuring firewall rules, it's not possible to connect to the `Adminport` of the Mendix application process from any other location than where administrative tools like m2ee-tools or the Windows Service Console are used. In most situations, this will mean that the port can only be reachable on the local host, and all external access is denied. If allowing access from the network, keep in mind that communication is not secured using SSL, so it cannot be used on networks that cannot be fully trusted. 

The admin port will by default only allow connections from the local host. In case you want to connect from the network, this has to be explicitly configured.

Choose a strong password to protect the administrative interface running on the admin TCP port. Set this password to a long random string (when using the Windows Service Console, this is automatically done.) It is not used manually anywhere, and it is only used in the background by administrative tools like m2ee-tools and the Windows Service Console to be able to connect back to the Mendix application after it has been started for administrative tasks.

## 9 Do Not Connect to a Production Database Using the Modeler

NEVER use the Mendix Modeler to directly connect to a production database (for example, by using an SSH tunnel to the database or the Modeler on a Windows server). Because the Modeler is always running in development mode, it will instantaneously reset the password of the "admin user," which is defined in the Modeler to its development default. This likely means there will be an "MxAdmin" user with a password set to "1" (or this account will be created when it does not exist).

## 10 Related Content

* [How to Restore a SQL Server Database](restoring-a-sql-server-database)
* [How to Troubleshoot an SQL Server](troubleshooting-sql-server)
* [How to Set Up Mendix SQL Maintenance Plans](mendix-sql-maintenance-plans)
* [How to Set Up a New SQL Server Database](setting-up-a-new-sql-server-database)
* [How to Set Up a SQL Server User](setting-up-a-sql-server-user)
* [How to Deploy Mendix on Microsoft Windows](deploy-mendix-on-microsoft-windows)
* [How to Install Mendix on Debian GNU Linux](installing-mendix-on-debian-gnu-linux)
* [How to Install Mendix on RedHat and CentOS](installing-mendix-on-redhat-and-centos)
