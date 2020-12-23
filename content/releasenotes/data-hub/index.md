---
title: "Data Hub"
description: "Release notes for updates to the Mendix Data Hub"
tags: ["data hub", "data hub catalog", "data hub Landscape"]
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

These release notes cover changes made to the [Mendix Data Hub](/data-hub/index).

## 2020

### December 24th, 2020

#### New Features
* The [search details](/data-hub/data-hub-catalog/search#search-details) for registered assets in the Data Hub Catalog now display the exposed **Datasets** (the entity set names of an entity) in place of the **entity** names. This means that for [published services](/data-hub/data-hub-catalog/register#odata-service-reg) of Mendix apps, the name shown as the **Dataset** will be the Mendix **Exposed Entity set** name.

* In the [Data Hub API](/apidocs-mxsdk/apidocs/data-hub-apis), the Search API (`GET` data) returns items that specify the entity sets instead of entity types. The response structure has been expanded by adding the fields `EntitySetName` `EntityTypeName` and `Namespace` at the `Item` and `ItemAssociation` level.

#### Improvements
* Contract validation has been improved when [manually registering Odata v4 contracts](/data-hub/data-hub-catalog/register#registration-form) or when using the `PUT` services API call for OData v4 services. 



## December 17th, 2020

#### New Feature

* The [Data Hub API](/apidocs-mxsdk/apidocs/data-hub-apis) is available to enable searching of data sources in the Data Hub Catalog. The API can be used to register data sources from your application to your organization's Data Hub. 



### December 10th, 2020

#### Improvements

* This release contains several security improvements.



### November 26th, 2020

#### Improvements
* The Service [Metadata](/data-hub/data-hub-catalog/search#metadata) panel on the right side of the the Data Hub Catalog search details page has been reorganized to improve the grouping of the information. 

#### Fixes

* You can now sign-out from the Mendix Platform from the Mendix top bar when you click on the account avatar.



### November 19th, 2020

#### New Features
* We have added new functionality for adding [Business and Technical Owner contact details](/data-hub/data-hub-catalog/curate#customowner) when curating the **Application Details** of a registered asset. Curators and owners can select owners from a drop-down list or create a new owner and add their contact details.
* We have added a new tab to the Data Hub **Administration** page: [Owner Management](/data-hub/general/data-hub-admin-functions#customowners) which provides an overview of the custom Business and Technical owners in the Data Hub Catalog. From this release, the Data Hub Administrator and curators can now add, edit, and remove custom owners from this list.

#### Improvements
* We improved the screen layout of the **Data Hub** screen for different screens. 
* We made several styling improvements and removed the empty last tab on the asset details page.

#### Fixes
* The [Validated](/data-hub/data-hub-catalog/curate#validated) label will now be correctly updated in the search results pane for the selected asset when it is changed by curators and the owners of the asset.
* We fixed an issue on the [Curation List](/data-hub/data-hub-catalog/curate#curatelist) where clicking on the **Added** column title (to change the sort order) resulted in an error. 



### November 5th, 2020

#### Improvements
* In the Data Hub **Catalog** search pane, we now show the number of  [filters](/data-hub/data-hub-catalog/search#filter) that are active for the current search at the filter icon.



### October 29th, 2020

#### Improvements

* In [Landscape](/data-hub/data-hub-landscape/index) nodes are now static and cannot be dragged around the display. To see other parts of of the selected assets network, you can pan and zoom using the mouse.
* In Data Hub **Catalog** by default, the [search filter](/data-hub/data-hub-catalog/search#filter) is set to show results in the **Production** environment only. To include hits in **Non-production** or **Sandbox** environments you have to check these boxes in the **Add Filters** dialog box.
* The [entity details](/data-hub/data-hub-catalog/search#entity-details) screen now displays the number of connections to the individual entity. The service details continue to show the total number of connections to the service.



### October 8th, 2020

#### Improvements

The Data Hub home tab is now called  **Data Hub**. 

From the **Data Hub** screen, you can now navigate to the [Mendix Academy learning path for Data Hub](https://academy.mendix.com/link/path/111/Share-Data-Between-Apps-Using-the-Data-Hub-Catalog) where you can learn how to easily share data to build apps in Studio Pro.



### October 1st, 2020

Using data from other applications used to be a complex activity requiring an in-depth understanding of building integrations. 

No more! We are very proud to announce that [Mendix Data Hub](https://hub.mendix.com) is now generally available. Finding, understanding, and using data from other applications and services has never been this easy.

Every organization has valuable data in different applications. With Mendix Data Hub, you can use the data from different sources in your app without having to deal with complex integrations. All you need to do is just search for the data, add it to your domain model, and use it. 

Want to know how it can help you? Check out the launch blog post: [Data Hub: The Low-Code Approach to Data Integration](http://www.mendix.com/blogs/data-hub-the-low-code-approach-to-data-integration).

For even more information, please consult the [Data Hub Guide](/data-hub/index).
