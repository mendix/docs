---
title: "Consumed OData Services"
parent: "integration"
description: "Overview of consumed OData services for Studios"
tags: ["studio pro"]
#This file superseded .
---

{{% todo %}}[edit further and add x-refs, and notify https://gitlab.rnd.mendix.com/integration/integration.wiki/-/blob/master/refguide/consumed-odata-services.md that this version is now the latest]{{% /todo %}}

## 1 Introduction

Data can be published from an app for use by other apps through [published OData services](published-odata-services). Consumed OData services can be used to integrate external data sources in apps through [Mendix Data Hub](/data-hub/index). 

Mendix Data Hub enables integration of available data sources from different sources in an organization into your Mendix apps.  OData services that are registered in the [Data Hub Catalog](/data-hub/data-hub-catalog/index) expose entities that can be dragged and dropped into your domain model through the [Data Hub pane](data-hub-pane) as external entities. The OData service document that is added to your project provides the information for retrieving the metadata for the service and exposed entities.

For further details on the consumed OData service document and updating consumed OData services in your project, see [Consumed OData Service](consumed-odata-service).

{{% alert type="info" %}}
Mendix Data Hub is a licensed product. Using external entities to consume OData services requires a license, and the type of license you have will define how many data records can be consumed.  For further details, see the [Data Hub License Limitations](consumed-odata-service-requirements#license-limitations) section of *Consumed OData Service Requirements*. To find out more about your Data Hub license, contact [Mendix Support](https://support.mendix.com).
{{% /alert %}}

For details on the features that a published OData service must support and how the conversion from and to the Mendix data model works, see [Consumed OData Service Requirements](consumed-odata-service-requirements).

## 2 OData Services and External Entities

{{% todo %}}[ Consider moving this to External entities doc. or add x-ref . However, it is a summary and all the info is given elsewhere. Next iteration is to analyze all the available data and re-organize]{{% /todo %}}

When you use an OData service to retrieve data from an external entity, the OData service is called and the data is returned.

When an external entity is used in an app project, the associated dataset for the entity is retrieved through the OData service and returned. These entities have some limitations compared to persistable entities:

* External entities are read-only
* The aggregate functions (average, sum, maximum, minimum) cannot be used on external entities
* There are certain limitations on XPath constraints for external entities (for instance, you cannot filter on an association between a persistable entity and an external entity)
* External entities cannot be used in datasets
* [XPath constraints](/refguide/xpath-constraints) in the access rules of external entities cannot be set

Associations between external entities appear in the domain model. You can only use associations where both sides are exposed.

You can create associations between [persistable entities](persistability#persistable) and external entities. For those associations, the persistable entities need to be the owner.

## 3 Runtime Considerations

The service endpoint is called for every retrieval of consumed OData services, therefore, the data retrieval for consumed external entities may be slower than local persistable entities.

{{% todo %}}[ what is the value of this? Here?]{{% /todo %}}
