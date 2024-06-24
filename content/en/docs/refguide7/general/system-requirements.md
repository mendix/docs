---
title: "System Requirements"
url: /refguide7/system-requirements/
weight: 10
description: "Presents the system requirements for using the Mendix Platform."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

This document presents the system requirements for the various parts of the Mendix Platform.

## 2 Desktop Modeler

The Mendix [Desktop Modeler](/refguide7/desktop-modeler/) supports Windows 7, 8, and 10. It supports both 32-bit and 64-bit variations, but 64-bit is recommended.

The following frameworks are automatically installed (if necessary):

* Microsoft .NET Framework 4.6.2
* Microsoft Visual C++ 2010 SP1 Redistributable Package
* Microsoft Visual C++ 2015 Redistributable Package (for [Mendix 7.23.17](/releasenotes/studio-pro/7.23/#72317) and above) or Microsoft Visual C++ 2013 Redistributable Package (for [Mendix 7.23.16](/releasenotes/studio-pro/7.23/#72316) and below)
* AdoptOpenJDK 8 (installed automatically as of [Mendix 7.23.3](/releasenotes/studio-pro/7.23/#7233) if you do not have this or Java Development Kit 1.8 already installed) or Java Development Kit 1.8

{{% alert color="warning" %}}
You can choose which JDK is used for building and running locally via the **Edit** > **Preferences** menu item in the Desktop Modeler.
{{% /alert %}}

If you want to use TortoiseSVN in combination with the Desktop Modeler, download the latest version 1.7.x from [SourceForge](https://sourceforge.net/projects/tortoisesvn/files/).

## 3 Team Server

The [Team Server](/refguide7/team-server/) is implemented using Subversion, and the Modeler uses the HTTPS protocol to communicate with that server. To access the Team Server from within the Desktop Modeler, the network at your location needs the following settings:

* The HTTPS port (TCP 443) needs to be open
* The HTTP port (TCP 80) needs to be open
* WebDAV (verbs within the HTTP protocol) needs to be enabled on the proxy server (if any)

## 4 Server

### 4.1 Operating System

* Microsoft Windows Server 2008 SP2 and above
* Debian 8 (Jessie) and above

### 4.2 Web Server

* Microsoft Internet Information Services 7 and above
* Nginx (tested with versions included in Debian Jessie and Debian Jessie Backports)
* Apache

### 4.3 Database Server

* [IBM DB2](/refguide7/db2/) 11.5 for Linux, Unix, and Windows
* [MariaDB](/refguide7/mysql/) 10.4, 10.5, 10.6, 10.11
* [Microsoft SQL Server](/developerportal/deploy/mendix-on-windows-microsoft-sql-server/) 2019, 2022
* Azure SQL v12 (support is not independently verified and is available only through compatible versions of SQL Server)
* [MySQL](/refguide7/mysql/) 8.0
* [Oracle Database](/refguide7/oracle/) 19, 21c
* PostgreSQL 11, 12, 13, 14, 15, 16
* [SAP HANA](/refguide7/saphana/) 2.00.040.00.1545918182

### 4.4 Java

When running Mendix on a server, you will need Java Runtime Environment (JRE) 8. To download an OpenJDK distribution from Adoptium, see [Adoptium Installation](https://adoptium.net/temurin/releases). To download a commercial Oracle distribution, see [Java SE Downloads](https://www.oracle.com/technetwork/java/javase/downloads/index.html).

{{% alert color="info" %}}
There is an issue since Java 7 that causes timeouts when using web services with a certain amount of data. You can circumvent this issue by adding the VM params `-Djava.net.preferIPv4Stack=true`. The Mendix Desktop Modeler will do this for you, but if you are running Mendix on premises on a Windows server, you will need to do this yourself. For more information about this issue, see [Possible Bug in Java 7](https://community.oracle.com/tech/developers/discussion/comment/9987709).
{{% /alert %}}

### 4.5 Application Server

Jetty is built into the [Mendix Runtime](/refguide7/runtime/), so an application server is not required.

## 5 Browsers

### 5.1 Desktop Browsers

* Google Chrome
* Mozilla Firefox 
* Apple Safari
* Microsoft Edge
* Microsoft Internet Explorer 11

### 5.2 Mobile Browsers

* iOS 9 and above (Safari)
* Android 5.0 and above
* Windows Phone 8 and above

### 5.3 Hybrid Preview

Using a hybrid preview is not the same as using an emulator. A hybrid preview only shows a resized view of an app to give an impression of what that app might look like on a mobile device. Some hybrid app functionality will not be supported in this browser view. Full tests always need to be done on a device or emulator. Offline apps can only be previewed in Google Chrome.

## 6 Mobile Operating Systems

For hybrid apps built with Mendix (and the [Mendix Developer App](/refguide7/getting-the-mendix-app/)) the following operating system versions are supported:

* Latest version of iOS
* Latest three versions of Android

Only devices running on these operating system versions receive up-to-date security fixes from their vendors and thus minimize being vulnerable to known exploits.

You can build hybrid apps with Mendix that run on older operating system versions than the ones we support. However, to receive official Mendix support you must demonstrate that your problem also occurs on a supported operating system version.

Mendix recommends the following minimum hardware requirements for all mobile devices running hybrid Mendix apps:

* CPU: minimum 2 cores with 2 GHz
* Memory: minimum 2 GB

Depending on your app's complexity, these minimum hardware requirements might not be sufficient and should be adjusted.

## 7 MxBuild{#mxbuild}

MxBuild is a Windows and Linux command-line tool that can be used to build a Mendix Deployment Package. See [MxBuild](/refguide7/mxbuild/) for more information.

### 7.1 Mendix 7.1 and Above

* Mono v4.6.x or .NET v4.6.2
* JDK 8.

### 7.2 Mendix 7.0.2

* Mono v3.1.0 or .NET v4.5
* JDK 8
