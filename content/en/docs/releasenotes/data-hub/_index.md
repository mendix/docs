---
title: "Data Hub"
url: /releasenotes/data-hub/
description: "Release notes for updates to the Mendix Data Hub"
tags: ["data hub", "data hub catalog", "data hub Landscape"]
weight: 30
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

These release notes cover changes made to the [Mendix Data Hub](/data-hub/).

## 2022

### May 5th, 2022

#### New Feature

* When a person is removed as a Technical Owner or Business Owner of an individual application, they will receive an MxDock notification confirming that they are no longer the point of contact.

### April 21st, 2022

#### Fixes

* We fixed a bug where the **Delete Data Source** button incorrectly appeared on a **Dataset** detail page.

### April 14th, 2022

#### New Features

* You can now delete applications through the **Registration API**. Check out the [Data Hub Registration API](https://datahub-spec.s3.eu-central-1.amazonaws.com/registration_v4.html), or read the documentation in the [Registration API](/apidocs-mxsdk/apidocs/data-hub-apis/#registration) section of *Data Hub APIs*.
* When a person is assigned to an application as a Technical Owner or Business Owner, they will receive an MxDock notification confirming their new role.

#### Fixes

* We fixed a `NullPointerException` that occured when the **Versions** of an endpoint was empty on the **Registration API** `GET` service call.
* We fixed an issue where the Catalog loaded in our unreleased dark mode. Dark mode is not ready yet, but we will let you know when that feature is available!

### April 7th, 2022

#### Fixes

* We corrected the OData file upload message that was incorrectly indicating the maximum file size as 1MB, when in fact the allowed maximum file size is 5MB.

### March 31st, 2022

#### Improvements

* We made various security improvements.

### March 24th, 2022

#### New Feature

* We added v4 compatibility for the **Transform API**. This is accessible via the [Data Hub Registration API](https://datahub-spec.s3.eu-central-1.amazonaws.com/registration_v4.html) under the **Endpoints** section.

#### Fixes

* We fixed a few styling issues.

### March 17th, 2022

#### Fixes

* We fixed the **Update/Switch** button's functionality for consumed OData services.

### March 10th, 2022

#### Improvements 

* We now support all OData versions and have unified all OData versions to a single **ContractType** with separate version attributes. Previously we only supported v3 and v4.
* We added v4 of the **Registration API** and **Search API** to support the unified OData type and version structure. View the [list of Data Hub APIs](https://datahub-spec.s3.eu-central-1.amazonaws.com/index.html) or see our [Data Hub APIs](/apidocs-mxsdk/apidocs/data-hub-apis/) documentation.

#### Fixes

* We added a loading spinner when you are waiting for a response on each of the registration form steps. 

### March 3rd, 2022

#### Improvements 

* We made the user experience for deleting data in the **Administration** page more consistent. Access the **Administration** page by going to the **Switch to** menu on the upper-right of the Catalog, then clicking **Control Center**.

#### Fixes

* We implemented a fix to allow users to re-register a previously deleted data source. You can do this by going to the **Register a Data Source** section on the Catalog home page.

### February 24th, 2022

#### Improvements 

* We improved the appearance of the Catalog by adjusting colors and styling.

#### Fixes

* We fixed a typo in a validation message that appeared if registering a contract failed.

### February 17th, 2022

#### Fixes

* We made various security and UI fixes.

### February 10th, 2022

#### New Features

* We added an option to [delete a data source](/data-hub/data-hub-catalog/curate/#delete-data-source), available for users with [curation](/data-hub/data-hub-catalog/curate/) rights. To delete a data source, go to the [Curation Bar](/data-hub/data-hub-catalog/curate/#curation-bar) for the data source and click **Edit**, then click **Delete Data Source**.

#### Fixes

* We fixed a bug where the Data Hub Catalog did not display the correct status of an updatable entity.
* We made various security and UI fixes.

### February 3rd, 2022

#### Fixes

* We fixed a bug on the **Contract Upload** page. The page incorrectly displayed a red warning border if you uploaded a document with non-blocking errors and then immediately deleted it. We have removed the red border in this scenario.

### January 27th, 2022

#### Improvements

* We added a notification menu to the upper-right menu header.
* We added counts to the **Catalog** page so that you can now see the total numbers of **Associations**, **Attributes**, and **Datasets**. The counts appear in parentheses next to each heading.

#### Fixes

* We fixed a bug that was causing the file uploader to get stuck when uploading an empty file.

### January 21st, 2022

#### Improvements

* The following OData contract parsing and validation improvements were added:
	* Improved detection and feedback on the OData version
	* Improved parsing and more detailed error messaging
	* Improved validation (after parsing succeeded) and more detailed error messaging

### January 14th, 2022

#### Fixes

* We fixed a bug where an error occurred after selecting any curate menu item on the **Curation** page as a Data Hub Curator.

### January 13th, 2022

#### Fixes

* We fixed a bug where V3 contracts uploaded as single XML files were not downloadable from the Data Hub Catalog via the **Download Contract** button.

### January 6th, 2022

#### Fixes 

* We updated the Log4j dependency to 2.17.1, which addresses [CVE-2021-44832](https://cert-portal.siemens.com/productcert/pdf/ssa-784507.pdf).

## 2021

### December 30th, 2021

#### Fixes

* We fixed an issue where a user registered an endpoint with an environment URL and the same relative path combination. As a result, an endpoint was reused from a different company.

### December 23rd, 2021

#### Fixes

* We fixed an issue where the user was logged out after changing the Technical Owner of a data source.
* We fixed an issue that occurred with scrolling on a data source deep-link page.

### December 20th, 2021

#### Fixes

* We updated the Log4j dependency to 2.17.0, which addresses [CVE-2021-45105](https://cert-portal.siemens.com/productcert/pdf/ssa-501673.pdf).

### December 16th, 2021

#### Fixes

* We fixed an issue that caused uploading a contract as a ZIP file to fail when the compression ratio was too high.

#### Improvements

* We consolidated the existing **Edit Metadata**, **Discoverability**, and **Validate** drop-down menus into one menu named **Edit**.

### December 9th, 2021

#### Fixes

* We fixed an issue that caused uploading a contract as a ZIP file to fail.
* We fixed an issue that occurred when searching for and then clicking a popular dataset.

### December 2nd, 2021

#### New Features

* We added a new **Settings** tab to the [Data Hub](/developerportal/control-center/data-hub-admin/#settings) page in Control Center with a default discoverability setting.
* We added a discoverability radio button to the data source [registration](/data-hub/data-hub-catalog/register-data/) form.

#### Fixes

* We fixed an issue with the icon size for the registered datasets.

### November 18th, 2021

#### Improvements

* Non-company admins are now navigated to the Control Center landing page instead of getting the **Access Denied** message.

### November 11th, 2021

#### Fixes

* We fixed an issue where a Data Hub Curator could not access the fourth page or above of [Company Assets](/data-hub/data-hub-catalog/curate/#curatelist).
* We fixed an issue with the landscape view for datasets.

### October 28th, 2021

#### Fixes

* We fixed an issue where the [Business Owner](/data-hub/data-hub-catalog/search/#busines-owner) name was not visible in the metadata of a data source.
* We removed the temporary administration link from the home page. The owner management page is now available from the [Curate](/data-hub/data-hub-catalog/curate/) tab for Data Hub Curators and from the [Administration](/developerportal/control-center/data-hub-admin/#custom-owners) page in Control Center for Mendix Administrators.

### October 14th, 2021

#### Improvements

* We made several design changes, mainly on the [Catalog](/data-hub/data-hub-catalog/) page. We moved items like **Environment Name** and **Version** to the newly arranged right sidebar menu.
* We moved the `ContractType` field to the `ServiceVersion` level. For more information, see [How to Register OData Resources in the Data Hub Catalog](/data-hub/data-hub-catalog/register-data/).
* We added an informative tooltip to the **Company** drop-down menu and a pop-up window for when the user is an external user for another company.
* We added in-app guidance to notify that you can switch the company when you have accepted a participation invitaion.

#### Fixes

* We removed byte order mark (BOM) from the uploaded contract XMLs.
* A consumed entity in Studio Pro now works after upgrading from OData v3 to OData v4.

### October 7th, 2021

#### Improvements

* We upgraded the Data Hub Catalog search engine to OpenSearch 1.0.

#### Fixes

* We fixed an issue that caused older Studio Pro versions to not be able to connect to the Data Hub Catalog.

### September 30th, 2021

#### Fixes

* We fixed an issue where searching in the [Data Hub pane](/refguide/data-hub-pane/) in Studio Pro caused an error.

### September 23rd, 2021

#### Data Hub Free Edition

* The Data Hub Free edition is now available to all Mendix users! Publish your data sources in the Data Hub Catalog, curate them, and then consume them in another application. Learn more about it [here](/data-hub/#data-hub-licences).

#### Fixes

* We fixed an issue where the **Curate** button appeared in the navigation for users who were not able to curate any content.
* We removed duplicate endpoints that had been created due to an issue fixed in the [September 9th](#nine) release.

### September 16th, 2021

#### Improvements

* API responses are now sanitized and will no longer have a chance of containing executable code.

#### Fixes

* We fixed an issue with pagination for Applications and Environments in the API.
* We fixed styling issues.

### September 9th, 2021 {#nine}

#### Fixes

* We fixed an issue where updating a service version created a new endpoint instead of updating the existing one.
* We fixed an issue that caused pagination URLs to be returned as *http* links rather than *https*.
* We fixed an issue where clicking **Control Center** in the top bar of the [Data Hub administration](/developerportal/control-center/#data-hub) page navigated to the Data Hub home page. Now, it navigates to Control Center.

### September 2nd, 2021

#### Fixes

* We removed the `SecurityClassification` from the `Endpoints` JSON structure of the [Register API](/apidocs-mxsdk/apidocs/data-hub-apis/). The creation of endpoints as `Public` via the API is no longer allowed due to security reasons.

### August 26th, 2021

#### Improvements

* The following API `GET` capabilities were added:
    * `GET` a specific consumed endpoint
    * `GET` all applications
    * `GET` all environments for an application
    * `GET` all consumed endpoints
* A change was made to the `POST` application API call to also allow for the `Opcenter` and `MindSphere` application types.
* We added Data Hub Catalog integration with [Control Center](/developerportal/control-center/#data-hub). For details, see [Data Hub Administration](/developerportal/control-center/data-hub-admin/).

### August 19th, 2021

#### Fixes

* We fixed inconsistencies in contract and security scheme between an endpoint API spec and implementation.
* We fixed an issue where the Mendix Admin did not see external users after adding them.
* We fixed styling issues on the **Administration** page.

###  August 12th, 2021

#### New Features

* We added the following write capabilities: 
    * Parsing updatable, insertable, and deletable capabilities from annotations is now available in OData v4 contracts
    * Write capabilities are returned on the [Data Hub Search API ](/apidocs-mxsdk/apidocs/data-hub-apis/)
    * Write capabilities are displayed on the Data Hub UI

#### Fixes

* We made improvements to Data Hub security.

### August 5th, 2021

#### Fixes

* We made various security and UI fixes.

### July 29th, 2021

#### New Feature

* The Mendix connector on the Data Hub **Home** page now also supports OData v4. 

### July 22nd, 2021

#### Fixes

* Administration pages no longer time out for Data Hub Admins.

### July 1st, 2021

#### Fixes

* We updated the example in the [Data Hub APIs](/apidocs-mxsdk/apidocs/data-hub-apis/) for `PUT` published endpoints to match the behavior.

### June 24th, 2021

#### New Features

* New [Registration API](/apidocs-mxsdk/apidocs/data-hub-apis/) endpoints now allow you to do the following:
  * `GET` all published endpoints
  * `GET`, `POST`, and `PUT` one individual published endpoint

### June 10th, 2021

#### Improvements

* In the search input boxes on the [Search result](/data-hub/data-hub-catalog/search/#search-results) listings and [Data Hub Home](/data-hub/data-hub-catalog/#data-hub-home) page, the magnifying glass now appears on the right side.
* In the [Search result](/data-hub/data-hub-catalog/search/#search-results) listings, the filters have been restyled.
* All cancel and discard buttons now have matching styles for improved usability.

### June 3rd, 2021

#### New Features

* All [Data Hub APIs](/apidocs-mxsdk/apidocs/data-hub-apis/) are now available at https://datahub-spec.s3.eu-central-1.amazonaws.com/index.html. The original Data Hub API is now split into 2 APIs for search and registration operations and include the following changes:
  * [Search](/apidocs-mxsdk/apidocs/data-hub-apis/) – includes GET calls for getting details of data sources
  * [Register](/apidocs-mxsdk/apidocs/data-hub-apis/) – PUT calls are added to enable users to update or register applications and environments by specifying a UUID

### May 27th, 2021

#### New Features

* A new connector has been added to the **Data Hub Home** for [registering](/data-hub/data-hub-catalog/register-data/) Siemens Opcenter data sources.

#### Improvements

* **Mindsphere** applications are now indicated with the display of the Mindsphere logo for all associated assets in the Catalog.
* In the [Search result](/data-hub/data-hub-catalog/search/#search-results) listings, the service version number is no longer next to the data source name, it is now displayed below it.

### May 12th, 2021

#### Improvements

* Datasets in the [search results list](/data-hub/data-hub-catalog/search/#search-results) that are validated are now clearly indicated as such.
* Custom owners can be added for an application when [registering data sources](/data-hub/data-hub-catalog/register-data/) using the business application connectors from the **Data Hub Home**.
* Further styling changes have been made to improve usability.

### May 6th, 2021

#### New Features

The [Data Hub Transform API](https://datahub-spec.s3.eu-central-1.amazonaws.com/transform.html) is available for Mendix users deploying their apps to non-Mendix environments.  The Transform API extracts the information from the the app’s `dependencies.json` file to generate the request bodies that are required when using the [Data Hub API](/apidocs-mxsdk/apidocs/data-hub-apis/). For further information see [Data Hub Transform API](/apidocs-mxsdk/apidocs/data-hub-apis/#transform).

### April 29th, 2021

#### Improvements

* Improvements have been made to the styling of the [Data Hub Home](/data-hub/data-hub-catalog/#data-hub-home).

### April 22nd, 2021

#### Improvements

*  [Search result](/data-hub/data-hub-catalog/search/#search-results) listings in Data Hub Catalog have been improved.  Data sources and datasets that are set as [Validated](/data-hub/data-hub-catalog/curate/#validated) will appear above assets that are not validated.

### April 1st, 2021

#### Improvements

*  [Registration](/data-hub/data-hub-catalog/register-data/) of data sources using the business application connectors from the **Data Hub Home** is improved. For each connector, users can register data sources by selecting from a list of apps and environments already registered in the Catalog for the business application. When none are registered, the  "**Create New...**" option will be presented.

### March 18th, 2021

#### Improvements

* A Mendix connector has been added to the business applications on the Data Hub Home to enable users to [manually register](/data-hub/data-hub-catalog/register-data/)  Mendix OData v3 contracts.
* Data sources that are [validated](/data-hub/data-hub-catalog/curate/#discoverability)  are now clearly indicated in the search results list and for the selected asset details with a validated shield icon. The validation status of the data source is now displayed in the metadata panel.
* The [discoverability](/data-hub/data-hub-catalog/curate/#discoverability) of a data source is displayed in the search results pane, the asset details screen and the the metadata panel.

### March 11th, 2021

#### Improvements

* Improvements have been made on the [discoverability](/data-hub/data-hub-catalog/curate/#discoverability) of registered assets.
* The functionality for [registering data sources from enterprise applications](/data-hub/data-hub-catalog/register-data/) is now responsive.

### March 4th, 2021

#### New Features

* Data sources from different enterprise business applications can now be registered more easily in Data Hub using the new [Registration functionality](/data-hub/data-hub-catalog/register-data/). This will enable users to use those datasets when developing apps without having to worry about connectivity to the application. This functionality replaces the previous manual registration form.

### February 19th, 2021

#### Improvements

* Two new endpoints have been added to the [Data Hub API](/apidocs-mxsdk/apidocs/data-hub-apis/) for registering published and consumed endpoints separately.

### January 28th, 2021

#### Improvements

* You can now copy the dataset URI from the [data source details](/data-hub/data-hub-catalog/search/#search-details) in the Data Hub Catalog. This makes it easier to directly select datasets to use in other business applications from the context of the data source.

### January 21st, 2021

#### New Features

* Custom icons can now be used for applications and data sources. Curators and owners can [upload their own icons](/data-hub/data-hub-catalog/curate/#application-icon) or select from the Data Hub icon library.

#### Improvements

* Improvements have been made to security.

### January 14th, 2021

#### New Features

* You can download the OData service contract for a registered data source from the [asset details](/data-hub/data-hub-catalog/search/#download-contract) in the Data Hub Catalog. The set of files that make up the contract will be downloaded as a ***.zip*** file.

#### Improvements

* Further improvements have been made to security in Data Hub.
* All screens in Data Hub are now responsive.

### January 7th, 2021

#### New Features

* The [asset details](/data-hub/data-hub-catalog/search/#search-details) in the Data Hub Catalog now have added functionality to copy the URI of the data source or dataset to the clipboard. This functionality means that the Data Hub Catalog can be used to discover registered assets—data sources and datasets—and access the data in other enterprise applications through the metadata URI.

#### Improvements

* There have been several improvements in the Data Hub user interface.

## 2020

### December 24th, 2020

#### New Features

* The [search details](/data-hub/data-hub-catalog/search/#search-details) in the Data Hub Catalog now display the exposed **Datasets** (the entity set names of an entity) in place of the **entity** names. This means that for published services of Mendix apps, the name shown as the **Dataset** will be the Mendix **Exposed Entity set** name.
* In the [Data Hub API](/apidocs-mxsdk/apidocs/data-hub-apis/), the Search API (`GET` data) returns items that specify the entity sets instead of entity types. The response structure has been expanded by adding the fields `EntitySetName` `EntityTypeName` and `Namespace` at the `Item` and `ItemAssociation` level.

#### Improvements

* Contract validation has been improved when [manually registering Odata v4 contracts](/data-hub/data-hub-catalog/register-data/) or when using the `PUT` services API call for OData v4 services.

### December 17th, 2020

#### New Feature

* The [Data Hub API](/apidocs-mxsdk/apidocs/data-hub-apis/) is available to enable searching of data sources in the Data Hub Catalog. The API can be used to register data sources from your application to your organization's Data Hub.

### December 10th, 2020

#### Improvements

* This release contains several security improvements.

### November 26th, 2020

#### Improvements

* The Service [Metadata](/data-hub/data-hub-catalog/search/#metadata) panel on the right side of the the Data Hub Catalog search details page has been reorganized to improve the grouping of the information.

#### Fixes

* You can now sign-out from the Mendix Platform from the Mendix top bar when you click on the account avatar.

### November 19th, 2020

#### New Features

* We have added new functionality for adding [Business and Technical Owner contact details](/data-hub/data-hub-catalog/curate/#custom-owner) when curating the **Application Details** of a registered asset. Curators and owners can select owners from a drop-down list or create a new owner and add their contact details.
* We have added a new tab to the Data Hub **Administration** page: Owner Management which provides an overview of the custom Business and Technical owners in the Data Hub Catalog. From this release, the Data Hub Administrator and curators can now add, edit, and remove custom owners from this list.

#### Improvements

* We improved the screen layout of the **Data Hub** screen for different screens.
* We made several styling improvements and removed the empty last tab on the asset details page.

#### Fixes

* The [Validated](/data-hub/data-hub-catalog/curate/#validated) label will now be correctly updated in the search results pane for the selected asset when it is changed by curators and the owners of the asset.
* We fixed an issue on the [Curation List](/data-hub/data-hub-catalog/curate/#curatelist) where clicking on the **Added** column title (to change the sort order) resulted in an error.

### November 5th, 2020

#### Improvements

* In the Data Hub **Catalog** search pane, we now show the number of  [filters](/data-hub/data-hub-catalog/search/#filter) that are active for the current search at the filter icon.

### October 29th, 2020

#### Improvements

* In [Landscape](/data-hub/data-hub-landscape/) nodes are now static and cannot be dragged around the display. To see other parts of of the selected assets network, you can pan and zoom using the mouse.
* In Data Hub **Catalog** by default, the [search filter](/data-hub/data-hub-catalog/search/#filter) is set to show results in the **Production** environment only. To include hits in **Non-production** or **Sandbox** environments you have to check these boxes in the **Add Filters** dialog box.
* The [entity details](/data-hub/data-hub-catalog/search/#entity-details) screen now displays the number of connections to the individual entity. The service details continue to show the total number of connections to the service.

### October 8th, 2020

#### Improvements

* The Data Hub home tab is now called  **Data Hub**.
* From the **Data Hub** screen, you can now navigate to the [Mendix Academy learning path for Data Hub](https://academy.mendix.com/link/path/111/Share-Data-Between-Apps-Using-the-Data-Hub-Catalog) where you can learn how to easily share data to build apps in Studio Pro.

### October 1st, 2020

Using data from other applications used to be a complex activity requiring an in-depth understanding of building integrations.

No more! We are very proud to announce that [Mendix Data Hub](https://hub.mendix.com) is now generally available. Finding, understanding, and using data from other applications and services has never been this easy.

Every organization has valuable data in different applications. With Mendix Data Hub, you can use the data from different sources in your app without having to deal with complex integrations. All you need to do is just search for the data, add it to your domain model, and use it.

Want to know how it can help you? Check out the launch blog post: [Data Hub: The Low-Code Approach to Data Integration](http://www.mendix.com/blogs/data-hub-the-low-code-approach-to-data-integration).

For even more information, please consult the [Data Hub Guide](/data-hub/).
