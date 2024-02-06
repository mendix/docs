---
title: "RAG Example Implementation in the OpenAI Showcase Application"
url: /appstore/connectors/openai-connector/rag-example-implementation/
category: "Open AI"
linktitle: "RAG Example Implementation"
weight: 5
description: "Describes the retrieval augmented generation (RAG) example implementation in the OpenAI showcase application"
tags: ["OpenAI", "generative AI", "AI", "connector", "marketplace", "chatgpt", "genAI", "embeddings", "Retrieval augmented generation", "RAG", "showcase application", "Azure OpenAI"]
---

## 1 Introduction

Retrieval augmented generation (RAG) is a framework for an AI-based search with a private or external knowledge base that combines embeddings-based knowledge retrieval with a text-generation model. The starting point will be a collection of data to be considered as the private knowledge base. The final goal is that an end user of the app can ask questions about the data and the assistant responses will be based on this knowledge base only. 

## 2 High-level Flow {#rag-high-level}

The complete technical flow can be split up into the following three steps at a high level:

1. Prepare the knowledge base (once per document)
   1. Data is chunked into smaller, partially overlapping, pieces of information.
   2. For each data chunk, the embedding vector will be retrieved from OpenAI's embeddings API.
   3. Data chunks are stored in a vector database together with their embedding vector.

2. Query the knowledge base (once per search)
   1. User query is sent to the embeddings API to retrieve the embedding vector of the query.
   2. A pre-defined number of most-relevant data chunks is retrieved from the vector database. This set is selected based on cosine similarity to the user query embedding vector.

3. Invoke the text generation model (once per search)
   1. User query and the relevant data chunks are sent to the chat completions API.
   2. Through prompt engineering, the text generation model is instructed to only base the answer on the data chunks that were sent as part of the request. This prevents the model from hallucinating.
   3. The assistant response is returned to the user.

In summary, in the first step, you need to provide the private knowledge base, such as a text snippet. You need to prepare the content for RAG, which happens only once. If the content changes, you need to provide it again for RAG. The last two steps happen every time an end-user triggers the RAG flow, for example, by asking a question about the data.

## 3 Procedure {#rag-step-by-step}

{{% alert color="info" %}}
This procedure describe a setup based on a PostgreSQL database with the pgvector extension to query vectors. However, this is not the only possible solution. Other (vector) database types may better fit your use case. If you want to build your own RAG setup, see the [Building Your Own RAG Setup](#build-your-own-rag-setup) section.
{{% /alert %}}

### 3.1 Prerequisites

Before you start experimenting with the end-to-end process, make sure that you have covered the following prerequisites:

* You have access to a (remote) PostgreSQL database with the [pgvector](https://github.com/pgvector/pgvector) extension available.

  {{% alert color="info" %}}If you have access to an Amazon Web Services (AWS) account, Mendix recommends you use a [free-tier RDS](https://aws.amazon.com/rds/faqs/#product-faqs#amazon-rds-faqs#free-tier) setup described in the [Creating a PostgreSQL Database with Amazon RDS](#rds-database) section. This is convenient, since PostgreSQL databases in Amazon RDS by default have the required pgvector extension available.{{% /alert %}}

* You have configured the connection to the above-mentioned database in the OpenAI showcase app.

### 3.1 Creating a PostgreSQL Database with Amazon RDS {#rds-database}

{{% alert color="info" %}}For detailed steps for creating a PostgreSQL Database with Amazon RDS, see [Create and Connect to a PostgreSQL Database](https://aws.amazon.com/getting-started/hands-on/create-connect-postgresql-db/) in *AWS Documentation*. You can check out the following sections in AWS Documentation for preliminary background knowledge:

* Enter the RDS Console
* Create a PostgreSQL DB Instance

{{% /alert %}}

You can use the values in the steps below for experimental purposes:

1. Login to the AWS console. 

2. Go to RDS using the search bar.

3. Go to **Databases**. 

4. Click **Create database** and use the following specifications:
   1. For **Method**, select *standard create*.
   2. For **Engine**, select *PostgreSQL Version 15.4*
   3. For **Template**, select *Free tier*.
   4. Use the default values for **Availability and durability**.
   5. Configure the **Settings** as follows:
      1. Enter a name for **Database instance identifier**, for example, *database-1*.
      2. Enter values for **Master username and master password**. Store them safely. You will need them later.
   6. Use the default values for **Instance configuration**.
   7. Use the default values for **Storage**. For the free tier, use **General purpose SSD / 20GiB**.
   8. Configure the **Connectivity** as follows:
      1. For **Virtual Private Cloud (VPC)**, select *create new VPC*.
      2. Set **Public access** to *Yes*.
      3. For **VPC security group**, select **Create new**, and then enter a name, for example, *RDS-database-1*.
      4. Set **Database port** to *5432*.
   9. For **Database authentication**, select *Password authentication*.
   10. Use the default values for **Monitoring**.
   11. Set an initial database name, for example, *myVectorDatabase*. You will need it later.
   
5. Wait for the database to be created. This can take some time.

6. When the database is created, click the database name to view it.
   1. On the **Connectivity & Security** tab, find the inbound security group rule. By default this will only accept incoming traffic from your current IPv4 address.
   
   2. Optionally, if the database is required to be accessible from other locations as well, click the security group rule, go to the **Inbound rules** tab, then add a rule as follows:
      1. For **Type**, select *PostgreSQL*.
      
      2. Set **Port** to *5432*.
      
      3. For **Source**, select *Custom*, and provide the IP CIDR range in the field as follows:
      
         *  If you have access to a VPN, you can also provide its IP here. Then for the connection to your database to work, all users running the Mendix app locally must be connected to the VPN.
         *  If you have deployed your Mendix app to the Mendix Cloud, you need to let the database accept incoming requests from it. For this, create inbound rules and select the IP address of your Mendix app as the source. See [Mendix IP Addresses: Outgoing IP](/developerportal/deploy/mendix-ip-addresses/#outgoing) for a list of addresses to safe-list in this scenario.
         *  If you want the database to be accessible from anywhere, have a rule with its source set to *0.0.0.0/0*.
      
         {{% alert color="info" %}}For a single IPv4 address, the CIDR range is equal to the IP address with `/32` appended.{{% /alert %}}

### 3.3 Deleting Resources in AWS {#deleting-aws-resources}

If no action is taken, resources in AWS stay around indefinitely. Make sure to think about deleting the resources when you are done experimenting. When using services from AWS, you are responsible for having the necessary resources and deleting the ones that are no longer needed, to prevent from being charged more than is required. This is especially relevant the moment resources fall outside of the free-tier after a certain time.

## 4 Configuring the Database Connection Details in the Showcase Application {#configure-database-connection}

1. Login to the [showcase app](https://marketplace.mendix.com/link/component/220475).

2. Navigate to the RAG example.

3. Read **Step 1: Introduction**.

4. Go to **Step 2: Vector Database Configuration**.

5. Edit the configuration details as follows:
   1. Format the Jdbc URL in the following way:
      `jdbc:postgresql://{endpoint-from-the-AWS-console}:5432/{vectorDatabaseName}`.

      To find the endpoint in the AWS console: 

      1. Go to Amazon RDS and make sure the right region in which the RDS database was created is selected at the top.

      2. Under **Databases**, click your new database to view the details.

      3. On the **Connectivity & Security** tab, you can find the endpoint.

         The value for `{vectorDatabaseName}` in the URL is the initial database name you set when you [created the PostgreSQL database with Amazon RDS](#rds-database).

      4. `5432` is the default port for PostrgreSQL databases. If you manually chose another port, then change this in the URL as well.

   2. Use the master username and master password that you set in the **Settings** when you [created the PostgreSQL Database with Amazon RDS](#rds-database) as your username and password.

   3. Save the configuration.

   4. Proceed to [run the RAG end-to-end in the showcase application](#rag-showcase-app).

## 5 Running the RAG End-to-End in the Showcase Application {#rag-showcase-app}

1. Go to **Step 3: Knowledge base step** and create embeddings from a text and store. You can our default text about ornamental flowering plants, or paste your own content.
2. Go to **Step 4: Embedding vectors step**. Verify the embedding vectors have been created in your new database. If you ever want to go back to load different content instead, Mendix recommends using the clear button here first.
3. Go to **Step 5: User prompt step** and do as follows:
   1. Ask something about the entered text. The system prompt is automatically enriched with the chunks of text from the knowledge base that are most relevant for the user query. 
   2. Review the augmented prompt.
   3. Let the model run the retrieval augmented chat completion and view the results.

{{% alert color="info" %}}

The showcase application uses the Mendix [Database Connector](https://marketplace.mendix.com/link/component/2888) to run queries and statements on your remote database. If you want to know more about this or if you are looking for certain technical details, see [Database Connector](/appstore/connectors/database-connector/).

The showcase application takes care of creating the required tables in the remote vector database, including the open-source extension called pgvector. If you want to know more about the extension and how the tables look like in combination with this extension, see the [pgvector source code and documentation on Github](https://github.com/pgvector/pgvector).

If you want to know more about RAG, embeddings, or vector databases, make sure to review the links on the **Resources** page of the showcase application or in the [Read Me](#read-more) section.

{{% /alert %}}

## 6 Setup Alternatives {#rag-setup-alternatives}

Setting up an AWS RDS database with the pgvector extension is one of the easiest options for using a vector database for our sample implementation. However, there are also alternatives and general considerations, which are described in this section.

### 6.1 Running a PostgreSQL Database Locally {#rag-local-database}

It is possible to run a PostgreSQL database locally. It is useful to familiarize yourself with PostgreSQL and tooling like pgAdmin. 

Make sure that you meet the following prerequisites:

1. You have [PostgreSQL installed](https://www.postgresql.org/download/). During the installation, it asks to install pgAdmin 4 as well, which is recommended for creating the local server and database. You can also choose other tooling to your liking to reach the same goal.
2. Have a new local database that you can connect to. Use the tool that you choose in step 1, for example pgAdmin, to do the following:
   1. Register your new PostgreSQL server. The port is typically 5432. The credentials needed here are the ones you entered during the installation of PostgreSQL. You will need this later.
   2. Create a database, for example, myVectorDatabase. You will need this later.
3. Have the pgvector extension installed. Depending on your hardware and operating system, the steps to install the pgvector extension can be different. Follow the [installation instructions](https://github.com/pgvector/pgvector?tab=readme-ov-file#installation) on Github carefully and make sure to check the [installation notes](https://github.com/pgvector/pgvector?tab=readme-ov-file#installation-notes).

In this case, the configuration of the database connection details in the showcase application is similar to what was described in the [Configuring the Database Connection Details in the Showcase Application](#configure-database-connection) section. Your jdbc URL will now look like `jdbc:postgresql://localhost:5432/{vectorDatabaseName}` where the value for `{vectorDatabaseName}` is the one you have chosen while creating the database.

### 6.2 Building Your Own RAG Setup {#build-your-own-rag-setup}

This section lists some general key points that apply regardless of which architecture you choose.

If you would like to build your own RAG setup, feel free to learn from the showcase application and start building your own app. Below you can find the key takeaways from the showcase app:

* For RAG, you need a storage space for embeddings outside of your normal Mendix app database. Typically, this is a remote vector database. In order to connect to it, the showcase application uses the Mendix database connector.

* The showcase application relies on a PostgreSQL solution with the pgvector extension included. Even if you choose to use a different vector database, the queries or statements you will have to do probably cover at least the following:
  * Include the vector extension if applicable.
  
  * Create tables to store the embeddings (create table).
  
  * Add new embeddings to tables (insert).
  
  * Find top-k nearest neighbors (select query; typically using cosine distance optimization as recommended by OpenAI).
  
  * Remove individual records (delete) or tables (drop table).
    

{{% alert color="info" %}}Example queries in the form of SQL statements are available for inspiration in the source code of the showcase application.{{% /alert %}}

## 7 Troubleshooting {#rag-troubleshooting}

### 7.1 Password Authentication Failed for User "postgres" in the Mendix App

If you get the error message **FATAL: password authentication failed for user "postgres"**, it could be a caching issue during the running of queries from apps locally.

When this occurs, do as follows:

1. Make sure the configuration was set up correctly. Re-enter the password to be sure.
2. Close all browser tabs for the Mendix app. 
3. Shut down the app locally and run the app again.

### 7.2 Error in Logs of the Mendix App about the Extension "Vector"

If there is an error in the logs of your Mendix app about the extension called “vector", it could be that your PostgreSQL version does not meet the requirement of pgvector, or you have not met the installation prerequisites.

When this occurs, make sure that you use the PostgreSQL version 11 or above. If you are using a PostgreSQL database on your local machine, make sure you have followed all the installation prerequisites specific for your setup and operating system. 

### 7.3 Timeout Error in  Logs of the Mendix App When You Try to Connect to the External Database

If there is a timeout error in the logs of my Mendix app when you try to connect to the external database, the cause could be that some company network prohibits connections to AWS servers. 

When this occurs, make sure you are connected to a network that does allow these connections, for example, with a phone hotspot or from your home network.

## 8 Read More {#read-more}

- Retrieval Augmented Generation
  - [Embeddings-based Search – Open AI Cookbook](https://cookbook.openai.com/examples/question_answering_using_embeddings)
  - [Vector Database Options on AWS](https://aws.amazon.com/blogs/database/the-role-of-vector-datastores-in-generative-ai-applications/)
  - [Vector Database Options – OpenAI Cookbook](https://cookbook.openai.com/examples/vector_databases/readme)
  - [How to: AI-powered search in AWS Relational Database Service (RDS) For PostgreSQL Using pgvector](https://aws.amazon.com/blogs/database/building-ai-powered-search-in-postgresql-using-amazon-sagemaker-and-pgvector/)
  - [pgvector: Open-Source Extension For Vector Similarity Search For PostgreSQL](https://github.com/pgvector/pgvector?tab=readme-ov-file#pgvector)