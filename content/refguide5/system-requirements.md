---
title: "System Requirements"
category: "General"
---


## Modeler

The Mendix Modeler supports Windows XP (Service Pack 3), Vista, 7, and 8(.1). From version 5.21.1 the Modeler also supports Windows 10.

The following frameworks are automatically installed (if necessary):

*   Microsoft .NET Framework 4.0 (Windows XP)
*   Microsoft .NET Framework 4.5 (Windows Vista and newer)
*   Microsoft Visual C++ 2008/2010 SP1 Redistributable Package
*   Java Development Kit 7 (Mendix 5.0 up to 5.16)
*   Java Development Kit 8 (Mendix 5.16 and later)

{{% alert type="warning" %}}

You can choose which JDK is used through the 'Edit > Preferences' menu item.

{{% /alert %}}

If you want to use TortoiseSVN in combination with the Modeler, download the version 1.7.x from the [Sourceforge page](http://sourceforge.net/projects/tortoisesvn/files/?source=navbar).

### Team Server

The Team Server is implemented using Subversion and the Modeler uses the HTTPS protocol to communicate with that server. To access the Team Server from within the Modeler, the network at your location needs the following settings:

*   The HTTPS port (TCP 443) needs to be open.
*   The HTTP port (TCP 80) needs to be open.
*   WebDAV - verbs within the HTTP protocol - needs to be enabled on the proxy server (if any).

## Server

### Operating system

*   Microsoft Windows Server 2003 or newer
*   Debian 6 (Squeeze) or newer
*   Red Hat 6, Centos 6

### Web server

*   Microsoft Internet Information Services 6 or newer
*   Nginx (tested with versions included in Debian Squeeze and Debian Squeeze Backports)
*   Apache

### Database server

*   [Microsoft SQL Server 2005 or newer](/deployment/on-premises/mendix-on-windows-microsoft-sql-server)
*   [MySQL 5.5](mysql) / [MariaDB 5.5](mysql)
*   [Oracle Database 11_g_ Release 2 or newer](oracle)
*   PostgreSQL 8.4 or newer

### Java

When running Mendix on a server you will need Java Runtime Environment (JRE) 7 or 8 (for Mendix 5.16 and later). It is not possible anymore to run Mendix 5 apps on Java 6\. See [here](moving-from-4-to-5) for more information.

You can download JREs here:

[http://www.oracle.com/technetwork/java/javase/downloads/index.html](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

There is an issue since Java 7, causing timeouts when using Web Services with a certain amount of data. You can circumvent this issue by adding the VM params "`-Djava.net.preferIPv4Stack=true`". The Mendix Modeler will do this for you but if you are running Mendix on premise on a Windows server you will need to do this yourself.

For more information about this issue, have a look at [http://blog.bielu.com/2011/11/hotspot-64bit-server-hangs-on-socket.html](http://blog.bielu.com/2011/11/hotspot-64bit-server-hangs-on-socket.html) or [https://forums.oracle.com/forums/thread.jspa?messageID=9985748](https://forums.oracle.com/forums/thread.jspa?messageID=9985748)

### Application server

Jetty is built into the Mendix Runtime, an application server is not required.

## Desktop Browsers

*   Internet Explorer 8 - 11
*   Microsoft Edge
*   Firefox 3.6 and newer
*   Chrome
*   Safari 5 and newer

## Mobile Browsers

*   iOS 5 and newer (Safari)
*   Android 2.2 and newer (stock browser)
*   Windows Phone 7 and newer
