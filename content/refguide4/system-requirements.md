---
title: "System Requirements"
---


## Modeler

The Mendix Business Modeler supports Windows XP (Service Pack 3), Vista or 7.

The following frameworks are automatically installed (if necessary):

*   Microsoft .NET Framework 3.5 Service Pack 1 (only for Mendix < 4.6.0)
*   Microsoft .NET Framework 4.0 (only for Mendix >= 4.6.0)
*   Microsoft Visual C++ 2008 SP1 Redistributable Package (x86) (only for Mendix >= 4.6.0)
*   Java Development Kit 1.6

{{% alert type="warning" %}}

You can choose which JDK is used through the 'Edit > Preferences' menu item.

{{% /alert %}}

If you want to use TortoiseSVN in combination with the Modeler, download version 1.6.latest for Mendix < 4.1.0 or version 1.7.latest for Mendix >= 4.1.0 from the [Sourceforge page](http://sourceforge.net/projects/tortoisesvn/files/?source=navbar).

### Team Server

The Team Server is implemented using Subversion and the Modeler uses the HTTPS protocol to communicate with that server. To access the Team Server from within the Modeler, the network at your location needs the following settings:

*   The HTTPS port (TCP 443) needs to be open.
*   The HTTP port (TCP 80) needs to be open.
*   WEBDAV - verbs within the HTTP protocol - needs to be enabled on the proxy server (if any).

## Server

### Operating system

*   Microsoft Windows Server 2003 or higher
*   Debian 6 (Squeeze)
*   Red Hat 6, Centos 6

### Web server

*   Microsoft Internet Information Services 6 or higher
*   Nginx (tested with versions included in Debian Squeeze and Debian Squeeze Backports)
*   Apache

### Database server

*   Microsoft SQL Server 2005 or higher
*   PostgreSQL 8.3 or higher
*   Oracle Database 11_g_ Release 2 or higher ([known issue with backups](oracle))

### Java

When running Mendix on a server you will need update 22 or higher of the Java Runtime Environment (JRE) 1.6.

You can download JDKs here:

[http://www.oracle.com/technetwork/java/javase/downloads/index.html](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

Note: there are known problems with JRE 1.6 update 29 and Microsoft SQL Server so we do not allow running on this version when using Microsoft SQL Server.

Starting from Mendix 4.1, we do support JRE 1.7 update 5 or higher. However there is still an issue with this version, causing timeouts when using Web Services with a certain amount of data. You can circumvent this issue by adding the VM params "-Djava.net.preferIPv4Stack=true". The Mendix Business Modeler will do this for you but if you are running Mendix on premise on a Windows server you will need to do this yourself.
For more information, have a look at [http://blog.bielu.com/2011/11/hotspot-64bit-server-hangs-on-socket.html](http://blog.bielu.com/2011/11/hotspot-64bit-server-hangs-on-socket.html) or [https://forums.oracle.com/forums/thread.jspa?messageID=9985748](https://forums.oracle.com/forums/thread.jspa?messageID=9985748)

### Application server

Jetty is built into the Mendix Business Server, an application server is not required.

## Desktop Browsers

*   Internet Explorer 6 - 10. We give a warning for people still using IE6. For end users still using IE6 there was an option to install the Google Chrome Frame. [Per February 25 2014 this is no longer supported](https://www.chromium.org/developers/how-tos/chrome-frame-getting-started?csw=1).

*   Firefox 3.6 and newer

*   Chrome

*   Safari 4 and newer

## Mobile Browsers

*   iOS 5 and newer (Safari)
*   Android 2.2 and newer (stock browser)
*   Windows Phone 7 and newer
