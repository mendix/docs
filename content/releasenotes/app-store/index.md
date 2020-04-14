---
title: "App Store"
description: "Release notes for updates to the Mendix App Store"
tags: ["app store", "connector", "module", "add on", "widget"]
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

These release notes cover changes made to the [Mendix App Store](/appstore/index).

## 2020

### April 7th, 2020

#### Security Fix Needed for App Store in Studio Pro/Desktop Modeler {#private-fix}

Downloading [private content](/appstore/general/share-app-store-content#private-app-store) from the App Store available in Studio Pro/Desktop Modeler has been temporarily disabled due to a security vulnerability.

You will be able to download private content from the App Store available in Studio Pro/Desktop Modeler again once a fix is released in a future [8.x](../studio-pro/8), [8.6.x](../studio-pro/8.6), and [7.23.x](../studio-pro/7.23) release. This functionality will then only be available in those specific versions with the fix and subsequent versions. This functionality will not be available again for the App Store in Desktop Modeler version [6](../studio-pro/6).

You can continue downloading the latest version of private App Store content from the [Company Content](/appstore/general/app-store-overview#company-content) page in the [Mendix App Store](https://appstore.home.mendix.com/) and use it in the respective versions of Studio Pro/Desktop Modeler.

### February 26th, 2020

#### Improvement

We have updated the single sign-on functionality in the App Store to use the latest [Mendix SSO](/developerportal/deploy/mendix-sso). Now, the first time you visit any App Store page requiring authentication, you will see a screen asking you to authorize access to your Mendix account. Click **Authorize** to continue.

## 2019

### November 14th, 2019

#### Content Support Update

We are invested in maintaining Mendix App Store content to make it easier for you to find and use the widgets and modules that you need. To that end, we have cleaned up old App Store content where Mendix support is no longer possible and changed the support level from **Platform support** to **Community support**.

For more information on these support levels, see [App Store Content Support](/appstore/general/app-store-content-support).

### November 6th, 2019

#### Improvement

You can now subscribe to receive emails when new versions of your [favorite](/appstore/general/app-store-overview#favorites) App Store content are published.

### October 23rd, 2019

#### New Features

You can now create [user groups](/appstore/general/app-store-overview#user-groups) for your company and assign your company’s App Store content to different groups. Management of user group content is restricted to only the members of the group. You can also add [guest](/appstore/general/app-store-overview#guests) users to these groups and allow them to download selected private company content.

The former App Store **Content Managers** and **External Downloaders** groups have been removed. Members of these groups have been migrated to a new temporary user group called **Migrated Data**. Former “content managers” have been added as user group [members] (/appstore/general/app-store-overview#members), and former “external downloaders” have been added as [guests](/appstore/general/app-store-overview#guests).

Content that was marked as **Protected** as well as content marked as **Shared with Others** has been migrated to the [Content](/appstore/general/app-store-overview#content) tab of the Migrated Data user group. This makes all “externally shared” content protected for that user group.

### October 1st, 2019

#### Improvement

We now display the UUID of an App Store component in the [Additional Info](/appstore/general/app-store-overview#additional-info) section of its details page. This allows you to specify the `TemplateUUID` when calling the [CreateNewApp operation](/apidocs-mxsdk/apidocs/projects-api#createnewapp) in the *Projects API*.

### September 11th, 2019

#### Improvement

We added the flexibility to label your App Store content with a [custom version number](/appstore/general/share-app-store-content#updating).

{{% alert type="info" %}}This is based on an [upvoted idea from Andreas Blaesius](https://forum.mendixcloud.com/link/ideas/1324) submitted to the [Mendix Idea Forum](https://forum.mendixcloud.com/index4.html). Thanks, Andreas!{{% /alert %}}

### August 30th, 2019

#### SAP Connector Renaming

We renamed all the SAP-related connectors and app templates in the App Store to be consistent. The changes are:

 Type | Old Name | New Name |
 ----- | ----- | -----|
 Connector | SAP Cloud Platform XSUAA Connector | XSUAA Connector for SAP Cloud Platform |
 Connector | SAP Fiori UI Package | UI Package for SAP Fiori themed apps |
 Connector | SAP Leonardo Machine Learning Foundation Connector | Connector for SAP Leonardo Machine Learning Foundation |
 Connector | SAP OData Connector | OData Connector for SAP solutions |
 Connector | SAP OData Model Creator | OData Model Creator for SAP solutions |
 App Template | Fiori Blank | Blank App for SAP Fiori themed apps |
 App Template | SAP Northwind OData | Northwind OData Service Master-Detail App for SAP solutions |
 App Template | SAP Purchase Order Approval Tutorial | Purchase Order Approval Tutorial for SAP solutions |

### August 26th, 2019

#### SAP OData Connector Improvements & Fixes

* We updated the **SAP OData Connector** to support the **Edm.Int64** data type. (Ticket 87284)
* We also fixed a *java.net.SocketException: Broken pipe (Write failed)* exception which occurred when sending a large request to the OData service endpoint. (Ticket 86680)

### July 31st, 2019  

#### Improvements 

* We simplified the options available for formatting the Documentation section when creating new App Store content.
* We made it possible to upload images into the Documentation editor - you can drag and drop an image from your file explorer into the editor, or link to images via URL (Copy + Paste does *not* work due to browser inconsistencies).
* We made some user changes and improvements when you create new content using GitHub as the source. For example, an easier-to-use selection screen when choosing your repository.  
* We also made some other minor bug fixes. 

### July 5th, 2019

#### SAP Logging Connector Updates

* We updated the **SAP Logging Connector** to allow the log level to be set via a constant instead of an enumeration. This means that you can change the log level with a restart, without needing to fully redeploy your app.
* We also solved an issue where the SAP Logging Connector had conflicts with the Community Commons module.

### June 28th, 2019

#### SAP Logging Improvement

We added a component in the App Store which, when configured in your app, allows you to use the logging format supported by SAP Kibana. For more information, see [SAP Logging Connector](/partners/sap/sap-logger).

### June 6th, 2019

#### Improvements

* We fixed the issue with selecting specific app templates when creating a new app in Mendix Studio Pro (Desktop Modeler).
* We fixed the problems with deep links for private apps.

### April 29th, 2019

#### Improvements

* We created a new App Store menu structure, so it is now easier to navigate through your created content. If you are a [Company Admin](/developerportal/company-app-roles/manage-roles#app-store-manager) with certain permissions, you will see additional menu items to help you manage private and public company content.
* For App Store administrators, you can now set content managers who are allowed to manage your company content by marking it as protected.
* You can now share private App Store content with external downloaders from other companies.

### February 15th, 2019

#### SAP OData Connector Improvements & Fixes

* We now throw an error which you can catch in a microflow if the destination does not exist, or the app is running locally. Previously the error could not be caught.
* We fixed some typos in the OData Connector actions.
* We now provide OData Connector support for Mendix apps which use Oracle DB as their database.

### January 24th, 2019

#### IBM Watson Connector Suite Improvements

* We released an upgraded version of the [IBM Watson Connector Suite](https://appstore.home.mendix.com/link/app/2860/), which supports IBM Watson SDK version 6.11.0 and adds additional microflow actions.
* We released an upgraded version of the [IBM Watson Connector Suite Example Project](https://appstore.home.mendix.com/link/app/2880/), which includes the new IBM Watson Connector Suite.
* We released an upgraded version of the IBM Watson Blank App app template, which includes the new IBM Watson Connector Suite.
* For more information see [IBM Watson Connector](https://docs.mendix.com/partners/ibm/ibm-watson-connector).

### January 21st, 2019

#### Fix

The **Reviews** section at the bottom of the [App Store main page](https://appstore.home.mendix.com/index3.html) presents the latest published user reviews. We fixed an issue where clicking on a user's name to view their profile caused an internal server error. You will now be redirected to the expected user.

## 2018

### December 17th, 2018

#### Improvement

We have noticed that when searching in the App Store (via the **Search Mendix** search bar), users frequently use keywords like **Mendix**, **Modeler**, **Desktop**, and **Download** as well as different Desktop Modeler versions. The search results did not provide the expected results based on these keywords (as in, they did not show the Modeler download page). With this update, it is now possible to search for the Modeler and all of its versions in the **Search Mendix** search bar, which will redirect you to the [Desktop Modeler page](https://appstore.home.mendix.com/link/modelers/) in the Mendix App Store.

### October 1st, 2018

#### SAP OData Connector Version 4.0.0

This version of the [SAP OData Connector](https://appstore.home.mendix.com/link/app/74525/) allows you to use the destination services of SAP Cloud Platform. This simplifies configuration, authentication and endpoint management when integrating your application, running in SAP Cloud Platform, with SAP backend services. See [SAP Destination Service](/partners/sap/sap-destination-service).

The following authentication types are currently supported in SAP Destination Services:

* PrincipalPropagation authentication and ProxyType on-premise (Connectivity Service/Cloud Connector/On premise backend)
* Oauth2SALMAssertion authentication (For Neo Platform apps)
* Basic and None authentication for public backends

#### SAP Leonardo Machine Learning Foundation Connector Version 1.0.0

This new connector allows you to consume Leonardo Machine learning services from both API Business Hub and SAP Cloud Platform by adding activities to your Mendix model.

The SAP Leonardo Machine Learning Foundation Connector is available in the App Store here: https://appstore.home.mendix.com/link/app/107221/.

#### SAP Fiori Styling

The existing SAP Blank app template has been replaced by a new Fiori Blank app template. This new Fiori Blank app template has a new Fiori UI Package included. This is based on Atlas UI, which means that you can use either the Web Modeler or Desktop Modeler to build applications which give the Fiori UI experience.

#### Breaking Change

The new **SAP OData Connector** will break existing projects which are using the SAP Cloud Connector. The SAP OData Connector no longer supports the “Use Cloud Connector” attribute. This is now embedded in the destination service configuration. See [SAP Destination Service](/partners/sap/sap-destination-service) for more details.

## 2017

### June 21st, 2017

Private company App Store content is now indicated in the **Template** browser with a lock icon.
