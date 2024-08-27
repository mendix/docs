---
title: "Write Data to Another App"
url: /howto/integration/write-data/
description: "Describes how to add annotations to an OData service in Mendix Studio Pro, see external entities with these features in the Catalog, and use them to build your app."
weight: 20
aliases:
    - /data-hub/write-data/
    - /catalog/write-data/
---

## Introduction

This how-to builds on the information provided in [Share Data Between Apps](/howto/integration/share-data/) and shows how OData annotations give you the power to create, update, and delete data.

This how-to teaches you how to do the following:

* Expose updatable OData entities, attributes, and associations in Mendix Studio Pro
* See which capabilities a particular entity, attribute, or association has in the [Catalog](https://catalog.mendix.com/)
* Consume an updatable OData resource in your Mendix app

The OData protocol allows data to be read, created, updated, and deleted. Studio Pro takes advantage of some of these capabilities. The Catalog uses developer-familiar shorthand for these features, while Studio Pro uses the OData definitions.

Note the following terminology differences described in the table below:

| Catalog | Studio Pro |
| -------- | ---------- |
| Create   | Insertable |
| Read     | Readable   |
| Update   | Updatable  |
| Delete   | Deletable  |

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install the most recent version of [Studio Pro](https://marketplace.mendix.com/link/studiopro/)
* Understand how read-only external entities behave by reading [Share Data Between Apps](/howto/integration/share-data/)

## Exposing OData Contracts in Mendix Studio Pro

When you publish an entity in a published OData service, the client can read the data by default. To allow clients to update, insert, or delete the data, do the following:

1. Open the published OData service in **MyFirstModule** > **APIs** > **{yourname}CustomerODataService**.
2. Select the **Customer** entity and click **Edit**.
3. Select the checkboxes to indicate whether the entity should be **Insertable**, **Readable**, **Updatable**, and/or **Deletable**.

## Viewing OData Capabilities in Catalog {#view-capabilities}

The updatable OData capability relates to the data in your app. The Catalog provides an inventory of the metadata in your apps. In the Catalog, you can see entity, attribute, and association capabilities. Changes to the data itself occur in Mendix apps, not in the Catalog.

To see the capabilities of a particular OData entity, do the following: 

1. Go to the [Catalog](https://catalog.mendix.com/) and search for the name of an exposed OData service endpoint, entity, attribute, or association. For more information, see the [Using the Catalog and Curating Your Own Service](/howto/integration/share-data/#use-and-curate) section in *Share Data Between Apps*.
2. Select your entity from the left-side search results pane. If you do not see many results, try removing the **Production** filter on your search.

Notice the highlighted **CRUD** letters next to the entity name in the search panel and in the detailed information in the center. The purple letters indicate which operations are supported, and the gray letters indicate which are not. Hover over the letters to see which operations are supported. You will also see any OData restrictions here.

## Consuming OData Resources in Your Mendix App

Just like in the Catalog, you can see the **CRUD** capabilities of entities, attributes, and associations inside the [Integration pane](/refguide/integration-pane/) of Studio Pro.

{{< figure src="/attachments/catalog/write-data/crud-capabilities.png" alt="crud capabilities" class="no-border" >}}

To consume an OData entity, do the following:

1. In the **Integration** pane, enter a term in the search field. 
2. Select your entity from the **Integration** pane. By default, the pane only shows results published to the production environment. If you also want to see results from other environments, click the filter icon and select the **Show development environments** checkbox.
3. Drag the entity into the domain model.

Now you have an external entity in your domain model. Depending on the capabilities, you can use external entities to model your app as you normally would, although there are some limitations. For more information on limitations, see the [External Entities Limitations](/refguide/external-entities/#limitations) section in *External Entities*. 

## Validating Data and Error Handling {#data-validation}

You can [set up data validation](/refguide/setting-up-data-validation/) to check on inserted or updated data between your apps. An insert validation microflow in the domain model of the client application can check on the data that is inserted or updated.

How does the published service know that an insert fails? In the publishing app, you can use a validation message action to report the error. The client app can include a custom error handler on the [Send External Object](/refguide/send-external-object/) activity to handle the error.

The domain model for the publishing app's validation message looks like this:

{{< figure src="/attachments/catalog/write-data/validate-data-publishing-app.png" alt="publishing app validation" class="no-border" >}}

In the client app, the error handler would look like this:

{{< figure src="/attachments/catalog/write-data/validate-data-client-app.png" alt="client app validation" class="no-border" >}}
