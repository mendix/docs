---
title: "Catalog Release Notes"
linktitle: "Catalog"
url: /releasenotes/catalog/
description: "Release notes for updates to the Mendix Catalog"
weight: 36
numberless_headings: true
aliases:
    - /releasenotes/data-hub/
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

These release notes cover changes made to the [Catalog](/catalog/).

## 2024

### August 29, 2024

#### Fixes

* We fixed a bug where data sources in the search results were incorrectly indicated to not be discoverable.

### August 22, 2024

#### Features

* We have added support for OData Actions, including:
    * Updated relevant pages in the UI to reflect these action details.
    * Included actions to be added to the relevant functions within the app (such as search results, filtering, editing, etc.).

#### Fixes

* We fixed a bug where the application filter was not displaying the results in the associated drop-down list.
* We repositioned the **Next** button on the **Registration** page to make it visible on smaller screens.

### August 01, 2024

#### Fixes

* We fixed a bug where notifications about newly-registered endpoints were not showing the correct number.

### July 18, 2024

#### Fixes

* We fixed an issue where the owner drop-down did not show all the possible users.
* We addressed a bug where switching the active company resulted in an error on the registration form.

### July 11, 2024

#### Fixes

* We fixed a bug that allowed users to add tags from other companies to their endpoints.
* We made some minor aesthetics changes to the Control Center and **Service Edit** pages to align with the overall aesthetic standards defined for the app. 

### June 27, 2024

#### Fixes 

* We addressed some aesthetics bugs and made some aesthetic improvements on the **Home**, **Search**, and registration pages. 

#### Improvement

* We have aligned our top-menu navigation to the rest of the platform, which has adjusted some navigation across the Catalog app.

### June 20, 2024

#### Fixes 

* We fixed a bug where the **Share** button would sometimes copy the wrong link to the clipboard.
* We improved notification messages to include more details.

### June 6, 2024

#### Fixes

* We fixed some minor aesthetics bugs that were present on the **Home**, **Curate**, and registration pages. 

### May 23, 2024

#### Fixes

* We fixed an issue where entity results were not appearing in the UI search results.

### May 16, 2024

#### Fixes

* We fixed an issue in the Registration API where an unintended `400` response was returned if an owner that was not yet known in the Catalog was assigned to an application.

### April 25, 2024

#### Fixes

* We fixed an issue where in some rare cases when switching from the Landscape View of a data source to its Data View, information from a different data source would be shown.

### April 18, 2024

#### Fixes

* We fixed an issue where updating a service contract from the **Search** page results in incorrectly parsed OData services.
* We addressed an issue where clicking **Browse** from the hub URL redirects to the **Home** page instead of the **Search** page.

### April 11, 2024

#### Fixes

* We addressed a potential security vulnerability ([CVE-2023-52428](https://nvd.nist.gov/vuln/detail/CVE-2023-52428)).

### March 21, 2024

#### Improvement

* We improved the accessibility for various pages on the app.

### March 14, 2024

#### Fixes

* We fixed an issue where endpoints would get deleted and re-created when an application was converted from Mendix version 10.6 or below to version 10.7 or above.

### February 29, 2024

#### Fixes

* We addressed a potential security vulnerability.

### February 8, 2024

#### Fixes

* We fixed an issue where the **View** button could not be clicked on the **Curate** page.
* We addressed potential security vulnerabilities.

### February 1, 2024

#### Fixes

* We fixed an issue that would prevent data sources from being automatically registered for applications that also use Mendix Business Events.

### January 25, 2024

#### Improvement

* Users can now register endpoints using OpenAPI 3.0. Previously, only OpenAPI 2.0 was supported.

### January 11, 2024

#### Improvement

* We addressed potential security vulnerabilities.

### January 4, 2024

#### Fixes

* We fixed a visual bug on the Curation page where two pagination bars were shown.
* We addressed potential security vulnerabilities.

#### Improvement

* Users that are not an administrator or curator can now view deeplinks to undiscoverable services.

## 2023

### December 28, 2023

#### Fixes

* We removed delete access for automatically registered data sources, a feature that was mistakenly introduced in a previous release.

### December 8, 2023

#### Fixes

* We fixed an issue where the search feature in Studio Pro did not work as expected.

### November 30, 2023

#### Fixes

* We have fixed an issue where downloaded contracts had the wrong extension.
* Image quality on the home page has been improved.
* The sample dataset badge no longer overlaps with the icon.

### November 23, 2023

#### Improvement

* We have redirected the **Catalog** link in the Control Center to the **Curate** page instead of the Catalog home page.
* We have displayed enumeration data types for the attributes of a data set in the Catalog UI.

#### Fixes

* We fixed an issue where the data source description did not display on the tile in the Popular Data Sources section.

### November 16, 2023

#### Fixes

* We fixed an issue where some applications did not show up in the drop-down menu of the registration form.

### November 2, 2023

#### Improvement

* We have added a deep link that allows you navigate directly to the results of a search query.

#### Fixes

* We fixed an issue that caused the `ContractType` of a `Service` to be empty in the response of some operations of API versions 3 and older.

### October 26, 2023

#### Improvement

* We have added **View More** buttons to the home page.
* We have enhanced the Search page to include a sort functionality that aligns with the revised home page.

#### Fixes

* We have disabled the ability to modify endpoints that have been automatically registered.

### October 19, 2023

#### Features

* We have added a short personalized tour to educate users (who have registered an endpoint) on key features that are available for maintaining their assets within the Catalog.
* We have introduced a notification feature to alert users when REST APIs are registered.

#### Improvement

* We have refreshed the home page to align with the Catalog's growth and accommodate for new data sources.
* We have added the ability to filter technology type (OData, OpenAPI) on the **Curate** page.

#### Fixes

* We have resolved the issue where OpenAPI endpoints were not displaying on the **Curate** page.

### October 12, 2023

#### Improvement

* We have decreased the number of clicks required to reach the discoverability setting of a data source. We have also included more information relating to the data source on the **My Assets** page in the Technology field form. 

### October 5, 2023

#### Features

* We added a mini survey about the Catalog's usefulness to the search results page so you can let us know how we are doing.

#### Improvement

* We updated the link on the search results page to give more details about what [OpenAPI beta](/catalog/register/openapi-automatic-registration/) means in the Catalog.

### September 21, 2023

#### Features

* We added [beta](/releasenotes/beta-features/) support for published REST services (OpenAPI) to the Catalog. REST services in your Mendix app are now automatically registered when you deploy to the Mendix Cloud. For more information, see [OpenAPI Automatic Registration](/catalog/register/openapi-automatic-registration/). Have a look and [let us know what you think](https://community.mendix.com/link/space/catalog).

#### Improvements

* We made several improvements to the UI of the Search Results page.

#### Fixes

* We fixed some broken links in the registration interface and in the footer of the page.
* We added the Feedback widget to a few pages where it was missing.

### August 10, 2023

#### Improvements

* You can now easily update your data source to a newer version from the Data Source details Page. 

### July 24, 2023

#### Fixes

* We fixed an issue where datasets sometimes disappeared from an endpoint.

### July 6, 2023

#### Improvements

* We improved the clarity and accuracy of the texts in email notifications.

### June 29, 2023

#### Improvements

* We improved the clarity and accuracy of even more Catalog UI texts.

### June 22, 2023

#### Improvements

* We improved the clarity and accuracy of Catalog UI texts.

### June 15, 2023

#### Fixes

* We fixed an issue where uploading an application icon did not show the correct dialog box.

### June 8, 2023

#### Improvements

* We added a feedback option on the right side of the screen. Let us know if you find an issue, have a suggestion for improvement, or want to share something we are doing well!

#### Fixes

* We fixed an issue where uploading and cropping a custom icon did not work correctly.

### June 1, 2023

#### Fixes

* We fixed an issue where pagination links in Search API responses were not correctly encoded.
* We fixed an issue where the page was flickering when selecting a data set in the search results.

### May 25, 2023

#### Fixes

* We fixed an issue where edits to descriptions in the Catalog UI were not saved.

### May 11, 2023

#### Improvements

* We made the authentication details on the [data source details](/catalog/manage/search/#service-details) page more user friendly.

#### Fixes

* We fixed an issue that impacted the deployment of an OData service.

### April 13, 2023

#### Fixes

* We fixed an issue where the page was flickering when selecting an object in the search results.

### April 6, 2023

#### Improvements

* We improved the clarity and accuracy of some UI texts.

### March 16, 2023

#### Fixes

* We fixed an issue on the Catalog Admin page that displayed incorrect counts of data sources registered in the company.
* We fixed an error that occurred when no authentication is selected while registering a data source.

### February 27, 2023

#### Fixes

* We fixed an issue that was generating endpoint URLs leading to `404 not found` errors when deploying an app in Studio Pro.

### February 23, 2023

#### Improvements

* On the [Search](/catalog/manage/search/) page, there are no default search filters anymore and filters are persistent per search session.

### February 16, 2023

#### Improvements

* We added a link to the Marketplace module under authentication details that implements the specified authentication method.

### February 9, 2023

#### Improvements

* We added a user-friendly interface for `404 not found` errors in a REST deeplink API.

#### Fixes

* We fixed an issue with cropping images when uploading an application icon.
* We fixed an issue where authentication details of a data source were not visible to users without curation rights.

### February 2, 2023

#### Improvements

* You can now select relevant Mendix Marketplace module for an [authentication](/catalog/register/register-data/#authentication) type. See the [Selecting an Authentication Method](/catalog/register/register-data/#authentication) section of *Register OData Resources in the Catalog* for more information on the authentication types.

#### Fixes

* We fixed a bug that was causing the creation of an application using the [Registration API](/apidocs-mxsdk/apidocs/catalog-apis/#registration) to fail.

### January 12, 2023

#### Improvements

* You can now add [authentication](/catalog/register/register-data/#authentication) details to a data source. Click **Edit** on the data source and then click the **Authentication** tab. See the [Selecting an Authentication Method](/catalog/register/register-data/#authentication) section of *Register OData Resources in the Catalog* for more information on the authentication types.

## 2022

### December 22, 2022

#### Improvements

* You can now edit data source details directly from the [asset details](/catalog/manage/search/#service-details) page. In our [November 24th](#nov-24) release, we made it possible to edit dataset details from the same page. To learn more about data sources and datasets, see the [Selected Asset Details](/catalog/manage/search/#search-details) section of *Search in the Catalog*.

#### Fixes

* We fixed an issue with a `PUT` environment API request, which resulted in 409 conflict instead of updating the environment. (Ticket 173609)

### December 8, 2022

#### Improvements

* When you receive and click on a notification from the Catalog about newly registered endpoints or newly assigned ownership, you will now be directed to the more user-friendly [Curate](/catalog/manage/curate/) page that shows all relevant and filtered resources. 

### November 24, 2022 {#nov-24}

#### Improvements

* You can now edit dataset details directly from the [asset details](/catalog/manage/search/#service-details) page.

#### Fixes

* We fixed an issue with the display of services with anonymous access in the [asset details](/catalog/manage/search/#service-details) page.

### November 17, 2022

#### Improvements

* You can now request access to a data source directly from the [asset details](/catalog/manage/search/#service-details) page. Click **Request access** in the **Authentication** section to open a draft email to the owner.

### November 10, 2022

#### Improvements

* You can now view authentication details in the [data source details](/catalog/manage/search/#service-details) page. 
* The **Technical Owner** can now only be changed in **Control Center**, not within the **Catalog**. See the [Custom Owners](/control-center/catalog-admin/#custom-owners) section of *Catalog Administration*.

#### Fixes

* We fixed a bug where whitespaces in certain fields were causing duplicate services to be created.
* We removed the **Automatically registered** tag from sample data sources.

### November 3, 2022

#### Improvements

* Notifications for newly registered resources are now grouped, helping to de-clutter your Catalog experience.

### October 27, 2022

#### Improvements

* When registering a service in the registration form, you can now designate which authentication type is needed for consumers to access it. For more information, see [Selecting an Authentication Method](/catalog/register/register-data/#authentication) in *Register OData Resources in the Catalog*.
* Sample data sources are now clearly indicated with a label.

### October 20, 2022

#### Improvements

* You will now get a notification about which services automatically registered in the Catalog. Services are automatically registered when deploying a published OData service. To learn more, see [Register OData Resources in the Catalog](/catalog/register/register-data/).

### Fixes

* We fixed a bug where HTML tags were appearing on toast notifications. 

### October 13, 2022

#### Improvements

* Based on your feedback, we have renamed instances of **Delete data source** in the UI to **Remove data source**. Removing a data source will not delete it from your model.

#### Fixes

* We fixed a bug where the redeployment of an endpoint resulted in an error. The error mistakenly reported the redeployed endpoint as a duplicate rather than an update.

### October 6, 2022

#### Improvements

* Mendix Admins can now enable and disable sample data sets in the Catalog. To do so, go to the **Data Hub** page of Control Center, click the **Settings** tab, and toggle **Sample Data Sources are hidden**. 

#### Fixes

* We fixed an error that was preventing the registration a new version of an existing service on the Registration form. 

### September 29, 2022

#### Improvements

* We added a mini-survey on the search functionality to the search results page. Let us know how we're doing!

#### Fixes

* We have addressed potential security vulnerabilities.
* The **Authentication** page in the registration form will now show validation errors, if there are any.
* Restoring a previously deleted environment through the [Registration API](/apidocs-mxsdk/apidocs/catalog-apis/#registration) is now possible and will no longer return a `409` response.
* Submitting an API request with an invalid JSON body will no longer trigger a `500` response, but a `400` Bad Request instead.

### September 22, 2022

#### Improvements

* You can now filter by content you own in the Catalog. Click **Filter** to add filters, and select the **Owned by me** checkbox in the **Ownership** section.

### September 15, 2022

#### Improvements

* We added an **Authentication** details page on the data source registration form.
* We added a filter to the [Data Hub Search API](/apidocs-mxsdk/apidocs/catalog-apis/) to view the resources owned by a user.
* We updated the Catalog UI to support pagination in the search results.

#### Fixes

* We fixed a bug where a 404 page was shown after clicking the Catalog call-to-action in a notification email.

### September 8, 2022

#### Improvements

* You will now see an error message when the parsing of a contract fails due to the parsing service being offline. 

### September 1, 2022

#### Improvements

* External users will receive an email when they are removed from a company's Catalog. 
* Company Admins can now add multiple external users by separating email addresses with a comma and space. 

#### Fixes

* We fixed a bug where external users were sometimes unable to upload contracts.

### August 25, 2022

#### Improvements

* We improved the accuracy of the Catalog's search results.
* We added the option to the [Search API](/apidocs-mxsdk/apidocs/catalog-apis/#search) to paginate through search results with an offset. This allows you to limit the number of results and specify how many to skip.
* We made several improvements to the Catalog UI.

### August 18, 2022

#### Improvements

* Mendix Admins can now assign a new [external user](/control-center/catalog-admin/#external-users) when removing the existing one from company's Catalog. To remove a user, go to **Control Center** > **Data Hub** > **External Users** and click **Remove**.

#### Fixes

* We fixed a bug where an empty v3 contract resulted in an error. The contract will now be parsed successfully and yield no entities because it is empty.
* We fixed a bug where notifications were not sent when the notification title was more than 100 characters. The maximum number of characters in notification titles is now 100.

### August 11, 2022

### Improvements

* We made some improvements to the **Register a New Data Source** form, including improved processing of large contracts and improved responsiveness on pages with a large amount of applications and owners.

#### Fixes

* We fixed a bug where notifications about deletion were mistakenly sent when updating a service. 
* We fixed an issue where some **Company Admins** would get an error when trying to change the default discoverability setting.
* We removed an undocumented field that was returned by the [Search API](/apidocs-mxsdk/apidocs/catalog-apis/#search).
* We fixed an issue where under certain conditions, published and consumed services were not registered automatically in the Catalog.

### August 4, 2022

#### Improvements

* We upgraded the Catalog page to include **Count** and **Pagination** OData restrictions. It now features a **Capabilities** tab, a tooltip for attributes that have restrictions, and tooltips for the CRUD indicator. 

#### Fixes

* The **Capabilities** filter will now be reset when returning to the home page.

### July 28, 2022

#### Improvements

* Mendix Admins can now remove external participants from their company's Catalog. To do so, go to **Control Center** > **Data Hub** > **External Users** and click **Remove**.

#### Fixes

* We fixed an error that occurred when the **Business Owner** field was initially left empty, and users could not assign a new **Business Owner** in subsequent attempts.

### July 14, 2022

#### Improvements

* When a user other than the Technical or Business Owner deletes an application, environment, or data source, the Technical and/or Business Owner will receive a notification. For more information on data source ownership, see the [Changing Owners of an App](/catalog/manage/curate/#changing-owners) section of *Curate Registered Assets*.

### June 30, 2022

#### Improvements

* The Catalog has gotten a mini makeover! 
    * The **Catalog** and **Curate** top menu items are now up in the bar at the top of the screen, the MxDock. 
    * In the **Catalog**, you can now navigate between a **Data View**, which gives you insights about a Data Source, and a **Landscape View**, which situates the Data Source in the landscape.
* You can now filter the search results by CRUD capabilities.

#### Fixes

* We fixed an error that occurred when filtering by *Environment* in the search pane.

### June 23, 2022

#### Improvements

* Consumed data sources that have been deleted are now indicated in the [Landscape](/data-hub/data-hub-landscape/).
* Existing endpoints that are not present in a `PUT` call of the **Registration API** will be deleted. Check out the [Data Hub Registration API](https://datahub-spec.s3.eu-central-1.amazonaws.com/registration_v4.html), or read the documentation in the [Registration API](/apidocs-mxsdk/apidocs/catalog-apis/#registration) section of *Catalog APIs*.
* The `app_uuid` is now present in the `409 CONFLICT` response from **Registration API** when registering an environment on a location that is already in use. 

#### Fixes

* We fixed an issue where *Popular* tags were not displayed on the home page for users without curation rights.

### June 16, 2022

#### Improvements

* We improved the UI performance during registration of large contracts.

### June 2, 2022

#### Improvements

* After completing the registration form, you will now be directed immediately to the new data source.
* Forum links now open with the Data Hub category pre-selected.

#### Fixes

* We fixed a bug where the `GET ServiceVersion` operation of the DataHub v2 API would not always return the `ContractType` of a `Service`. See [Catalog APIs](https://platformcore.pages.rnd.mendix.com/datahub-spec/) for a list of all available APIs.

### May 19, 2022

#### Improvements

* We made several improvements to the UI.

### May 12, 2022

#### Improvements

* We added a description about the curation rights that apply for `DELETE` and `PUT` operations.

### May 5, 2022

#### New Features

* When a person is removed as a Technical Owner or Business Owner of an individual application, they will receive an MxDock notification confirming that they are no longer the point of contact.

### April 21, 2022

#### Fixes

* We fixed a bug where the **Delete Data Source** button incorrectly appeared on a **Dataset** detail page.

### April 14, 2022

#### New Features

* You can now delete applications through the **Registration API**. Check out the [Data Hub Registration API](https://datahub-spec.s3.eu-central-1.amazonaws.com/registration_v4.html), or read the documentation in the [Registration API](/apidocs-mxsdk/apidocs/catalog-apis/#registration) section of *Catalog APIs*.
* When a person is assigned to an application as a Technical Owner or Business Owner, they will receive an MxDock notification confirming their new role.

#### Fixes

* We fixed a `NullPointerException` that occurred when the **Versions** of an endpoint was empty on the **Registration API** `GET` service call.
* We fixed an issue where the Catalog loaded in our unreleased dark mode. Dark mode is not ready yet, but we will let you know when that feature is available!

### April 7, 2022

#### Fixes

* We corrected the OData file upload message that was incorrectly indicating the maximum file size as 1 MB, when in fact the allowed maximum file size is 5 MB.

### March 31, 2022

#### Improvements

* We made various security improvements.

### March 24, 2022

#### New Features

* We added v4 compatibility for the **Transform API**. This is accessible via the [Data Hub Registration API](https://datahub-spec.s3.eu-central-1.amazonaws.com/registration_v4.html) under the **Endpoints** section.

#### Fixes

* We fixed a few styling issues.

### March 17, 2022

#### Fixes

* We fixed the **Update/Switch** button's functionality for consumed OData services.

### March 10, 2022

#### Improvements 

* We now support all OData versions and have unified all OData versions to a single **ContractType** with separate version attributes. Previously we only supported v3 and v4.
* We added v4 of the **Registration API** and **Search API** to support the unified OData type and version structure. View the [list of Catalog APIs](https://datahub-spec.s3.eu-central-1.amazonaws.com/index.html) or see our [Catalog APIs](/apidocs-mxsdk/apidocs/catalog-apis/) documentation.

#### Fixes

* We added a loading spinner when you are waiting for a response on each of the registration form steps. 

### March 3, 2022

#### Improvements 

* We made the user experience for deleting data in the **Administration** page more consistent. Access the **Administration** page by going to the **Switch to** menu on the upper-right of the Catalog, then clicking **Control Center**.

#### Fixes

* We implemented a fix to allow users to re-register a previously deleted data source. You can do this by going to the **Register a Data Source** section on the Catalog home page.

### February 24, 2022

#### Improvements 

* We improved the appearance of the Catalog by adjusting colors and styling.

#### Fixes

* We fixed a typo in a validation message that appeared if registering a contract failed.

### February 17, 2022

#### Fixes

* We made various security and UI fixes.

### February 10, 2022

#### New Features

* We added an option to [delete a data source](/catalog/manage/curate/#delete-data-source), available for users with [curation](/catalog/manage/curate/) rights. To delete a data source, go to the Curation Bar for the data source and click **Edit**, then click **Delete Data Source**.

#### Fixes

* We fixed a bug where the Catalog did not display the correct status of an updatable entity.
* We made various security and UI fixes.

### February 3, 2022

#### Fixes

* We fixed a bug on the **Contract Upload** page. The page incorrectly displayed a red warning border if you uploaded a document with non-blocking errors and then immediately deleted it. We have removed the red border in this scenario.

### January 27, 2022

#### Improvements

* We added a notification menu to the upper-right menu header.
* We added counts to the **Catalog** page so that you can now see the total numbers of **Associations**, **Attributes**, and **Datasets**. The counts appear in parentheses next to each heading.

#### Fixes

* We fixed a bug that was causing the file uploader to get stuck when uploading an empty file.

### January 21, 2022

#### Improvements

* The following OData contract parsing and validation improvements were added:
    * Improved detection and feedback on the OData version
    * Improved parsing and more detailed error messaging
    * Improved validation (after parsing succeeded) and more detailed error messaging

### January 14, 2022

#### Fixes

* We fixed a bug where an error occurred after selecting any curate menu item on the **Curation** page as a Data Hub Curator.

### January 13, 2022

#### Fixes

* We fixed a bug where v3 contracts uploaded as single XML files were not downloadable from the Catalog via the **Download Contract** button.

### January 6, 2022

#### Fixes 

* We updated the Log4j dependency to 2.17.1, which addresses [CVE-2021-44832](https://cert-portal.siemens.com/productcert/pdf/ssa-784507.pdf).

## 2021

### December 30, 2021

#### Fixes

* We fixed an issue where a user registered an endpoint with an environment URL and the same relative path combination. As a result, an endpoint was reused from a different company.

### December 23, 2021

#### Fixes

* We fixed an issue where the user was logged out after changing the Technical Owner of a data source.
* We fixed an issue that occurred with scrolling on a data source deep-link page.

### December 20, 2021

#### Fixes

* We updated the Log4j dependency to 2.17.0, which addresses [CVE-2021-45105](https://cert-portal.siemens.com/productcert/pdf/ssa-501673.pdf).

### December 16, 2021

#### Fixes

* We fixed an issue that caused uploading a contract as a ZIP file to fail when the compression ratio was too high.

#### Improvements

* We consolidated the existing **Edit Metadata**, **Discoverability**, and **Validate** drop-down menus into one menu named **Edit**.

### December 9, 2021

#### Fixes

* We fixed an issue that caused uploading a contract as a ZIP file to fail.
* We fixed an issue that occurred when searching for and then clicking a popular dataset.

### December 2, 2021

#### New Features

* We added a new **Settings** tab to the [Data Hub](/control-center/catalog-admin/#settings) page in Control Center with a default discoverability setting.
* We added a discoverability radio button to the data source [registration](/catalog/register/register-data/) form.

#### Fixes

* We fixed an issue with the icon size for the registered datasets.

### November 18, 2021

#### Improvements

* Non-company admins are now navigated to Control Center landing page instead of getting the **Access Denied** message.

### November 11, 2021

#### Fixes

* We fixed an issue where a Data Hub Curator could not access the fourth page or above of [Company Assets](/catalog/manage/curate/#curatelist).
* We fixed an issue with the landscape view for datasets.

### October 28, 2021

#### Fixes

* We fixed an issue where the [Business Owner](/catalog/manage/search/#business-owner) name was not visible in the metadata of a data source.
* We removed the temporary administration link from the home page. The owner management page is now available from the [Curate](/catalog/manage/curate/) tab for Data Hub Curators and from the [Administration](/control-center/catalog-admin/#custom-owners) page in Control Center for Mendix Admins.

### October 14, 2021

#### Improvements

* We made several design changes, mainly on the [Catalog](/catalog/) page. We moved items like **Environment Name** and **Version** to the newly arranged right sidebar menu.
* We moved the `ContractType` field to the `ServiceVersion` level. For more information, see [How to Register OData Resources in the Catalog](/catalog/register/register-data/).
* We added an informative tooltip to the **Company** drop-down menu and a pop-up window for when the user is an external user for another company.
* We added in-app guidance to notify that you can switch the company when you have accepted a participation invitation.

#### Fixes

* We removed byte order mark (BOM) from the uploaded contract XMLs.
* A consumed entity in Studio Pro now works after upgrading from OData v3 to OData v4.

### October 7, 2021

#### Improvements

* We upgraded the Catalog search engine to OpenSearch 1.0.

#### Fixes

* We fixed an issue that caused older Studio Pro versions to not be able to connect to the Catalog.

### September 30, 2021

#### Fixes

* We fixed an issue where searching in the [Data Hub pane](/refguide9/data-hub-pane/) in Studio Pro caused an error.

### September 23, 2021

#### Data Hub Free Edition

* The Data Hub Free edition is now available to all Mendix users! Publish your data sources in the Catalog, curate them, and then consume them in another application.

#### Fixes

* We fixed an issue where the **Curate** button appeared in the navigation for users who were not able to curate any content.
* We removed duplicate endpoints that had been created due to an issue fixed in the [September 9](#nine) release.

### September 16, 2021

#### Improvements

* API responses are now sanitized and will no longer have a chance of containing executable code.

#### Fixes

* We fixed an issue with pagination for Applications and Environments in the API.
* We fixed styling issues.

### September 9, 2021 {#nine}

#### Fixes

* We fixed an issue where updating a service version created a new endpoint instead of updating the existing one.
* We fixed an issue that caused pagination URLs to be returned as *http* links rather than *https*.
* We fixed an issue where clicking **Control Center** in the top bar of the [Catalog Administration](/control-center/catalog-admin/) page navigated to the Data Hub home page. Now, it navigates to Control Center.

### September 2, 2021

#### Fixes

* We removed the `SecurityClassification` from the `Endpoints` JSON structure of the [Register API](/apidocs-mxsdk/apidocs/catalog-apis/). The creation of endpoints as `Public` via the API is no longer allowed due to security reasons.

### August 26, 2021

#### Improvements

* The following API `GET` capabilities were added:
    * `GET` a specific consumed endpoint
    * `GET` all applications
    * `GET` all environments for an application
    * `GET` all consumed endpoints
* A change was made to the `POST` application API call to also allow for the `Opcenter` and `Mindsphere` application types.
* We added Catalog integration with [Control Center](/control-center/catalog-admin/). For details, see [Catalog Administration](/control-center/catalog-admin/).

### August 19, 2021

#### Fixes

* We fixed inconsistencies in contract and security scheme between an endpoint API spec and implementation.
* We fixed an issue where the Mendix Admin did not see external users after adding them.
* We fixed styling issues on the **Administration** page.

### August 12, 2021

#### New Features

* We added the following write capabilities: 
    * Parsing updatable, insertable, and deletable capabilities from annotations is now available in OData v4 contracts
    * Write capabilities are returned on the [Data Hub Search API](/apidocs-mxsdk/apidocs/catalog-apis/)
    * Write capabilities are displayed on the Data Hub UI

#### Fixes

* We made improvements to Data Hub security.

### August 5, 2021

#### Fixes

* We made various security and UI fixes.

### July 29, 2021

#### New Feature

* The Mendix connector on the Data Hub **Home** page now also supports OData v4. 

### July 22, 2021

#### Fixes

* Administration pages no longer time out for Data Hub Admins.

### July 1, 2021

#### Fixes

* We updated the example in the [Catalog APIs](/apidocs-mxsdk/apidocs/catalog-apis/) for `PUT` published endpoints to match the behavior.

### June 24, 2021

#### New Features

* New [Registration API](/apidocs-mxsdk/apidocs/catalog-apis/) endpoints now allow you to do the following:
    * `GET` all published endpoints
    * `GET`, `POST`, and `PUT` one individual published endpoint

### June 10, 2021

#### Improvements

* In the search input boxes on the [Search result](/catalog/manage/search/#search-results) listings and [Data Hub Home](/catalog/#catalog-home) page, the magnifying glass now appears on the right side.
* In the [Search result](/catalog/manage/search/#search-results) listings, the filters have been restyled.
* All cancel and discard buttons now have matching styles for improved usability.

### June 3, 2021

#### New Features

* All [Catalog APIs](/apidocs-mxsdk/apidocs/catalog-apis/) are now available at https://datahub-spec.s3.eu-central-1.amazonaws.com/index.html. The original Catalog API is now split into 2 APIs for search and registration operations and include the following changes:
    * [Search](/apidocs-mxsdk/apidocs/catalog-apis/) – includes GET calls for getting details of data sources
    * [Register](/apidocs-mxsdk/apidocs/catalog-apis/) – PUT calls are added to enable users to update or register applications and environments by specifying a UUID

### May 27, 2021

#### New Features

* A new connector has been added to the **Catalog Home** for [registering](/catalog/register/register-data/) Siemens Opcenter data sources.

#### Improvements

* **Mindsphere** applications are now indicated with the display of the Mindsphere logo for all associated assets in the Catalog.
* In the [Search result](/catalog/manage/search/#search-results) listings, the service version number is no longer next to the data source name, it is now displayed below it.

### May 12, 2021

#### Improvements

* Datasets in the [search results list](/catalog/manage/search/#search-results) that are validated are now clearly indicated as such.
* Custom owners can be added for an application when [registering data sources](/catalog/register/register-data/) using the business application connectors from the **Catalog Home**.
* Further styling changes have been made to improve usability.

### May 6, 2021

#### New Features

The [Data Hub Transform API](https://datahub-spec.s3.eu-central-1.amazonaws.com/transform.html) is available for Mendix users deploying their apps to non-Mendix environments.  The Transform API extracts the information from the app’s `dependencies.json` file to generate the request bodies that are required when using the [Catalog API](/apidocs-mxsdk/apidocs/catalog-apis/). For further information see [Data Hub Transform API](/apidocs-mxsdk/apidocs/catalog-apis/#transform).

### April 29, 2021

#### Improvements

* Improvements have been made to the styling of the [Data Hub Home](/catalog/#catalog-home).

### April 22, 2021

#### Improvements

* [Search result](/catalog/manage/search/#search-results) listings in Catalog have been improved.  Data sources and datasets that are set as [Validated](/catalog/manage/curate/#validated) will appear above assets that are not validated.

### April 1, 2021

#### Improvements

* [Registration](/catalog/register/register-data/) of data sources using the business application connectors from the **Catalog Home** is improved. For each connector, users can register data sources by selecting from a list of apps and environments already registered in the Catalog for the business application. When none are registered, the  "**Create New...**" option will be presented.

### March 18, 2021

#### Improvements

* A Mendix connector has been added to the business applications on the Data Hub Home to enable users to [manually register](/catalog/register/register-data/) Mendix OData v3 contracts.
* Data sources that are [validated](/catalog/manage/curate/#discoverability) are now clearly indicated in the search results list and for the selected asset details with a validated shield icon. The validation status of the data source is now displayed in the metadata panel.
* The [discoverability](/catalog/manage/curate/#discoverability) of a data source is displayed in the search results pane, the asset details screen and the metadata panel.

### March 11, 2021

#### Improvements

* Improvements have been made on the [discoverability](/catalog/manage/curate/#discoverability) of registered assets.
* The functionality for [registering data sources from enterprise applications](/catalog/register/register-data/) is now responsive.

### March 4, 2021

#### New Features

* Data sources from different enterprise business applications can now be registered more easily in Data Hub using the new [Registration functionality](/catalog/register/register-data/). This will enable users to use those datasets when developing apps without having to worry about connectivity to the application. This functionality replaces the previous manual registration form.

### February 19, 2021

#### Improvements

* Two new endpoints have been added to the [Catalog API](/apidocs-mxsdk/apidocs/catalog-apis/) for registering published and consumed endpoints separately.

### January 28, 2021

#### Improvements

* You can now copy the dataset URI from the [data source details](/catalog/manage/search/#search-details) in the Catalog. This makes it easier to directly select datasets to use in other business applications from the context of the data source.

### January 21, 2021

#### New Features

* Custom icons can now be used for applications and data sources. Curators and owners can [upload their own icons](/catalog/manage/curate/#application-icon) or select from the Data Hub icon library.

#### Improvements

* Improvements have been made to security.

### January 14, 2021

#### New Features

* You can download the OData service contract for a registered data source from the [asset details](/catalog/manage/search/#download-contract) in the Catalog. The set of files that make up the contract will be downloaded as a ***.zip*** file.

#### Improvements

* Further improvements have been made to security in Data Hub.
* All screens in Data Hub are now responsive.

### January 7, 2021

#### New Features

* The [asset details](/catalog/manage/search/#search-details) in the Catalog now have added functionality to copy the URI of the data source or dataset to the clipboard. This functionality means that the Catalog can be used to discover registered assets—data sources and datasets—and access the data in other enterprise applications through the metadata URI.

#### Improvements

* There have been several improvements in the Data Hub user interface.

## 2020

### December 24, 2020

#### New Features

* The [search details](/catalog/manage/search/#search-details) in the Catalog now display the exposed **Datasets** (the entity set names of an entity) in place of the **entity** names. This means that for published services of Mendix apps, the name shown as the **Dataset** will be the Mendix **Exposed Entity set** name.
* In the [Catalog API](/apidocs-mxsdk/apidocs/catalog-apis/), the Search API (`GET` data) returns items that specify the entity sets instead of entity types. The response structure has been expanded by adding the fields `EntitySetName` `EntityTypeName` and `Namespace` at the `Item` and `ItemAssociation` level.

#### Improvements

* Contract validation has been improved when [manually registering Odata v4 contracts](/catalog/register/register-data/) or when using the `PUT` services API call for OData v4 services.

### December 17, 2020

#### New Feature

* The [Catalog API](/apidocs-mxsdk/apidocs/catalog-apis/) is available to enable searching of data sources in the Catalog. The API can be used to register data sources from your application to your organization's Data Hub.

### December 10, 2020

#### Improvements

* This release contains several security improvements.

### November 26, 2020

#### Improvements

* The Service [Metadata](/catalog/manage/search/#metadata) panel on the right side of the Catalog search details page has been reorganized to improve the grouping of the information.

#### Fixes

* You can now sign-out from the Mendix Platform from the Mendix top bar when you click on the account avatar.

### November 19, 2020

#### New Features

* We have added new functionality for adding [Business and Technical Owner contact details](/catalog/manage/search/#discoverability-metadata) when curating the **Application Details** of a registered asset. Curators and owners can select owners from a drop-down list or create a new owner and add their contact details.
* We have added a new tab to the Data Hub **Administration** page: Owner Management which provides an overview of the custom Business and Technical owners in the Catalog. From this release, the Data Hub Administrator and curators can now add, edit, and remove custom owners from this list.

#### Improvements

* We improved the screen layout of the **Data Hub** screen for different screens.
* We made several styling improvements and removed the empty last tab on the asset details page.

#### Fixes

* The [Validated](/catalog/manage/curate/#validated) label will now be correctly updated in the search results pane for the selected asset when it is changed by curators and the owners of the asset.
* We fixed an issue on the [Curation List](/catalog/manage/curate/#curatelist) where clicking on the **Added** column title (to change the sort order) resulted in an error.

### November 5, 2020

#### Improvements

* In the Data Hub **Catalog** search pane, we now show the number of [filters](/catalog/manage/search/#filter) that are active for the current search at the filter icon.

### October 29, 2020

#### Improvements

* In [Landscape](/data-hub/data-hub-landscape/) nodes are now static and cannot be dragged around the display. To see other parts of the selected assets network, you can pan and zoom using the mouse.
* In Data Hub **Catalog** by default, the [search filter](/catalog/manage/search/#filter) is set to show results in the **Production** environment only. To include hits in **Non-production** or **Sandbox** environments you have to check these boxes in the **Add Filters** dialog box.
* The [entity details](/catalog/manage/search/#entity-details) screen now displays the number of connections to the individual entity. The service details continue to show the total number of connections to the service.

### October 8, 2020

#### Improvements

* The Data Hub home tab is now called  **Data Hub**.
* From the **Data Hub** screen, you can now navigate to the [Mendix Academy learning path for Data Hub](https://academy.mendix.com/link/path/111/Share-Data-Between-Apps-Using-the-Data-Hub-Catalog) where you can learn how to easily share data to build apps in Studio Pro.

### October 1, 2020

Using data from other applications used to be a complex activity requiring an in-depth understanding of building integrations.

No more! We are very proud to announce that [Mendix Data Hub](https://catalog.mendix.com) is now generally available. Finding, understanding, and using data from other applications and services has never been this easy.

Every organization has valuable data in different applications. With Mendix Data Hub, you can use the data from different sources in your app without having to deal with complex integrations. All you need to do is just search for the data, add it to your domain model, and use it.

Want to know how it can help you? Check out the launch blog post: [Data Hub: The Low-Code Approach to Data Integration](https://www.mendix.com/blogs/data-hub-the-low-code-approach-to-data-integration).

For even more information, please consult the [Data Hub Guide](/data-hub/).
