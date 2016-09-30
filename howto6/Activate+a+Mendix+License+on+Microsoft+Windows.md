---
title: "Activate a Mendix License on Microsoft Windows"
space: "Mendix 6 How-to's"
category: "On-premises Deployment"
tags: []
---

## 1 Introduction

After you have installed the Mendix software on your on-premises server and have deployed your first app (for details, see [Deploying Mendix on Microsoft Windows](Deploy+Mendix+on+Microsoft+Windows)), it is time to activate your license. This how-to will guide you through this process.  

**After using this how-to, you will know how to do the following:**  

* Activate a Mendix license on a Microsoft Windows server

## 2 Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisites:

* Install Mendix on your Microsoft Windows server (for more information, see [Deploying Mendix on Microsoft Windows](Deploy+Mendix+on+Microsoft+Windows))
* Be registered as the technical contact for the license
    * This is usually done in the license request process
    * If you are not the technical contact, ask him or her to follow this how-to to activate the license
* Have your MxID and password ready
* Have login access and access to the Mendix Service Console on the server

## <a name="3RetrievetheServerID"></a>3 Retrieve the Server ID

In this section, you will retrieve the server ID from your Mendix server, which is used in the license activation process. These steps should be executed on the Microsoft Windows server.

1. Start the Mendix Service Console.
2. Select your app in the overview on the left side of the console.
    ![](attachments/19202502/19398813.png)
3. The app needs to be running in order for you to be able to activate the license. If the app is not running, click **Start service** to start the app.
4.  Click **Advanced** and select the **Show or add license...** option.
    ![](attachments/19202502/19398814.png) 
5. Next to **Server ID**, click **Copy to clipboard**.
    ![](attachments/19202502/19398815.png) 

## 4 Retrieve the License Key by Submitting a Ticket

In this section, you will submit your server ID in the Mendix support portal to request a license key for your server.

1. Open your browser and navigate to [https://support.mendix.com](https://support.mendix.com).
2. Create a new ticket:
    * For a new app, use the **New App** template
    * For an existing app, use the **Key Change request (on-premises)** template
3. Mendix support will use the supplied server ID to generate a license key for your server.

## 5 Insert the License Key on the Server

In this section, you will enter the license key into the Mendix server, thus completing the license activation process.

1. Return to the Mendix Service Console **License** dialog box (as described in [3 Retrieve the Server ID](#3RetrievetheServerID)).
    ![](attachments/19202502/19398814.png) 
2. Paste your license key into the **License key** text box.
    ![](attachments/19202502/19398816.png) 
3.  Click **Activate license**.
    ![](attachments/19202502/19398817.png) 
4.  Congratulations! Your license has been activated.

## 6 Related Content

*   [Setting up the Database User](Setting+up+the+database+user)
*   [Troubleshooting](Troubleshooting)
*   [Restoring a SQL Server Database](Restoring+a+SQL+Server+database)
*   [Troubleshooting SQL Server](Troubleshooting+SQL+Server)
*   [Mendix SQL Maintenance Plans](Mendix+SQL+Maintenance+Plans)
*   [Setting Up a New SQL Server Database](Setting+up+a+new+SQL+Server+database)
*   [Setting Up a SQL Server User](Setting+up+a+SQL+Server+user)
