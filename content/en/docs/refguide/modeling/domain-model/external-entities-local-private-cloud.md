---
title: "External Entities: Private Cloud or Local Deployments"
url: /refguide/external-entities-pc-local/
weight: 20
tags: ["domain model", "entity", "entities", "attribute", "external entities", "private cloud", "access rule", "studio pro", "consumed OData Service"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---
## 1 Introduction

Publishing and consuming [External Entities](/refguide/external-entities/) on the Mendix Cloud is made easy with the [Data Hub Catalog](/data-hub/data-hub-catalog/). Licensed Mendix for [Private Cloud](/developerportal/deploy/private-cloud/) users, or users who want to deploy locally, fear not! You can still publish and consume external entities.

This guide

### 1.1 Prerequisites

* A [Data Hub license](/data-hub/#data-hub-licences)


## 2 Manually Add a Service to the Data Hub Pane

1.  Export the contract from the publishing app.
    
    For a locally deployed app in Studio Pro the, URL is displayed under the Settings tab of the Published OData Service document. The OData metadata contract is the file $metadata file and the Service feed provides the location of locally stored datasets that you create for the app.

## 3 Registering a Service Through the Data Hub Catalog Registration API