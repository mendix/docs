---
title: "Use Calypso"
parent: "atlas-ui"
menu_order: 70
tags: ["Atlas", "UI", "UX", "user experience"]
---

## 1 Introduction

Calypso is a tool which makes it easier for you to customize your Mendix apps' styling. Designers and front-enders, Mac users and Windows users — everyone can easily use this tool without installing any external dependencies. Everything is packaged inside Calypso. You simply need to install Calypso, choose your Mendix app, and start customizing. As you customize, Calypso eases your work by doing the following:

* Checks *SCSS* files for errors
* Compiles *SCSS* files to *CSS*
* Shows notifications on errors
* Moves compiled files to your deployment folder
* Injects the compiled *CSS* files into your browser so you can preview changes instantly 

## 2 Prerequisites

* Download Calypso from its [Dropbox folder](https://www.dropbox.com/home/RnD/Widget/Calypso)

## 3 Setting Up Calypso

1. Install Calypso.
2. Open Calypso. 
3. In the **Hostname** drop-down menu, select the host name of your Mendix app's device (or put its IP address in manually by clicking **Other** and typing in the IP address). 
	Most Windows users should select **localhost**. If you are running Windows through a virtual machine, use your virtual machine's IP address as the **Hostname** or you can forward your port from your host machine to your virtual machine. Alternatively you can install Calypso on a virtual machine and choose **localhost**.
4. If this is your first time using Calypso, you may have to tell your Windows firewall to **Allow access** to use Calypso.
5. Configure your **Port**. 
	A Mendix app normally runs on port 8080. However, if you are running multiple Mendix apps, or changed your port configuration, your port number may be different. Find your port information by navigating to **Project {'YourProjectName'}** > **Settings** in your **Project Explorer**, read your port number in **Application root URL** ({host name:port number}), then type that number into Calypso's **Port** field.
6. In **Apps Collection**, click the **Browse** button and then select the folder which contains all your Mendix apps. Configuring this enables you to switch easily between apps. 
7. Complete **App Folder** by selecting the folder of your Mendix app from the drop-down menu.
8. Complete **Watching** to specify which files you want to be processed by Calypso. 
	Most users will only need to select the **Watching** > **theme/styles** option. However, when you are building custom error pages or are using JavaScript on your pages, you may wish to select the other two folders as well.

	![files to watch](attachments/calypso/calypso-watching.png)

9. Click the sun in the top-right corner to toggle between dark mode and regular mode.
10. Click **Run Locally** in Mendix Studio Pro to use Calypso.
11. Click the **Start** button in Calypso. This will start a browser page which will let you view your running app.

## 4 Testing Calypso

With your Mendix app and Calypso running, complete the steps below to see how Calypso works:

1. Add a button widget to your app's **Home_Responsive** page: 

	![drop a button](attachments/calypso/drop-a-button.png)
	
2. Run your app again, then click **View** > **Responsive Browser** to notice the button's default styling:
	
	![blue text button](attachments/calypso/blue-button.png)

2. Click **Project** > **Show Project Directory in Explorer**.
3. Open  *theme\styles\web\sass\app\_custom-variables.scss* .
4. Change `$brand-primary: #0595DB;` to `$brand-primary: brown`. 
5. Look at your app in your browser again. The button's text has switched from blue to brown.

	![brown text button](attachments/calypso/brown-button.png)
