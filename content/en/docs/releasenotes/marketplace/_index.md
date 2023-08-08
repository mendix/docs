---
title: "Marketplace"
url: /releasenotes/marketplace/
description: "Release notes for updates to the Mendix Marketplace"
tags: ["marketplace", "connector", "module", "add on", "widget"]
weight: 35
aliases:
    - /releasenotes/app-store/index.html
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

These release notes cover changes made to the [Mendix Marketplace](/appstore/).

## 2023

### August 5, 2023

#### Improvements

* Categories are now **Content Types**. We have reduced the number of Content Types and made them consistent across the platform. Visit the [Marketplace Guide](/appstore/general/app-store-overview/) to learn more about the different Content Types available.
* Subcategories have been replaced with **Categories**. You can select between one and three Categories per component. Categories can be used by Marketplace consumers to filter on content and find the right component for their use case.

### June 29, 2023

#### New Features

* You can now configure your own [proprietary license](/appstore/general/share-app-store-content/#proprietary-license) when creating a new public component. The license will be reviewed by Mendix alongside the review of the component. After the license has been approved, you and anyone within your organization can use the license for other components. 

### May 25, 2023

#### New Features

* You can now reassign a draft to yourself if you have edit rights for the Marketplace component. The draft will be unassigned from the previous owner. This allows you to continue working on a Marketplace listing, even when your colleague is out of office.

#### Improvements

* *.mpk* files are now uploaded asynchronously in the flow for adding Marketplace content, which means that you can continue to go through the onboarding wizard while the upload is in progress.
* We aligned the Marketplace UI with the rest of the Mendix Platform.

#### Fixes

* We fixed an issue with the notifications that are sent when a component update becomes available.
* If a user's email address contained an upper-case letter, they did not have access to private components in [content groups](/appstore/general/app-store-overview/#content-groups). This issue has been fixed.

### April 20, 2023

#### New Features

* You can now filter Marketplace content for **Public** or **Private** components via the **Visibility** filter.

#### Improvements

* The **Compatibility** filter now only allows for major Mendix versions.
* The **Support** section of the [component details page](/appstore/general/app-store-overview/#details) now includes a link to [Marketplace Content Support](/appstore/general/app-store-content-support/).

### March 23, 2023

#### New Features

On top of open-source community-supported content, we are introducing an additional layer of support through our [Mendix Component Partner program](/appstore/creating-content/partner-program/). Partner members can now bring their components to the Mendix Marketplace under terms that guarantee full support to customers:

* Partners are free to select an existing open-source license, or they can select a commercial option with the corresponding license and present that.
* Partners commit to providing support to customers under an SLA (meaning, under terms specified by the partner). Customers can rely on this SLA for support if something goes wrong. A partner-supported [component details page](/appstore/general/app-store-overview/#details) contains a reference to the partner's support portal or the partner's support contact email.

You can find and use partner-supported components on the [Marketplace homepage](https://marketplace.mendix.com/) under **From our partners** and by selecting the [Partner](/appstore/general/app-store-content-support/#category) **Support** level in the search box. A partner-supported component details page has an explicit indicator (a crown), which makes it easy to distinguish from community-supported content.

## 2022

### October 25, 2022

#### New Features

We are excited to bring new changes to the Mendix Marketplace and improve access to Marketplace content in Studio Pro for our community. The new revamp of the Marketplace in Studio Pro presents a better UI with easier navigation, better search functionality, a faster content-discovery experience, and more control over category and filters. We have also included new filter that helps you select **Platform-supported content**. 

The new view helps you to browse through Marketplace components and view component details more quickly, just as you can in the online Marketplace. 

Finally, we introduced UI changes for pagination and points of entry to the Marketplace for a better user experience.

For more information, see [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/).

{{% alert color="warning" %}}
If you are using Studio Pro on a Mac with Parallels, see [this update](https://kb.parallels.com/112091#section7) for improving the loading time of Marketplace in Studio Pro.{{% /alert %}}

### August 27, 2022

#### Improvements

* We have added the **My Drafts** page, where you can access component drafts. We have also extended the actions you can perform on drafts. For more information, see the [My Drafts](/appstore/general/app-store-overview/#my-drafts) section of *Marketplace Overview*.

### August 11, 2022

#### New Features

* We have introduced a content curation feature, which allows Mendix Admins to curate Marketplace content for Studio. Mendix Admins can do the following from the **Marketplace Content** page in Control Center:
    * Limit available public Marketplace content in Studio
    * Approve and hide private Marketplace content in Studio

### March 24, 2022

#### Improvements

* We have made changes related to ad-hoc versioning and are now able to support more flexible version numbers as you create components. This means you can also publish components with version numbers that are backward-compatible.

### February 24, 2022

#### New Features

* There are now user trials available for **Premium** app services, such as Email Service and Speech to Text. This self-service experience helps you to evaluate the capabilities offered with these components and realize the value of premium content.
* User trial subscriptions are now listed under [My Subscriptions](/appstore/general/app-store-overview/#my-subscriptions), and company trial and paid subscriptions are now listed under [Company Subscriptions](/appstore/general/app-store-overview/#company-subscriptions).
* For new uploads of public components, you can now optionally share a [virus scan report](/appstore/general/share-app-store-content/#package) to speed up the governance process.
* For solutions and solution templates, you can now add a [use case](/appstore/general/share-app-store-content/#capabilities) relevant to the component. The use case is displayed in the component listing and includes header text and an external link.

#### Improvements

* We made performance improvements for when a large source file is [uploaded](/appstore/general/share-app-store-content/#package), specifically on the navigation steps.
* We improved the UI for self-service uploading your component to the Marketplace.

### February 10, 2022

#### Improvements

* When you onboard a component now, the maximum number of screenshots is restricted to ten.
* You can use form validations now when you navigate between steps during onboarding.

#### Fixes

* We fixed an issue with the logo cropper. Now the ratio of a cropped image is 600 x 420 pixels.

## 2021

### December 16, 2021

#### Improvements

* We now support using rich text for your [component description](/appstore/general/share-app-store-content/#general).

### November 18, 2021

#### New Features

* We released **Try for Free** for premium app services (like [Email Service](https://marketplace.mendix.com/link/component/118393)).
* You can now provide key capabilities, a banner, external links, and industry cloud details when sharing new **Solution** and **Solution Template** [component types](/appstore/general/share-app-store-content/#adding).

#### Improvements

* You can now add [release notes](/appstore/general/share-app-store-content/#package) for your new component version without uploading a new source file.
* You can now skip uploading a source file on the [Package](/appstore/general/share-app-store-content/#package) page for **App Service** and **Solution Template** component types if your component is not downloadable.

### September 7, 2021

#### New Features

* Marketplace filtering has been revamped. You can now find content faster by filtering by **Industry**, [Content Type](/appstore/general/app-store-overview/#types), and Studio Pro **Compatibility**. 
* We have made 15+ fully developed solutions and 10+ solution templates available to help you realize value even more quickly.
* We have listed 10+ **Premium** app services, and we now support a self-service [subscription](/appstore/general/app-store-overview/#company-subscriptions) experience using credit card for two app services in supported regions.

### August 12, 2021

#### Improvements

* We have replaced the **Download** button with the **Start with Template** button for the **Create New App** category.

### July 29, 2021

#### New Features

* We have implemented a UX refresh of [My Marketplace](/appstore/general/app-store-overview/#my-marketplace) to be in-line with other Marketplace pages.

### June 3, 2021

#### Fixes

* We fixed a bug in Studio Pro where certain components did not load properly.

### May 31, 2021

#### Improvements

* When [adding new Marketplace content](/appstore/general/share-app-store-content/#adding), you can now only set the **Category** in the initial version of your content. You cannot change this setting by updating the content later.
* When you create a new component in the **Solutions** category, you will not be able to upload a source file, as solutions will no longer have downloadable content.
* We have started supporting rich characters in the message describing what needs to be changed in your content for approval via the steps on the [Publish](/appstore/general/share-app-store-content/#publish) page.

#### Fixes

* We fixed some bugs in the flow for adding new Marketplace content.

### May 28, 2021

#### New Features

* We released support for the subscription to an app service (like [MindSphere IIoT for Makers](/partners/siemens/mindsphere-app-service/)):
    * Automatic provisioning of the app service on subscription.
    * The [Service Management Dashboard](/appstore/general/app-store-overview/#company-subscriptions), where you can view the service instance to which you have subscribed and generate binding keys for your service instance.

### May 4, 2021

#### Fixes

* <a id="windows-service"></a>We fixed the issue with downloading the Windows Service. 
* We fixed a minor bug for anonymous users.

### April 7, 2021

#### Improvements

* We added a section to **Get Studio Pro** for downloading versions that have [long-term support (LTS)](/releasenotes/studio-pro/lts-mts/#lts) and [medium-term support (MTS)](/releasenotes/studio-pro/lts-mts/#mts).

    {{% alert color="info" %}}This is based on an [upvoted idea from Alexander Keßler](https://forum.mendixcloud.com/link/ideas/2212) submitted to the [Mendix Idea Forum](https://forum.mendixcloud.com/link/ideas). Thanks, Alexander!{{% /alert %}}

#### Fixes

* We fixed some performance issues where certain Marketplace sections were not loading properly. This also includes connection issues to the Marketplace within Studio Pro.

#### Known Issues

* There is an issue with users having trouble downloading Windows Service.
    * Fixed on [May 4th, 2021](#windows-service).

### March 23, 2021

#### Improvements

* We added email notifications for several actions in the Marketplace. You can now receive emails if one of your components has changed, when a published component has received a review, and when you receive a reply to one of your reviews. You can unsubscribe from any of notifications in the [My Marketplace](/appstore/general/app-store-overview/#my-marketplace) section of the of Marketplace.
* Developers can now reply to reviews of their components.

### February 9, 2021

#### Improvements

* You can now download [Windows Service](/releasenotes/studio-pro/windows-service/) and **Server Distribution** for the latest Studio Pro version using the **Related Downloads** button on the **Get Studio pro** page.  
* Adding beta versions for components is no longer supported. Beta versions of published components and existing drafts have been automatically updated to remove the Beta tag.

### January 26, 2021

#### Improvements

* You are now able to download Studio Pro versions marked as [Beta](/releasenotes/beta-features/) from a separate tab on the **Get Studio Pro** page named **Beta Releases**. The default download option (via the **Release Notes** tab) remains the latest stable release of Studio Pro.

#### Fixes

* We fixed some bugs in the [add new Marketplace content](/appstore/general/share-app-store-content/#adding) flow and we made error messages more descriptive.

## 2020

### December 15, 2020

#### Improvements

* The Mendix "App Store" has been renamed to the "Marketplace" as part of the continued investment in new capabilities that is underway. This rename (and URL change) is only for the pages rebuilt so far listed above. Further implementation of this renaming is to follow in future releases.
* We have implemented a UX Refresh to provide a fresh new look and feel for the [Marketplace home](/appstore/general/app-store-overview/#home), [catalog](/appstore/general/app-store-overview/), [component details](/appstore/general/app-store-overview/#details), and Studio Pro download pages.
* We have enabled an enhanced navigation and undertaken some curation of published components to help you discover the components you require more easily.
* We have enabled a more structured wizard-based flow that makes it a lot easier for you to [share new content](/appstore/general/share-app-store-content/) to the Marketplace.

### May 27, 2020

#### Fixes

* As of Studio Pro version [8.10.0](/releasenotes/studio-pro/8.10/#1400), you are able to download private content in the App Store again. This is not possible for Studio Pro versions 8.7–8.9.

### May 6, 2020

#### Improvements

* You can now download previous versions of App Store components from the [Mendix Marketplace](https://marketplace.mendix.com/). This can be done in the **All versions** tab on the component's [details page](/appstore/general/app-store-overview/#details). This can be used as a workaround for not being able to download private content from the App Store available in older versions of Studio Pro/Desktop Modeler due to the [security issue](#private-fix) described below.

#### Fixes

* As of Studio Pro version [8.6.4](/releasenotes/studio-pro/8.6/#private-content), you are able to download private content in the App Store again. This is possible for Studio Pro version 8.6.4 and all further 8.6.x versions. It is not possible for Studio Pro versions below 8.6.4.

### May 4, 2020

#### Fixes

* As of Desktop Modeler version [7.23.14](/releasenotes/studio-pro/7.23/#private), you are able to download private content in the App Store again. This is possible for Desktop Modeler version 7.23.14 and all further 7.23.x versions. It is not possible for Desktop Modeler versions below 7.23.14.

### April 7, 2020

#### Fixes {#private-fix}

* Downloading [private content](/appstore/general/share-app-store-content/#private-app-store) from the App Store available in Studio Pro/Desktop Modeler has been temporarily disabled due to a security vulnerability.
    * You will be able to download private content from the App Store available in Studio Pro/Desktop Modeler again once a fix is released in a future [8.x](/releasenotes/studio-pro/8/), [8.6.x](/releasenotes/studio-pro/8.6/), and [7.23.x](/releasenotes/studio-pro/7.23/) release. This functionality will then only be available in those specific versions with the fix and subsequent versions. This functionality will not be available again for the App Store in Desktop Modeler version 6.
    * You can continue downloading the latest version of private App Store content from the [Company Content](/appstore/general/app-store-overview/#company-content) page in the [Mendix Marketplace](https://marketplace.mendix.com/) and use it in the respective versions of Studio Pro/Desktop Modeler.

### February 26, 2020

#### Improvements

* We have updated the single sign-on functionality in the App Store to use the latest [Mendix SSO](/developerportal/deploy/mendix-sso/). Now, the first time you visit any App Store page requiring authentication, you will see a screen asking you to authorize access to your Mendix account. Click **Authorize** to continue.

## 2019

### November 14, 2019

#### Improvements

We are invested in maintaining Mendix Marketplace content to make it easier for you to find and use the widgets and modules that you need. To that end, we have cleaned up old App Store content where Mendix support is no longer possible and changed the support level from **Platform support** to **Community support**.

For more information on these support levels, see [App Store Content Support](/appstore/general/app-store-content-support/).

### November 6, 2019

#### Improvements

* You can now subscribe to receive emails when new versions of your [favorite](/appstore/general/app-store-overview/#saved) App Store content are published.

### October 23, 2019

#### New Features

You can now create [user groups](/appstore/general/app-store-overview/#content-groups) for your company and assign your company’s App Store content to different groups. Management of user group content is restricted to only the members of the group. You can also add [guest](/appstore/general/app-store-overview/#guests) users to these groups and allow them to download selected private company content.

The former App Store **Content Managers** and **External Downloaders** groups have been removed. Members of these groups have been migrated to a new temporary user group called **Migrated Data**. Former “content managers” have been added as user group [members](/appstore/general/app-store-overview/#members), and former “external downloaders” have been added as [guests](/appstore/general/app-store-overview/#guests).

Content that was marked as **Protected** as well as content marked as **Shared with Others** has been migrated to the [Content](/appstore/general/app-store-overview/#group-content) tab of the Migrated Data user group. This makes all “externally shared” content protected for that user group.

### October 1, 2019

#### Improvements

* We now display the UUID of an App Store component in the [Usage](/appstore/general/app-store-overview/#usage) section of its details page. This allows you to specify the `TemplateUUID` when calling the [CreateNewApp operation](/apidocs-mxsdk/apidocs/projects-api/#createnewapp) in the *Projects API*.

### September 11, 2019

#### Improvements

We added the flexibility to label your App Store content with a [custom version number](/appstore/general/share-app-store-content/#updating).

{{% alert color="info" %}}This is based on an [upvoted idea from Andreas Blaesius](https://forum.mendixcloud.com/link/ideas/1324) submitted to the [Mendix Idea Forum](https://forum.mendixcloud.com). Thanks, Andreas!{{% /alert %}}

### August 30, 2019

#### Improvements

We renamed all the SAP-related connectors and app templates in the App Store to be consistent. The changes are:

| Type | Old Name | New Name |
| ----- | ----- | -----|
| Connector | SAP Cloud Platform XSUAA Connector | XSUAA Connector for SAP Business Technology Platform |
| Connector | SAP Fiori UI Package | UI Package for SAP Fiori themed apps |
| Connector | SAP Leonardo Machine Learning Foundation Connector | Connector for SAP Leonardo Machine Learning Foundation |
| Connector | SAP OData Connector | OData Connector for SAP solutions |
| Connector | SAP OData Model Creator | OData Model Creator for SAP solutions |
| App Template | Fiori Blank | Blank App for SAP Fiori themed apps |
| App Template | SAP Northwind OData | Northwind OData Service Master-Detail App for SAP solutions |
| App Template | SAP Purchase Order Approval Tutorial | Purchase Order Approval Tutorial for SAP solutions |

### August 26, 2019

#### Improvements

* We updated the **SAP OData Connector** to support the **Edm.Int64** data type. (Ticket 87284)

#### Fixes

* We also fixed a *java.net.SocketException: Broken pipe (Write failed)* exception which occurred when sending a large request to the OData service endpoint. (Ticket 86680)

### July 31, 2019  

#### Improvements 

* We simplified the options available for formatting the Documentation section when creating new App Store content.
* We made it possible to upload images into the Documentation editor - you can drag an image from your file explorer into the editor, or link to images via URL (Copy + Paste does *not* work due to browser inconsistencies).
* We made some user changes and improvements when you create new content using GitHub as the source. For example, an easier-to-use selection screen when choosing your repository.  
* We also made some other minor bug fixes. 

### July 5, 2019

#### Improvements

* We updated the **SAP Logging Connector** to allow the log level to be set via a constant instead of an enumeration. This means that you can change the log level with a restart, without needing to fully redeploy your app.
* We solved an issue where the SAP Logging Connector had conflicts with the Community Commons module.

### June 28, 2019

#### Improvements

We added a component in the App Store which, when configured in your app, allows you to use the logging format supported by SAP Kibana. For more information, see [SAP Logging Connector](/partners/sap/sap-logger/).

### June 6, 2019

#### Improvements

* We fixed the issue with selecting specific app templates when creating a new app in Mendix Studio Pro (Desktop Modeler).
* We fixed the problems with deep links for private apps.

### April 29, 2019

#### Improvements

* We created a new App Store menu structure, so it is now easier to navigate through your created content. If you are a Mendix Admin with certain permissions, you will see additional menu items to help you manage private and public company content.
* For App Store administrators, you can now set content managers who are allowed to manage your company content by marking it as protected.
* You can now share private App Store content with external downloaders from other companies.

### February 15, 2019

#### Improvements 

* We now throw an error which you can catch in a microflow if the destination does not exist, or the app is running locally. Previously the error could not be caught.
* We now provide OData Connector support for Mendix apps which use Oracle DB as their database.
* We fixed some typos in the OData Connector actions.

### January 24, 2019

#### Improvements

* We released an upgraded version of the IBM Watson Connector Suite, which supports IBM Watson SDK version 6.11.0 and adds additional microflow actions.
* We released an upgraded version of the IBM Watson Connector Suite Example Project, which includes the new IBM Watson Connector Suite.
* We released an upgraded version of the IBM Watson Blank App app template, which includes the new IBM Watson Connector Suite.

### January 21, 2019

#### Fixes

The **Reviews** section at the bottom of the [App Store main page](https://marketplace.mendix.com/) presents the latest published user reviews. We fixed an issue where clicking on a user's name to view their profile caused an internal server error. You will now be redirected to the expected user.

## 2018

### December 17, 2018

#### Improvements

We have noticed that when searching in the App Store (via the **Search Mendix** search bar), users frequently use keywords like **Mendix**, **Modeler**, **Desktop**, and **Download** as well as different Desktop Modeler versions. The search results did not provide the expected results based on these keywords (as in, they did not show the Modeler download page). With this update, it is now possible to search for the Modeler and all of its versions in the **Search Mendix** search bar, which will redirect you to the [Desktop Modeler page](https://marketplace.mendix.com/link/studiopro/) in the Mendix Marketplace.

### October 1, 2018

#### SAP OData Connector 4.0

 This version of the [SAP OData Connector](https://marketplace.mendix.com/link/component/74525/) allows you to use the destination services of SAP Cloud Platform. This simplifies configuration, authentication and endpoint management when integrating your application, running in SAP Cloud Platform, with SAP back end services. See [SAP Destination Service](/partners/sap/sap-destination-service/).

The following authentication types are currently supported in SAP Destination Services:

* PrincipalPropagation authentication and ProxyType on-premise (Connectivity Service/Cloud Connector/On premise back end)
* Oauth2SALMAssertion authentication (For Neo Platform apps)
* Basic and None authentication for public back ends

#### SAP Leonardo Machine Learning Foundation Connector Version 1.0.0

This new connector allows you to consume Leonardo Machine learning services from both API Business Hub and SAP Cloud Platform by adding activities to your Mendix model.

The SAP Leonardo Machine Learning Foundation Connector is available in the App Store here: https://marketplace.mendix.com/link/component/107221/.

#### SAP Fiori Styling

The existing SAP Blank app template has been replaced by a new Fiori Blank app template. This new Fiori Blank app template has a new Fiori UI Package included. This is based on Atlas UI, which means that you can use either the Web Modeler or Desktop Modeler to build applications which give the SAP Fiori UI experience.

#### Breaking Changes

The new **SAP OData Connector** will break existing projects which are using the SAP Cloud Connector. The SAP OData Connector no longer supports the “Use Cloud Connector” attribute. This is now embedded in the destination service configuration. See [SAP Destination Service](/partners/sap/sap-destination-service/) for more details.

## 2017

### June 21, 2017

* Private company App Store content is now indicated in the **Template** browser with a lock icon.
