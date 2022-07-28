---
title: "External Entities in Private Cloud"
url: /refguide/external-entities/
weight: 20
tags: ["domain model", "entity", "entities", "attribute", "external entities", "private cloud", "access rule", "studio pro", "consumed OData Service"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---
## 1 Introduction

Publishing and consuming [External Entities](/refguide/external-entities/) on the Mendix Cloud is made easy with the Data Hub Catalog.

Customers who are on private clouds or who want to deploy locally cannot make use of the Catalog, but they can still publish and consume external entities.

## 2 Manually Add a Service to the Data Hub Pane

1.  Export the contract from the publishing app.
    
    For a locally deployed app in Studio Pro the, URL is displayed under the Settings tab of the Published OData Service document. The OData metadata contract is the file $metadata file and the Service feed provides the location of locally stored datasets that you create for the app.

## 3 Registering a Service Through the Data Hub Catalog Registration API