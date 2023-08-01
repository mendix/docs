---
title: "Installing Mendix Studio Pro"
url: /refguide/install/
linktitle: "Installing Studio Pro"
category: "Installation"
weight: 10
description: "Describes how to install Mendix Studio Pro."
tags: ["studio pro", "install", "install studio pro", "download"]
aliases:
    - /howto/general/install/
---

{{% button color="info" href="https://marketplace.mendix.com/link/studiopro/" text="Go to Marketplace" title="Download Studio Pro from the Marketplace" %}}

## 1 Introduction

Mendix Studio Pro enables you to build apps on the Mendix Platform. This document will guide you through the steps of [installing the latest version of Studio Pro](https://marketplace.mendix.com/link/studiopro/). For the full list of supported systems and required frameworks, see [System Requirements](/refguide/system-requirements/). 

If you use a Mac device, see [Configuring Parallels](/refguide/using-mendix-studio-pro-on-a-mac/) to configure your Windows virtual machine. 

For a deep-dive demonstration of how to install Studio Pro, follow along in this video:

{{< vidyard "WUp2tLi68nXFQd7xhPbDtt" >}}

## 2 Downloading Mendix Studio Pro

Mendix Studio Pro can be installed on your machine with a Windows executable file. This executable file can be downloaded from the Mendix Marketplace. Follow these steps to download Mendix Studio Pro:

1. Go to the Studio Pro download page in the [Mendix Marketplace](https://marketplace.mendix.com/link/studiopro/).
2. Click the **Download** button in the upper-right corner to download the latest Mendix Studio Pro.

## 3 Installing Mendix Studio Pro {#install}

Mendix Studio Pro needs to be installed on your computer before you can start building apps. Follow these steps to install Mendix Studio Pro:

1. Open the downloaded Mendix Studio Pro executable. It is named like this: *Mendix-10.X.X-Setup*. Then click **Next**:

    {{< figure src="/attachments/refguide/installation/install/setup-wizard.png"  >}}

2. Select **I accept the terms in the License Agreement** and click **Next**.

3. Select the folder in which you want to install Studio Pro and click **Next**:

    {{< figure src="/attachments/refguide/installation/install/select-folder.png"   >}}

4. Enter the start menu shortcuts folder you want to use and click **Next**:

    {{< figure src="/attachments/refguide/installation/install/shortcut-folder.png"  >}}

5. Check the desktop option to create a shortcut to Studio Pro on your desktop and click **Next**.
6. Click **Install** to install Studio Pro on your computer.

7. If you are asked to restart your computer, make a selection and click **Finish**. Otherwise, check **Launch Mendix 10.X.X** and click **Finish** to finish the installation and launch Studio Pro.

## 4 Troubleshooting {#troubleshooting}

Sometimes you can run into problems when installing Studio Pro. One work-around is to restart your system and install the prerequisites separately if they are not installed yet. 

The prerequisites are the following:

* [Microsoft .NET Desktop Runtime 6.0.x](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) – we recommend using version 6.0.6 or above
* [Eclipse Temurin JDK 11 (x64)](https://github.com/adoptium/temurin11-binaries/releases)
* [Microsoft Visual C++ 2015 and 2019 Redistributable Package](https://aka.ms/vs/16/release/vc_redist.x64.exe)
* [Mendix Native Mobile Builder one-click Installer](https://appdev-mx-cdn.s3.amazonaws.com/native-builders/latest.exe)
* [Git for Windows (x64)](https://git-scm.com/download/win)
* [Microsoft Edge WebView2 Evergreen Runtime (x64 or ARM64) (Evergreen Standalone Installer version)](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)
* [Gradle 7.6 or above](https://services.gradle.org/distributions/gradle-7.6-bin.zip)

Based on the error message you get from the installer you can decide to install a single prerequisite, or you can try to manually install them all.

After that you can retry installing Studio Pro.

## 5 Installing Mendix Studio Pro Offline {#offline}

The Mendix Studio Pro installation experience includes all the tools and frameworks required to run the application. If any of the prerequisites are not found at the moment of installation, the Studio Pro setup process will attempt to download and install the missing elements automatically. The Mendix Studio Pro installer does not include all dependencies and relies on internet connectivity to obtain them if any of the required pieces of software are missing. 

It is possible to prepare the prerequisite installers beforehand, so that the Mendix Studio Pro setup process can pick them up instead of downloading from the remote location. Follow these steps to prepare the installers:

1. Create a folder for the Mendix Studio Pro installer.
2. Download the latest [Mendix Studio Pro installer](https://marketplace.mendix.com/link/studiopro/) and move it into folder you created.
3. Create a folder with the name **Dependencies** in the same location where the Mendix Studio Pro installer was placed.
4. Download the prerequisites listed in the [Troubleshooting](#troubleshooting) section above and move them into the **Dependencies** folder.
5. Rename the following dependencies:
    * The Microsoft .NET Desktop Runtime 6.0.x executable (*dotnet.exe*) to *windowsdesktop-runtime-6.0-x64.exe*
    * The Java Development Kit 11 (x64) *msi* (for example, *OpenJDK11U-jdk_x64_windows_hotspot_11.0.3_7.msi*) to *adoptiumjdk_11_x64.msi*
    * The Visual C++ Redistributable for Visual Studio 2019 (x64) executable (for example, *VC_redist.x64.exe*) to *vcredist2019_x64.exe*
    * The `latest` executable to *mendix_native_mobile_builder.exe*
    * The *Git-{version}-64-bit.exe* executable to *git_for_windows_installer.exe*
    * Do not rename the Microsoft Edge WebView2 Evergreen Runtime installer *MicrosoftEdgeWebview2Setup.exe*, keep it as is
    * The Gradle zip file should be named *gradle-7.6-bin.zip*

6. Run the installer as described in the [Installing Mendix Studio Pro](#install) section above.

If the **AdoptOpenJDK 11 x64 failed; code 1639** error occurs during installation, try the following:

* Abort the installation process
* Install the Adopt Open JDK dependency manually from the dependencies folder using Administrator privileges
* Try to install Studio Pro again

## 6 Installing Mendix Studio Pro Without Admin Rights

Mendix also offers a Studio Pro installer called the **Portable** installer that does not require admin rights. The portable installer is available to download on the [Get Studio Pro](https://marketplace.mendix.com/link/studiopro/) page in the Mendix Marketplace. 

As compared to the regular installer, the portable installer installs Mendix Studio Pro in a user-level directory together with all the dependencies. This means that dependencies are not shared between Studio Pro versions, which results in higher disk space usage. In return, you do not require admin rights to install Mendix Studio Pro, while you can still use all the functionality.

## 7 Signing In

When starting Studio Pro for the first time after installation, it will ask you to sign in to the Mendix Platform. This allows you to get access to Mendix platform services from within Studio Pro, such as Team Server, Marketplace, and app deployment to the cloud.

You can sign in with your Mendix account, or with your own company account if this has been set up as an Identify Provider in the Mendix platform.

In some situations, for example, when your network has a firewall or proxy server, a warning about an untrusted certificate may appear during the sign-in process:

{{< figure src="/attachments/refguide/installation/install/untrusted-certificate.png" width="600px" >}}

To continue, you may accept the certificate for the current session by clicking the **Accept for this session** button, or install it permanently by clicking the **View certificate information** button. 

{{% alert color="warning" %}}
Accepting untrusted certificates can bring security risks. You should only do so after having received confirmation from your network administrator.
{{% /alert %}}

## 8 Next Steps

Congratulations on installing Mendix Studio Pro! Now you are ready to start modeling your apps. 

You can start with the [Studio Pro Overview](/refguide/studio-pro-overview/) for details on Studio Pro's UI and shortcuts, or you can move straight to [App Modeling](/refguide/modeling/).

Happy modeling!
