---
title: "Installing the Workstation Client"
url: /mendix-workstation/install-client/
description: "Describes how to download and install the Workstation Client."
weight: 30
aliases:
    - /mendix-workstation/prerequisites/
---

## Introduction

After [creating one or more workspaces](/mendix-workstation/management-config/) for your organization, you can proceed by installing the Workstation Client on the computers which you want to register as stations in Workstation Management.

## Prerequisites {#prerequisites}

Before you install the Workstation Client, ensure that you fulfill the following prerequisites.

### System Requirements

* Operating System - Windows 10 or Windows 11 (64-bit);  Linux ARM64; macOS (Apple Silicon)
* Memory - Minimum 4 GB RAM (8 GB recommended for optimal performance)
* Disk Space - 400 MB of free disk space for installation

### Access Requirements

You must have a Mendix account with [owner or admin](/mendix-workstation/management-team/) access to Mendix Workstation Management.

## Downloading the Client

You can download the Client from the Mendix Marketplace at the following links:

* [Workstation Client](https://marketplace.mendix.com/link/component/247448) - For Microsoft Windows. Creates a global installation of the Workstation Client. Must be installed as a Windows user with administrator rights.
* [Workstation Client Portable](https://marketplace.mendix.com/link/component/247456) - For Microsoft Windows. Creates a portable installation of the Workstation Client. Does not require Windows administrator rights.
* [Workstation Client Linux ARM 64](https://marketplace.mendix.com/link/component/247459) - For Linux ARM 64.
* [Workstation Client macOS](https://marketplace.mendix.com/link/component/253905) - For macOS. Only Apple Silicon is supported.

Alternatively, you can download the [global Microsoft Windows](https://marketplace.mendix.com/link/component/247448) version of the Client directly from Workstation Management by performing the following steps:

1. Open the [station that you created](/mendix-workstation/management-config/) and click **Register Computer**.

    {{< figure src="/attachments/workstation/wks-install5.png" class="no-border" >}}

2. In the **Computer Registration** dialog, click **Download**.

This opens the Mendix Marketplace page for the [global Microsoft Windows version of the installer](https://marketplace.mendix.com/link/component/247448). If you want to install the [portable](https://marketplace.mendix.com/link/component/247456), [Linux](https://marketplace.mendix.com/link/component/247459) or [macOS](https://marketplace.mendix.com/link/component/253905) version, use the Marketplace search, or navigate to them through the above links. 

{{< figure src="/attachments/workstation/wks-install6.png" class="no-border" >}}

## Installing the Workstation Client

Refer to the following topics for information about installing the Workstation Client.

### Windows (Global)

If you have administrator rights for your Windows computer, install the Workstation Client by performing the following steps:

1. Download the [global Microsoft Windows version of the installer](https://marketplace.mendix.com/link/component/247448).
2. Run the Workstation Client installer. 
3. If you get a prompt from Windows User Account Control, click **Yes** to allow Workstation Client to be installed. 

    For a silent installation, you can also run the installer as an administrator with the `/S` argument, that is, `MendixWorkstationX.Y.Z.exe /S`. 
    
    The default installation folder is *C:\Program Files\Mendix Workstation*. The app data folder can be found at *C:\ProgramData\Mendix Workstation*. The client runs automatically after the installation is completed.

4. After the installation finishes, start the Workstation Client.

### Windows Portable

If you do not have administrator rights for your Windows computer, create a portable instance of the Workstation Client by performing the following steps:

1. Download the [portable Microsoft Windows version of the installer](https://marketplace.mendix.com/link/component/247456). 
2. As a best practice, create a new folder for the Client (for example, in your *Documents* folder).
3. Extract the Client to the target folder, and then click the *.exe* file to run the Client.
4. After the installation finishes, start the Workstation Client.

### Linux
    
To install the Workstation Client on a Linux machine, perform the following steps:

1. Download the [Linux version of the installer](https://marketplace.mendix.com/link/component/247459).
2. Install the Client by running the following command, where `X.X.X.X` is the version and build number of the downloaded *.deb* package: 

    ```text
    sudo apt install ./MendixWorkstation_X.X.X.X_arm64.deb
    ```
        
3. Install the card reader dependencies by running the following command:

    ```text
    sudo apt install pcscd libcap2-bin
    ```
        
4. Enable card reader dependencies by running the following command: 

    ```text
    sudo systemctl enable pcscd --now
    ```

5. To start the application, go to the **Applications menu** > **Accessories > Mendix Workstation**.

    Bluetooth support requires starting the application with the `CAP_NET_RAW` privilege (for raw network packet access): 
    
    ```text
    sudo capsh --user=$(whoami) --iab="^cap_net_raw" -- -c "'/opt/Mendix Workstation/mendix-workstation'"
    ```

6. After the installation finishes, start the Workstation Client.

### MacOS

To configure the Workstation Client on a macOS machine, perform the following steps:

1. Download the [macOS version of the installer](https://marketplace.mendix.com/link/component/253905).
2. Double-click the installer to start the installation process.

    The macOS version of the Workstation Client is not yet notarized by Apple, so you will see a warning during the installation. For information about resolving the issue, see [Open a Mac app from an unknown developer](https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unknown-developer-mh40616/mac) in the macOS documentation.

3. After the installation finishes, start the Workstation Client.

## Stopping the Workstation Client

The Workstation Client sets up the required auto-start settings during the first start. Afterward, it runs automatically on system startup. To change this behavior, see [Autostart Configuration for the Workstation Client](/mendix-workstation/autostart-configuration/)
