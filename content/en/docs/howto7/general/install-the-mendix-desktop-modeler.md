---
title: "Install the Mendix Desktop Modeler"
url: /howto7/general/install-the-mendix-desktop-modeler/
category: "General"
menu_order: 1
description: "Follow this how-to to learn how to install the Mendix Desktop Modeler."
toc-level: "2"
---

## 1 Introduction

The Mendix Desktop Modeler enables you to build apps on the Mendix Platform. This how-to will guide you through the steps of installing the Mendix Desktop Modeler.

**This how-to will teach you how to do the following:**

* Download the Mendix Desktop Modeler
* Install the Mendix Desktop Modeler

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* You need a Windows environment to install the Modeler (see [System Requirements](/refguide7/system-requirements/) for the full list of supported systems and required frameworks)

## 3 Download the Mendix Desktop Modeler

The Mendix Desktop Modeler can be installed on your machine with a Windows exectuable file. This executable can be downloaded from the Mendix Marketplace. Follow these steps to download the Mendix Desktop Modeler:

1. Go to the Modeler download page in the [Mendix Marketplace](https://marketplace.mendix.com/link/studiopro/).
2. Click **Download** to download the latest Mendix Desktop Modeler.

   [{{< figure src="/attachments/howto7/general/install-the-mendix-desktop-modeler/mendix-modeler-1.jpg" >}}](https://marketplace.mendix.com/link/studiopro/)

## 4 Install the Mendix Desktop Modeler

The Mendix Desktop Modeler needs to be installed on your computer before you can start building apps. Follow these steps to install the Mendix Desktop Modeler:

1. Open the downloaded Mendix Modeler executable. It is named like this: *Mendix-7.X.X-Setup*.

    {{< figure src="/attachments/howto7/general/install-the-mendix-desktop-modeler/modeler-2.png" >}}

2. Click **Next**.

    {{< figure src="/attachments/howto7/general/install-the-mendix-desktop-modeler/modeler-3.png" >}}

3. Select **I accept the terms in the License Agreement** and click **Next**.

    {{< figure src="/attachments/howto7/general/install-the-mendix-desktop-modeler/modeler-4.png" >}}

4. Select the folder where you want to install to and click **Next**.

    {{< figure src="/attachments/howto7/general/install-the-mendix-desktop-modeler/modeler-5.png" >}}

5. Enter the start menu shortcuts folder you want to use and click **Next**.

    {{< figure src="/attachments/howto7/general/install-the-mendix-desktop-modeler/modeler-6.png" >}}

6. Check the **Desktop** option to create a shortcut to the Modeler on your desktop and click **Next**.

    {{< figure src="/attachments/howto7/general/install-the-mendix-desktop-modeler/modeler-7.png" >}}

7. Click **Install** to install the Modeler on your computer.

    {{< figure src="/attachments/howto7/general/install-the-mendix-desktop-modeler/modeler-8.png" >}}

8. Check **Launch Mendix 7.X.X** and click **Finish** to finish the installation and launch the Modeler.

This concludes the how-to about installing the Mendix Desktop Modeler.

## 5 Troubleshooting

Some people run into problems when installing the Desktop Modeler. One work-around is to restart your system and install the prerequisites separately if they are not already installed. 

For a 64-bit system the prerequisites are:

* [.NET Framework 4.6.2](http://download.microsoft.com/download/F/9/4/F942F07D-F26F-4F30-B4E3-EBD54FABA377/NDP462-KB3151800-x86-x64-AllOS-ENU.exe)
* [AdoptOpenJDK 8](https://cdn.mendix.com/installer/AdoptOpenJDK/8/OpenJDK8U-jdk_x64_windows_hotspot_8u202b08.msi)
* [Microsoft Visual C++ 2010 SP1 Redistributable Package](https://download.microsoft.com/download/1/6/5/165255E7-1014-4D0A-B094-B6A430A6BFFC/vcredist_x64.exe)
* [Microsoft Visual C++ 2015 Redistributable Package](https://download.microsoft.com/download/6/A/A/6AA4EDFF-645B-48C5-81CC-ED5963AEAD48/vc_redist.x64.exe) for [Mendix 7.23.17](/releasenotes/studio-pro/7.23/#72317) and above or [Microsoft Visual C++ 2013 Redistributable Package](http://download.microsoft.com/download/2/E/6/2E61CFA4-993B-4DD4-91DA-3737CD5CD6E3/vcredist_x64.exe) for [Mendix 7.23.16](/releasenotes/studio-pro/7.23/#72316) and below

For a 32-bit system the prerequisites are:

* [.NET Framework 4.6.2](http://download.microsoft.com/download/F/9/4/F942F07D-F26F-4F30-B4E3-EBD54FABA377/NDP462-KB3151800-x86-x64-AllOS-ENU.exe)
* [AdoptOpenJDK 8](https://cdn.mendix.com/installer/AdoptOpenJDK/8/OpenJDK8U-jdk_x86-32_windows_hotspot_8u202b08.msi)
* [Microsoft Visual C++ 2010 SP1 Redistributable Package](http://download.microsoft.com/download/C/6/D/C6D0FD4E-9E53-4897-9B91-836EBA2AACD3/vcredist_x86.exe)
* [Microsoft Visual C++ 2015 Redistributable Package](https://download.microsoft.com/download/6/A/A/6AA4EDFF-645B-48C5-81CC-ED5963AEAD48/vc_redist.x86.exe) for [Mendix 7.23.17](/releasenotes/studio-pro/7.23/#72317) and above or [Microsoft Visual C++ 2013 Redistributable Package](http://download.microsoft.com/download/2/E/6/2E61CFA4-993B-4DD4-91DA-3737CD5CD6E3/vcredist_x86.exe) for [Mendix 7.23.16](/releasenotes/studio-pro/7.23/#72316) and below

Based on the error message you get from the installer you can decide to install a single prerequisite, or you can try to manually install them all.

After that you can retry installing the Desktop Modeler.

## 6 Read More

* [Desktop Modeler](/refguide7/desktop-modeler/)
* [Desktop Modeler Overview](/refguide7/desktop-modeler-overview/)
