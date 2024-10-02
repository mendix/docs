---
title: "System Requirements"
url: /refguide9/system-requirements/
weight: 10
description: "Presents the system requirements for using the Mendix Platform."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

This document presents the system requirements for the various parts of the Mendix Platform.

## Mendix Studio Pro {#sp}

Mendix Studio Pro has the requirements listed in the following sections.

### Software Specifications

Mendix [Studio Pro](/refguide9/modeling/) version 9 is supported on 64-bit versions of Windows 10 release 1809 and above. This also includes Windows 11. MTS versions starting from Mendix Studio Pro 9.6.5 are enabled and tested to run on Apple Silicon Macs such as the M1, which requires [Parallels 17](https://www.parallels.com/) and Windows 11.

The following frameworks are required. They will be installed automatically by the Studio Pro installer if necessary:

* Microsoft .NET 6.0.x desktop runtime (x64) and all applicable Windows security patches
* Microsoft Visual C++ 2015 Redistributable Package (x64)
* Microsoft Visual C++ 2019 Redistributable Package (x64)
* A Java Developer Kit (JDK) version 11, 17, or 21 - the flavor which will be installed if the correct version of Java is not already installed on your machine—this depends on which version of Studio Pro you are installing
    * AdoptOpenJDK 11 (x64) – for Mendix 9.13 and below
    * Adoptium Temurin JDK 11 (x64) – for Mendix 9.14 to 9.17
    * Eclipse Temurin JDK 11 (x64)– for Mendix between 9.18.1 and 9.18.15
    * Eclipse Temurin JDK 17 (x64)– for Mendix 9.18.16 and above
* Git for Windows (x64)
* Mendix Native Mobile Builder
* Microsoft Edge WebView2 Evergreen Runtime (x64)
* For Studio Pro 9.24 and above: Gradle version 8.5 or above (if your Java version is 11 or 17, Gradle version 7.6 or above will also work) - if Gradle is not yet installed on your machine, Mendix will install Gradle version 8.5

If you are running Studio Pro on an ARM64 device (for example, an M1 Mac), you need the following version of .NET 6 in addition to the x64 version listed above:

* .NET 6 Desktop Runtime (arm64)

{{% alert color="info" %}}
You can choose which JDK is used for building and running locally via the **Edit** > **Preferences** menu item in Studio Pro.
{{% /alert %}}

{{% alert color="warning" %}}
Please note the limitation that the database viewer built into Studio Pro (as described in [How to Share the Development Database](/howto9/data-models/sharing-the-development-database/)) does not work with JDK 11.06 or 11.07.
{{% /alert %}}

### Hardware Specifications

Mendix Studio Pro will run on any machine which can run the [minimum requirements for running Windows 10 64-bit](https://www.microsoft.com/en-gb/windows/windows-10-specifications#primaryR2) with the following additional requirement:

* **Disk Space** – Studio Pro requires 2GB disk space to install, and each app you create will vary in size depending on the functionality, but will take a minimum of around 150MB.
* **RAM** – 4GB
* **Display Resolution** – 1080p (1920x1080)

### Firewall Settings {#firewall-settings}

Studio Pro needs access to the following URLs in order to work. If your firewall is blocking these, you will need to safelist them:

* `*.mendix.com`
* `*.mendixcloud.com`
* `*.teamserver.sprintr.com`

To run a Mendix app, Mendix Studio Pro uses the following ports by default. If your firewall is blocking these, you will need to open them:

* 8080: runtime port
* 8083: mobile packager
* 8090: admin port
* 8100: sign-in port (for version 9.18 and above)

For more information on ports and modifying Studio Pro's default ports, see [Configurations](/refguide9/configuration/) and the [Troubleshooting Common Mobile Issues](/refguide9/mobile/getting-started-with-mobile/prerequisites/#troubleshooting) section of *Native App Prerequisites and Troubleshooting*.

### TortoiseSVN

If you want to use TortoiseSVN in combination with Studio Pro, download the latest version from the [TortoiseSVN](https://tortoisesvn.net/) website.

{{% alert color="warning" %}}
Mendix Studio Pro uses the Subversion 1.9 working copy. Previous versions of the Mendix Desktop Modeler used a Subversion 1.7 working copy. These working copy versions **are not compatible**.<br />
<br />
Always use the version of TortoiseSVN which matches your app model. If you open a local model from Mendix 7.x with the latest version of TortoiseSVN **you will no longer be able to open it in Mendix**.
{{% /alert %}}

### File Locations

For active development and running your application locally, your app folder should be on local drive (such as C:) or on a network folder that has been mapped to a [Windows drive letter](https://support.microsoft.com/en-us/windows/map-a-network-drive-in-windows-10-29ce55d1-34e3-a7e2-4801-131475f9557d).

### Supported Git Service Providers {#supported-providers}

Git service providers have size limitations related to commits and repositories.

Studio Pro does not support Large File Storage (LFS) for any provider.

You can find a list of known limitations below, however, we advise you to check the most up-to-date limitations on respective web sites before considering using a certain service provider.

| Vendor      | Repository Size Limit                      | Push Limit      | Non-LFS File Size Limit | LFS File Size Limit |
| ----------- | ------------------------------------------ | --------------- | ----------------------- | ------------------- |
| GitHub      | Warnings on 5 GB, 100 GB theoretical limit | Information n/a | 100 MB¹ (warning 50 MB)  | 5 GB                |
| GitLab      | 5 GB (free) and 250 GB (enterprise)        | 5 GB            | None                    | 5 GB                |
| Azure Repos | 250 GB                                     | 5 GB            | None                    | 50 GB               |
| Bitbucket   | 4 GB                                       | 3.5 GB          | None                    | 10 + 100 GB         |

¹ You will not be able to work with GitHub, and other providers with a file size limitation, if your .mpr file exceeds the limit. 

#### Azure Repos and Azure DevOps Server 

We support both Microsoft’s [Azure Repos](https://azure.microsoft.com/en-us/services/devops/repos/) hosted Git service, and Azure DevOps Server (former Team Foundation Server) which is an on-premises solution for hosting your Git repos on private infrastructure.

To get a PAT for your user account, see the [Use personal access tokens](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=preview-page) instructions in the Microsoft documentation.

You need `Code (full)` permission for your token.

#### GitHub 

We support GitHub’s hosting solutions, including the free GitHub.com cloud-hosted service and GitHub Enterprise, both hosted (Enterprise Cloud) and on-premises (Enterprise Server).

To get a PAT for your user account, see the [Creating a personal access token](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) instructions in the GitHub documentation. 

You need `repo` permissions for your token.

#### GitLab 

We support all tiers of GitLab’s service, including GitLab.com, GitLab Community Edition, and GitLab Enterprise Edition.

To get a PAT for your user account, see the [Personal access tokens](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) instructions in the GitLab documentation. 

You need `write_repository` permission for the token.

#### Bitbucket 

We support all tiers of Atlassian’s Bitbucket service, including Bitbucket.org, Bitbucket Server, and Bitbucket Data Center on-premises solutions.

On Bitbucket.org, the personal access token are called app passwords.

To set up an App Password for your Bitbucket.org account, see the [App passwords](https://support.atlassian.com/bitbucket-cloud/docs/app-passwords/) instructions.

Bitbucket Server and Bitbucket Data Center, on the other hand, still use the term "personal access token." To set up a personal access token, see the [Personal access tokens](https://confluence.atlassian.com/bitbucketserver/personal-access-tokens-939515499.html) instructions.

In both cases you need `repository write` permission.

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
* Red Hat OpenShift v3.11 and v4.2 and above

## Server

### Operating System {#server-os}

* Microsoft Windows Server 2008 SP2 and above
* The following Unix-like operating systems:
    * [Debian OldOldStable (LTS)](https://wiki.debian.org/DebianOldOldStable), [Debian OldStable, Debian Stable](https://wiki.debian.org/DebianReleases#Current_Releases.2FRepositories)

### Web Server

* Microsoft Internet Information Services 7 and above
* Nginx
* Apache

### Java {#java}

When running Mendix on a server, you will need Java Runtime Environment (JRE) 11, 17 or 21. To download an Eclipse Temurin OpenJDK distribution from Adoptium, see [Eclipse Temurin™ Latest Releases](https://adoptium.net/temurin/releases). To download a commercial Oracle distribution, see [Java SE Downloads](https://www.oracle.com/technetwork/java/javase/downloads/index.html).

{{% alert color="warning" %}}
Compatibility with JDK 17 is available from Studio Pro version 9.24.19. Compatibility with Java 21 is available from Studio Pro version 9.24.22. Mendix recommends switching to a Studio Pro version compatible with Java 21.
{{% /alert %}}

{{% alert color="info" %}}
There is an issue since Java 7 that causes timeouts when using web services with a certain amount of data. You can circumvent this issue by adding the VM params `-Djava.net.preferIPv4Stack=true`. Mendix Studio Pro will do this for you, but if you are running Mendix on premises on a Windows server, you will need to do this yourself. For more information about this issue, see [Possible Bug in Java 7](https://community.oracle.com/tech/developers/discussion/comment/9987709).
{{% /alert %}}

## Databases {#databases}

Mendix tries to support the most recent and patched database server versions from database vendors. We aim to add support for a new vendor version two minor Mendix versions after the vendor has released it. Dropping support for a database will be announced in the release notes at the date the vendor drops support. We will drop support two minor Mendix versions later.

Current support:

* [MariaDB](/refguide9/mysql/): 10.4, 10.5, 10.6, 10.11
* [Microsoft SQL Server](/developerportal/deploy/mendix-on-windows-microsoft-sql-server/): 2019, 2022
* [Azure SQL](https://docs.microsoft.com/en-us/sql/t-sql/statements/alter-database-transact-sql-compatibility-level?view=sql-server-2017): v12 compatibility mode 140 or higher
* [MySQL](/refguide9/mysql/): 8.0
* [Oracle Database](/refguide9/oracle/): 19, 21c
* PostgreSQL: 12, 13, 14, 15, 16
* [SAP HANA](/refguide9/saphana/): 2.00.040.00.1545918182
* [IBM DB2](/refguide9/db2/): 11.5 for Linux, Unix, and Windows (please note that support for DB2 is deprecated and will be removed in Studio Pro 10)

{{% alert color="warning" %}}
Each app must have its own database. Mendix apps cannot share data by sharing the same database.

If you want two apps to share the same database, then you need to share the data from one app to the other using APIs. In Mendix, these are supported by [Data Hub](/data-hub/share-data/) or the REST and OData services described in the [Integration](/refguide9/integration/) section of the *Studio Pro Guide*. This is referred to as a microservices architecture.

For more information on why data cannot be shared between apps see [Data Storage](/refguide9/data-storage/#databases). Use the [Database Replication](/appstore/modules/database-replication/) module if you need to copy the data from one app to another.
{{% /alert %}}

## File Storage {#file-storage}

### Storage Services for Containers

For container-based deployments using Docker, Kubernetes, or Cloud Foundry, the following storage services are supported:

* AWS S3
* Azure Blob Storage
* IBM Cloud Object Storage
* SAP AWS S3 Object Storage
* SAP Azure Blob Storage

For container-mounted storage in Kubernetes, provided by an external storage class, see also [Use Docker with Minikube](/developerportal/deploy/run-mendix-on-kubernetes/).

### Storage Types for Servers

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

{{% alert color="warning" %}}
Internet Explorer is no longer supported in Studio Pro 9. As the market is moving away from Internet Explorer and Mendix continues to align with the best practices of the modern web ecosystem, we have dropped support for Internet Explorer 11. This allows us to keep in line with user expectations. Removing support has already improved app loading times and performance, and it will enable us to continue making improvements and innovating using modern web features.<br />
<br />
As of Studio Pro 9, app end-users still using IE will be shown an **Unsupported Browser** message stating that upgrading to a modern browser is required. You can [customize this message](/howto9/front-end/customize-styling-new/#customize-unsupported-browsers) to meet your needs.<br />
<br />
If you still need to support IE11, note that Studio Pro [8](/releasenotes/studio-pro/8.18/) will continue supporting IE11. Mendix recommends using Studio Pro 8 until your app end-users have upgraded their browsers.
{{% /alert %}}

## Mobile Operating Systems {#mobileos}

For native and hybrid apps built with Mendix, the following operating system versions are supported:

* Latest version of iOS
* Latest three versions of Android

Only devices running on these operating system versions receive up-to-date security fixes from their vendors and thus minimize being vulnerable to known exploits.

You can build native and hybrid apps with Mendix that run on older operating system versions than the ones we support. However, to receive official Mendix support you must demonstrate that your problem also occurs on a supported operating system version.

Mendix recommends the following minimum hardware requirements for all mobile devices running native and hybrid Mendix apps:

* CPU: minimum 2 cores with 2 GHz
* Memory: minimum 2 GB

Depending on your app's complexity, these minimum hardware requirements might not be sufficient and should be adjusted.

### Hybrid Apps Preview

Using a hybrid preview feature is not the same as testing an app on a phone or simulator. A hybrid preview only shows a resized view of an app to give an impression of what that app might look like on a mobile device. Some hybrid app functionality will not be supported in this browser view. Full tests always need to be done on a device or emulator. Offline apps can only be previewed in Google Chrome.

Hybrid apps cannot be tested in Android Emulator, only on a real device.

## MxBuild {#mxbuild}

MxBuild is a Windows and Linux command-line tool that can be used to build a Mendix Deployment Package. For more information, see [MxBuild](/refguide9/mxbuild/).

* Mono v5.20.x or .NET v4.7.2
* JDK 11

## mx Command-Line Tool {#mxtool}

The **mx** command-line tool is a Windows and Linux command-line tool that can be used to do useful things with your Mendix app. For more information, see [mx Command-Line Tool](/refguide9/mx-command-line-tool/).

* Mono v5.20.x or .NET v4.7.2
