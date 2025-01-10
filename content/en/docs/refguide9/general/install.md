---
title: "Installing Mendix Studio Pro"
url: /refguide9/install/
linktitle: "Install Mendix Studio Pro"
weight: 15
description: "Describes how to install Mendix Studio Pro."
aliases:
    - /howto9/general/install/
---

{{% button color="info" href="https://marketplace.mendix.com/link/studiopro/" text="Go to Marketplace" title="Download Studio Pro from the Marketplace" %}}

## Introduction

Mendix Studio Pro enables you to build apps on the Mendix Platform. This document will guide you through the steps of installing **Studio Pro 9.24 LTS**. For the full list of supported systems and required frameworks, see [System Requirements](/refguide9/system-requirements/). 

If you use a Mac device, see [Configuring Parallels](/refguide9/using-mendix-studio-pro-on-a-mac/) to configure your Windows virtual machine. 

For a deep-dive demonstration of how to install Studio Pro, follow along in this video:

{{< vidyard "WUp2tLi68nXFQd7xhPbDtt" >}}

## Downloading Mendix Studio Pro

Mendix Studio Pro can be installed on your machine with a Windows executable file. This executable file can be downloaded from the Mendix Marketplace. Follow these steps to download Mendix Studio Pro:

1. Go to the Studio Pro download page in the [Mendix Marketplace](https://marketplace.mendix.com/link/studiopro/).
2. Go to the **LTS/MTS Releases** tab and find the latest **9.24** patch.
3. Click **Download** for the latest 9.24 LTS patch version of Mendix Studio Pro.

## Installing Mendix Studio Pro {#install}

Mendix Studio Pro needs to be installed on your computer before you can start building apps. Follow these steps to install Mendix Studio Pro:

1. Open the downloaded Mendix Studio Pro executable. It is named like this: *Mendix-9.X.X-Setup*. Then click **Next**:

    {{< figure src="/attachments/refguide9/general/install/setup-wizard.png"   width="400"  class="no-border" >}}

2. Select **I accept the terms in the License Agreement** and click **Next**:

    {{< figure src="/attachments/refguide9/general/install/terms-of-use.png"   width="400"  class="no-border" >}}

3. Select the folder in which you want to install Studio Pro and click **Next**:

    {{< figure src="/attachments/refguide9/general/install/select-folder.png"   width="400"  class="no-border" >}}

4. Enter the start menu shortcuts folder you want to use and click **Next**:

    {{< figure src="/attachments/refguide9/general/install/shortcut-folder.png"   width="400"  class="no-border" >}}

5. Check the desktop option to create a shortcut to Studio Pro on your desktop and click **Next**.
6. Click **Install** to install Studio Pro on your computer:

    {{< figure src="/attachments/refguide9/general/install/ready-to-install.png"   width="400"  class="no-border" >}}

7. If you are asked to restart your computer, make a selection and click **Finish**. Otherwise, check **Launch Mendix 9.X.X** and click **Finish** to finish the installation and launch Studio Pro.

## Troubleshooting {#troubleshooting}

Sometimes you can run into problems when installing Studio Pro. One work-around is to restart your system and install the prerequisites separately if they are not installed yet. 

The prerequisites are the following:

* [Microsoft .NET Desktop Runtime 6.0.x](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) – Mendix recommends using version 6.0.6 or above
* Java JDK
     
    * For Mendix Studio Pro 9.24.16 and above – [Eclipse Temurin JDK 17 (x64)](https://github.com/adoptium/temurin17-binaries/releases)
    * For Mendix Studio Pro 9.18.0 and 9.24.15 – [Eclipse Temurin JDK 11 (x64)](https://github.com/adoptium/temurin11-binaries/releases)
    * For Mendix Studio Pro 9.14 to 9.17 – [Adoptium Temurin Java SDK](https://github.com/adoptium/temurin11-binaries/releases/download/jdk-11.0.14.1%2B1/OpenJDK11U-jdk_x64_windows_hotspot_11.0.14.1_1.msi)
    * For Mendix Studio Pro 9.13 and below – [AdoptOpenJDK 11](https://cdn.mendix.com/installer/AdoptOpenJDK/OpenJDK11U-jdk_x64_windows_hotspot_11.0.3_7.msi)
* [Microsoft Visual C++ 2015 and 2019 Redistributable Package](https://aka.ms/vs/16/release/vc_redist.x64.exe)
* [Mendix Native Mobile Builder one-click Installer](https://appdev-mx-cdn.s3.amazonaws.com/native-builders/latest.exe)
* [Git for Windows (x64)](https://git-scm.com/download/win) using the following versions:

    | 9.18.0 - 9.24.5 | 9.24.6 - onwards | 
    | --- | --- |
    | [2.37.1](https://github.com/git-for-windows/git/releases/tag/v2.37.1.windows.1) | [2.41.0](https://github.com/git-for-windows/git/releases/tag/v2.41.0.windows.3) |

* [Microsoft Edge WebView2 Evergreen Runtime (x64 or ARM64) (Evergreen Standalone Installer version)](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)
* Mendix Studio Pro version 9.24.0 and above require the following versions of [Gradle](https://gradle.org/install/#manually) with Gradle extracted to the parent directory of the folder where Studio Pro is installed (usually `C:\Program Files\Mendix`) instead of `C:\Gradle`.
    * Mendix Studio Pro versions 9.24.0 to 9.24.10 require Gradle version 7.6 or above
    * Mendix Studio Pro version 9.24.11 and above require Gradle version 7.6.3 or above

Based on the error message you get from the installer you can decide to install a single prerequisite, or you can try to manually install them all.

After that you can retry installing Studio Pro.

## Installing Mendix Studio Pro Offline {#offline}

The Mendix Studio Pro installation experience includes all the tools and frameworks required to run the application. If any of the prerequisites are not found at the moment of installation, the Studio Pro setup process will attempt to download and install the missing elements automatically. The Mendix Studio Pro installer does not include all dependencies and relies on internet connectivity to obtain them if any of the required pieces of software are missing. 

It is possible to prepare the prerequisite installers beforehand, so that the Mendix Studio Pro setup process can pick them up instead of downloading from the remote location. Follow these steps to prepare the installers:

1. Create a folder for the Mendix Studio Pro installer.
2. Download the latest [Mendix Studio Pro installer](https://marketplace.mendix.com/link/studiopro/) and move it into folder you created.
3. Create a folder with the name **Dependencies** in the same location where the Mendix Studio Pro installer was placed.
4. Download the prerequisites listed in the [Troubleshooting](#troubleshooting) section above and move them into the **Dependencies** folder.
5. Rename the following dependencies:
    * The Microsoft .NET Desktop Runtime 6.0.x executable (*dotnet.exe*) to *windowsdesktop-runtime-6.0-x64.exe*
    * The Java Development Kit 11 or 17 (x64) *msi* (for example, *OpenJDK17U-jdk_x64_windows_hotspot_17.0.10_7.msi*) to one of the following, depending on the Studio Pro version:
        * *adoptiumjdk_17_x64.msi* – for versions 9.24.16 and above
        * *adoptiumjdk_11_x64.msi* – for versions between 9.14.0 and 9.24.15 
        * *adoptopenjdk_11_x64.msi* – for versions 9.13.x and below
    * The Visual C++ Redistributable for Visual Studio 2019 (x64) executable (for example, *VC_redist.x64.exe*) to *vcredist2019_x64.exe*
    * The `latest` executable to *mendix_native_mobile_builder.exe*
    * The *Git-{version}-64-bit.exe* executable to *git_for_windows_installer.exe*
    * Do not rename the Microsoft Edge WebView2 Evergreen Runtime installer *MicrosoftEdgeWebview2Setup.exe*, keep it as is
    * For Mendix 9 versions 9.24.11 and above, use Gradle version 7.6.3 in a zip file named *gradle-7.6.3-bin.zip*
    * For Mendix versions 9.24.0 to 9.24.10, use Gradle version 7.6 in a zip file named *gradle-7.6-bin.zip*

6. Run the installer as described in the [Installing Mendix Studio Pro](#install) section above.

If the **AdoptOpenJDK 11 x64 failed; code 1639** error occurs during installation, try the following:

* Abort the installation process
* Install the Adopt Open JDK dependency manually from the dependencies folder using Administrator privileges
* Try to install Studio Pro again

## Signing In

When starting Studio Pro for the first time after installation, it will ask you to sign in to the Mendix Platform. This allows you to get access to Mendix platform services from within Studio Pro, such as Team Server, Marketplace, and app deployment to the cloud.

You can sign in with your Mendix account, or with your own company account if this has been set up as an Identify Provider in the Mendix platform.

In some situations, for example, when your network has a firewall or proxy server, a warning about an untrusted certificate may appear during the sign-in process:

{{< figure src="/attachments/refguide9/general/install/untrusted-certificate.png" width="600px" class="no-border" >}}

To continue, you may accept the certificate for the current session by clicking the **Accept for this session** button, or install it permanently by clicking the **View certificate information** button. 

{{% alert color="warning" %}}
Accepting untrusted certificates can bring security risks. You should only do so after having received confirmation from your network administrator.
{{% /alert %}}

## Read More

* [Studio Pro Overview](/refguide9/studio-pro-overview/)
* [App Modeling](/refguide9/modeling/)
