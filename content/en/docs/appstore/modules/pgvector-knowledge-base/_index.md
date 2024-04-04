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

...

### 1.1 Typical Use Cases {#use-cases}

#### 1.1.1 Retrieval Augmented Generation {#use-cases-text}

...

#### 1.1.2 Similarity search {#use-cases-images}

...

### 1.2 Features {#features}

...

### 1.3 Limitations {#limitations}

The current scope of the module is focused around (re)populating knowledge bases as a whole in one operation. Deleting, adding or updating individual knowledge base items is not yet supported.

### 1.4 Prerequisites {#prerequisites}

You should have access to your own (remote) postgreSQL database server(s) with the [pgvector](https://github.com/pgvector/pgvector) extension installed. For more information, see [Setting up a Vector Database](/appstore/modules/openai-connector/vector-database-setup/).

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
3. Now you can setup your database configuration(s) at runtime. See [Configuring the database connection details](/appstore/modules/openai-connector/vector-database-setup/#configure-database-connection) for more information.

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
{{< figure src="/attachments/appstore/modules/openai-connector/domainModel-Configuration.png" class="image-border" >}}

##### 4.1.1.1 `DatabaseConfiguration` {#databaseconfiguration-entity} 

...

##### 4.1.1.2 `DatabasePassword` {#databasepassword}

This entity is only used for editing the `DatabasePassword` to be stored in the [DatabaseConfiguration](#databaseconfiguration-entity) entity. 

| Attribute | Description                                          |
| --------- | ---------------------------------------------------- |
| `Password`  | This is the password used by the runtime to authenticate towards your knowledge base database. 

#### 4.1.2 Knowledge Base interaction {#knowledgebase-domain-model}

TODO change image
{{< figure src="/attachments/appstore/modules/openai-connector/domainModel-Generalizations.png" class="image-border" >}}

##### 4.1.2.1 `Chunk` {#chunk}

...

##### 4.1.2.2 `Label` {#label} 

...

### 4.2 Enumerations {#enumerations} 

An enumeration is a predefined list of values that can be used as an attribute type. For more information about enumerations in general, see [Enumerations](https://docs.mendix.com/refguide/enumerations/). 

#### 4.2.1 General {#general-enumerations}

##### 4.2.1.1 `ENUM_ChunkType` {#enum-chunktype} 

...

### 4.3 Activities {#activities} 

Activities define the actions that are executed in a microflow, nanoflow or a java action.

#### 4.3.1 General operations {#general-operations-technical} 

...

##### 4.3.1.1 Create label {#create-label-technical} 

...

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