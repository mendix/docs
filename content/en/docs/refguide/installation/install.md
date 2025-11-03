---
title: "Installing Mendix Studio Pro"
url: /refguide/install/
linktitle: "Installing Studio Pro"
weight: 10
description: "Describes how to install Mendix Studio Pro."
aliases:
    - /howto/general/install/
---

{{% button color="info" href="https://marketplace.mendix.com/link/studiopro/" text="Go to Marketplace" title="Download Studio Pro from the Marketplace" %}}

## Introduction

Mendix Studio Pro allows you to build apps on the Mendix Platform. This document will guide you through the steps of installing [the latest version of Studio Pro](https://marketplace.mendix.com/link/studiopro/). For the full list of supported systems and required frameworks, see [System Requirements](/refguide/system-requirements/). 

## Downloading Mendix Studio Pro

Mendix Studio Pro can be installed on your Windows machine with a Windows executable file or on your Mac machine using a .pkg file. This file can be downloaded from the Mendix Marketplace. 

Follow these steps to download Mendix Studio Pro:

1. Go to the Studio Pro download page in the [Mendix Marketplace](https://marketplace.mendix.com/link/studiopro/).
2. Click **Download for Windows** or **Download for Mac**, depending on your operating system. 

## Installing Mendix Studio Pro {#install}

Mendix Studio Pro needs to be installed on your computer before you can start building apps. Follow these steps to install Mendix Studio Pro:

1. Open the downloaded Mendix Studio Pro executable. It is named: *Mendix-11.X.X-Setup.exe*. Then, click **Next**:

    {{< figure src="/attachments/refguide/installation/install/setup-wizard.png" width="500" >}}

2. Select **I accept the terms in the License Agreement** and click **Next**.

3. Check the desktop option if you want to create a shortcut to Studio Pro on your desktop and click **Next**.
4. Click **Install** to install Studio Pro on your computer.

5. If you are asked to restart your computer, make a selection and click **Finish**. Otherwise, check **Launch Mendix 11.X.X** and click **Finish** to finish the installation and launch Studio Pro.

## Troubleshooting {#troubleshooting}

### Installing Prerequisites Separately {#prerequisites}

If you run into problems installing Studio Pro, one workaround is to restart your system and install the prerequisites separately if they are not installed yet. 

The prerequisites are the following:

* [Microsoft .NET Desktop Runtime 8.0.x (x64 or ARM64)](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) (Mendix recommends using version 8.0.10 or above)

* [Eclipse Temurin JDK 21 (x64 or ARM64)](https://adoptium.net/temurin/releases/?version=21)

* [Microsoft Visual C++ 2015 and 2019 Redistributable Package](https://aka.ms/vs/16/release/vc_redist.x64.exe)
* [Mendix Native Mobile Builder one-click Installer](https://appdev-mx-cdn.s3.amazonaws.com/native-builders/latest.exe)
* [Git for Windows (x64)](https://git-scm.com/download/win) (Git version [2.48.1](https://github.com/git-for-windows/git/releases/download/v2.48.1.windows.1/Git-2.48.1-64-bit.exe) or above is required)

{{% alert color="warning" %}} 
Git version 2.48.1 is automatically installed during Studio Pro installation. However, for [non-administrative installation](#offline), you must install Git manually.
{{% /alert %}}

* [Microsoft Edge WebView2 Evergreen Runtime (x64 or ARM64) (Evergreen Standalone Installer version)](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)

* [Gradle 8.5](https://gradle.org/install/#manually) with Gradle extracted to the parent directory of the folder where Studio Pro is installed (usually `C:\Program Files\Mendix`) instead of `C:\Gradle`.

Depending on the error message you get from the installer, you can choose to install a single prerequisite, or you can install them all.

Then, try installing Studio Pro again.

## Installing Mendix Studio Pro Offline {#offline}

The Mendix Studio Pro installation experience includes all the tools and frameworks required to run the application. If any of the prerequisites are not already installed, the Studio Pro setup process will automatically download and install the missing components. The Mendix Studio Pro installer does not include all dependencies and relies on internet connectivity to obtain them if any of the required pieces of software are missing. 

It is possible to prepare the prerequisite installers beforehand so the setup process can pick them up instead of downloading them from the remote location. Follow these steps to prepare the installers:

1. Create a folder for the Mendix Studio Pro installer.
2. Download the latest **[Mendix Studio Pro installer](https://marketplace.mendix.com/link/studiopro/)** and move it into the folder created.
3. Create a folder in the same location where the Mendix Studio Pro installer was moved. Name this folder *Dependencies*.
4. Download the prerequisites listed in the **[Troubleshooting](#troubleshooting)** section above and move them into the **Dependencies** folder.
5. Rename the following dependencies:
   1. Microsoft .NET Desktop Runtime 8.0.x
      * On x64, rename *windowsdesktop-runtime-8.0.10-win-x64.exe* to *windowsdesktop-runtime-8.0-x64.exe*
      * On ARM64, rename *windowsdesktop-runtime-8.0.10-win-arm64.exe* to *windowsdesktop-runtime-8.0-arm64.exe*
   2. Eclipse Temurin JDK
      * Rename the Java Development Kit 21 *msi*
        * On x64, rename *OpenJDK21U-jdk_x64_windows_hotspot_21.0.5_11.msi* to *adoptiumjdk_21_x64.msi*
        * On ARM64, rename *OpenJDK21U-jdk_aarch64_windows_hotspot_21.0.5_11.msi* to *adoptiumjdk_21_arm64.msi*
   3. Visual C++ Redistributable for Visual Studio 2019 (x64)
      * Rename the executable 
        * For example, *VC_redist.x64.exe* to *vcredist2019_x64.exe*
   4. Mendix Native Mobile Builder one-click installer
      * Rename the *latest.exe* executable to *mendix_native_mobile_builder.exe*
   5. Git for Windows (x64)
      * Rename the *Git-2.43.0-64-bit.exe* executable to *git_for_windows_installer.exe*
   6. Microsoft Edge WebView2 Evergreen Runtime (x64 or ARM64)
      * The *MicrosoftEdgeWebview2Setup.exe* does not need to be renamed
   7. Gradle
      * Rename the Gradle zip file to *gradle-8.5-bin.zip*
6. Run the installer as described in the [Installing Mendix Studio Pro](#install) section above.

If an error occurs during JDK installation, try the following:

* Abort the installation process
* Install the Adopt Open JDK dependency manually from the dependencies folder using Administrator privileges
* Try to install Studio Pro again

If managed dependencies are used, you need to set up a custom repository that can resolve the dependencies.

For more information on how to configure a custom repository, see the *Custom Repositories* section of [Managed Dependencies](/refguide/managed-dependencies/#custom-repos).

## Installing Mendix Studio Pro Without Admin Rights

Mendix offers a Studio Pro installer called the **Portable** installer that does not require admin rights. The portable installer is available to download on the [Get Studio Pro](https://marketplace.mendix.com/link/studiopro/) page in the Mendix Marketplace. 

While the regular installer installs Mendix Studio Pro dependencies in system directories, the portable installer installs Studio Pro in a user-level directory together with all the dependencies. This means that dependencies are not shared between Studio Pro versions, which results in higher disk space usage. In return, you do not require admin rights to install Studio Pro and you can still use all the functionality.

The portable installer for Windows x64 and arm64 includes mx, mxbuild, mxutil, MprTool and MendixConsoleLog.

### Git Installation

{{% alert color="info" %}}Git does not get installed automatically for the portable version because it requires Admin rights.{{% /alert %}}

You can download and install [portable version](https://git-scm.com/downloads/win) of Git and configure [Git Location](/refguide/preferences-dialog/#git-location) in **Preferences** in Studio Pro to use it.

Versions of Mendix Studio Pro that are installed via the portable installer do not show up in the Mendix Version Selector where you can manage Mendix versions. However, you can manually add a Studio Pro version by clicking **Add custom version** in **Manage Mendix versions** and specifying the path to the executable file of the Studio Pro version:

{{< figure src="/attachments/refguide/installation/install/version-selector.png"  alt="Version Selector" width="450" class="no-border" >}}

## Signing In

When starting Studio Pro for the first time after installation, it will ask you to sign in to the Mendix Platform. This gives you access to Mendix platform services such as Team Server, Marketplace, and app deployment to the cloud, from within Studio Pro.

You can sign in with your Mendix account or with your own company account if this has been set up as an Identify Provider in the Mendix platform.

In some situations, for example, when your network has a firewall or proxy server, a warning about an untrusted certificate may appear during the sign-in process:

{{< figure src="/attachments/refguide/installation/install/untrusted-certificate.png" width="600px" class="no-border" >}}

To continue, you may accept the certificate for the current session by clicking **Accept for this session**, or install it permanently by clicking **View certificate information**. 

{{% alert color="warning" %}}
Accepting untrusted certificates can bring security risks. You should only do so after having received confirmation from your network administrator.
{{% /alert %}}

## Next Steps

Congratulations on installing Mendix Studio Pro! Now you are ready to start modeling your apps. 

You can start with the [Studio Pro Overview](/refguide/studio-pro-overview/) for details on Studio Pro's UI and shortcuts, or you can move straight to [App Modeling](/refguide/modeling/). 
