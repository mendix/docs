---
title: "Moving from 6 to 7"
space: "Mendix 7 Reference Guide"
category: "General"
---


Please read the [Release Notes](/releasenotes/desktop-modeler/7.0) to see what new major improvements we added in Mendix 7.

This documentation aims to help you to update your project from Mendix 6 to Mendix 7. It contains the following topics:

*   Converting your project: preparing for conversion and actually converting your project to Mendix 6.
*   Java 8 required: from Mendix 6 on Java 8 is required to run your applications.
*   Deprecated features: see which platform features have been deprecated in Mendix 7.
*   Removed deprecated functionality: see which features which were deprecated

## Converting your project

Before converting your project we advise you to look at the following points.

### Backup Project

If you are not using the team server, make a backup of your project. Check that the backup was successful by opening the project.

<div class="alert alert-success">{% markdown %}

Really make a backup!

{% endmarkdown %}</div>

### Convert to the latest Mendix 6 version

Conversion to Mendix 7 will work for projects created with version 6.0.0 or newer. However, we advise to convert to the latest 6 version before converting to Mendix 7. At the time of writing this is 6.10.0.

### Fix errors, warnings and deprecations

Fix errors, warnings and deprecations as far as possible. Take special note of the 'Deprecations' in the Errors dock. Most features that are deprecated in Mendix 6 will be completely gone in Mendix 7, and will result in an error in your project.

### Fix deprecations in Java actions

Fix deprecations in your Java actions by importing your project in Eclipse and solving all the deprecations in the "Problems" tab. For details of the removed and deprecated APIs, see the section "Removed features" of the [Mendix 7 release notes](/releasenotes/desktop-modeler/7.0).

### Converting!

Now you are ready to convert. Simply open your project in the new Mendix Modeler. There are no explicit actions required after opening your Mendix 6 project in Mendix 7.

## Deprecated features

The following features have been deprecated in Mendix 7. Using these features is discouraged, since they will be removed in a future release of Mendix.

### Java deprecations

#### On `com.mendix.core.Core`
| Method Name | Alternative |
| --- | --- |
| `getActiveSession(String userName)` | use xpath query on session table instead. |
| `getActiveSessions()` | use xpath query on session table instead. |
| `exportStream(<br> IContext context,<br> String exportMappingName,<br> IMendixObject objectToExport,<br> Boolean shouldValidate)` | `com.mendix.core.integration().exportStream(<br> IContext context,<br> String exportMappingName,<br> IMendixObject objectToExport,<br> Boolean shouldValidate)` |
| `importStream(<br> IContext context,<br> InputStream stream,<br> String importMappingName,<br> IMendixObject mappingParameter,<br> Boolean shouldValidate)` | `com.mendix.core.integration().importStream(<br> IContext context,<br> InputStream stream,<br> String importMappingName,<br> IMendixObject mappingParameter,<br> Boolean shouldValidate)` |

## Removed deprecated functionality

The following features that were deprecated in Mendix 6 have been removed in Mendix 7.

### Removed Deprecated Classes

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

### Removed Constants
| Class Name | Alternative |
| --- | --- |
| `com.mendix.systemwideinterfaces.HandlerConstants` | - |
| `com.mendix.systemwideinterfaces.SystemModuleConstants` | - |
| `com.mendix.core.conf.CoreConstants` | - |
| `com.mendix.core.conf.AdminActionConstants` | - |
| `com.mendix.core.conf.Tokens` | - |
| `com.mendix.externalinterface.connector.RequestHandler.XAS\_SESSION\_ID`| *Used in RequestHandler:* `com.mendix.externalinterface.connector.RequestHandler.getSessionCookieName()`<br> *Used as a constant:* `com.mendix.core.Core.getConfiguration().getSessionIdCookieName()` |

### Removed Methods

#### From `com.mendix.core.Configuration`
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

#### From `com.mendix.modules.exportmanager.excel.ExcelExporter`
| Method Name | Alternative |
| --- | --- |
| `generateWorkbook(<br> LocalComponent component,<br> IContext context,<br> List<IExcelGrid> grids)` | - |
| `generateXLS(<br> com.mendix.core.component.LocalComponent component,<br> IContext context,<br> IMendixObject fileObject,<br> String fileName,<br> List<IExcelGrid> grids)` | `generateXLS(<br> IContext context,<br> IMendixObject fileObject,<br> String fileName,<br> List<IExcelGrid> grids)` |
| `generateXLS(<br> com.mendix.core.component.LocalComponent component,<br> IContext context,<br> IMendixObject fileObject,<br> String fileName,<br> List<String> oqlQueries,<br> boolean autoSizeColumns,<br> List<String> headerNames)` | `generateXLS(<br> IContext context,<br> IMendixObject fileObject,<br> String fileName,<br> List<String> oqlQueries,<br> boolean autoSizeColumns,<br> List<String> headerNames)` |

#### From `com.mendix.systemwideinterfaces.core.IContext`
| Method Name | Alternative |
| --- | --- |
| `setCurrentIdentifier(IMendixIdentifier currentIdentifier)` | - |
| `setContextObjects(List<IMendixIdentifier> contextObjects)` | - |
| `setSudo(boolean sudo)` | - |
| `getSudoContext()` | `createSudoClone()` |

#### From `com.mendix.core.Core`
| Method Name | Alternative |
| --- | --- |
| `callWebservice()` | use Call REST action in the microflow instead. |
| `importXmlStream()` | use com.mendix.core.integration().importStream() instead. |
| `getComponent().runtime().about().get("model_version")` | `getModelVersion()` |

#### Others
| Method Name | Alternative |
| --- | --- |
| `com.mendix.m2ee.api.IMxRuntimeRequest.getOriginalRequest()` | `com.mendix.m2ee.api.IMxRuntimeRequest.getHttpServletRequest()` |
| `com.mendix.m2ee.api.IMxRuntimeResponse.getOriginalResponse()` | `com.mendix.m2ee.api.IMxRuntimeResponse.getHttpServletResponse()` |
| `com.mendix.systemwideinterfaces.core.meta.IMetaObject.getComponent()` | - |
| `com.mendix.systemwideinterfaces.core.ISession.getComponent()` | - |

### Compilation Issues When Migrating a Project to Mendix 7

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

### Runtime Issues When Migrating a Project to Mendix 7

Java libraries in Mendix 7 shipped with the installation package are not available for projects anymore. While this results in a better dependency management for each project, it can also cause errors at runtime after migration, for example, **NoClassDefFoundError**. Therefore, it's important to make sure that the **userlib** directory of the migrated project includes all the required libraries. It's also worth noting that in Mendix 7 only one version of each library can exist at runtime. This means that if there are multiple versions of one library the latest version is used and the rest are ignored.
