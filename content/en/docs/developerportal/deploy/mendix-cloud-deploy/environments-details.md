---
title: "Environment Details"
url: /developerportal/deploy/environments-details/
weight: 7
description: "Describes the environmental details of your app and how to manage the environment."
tags: ["Deploy","App","Environment","Developer Portal"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#The anchor #connection-safelist below is mapped from the Developer Portal (Mendix Cloud Environment Details), so it should not be removed or changed.
#The anchor #services below is mapped from the Developer Portal (Mendix Cloud Environment Details), so it should not be removed or changed.
---

## 1 Introduction

The **Environment Details** page shows information about a particular environment, for example production or acceptance. You can use it to manage and debug several aspects of the environment.

To open the **Environment Details** page, go to the [Developer Portal](http://sprintr.home.mendix.com), select your licensed app, click **Environments**, and then click **Details** by the specific environment.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/environments-details/environment-details.png" alt="The Details button is located on the right side of the row">}}   

## 2 General Tab

In this tab, you can find the following information about your environment:

* **Status**
    * White (blank) – the environment is stopped or was never deployed
    * Green (check) – the environment is working correctly
    * Orange (horizontal line) – the environment has warnings
    * Red (cross) – the environment is not working correctly
        {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/environments-details/environment-status.png" alt="The symbol displaying the environment status is located under the name of the environment" >}}   
* **Running since** – the date on which the app was started
* **Name** – the type of environment (Test, Acceptance, Production or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments)); for more information, see the [Naming of Environments](#naming) section below
* **Url** – the URL of the app
* **Project ID** – the unique identifier of your app
* **Environment ID** – the unique identifier of this environment
* **Custom domains** – any [custom domains](/developerportal/deploy/custom-domains/) of the app
* **Java Version** – Oracle version 1.8 or AdoptOpenJDK version 8
* **Plan** – this indicates the type of plan covered by this license
* **Instances** – this shows a summary of the number and memory allocation of instances of this environment – for more information, see the [Scaling - Mendix Cloud](#scaling) section below
* **Database Version** – the PostgreSQL version supporting the database
* **Region** – the region where the app is hosted
* **Secondary Backup Location** – the region where the backup is stored
* **Mendix Cloud Version** – the version of Mendix Cloud where the app is hosted

At the bottom of the page there are three overview sections. These are described below in the [Overviews](#overviews) section.

### 2.1 Actions {#actions}

On the right side of the screen, you can find the following action buttons:

* **Restart Application** – this stops the running application and starts it again — this is necessary to apply new constant values or scheduled events to the environment
* **Start/Stop Application**
* **Clear Environment** (only visible if your application is stopped) – this allows you to empty all the data from your database and, optionally, remove the app and file storage from the environment as well; for more information, see [Clearing an Environment](#clear-environment)
* **Show Logged in Users** 
* **Change Admin Password** – this changes the password for the built-in [administrator](/refguide/administrator/) account; the new password is applied immediately, without the need for a restart, and forces the administrator to pick up any new [roles](/refguide/administrator/#user-role) assigned in the app deployment package
* **View Live Log**
* **Show debugger information** – Shows the settings needed to connect the debugger in Studio Pro to your app. For more information on debugging in the cloud, see [How To Debug Microflows Remotely](/refguide/debug-microflows-remotely/).

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/environments-details/actions-v4.png" alt="A screenshot of the available actions">}}

{{% alert color="info" %}}
During a [maintenance window](/developerportal/deploy/maintenance-windows/), you cannot start, restart, or stop your app.
{{% /alert %}}

#### 2.1.2 Clearing an Environment {#clear-environment}

You can use the **Clear Environment** button to clear your environment so that you can use it for another purpose. This option is only available if the environment is stopped.

{{% alert color="info" %}}
You do not need to clear your environment if you are restoring an existing backup of the currently deployed app. The restore process removes the current database and replaces it with the data from the backup.
{{% /alert %}}

To clear the environment, follow these steps:

1. Click **Clear Environment**.
2. Select one of the following options:
    * **Only clear the database** – This empties all data from your database. After you confirm the deletion, the application is stopped, the existing database is deleted, a new database is created, and the application is restarted. Ensure you have a backup of any data that you want to keep.
    * **Clear the full environment (model and database)** – This clears all data from your database and file storage, and removes your app from this environment. You should do this if you want to deploy a different app to this environment.
3. Confirm that you want to clear your environment by typing *clear*.
4. Click **Clear Environment**.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/environments-details/clear-environment.png" alt="Clear Environment options and confirmation"   width="400"  >}}

### 2.2 Naming of Environments – Flexible Environments in the Mendix Cloud {#naming}

If you are the [Technical Contact](/developerportal/general/app-roles/#technical-contact) of the app, you can rename the environments.

To rename the environment, follow these steps:

1. Click the **Change** button next to the name of the environment.
2. Enter the new name, keeping in mind the following requirements:
    * At least two characters
    * Must consist of alphanumeric characters and hyphens (`a-z`, `A-Z`, `0-9`, and `-`)
    * Cannot begin or end with a hyphen

{{% alert color="info" %}}
After you rename an environment, it may take up to 15 minutes before you can access an app via its URL. This is because the URL includes the name of the environment and the old value needs to be removed from the DNS cache. It may take considerably longer for the change to be visible worldwide.
{{% /alert %}}

### 2.3 Scaling {#scaling}

To see the options for changing scaling, in the **General** tab, in the **Instances** section, click **Change scaling**.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/environments-details/scale.png" alt="A sample view of the Scaling page">}}

In **Scaling**, there are two sliders that you can control:

* Use the **Instances** slider to increase or decrease the number of instances from one to four
    * The instances are meant for improved resiliency and increased processing power
    * The minimum amount of RAM per instances is 1 GiB; you can spread the RAM among four instances if you have more than 1 GiB of RAM 
* Use the **Memory per instance** slider to increase or decrease the memory amount per instance

The **Total Allocated Memory** is a process circle that shows how much memory is currently used for scaling.

{{% alert color="info" %}}The maximum value for **Memory per instance** equals the **Total Allocated Memory** of your plan, but it cannot exceed 32 GiB. The maximum number of instances changes according to the **Memory per instance** you have chosen in such a way that `Max instances x Memory per instance = Total Allocated Memory`.{{% /alert %}}

If you have 1 GiB RAM of the **Total Allocated Memory**, you have one instance available to store your memory. To scale your memory over multiple instances, you need more memory.

### 2.4 Overviews {#overviews}

At the bottom of the **Environment Details** page, there are three overview grids showing the deployment package details, plan details, and license.

#### 2.4.1 Deployment Package Details

In this section, you can find information about the deployment package that is currently loaded into the environment:

* **Name** of the deployment package
* **Version** of the deployment package
* **Runtime** version of Mendix used to create the app
* **Size (MB)** of the deployment package
* **Upload date** of the deployment package

#### 2.4.2 Plan Details

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

On this tab, you can edit the model options described below.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/environments-details/model-options.png" >}}

### 3.1 Scheduled Events

In this section, you can view your configured scheduled events.

If you select a scheduled event and click **Toggle**, you can switch the scheduled event off and on.

{{% alert color="info" %}}

You have to restart your application before the changes are made.

{{% /alert %}}

With scheduled events, you can let the Mendix Runtime execute a microflow at a specific moment in time. The event can also be repeated with a given interval (for example, every day).

For more information, see [Scheduled Events](/refguide/scheduled-events/).

### 3.2 Constants {#constants}

In this section, you can view the configured constants. Constants are used to define configuration values that can differ per environment.

To fill in a new value, select the constant and click **Edit**.

Here you can type a **New value**.

You can also set **Mask** to **Yes**. This replaces the **Current value** and the **New value** with asterisks on all screens in the Developer Portal, or if you export the constants to Excel. This means that you can keep your constants secret from users who do not have edit rights.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/environments-details/edit-constant.png" alt="Edit Constants Pop-up window"   width="50%"  >}}

{{% alert color="info" %}}
You have to restart your application before the changes are made.
{{% /alert %}}

For more information, see [Constants](/refguide/constants/).

## 4 Network Tab {#network-tab}

On this tab, you can manage the elements described below.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/environments-details/network1.png"   width="50%"  >}}

### 4.1 Custom Domains {#custom-domains}

* **Domain name**
* **Certificate**
* **Expire** date

You can perform the following actions:

* **Create** – provide the domain name and select the certificate from a drop-down menu
* **Edit**
* **Delete**

For more information, see [Certificates](/developerportal/deploy/certificates/) and [Custom Domains](/developerportal/deploy/custom-domains/).

### 4.2 HTTP Headers {#http-headers}

HTTP Headers allows you to set the values of selected HTTP response headers. These allow the server to pass additional information with the response which the browser interprets to control the behavior of your Mendix app.

{{% alert color="info" %}}
This replaces the option to prevent embedding your app in an iframe with more flexible options to set HTTP Headers.
{{% /alert %}}

The Mendix Cloud supports the following HTTP headers in the Developer Portal:

| Header | Description | Additional Information |
| --- | --- | --- |
| Access-Control-Allow-Origin | Indicates whether the response can be shared with requesting code from the given origin. |
| Content-Security-Policy | Allows web site administrators to control resources the user agent is allowed to load for a given page. Requires a string value.<br/>See [Content Security Policy](#csp), below, for more information. |
| Referrer-Policy | Governs which referrer information should be included with requests made. |
| X-Content-Type-Options | Indicates that the MIME types advertised in the Content-Type headers should not be changed and be followed. |
| X-Frame-Options | Indicates whether or not a browser should be allowed to render a page in a `<frame>`, `<iframe>`, `<embed>` or `<object>`. The default is not to allow apps to be rendered inside frames. <br/> This was the value set previously to prevent embedding in an iframe. <br/> See [Running Your App in an Iframe](#iframe), below, for information about running your app inside an iframe. |
| X-Permitted-Cross-Domain-Policies | Specifies whether this page can load resources from a different domain. |
| X-XSS-Protection | Stops pages from loading when they detect reflected cross-site scripting (XSS) attacks. |

There are three types of value for these headers:

* Choose a value from a drop-down

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/environments-details/http-header-dropdown.png" alt="Selecting a value" >}}

* Choose a value from a drop-down and specify a URL

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/environments-details/http-header-url.png"  alt="Specifying a URL" >}}

* Enter the required values as a string

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/environments-details/http-header-string.png"  alt="Entering a value" >}}

The changes to the headers are implemented when the app is redeployed.

For more information, see [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers).

#### 4.2.1 HTTP Response Headers Inserted Automatically

A number of non-configurable response headers are added automatically by Mendix and the deployment environment. These are listed below.

| Response Header | Added in |
| --- | --- |
| `cache-control`| The buildpack for *index.html* and *login.html* — the Mendix Runtime for other pages |
| `permissions-policy: interest-cohort=()` | Exclude from Federated Learning of Cohorts (FLoC) calculation |
| `strict-transport-security` | TLS terminating webservers - this is set to `max-age=31536000` |
| `x-vcap-request-id` | Cloud Foundry to track requests through CF |

#### 4.2.2 Running Your App in an Iframe {#iframe}

Most browsers have additional security to ensure that iframes are only allowed when they are from the same domain as the main page. The defaults for these vary by browser version. This security is controlled through SameSite cookies. For more information, see [SameSite cookies explained](https://web.dev/samesite-cookies-explained/).

{{% alert color="info" %}}
There can be additional issues when using cookies in iframes for end-users using the Safari browser. Resolving these issues is outside the control of Mendix. For more information, see [Full Third-Party Cookie Blocking and More](https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/).
{{% /alert %}}

##### 4.2.2.1 Using Custom Domains

To avoid security issues when you want to embed the app in an iframe, we recommend that you use [custom domains](/developerportal/deploy/custom-domains/) to ensure that the app you want to embed is part of the same domain. For example, if your page is `mainpage.domain.name`, then the app embedded in the iframe should be `appname.domain.name`.

##### 4.2.2.2 Applying a Different SameSite Setting

From Studio Pro version 8.12, you can control the value of SameSite in your cookies. The default for all cookies depends on the version of Mendix you are using:

* For Studio Pro version 8 (8.12 and above), the default is `SameSite=None`, which means that they can be used in an iframe
* For Studio Pro version 9.0 and above, the default is `SameSite=Strict`, which means that they cannot be used in an iframe

You can change this value in the `com.mendix.core.SameSiteCookies` [custom runtime setting](#custom-runtime-settings) if you want to change iframe restrictions for your app.

For Mendix versions below 8.12, there was no SameSite value set on cookies, and the behavior is dependent on the browser default. To ensure that cookies can be used within iframes, you can set the custom environment variable `SAMESITE_COOKIE_PRE_MX812` to `true` in [custom environment variables](#custom-environment-variables), which sets `SameSite=None; Secure;` for all your cookies.

{{% alert color="warning" %}}
The **SAMESITE_COOKIE_PRE_MX812** setting is implemented the next time your app is deployed after you apply the change.
{{% /alert %}}

##### 4.2.2.3 Using Custom Sign-In Pages

If you use a custom sign-in page, the `originURI` cookie is normally set by your *index.html*. If your Mendix app runs within an iframe, this cookie needs to be set with the `SameSite=None` and `Secure` attributes.

To do this, find all the places in your [theme folder](/howto/front-end/customize-styling-new/) where this cookie is set. It looks like `document.cookie = "originURI=/login.html"`.
Change this to add the required attributes. For example, `document.cookie = "originURI=/login.html" + (window.location.protocol === "https:" ? ";SameSite=None;Secure" : "")`.

#### 4.2.3 Content Security Policy {#csp}

A Content Security Policy informs the client (browser) where your page loads resources from. Setting this can make your app more secure by declaring trusted sources for your resources. For more information see the W3C recommendation [Content Security Policy Level 2](https://www.w3.org/TR/CSP2/).

Setting a full content security policy is dependent on what your app does. However, a starting point which declares the content security policy which works with a basic Mendix app is given below:

```text {linenos=false}
default-src 'self' ; script-src 'self' 'unsafe-inline' 'unsafe-eval' ; connect-src 'self' ; font-src 'self' https://fonts.gstatic.com data: ; img-src 'self' data: ; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com ; base-uri 'self' ; form-action 'self' ; object-src 'none' ; frame-ancestors 'self' ;
```

If you have issues which appear to be related to a content security policy, you can use the console of your browser to investigate them.

### 4.3 Outgoing Connections Safelisting (Mendix Cloud Dedicated){#connection-safelist}

If you are deploying your apps to [Mendix Cloud Dedicated](/developerportal/deploy/#mendix-cloud-dedicated), all outgoing IP addresses are allowed by default.

If you clear the **Allow all outgoing connections** checkbox, you can define which IP addresses and ports can be used for outgoing connections.

You can add or edit a number of different IP address and port combinations. Any ranges which have already been set up are listed here. You can do the following:

* Select **Allow all outgoing connections** to remove any restrictions, or deselect it to impose restrictions
* Click **New** to add a new range
* Select an existing range and click **Edit** to edit an existing range
* Select an existing range, click **Delete**, and then confirm that you want to delete this range

#### 4.3.1 Managing a Safelist Range

For each range where you define safelisted IP addresses and ports, you can enter the following information:

* **Name** – Enter a name to identify this range, for example, *192 Group*.
* **IP** – Specify an inclusive range of safelisted IP addresses in IPv4 format, for example, *142.251.39.1* to *142.251.39.255*. All the IP addresses must be in a public range, see [Valid IP Ranges](#valid-ip), below. All addresses between the **Start** address and the **End** address are safelisted, including the start and end addresses. If you only want to safelist a single address, make the start and end addresses the same.
* **Port** – Specify an inclusive range of ports which are safelisted for the IP range above, for example, *80* to *5000*. You can use several safelist entries if you want to safelist different port ranges for the same IP range.
* **Protocol** – Select whether the safelisting is for **TCP**, **UDP**, or **ALL** traffic.
* **Description** – Enter an optional description of this IP range, for example which API it supports.

Click **Save** to save your range. The new values are applied within a few minutes without needing an app restart.

#### 4.3.2 Valid IP Ranges {#valid-ip}

IP Addresses must be within the following ranges:

| IP Start | IP End |
| --- | --- |
| 0.0.0.0 | 9.255.255.255 |
| 11.0.0.0 | 169.253.255.255 |
| 169.255.0.0 | 172.15.255.255 |
| 172.32.0.0 | 192.167.255.255 |
| 192.169.0.0 | 255.255.255.255 |

### 4.4 Path-Based Access Restrictions {#path-based-restrictions}

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

For more information, see [How to Restrict Access for Incoming Requests](/developerportal/deploy/access-restrictions/).

### 4.5 Outgoing Connections Certificates

Add client certificates (in the PKCS12 format) or certificate authorities (in the PEM format). These are used when your application initiates SSL/TLS connections.

## 5 Log Levels Tab {#log-levels}

Log levels are used to distinguish the log messages and to highlight the highest priority ones so that they can receive the immediate intervention they require. 

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/environments-details/loglevels-tab.png" alt="Viewing the log levels" >}}

Custom log nodes appear in the list only after a message has been logged to them. See [Log Message](/refguide/log-message/#log-node-name) for more information.

On this tab, you can perform the following actions:

* Change the log level type by clicking the specific level
    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/environments-details/loglevels.png" alt="Selecting the log level type" >}}
* Click **Set all to INFO** to revert all the changes

When using the **Log levels** tab, bear in mind the following considerations:

* If your app is not running, the tab only shows log nodes which are set to a level other than Info. Log nodes which are set to the Info level become visible when your app is restarted and, for custom nodes, after messages have been logged to them.
* If you change the log level, this level will continue to be used even if you later restart your app.
* For an application running a single instance, any changes are applied immediately to the application.
* For an application running more than one instance, the changes can only be applied after a restart of the app. This is because it is not possible to instruct the load balancer to set the log level for a specific running instance. 
* Log levels may not persist across restarts if you change them outside the Developer Portal (for example, using an app module).

The log level types are the following:

| Level | Color | Description
| --- | --- | --- |
| Trace | | More detailed information. These are only written to logs. |
| Debug | | Detailed information, typically of interest only when diagnosing problems. |
| Info  | | Confirmation that things are working as expected. |
| Warning | Orange | Indicates that something unexpected happened or that there is some problem in the near future (for example, "disk space low"). The application is still working as expected. |
| Error | Red | Due to a more serious problem, the application has not been able to perform some function. |
| Critical | White (text), red (background) | A serious error has occurred, indicating that the application itself may be unable to continue running. |

For more information about log levels, see [How to Set Log Levels](/howto/monitoring-troubleshooting/log-levels/).

## 6 Runtime Tab {#runtime-tab}

On this tab, you can add **Custom Runtime Settings** and **Custom Environment Variables**

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/environments-details/runtime.png" alt="Viewing the Runtime tab" >}}   

### 6.1 Custom Runtime Settings {#custom-runtime-settings}

Use the **Custom Runtime Settings** section to perform the following actions:

* **Add** a new runtime setting with a new value
* **Edit** the runtime setting
* **Delete** the runtime settings

For more information about runtime settings, read the [Runtime Customization](/refguide/custom-settings/) and [Advanced Custom Settings in Mendix Runtime](/refguide/tricky-custom-runtime-settings/) documentation.

Mendix Cloud uses runtime settings to configure the included systems for logs, backups, and database. Therefore, the following settings are not configurable by users:

* `CACertificates`
* `ClientCertificatePasswords`
* `ClientCertificates`
* `com.mendix.core.localfilesystem.cleaning.isEnabled`
* `com.mendix.core.localfilesystem.cleaning.time`
* `com.mendix.storage.azure.*`
* `com.mendix.storage.s3.*`
* `DatabaseHost`
* `DatabaseJdbcUrl`
* `DatabaseName`
* `DatabasePassword`
* `DatabaseType`
* `DatabaseUserName`
* `DatabaseUseSsl`
* `JavaKeyStorePassword`
* `LogFileName`
* `MaxLogFileCount`
* `MaxLogFileSize`
* `MyScheduledEvents`
* `OracleServiceName`
* `ScheduledEventExecution`
* `TempPath`
* `WebServiceClientCertificates`

### 6.2 Custom Environment Variables {#custom-environment-variables}

Use the Custom Environment Variables to add, edit, or delete an environment variable.

Unlike the Custom Runtime Settings, most of the variables you add are chosen from a drop-down list.

Click **Add** > **Supported** to choose from the following variables:

* **APPMETRICS_TARGET** – enables sending application runtime and custom business metrics to HTTP endpoints of different monitoring solutions, such as [InfluxDB](https://www.influxdata.com/), while ignoring micrometer endpoints
* **DD_API_KEY** – the API key used with Datadog
* **DD_LOG_LEVEL** – the log level of logging sent to Datadog
* **DD_SITE** – directs metrics to a specific Datadog region
* **DATABASE_CONNECTION_PARAMS** – Additional JDBC parameters for PostgreSQL databases, see the [Mendix Cloud Foundry Buildpack](https://github.com/mendix/cf-mendix-buildpack) for more information
* **JVM_GARBAGE_COLLECTOR** – overrides the automatic configuration of the Java garbage collector — accepted values are `Serial` or `G1`
* **METRICS_AGENT_CONFIG** – passes a configuration JSON to control the metrics passed to Datadog
* **SAMESITE_COOKIE_PRE_MX812** – sets `SameSite=None;Secure` for all cookies coming from the Mendix runtime, as described in the [Running Your App in an Iframe](#iframe) section
* **USAGE_METRICS_EMAIL_FIELDS** – if your app uses specializations of the `System.User` entity to store users, use this variable to point to the them. This enables us to identify internal and external users of your app. The value of this variable is in the format `Module.Entity.Attribute`, where `Module` is the module of your app which contains the `Entity` that is a specialization of `System.User` and `Attribute` is the attribute that contains the email address of the user. If you have multiple specializations of `System.User`, you can specify the values in comma-separated format. That is `Module1.Entity1.Attribute1,Module2.Entity2.Attribute2,…,ModuleN.EntityN.AttributeN`. In the following example there are two specializations identified: `Administration.Account.Email,MendixSSO.MendixSSOUser.EmailAddress`.

In addition, to support features which are in Beta, you can click **Add** > **Unsupported** to add an unsupported environment variable. Unsupported environment variables can only be used for controlling Mendix Beta features. If you are involved in using a Beta feature, you will be informed what **Name** needs to be entered here and what the **Value** should be.

## 7 Maintenance Tab {#maintenance-tab}

You can use the **Maintenance** tab to view information about planned maintenance, as well as configure your preferred maintenance window.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/environments-details/maintenance.png" alt="Viewing the Maintenance tab" >}}   

There are two types of maintenance:

* Regular weekly maintenance (which does not affect your app), during which you can change the preferred maintenance window
* Planned maintenance (which affects your app in some ways), about which you will automatically receive an email and you can override the maintenance window if necessary

For more information about maintenance, see [Maintenance Windows: Configuration](/developerportal/deploy/maintenance-windows/).

### 7.1 Preferred Maintenance Window

You can view and change the preferred maintenance.

### 7.2 Planned Maintenance

When a maintenance operation is planned, it appears under **Planned Maintenance**. By default, this is planned in your preferred maintenance window. You can override the maintenance window of a specific maintenance operation by clicking **Override**.

You automatically receive email notifications about planned maintenance.

## 8 Tags Tab{#tags}

You can set tags on your environment. These are arbitrary strings that are not interpreted by the Developer Portal.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/environments-details/tags.png" alt="Viewing the Tags tab" >}}

Tags serve two purposes:

* Custom tags can be added to metrics for third-party metrics solutions
* Tags can serve as selection criteria for grouping environments into a landscape management dashboard which can be used for third-party logging solutions

For example, you may wish to use tags when logging with Datadog. For more information, see [Getting started with tags](https://docs.datadoghq.com/tagging/).

## 9 Services Tab {#services}

You can enable and disable custom services for individual environments of your app. The service that you want to enable must have been enabled for the app by its [Technical Contact](/developerportal/general/app-roles/#technical-contact). For more information, see [Services](/developerportal/deploy/environments/#services).

Here, the [Technical Contact](/developerportal/general/app-roles/#technical-contact) can decide which custom services can be used in each environment of this app.

### 9.1 Available Services

The custom services that are currently available for each environment are as follows:

* **Event Broker service** – required to use [Mendix Business Events](/appstore/modules/business-events/) on production apps

### 9.2 Enabling Custom Services

Technical Contacts need to enable and disable custom services for individual environments of each app. The service must first be enabled for the app by its Technical Contact (see [Services](/developerportal/deploy/environments/#services) in the *Environments* documentation).
