---
title: "Install Mendix Studio Pro"
url: /howto/general/install/
category: "General Info"
weight: 5
description: "Describes how to install Mendix Studio Pro."
tags: ["studio pro", "install", "install studio pro", "download"]
---

{{< figure src="/attachments/howto/general/install/download.png" link="https://marketplace.mendix.com/link/studiopro/" >}}

## 1 Introduction

Mendix Studio Pro enables you to build apps on the Mendix Platform. This how-to will guide you through the steps of installing the [latest version of Studio Pro](https://marketplace.mendix.com/link/studiopro/). If you use a Mac device, see [Configure Parallels](/howto/general/using-mendix-studio-pro-on-a-mac/) to configure your Windows virtual machine.

For a deep-dive demonstration of how to install Studio Pro, follow along in this video:

{{< vidyard "WUp2tLi68nXFQd7xhPbDtt" >}}

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* A Windows environment to install Studio Pro (For the full list of supported systems and required frameworks, see [System Requirements](/refguide/system-requirements/))

## 3 Downloading Mendix Studio Pro

Mendix Studio Pro can be installed on your machine with a Windows executable file. This executable file can be downloaded from the Mendix Marketplace. Follow these steps to download Mendix Studio Pro:

1. Go to the Studio Pro download page in the [Mendix Marketplace](https://marketplace.mendix.com/link/studiopro/).
2. Click the **Download** button in the upper-right corner to download the latest Mendix Studio Pro.

## 4 Installing Mendix Studio Pro {#install}

Mendix Studio Pro needs to be installed on your computer before you can start building apps. Follow these steps to install Mendix Studio Pro:

1. Open the downloaded Mendix Studio Pro executable. It is named like this: *Mendix-9.X.X-Setup*. Then click **Next**:

    {{< figure src="/attachments/howto/general/install/setup-wizard.png"   width="400"  >}}

2. Select **I accept the terms in the License Agreement** and click **Next**:

    {{< figure src="/attachments/howto/general/install/terms-of-use.png"   width="400"  >}}

3. Select the folder in which you want to install Studio Pro and click **Next**:

    {{< figure src="/attachments/howto/general/install/select-folder.png"   width="400"  >}}

4. Enter the start menu shortcuts folder you want to use and click **Next**:

    {{< figure src="/attachments/howto/general/install/shortcut-folder.png"   width="400"  >}}

5. Check the desktop option to create a shortcut to Studio Pro on your desktop and click **Next**.
6. Click **Install** to install Studio Pro on your computer:

    {{< figure src="/attachments/howto/general/install/ready-to-install.png"   width="400"  >}}

7. If you are asked to restart your computer, make a selection and click **Finish**. Otherwise, check **Launch Mendix 9.X.X** and click **Finish** to finish the installation and launch Studio Pro.

## 5 Troubleshooting {#troubleshooting}

Sometimes you can run into problems when installing Studio Pro. One work-around is to restart your system and install the prerequisites separately if they are not installed yet. 

The prerequisites are the following:

* [Microsoft .NET Desktop Runtime 6.0.x](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) – we recommend using version 6.0.6 or above
* Java JDK

    * For Mendix Studio Pro version 9.18.0 and above – [Eclipse Temurin JDK 11 (x64)](https://github.com/adoptium/temurin11-binaries/releases)
    * For Mendix Studio Pro versions above 9.14.0 but below 9.18.0 – [Adoptium Temurin Java SDK](https://github.com/adoptium/temurin11-binaries/releases/download/jdk-11.0.14.1%2B1/OpenJDK11U-jdk_x64_windows_hotspot_11.0.14.1_1.msi)
    * For Mendix Studio Pro versions below 9.14.0 – [AdoptOpenJDK 11](https://cdn.mendix.com/installer/AdoptOpenJDK/OpenJDK11U-jdk_x64_windows_hotspot_11.0.3_7.msi)
* [Microsoft Visual C++ 2015 and 2019 Redistributable Package](https://aka.ms/vs/16/release/vc_redist2019.x64.exe)
* [Mendix Native Mobile Builder one-click Installer](https://appdev-mx-cdn.s3.amazonaws.com/native-builders/latest.exe)
* [Git for Windows (x64)](https://git-scm.com/download/win)
* [Microsoft Edge WebView2 Evergreen Runtime (x64)](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)

Based on the error message you get from the installer you can decide to install a single prerequisite, or you can try to manually install them all.

After that you can retry installing Studio Pro.

## 6 Installing Mendix Studio Pro Offline {#offline}

The Mendix Studio Pro installation experience includes all the tools and frameworks required to run the application. If any of the prerequisites are not found at the moment of installation, the Studio Pro setup process will attempt to download and install the missing elements automatically. The Mendix Studio Pro installer does not include all dependencies and relies on internet connectivity to obtain them if any of the required pieces of software are missing. 

It is possible to prepare the prerequisite installers beforehand, so that the Mendix Studio Pro setup process can pick them up instead of downloading from the remote location. Follow these steps to prepare the installers:

1. Create a folder for the Mendix Studio Pro installer.
2. Download the latest [Mendix Studio Pro installer](https://marketplace.mendix.com/link/studiopro/) and move it into folder you created.
3. Create a folder with the name **Dependencies** in the same location where the Mendix Studio Pro installer was placed.
4. Download the prerequisites listed in the [Troubleshooting](#troubleshooting) section above and move them into the **Dependencies** folder.
{{% todo %}}Are these renames correct for every Mx9 version?{{% /todo %}}
5. Rename the following dependencies:
    * The `Microsoft .NET Desktop Runtime 6.0.x` executable (`dotnet.exe`) to `windowsdesktop-runtime-6.0.3-win-x64.exe` 
    * The `Java Development Kit 11 (x64)` *msi* (for example `OpenJDK11U-jdk_x64_windows_hotspot_11.0.3_7.msi`) to one of the following - depending on the Mendix Studio Pro version:
        * `adoptiumjdk_11_x64.msi` – for versions 9.14.0 and above
        * `adoptopenjdk_11_x64.msi` – for versions 9.13.x and below

    * The `Visual C++ Redistributable for Visual Studio 2019 (x64)` (for example `VC_redist.x64.exe`) executable to `vcredist2019_x64.exe`
    * The `latest` executable to `mendix_native_mobile_builder.exe`
6. Run the installer as described in the [Installing Mendix Studio Pro](#install) section above.

If during installation the **AdoptOpenJDK 11 x64 failed; code 1639** error occurs, try the following:

* Abort the installation process
* Install the Adopt Open JDK dependency manually from the dependencies folder using Administrator privileges
* Try to install Studio Pro again

## 7 Read More

* [Studio Pro Overview](/refguide/studio-pro-overview/)
* [App Modeling](/refguide/modeling/)
