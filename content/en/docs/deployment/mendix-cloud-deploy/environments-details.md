---
title: "Environment Details"
url: /developerportal/deploy/environments-details/
weight: 8
description: "Describes the environmental details of your app and how to manage the environment."
aliases:
    - /developerportal/deploy/environments-details-redesign/
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#The anchor #connection-safelist below is mapped from the Mendix Portal (Mendix Cloud Environment Details), so it should not be removed or changed.
#The anchor #services below is mapped from the Mendix Portal (Mendix Cloud Environment Details), so it should not be removed or changed.
---

## Introduction

To open the **Environment Details** page, go to [Apps](https://sprintr.home.mendix.com) and click **Environments** on your licensed app. Then click **Details** ({{% icon name="notes-paper-edit" %}}) by the environment you want to view.

{{% alert color="info" %}}You must have permissions for **Transport Rights** to view the **Environment Details** page. For details on configuring permissions, see [Node Permissions](/developerportal/deploy/node-permissions/).{{% /alert %}}

The **Environment Details** page shows information about the selected environment and includes eight tabs: **General**, **Model Options**, **Network**, **Log Levels**, **Runtime**, **Maintenance**, **Tags**, and **Services**. You can also use this page to manage and debug several aspects of the environment.

## Actions {#actions}

On the top right side of the screen, there are a number of action buttons and a **More Options** ({{% icon name="three-dots-menu-horizontal"%}}) menu that you can use to perform various actions. Some action buttons are visible when your app is running, some are visible when your app is stopped, and some are always visible.

{{% alert color="info" %}}Depending on your permissions, you may see only some of the action buttons described below. You can adjust your permissions settings on the [Permissions](/developerportal/deploy/node-permissions/) tab of your app's **Environments** page.{{% /alert %}}

### Running App Actions

When your app is running, you can perform the following actions:

* **Deploy** – This deploys an application to the environment.
* **Restart App** – This stops the running application and starts it again. Restarting your app is required for applying new constant values or scheduled events to the environment.
* **Stop App** – This stops the application.
* **More Options**:
    * **Show Logged in Users** – This shows all users who are logged in to your app.
    * **Change Admin Password** – This changes the password for the built-in [administrator](/refguide/administrator/) account. The new password is applied immediately, without the need for a restart, and forces the administrator to pick up any new [roles](/refguide/administrator/#user-role) assigned in the app deployment package.
    * **View Live Logs** – This shows a live log of your application and performs the same action as the **View Live Log** button on the [Logs](/developerportal/operate/logs/) page.
    * **Show Debugger Info** – This shows the settings needed to connect the debugger in Studio Pro to your app. For more information on debugging in the cloud, see [How To Debug Microflows Remotely](/refguide/debug-microflows-remotely/).
    * **Show Running Now** – You can use this to monitor all actions that are currently running in your environment. For more information, see [Running Now](/developerportal/deploy/mxcloud-runningnow/).

### Stopped App Actions

When your app is stopped, you can perform these actions:

* **Deploy** – This deploys an application to the environment.
* **Start App** – This starts the application.
* **More Options**:
    * **Clear Environment** – This allows you to empty all the data from your database and, optionally, remove the app and file storage from the environment. For more information, see [Clearing an Environment](#clear-environment). 
    * **View Live Logs** – This shows a live log of your application.

{{% alert color="info" %}}
During a [maintenance window](/developerportal/deploy/maintenance-windows/), you cannot start, restart, or stop your app.
{{% /alert %}}

#### Clearing an Environment {#clear-environment}

The **Clear Environment** button lets you clear your environment so that you can use it for another purpose. This option is only available if the environment is stopped.

{{% alert color="info" %}}
You do not need to clear your environment if you are restoring an existing backup of the currently deployed app. The restoration process removes the current database and replaces it with the data from the backup.

Clearing the database does not delete the database instance itself. Some disk usage, like logs and system data, will still remain.
{{% /alert %}}

To clear your environment, follow these steps:

1. Click **Clear Environment**.
2. Select one of the following options:

    * **Only clear the database** – This removes all data from your database tables. Ensure you have a backup of any data that you want to keep.

        After you confirm the deletion, the application is stopped, the existing data is removed from the database, and the application is restarted. Note that the database retains some information, such as logs and system data.

    * **Clear the full environment (model and database)** – This clears all data from your database and file storage. It also removes your app from this environment. Clear the full environment if you want to deploy a different app to the environment.

3. Confirm that you want to clear your environment by typing the indicated text (*clear database* or *clear model and database*, depending on which option you selected).
4. Click **Clear Environment**.

## The General Tab {#general-tab}

In the **General** tab, you can find four sections that provide information about the [application status](#application-status), [deployment package details](#deployment-package-details), [plan details](#plan-details), and [license](#license).

### Application Status

In the **Application Status** section of the **General** tab, you can find the following information about your environment:

* **Status**
    * {{% icon name="checkmark-circle-filled" color="green" %}} – The application in this environment is running
    * {{% icon name="subtract-circle-filled" color="gray" %}} – No application has been started yet in this environment, or it has been turned off
    * {{% icon name="alert-circle-filled" color="yellow" %}} – The application in this environment is experiencing some difficulties; check the alerts page or logs for more information
    * {{% icon name="remove-circle-filled" color="red" %}} – The application in this environment is unstable and probably not usable anymore
* **Project ID** – the unique identifier of the app
* **Environment ID** – the unique identifier of the environment
* **Running Since** – the date the app was started, if it is running
* **Display Name** – the type of environment (Acceptance, Production, Test, or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments)); for more information, see the [Naming of Environments](#naming) section below
* **Subdomain Suffix** – the application's subdomain name
* **URL** – the URL of the app
* **Custom Domains** – any [custom domains](/developerportal/deploy/custom-domains/) of the app; to add a new domain, click **Add Custom Domain**
* **Studio Pro Target** – a **Yes** or **No** value indicating whether the environment is the designated deployment target from Studio Pro; for more information, see [Studio Pro Deployment Settings](/developerportal/deploy/studio-deployment-settings/)
* **Java Version** – the JDK version selected for the MDA that is deployed to the environment
* **Database Version** – the PostgreSQL version supporting the database
* **Region** – the data center region where the app is hosted (for the full list of Mendix Cloud regions, see [Outgoing IP](/developerportal/deploy/mendix-ip-addresses/#outgoing))
* **Data Backup Secondary Location** – the region where the backup is stored (for more information, see [Data Location](/developerportal/operate/backups/#data-location) in the *Backups* documentation)

#### Naming of Environments – Flexible Environments in Mendix Cloud {#naming}

If you are the app's [Technical Contact](/developerportal/general/app-roles/#technical-contact), you can rename the environment’s **Subdomain Suffix** or **Display Name** by clicking **Change** next to either of the options.

* **Display Name requirements**:
    * Must start and end with an alphanumeric or non-latin character
    * Must contain two or more alphanumeric or non-latin characters and hyphens (–)
    * Maximum of 200 characters are allowed
* **Subdomain Suffix requirements** 
    * Consists of at least two characters
    * Consists of only alphanumeric characters and hyphens (`a-z`, `A-Z`, `0-9`, and `-`)
    * Does not begin or end with a hyphen

{{% alert color="info" %}}
After you rename an environment’s subdomain suffix, it may take up to 15 minutes before you can access an app via its URL. This is because the URL includes the subdomain name of the environment, and the old value needs to be removed from the DNS cache. It may take considerably longer for the change to be visible worldwide.
{{% /alert %}}

### Deployment Package Details

In this section, you can find information about the deployment package that is loaded into the environment:

* **Name** of the deployment package
* **Version** of the deployment package
* **Runtime** version of Mendix used to create the app
* **Size (MB)** of the deployment package
* **Upload Date** of the deployment package

### Plan Details

This section shows details of the plan that applies to this environment.    
It also includes the option to change your plan. For details, refer to [Changing Plan](/developerportal/deploy/change-plan/).

* **Name** – the type of plan associated with your license
* **Instances** – the number and memory allocation of instances in the environment (for more information, see the [Scaling](#scaling))
* **Memory** – the total allocated memory of the plan
* **Database Plan Cores** – the CPU cores allocated to the database
* **Database Plan Space** – the storage capacity of the database
* **Database Plan Memory** – the database's RAM size
* **File Storage** – available size for storing blobs
* **Multi-AZ Enabled** –  a **Yes** or **No** value indicating whether multiple availability zones are enabled

#### Scaling {#scaling}

To see the options for changing scaling, click **Scale** on the **Instances** row. This will open the **Change Scaling** dialog box, which includes two sliders that you can control:

* Use the **Instances** slider to increase or decrease the number of instances
    * The instances are meant for improved resiliency and increased processing power
    * The minimum amount of RAM per instance is 1 GiB; you can spread the RAM among four instances if you have more than 1 GiB of RAM
* Use the **Memory per instance** slider to increase or decrease the memory amount per instance

The **Total Allocated Memory** is represented by a progress circle that shows how much memory is currently used for scaling.

{{% alert color="info" %}}The maximum value for **Memory per instance** equals the **Total Allocated Memory** of your plan, and it cannot exceed 32 GiB. The maximum number of instances depends on the **Memory per instance** you have chosen; the maximum number of instances equals the total allocated memory divided by the memory per instance.{{% /alert %}}

If you have 1 GiB RAM of total allocated memory, you have one instance to use your memory. To scale your memory over multiple instances, you need more memory.

For more information, see [Scaling Your Environment](/developerportal/deploy/scale-environment/).

### License

The license overview contains the following information:

* **Company** – who owns the license
* **Is Production** – indicates if the environment is licensed as a production environment
* **Runtime mode** – Production, Acceptance, or Test

## The Model Options Tab {#model-options}

On this tab, you can edit the model options for constants and scheduled events.

### Constants {#constants}

In this section, you can view the configured constants. Constants are used to define configuration values that can differ per environment.

To fill in a new value, select the constant and click **Edit** to bring up the **Edit Constant** dialog box.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/environments-details-beta/edit-constant.png" >}}

In the **Edit Constant** dialog box, you can change the constant value using the **New Value** field.

You can also set **Mask** to **Yes** to change the display settings for **Current Value** and **New Value**. When masking is enabled, all screens in the Mendix Portal (and in Excel if you export the constants) conceal their values and display asterisks in their place. This keeps your constants secret from users with no edit rights.

{{% alert color="info" %}}
For the changes to take effect, you must restart your application.
{{% /alert %}}

{{% alert color="info" %}}
When a constant is first introduced to a cloud deployment, its value is taken from the Studio Pro configuration. Any later changes to the constant value in Studio Pro will not be copied to the new deployment.
{{% /alert %}}

For more information, see [Constants](/refguide/constants/).

#### Comparing Constants

You can export the constant values to an Excel file by clicking **Export To Excel**, or compare the values across different environments by clicking **Compare and Edit**.

### Scheduled Events

In this section, you can view your configured scheduled events.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/environments-details-beta/edit-event.png" >}}

If you select a scheduled event and click **Toggle**, you can switch the scheduled event off and on.

{{% alert color="info" %}}
For the changes to take effect, you must restart your application.
{{% /alert %}}

With scheduled events, you can let the Mendix Runtime run a microflow at a specific moment in time. The event can also be repeated with a given interval; for example, you can set it to repeat every day.

For more information, see [Scheduled Events](/refguide/scheduled-events/).

## The Network Tab {#network-tab}

On the **Network** tab, you can manage the elements described below.

### Custom Domains {#custom-domains}

* **Domain Name**
* **Certificate**
* **Expire** date

You can perform the following actions:

* **Add** – provide the domain name and select the certificate from a drop-down menu
* **Edit** – update the domain details
* **Delete** – remove domain

For more information, see [Certificates](/developerportal/deploy/certificates/) and [Custom Domains](/developerportal/deploy/custom-domains/).

### HTTP Headers {#http-headers}

The **HTTP Headers** section lets you set the values of selected HTTP response headers. These headers allow the server to pass additional information with the response, which the browser interprets to control the behavior of your Mendix app.

{{% alert color="info" %}}
Earlier versions of Mendix Cloud had a setting that let you prevent embedding your app in an iframe. This setting is now replaced with support for HTTP headers, which offer more flexible options.
{{% /alert %}}

Mendix Cloud supports the following HTTP headers in the Mendix Portal:

| Header                        | Description |
| ----------------------------- | ----------- |
| `Access-Control-Allow-Origin` | Indicates whether the response can be shared with requesting code from the given origin. |
| `Content-Security-Policy`     | Allows website administrators to control resources the user agent is allowed to load for a given page. Requires a string value.<br/>For more information, see [Content Security Policy](#csp), below. |
| `Origin-Trial`                | Used to enable experimental web platform features for your environment as part of Google's [Origin Trials](https://developer.chrome.com/docs/web-platform/origin-trials/) program. |
| `Referrer-Policy`             | Governs which referrer information should be included with requests made. |
| `X-Content-Type-Options`      | Indicates that the MIME types advertised in the Content-Type headers should not be changed and be followed. |
| `X-Frame-Options`             | Indicates whether or not a browser should be allowed to render a page in a `<frame>`, `<iframe>`, `<embed>`, or `<object>`. The default is not to allow apps to be rendered inside frames. This was the value set previously to prevent embedding in an iframe.<br/>For details on running your app inside an iframe, see [Running Your App in an Iframe](#iframe), below. |
| `X-Permitted-Cross-Domain-Policies` | Specifies whether the page can load resources from a different domain. |
| `X-XSS-Protection`            | Stops pages from loading when they detect reflected cross-site scripting (XSS) attacks. |

There are three types of values for these headers:

* Choose a value from a drop-down menu:

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/environments-details-beta/http-header-dropdown.png" alt="Selecting a value" width=450 >}}

* Choose a value from a drop-down menu and specify a URL:

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/environments-details-beta/http-header-url.png"  alt="Specifying a URL" width=450 >}}

* Enter the required values as a string:

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/environments-details-beta/http-header-string.png" alt="Entering a value" width=450 >}}

The changes to the headers are implemented when the app is redeployed.

For more information about HTTP headers, see [MDN's HTTP headers overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers).

#### HTTP Response Headers Inserted Automatically

Mendix and the deployment environment automatically add some non-configurable response headers. These are listed below.

| Response Header | Added In |
| --------------- | -------- |
| `cache-control`| The buildpack for *index.html* and *login.html* – the Mendix Runtime for other pages |
| `permissions-policy: interest-cohort=()` | Exclude from Federated Learning of Cohorts (FLoC) calculation |
| `strict-transport-security` | TLS terminating webservers – set to `max-age=31536000` (365 days, in seconds)|
| `X-Request-ID` | Kubernetes to track requests through the Mendix Cloud platform |

#### Running Your App in an Iframe {#iframe}

Most browsers have additional security to ensure that iframes are only allowed when they are from the same domain as the main page. The defaults for these vary by browser version. This security is controlled through `SameSite` cookies. For more information, see [SameSite Cookies Explained](https://web.dev/samesite-cookies-explained/).

{{% alert color="info" %}}
There can be additional issues when using cookies in iframes for end-users using the Safari browser. Resolving these issues is outside the control of Mendix. For more information, see [Full Third-Party Cookie Blocking and More](https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/).
{{% /alert %}}

##### Using Custom Domains

To avoid security issues when you want to embed the app in an iframe, use [custom domains](/developerportal/deploy/custom-domains/). This way, you can ensure that the app you want to embed is part of the same domain. For example, if your page is `mainpage.domain.name`, then the app embedded in the iframe should be `appname.domain.name`.

##### Applying a Different SameSite Setting {#samesite}

From Studio Pro 8.12, you can control the value of `SameSite` in your cookies. The default for all cookies depends on the version of Mendix you are using:

* For Studio Pro 8 (8.12 and above), the default is `SameSite=None`, which means that they can be used in an iframe
* For Studio Pro 9.0 and above, the default is `SameSite=Strict`, which means that they cannot be used in an iframe

You can change this value in the `com.mendix.core.SameSiteCookies` [custom runtime setting](#custom-runtime-settings) if you want to change iframe restrictions for your app.

For Mendix 8.11 and below, there was no `SameSite` value set on cookies, and the behavior depended on the browser default. To ensure that cookies can be used within iframes, you can set the custom environment variable `SAMESITE_COOKIE_PRE_MX812` to `true` in the **Custom Environment Variables** section; this sets `SameSite=None; Secure;` for all your cookies.

{{% alert color="warning" %}}
The `SAMESITE_COOKIE_PRE_MX812` setting is implemented the next time your app is deployed after you apply the change.
{{% /alert %}}

##### Using Custom Sign-In Pages

If you use a custom sign-in page, the `originURI` cookie is normally set in the *index.html* file. If your Mendix app runs within an iframe, set this cookie with the `SameSite=None` and `Secure` attributes.

To do this, find all the places in your [theme](/howto/front-end/customize-styling-new/) folder where this cookie is set. It looks like `document.cookie = "originURI=/login.html"`.
Change this to add the required attributes. Here is an example:

```js
document.cookie = "originURI=/login.html" + (window.location.protocol === "https:" ? ";SameSite=None;Secure" : "")
```

#### Content Security Policy {#csp}

A Content Security Policy (CSP) informs the client (browser) where your page loads resources from. Setting this can make your app more secure by declaring trusted sources for your resources. For more information, see the W3C recommendation [Content Security Policy Level 2](https://www.w3.org/TR/CSP2/).

{{% alert color="info" %}}
For complete CSP support, including nonce-based CSP, use the [Headers](/refguide/configuration/#headers) custom runtime setting instead of the HTTP Headers UI. For detailed implementation instructions, see [Content Security Policy](/howto/security/csp/).
{{% /alert %}}

The process for setting a full content security policy depends on what your app does. However, a starting point that declares the content security policy that works with a basic Mendix app is given below:

```text
default-src 'self' ; script-src 'self' 'unsafe-inline' 'unsafe-eval' ; connect-src 'self' ; font-src 'self' https://fonts.gstatic.com data: ; img-src 'self' data: ; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com ; base-uri 'self' ; form-action 'self' ; object-src 'none' ; frame-ancestors 'self' ;
```

If you have issues that appear to be related to a content security policy, you can use the console of your browser to investigate them.

### Outgoing Connections Safelisting (Mendix Cloud Dedicated) {#connection-safelist}

If you are deploying your apps to [Mendix Cloud Dedicated](/deployment/#mendix-cloud-dedicated), all outgoing IP addresses are allowed by default.

If you clear the **Allow all outgoing connections** checkbox, you can define which IP addresses and ports can be used for outgoing connections.

You can add or edit multiple different IP address and port combinations. Any ranges that have already been set up are listed here. You can do the following:

* To remove any restrictions, select **Allow all outgoing connections**. To impose restrictions, clear **Allow all outgoing connections**.
* To add a new range, click **New**.
* To edit a range, select an existing range and click **Edit**.
* To delete a range, select an existing range, click **Delete**, and then confirm that you want to delete it.

#### Managing a Safelist Range

For each range where you define safelisted IP addresses and ports, you can enter the following information:

* **Name** – Enter a name to identify this range (for example, *192 Group*).
* **IP** – Specify an inclusive range of safelisted IP addresses in IPv4 format (for example, *142.251.39.1* to *142.251.39.255*). All the IP addresses must be in a public range (see [Valid IP Ranges](#valid-ip), below). All addresses between the **Start** address and the **End** address are safelisted, including the start and end addresses. If you want to safelist a single address, make the start and end addresses the same.
* **Port** – Specify an inclusive range of ports that are safelisted for the IP range above (for example, *80* to *5000*). You can use several safelist entries if you want to safelist different port ranges for the same IP range.
* **Protocol** – Select whether the safelisting is for **TCP**, **UDP**, or **ALL** traffic.
* **Description** – Enter an optional description of this IP range (for example, which API it supports).

Click **Save** to apply your range. The new values take effect within a few minutes without needing an app restart.

#### Valid IP Ranges {#valid-ip}

IP addresses must be within the following ranges:

| IP Start    | IP End          |
| ----------- | --------------- |
| 0.0.0.0     | 9.255.255.255   |
| 11.0.0.0    | 169.253.255.255 |
| 169.255.0.0 | 172.15.255.255  |
| 172.32.0.0  | 192.167.255.255 |
| 192.169.0.0 | 255.255.255.255 |

### Path-Based Access Restrictions {#path-based-restrictions}

You can restrict access to your application using Client Certificates or IP ranges.

The root path (`/`) restricts access to the entire application. If a specific path has it own settings, those will override the profile inherited from other non-root paths.

Custom access restriction profiles are managed at the application level and can be reused across all environments (acceptance, production, etc).

The **Path Based Access Restrictions** overview contains the following information:

* **Path**
* **Current Restriction Profile**
* **New Restriction Profile**

You can **Delete** a path or you can **Add** and **Edit** a path with the following restriction types:

* Allow all access
* Deny all access
* Custom Profile for Client Certificates and/or IP ranges
* N/A (inherit)

For more information, see [How to Restrict Access for Incoming Requests](/developerportal/deploy/access-restrictions/).

### Outgoing Connections Certificates

Add client certificates (in the PKCS12 format) or certificate authorities (in the PEM format). These are used when your application initiates SSL/TLS connections.

## The Log Levels Tab {#log-levels}

Log levels are used to distinguish log messages. Log levels highlight the highest-priority log messages so that they can be prioritized accordingly. 

Custom log nodes appear in the list only after a message has been logged to them. For more information, see [Log Message](/refguide/log-message/#log-node-name).

On this tab, you can perform the following actions:

* Change the log level by selecting the new value from a drop-down list.
* Click **Set all to INFO** to revert all the changes.

When using the **Log Levels** tab, bear in mind the following considerations:

* If your app is not running, the tab only shows log nodes that are set to a level other than Info. Log nodes that are set to the Info level become visible when your app is restarted.
    * For custom nodes, log nodes become visible when your app is restarted and after messages have been logged to them.
* If you change the log level, this level will continue to be used even if you later restart your app.
* If you change the log level, the startup logs (the logs that are created while starting the runtime, including the logs that the after-startup microflow generates) are not affected. It is not possible to change the log level of the startup logs for apps hosted on Mendix Cloud. 
* For an application running a single instance, changes are applied immediately to the application.
* For an application running more than one instance, the changes can only be applied after a restart of the app. This is because it is not possible to instruct the load balancer to set the log level for a specific running instance. 
* Log levels may not persist across restarts if you change them outside the Mendix Portal (for example, using an app module).

The log level types are as follows:

| Level    | Color  | Description |
| -------- | ------ | ----------- |
| Trace    |        | Provides highly detailed information. Trace level messages are written only to logs. |
| Debug    |        | Provides detailed information, typically of interest only when diagnosing problems. |
| Info     |   Blue      | Confirms that things are working as expected. |
| Warning  | Orange | Indicates that something unexpected happened or warns about an upcoming problem (for example, "disk space low"). The application is still working as expected. |
| Error    | Red    | Indicates a serious problem that prevented the application from performing some function. |
| Critical | White text, red background | Indicates that a serious error has occurred; the application may be unable to continue running. |

For more information about log levels, see [How to Set Log Levels](/howto/monitoring-troubleshooting/log-levels/).

## The Runtime Tab {#runtime-tab}

On the **Runtime** tab, you can add **Custom Runtime Settings** and **Custom Environment Variables**.  

### Custom Runtime Settings {#custom-runtime-settings}

Use the **Custom Runtime Settings** section to perform the following actions:

* **Add** a new runtime setting
* **Edit** the runtime setting
* **Delete** the runtime setting

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

### Custom Environment Variables {#custom-environment-variables}

Use the **Custom Environment Variables** section to add, edit, or delete an environment variable.

Unlike the **Custom Runtime Settings** section, most of the variables you add are chosen from a drop-down list.

Click **Add** and select **Supported** to choose from the following variables:

* **APPMETRICS_TARGET** – This enables sending application runtime and custom business metrics to HTTP endpoints of different monitoring solutions, such as [InfluxDB](https://www.influxdata.com/), while ignoring micrometer endpoints.
* **DD_API_KEY** – This is the API key used with Datadog.
* **DD_ENV** – Specifies the application environment for Datadog.
* **DD_TRACE_ENABLED** – Enables or disables tracing. By default, the value is set to `false`, which means data collection remains active, but no trace is sent to the trace agent.
* **DD_SITE** – This directs metrics to a specific Datadog region.
* **DATABASE_CONNECTION_PARAMS** – These are additional JDBC parameters for PostgreSQL databases. For more information, see the [Mendix Cloud Foundry Buildpack](https://github.com/mendix/cf-mendix-buildpack).
* **JVM_GARBAGE_COLLECTOR** – This overrides the automatic configuration of the Java garbage collector. Accepted values are `Serial` or `G1`.
* **METRICS_AGENT_CONFIG** – This passes a configuration JSON to control the metrics passed to Datadog.
* **SAMESITE_COOKIE_PRE_MX812** – This sets `SameSite=None;Secure` for all cookies coming from the Mendix runtime, as described in the [Running Your App in an Iframe](#iframe) section.
* **USAGE_METRICS_EMAIL_FIELDS** (deprecated) – If your app uses specializations of the `System.User` entity to store users, use this variable to point to them. This enables Mendix to identify [internal and external users](/developerportal/deploy/populate-user-type/) of your app.

    * The value of this variable is in the format `Module.Entity.Attribute`, where `Module` is the module of your app that contains the `Entity` that is a specialization of `System.User` and `Attribute` is the attribute that contains the email address of the user.
    * If you have multiple specializations of `System.User`, you can specify the values in comma-separated format (that is, `Module1.Entity1.Attribute1,Module2.Entity2.Attribute2,…,ModuleN.EntityN.AttributeN`). In the following example, there are two specializations identified: `Administration.Account.Email,MendixSSO.MendixSSOUser.EmailAddress`.

    To ensure accurate user metering, it is important to distinguish external users from internal users. The recommended approach is to implement logic in your app to classify users (see [Populate User Types](/developerportal/deploy/populate-user-type/) and the [User Classification](/appstore/modules/user-classification/) module). A previous method relied on using email domains via the `USAGE_METRICS_EMAIL_FIELDS` constant, as described above. However, this method has now been deprecated. 

Unsupported environment variables can only be used to control Mendix beta features. To configure an unsupported variable, click **Add** and select **Unsupported**. If you are using a beta feature, you will be informed what **Name** and **Value** to enter.

## The Maintenance Tab {#maintenance-tab}

Use the **Maintenance** tab to view information about planned maintenance and configure your preferred maintenance window. 

There are two types of maintenance:

* Regular weekly maintenance (which does not affect your app), during which you can change the preferred maintenance window
* Planned maintenance (which affects your app in some ways), about which you will automatically receive an email

### Preferred Maintenance Window

You can view and change the preferred maintenance. For more information about maintenance, see [Maintenance Windows: Configuration](/developerportal/deploy/maintenance-windows/).

### Planned Maintenance

When a maintenance operation is planned, it appears under **Planned Maintenance**. Each task card will show the purpose of the maintenance, when it is scheduled, and its status.

{{% alert color="info" %}}
Maintenance topics (for example, "PostgreSQL 14.11 Minor Upgrade") have a predefined period (start date and deadline). Once the start date is reached, you will get the option to start it immediately, regardless of the Maintenance Window configured for the environment, by clicking **Execute Now**. The maintenance task will be queued and usually runs within a few minutes.
{{% /alert %}}

The status of a maintenance task can be one of:

* **Succeeded** – the maintenance task was successful
    * No further action is required
* **Failed** – the maintenance task was unsuccessful
    * The environment requires intervention and our engineering team has been notified, they will recover the environment according to its SLA. If you are still experiencing issues, please create a support ticket with [Mendix Support](https://support.mendix.com/hc/en-us)
* **Incomplete** – the maintenance task was unsuccessful
    * No changes were applied, you can operate the environment as usual
    * Our engineering team has been alerted and will take the appropriate action, which may include rescheduling the task
* **Ineligible** – the task is not applicable to the environment
    * No changes were applied, you can operate the environment as usual
    * This can happen, for example, if the database of your environment was scheduled to be upgraded but it is already on the target version
* **Canceled**  – the task was canceled
    * No changes were applied, you can operate the environment as usual
    * This can happen if circumstances required us to remove the planned task, a new copy of the task will be scheduled at a later point in time

## The Tags Tab{#tags}

You can set tags on your environment. Tags are arbitrary strings that are not interpreted by the Mendix Portal.

Tags serve two purposes:

* Custom tags can be added to metrics for third-party metrics solutions
* Tags can serve as selection criteria for grouping environments into a landscape management dashboard, which can be used for third-party logging solutions

For example, you may wish to use tags when logging with Datadog. For more information, see Datadog's [Getting Started with Tags](https://docs.datadoghq.com/tagging/).

If you want to add, edit, or delete a tag, make the change on the **Tags** tab and then restart your environment to update the tags.

## The Services Tab {#services}

In the **Services** tab, the [Technical Contact](/developerportal/general/app-roles/#technical-contact) decides the custom services for each environment. The Technical Contact must first enable a service for the app, after which you can then activate or deactivate these services for individual environments as needed. For more information, see [Services](/developerportal/deploy/environments/#services). 

### Available Services

One custom service is available: Mendix Event Broker. This service is required to use [Mendix Business Events](/appstore/services/business-events/) on production apps.

### Enabling Custom Services

Custom services are only available if the app's Technical Contact has enabled them. The custom services are enabled or disabled separately for each environment of each app. For more information, see [Services](/developerportal/deploy/environments/#services) in the *Environments* documentation.
