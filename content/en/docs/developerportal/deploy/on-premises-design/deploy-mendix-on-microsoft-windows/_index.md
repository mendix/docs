---
title: "Microsoft Windows"
url: /developerportal/deploy/deploy-mendix-on-microsoft-windows/
description: "How to install and configure Mendix on a system running Microsoft Windows"
weight: 50
tags: ["deploy", "Windows", "On Premises", "Microsoft", "Mendix Service Console", "IIS", "URL Rewrite", "Client Cache", "Reverse Inbound Proxy", "Host Header"]
aliases:
    - /deployment/on-premises/deploy-mendix-on-microsoft-windows.html
    - /deployment/on-premises/deploy-mendix-on-microsoft-windows
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/developerportal/deploy-mendix-on-microsoft-windows.pdf).
{{% /alert %}}

## 1 Introduction

This document describes the installation and configuration of Mendix software on a system running Microsoft (MS) Windows. It covers:

* Installing the Mendix Service Console

* Deploying a Mendix app

* Configuring the MS Internet Information Services (IIS) server


## 2 Prerequisites {#Prerequisites}

To set up an environment to run Mendix applications, you will need to install the Mendix software. For each Mendix application that will be run, a separate user (service) account is required. This section presents an overview of the setup.

{{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/18580733.png" >}}

Before starting this how-to, make sure you have the following prerequisites:

* MS Windows 2008 SP2 or higher

* .NET Framework 4.5 or higher

* IIS 7 or higher with the following service roles enabled:

    * IIS Management console

    * Default Document

    * Static content

* MS Application Request Routing (ARR) installed (for more information, see [Application Request Routing](https://www.iis.net/downloads/microsoft/application-request-routing))

* MS IIS URL Rewrite installed (for more information, see [URL Rewrite](https://www.iis.net/downloads/microsoft/url-rewrite))

* Java Runtime, version depending on your Mendix Server Distribution. See [System Requirements](/refguide/system-requirements/#java) for more information. 

* The Mendix Deployment Archive (MDA) of your Mendix project

* The Mendix server distribution corresponding with your Mendix Studio Pro version (see the [Mendix Marketplace](https://marketplace.mendix.com/link/studiopro/))

* A database with sufficient security rights

    * Suitable database servers are IBM DB2, MariaDB, MS SQL Server, MySQL, Oracle Database and PostgreSQL. See [System Requirements](/refguide/system-requirements/#databases) for more information

* A local or domain user with the *“log on as a service”* local security policy set


## 3 Installing the Mendix Service Console

To download and install the Mendix Service Console, follow these steps:

1. Download the latest version of the Mendix Service Console by following the **Related downloads** link from the [Studio Pro Download Page](https://marketplace.mendix.com/link/studiopro/) of the Marketplace.

    {{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/service_console_download.png" >}}

2. Install the Mendix Service Console by following the installation wizard.

3. Start the Mendix Service Console after completing the installation. The first time you launch the application, a popup will be shown (it will always be shown if no valid location is configured for the apps and server files):

    {{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/service_console_first_run.png" >}}

4. Click **Yes**. The **Preferences** dialog box will be shown:

    {{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/18580730.png" >}}

5. In the **Preferences** dialog box, enter a **Location of apps and server files**. This location is used for storing your app files and Mendix server files. Mendix recommends using a directory:

    *   that is NOT on the system partition

    *   where you can easily control the security rights

    The app directory consists of four sub-directories:

    * Backup – stores any database changes due to model upgrades

    * Log – stores all of the application log files

    * Project – contains all of your application files; within this directory you will find the directory data/files that contain all of your uploaded files

    * Service – contains files for configuring the Windows Services

    In addition, there will be a file called `Settings.yaml` that contains your application configuration.


## 4 Deploying a Mendix App

To deploy a Mendix app using the Mendix Service Console, follow these steps:

1. Start the Mendix Service Console.

2. Click **Add app** to add a new app. A wizard will appear for configuring the new app.

3. Configure the **Service Settings** as follows:

    * **Service name** – this name must be unique within all existing Windows services

    * **Display name** – the description of the app which is visible as a tooltip for the app in the left bar of the Mendix Service Console or as a column in the list of Windows services

    * **Description** – a description of the application that will be visible in the Mendix Service Console

    * **Startup type** – select whether you want the app to be started automatically when the server starts, started with a delay, started manually, or disabled altogether

    * **User name** and **Password** – the app will always run under the user account given here, and the service will be installed with this user account configured (for more information, see [Prerequisites](#Prerequisites))

4. Click **Next >**.

    {{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/18580728.png" >}}

5. On the **Project Files** screen, click **Select app...**.

    {{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/18580727.png" >}}

6. Now select the **MDA** file that was [created in Studio Pro](/refguide/create-deployment-package-dialog/) and contains your application logic. After the installation of your MDA file, you will see which Mendix server (Mendix Runtime) version is needed.

7. Configure the **Database Settings**:

    * **Type** – the database server type

    * **Host** – the IP address or host name of the database server

    * **Name** – the database name

    * **User name** and **Password** – the database user name and password

8. Click **Next >**.

    {{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/18580726.png" >}}

9. On the **Common Configuration** screen, keep the default settings. These settings should only be changed if this is needed for your application setup.

10. Click **Finish** and start the application.


## 5 Configuring the Microsoft Internet Information Services Server

To configure the MS IIS server, follow the steps in the sections below.


### 5.1 Activating a Proxy in ARR

In order to use the proxy functionality within ARR, you need to enable this feature within IIS. To activate a proxy in ARR, follow these steps:

1. Start the IIS Manager.

2. Select the **Server** in the **Connections** pane.

3. Open the **Application Request Routing** feature.

4. Click **Server Proxy Settings** in the **Actions** pane on the right side of the screen.

5. Select **Enable proxy** and click **Apply** in the **Actions** pane.


### 5.2 Creating a Website

To create a website, follow these steps:

1. Open the IIS Manager.

2. In the **Connections** pane, click the **Sites** node in the tree. If **Default Website** or any other website is present under **Sites**, please check if it is being used.

3. Right-click **Sites** and select **Add Web Site**.

4. In the **Add Web Site** dialog box, enter a friendly name for your web site in the **Web site name** field.

5. In the **Physical path** field, enter the physical path of your application-project-web folder (for example, *D:\Mendix\Apps\Application\Project\Web*).

6. Select the **Protocol** for the website from the **Type** list.

7. The default value in the IP address box field is **All Unassigned**. If you need to specify a static IP address for the website, enter the address in the **IP address** box.

8. Enter a port number in the **Port** field.

9. If any other website is already running on this IIS server, enter the desired hostname for this website in the **Host name** field.

10. Click **OK**.


### 5.3 Add HTTPS binding

1. Make sure the certificate you want to use for the website has been added to the Windows Certificate Store.

2. Right-click the website you have just created and select **Edit Bindings...**.

3. Click **Add...**.

4. In the **Type** field, select **https**.

5. In the **Host name** field, enter the hostname you want to use for this website.

6. If the certificate you are going to use is an SNI certificate, check the **Require Server Name Indication** box.

7. Select the certificate for the website either in the dropdown box or through the **Select...** dialog.

8.  Click **OK**.

    {{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/iis_add_https_binding.png" >}}


### 5.4 Configuring the MIME Types

To configure the MIME types, follow these steps:

1. Open the IIS Manager and navigate to the website you want to manage.

2. In the **Features View**, double-click **MIME Types**.

3. In the **Actions** pane, click **Add**.

4. In the **Add MIME Type** dialog box, add this file type:

	* **File name extension**: *.mxf*
	* **MIME type**: *text/xml*

6. Depending on the IIS version, the MIME type for JSON can be present by default or not. Check if *.json* is already in the list and if not, add another MIME type:

   * **File name extension**: *.json*
   * **MIME type**: *application/json*

7. Click **OK**.


### 5.5 Configuring the URL Rewrite

{{% alert color="info" %}}
These instructions use port 8080, which is the default port. Please use the port for which your Mendix App is configured.
{{% /alert %}}


#### 5.5.1 Reverse Proxy Inbound Rules

You need to add a number of rules to configure the following request handlers.

Rule | Name | Pattern | Rewrite URL
:--- | :--- | :--- | :---
1 | xas | `^(xas/)(.*)` | `http://localhost:8080/{R:1}{R:2}`
2 | ws | `^(ws/)(.*)` | `http://localhost:8080/{R:1}{R:2}`
3 | ws-doc | `^(ws-doc/)(.*)` | `http://localhost:8080/{R:1}{R:2}`
4 | file | `^(file)(.*)` | `http://localhost:8080/{R:1}{R:2}`
5 | link | `^(link/)(.*)` | `http://localhost:8080/{R:1}{R:2}`
6 | rest | `^(rest/)(.*)` | `http://localhost:8080/{R:1}{R:2}`
7 | rest-doc | `^(rest-doc/)(.*)` | `http://localhost:8080/{R:1}{R:2}`
8 | debugger | `^(debugger/)(.*)` | `http://localhost:8080/{R:1}{R:2}`
9 | oauth | `^(oauth/)(.*)` | `http://localhost:8080/{R:1}{R:2}`

Follow the instructions below and replace *[Name]* with the name of the rule in the table above, *[Pattern]* with the regular expression pattern, and *[Rewrite URL]* with the Rewrite URL. Note that some patterns contain a trailing slash, `/`, when they need to point to an exact path (for example, `/ws-doc/mydoc/1234`).

1. Open the IIS Manager and navigate to the website you want to manage.

2. In the **Features View**, double-click **URL Rewrite**.

3. In the **Actions** pane on the right side of the screen, click **Add rule(s)…** to add a new rewrite rule.

4. In the **Inbound Rules** section, double-click *Blank rule*.

5. In the **Name** field, enter *[Name]* from the table above.

6.	In the **Match URL** section, set **Requested URL** to *Matches the Pattern*.

7. Set **Using** to *Regular Expressions*.

8. In the **Pattern** field, enter `[Pattern]`.

9. In the **Action** section, set **Action type** to *Rewrite*.

10. In the **Rewrite URL** field, enter `[Rewrite URL]` (in the rules above this is always `http://localhost:8080/{R:1}{R:2}`).

11. Ensure the **Append query string** checkbox is set to *true* (checked).

12. Click **Apply**.

13. Click **Back to Rules**.

14. Repeat from step 3 to add all the required rules.

You can also add additional request handlers in the same way. However you must ensure that they come *after* the rule *add x-forwarded-proto header*, described below.


#### 5.5.2 Rule *add x-forwarded-proto header*

This is required to ensure that you can access the Swagger documentation of your published REST services. 

{{% alert color="info" %}}
This has to be the first rule; it is described after the rewrite rules to ensure that it is moved to the top and that additional rules are not placed above it accidentally.
{{% /alert %}}

1. Click **View Server Variables**.

2. Check if server variable **HTTP_X_FORWARDED_PROTO** is listed. If it is, skip to step 7.

3. In the **Action** page, click **Add** to add the server variable.

4. Enter the **Server variable name** *HTTP_X_FORWARDED_PROTO*.

5. Click **OK**.

6. Click **Back to Rules**.

7. Click **Add rule(s)…**.

8. Click **Blank Rule**.

9. Set the **Name** to *add x-forwarded-proto header*.

10.	In the **Match URL** section, set **Requested URL** to *Matches the Pattern*.

11. Set **Using** to *Regular Expressions*.

12. Set the **Pattern** to `.*`.

13. Set **Ignore Case** to *true* (checked).

14.	In the **Server Variables** section, click **Add**.

15.	Select Server variable name **HTTP_X_FORWARDED_PROTO**.

16. Set **Value** to *https*.

17. Click **OK**.

18.	In the **Action** section, select **None**.

19. Set **Stop processing of subsequent rules** to *false* (unchecked).

20.	Click **Apply** in the **Action** pane to save the rule.

21. Click **Back to Rules**.

22. Select the newly created *add x-forwarded-proto header* rule and use the **Move Up** button in the Action pane to move the rule to the top of the list.


#### 5.5.3 Redirect HTTP to HTTPS (optional)

If HTTPS was configured at step 5.3 it is recommended to redirect all unencrypted HTTP traffic to HTTPS. To configure this, follow these steps:

1. Click **Add rule(s)…**.

2. Click **Blank Rule**.

3. Set the **Name** to *Redirect to HTTPS*.

4. In the **Match URL** section, set **Requested URL** to *Matches the Pattern*.

5. Set **Using** to *Regular Expressions*.

6. Set the **pattern** to `(.*)`.

7. Set **Ignore Case** to *true* (checked).

8. In the **Conditions** section, click **Add...**.

    1. In the **Condition input** field, enter `{HTTPS}`.

    2. Set **Check if input string** to *Matches the Pattern*.

    3. In the **Pattern** field, enter: `off`.

    4. Set **Ignore case** to *true* (checked).

    5. Click **OK**.

9. In the **Action** section, set **Action type** to *Redirect*.

10. In the **Redirect URL** field, enter `https://{HTTP_HOST}/{R:1}`.

11. Set **Append query string** to *true* (checked).

12. Set **Redirect type** to *Permanent (301)*.

13. Click **Apply** in the **Actions** pane to save the rule.

14. Click **Back to Rules**.

15. Select the newly created *Redirect to HTTPS* rule and use the **Move Up** button in the Action pane to move the rule to the top of the list, even above the previously created *add x-forwarded-proto header* rule.


### 5.6 Disabling the Client Cache

1. In the **Features View**, double-click **HTTP Response Headers**.

2. In the **Actions** pane, click **Set Common Headers...**.

3. Set **Expire Web content** to *true* (checked).

4. Make sure the *Immediately* radio button is selected.

5. Click **OK**.

    {{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/iis_response_headers.png" >}}

Afterwards, the contents of the *web.config* file will be similar to the following example:

**web.config**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <rewrite>
            <rules>
                <rule name="add x-forwarded-proto header">
                    <match url=".*" />
                    <conditions logicalGrouping="MatchAll" trackAllCaptures="false" />  <serverVariables>
                        <set name="HTTP_X_FORWARDED_PROTO" value="https" />
                    </serverVariables>
                    <action type="None" />
                </rule>
                <rule name="xas" stopProcessing="true">
                    <match url="^(xas/)(.*)" />
                    <action type="Rewrite" url="http://localhost:8080/{R:1}{R:2}" />
                </rule>
                <rule name="ws" stopProcessing="true">
                    <match url="^(ws/)(.*)" />
                    <action type="Rewrite" url="http://localhost:8080/{R:1}{R:2}" />
                </rule>
                <rule name="ws-doc" stopProcessing="true">
                    <match url="^(ws-doc/)(.*)" />
                    <action type="Rewrite" url="http://localhost:8080/{R:1}{R:2}" />
                </rule>
                <rule name="file" stopProcessing="true">
                    <match url="^(file)(.*)" />
                    <action type="Rewrite" url="http://localhost:8080/{R:1}{R:2}" />
                </rule>
                <rule name="link" stopProcessing="true">
                    <match url="^(link/)(.*)" />
                    <action type="Rewrite" url="http://localhost:8080/{R:1}{R:2}" />
                </rule>
                <rule name="rest" stopProcessing="true">
                    <match url="^(rest/)(.*)" />
                    <action type="Rewrite" url="http://localhost:8080/{R:1}{R:2}" />
                </rule>
                <rule name="rest-doc" stopProcessing="true">
                    <match url="^(rest-doc/)(.*)" />
                    <action type="Rewrite" url="http://localhost:8080/{R:1}{R:2}" />
                </rule>
                <rule name="debugger" stopProcessing="true">
                    <match url="^(debugger/)(.*)" />
                    <action type="Rewrite" url="http://localhost:8080/{R:1}{R:2}" />
                </rule>
            </rules>
        </rewrite>
        <staticContent>
            <mimeMap fileExtension=".mxf" mimeType="text/xml" />
            <clientCache cacheControlMode="DisableCache" />
        </staticContent>
    </system.webServer>
</configuration>
```


## 6 Preserving the Host Header{#preserve-header}

To make sure the correct application root URL is used within your web services, you must make sure the host header contains the original host header from the client request. To make sure the host header is preserved, follow either of these steps.

1. Via IIS Manager:

    1. Select the **Server** in the **Connections** pane.

    2. Double-click the **Configuration editor** feature.

    3. In the **Section** drop-down menu, select *system.webServer/proxy*.

    4. Set the **preserveHostHeader** option to *True*.

    5. In the **Actions** pane, click **Apply**.

2. Via command prompt:

    1. Click **Start**, and then click **All Programs**.

    2. Click **Accessories**, and then click **Command Prompt**.

    3. Execute the following command from the command prompt:

        ```batchfile
        cd %windir%\system32\inetsrv
        ```

    4. Enter:

        ```batchfile
        appcmd.exe set config -section:system.webServer/proxy /preserveHostHeader:"True" /commit:apphost
        ```

## 7 Troubleshooting

When configuring IIS it can seem like you have done everything right but it just doesn't seem to work. A guide to troubleshooting IIS is available here: [Troubleshooting IIS](/developerportal/deploy/troubleshooting-iis/).


## 8 Read More

* [On-Premises](/developerportal/deploy/on-premises-design/)
