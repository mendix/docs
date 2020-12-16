# Moving from Mendix Studio Pro 8 to Studio Pro 9

# Introduction

Mendix Studio Pro 9 and Mendix Studio 9 give you powerful new tools to enhance your apps. For the full list of changes, see the Studio Pro 9 and Studio 9 release notes. If you want to upgrade an existing Studio Pro 8 or Studio 8 project to its respective 9 version, please check the information below:


- If you are upgrading your Studio project from Mendix 8 to 9, see Upgrading from Mendix 8 to 9 for Studio below.
- If you are converting your Mendix app project from Mendix Studio Pro 8 to Studio Pro 9, see Changing Your App Before Upgrading to Studio Pro 9 below.
# Upgrading from Mendix 8 to 9 for Studio
## Read committed Snapshot isolation for MS SQL Server

In order to improve performance and reduce the chance of deadlocks, Mendix 9 requires MS SQL Server to be used with Read Committed Snapshot Isolation (RCSI) turned ON. During the synchronization stage, Mendix 9 will perform a check for the RCSI status and could abort the process if it is not ON and the database user lacks the necessary privileges to do so automatically.

# Changing Your App Before Upgrading to Studio Pro 9
## Converting Your App Project

The following sub-sections explain the steps to take in converting your app project from Mendix 8 to Mendix 9.

## Backup Your Project

Make sure that you have either committed your latest changes to Team Server, or taken a backup of your local project before you start the conversion.

## Upgrade to the Latest Release of Version 8

ALERT TEXT It is technically required for you to upgrade your app project to the latest version of Mendix 8, which is XXX. You can only convert your app project to Mendix 9 from XXX.

To upgrade to Mendix 8, follow these steps:

1. Download the latest patch release of Studio Pro vXXX.
2. Open your app in Studio Pro vXXX.
3. Allow it to upgrade the app, if necessary.
## Review Your Mendix 8 Project

Review your app project in combination with the sections below and assess if further action needs to be taken before upgrading to Mendix 9. 

You should run your app, test all functionality, and ensure it works without error. You should also fix any depreciation warnings you see.

## Save Version 8 Project

Your app project is now ready to be upgraded to Mendix Version 9.

It is recommended that you backup/commit your project at this point so that you can return to it if necessary.

You can now close the project in Desktop Modeler version 8.

## Upgrade Your App Project to Version 9

Mendix will upgrade your app project for you.

Open the project in Mendix Studio Pro version 8 and allow Studio Pro to update your app to version 9.

## Review Errors, Warnings & Deprecations in Studio Pro

Review all error messages and messages about deprecated items and make changes where necessary. Be sure to check for errors both in development in Studio Pro, as well as in the runtime using your console and browser console.

## Upgrade All Widgets

To minimize the chance of problems, you should update all widgets and other App Store models used by your project to the latest version.

Check if there is a newer version of your App Store modules available in the App Store. Read the version release notes in the App Store to see whether you need to perform specific actions when upgrading.

In general you should not remove and reimport modules, unless this is recommended in the release notes. If you do remove and reimport them, you may lose data or configuration related to the module.

## Review & Test Your App

Finally, review the sections below and ensure that you have made all the changes necessary. Test the app for any unexpected results.
SUCCESS TEXT Congratulations! Your app has been successfully upgraded to Mendix 8 and you can continue working as normal.

## Runtime API Changes

Most of the Java API calls that were deprecated in Mendix 8 have been removed. If you were still using such methods in your Java actions, you’ll have to use their replacement or remove their usage. Below is a summary of the changes. Refer to the release notes for full details.

- Some versions of `Core.execute()` have been removed. Use `Core.microflowCall()` or `Core.userActionCall()` instead.
- Some versions of `ActionListener.addBeforeEvent()` and `ActionListener.addAfterEvent()` have been removed. Use the remaining versions instead.
- Several methods have been removed from the `MendixBinary` interface:
    - `setValue(IContext, byte[])`, use the `IMendixObjectMember.setValue()` instead.
    - `parseAndStoreValue(IContext, String)`, use `IMendixObjectMember.setValue()` instead.
    - `commitValueAsFileDocument(IContext)`, there’s no replacement; use regular commits.
    - `setLength(Long)`, there’s no replacement.
    - `getLength()`, use the remaining `getLength(IContext)` instead.
- The deprecated `Core.setSystemAction()` was removed. There’s no replacement.
- The deprecated `IMetaObject.getRemoteSource()` was removed. There’s no replacement.
- The deprecated `IDataValidation.getType()` was removed. Use `getValidationType()` instead.
## Stricter type-checking on `Core.evaluateExpression()`.

The `Core.evaluateExpression()` function has been made more type-safe. It now only allows the same expressions as those that are allowed by Studio Pro. In addition the currency and float functions are no longer available. If you are using expressions that would give an error in Studio Pro, then you’ll have to adapt the expression. If not, it will result in a runtime exception during execution. Refer to the release notes for an exhaustive list of the constructs that are no longer allowed and their replacements.

## Mathematical Operators in XPath

Any usage of mathematical operators in XPath expressions is now deprecated unless they are inside a token. If you have any custom widgets containing such XPath expressions, they will need to be updated accordingly.

## Non-Persistent Sessions are not Supported Anymore

Previously non-persistent sessions could be enabled by setting the custom runtime setting `PersistentSessions` to false. Now this setting is ignored and user sessions are always persisted to the database. Additionally the `com.mendix.core.conf.Configuration#` ```enablePersistentSessions`() method is now deprecated and always returns `true`.

## Changes to Database Uniqueness

Before Mendix 9, Mendix could ensure data uniqueness using either the Mendix runtime or by relying on the database engine itself:

![Uniqueness Validation Setting](https://paper-attachments.dropbox.com/s_0AB3B0F9C9C07A910D33534B498F0B0DAD7344EF6A3CFCE0384BE92C935C1B05_1607685916901_image.png)


Starting with Mendix 9, **D****atabase** will be the only option. If your project is still using Mendix runtime for uniqueness validation, then you should set the custom runtime setting `DataStorage.EnableDiagnostics` to `true`  to check for potential data redundancy issues that might exist in the database. If any are found, an error similar the one below will be logged and the project will have to be prepped before moving to Mendix 9. The necessary tools can be obtained by [submitting a](https://docs.mendix.com/developerportal/support/submit-support-request) [support](https://docs.mendix.com/developerportal/support/submit-support-request) [request](https://docs.mendix.com/developerportal/support/submit-support-request).

![Unique Constraint Violation Error](https://docs.mendix.com/refguide/attachments/datastorage/startup-error-assoc.png)



# Troubleshooting

