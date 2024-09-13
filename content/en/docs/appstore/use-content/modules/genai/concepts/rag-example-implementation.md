---
title: "RAG Example Implementation in the GenAI Showcase App"
url: /appstore/modules/genai/rag/

linktitle: "Retrieval Augmented Generation (RAG)"
weight: 30
description: "Describes the retrieval augmented generation (RAG) example implementation in the GenAI Showcase App"
---

## Introduction {#introduction}

Retrieval augmented generation (RAG) is a framework for an AI-based search with a private or external knowledge base that combines embeddings-based knowledge retrieval with a text generation model. The starting point will be a collection of data to be considered as the private knowledge base. The final goal is that an end user of the app can ask questions about the data and the assistant responses will only be based on this knowledge base. 

{{% alert color="info" %}}This document describes how to set up RAG with PgVector. If you want to use the Bedrock Retrieval Augmented Generation capabilities, see [Bedrock Retrieval Augmented Generation](/appstore/modules/genai/using-gen-ai/#rag).{{% /alert %}}

## High-level Flow {#rag-high-level}

The complete technical flow can be split up into the following three steps at a high level:

1. Prepare the knowledge base (once per document)
   1. Data is chunked into smaller, partially overlapping, pieces of information.
   2. For each data chunk, the embedding vector will be retrieved from OpenAI's embeddings API.
   3. Data chunks (or their identifier) are stored in a vector database together with their embedding vector.

2. Query the knowledge base (once per search)
   1. User query is sent to the embeddings API to retrieve the embedding vector of the query.
   2. A pre-defined number of most-relevant data chunks is retrieved from the vector database. This set is selected based on cosine similarity to the user query embedding vector.

3. Invoke the text generation model (once per search)
   1. User query and the relevant data chunks are sent to the chat completions API.
   2. Through prompt engineering, the text generation model is instructed to only base the answer on the data chunks that were sent as part of the request. This prevents the model from hallucinating.
   3. The assistant response is returned to the user.

In summary, in the first step, you need to provide the private knowledge base, such as a text snippet. You need to prepare the content for RAG, which happens only once. If the content changes, you need to provide it again for RAG. The last two steps happen every time an end-user triggers the RAG flow, for example, by asking a question about the data.

## RAG Example in the GenAI Showcase App {#rag-showcase-app}

### Prerequisites {#prerequisites}

Before you start experimenting with the end-to-end process, make sure that you have covered the following prerequisites:

You have access to a (remote) PostgreSQL database with the [pgvector](https://github.com/pgvector/pgvector) extension available.

{{% alert color="info" %}}If you have access to an Amazon Web Services (AWS) account, Mendix recommends you use a [free-tier RDS](https://aws.amazon.com/rds/faqs/#product-faqs#amazon-rds-faqs#free-tier) setup described in the [Creating a PostgreSQL Database with Amazon RDS](/appstore/modules/genai/pgvector-setup/#aws-database-create) section. This is convenient, since PostgreSQL databases in Amazon RDS by default have the required pgvector extension available.{{% /alert %}}

### Steps {#steps}

1. Download, run, and login to the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475).

2. Go to the **Retrieval Augmented Generation** example and read **Step 1: Introduction**.

3. [Set Up a PostgreSQL vector database](/appstore/modules/genai/pgvector-setup/) and configure the connection in **Step 2: Vector Database Configuration**.

4. Go to **Step 3: Knowledge Base** and create embeddings from a text and store. You can use our default text about ornamental flowering plants, or paste your own content.

5. Go to **Step 4: Embedding Vectors**. Verify the embedding vectors have been created in your new database. If you ever want to go back to load different content instead, any existing records are replaced automatically.

6. Go to **Step 5: User Prompt** and do as follows:
   1. Ask something about the entered text. The system prompt is automatically enriched with the chunks of text from the knowledge base that are most relevant for the user query. 
   2. Review the augmented prompt.
   3. Let the model run the retrieval augmented chat completion and view the results.

{{% alert color="info" %}}

The GenAI Showcase App uses the Mendix [PgVector Knowledge Base](https://marketplace.mendix.com/link/component/225063) module from the Marketplace to run queries and statements on your remote database. If you want to know more about this or if you are looking for certain technical details, see [PgVector Knowledge Base](/appstore/modules/genai/pgvector/).

The GenAI Showcase App uses this module to take care of creating the required tables in the remote vector database, including the open-source extension called pgvector. If you want to know more about the extension and how the tables look like in combination with this extension, see the [pgvector source code and documentation on GitHub](https://github.com/pgvector/pgvector).

If you want to know more about RAG, embeddings, or [vector databases](/appstore/modules/genai/pgvector-setup/), make sure to review the links on the **Resources** page of the GenAI Showcase App or in the [Read More](#read-more) section.

{{% /alert %}}

## Building Your Own RAG Setup {#build-your-own-rag-setup}

This section lists some general key points that apply regardless of which architecture you choose.

If you would like to build your own RAG setup, feel free to learn from the GenAI Showcase App and start building your own app. Below you can find the key takeaways from the GenAI Showcase App:

* For RAG, you need a storage space for high-dimensional embedding vectors outside of your normal Mendix app database. Typically, this is a remote vector database. In order to connect to it, the GenAI Showcase App uses the Mendix database connector. See [Vector Database Setup](/appstore/modules/genai/pgvector-setup/) for more details.

* The GenAI Showcase App relies on a PostgreSQL database with the pgvector extension included. In such a setup you can similarly rely on the [PgVector Knowledge Base module](/appstore/modules/genai/pgvector/) to take care of creating and executing the right queries. If you choose to use a different type of vector database, the database queries and statements, which you will have to perform, should cover at least the following:
    * Include the vector extension if applicable for the chosen database type (create extension).
    
    * Create tables to store the embedding vectors (create table).
    
    * Add new embedding vectors to tables (insert).
    
    * Find top-k nearest neighbors (select query; typically using cosine distance/similarity optimization as recommended by OpenAI).
    
    * Remove individual records (delete) or tables (drop table).

{{% alert color="info" %}}Example queries in the form of SQL statements are available for inspiration in the source code of the [PgVector Knowledge Base module](/appstore/modules/genai/pgvector/) which comes automatically with GenAI Showcase App.{{% /alert %}}

## Read More {#read-more}

* [Embeddings-based Search – Open AI Cookbook](https://cookbook.openai.com/examples/question_answering_using_embeddings)
