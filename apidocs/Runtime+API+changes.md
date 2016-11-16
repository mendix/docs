---
title: "Runtime API changes"
space: "API documentation"
category: "Moving From 6 to 7"
---
Below is the list of API deprecations in 6.8 as well as migration solution when it's applicable.

Deprecated classes/methods will be removed in Mendix 7.

## Deprecated classes for which interfaces exist:

| Class Name | Alternative Interface |
| --- | --- |
| com.mendix.modules.exportmanager.excel.ExcelCellStyle | com.mendix.modules.exportmanager, interfaces.excel, .IExcelCellStyle |
| com.mendix.modules.exportmanager.excel.ExcelCell | com.mendix.modules.exportmanager, .interfaces.excel, .IExcelCell |
| com.mendix.modules.exportmanager.excel.ExcelColumn | com.mendix.modules.exportmanager, .interfaces.excel, .IExcelColumn |
| com.mendix.modules.exportmanager.excel.ExcelGrid | com.mendix.modules.exportmanager, .interfaces.excel, .IExcelGrid |
| com.mendix.systemwideinterfaces.core.Feedback | com.mendix.systemwideinterfaces.core.IFeedback |
| com.mendix.core.conf.ConfigurationImpl | com.mendix.core.conf.Configuration |

## Deprecated InternalCore:

| Interface Name | Alternative Class |
| --- | --- |
| com.mendix.core.component.InternalCore | com.mendix.Core |

## Deprecated classes/methods with no reason to keep as part of API:

### Deprecated Constants:

| Class Name | Alternative |
| --- | --- |
| com.mendix.systemwideinterfaces.HandlerConstants | - |
| com.mendix.systemwideinterfaces.SystemModuleConstants | - |
| com.mendix.core.conf.CoreConstants | - |
| com.mendix.core.conf.AdminActionConstants | - |
| com.mendix.core.conf.Tokens | - |

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

| Method Name | Alternative |
| --- | --- |
| com.mendix.core.conf.Configuration.getDefaultHashAlgorithm() | - |
| com.mendix.systemwideinterfaces.core.meta.IMetaObject.getComponent() | - |
| com.mendix.systemwideinterfaces.core.ISession.getComponent() | - |
| com.mendix.modules.exportmanager.excel.ExcelExporter., generateWorkbook(LocalComponent component, IContext context, List<IExcelGrid> grids) | - |
| com.mendix.core.callWebservice() | use microflow action `Call REST Action` to do HTTP Post |
