---
title: "System Requirements"
category: "General"
menu_order: 10
description: "Presents the system requirements for using the Mendix Platform."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

This document presents the system requirements for the various parts of the Mendix Platform.

## 2 Desktop Modeler

The Mendix [Desktop Modeler](desktop-modeler) supports Windows 7, 8, and 10. It supports both 32-bit and 64-bit variations, but 64-bit is recommended.

The following frameworks are automatically installed (if necessary):

* Microsoft .NET Framework 4.6.2
* Microsoft Visual C++ 2010 SP1 Redistributable Package
* Microsoft Visual C++ 2015 Redistributable Package (for [Mendix 7.23.17](/releasenotes/studio-pro/7.23#72317) and above) or Microsoft Visual C++ 2013 Redistributable Package (for [Mendix 7.23.16](/releasenotes/studio-pro/7.23#72316) and below)
* AdoptOpenJDK 8 (installed automatically as of [Mendix 7.23.3](/releasenotes/studio-pro/7.23#7233) if you do not have this or Java Development Kit 1.8 already installed) or Java Development Kit 1.8

{{% alert type="warning" %}}
You can choose which JDK is used for building and running locally via the **Edit** > **Preferences** menu item in the Desktop Modeler.
{{% /alert %}}

If you want to use TortoiseSVN in combination with the Desktop Modeler, download the latest version 1.7.x from [Sourceforge](http://sourceforge.net/projects/tortoisesvn/files/?source=navbar).

## 3 Team Server

The [Team Server](team-server) is implemented using Subversion, and the Modeler uses the HTTPS protocol to communicate with that server. To access the Team Server from within the Desktop Modeler, the network at your location needs the following settings:

* The HTTPS port (TCP 443) needs to be open
* The HTTP port (TCP 80) needs to be open
* WebDAV (verbs within the HTTP protocol) needs to be enabled on the proxy server (if any)

## 4 Web Modeler

The [Mendix Web Modeler](/studio) is optimized for use with Google Chrome. While Chrome is the officially supported browser, you can also use the Web Modeler with other popular browsers like Mozilla Firefox, Apple Safari, and Microsoft Edge. 

{{% alert type="info" %}}
The browser you use needs to have JavaScript turned on.
{{% /alert %}}

## 5 Server

### 5.1 Operating System

* Microsoft Windows Server 2008 SP2 and above
* Debian 8 (Jessie) and above
* Red Hat Enterprise Linux 6, Red Hat Enterprise Linux 7
* CentOS 6, CentOS 7

### 5.2 Web Server

* Microsoft Internet Information Services 7 and above
* Nginx (tested with versions included in Debian Jessie and Debian Jessie Backports)
* Apache

### 5.3 Database Server

* [IBM DB2](db2) 11.1, 11.5 for Linux, Unix, and Windows
* [MariaDB](mysql) 10.2, 10.3, 10.4, 10.5
* [Microsoft SQL Server](/developerportal/deploy/mendix-on-windows-microsoft-sql-server) 2017, 2019
* Azure SQL v12 (support is not independently verified and is available only through compatible versions of SQL Server)
* [MySQL](mysql) 8.0
* [Oracle Database](oracle) 12c Release 2, 19
* PostgreSQL 10, 11, 12, 13, 14
* [SAP HANA](saphana) 2.00.040.00.1545918182

### 5.4 Java

When running Mendix on a server, you will need Java Runtime Environment (JRE) 8. To download an OpenJDK distribution from AdoptOpenJDK, see [AdoptOpenJDK Installation](https://adoptopenjdk.net/installation.html). To download a commercial Oracle distribution, see [Java SE Downloads](http://www.oracle.com/technetwork/java/javase/downloads/index.html).

{{% alert type="info" %}}
There is an issue since Java 7 that causes timeouts when using web services with a certain amount of data. You can circumvent this issue by adding the VM params `-Djava.net.preferIPv4Stack=true`. The Mendix Desktop Modeler will do this for you, but if you are running Mendix on premises on a Windows server, you will need to do this yourself. For more information about this issue, see [HotSpot (64bit server) hangs on socket read (JVM 1.7 bug?) - updated](http://blog.bielu.com/2011/11/hotspot-64bit-server-hangs-on-socket.html) and [Possible Bug in Java 7](https://forums.oracle.com/forums/thread.jspa?messageID=9985748).
{{% /alert %}}

### 5.5 Application Server

Jetty is built into the [Mendix Runtime](runtime), so an application server is not required.

## 6 Browsers

### 6.1 Desktop Browsers

* Google Chrome
* Mozilla Firefox 
* Apple Safari
* Microsoft Edge
* Microsoft Internet Explorer 11

### 6.2 Mobile Browsers

* iOS 9 and above (Safari)
* Android 5.0 and above
* Windows Phone 8 and above

### 6.3 Hybrid Preview

Using a hybrid preview is not the same as using an emulator. A hybrid preview only shows a resized view of an app to give an impression of what that app might look like on a mobile device. Some hybrid app functionality will not be supported in this browser view. Full tests always need to be done on a device or emulator. Offline apps can only be previewed in Google Chrome.

## 7 Mobile Operating Systems

For Mendix apps and the [Mendix Mobile app](getting-the-mendix-app):

* iOS 9 and above
* Android 5.0 and above

## 8 MxBuild{#mxbuild}

MxBuild is a Windows and Linux command-line tool that can be used to build a Mendix Deployment Package. See [MxBuild](mxbuild) for more information.

### 8.1 Mendix Version 7.1 & Above

* Mono v4.6.x or .NET v4.6.2
* JDK 8.

### 8.2 Mendix Version 7.0.2

* Mono v3.1.0 or .NET v4.5
* JDK 8
