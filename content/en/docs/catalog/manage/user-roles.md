---
title: "Catalog User Roles"
url: /catalog/manage/user-roles/
description: "Describes the user roles in the Catalog."
tags: ["data hub", "Catalog", "curate", "user roles", "curator", "admin"]
aliases:
    - /catalog/manage-data-sources/user-roles/
    - /data-hub/data-hub-catalog/user-roles/
    - /data-hub/data-hub-catalog/manage-data-sources/user-roles/
---

## 1 Introduction

Mendix users can use the Catalog to search for and consume registered OData services. Users can also register new services and, because they are the data source owners, curate them.

Catalog users can do the following: 

* Publish services and register them in the Catalog from Studio Pro
* Register [published OData services](/refguide/published-odata-services/)(v2, v3, and v4) for non-Mendix apps manually
* Update the metadata such as descriptions, tags, contact information, and discoverability of their own registered services
* See all the discoverable services and datasets registered in their organization’s Catalog, and connect to the data by using the published entities as external entities in their apps in Studio Pro

## 2 Mendix Admin {#admin}

A Mendix Admin can do the following:

* Act as a [Mendix Admin](/developerportal/control-center/catalog-admin/) of the organization's Catalog
* Assign [Curator](#curator) roles
* Curate the Catalog according to the organization's data governance policy
* Access all the registered assets in the Catalog for the organization

For more information, see the [Catalog](/developerportal/control-center/#catalog) section of *Control Center*. 

### 2.1 External Users

Mendix Admins can add **External Users** to their company's Catalog. See the [External Users](/developerportal/control-center/catalog-admin/#external-users) section in *Catalog Administration*.

## 3 Curator {#curator}

The Curator curates registered services in the Catalog to ensure that registered services are visible to the relevant users and to enrich the information on registered assets. An organization can have several Curators. 

Curators are assigned by the a [Mendix Admin](#admin) and can enrich the metadata of registered services and datasets with descriptions, tags, contact information, and discoverability.
