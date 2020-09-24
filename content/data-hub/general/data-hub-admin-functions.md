---
title: "Data Hub Admin Functions"
category: "General Info"
description: "This guide describes how to assign the Mendix Data Hub Roles as a Data Hub Admin."
tags: ["data hub", "Data Hub Admin", "curator"]
---

{{% todo %}}[this doc will describe how to assign and change roles in the Data Hub]{{% /todo %}}

## 1 Introduction

The Mendix Data Hub Adminstrator can perform admin functions for the Data Hub such as assigning the curator roles from the **Data Hub Admin** page.

{{% alert type="info" %}}

The Data Hub Admin for the current release of Data Hub is assigned by [Mendix Support](https://support.mendix.com/hc/en-us): please contact your support representative.

{{% /alert %}}

This how-to describes how Mendix Data Hub Admin can assign the curator role to users.

{{% todo %}}[this will, of course, change to Mendix Company Admin with an x-ref to [Company & App Roles](/developerportal/company-app-roles) when this implemented]{{% /todo %}}

## 2 Adding a Curator

### {#curator}

The Data Hub Curator curates registered assets in the Data Hub Catalog to enrich the information on registered assets and maintain assets. 

Curators can see and curate all registered assets in the Data Hub Catalog, including the ones that are set to **Non-discoverable** by service owners. 

Users with the curator role can perform the following functions:

* Maintain registered OData services and manage versions
* Ensure the discoverability of their entities by the relevant users
* Enrich the metadata of registered services and entities by adding additional information such as – for example descriptions, tags, and contact information

### 3.3 Data Hub Users

The typical Mendix user is able to use the Data Hub Catalog to search and use registered services. Users can also register new services through published OData services, and as owners, users are able to have curation rights over their OData services.

Data Hub users can do the following: 

* Publish services and register them in the Data Hub Catalog from Studio Pro
* Register published OData V4 Services for non-Mendix apps manually
* Update the metadata such as descriptions, tags, and contact information of their own registered services
	* In addition, owners can set the discoverability of their services, thereby publishing the service and the exposed entities for use by other users
* See all the discoverable services and entities registered in their organization’s Data Hub Catalog and connect to the data by using the published entities as external entities in their apps in the Mendix Studios

{{% alert type="info" %}}
A user who publishes an OData service is the technical owner of the service and thereby has a [Data Hub Curator](#curator) role over their own services. If they have registered services which are not published and are non-discoverable, only they will be able to find and consume these services. 
{{% /alert %}}
