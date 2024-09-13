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

Mendix Studio Pro allows you to build apps on the Mendix Platform. This document will guide you through the steps of [installing the latest version of Studio Pro](https://marketplace.mendix.com/link/studiopro/). For the full list of supported systems and required frameworks, see [System Requirements](/refguide/system-requirements/). 

If you use a Mac device and need to use a version of Mendix Studio Pro older than 10.7, see [Configuring Parallels](/refguide/using-mendix-studio-pro-on-a-mac/) to configure your Windows virtual machine. 

## Downloading Mendix Studio Pro

Mendix Studio Pro can be installed on your Windows machine with a Windows executable file or on your Mac machine using a .pkg file. This file can be downloaded from the Mendix Marketplace. 

Follow these steps to download Mendix Studio Pro:

1. Go to the Studio Pro download page in the [Mendix Marketplace](https://marketplace.mendix.com/link/studiopro/).
2. Click **Download for Windows** or **Download for Mac**, depending on your operating system. 

## Installing Mendix Studio Pro {#install}

Mendix Studio Pro needs to be installed on your computer before you can start building apps. Follow these steps to install Mendix Studio Pro:

1. Open the downloaded Mendix Studio Pro executable. It is named: *Mendix-10.X.X-Setup*. Then, click **Next**:

    {{< figure src="/attachments/refguide/installation/install/setup-wizard.png"  class="no-border" >}}

2. Select **I accept the terms in the License Agreement** and click **Next**.

3. Check the desktop option to create a shortcut to Studio Pro on your desktop and click **Next**.
4. Click **Install** to install Studio Pro on your computer.

5. If you are asked to restart your computer, make a selection and click **Finish**. Otherwise, check **Launch Mendix 10.X.X** and click **Finish** to finish the installation and launch Studio Pro.

## Troubleshooting {#troubleshooting}

### Installing Prerequisites Separately {#prerequisites}

If you run into problems installing Studio Pro, one work-around is to restart your system and install the prerequisites separately if they are not installed yet. 

The prerequisites are the following:

* Microsoft .NET Desktop Runtime

    | Studio Pro 10.0.0 - 10.10.0 | Studio Pro 10.11.0 and above |
    | --- | --- |
    | [.NET Desktop Runtime 6.0.x](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) <br/> Mendix recommends using version 6.0.6 or above | [.NET Desktop Runtime 8.0.x](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) |

* [Eclipse Temurin JDK 11, 17, or 21 (x64)](https://adoptium.net/temurin/releases/?version=21) (see [JDK Installation](/refguide/jdk-installation/) if you want to install another version of the JDK)
* [Microsoft Visual C++ 2015 and 2019 Redistributable Package](https://aka.ms/vs/16/release/vc_redist.x64.exe)
* [Mendix Native Mobile Builder one-click Installer](https://appdev-mx-cdn.s3.amazonaws.com/native-builders/latest.exe)
* [Git for Windows (x64)](https://git-scm.com/download/win) using the versions described below. These are the versions of Git that Studio Pro installs if the Git version installed on the system is below the suggested one.  
  
    | Studio Pro 10.0.0 - 10.1.0 | Studio Pro 10.2.0 - 10.9 | Studio Pro 10.10 and above |
    | --- | --- | --- |
    | [2.37.1](https://github.com/git-for-windows/git/releases/tag/v2.37.1.windows.1) | [2.41.0](https://github.com/git-for-windows/git/releases/tag/v2.41.0.windows.3) | [2.43.0](https://github.com/git-for-windows/git/releases/tag/v2.43.0.windows.1)|
    
* [Microsoft Edge WebView2 Evergreen Runtime (x64 or ARM64) (Evergreen Standalone Installer version)](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)
* [Gradle 7.6 or above](https://gradle.org/install/#manually) with Gradle extracted to the parent directory of the folder where Studio Pro is installed (usually `C:\Program Files\Mendix`) instead of `C:\Gradle`.

Based on the error message you get from the installer, you can choose to install a single prerequisite, or you can try to manually install them all.

Then, you can retry installing Studio Pro.

## Installing Mendix Studio Pro Offline {#offline}

The Mendix Studio Pro installation experience includes all the tools and frameworks required to run the application. If any of the prerequisites are not found at the moment of installation, the Studio Pro setup process will attempt to download and install the missing elements automatically. The Mendix Studio Pro installer does not include all dependencies and relies on internet connectivity to obtain them if any of the required pieces of software are missing. 

It is possible to prepare the prerequisite installers beforehand so the setup process can pick them up instead of downloading from the remote location. Follow these steps to prepare the installers:

1. Create a folder for the Mendix Studio Pro installer.
2. Download the latest [Mendix Studio Pro installer](https://marketplace.mendix.com/link/studiopro/) and move it into folder you created.
3. Create a folder with the name *Dependencies* in the same location where the Mendix Studio Pro installer was placed.
4. Download the prerequisites listed in the [Troubleshooting](#troubleshooting) section above and move them into the **Dependencies** folder.
5. Rename the following dependencies:
    * For Studio Pro versions 10.0.0 -10.10.0, The Microsoft .NET Desktop Runtime 6.0.x executable (*dotnet.exe*) to *windowsdesktop-runtime-6.0-x64.exe*
    * For Studio Pro versions 10.11.0 and above, The Microsoft .NET Desktop Runtime 8.0.x executable (*dotnet.exe*) to *windowsdesktop-runtime-8.0-x64.exe*
    * The Java Development Kit 11 (x64) *msi* (for example, *OpenJDK11U-jdk_x64_windows_hotspot_11.0.3_7.msi*) to*adoptiumjdk_11_x64.msi*
    * The Visual C++ Redistributable for Visual Studio 2019 (x64) executable (for example, *VC_redist.x64.exe*) to*vcredist2019_x64.exe*
    * The `latest` executable to *mendix_native_mobile_builder.exe*
    * The *Git-{version}-64-bit.exe* executable to *git_for_windows_installer.exe*
    * Do not rename the Microsoft Edge WebView2 Evergreen Runtime installer *MicrosoftEdgeWebview2Setup.exe*; keep it as is
    * For Mendix 10.10.0 and above, the Gradle zip file should be named *gradle-8.5-bin.zip*
    * For Mendix 10 versions below 10.10.0, the Gradle zip file should be named *gradle-7.6.3-bin.zip*

6. Run the installer as described in the [Installing Mendix Studio Pro](#install) section above.

If an error occurs during JDK installation, try the following:

* Abort the installation process
* Install the Adopt Open JDK dependency manually from the dependencies folder using Administrator privileges
* Try to install Studio Pro again

If managed dependencies are used (in Mendix 10.3.0 and above), you need to set up a custom repository that can resolve the dependencies.

For more information on how to configure a custom repository, see the *Custom Repositories* section of [Managed Dependencies](/refguide/managed-dependencies/#custom-repos).

## Installing Mendix Studio Pro Without Admin Rights

Mendix offers a Studio Pro installer called the **Portable** installer that does not require admin rights. The portable installer is available to download on the [Get Studio Pro](https://marketplace.mendix.com/link/studiopro/) page in the Mendix Marketplace. 

While the regular installer installs Mendix Studio Pro dependencies in system directories, the portable installer installs Studio Pro in a user-level directory together with all the dependencies. This means that dependencies are not shared between Studio Pro versions, which results in higher disk space usage. In return, you do not require admin rights to install Studio Pro and you can still use all the functionalities.

The portable installer does not include all tools that come installed with Studio Pro or can be leveraged by Studio Pro, such as the MPR tool, mx, MxBuild, mxuit, or the Console Log. The portable installer only includes the tools that are necessary to be able to build with Studio Pro and to run apps locally. 

Mendix Studio Pro that is installed via the portable installer does not show up in the in the Mendix Version Selector where you can manage Mendix versions. However, you can manually add a Studio Pro version by clicking **Add custom version** in the **Manage Mendix versions** and specifying the path to the executable file of the Studio Pro version:

{{< figure src="/attachments/refguide/installation/install/version-selector.png"  alt="Version Selector" width="450" class="no-border" >}}

## Signing In

When starting Studio Pro for the first time after installation, it will ask you to sign in to the Mendix Platform. This gives you access to Mendix platform services from within Studio Pro, such as Team Server, Marketplace, and app deployment to the cloud.

You can sign in with your Mendix account or with your own company account if this has been set up as an Identify Provider in the Mendix platform.

In some situations, (for example, when your network has a firewall or proxy server), a warning about an untrusted certificate may appear during the sign-in process:

{{< figure src="/attachments/refguide/installation/install/untrusted-certificate.png" width="600px" class="no-border" >}}

To continue, you may accept the certificate for the current session by clicking **Accept for this session**, or install it permanently by clicking **View certificate information**. 

{{% alert color="warning" %}}
Accepting untrusted certificates can bring security risks. You should only do so after having received confirmation from your network administrator.
{{% /alert %}}

## Next Steps

Congratulations on installing Mendix Studio Pro! Now you are ready to start modeling your apps. 

You can start with the [Studio Pro Overview](/refguide/studio-pro-overview/) for details on Studio Pro's UI and shortcuts, or you can move straight to [App Modeling](/refguide/modeling/). 
