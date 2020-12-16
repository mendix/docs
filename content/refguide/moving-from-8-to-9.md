---
title: "Moving from Mendix 8 to Mendix 9"
category: "General Info"
menu_order: 20
description: "Provides details on updating your project from Mendix 8 to Mendix 9, including sections on converting your project and deprecated features."
tags: ["studio pro", "studio"]
---

## 1 Introduction

Mendix Studio Pro 9 and Mendix Studio 9 give you powerful new tools to enhance your apps. For the full list of changes, see the Studio Pro 9 and Studio 9 release notes. If you want to upgrade an existing Studio Pro 8 or Studio 8 project to its respective 9 version, please check the information below:

* If you are upgrading your Studio project from Mendix 8 to 9, see [Upgrading from Mendix 8 to 9 for Studio](#studio-upgrade) below.
* If you are converting your Mendix app project from Mendix Studio Pro 8 to Studio Pro 9, see [Changing Your App Before Upgrading to Studio Pro 9](#studio-pro-upgrade) below.

## 2 Upgrading from Mendix 8 to 9 for Studio {#studio-upgrade}

### 2.1 Turn On RCSI for MS SQL Server

In order to improve performance and reduce the chance of deadlocks, Mendix 9 requires MS SQL Server to be used with **Read Committed Snapshot Isolation** (RCSI) turned **ON**. 

During the synchronization stage, Mendix 9 will perform a check for the RCSI status and could abort the process if it is not **ON** and the database user lacks the necessary privileges to do so automatically.

## 3 Changing Your App Before Upgrading to Studio Pro 9 {#studio-pro-upgrade}

### 3.1 Converting Your App Project

The following sub-sections explain the steps to take in converting your app project from Mendix 8 to Mendix 9.

### 3.2 Back Up Your Project

Make sure that you have either committed your latest changes to Team Server, or created a backup of your local project before you start the conversion.

### 3.3 Upgrade to the Latest Release of Version 8

{{% alert type="warning" %}}
It is technically required for you to upgrade your app project to the latest version of Mendix 8, which is [8.16](/releasenotes/studio-pro/8.16). You can only convert your app project to Mendix 9 from v8.16.x.
{{% /alert %}}

To upgrade to Mendix 8, follow these steps:

1. Download the latest patch release of Studio Pro [v8.16](/releasenotes/studio-pro/8.16).
1. Open your app in Studio Pro v8.16.
1. Allow it to upgrade the app, if necessary.

### 3.4 Review Your Mendix 8 Project

Review your app project in combination with the sections below and assess if further action needs to be taken before upgrading to Mendix 9. 

You should run your app, test all functionality, and ensure it works without error. You should also fix any depreciation warnings you see.

### 3.5 Save Your Version 8 Project

Backup or commit your project so that you can return to it if necessary. Saving a copy will ensure your work is kept safe.

After saving a copy, you can close the project in Studio Pro v8.16.

Your app project is now ready to be upgraded to Mendix 9.

### 3.6 Upgrade Your App Project to Version 9

Open your project in Studio Pro 9 and allow Studio Pro to update your app to version 9. Mendix will upgrade your app project for you automatically.

### 3.7 Review Errors, Warnings, and Deprecations in Studio Pro

Review all error messages and messages about deprecated items and make changes where necessary. Be sure to check for errors both in development in Studio Pro, as well as in the runtime using your console and browser console.

### 3.8 Upgrade All Widgets

To minimize the chance of problems, you should update all widgets and other App Store models used by your project to the latest version.

Check if there is a newer version of your App Store modules available in the App Store. Read the version release notes in the App Store to see whether you need to perform specific actions when upgrading.

In general you should not remove and reimport modules, unless this is recommended in the release notes. If you do remove and reimport them, you may lose data or configuration related to the module.

### 3.9 Review and Test Your App

Finally, review the sections below and ensure that you have made all the changes necessary. Test the app for any unexpected results.

{{% alert type="success" %}}
Congratulations! Your app has been successfully upgraded to Mendix 8 and you can continue working as normal.
{{% /alert %}}

## 4 Runtime API Changes

Most of the Java API calls that were deprecated in Mendix 8 have been removed. If you were still using such methods in your Java actions, you must replace or delete them. To check which calls were depreciated, click the **Mendix 8 Server Runtime API** link in our [Runtime API Documentation](/apidocs-mxsdk/apidocs/runtime-api).

Additionally, refer to the [Mendix Studio Pro 9.02 Release notes](/release-notes/9.0.2) for more Runtime API change details.

### 4.1 Changes to Database Uniqueness

Before Mendix 9, Mendix could ensure data uniqueness using either the Mendix runtime or by relying on the database engine itself. Starting with Mendix 9, **Database** will be the only option. 

If your project is still using Mendix runtime for uniqueness validation, then you should set the custom runtime setting `DataStorage.EnableDiagnostics` to `true`  to check for potential data redundancy issues that might exist in the database. 

If any are found, an error like **An error occured while initializing the Runtime: Detected unique constraing violation...** will be logged. To solve this, your project will have to be prepared before moving to Mendix 9. You can obtain the tools you need by [submitting a support request](/developerportal/support/submit-support-request).

## 6 Read More

* [Mendix Studio Pro 9.02 Release notes](/release-notes/9.0.2)
* Studio 9 RN
* API Docs RN?