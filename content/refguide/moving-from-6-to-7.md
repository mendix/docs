---
title: "Moving from Modeler Version 6 to 7"
category: "General"
description: "Provides details on updating your project from Mendix 6 to Mendix 7, including sections on converting your project and deprecated features."
---

## 1 Introduction

For up-to-date details about all the new major improvements being added in Mendix 7, please read the [Modeler version 7 release notes](/releasenotes/desktop-modeler/7).

This document will help you to update your project from Mendix 6 to Mendix 7. It contains the following topics:

* Converting your project – preparing for conversion and actually converting your project to Mendix 7
* Java 8 requirement – from Mendix 6 on, Java 8 is required to run your applications
* Deprecated features – see which platform features have been deprecated in Mendix 7
* Removed deprecated functionality – see which features have been deprecated

## 2 Converting Your Project

Before converting your project, reading the following sections is recommended.

### 2.1 Backing Up Your Project

If you are not using Team Server, make a backup of your project. Check that the backup was successful by opening the project.

{{% alert type="success" %}}

Seriously, make a backup!

{{% /alert %}}

### 2.2 Converting to the Latest Mendix 6 Version

Conversion to Mendix 7 will work for projects created with version 6.0.0 or higher. However, we advise converting to the latest Mendix 6 version before converting to the latest Mendix 7 version. For details on the latest Mendix 6 version, see the [Modeler version 6.10 release notes](/releasenotes/desktop-modeler/6.10).

### 2.3 Fixing Errors, Warnings, and Deprecations

Fix errors, warnings, and deprecations as much as possible. Take special note of the **Deprecations** in the **Errors** pane. Most features that are deprecated in Mendix 6 will be completely gone in Mendix 7, and these will result in errors in your project.

### 2.4 Fixing Deprecations in Java Actions

Fix the deprecations in your Java actions by importing your project in Eclipse and solving all the deprecations in the **Problems** tab. 

For details on the removed and deprecated APIs, see the **Breaking changes** section of the [Mendix 7 release notes](/releasenotes/desktop-modeler/7.0#BreakingChanges).

## 3 Converting!

Now you are ready to convert, so simply open your project in the new Mendix Modeler. There are no explicit actions required after opening your Mendix 6 project in Mendix 7. When you deloy your app from Mendix Modeler, double check all the domain model changes in the synchronization dialog in order to avoid unexpected modifications. 

### 3.1 Upgrading App Store Modules

After the conversion, verify if there is a newer version available of your App Store modules. Some modules need to be upgraded to make them Mendix 7-compatible. Reading the version release notes to see whether specific actions are required is recommended.

In Mendix 7, the App Store modules used in your projects are grouped together in the Modeler. They can be found in **Project Explorer** under **Project** > **App store modules**.

### 3.2 Double check project changes

Verify that during migration steps listed above, no modules are replaced by removing and importing the module again. This operation by design insructs Mendix Modeler to delete whole module and create it again and leads to empty entities and assicoations after migration has been finished. 

## 4 Breaking Changes

### 4.1 Stateless Runtime

An earlier version of Mendix enabled applications to move sessions to the database and files to an external file storage facility (for example, S3 or Azure Blob Storage). In Mendix 7, the server object state has been moved to the client, which means that the server is now completely stateless and can be scaled horizontally at will.

This functionality is enabled by default, so there is no need for additional configuration.

Because this statelessness, it is the client that keeps track of the objects that are not yet committed, objects that are not persistable, and even changes to the objects that were not committed yet. To keep the resource usage low, Mendix periodically prunes the stored state — objects are removed that are not displayed in the UI and not connected by references. To gain insight into how big the state is in your app (and even why it exists), use the **Ctrl + Alt + G** key combination in your browser and the information will be dumped into your browser's console (note that this feature might be removed in a future release). For more details, see [Monitoring Client State](monitoring-client-state).

Please be aware that reloading the browser window (as in, pressing F5) will drop the entire state.

Because the server doesn't store the object state anymore, the client has to send it along with some requests, so the server-side microflow can access NPEs, uncommitted values, etc. Mendix applies quite a few optimizations in order to send as little data as possible and to maintain the same network footprint as in previous Mendix versions. There is a new setting in the **Runtime** tab of **Project Settings** called **Optimize network calls**, so if you experience some awkward issues in your project (for example, a microflow called from the client that doesn't see the changes made by the data source microflow), you can try to disable these optimizations. (Note that this setting will be removed in a future release, so please report any issues you experience as soon as possible.)

### 4.2 Persistent Sessions

Persistent sessions are enabled by default. This is necessary for Mendix to work correctly in a clustered scenario. It's still possible to disable persistent sessions by setting `PersistentSessions` to `false`. However, in that case, you will not be able to run Mendix in a clustered mode.

We optimized the system to reduce the performance impact of enabling this by default. This is achieved by allowing a Mendix Runtime instance to assume that a session is valid for a short timespan (by default, 30 seconds). A Mendix Runtime instance will only validate a session once within that timespan. However, this means that upon user logout, it may take up to that specific timespan (in the worst case scenario) before all the Mendix Runtime instances of a cluster (except for the one processing the logout) recognize that the user is logged out. This timeout can be configured by setting a value for `SessionValidationTimeout`, which represents the timespan in milliseconds.

### 4.3 NPE Attribute-Level Security

We have prohibited non-persistent entity (NPE) attribute-level security for attributes that do not have at least read access. The reason for this is that non-readable attributes cannot be sent to the client. A separate object (which is not sent to the client at all) should be used for these attributes instead.

### 4.4 Autocommitted Objects for System Sessions

If you have two new objects referencing one another and you try to commit one of those, you should also commit the other one. If you don't and you are running the microflow in a system session (for example, a scheduled event), you will get an exception. Note that if you are running in a user session that is not required, we'll handle it for you.

### 4.5 Objects Retrieved from Database Are Not State

Objects retrieved from the database are not part of the state (as compared to objects retrieved by association). This means that you cannot access uncommitted changes and new objects through objects comming from the database, even when retrieving by association starting from these objects.

For example, assume a user has associated (but not committed) an order line with an existing order object. When retrieving the order lines through the order object retrieved from the database, the aforementioned order line is not retrieved. However, when the order object is passed as a microflow parameter from a page, the same retrieve returns the order line object.

### 4.6 Sign-In Microflows

Sign-in microflows are no longer supported, because they do not add any functionality. In a future version, the state will be automatically transferred from the anonymous user to the signed-in user by the client. In Mendix 7, having a sign-in microflow selected will result in a consistency check error. When this is solved by setting the microflow to **None**, the property will automatically disappear from the UI.

### 4.7 System.Statistics Entity

The `System.Statistics` entity has been removed from the **System** module, as the entity has become obsolete with the introduction of stateless Runtime. The **Runtime Statistics** page (along with the **Runtime Statistics** menu item) and the **ViewStatistics** microflow are automatically removed from your project when they are in their default location (in the **Administration** module).

### 4.8 Client API Changes

The semantics have changed for `MxObject.get` and `mx.parser.parseValue`. They now return a value of an appropriate type (for example, `Big` for numbers, numbers for dates) instead of always returning a string. For more details, see [Class: mendix/lib/MxObject](https://apidocs.mendix.com/7/client/mendix_lib_MxObject.html#get).

Support for `dojo.require` has been dropped. It never worked in hybrid apps, and we have now made it official. Write your custom widgets in the AMD style, as described in [App Store Widget Boilerplate](https://github.com/mendix/AppStoreWidgetBoilerplate).

Dojo APIs exposed through the global `dojo` object are no longer supported, as they were never supposed to work in AMD widgets. Some of these APIs (for example, `dojo.html`) have already been removed, but others will be removed in the future without notice. Use these at your own risk, or better yet, don't use them at all!

## 5 Deprecated Features

The following features have been deprecated in Mendix 7. Using these features is discouraged, since they will be removed in a future release of Mendix.

### 5.1 Client Deprecations

The `mx.server.request` client API method has been deprecated. We bet you never even knew it existed! If you did, be aware that it no longer handles validations. This responsibility has been moved to `mx.data`.

The `MxContext` methods `setTrackId` and `setTrackEntity` have been deprecated. Use the `setContext` method instead.

### 5.2 Runtime Deprecations on `com.mendix.core.Core`

| Method Name | Alternative |
| --- | --- |
| `getActiveSession(String userName)` | Use an XPath query on the session table instead. |
| `getActiveSessions()` | Use an XPath query on the session table instead. |
| `exportStream(IContext context, String exportMappingName, IMendixObject objectToExport, Boolean shouldValidate)` | `com.mendix.core.integration().exportStream(IContext context, String exportMappingName, IMendixObject objectToExport,Boolean shouldValidate)` |
| `importStream(IContext context,InputStream stream,String importMappingName,IMendixObject mappingParameter,Boolean shouldValidate)` | `com.mendix.core.integration().importStream(IContext context, InputStream stream, String importMappingName, IMendixObject mappingParameter, Boolean shouldValidate)` |

## 6 Removed Deprecated Functionality

The following features were deprecated in Mendix 6 and have been removed in Mendix 7.

### 6.1 Removed Client Functionality

#### 6.1.1 Split Panes

We dropped support for the vertical and horizontal split pane widgets that have been deprecated since Mendix 6. From now on, these widgets will result in consistency errors in the Modeler. To smooth out the conversion path, we introduced a tool to convert existing split panes (one-by-one or all together) into layout grids. You can access the tool by right-clicking the consistency error message or from the **Tools** menu.

Note that while the tool is definitely awesome, it is not perfect. The resulting layout grids will not be able to dynamically resize (via the animated resize feature of the split panes, which is no longer supported in the platform), and the markup and scrolling behavior might be a bit different. So, please test your applications after updating to Mendix 7! (Do we really have to mention that?)

#### 6.1.2 Legacy Navigation Layout

Support for navigation layouts of the **Legacy** type has been dropped. Layout types define how pages are opened in the web client: in a (modal) pop-up window or in the content. For navigation layouts of the Legacy type, that behavior was defined via the button (or microflow) opening the page, which could result in inconsistent behavior. All the navigation layouts of the Legacy type result in errors in the Modeler now.

For more information, see [Layouts](layout#layout-type) and the blog post [Layouts Have Types](https://www.mendix.com/blog/layouts-have-types/).

#### 6.1.3 Apply Context and Remove from Context

The **Apply context** and **Remove from context** options of the reference selector, data grid, and template grid data sources were deprecated long ago (in [Mendix 5.19.0](/releasenotes/desktop-modeler/5.19)), and they have now been removed. You will now get consistency errors in places where you used them. We suggest using explicit XPath constraints instead.

### 6.2 Removed Client APIs

* `mxui/dom.{p,div,span...}` and `mxui/dom.builder` have been removed in favor of using `mxui/dom.create`
* `MxMetaObject.isNumber` and `MxObject.isNumber` have been replaced with `isNumeric` methods
* `mxui/dom.{copyChildren,insertBefore,insertAfter}` has been removed in favor of using plain `dom` APIs
* `mx.ui.hideLogin` has been replaced with `hide` on the object returned by `mx.ui.showLogin`
* The `mx.login` signature has been changed to `mx.login(username, password, onLoginSucceed, onLoginFailure)`
* `_WidgetBase.resume`, `_WidgetBase.suspend`, and `_FormBase.startup` have been removed, as they had no effect

### 6.3 Removed Runtime Functionality

#### 6.3.1 Removed Deprecated Classes

| Class Name | Alternative Interface/Class |
| --- | --- |
| `com.mendix.modules.exportmanager.excel.ExcelCellStyle` | `com.mendix.modules.exportmanager`, `.interfaces.excel.IExcelCellStyle` |
| `com.mendix.modules.exportmanager.excel.ExcelCell` | `com.mendix.modules.exportmanager`, `.interfaces.excel.IExcelCell` |
| `com.mendix.modules.exportmanager.excel.ExcelColumn` | `com.mendix.modules.exportmanager`, `.interfaces.excel.IExcelColumn` |
| `com.mendix.modules.exportmanager.excel.ExcelGrid` | `com.mendix.modules.exportmanager`, `.interfaces.excel.IExcelGrid` |
| `com.mendix.systemwideinterfaces.core.Feedback` | `com.mendix.systemwideinterfaces.core.IFeedback` |
| `com.mendix.core.conf.ConfigurationImpl` | `com.mendix.core.conf.Configuration` |
| `com.mendix.core.component.InternalCore` | `com.mendix.Core` |
| `com.mendix.core.conf.ConfigValueChecker` | -  |
| `com.mendix.core.conf.UserPermissions`  | -  |
| `com.mendix.core.conf.CertificateProcessor` | - |
| `com.mendix.core.conf.HashAlgorithmType` | - |
| `com.mendix.systemwideinterfaces.connectionbus.ConnectionBusException` | - |
| `com.mendix.systemwideinterfaces.connectionbus.DBMSType` | - |
| `com.mendix.systemwideinterfaces.connectionbus.JDBCDataStoreConfiguration` | -  |
| `com.mendix.systemwideinterfaces.core.IMendixEnum` | `com.mendix.core.objectmanagement.member.MendixEnum` |

#### 6.3.2 Removed Constants

| Class Name | Alternative |
| --- | --- |
| `com.mendix.systemwideinterfaces.HandlerConstants` | - |
| `com.mendix.systemwideinterfaces.SystemModuleConstants` | - |
| `com.mendix.core.conf.CoreConstants` | - |
| `com.mendix.core.conf.AdminActionConstants` | - |
| `com.mendix.core.conf.Tokens` | - |
| `com.mendix.externalinterface.connector.RequestHandler.XAS\_SESSION\_ID`| Used in RequestHandler: `com.mendix.externalinterface.connector.RequestHandler.getSessionCookieName()`<br> Used as a constant: `com.mendix.core.Core.getConfiguration().getSessionIdCookieName()` |

#### 6.3.3 Removed Methods

##### 6.3.3.1 From com.mendix.core.Configuration

| Method Name | Alternative |
| --- | --- |
| `registerConfigurationSetting(String name, String defaultValue)` | - |
| `getValue(String name)` | - |
| `setValue(String name, String Value)` | - |
| `updateConfiguration(JSONObject params, boolean overwrite)` | - |
| `getUploadedFilesPath()` | - |
| `useLDAPAuthentication()` | - |
| `getReadCommittedSnapshot()` | - |
| `getMaxThreadsPerDataStoreRequest()` | - |
| `getLogMinDurationQuery()` | - |
| `mustReturnOnlyNecessaryDDLCommands()` | - |
| `setReturnOnlyNecessaryDDLCommands(boolean returnOnlyNecessaryDDLCommands)` | - |
| `getConstantValue(Object component, String key)` | - |
| `getDefaultHashAlgorithm()` | - |

##### 6.3.3.2 From com.mendix.modules.exportmanager.excel.ExcelExporter

| Method Name | Alternative |
| --- | --- |
| `generateWorkbook(LocalComponent component, IContext context, List<IExcelGrid> grids)` | - |
| `generateXLS(com.mendix.core.component.LocalComponent component, IContext context, IMendixObject fileObject, String fileName, List<IExcelGrid> grids)` | `generateXLS(IContext context, IMendixObject fileObject, String fileName, List<IExcelGrid> grids)` |
| `generateXLS(com.mendix.core.component.LocalComponent component, IContext context, IMendixObject fileObject, String fileName, List<String> oqlQueries, boolean autoSizeColumns, List<String> headerNames)` | `generateXLS(IContext context, IMendixObject fileObject, String fileName, List<String> oqlQueries, boolean autoSizeColumns, List<String> headerNames)` |

##### 6.3.3.3 From com.mendix.systemwideinterfaces.core.IContext

| Method Name | Alternative |
| --- | --- |
| `setCurrentIdentifier(IMendixIdentifier currentIdentifier)` | - |
| `setContextObjects(List<IMendixIdentifier> contextObjects)` | - |
| `setSudo(boolean sudo)` | - |
| `getSudoContext()` | `createSudoClone()` |

##### 6.3.3.4 From com.mendix.core.Core

| Method Name | Alternative |
| --- | --- |
| `callWebservice()` | Use Call REST action in the microflow instead. |
| `importXmlStream()` | Use `com.mendix.core.integration().importStream()` instead. |
| `getComponent().runtime().about().get("model_version")` | `getModelVersion()` |

##### 6.3.3.5 From com.mendix.systemwideinterfaces.core.ISession

The state has been moved to the client in Mendix 7, and because of that, the following methods are now obsolete:

| Method Name | Alternative |
| --- | --- |
| `retain` | - |
| `release` | - |
| `addToClientRoots` | - |
| `removeFromClientRoots` | - |
| `getClientRoots` | - |
| `getJavaActionRoots` | - |
| `getData` | - |

##### 6.3.3.6 Others

| Method Name | Alternative |
| --- | --- |
| `com.mendix.m2ee.api.IMxRuntimeRequest.getOriginalRequest()` | `com.mendix.m2ee.api.IMxRuntimeRequest.getHttpServletRequest()` |
| `com.mendix.m2ee.api.IMxRuntimeResponse.getOriginalResponse()` | `com.mendix.m2ee.api.IMxRuntimeResponse.getHttpServletResponse()` |
| `com.mendix.systemwideinterfaces.core.meta.IMetaObject.getComponent()` | - |
| `com.mendix.systemwideinterfaces.core.ISession.getComponent()` | - |

#### 6.3.4 Compilation Issues When Migrating a Project to Mendix 7

The removal of deprecated classes and methods in Mendix 7 can cause compilation errors after migrating your project to Mendix 7. Please use the above provided alternatives for the removed deprecated code.

#### 6.3.5 SystemModuleConstants

These are mainly used to refer to the name of system entities or their attribute names. Such names are also available via corresponding system proxies.

For example, `SystemModuleConstants.FILE_DOCUMENT_NAME` can be replaced by the `FileDocument` proxy:

```
import com.mendix.systemwideinterfaces.SystemModuleConstants;

private final String FILE_DOCUMENT_NAME = SystemModuleConstants.FILE_DOCUMENT_NAME;
```

should be replaced by:

```
import system.proxies.FileDocument.MemberNames;

private final String FILE_DOCUMENT_NAME = MemberNames.Name.toString();
```

wherein `MemberNames` is an enum defined in the `FileDocument` proxy class.

#### 6.3.6 Moved Packages

| Class Name | Alternative Interface |
| --- | --- |
| `org.json.\*` | `com.mendix.thirdparty.org.json.\*` |

This is needed to avoid potential namespace conflicts between the Mendix version of the `org.json` library and other JSON libraries.

#### 6.3.7 Runtime Issues When Migrating a Project to Mendix 7

Java libraries in Mendix 7 shipped with the installation package are not available for projects anymore. While this results in better dependency management for each project, it can also cause errors at runtime after migration (for example, `NoClassDefFoundError`). Therefore, it is important to make sure the `userlib` directory of the migrated project includes all the required libraries. It is also worth noting that in Mendix 7, only one version of each library can exist at runtime. This means that if there are multiple versions of one library, the latest version is used and the rest are ignored.

### 6.4 Removed Data Storage Functionality

#### 6.4.1 Removed Methods

| Package Name | Method Name | Alternative |
| --- | --- | --- |
| `com.mendix.systemwideinterfaces.connectionbus.data.IDataRow`| `getPrimaryKeyValue()` | `getValue(context, 0)` |   

##### 6.4.1.1 Example Usages

`IDataRow.getPrimaryKeyValue()`

Let us retrieve a MendixObject using the getPrimaryKeyValue() method in Mendix 6.x:

`List<? extends IDataRow> dataRows = retrieveOQLDataTable.getRows();`<br>
`IDataRow dataRow = dataRows.get(0);`<br>
`IMendixIdentifier mendixIdentifier = dataRow.getPrimaryKeyValue();`<br>
`IMendixObject mendixObj = Core.retrieveId(context, mendixIdentifier);`<br>

A similar approach to get a MendixObject in Mendix 7.x would be as follows:

 `List<? extends IDataRow> dataRows = retrieveOQLDataTable.getRows();`<br>
`IDataRow dataRow = dataRows.get(0);`<br>
`IMendixIdentifier mendixIdentifier = dataRow.getValue(context, 0);`<br>
`IMendixObject mendixObj = Core.retrieveId(context, mendixIdentifier);`<br>
