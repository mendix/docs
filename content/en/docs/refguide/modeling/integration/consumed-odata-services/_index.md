---
title: "Consumed OData Services"
url: /refguide/consumed-odata-services/
weight: 5
description: "Overview of consumed OData services for Studios"
tags: ["studio pro"]
---

## 1 Introduction

Data can be published from an app for use by other apps through [published OData services](/refguide/published-odata-services/). Consumed OData services can be used to integrate external data sources in apps through [Mendix Data Hub](/data-hub/).

Mendix Data Hub enables integration of available data sources from different sources in an organization into your Mendix apps.  OData services that are registered in the [Data Hub Catalog](/data-hub/data-hub-catalog/) expose entities that can be dragged and dropped into your domain model through the [Data Hub pane](/refguide/data-hub-pane/) as external entities. The OData service document that is added to your app provides the information for retrieving the metadata for the service and exposed entities.

For further details on the consumed OData service document and updating consumed OData services in your app, see [Consumed OData Service](/refguide/consumed-odata-service/).

{{% alert color="info" %}}
Mendix Data Hub is a licensed product. Using external entities to consume OData services requires a license, and the type of license you have defines how many data records can be consumed.  For further details, see the [Data Hub License Limitations](/refguide/consumed-odata-service-requirements/#license-limitations) section of *Consumed OData Service Requirements*. To find out more about your Data Hub license, contact [Mendix Support](https://support.mendix.com).
{{% /alert %}}

For details on the features that a published OData service must support and how the conversion from and to the Mendix data model works, see [Consumed OData Service Requirements](/refguide/consumed-odata-service-requirements/).

## 2 OData Services and External Entities {#external-entities}

When an external entity is used in an app, the associated dataset for the entity is retrieved through the information in the consumed OData service contract and returned.

### 2.1 External Entities

External entities have some limitations compared to persistable entities:

* The aggregate functions (average, sum, maximum, minimum) cannot be used on external entities
* There are certain limitations on XPath constraints for external entities (for instance, you cannot filter on an association between a persistable entity and an external entity)
* External entities cannot be used in datasets
* [XPath constraints](/refguide/xpath-constraints/) in the access rules of external entities cannot be set

Associations between external entities (as defined in the originating app) are shown in the domain model. You can only use the associations where both sides are exposed.

You can create associations between local [persistable entities](/refguide/persistability/#persistable) and external entities. For those associations, the persistable entities need to be the owner.

### 2.2 Consumed OData Service

When an external entity is dragged into the domain model, the  **Consumed Odata** document that is added to the model displays the values of the metadata contract from the service endpoint.

In the **Data Hub** pane, the service and the entity are shown as consumed both in the search results pane and also in the **Used in your App** section.

If the metadata contract at the specified service endpoint is different to the contract in the current app model, this is indicated in the **Data Hub** pane search results and the **Properties** pane for the service with an **Update** icon (a blue arrow).

This means that the consumed service has to be **Updated** to the new contract. If this is not done, then this will result in errors when data has to be retrieved from the endpoint based on an outdated contract. Changes in consumed OData service contracts is further described in [Updating or Switching a Consumed OData Service](/refguide/consumed-odata-service/#updating).

## 3 Runtime Considerations

The service endpoint is called for every retrieval of consumed OData services. Therefore, the data retrieval for consumed external entities may be slower than local persistable entities.
