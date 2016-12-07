---
title: "Runtime API changes"
space: "API documentation"
category: "Moving From 6 to 7"
---
Below is the list of removed deprecated API in Mendix 7 as well as migration solution from Mendix 6, when it's applicable.

## Removed Deprecated classes/methods in Mendix 7.

### classes for which interfaces exist:

| Class Name | Alternative Interface |
| --- | --- |
| com.mendix.modules.exportmanager.excel.ExcelCellStyle | com.mendix.modules.exportmanager, interfaces.excel.IExcelCellStyle |
| com.mendix.modules.exportmanager.excel.ExcelCell | com.mendix.modules.exportmanager, .interfaces.excel.IExcelCell |
| com.mendix.modules.exportmanager.excel.ExcelColumn | com.mendix.modules.exportmanager, .interfaces.excel.IExcelColumn |
| com.mendix.modules.exportmanager.excel.ExcelGrid | com.mendix.modules.exportmanager, .interfaces.excel.IExcelGrid |
| com.mendix.systemwideinterfaces.core.Feedback | com.mendix.systemwideinterfaces.core.IFeedback |
| com.mendix.core.conf.ConfigurationImpl | com.mendix.core.conf.Configuration |

### Removed InternalCore:

| Interface Name | Alternative Class |
| --- | --- |
| com.mendix.core.component.InternalCore | com.mendix.Core |

### Removed Constants:

| Class Name | Alternative |
| --- | --- |
| com.mendix.systemwideinterfaces.HandlerConstants | - |
| com.mendix.systemwideinterfaces.SystemModuleConstants | - |
| com.mendix.core.conf.CoreConstants | - |
| com.mendix.core.conf.AdminActionConstants | - |
| com.mendix.core.conf.Tokens | - |
| com.mendix.externalinterface.connector.RequestHandler.XAS\_SESSION\_ID| *Used in RequestHandler:* com.mendix.externalinterface.connector.RequestHandler.getSessionCookieName()<br> *Used as a constant:* com.mendix.core.Core.getConfiguration.getSessionIdCookieName() |

### Other Classes/methods:

| Class Name | Alternative |
| --- | --- |
| com.mendix.core.conf.ConfigValueChecker | -  |
| com.mendix.core.conf.UserPermissions  | -  |
| com.mendix.core.conf.CertificateProcessor | - |
| com.mendix.core.conf.HashAlgorithmType | - |
| com.mendix.systemwideinterfaces.connectionbus.ConnectionBusException | - |
| com.mendix.systemwideinterfaces.connectionbus.DBMSType | - |
| com.mendix.systemwideinterfaces.connectionbus.JDBCDataStoreConfiguration | -  |
| com.mendix.systemwideinterfaces.core.IMendixEnum | com.mendix.core.objectmanagement.member.MendixEnum |

| Method Name | Alternative |
| --- | --- |
| com.mendix.core.conf.Configuration.registerConfigurationSetting(String name, String defaultValue) | - |
| com.mendix.core.conf.Configuration.getValue(String name) | - |
| com.mendix.core.conf.Configuration.setValue(String name, String Value) | - |
| com.mendix.core.conf.Configuration.updateConfiguration(JSONObject params, boolean overwrite) | - |
| com.mendix.core.conf.Configuration.getUploadedFilesPath() | - |
| com.mendix.core.conf.Configuration.useLDAPAuthentication() | - |
| com.mendix.core.conf.Configuration.getReadCommittedSnapshot() | - |
| com.mendix.core.conf.Configuration.getMaxThreadsPerDataStoreRequest() | - |
| com.mendix.core.conf.Configuration.getLogMinDurationQuery() | - |
| com.mendix.core.conf.Configuration.mustReturnOnlyNecessaryDDLCommands() | - |
| com.mendix.core.conf.Configuration.setReturnOnlyNecessaryDDLCommands(boolean returnOnlyNecessaryDDLCommands) | - |
| com.mendix.core.conf.Configuration.getConstantValue(Object component, String key) | - |
| com.mendix.core.conf.Configuration.getDefaultHashAlgorithm() | - |
| com.mendix.systemwideinterfaces.core.meta.IMetaObject.getComponent() | - |
| com.mendix.systemwideinterfaces.core.ISession.getComponent() | - |
| com.mendix.modules.exportmanager.excel.ExcelExporter.generateWorkbook(<br> LocalComponent component,<br> IContext context,<br> List<IExcelGrid> grids) | - |
| com.mendix.modules.exportmanager.excel.ExcelExporter.generateXLS(<br> com.mendix.core.component.LocalComponent component,<br> IContext context,<br> IMendixObject fileObject,<br> String fileName,<br> List<IExcelGrid> grids) | com.mendix.modules.exportmanager.excel.ExcelExporter.generateXLS(<br> IContext context,<br> IMendixObject fileObject,<br> String fileName,<br> List<IExcelGrid> grids) |
| com.mendix.modules.exportmanager.excel.ExcelExporter.generateXLS(<br> com.mendix.core.component.LocalComponent component,<br> IContext context,<br> IMendixObject fileObject,<br> String fileName,<br> List<String> oqlQueries,<br> boolean autoSizeColumns,<br> List<String> headerNames) | com.mendix.modules.exportmanager.excel.ExcelExporter.generateXLS(<br> IContext context,<br> IMendixObject fileObject,<br> String fileName,<br> List<String> oqlQueries,<br> boolean autoSizeColumns,<br> List<String> headerNames) |
| com.mendix.systemwideinterfaces.core.IContext.setCurrentIdentifier(IMendixIdentifier currentIdentifier) | - |
| com.mendix.systemwideinterfaces.core.IContext.setContextObjects(List<IMendixIdentifier> contextObjects) | - |
| com.mendix.systemwideinterfaces.core.IContext.setSudo(boolean sudo) | - |
| com.mendix.systemwideinterfaces.core.IContext.getSudoContext() | com.mendix.systemwideinterfaces.core.IContext.createSudoClone() |

### Constructors:

| Constructor Name | Alternative |
| --- | --- |
| com.mendix.systemwideinterfaces.core.UserActionListener(<br>com.mendix.core.component.LocalComponent component,<br> Class\<T> targetClass) | com.mendix.systemwideinterfaces.core.UserActionListener(Class\<T> targetClass) |

## Deprecated classes/methods in Mendix 7.

| Method Name | Alternative |
| --- | --- |
| com.mendix.core.Core.getActiveSession(String userName) | use xpath query on session table instead. |
| com.mendix.core.Core.getActiveSessions() | use xpath query on session table instead. |
| com.mendix.core.Core.exportStream(<br> IContext context,<br> String exportMappingName,<br> IMendixObject objectToExport,<br> Boolean shouldValidate) | com.mendix.core.integration().exportStream(<br> IContext context,<br> String exportMappingName,<br> IMendixObject objectToExport,<br> Boolean shouldValidate) |
| com.mendix.core.Core.importStream(<br> IContext context,<br> InputStream stream,<br> String importMappingName,<br> IMendixObject mappingParameter,<br> Boolean shouldValidate) | com.mendix.core.integration().importStream(<br> IContext context,<br> InputStream stream,<br> String importMappingName,<br> IMendixObject mappingParameter,<br> Boolean shouldValidate) |

## Compilation issues when migrating a project to 7.

Removal of deprecated classes and methods in Mendix 7 can cause compilation errors after migration. Please use the provided alternative for the removed deprecated code.

### SystemModuleConstants
These are mainly used to refer to the name of System entities or such entities' attribute names. Such names are also available via corresponding System proxies.
For instance **SystemModuleConstants.FILE_DOCUMENT_NAME** can be replaced by **FileDocument** proxy:
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

## Runtime issues when migrating a project to 7.

In Mendix 7 libraries shipped with the installation package are not available for projects anymore. While this results in a better dependency management
for each project, it can also cause errors at runtime after migration e.g. **NoClassDefFoundError**. Therefore, it's important to make sure that the **userlib**
directory of the migrated project includes all the required libraries. It's also worth to mention that in Mendix 7 only one version of each library can exist at runtime.
This means if there are multiple versions of one library the latest version is picked up and the rest are evicted.
