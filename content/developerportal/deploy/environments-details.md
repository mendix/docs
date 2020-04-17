---
title: "Environment Details"
parent: "mendix-cloud-deploy"
menu_order: 7
description: "Describes the environmental details of your app and how to manage the environment."
tags: ["Deploy","App","Environment","Developer Portal"]
---

## 1 Introduction

To enter the **Environment details** page, go to the [Developer Portal](http://home.mendix.com), select your licensed app, click **Environments**, and then click **Details** on the specific environment. 

![](attachments/environments-details/environment-details.png)   

## 2 General Tab

![](attachments/environments-details/environment-details-general.png)   

The view of the **General** tab depends on the Mendix Cloud version on which the app is hosted. In this tab, you can find the following information about your environment:

*  **Status**
   * White – the environment is stopped or was never deployed
   * Green – the environment is working correctly
   * Orange – the environment has warnings
   * Red – the environment is not working correctly

        ![](attachments/environments-details/environment-status.png)   

* **Running since** date – the date on which the app was started
* **Name** – the type of environment (Test, Acceptance, Production or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy#flexible-environments)): see [Naming of Environments](#naming) for more information
* **URL** – the URL of the app
* **Project ID** – the unique identifier for your Mendix app
* **Environment ID** – the unique identifier of this environment
* **Custom domains** – the custom domains of the app
* **Java Version** – Oracle version 1.8 or AdoptOpenJDK version 8
* **Studio Target** – whether this environment is the one where apps will be deployed from Studio - see [Studio Deployment Settings](studio-deployment-settings) for more information
* **Plan** – (*Cloud v4 only*) the type of plan covered by this license
* **Instances** – (*Cloud v4 only*) A summary of the number and memory allocation of *instances* of this environment: see [Scaling...](#scaling) for more information
* **Database Status** – (*Cloud v3 only*) this is **Running** by default
* **Database Version** – the PostgreSQL version that is supporting the database
* **Region** - the region where the app is hosted
* **Mendix Cloud Version** – Mendix Cloud v3/Mendix Cloud v4

At the bottom of the page there are three overview sections. These are described below in the [Overviews](#overviews) section.

### 2.1 Actions

On the right side of the screen, you can find the following action buttons:

* **Restart Application** – this stops the running application and starts it again — this is necessary to apply new constant values or scheduled events to the environment
* **Start/Stop Application**
* **Clear Environment** *(only visible if your application is stopped)* – this clears, after confirmation, all data from your database and file storage, and removes your app from this environment — you should do this if you want to deploy a different app to this environment, it is not necessary if you are restoring a backup of the same app
* **Show Logged in Users** 
* **Change Admin Password**

#### 2.1.1 Logging and Debugging in Mendix Cloud v4

![](attachments/environments-details/actions-v4.png)

In Mendix Cloud v4 environments, you have two additional action buttons:

* **View Live Log**
* **Show debugger information** – shows the settings needed to connect the debugger in Studio Pro to your app — for Mendix Cloud v4, the debugger is *always* enabled

#### 2.1.2 Logging and Debugging in Mendix Cloud v3

![](attachments/environments-details/actions-v3.png)

In Mendix Cloud v3 environments, you have two additional action buttons:

* **View Current Log**
* **Enable/Disable Debugging** – enables or disables the debugger option — for more information about enabling the debugger, see [How to Debug Microflows Remotely](/howto7/monitoring-troubleshooting/debug-microflows-remotely)

### 2.2 Naming of Environments – Flexible Environments in Mendix Cloud v4{#naming}

If you are the [Technical Contact](/developerportal/company-app-roles/technical-contact) of the app, you can rename the environments as you wish.

Click the **Change** button next to the name of the environment.

{{% alert type="info" %}}
The name must be at least two characters and consist of alphanumeric characters and hyphens (`a-z`, `A-Z`, `0-9`, and `-`) but cannot begin or end with a hyphen.

If you rename an environment, it may take up to 15 minutes before you can access an app via its URL. This is because the URL includes the name of the environment and the old value needs to be removed from the DNS cache. It may take considerably longer for the change to be visible worldwide.
{{% /alert %}}

### 2.3 Scaling – Mendix Cloud v4{#scaling}

If your app is hosted in Mendix Cloud v4, you will see a section named **Instances** in the **General** tab. Click the **Change scaling** button to see the options for changing the scaling.

![](attachments/environments-details/scale.png)

In **Scaling**, there are two sliders that you can control:

* Use the **Instances** slider to increase or decrease the amount from one to four instances by sliding the slider
   * The instances are meant for improved resiliency and increased processing power
   * The minimum amount of RAM memory per instances is 1GB; you can spread the RAM memory among four instances if you have more than 1GB of RAM memory
* Use the **Memory per instance** slider to increase or decrease the memory amount per instance by sliding the slider

The **Total Allocated Memory** is a process circle that shows how much memory is currently used for scaling.

If you have 1GB RAM of the **Total Allocated Memory**, you have one instance available to store your memory.

To scale your memory over multiple instances, you need more memory.

### 2.4 Overviews{#overviews}

At the bottom of the page, there are three overview grids with information about the information below.

#### 2.4.1 Deployment Package Details

In this section, you can find information about the deployment package that is currently loaded into the environment:

* **Name** of the deployment package
* **Version** of the deployment package
* **Runtime** version of Mendix used to create the app
* **Size (MB)** of the deployment package
* **Upload date** of the deployment package

#### 2.4.2 Plan Details - Mendix Cloud v4

This section shows details of the plan which applies to this environment.

#### 2.4.3 License

The license overview contains the following information:

* **Company** owning the license
* **Is Production** shows if this environment is licensed as a production environment
* **Expiration date**
* **Runtime mode** (Production, Acceptance, Test)
* **Limitations**
    * **Limitation type** (see below for details)
    * **Amount type**
    * **Number of allowed users**

The limitation types are the following:

* **Concurrent** – the number of named users that are logged in simultaneously
* **Concurrent anonymous** – the number of anonymous users that are logged in simultaneously
* **Named** – the number of named users registered in the database that are allowed to use the application

## 3 Model Options Tab {#model-options}

![](attachments/environments-details/model-options.png)

On this tab, you can edit the model options described below.

### 3.1 Scheduled Events

In this section, you can view your configured scheduled events.

If you select a scheduled event and click **Toggle**, you can switch the scheduled event off and on.

{{% alert type="info" %}}

You have to restart your application before the changes will be made.

{{% /alert %}}

With scheduled events, you can let the Runtime execute a microflow at a specific moment in time. The event can also be repeated with a given interval (for example, every day).

For more information, see [Scheduled Events](/refguide/scheduled-events).

### 3.2 Constants

In this section, you can view the configured constants. Constants are used to define configuration values that can differ per environment.

To fill in a new value, select the constant and click **Edit**.

Here you can type a **New value**.

You can also set **Mask** to **Yes**. This replaces the **Current value** and the **New value** with asterisks on all screens in the Developer Portal. You will also get asterisks if you export the constants to Excel. This means that you can keep your constants secret from users who do not have edit rights.

{{% image_container width="50%" %}}
![Edit Constants Pop-up window](attachments/environments-details/edit-constant.png)
{{% /image_container %}}

{{% alert type="info" %}}
You have to restart your application before the changes will be made.
{{% /alert %}}

For more information, see [Constants](/refguide/constants).

## 4 Network Tab

{{% image_container width="50%" %}}
![](attachments/environments-details/network1.png)
{{% /image_container %}}

On this tab, you can manage the elements described below.

### 4.1 Custom Domains

* **Domain name**
* **Certificate**
* **Expire** date

You can perform the following actions:

* **Create** (in which you have to provide the **domainname** and select the **certificate** from a drop-down menu)
* **Edit**
* **Delete**

For more information, see [Certificates](certificates) and [Custom Domains](custom-domains).

### 4.2 HTTP Headers{#http-headers}

HTTP Headers allows you to set the values of selected HTTP response headers. These allow the server to pass additional information with the response which the browser will interpret to control the behavior of your Mendix app.

{{% alert type="info" %}}
This replaces the option to prevent embedding your app in an IFrame with more flexible options to set HTTP Headers.
{{% /alert %}}

For Mendix Cloud v3, only *X-Frame-Options* is supported. For Mendix Cloud v4 the HTTP headers which are supported in the Developer Portal are:

| Header | Description | Additional Information |
| --- | --- | --- |
| Access-Control-Allow-Origin | indicates whether the response can be shared with requesting code from the given origin | |
| Content-Security-Policy | allows web site administrators to control resources the user agent is allowed to load for a given page | a string value<br/>*for more information see the W3C recommendation [Content Security Policy Level 2](https://www.w3.org/TR/CSP2/)* |
| Referrer-Policy | governs which referrer information should be included with requests made | |
| X-Content-Type-Options | indicate that the MIME types advertised in the Content-Type headers should not be changed and be followed | |
| X-Frame-Options | indicates whether or not a browser should be allowed to render a page in a `<frame>`, `<iframe>`, `<embed>` or `<object>` | The default is not to allow apps to be rendered inside frames. <br/> This was the value set previously to prevent embedding in an IFrame <br/> See important note <sup><small>[1]</small></sup> below. |
| X-Permitted-Cross-Domain-Policies | specifies whether this page can load resources from a different domain | |
| X-XSS-Protection | stops pages from loading when they detect reflected cross-site scripting (XSS) attacks | |

{{% alert type="warning" %}}
<sup><small>[1]</small></sup>Modern browsers are introducing additional security to ensure that iframes are only allowed when they are from the same domain as the main page. To avoid this issue when you are using custom domain names and want to embed the app in an iframe, ensure that the app you want to embed is part of the same domain. For example, if your page is mainpage.domain.name, then the app embedded in the iframe should be appname.domain.name.
{{% /alert %}}


There are three types of value for these headers:

*  Choose a value from a drop-down

    ![](attachments/environments-details/http-header-dropdown.png)

*  Choose a value from a drop-down and specify a URL

    ![](attachments/environments-details/http-header-url.png)

*  Enter the required values as a string

    ![](attachments/environments-details/http-header-string.png)

The changes to the headers will be implemented when the app is redeployed.

Additional information can be found in the Mozilla developer guide [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers).

### 4.3 Outgoing Connections Whitelisting (Mendix Cloud Dedicated)

If you are deploying your apps to [Mendix Cloud Dedicated](https://www.mendix.com/evaluation-guide/app-capabilities/mendix-cloud-overview#mendix-cloud-vpc) you can define which IP addresses and ports can be used for outgoing connections in this section.

You can add or edit a number of different IP address and port combinations. Any which have already been set up will be listed here. You can do the following:

* Click **Add** to add a new range
* Select an existing range and click **Edit** to edit an existing range
* Select an existing range and click **Delete** to delete an existing range

#### 4.3.1 Managing a Whitelist Entry

![](attachments/environments-details/whitelist.png)

### 4.4 Path-Based Access Restrictions

You can restrict access to your application by means of Client Certificates or IP ranges.

The top level path (`/`) restricts access to the entire application. Settings for specific paths override the implicitly inherited profile for the top level.

Custom access restriction profiles are managed at the application level. They can be reused for all environments (acceptance, production, etc).

The **Path based access restrictions** overview contains the following information:

* **Path**
* **Current Restriction Profile**
* **New Restriction Profile**

You can **Delete** a path or you can **Add** and **Edit** a path with the following restriction types:

* Allow all access
* Deny all access
* Custom Profile for Client Certificates and/or IP ranges
* N/A (inherit)

For more information, see [How to Restrict Access for Incoming Requests](access-restrictions).

### 4.5 Outgoing Connections Certificates

Add client certificates (in the PKCS12 format) or certificate authorities (in the PEM format). These will be used when your application initiates SSL/TLS connections.

## 5 Log Levels Tab{#log-levels}

![](attachments/environments-details/loglevels-tab.png)   

Log levels are used to distinguish the log messages and to highlight the highest priority ones so that they can receive the immediate intervention they require. Note that custom log nodes appear in the list only after a message has been logged to them. See [Log Message](/refguide/log-message#log-node-name) for more information.

On this tab, you can perform the following actions:

* Change the log level type by clicking the specific level
* Click **Set all to INFO** to revert all the changes

![](attachments/environments-details/loglevels.png)

The log level types are the following:

| Level | Color | Description
| --- | --- | --- |
| **Trace** | | More detailed information. These are only written to logs. |
| **Debug** | | Detailed information, typically of interest only when diagnosing problems. |
| **Info**  | | Confirmation that things are working as expected. |
| **Warning** | Orange | Indicates that something unexpected happened or that there is some problem in the near future (for example, "disk space low"). The application is still working as expected. |
| **Error** | Red | Due to a more serious problem, the application has not been able to perform some function. |
| **Critical** | White (text), red (background) | A serious error has occurred, indicating that the application itself may be unable to continue running. |

For more information about log levels, see [How to Set Log Levels](/howto/monitoring-troubleshooting/log-levels).

## 6 Runtime Tab{#runtime-tab}

On this tab, you can add **Custom Runtime Settings** and **Custom Environment Variables**

![](attachments/environments-details/runtime.png)   

### 6.1 Custom Runtime Settings

Use the Custom Runtime Settings section to perform the following actions:

* **Add** a new runtime **setting** with a new **value**
* **Edit** the runtime setting
* **Delete** the runtime settings

For more information about runtime settings, read the [Runtime Customization](/refguide/custom-settings) and [Tricky Custom Settings in Mendix Runtime](/refguide/tricky-custom-runtime-settings) documentation.

The Mendix Cloud uses runtime settings to configure the included systems for logs, backups, and database. Therefore, the following settings are **not** configurable by users:

* `com.mendix.core.localfilesystem.cleaning.isEnabled`
* `com.mendix.core.localfilesystem.cleaning.time`
* `CACertificates`
* `ClientCertificatePasswords`
* `ClientCertificates`
* `DatabaseHost`
* `DatabaseJdbcUrl`
* `DatabaseName`
* `DatabasePassword`
* `DatabaseType`
* `DatabaseUserName`
* `DatabaseUseSsl`
* `DTAPMode`
* `EnableSessionFingerprinting`
* `JavaKeyStorePassword`
* `LogFileName`
* `MaxLogFileCount`
* `MaxLogFileSize`
* `MicroflowConstants`
* `MyScheduledEvents`
* `OracleServiceName`
* `ScheduledEventExecution`
* `TempPath`
* `WebServiceClientCertificates`

### 6.2 Custom Environment Variables

Use the Custom Environment Variables to **add**, **Edit**, or **Delete** an environment variable.

Unlike the Custom Runtime Settings, the variables you add have to be chosen from a drop-down list. The variables are:

* **DD_API_KEY** – the API key used with Datadog
* **DD_LOG_LEVEL** – the log level of logging sent to Datadog
* **DATABASE_CONNECTION_PARAMS** – Additional JDBC parameters for PostgreSQL databases, see the [Mendix Cloud Foundry Buildpack](https://github.com/mendix/cf-mendix-buildpack) for more information
* **APPMETRICS_TARGET** – setting this enables business events to be sent to a different monitoring solution from the technical events 

## 7 Maintenance Tab

![](attachments/environments-details/maintenance.png)   

There are two types of maintenance:

* Regular weekly maintenance (which does not affect your app), during which you can change the preferred maintenance window
* Planned maintenance (which will affect your app in some ways), about which you will automatically receive an email and you can override the maintenance window if necessary

For more information about maintenance, see [Maintenance Windows: Configuration](maintenance-windows).

### 7.1 Preferred Maintenance Window

You can view and change the preferred maintenance.

### 7.2 Planned Maintenance

When a maintenance operation is planned, it will show up under **Planned Maintenance**. By default, this will be planned in your preferred maintenance window. You can override the maintenance window of a specific maintenance operation by clicking **Override**.

You will automatically receive **email notifications** about planned maintenance.

## 8 Tags Tab

![](attachments/environments-details/tags.png)

You can set tags on your environment. These are arbitrary strings that are not interpreted by the Developer Portal. Tags serve two purposes:

* Custom tags can be added to metrics for third-party metrics solutions
* Tags can serve as selection criteria for grouping environments into a landscape management dashboard which can be used for third-party logging solutions

For example, you may wish to use tags when logging with *Datadog*. You can find more information on this at [Getting started with tags](https://docs.datadoghq.com/tagging/) on the *Datadog* site.
