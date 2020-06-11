---
title: "Moving from Desktop Modeler Version 7 to Studio Pro 8"
category: "General Info"
menu_order: 20
description: "Provides details on updating your project from Desktop Modeler version 7 to Studio Pro version 8 , including sections on converting your project and deprecated features."
tags: ["studio pro"]
---

## 1 Introduction

When converting your Mendix app project from Desktop Modeler version 7 to Studio Pro version 8, there is a recommended series of steps you need to take. These are documented in [Converting Your App Project](#converting), below.

For information about new features in Mendix 8, see [Studio Pro 8 release notes](/releasenotes/studio-pro/).

## 2 Upgrading From Mendix 7 to 8 for Studio

{{% alert type="warning" %}}
Due to breaking changes in Mendix version 8, apps in Studio cannot be upgraded automatically using the regular Studio upgrade mechanism.
{{% /alert %}}

This means the following:

* Existing apps built in Studio will remain in their current Mendix version and can be upgraded in Studio to the latest release of Mendix version 7.23

    {{% alert type="info" %}}If your app was created in Studio Pro, using a Mendix 8 beta version, it will be upgraded to the release version of Mendix 8 automatically.
    {{% /alert %}}

*  Any apps you create in Studio from now on will have Mendix version 8 from the start

Developers wanting to upgrade their existing Mendix version 7 Studio apps to Mendix version 8 can only do so in Studio Pro by following the instructions in [Converting Your App Project](#converting), below.

### 2.1 Collaborative Development with Studio

If your original project was Mendix version 7.23.2 or below and you want to work collaboratively with developers using Mendix Studio, you will need to upgrade your project to Mendix version 7.23.3 or above. You cannot sync your changes with Studio without this upgrade. 

## 3 Making Changes to Your App Before Upgrading to Mendix 8, Studio Pro

There may be changes which you should make to your app *before* you upgrade it to Mendix 8.

### 3.1 Java Version, Deprecated & Removed APIs {#deprecated-apis}

Mendix 8 runs on Java 11, whereas Mendix 7 runs on Java 8. Make sure that your Java actions are compatible with Java 11. The official Java 8 to 11 migration guide can be found in the [Migrating From JDK 8 to Later JDK Releases](https://docs.oracle.com/en/java/javase/11/migrate/index.html#JSMIG-GUID-7744EF96-5899-4FB2-B34E-86D49B2E89B6) section of the *Oracle JDK Migration Guide*.

Deprecated Java actions should be fixed in Mendix 7, before you migrate the app project to Mendix 8.

Fix the deprecations in your Java actions by importing your project into your Java IDE (Eclipse, for example) and reviewing and solving all the deprecations.

Details of removed and deprecated APIs will be added to the *Breaking Changes* section of the [Studio Pro 8 release notes](/releasenotes/studio-pro/).

### 3.2 Atlas Compatibility

Before moving to Mendix 8, make sure that you are using the latest Mendix 7 compatible Atlas version 1.2.4. By first updating Atlas to this version, you will prevent several errors related to design properties after your Mendix 8 migration.

How to update to Atlas 1.2.4:

1. Check if you customized anything in your Studio Pro Atlas UI Resource module, as updating Atlas will override all of that module's content. Move your customized content out of the Atlas UI Module before updating.
2. Check if you customized anything in the **theme** folder inside your Mendix project. If so, rename the **theme** folder to something else, like *theme_oldest*.
3. Update Atlas by opening the App Store inside Studio Pro, search for *Atlas UI Resources*, click the **All Versions** pane, and download **Atlas UI Resources v1.2.4**.
4. When prompted, choose to replace your existing Atlas module.

{{% alert type="info" %}} You do not have to move any customized files from **theme_oldest** to **theme** yet, as after migrating to Mx8, you will update Atlas again which will create a new **theme folder**.{{% /alert %}}

## 4 Converting Your App Project{#converting}

The following sub-sections explain the steps to take in converting your app project from Mendix 7 to Mendix 8.

### 4.1 Backup Your Project

Make sure that you have either committed your latest changes to Team Server, or taken a backup of your local project before you start the conversion.

### 4.2 Upgrade to the Latest Release of Version 7 {#upgrade}

{{% alert type="warning" %}}
It is technically required for you to upgrade your app project to the latest version of Mendix 7, which is [7.23](/releasenotes/studio-pro/7.23). You can only convert your app project to Mendix 8 from 7.23.x.
{{% /alert %}}

To upgrade to Mendix 7, follow these steps:

1. Download the latest patch release of Desktop Modeler [7.23](/releasenotes/studio-pro/7.23).
2. Open your app in Desktop Modeler 7.23.x.
3. Allow it to upgrade the app, if necessary.

### 4.3 Review Your Mendix 7 Project

Review your app project in combination with the sections below and assess if further action needs to be taken before upgrading to Mendix 8.

In particular, it is easier to fix deprecations in Java actions (see [Java Version, Deprecated and Removed APIs](#deprecated-apis)) in Mendix 7 before upgrading to Mendix 8. However, Float and Currency deprecation errors will be easier to fix in Mendix 8 instead (see the section [Elements of Type Float & Currency](#float-currency) below for instructions).

### 4.4 Save Version 7 Project

Your app project is now ready to be upgraded to Mendix Version 8.

It is recommended that you backup/commit your project at this point so that you can return to it if necessary.

You can now close the project in Desktop Modeler version 7.

### 4.5 Upgrade Your App Project to Version 8

Mendix will upgrade your app project for you.

Open the project in Mendix Studio Pro version 8 and allow Studio Pro to update your app to version 8.

### 4.6 Review Errors, Warnings & Deprecations in Studio Pro

Review all error messages and messages about deprecated items and make changes where necessary.

If you are using one, or both, of the deprecated data types Currency and Float you will see errors. See the section [Elements of Type Float & Currency](#float-currency) below for more information.

### 4.7 Upgrade All Widgets

To minimize the chance of problems, you should update all widgets and other App Store models used by your project to the latest version.

Check if there is a newer version of your App Store modules available in the App Store. Read the version release notes in the App Store to see whether you need to perform specific actions when upgrading.

In general you should not remove and reimport modules, unless this is recommended in the release notes. If you do remove and reimport them, you may lose data or configuration related to the module.

### 4.8 Review & Test Your App

Finally, review the sections below and ensure that you have made all the changes necessary.

Test the app for any unexpected results.

{{% alert type="success" %}}
Congratulations! Your app has been successfully upgraded to Mendix 8 and you can continue working as normal.
{{% /alert %}}

## 5 Elements of Type Float & Currency {#float-currency}

The types Float and Currency were deprecated in Mendix version 7, and have now been removed from Mendix version 8. 

The following elements of type Float or Currency will report errors in version 8:

* Attributes
* Constants
* Create variable actions
* Data set columns and parameters
* Microflow/nanoflow parameters and return types
* Java/JavaScript action parameters and return types
* The functions 'formatFloat', 'parseFloat' and 'toFloat'

It is possible to fix most of the deprecation errors in one single action. To achieve this, do the following:

1. In Studio Pro 8, find the error message which relates to the support of Currency and Float data types.

    ![Error message: currency and float no longer supported](attachments/moving-from-7-to-8/currency-float-error.png)

2. Right-click the error message.

    ![Change manually or automatically?](attachments/moving-from-7-to-8/currency-float-change-options.png)

3. Click **Convert all to Decimal** to convert all the attributes automatically.

    ![Warning when converting all Float and Currency to Decimal](attachments/moving-from-7-to-8/convert-to-decimal-warning.png)

4. Click **Convert all to Decimal** to perform the conversion.

{{% alert type="warning" %}}
If any attributes have been converted during this process, the next time your app is run locally or deployed the database will be converted to support the new attribute types.

**This database conversion could take a long time!** We suggest that you first test the data conversion on a representative dataset, so that you can estimate how long it will take to convert your production database.
{{% /alert %}}

## 6 64-Bit Studio Pro

Mendix Desktop Modeler version 7 was 64-bit application but could also run on 32-bit.

Mendix Studio Pro is a 64-bit application which will **only** run on 64-bit versions of Windows. This must be the 64-bit version of Windows 7, Service Pack 1, or above.

## 7 Mendix Cloud Version 3

Apps made in Mendix Studio Pro cannot be deployed to *Version 3* of the Mendix Cloud. If you are using a licensed Mendix Cloud v3 node, then we recommend that you upgrade to Mendix Cloud v4. If this is not possible, you will need to continue to use Mendix version 7 to create and maintain your apps.

## 8 Java Code Generation

In Mendix Studio Pro version 8, we are changing the way we generate Java code for Java actions and datasets.

Mendix Desktop Modeler version 7 sometimes appended a postfix (for example, `Parameter1`) to the names of parameters of Java actions and datasets. This behavior was necessary to prevent name conflicts in the generated code. In the minor releases of Mendix Desktop Modeler 7, we introduced a number of fixes to prevent those conflicts from happening, making this behavior redundant.

We also noticed that by attempting to prevent those name conflicts, we sometimes caused Java compilation failures, which seemed completely unrelated to what you were working on. Seeing that appending a postfix is now completely unnecessary and introduces quite a few problems on bigger app projects, we decided to remove it completely.

What does that mean in practice? For most app projects, nothing changes and everything still works as it used to. But, in a limited number of cases, Mendix Desktop Modeler version 7 will have introduced a postfix for your parameter name. For example, a parameter called `Customer` might become `CustomerParameter1` in the generated Java code. This postfix will be removed when you migrate your app to Mendix Studio Pro 8.

In these few cases you need to make a simple fix before your code will compile again:

* If it is a Java action in a module downloaded from the App Store that is causing errors, just download it again, or update it to the latest version
* If it is your own Java action, then the fix is ever easier – just remove those postfixes from your Java code (in the previous example, `CustomerParameter1` just becomes `Customer` again).

### 8.1 Example of Differences

In this example we have a Java action called `LogMessage`, which has a parameter called `Message`. In Mendix Modeler version 7 if you introduced a domain model entity also called `Message`, we would generate the following Java code for you (please note that some code is omitted for readability):

```java
        public LogMessage(IContext context, java.lang.String MessageParameter1)
        {
            super(context);
            this.MessageParameter1 = MessageParameter1;
        }
        @java.lang.Override
        public java.lang.Boolean executeAction() throws Exception
        {
            // BEGIN USER CODE
            Core.getLogger("MyLogger").info(this.MessageParameter1);
            // END USER CODE
        }
```

As you can see, instead of naming the parameter `Message` now Mendix Modeler version 7 names it `MessageParameter1`. In the user code of the `executeAction()` method, `this.Message` is used to log a message. This means that the code won’t compile.

Studio Pro 8 will generate the following code for you:

```java
        public LogMessage(IContext context, java.lang.String Message)
        {
            super(context);
            this.Message = Message;
        }
        @java.lang.Override
        public java.lang.Boolean executeAction() throws Exception
        {
            // BEGIN USER CODE
            Core.getLogger("MyLogger").info(this.Message);
            // END USER CODE
        }
```

This code behaves as expected and works out of the box. However, if you previously changed your user code to comply with the way Mendix Modeler version 7 was generating this code, you just need to update your user code to use the new names of parameters.

## 9 Troubleshooting

### 9.1 Cannot Open Project: `Layout … has an invalid value …`

Very rarely, you may receive a message similar to the one below when opening a project in Mendix Studio Pro 8 which needs to be upgraded from a previous version of Mendix.

![Layouts Error Message](attachments/moving-from-7-to-8/layout-import-message.png)

This happens when a layout has an invalid value for the **Layout type**. This will still cause an error, *even if the invalid layout has been excluded* from the project.

See the image below for an indication of where you might find the error in your project.

![Location of Layouts Error](attachments/moving-from-7-to-8/layout-error-location.png)

To resolve this issue, use the previous version of Mendix to change the invalid **Layout type** (in the example above, `Legacy`) to a valid value.

### 9.2 DOM and Atlas UI Issues

Mendix 8 comes with several improvements to its DOM structure. These DOM changes will affect the Sass styling of app projects. Because of these updates, Mendix 8 app projects are designed to be completed using [Atlas UI Resources](/appstore/modules/atlas-ui-resources) (v2.0.0 or higher). Upgrading your Atlas UI can cause issues with your app project's theming. To troubleshoot either DOM or Atlas UI migration issues, consult the following documents:

* [Troubleshooting DOM Changes](migration-dom-issues)
* [Troubleshooting Atlas UI Changes](migration-atlas)
