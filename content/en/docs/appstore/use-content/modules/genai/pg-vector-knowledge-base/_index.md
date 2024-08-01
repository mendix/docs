---
title: "PgVector Knowledge Base"
url: /appstore/modules/genai/pgvector/
linktitle: "PgVector Knowledge Base"
description: "Describes the configuration and usage of the PgVector Knowledge Base module from the Mendix Marketplace. This module allows developers to integrate PostgreSQL databases with pgvector installed as knowledge bases into their Mendix app."
weight: 70
aliases:
   - /appstore/modules/pgvector-knowledge-base/
---

## 1 Introduction {#introduction}

The [PgVector Knowledge Base](https://marketplace.mendix.com/link/component/225063) module contains operations to interact with a PostgreSQL database that has the [pgvector](https://github.com/pgvector/pgvector?tab=readme-ov-file#pgvector) extension installed. It lets you easily store vectors and perform cosine similarity calculations from your Mendix app. This way, you can leverage knowledge bases to enhance your app functionality by performing operations based on (embedding) vectors and vector similarity. In the context of generative AI, large language models (LLMs), and embeddings, this is a key component in natural language processing (NLP) patterns such as retrieval augmented generation (RAG), recommendation algorithms, and similarity search operations.

### 1.1 Typical Use Cases {#use-cases}

This module is particularly powerful for Mendix apps that use large language models in generative AI contexts. The PgVector Knowledge Base module allows these apps to securely use private company data in the app logic. For example, this might be essential when constructing prompts.

When there is a need for a separate private knowledge base outside of the LLM infrastructure, this module provides a low-code way to store discrete pieces of data (commonly refered to as **chunks**) in the private knowledge base and retrieve relevant information for end-user actions or app processes.

{{% alert color="info" %}}
Check out the [OpenAI showcase app](https://marketplace.mendix.com/link/component/220475) to see example implementations, including retrieval augmented generation and semantic search with knowledge bases.
{{% /alert %}}

#### 1.1.1 Retrieval Augmented Generation {#use-cases-rag}

A common NLP pattern is retrieval augmented generation (RAG), where the goal is to have LLMs construct answers to questions or provide on-demand information about private knowledge base data. In order to make this work, discrete pieces of information from the knowledge base are sent along with user questions to the LLM. The retrieval operations from this module are designed for this step in such use cases.

#### 1.1.2 Semantic Search {#use-cases-semantic-search}

Also without invoking LLMs directly with the retrieved information, the similarity search logic from the retrieval operation can be leveraged in combination with embedding models to create a semantic search in a Mendix app. This can be used for fuzzy search capabilities, suggestions, or simple recommendation systems.

### 1.2 Features {#features}

With the current version, Mendix supports inserting data chunks with their vectors into a knowledge base (population) and selecting those records from that moment onwards (retrieval). Apart from cosine similarity search, which is executed based on the vector only, custom filtering is possible using key-value labeling (metadata) to support an additional traditional search component.

### 1.3 Prerequisites {#prerequisites}

You should have access to your own (remote) PostgreSQL database server with the [pgvector](https://github.com/pgvector/pgvector) extension installed. For more information, see the [Setting up a Vector Database](/appstore/modules/genai/pgvector-setup/) section.

{{% alert color="info" %}}This module cannot be used with the Mendix Cloud app database. It only works if you are using your own database server or Amazon RDS.{{% /alert %}}

### 1.4 Dependencies {#dependencies}

* Mendix Studio Pro version [9.24.2](/releasenotes/studio-pro/9.24/#9242) or higher 
* [Encryption](https://marketplace.mendix.com/link/component/1011) module
* [Community Commons](https://marketplace.mendix.com/link/component/170) module
* [Database Connector](https://marketplace.mendix.com/link/component/2888) module
* [GenAI Commons](https://marketplace.mendix.com/link/component/227933) module

## 2 Installation {#installation}

Follow the instructions in [Using Marketplace Content](/appstore/use-content/) to import the PgVector Knowledge Base module into your app.

## 3 Configuration {#configuration}

After you install the PgVector Knowledge Base module, you can find it in the **App Explorer**, in the **Marketplace modules** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to a database and let it act as a knowledge base. To implement an activity, use it in a microflow. To ensure that your app can connect to an external database, you must also [configure the Encryption module](/appstore/modules/encryption/#configuration).

### 3.1 General Configuration {#general-configuration}

You must perform the following steps to integrate a Mendix app integrate a PgVector knowledge base:

1. Add the module role **PgVectorKnowledgeBase.Administrator** to your Administrator user role in the security settings of your app. Optionally, map **GenAICommons.User** to any user roles that need read access directly on retrieved entities.
2. Add the **DatabaseConfiguration_Overview** page (**USE_ME > Configuration**) to your navigation, or add the **Snippet_DatabaseConfigurations** to a page that is already part of your navigation. 
3. Set up your database configurations at runtime. For more information, see the [Configuring the Database Connection Details](/appstore/modules/genai/pgvector-setup/#configure-database-connection) section in *Setting up a Vector Database*.

{{% alert color="info" %}}
It is possible to have multiple knowledge bases in the same database in parallel by providing different knowledge base names in combination with the same [DatabaseConfiguration](#databaseconfiguration-entity).
{{% /alert %}}

### 3.2 General Operations {#general-operations-configuration} 

After following the general setup above, you are all set to use the microflows and Java actions in the **USE_ME > Operations** folder in your logic. Currently, ten operations (microflows and Java actions) are exposed as microflow actions under the **PgVector Knowledge Base Operations** category in the **Toolbox** in Mendix Studio Pro. These can be split into three categories, corresponding to the main functionalities: managing data chunks in the knowledge base (for example, [(Re)populate](#repopulate-knowledge-base)), finding relevant data chunks in an existing knowledge base (for example, [Retrieve](#retrieve)), and deleting chunk data or a whole knowledge base (for exapmle, [Delete Knowledge Base](#delete-knowledge-base)). In many occasions, metadata in a [MetadataCollection](/appstore/modules/genai/commons/#metadatacollection-entity) can be provided to enable additional filtering.

Additionally, there is one activity to prepare the connection input, which is a required input parameter for all operations, under **USE_ME > Connection**, and exposed separately in the **Toolbox** in Studio Pro.

#### 3.2.1 `Create PgVector Knowledge Base Connection` {#create-pgvectorconnection}

All operations that include knowledge base interaction need the connection details to the knowledge base. Adhering to the GenAI Commons standard, this information is conveyed in a specialization of the GenAI Commons [Connection](/appstore/modules/genai/commons/#connection) entity (see the [PgVectorKnowledgeBaseConnection](#pgvectorconnection) section). After instantiating the `PgVectorKnowledgeBaseConnection` based on custom logic and/or front-end logic, this object can be used for the actual knowledge base operations.

### 3.3 (Re)populate Operations {#repopulate-operations-configuration}

In order to add data to the knowledge base, you need to have discrete pieces of information and create knowledge base chunks for those. You can use the [operations for Chunks and KnowledgeBaseChunks in the GenAI Commons module](/appstore/modules/genai/commons/#knowledge-bases-embeddings). After you create the knowledge base chunks and [generate embedding vectors for them](/appstore/modules/genai/commons/#embeddings-interface), the resulting `ChunkCollection` can be inserted into the knowledge base using an operation for insertion, for example the `(Re)populate Knowledge Base` operation. 

A typical pattern for populating a knowledge base is as follows:

1. Create a new `ChunkCollection`. See the [Initialize ChunkCollection](/appstore/modules/genai/commons/#chunkcollection-create) section.
2. For each knowledge item that needs to be inserted, do the following:
    * Use [Initialize MetadataCollection with Metadata](/appstore/modules/genai/commons/#knowledgebase-initialize-metadatacollection) and [Add Metadata to MetadataCollection](/appstore/modules/genai/commons/#knowledgebase-add-metadata) as many times as needed to create a collection of the necessary metadata for the knowledge base item.
    * With both collections as input parameters, use [Add KnowledgeBaseChunk to ChunkCollection](/appstore/modules/genai/commons/#chunkcollection-add-knowledgebasechunk) for the knowledge item.
3. Call an embeddings endpoint with the `ChunkCollection` to generate an embedding vector for each `KnowledgeBaseChunk`
4. With the `ChunkCollection`, use [(Re)populate Knowledge Base](#repopulate-knowledge-base) to store the chunks.

{{< figure src="/attachments/appstore/use-content/modules/genai/pgvector-knowledge-base/pgvector-embedandrepopulate.png" >}}

#### 3.3.1 `(Re)populate Knowledge Base` {#repopulate-knowledge-base}

This operation handles the following:

* Clearing the knowledge base if it does exist 
* Creating the empty knowledge base if it does not exist
* Inserting all provided knowledge base chunks with their metadata into the knowledge base

The population handles a whole collection of chunks at once, and this `ChunkCollection` should be created using the [Initialize ChunkCollection](/appstore/modules/genai/commons/#chunkcollection-create) and [Add KnowledgeBaseChunk to ChunkCollection](/appstore/modules/genai/commons/#chunkcollection-add-knowledgebasechunk) operations. 

#### 3.3.2 `Insert` {#insert}

In cases where additional records need to be added to an existing knowledge base, the `Insert` operation can be used. This operation handles a collection of chunks that need to be inserted into the knowledge base. It behaves similarly to the [(Re)populate](#repopulate-knowledge-base) operation, except that it does not delete any data. 

#### 3.3.3 `Replace` {#replace}

The `Replace` operation is intended to be used in scenarios in which the chunks in the knowledge base are related to Mendix objects (in other words, data in the Mendix database). It can be used to keep the knowledge base in sync when data in your Mendix app database changes, which needs to be reflected in the knowledge base. The operation handles a collection of chunks: it will remove the knowledge base data for the Mendix objects the chunks refer to, after which the new data is inserted. For example, this operation can be used before a Mendix object gets committed to keep the knowledgebase in sync with the change.

### 3.4 Retrieve Operations {#retrieve-operations}

Currently, four operations are available for on-demand retrieval of data chunks from a knowledge base. All operations work on a single knowledge base (specified by the knowledge base name) on a single database server (specified by the [DatabaseConfiguration](#databaseconfiguration-entity)). The details for this are captured in the [PgVectorKnowledgeBaseConnection](#pgvectorconnection). Apart from a regular [Retrieve](#retrieve), an additional operation was exposed to [Retrieve Nearest Neighbors](#retrieve-nearest-neighbors), where the cosine similarity between the input vector and the vectors of the records in the knowledge base is calculated. In both cases it is possible to filter on metadata. 

A typical pattern for retrieval from a knowledge base uses GenAI Commons operations and can be illustrated as follows:

1. Use [Initialize MetadataCollection with Metadata](/appstore/modules/genai/commons/#knowledgebase-initialize-metadatacollection) to set up a `MetadataCollection` for filtering with its first key-value pair added immediately. 
2. Use [Add Metadata to MetadataCollection](/appstore/modules/genai/commons/#knowledgebase-add-metadata) as many times as needed to create a collection of the necessary metadata.
3. Do the retrieval. For example, you could use [Retrieve Nearest Neighbors](#retrieve-nearest-neighbors) to find chunks based on vector similarity.

For scenarios in which the created chunks were based on Mendix objects at the time of population and these objects need to be used in logic after the retrieval step, two additional operations are available. The Java actions [Retrieve & Associate](#retrieve-associate) and [Retrieve Nearest Neighbors & Associate](#retrieve-nearest-neighbors-associate) take care of the chunk retrieval and set the association towards the original object, if applicable.

A typical pattern for this retrieval is as follows:

1. Use [Initialize MetadataCollection with Metadata](/appstore/modules/genai/commons/#knowledgebase-initialize-metadatacollection) to set up a `MetadataCollection` for filtering with its first key-value pair added immediately. 
2. Use [Add Metadata to MetadataCollection](/appstore/modules/genai/commons/#knowledgebase-add-metadata) as many times as needed to create a collection of the necessary metadata.
3. Do the retrieval. For example, you could use [Retrieve Nearest Neighbors & Associate](#retrieve-nearest-neighbors-associate) to find chunks based on vector similarity.
4. For each retrieved chunk, retrieve the original Mendix object and do custom logic.

#### 3.4.1 `Retrieve` {#retrieve}

Use this operation to retrieve knowledge base chunks from the knowledge base. Additional selection and filtering can be done by specifying the optional input parameters for offset and a maximum number of results, as well as a collection of metadata or a Mendix object. If a metadata collection is provided, this operation only returns chunks that conform with all of the metadata in the collection. If a Mendix object is passed, only knowledge base chunks that were related to this Mendix object during insertion will be retrieved.

#### 3.4.2 `Retrieve & Associate` {#retrieve-associate}

Use this operation to retrieve knowledge base chunks from the knowledge base and set associations to the related Mendix objects (if applicable). Additional selection and filtering can be done by specifying the optional input parameters for offset and a maximum number of results, as well as a collection of metadata. If a metadata collection is provided, this operation only returns knowledge base chunks that are conform with all the metadata in the collection.

#### 3.4.3 `Retrieve Nearest Neighbors` {#retrieve-nearest-neighbors}

Use this operation to retrieve knowledge base chunks from the knowledge base where the retrieval and sorting are based on vector similarity with regard to a given input vector. Additional selection and filtering can be done by specifying the optional input parameters: minimum (cosine) similarity (0–1.0), maximum number of results, and a collection of metadata. If a metadata collection is provided, this operation only returns chunks that conform with all of the metadata in the collection.

#### 3.4.4 `Retrieve Nearest Neighbors & Associate` {#retrieve-nearest-neighbors-associate}

Use this operation to retrieve knowledge base chunks from the knowledge base and set associations to the related Mendix objects (if applicable). In this operation the retrieval and sorting are based on vector similarity with regard to a given input vector. Additional selection and filtering can be done by specifying the optional input parameters: minimum (cosine) similarity (0–1.0), maximum number of results, as well as a collection of metadata. If a metadata collection is provided, this operation only returns knowledge base chunks that are conform with all of the metadata in the collection.

### 3.5 Delete Operations {#delete-operations-configuration}

When a whole knowledge base, or part of its data, is no longer needed, this can be handled by using a delete operation. If, however, the knowledge base is still needed, but the data needs to be replaced, see [(Re)populate Operations](#repopulate-operations-configuration) or [Replace](#replace) operations instead. For cases where the chunks in the knowledge base were based on Mendix objects during insertion, chunks can be deleted using the original Mendix object as a starting point in two additional `Delete for List` operations.

#### 3.5.1 `Delete Knowledge Base` {#delete-knowledge-base}

Use this operation to delete a complete knowledge base at once. After execution, the knowledge base including its data will no longer exist in the vector database.

#### 3.5.2 `Delete for Object` {#delete}

In scenarios where the chunks in the knowledge base are related to Mendix objects (in other words, data in the Mendix database), deletion of Mendix data typically needs to result in the removal of its related knowledge base chunks from the knowledge base. For this, the `Delete for Object` operation can be used. The `Delete for Object` operation accepts any kind of Mendix object, and it removes all the knowledge base chunks related to the provided Mendix object at the time of insertion.

#### 3.5.3 `Delete for List` {#delete-list}

This operation is meant to be used in a similar scenario to the one described for the [Delete for Object](#delete) operation, but handles a list of Mendix objects in a single operation. Executing this operation removes all the knowledge base chunks related to the provided Mendix objects at the time of insertion.

## 4 Technical Reference {#technical-reference}

To help you use the PgVector Knowledge Base module, the following sections list the available [entities](#domain-model), and [activities](#activities) that you can use in your application. 

### 4.1 Domain Model {#domain-model} 

The domain model in Mendix is a data model that describes the information in your application domain in an abstract way. For more general information, see the [Domain Model](/refguide/domain-model/) section. To learn about where the entities from the domain model are used and relevant during implementation, see the [Activities](#activities) section below.

#### 4.1.1 Configuration {#configuration-domain-model}

{{< figure src="/attachments/appstore/use-content/modules/genai/pgvector-knowledge-base/pgvector-connection.png" >}}

##### 4.1.1.1 `DatabaseConfiguration` {#databaseconfiguration-entity} 

This is an entity to store the connection details to a PostgreSQL database. 

| Attribute            | Description                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------- |
| `DisplayName`        | This is a human-readable name for the configuration, to be displayed in the frontend.         |
| `JdbcURL`            | This is the URL of the database on the database server to which the JDBC driver connects.     |
| `Password`           | This is the encrypted password that is used during the authentication to the database server. |
| `Username`           | This is the username that is used during the authentication to the database server.           |

##### 4.1.1.2 `DatabasePassword` {#databasepassword}

This non-persistent entity is only used for editing the `DatabasePassword`. The database password is stored in the Mendix database as an encrypted string in the [DatabaseConfiguration](#databaseconfiguration-entity) entity. 

| Attribute | Description                                          |
| --------- | ---------------------------------------------------- |
| `Password`  | This is the (unencrypted) password used by the runtime to authenticate towards your knowledge base database. |

##### 4.1.1.3 `PgVectorKnowledgeBaseConnection` {#pgvectorconnection}

This non-persistent entity, a specialization of [Connection](/appstore/modules/genai/commons/#connection), contains the details needed to let the system establsih a connect to a PgVector knowledge base. For the operations to work, it must have a `DatabaseConfiguration` associated. By providing the `KnowledgeBaseName`, you determine which knowledge base inside of the database server is applicable for the use case.

| Attribute | Description                                          |
| --------- | ---------------------------------------------------- |
| `KnowledgeBaseName` | This is the name of the knowledge base |


### 4.2 Activities {#activities}

Activities define the actions that are executed from a microflow or nanoflow. In this module, activities can be found in the form of microflows or Java actions in the **USE_ME > Operations** and the **USE_ME > Configuration** folders.

#### 4.2.1 General Operations {#general-operations-technical}

There is one operation that can be used in multiple knowledge base processes and do not fall into a specific category.

##### 4.2.1.1 Create PgVector Knowledge Base Connection {#create-pgvectorconnection-technical}

The `Create PgVector Knowledge Base Connection` activity can be used to create a PgVector knowledge base connection instance based on the database configuration and the knowledge base. This entity is required for the main exposed operations.

**Input parameters**

| Name | Type | Mandatory | Description |
| ---------------- | ------------------------------------------------------------ | ----------------------------- | ------------------------------------------------------------ |
| `KnowledgeBaseName` | String | mandatory | This is the name of the knowledge base. |
| `DatabaseCondiguration` | [DatabaseConfiguration](#databaseconfiguration-entity) | mandatory | This is an entity to store the connection details to a PostgreSQL database, to which the Connection will point so that it can be used inside of operations.  |

#### 4.2.2 (Re)populate Operations {#repopulate-operations-technical}

These operations support the (re)creation and population of a knowledge base.

##### 4.2.2.1 (Re)populate Knowledge Base {#repopulate-knowledge-base-technical}

The `(Re)populate Knowledge Base` activity is used to populate a whole knowledge base at once. This operation handles a collection of chunks with their metadata in a single operation. This operation takes care of the creation of the actual tables. If there is already data from an earlier iteration for the provided `KnowledgeBaseName` on the `Connection`, the data will be removed first. 

Use [Initialize ChunkCollection](/appstore/modules/genai/commons/#chunkcollection-create) and [Add KnowledgeBaseChunk to ChunkCollection](/appstore/modules/genai/commons/#chunkcollection-add-knowledgebasechunk) to construct the input for this activity, which needs to be passed as `ChunkCollection`. 

**Input parameters**

| Name | Type | Mandatory | Description |
| ------------------- | --------------------------------------- | --------- | ----------------------------------------------------- |
| `Connection` | [Connection](/appstore/modules/genai/commons/#connection) | mandatory | This is a connection object that holds the knowledge base name and database connection details. This must be of type [PgVectorKnowledgeBaseConnection](#pgvectorconnection). |
| `ChunkCollection` | [ChunkCollection](/appstore/modules/genai/commons/#chunkcollection) | mandatory | This collection contains the knowledge base chunks for replacing the data in the knowledge base. |

The `Connection` entity passed must be of type [PgVectorKnowledgeBaseConnection](#pgvectorconnection). It must have the `KnowledgeBaseName` string attribute populated and include a `DatabaseConfiguration` associated with the connection details to a PostgreSQL database server that has the PgVector extension installed. This `DatabaseConfiguration` entity is typically configured at runtime or in after-startup logic

**Return value**

| Name | Type | Description |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `IsSuccess` | Boolean | This Boolean indicates if the population of the knowledge base was successful. This can be used for custom error-handling. |

##### 4.2.2.2 Insert {#insert-technical}

The `Insert` operation is used to add knowledge base chunks to a knowledge base. This operation handles a collection of chunks with their metadata in a single operation.

This operation takes care of the creation of the actual tables if needed. If for the provided `KnowledgeBaseName` on the `Connection` there is already data present from an earlier iteration with the same chunk ID, this operation will return `false` with an error logged.

Use [Initialize ChunkCollection](/appstore/modules/genai/commons/#chunkcollection-create) and [Add KnowledgeBaseChunk to ChunkCollection](/appstore/modules/genai/commons/#chunkcollection-add-knowledgebasechunk) to construct the input for this activity, which needs to be passed as `ChunkCollection`.

**Input parameters**

| Name | Type | Mandatory | Description |
| ------------------- | --------------------------------------- | --------- | ----------------------------------------------------- |
| `Connection` | [Connection](/appstore/modules/genai/commons/#connection) | mandatory | This is a connection object that holds the knowledge base name and database connection details. This must be of type [PgVectorKnowledgeBaseConnection](#pgvectorconnection). |
| `ChunkCollection` | [ChunkCollection](/appstore/modules/genai/commons/#chunkcollection) | mandatory | This collection contains the knowledge base chunks for inserting the chunk data into the knowledge base. |

The `Connection` entity passed must be of type [PgVectorKnowledgeBaseConnection](#pgvectorconnection). It must have the `KnowledgeBaseName` string attribute populated and include a `DatabaseConfiguration` associated with the connection details to a PostgreSQL database server that has the PgVector extension installed. This `DatabaseConfiguration` entity is typically configured at runtime or in after-startup logic. 

**Return value**

| Name | Type | Description |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `IsSuccess` | Boolean | This Boolean indicates if the addition of data to the knowledge base was successful. This can be used for custom error-handling. |

##### 4.2.2.3 Replace {#replace-technical}

The `Replace` operation is used to replace existing knowledge base chunks in a knowledge base based on the Mendix objects the chunks represent. This operation handles a collection of chunks with their metadata in a single operation.

Use [Initialize ChunkCollection](/appstore/modules/genai/commons/#chunkcollection-create) and [Add KnowledgeBaseChunk to ChunkCollection](/appstore/modules/genai/commons/#chunkcollection-add-knowledgebasechunk) to construct the input for this activity, which needs to be passed as `ChunkCollection`. In order to replace the right data in the knowledge base, all `KnowledgeBaseChunks` in `ChunkCollection` need to represent a Mendix object: this is set during chunk creation in [Add KnowledgeBaseChunk to ChunkCollection](/appstore/modules/genai/commons/#chunkcollection-add-knowledgebasechunk) by specifying the `MxObject` input parameter. Existing chunks related to those Mendix objects will be deleted from the knowledge base first, and then be inserted according to the new state as specified by the `ChunkCollection` (metadata included). 

**Input parameters**

| Name | Type | Mandatory | Description |
| ------------------- | --------------------------------------- | --------- | ----------------------------------------------------- |
| `Connection` | [Connection](/appstore/modules/genai/commons/#connection) | mandatory | This is a connection object that holds the knowledge base name and database connection details. This must be of type [PgVectorKnowledgeBaseConnection](#pgvectorconnection). |
| `ChunkCollection` | [ChunkCollection](/appstore/modules/genai/commons/#chunkcollection) | mandatory |This collection contains the knowledge base chunks for replacing the chunk data into the knowledge base. Based on the Mendix object they represent, deletion of chunks will happen first. |

The `Connection` entity passed must be of type [PgVectorKnowledgeBaseConnection](#pgvectorconnection). It must have the `KnowledgeBaseName` string attribute populated and include a `DatabaseConfiguration` associated with the connection details to a PostgreSQL database server that has the PgVector extension installed. This `DatabaseConfiguration` entity is typically configured at runtime or in after-startup logic. By providing the `KnowledgeBaseName` on the `Connection`, you determine the knowledge base in which the chunks are to be replaced.

**Return value**

| Name | Type | Description |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `IsSuccess` | Boolean | This Boolean indicates if the replacement of data in the knowledge base was successful. This can be used for custom error-handling. |

#### 4.2.3 Retrieve Operations {#retrieve-operations-technical}

The activities below support the retrieval of the knowledge from the knowledge base.

##### 4.2.3.1 Retrieve {#retrieve-technical}

The `Retrieve` activity is used to retrieve a subset of or the whole knowledge base. A list of chunks is returned, which can be used for custom logic. For additional filtering, provide a [MetadataCollection](/appstore/modules/genai/commons/#metadatacollection-entity) (see the [Initialize MetadataCollection with Metadata](/appstore/modules/genai/commons/#knowledgebase-initialize-metadatacollection) section and the [Add Metadata to MetadataCollection](/appstore/modules/genai/commons/#knowledgebase-add-metadata) section). Also, if during insertion, the original Mendix object was used at the creation of the chunks, the `MxObject` parameter can be used to only retrieve those chunks. Lastly, `Offset` and `MaxNumberOfResults` can be used for pagination or specific selection use cases.

**Input parameters**

| Name | Type | Mandatory | Description |
| ------------------- | --------------------------------------- | --------- | ----------------------------------------------------- |
| `Connection` | [Connection](/appstore/modules/genai/commons/#connection) | mandatory | This is a connection object that holds the knowledge base name and database connection details. This must be of type [PgVectorKnowledgeBaseConnection](#pgvectorconnection). |
| MxObject | Type parameter | optional |  This is the (original) Mendix object that the chunks in the knowledge base represent. Only chunks related to this Mendix entity will be retrieved. |
| `MetadataCollection` | [MetadataCollection](/appstore/modules/genai/commons/#metadatacollection-entity) | optional | When provided, this operation only returns knowledge base chunks that conform with all of the metadata key-value pairs in the collection. |
| `MaxNumberOfResults` | Integer/Long | optional | This is to optionally limit the number of results that should be returned. |
| `Offset` | Integer/Long | optional | This is for skipping a number of records in the retrieve. |

The `Connection` entity passed must be of type [PgVectorKnowledgeBaseConnection](#pgvectorconnection). It must have the `KnowledgeBaseName` string attribute populated and include a `DatabaseConfiguration` associated with the connection details to a PostgreSQL database server that has the PgVector extension installed. This `DatabaseConfiguration` entity is typically configured at runtime or in after-startup logic. By providing the `KnowledgeBaseName` on the `Connection`, you determine the knowledge base from which the chunks are to be retrieved.

**Return value**

| Name | Type | Description |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `KnowledgeBaseChunkList` | List of [KnowledgeBaseChunk](/appstore/modules/genai/commons/#knowledgebasechunk-entity) | This list is the result of the retrieval. |

##### 4.2.3.2 Retrieve & Associate {#retrieve-associate-technical}

The `Retrieve & Associate` activity is used to retrieve a subset of or the whole knowledge base. In addition to the [Retrieve](#retrieve-technical) operation, this operation also sets the associations to the Mendix objects for which the chunks were created. In order for this to work, it is necessary to create a custom specialization of the [KnowledgeBaseChunk](/appstore/modules/genai/commons/#knowledgebasechunk-entity) entity in the domain model of the application and to make sure the necessary associations exist towards the Mendix objects that the chunks represent. This specialization must be passed as an [entity parameter](/refguide/java-actions/#entity-type) called `TargetChunk`. A list of this type is then returned, which can be used for retrieval of the Mendix objects in custom logic. For additional filtering, provide a [MetadataCollection](/appstore/modules/genai/commons/#metadatacollection-entity) (see the [Initialize MetadataCollection with Metadata](/appstore/modules/genai/commons/#knowledgebase-initialize-metadatacollection) section and the [Add Metadata to MetadataCollection](/appstore/modules/genai/commons/#knowledgebase-add-metadata) section). Lastly, `Offset` and `MaxNumberOfResults` can be used for pagination or specific selection use cases.

**Input parameters**

| Name | Type | Mandatory | Description |
| ------------------- | --------------------------------------- | --------- | ----------------------------------------------------- |
| `Connection` | [Connection](/appstore/modules/genai/commons/#connection) | mandatory | This is a connection object that holds the knowledge base name and database connection details. This must be of type [PgVectorKnowledgeBaseConnection](#pgvectorconnection). |
| `TargetChunk` | Entity parameter | mandatory | This must be a specialization of the [KnowledgeBaseChunk](/appstore/modules/genai/commons/#knowledgebasechunk-entity) entity. If it contains associations to (specializations of) the related Mendix object for which the chunk was created, this is set by this operation. This also describes the type of the returned list. |
| `MetadataCollection` | [MetadataCollection](/appstore/modules/genai/commons/#metadatacollection-entity) | optional | When provided, this operation only returns knowledge base chunks that conform with all of the metadata key-value pairs in the collection. |
| `MaxNumberOfResults` | Integer/Long | optional | This is to optionally limit the number of results that should be returned. |
| `Offset` | Integer/Long | optional | This is for skipping a specified number of records in the retrieval. |

The `Connection` entity passed must be of type [PgVectorKnowledgeBaseConnection](#pgvectorconnection). It must have the `KnowledgeBaseName` string attribute populated and include a `DatabaseConfiguration` associated with the connection details to a PostgreSQL database server that has the PgVector extension installed. This `DatabaseConfiguration` entity is typically configured at runtime or in after-startup logic. By providing the `KnowledgeBaseName` on the `Connection`, you determine the knowledge base from which the chunks are to be retrieved.

**Return value**

| Name | Type | Description |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `TargetChunkList` | List of type parameter `TargetChunk` | This list is the result of the retrieval. |

##### 4.2.3.3 Retrieve Nearest Neighbors {#retrieve-nearest-neighbors-technical}

The `Retrieve Nearest Neighbors` activity is used to retrieve chunks from the knowledge base ordered by similarity based on the given vector. For additional filtering, provide a [MetadataCollection](/appstore/modules/genai/commons/#metadatacollection-entity) (see the [Initialize MetadataCollection with Metadata](/appstore/modules/genai/commons/#knowledgebase-initialize-metadatacollection) section and the [Add Metadata to MetadataCollection](/appstore/modules/genai/commons/#knowledgebase-add-metadata) section). Lastly, `MinimumSimilarity` (range 0 - 1.0) and `MaxNumberOfResults` can be used for optional filtering.

The `DatabaseConfiguration` that is passed must contain the connection details to a PostgreSQL database server with the PgVector extension installed. This entity is typically configured at runtime or in [after-startup](/refguide/app-settings/#after-startup) logic. By providing the `KnowledgeBaseName` parameter, you determine the knowledge base that was used for population earlier.

**Input parameters**

| Name | Type | Mandatory | Description |
| ------------------- | --------------------------------------- | --------- | ----------------------------------------------------- |
| `Connection` | [Connection](/appstore/modules/genai/commons/#connection) | mandatory | This is a connection object that holds the knowledge base name and database connection details. This must be of type [PgVectorKnowledgeBaseConnection](#pgvectorconnection). |
| `Vector` | String | mandatory | This is the vector representation of the data for which the nearest neighbors should be calculated. The dimension needs to be the same as the vectors stored in the knowledge base. |
| `MetadataCollection` | [MetadataCollection](/appstore/modules/genai/commons/#metadatacollection-entity) | optional | When provided, this operation only returns knowledge base chunks that conform with all of the metadata key-value pairs in the collection. |
| `MinimumSimilarity` | Decimal | optional | This is to filter the results, so that only chunks with a similarity score equal to or greater than the specified value are returned. The score ranges from 0 (not similar) to 1.0 (the same vector). |
| `MaxNumberOfResults` | Integer/Long | optional | This can be used to limit the number of results that should be returned. |

The `Connection` entity passed must be of type [PgVectorKnowledgeBaseConnection](#pgvectorconnection). It must have the `KnowledgeBaseName` string attribute populated and include a `DatabaseConfiguration` associated with the connection details to a PostgreSQL database server that has the PgVector extension installed. This `DatabaseConfiguration` entity is typically configured at runtime or in after-startup logic. By providing the `KnowledgeBaseName` on the `Connection`, you determine the knowledge base from which the nearest neighbors are to be retrieved.

**Return value**

| Name | Type | Description |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `KnowledgeBaseChunkList` | List of [KnowledgeBaseChunk](/appstore/modules/genai/commons/#knowledgebasechunk-entity) | This list is the result of the retrieval. |

##### 4.2.3.4 Retrieve Nearest Neighbors & Associate {#retrieve-nearest-neighbors-associate-technical}

The `Retrieve Nearest Neighbors & Associate` activity is used to retrieve chunks from the knowledge base ordered by similarity based on the given vector. In addition to the [Retrieve Nearest Neighbors](#retrieve-nearest-neighbors-technical) operation, this operation also sets the associations to the Mendix objects for which the chunks were created. In order for this to work, it is necessary to create a custom specialization of the [KnowledgeBaseChunk](/appstore/modules/genai/commons/#knowledgebasechunk-entity) entity in the domain model of the application and to make sure the necessary associations exist towards the Mendix objects that the chunks represent. This specialization must be passed as an [entity parameter](/refguide/java-actions/#entity-type) called `TargetChunk`. A list of this type is then returned which can be used for retrieval of the Mendix objects in custom logic. For additional filtering, provide a [MetadataCollection](/appstore/modules/genai/commons/#metadatacollection-entity) (see the [Initialize MetadataCollection with Metadata](/appstore/modules/genai/commons/#knowledgebase-initialize-metadatacollection) section and the [Add Metadata to MetadataCollection](/appstore/modules/genai/commons/#knowledgebase-add-metadata) section). Lastly,`MinimumSimilarity` (range 0 - 1.0) and `MaxNumberOfResults` can be used for optional filtering.

**Input parameters**

| Name | Type | Mandatory | Description |
| ------------------- | --------------------------------------- | --------- | ----------------------------------------------------- |
| `Connection` | [Connection](/appstore/modules/genai/commons/#connection) | mandatory | This is a connection object that holds the knowledge base name and database connection details. This must be of type [PgVectorKnowledgeBaseConnection](#pgvectorconnection). |
| `TargetChunk` | Entity parameter | mandatory | This must be a specialization of the [KnowledgeBaseChunk](/appstore/modules/genai/commons/#knowledgebasechunk-entity) entity. If it contains associations to (specializations of) the related Mendix object for which the chunk was created, this will be set by this operation. This will also describe the type of the returned list. |
| `Vector` | String | mandatory | This is the vector representation of the data for which the nearest neighbors should be calculated. The dimension needs to be the same as the vectors stored in the knowledge base. |
| `MetadataCollection` | [MetadataCollection](/appstore/modules/genai/commons/#metadatacollection-entity) | optional | When provided, this operation only returns knowledge base chunks that conform with all of the metadata key-value pairs in the collection. |
| `MinimumSimilarity` | Decimal | optional | This is to filter the results, so that it only returns those chunks with a similarity score equal to or greater than the value provided. The score ranges from 0 (not similar) to 1.0 (the same vector). |
| `MaxNumberOfResults` | Integer/Long | optional | This can be used to limit the number of results that should be returned. |

The `Connection` entity passed must be of type [PgVectorKnowledgeBaseConnection](#pgvectorconnection). It must have the `KnowledgeBaseName` string attribute populated and include a `DatabaseConfiguration` associated with the connection details to a PostgreSQL database server that has the PgVector extension installed. This `DatabaseConfiguration` entity is typically configured at runtime or in after-startup logic. By providing the `KnowledgeBaseName` on the `Connection`, you determine the knowledge base from which the chunks are to be retrieved.

**Return value**

| Name | Type | Description |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `TargetChunkList` | List of type parameter `TargetChunk` | This list is the result of the retrieval. |

#### 4.2.4 Delete Operations {#delete-operations-technical}

The following activities support the deletion of knowledge bases.

##### 4.2.4.1 Delete Knowledge Base {#delete-knowledge-base-technical}

Use this operation to delete a complete knowledge base at once. This operation takes care of the deletion of the actual tables including all data for the specified knowledge base. The operation will finish successfully even if there is no table structure present for the provided `KnowledgeBaseName`.

**Input parameters**

| Name | Type | Mandatory | Description |
| ------------------- | --------------------------------------- | --------- | ----------------------------------------------------- |
| `Connection` | [Connection](/appstore/modules/genai/commons/#connection) | mandatory | This is a connection object that holds the knowledge base name and database connection details. This must be of type [PgVectorKnowledgeBaseConnection](#pgvectorconnection). |

The `Connection` entity passed must be of type [PgVectorKnowledgeBaseConnection](#pgvectorconnection). It must have the `KnowledgeBaseName` string attribute populated and include a `DatabaseConfiguration` associated with the connection details to a PostgreSQL database server that has the PgVector extension installed. This `DatabaseConfiguration` entity is typically configured at runtime or in after-startup logic. By providing the `KnowledgeBaseName` on the `Connection`, you determine the knowledge base to be deleted.

**Return value**

| Name | Type | Description |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `IsSuccess` | Boolean | This Boolean indicates if the deletion of the knowledge base was successful. This can be used for custom error-handling.|

##### 4.2.4.2 Delete {#delete-technical}

Use this operation to delete existing chunks and corresponding metadata in a knowledge base based on the Mendix object provided: `MxObject` is the original Mendix object that the chunks in the knowledge base represent. Only chunks related to this Mendix object are deleted.

**Input parameters**

| Name | Type | Mandatory | Description |
| ------------------- | --------------------------------------- | --------- | ----------------------------------------------------- |
| `Connection` | [Connection](/appstore/modules/genai/commons/#connection) | mandatory | This is a connection object that holds the knowledge base name and database connection details. This must be of type [PgVectorKnowledgeBaseConnection](#pgvectorconnection). |
| `MxObject` | Object | mandatory | This is the original Mendix object that the chunks in the knowledge base represent. Only chunks related to this Mendix object are deleted. |

The `Connection` entity passed must be of type [PgVectorKnowledgeBaseConnection](#pgvectorconnection). It must have the `KnowledgeBaseName` string attribute populated and include a `DatabaseConfiguration` associated with the connection details to a PostgreSQL database server that has the PgVector extension installed. This `DatabaseConfiguration` entity is typically configured at runtime or in after-startup logic. By providing the `KnowledgeBaseName` on the `Connection`, you determine the knowledge base from which the chunks are to be deleted.

**Return value**

| Name | Type | Description |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `IsSuccess` | Boolean | This Boolean indicates if the deletion of data in the knowledge base was successful. This can be used for custom error-handling. |

##### 4.2.4.3 Delete List {#delete-list-technical}

Use this operation to delete existing chunks and corresponding metadata in a knowledge base based on the Mendix objects provided: `MxObjectList` is the list of original Mendix objects that the chunks in the knowledge base represent. Only chunks related to these Mendix objects are deleted.

**Input parameters**

| Name | Type | Mandatory | Description |
| ------------------- | --------------------------------------- | --------- | ----------------------------------------------------- |
|`Connection` | [Connection](/appstore/modules/genai/commons/#connection) | mandatory | This is a connection object that holds the knowledge base name and database connection details. This must be of type [PgVectorKnowledgeBaseConnection](#pgvectorconnection). |
| `MxObjectList` | List of Object | mandatory | This is a list of original Mendix objects that the chunks in the knowledge base represent. Only chunks related to these Mendix objects are deleted. |

The `Connection` entity passed must be of type [PgVectorKnowledgeBaseConnection](#pgvectorconnection). It must have the `KnowledgeBaseName` string attribute populated and include a `DatabaseConfiguration` associated with the connection details to a PostgreSQL database server that has the PgVector extension installed. This `DatabaseConfiguration` entity is typically configured at runtime or in after-startup logic. By providing the KnowledgeBaseName on the Connection, you determine the knowledge base from which the chunks are to be deleted.

**Return value**

| Name | Type | Description |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `IsSuccess` | Boolean | This Boolean indicates if the deletion of data in the knowledge base was successful. This can be used for custom error-handling. |

## 5 Showcase Application {#showcase-application}

For more inspiration and guidance on how to use these operations in your logic and how to combine it with use cases in the context of generative AI, Mendix highly recommends downloading the [OpenAI showcase app](https://marketplace.mendix.com/link/component/220475) from the Marketplace. This application contains various examples in the context of generative AI, some of which use the PgVector Knowledge Base module for storing embedding vectors.

{{% alert color="info" %}}
For more information on how to set up a vector database for retrieval augmented generation (RAG), see the [Setting up a Vector Database](/appstore/modules/genai/pgvector-setup/) section and the [RAG Example Implementation in the OpenAI Showcase Application](/appstore/modules/genai/rag/) section.
{{% /alert %}}

## 6 Read More {#read-more}

* [pgvector: Open-Source Extension For Vector Similarity Search For PostgreSQL](https://github.com/pgvector/pgvector?tab=readme-ov-file#pgvector)