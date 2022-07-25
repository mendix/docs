---
title: "Configuration"
url: /refguide7/configuration/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---


A configuration is a group of settings with a name. You can define any number of configurations. The active configuration, as in, the one that will be used when running your application, is determined by the drop-down in the toolbar of the Modeler.

You can use configurations to have different database settings for different people working on your project. Maybe one person has SQL Server on their computer and the other Postgres. You can also have a shared configuration for connecting to a database server that you both have access to.

{{% alert color="warning" %}}

When you are deploying your application to a server or the Mendix cloud you will have to configure settings below there. See the [deployment guide](/developerportal/deploy/mendix-cloud-deploy/) for more information.

{{% /alert %}}

## Name

The name of the configuration.

## Database

### Type

Here you can specify the type of database in which the end-user data of your application is stored.

### URL (not for built-in database)

The URL of the database server that contains your project.

### Database name (called Database SID for Oracle)

The name of the database that contains your project.

### Use integrated security (only for SQL Server)

With SQL Server you can use integrated security to gain access to the database. This means that your Windows credentials are used to sign in to SQL Server. If you disable integrated security you can enter a user name and password manually.

### User name (not for built-in database)

The user name that is used to sign in to the database server. If you use integrated security, no user name has to be specified.

### Password (not for built-in database)

The password that is used to sign in to the database server. If you use integrated security, no password has to be specified.

## Server

### Application root URL

This URL points to the root of your application as it should be accessible by end-users. This setting is also used in the published WSDL files for the address where your published web services can be called.

### Runtime port

Here you fill in the HTTP port through which a browser accesses the server on which your application is running. Multiple concurrently running servers on the same computer should use different HTTP port numbers.

_Default value_: 8080

### Runtime port security

This attribute determines whether the runtime HTTP port will be open to other machines or just to the current machine (localhost).

### Admin port

This port number is used to communicate with the server. Multiple concurrently running servers on the same computer should use different server admin port numbers.

_Default value_: 8090

### Admin port security

This attribute determines whether the admin port will be open to other machines or just to the current machine (localhost).

### Java heap

Here you can specify the maximum Java heap memory size.

| Value | Description |
| --- | --- |
| Default | Use the default heap memory size of the installed Java virtual machine. |
| Custom | Use the value of the 'Maximum size (in MB)' setting. |

_Default value_: Default

### Maximum size (in MB)

When you set the Java heap setting to 'Custom', you can specify the amount of heap memory that is available for the Java virtual machine on which you deploy your application.

### Emulate cloud security

{{% alert color="info" %}}

Since March 18th 2020, this setting in no longer needed and will have no effect.

{{% /alert %}}

Projects hosted in the Mendix Cloud have to adhere to much stricter security policies than those hosted on your own server. Turning this switch on emulates that behavior. A security policy will be enforced which will allow you to test your Java actions and verify that they will also run in the cloud.

{{% alert color="warning" %}}

This option is removed from versions 7.21.0 and above, see [release notes](/releasenotes/studio-pro/7.21/#62223) for more information.

{{% /alert %}}

### Extra JVM parameters

Here you can enter extra parameters for the Java virtual machine on which you deploy your application. Note: use with care. If the parameters are invalid, the Java VM might not start.

## Constants

Constants have a default value that you can override per configuration. You only need to add a constant here if you want a different value than the default value. An example is specifying different web service locations for different configurations.

## Custom

You can use custom server settings to configure the Runtime beyond the standard possibilities offered by the Modeler.

{{% alert color="warning" %}}

Only use this functionality if you know exactly what you are doing. Wrong values can prevent the Runtime from starting.

{{% /alert %}}

Each custom setting consists of a name and a value. For example, to enable persistent sessions you add a custom setting with name `PersistentSessions` and value `true`.

See [this page](/refguide7/custom-settings/) for an overview of settings.
