---
title: "PgVector Knowledge Base"
url: /appstore/modules/genai/pgvector/
linktitle: "PgVector Knowledge Base"
description: "Describes the configuration and usage of the PgVector Knowledge Base module from the Mendix Marketplace. This module allows developers to integrate PostgreSQL databases with pgvector installed as knowledge bases into their Mendix app."
aliases:
   - /appstore/modules/pgvector-knowledge-base/
---

## 1 Introduction {#introduction}

The [PgVector Knowledge Base](https://marketplace.mendix.com/link/component/225063) module contains operations to interact with a PostgreSQL database that has the [pgvector](https://github.com/pgvector/pgvector?tab=readme-ov-file#pgvector) extension installed. It lets you easily store vectors and perform cosine similarity calculations from your Mendix app. This way, you can leverage knowledge bases to enhance your app functionality by performing operations based on (embedding) vectors and vector similarity. In the context of generative AI, large language models (LLMs), and embeddings, this is a key component in natural language processing (NLP) patterns such as retrieval augmented generation (RAG), recommendation algorithms, and similarity search operations.

### 1.1 Typical Use Cases {#use-cases}

This module is particularly powerful for Mendix apps that use large language models in generative AI contexts. The PgVector Knowledge Base module allows these apps to securely use private company data in the app logic. For example, this might be essential when constructing prompts.

When there is a need for a separate private knowledge base outside of the LLM infrastructure, this module provides a low-code way to store data chunks in the private knowledge base and retrieve relevant information for end-user actions or app processes.

{{% alert color="info" %}}
Check out the [OpenAI showcase app](https://marketplace.mendix.com/link/component/220475) to see example implementations, including retrieval augmented generation and semantic search with knowledge bases.
{{% /alert %}}

#### 1.1.1 Retrieval Augmented Generation {#use-cases-rag}

A common NLP pattern is retrieval augmented generation (RAG), where the goal is to have LLMs construct answers to questions or provide on-demand information about private knowledge base data. In order to make this work, discrete pieces of information from the knowledge base are sent along with user questions to the LLM. The retrieval operations from this module are designed for this step in such use cases.

#### 1.1.2 Semantic Search {#use-cases-semantic-search}

Also without invoking LLMs directly with the retrieved information, the similarity search logic from the retrieval operation can be leveraged in combination with embedding models to create a semantic search in a Mendix app. This can be used for fuzzy search capabilities, suggestions, or simple recommendation systems.

### 1.2 Features {#features}

With the current version, Mendix supports inserting data chunks with their vectors into a knowledge base (population) and selecting those records from that moment onwards (retrieval). Apart from cosine similarity search, which is executed based on the vector only, custom filtering is possible using key-value labeling to support an additional traditional search component.

### 1.3 Prerequisites {#prerequisites}

You should have access to your own (remote) PostgreSQL database server with the [pgvector](https://github.com/pgvector/pgvector) extension installed. For more information, see [Setting up a Vector Database](/appstore/modules/genai/pgvector-setup/).

{{% alert color="info" %}}This module cannot be used with the Mendix Cloud app database. It only works if you are using your own database server or Amazon RDS.{{% /alert %}}

### 1.4 Dependencies {#dependencies}

* Mendix Studio Pro version [9.24.2](/releasenotes/studio-pro/9.24/#9242) or higher 
* [Encryption](https://marketplace.mendix.com/link/component/1011) module
* [Community Commons](https://marketplace.mendix.com/link/component/170) module
* [Database Connector](https://marketplace.mendix.com/link/component/2888) module

## 2 Installation {#installation}

Follow the instructions in [Using Marketplace Content](/appstore/use-content/) to import the PgVector Knowledge Base module into your app.

## 3 Configuration {#configuration}

After you install the PgVector Knowledge Base module, you can find it in the **App Explorer**, in the **Marketplace modules** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to a database and let it act as a knowledge base. To implement an activity, use it in a microflow. To ensure that your app can connect to an external database, you must also [configure the Encryption module](/appstore/modules/encryption/#configuration).

### 3.1 General Configuration {#general-configuration}

1. Add the module role **PgVectorKnowledgeBase.Administrator** to your Administrator user role in the security settings of your app. Optionally, map **PgVectorKnowledgeBase.User** to any user roles that need read access directly on retrieved entities, [Chunk](#chunk), and [Label](#label).
2. Add the **DatabaseConfiguration_Overview** page (**USE_ME > Configuration**) to your navigation, or add the **Snippet_DatabaseConfigurations** to a page that is already part of your navigation. 
3. Set up your database configurations at runtime. For more information, see the [Configuring the Database Connection Details](/appstore/modules/genai/pgvector-setup/#configure-database-connection) section in *Setting up a Vector Database*.

### 3.2 General Operations {#general-operations-configuration} 

After following the general setup above, you are all set to use the microflows and Java actions in the **USE_ME > Operations** folder in your logic. Currently, ten operations (microflows and java actions) are exposed as microflow actions under the **PgVector Knowledge Base Operations** category in the **Toolbox** in Mendix Studio Pro. These can be split into two categories, corresponding to the main functionalities: managing data chunks in the knowledge base (for example, [(re)populate](#repopulate-knowledge-base)) and finding relevant data chunks in an existing knowledge base (for example, [retrieve](#retrieve)). In both steps, [Labels](#label) can be provided to enable additional filtering.

#### 3.2.1 `Create label` {#create-label}

Labels can optionally be used to attach additional information to chunks. That will be used for custom filtering during the retrieval step. Each Label stands for a single key-value combination. In the operations to create a knowledge base chunk, a list of Labels can be passed as optional input. During the retrieval, if a list of Labels is provided as search input, all key-value pairs passed in the form of Label objects to the operation must match any previously attached labels to the chunk during population. Examples for typical key-value pairs are as follows:

* Category: Bug, Feature
* Status: Open, Closed, In Progress
* Machine Type: MachineX, MachineY

### 3.3 (Re)populate Operations {#repopulate-operations-configuration}

In order to add data to the knowledge base, you need to have discrete pieces of information and create chunks for those using the `Create Chunk` operation. After you create the chunks, the resulting list can be inserted into the knowledge base using the `(Re)populate Knowledge Base` operation. 

A typical pattern for populating a knowledge base is as follows:

1. Create a new list of `Chunk`.
2. For each knowledge item, do the following:
    * Create a new list of `Label`.
    * Use [Create label](#create-label-technical) as many times as needed to add the necessary labels.
    * With both lists, use [Create chunk](#create-chunk-technical) for the knowledge item.
3. With the list of `Chunk`, use [(Re)populate Knowledge Base](#repopulate-knowledge-base) to store the chunks.

#### 3.3.1 `(Re)populate Knowledge Base` {#repopulate-knowledge-base}

This operation handles the following:

* Clearing the knowledge base if it does exist 
* Creating the empty knowledge base if it does not exist
* Inserting all provided chunks with their labels into the knowledge base

The population handles a whole list of chunks at once, and this list should be created using the `Create Chunk` operation. It is possible to have multiple knowledge bases in the same database in parallel by providing different knowledge base names in combination with the same [DatabaseConfiguration](#databaseconfiguration-entity).

#### 3.3.2 `Insert` {#insert}

In cases where additional records need to be added to existing knowledge bases, the `Insert` operation can be used. This operation handles a list of chunks that need to be inserted into the knowledge base. It behaves similarly to the [(Re)populate](#repopulate-knowledge-base) operation, except that it does not delete any data. 

#### 3.3.3 `Replace` {#replace}

The `Replace` operation is intended to be used in scenarios in which the chunks in the knowledge base are related to Mendix objects (in other words, data in the Mendix database). It can be used to keep the knowledge base in sync when the Mendix data changes, which needs to be reflected in the knowledge base. The operation handles a list of chunks: it will remove the knowledge base data for the Mendix objects the chunks refer to, after which the new data is inserted.

### 3.4 Retrieve Operations {#retrieve-operations}

Currently, four operations are available for on-demand retrieval of data chunks from a knowledge base. All operations work on a single knowledge base (specified by the name) on a single database server (specified by the [DatabaseConfiguration](#databaseconfiguration-entity)). Apart from a regular [Retrieve](#retrieve), an additional operation was exposed to [Retrieve Nearest Neighbors](#retrieve-nearest-neighbors), where the cosine distance between the input vector and the vectors of the records in the knowledge base is calculated. In both cases it is possible to filter on [Labels](#create-label). 

A typical pattern for retrieval from a knowledge base is as follows:

1. Create a list of labels.
2. Use [Create Label](#create-label) as many times as needed to add the necessary labels.
3. Do the retrieval. For example, you could use [`Retrieve Nearest Neighbors`](#retrieve-nearest-neighbors) to find chunks based on vector similarity.

For scenarios in which the chunks were created based on Mendix objects at the time of population, and these objects need to be used in logic after the retrieval step, two additional operations are available. The Java Actions [Retrieve & Associate](#retrieve-associate) and [Retrieve Nearest Neighbors & Associate](#retrieve-nearest-neighbors-associate) take care of the chunk retrieval and set the association towards the original object, if applicable.

A typical pattern for this retrieval is as follows:

1. Create a list of labels.
2. Use [Create Label](#create-label) as many times as needed to add the necessary labels.
3. Do the retrieval. For example, you could use [Retrieve Nearest Neighbors & Associate](#retrieve-nearest-neighbors-associate) to find chunks based on vector similarity.
4. For each retrieved chunk, retrieve the original Mendix object and do custom logic.

#### 3.4.1 `Retrieve` {#retrieve}

Use this operation to retrieve chunks from the knowledge base. Additional selection and filtering can be done by specifying the optional input parameters for offset and a maximum number of results, as well as a list of labels. If labels are provided, this operation only returns chunks that conform with all of the labels in the list.

#### 3.4.2 `Retrieve & Associate` {#retrieve-associate}

Use this operation to retrieve chunks from the knowledge base and set associations to the related Mendix objects (if applicable). Additional selection and filtering can be done by specifying the optional input parameters for offset and a maximum number of results, as well as a list of labels. If labels are provided, this operation only returns chunks that are conform with all of the labels in the list.

#### 3.4.3 `Retrieve Nearest Neighbors` {#retrieve-nearest-neighbors}

Use this operation to retrieve chunks from the knowledge base where the retrieval and sorting are based on vector similarity with regard to a given input vector. Additional selection and filtering can be done by specifying the optional input parameters: minimum (cosine) similarity (0–1.0), maximum number of results, and a list of labels. If labels are provided, this operation only returns chunks that conform with all of the labels in the list.

#### 3.4.4 `Retrieve Nearest Neighbors & Associate` {#retrieve-nearest-neighbors-associate}

Use this operation to retrieve chunks from the knowledge base and set associations to the related Mendix objects (if applicable). In this operation the retrieval and sorting are based on vector similarity with regard to a given input vector. Additional selection and filtering can be done by specifying the optional input parameters: minimum (cosine) similarity (0–1.0), maximum number of results, as well as a list of labels. If labels are provided, this operation only returns chunks that are conform with all of the labels in the list.

### 3.5 Delete Operations {#delete-operations-configuration}

When a whole knowledge base, or part of its data, is no longer needed, this can be handled by using a delete operation. If, however, the knowledge base is still needed, but the data needs to be replaced, refer to the [(Re)populate Operations](#repopulate-operations-configuration) or [Replace](#replace) operations instead.

#### 3.5.1 `Delete Knowledge Base` {#delete-knowledge-base}

Use this operation to delete a complete knowledge base at once. After execution, the knowledge base including its data will no longer exist in the vector database.

#### 3.5.2 `Delete` {#delete}

In scenarios where the chunks in the knowledge base are related to Mendix objects (in other words, data in the Mendix database), deletion of Mendix data typically needs to result in the removal of its related chunks from the knowledge base. For this, the `Delete` operation can be used. The `Delete` operation accepts any kind of Mendix object, and it removes all the chunks related to the provided Mendix object at the time of insertion.

#### 3.5.3 `Delete List` {#delete-list}

This operation is meant to be used in a similar scenario to the one described for the `Delete` operation, but handles a list of Mendix objects in a single operation. Executing this operation removes all the chunks related to the provided Mendix objects at the time of insertion.

## 4 Technical Reference {#technical-reference}

To help you use the PgVector Knowledge Base module, the following sections list the available [entities](#domain-model), [enumerations](#enumerations), and [activities](#activities) that you can use in your application. 

### 4.1 Domain Model {#domain-model} 

The domain model in Mendix is a data model that describes the information in your application domain in an abstract way. For more general information, see [Domain Model](/refguide/domain-model/). To learn about where the entities from the domain model are used and relevant during implementation, see the [Activities](#activities) section below.

#### 4.1.1 Configuration {#configuration-domain-model}

{{< figure src="/attachments/appstore/use-content/modules/pgvector-knowledge-base/domain-model-database-configuration.png" >}}

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

#### 4.1.2 Knowledge Base Interaction {#knowledgebase-domain-model}

{{< figure src="/attachments/appstore/use-content/modules/pgvector-knowledge-base/domain-model-knowledge-base-interaction.png" >}}

##### 4.1.2.1 `Chunk` {#chunk}

This entity represents a discrete piece of knowledge that needs to go into or comes out of the knowledge base. 

| Attribute         | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| `ChunkID`         | This is a system-generated GUID for the chunk in the knowledge base. |
| `HumanReadableID` | This is a front-end reference to the chunk so that users know what it refers to (e.g. URL, document location, human-readable record ID) |
| `Vector`          | This is the embedding vector that was generated for the knowledge for this chunk which is used in the vector database for similarity calculations. |
| `ChunkType`       | This is the type of the chunk. See the enumeration [ChunkType](#enum-chunktype). |
| `Key`             | This is the original string that was used to generate the vector and can be used directly after retrieval. |
| `Value`           | This represents a value that has no effect on the vector or similarity search but is to be used directly after retrieval. |
| `MxObjectID`      | If the chunk was based on a Mendix object during creation, this will contain the GUID of that object at the time of creation. |
| `MxEntity`        | If the chunk was based on a Mendix object during creation, this will contain its full entity name at the time of creation. |
| `Similarity`      | In case the chunk was retrieved from the knowledge base as part of a similarity search (e.g nearest neighbors retrieval) this will contain the cosine similarity to the input vector for the retrieval that was executed. |

The **PgVectorKnowledgeBase.User** module role has read access to all attributes of `Chunk`. This facilitates easy implementation on pages where retrieved data is shown.

##### 4.1.2.2 `Label` {#label} 

This represents additional information that is to be stored with the chunks in the knowledge base. It can be used for custom filtering during retrieval. A chunk can be associated to multiple labels; labels in turn can be shared across multiple chunks.

| Attribute            | Description                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------- |
| `Key`                | This is the name of the label and typically tells how the value should be interpreted.        |
| `Value`              | This is the value of the label that provides additional information about the chunk in the context of the given key.          |

The **PgVectorKnowledgeBase.User** module role has read access to all attributes of `Label`. This facilitates easy implementation on pages where retrieved data is shown.

### 4.2 Enumerations {#enumerations} 

An enumeration is a predefined list of values that can be used as an attribute type. For more information about enumerations in general, see [Enumerations](/refguide/enumerations/). 

#### 4.2.1 General {#general-enumerations}

##### 4.2.1.1 `ENUM_ChunkType` {#enum-chunktype} 

This enumeration provides a list of possible chunk types. Currently two types are supported. 

| Name         | Caption         | Description                |
| ------------ | --------------- | -------------------------- |
| `Knowledge`  | **Knowledge**   | One a single text (`Key` of [Chunk](#chunk)) is relevant for both the similarity search and the processing steps afterwards. |
| `KeyValue`   | **KeyValue**    | The functionally relevant information after retrieval is different (`Value` of [Chunk](#chunk)) from the text based on which the embedding was generated (`Key` of [Chunk](#chunk)) |

### 4.3 Activities {#activities} 

Activities define the actions that are executed from a microflow or nanoflow. In this module, activities can be found in the form of microflows or Java actions in the **USE_ME > Operations** folder.

#### 4.3.1 General Operations {#general-operations-technical} 

Operations that can be used in multiple knowledge base processes and do not fall into a specific category.

##### 4.3.1.1 Create Label {#create-label-technical} 

The `Create Label` activity is intended for creating [Labels](#label). The given input parameters are assigned to a newly created label. The label is added to the provided `LabelList`, which is intended to be used afterwards for passing into [Create Chunk](#create-chunk-technical).

**Input parameters**

| Name             | Type                                                         | Mandatory                     | Description                                                  |
| ---------------- | ------------------------------------------------------------ | ----------------------------- | ------------------------------------------------------------ |
| `Key`          | String                                                       | mandatory                     | This is the input to assign the key of the new label.                           |
| `Value`  | String                     | mandatory                     | This is the input to assign the value of the new label.             |
| `LabelList`          | List of [Labels](#label)                                                    | mandatory | This is for adding the label to a list that can be used outside of this Activity. |

#### 4.3.2 (Re)populate Operations {#repopulate-operations-technical} 

Operations that support the (re)creation and population of a knowledge base.

##### 4.3.2.1 Create Chunk {#create-chunk-technical}

The `Create Chunk` activity is intended for instantiating [chunks](#chunk) to create the input for the knowledge base based on your own data structure. A `ChunkList` must be passed to which the new chunk object will be added. Optionally, use [Create Label](#create-label-technical) to construct a list of Labels for custom filtering during the retrieval.

**Input parameters**

| Name             | Type                                                         | Mandatory                     | Description                                                  |
| ---------------- | ------------------------------------------------------------ | ----------------------------- | ------------------------------------------------------------ |
| `ChunkList`          | List of [chunks](#chunk)                                                    | mandatory                     | This the (mandatory) list to which the chunk will be added. This list is the input for other operations (for example, [(Re)populate](#repopulate-operations-technical)).                         |
| `HumanReadableID`  | String                     | mandatory                     | This is a front-end identifier that can be used for showing or retrieving sources in a custom way. If it is not relevant, "empty" must be passed explicitly here.             |
| `Vector`  | String                     | mandatory                     | This is the vector representation of the content of the chunk, based  on which the similarity search is executed as in the [Retrieve Nearest Neighbors](#retrieve-nearest-neighbors-technical) operation.            |
| `Key`  | String                     | mandatory                     | This is supposed to contain the string content of the chunk for which the embedding was created. In cases where the retrieval of the actual data happens in a different way (such as using an identifier or a Mendix object) this can be left empty if not used; in that case, "empty" must be passed explicitly here.             |
| `Value`  | String                     | optional                     | In the `KeyValue ChunkType` scenario, the chunk content that is relevant for the similarity search is different from the value that is relevant in the custom processing afterwards. This field can be used to store this information directly in the PgVector Knowledge Base.           |
| `LabelList`          | List of [Labels](#label)                                                    | optional | This is an optional list that contains extra information about the chunk. Any key-value pairs can be stored with the chunk. In the retrieval operations it is possible to filter on one or multiple labels. |
| `ChunkType`  | Enumeration of [ENUM_ChunkType](#enum-chunktype)                   | mandatory                     | This mandatory value describes whether the chunk represents a piece of knowledge (key only) or a key-value pattern, where the key is embedded and used in the retrieval step, but the value is used in the logic after [Retrieve Nearest Neighbors](#retrieve-nearest-neighbors-technical). If this is set to KeyValue, the Value string is ignored in this action.             |
| `MxObject`  | Object                     | optional                    | This parameter is used to capture the Mendix object to which the chunk refers. This can be used to retrieve the record in the Mendix database later on.            |

##### 4.3.2.2 (Re)populate Knowledge Base {#repopulate-knowledge-base-technical}

The `(Re)populate Knowledge Base` activity is used to populate a whole knowledge base at once. This operation handles a list of chunks with their labels in a single operation. By providing the `KnowledgeBaseName` parameter, you determine the knowledge base. It is used later on to retrieve elements from the correct tables. This operation takes care of the creation of the actual tables. If there is already data from an earlier iteration for the provided `KnowledgeBaseName`, the data will be removed first. Use [Create Label](#create-label-technical) and [Create Chunk](#create-chunk-technical) to construct the input for this activity, which needs to be passed as `ChunkList`. The `DatabaseConfiguration` that is passed must contain the connection details to a PostgreSQL database server with the PgVector extension installed. This entity is typically configured at runtime or in [after-startup](/refguide/app-settings/#after-startup) logic.

**Input parameters**

| Name                | Type                                    | Mandatory | Description                                           |
| ------------------- | --------------------------------------- | --------- | ----------------------------------------------------- |
| `KnowledgeBaseName`          | String                                                       | mandatory                     | This is the name of the knowledge base in your database.|
| `DatabaseConfiguration` | [DatabaseConfiguration](#databaseconfiguration-entity) | mandatory | This object is used for connecting to and authenticating with the database where the knowledge base is located. |
| `ChunkList`          | List of [chunks](#chunk)                                                    | mandatory | This list is for inserting the [chunks'](#chunk) data into the knowledge base. |

**Return value**

| Name                 | Type                                      | Description                                                  |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `IsSuccess` | Boolean | This Boolean indicates if the population of the knowledge base was successful. This can be used for custom error-handling. |

##### 4.3.2.3 Insert {insert-technical}

The `Insert` operation is used to add chunks to a knowledge base. This operation handles a list of chunks with their labels in a single operation.

By providing the `KnowledgeBaseName` parameter, you determine the knowledge base. It is used later on to retrieve elements from the right tables. 

This operation takes care of the creation of the actual tables if needed. If for the provided `KnowledgeBaseName` there is already data present from an earlier iteration with the same chunk ID, this operation will return `false` with an error logged.

Use [Create Label](#create-label-technical) and [Create Chunk](#create-chunk-technical) to construct the input for this microflow, which needs to be passed as `ChunkList`. The `DatabaseConfiguration` that is passed must contain the connection details to a PostgreSQL database server with the PgVector extension installed. This entity is typically configured at runtime or in [after-startup](/refguide/app-settings/#after-startup) logic.

**Input parameters**

| Name                | Type                                    | Mandatory | Description                                           |
| ------------------- | --------------------------------------- | --------- | ----------------------------------------------------- |
| `KnowledgeBaseName`          | String                                                       | mandatory                     | This is the name of the knowledge base in your database.|
| `DatabaseConfiguration` | [DatabaseConfiguration](#databaseconfiguration-entity) | mandatory | This object is used for connecting to and authenticating with the database where the knowledge base is located. |
| `ChunkList`          | List of [chunks](#chunk)                                                    | mandatory | This list is for inserting the [chunks'](#chunk) data into the knowledge base. |

**Return value**

| Name                 | Type                                      | Description                                                  |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `IsSuccess` | Boolean | This Boolean indicates if the addition of data to the knowledge base was successful. This can be used for custom error-handling. |

##### 4.3.2.4 Replace {#replace-technical}

The `Replace` operation is used to replace existing chunks in a knowledge base based on the Mendix objects the chunks represent. This operation handles a list of chunks with their labels in a single operation.

Use [Create Label](#create-label-technical) and [Create Chunk](#create-chunk-technical) to construct the input for this microflow, which needs to be passed as `ChunkList`. In order to replace the right data in the knowledge base, all chunks in `ChunkList` need to represent a Mendix object: this is set during chunk creation in [Create Chunk](#create-chunk-technical) by specifying the `MxObject` input parameter. Existing chunks related to those Mendix objects will be deleted from the knowledge base first, and then be inserted according to the new state as specified by the ChunkList (labels included). By providing the `KnowledgeBaseName` parameter, you determine the knowledge base. It is used later on to retrieve elements from the right tables.

The `DatabaseConfiguration` that is passed must contain the connection details to a PostgreSQL database server with the PgVector extension installed. This entity is typically configured at runtime or in [after-startup](/refguide/app-settings/#after-startup) logic.

**Input parameters**

| Name                | Type                                    | Mandatory | Description                                           |
| ------------------- | --------------------------------------- | --------- | ----------------------------------------------------- |
| `KnowledgeBaseName`          | String                                                       | mandatory                     | This is the name of the knowledge base in your database.|
| `DatabaseConfiguration` | [DatabaseConfiguration](#databaseconfiguration-entity) | mandatory | This object is used for connecting to and authenticating with the database where the knowledge base is located. |
| `ChunkList`          | List of [chunks](#chunk)                                                    | mandatory | This list is for inserting the [chunks'](#chunk) data into the knowledge base. Based on the Mendix object they represent deletion of chunks will happen first. |

**Return value**

| Name                 | Type                                      | Description                                                  |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `IsSuccess` | Boolean | This Boolean indicates if the replacement of data in the knowledge base was successful. This can be used for custom error-handling. |

#### 4.3.3 Retrieve Operations {#retrieve-operations-technical}

Activities that support the retrieval of the knowledge from the knowledge base.

##### 4.3.3.1 Retrieve {#retrieve-technical} 

The `Retrieve` activity is used to retrieve a subset of or the whole knowledge base. A list of chunks is returned, which can be used for custom logic. For additional filtering, provide a list of [Labels](#label), see [Create Label](#create-label-technical) activity. `Offset` and `MaxNumberOfResults` can be used for pagination or specific selection use cases.

The `DatabaseConfiguration` that is passed must contain the connection details to a PostgreSQL database server with the PgVector extension installed. This entity is typically configured at runtime or in [after-startup](/refguide/app-settings/#after-startup) logic. By providing the `KnowledgeBaseName` parameter, you determine the knowledge base that was used for population earlier.

**Input parameters**

| Name                | Type                                    | Mandatory | Description                                           |
| ------------------- | --------------------------------------- | --------- | ----------------------------------------------------- |
| `DatabaseConfiguration` | [DatabaseConfiguration](#databaseconfiguration-entity) | mandatory | This object is used for connecting to and authenticating with the database where the knowledge base is located. |
| `KnowledgeBaseName`          | String                                                       | mandatory                     | This is the name of the knowledge base in your database that contains the data to retrieve. |
| `LabelList`          | List of [Labels](#label)                                                    | optional | This list is for additional filtering in the retrieve. Only chunks that comply with the labels will be returned. |
| `MaxNumberOfResults`          | Integer/Long                                                      | optional                    | This is to optionally limit the number of results that should be returned. |
| `Offset`          | Integer/Long                                                        | optional                     | This is for skipping a number of records in the retrieve. |

**Return value**

| Name                 | Type                                      | Description                                                  |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `ChunkList` | List of [chunks](#chunk) | This list is the result of the retrieval. |

##### 4.3.3.2 Retrieve & Associate {#retrieve-associate-technical} 

The `Retrieve & Associate` activity is used to retrieve a subset of or the whole knowledge base. In addition to the [Retrieve](#retrieve-technical) operation, this operation also sets the associations to the Mendix objects for which the chunks were created. In order for this to work, it is necessary to create a custom specialization of the [Chunk](#chunk) entity in the domain model of the application and to make sure the necessary associations exist towards the Mendix objects which the chunks represent. This specialization must be passed as [Entity parameter](/refguide/java-actions/#entity-type) called `TargetChunk`. A list of this type is then returned, which can be used for retrieval of the Mendix objects in custom logic. For additional filtering, provide a list of [Labels](#label), see [Create Label](#create-label-technical) activity. `Offset` and `MaxNumberOfResults` can be used for pagination or specific selection use cases.

The `DatabaseConfiguration` that is passed must contain the connection details to a PostgreSQL database server with the PgVector extension installed. This entity is typically configured at runtime or in [after-startup](/refguide/app-settings/#after-startup) logic. By providing the `KnowledgeBaseName` parameter, you determine the knowledge base that was used for population earlier.

**Input parameters**

| Name                | Type                                    | Mandatory | Description                                           |
| ------------------- | --------------------------------------- | --------- | ----------------------------------------------------- |
| `DatabaseConfiguration` | [DatabaseConfiguration](#databaseconfiguration-entity) | mandatory | This object is used for connecting to and authenticating with the database where the knowledge base is located. |
| `KnowledgeBaseName`          | String                                                       | mandatory                     | This is the name of the knowledge base in your database that contains the data to retrieve. |
| `TargetChunk` | Entity parameter | mandatory | This must be a specialization of the [Chunk](#chunk) entity. If it contains associations to (specializations of) the related Mendix object for which the chunk was created, this is set by this operation. This also describes the type of the returned list. |
| `LabelList`          | List of [Labels](#label)                                                    | optional | This list is for additional filtering in the retrieve. Only chunks that comply with the labels are returned. |
| `MaxNumberOfResults`          | Integer/Long                                                      | optional                    | This is to optionally limit the number of results that should be returned. |
| `Offset`          | Integer/Long                                                        | optional                     | This is for skipping a specified number of records in the retrieval. |

**Return value**

| Name                 | Type                                      | Description                                                  |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `TargetChunkList` | List of type parameter `TargetChunk` | This list is the result of the retrieval. |

##### 4.3.3.3 Retrieve Nearest Neighbors {#retrieve-nearest-neighbors-technical}

The `Retrieve Nearest Neighbors` activity is used to retrieve chunks from the knowledge base ordered by similarity based on the given vector. For additional filtering, provide a list of [Labels](#label) (for more information, see the [Create Label](#create-label-technical) activity). `MinimumSimilarity` (range 0 - 1.0) and `MaxNumberOfResults` can be used for optional filtering. 

The `DatabaseConfiguration` that is passed must contain the connection details to a PostgreSQL database server with the PgVector extension installed. This entity is typically configured at runtime or in [after-startup](/refguide/app-settings/#after-startup) logic. By providing the `KnowledgeBaseName` parameter, you determine the knowledge base that was used for population earlier.

**Input parameters**

| Name                | Type                                    | Mandatory | Description                                           |
| ------------------- | --------------------------------------- | --------- | ----------------------------------------------------- |
| `DatabaseConfiguration` | [DatabaseConfiguration](#databaseconfiguration-entity) | mandatory | This object is used for connecting to and authenticating with the database where the knowledge base is located. |
| `KnowledgeBaseName`          | String                                                       | mandatory                     | This is the name of the knowledge base in your database which contains the data to retrieve.|
| `Vector`          | String                                                       | mandatory                     | This is the vector representation of the data for which the nearest neighbors should be calculated. The dimension needs to be the same as the vectors stored in the knowledge base.|
| `LabelList`          | List of [Labels](#label)                                                    | optional | This list is for additional filtering in the retrieve. Only chunks that comply with the labels will be returned. |
| `MinimumSimilarity`          | Decimal                                                        | optional                     | This is to filter the results, so that only chunks are returned which similarity score is equal or greater than the value provided. The score ranges from 0 (not similar) to 1.0 (the same vector). |
| `MaxNumberOfResults`          | Integer/Long                                                      | optional                    | This can be used to limit the number of results that should be returned. |

**Return value**

| Name                 | Type                                      | Description                                                  |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `ChunkList` | List of [chunks](#chunk) | This list is the result of the retrieval. |

##### 4.3.3.4 Retrieve Nearest Neighbors & Associate {#retrieve-nearest-neighbors-associate-technical}

The `Retrieve Nearest Neighbors & Associate` activity is used to retrieve chunks from the knowledge base ordered by similarity based on the given vector. In addition to the [Retrieve Nearest Neighbors](#retrieve-nearest-neighbors-technical) operation, this operation also sets the associations to the Mendix objects for which the chunks were created. In order for this to work, it is necessary to create a custom specialization of the [Chunk](#chunk) entity in the domain model of the application and to make sure the necessary association(s) exist towards the Mendix objects which the chunks represent. This specialization must be passed as [Entity parameter](/refguide/java-actions/#entity-type) called `TargetChunk`. A list of this type is then returned which can be used for retrieval of the Mendix objects in custom logic. For additional filtering, provide a list of [Labels](#label) (for more information, see the [Create Label](#create-label-technical) activity). `MinimumSimilarity` (range 0 - 1.0) and `MaxNumberOfResults` can be used for optional filtering. 

The `DatabaseConfiguration` that is passed must contain the connection details to a PostgreSQL database server with the PgVector extension installed. This entity is typically configured at runtime or in [after-startup](/refguide/app-settings/#after-startup) logic. By providing the `KnowledgeBaseName` parameter, you determine the knowledge base that was used for population earlier.

**Input parameters**

| Name                | Type                                    | Mandatory | Description                                           |
| ------------------- | --------------------------------------- | --------- | ----------------------------------------------------- |
| `DatabaseConfiguration` | [DatabaseConfiguration](#databaseconfiguration-entity) | mandatory | This object is used for connecting to and authenticating with the database where the knowledge base is located. |
| `KnowledgeBaseName`          | String                                                       | mandatory                     | This is the name of the knowledge base in your database which contains the data to retrieve.|
| `TargetChunk` | Entity parameter | mandatory | This must be a specialization of the [Chunk](#chunk) entity. If it contains associations to (specializations of) the related Mendix object for which the chunk was created, this will be set by this operation. This will also describe the type of the returned list. |
| `Vector`          | String                                                       | mandatory                     | This is the vector representation of the data for which the nearest neighbors should be calculated. The dimension needs to be the same as the vectors stored in the knowledge base.|
| `LabelList`          | List of [Labels](#label)                                                    | optional | This list is for additional filtering in the retrieve. Only chunks that comply with the labels will be returned. |
| `MinimumSimilarity`          | Decimal                                                        | optional                     | This is to filter the results, so that it only returns those chunks with a similarity score equal to or greater than the value provided. The score ranges from 0 (not similar) to 1.0 (the same vector). |
| `MaxNumberOfResults`          | Integer/Long                                                      | optional                    | This can be used to limit the number of results that should be returned. |

**Return value**

| Name                 | Type                                      | Description                                                  |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `TargetChunkList` | List of type parameter `TargetChunk` | This list is the result of the retrieval. |

#### 4.3.4 Delete Operations {#delete-operations-technical}

Activities that support the deletion of knowledge bases.

##### 4.3.4.1 Delete Knowledge Base {#delete-knowledge-base-technical}

Use this operation to delete a complete knowledge base at once. This operation takes care of the deletion of the actual tables including all data for the specified knowledge base. The operation will finish successfully even if there is no table structure present for the provided `KnowledgeBaseName`.

**Input parameters**

| Name                | Type                                    | Mandatory | Description                                           |
| ------------------- | --------------------------------------- | --------- | ----------------------------------------------------- |
| `KnowledgeBaseName`          | String                                                       | mandatory                     | This is the name of the knowledge base that will be deleted.|
| `DatabaseConfiguration` | [DatabaseConfiguration](#databaseconfiguration-entity) | mandatory | This object is used for connecting to and authenticating with the database where the knowledge base is located. |

**Return value**

| Name                 | Type                                      | Description                                                  |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `IsSuccess` | Boolean | This Boolean indicates if the deletion of the knowledge base was successful. This can be used for custom error-handling.|

##### 4.3.4.2 Delete {#delete-technical}

Use this operation to delete existing chunks and corresponding labels in a knowledge base based on the Mendix object provided: `MxObject` is the original Mendix object that the chunks in the knowledge base represent. Only chunks related to this Mendix object are deleted.

By providing the `KnowledgeBaseName` parameter, you determine the knowledge base. The `DatabaseConfiguration` that is passed must contain the connection details to a PostgreSQL database server with the PgVector extension installed. This entity is typically configured at runtime or in [after-startup](/refguide/app-settings/#after-startup) logic.

**Input parameters**

| Name                | Type                                    | Mandatory | Description                                           |
| ------------------- | --------------------------------------- | --------- | ----------------------------------------------------- |
| `KnowledgeBaseName`          | String                                                       | mandatory                     | This is the name of the knowledge base in your database.|
| `DatabaseConfiguration` | [DatabaseConfiguration](#databaseconfiguration-entity) | mandatory | This object is used for connecting to and authenticating with the database where the knowledge base is located. |
| `MxObject`          | Object                                                    | mandatory | This is the original Mendix object that the chunks in the knowledge base represent. Only chunks related to this Mendix object are deleted. |

**Return value**

| Name                 | Type                                      | Description                                                  |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `IsSuccess` | Boolean | This Boolean indicates if the deletion of data in the knowledge base was successful. This can be used for custom error-handling. |

##### 4.3.4.3 Delete List {#delete-list-technical}

Use this operation to delete existing chunks and corresponding labels in a knowledge base based on the Mendix objects provided: `MxObjectList` is the list of original Mendix objects that the chunks in the knowledge base represent. Only chunks related to these Mendix objects are deleted.

By providing the `KnowledgeBaseName` parameter, you determine the knowledge base. The `DatabaseConfiguration` that is passed must contain the connection details to a PostgreSQL database server with the PgVector extension installed. This entity is typically configured at runtime or in [after-startup](/refguide/app-settings/#after-startup) logic.

**Input parameters**

| Name                | Type                                    | Mandatory | Description                                           |
| ------------------- | --------------------------------------- | --------- | ----------------------------------------------------- |
| `KnowledgeBaseName`          | String                                                       | mandatory                     | This is the name of the knowledge base in your database.|
| `DatabaseConfiguration` | [DatabaseConfiguration](#databaseconfiguration-entity) | mandatory | This object is used for connecting to and authenticating with the database where the knowledge base is located. |
| `MxObjectList`          | Object                                                    | mandatory | This is the original Mendix object that the chunks in the knowledge base represent. Only chunks related to this Mendix object are deleted. |

**Return value**

| Name                 | Type                                      | Description                                                  |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| `IsSuccess` | Boolean | This Boolean indicates if the deletion of data in the knowledge base was successful. This can be used for custom error-handling. |

## 5 Showcase Application {#showcase-application}

For more inspiration and guidance on how to use these operations in your logic and how to combine it with use cases in the context of generative AI, Mendix highly recommends downloading the [OpenAI showcase app](https://marketplace.mendix.com/link/component/220475) from the Marketplace. This application contains various examples in the context of generative AI, some of which use the PgVector Knowledge Base module for storing embedding vectors.

{{% alert color="info" %}}
For more information on how to set up a vector database for retrieval augmented generation (RAG),  see [RAG Example Implementation in the OpenAI Showcase Application](/appstore/modules/genai/rag/).
{{% /alert %}}

## 6 Read More {#read-more}

* [pgvector: Open-Source Extension For Vector Similarity Search For PostgreSQL](https://github.com/pgvector/pgvector?tab=readme-ov-file#pgvector)
