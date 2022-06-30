---
title: "MS Windows: Update a Mendix App"
url: /developerportal/deploy/updating-a-mendix-application/
weight: 20
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/developerportal/updating-a-mendix-application.pdf).
{{% /alert %}}

## 1 Introduction

A Mendix application on a Windows server can be updated using the Mendix Service Console. Before beginning the server update, you need to make sure that you have a versioned deployment archive (*.mda* file) accessible on your server and that the same version of the server distribution is either installed or else is available as an installation package on the server.

The service console creates a backup of the project files, this allows you to restore a previous deployment.

{{% alert color="info" %}}
Before every update it is recommended that you create a backup of your data and uploaded files. The Mendix Service Console does not do this for you.
{{% /alert %}}

## 2 Using the Update App Button

1.  If the app is currently running, make sure you stop it first, otherwise you will be unable to update.

    {{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/updating-a-mendix-application/1_stop_service.png" alt="Step 1, Stop the app" >}}

2.  You can update the application by clicking on the button **Update app**.

    {{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/updating-a-mendix-application/2_click_update.png" alt="Step 2, Start the update process" >}}

3.  The **Update App** popup that appears shows you information about the current active app. The **App version** shows the release number of the deployment package that is currently running on this server. The **Mendix server version** shows the version of the server distribution being used by the app — this is the same as the Studio Pro version which which the deployment package was created.

    {{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/updating-a-mendix-application/3_update_app.png" alt="Step 3, Release details and overview of all server versions" >}}

4.  To update the application click **Update app**. Select the new deployment archive (.mda) and click **Open**. The update process will start immediately.

    {{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/updating-a-mendix-application/4_browse_mda.png" alt="Step 4, Choose the latest .mda package" >}}

This process will copy the new version of the project software into the configured location. All models will be extracted, and a symbolic link to the `mxclientsystem` folder is automatically created so the JavaScript libraries can be easily included without any additional configuration in IIS.

## 3 Update the Mendix Runtime Version

1.  After updating the Mendix application version, the Service Console may show the message `(missing)`. This means that the required server distribution is not installed on the server.

    {{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/updating-a-mendix-application/update_server_missing.png" alt="Step 5, a missing Runtime version" >}}
2.  There are two ways to install the required server distribution:

    1. If you are online and have access to the Mendix Marketplace, click **Download server** and the correct server distribution will be fetched and installed. You will then see the following 
    {{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/updating-a-mendix-application/update_server_download.png" >}}
    2. If you are offline or automatic downloading fails, click **Add Server** and select the required server distribution (*.tar.gz*).  The server distribution can be found under the **Related Downloads** from the specific Mendix Studio Pro version in the [Mendix Marketplace](https://marketplace.mendix.com/link/studiopro/). The server distribution is a *tar.gz* file. The Service Console will extract the server distribution to the same folder as the other server distributions.

    After the server distribution has been updated you will be able to start the Service using the new project and Mendix Runtime version. 

    {{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/updating-a-mendix-application/update_server_select.png" alt="Step 6, Choose the correct server distribution (.tar.gz)" >}}

### 3.1 Location of the Mendix Server Distributions

In the Preferences of the Mendix Service Console you can configure the main directory for all applications and server distributions. You can find the installed platform version in the folder `/Servers`. This folder is located directly in the configured base path from the service console.

{{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/updating-a-mendix-application/18580698.png" >}}

This should be something like:

```bash
D:\Mendix\MyApplications\Servers
```
{{% alert color="info" %}}
The user that is configured as the Service Account should have Read&Execute privileges on this entire server folder. You could just grant access to the specific server distribution, but that would mean that you would have to update the folder access after every platform version update.
{{% /alert %}}

## 4 Start Application

After updating, don't forget to start your app service again!

## 5 Read More

*   [Restoring a SQL Server database](/developerportal/deploy/restoring-a-sql-server-database/)
*   [Troubleshooting SQL Server](/developerportal/deploy/troubleshooting-sql-server/)
*   [Mendix SQL Maintenance Plans](/developerportal/deploy/mendix-sql-maintenance-plans/)
*   [Setting up a new SQL Server database](/developerportal/deploy/setting-up-a-new-sql-server-database/)
*   [Setting up a SQL Server user](/developerportal/deploy/setting-up-a-sql-server-user/)
*   [Security checklist for your on-premises installation](/developerportal/deploy/security-checklist-for-your-on-premises-installation/)
*   [Mendix on Windows - Microsoft SQL Server](/developerportal/deploy/mendix-on-windows-microsoft-sql-server/)
*   [Deploying Mendix on Microsoft Windows](/developerportal/deploy/deploy-mendix-on-microsoft-windows/)
*   [Unix-Like Deployment](/developerportal/deploy/unix-like/)
