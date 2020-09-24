---
title: "Consumed OData Services"
parent: "integration"
description: "Overview of consumed OData services for Studios"
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% todo %}}[edit further and add x-refs, and notify https://gitlab.rnd.mendix.com/integration/integration.wiki/-/blob/master/refguide/consumed-odata-services.md that this version is now the latest]{{% /todo %}}

## 1 Introduction

Data can be published from an app for use by other apps through [published OData services](published-odata-services). Consumed OData services can be used to integrate external data sources in apps through [Mendix Data Hub](/data-hub/index). 

Mendix Data Hub enables integration of available data sources from the different sources in an organization into your Mendix apps.  OData services that are registered in the [Data Hub Catalog](data-hub-catalog) expose entities that can be dragged and dropped into your domain model through the [Data Hub pane](data-hub-pane) as external entities. When these entities are used in an app project, the data that these entities connect to is retrieved from the consumed OData service document that is added to your project.

For further details on the consumed OData service document and updating consumed OData services in your project, see [Consumed OData Service](consumed-odata-service).

{{% todo %}}[refine further and orient towards Data Hub.  ]{{% /todo %}}

For details on the features that a published OData service must support as well as how the conversion from and to the Mendix data model works, see [Consumed OData Service Requirements](consumed-odata-service-requirements).

{{% todo %}}[ This text needs to be added once the details on licesing are finalized. Consuming OData services requires a license. Without a license, the app will retrieve up to 1000 records from the OData service per day. After that limit is exceeded, an error will occur when users try to retrieve more data. ]{{% /todo %}}

## 2 OData Services and External Entities

{{% todo %}}[ Consider moving this to External entities doc. or add x-ref . However, it is a summary and all the info is given elsewhere. Next iteration is to analyse all the available data and re-organize]{{% /todo %}}

When an external entity from an OData service is used, the OData service is called and the data is returned. These entities have some limitations compared to persistent entities:

* External entities are read-only
* The aggregate functions (average, sum, maximum, minimum) cannot be used on external entities
* There are certain limitations on XPath constraints for external entities (for instance, you cannot filter on an association between a persistable entity and an external entity)
* External entities cannot be used in datasets
* [XPath constraints](/refguide/xpath-constraints) in the access rules of external OData entities cannot be set

Associations between external entities appear in the domain model. You can only use associations of which both sides are exposed.

You can create associations between [persistable entities](persistability#persistable) and external entities. For those associations, the persistable entities need to be the owner.

## 3 Runtime Considerations

The service endpoint is called for every retrieval of consumed OData services, therefore, the data retrieval for consumed external entities may be slower than local persistable entities.

{{% todo %}}[ what is the value of this? Here?]{{% /todo %}}