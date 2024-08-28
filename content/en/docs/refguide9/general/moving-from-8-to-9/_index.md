---
title: "Moving from Mendix Studio Pro 8 to 9"
url: /refguide9/moving-from-8-to-9/
weight: 20
description: "Provides details on updating your app from Studio Pro 8 to Studio Pro 9, including sections on converting your app and deprecated features."
---

## Introduction

Mendix Studio Pro 9 gives you powerful new tools to enhance your apps. For the full list of changes, see the [Studio Pro 9 release notes](/releasenotes/studio-pro/9/). 

## Updating from Studio Pro 8 to 9 {#studio-pro-upgrade}

The following sub-sections explain the steps to take in converting your app from Studio Pro 8 to Studio Pro 9. Mendix recommends first reviewing the [Breaking Changes](/releasenotes/studio-pro/9.0/#breaking-changes) section of the *Studio Pro 9.0* release notes as well as our updated [System Requirements](/refguide9/system-requirements/).

### Backing Up Your App

Make sure that you have either committed your latest changes to Team Server, or created a backup of your local app before you start the conversion.

### Upgrading to the Latest Release of Version 8

{{% alert color="warning" %}}
It is technically required for you to upgrade your app to Mendix 8.12 first to be able to update it to Mendix 9. However, Mendix recommends updating to the latest version of Mendix 8: [8.18](/releasenotes/studio-pro/8.18/).
{{% /alert %}}

To upgrade to Mendix 8.18, follow these steps:

1. Download the latest patch release of Studio Pro [8.18](/releasenotes/studio-pro/8.18/).
1. Open your app in Studio Pro 8.18.
1. Allow it to upgrade the app, if necessary.

### Reviewing Your Mendix 8 App

Review your app in combination with the sections below and assess if further action needs to be taken before upgrading to Mendix 9.

You should run your app, test all functionality, and ensure it works without error. If you app uses app services, you should remove them before upgrading as app services are deprecated in Mendix 9.

You should also fix any depreciation warnings you see both in development in Studio Pro, as well as in the runtime using your console and browser console.

### Saving Your Version 8 App

Backup or commit your app so that you can return to it if necessary.

Your app is now ready to be upgraded to Mendix 9. You can now close the app in Studio Pro 8.

### Upgrading Your App to Version 9

Open your app in Studio Pro 9 and allow Studio Pro to update your app to version 9. Mendix will upgrade your app for you automatically.

Review all error messages and messages about deprecated items and make changes where necessary.

### Upgrading All Widgets and Modules {#upgrade-widgets}

To minimize the chance of problems, you should update all widgets and other Marketplace modules used by your app to the latest version.

Check if there is a newer version of your modules available in the Marketplace. Read the version release notes in the Marketplace to see whether you need to perform specific actions when upgrading.

Be sure to update these key widgets, resources, and actions:

* [Native Mobile Resources](https://marketplace.mendix.com/link/component/109513)
* [Nanoflow Commons](https://marketplace.mendix.com/link/component/109515)
* [Data Grid 2](https://marketplace.mendix.com/link/component/116540)

In general you should not remove and reimport modules, unless this is recommended in the release notes. If you do remove and reimport them, you may lose data or configuration related to the module.

### Updating Atlas Module (Optional)

Mendix 9 comes with a new Atlas theme including new page templates and building blocks. To get this theme, you can download the [Atlas Core](https://marketplace.mendix.com/link/component/117187), [Atlas Web Content](https://marketplace.mendix.com/link/component/117183) and [Atlas Native Content](https://marketplace.mendix.com/link/component/117175) module packages from the Marketplace.

### Reviewing and Testing Your App

Finally, review the sections below and ensure that you have made all the changes necessary. Test the app for any unexpected results.

{{% alert color="success" %}}
Congratulations! Your app has been successfully upgraded to Mendix 9 and you can continue working as normal.
{{% /alert %}}

## Mendix Runtime API Changes

Most of the Java API calls that were deprecated in Mendix 8 have been removed. If you were still using such methods in your Java actions, you must replace or delete them. To check which calls were depreciated, click the **Mendix 8 Runtime API** link in our [Mendix Runtime API](/apidocs-mxsdk/apidocs/runtime-api/).

Additionally, refer to the Mendix Studio Pro 9.02 Release notes for more Mendix Runtime API change details.

### Changes to Database Uniqueness

Before Mendix 9, Mendix could ensure data uniqueness using either the Mendix runtime or by relying on the database engine itself. Starting with Mendix 9, **Database** will be the only option. 

If your app is still using Mendix runtime for uniqueness validation, then you should set the custom runtime setting `DataStorage.EnableDiagnostics` to `true`  to check for potential data redundancy issues that might exist in the database. 

If any are found, an error like **An error occurred while initializing the Runtime: Detected unique constrain violation...** will be logged. To solve this, your app will have to be prepared before moving to Mendix 9. You can obtain the tools you need by [submitting a support request](/support/submit-support-request/).

### Mendix Object Changed Flag

In Mendix 9.5 and above, when you change an object member, the member state becomes 'CHANGED' even if the old value and the new value are the same. This also affects `objectHasChanged` and `memberHasChanged` Java actions of the Community Commons module.

For example, you have a committed object `$User` with `$User/Name = 'Alice'`. Setting `$User/Name` to `'Alice'` results in the member state becoming 'CHANGED' even though the name is the same. Previously, this would have resulted in the member state remaining 'UNCHANGED'.

## Testing Native Mobile Apps

To test and preview native mobile apps in Mendix 9, you must download the Mendix 9 version of the Make It Native app:

* Download Make It Native 9 for Android in the [Google Play Store](https://play.google.com/store/apps/details?id=com.mendix.developerapp.mx9)
* Download Make It Native 9 for iOS in the [Apple App Store](https://apps.apple.com/nl/app/make-it-native/id1542182000)

For best results with native apps, make sure you have updated the [Native Mobile Resources](https://marketplace.mendix.com/link/component/109513) module as described in the [Upgrade All Widgets and Modules](#upgrade-widgets) section above.

## Client API Changes

Client APIs that were deprecated and marked for removal in Mendix 9 were indeed removed. Libraries like `big.js`, `react`, `react-native`, and a few others shipped with the Client have been updated to latest version. This might affect your custom and pluggable widgets and to JavaScript actions. Please refer to the [Breaking Changes](/releasenotes/studio-pro/9.0/#breaking-changes) section of the *Studio Pro 9.0* release notes for more details.

## Native Dependencies

Mendix 9 native apps no longer include non-essential native libraries like `react-native-maps`, `react-native-ble-plx`, `react-native-geocoder`, and others by default. Instead, new functionality of declaring native dependencies for components has been introduced in Mendix 9. Every pluggable widget or JavaScript action must declare which native libraries it uses. This way, native apps can be bundled with only the libraries they need while unnecessary libraries are not included.

If your pluggable widget or JavaScript action uses libraries that require native linking, please update your widgets and actions in order to define those native libraries as dependencies for your components. Read more about native dependencies in [Declaring Native Dependencies](/apidocs-mxsdk/apidocs/pluggable-widgets-native-dependencies/).

## XPath Query Engine 9 {#query-engine-9}

Mendix 9 contains a new XPath query engine called *query engine 9* or QE9, replacing the current engine called *query engine 7* or QE7. There are a few changes in functionality between the query engines:

* If an association is [navigable from both sides](/refguide9/association-properties/#navigability), both entities can have access rules defined which declare the readability of the association. For such associations, QE9 will always use the entity on the left of the current XPath to determine accessibility.
For example: in the query `//Customer[Customer_Address/Address/City = 'Rotterdam']`, the access rules defined in `Customer` will be used for the association, whereas in `//Address[Customer_Address/Customer/Lastname = 'Doe']`, the rules in `Address` will be used for that same association. In QE7 the behavior was not well defined.
* QE9 has been written to follow the least privilege principle strictly when retrieving data. This might cause less data to be visible to end-users.
* While not allowed by Studio Pro, it was possible to use a non-boolean attribute as a constraint in a Java action, for example `//Address[City]`. QE7 accepts such queries but, depending on the database, it may give unexpected results. QE9 will reject such queries.
* While not supported or documented, it is possible to use a query like `//Customer/Customer_Address/Address` in a Java action. If an instance of `Address` is reachable from multiple `Customer` instances, QE7 would return the instance of `Address` multiple times. QE9 will return each matching instance of `Address` only once.

## Relevant Mendix Community Posts

Check out how the Mendix community resolves upgrade issues in the following Mendix Community posts:

* [Upgrade from Mendix 8 to Mendix 9](https://community.mendix.com/link/space/studio-pro/questions/123696) – on *.jar* files and the *userlib* directory
* [Native app styling difference with Mendix 9 upgrade](https://community.mendix.com/link/space/mobile/questions/118280) – on [upgrading to Atlas 3](/refguide9/moving-from-atlas-2-to-3/)
* [Error importing Excel file after upgrade to Mendix 9](https://community.mendix.com/link/space/studio-pro/questions/117814) – on converting attribute values
* [Does anyone have experience with upgrading Mx applications from 7 to 9?](https://community.mendix.com/link/space/studio-pro/questions/112229) – on considerations for moving from 7 to 8 and then 8 to 9
* [Native Mobile Synchronization Error after Mendix 9 Upgrade](https://community.mendix.com/link/space/integrations/questions/112173) – on synchronizing objects and security rules
* [Unable to Upgrade App from Mendix 8.18.7 to 9.4.0](https://community.mendix.com/link/space/studio-pro/questions/109310) – on problems with Mendix Team Server and Git
* [Mendix Native 8 to 9 Upgrade Deployment Structure Error](https://community.mendix.com/link/space/deployment/questions/106428) – on deployment file structures and Marketplace component directories
* [MX 9.5.0 Upgrade error from MX 8.18.8: The type cache does not contain a type with qualified name WebServices$ProvidedService](https://community.mendix.com/link/space/studio-pro/questions/109620) – on upgrading with app services
* [Error while upgrading to Mx 9](https://community.mendix.com/link/space/studio-pro/questions/105907) – on upgrading with app services

## Read More

* [Studio Pro 9 Release Notes](/releasenotes/studio-pro/9.0/)
