---
title: "Configurations"
url: /refguide8/configuration/
tags: ["studio pro", "configurations", "configuration"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/configuration.pdf).
{{% /alert %}}

## 1 Introduction

A configuration is a group of settings that are applied when running your app locally. To access configurations, open the **Project Explorer** > **Project** > **Settings** > the **Configuration** tab. 

You can define any number of configurations. The active configuration, as in, the one that will be used when running your application, is determined by the drop-down in the toolbar of Studio Pro.

You can use configurations to have different database settings for different people working on your project. Maybe one person has SQL Server on their computer and the other has PostgreSQL. You can also have a shared configuration for connecting to a database server that you both have access to.

{{% alert color="warning" %}}

When you are deploying your application to a server or the Mendix cloud you will have to configure settings  there. For more information, see [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/).

{{% /alert %}}

## 2 Configuration Settings 

A configuration contains the following:

* **Name** – the name of the configuration
* [Database tab](#database) 
* [Server tab](#server)
* [Constants tab](#constants)
* [Custom tab](#custom)

### 2.1 Database {#database}

The **Database** tab has the following settings:

* **Type** – the type of database in which the end-user data of your application is stored
* **URL (not for built-in database)** – the URL of the database server that contains your project
* **Database name (called Database SID for Oracle)** – the name of the database that contains your project
* **Use integrated security (only for SQL Server)** – with SQL Server you can use integrated security to gain access to the database. This means that your Windows credentials are used to sign in to SQL Server. If you disable integrated security you can enter a user name and password manually.
* **User name (not for built-in database)** – the user name that is used to sign in to the database server. If you use integrated security, no user name has to be specified.
* **Password (not for built-in database)** – the password that is used to sign in to the database server. If you use integrated security, no password has to be specified.

### 2.2 Server {#server}

The **Server** tab has the following settings:

* **Application root URL** – this URL points to the root of your application as it should be accessible by end-users. This setting is also used in the published WSDL files for the address where your published web services can be called.
* **Runtime port** – in this setting you can fill in the HTTP port through which a browser accesses the server on which your application is running. Multiple concurrently running servers on the same computer should use different HTTP port numbers. Default: *8080*
* **Runtime port security** – determines whether the runtime HTTP port will be open to other machines or just to the current machine (localhost).
* **Admin port** – this port number is used to communicate with the server. Multiple concurrently running servers on the same computer should use different server admin port numbers. Default: *8090*
* **Admin port security** –  determines whether the admin port will be open to other machines or just to the current machine (localhost).
* **Java heap** – in this setting you can specify the maximum Java heap memory size. There following options are available:
  * **Default** – use the default heap memory size of the installed Java virtual machine.
  * **Custom** – use the value of the **Maximum size (in MB)** setting.
* **Maximum size (in MB)** – when you set the Java heap setting to *Custom*, you can specify the amount of heap memory that is available for the Java virtual machine on which you deploy your application.
* **Extra JVM parameters** – here you can enter extra parameters for the Java virtual machine on which you deploy your application. Note: use with care. If the parameters are invalid, the Java VM might not start.

### 2.3 Constants {#constants}

Constants have a default value that you can override per configuration. You only need to add a constant here if you want a different value than the default value. An example is specifying different web service locations for different configurations.

### 2.4 Custom {#custom}

You can use custom server settings to configure the Runtime beyond the standard possibilities offered by Studio Pro.

{{% alert color="warning" %}}

Only use this functionality if you know exactly what you are doing. Wrong values can prevent the Runtime from starting.

{{% /alert %}}

Each custom setting consists of a name and a value. For example, to enable persistent sessions you add a custom setting with name `PersistentSessions` and value `true`.

For settings overview, see [Runtime Customization](/refguide8/custom-settings/).

## 3 Read More

* [Project Settings](/refguide8/project-settings/)
