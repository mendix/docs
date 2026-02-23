---
title: "Runtime Tab"
url: /refguide/runtime-tab/
weight: 20
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

These settings influence the behavior of the Runtime when running your application.

### Use React Client {#react-client}

This setting enables the React version of the Mendix Client. In Mendix 11.0 and above, the React Client is the default for new applications and the legacy Dojo Client is deprecated. 

The available configuration options are as follows:

* **No**: Do not use the React client. This option will trigger a deprecation warning, as the Dojo client is deprecated.
* **Yes**: Use the React client (default). In this mode, you will get consistency errors for incompatible widgets.
* **Migration mode**: Use the React client and ignore incompatible widgets. Placeholders are displayed in the case of incompatible widgets. Recommended when trying out the new client.

### Use New String Behavior {#new-string-behavior}

{{% alert type="info" %}}
This setting was introduced in Mendix 11.6.3. 
{{% /alert %}} 

If this option is enabled, Web (both React and Dojo) and Native Mobile clients will be able to handle both `empty` and empty string `''` values for `String` attributes. <br>

If this options is disabled, `String` attribute values on the client-side will always contain only the `''` value to represent empty state. `empty` values will be automatically converted to `''` when transfered to the client-side. 

For a detailed explanation, see the *Empty Strings Handling* section of [Upgrading from Mendix Studio Pro 10 to 11](/refguide/upgrading-from-10-to-11/#empty-strings-handling).

### Optimize Network Calls {#optimize-network-calls}

If this option is enabled (**yes** by default), Mendix analyzes every microflow that can be triggered from the client to minimize the number of objects required to be sent. This speeds up your app significantly.

If you experience an issue while running your app in which objects seem to be lost, this option can be disabled to resolve that issue. If this does resolve the issue, file a bug report so the issue can be fixed in the platform.

### URL Prefix{#url-prefix}

You have the option to change the default URL prefix for all pages and microflows in your application. The default prefix value is `/p/`.

{{< figure src="/attachments/refguide/modeling/app-explorer/app/app-settings/runtime-tab/url-prefix.png" width="300px" class="no-border" >}}

The URL prefix must be alphanumeric. It cannot be empty, contain whitespace, or contain any of the following values: 

* "api-doc"
* "file"
* "odata"
* "odata-doc"
* "reload"
* "rest-doc"
* "ws"
* "ws-doc"
* "xas"

Furthermore, static files are served on `/`, so any prefix that has the same name as a static folder located in `/deployment/web/` will cause an error.

If the URL prefix breaks any of the rules mentioned above, you will get a consistency error.

### Java Version{#java-version}

You can select which Java version to use for you application. For information on how the Java version can influence the behavior of an application, see [Java Version Migration](/refguide/java-version-migration/).

{{% alert color="info" %}}
For Studio Pro 11, you should choose Java 21.
{{% /alert %}}

For local development, the Java version configured here needs to have a corresponding JDK configured in the [Studio Pro preferences](/refguide/preferences-dialog/#jdk).

Applications deployed to the cloud will use this setting to select which Java version to use.

### After Startup{#after-startup}

You can select a microflow that is automatically run immediately after the application has been started up.

{{% alert color="warning" %}}
There is a timeout of 11 minutes on the after startup microflow. If your after startup microflow takes longer than 11 minutes, your whole app will fail to start.

After startup is designed to initialize the app and therefore runs before the app is able to respond to incoming service requests (for example, published REST services).
{{% /alert %}}

### Before Shutdown

You can select a microflow that is automatically run when a shutdown command has been given, just before the application shuts down.

### Health Check

You can select a microflow which performs the checks on a running app that you think are required to assess the app's health.

The result of each check is returned as a string, which is displayed in the [Mendix Portal](/developerportal/deploy/environments/). When the microflow returns an empty string, the application is healthy; otherwise, the string presents an explanation of why the application is not healthy.

This microflow is called every 10 seconds to check if the app is still healthy. This is done by executing it using m2ee on the admin port of your app. For more information, see [Health Check](/refguide/monitoring-mendix-runtime/#check-health) section *Monitoring Mendix Runtime*.

{{% alert color="info" %}}

The health check microflow is specific to the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/). For other clouds, the admin port can be called, or the health check microflow can be exposed through a REST API.

{{% /alert %}}

### First Day of the Week {#first-day-of-the-week}

The **First day of the week** setting determines the first day of the week in the date picker widget.

| Option | Description |
| --- | --- |
| **Default (based on locale)**  *(default)* | The first day of the week in date picker widgets is based on the locale of the user. |
| **Sunday** | Use Sunday as first day of the week in date picker widgets. |
| **Monday** | Use Monday as first day of the week in date picker widgets. |
| **Tuesday** | Use Tuesday as first day of the week in date picker widgets. |
| **Wednesday** | Use Wednesday as first day of the week in date picker widgets. |
| **Thursday** | Use Thursday as first day of the week in date picker widgets. |
| **Friday** | Use Friday as first day of the week in date picker widgets. |
| **Saturday** | Use Saturday as first day of the week in date picker widgets. |

### Default Time Zone

The **Default time zone** determines the time zone for newly created users. If your application is only used in one time zone, setting this default will make sure that users of your application never have to worry about setting their time zone.

### Scheduled Event Time Zone {#scheduled}

The **Scheduled event time zone** defines under which time zone scheduled events run. The default is UTC. If you would like to run scheduled events under another time zone (such as the time zone of the company office or the app default time zone), you can select it here.

This affects time zone-related operations, such as parsing and formatting dates from/to strings and obtaining the beginning of the current day.

If you run on-premises, you can select the time zone to which the server is set. However, note that no guarantees are given for the whereabouts of application servers in the cloud.

### Hash Algorithm{#hash-algorithm}

The **Hash algorithm** is used to generate hash values for attributes of the hashed string type, such as the password of a user. Mendix offers two recommended hashing algorithms:

| Option | Description |
| --- | --- |
| **BCrypt** (default, recommended) | Resistant to brute-force search attacks. |
| **SSHA256** | Salted Secure Hash Algorithm 2, digest length 256 bits. |

{{% alert color="warning" %}}

MD5 and SHA256 are only provided for backwards compatibility. They should not be used due to known vulnerabilities. 

{{% /alert %}}

Mendix believes both algorithms are secure enough to store passwords within Mendix. The main difference between **BCrypt** and **SSHA256** is that the BCrypt algorithm has been configured so it is relatively slow on purpose, since it was designed specifically to stop brute force attacks. That is why this results in a slight performance difference with the SSHA256 algorithm.

#### BCrypt Cost {#bcrypt-cost}

**BCrypt cost** is used to specify the cost of the BCrypt algorithm. The default value is 12, and can go up to 30. The higher the value is, the slower the process of hashing values. For more information, see the subsections below.

#### Performance

If the BCrypt cost is low, the performance difference is hardly noticeable to a single user when signing in (meaning, the password you enter when signing in is hashed using the selected algorithm). This means performance alone is not a reason to choose **SSHA256** over **BCrypt**. The situation can change when dealing with high concurrency of hashing operations, for example, published web services exposing operations that compute quickly, like short-running microflows.

#### Performance Tests

A (web service) user will sign in to run a web service operation, wait for the operation to finish, and get the result back (if any).

Imagine an empty microflow that returns nothing at all exposed as a published web service. We ask one user to execute this operation as many times as they can in one minute (simulated with SoapUI). First, we set the hashing algorithm to **BCrypt** (with cost value 10), then we set it to **SSHA256**. Any extra overhead here (on top of establishing the connection, building the XML message and so forth) is basically the hashing algorithm, as the operation should take near zero milliseconds and there is no result. So that leaves only the login, or, more precisely, the hashing of the password.

| Hashing Algorithm | Total Operations Executed | Operation per Second | Overhead in Milliseconds |
| --- | --- | --- | --- |
| BCrypt | 654 | 10.88 | 91.9 |
| SSHA256 | 7163 | 119.36 | 8.4 |

80 milliseconds per operation does not appear to be much, but it depends on how long the operation itself takes.

| Operation Duration in Seconds | Operations per Hour (BCrypt) | Operations per Hour (SSHA256) | Difference % |
| --- | --- | --- | --- |
| 0.1 | 18760 | 33210 | +77% |
| 0.25 | 10529 | 13932 | +32% |
| 1 | 3297 | 3570 | +8% |
| 5 | 707 | 719 | +1.67% |
| 15 | 239 | 240 | +0.5% |

The difference is noticeable when the operation takes less time. If you expect a very high amount of concurrency in operations where hashing takes place (most commonly any place where login operations are involved), you might want to consider changing your hashing algorithm.

{{% alert color="info" %}}
It is important to remember when changing hashing algorithms that any hashed attribute (like the `System$User` password attribute) has its algorithm set on hashing. In other words, for the hashing type to take effect, any existing hashed attribute will have to be reset using the new hashing type.
{{% /alert %}}

### Round Numbers{#rounding}

The **Round Numbers** setting is used to select how to round numbers when performing calculations.

The rounding methods **Half away from zero** and **Half to the nearest even number** indicate how rounding is performed in the case of a tie (for example, 2.5).

The table below presents the results of rounding the input to one digit with the given method of rounding numbers:

| Input Number | Half Away from Zero  *(default)* | Half to the Nearest Even Number |
| --- | --- | --- |
| 5.5 | 6 | 6 |
| 2.5 | 3 | 2 |
| 1.6 | 2 | 2 |
| 1.1 | 1 | 1 |
| 1.0 | 1 | 1 |
| -1.0 | -1 | -1 |
| -1.1 | -1 | -1 |
| -1.6 | -2 | -2 |
| -2.5 | -3 | -2 |
| -5.5 | -6 | -6 |

### Digits After Decimal Point

{{% alert color="info" %}}
This setting was introduced in Mendix 11.6.
{{% /alert %}}

Set the number of digits that appear after the decimal point for your entire app. This setting affects both new and existing decimal attributes.

### Multiple Sessions per User {#multiple-sessions}

If this option is enabled, users can sign in multiple times through different clients (for example, desktop browser and tablet). Otherwise, an existing session for a user is signed out when the user signs in somewhere else.

{{% alert color="warning" %}}
In production, this only works with licenses based on concurrent users.
{{% /alert %}}

{{% alert color="info" %}}
When set to *No*, there may still be instances when a user remains signed in even though you wish them to be signed out (for example, if a user clicks the **Home** page from the navigation). This is because logging out is only triggered by a query to the Runtime. Navigating between pages is not enough to trigger a query to the Runtime.

To force a query to the runtime, use microflows. For example, create a microflow that shows the **Home** page, then configure your app's navigation to call this microflow rather than relying on the navigation to directly show the page itself. This will ensure the Runtime is queried and the user is logged out of their session.
{{% /alert %}}

Default: *Yes*

### Optimistic Locking (beta) 

{{% alert color="info" %}}
This is a beta feature introduced in [Mendix 11.5.0.](/releasenotes/studio-pro/11.5/).
{{% /alert %}}

If this option is set to **Yes**, Mendix will use a strategy to prevent lost updates when multiple users or processes try to modify the same piece of data at the same time.

For more information, see [Optimistic Locking](/refguide/optimistic-locking/).

### OQL version 2 {#oql-version-2}

If this option is set to **Yes**, your app will use version 2 of the OQL syntax. This setting must be enabled to use [view entities](/refguide/view-entities/). Make sure your app is ready to use the new syntax before making the switch. 

For more information about the differences, see [OQL Version 2 Features](/refguide/oql-v2/).

Default: *No*

### Foreign Key Constraints {#database-fkc}

If this option is enabled, database [foreign key constraints](/refguide/data-storage/#fkc) will be used. An attempt to commit a dangling reference will throw a runtime exception.

Default: *Yes*

### SSL Certificate Algorithm

Choose between **PKIX (recommended)** and **SunX509 (for backwards compatibility)** as the Java validator and trust manager. According to [this JDK issue](https://bugs.openjdk.org/browse/JDK-8169745), the PKIX validator/trust manager supports richer extensions and features, and the use of SunX509 is discouraged.

Default: **SunX509 (for backwards compatibility)**