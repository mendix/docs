---
title: "System Requirements"
url: /refguide/system-requirements/
weight: 20
description: "Presents the system requirements for using the Mendix Platform."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

This document presents the system requirements for the various parts of the Mendix Platform.

## Mendix Studio Pro {#sp}

Mendix Studio Pro has the requirements listed in the following sections.

### Software Specifications {#software}

[Mendix Studio Pro](/refguide/modeling/) 10 is supported on 64-bit versions of Windows 10 release 1809 and above; this also includes Windows 11. 
We support running on Windows locally, or locally virtualized.

Studio Pro 10.7 and above can run in beta mode on an ARM Mac and Intel Mac running macOS Sonoma 14.0 and above. For information on known limitation, see the [Known Limitations for Mac](#mac-limitations) section below. 

{{% alert color="info" %}}
While Studio Pro on Mac is in [public beta](/releasenotes/beta-features/), Mendix can only verify support for the latest macOS version available. Support for earlier versions is not guaranteed and it is best to update macOS to the newest version when using Studio Pro. 
{{% /alert %}}

{{% alert color="warning" %}}
Administrator rights are required to install Mendix Studio Pro on Mac (Beta).
{{% /alert %}}

Studio Pro versions 10.0 and above can run on the M series Apple Silicon Mac using [Parallels 17](https://www.parallels.com/) and Windows 11. Earlier versions of Studio Pro can run on Apple Mac [using Parallels](/refguide/using-mendix-studio-pro-on-a-mac/). 

{{% alert color="info" %}}

If you were using Parallels and enabled port forwarding, but then upgraded and would like to use Studio Pro on Mac, make sure to quit Parallels to be able to sign in to Studio Pro. 

{{% /alert %}}

The following frameworks are required. They will be installed automatically by the Studio Pro installer, if necessary:

* Microsoft .NET desktop runtime (x64) and all applicable Windows security patches

    | Studio Pro 10.0.0 - 10.10.0 | Studio Pro 10.11.0 and above |
    | --- | --- |
    | .NET 6 Desktop Runtime | .NET 8 Desktop Runtime |
    
* Microsoft Visual C++ 2019 Redistributable Package (x64)
* A Java Developer Kit (JDK) version 11, 17, or 21 - if not yet installed on your machine, Mendix will install 'Eclipse Temurin JDK 21 (x64)'
* Gradle version 8.5 or above (if your Java version is 11 or 17, Gradle version 7.6 or above will also work) - if Gradle is not yet installed on your machine, Mendix will install Gradle version 8.5
* Git for Windows (x64) version 2.41.0 or above (for more information, see the [Prerequisites](/refguide/install/#prerequisites) section in *Installing Mendix Studio Pro*)
* Mendix Native Mobile Builder
* Microsoft Edge WebView2 Evergreen Runtime (x64)

When you are running Studio Pro on a Parallels virtual machine on an ARM64 device (for example, an M1 Mac), you need the following dependencies in addition to the x64 version listed above:

* .NET Desktop Runtime (arm64)
    | Studio Pro 10.0.0 - 10.10.0 | Studio Pro 10.11.0 and above |
    | --- | --- |
    | .NET 6 Desktop Runtime | .NET 8 Desktop Runtime |
* Microsoft Edge WebView2 Evergreen Runtime (arm64)

{{% alert color="info" %}}
You can choose which JDK is used for building and running locally via the **Edit** > **Preferences** menu item in Studio Pro.
{{% /alert %}}

{{% alert color="warning" %}}
Please note the limitation that the database viewer built into Studio Pro (as described in [How to Share the Development Database](/howto/data-models/sharing-the-development-database/)) does not work with JDK 11.06 or 11.07.
{{% /alert %}}

#### Known Limitations for Mac {#mac-limitations}

These are the known limitations for Mac:

* No native mobile support
* No support for document templates
* No **Structure mode** for the page editor
* Start from spreadsheet cannot be used at this time 
* If you have already installed JDK previously, it may not be picked up properly during installation. You can either configure this manually or remove all references to JDK and run the installer again.
    * The limitation that the JDK did not get installed while installing Studio Pro on macOS was removed in [10.8.0](/releasenotes/studio-pro/10.8/).

### Hardware Specifications {#hardware}

Mendix Studio Pro will run on any machine which can run the [minimum requirements for running Windows 10 64-bit](https://www.microsoft.com/en-gb/windows/windows-10-specifications#primaryR2), with the following additional requirements:

* **Disk Space** – Studio Pro requires 2GB disk space to install, and each app you create will vary in size depending on the functionality, but will take a minimum of around 150MB
* **RAM** – 8GB
* **Display Resolution** – 1080p (1920x1080)

Mendix Studio Pro on Mac (Beta) runs on any machine compatible with [macOS Sonoma](https://support.apple.com/en-us/105113)

### Firewall Settings {#firewall-settings}

Studio Pro needs access to the following URLs in order to work. If your firewall is blocking these, you will need to safelist them:

* `*.mendix.com`
* `*.mendixcloud.com`
* `*.teamserver.sprintr.com`
* `*.api.mendix.com`

If you have set up managed dependencies and are working behind a firewall or using a proxy, see the [Proxy Settings](/refguide/managed-dependencies/#proxy-settings) section of *Managed Dependencies* for advice on what you need to do to allow the managed dependencies to work.

To run a Mendix app, Mendix Studio Pro uses the following ports by default. If your firewall is blocking these, you will need to open them:

* 8080 – runtime port
* 8083 – mobile packager
* 8090 – admin port
* 8100 – sign-in port

For more information on ports and modifying Studio Pro's default ports, see [Configurations](/refguide/configuration/) and the [Troubleshooting Common Mobile Issues](/refguide/mobile/getting-started-with-mobile/prerequisites/#troubleshooting) section of *Native App Prerequisites and Troubleshooting*.

### File Locations

For active development and running your application locally, your app folder should be on a local drive (such as C:) or a network folder that has been mapped to a [Windows drive letter](https://support.microsoft.com/en-us/windows/map-a-network-drive-in-windows-10-29ce55d1-34e3-a7e2-4801-131475f9557d).

### Supported Git Service Providers {#supported-providers}

This section describes Git service providers when you are setting up your own Git repo. For information about Mendix Team Server (which is implemented using Git), see the [Team Server](#ts) section below.

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

The [Team Server](/developerportal/general/team-server/) is implemented using Git, and Studio Pro uses the HTTPS protocol to communicate with that server. To access the Team Server from within Studio Pro, the network at your location needs the following settings:

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

* Microsoft Windows Server 2012 and above
* The following Unix-like operating systems:
    * [Debian OldOldStable (LTS)](https://wiki.debian.org/DebianOldOldStable), [Debian OldStable, Debian Stable](https://wiki.debian.org/DebianReleases#Current_Releases.2FRepositories)

### Web Server

* Microsoft Internet Information Services 8 and above
* Nginx
* Apache

### Java {#java}

When running Mendix on a server, you will need Java Runtime Environment (JRE) 11, 17, or 21. To download an Eclipse Temurin OpenJDK distribution from Adoptium, see [Eclipse Temurin™ Latest Releases](https://adoptium.net/temurin/releases). To download a commercial Oracle distribution, see [Java SE Downloads](https://www.oracle.com/technetwork/java/javase/downloads/index.html).

{{% alert color="warning" %}}
Compatibility with JDK 17 has been released with Studio Pro version 10.8. Compatibility with Java 21 has been released with Studio Pro version 10.11. Mendix recommends switching to a Studio Pro version compatible with Java 21.
{{% /alert %}}

## Databases {#databases}

Mendix tries to support the most recent and patched database server versions from database vendors. We aim to add support for a new vendor version two minor Mendix versions after the vendor has released it. Dropping support for a database will be announced in the release notes at the date the vendor drops support. We will drop support two minor Mendix versions later.

Current support:

* [MariaDB](/refguide/mysql/): 10.4, 10.5, 10.6, 10.11, 11.4
* [Microsoft SQL Server](/developerportal/deploy/mendix-on-windows-microsoft-sql-server/): 2019, 2022
* [Azure SQL](https://docs.microsoft.com/en-us/sql/t-sql/statements/alter-database-transact-sql-compatibility-level?view=sql-server-2017): v12 compatibility mode 140 or higher
* [MySQL](/refguide/mysql/): 8.0, 8.4
* [Oracle Database](/refguide/oracle/): 19, 21c
* PostgreSQL: 12, 13, 14, 15, 16
* [SAP HANA](/refguide/saphana/): 2.00.076.00.1705400033

{{% alert color="warning" %}}
Each app must have its own database. Mendix apps cannot share data by sharing the same database.

If you want two apps to share the same database, then you need to share the data from one app to the other using APIs. In Mendix, these are supported by [Data Hub](/data-hub/share-data/) or the REST and OData services described in the [Integration](/refguide/integration/) section of the *Studio Pro Guide*. This is referred to as a microservices architecture.

For more information on why data cannot be shared between apps see [Data Storage](/refguide/data-storage/#databases). Use the [Database Replication](/appstore/modules/database-replication/) module if you need to copy the data from one app to another.
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

{{% alert color="info" %}}
AWS S3 is also supported in the Windows Service Console.
{{% /alert %}}

## Browsers {#browsers}

* Google Chrome (latest stable desktop and Android versions)
* Mozilla Firefox (latest stable desktop version)
* Apple Safari (latest stable desktop version and latest version for each [supported iOS](#mobileos) version)
* Microsoft Edge (latest stable desktop version)

{{% alert color="warning" %}}
Internet Explorer is not supported in Studio Pro 10.
{{% /alert %}}

## Mobile Operating Systems {#mobileos}

For native and progressive web apps built with Mendix, the following operating system versions are supported:

* Latest version of iOS
* Latest three versions of Android

Only devices running on these operating system versions receive up-to-date security fixes from their vendors and thus minimize being vulnerable to known exploits.

You can build native and progressive web apps with Mendix that run on older operating system versions than the ones we support. However, to receive official Mendix support you must demonstrate that your problem also occurs on a supported operating system version. The oldest operating system version where Mendix native mobile apps can run is determined by [React Native](https://github.com/facebook/react-native?tab=readme-ov-file#-requirements).

Mendix recommends the following minimum hardware requirements for all mobile devices running native and progressive web Mendix apps:

* CPU: minimum 2 cores with 2 GHz
* Memory: minimum 2 GB

Depending on your app's complexity, these minimum hardware requirements might not be sufficient and should be adjusted.

## MxBuild {#mxbuild}

MxBuild is a Windows and Linux command-line tool that can be used to build a Mendix Deployment Package. For more information, see [MxBuild](/refguide/mxbuild/).

* .NET

    | Studio Pro 10.0.0 - 10.10.0 | Studio Pro 10.11.0 and above |
    | --- | --- |
    | .NET 6 | .NET 8 |

* JDK 11

## mx Command-Line Tool {#mxtool}

The **mx** command-line tool is a Windows and Linux command-line tool that can be used to do useful things with your Mendix app. For more information, see [mx Command-Line Tool](/refguide/mx-command-line-tool/).

* Mono v5.20.x or .NET v4.7.2
