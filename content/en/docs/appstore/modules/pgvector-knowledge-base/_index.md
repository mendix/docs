---
title: "PgVector Knowledge Base"
url: /appstore/modules/pgvector-knowledge-base/
linktitle: "PgVector Knowledge Base"
description: "Describes the configuration and usage of the PgVector Knowledge Base module from the Mendix Marketplace that allows developers to integrate postgreSQL databases with pgvector installed as knowledge bases in into their Mendix app."
tags: ["pgvector", "postgreSQL", "similarity search", "cosine similarity", "cosine distance", "AI", "connector", "marketplace", "chatgpt", "vector", "genAI", "embeddings", "RAG", "Azure OpenAI", "vector database", "Retrieval augmented generation", "similarity search"]
aliases:
    - /appstore/connectors/pgvector-knowledge-base/
---

## 1 Introduction {#introduction}

The PgVector Knowledge Base module contains operations to interact with a PostgreSQL database that has the [pgvector](https://github.com/pgvector/pgvector?tab=readme-ov-file#pgvector) extension installed. It allows you to easily store vectors and perform cosine similarity calculations from your Mendix app. This way you can leverage knowledge bases to make your apps smarter by performing operations based on (embedding) vectors and vector similarity. In the context of generative AI, Large Language Models (LLM) and embeddings, this is a key component in natural language processing (NLP) patterns such as Retrieval Augmented Generation (RAG), recommendation algorithms and similarity search operations.

### 1.1 Typical Use Cases {#use-cases}

This module is typically powerful in scenarios in which Mendix apps leverage the capabilities of LLMs in the context of generative AI where private (company) data needs to be included in the app logic (e.g. when constructing prompts). In cases where there is a need for a separate private knowledge base outside of the LLM infrastructure, this module provides a low-code way to store data chunks in the private knowledge base, and execute on-demand retrieval of relevant information for end-user actions or app processes.

#### 1.1.1 Retrieval Augmented Generation {#use-cases-texragt}

A common NLP-pattern is Retrieval Augmented Generation (RAG), where the goal is to have Large Language Models construct answers to questions or provide on-demand information about private knowledge base data. In order to make this work, discrete pieces of information from the knowledge base are sent along with user questions to the LLM. The retrieval operation(s) from this module is made for this step in the use case.

#### 1.1.2 Semantic search {#use-cases-semmantic-search}

Even without invoking LLMs directly with the retrieved information, the similarity search in the retrieval operation can be used in combination with embedding models to create a semantic search in a Mendix app. This can be used for fuzzy search capabilities, suggestions or simple recommendation systems.

### 1.2 Features {#features}

With the current version, Mendix supports inserting data chunks with their vectors into a knowledge base (population), and selecting those records afterwards (retrieval). Apart from cosine similarity search, custom filtering is possible using key/value labelling.

### 1.3 Limitations {#limitations}

The current scope of the module is focused around (re)populating knowledge bases as a whole in one single operation. Deleting, adding or updating individual knowledge base items is not yet supported. Furthermore, connections that require drivers other than JDBC are not supported.

### 1.4 Prerequisites {#prerequisites}

You should have access to your own (remote) postgreSQL database server(s) with the [pgvector](https://github.com/pgvector/pgvector) extension installed. For more information, see [Setting up a Vector Database](/appstore/modules/pgvector-knowledge-base/vector-database-setup/).

### 1.5 Dependencies {#dependencies}

* Mendix Studio Pro version [9.24.0](/releasenotes/studio-pro/9.24/#9240) or higher 
* [Encryption](https://marketplace.mendix.com/link/component/1011) module
* [Community commons](https://marketplace.mendix.com/link/component/170) module
* [Database Connector](https://marketplace.mendix.com/link/component/2888) module

## 2 Installation {#installation}

Follow the instructions in [Using Marketplace Content](/appstore/overview/use-content/) to import the PgVector Knowledge Base module into your app. 

## 3 Configuration {#configuration}

After you install the PgVector Knowledge Base module, you can find it in the **App Explorer**, in the **Marketplace modules** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to a database and let it function as a knowledge base. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to an external database, you must also [configure the Encryption module](https://docs.mendix.com/appstore/modules/encryption/#configuration). 

### 3.1 General Configuration {#general-configuration}

1. Add the module role **PgVectorKnowledgeBase.Administrator** to your Administrator user role in the security settings of your app. 
2. Add the **DatabaseConfiguration_Overview** page (**USE_ME > Configuration**) to your navigation or add the **Snippet_DatabaseConfigurations** to a page that is already part of your navigation. 
3. Now you can setup your database configuration(s) at runtime. See [Configuring the database connection details](/appstore/modules/pgvector-knowledge-base/vector-database-setup/#configure-database-connection) for more information.

### 3.2 General operations {#general-operations-configuration} 

After following the general setup above, you are all set to use the microflows in the **USE_ME > Operations** folder in your logic. Currently 5 operations (microflows and java actions) are exposed as microflow actions under the **PgVector Knowledge Base** category in the **Toolbox** in Mendix Studio Pro. They can be split into two categories, corresponding to the main functionalities: getting data chunks into the knowledge base, i.e. (re)populate, versus finding relevant data chunks in an existing knowledge base, i.e. retrieve. In both cases, Labels can be relevant and therefore we mention it separately here.

#### 3.2.1 `Create label` {#create-label}

Labels are used to attach additional information to chunks, that can be used for custom filtering during the retrieval step. In the operations to create a knowledge base Chunk, a list of Labels can be passed as optional input. These have a key/value structure. During the retrieval,  if provided as input, all key/value pairs passed in the form of Label entities to the operation must match any previously attached labels to the chunk during population. 

### 3.3 (Re)populate operations {#repopulate-operations-configuration}

In order to add data to the knowledge base, you need to have discrete pieces of information and create chunks for those using the `Create Chunk` operation, after which they can be inserted into the knowledge base `(Re)populate Knowledge Base`. 

#### 3.3.1 `(Re)populate Knowledge Base` {#repopulate-knowledge-base}

This microflow takes care of the following:
* creating the knowledge base if it does not exist
* clearing the knowledge base if it does exist
* inserting all provided chunks with their labels into the knowledge base

The construction of the ChunkList input should be done using the [Create Chunk](#create-chunk-technical) operation. This operation handles the whole list in a single operation. It is possible to have multiple knowledge bases in the same database in parallel by providing the name in combination with the [DatabaseConfiguration](#databaseconfiguration-entity)

### 3.4 Retrieve operations {#retrieve-operations}

Currently two operations are available for on-demand retrieval of data chunks from a knowlege base. Both operations work on a single knowledge base (specified by the name) on a single database server (specified by the [DatabaseConfiguration](#databaseconfiguration-entity)). Apart from a regular [Retrieve](#retrieve), an additional operation was exposed to [Retrieve Nearest Neighbors]($retrieve-nearest-neighbors), where the distance between records is calculated as cosine distance between the input vector and the vectors of the records in the knowledge base.

#### 3.4.1 `Retrieve` {#retrieve}

Use this operation to retrieve chunks from the knowledge base. Additional selection and filtering can be done by specifying the optional input parameters for offset and a maximum number of results, as well as a list of labels. When provided, this operation only returns chunks that are conform with all of the labels in the list.

#### 3.4.2 `Retrieve Nearest Neighbors` {#retrieve-nearest-neighbors}

Use this operation to retrieve chunks from the knowledge base where the sorting is based on vector similarity with respect to a given input vector. Additional selection and filtering can be done by specifying the optional input parameters for minimum similarity (0.0-1.0) and a maximum number of results, as well as a list of labels. When provided, this operation only returns chunks that are conform with all of the labels in the list.

## 4 Technical Reference {#technical-reference}

To help you work with the **OpenAI Connector**, the following sections list the available [entities](#domain-model), [enumerations](#enumerations), and [activities](#activities) that you can use in your application. 

### 4.1 Domain Model {#domain-model} 

The domain model in Mendix is a data model that describes the information in your application domain in an abstract way. For more general information, see [Domain model](/refguide/domain-model/). To learn about where the entities from the domain model are used and relevant during implementation, see the [Activities](#activities) section below.

#### 4.1.1 Configuration {#configuration-domain-model}

TODO: change image
{{< figure src="/attachments/appstore/modules/pgvector-knowledge-base/domainModel-DatabaseConfiguration.png" class="image-border" >}}

##### 4.1.1.1 `DatabaseConfiguration` {#databaseconfiguration-entity} 

This is an entity to store the connection details to a PostgreSQL database. 

| Attribute            | Description                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------- |
| `DisplayName`        | This is a human-readable name for the configuration, to be displayed in the frontend.         |
| `JdbcURL`            | This is the URL of the database on the database server to which the JDBC driver connects.     |
| `Password`           | This is the encrypted password that is used during the authentication to the database server. |
| `Username`           | This is the username that is used during the authentication to the database server.           |


##### 4.1.1.2 `DatabasePassword` {#databasepassword}

This non-persistent entity is only used for editing the `DatabasePassword`. It is stored encrypted in the [DatabaseConfiguration](#databaseconfiguration-entity) entity. 

| Attribute | Description                                          |
| --------- | ---------------------------------------------------- |
| `Password`  | This is the (unencrypted) password used by the runtime to authenticate towards your knowledge base database. |

#### 4.1.2 Knowledge Base interaction {#knowledgebase-domain-model}

{{< figure src="/attachments/appstore/modules/pgvector-knowledge-base/domainModel-KnowledgeBaseInteraction.png" class="image-border" >}}

##### 4.1.2.1 `Chunk` {#chunk}

This entity represents a discrete piece of knowledge that needs to go into or comes out of the knowledge base. 

| Attribute            | Description                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------- |
| `ChunkID`            | This is a system-generated UUID for the chunk in the knowledge base.      |
| `HumanReadableID`    | This is a front-end reference to the chunk so that users know what it refers to (e.g. URL, document location, human-readable record ID)     |
| `Vector`             | This is the embedding vector that was generated for the knowledge for this chunk which is used in the vector database for similarity calculations. |
| `ChunkType`          | This is the type of the chunk. See the enumeration [ChunkType](#enum-chunktype).           |
| `Key`                | This is the original string that was used to generate the vector and can be used directly after retrieval.           |
| `Value`              | This represents a value that has no effect on the vector or similarity search but is to be used directly after retrieval.    |
| `MxObjectID`         | If the chunk was based on a Mendix object during creation, this will contain the GUID of that object at the time of creation.     |
| `MxEntity`           | If the chunk was based on a Mendix object during creation, this will contain its full entity name at the time of creation.    |
| `Similarity`         | In case the chunk was retrieved from the knowledge base as part of a similarity search (e.g nearest neighbors retrieval) this will contain the cosine similarity to the input vector for the retrieval that was executed. |


##### 4.1.2.2 `Label` {#label} 

This represents additional information that is to be stored with the chunks in the knowledge base. It can be used for custom filtering during retrieval. A chunk can be associated to multiple labels; labels in turn can be shared across multiple chunks.

| Attribute            | Description                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------- |
| `Key`                | This is the name of the label and typically tells how the value should be interpreted.        |
| `Value`              | This is the value of the label that provides additional information about the chunk in the context of the given key.          |

### 4.2 Enumerations {#enumerations} 

An enumeration is a predefined list of values that can be used as an attribute type. For more information about enumerations in general, see [Enumerations](https://docs.mendix.com/refguide/enumerations/). 

#### 4.2.1 General {#general-enumerations}

##### 4.2.1.1 `ENUM_ChunkType` {#enum-chunktype} 

This enumerration provides a list of possible chunk types. Currently two types are supported: 
* `Knowledge` chunks, where only one single text (`Key` of [Chunk](#chunk)) is relevant for both the similarity search and the processing steps afterwards, versus
* `KeyValue` chunks, where the functionally relevant information after retrieval is different (`Value` of [Chunk](#chunk)) from the text based on which the embedding was generated (`Key` of [Chunk](#chunk)).

| Name         | Caption         |
| ------------ | --------------- |
| `Knowledge`  | **Knowledge**   |
| `KeyValue`   | **KeyValue**    |

### 4.3 Activities {#activities} 

Activities define the actions that are executed in a microflow, nanoflow or a java action.

#### 4.3.1 General operations {#general-operations-technical} 

Operations that can be used in various steps like [(Re)populating](#repopulate-operations-technical) or [Retrieval](#retrieve-operations-technical).

##### 4.3.1.1 Create label {#create-label-technical} 
The `Create Label` activity is recommended for creating [Labels](#label). The given input parameters are assigned to a newly created label. The label is added to the provided `LabelList` which can be used afterwards for passing into [Create Chunk](#create-chunk-technical).

**Input parameters**

| Name             | Type                                                         | Mandatory                     | Description                                                  |
| ---------------- | ------------------------------------------------------------ | ----------------------------- | ------------------------------------------------------------ |
| `Key`          | String                                                       | mandatory                     | This is the input to assign the key.                           |
| `Value`  | String                     | mandatory                     | This is the input to assign the value.             |
| `LabelList`          | List of [Labels](#label)                                                    | mandatory | This is for adding the label to a list that can be used outside of the Activity. |


#### 4.3.2 (Re)populate operations {#repopulate-operations-technical} 

Operations that support the population of a knowledge base.

##### 4.3.2.1 Create Chunk {#create-chunk-technical}

The `Create Chunk` activity is recommended for instantiating [Chunks](#chunk) to create the input for the knowledge base based on your own data structure. A ChunkList must be passed to which the new Chunk object will be added. Optionally, use [Create Label](#create-label-technical) to construct a list of Labels for custom filtering during the retrieval.

**Input parameters**

| Name             | Type                                                         | Mandatory                     | Description                                                  |
| ---------------- | ------------------------------------------------------------ | ----------------------------- | ------------------------------------------------------------ |
| `ChunkList`          | List of [Chunks](#chunk)                                                     | mandatory                     | This the (mandatory) list to which the Chunk will be added. This list is the input for other operations e.g. [(Re)populate](#repopulate-operations-technical).                          |
| `HumanReadableID`  | String                     | mandatory                     | This is a front-end identifier that can be used for showing or retrieving sources in a custom way. If it is not relevant, "empty" must be passed explicitly here.             |
| `Vector`  | String                     | mandatory                     | This is the vector representation of the content of the chunk, based  on which the similarity search is executed as in the [Retrieve Nearest Neighbors](#retrieve-nearest-neighbors-technical) operation.            |
| `Key`  | String                     | mandatory                     | This is supposed to contain the string content of the chunk for which the embedding was created. In cases where the retrieval of the actual data happens in a different way (e.g. using an identifier or a Mendix object) this can be left empty if not used; in that case  "empty" must be passed explicitly here.             |
| `Value`  | String                     | optional                     | In the KeyValue ChunkType scenario, the chunk content that is relevant for the similarity search is different from the value that is relevant in the custom processing afterwards. This field can be used to store this information directly in the PgVector Knowledge Base.             |
| `LabelList`          | List of [Labels](#label)                                                    | optional | This is an optional list that contains extra information about the chunk. Any Key-Value pairs can be stored with the chunk. In the retrieval operations it is possible to filter on one or multiple labels. |
| `ChunkType`  | Enumeration of [ENUM_ChunkType](#enum-chunktype)                   | mandatory                     | This mandatory value describes whether the chunk represents a piece of knowledge (key only) or a key-value pattern, where the key is embedded and used in the retrieval step, but the value is used in the logic after [Retrieve Nearest Neighbors](#retrieve-nearest-neighbors-technical). If this is set to KeyValue, the Value string is ignored in this action.             |
| `MxObject`  | Object                     | optional                    | This parameter is used to capture the Mendix object to which the chunk refers. This can be used for finding back the record in the Mendix database later on after the retrieval step.            |

[comment]: # ( TODO: order of parameters is based on the structure when the JavaAction call activity is openend not on the order inside the editing of the JavaAction itself. What do you prefer? Normally, a developer would only look inside the call activity and not dive deeper into the JA itself I would say)

##### 4.3.2.2 (Re)populate Knowledge Base {#repopulate-knowledge-base-technical}

The `(Re)populate Knowledge Base` activity is used to populate a whole knowledge base at once. This operation handles a list of chunks with their labels in a single operation. By providing the KnowledgeBaseName parameter, you determine the knowledge base. It is used to later on to retrieve elements from the correct tables. This operation takes care of the creation of the actual tables. If there is already data from an earlier iteration for the provided `KnowledgeBaseName`, the data will be removed first. Use [Create Label](#create-label-technical) and [Create Chunk](#create-chunk-technical) to construct the input for this activity, which needs to be passed as ChunkList. The `DatabaseConfiguration` that is passed must contain the connection details to a PostgreSQL database server with the PgVector extension installed. This entity is typically configured at runtime or in [after-startup](/refguide/app-settings/#after-startup) logic.

**Input parameters**

| Name                | Type                                    | Mandatory | Description                                           |
| ------------------- | --------------------------------------- | --------- | ----------------------------------------------------- |
| `KnowledgeBaseName`          | String                                                       | mandatory                     | This is the table name of the knowledge base in your database (to be created or for repopulating).
| `DatabaseConfiguration` | [DatabaseConfiguration](#databaseconfiguration-entity) | mandatory | This object is to connect and authenticate to the database.    |
| `ChunkList`          | List of [Chunks](#chunk)                                                    | mandatory | This list is for inserting the [Chunks'](#chunks) data into the knowledge base. |

**Return value**

| Name                 | Type                                      | Description                                                  |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `IsSuccess` | Boolean | This boolean indicates if the populations of the knowledge base and label table were successful. This can be used for custom error-handling. |

#### 4.3.3 Retrieve operations (#retrieve-operations-technical)

Activities that support the retrieval of the knowledge from the knowledge base.

##### 4.3.3.1 Retrieve {#retrieve-technical} 

The `Retrieve` activity is used to retrieve a subset of or the whole knowledge base. A list of chunks is returned which can be used for custom logic.  For additional filtering provide a list of [labels](#label), see [Create Label](#create-label-technical) activity. `Offset` and `MaxNumberOfResults` can be used for pagination or specific selection use cases.

The `DatabaseConfiguration` that is passed must contain the connection details to a PostgreSQL database server with the PgVector extension installed. This entity is typically configured at runtime or in after-startup logic. By providing the `KnowledgeBaseName` parameter, you determine the knowledge base that was used for population earlier.
**Input parameters**

| Name                | Type                                    | Mandatory | Description                                           |
| ------------------- | --------------------------------------- | --------- | ----------------------------------------------------- |
| `DatabaseConfiguration` | [DatabaseConfiguration](#databaseconfiguration-entity) | mandatory | This object is to connect and authenticate to the database.    |
| `KnowledgeBaseName`          | String                                                       | mandatory                     | This is the name of the knowledge base in your database which contains the data to retrieve.
| `MaxNumberOfResults`          | Integer/Long                                                      | optional                    | This is to optionally limit the number of results that should be returned. |
| `LabelList`          | List of [Labels](#label)                                                    | optional | This list is for additional filtering in the retrieve. Only chunks that comply with the labels will be returned. |
| `Offset`          | Integer/Long                                                        | optional                     | This is for skipping a number of records in the retrieve. |

**Return value**

| Name                 | Type                                      | Description                                                  |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `ChunkList` | List of [Chunks](#chunk) | This list is the result of the retrieval. |

##### 4.3.3.2 Retrieve Nearest Neighbors {#retrieve-nearest-neighbors-technical}

The `Retrieve Nearest Neighbors` activity is used to retrieve chunks from the knowledge base ordered by similarity based on the given vector. For additional filtering provide a list of [labels](#label), see [Create Label](#create-label-technical) activity. `MinimumSimilarity` (range 0 - 1.0) and `MaxNumberOfResults` can be used for optional filtering. 

The `DatabaseConfiguration` that is passed must contain the connection details to a PostgreSQL database server with the PgVector extension installed. This entity is typically configured at runtime or in after-startup logic. By providing the `KnowledgeBaseName` parameter, you determine the knowledge base that was used for population earlier.

**Input parameters**

| Name                | Type                                    | Mandatory | Description                                           |
| ------------------- | --------------------------------------- | --------- | ----------------------------------------------------- |
| `DatabaseConfiguration` | [DatabaseConfiguration](#databaseconfiguration-entity) | mandatory | This object is to connect and authenticate to the database.    |
| `KnowledgeBaseName`          | String                                                       | mandatory                     | This is the name of the knowledge base in your database which contains the data to retrieve.
| `Vector`          | String                                                       | mandatory                     | This is the vector representation of the data for which the nearest neigbhors should be calculated. The dimension needs to be the same as the vectors stored in the knowledge base.
| `MinimumSimilarity`          | Decimal                                                        | optional                     | This is to filter the results, so that only Chunks are returned which similarity score is equal or greater than the value provided. The score ranges from 0 (not similar) to 1.0 (the same vector). 
| `MaxNumberOfResults`          | Integer/Long                                                      | optional                    | This can be used to limit the number of results that should be returned. 
| `LabelList`          | List of [Labels](#label)                                                    | optional | This list is for additional filtering in the retrieve. Only chunks that comply with the labels will be returned. |


**Return value**

| Name                 | Type                                      | Description                                                  |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `ChunkList` | List of [Chunks](#chunk) | This list is the result of the retrieval. |


## 5 Showcase Application {#showcase-application}

For more inspiration or guidance on how to use the operations in your logic and how to combine it with use cases in the context of generative AI, Mendix highly recommends downloading the [OpenAI showcase app](https://marketplace.mendix.com/link/component/220475) from the Marketplace. This application contains various examples in the context of generative AI, some of which use the PgVector Knowledge Base module for storing embedding vectors.
{{% alert color="info" %}}For more information on how to set up a vector database for retrieval augmented generation (RAG),  see [RAG Example Implementation in the OpenAI Showcase Application](/appstore/modules/openai-connector/rag-example-implementation/).{{% /alert %}}

## 6 Read More {#read-more}

* [pgvector: Open-Source Extension For Vector Similarity Search For PostgreSQL](https://github.com/pgvector/pgvector?tab=readme-ov-file#pgvector)