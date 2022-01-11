---
title: "Moving from Mendix Studio Pro 8 to 9"
category: "General Info"
menu_order: 20
description: "Provides details on updating your app from Mendix 8 to Mendix 9, including sections on converting your app and deprecated features."
tags: ["studio pro", "studio"]
---

## 1 Introduction

Mendix Studio Pro 9 and Mendix Studio 9 give you powerful new tools to enhance your apps. For the full list of changes, see the Studio Pro 9 and Studio 9 release notes. If you want to upgrade an existing Studio Pro 8 or Studio 8 app to its respective 9 version, please check the information below:

* If you are upgrading your app in Studio from Mendix 8 to 9, see [Upgrading from Mendix 8 to 9 for Studio](#studio-upgrade) below.
* If you are converting your app from Studio Pro 8 to Studio Pro 9, see [Changing Your App Before Upgrading to Studio Pro 9](#studio-pro-upgrade) below.

## 2 Upgrading from Mendix 8 to 9 for Studio {#studio-upgrade}

### 2.1 Turn On RCSI for MS SQL Server

In order to improve performance and reduce the chance of deadlocks, Mendix 9 requires MS SQL Server to be used with **Read Committed Snapshot Isolation** (RCSI) turned **ON**. 

During the synchronization stage, Mendix 9 will perform a check for the RCSI status and could abort the process if it is not **ON** and the database user lacks the necessary privileges to do so automatically.

## 3 Update from Mendix 8 to 9 for Studio Pro {#studio-pro-upgrade}

The following sub-sections explain the steps to take in converting your app from Mendix 8 to Mendix 9. We recommend you first review the [Breaking Changes](/releasenotes/studio-pro/9.0#breaking-changes) section of the *Studio Pro 9.0* release notes as well as our updated [System Requirements](/refguide/system-requirements).

### 3.1 Back Up Your App

Make sure that you have either committed your latest changes to Team Server, or created a backup of your local app before you start the conversion.

### 3.2 Upgrade to the Latest Release of Version 8

{{% alert type="warning" %}}
It is technically required for you to upgrade your app to Mendix 8.12 first to be able to update it to Mendix 9. However, we recommend you update to the latest version of Mendix 8: [8.18](/releasenotes/studio-pro/8.18).
{{% /alert %}}

To upgrade to Mendix 8.18, follow these steps:

1. Download the latest patch release of Studio Pro [8.18](/releasenotes/studio-pro/8.18).
1. Open your app in Studio Pro v8.18.
1. Allow it to upgrade the app, if necessary.

### 3.3 Review Your Mendix 8 App

Review your app in combination with the sections below and assess if further action needs to be taken before upgrading to Mendix 9.

You should run your app, test all functionality, and ensure it works without error. If you app uses app services, you should remove them before upgrading as app services are deprecated in Mendix 9.

You should also fix any depreciation warnings you see both in development in Studio Pro, as well as in the runtime using your console and browser console.

### 3.4 Save Your Version 8 App

Backup or commit your app so that you can return to it if necessary.

Your app is now ready to be upgraded to Mendix 9. You can now close the app in Studio Pro 8.

### 3.5 Upgrade Your App to Version 9

Open your app in Studio Pro 9 and allow Studio Pro to update your app to version 9. Mendix will upgrade your app for you automatically.

Review all error messages and messages about deprecated items and make changes where necessary.

### 3.6 Upgrade All Widgets and Modules {#upgrade-widgets}

To minimize the chance of problems, you should update all widgets and other Marketplace modules used by your app to the latest version.

Check if there is a newer version of your modules available in the Marketplace. Read the version release notes in the Marketplace to see whether you need to perform specific actions when upgrading.

Be sure to update these key widgets, resources, and actions:

* [Native Mobile Resources](https://marketplace.mendix.com/link/component/109513)
* [Nanoflow Commons](https://marketplace.mendix.com/link/component/109515)
* [Data Grid 2](https://marketplace.mendix.com/link/component/116540)

In general you should not remove and reimport modules, unless this is recommended in the release notes. If you do remove and reimport them, you may lose data or configuration related to the module.

### 3.7 Update Atlas Module (Optional)

Mendix 9 comes with a new Atlas theme including new page templates and building blocks. To get this theme, you can download the [Atlas Core](https://marketplace.mendix.com/link/component/117187), [Atlas Web Content](https://marketplace.mendix.com/link/component/117183) and [Atlas Native Content](https://marketplace.mendix.com/link/component/117175) module packages from the Marketplace.

### 3.8 Review and Test Your App

Finally, review the sections below and ensure that you have made all the changes necessary. Test the app for any unexpected results.

{{% alert type="success" %}}
Congratulations! Your app has been successfully upgraded to Mendix 9 and you can continue working as normal.
{{% /alert %}}

## 4 Runtime API Changes

Most of the Java API calls that were deprecated in Mendix 8 have been removed. If you were still using such methods in your Java actions, you must replace or delete them. To check which calls were depreciated, click the **Mendix 8 Server Runtime API** link in our [Runtime API Documentation](/apidocs-mxsdk/apidocs/runtime-api).

Additionally, refer to the Mendix Studio Pro 9.02 Release notes for more Runtime API change details.

### 4.1 Changes to Database Uniqueness

Before Mendix 9, Mendix could ensure data uniqueness using either the Mendix runtime or by relying on the database engine itself. Starting with Mendix 9, **Database** will be the only option. 

If your app is still using Mendix runtime for uniqueness validation, then you should set the custom runtime setting `DataStorage.EnableDiagnostics` to `true`  to check for potential data redundancy issues that might exist in the database. 

If any are found, an error like **An error occured while initializing the Runtime: Detected unique constraing violation...** will be logged. To solve this, your app will have to be prepared before moving to Mendix 9. You can obtain the tools you need by [submitting a support request](/developerportal/support/submit-support-request).

### 4.2 Mendix Object Changed Flag

In Mendix 9.5 and above, when an object member changes, the member state becomes 'CHANGED' even if the old value and the new value are the same.This also affects `objectHasChanged` and `memberHasChanged` Java actions of the Community Commons module.

For example, you have a committed object `$User` with `$User/Name = 'Alice'`. Setting `$User/Name` to `'Alice'` results in the member state becoming 'CHANGED' even though the name is the same. Previously, this would have resulted in the member state remaining 'UNCHANGED'.

## 5 Testing Native Mobile Apps

To test and preview native mobile apps in Mendix 9, you must download the Mendix 9 version of the Make It Native app:

* Download Make It Native 9 for Android in the [Google Play Store](https://play.google.com/store/apps/details?id=com.mendix.developerapp.mx9)
* Download Make It Native 9 for iOS in the [Apple App Store](https://apps.apple.com/nl/app/make-it-native/id1542182000)

For best results with native apps, make sure you have updated the [Native Mobile Resources](https://marketplace.mendix.com/link/component/109513) module as described in the [Upgrade All Widgets and Modules](#upgrade-widgets) section above.

## 6 Client API Changes

Client APIs that were deprecated and marked for removal in Mendix 9 were indeed removed. Libraries like `big.js`, `react`, `react-native`, and a few others shipped with the Client have been updated to latest version. This might affect your custom and pluggable widgets and to JavaScript actions. Please refer to the [Breaking Changes](/releasenotes/studio-pro/9.0#breaking-changes) section of the *Studio Pro 9.0* release notes for more details.

## 7 Native Dependencies

Mendix 9 native apps no longer include non-essential native libraries like `react-native-maps`, `react-native-ble-plx`, `react-native-geocoder`, and others by default. Instead, new functionality of declaring native dependencies for components has been introduced in Mendix 9. Every pluggable widget or JavaScript action must declare which native libraries it uses. This way, native apps can be bundled with only the libraries they need while unnecessary libraries are not included.

If your pluggable widget or JavaScript action uses libraries that require native linking, please update your widgets and actions in order to define those native libraries as dependencies for your components. Read more about native dependencies in [Declaring Native Dependencies](/apidocs-mxsdk/apidocs/pluggable-widgets-native-dependencies).

## 8 XPath Query Engine 9 {#query-engine-9}

Mendix 9 contains a new XPath query engine called *query engine 9* or QE9, replacing the current engine called *query engine 7* or QE7. There are a few changes in functionality between the query engines:

* If an association is [navigable from both sides](/refguide/association-properties#navigability), both entities can have access rules defined which declare the readability of the association. For such associations, QE9 will always use the entity on the left of the current XPath to determine accessibility.
For example: in the query `//Customer[Customer_Address/Address/City = 'Rotterdam']`, the access rules defined in `Customer` will be used for the association, whereas in `//Address[Customer_Address/Customer/Lastname = 'Doe']`, the rules in `Address` will be used for that same association. In QE7 the behavior was not well defined.

* QE9 has been written to follow the least privilege principle strictly when retrieving data. This might cause less data to be visible to end-users.

* While not allowed by Studio Pro, it was possible to use a non-boolean attribute as a constraint in a Java action, for example `//Address[City]`. QE7 accepts such queries but, depending on the database, it may give unexpected results. QE9 will reject such queries.

* While not supported or documented, it is possible to use a query like `//Customer/Customer_Address/Address` in a Java action. If an instance of `Address` is reachable from multiple `Customer` instances, QE7 would return the instance of `Address` multiple times. QE9 will return each matching instance of `Address` only once.

## 9 Read More

* [Studio Pro 9 Release Notes](/releasenotes/studio-pro/9.0)
