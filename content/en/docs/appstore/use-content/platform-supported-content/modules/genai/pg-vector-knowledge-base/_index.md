---
title: "PgVector Knowledge Base"
url: /appstore/modules/genai/pgvector/
linktitle: "PgVector Knowledge Base"
description: "Describes the configuration and usage of the PgVector Knowledge Base module from the Mendix Marketplace. This module allows developers to integrate PostgreSQL databases with pgvector installed as knowledge bases into their Mendix app."
weight: 70
aliases:
   - /appstore/modules/pgvector-knowledge-base/
---

## Introduction {#introduction}

The [PgVector Knowledge Base](https://marketplace.mendix.com/link/component/225063) module contains operations to interact with a PostgreSQL database that has the [pgvector](https://github.com/pgvector/pgvector?tab=readme-ov-file#pgvector) extension installed. It lets you easily store vectors and perform cosine similarity calculations from your Mendix app. This way, you can leverage knowledge bases to enhance your app functionality by performing operations based on (embedding) vectors and vector similarity. In the context of generative AI, large language models (LLMs), and embeddings, this is a key component in natural language processing (NLP) patterns such as retrieval augmented generation (RAG), recommendation algorithms, and similarity search operations.

### Typical Use Cases {#use-cases}

This module is particularly powerful for Mendix apps that use large language models in generative AI contexts. The PgVector Knowledge Base module allows these apps to securely use private company data in the app logic. For example, this might be essential when constructing prompts.

When there is a need for a separate private knowledge base outside of the LLM infrastructure, this module provides a low-code way to store discrete pieces of data (commonly refered to as **chunks**) in the private knowledge base and retrieve relevant information for end-user actions or app processes.

{{% alert color="info" %}}
Check out the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) to see example implementations, including retrieval augmented generation and semantic search with knowledge bases.
{{% /alert %}}

#### Retrieval Augmented Generation {#use-cases-rag}

A common NLP pattern is retrieval augmented generation (RAG), where the goal is to have LLMs construct answers to questions or provide on-demand information about private knowledge base data. In order to make this work, discrete pieces of information from the knowledge base are sent along with user questions to the LLM. The retrieval operations from this module are designed for this step in such use cases.

#### Semantic Search {#use-cases-semantic-search}

Also without invoking LLMs directly with the retrieved information, the similarity search logic from the retrieval operation can be leveraged in combination with embedding models to create a semantic search in a Mendix app. This can be used for fuzzy search capabilities, suggestions, or simple recommendation systems.

### Features {#features}

With the current version, Mendix supports inserting data chunks with their vectors into a knowledge base (population) and selecting those records from that moment onwards (retrieval). Apart from cosine similarity search, which is executed based on the vector only, custom filtering is possible using key-value labeling (metadata) to support an additional traditional search component.

### Prerequisites {#prerequisites}

You should have access to your own (remote) PostgreSQL database server with the [pgvector](https://github.com/pgvector/pgvector) extension installed. For more information, see the [Setting up a Vector Database](/appstore/modules/genai/pgvector-setup/) section.

{{% alert color="info" %}}This module cannot be used with the Mendix Cloud app database. It only works if you are using your own database server or Amazon RDS.{{% /alert %}}

### Dependencies {#dependencies}

* Mendix Studio Pro version [9.24.2](/releasenotes/studio-pro/9.24/#9242) or higher 
* [Encryption](https://marketplace.mendix.com/link/component/1011) module
* [Community Commons](https://marketplace.mendix.com/link/component/170) module
* [Database Connector](https://marketplace.mendix.com/link/component/2888) module
* [GenAI Commons](https://marketplace.mendix.com/link/component/227933) module

## Installation {#installation}

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the PgVector Knowledge Base module into your app.

## Configuration {#configuration}

After you install the PgVector Knowledge Base module, you can find it in the **App Explorer**, in the **Marketplace modules** section. The connector provides a domain model and several activities that you can use to connect your app to a database and let it act as a knowledge base. To implement an activity, use it in a microflow. To ensure that your app can connect to an external database, you must also [configure the Encryption module](/appstore/modules/encryption/#configuration).

### General Configuration {#general-configuration}

You must perform the following steps to integrate a Mendix app integrate a PgVector knowledge base:

1. Add the module role **PgVectorKnowledgeBase.Administrator** to your Administrator user role in the security settings of your app. Optionally, map **GenAICommons.User** to any user roles that need read access directly on retrieved entities.
2. Add the **DatabaseConfiguration_Overview** page (**USE_ME > Configuration**) to your navigation, or add the **Snippet_DatabaseConfigurations** to a page that is already part of your navigation. 
3. Set up your database configurations at runtime. For more information, see the [Configuring the Database Connection Details](/appstore/modules/genai/pgvector-setup/#configure-database-connection) section in *Setting up a Vector Database*.

{{% alert color="info" %}}
It is possible to have multiple knowledge bases in the same database in parallel by providing different knowledge base names in combination with the same `DatabaseConfiguration`.
{{% /alert %}}

### General Operations {#general-operations-configuration} 

After following the general setup above, you are all set to use the microflows and Java actions in the **USE_ME > Operations** folder in your logic. Currently, ten operations (microflows and Java actions) are exposed as microflow actions under the **PgVector Knowledge Base Operations** category in the **Toolbox** in Mendix Studio Pro. These can be split into three categories, corresponding to the main functionalities: managing data chunks in the knowledge base (for example, [(Re)populate](#repopulate-knowledge-base)), finding relevant data chunks in an existing knowledge base (for example, [Retrieve](#retrieve)), and deleting chunk data or a whole knowledge base (for exapmle, [Delete Knowledge Base](#delete-knowledge-base)). In many occasions, metadata in a [MetadataCollection](/appstore/modules/genai/commons/) can be provided to enable additional filtering.

Additionally, there is one activity to prepare the connection input, which is a required input parameter for all operations, under **USE_ME > Connection**, and exposed separately in the **Toolbox** in Studio Pro.

#### `Create PgVector Knowledge Base Connection` {#create-pgvectorconnection}

All operations that include knowledge base interaction need the connection details to the knowledge base. Adhering to the GenAI Commons standard, this information is conveyed in a specialization of the GenAI Commons [Connection](/appstore/modules/genai/commons/) entity (see the [Technical Reference](#technical-reference) section). After instantiating the `PgVectorKnowledgeBaseConnection` based on custom logic and/or front-end logic, this object can be used for the actual knowledge base operations.

### (Re)populate Operations {#repopulate-operations-configuration}

In order to add data to the knowledge base, you need to have discrete pieces of information and create knowledge base chunks for those. You can use the [operations for Chunks and KnowledgeBaseChunks in the GenAI Commons module](/appstore/modules/genai/commons/). After you create the knowledge base chunks and [generate embedding vectors for them](/appstore/modules/genai/commons/), the resulting `ChunkCollection` can be inserted into the knowledge base using an operation for insertion, for example the `(Re)populate Knowledge Base` operation. 

A typical pattern for populating a knowledge base is as follows:

1. Create a new `ChunkCollection`. See the [Initialize ChunkCollection](/appstore/modules/genai/commons/) section.
2. For each knowledge item that needs to be inserted, do the following:
    * Use [Initialize MetadataCollection with Metadata](/appstore/modules/genai/commons/) and [Add Metadata to MetadataCollection](/appstore/modules/genai/commons/) to create a collection of the necessary metadata for the knowledge base item.
    * With both collections as input parameters, use [Add KnowledgeBaseChunk to ChunkCollection](/appstore/modules/genai/commons/) for the knowledge item.
3. Call an embeddings endpoint with the `ChunkCollection` to generate an embedding vector for each `KnowledgeBaseChunk`
4. With the `ChunkCollection`, use [(Re)populate Knowledge Base](#repopulate-knowledge-base) to store the chunks.

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/pgvector-knowledge-base/pgvector-embedandrepopulate.png" >}}

#### `(Re)populate Knowledge Base` {#repopulate-knowledge-base}

This operation handles the following:

* Clearing the knowledge base if it does exist 
* Creating the empty knowledge base if it does not exist
* Inserting all provided knowledge base chunks with their metadata into the knowledge base

The population handles a whole collection of chunks at once, and this `ChunkCollection` should be created using the [Initialize ChunkCollection](/appstore/modules/genai/commons/) and [Add KnowledgeBaseChunk to ChunkCollection](/appstore/modules/genai/commons/) operations. 

#### `Insert` {#insert}

In cases where additional records need to be added to an existing knowledge base, the `Insert` operation can be used. This operation handles a collection of chunks that need to be inserted into the knowledge base. It behaves similarly to the [(Re)populate](#repopulate-knowledge-base) operation, except that it does not delete any data. 

#### `Replace` {#replace}

The `Replace` operation is intended to be used in scenarios in which the chunks in the knowledge base are related to Mendix objects (in other words, data in the Mendix database). It can be used to keep the knowledge base in sync when data in your Mendix app database changes, which needs to be reflected in the knowledge base. The operation handles a collection of chunks: it will remove the knowledge base data for the Mendix objects the chunks refer to, after which the new data is inserted. For example, this operation can be used before a Mendix object gets committed to keep the knowledgebase in sync with the change.

### Retrieve Operations {#retrieve-operations}

Currently, four operations are available for on-demand retrieval of data chunks from a knowledge base. All operations work on a single knowledge base (specified by the knowledge base name) on a single database server (specified by the `DatabaseConfiguration`). The details for this are captured in the `PgVectorKnowledgeBaseConnection`. Apart from a regular [Retrieve](#retrieve), an additional operation was exposed to [Retrieve Nearest Neighbors](#retrieve-nearest-neighbors), where the cosine similarity between the input vector and the vectors of the records in the knowledge base is calculated. In both cases it is possible to filter on metadata. 

A typical pattern for retrieval from a knowledge base uses GenAI Commons operations and can be illustrated as follows:

1. Use [Initialize MetadataCollection with Metadata](/appstore/modules/genai/commons/) to set up a `MetadataCollection` for filtering with its first key-value pair added immediately. 
2. Use [Add Metadata to MetadataCollection](/appstore/modules/genai/commons/) (iteratively) to create a collection of the necessary metadata.
3. Do the retrieval. For example, you could use [Retrieve Nearest Neighbors](#retrieve-nearest-neighbors) to find chunks based on vector similarity.

For scenarios in which the created chunks were based on Mendix objects at the time of population and these objects need to be used in logic after the retrieval step, two additional operations are available. The Java actions [Retrieve & Associate](#retrieve-associate) and [Retrieve Nearest Neighbors & Associate](#retrieve-nearest-neighbors-associate) take care of the chunk retrieval and set the association towards the original object, if applicable.

A typical pattern for this retrieval is as follows:

1. Use [Initialize MetadataCollection with Metadata](/appstore/modules/genai/commons/) to set up a `MetadataCollection` for filtering with its first key-value pair added immediately. 
2. Use [Add Metadata to MetadataCollection](/appstore/modules/genai/commons/) (iteratively) to create a collection of the necessary metadata.
3. Do the retrieval. For example, you could use [Retrieve Nearest Neighbors & Associate](#retrieve-nearest-neighbors-associate) to find chunks based on vector similarity.
4. For each retrieved chunk, retrieve the original Mendix object and do custom logic.

#### `Retrieve` {#retrieve}

Use this operation to retrieve knowledge base chunks from the knowledge base. Additional selection and filtering can be done by specifying the optional input parameters for offset and a maximum number of results, as well as a collection of metadata or a Mendix object. If a metadata collection is provided, this operation only returns chunks that conform with all of the metadata in the collection. If a Mendix object is passed, only knowledge base chunks that were related to this Mendix object during insertion will be retrieved.

#### `Retrieve & Associate` {#retrieve-associate}

Use this operation to retrieve knowledge base chunks from the knowledge base and set associations to the related Mendix objects (if applicable). Additional selection and filtering can be done by specifying the optional input parameters for offset and a maximum number of results, as well as a collection of metadata. If a metadata collection is provided, this operation only returns knowledge base chunks that are conform with all the metadata in the collection.

#### `Retrieve Nearest Neighbors` {#retrieve-nearest-neighbors}

Use this operation to retrieve knowledge base chunks from the knowledge base where the retrieval and sorting are based on vector similarity with regard to a given input vector. Additional selection and filtering can be done by specifying the optional input parameters: minimum (cosine) similarity (0–1.0), maximum number of results, and a collection of metadata. If a metadata collection is provided, this operation only returns chunks that conform with all of the metadata in the collection.

#### `Retrieve Nearest Neighbors & Associate` {#retrieve-nearest-neighbors-associate}

Use this operation to retrieve knowledge base chunks from the knowledge base and set associations to the related Mendix objects (if applicable). In this operation the retrieval and sorting are based on vector similarity with regard to a given input vector. Additional selection and filtering can be done by specifying the optional input parameters: minimum (cosine) similarity (0–1.0), maximum number of results, as well as a collection of metadata. If a metadata collection is provided, this operation only returns knowledge base chunks that are conform with all of the metadata in the collection.

### Delete Operations {#delete-operations-configuration}

When a whole knowledge base, or part of its data, is no longer needed, this can be handled by using a delete operation. If, however, the knowledge base is still needed, but the data needs to be replaced, see [(Re)populate Operations](#repopulate-operations-configuration) or [Replace](#replace) operations instead. For cases where the chunks in the knowledge base were based on Mendix objects during insertion, chunks can be deleted using the original Mendix object as a starting point in two additional `Delete for List` operations.

#### `Delete Knowledge Base` {#delete-knowledge-base}

Use this operation to delete a complete knowledge base at once. After execution, the knowledge base including its data will no longer exist in the vector database.

#### `Delete for Object` {#delete}

In scenarios where the chunks in the knowledge base are related to Mendix objects (in other words, data in the Mendix database), deletion of Mendix data typically needs to result in the removal of its related knowledge base chunks from the knowledge base. For this, the `Delete for Object` operation can be used. The `Delete for Object` operation accepts any kind of Mendix object, and it removes all the knowledge base chunks related to the provided Mendix object at the time of insertion.

#### `Delete for List` {#delete-list}

This operation is meant to be used in a similar scenario to the one described for the [Delete for Object](#delete) operation, but handles a list of Mendix objects in a single operation. Executing this operation removes all the knowledge base chunks related to the provided Mendix objects at the time of insertion.

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" >}}

## Showcase Application {#showcase-application}

For more inspiration and guidance on how to use these operations in your logic and how to combine it with use cases in the context of generative AI, Mendix highly recommends downloading the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) from the Marketplace. This application contains various examples in the context of generative AI, some of which use the PgVector Knowledge Base module for storing embedding vectors.

{{% alert color="info" %}}
For more information on how to set up a vector database for retrieval augmented generation (RAG), see the [Setting up a Vector Database](/appstore/modules/genai/pgvector-setup/) section and the [RAG Example Implementation in the GenAI Showcase App](/appstore/modules/genai/rag/) section.
{{% /alert %}}

## Read More {#read-more}

* [pgvector: Open-Source Extension For Vector Similarity Search For PostgreSQL](https://github.com/pgvector/pgvector?tab=readme-ov-file#pgvector)
