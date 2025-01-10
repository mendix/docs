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

If you use a Mac device and need to use a version of Mendix Studio Pro older than 10.7, see [Configuring Parallels](/refguide/using-mendix-studio-pro-on-a-mac/) to configure a Windows virtual machine. 

## Downloading Mendix Studio Pro

Mendix Studio Pro can be installed on your Windows machine with a Windows executable file or on your Mac machine using a .pkg file. This file can be downloaded from the Mendix Marketplace. 

Follow these steps to download Mendix Studio Pro:

1. Go to the Studio Pro download page in the [Mendix Marketplace](https://marketplace.mendix.com/link/studiopro/).
2. Click **Download for Windows** or **Download for Mac**, depending on your operating system. 

## Installing Mendix Studio Pro {#install}

Mendix Studio Pro needs to be installed on your computer before you can start building apps. Follow these steps to install Mendix Studio Pro:

1. Open the downloaded Mendix Studio Pro executable. It is named: *Mendix-10.X.X-Setup.exe*. Then, click **Next**:

    {{< figure src="/attachments/refguide/installation/install/setup-wizard.png"  class="no-border" >}}

2. Select **I accept the terms in the License Agreement** and click **Next**.

3. Check the desktop option if you want to create a shortcut to Studio Pro on your desktop and click **Next**.
4. Click **Install** to install Studio Pro on your computer.

5. If you are asked to restart your computer, make a selection and click **Finish**. Otherwise, check **Launch Mendix 10.X.X** and click **Finish** to finish the installation and launch Studio Pro.

## Troubleshooting {#troubleshooting}

### Installing Prerequisites Separately {#prerequisites}

If you run into problems installing Studio Pro, one work-around is to restart your system and install the prerequisites separately if they are not installed yet. 

The prerequisites are the following:

* Microsoft .NET Desktop Runtime

    | Studio Pro 10.0.0 - 10.10.0 | Studio Pro 10.11.0 and above |
    | --- | --- |
    | [.NET Desktop Runtime 6.0.x (x64 or ARM64)](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) <br/> Mendix recommends using version 6.0.35 or above | [.NET Desktop Runtime 8.0.x (x64 or ARM64)](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) <br/> Mendix recommends using version 8.0.10 or above |

* Eclipse Temurin JDK (x64) (see [JDK Installation](/refguide/jdk-installation/) if you want to install another version of the JDK). Mendix version 10.8.0 and 10.0.9 supports JDK 11 and 17. Mendix version 10.10.0 supports JDK 11, 17, and 21, but installer still installs JDK 11.

    | Studio Pro 10.0.0 - 10.10.0 | Studio Pro 10.11.0 and above |
    | --- | --- |
    | [JDK 11 (x64)](https://adoptium.net/temurin/releases/?version=11) | [JDK 21 (x64 or ARM64)](https://adoptium.net/temurin/releases/?version=21) |

* [Microsoft Visual C++ 2015 and 2019 Redistributable Package](https://aka.ms/vs/16/release/vc_redist.x64.exe)

* [Mendix Native Mobile Builder one-click Installer](https://appdev-mx-cdn.s3.amazonaws.com/native-builders/latest.exe)

* [Git for Windows (x64)](https://git-scm.com/download/win) using the versions described below. These are the versions of Git that Studio Pro installs if the Git version installed on the system is below the suggested one.  
  
    | Studio Pro 10.0.0 - 10.1.0 | Studio Pro 10.2.0 - 10.9 | Studio Pro 10.6.10 (MTS), 10.10 and above
    | --- | --- | --- |
    | [2.37.1](https://github.com/git-for-windows/git/releases/tag/v2.37.1.windows.1) | [2.41.0](https://github.com/git-for-windows/git/releases/tag/v2.41.0.windows.3) | [2.43.0](https://github.com/git-for-windows/git/releases/tag/v2.43.0.windows.1)|
    
    {{% alert color="info" %}}You do not need to install Git for all operations, but you may need to install the Git CLI if you perform certain actions. For example, [rebase](/refguide/merge-algorithm/#rebase) will not work without Git being installed.{{% /alert %}}
    
* [Microsoft Edge WebView2 Evergreen Runtime (x64 or ARM64) (Evergreen Standalone Installer version)](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)
* One of the following versions of [Gradle](https://gradle.org/install/#manually) with Gradle extracted to the parent directory of the folder where Studio Pro is installed (usually `C:\Program Files\Mendix`) instead of `C:\Gradle`.

    | Studio Pro 10.0.0 - 10.9.0 | Studio Pro 10.10.0 and above |
    | --- | --- |
    | Gradle 7.6.3 or above | Gradle 8.5  |

Depending on the error message you get from the installer, you can choose to install a single prerequisite, or you can install them all.

Then, try installing Studio Pro again.

## Installing Mendix Studio Pro Offline {#offline}

The Mendix Studio Pro installation experience includes all the tools and frameworks required to run the application. If any of the prerequisites are not already installed, the Studio Pro setup process will automatically download and install the missing components. The Mendix Studio Pro installer does not include all dependencies and relies on internet connectivity to obtain them if any of the required pieces of software are missing. 

It is possible to prepare the prerequisite installers beforehand so the setup process can pick them up instead of downloading them from the remote location. Follow these steps to prepare the installers:

1. Create a folder for the Mendix Studio Pro installer.
2. Download the latest **[Mendix Studio Pro installer](https://marketplace.mendix.com/link/studiopro/)** and move it into the folder created.
3. Create a folder in the same location where the Mendix Studio Pro installer was moved. Name this folder *Dependencies*.
4. Download the prerequisites listed in the **[Troubleshooting](https://docs.mendix.com/refguide9/install/#troubleshooting)** section above and move them into the **Dependencies** folder.
5. Rename the following dependencies:
   1. Microsoft .NET Desktop Runtime
      * For Studio Pro versions 10.0.0 through 10.10.0, rename the Microsoft .NET Desktop Runtime 6.0.x
        * On x64, rename *windowsdesktop-runtime-6.0.35-win-x64.exe* to *windowsdesktop-runtime-6.0-x64.exe*
        * On ARM64, rename *windowsdesktop-runtime-6.0.35-win-arm64.exe* to *windowsdesktop-runtime-6.0-arm64.exe*
      * For Studio Pro versions 10.11.0 and above, rename the Microsoft .NET Desktop Runtime 8.0.x
        * On x64, rename *windowsdesktop-runtime-8.0.10-win-x64.exe* to *windowsdesktop-runtime-8.0-x64.exe*
        * On ARM64, rename *windowsdesktop-runtime-8.0.10-win-arm64.exe* to *windowsdesktop-runtime-8.0-arm64.exe*
   2. Eclipse Temurin JDK (x64)
      * For Studio Pro versions 10.0.0 through 10.10.0, rename the Java Development Kit 11 (x64) *msi* 
        * For example, *OpenJDK11U-jdk_x64_windows_hotspot_11.0.20.1_1.msi* to *adoptiumjdk_11_x64.msi*
      * For Studio Pro versions 10.11.0 through 10.18.0, rename the Java Development Kit 21 (x64) *msi* 
        * For example, *OpenJDK21U-jdk_x64_windows_hotspot_21.0.4_7.msi* to *adoptiumjdk_21_x64.msi*
      * For Studio Pro versions 10.12.11 and 10.18.1 and above, rename the Java Development Kit 21 *msi*
        * On x64, rename *OpenJDK21U-jdk_x64_windows_hotspot_21.0.5_11.msi* to *adoptiumjdk_21_x64.msi*
        * On ARM64, rename *OpenJDK21U-jdk_aarch64_windows_hotspot_21.0.5_11.msi* to *adoptiumjdk_21_arm64.msi*
   3. Visual C++ Redistributable for Visual Studio 2019 (x64)
      * Rename the executable 
        * For example, *VC_redist.x64.exe* to *vcredist2019_x64.exe*
   4. Mendix Native Mobile Builder one-click installer
      * Rename the *latest.exe* executable to *mendix_native_mobile_builder.exe*
   5. Git for Windows (x64)
      * For Studio Pro versions 10.0.0 and 10.1.0, rename the *Git-2.37.1-64-bit.exe* executable to *git_for_windows_installer.exe*
      * For Studio Pro versions 10.2.0, 10.6.10 (or 10.6 MTS above 10.6.10), and 10.9.0, rename the *Git-2.41.0.3-64-bit.exe* executable to *git_for_windows_installer.exe*
      * For Studio Pro versions 10.10.0 and above, rename the *Git-2.43.0-64-bit.exe* executable to *git_for_windows_installer.exe*
   6. Microsoft Edge WebView2 Evergreen Runtime (x64 or ARM64)
      * The *MicrosoftEdgeWebview2Setup.exe* does not need to be renamed
   7. Gradle
      * For Studio Pro versions 10.0.0 through 10.9.0, rename the Gradle zip file *gradle-7.6.3-bin.zip* to *gradle-7.6-bin.zip*
      * For Studio Pro versions 10.10.0 and above, rename the Gradle zip file to *gradle-8.5-bin.zip*
6. Run the installer as described in the [Installing Mendix Studio Pro](#install) section above.

If an error occurs during JDK installation, try the following:

* Abort the installation process
* Install the Adopt Open JDK dependency manually from the dependencies folder using Administrator privileges
* Try to install Studio Pro again

If managed dependencies are used (in Mendix 10.3.0 and above), you need to set up a custom repository that can resolve the dependencies.

For more information on how to configure a custom repository, see the *Custom Repositories* section of [Managed Dependencies](/refguide/managed-dependencies/#custom-repos).

## Installing Mendix Studio Pro Without Admin Rights

Mendix offers a Studio Pro installer called the **Portable** installer that does not require admin rights. The portable installer is available to download on the [Get Studio Pro](https://marketplace.mendix.com/link/studiopro/) page in the Mendix Marketplace. 

While the regular installer installs Mendix Studio Pro dependencies in system directories, the portable installer installs Studio Pro in a user-level directory together with all the dependencies. This means that dependencies are not shared between Studio Pro versions, which results in higher disk space usage. In return, you do not require admin rights to install Studio Pro and you can still use all the functionality.

For Studio Pro version below 10.14, the portable installer does not include all the tools, such as MprTool, mx, mxbuild, mxutil, or MendixConsoleLog, that come installed with Studio Pro or can be leveraged by Studio Pro. The portable installer only includes the tools that are necessary to be able to build with Studio Pro and run apps locally. 

From Studio Pro version 10.14.0, the portable installer for Windows x64 and arm64 includes mx, mxbuild, mxutil, MprTool and MendixConsoleLog.

{{% alert color="info" %}}Git does not get installed automatically for the portable version because it requires Admin rights.{{% /alert %}}

Versions of Mendix Studio Pro that are installed via the portable installer do not show up in the Mendix Version Selector where you can manage Mendix versions. However, you can manually add a Studio Pro version by clicking **Add custom version** in **Manage Mendix versions** and specifying the path to the executable file of the Studio Pro version:

{{< figure src="/attachments/refguide/installation/install/version-selector.png"  alt="Version Selector" width="450" class="no-border" >}}

## Signing In

When starting Studio Pro for the first time after installation, it will ask you to sign in to the Mendix Platform. This gives you access to Mendix platform services such as Team Server, Marketplace, and app deployment to the cloud, from within Studio Pro.

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
