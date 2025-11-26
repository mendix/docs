---
title: "Integrating Mendix with Altair Graph Studio"
linktitle: "Altair Graph Studio"
url: /refguide/altair-graph-studio
weight: 90
description: "Describes how to use graph data from Altair Graph Studio in your Mendix application."
---

## Introduction

Altair Graph Studio (AGS) provides a highly scalable graph database suitable for analytical queries, offering access to data from different backend systems. It is an extremely powerful tool to unify data from multiple backend systems and link it from different sources into one unified data model. Graph Studio provides both virtualized and replicated access to data, with powerful data ingestion facilities to ingest, transform, clean, and correlate data from different sources. 

This guide helps you understand the process of creating a graphmart in the Altair Graph Studio, loading data, and querying that data from a Mendix application using OData REST endpoints and SPARQL queries.

## Prerequisites

Before you begin, make sure you have:

* Access to an Altair Graph Studio instance
* A Mendix Studio Pro development environment (Mx9 or Mx10 recommended)
* Sample JSON data to import (or use the example data provided)
* Basic understanding of REST APIs and microflows in Mendix
* Graph Studio credentials (username and password for API authentication)

## Setting Up Graph Studio with an Ontology and Data

### Creating a New Graphmart

A graphmart in Altair Graph Studio is a logical container for your data and ontologies. It provides a unified view of data from one or more sources.
   
### Adding a Source Layer

A source layer allows you to import data from various sources or start from a JSON document. Source layers can:

* Import data from databases, APIs, or files
* Transform and map data to your ontology
* Keep data synchronized with source systems

{{< figure src="/attachments/refguide/modeling/integration/altair/add-layer.png" >}}

### Uploading and Validating JSON Data

You can start by uploading an example test dataset in JSON format. You can ask an LLM (for example, ChatGPT) to generate some sample data. This document uses a test set with PLM (Product Lifecycle Management) and BOM (Bill of Materials) data.

Upload the JSON source data into the source layer.

You can review the JSON structure and the data in the file you just uploaded in Graph Studio. It will show you a tree structure of your JSON file, data types, and sample values.

{{< figure src="/attachments/refguide/modeling/integration/altair/sample-data-plm.png" class="no-border" >}}

### Reviewing the Generated Ontology

When you save the source layer, an ontology will be automatically generated based on the JSON structure. You can review it in:

* The **Graph** tab for visual representation
* The **Ontology Models** section provides detailed class and property definitions

{{% alert color="info" %}}
You can customize the generated ontology by adding descriptions, constraints, and relationships between classes to better model your domain.
{{% /alert %}}

The **Ontology Models** section contains a definition based on the graph of the uploaded JSON data. The ontology defines the structure and main concepts of your data model.

### Creating and Testing a SPARQL Query

Now that you have data and an ontology in Graph Studio, create a SPARQL query to retrieve data from the graph. While Graph Studio also provides OData and SQL access, SPARQL is the most flexible way to work with graph data.

Create a new query in the Query Playground. Enter the SPARQL query and test the result.

{{< figure src="/attachments/refguide/modeling/integration/altair/sparql.png" >}}

The following is an example SPARQL query for customers:

```sparql
PREFIX dt: <http://cambridgesemantics.com/SourceLayer/YOUR_SOURCE_ID/Model#>

SELECT ?customerId ?customerName ?email ?phone ?city ?country
FROM <http://cambridgesemantics.com/SourceLayer/YOUR_SOURCE_ID/Model>
WHERE {
  ?customer a dt:Customer ;
            dt:customerId ?customerId ;
            dt:customerName ?customerName .
  OPTIONAL { ?customer dt:email ?email }
  OPTIONAL { ?customer dt:phone ?phone }
  OPTIONAL { ?customer dt:address ?address .
             ?address dt:city ?city ;
                      dt:country ?country }
}
ORDER BY ?customerName
```

Replace `YOUR_SOURCE_ID` with your actual source layer ID. You can find this ID in Graph Studio by navigating to your source layer and copying the ID from the URL or source layer details.

You now have a graph ontology in Altair Graph Studio with data and a SPARQL query that returns customers.

Altair Graph Studio allows you to do much more, such as ingesting data from data lakes or APIs and linking siloed data into one unified ontology, but for now, you can focus on this basic graph.

## Exposing Graph Data in the Mendix Application

Altair Graph Studio allows you to store and retrieve graph data structures. Using either OData REST endpoints or SPARQL queries via the SPARQL API endpoint, you can retrieve this data into your Mendix application.

The [OData](#odata-rest-endpoint) approach provides the easiest integration with automatic entity mapping and association handling, while the [SPARQL](#query-sparql) approach offers more control for complex graph queries. Both methods enable you to build powerful applications that leverage the scalability and flexibility of graph databases. 

### Exposing the Data via an OData REST Endpoint {#odata-rest-endpoint}

The simplest way to use graph data in a Mendix application is by using an OData endpoint. In Altair Graph Studio, you can export an entire graph via OData. This will create an OData endpoint allowing flexible OData queries on the data in your graph database.

#### Creating an OData API in Graph Studio

Create a new OData API in your graphmart. To do this, follow the steps below.

1. Go **Graphmarts** > **Exports** and select **Create OData REST Endpoint**.

    {{< figure src="/attachments/refguide/modeling/integration/altair/create-odata-rest.png" >}}

2. Choose **Auto generated Endpoint**. This is a one-click method to expose your entire graph through an OData API.

    {{< figure src="/attachments/refguide/modeling/integration/altair/auto-generated-endpoint.png" >}}

3. Provide a name and a description for the endpoint.

    {{< figure src="/attachments/refguide/modeling/integration/altair/endpoint-title.png" >}}

    The **ODBC (SQL)** endpoint listed on this page can be used to access the endpoint. You should now be able to open this endpoint in a browser and see the OData response.

    {{< figure src="/attachments/refguide/modeling/integration/altair/odbc-endpoint.png" >}}

4. To see the contract of the endpoint, use the endpoint URL displayed in the endpoint configuration page under **ODBC (SQL)** and append `/$metadata` to this URL. You will need it when using the endpoint in Studio Pro.

#### Using the OData Endpoint in a Mendix Project

Add a [consumed OData service](/refguide/consumed-odata-service/) in your project by opening Studio Pro and right-clicking your module > **Add other** > **Consumed OData service**. In the **Add Consumed OData Service** dialog, provide the location of the endpoint `$metadata` contract, as well as your username and password credentials. Studio Pro will read the contract to determine all the entities and actions provided by this endpoint.

{{< figure src="/attachments/refguide/modeling/integration/altair/add-consumed-odata.png" >}}

In the consumed OData service document, you can provide configuration for the endpoint location and credentials. The **Location** is the root endpoint URL you copied from Graph Studio (without the `$metadata` suffix).

{{< figure src="/attachments/refguide/modeling/integration/altair/endpoint-location.png" >}}

#### Creating External Entities for Datasets from the OData Endpoint

The [Integration pane](/refguide/integration-pane/) in the right column displays all the graph classes exposed via the OData REST API. You can see the attributes (properties) of these classes and the associations. The Integration pane also shows the capabilities of the data provided by the endpoint. In this example, all the data is read-only, as the Altair Graph Database only provides read-only access to the data.

Select which classes you need for your application and drag and drop them into a domain model. Here, they will be displayed as purple external entities. This indicates that the data is available to your application but is retrieved from an external service (in this case, the Altair Graph Database).

{{< figure src="/attachments/refguide/modeling/integration/altair/create-external-entities.png" >}}

#### Building Pages Using External Entities

You can use these external entities in your pages and microflows similarly to persistent entities. For this example, create your overview pages by right-clicking the entity and selecting **Generate overview pages**. 

{{< figure src="/attachments/refguide/modeling/integration/altair/building-pages.png" >}}

#### Running the Application and Test

You can now start the application and test the results. Whenever you open a page using external entities from the Integration pane, the data will automatically be retrieved from Altair Graph Studio via an OData REST call.

{{< figure src="/attachments/refguide/modeling/integration/altair/testing.png" >}}

Filtering, sorting, and pagination are automatically done server-side by your graph database. This is essential for large datasets to avoid overloading the front-end with too many objects.

#### Lazy-Loaded Tree Widget

Altair Graph Studio automatically provides associations for linked entities in your graph. These graph associations are part of the OData endpoint and part of your external entities. When you drag your OData datasets into your domain model, the resulting external entities will show associations from the OData endpoint.

{{< figure src="/attachments/refguide/modeling/integration/altair/tree-widget.png" >}}

This example page shows a tree that retrieves BOMs from the graph database. It will only load required data: first, the top-level BOMs, then, when you open one, its components will be retrieved over the association. Only when you open a component will it load the subcomponents.

This is done automatically when you set the external entities as the data source for the widgets in your tree.

{{< figure src="/attachments/refguide/modeling/integration/altair/data-source.png" >}}

### Query SPARQL in Mendix {#query-sparql}

If you need full control over your graph queries, you can use [consumed REST services](/refguide/consumed-rest-service/) to execute SPARQL queries in your graph database.

#### Configuring the REST Call

Run SPARQL queries from Mendix by using the SPARQL API in Altair Graph Studio. To do this, follow the steps below.

1. Create a new consumed REST service document and paste the query in the request body.

    {{< figure src="/attachments/refguide/modeling/integration/altair/paste-query.png" >}}

    The endpoint contains two main parts: the endpoint of the SPARQL API, and the graphmart you want to work with. You can define these in the endpoint.

2. Define the content types of the request and response:

      * Set **Accept** to `application/sparql-results+json`
      * Set **Content-Type** to `application/sparql-query`

      {{< figure src="/attachments/refguide/modeling/integration/altair/content-type.png" >}}

3. Run the API call and validate the resulting response message. The **Response** table will show the response JSON payload provided by your graph database.

    {{< figure src="/attachments/refguide/modeling/integration/altair/response.png" >}}

4. View the resulting entities in the **Response structure** tab. Here, you can rename and generate entities to capture the data in Studio Pro.

    {{< figure src="/attachments/refguide/modeling/integration/altair/response-structure.png" >}}

    The resulting domain model should look like this:

    {{< figure src="/attachments/refguide/modeling/integration/altair/domain-model.png" >}}

#### Microflow to Execute the SPARQL Query

Define a microflow that will execute the API call with the SPARQL query and return the resulting data as an entity list. In this example, the endpoint is defined using two constants:

* One for the graph database API
* One for the graphmart

By using constants, you can override these on deployment to match the environment you are deploying to.

{{< figure src="/attachments/refguide/modeling/integration/altair/microflow-sparql.png" >}}

#### Customers Overview Page

Create a page that will show the retrieved data. This example uses a [Data Grid 2](/appstore/modules/data-grid-2/) with a microflow data source. The microflow data source is configured to use the microflow that was created in the previous step.

{{< figure src="/attachments/refguide/modeling/integration/altair/overview-page.png" >}}

#### Testing the Result

You can now run your application to validate the result. It should have a data grid showing all objects and a detail form showing the details of one specific object, as seen below:

{{< figure src="/attachments/refguide/modeling/integration/altair/result.png" >}}

You should also see the detail pages that show data from a single concept in your graph database:

{{< figure src="/attachments/refguide/modeling/integration/altair/detail-page.png" >}}
