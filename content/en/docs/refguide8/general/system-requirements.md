---
title: "System Requirements"
url: /refguide8/system-requirements/
weight: 10
description: "Presents the system requirements for using the Mendix Platform."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

This document presents the system requirements for the various parts of the Mendix Platform.

## Mendix Studio Pro {#sp}

Mendix [Studio Pro](/refguide8/modeling/) supports 64-bit versions of Windows 7, 8, and 10. Windows 7 must be at least Service Pack 1. LTS versions starting from Mendix Studio Pro 8.18.14 are enabled and tested to run on Apple Silicon Macs such as the M1, which requires [Parallels 17](https://www.parallels.com/) and Windows 11.

The following frameworks are automatically installed (if necessary):

* Microsoft .NET Framework 4.7.2 and all applicable Windows security patches
* Microsoft Visual C++ 2010 SP1 Redistributable Package
* Microsoft Visual C++ 2015 Redistributable Package
* Adoptium JDK 17 (installed automatically as of [Mendix 8.18.29](/releasenotes/studio-pro/8.18/#81829) if you do not have any JDK 17 installed)
* AdoptOpenJDK 11 if you are on a version below 8.18.29

{{% alert color="info" %}}
You can choose which JDK is used for building and running locally via the **Edit** > **Preferences** menu item in Studio Pro.
{{% /alert %}}

{{% alert color="warning" %}}
Please note the limitation that the database viewer built into Studio Pro (as described in [How to Share the Development Database](/howto8/collaboration-requirements-management/sharing-the-development-database/)) does not work with JDK 11.06 or 11.07.
{{% /alert %}}

### Firewall Settings

Studio Pro needs access to the following URLs in order to work. If your firewall is currently blocking these, you will need to safelist them.

* `*.mendix.com`
* `*.mendixcloud.com`
* `*.teamserver.sprintr.com`

### TortoiseSVN

If you want to use TortoiseSVN in combination with Studio Pro, download the latest version from the [TortoiseSVN](https://tortoisesvn.net/) website.

{{% alert color="warning" %}}
Mendix Studio Pro uses the Subversion 1.9 working copy. Previous versions of the Mendix Desktop Modeler used a Subversion 1.7 working copy. These working copy versions **are not compatible**.

Always use the version of TortoiseSVN which matches your app model. If you open a local model from Mendix 7.x with the latest version of TortoiseSVN **you will no longer be able to open it in Mendix**.
{{% /alert %}}

### Graphics Card

If you are using the Intel® UHD Graphics 630 graphics processor, please ensure that you are using [driver version 27.20.100.9664](https://www.catalog.update.microsoft.com/Search.aspx?q=Intel(R)+UHD+Graphics+630) or above.

## Team Server {#ts}

The [Team Server](/developerportal/general/team-server/) is implemented using Subversion, and Studio Pro uses the HTTPS protocol to communicate with that server. To access the Team Server from within Studio Pro, the network at your location needs the following settings:

* The HTTPS port (TCP 443) needs to be open
* The HTTP port (TCP 80) needs to be open
* WebDAV (verbs within the HTTP protocol) needs to be enabled on the proxy server (if any)

## Cloud Foundry

The [Mendix Cloud Foundry buildpack](https://github.com/mendix/cf-mendix-buildpack) supports Cloud Foundry versions v9 and above. 

## Docker

The [Mendix Docker buildpack](https://github.com/mendix/docker-mendix-buildpack) supports Docker version 18.09.0 and above. 

### Kubernetes

The Mendix Docker buildpack supports the following Kubernetes versions: 

* Kubernetes version v1.12 and above
* Redhat Openshift v3.11 and v4.2 and above

## Server

### Operating System

* Microsoft Windows Server 2008 SP2 and above
* [Debian OldOldStable (LTS)](https://wiki.debian.org/DebianOldOldStable), [Debian OldStable, Debian Stable](https://wiki.debian.org/DebianReleases#Current_Releases.2FRepositories)

### Web Server

* Microsoft Internet Information Services 7 and above
* Nginx
* Apache

### Java

When running Mendix on a server, you will need Java Runtime Environment (JRE) 11 or (for Mendix versions 8.18.29 and above) 17. To download an OpenJDK distribution from Adoptium, see [Adoptium Installation](https://adoptium.net/temurin/releases). To download a commercial Oracle distribution, see [Java SE Downloads](https://www.oracle.com/technetwork/java/javase/downloads/index.html).

{{% alert color="info" %}}
There is an issue since Java 7 that causes timeouts when using web services with a certain amount of data. You can circumvent this issue by adding the VM params `-Djava.net.preferIPv4Stack=true`. Mendix Studio Pro will do this for you, but if you are running Mendix on premises on a Windows server, you will need to do this yourself. For more information about this issue, see [Possible Bug in Java 7](https://community.oracle.com/tech/developers/discussion/comment/9987709).
{{% /alert %}}

## Databases {#databases}

Mendix tries to support the most recent and patched database server versions from database vendors. We aim to add support for a new vendor version two minor Mendix versions after the vendor has released it. Dropping support for a database will be announced in the release notes at the date the vendor drops support. We will drop support two minor Mendix versions later.

Current support:

* [IBM DB2](/refguide8/db2/) 11.5 for Linux, Unix, and Windows
* [MariaDB](/refguide8/mysql/) 10.4, 10.5, 10.6, 10.11
* [Microsoft SQL Server](/developerportal/deploy/mendix-on-windows-microsoft-sql-server/) 2019, 2022
* [Azure SQL](https://docs.microsoft.com/en-us/sql/t-sql/statements/alter-database-transact-sql-compatibility-level?view=sql-server-2017) v12 compatibility mode 140 or higher
* [MySQL](/refguide8/mysql/) 8.0
* [Oracle Database](/refguide8/oracle/) 19, 21c
* PostgreSQL 12, 13, 14, 15, 16
* [SAP HANA](/refguide8/saphana/) 2.00.040.00.1545918182

{{% alert color="warning" %}}
Each app should have its own database. Mendix apps cannot share data by sharing the same database. 
{{% /alert %}}

## File Storage

### Storage Services for Containers

For container-based deployments using Docker, Kubernetes, or Cloud Foundry, the following storage services are supported:

* AWS S3
* Azure Blob Storage
* IBM Cloud Object Storage
* SAP AWS S3 Object Storage
* SAP Azure Blob Storage

For container-mounted storage in Kubernetes, provided by an external storage class, see also [Use Docker with Minikube](/developerportal/deploy/run-mendix-on-kubernetes/).

### Storage types for Servers

For server-based installations, the following storage types mounted by the OS are supported:

* NAS 
* SAN 
* GFS
* Local Storage 

## Browsers {#browsers}

* Google Chrome (latest stable desktop and Android versions)
* Mozilla Firefox (latest stable desktop version)
* Apple Safari (latest stable desktop version and latest version for each [supported iOS](#mobileos) version)
* Microsoft Edge (latest stable desktop version)
* Microsoft Internet Explorer 11

## Hybrid Preview

Using a hybrid preview is not the same as using an emulator. A hybrid preview only shows a resized view of an app to give an impression of what that app might look like on a mobile device. Some hybrid app functionality will not be supported in this browser view. Full tests always need to be done on a device or emulator. Offline apps can only be previewed in Google Chrome.

## Mobile Operating Systems {#mobileos}

For native and hybrid apps built with Mendix (and the [Mendix Developer App](/refguide8/getting-the-mendix-app/)) the following operating system versions are supported:

* Latest version of iOS
* Latest three versions of Android

Only devices running on these operating system versions receive up-to-date security fixes from their vendors and thus minimize being vulnerable to known exploits.

You can build native and hybrid apps with Mendix that run on older operating system versions than the ones we support. However, to receive official Mendix support you must demonstrate that your problem also occurs on a supported operating system version.

Mendix recommends the following minimum hardware requirements for all mobile devices running native and hybrid Mendix apps:

* CPU: minimum 2 cores with 2 GHz
* Memory: minimum 2 GB

Depending on your app's complexity, these minimum hardware requirements might not be sufficient and should be adjusted.

## MxBuild {#mxbuild}

MxBuild is a Windows and Linux command-line tool that can be used to build a Mendix Deployment Package. For more information, see [MxBuild](/refguide8/mxbuild/).

* Mono v5.20.x or .NET v4.7.2
* JDK 11 or 17

## mx Command-Line Tool {#mxtool}

The **mx** command-line tool is a Windows and Linux command-line tool that can be used to do useful things with your Mendix app. For more information, see [mx Command-Line Tool](/refguide8/mx-command-line-tool/).

* Mono v5.20.x or .NET v4.7.2 
