---
title: "Build HoloLens Apps with Mendix"
parent: "ar-parent"
menu_order: 20
description: "In this how-to you will learn to build Mendix applications for the first generation Hololens."
tags: ["AR", "VR", "Hololens", "mixed reality"]
---

## 1 Introduction

This how-to will teach you to build Mendix applications for the first generation [Microsoft](https://docs.microsoft.com/en-us/windows/mixed-reality/hololens-hardware-details) [HoloLens](https://docs.microsoft.com/en-us/windows/mixed-reality/hololens-hardware-details). Specifically, you will learn to add the Mendix-provided ARModule to an app, configure your existing pages for your module, and install a Mendix app on your HoloLens. By the end of this how-to you will know how to configure an existing Mendix web application so it can be viewed in the HoloLens.

## 2 Prerequisites

* The Mendix HoloLens app (the *.msixbundle* file specifically)
* A Windows device running Windows 10 with the [Windows 10 SDK](https://developer.microsoft.com/en-us/windows/downloads/windows-10-sdk) installed
* Consult the Microsoft [Gestures](https://docs.microsoft.com/en-us/windows/mixed-reality/gestures) documentation to familiarize yourself with HoloLens gesture terms
* A Microsoft HoloLens (version 10.0.17763.502) on the same WiFi network as your Mendix project
* Ensure you have the correct credentials for your HoloLens’ account (lacking correct credentials can lock you out of your device, forcing a factory reset)
* Ensure the Mendix project on your computer is reachable through IP on other devices in the same network


## 3 Current Limitations of this System

* The only input you can give the pages is through an Air tap, dragging is not supported. 
* Videos do not work.


## 4 Putting the ARModule in your Mendix Project

1. In your current Mendix project, right-click **Project** **(****YourProjectName****)** and select **Import Module Package**. This will open up a file selector.

	![](https://paper-attachments.dropbox.com/s_766502FA0B444F09B8E778B6D67B970D9C167B9F51C84DCFC7B4C69CABBBB8FE_1559652652478_ImportModulePackage.png)

2. The folder provided by Mendix contains a file called *ARConfiguration.mpk*. Select this in the file picker and click **Open**.

	![](https://paper-attachments.dropbox.com/s_766502FA0B444F09B8E778B6D67B970D9C167B9F51C84DCFC7B4C69CABBBB8FE_1559809695944_ImportModuleFilePicker.png)

3. In the subsequent dialog window, select **Action** > **Add as a new module** and click **Import**.

	![](https://paper-attachments.dropbox.com/s_766502FA0B444F09B8E778B6D67B970D9C167B9F51C84DCFC7B4C69CABBBB8FE_1559653193431_ImportModulePrompt.png)

## 5 Configuring Your Pages

##  5.1 Markers

First, configure your pages in the Mendix Module. To do this, your project needs to be running. 
You will begin by generating markers. The markers determine the placement of the pages. The HoloLens scans the markers, and through this configuration will know what page goes with what marker. To create the markers complete the following steps:

1. Click **Run Locally**, then click **View** to see your app in a browser 
2. Click http://localhost:8080/p/ARConfig and click **Enter** to view the configuration page, and then go to **Entities** > **Markers**.
3. If there are no markers there already, click **Generate:**

	![](https://paper-attachments.dropbox.com/s_3D00889F1E95FD6632B68FDE75C8F58130249ADACA9E67B7B91C13F258586185_1559636623676_generate-markers.png)

3. This should generate 51 markers:

	![](https://paper-attachments.dropbox.com/s_3D00889F1E95FD6632B68FDE75C8F58130249ADACA9E67B7B91C13F258586185_1559636637487_fifty-one-markers.png)

    Optionally, to print a PDF with all your markers, click **Print.**

	![](https://paper-attachments.dropbox.com/s_3D00889F1E95FD6632B68FDE75C8F58130249ADACA9E67B7B91C13F258586185_1559636644650_print-pdf.png)

## 5.2 Configuration

1. Click **Entities** > **Configuration.**
2. Click **New**:

	![](https://paper-attachments.dropbox.com/s_3D00889F1E95FD6632B68FDE75C8F58130249ADACA9E67B7B91C13F258586185_1559636655658_add-config.png)

3. Fill in a new name for your configuration.
4. Fill in the **Marker size** in meters. Printing the standard PDF gives you markers of 0.04 meters. If your printed PDF does not match the configuration marker size, the webviews’ positioning will be unreliable:

	![](https://paper-attachments.dropbox.com/s_3D00889F1E95FD6632B68FDE75C8F58130249ADACA9E67B7B91C13F258586185_1559636668709_edit-config.png)

## 5.3 Screen Settings

1. Click **Entities** > **Screen Settings**
2. Click **New**:

	![](https://paper-attachments.dropbox.com/s_3D00889F1E95FD6632B68FDE75C8F58130249ADACA9E67B7B91C13F258586185_1559636675088_add-screen-settings.png)

3. Fill in a new name for your screen settings.
4. Set **Width pixels** and **Height pixels** to *400*. Width and height pixels control the resolution of the webview itself. Remember that the HoloLens is a mobile device and not as graphically powerful as a desktop PC. Setting too high a resolution can slow HoloLens apps down.
5. Set **Width meters** and **Height meters** to *0.20*. Width and height meters control the size of your HoloLens app’s webview.

	![](https://paper-attachments.dropbox.com/s_3D00889F1E95FD6632B68FDE75C8F58130249ADACA9E67B7B91C13F258586185_1559636681133_edit-screen.png)

## 5.4 Web View Info

1. Click **Entities** > **Web View Info.**

	![](https://paper-attachments.dropbox.com/s_3D00889F1E95FD6632B68FDE75C8F58130249ADACA9E67B7B91C13F258586185_1559636691221_add-web-view-info.png)

2. Click **New,** then configure the subsequent settings as you choose**.**
3.  **Web view ID**: This setting is generated automatically.
4. **Configuration/Marker Size**: This setting is the one you configured when editing **Marker size** in **Edit Configuration**.
5.  **Path**: Here you must enter a path to your local URL, or any other website you would like to show. If you want to show a page of your Mendix app project, set that page’s URL in its properties. For example, you could make your app project’s home page URL “/something” in properties, clicking **Run Locally,** and navigating to it by clicking http://localhost:8080/p/something*.*
6.  **Screen**: Select the screen you made in section 5.3.
7.  **Marker**: Select any marker from the ones you generated earlier.
8.  **Marker offset**: This setting dictates the amount of meters the webview should be from the webview. **Marker offset x** controls the horizontal axis, **Marker offset y** controls the vertical axis, and **Marker offset z** controls depth.
9.  **Tag along**: Selecting **Yes** will keep this screen in your field of vision as you look around:

	![](https://paper-attachments.dropbox.com/s_3D00889F1E95FD6632B68FDE75C8F58130249ADACA9E67B7B91C13F258586185_1559636700132_new-web-info.png)

	This information will generate a REST interface when you run the app.

## 6 Running Your App on a HoloLens

1. Connect your HoloLens to your computer
2. Go to Microsoft’s [Using the Windows Device Portal](https://docs.microsoft.com/en-us/windows/mixed-reality/using-the-windows-device-portal) and set up your HoloLens by completing the following sections:
	* Setting up HoloLens to use Windows Device Portal
	* Connecting over USB
	* Creating a Username and Password
	* Security Certificate

1. In a web browser go to [http://127.0.0.1:10080/](http://127.0.0.1:10080/) and log in when prompted:

	![](https://paper-attachments.dropbox.com/s_766502FA0B444F09B8E778B6D67B970D9C167B9F51C84DCFC7B4C69CABBBB8FE_1559654407910_HoloLensLogin.png)


 2. Click **Views** > **Apps**

	![](https://paper-attachments.dropbox.com/s_766502FA0B444F09B8E778B6D67B970D9C167B9F51C84DCFC7B4C69CABBBB8FE_1559654880362_HoloLensViewsApps.png)

3. Click **Choose** ******File,** navigate to your *.msixbundle* file, and click **Open**:

	![](https://paper-attachments.dropbox.com/s_766502FA0B444F09B8E778B6D67B970D9C167B9F51C84DCFC7B4C69CABBBB8FE_1559809831945_HoloLensOpenBundle.png)

4. With your *.msixbundle* file selected, click **Install:**

	![](https://paper-attachments.dropbox.com/s_766502FA0B444F09B8E778B6D67B970D9C167B9F51C84DCFC7B4C69CABBBB8FE_1559655030142_HoloLensInstallBundle.png)

    Optionally, if you receive the following error, you will need to install some extra packages: 
   
    *“Windows cannot install package HoloLensMendixApplication_1.0.7.0_x86__pzq3xp76mxafg because this package depends on a framework that could not be found. Provide the framework "Microsoft.NET.CoreRuntime.1.1" published by "CN=Microsoft Corporation, O=Microsoft Corporation, L=Redmond, S=Washington, C=US", with neutral or x86 processor architecture and minimum version 1.1.27004.0, along with this package to install. The frameworks with name "Microsoft.NET.CoreRuntime.1.1" currently installed are: {} Failure text: Package failed updates, dependency or conflict validation. (0x80073cf3)”*


    1. Select **Allow me to select framework packages** and then click **Next****:**

	![](https://paper-attachments.dropbox.com/s_766502FA0B444F09B8E778B6D67B970D9C167B9F51C84DCFC7B4C69CABBBB8FE_1560260342028_AdditionalFrameworks.png)

    b. Select **Choose File****,** and in the build folder, navigate to **Dependencies/x86****:**

	![](https://paper-attachments.dropbox.com/s_766502FA0B444F09B8E778B6D67B970D9C167B9F51C84DCFC7B4C69CABBBB8FE_1560260429249_AdditionalFrameworksx86.png)

    c. Add both *.appx* files to **Dependencies/x86**:

	![](https://paper-attachments.dropbox.com/s_766502FA0B444F09B8E778B6D67B970D9C167B9F51C84DCFC7B4C69CABBBB8FE_1560260501819_AdditionalFrameworksx86Appx.png)

    d. With both these dependencies selected, click **Install****:**

	![](https://paper-attachments.dropbox.com/s_766502FA0B444F09B8E778B6D67B970D9C167B9F51C84DCFC7B4C69CABBBB8FE_1560260557466_AdditionalFrameworksSelected.png)

5. Check that **Mendix (App)** is in **Installed apps**:

	![](https://paper-attachments.dropbox.com/s_766502FA0B444F09B8E778B6D67B970D9C167B9F51C84DCFC7B4C69CABBBB8FE_1559655095947_HoloLensCheckApp.png)

6. Put on your HoloLens, then open the app. Make sure your HoloLens is connected to the same WiFi network as the computer running your Mendix app. Enter either the URL of your Mendix server or its IP address by Air tapping each number field, and Air tap **Load configuration**:

	![](https://paper-attachments.dropbox.com/s_3D00889F1E95FD6632B68FDE75C8F58130249ADACA9E67B7B91C13F258586185_1559636833494_open-hololens-app.png)

7. If the application can reach your Mendix server, it will fetch configurations that have webviews attached:

	![](https://paper-attachments.dropbox.com/s_3D00889F1E95FD6632B68FDE75C8F58130249ADACA9E67B7B91C13F258586185_1559636839458_hololens-fetch-config.png)

8. When you are ready to start the 3D environment, click **Go**. 
9. When the 3D environment is loaded after the Mendix logo splash screen, you will see a message: **Longpress to start scanning for webviews**. To start scanning for markers, look at the markers, and then Tap and hold them.
10. You should see a blue square with the text **Scanning** underneath:

	![](https://paper-attachments.dropbox.com/s_3D00889F1E95FD6632B68FDE75C8F58130249ADACA9E67B7B91C13F258586185_1559636867814_hololens-blue-rectangle.png)

11. As soon as you release your Tap and hold, the scanning will stop. Aiming this scanning rectangle at your marker sheet will show the configured pages at that location:

	![](https://paper-attachments.dropbox.com/s_3D00889F1E95FD6632B68FDE75C8F58130249ADACA9E67B7B91C13F258586185_1559636873109_hololens-aim-rectangle.png)

Congratulations! You have just added HoloLens functionality to a Mendix app, then ran that Mendix app in your HoloLens’ 3D environment.

## 7 Read More

* [Get Started with AR](get-started-ar)