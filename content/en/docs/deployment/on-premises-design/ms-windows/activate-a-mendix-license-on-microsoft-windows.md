---
title: "Activate a Mendix License on Microsoft Windows"
linktitle: "MS Windows: Activate Mendix License"
url: /developerportal/deploy/activate-a-mendix-license-on-microsoft-windows/
weight: 10
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

If you want to run your app on a Microsoft Windows server without the restrictions placed on unlicensed apps, you will need to activate a license. The restrictions which are placed on unlicensed apps are described in [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

You will need to apply a separate license to each environment for which you want to lift the restrictions.

## Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisites:

* To activate a Mendix instance on-premises you need an on-premises license (call your Customer Success Manager for more information)
* Install Mendix on your Microsoft Windows server (for more information, see [Deploying Mendix on Microsoft Windows](/developerportal/deploy/deploy-mendix-on-microsoft-windows/))
* Be registered as the technical contact for the license
    * This is usually done in the license request process
    * If you are not the technical contact, ask the technical contact to follow this how-to to activate the license
* Have your MxID and password ready
* Have login access and access to the Mendix Service Console on the server

## Retrieve the Server ID {#retrieve-the-server-id}

In this section, you will retrieve the server ID from your Mendix server, which is used in the license activation process. These steps should be executed on the Microsoft Windows server.

1. Start the Mendix Service Console.
2. Select your app in the overview on the left side of the console.
    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/activate-a-mendix-license-on-microsoft-windows/19398813.png" class="no-border" >}}
3. The app needs to be running in order for you to be able to activate the license. If the app is not running, click **Start service** to start the app.
4. Click **Advanced** and select the **Show or add license...** option.
    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/activate-a-mendix-license-on-microsoft-windows/19398814.png" class="no-border" >}} 
5. Next to **Server ID**, click **Copy to clipboard**.
    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/activate-a-mendix-license-on-microsoft-windows/19398815.png" class="no-border" >}} 

## Obtain a License Key from Mendix Support

In this section, you will submit your server ID in the Mendix Support Portal to request a license key for your server.

1. Open your browser and navigate to [https://support.mendix.com](https://support.mendix.com).
2. Do one of the following:
    * For a new app, use the [Request New App Node](https://newnode.mendix.com/) app – see [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/) for more information
    * For an existing app, create a ticket using the **Standard change: Change On-Prem Licensed Node** template
3. Mendix support will use the supplied server ID to generate a license key for your server.

## Insert the License Key on the Server

In this section, you will enter the license key into the Mendix server, thus completing the license activation process.

1. Return to the Mendix Service Console **License** dialog box (as described in [Retrieve the Server ID](#retrieve-the-server-id) section).
    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/activate-a-mendix-license-on-microsoft-windows/19398814.png" class="no-border" >}} 
2. Paste your license key into the **License key** text box.
    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/activate-a-mendix-license-on-microsoft-windows/19398816.png" class="no-border" >}} 
3. Click **Activate license**.
    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/activate-a-mendix-license-on-microsoft-windows/19398817.png" class="no-border" >}} 
4. Congratulations! Your license has been activated.

## Read More

* [Setting up the Database User](/developerportal/deploy/setting-up-the-database-user/)
* [Troubleshooting](/developerportal/deploy/troubleshooting-iis/)
* [Restoring a SQL Server Database](/developerportal/deploy/restoring-a-sql-server-database/)
* [Troubleshooting SQL Server](/developerportal/deploy/troubleshooting-sql-server/)
* [Mendix SQL Maintenance Plans](/developerportal/deploy/mendix-sql-maintenance-plans/)
* [Setting Up a New SQL Server Database](/developerportal/deploy/setting-up-a-new-sql-server-database/)
* [Setting Up a SQL Server User](/developerportal/deploy/setting-up-a-sql-server-user/)
