---
title: "System Requirements"
category: "General Info"
menu_order: 10
description: "Presents the system requirements for using the Mendix Platform."
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

This document presents the system requirements for the various parts of the Mendix Platform.

## 2 Mendix Studio Pro {#sp}

Mendix [Studio Pro](modeling) supports 64-bit versions of Windows 7, 8, and 10. Windows 7 must be at least Service Pack 1.

The following frameworks are automatically installed (if necessary):

* Microsoft .NET Framework 4.7.2
* Microsoft Visual C++ 2010 SP1 Redistributable Package
* Microsoft Visual C++ 2015 Redistributable Package
* AdoptOpenJDK 11 or Oracle JDK 11 (the former is installed automatically as of [Mendix 8.0.0](/releasenotes/studio-pro/8.0#800) if you do not have any JDK 11 installed) 

{{% alert type="info" %}}
You can choose which JDK is used for building and running locally via the **Edit** > **Preferences** menu item in Studio Pro.
{{% /alert %}}

### 2.1 TortoiseSVN

If you want to use TortoiseSVN in combination with Studio Pro, download the latest version from the [TortoiseSVN](https://tortoisesvn.net/) website.

{{% alert type="warning" %}}
Mendix Studio Pro uses the Subversion 1.9 working copy. Previous versions of the Mendix Desktop Modeler used a Subversion 1.7 working copy. These working copy versions **are not compatible**.

Always use the version of TortoiseSVN which matches your app model. If you open a local model from Mendix version 7.x or 6.x with the latest version of TortoiseSVN **you will no longer be able to open it in Mendix**.
{{% /alert %}}

## 3 Team Server {#ts}

The [Team Server](/developerportal/develop/team-server) is implemented using Subversion, and Studio Pro uses the HTTPS protocol to communicate with that server. To access the Team Server from within Studio Pro, the network at your location needs the following settings:

* The HTTPS port (TCP 443) needs to be open
* The HTTP port (TCP 80) needs to be open
* WebDAV (verbs within the HTTP protocol) needs to be enabled on the proxy server (if any)

## 4 Mendix Studio

[Mendix Studio](/studio) is optimized for use with Google Chrome. While Chrome is the officially supported browser, you can also use Mendix Studio with other popular browsers like Mozilla Firefox, Apple Safari, and Microsoft Edge. 

{{% alert type="info" %}}
The browser you use needs to have JavaScript turned on.
{{% /alert %}}

## 5 Cloud Foundry
The [Mendix Cloud Foundry buildpack](https://github.com/mendix/cf-mendix-buildpack) supports Cloud Foundry versions v9 and above. 

## 6 Docker
The [Mendix Docker buildpack](https://github.com/mendix/docker-mendix-buildpack) supports Docker version 18.09.0 and above. 

### 6.1 Kubernetes
The Mendix Docker buildpack supports the following Kubernetes versions: 

* Kubernetes version v1.12 and above
* Redhat Openshift v3.11 and v4.2 and above

## 7 Server

### 7.1 Operating System

* Microsoft Windows Server 2008 SP2 and above
* Debian 8 (Jessie) and above
* Red Hat Enterprise Linux 6, Red Hat Enterprise Linux 7
* CentOS 6, CentOS 7

### 7.2 Web Server

* Microsoft Internet Information Services 7 and above
* Nginx (tested with versions included in Debian Jessie and Debian Jessie Backports)
* Apache

### 7.3 Java

When running Mendix on a server, you will need Java Runtime Environment (JRE) 11. To download an OpenJDK distribution from AdoptOpenJDK, see [AdoptOpenJDK Installation](https://adoptopenjdk.net/installation.html). To download a commercial Oracle distribution, see [Java SE Downloads](http://www.oracle.com/technetwork/java/javase/downloads/index.html).

{{% alert type="info" %}}
There is an issue since Java 7 that causes timeouts when using web services with a certain amount of data. You can circumvent this issue by adding the VM params `-Djava.net.preferIPv4Stack=true`. Mendix Studio Pro will do this for you, but if you are running Mendix on premises on a Windows server, you will need to do this yourself. For more information about this issue, see [HotSpot (64bit server) hangs on socket read (JVM 1.7 bug?) - updated](http://blog.bielu.com/2011/11/hotspot-64bit-server-hangs-on-socket.html) and [Possible Bug in Java 7](https://forums.oracle.com/forums/thread.jspa?messageID=9985748).
{{% /alert %}}

## 8 Databases {#databases}

Mendix tries to support the most recent and patched database server versions from database vendors. We aim to add support for a new vendor version two minor Mendix versions after the vendor has released it. Dropping support for a database will be announced in the release notes at the date the vendor drops support. We will drop support two minor Mendix versions later.

Current support:

* [IBM DB2](db2) 11.1 for Linux, Unix, and Windows
* [MariaDB](mysql) 5.5, 10.1, 10.2, 10.3
* [Microsoft SQL Server](/developerportal/deploy/mendix-on-windows-microsoft-sql-server) 2016, 2017, 2019
* [Azure SQL](https://docs.microsoft.com/en-us/sql/t-sql/statements/alter-database-transact-sql-compatibility-level?view=sql-server-2017) v12 compatibility mode 130 or higher
* [MySQL](mysql) 5.7, 8.0
* [Oracle Database](oracle) 12c Release 2, 18, 19
* PostgreSQL 9.5, 9.6, 10, 11, 12
* [SAP HANA](saphana) 2.00.040.00.1545918182

{{% alert type="warning" %}}
Each app should have its own database. Mendix apps cannot share data by sharing the same database. 
{{% /alert %}}

## 9 File Storage

### 9.1 Storage Services for Containers

For container-based deployments using Docker, Kubernetes, or Cloud Foundry, the following storage services are supported:

* AWS S3
* Azure Blob Storage
* IBM Cloud Object Storage
* SAP AWS S3 Object Storage
* SAP Azure Blob Storage

For container-mounted storage in Kubernetes, provided by an external storage class, see also [Run Mendix on Kubernetes](/developerportal/deploy/run-mendix-on-kubernetes).

###  9.2 Storage types for Servers

For server-based installations, the following storage types mounted by the OS are supported:

* NAS 
* SAN 
* GFS
* Local Storage 

## 10 Browsers {#browsers}

### 10.1 Desktop Browsers

* Google Chrome
* Mozilla Firefox 
* Apple Safari
* Microsoft Edge
* Microsoft Internet Explorer 11

### 10.2 Mobile Browsers

* iOS 12 and above (Safari)
* Android 5.0 and above

### 10.3 Hybrid Preview

Using a hybrid preview is not the same as using an emulator. A hybrid preview only shows a resized view of an app to give an impression of what that app might look like on a mobile device. Some hybrid app functionality will not be supported in this browser view. Full tests always need to be done on a device or emulator. Offline apps can only be previewed in Google Chrome.

## 11 Mobile Operating Systems {#mobileos}

For Mendix apps and the [Mendix Mobile app](getting-the-mendix-app):

* iOS 12 and above
* Android 5.0 and above

## 12 MxBuild {#mxbuild}

MxBuild is a Windows and Linux command-line tool that can be used to build a Mendix Deployment Package. For more information, see [MxBuild](mxbuild).

* Mono v5.20.x or .NET v4.7.2
* JDK 11

## 13 mx Command-Line Tool {#mxtool}

The **mx** command-line tool is a Windows and Linux command-line tool that can be used to do useful things with your Mendix app project. For more information, see [mx Command-Line Tool](mx-command-line-tool).

* Mono v5.20.x or .NET v4.7.2
