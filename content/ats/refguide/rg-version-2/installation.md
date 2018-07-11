---
title: "On-Premises Installation"
parent: "rg-version-2"
---

## 1 General

ATS runs on top of Mendix 6. For details on system requirements, see [System Requirements](/refguide6/system-requirements).

## 2 Hardware Requirements & Hardware Sizing

### 2.1 Mendix Business Server

A recent CPU (minimal dual core, minimal 2 GHz), 4 GB of memory, and 10 GB of free disk space are recommended.

### 2.2 Database Server

A recent CPU (minimal dual core, minimal 2 GHz), 4 GB of memory, and 20 GB of free disk space are recommended.

### 2.3 Selenium Server(s)

 &#xfeff; | Standalone Server | Grid Hub | Grid Node 
-----|----|--------------|--------------
Minimal	| Recent CPU, 1GHz 2GB RAM	| Recent CPU, 1GHz 2GB RAM	| Recent CPU, 1GHz 2GB RAM
In addition per browser instance*	| 1 Core, 1GHz 500MB RAM | 200MHz 200MB RAM | 1 Core, 1GHz 500MB RAM

* This highly depends on the browser and on the application that is tested. The defined resources refer to medium-sized applications.

## 3 Software Requirements

This section describes the software requirements for running ATS.

### 3.1 Operating System

See [official documentation](https://world.mendix.com/display/refguide6/System+Requirements), section Server/Operating system. ATS itself has no requirements regarding the operating system.

### 3.2 Java

See [official documentation](https://world.mendix.com/display/refguide6/System+Requirements), section Server/Java. ATS itself has no requirements regarding Java.

### 3.3 Mendix Business Server

ATS requires Mendix business server, version 6.10.10.

### 3.4 Database

See [official documentation](https://world.mendix.com/display/refguide6/System+Requirements), section Server/Database server. ATS itself has no requirements regarding the database.

### 3.5 Selenium

Only the selenium server version that is delivered as part of the ATS installation is supported.

ATS Version | Supported Selenium version | Download |Required Java version
---|---|---|---
2.9	| 3.8.1 |	[Download here](http://selenium-release.storage.googleapis.com/3.8/selenium-server-standalone-3.8.1.jar) | JRE 8

### 3.6 Chrome Driver

Only the Chrome driver version that is delivered as part of the ATS installation is supported.

ATS Version	| Supported Chrome driver version | Download 
---|---|---
2.9 | 2.35 | [Download here](http://chromedriver.storage.googleapis.com/index.html?path=2.35/)

### 3.7 Firefox (Gecko) Driver

Only the Gecko driver version that is delivered as part of the ATS installation is supported.

ATS Version	| Supported Gecko driver version | Download 
---|---|---
2.9 | 0.19.1 | [Download here](https://github.com/mozilla/geckodriver/releases/tag/v0.19.1)

### 3.8 Internet Explorer Driver

Only the Internet Explorer driver version that is delivered as part of the ATS installation is supported.

ATS Version	| Supported Gecko driver version | Download 
---|---|---
2.9 | 2.53.1 | [Download here](http://selenium-release.storage.googleapis.com/index.html?path=2.53/)

### 3.9 Browsers

The following browsers are supported to operate ATS (on their supported OS):

* Firefox 17 (ESR) or higher
* Google Chrome 22 or higher

## 4 Web Servers

A web server can be used to serve static content and proxy the dynamic content. A web server can be used to encrypt the communication using https.

Mansystems does not support web servers other than ad hoc assistance in getting the web server up and running and based on documented installations by Mendix. Perform the following steps to make ATS ready to use:
* https://world.mendix.com/display/howto40/Set+up+a+separate+Internet+Information+Services+server

When using Nginx, we recommend to change the following settings in the server section:

* keepalive_timeout 65000;
* client_max_body_size 64M;
* proxy_read_timeout 180s;
