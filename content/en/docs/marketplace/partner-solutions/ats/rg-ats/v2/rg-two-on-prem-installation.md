---
title: "On-Premises Installation"
url: /appstore/partner-solutions/ats/rg-two-on-prem-installation/
description: "Describes installation requirements."
---

## Introduction

ATS runs on top of Mendix 6. On-premises is a deployment option for ATS. 

## Hardware Requirements and Hardware Sizing

### Mendix Business Server

A recent CPU (minimal dual core, minimal 2 GHz), 4 GB of memory, and 10 GB of free disk space are recommended.

### Database Server

A recent CPU (minimal dual core, minimal 2 GHz), 4 GB of memory, and 20 GB of free disk space are recommended.

### Selenium Server (or Servers)

 &#xfeff; | Standalone Server | Grid Hub | Grid Node 
-----|----|--------------|--------------
Minimal    | Recent CPU, 1 GHz 2 GB RAM    | Recent CPU, 1 GHz 2 GB RAM    | Recent CPU, 1 GHz 2 GB RAM
In addition per browser instance ¹    | 1 Core, 1 GHz 500 MB RAM | 200 MHz 200 MB RAM | 1 Core, 1 GHz 500 MB RAM

¹ This highly depends on a browser and on an application that is tested. The defined resources refer to medium-sized applications.

## Software Requirements

This section describes the software requirements for running ATS.

### Operating System

ATS itself has no requirements regarding the operating system.

### Java

ATS itself has no requirements regarding the Java.

### Mendix Business Server

ATS requires Mendix Business Server, version 6.10.10.

### Database

ATS itself has no requirements regarding the database.

### Selenium

Only the Selenium server version that is delivered as part of the ATS installation is supported.

ATS Version | Supported Selenium version | Download |Required Java version
---|---|---|---
2.9 | 3.141.59 | [Download here](https://selenium-release.storage.googleapis.com/3.141/selenium-server-standalone-3.141.59.jar) | JRE 8

### Chrome Driver

Only the Chrome driver version that is delivered as part of the ATS installation is supported.

ATS Version | Supported Chrome driver version | Download 
---|---|---
2.9 | 75 | [Download here](https://chromedriver.storage.googleapis.com/index.html?path=75.0.3770.140/)

### Firefox (Gecko) Driver

Only the Gecko driver version that is delivered as part of the ATS installation is supported.

ATS Version | Supported Gecko driver version | Download 
---|---|---
2.9 | 0.24.0 | [Download here](https://github.com/mozilla/geckodriver/releases/tag/v0.24.0)

### Internet Explorer Driver

Only the Internet Explorer driver version that is delivered as part of the ATS installation is supported.

ATS Version | Supported Gecko driver version | Download 
---|---|---
2.9 | 2.53.1 | [Download here](https://selenium-release.storage.googleapis.com/index.html?path=2.53/)

### Browsers

The following browsers are supported to operate ATS (on their supported OS):

* Firefox 75 (ESR) or higher
* Google Chrome 22 or higher

## Web Servers

A web server can be used to serve static content and proxy the dynamic content. A web server can be used to encrypt the communication using https.

CLEVR does not support web servers other than ad hoc assistance in getting the web server up and running and based on documented installations by Mendix. 

When using Nginx, changing the following settings in the server section is recommended:

* keepalive_timeout 65000
* client_max_body_size 64M
* proxy_read_timeout 180s 
