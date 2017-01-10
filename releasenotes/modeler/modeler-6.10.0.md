---
title: "Modeler 6.10.0"
space: "Release Notes"
category: "Modeler"

---
***Date: October 31, 2016***

{% modelerdownloadlink 6.10.0 %}

## Region toggle settings moved

The left and right layout regions have long been—for lack of a better word—toggleable. This means that you can configure them to pop in and out of view using a sidebar toggle button. While working on this feature recently, we realized the settings that governed this behavior made no sense. For example, to configure the visibility settings for a _region_, you had to edit the settings for the _button_.

We've taken the liberty of correcting this blemish by removing the **Region**, **Mode**, and **Initially** open settings from the sidebar toggle button properties. The scroll container region itself now has the new **Toggle** mode setting, which combines the Mode and Initially properties that were removed.

## Conditionally invisible DOM node changes

We have properly removed the nodes from the document object model (DOM) when they are conditionally invisible. Previously, when a node was hidden by conditional formatting, we made the node invisible but kept it in place. This had a number of disadvantages. For example, child pseudo-class selectors like `:first-child` still targeted the nodes that were hidden, which broke the styling. Another disadvantage was that widgets that were hidden were still checked for validation errors. This meant that a required-but-hidden input field could prevent the page from being saved.

We fixed these issues by actually **removing** **nodes** from the document when they are not visible due to conditional formatting. This has the additional benefit that it improves performance for pages that use conditional formatting, as hidden nodes no longer pollute the DOM and slow down the browser. (Ticket 38955)

## Hybrid app improvements

In order to take advantage of the new features and fixes in the hybrid app, you will need to republish your application.

### No more disappearing content and flickering pages when scrolling

A hybrid app runs with a component called a webview, which is the native webview from the platform on which the hybrid app is running. On iOS, there are two webviews available: `WKWebView`, which is the webview also used by the Safari browser, and the older `UIWebView`, which is used by the hybrid apps on iOS. `WKWebView` is the new and improved `UIWebView`, as it has superior performance but it also solves some nasty browser bugs that caused white screens and flickering.

The great news is that it is now possible to use `WKWebView` in hybrid apps as well. You need to configure this manually in the hybrid app. First, you need to download the PhoneGap build package for your app in the publish step. Then you add the following preference above or below the existing preferences in the _config.xml_ within this package: 

`<feature name="CDVWKWebViewEngine">`
`     <param name="ios-package" value="CDVWKWebViewEngine" />`
`</feature>`

You also need to add the following plugin below the other plugins in the file:

 `<gap:plugin name="cordova-plugin-wkwebview-engine-nextgen" source="npm" version="1.0.1" />`

With these changes in _config.xml_, your app will run on the superior `WKWebView` engine. Make sure you update your custom widgets with the latest version in the Mendix App Store, publish your app, and enjoy the ride! (Tickets 39806, 43665)

#### Custom widget writing notes

With `WKWebView`, there is one feature we cannot support, and that is executing a synchronous `XMLHttpRequest`. If you are using these in your custom widget code, you should rewrite them to asynchronous requests. Synchronous requests are bad for the user experience, and browsers like Chrome are already deprecating them.

There is also a construct within `dojo` that uses synchronous requests, and that is when you use `_TemplatedMixin` with the (deprecated) `templatePath` property. Instead of the `templatePath` property, use the `dojo/text!` syntax instead to load a widget's template. If you are still using the `templatePath` construct, this will result in an "Error: Invalid template" message.

### Swiping to navigate to the previous page

You can now swipe to navigate back to the previous page with hybrid apps on iOS. Note that swiping to go forward in history does not work.

### Autologin token

We fixed the issue in which the hybrid app on Android was closed with the device back button, the autologin token was removed, and the user had to provide credentials again when the app was restarted.

### Other Fixes

*   We fixed saving objects in an offline hybrid app when there are multiple data views in a single form and not all the objects in the data views have been changed.
*   We fixed the error that occurred when canceling a form with an object that was just created in an offline hybrid app.

## Validations not showing

Widgets with read-only style set to "Control" now display validation messages again. This was broken in 6.9.x. (Tickets 46018, 46242, 46412)

## Reporting

We decided it was time to blow some dust off the old beloved reporting module in Mendix.

First, you no longer need to use **report panes**. Actually, we took the liberty of removing them all from your projects. Second, we renamed the **reporting widgets** to align them with other platform conventions. So, the "Basic Report" is dead, long live the "Report Grid" (as well as "Report Parameter" and "Report Date Parameter")! Third, we simplified the **configuration** of reports. Now you can use the connector for all reporting widgets, and the properties have been cleaned up. Last but not least, we fixed a lot of bugs: the report chart that was not respecting parameters, the report parameter that was broken when a corresponding report was nested in the table, multiple reports on one page that were conflicting with each other, etc. (Tickets 43704, 44276, 38358)

We also enabled configuring **multiple report buttons** on one page, just because we can.

To add a bit of sadness to this positive list, we are announcing that the **report chart widget** has been deprecated and is scheduled for removal in Mendix 8\. Bye-bye, good, old, last flash widget!

## IBM DB2 support

IBM DB2 11.1 and IBM DashDB are now officially supported. For prerequisites and known issues, see [DB2](https://docs.mendix.com/refguide6/DB2) in the Mendix Reference Guide. 

## PostgreSQL 9.6 support

PostgreSQL 9.6 is now officially supported. We dropped support for PostgreSQL 9.1. We upgraded the PostgreSQL JDBC driver from version 9.4-1208 to 9.4-1211.

## Performance improvements

We improved the initial page load speed by significantly reducing both the number of static resources requested and the size of these files. This is especially noticeable in mobile applications.

## Productivity improvements

Do you enjoy the moment when your pages are automatically reloaded in the browser after you redeploy your running app? We love this feature. In fact, we love it so much that we decided to take it one step further – now it works in the cloud with free apps! You're welcome.

We have introduced a **Description** field for each Java Action parameter in the Mendix Modeler, which can be used to provide additional information about the parameter to the users of the Java Action.

If something goes wrong while instantiating a custom widget, you used to only get a short description of the exception. Now, the full stack trace is available. This will make debugging your custom widget a lot easier. (Ticket 44090)

For users who have .NET framework 4.5.2 or higher installed on their machine, we have enabled **High DPI Improvements** in the .NET framework. High DPI Improvements is a built-in feature to enable resizing according to the system DPI settings for several glyphs or icons of some controls. This will further improve the experience of running the Modeler on high-resolution screens.

## REST call action

We have improved support for storing binary content. You can now specify the type of entity you wish to store the binary content in when storing the response of a REST call in a file document. This entity should inherit from _System.FileDocument_. 

Further, we made some improvements to the handling of JSON in the REST call action. First, we now support string escaping when handling JSON requests and responses (Ticket 44351). We also support this in the JSON structure (Ticket 44351). Second, we fixed the issue with importing from JSON when the JSON objects are ordered differently in the imported JSON and the JSON structure used in the import mapping (Ticket 44858). Third, we fixed the issue in which the passed import mapping parameter in REST call actions was always empty (Ticket 45461). Finally, we fixed the name of the JSON export and the JSON import log nodes.

## Other fixes

*   We fixed the issue in which autocommitted objects were incorrectly garbage-collected when they did not have a reference to an object that was still active in the web client. This caused them to not be cleaned up on the session destroy if they were not actually committed during the session. (Ticket 44738)
*   We made sure large files are not read into the server memory upon web client file upload. This makes the behavior equal to how it was before Mendix 6.8.0 (when this change was introduced).
*   We fixed the issue in which deprecation warnings for legacy APIs were no longer displayed by the client. This means that you might notice deprecation warnings in your custom widgets that were not present before. Please treat these warnings seriously.
*   We fixed the default name of the drop-down button so you won't get an error when creating it.
*   We fixed the issue in the Modeler in which exceptions could occur after opening a Java Action with an Object return type.
*   We fixed the issue in which sorting in descending order in a data grid was very slow. Note that sorting behavior may have changed for descending sorting. Now, if record values are the same in the sorting column, a secondary sorting is applied in the reverse order. For example, records previously sorted as [Z,1] [Z,2] [Y,1] are now sorted as [Z,2] [Z,1] [Y,1]. Note the difference between the first records, which are reversed. (Ticket 38105)
*   We fixed the issue in which `%EndOfCurrentDay%` expressions in XPath were not evaluated correctly. (Ticket 38125)
*   We fixed the issue in which having an entity with the same name as a built-in Java data type (for example, "String") could cause problems in the generated proxy classes. (Ticket 44258)
*   We fixed the issue in which conditionally invisible widgets were displaying empty and null values if the user didn't have permissions on the object or value being shown. (Ticket 45295)
*   We fixed the issue in which a user logged in from multiple browsers when "multiple sessions per user" was set to "no" and got infinite reloads in the first browser instead of the login screen. (Ticket 38241)
*   We fixed the issue in data views that prevented content from being refreshed by a wrapping widget. For example, if you had a data view inside a template grid, widgets nested in it wouldn't be refreshed when the next page of the template grid was opened. (Ticket 44649)
*   We fixed the issue with changes in non-localized date-time fields being ignored when the difference between the old and new values is equal to the time zone offset. (Ticket 41626)
*   We fixed the problem in which changing the location or timeout setting of a consumed app service threw an error. (Ticket 43718, 43758)
*   When a user is blocked and a login attempt is tried, we now log a warning instead of an info, as it can potentially be a hacker. (Ticket 41961)
*   The form save event was not published anymore, so when a custom was listening on this event this was never triggered. We fixed this and made listening on save events backwards compatible. The save event is now deprecated and should be replaced by the submit event. (Ticket 45984)

## Deprecation warnings

The following interfaces, enums, methods, and fields have been deprecated and will be removed in the next major release of Mendix:

*   `Configuration.getDataStoreConfiguration()`
*   `Configuration.getBuiltInDatabasePath()`
*   `Configuration.getDatabaseName()`
*   `Configuration.getReadCommittedSnapshot()`
*   `Configuration.getMaxThreadsPerDataStoreRequest()`
*   `Configuration.getLogMinDurationQuery()`
*   `Configuration.mustReturnOnlyNecessaryDDLCommands()`
*   `Configuration.setReturnOnlyNecessaryDDLCommands(boolean)`
*   `IDataRow.getPrimaryKeyValue()`
*   `IDataTable.createRow()`
*   `IDataTableSchema.getName()`
*   `AggregateFunction enum`
*   `IMetaAssociationSchema interface`
*   `IRetrievalSchema.getAssociationDepth()`
*   `IRetrievalSchema.setAssociationDepth(int)`
*   `IRetrievalSchema.copyFrom(IRetrievalSchema)`
*   `ResultType enum`
*   `IGetRequest.getResultType()`
*   `IGetRequest.setResultType(ResultType)`
*   `IGetRequest.isSecurityDisabled()`
*   `IGetRequest.setSecurityDisabled(boolean)`
*   `IGetRequest.getAccessRightsToRetrieve()`
*   `IGetRequest.mustRetrieveAllAccessRights()`
*   `IGetRequest.READ_ACCESS`, `WRITE_ACCESS`, `CREATE_ACCESS, DELETE_ACCESS, FULL_ACCESS`
*   All methods that have been documented as "For internal use only"