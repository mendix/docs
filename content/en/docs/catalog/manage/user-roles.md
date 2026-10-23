---
title: "Catalog User Roles"
url: /catalog/manage/user-roles/
description: "Describes the user roles in the Catalog."
aliases:
    - /catalog/manage-data-sources/user-roles/
    - /data-hub/data-hub-catalog/user-roles/
    - /data-hub/data-hub-catalog/manage-data-sources/user-roles/
---

## Introduction

You can use the Catalog to search for and consume registered OData and OpenAPI services. You can also register new services and curate your own services.

Specifically, you can use the Catalog to do the following: 

* Publish services and register them in the Catalog from Studio Pro
* Manually register [published OData services](/refguide/published-odata-services/) (v2, v3, and v4) for non-Mendix apps
* Update the metadata (such as descriptions, tags, contact information, and discoverability) of your own registered services
* See all the discoverable services and datasets registered in your organization’s Catalog, and connect to the data by using the published entities as external entities in your apps in Studio Pro

## Mendix Admin {#admin}

A Mendix Admin can do the following:

* Act as a [Mendix Admin](/control-center/catalog-admin/) of the organization's Catalog
* Assign [Curator](#curator) roles
* Curate the Catalog according to the organization's data governance policy
* Access all the registered assets in the Catalog for the organization

For more information, see the [Catalog Administration](/control-center/catalog-admin/) section of *Control Center*. 

### External Users

Mendix Admins can add external users to their company's Catalog. For more information, see the [External Users](/control-center/catalog-admin/#external-users) section in *Catalog Administration*.

## Curator {#curator}

The Curator curates registered services in the Catalog. They can ensure that registered services are visible to the relevant users and can enrich the information on registered assets. An organization can have several Curators. 

Curators are assigned by a [Mendix Admin](#admin) and can enrich the metadata of registered services and datasets with descriptions, tags, contact information, and discoverability.
