---
title: "Moving from 6 to 7"
space: "Mendix 7 Reference Guide"
category: "General"
---

Please read the [Release Notes](/releasenotes/desktop-modeler/7.0) to see what new major improvements we added in Mendix 7.

This documentation aims to help you to update your project from Mendix 6 to Mendix 7. It contains the following topics:

*   Converting your project – preparing for conversion and actually converting your project to Mendix 7
*   Java 8 required – from Mendix 6 on, Java 8 is required to run your applications
*   Deprecated features – see which platform features have been deprecated in Mendix 7
*   Removed deprecated functionality – see which features which were deprecated

## Converting Your Project

Before converting your project we advise you to look at the following points.

### Backing Up Your Project

If you are not using the team server, make a backup of your project. Check that the backup was successful by opening the project.

<div class="alert alert-success">{% markdown %}

Really make a backup!

{% endmarkdown %}</div>

### Converting to the Latest Mendix 6 Version

Conversion to Mendix 7 will work for projects created with version 6.0.0 or newer. However, we advise to convert to the latest 6 version before converting to Mendix 7. At the time of writing this is 6.10.0.

### Fixing Errors, Warnings, and Deprecations

Fix errors, warnings and deprecations as far as possible. Take special note of the 'Deprecations' in the Errors dock. Most features that are deprecated in Mendix 6 will be completely gone in Mendix 7, and will result in an error in your project.

### Fixing Deprecations in Java Actions

Fix deprecations in your Java actions by importing your project in Eclipse and solving all the deprecations in the "Problems" tab. For details of the removed and deprecated APIs, see the section "Removed features" of the [Mendix 7 release notes](/releasenotes/desktop-modeler/7.0).

### Converting!

Now you are ready to convert. Simply open your project in the new Mendix Modeler. There are no explicit actions required after opening your Mendix 6 project in Mendix 7.

## Breaking Changes

#### Stateless Runtime

An earlier version of Mendix enabled applications to move sessions to the database and files to an external file storage facility (for example, S3 or Azure Blob Storage). In Mendix 7, the server object state has been moved to the client, which means that the server is now completely stateless and can be scaled horizontally at will!

This functionality is enabled by default, so there is no need for additional configuration.

Because of this statelessness, it is the client that keeps track of objects that are not yet committed, objects that are not persistable, and even changes to the objects that weren't committed yet. To keep the resource usage low, we periodically prune the stored state — we remove objects that are not displayed in the UI and not connected by references. For gaining insight into how big the state is in your app (and even why it exists), we built a basic tool: use the **Ctrl + Alt + G** key combination in your browser, and the information will be dumped to your browser's console (note that this feature might be removed in a future release). For more details, see [Monitoring Client State](/runtime/monitoring-client-state).

Please be aware that reloading the browser window (as in, pressing F5) will drop the entire state.

Because the server doesn't store the object state anymore, the client has to send it along with some requests, so the server-side microflow can access NPEs, uncommitted values, etc. We apply quite a few optimizations in order to send as little data as possible and to maintain the same network footprint as in previous Mendix versions. There is a new setting in the **Runtime** tab of **Project Settings** called **Optimize network calls**, so if you experience some awkward issues in your project (for example, a microflow called from the client doesn't see the changes made by the data source microflow), you can try to disable these optimizations. (Note that this setting will be removed in a future release, so please report any issues you experience as soon as possible.)

#### Persistent Sessions

Persistent sessions are enabled by default. This is necessary for Mendix to work correctly in a clustered scenario. It's still possible to disable persistent sessions by setting `PersistentSessions` to `false`. However, in that case, you can't run Mendix in a clustered mode.

We optimized the system to reduce the performance impact of enabling this by default. This is achieved by allowing a Mendix Runtime instance to assume that a session is valid for a short timespan (by default, 30 seconds). A Mendix Runtime instance will only validate a session once within that timespan. However, this means that upon user logout, it may take up to that specific timespan (in the worst case scenario) before all the Mendix Runtime instances of a cluster (except for the one processing the logout) recognize that the user is logged out. This timeout can be configured by setting a value for `SessionValidationTimeout`, which represents the timespan in milliseconds.

#### NPE Attribute-Level Security

We have prohibited NPE (non-persistent entity) attribute-level security for attributes that do not have at least read access. The reason for this is that non-readable attributes cannot be sent to the client. A separate object (which is not sent to the client at all) should be used for these attributes instead.

#### Autocommitted Objects for System Sessions

If you have two new objects referencing one another and you try to commit one of those, you should also commit the other one. If you don't and you are running the microflow in a system session (for example, a scheduled event), you will now get an exception. Note that if you are running in a user session that is not required, we'll handle it for you.

#### Sign-In Microflows

Sign-in microflows are no longer supported, because they do not add any functionality. In a future version, the state will be automatically transferred from the anonymous user to the signed-in user by the client. In Mendix 7, having a sign-in microflow selected will result in a consistency check error. When this is solved by setting the microflow to **None**, the property will automatically disappear from the UI.

#### System.Statistics Entity

The `System.Statistics` entity has been removed from the **System** module, as the entity has become obsolete with the introduction of stateless Runtime. The **RuntimeStatistics** page and the **ViewStatistics** microflow are automatically removed from your project when they are in their default location (in the **Administration** module). The **Runtime Statistics** menu item is also automatically removed.

#### Client API Changes

* The semantics have changed for `MxObject.get` and `mx.parser.parseValue`. They now return a value of an appropriate type (for example, `Big` for numbers, numbers for dates) instead of always returning a string. For more details, see the documentation for [Class: mendix/lib/MxObject](https://apidocs.mendix.com/7/client/mendix_lib_MxObject.html#get).
* Support for `dojo.require` has been dropped. It never worked in hybrid apps, and we have now made it official. Write your custom widgets in the AMD style, as described in [How to Create a Basic Hello World Custom Widget](https://docs.mendix.com/howto7/create-a-basic-hello-world-custom-widget) and the [App Store Widget Boilerplate](https://github.com/mendix/AppStoreWidgetBoilerplate).
* Dojo APIs exposed through the global `dojo` object are no longer supported, as they were never supposed to work in AMD widgets. Some of these APIs (for example, `dojo.html`) have already been removed, but others will be removed in the future without notice. So, use these at your own risk, or better yet, don't use them at all!

## Deprecated Features

The following features have been deprecated in Mendix 7. Using these features is discouraged, since they will be removed in a future release of Mendix.

### Client Deprecations

* The `mx.server.request` client API method has been deprecated. We bet you never even knew it existed! If you did, be aware that it no longer handles validations. This responsibility has been moved to `mx.data`.
* The `MxContext` methods `setTrackId` and `setTrackEntity` have been deprecated. Use the `setContext` method instead.

### Runtime Deprecations

#### On `com.mendix.core.Core`
| Method Name | Alternative |
| --- | --- |
| `getActiveSession(String userName)` | use xpath query on session table instead. |
| `getActiveSessions()` | use xpath query on session table instead. |
| `exportStream(<br> IContext context,<br> String exportMappingName,<br> IMendixObject objectToExport,<br> Boolean shouldValidate)` | `com.mendix.core.integration().exportStream(<br> IContext context,<br> String exportMappingName,<br> IMendixObject objectToExport,<br> Boolean shouldValidate)` |
| `importStream(<br> IContext context,<br> InputStream stream,<br> String importMappingName,<br> IMendixObject mappingParameter,<br> Boolean shouldValidate)` | `com.mendix.core.integration().importStream(<br> IContext context,<br> InputStream stream,<br> String importMappingName,<br> IMendixObject mappingParameter,<br> Boolean shouldValidate)` |

## Removed Deprecated Functionality

The following features that were deprecated in Mendix 6 have been removed in Mendix 7.

### Removed Client Functionality

#### Split Panes

We dropped support for the vertical and horizontal split pane widgets that have been deprecated since Mendix 6. From now on, these widgets will result in consistency errors in the Modeler. To smooth out the conversion path for you, we introduced a tool to convert existing split panes (one-by-one or all together) into layout grids. You can access the tool by right-clicking the consistency error message or from the **Tools** menu.

Note that while the tool is definitely awesome, it is not perfect. The resulting layout grids will not be able to dynamically resize (via the animated resize feature of the split panes, which is no longer supported in the platform), and the markup and scrolling behavior might be a bit different. So, please test your applications after updating to Mendix 7! (Do we really have to mention that?)

#### Legacy Navigation Layout

Support for navigation layouts of the **Legacy** type has been dropped. Layout types define how pages are opened in the web client: in a (modal) pop-up window or in the content. For navigation layouts of the Legacy type, that behavior was defined via the button (or microflow) opening the page, which could result in inconsistent behavior. All the navigation layouts of the Legacy type result in errors in the Modeler now.

For more information, see [Layouts](/refguide7/layout#layout-type) and the blog post titled [Layouts Have Types](https://www.mendix.com/blog/layouts-have-types/).

#### Apply context and remove from context

The **Apply context** and **Remove from context** options of the reference selector, data grid, and template grid data sources were deprecated long ago (in [Mendix 5.19.0](/releasenotes/desktop-modeler/5.19)), and they have now been removed. You will now get consistency errors in places where you used them. We suggest using explicit XPath constraints instead.

### Removed Client APIs

* `mxui/dom.{p,div,span...}` and `mxui/dom.builder` have been removed in favor of using `mxui/dom.create`
* `MxMetaObject.isNumber` and `MxObject.isNumber` have been replaced with `isNumeric` methods
* `mxui/dom.{copyChildren,insertBefore,insertAfter}` has been removed in favor of using plain `dom` APIs
* `mx.ui.hideLogin` has been replaced with `hide` on the object returned by `mx.ui.showLogin`
* The `mx.login` signature has been changed to `mx.login(username, password, onLoginSucceed, onLoginFailure)`
* `_WidgetBase.resume`, `_WidgetBase.suspend`, and `_FormBase.startup` have been removed, as they had no effect

### Removed Runtime Functionality

#### Removed Deprecated Classes

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

#### Removed Constants

| Class Name | Alternative |
| --- | --- |
| `com.mendix.systemwideinterfaces.HandlerConstants` | - |
| `com.mendix.systemwideinterfaces.SystemModuleConstants` | - |
| `com.mendix.core.conf.CoreConstants` | - |
| `com.mendix.core.conf.AdminActionConstants` | - |
| `com.mendix.core.conf.Tokens` | - |
| `com.mendix.externalinterface.connector.RequestHandler.XAS\_SESSION\_ID`| *Used in RequestHandler:* `com.mendix.externalinterface.connector.RequestHandler.getSessionCookieName()`<br> *Used as a constant:* `com.mendix.core.Core.getConfiguration().getSessionIdCookieName()` |

#### Removed Methods

##### From `com.mendix.core.Configuration`

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

##### From `com.mendix.modules.exportmanager.excel.ExcelExporter`

| Method Name | Alternative |
| --- | --- |
| `generateWorkbook(LocalComponent component,IContext context,List<IExcelGrid> grids)` | - |
| `generateXLS(com.mendix.core.component.LocalComponent component,IContext context,IMendixObject fileObject,String fileName,List<IExcelGrid> grids)` | `generateXLS(IContext context,IMendixObject fileObject,String fileName,List<IExcelGrid> grids)` |
| `generateXLS(com.mendix.core.component.LocalComponent component,IContext context,IMendixObject fileObject,String fileName,List<String> oqlQueries,boolean autoSizeColumns,List<String> headerNames)` | `generateXLS(IContext context,IMendixObject fileObject,String fileName,List<String> oqlQueries,boolean autoSizeColumns,List<String> headerNames)` |

##### From `com.mendix.systemwideinterfaces.core.IContext`

| Method Name | Alternative |
| --- | --- |
| `setCurrentIdentifier(IMendixIdentifier currentIdentifier)` | - |
| `setContextObjects(List<IMendixIdentifier> contextObjects)` | - |
| `setSudo(boolean sudo)` | - |
| `getSudoContext()` | `createSudoClone()` |

##### From `com.mendix.core.Core`

| Method Name | Alternative |
| --- | --- |
| `callWebservice()` | Use Call REST action in the microflow instead. |
| `importXmlStream()` | Use com.mendix.core.integration().importStream() instead. |
| `getComponent().runtime().about().get("model_version")` | `getModelVersion()` |

##### From `com.mendix.systemwideinterfaces.core.ISession`

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

##### Others

| Method Name | Alternative |
| --- | --- |
| `com.mendix.m2ee.api.IMxRuntimeRequest.getOriginalRequest()` | `com.mendix.m2ee.api.IMxRuntimeRequest.getHttpServletRequest()` |
| `com.mendix.m2ee.api.IMxRuntimeResponse.getOriginalResponse()` | `com.mendix.m2ee.api.IMxRuntimeResponse.getHttpServletResponse()` |
| `com.mendix.systemwideinterfaces.core.meta.IMetaObject.getComponent()` | - |
| `com.mendix.systemwideinterfaces.core.ISession.getComponent()` | - |

#### Compilation Issues When Migrating a Project to Mendix 7

The removal of deprecated classes and methods in Mendix 7 can cause compilation errors after migrating your project to Mendix 7. Please use the above provided alternative for the removed deprecated code.

#### SystemModuleConstants

These are mainly used to refer to the name of system entities or their attribute names. Such names are also available via corresponding System proxies.
For example, **SystemModuleConstants.FILE_DOCUMENT_NAME** can be replaced by **FileDocument** proxy:
```
import com.mendix.systemwideinterfaces.SystemModuleConstants;

private final String FILE_DOCUMENT_NAME = SystemModuleConstants.FILE_DOCUMENT_NAME;
```
should be replaced by:
```
import system.proxies.FileDocument.MemberNames;

private final String FILE_DOCUMENT_NAME = MemberNames.Name.toString();
```
Where MemberNames is an Enum defined in the FileDocument proxy class.

#### Moved Packages

| Class Name | Alternative Interface |
| --- | --- |
| org.json.\* | com.mendix.thirdparty.org.json.\* |

This is needed to avoid potential namespace conflicts between the Mendix version of the org.json library and other json libraries.

#### Runtime Issues When Migrating a Project to Mendix 7

Java libraries in Mendix 7 shipped with the installation package are not available for projects anymore. While this results in a better dependency management for each project, it can also cause errors at runtime after migration, for example, **NoClassDefFoundError**. Therefore, it's important to make sure that the **userlib** directory of the migrated project includes all the required libraries. It's also worth noting that in Mendix 7 only one version of each library can exist at runtime. This means that if there are multiple versions of one library, the latest version is used and the rest are ignored.
