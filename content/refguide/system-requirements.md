---
title: "System Requirements"
category: "General"
description: "Presents the system requirements for using the Mendix Platform."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Desktop Modeler

The Mendix Modeler supports Windows 7, 8, and 10. It supports both 32-bit and 64-bit variations, but 64-bit is recommended.

The following frameworks are automatically installed (if necessary):

* Microsoft .NET Framework 4.6.2
* Microsoft Visual C++ 2010 SP1 Redistributable Package
* Microsoft Visual C++ 2013 Redistributable Package
* Java Development Kit 1.8

{{% alert type="warning" %}}

You can choose which JDK is used for building and running locally through the **Edit** > **Preferences** menu item.

{{% /alert %}}

If you want to use TortoiseSVN in combination with the Modeler, download the latest version 1.7.x from the [Sourceforge page](http://sourceforge.net/projects/tortoisesvn/files/?source=navbar).

### Team Server

The Team Server is implemented using Subversion and the Modeler uses the HTTPS protocol to communicate with that server. To access the Team Server from within the Modeler, the network at your location needs the following settings:

* The HTTPS port (TCP 443) needs to be open
* The HTTP port (TCP 80) needs to be open
* WebDAV (verbs within the HTTP protocol) needs to be enabled on the proxy server (if any)

## Web Modeler

The Mendix Web Modeler is optimized for use with Chrome. While Chrome is the officially supported browser, you can also use the Web Modeler with other popular browsers like Firefox, Safari and Edge. Note: the browser you use needs to have JavaScript turned on.

## Server

### Operating System

* Microsoft Windows Server 2008 SP2 and above
* Debian 8 (Jessie) and above
* Red Hat Enterprise Linux 6, Red Hat Enterprise Linux 7
* CentOS 6, CentOS 7

### Web Server

* Microsoft Internet Information Services 7 and above
* Nginx (tested with versions included in Debian Jessie and Debian Jessie Backports)
* Apache

### Database Server

* [IBM DB2](db2) 11.1
* [MariaDB](mysql) 5.5, 10.0, 10.1
* [Microsoft SQL Server](/deployment/on-premises/mendix-on-windows-microsoft-sql-server) 2008, 2008 R2, 2012, 2014, 2016
* [MySQL](mysql) 5.5, 5.6, 5.7
* [Oracle Database](oracle) 11g Release 2, 12c Release 1
* PostgreSQL 9.2, 9.3, 9.4, 9.5, 9.6

### Java

When running Mendix on a server you will need Java Runtime Environment (JRE) 8.

You can download JREs here:

[http://www.oracle.com/technetwork/java/javase/downloads/index.html](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

There is an issue since Java 7, causing timeouts when using Web Services with a certain amount of data. You can circumvent this issue by adding the VM params "`-Djava.net.preferIPv4Stack=true`". The Mendix Desktop Modeler will do this for you but if you are running Mendix on premise on a Windows server you will need to do this yourself.

For more information about this issue, have a look at [http://blog.bielu.com/2011/11/hotspot-64bit-server-hangs-on-socket.html](http://blog.bielu.com/2011/11/hotspot-64bit-server-hangs-on-socket.html) or [https://forums.oracle.com/forums/thread.jspa?messageID=9985748](https://forums.oracle.com/forums/thread.jspa?messageID=9985748)

### Application Server

Jetty is built into the Mendix Runtime, an application server is not required.

## Desktop Browsers

* Mozilla Firefox 
* Google Chrome
* Apple Safari
* Microsoft Edge
* Microsoft Internet Explorer 11

## Mobile Browsers

* iOS 9 and above (Safari)
* Android 5.0 and above
* Windows Phone 8 and above

## Mobile Operation Systems (for the Mendix Mobile App)

* iOS 9 and above
* Android 5.0 and above
