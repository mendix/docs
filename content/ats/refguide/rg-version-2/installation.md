---
title: "On-Premises Installation"
parent: "rg-version-2"
---

## General

ATS runs on top of Mendix 6. See Mendix for their system requirements: https://docs.mendix.com/refguide6/system-requirements.

## Hardware requirements / Hardware sizing

### Mendix Business Server
A recent CPU (minimal dual core, minimal 2 GHz), 4 GB of memory and a free disk space of 10 GB is recommended.

### Database Server
A recent CPU (minimal dual core, minimal 2 GHz), 4 GB of memory and a free disk space of 20 GB is recommended.

### Selenium Server(s)

 &#xfeff; | Standalone server | Grid hub | Grid Node 
-----|----|--------------|--------------
Minimal	| Recent CPU, 1GHz 2GB RAM	| Recent CPU, 1GHz 2GB RAM	| Recent CPU, 1GHz 2GB RAM
In addition per browser instance*	| 1 Core, 1GHz 500MB RAM | 200MHz 200MB RAM | 1 Core, 1GHz 500MB RAM

* Highly depends on the browser and on the application that is tested. The defined resources refer to medium sized applications.

## Software requirements

This chapter describes the software requirements for running ATS.

### Operating System

See [official documentation](https://world.mendix.com/display/refguide6/System+Requirements), section Server/Operating system. ATS itself has no requirements regarding the operating system.

### Java
See [official documentation](https://world.mendix.com/display/refguide6/System+Requirements), section Server/Java. ATS itself has no requirements regarding Java.

### Mendix Business Server
ATS requires Mendix business server, version 6.10.10.

### Database
See [official documentation](https://world.mendix.com/display/refguide6/System+Requirements), section Server/Database server. ATS itself has no requirements regarding the database.

### Selenium
Only the selenium server version that is delivered as part of the ATS installation is supported.

ATS Version | Supported Selenium version | Download |Required Java version
---|---|---|---
2.9	| 3.8.1 |	[Download here](http://selenium-release.storage.googleapis.com/3.8/selenium-server-standalone-3.8.1.jar) | JRE 8

### Chrome driver

Only the Chrome driver version that is delivered as part of the ATS installation is supported.

ATS Version	| Supported Chrome driver version | Download 
---|---|---
2.9 | 2.35 | [Download here](http://chromedriver.storage.googleapis.com/index.html?path=2.35/)

### Firefox (Gecko) driver

Only the Gecko driver version that is delivered as part of the ATS installation is supported.

ATS Version	| Supported Gecko driver version | Download 
---|---|---
2.9 | 0.19.1 | [Download here](https://github.com/mozilla/geckodriver/releases/tag/v0.19.1)

### Internet Explorer driver

Only the Internet Explorer driver version that is delivered as part of the ATS installation is supported.

ATS Version	| Supported Gecko driver version | Download 
---|---|---
2.9 | 2.53.1 | [Download here](http://selenium-release.storage.googleapis.com/index.html?path=2.53/)

### Browsers
The following browsers are supported to operate ATS (on their supported OS):

* Firefox 17 (ESR) or higher
* Google Chrome 22 or higher

## Web servers

A web server can be used to serve static content and proxy the dynamic content. A web server can be used to encrypt the communication using https.

Mansystems does not support web servers other than ad hoc assistance in getting the web server up and running and based on documented installations by Mendix. Perform the following steps to make ATS ready to use:
* https://world.mendix.com/display/howto40/Set+up+a+separate+Internet+Information+Services+server

When using Nginx, we recommend to change the following settings in the server section:

* keepalive_timeout 65000;
* client_max_body_size 64M;
* proxy_read_timeout 180s;