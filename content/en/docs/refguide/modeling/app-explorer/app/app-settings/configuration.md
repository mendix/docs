---
title: "Configurations"
url: /refguide/configuration/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

A configuration is a group of settings that are applied when running your app locally. To access configurations, open the **App Explorer** > **App** > **Settings** > the **Configuration** tab. 

You can define any number of configurations. The active configuration, as in, the one that will be used when running your application, is determined by the drop-down in the toolbar of Studio Pro.

You can use configurations to have different database settings for different people working on your app. Maybe one person has SQL Server on their computer and the other has PostgreSQL. You can also have a shared configuration for connecting to a database server that you both have access to.

{{% alert color="warning" %}}
When you are deploying your application to a server or Mendix Cloud, you will have to configure settings there. For more information, see [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/).
{{% /alert %}}

## Configuration Settings 

A configuration contains the following:

* **Name** – the name of the configuration
* [Database tab](#database) 
* [Server tab](#server)
* [Constants tab](#constants)
* [Custom tab](#custom)

### Database {#database}

The **Database** tab has the following settings:

* **Type** – the type of database in which the end-user data of your application is stored
* **URL (not for built-in database)** – the URL of the database server that contains your app
* **Database name (called Database SID for Oracle)** – the name of the database that contains your app
* **Use integrated security (only for SQL Server)** – with SQL Server you can use integrated security to gain access to the database. This means that your Windows credentials are used to sign in to SQL Server. If you disable integrated security you can enter a user name and password manually.
* **User name (not for built-in database)** – the user name that is used to sign in to the database server. If you use integrated security, no user name has to be specified.
* **Password (not for built-in database)** – the password that is used to sign in to the database server. If you use integrated security, no password has to be specified.

### Server {#server}

The **Server** tab has the following settings:

* **Application root URL** – this URL points to the root of your application as it should be accessible by end-users. This setting is also used in the published WSDL files for the address where your published web services can be called.
* **Runtime port** – in this setting you can fill in the HTTP port through which a browser accesses the server on which your application is running. Multiple concurrently running servers on the same computer should use different HTTP port numbers. Default: *8080*
* **Runtime port security** – determines whether the runtime HTTP port will be open to other machines or just to the current machine (localhost).
* **Admin port** – this port number is used to communicate with the server. Multiple concurrently running servers on the same computer should use different server admin port numbers. Default: *8090*
* **Admin port security** – determines whether the admin port will be open to other machines or just to the current machine (localhost).
* **Java heap** – in this setting you can specify the maximum Java heap memory size. There following options are available:
    * **Default** – use the default heap memory size of the installed Java virtual machine.
    * **Custom** – use the value of the **Maximum size (in MB)** setting.
* **Maximum size (in MB)** – when you set the Java heap setting to *Custom*, you can specify the amount of heap memory that is available for the Java virtual machine on which you deploy your application.
* **Extra JVM parameters** – here you can enter extra parameters for the Java virtual machine on which you deploy your application. Note: use with care. If the parameters are invalid, the Java VM might not start.

### Constants {#constants}

Constants have a default value that you can override per configuration. You only need to add a constant here if you want a different value than the default value. An example is specifying different web service locations for different configurations.

The choice between a **Shared** value or a **Private** value determines where Studio Pro stores the value:

* Choose **Shared** to store the value as part of the app. That means that when you commit/push your changes, you share the value with everyone that has access to the app's repository.
* Choose **Private** to store the value on your local machine. The value will be encrypted so that only your user account can read it. Other users will have to specify their own value for this constant.

{{% alert color="info" %}}
Private configuration values are available in Studio Pro 10.9.0 and above. In versions below 10.9.0, all configuration values are shared.
{{% /alert %}}

### Custom {#custom}

You can use custom server settings to configure the Runtime beyond the standard possibilities offered by Studio Pro.

{{% alert color="warning" %}}
Only use this functionality if you know exactly what you are doing. Wrong values can prevent the Runtime from starting.
{{% /alert %}}

Each custom setting consists of a name and a value. For example, to set the hash algorithm to BCRYPT you add a custom setting with name `HashAlgorithm` and value `BCRYPT`.

For settings overview, see [Runtime Customization](/refguide/custom-settings/).

## An Example

Say you have an app which calls an API. In the `GetData` module of your app you have a constant `API_ENDPOINT` which points to this endpoint and has the default value `https://example.com/usefulendpoint`.

You want to test your app locally against a new API endpoint which also runs locally on your machine, using port `8080`. Unfortunately, `8080` is also the default port for connecting to a Mendix app running locally.

You can set up a new configuration which tells Mendix to deploy to a different port, and changes the value of the constant which specifies the API endpoint to use the local API.

To do this, perform the following steps:

1. In the Studio Pro **App Explorer** open the app **Settings**.
2. In the **Configurations** tab, click **New** to create a new configuration.
3. Enter a **Name** for the configuration. For example, *LocalAPI*.
4. In the **Server** tab change the **Runtime port** number to `8081` so that it doesn't clash with your local API endpoint.
5. In the **Constants** tab, click **New** to add a new constant.
6. Select the constant you want to change, in this case `GetData.API_ENDPOINT`.
7. Enter the new **Value**, in this example *localhost:8080*
8. Save your changes.

The new configuration will become the active configuration. If you deploy your app locally now, it will be accessible using port `8081` and `GetData.API_ENDPOINT` will point to `localhost:8080`.

You can select which configuration is active using **Make active**.

## Read More

* [App Settings](/refguide/app-settings/)
