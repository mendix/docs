---
title: "RAG Example Implementation in the OpenAI Showcase Application"
url: /appstore/connectors/openai-connector/rag-example-implementation/
category: "Open AI"
linktitle: "RAG Example Implementation"
weight: 5
description: "describes the RAG example implementation in the OpenAI showcase application"
tags: ["OpenAI", "generative AI", "AI", "connector", "marketplace", "chatgpt", "dall-e", "genAI", "embeddings", "RAG", "showcase application"]
---

## 1 Introduction

RAG is a framework for an AI-based search with a private or external knowledge base that combines embeddings-based knowledge retrieval with a text-generation model. The starting point will be a collection of data to be considered as the private knowledge base. The final goal is that an end user of the application can ask questions about it and the assistant responses will be based on this knowledge base only. 

## 2 Technical Flow {#rag-high-level}

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

In summary, as the first step, you need to provide the private knowledge base, such as a text snippet. You need to prepare the content for RAG, which happens only once. If the content changes, you need to provide it again for RAG. The last two steps happen every time an end-user triggers the RAG flow, e.g. by asking a question about the data.

## 3 Procedure {#rag-step-by-step}

{{% alert color="info" %}}
The sections below describe a setup based on a PostgreSQL database with the pgvector extension to query vectors. However, this is not the only possible solution. Other (vector) database types may better fit your use case. In this [section](#rag-takeaways), we have listed some key points that apply regardless of which architecture you choose.
{{% /alert %}}

Follow the steps below to get started with the Retrieval Augmented Generation (RAG) example in the [showcase app](https://marketplace.mendix.com/link/component/220475).

To start experimenting with the end-to-end process, you can use this document to ensure you’ve covered the following prerequisites which we will explain in more detail in this document:

* You have access to a (remote) PostgreSQL database with the `pgvector` extension available.
* You have configured the connection to the above database in the OpenAI Showcase App.

If you have access to an Amazon Web Services (AWS) account we recommend using a [free-tier RDS](https://aws.amazon.com/rds/faqs/#product-faqs#amazon-rds-faqs#free-tier) setup described in the upcoming section. This is convenient since PostgreSQL databases in Amazon RDS by default have the required extension available.

### 3.1 Create a PostgreSQL Database with Amazon RDS {#rds-database}

Make sure you are familiar with the basics of [Amazon RDS and the AWS console](https://aws.amazon.com/getting-started/hands-on/create-connect-postgresql-db/). We recommend the following sections there as preliminary background knowledge:

* Enter the RDS Console
* Create a PostgreSQL DB Instance

Create a database instance in Amazon RDS according to their [documentation](https://aws.amazon.com/getting-started/hands-on/create-connect-postgresql-db/). As a quick-start we provide a summary of the steps including a list of values below that you can use to speed things up for experimental purposes.

1. Login to the AWS console. Go to RDS using the search bar and go to Databases. 
2. Click *Create database* and use the following specifications:
   1. Method: choose *standard create*
   2. Engine: choose *PostgreSQL Version 15.4*
   3. Template: pick *Free tier*
   4. Availability and durability: leave default values
   5. Settings: 
      1. Database instance identifier: provide a name e.g. *database-1*
      2. Master username and master password: set and store safely. **You need this later.**
   6. Instance configuration: leave default values
   7. Storage: leave default values (General purpose SSD / 20GiB for the free tier)
   8. Connectivity: 
      1. Virtual Private Cloud (VPC): choose *create new VPC*
      2. Public access: set to *Yes*
      3. VPC security group: choose *create new*, pick a name, e.g. *RDS-database-1*
      4. Additional configuration: check that database port was set to 5432
   9. Database authentication: select *password authentication* if not selected by default
   10. Monitoring: leave default values
   11. Additional configuration:
       1. Initial database name: e.g. *myVectorDatabase*. **You need this later.**
3. Wait for the database to be created (this can take some time)
   1. When done, click on the name to view it.
   2. In the *Connectivity & Security* tab find the **Inbound** Security group rule. By default this will only accept incoming traffic from your current IPv4 address.
   3. Optional: if the database is required to be accessible from other locations as well: click the security group rule, go to the *inbound rules* tab, then add a rule:
      1. Type: choose *PostgreSQL*
      2. Port: set to `5432`.
      3. Source: choose *Custom*; provide the IP CIDR range in the next field (see [IP inbound rules](#ip-inbound-rules) below). For a single IPv4 address, this is equal to the IP address with `/32` appended.
   4. Optional: if you want the database to be accessible from anywhere, have a rule with its source set to `0.0.0.0/0` (see [IP inbound rules](#ip-inbound-rules) below).

### 3.2 IP inbound rules {#ip-inbound-rules}

*  If you have access to a VPN, you could also provide its IP here. Then for the connection to your database to work, all users running the Mendix app locally must be connected to the VPN.
*  If you have deployed your Mendix app to the Mendix Cloud, you need to let the database accept incoming requests from it. For this, create inbound rules and select the IP address of your Mendix app as the source; see [Mendix IP Addresses: Outgoing IP](https://docs.mendix.com/developerportal/deploy/mendix-ip-addresses/#outgoing) for a list of addresses to safe-list in this scenario.

### 3.3 Deleting Resources in AWS {#deleting-aws-resources}

If no action is taken, resources in AWS stay around indefinitely. Make sure to think about deleting the resources when you are done experimenting. When using services from AWS, you are responsible for having the necessary resources and delete the ones that are no longer needed, to prevent from being charged more than is required. This is especially relevant the moment resources fall outside of the free-tier after a certain time.

## 4 Configure The Database Connection Details In The Showcase App {#configure-database-connection}

1. Login to the Showcase app and navigate to the RAG example
2. After reading **Step 1: Introduction**, proceed to **Step 2: Vector Database Configuration**
3. Edit the configuration details
   1. The Jdbc URL needs to be formatted in the following way
      `jdbc:postgresql://{endpoint-from-the-AWS-console}:5432/{vectorDatabaseName}`
      To find the endpoint in the AWS console: 
      1. Go to Amazon RDS and make sure the right region in with the RDS database was created is selected at the top.
      2. Under *Databases*, click on your new database to view the details.
      3. In the *Connectivity & Security* tab you can find the Endpoint.
         The value for `{vectorDatabaseName}` in the URL is the one you have chosen in the previous section.
      4. `5432` is the default port for PostrgreSQL databases, if you manually chose another port, you need to change this in the URL as well.
   2. The username and password are equal to the Master Username and Master Password that you chose during the setup in previous section.
   3. Save the configuration.

## 5 Try out RAG end-to-end in the Showcase app! {#rag-showcase-app}

**Step 3: Knowledge base step**
Create embeddings from a text and store. Use our default text about ornamental flowering plants, or paste your own content!

**Step 4: Embedding vectors step**
Verify the embedding vectors have been created in your new database. If you ever want to go back to load different content instead, we recommend using the clear button here first.

**Step 5: User prompt step**

1. Ask something about the entered text.
2. The system prompt is automatically enriched with the chunks of text from the knowledge base that are most relevant for the user query. You can review the augmented prompt.
3. Then let the model execute the retrieval augmented chat completion and view the results!

**Notes**

- The Showcase application uses the [Mendix database connector](https://marketplace.mendix.com/link/component/2888) to execute queries and statements on your remote database. If you want to know more about this or if you are looking for certain technical details, please refer to [Mendix Docs](https://docs.mendix.com/appstore/connectors/database-connector/).
- The Showcase application takes care of creating the required tables in the remote vector database, including the open-source extension called `pgvector`. If you want to know more about the extension and how the tables look like in combination with this extension, refer to the [pgvector source code and documentation on Github](https://github.com/pgvector/pgvector).
- If you want to know more about RAG, embeddings or vector databases, make sure to review the links on the Resources page of the Showcase Application.

## 6 Setup Alternatives {#rag-setup-alternatives}

We have found that setting up an AWS RDS database with the `pgvector` extention is one of the easiest options for using a vector database for our sample implementation. However, there are also alternatives and general considerations, which we will describe in the following sections.

### 6.1 I want To Run A PostgreSQL Database Locally! {#rag-local-database}

That is possible! Familiarity with PostgreSQL and tooling like pgAdmin is recommended. The prerequisites are:

1. Have [PostgreSQL installed](https://www.postgresql.org/download/). During the installation it asks to install pgAdmin 4 as well, which we recommend for creating the local server and database as described in the steps below. If you prefer different tooling to reach the same goals, feel free to do so.
2. Have a new local database that you can connect to. Use pgAdmin to:
   1. Register your new PostgreSQL server. The port is typically 5432. The credentials that are needed here are the ones you entered during the installation of PostgreSQL. **You need these later.**
   2. Create a database e.g. myVectorDatabase. **You need this later.**
3. Have the `pgvector` extension installed. Depending on your hardware and operating system the steps to install the pgvector extension vary. Please follow the [installation steps](https://github.com/pgvector/pgvector?tab=readme-ov-file#installation) on Github carefully and be sure to check the [installation notes](https://github.com/pgvector/pgvector?tab=readme-ov-file#installation-notes).

In this case the configuration of the database connection details in the Showcase application is similar to what was described in the previous section. Your jdbc URL will now look like `jdbc:postgresql://localhost:5432/{vectorDatabaseName}` where the value for `{vectorDatabaseName}` is the one you have chosen while creating the database.

### 6.2 I Want To Build My Own RAG Setup! {#rag-takeaways}

Good to hear! Feel free to learn from the Showcase app and start building your own applications. Key takeaways from the Showcase app are:

* For retrieval augmented generation you need a storage space for embeddings outside of your normal Mendix app database. Typically this is a remote vector database. In order to connect to it, the Showcase app uses the Mendix database connector.
* The Showcase app relies on a PostgreSQL solution with the pgvector extension included. Even if you choose to use a different vector database, the queries/statements you will have to do probably include at least the following:
  * Include the vector extension if applicable
  * Create tables to store the embeddings (create table)
  * Add new embeddings to tables (insert)
  * Find top-k nearest neighbors (select query; typically using cosine distance optimization as recommended by OpenAI).
  * Remove individual records (delete) or tables (drop table)
    Example queries in the form of SQL statements are available for inspiration in the source code of the Showcase application.

## 7 Troubleshooting {#rag-troubleshooting}

**In my Mendix app I'm getting the error “FATAL: password authentication failed for user "postgres" all the time!**
Sometimes there seems to be a caching issue in the execution of queries from apps locally. Make sure the configuration was set up correctly (re-enter the password to be sure). Close all browser tabs for the Mendix app, shut down the app locally and rerun.

**There is an error in the logs of my Mendix app about the extension called “vector”.**
According to the documentation of pgvector, the minimum version of PostgreSQL to use is 11. Make sure you are using the right version. If you are using a PostgreSQL database on your local machine, make sure you have followed all the installation prerequisites specific for your setup and operating system. 

**There is a timeout error in the logs of my Mendix app when trying to connect to the external database.**
Some company network might prohibit connections to AWS servers.  Make sure you are connected to a network that does allow these connections, e.g. with a phone hotspot or from your home network.