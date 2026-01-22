---
title: "Upgrading from Mendix Studio Pro 10 to 11"
url: /refguide/upgrading-from-10-to-11/
linktitle: "Upgrading from Studio Pro 10 to 11"
weight: 30
description: "Provides details on upgrading your app from Studio Pro 10 to Studio Pro 11, including sections on converting your app and deprecated features."
---

## Introduction

Mendix Studio Pro 11 is a [major version](/releasenotes/studio-pro/lts-mts/#major-version) release that provides powerful tools for building your apps and brings a host of improvements and fixes. For the full list of changes, see the [Studio Pro 11 release notes](/releasenotes/studio-pro/11.0/).

## Getting Ready to Upgrade

### Upgrading from Below 10

If your app is on a Studio Pro version below 10, you must upgrade in order of version: 

* [Moving from Mendix Studio Pro 8 to 9](/refguide9/moving-from-8-to-9/)
* [Upgrading from Mendix Studio Pro 9 to 10](/refguide10/upgrading-from-9-to-10/)

If your app is running on Mendix Cloud, you can check what version the app is currently on by referring to the Control Center dashboard. Alternatively, contact your Customer Success Manager to find out how to check the Mendix version of your app.

### Steps Required for Upgrade

Regardless of which major version you are upgrading from, we recommend you upgrade in the following way:

1. Back up your app.
1. Upgrade to the latest patch of Studio Pro.
1. Upgrade widgets, modules, Marketplace components, and connectors.
1. Fix deprecations and test your app.
1. Upgrade app to Mendix 11.

## Backing Up Your App

Make sure you have either committed your latest changes to Team Server, or created a backup of your local app before you start the conversion.

## Preparing Your App in Studio Pro 

We recommend you first upgrade your app in the latest Studio Pro so that you can upgrade to Mendix 11.

To prepare your app in the latest Studio Pro, follow these steps:

1. Download the latest patch release of the latest Studio Pro.
1. Open your app in Studio Pro.
1. Allow Studio Pro to update and convert your app.

## Upgrading Widgets, Modules, and Marketplace Components {#upgrade-widgets}

Now that your app is upgraded, you are ready to use the modules, widget and marketplace components. To minimize the chance of problems, we recommended you upgrade to versions compatible with the the latest version of Studio Pro 10, as well as the versions compatible with the latest version of Mendix 11.

In general, you should not remove and re-import modules unless this is recommended in the component’s release notes. If you do remove and re-import a component, you may lose data or configuration related to the component.

## Testing and Completing the Upgrade

After the upgrade of your marketplace content, take the next steps:

1. Fix any deprecation warnings you see in development in Studio Pro, as well as in the Mendix Runtime using your console and browser console. These deprecations could include, but are not limited to, the following:
    * [Document Templates](/refguide/document-templates/): deprecated in 10.24 
    * [Dojo-based Mendix Client](/refguide/mendix-client/): deprecated in 11.0
    * Deprecated Java Version: depending on your Java version you may see errors — to resolve those errors, see [Java Version Migration](/refguide/java-version-migration/)
1. Review the major changes in the sections below.
1. Run your app, test all functionality, and ensure it works without error.
1. Back up or commit your Mendix 10 app so you can return to it if necessary.

Your app is now ready to be upgraded to Mendix 11. You can now close the app in Studio Pro 10.

## Upgrading Your App in Studio Pro 11

Open your app in Studio Pro 11 and allow Studio Pro to update and convert your app to version 11. Mendix will update your app automatically.

## Notable and Breaking Changes

### Migrating From Atlas 3 to 4 (optional)

Upgrading from Atlas 3 to Atlas 4 in Mendix 11 is an optional process, with the main structural change being the transition from SASS to CSS variables. The new system is backwards compatible with apps using SASS variables, and includes a mapping mechanism to ensure old SASS variables are mapped to CSS variable usages. 

For a step-by-step guide on migrating your custom theme and ensuring module compatibility, see [Migrating Your Mendix App to Atlas UI 4](/refguide/frontend/atlas4-migration/).

If you wish to opt-in, start by downloading the Atlas 4 module from the Marketplace into your app.

We recommend you also upgrade Atlas Web Content if it is in your app. 

For optimal implementation, ensure all UI modules either use CSS variables or have their variables defined within the module. If an app uses CSS variables inside **theme/web/custom-variables.scss** while some UI modules still rely on old Atlas SASS variables, those usages will fallback to Atlas default values. Therefore, we recommend you to transition to CSS variables only after confirming that all company design modules no longer depend on Atlas SASS variables.

### Empty Strings Handling {#empty-strings-handling}

Historically, in Mendix we had an inconsistency in how we handled String type attributes and variables on the client side (for example, Nanoflows, Page expressions, widgets) and on the server side (for example, Microflows). 

Consider the following expression:

```
$NewEntity/Attribute = ''
```

where `$NewEntity/Attribute` contains an `empty` value.  

In a Nanoflow, this expression would be evaluated to `true` because, on the client side, we did not distinguish between empty strings `''` and an `empty` value.

In a Microflow, this distinction exists and the expression would yield `false`.

Moreover, on the client side a String attribute with a value set to `empty` would be treated as if it contains `''`. This made it impossible to check in a Nanoflow whether an attribute is `empty` or if it has an empty String value `''`.

In Mendix 11.0.0, we have made this behavior consistent. Now, strings are handled in the same way no matter where you use them. 

We understand that this change might cause unexpected changes in existing applications migrated from older versions of Mendix. 

We recommend carefully analyzing all expressions that are comparing strings against `''` or `empty` and doing extensive testing after the migration. 

#### Example 1

Below is an example of a check that might lead to unexpected behavior.

```
$NewEntity/Attribute = ''
```

If you used this expression to check if an attribute of an object was not filled in, we recommend using the [trim](/refguide/string-function-calls/#trim) function. Trim will automatically convert `empty` to `''` and remove all surrounding whitespace in a string.

```
trim($NewEntity/Attribute) = ''
```

Alternatively, if you just want to check for `empty` and `''` you can rewrite it to:

```
$NewEntity/Attribute = empty or $NewEntity/Attribute = ''
```

#### Example 2

In case you want to compare your string attribute against `empty`, you only need to write

```
$NewEntity/Attribute = empty
```

In Mendix 11.0 you won’t run into any ambiguity around this anymore. 

#### Example 3

```
$User/Name + "@mendix.com"
```

In this example, Mendix will handle string concatenation correctly no matter if `$User/Name` is `empty` or `''`. The resulting string will be `@mendix.com`.

In this particular example, if you want to prevent the generation of email addresses without the first part you should add a validation check before doing concatenation: 

```
if trim($User/Name) = '' then '' else $User/Name + "@mendix.com"
```

### React 19 {#react-19}

In Studio Pro 11.6.0, **React.js** was updated to version 19.0.0. This change affects both web and mobile applications. All platform supported widgets have been made compatible with React 19.0.0. Please upgrade all installed widgets to the latest published versions. 

React 19 features a few breaking changes to its APIs. Notably, the previously deprecated `findDOMNode` API is now removed. Please refer to React's [Removed deprecated React DOM APIs](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-deprecated-react-dom-apis) documentation to ensure the widgets you are developing are compatible with **Studio Pro 11.6.0** and **React 19.0.0**.

Keep in mind that incompatibility with React 19.0.0 will neither prevent your pluggable widget from compiling, nor your React client application from bundling. To check your widget's compatibility, check the source code and test the widget in the browser or in the mobile app.

### Using the **ShowHomePage** Microflow in the **System** Module {#apply-entity-access}

In Studio Pro versions prior to 11, the default configuration was insecure: **Apply entity access** was set to `false`. In Studio Pro version 11, the **ShowHomePage** microflow in the **System** module now enforces a secure default for entity access. As a result, after upgrading to version 11, your application may report errors that were previously not detected.

Below is an example of a potential error that may occur after upgrading to version 11, along with recommended approaches for resolving it.

After the upgrade, your app may report the following new error: `A microflow that does not apply entity access can only call microflows that also do not apply entity access`. This error occurs when a microflow that does not apply entity access attempts to call the **ShowHomePage** microflow in the **System** module, which now enforces entity access. In earlier versions, the **ShowHomePage** microflow did not have entity access applied, so this error did not arise before the upgrade.

You can resolve the error by enabling entity access for the microflow that calls the **ShowHomePage** microflow. However, this may not always align with your intended access control strategy. Alternatively, you can create a custom microflow that includes the [Show home page](/refguide/show-home-page/) activity without enabling entity access. You can then call this new microflow instead of the one in the **System** module. Another approach is to call the **Show home page** activity directly within your microflow.

### Amazon S3 SDK Upgrade

In Mendix 11.6.0 we upgraded the AWS SDK used for accessing S3 storage from version 1 to version 2. SDK version 2 has some [differences](https://docs.aws.amazon.com/sdk-for-java/latest/developer-guide/migration-s3.html) which affects our S3 storage implementation.

#### `com.mendix.storage.s3.Region` / `com.mendix.storage.s3.EndPoint` Settings

SDK version 2 is stricter with these settings.

The `com.mendix.storage.s3.Region` setting must always be set to the region matching the region of the bucket.

The `com.mendix.storage.s3.EndPoint` setting must either not be set or set to an endpoint matching the region, for example: `s3.eu-west-1.amazonaws.com`.

When the region is not specified or there is an incompatibility between the two settings above, error logs will contain entries similar to following:

```
- Unable to load region from any of the providers in the chain.
- The bucket you are attempting to access must be addressed using the specified endpoint.
- The authorization header is malformed; the region 'us-east-1' is wrong.
```

#### AWS Signature V2 Support (`com.mendix.storage.s3.UseV2Auth` Setting)

SDK version 2 does not support AWS Signature v2 which is enabled by `UseV2Auth` setting. This signature type is deprecated, and is not supported by new regions. For more information, see [AWS's Documentation](https://docs.aws.amazon.com/AmazonS3/latest/API/specify-signature-version.html).

We do not expect this to have any effect when using Amazon S3. It will, however, prevent use of S3 compatible solutions which only support the v2 signature type. In situations like that, you need to switch to either Amazon S3 or a compatible solution that supports newer signature types.  

#### Client Side Encryption Changes

Client side encryption can be enabled using the `com.mendix.storage.s3.EncryptionKeys` setting. Previously, any encryption algorithm supported by the JDK could be used. With the new SDK only AES is supported.

An error similar to the following will be printed in logs when an algorithm other than AES is used: 

```
- Unsupported algorithm: DES
```

If you use an encryption algorithm other than `AES`, then all existing files should be migrated to use `AES` before upgrading to Mendix 11.6. This can be done by configuring a new `AES` key and rewriting all file documents.

### Other

* Studio Pro 10.21 and above requires your application to use Java 21. The Java version of an application can be configured in the runtime settings. Java 21 is available in 9.24.23 and above. Please consider the Java Version Migration guide for a list of changes between Java versions. For on-premises deployments, ensure that JDK 21 is installed in the environments where Mendix 10 applications are deployed.
* In a published REST operation where the **Accept** header is sent as generic */* or application/* then XML would be returned instead of the intended JSON.  This has been changed to always send JSON.
* Consumed REST Service: removed app setting 'Automatically encode parameter values in Send REST request microflow activities' In 10.20 and below, Consumed REST Services would not encode parameters while modeling, but parameters would be encoded when used from a Send REST request activity. This was confusing, so in version 10.21 we introduced a setting to enable or disable this behavior. This setting has been removed in Mendix 11. Consistency parameters are now never automatically encoded both from the consumed REST Service and the Send REST Request activity. If you require encoding for parameters, you must add that yourself. Legacy migration of **System.Imagethumbnail** files has been removed. This was introduced in Mendix 6. If you are migrating from a Mendix 6 application, then first migrate to Mendix 10 and run the application in production to finish migration before migrating further to Mendix 11.
* The JVM parameters `-Djava.security.manager` and `-Djava.security.policyare` no longer supported, as the Java Security Manager is deprecated and non-functional in Java 21.
* The Task Queue setting `System context tasks` (**Runtime** tab in App Settings) is removed. This setting was deprecated in Mendix 9.6. Queued tasks are now always executed in a context equivalent to the one in which they were created. If an app still has this setting enabled, this results in a consistency check error. There is a quick fix option available in the error's context menu to disable the setting and resolve the error.
* The `Core.getRuntimeVersion()` no longer contains the build number:
    * The format used to be `<major>.<minor>.<patch>.<build>`
    * The current format is `<major>.<minor>.<patch>`.
* The type parameter for `EventActionInfoclass` has been removed, as it was superfluous. This means `EventActionInfo<..> info = new EventActionInfo<..>(..)` will no longer compile. To fix this, remove the `<..>` code.
* String concatenation in expressions for empty/null values has changed. These values are no longer concatenated as 'null', instead they are omitted from the string. The old behavior can be achieved by using an if-else expression (for example 'Value: ' + (if $value != empty then $value else 'null') instead of 'Value: ' + $value).
* The default value of the custom runtime setting **DataStorage.OptimizeSecurityColumns** was changed to true.
* XPath API now uses limited XPath by default. We added a setting to make it not limited ("limited" means that arithmetic operators are not allowed as those are unsafe).
* Following the MariaDB JDBC driver default, if you use MariaDB or MySQL with a DatabaseJdbcUrl   we no longer accept `jdbc:mysql:` as a protocol. Use `jdbc:mariadb:` instead.
* For MariaDB and MySQL, we no longer set the sql_mode driver parameter. Unless overridden in DatabaseJdbcUrl, the database default will be used.
* SELECT * in combination with UNION and ORDER BY is no longer allowed in runtime, as it leads to queries that are not accepted by most database engines.
* We fixed the issue where SELECT * in combination with UNION and ORDER BY would fail on most database engines.
* When COALESCE function in OQL has attributes of different numeric types, the result type is defined according to type precedence. Before, the result type would match the type of the first argument.
* Client API `mx.logger` is no longer supported. All calls to it should be replaced with standard `console.log`, `console.warn`, and other such standard calls. All widgets that use the `mx.logger` need to be updated.
* We no longer convert `empty` values sent to the client into empty strings. All client side expressions must be adjusted accordingly.
* We no longer support the runtime API class `com.mendix.modules.email.EmailModule` which was deprecated in [Mendix 10.12](https://docs.mendix.com/releasenotes/studio-pro/10.12/#deprecate-email). We recommend using the [Email Connector](https://marketplace.mendix.com/link/component/120739) module instead.
* The [Deep Link module](https://marketplace.mendix.com/link/component/43) is deprecated, and no longer receives active support starting with Studio Pro 11. The functionality this module offers has been replaced with built-in features of the Mendix Platform, such as Page URLs and Microflow URLs. Refer to the [Migrating to Page and Microflow URLs](/appstore/modules/deep-link/#migrate-page-micro) section in *Deep Link* for details on how to migrate to these built-in features.
