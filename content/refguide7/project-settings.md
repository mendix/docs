---
title: "Project Settings"
parent: "project"
#menu_order:
description: "Settings which apply to the project app as a whole."
tags: ["project", "app", "configuration", "runtime", "desktop modeler", "languages", "certificate", "theme", "hashing", "hashing algorithm"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

In the **Project Settings** dialog box, you can alter the settings that are applicable to the whole project.

The categories described below are available.

## 2 Configurations

A configuration is a group of settings with a name. You can define any number of configurations. The active configuration (meaning, the one that will be used when running your application) is determined by the drop-down menu in the toolbar of the Modeler.

For the settings in a configuration, see [Configuration](configuration).

## 3 Runtime

These settings influence the behavior of the Runtime when running your application.

### 3.1 Static Resources from Disk

If this option is enabled, the static resources for your mobile application are downloaded as soon as you open your application rather than bit by bit as you navigate through the app. This can drastically cut down the number of network requests, as the files can be retrieved from the disk rather than from the server.

The resources are downloaded to the device once for each deployment and are reused for subsequent runs of your app. This affects a number of files, including: your theme; the JavaScript client; CSS files; and pages.

### 3.2 Optimize Network Calls

If this option is enabled (**true** by default), Mendix analyzes every microflow that can be triggered from the client to minimize the number of objects required to be sent. This speeds up your app significantly.

If you experience an issue while running your app in which objects seem to be lost, this option can be disabled to resolve that issue. If this does resolve the issue, please file a bug report so that we can fix the issue in the platform.

### 3.3 After Startup

Here you can select a microflow that is automatically executed immediately after the application has been started up.

{{% alert type="warning" %}}
There is a timeout of *11 minutes* on the after startup microflow. If your after startup microflow takes longer than 11 minutes your whole app will fail to start.
{{% /alert %}}

### 3.4 Before Shutdown

Here you can select a microflow that is automatically executed when a shutdown command has been given, just before the application shuts down.

### 3.5 Health Check

Here you can select a microflow which performs the checks on a running app that you think are required to assess the app's health.

The result of each check is returned as a string, which is displayed in the [Developer Portal](/developerportal/deploy/environments). When the microflow returns an empty string, the application is healthy; otherwise, the string presents an explanation of why the application is not healthy.

This microflow gets called every 10 seconds to check if the app is still healthy. This is done by executing it using m2ee on the admin port of your app. For more information, see the section [Health Check](monitoring-mendix-runtime#check-health) in *Monitoring Mendix Runtime*.

{{% alert type="info" %}}

The health check microflow is specific to the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy). For other clouds, the admin port can be called, or the health check microflow can be exposed through a REST API.

{{% /alert %}}

### 3.6 First Day of the Week {#first-day-of-the-week}

The first day of the week setting determines the first day of the week in the date picker widget.

| Option | Description |
| --- | --- |
| Default (based on locale) | The first day of the week in date picker widgets is based on the locale of the user. |
| Sunday | Use Sunday as first day of the week in date picker widgets. |
| Monday | Use Monday as first day of the week in date picker widgets. |
| Tuesday | Use Tuesday as first day of the week in date picker widgets. |
| Wednesday | Use Wednesday as first day of the week in date picker widgets. |
| Thursday | Use Thursday as first day of the week in date picker widgets. |
| Friday | Use Friday as first day of the week in date picker widgets. |
| Saturday | Use Saturday as first day of the week in date picker widgets. |

*Default value:* Default (based on locale)

### 3.7 Default Time Zone

The default time zone determines the time zone for newly created users. If your application is only used in one time zone, setting this default will make sure that users of your application never have to worry about setting their time zone.

### 3.8 Scheduled Event Time Zone

The scheduled event time zone defines under which timezone scheduled events run. The default is UTC and this has been the case since 3.0. If you would like to run scheduled events under another time zone (such as the time zone of the company office or the project default timezone), you can select it here.

This affects time zone-related operations, such as parsing and formatting dates from/to strings and obtaining the beginning of the current day.

If you run on-premises, then you can select the time zone to which the server is set. However, please note that no guarantees are given for the whereabouts of application servers in the cloud.

### 3.9 Hash Algorithm

The hash algorithm is used to generate hash values for attributes of the HashString type, such as the password of a user. Mendix offers two recommended hashing algorithms:

| Option | Description |
| --- | --- |
| BCrypt (default, recommended) | Resistant to brute-force search attacks. |
| SSHA256 | Seeded Secure Hash Algorithm 2, digest length 256 bits. |

Mendix believes both algorithms are secure enough to store passwords within Mendix. The main difference between BCrypt and SSHA256 is that the BCrypt algorithm has been configured so that it is relatively slow on purpose, since it was designed specifically to stop brute force attacks. That's why this results in a slight performance difference with the SSHA256 algorithm.

#### 3.9.1 Performance

This performance difference is hardly noticeable to a single user when logging in (the password you enter when logging in is hashed using the selected algorithm), so in general the performance alone is not a reason to choose SSHA256 over BCrypt. This situation can change when dealing with high concurrency of hashing operations. A common example of an area where this occurs is published web services exposing operations that compute quickly, like short-running microflows.

#### 3.9.2 Performance Tests

A (web service) user will log in to execute a web service operation, wait for the operation to finish, and finally get the result back (if any).

Imagine an empty microflow that returns nothing at all exposed as a published web service. We ask one user to execute this operation as many times as he can in one minute (simulated with SoapUI). First we set the hashing algorithm to BCrypt, then we set it to SSHA256. Any extra overhead here (on top of establishing the connection, building the XML message and so forth) is basically the hashing algorithm, as the operation should take near zero milliseconds and there is no result. So that leaves only the login, or, more precisely, the hashing of the password.

| Hashing Algorithm | Total Operations Executed | Operation per Second | Overhead in Milliseconds |
| --- | --- | --- | --- |
| BCrypt | 654 | 10.88 | 91.9 |
| SSHA256 | 7163 | 119.36 | 8.4 |

So 80 milliseconds per operation is not that much, right? Well, that depends on how long the operation itself takes.

| Operation Duration in Seconds | Operations per Hour (BCrypt) | Operations per Hour (SSHA256) | Difference % |
| --- | --- | --- | --- |
| 0.1 | 18760 | 33210 | +77% |
| 0.25 | 10529 | 13932 | +32% |
| 1 | 3297 | 3570 | +8% |
| 5 | 707 | 719 | +1.67% |
| 15 | 239 | 240 | +0.5% |

The difference is noticeable when the operation takes less time. So if you expect a very high amount of concurrency in operations where hashing takes place (most commonly any place where login operations are involved), you might want to consider changing your hashing algorithm.

{{% alert type="info" %}}
It is important to remember when changing hashing algorithms is that any hashed attribute (like the System$User password attribute) has its algorithm set on hashing. In other words, for the hashing type to take effect, any existing hashed attribute will have to be reset using the new hashing type.
{{% /alert %}}

### 3.10 Rounding Mode

The rounding mode is used to select how to round numbers when performing calculations.

The rounding methods **Half away from zero** and **Half to the nearest even number** indicate how rounding is performed in the case of a tie (for example, 2.5).

This table presents the results of rounding the input to one digit with the given rounding mode:

| Input Number | Half Away from Zero | Half to the Nearest Even Number |
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

*Default value:* Half away from zero

### 3.11 Multiple Sessions per User

If this option is enabled, users can sign in multiple times through different clients (for example, desktop browser and tablet). Otherwise, an existing session for a user is signed out when the user signs in somewhere else.

{{% alert type="warning" %}}

In production, this only works with licenses based on concurrent users.

{{% /alert %}}

*Default value*: Yes

### 3.12 Uniqueness Validation

This option can have two different values: **Runtime** and **Database**. For Mendix 7.3 and above, **Database** will be the default value for new projects, but old projects will still have **Runtime** as the default value.

#### 3.12.1 Database

When **Database** is selected, attributes and associations will be validated for uniqueness at the database level. This will ensure that the data doesn't get corrupted even in the case of high concurrency transactions.

Database is the recommended setting, because it ensures data accuracy at the highest level.

#### 3.12.2 Runtime

**Runtime** was the default setting prior to Mendix 7.3. This meant that the uniqueness of attributes and associations was handled in the Mendix Runtime and not at the database level.

#### 3.12.3 Switching Uniqueness Validation Values

You can always switch between **Runtime** and **Database**.

##### 3.12.3.1 Switching from Runtime to Database

Moving from **Runtime** to **Database** means that the unique constraints will be added to the database and the uniqueness responsibility will belong to the database.

Before switching to the Database option, the **DataStorage.EnableDiagnostics** custom runtime setting can be used to generate a uniqueness violation report. The unique constraint migration will need to be done if the generated report shows violations.

For more details on migration, see [Uniqueness Constraint Migration](uniqueness-constraint-migration).

##### 3.12.3.2 Switching from Database to Runtime

Falling back to the **Runtime** option will remove the unique constraints from the database, and uniqueness rules will not be checked at the database level anymore. Hence, data accuracy cannot be guaranteed at the highest level, especially in the case of high concurrency transactions.

### 3.13 Web Service Calls {#web-service-calls}

{{% alert type="info" %}}

This setting was added in version 7.15 to introduce an optimized implementation.

{{% /alert %}}

The way web services are called has been optimized, which means you can use custom proxy settings for each web service call. However, this implementation does not support complex schemas that use a policy reference with an algorithm suite. This configuration option allows you to use the old implementation, in case you need this feature.

## 4 Modeler

These settings determine the behavior of the Modeler for this project. The settings apply to everyone that is working on this project.

### 4.1 Bundle Widgets When Running Locally

When deploying to the cloud, custom widgets are bundled to optimize client-server communication. When deploying locally, this step is skipped to accelerate startup duration. In some cases, this may obfuscate errors triggered by faulty custom widgets.

If this option is set, custom widgets will also be bundled locally. This mimics the production deployment, eliminating risk at the cost of start-up time.

### 4.2 Suggest Lower-Case Names in Microflows

When enabled, the variable names that the Modeler suggests in microflows will start with a lower-case letter instead of an upper-case letter.

## 5 Languages

### 5.1 Default Language

The default language indicates the language that is used when a user has not chosen a language. The default language is also used as a fall-back language when a certain text is not translated to another language.

### 5.2 Languages

This is the list of languages in which your application will be available for users.

For each language, you can configure whether to check that all mandatory texts have a value. The default language is always checked. If a language is not checked and certain texts are not translated in the Modeler, the default language is used as fall-back language. This means that you can run your application even though you have only partially translated your interface into a new language.

## 6 Certificates

Certificates are used to connect to web services over HTTPS when the following requirements are met:

* The server uses a self-signed certificate authority, and/or
* A client certificate (certificate with a private key) is required

These certificates can be imported into the Modeler using the **Import** button. Certificate authority files usually have a *.crt* extension, and client certificates usually have a *.p12* or *.pfx* extension. After importing, use **View details** to acquire more information concerning the certificate.

Client certificates added here will be used whenever a server accepts a client certificate. If you upload more than one client certificate, one of them will be chosen based on the requirements of the server. If you need more control over client certificates, you should not upload the certificates here, but use [custom settings](custom-settings) *ClientCertificates*, *ClientCertificatePasswords*, and *ClientCertificateUsages*.

{{% alert type="warning" %}}

When running from the Modeler or from Eclipse, the certificates will be used automatically to connect over *HTTPS*. When running on a server, the location of the certificate files has to be specified in the configuration file.

{{% /alert %}}
{{% alert type="warning" %}}

Be aware that during local deployment, the certificate files will be located in the **deployment** folder, under **model/certificates**. Therefore, do not use production certificates during development.

{{% /alert %}}
{{% alert type="info" %}}

Certificates can be installed in the Windows Certificate Store using the **Install Certificate** wizard in the **View details** form. This can be useful when trying to access a WSDL-file using an *HTTPS* connection which requires a client certificate.

{{% /alert %}}
{{% alert type="info" %}}

When an SSLException occurs at runtime with the message `HelloRequest followed by an unexpected handshake message` or when a web service does not respond (Java 6 update 21 and above) when using the imported certificates, this is caused by either the client or server not being [RFC-5746](http://www.ietf.org/rfc/rfc5746.txt)-compatible.

If updating the client and server to be compatible with RFC-5746 is not feasible, the following should be added to **Extra JVM parameters** in the **Server** tab to avoid this exception:

`-Dsun.security.ssl.allowUnsafeRenegotiation=true`

Be warned that this does make the client-server communication vulnerable to an exploit which has been fixed in RFC-5746.

When client and server are RFC-5746 compatible at a future point in time, this JVM parameter can be removed.

For background information, see [Transport Layer Security (TLS) Renegotiation Issue Readme](http://www.oracle.com/technetwork/java/javase/documentation/tlsreadme2-176330.html).

{{% /alert %}}

## 7 Theme

### 7.1 UI Resources Package

{{% alert type="info" %}}

The option to designate a custom UI resources package was added in Mendix 7.9.0.

{{% /alert %}}

The look and feel of a Mendix application is governed by the [UI resources package](ui-resources-package). This package supplies the project with all the required theme information accompanied by matching page templates and building blocks. The module which is designated as the UI resources package is governed by the **UI resources package** setting. Generally, this is automatically updated when a new UI resources package is imported. However, with this setting, the desired module can also be set manually.

### 7.2 Theme ZIP File

{{% alert type="warning" %}}

[Deprecated] The use of a ZIP file to configure a project's theme is deprecated. As of 7.9.0, a [UI resources package](ui-resources-package) is the preferred method of sharing themes.

{{% /alert %}}

Older projects may still use a theme ZIP file as the basis for their theme. In this situation, the **Theme ZIP file** setting can be used to switch between any ZIP files found in the **theme** folder. Note that this practice is deprecated and will be removed in a future version.

Switching from a ZIP file to a UI resources package is straightforward:

1. Firstly, replace the contents of the theme folder with the contents of the desired ZIP file.

2. Then, use the **UI resources package** setting described above to select a module. Ideally, this module should only contain UI documents, such as page templates and building blocks. This will allow you to export and import the module to other projects without worrying about reference errors.

3. Lastly, set the **Theme ZIP file** setting to **None**.
