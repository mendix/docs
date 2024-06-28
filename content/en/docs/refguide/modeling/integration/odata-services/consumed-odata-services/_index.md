---
title: "Consumed OData Services"
url: /refguide/consumed-odata-services/
weight: 5
description: "Overview of consumed OData services for Mendix Studio Pro"
---

## 1 Introduction

Data can be published from an app for use by other apps through [published OData services](/refguide/published-odata-services/). Consumed OData services can be used to integrate external data sources and actions in apps through the [Integration pane](/refguide/integration-pane/).

OData services that are registered in the [Catalog](/catalog/) publish entities that can be dragged and dropped into your domain model through the Integration pane as external entities. The OData service document that is added to your app provides the information for retrieving the metadata for the service and published entities.

For further details on the consumed OData service document and updating consumed OData services in your app, see [Consumed OData Service](/refguide/consumed-odata-service/).

For details on the features that a published OData service must support and how the conversion from and to the Mendix data model works, see [Consumed OData Service Requirements](/refguide/consumed-odata-service-requirements/).

{{% alert color="warning" %}}
The OData implementation in Mendix does not support all features in the OData specification, nor do we have any plans to provide a full implementation of the entire specification. The supported capabilities of OData are focused on providing a simple and productive way to share data and logic between Mendix apps. Although OData [external entities](/refguide/external-entities/) may also work for third-party OData APIs, their use is not tested nor guaranteed. Please validate upfront that the functionality provided in Mendix matches the requirements of your third-party APIs. If [external entities](/refguide/external-entities/) do not work with your OData APIs, the advised alternative is to use [REST](/refguide/consumed-rest-services/) functionality.
{{% /alert %}}

## 2 OData Services {#odata-services}

### 2.1 External Entities {#external-entities}

When an external entity is used in an app, the associated data for the entity is retrieved through the information in the consumed OData service contract and returned.

External entities have some limitations compared to persistable entities:

* The aggregate functions (average, sum, maximum, minimum) cannot be used on external entities
* There are certain limitations on XPath constraints for external entities (for instance, you cannot filter on an association between a persistable entity and an external entity)
* External entities cannot be used in datasets
* [XPath constraints](/refguide/xpath-constraints/) in the access rules of external entities cannot be set

Associations between external entities (as defined in the originating app) are shown in the domain model. You can only use the associations where both sides are published.

You can create associations between local [persistable entities](/refguide/persistability/#persistable) and external entities. For those associations, the persistable entities need to be the owner.

#### 2.1.1 External Non-Persistable Entities {#external-non-persistable-entities}

When a service defines an entity without an entity set, it means that this entity is not persistable. You can add it to the domain model as a non-persistable entity.
The definition of this entity is read-only and is controlled in the service that publishes it. This means that you cannot add attributes or change them.

{{% alert type="info" %}}
Support for importing non-persistable entities from a consumed OData service was introduced in Studio Pro [10.8.0](/releasenotes/studio-pro/10.8/).
{{% /alert %}}

### 2.1.2 External Enumerations

When you consume an external entity that has an attribute of an enumeration type, the corresponding enumeration will be added to your project if it did not previously exist. The enumeration is created according to the definition in the OData service contract, meaning that all allowed values will be automatically added to your enumeration.

When the consumed OData service is deleted from your project, Studio Pro allows you to keep using an enumeration that was created from the deleted service by using the **Detach** button on the **External enumeration** dialog.

### 2.2 External Actions {#external-actions}

External actions allow you to execute actions published by the OData service. An action can take parameters and may return a value. This is defined in the OData service contract.

There are some limitations on which actions can be consumed. These are described in the [Requirements on Actions](/refguide/consumed-odata-service-requirements/#actions) section of *Consumed OData Service Requirements*.

### 2.3 Consumed OData Service

When an external entity is dragged into the domain model, the  **Consumed OData** document that is added to the model displays the values of the metadata contract from the service endpoint.

In the [Integration pane](/refguide/integration-pane/), the service and the entity are shown as consumed both in the search results pane and also in the **Used in your App** section.

If the metadata contract at the specified service endpoint is different to the contract in the current app model, this is indicated in the [Integration pane](/refguide/integration-pane/) search results and the **Properties** pane for the service with an **Update** icon (a blue arrow).

This means that the consumed service has to be **Updated** to the new contract. If this is not done, then this will result in errors when data has to be retrieved from the endpoint based on an outdated contract. Changes in consumed OData service contracts is further described in [Updating or Switching a Consumed OData Service](/refguide/consumed-odata-service/#updating).

#### 2.3.1 Limitations {#consumed-odata-service-limitations}

When you update a [consumed OData service](/refguide/consumed-odata-service/) with a new version from the Catalog, but close the document without saving, the blue arrow icon will no longer be shown to notify you about the available update for that service. Close your app and open it again and the error will be resolved.

## 3 Runtime Considerations

The service endpoint is called for every retrieval of consumed OData services. Therefore, the data retrieval for consumed external entities may be slower than local persistable entities.
