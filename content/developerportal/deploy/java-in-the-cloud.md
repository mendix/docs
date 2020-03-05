---
title: "V3: Java in Mendix Cloud"
parent: "mendix-cloud-deploy"
menu_order: 60
description: "A description of the constraints on using Java in Mendix Cloud v3"
tags: ["Java", "v3", "Mendix Cloud", "Constraints", "Permissions", "security", "Access"]
---

## 1 Introduction

Projects with Java actions can be deployed to the Mendix Cloud. For security reasons, the capabilities of Java actions in Mendix Cloud v3 are constrained. Applications should not be able to access resources of other applications or compromise the cloud server in any way. In Mendix Cloud v4, there are no restrictions on Java actions.

Java offers the [Java Security Manager](http://download.oracle.com/javase/tutorial/essential/environment/security.html "Java Security Manager") to configure programs to behave correctly. For each application a policy file is created to instruct the correct behavior.

## 2 Restrictions For Java Actions

To ensure application safety the following permissions are disabled for Java actions in the Mendix v3 cloud:

*   Accessing and manipulating arbitrary files and file streams
*   Custom class loading and class reflection
*   Executing arbitrary OS commands
*   System property access
*   Thread modification
*   Socket access (disabled by default, exceptions can be requested)

A complete list with detailed access information can be found [here](https://docs.oracle.com/javase/8/docs/technotes/guides/security/permissions.html#PermsAndMethods).

Exceptions on these restrictions are:

*   Calls to the Mendix Runtime codebase (for example, using the `com.mendix.modules.webservices.WebserviceModule` class to call a web service socket access) are allowed
*   Granted sockets
*   Reading files in the temp folder or its subfolders (`%PROJECT_DEPLOYMENT_DIR%/data/tmp/`)
*   Writing files in the temp folder or its subfolders (`%PROJECT_DEPLOYMENT_DIR%/data/tmp/`)
*   Reading files in the resources folder or its subfolders .(`%PROJECT_DEPLOYMENT_DIR%/model/resources/`)

Most applications should be able to function fully with these restrictions. However if you feel your application needs extra capabilities please [log a support ticket](https://support.mendix.com/), so that we can address your specific needs.

## 3 Requesting Property Permissions

If your application needs to access certain PropertyPermissions from Java actions, you can use the [Mendix Support Portal](https://support.mendix.com/) to send us a list of required properties. We will then make a security exception.

## 4 Emulating Cloud Security {#emulate-cloud-security}

{{% alert type="warning" %}}
The ability to emulate cloud security was removed from Mendix versions 7.21 and above: see [Release Notes for Studio Pro Version 7.21](/releasenotes/studio-pro/7.21).
{{% /alert %}}

Before deploying to the cloud, it is strongly recommended that you first test your Java actions locally by emulating cloud security. This will make sure you encounter no surprises with regard to cloud security when the application is actually deployed to the Cloud. This will potentially save a lot of time, as it is much harder to debug this kind of issue in the Cloud than locally.

Cloud security can be emulated locally using the following steps:

1.   Open the project settings window by double-clicking **Settings** in the Project Explorer.

2.  In the **Configurations** tab, select the configuration for which you would like to emulate cloud security and click the 'Edit' button.

3.  Set **Emulate cloud security** to **Yes** and click **OK** twice to save your settings.

4.  Select the configuration for which you enabled cloud security emulation in the menu bar and click **Run** (F5).

![](attachments/java-in-the-cloud/4325407.png)
