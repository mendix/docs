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

...

### 1.3 Limitations {#limitations}

The current scope of the module is focused around (re)populating knowledge bases as a whole in one operation. Deleting, adding or updating individual knowledge base items is not yet supported.

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



#### 3.2.1 `Create label` {#create-label}

...

### 3.3 (Re)populate operations {#repopulate-operations-configuration}

...

#### 3.3.1 `Create Chunk` {#create-chunk}

...

#### 3.3.2 `(Re)populate Knowledge Base` {#repopulate-knowledge-base}

...

### 3.4 Retrieve operations {#retrieve-operations}

...

#### 3.4.1 `Retrieve` {#retrieve}

...

#### 3.4.2 `Retrieve top N` {#retrieve-top-n}

...

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
| `Value`              | This represents a value that has no effect on the vector or similarity search but is to be used directly after retrieval    |
| `MxObjectID`         | If the chunk was based on a Mendix object during creation, this will contain the GUID of that object at the time of creation     |
| `MxEntity`           | If the chunk was based on a Mendix object during creation, this will contain its full entity name at the time of creation.    |
| `Similarity`         | In case the chunk was retrieved from the knowledge base as part of a similarity search (e.g top-N retrieval) this will contain the cosine similarity to the input vector for the retrieval that was executed. |


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

...

##### 4.3.1.1 Create label {#create-label-technical} 

**Input parameters**

| Name             | Type                                                         | Mandatory                     | Description                                                  |
| ---------------- | ------------------------------------------------------------ | ----------------------------- | ------------------------------------------------------------ |
| `Input`          | String                                                       | mandatory                     | This is the input text to embed.                             |
| `Configuration`  | [Configuration](#configuration-entity)                       | mandatory                     | This is an object that contains endpoint and API key.        |
| `Model`          | String                                                       | only mandatory for **OpenAI** | This is the ID of the model to use. This is not considered for **Azure OpenAI** configurations. |
| `EncodingFormat` | [ENUM_EncodingFormat_Embeddings](#enum-encodingformat-embeddings) | optional                      | This can be used to specify the format in which the generated vectors must be returned. |

**Return value**

| Name              | Type   | Description                                                  |
| ----------------- | ------ | ------------------------------------------------------------ |
| `EmbeddingVector` | String | This is the string representation of a vector embedding for the input. |

#### 4.3.2 (Re)populate operations {#repopulate-operations-technical} 

...

##### 4.3.2.1 Create Chunk {#create-chunk-technical}

...

##### 4.3.2.2 (Re)populate Knowledge Base {#repopulate-knowledge-base-technical}

...

#### 4.3.3 Retrieve operations (#retrieve-operations-technical)

...

##### 4.3.3.1 Retrieve {#retrieve-technical} 

...

##### 4.3.3.2 Retrieve top N {#retrieve-top-n-technical}

...

## 5 Showcase Application {#showcase-application}

For more inspiration or guidance on how to use those microflows in your logic and how to combine it with use cases in the context of generative AI, Mendix highly recommends downloading the [OpenAI showcase app](https://marketplace.mendix.com/link/component/220475) from the Marketplace. This application contains various examples in the context of generative AI, some of which use the PgVector Knowledge Base module for sstoring embedding vectors.
{{% alert color="info" %}}For more information on how to set up a vector database for retrieval augmented generation (RAG),  see [RAG Example Implementation in the OpenAI Showcase Application](/appstore/modules/openai-connector/rag-example-implementation/).{{% /alert %}}

## 6 Read More {#read-more}

* [pgvector: Open-Source Extension For Vector Similarity Search For PostgreSQL](https://github.com/pgvector/pgvector?tab=readme-ov-file#pgvector)