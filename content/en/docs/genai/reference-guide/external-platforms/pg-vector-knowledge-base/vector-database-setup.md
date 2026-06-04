---
title: "Setting up a Vector Database"
url: /agents/reference-guide/external-connectors/pgvector-setup/
linktitle: "Vector Database Setup"
weight: 5
description: "Describes how to set up a vector database to store and manage vector embeddings for a knowledge base"
aliases:
    - /appstore/modules/genai/pgvector-setup/
    - /appstore/modules/genai/reference-guide/external-connectors/pgvector-setup/
---

## Introduction

Vector databases play an important role in embeddings-based AI use cases. They efficiently store, retrieve, and manipulate high-dimensional vectors that represent text or semantic information. A crucial step in these use cases, such as semantic search and retrieval-augmented generation (RAG), is to find the most similar pieces of information to a given input. Standard databases cannot perform these similarity and distance calculations between high-dimensional vectors efficiently, so a vector database is needed.

This page describes how to set up a PostgreSQL vector database to explore use cases with knowledge bases.

{{% alert color="info" %}}
This page describes a setup using a PostgreSQL database with the pgvector extension to query embedding vectors. However, there are also other vector database types which may better fit your use case.
{{% /alert %}}

## Creating a PostgreSQL Database

Start by creating a PostgreSQL database as described in the following sections. You can use Amazon RDS, Microsoft Azure, or an alternative such as a local database.

{{% alert color="info" %}}
Amazon RDS and Microsoft Azure PostgreSQL databases include the `pgvector` extension by default. When you connect using the [PgVector Knowledge Base](https://marketplace.mendix.com/link/component/225063) module, the extension activates automatically, allowing the database to function as a vector database for knowledge bases.
{{% /alert %}}

### Creating a PostgreSQL Database with Amazon RDS {#aws-database-create}

{{% alert color="info" %}}
For AWS documentation on this topic, see [Creating and connecting to a PostgreSQL DB instance](https://aws.amazon.com/getting-started/hands-on/create-connect-postgresql-db/).
{{% /alert %}}

The following steps use sample values suitable for experimentation:

1. Sign in to the AWS console. 

2. Use the search bar to go to the Aurora and RDS console.

3. In the navigation pane, select **Databases**. 

4. Click **Create database** > **Full configuration** and use the following specifications:
   1. **Engine options**: PostgreSQL
   2. **Choose a database creation method**: Full configuration
   3. **Templates**: Free tier
   4. **Settings**: 
      1. Customize **Database instance identifier** and **Master username** if desired, or leave the defaults
      2. Enter a **Master password** value and store it securely where you can access it later.
   5. **Connectivity**:
      1. For **Virtual Private Cloud (VPC)**, select **Create new VPC** in the drop-down menu.
      2. **Public access**: Yes.
      3. **VPC security group**: Select **Create new**, and then enter a name, such as *RDS-database-1*.
   6. Set a database name, such as *myVectorDatabase*.
   7. You can leave the default values for all other settings.
   
5. Wait for the database to be created. This can take some time.

6. When the database is created, click the database name to view it.
   
    By default, the database only accepts incoming traffic from your current IPv4 address. Optionally, if the database must be accessible from other locations, scroll down to the **Security group rules** section of the **Connectivity & security** tab. Click the inbound security group rule, go to the **Inbound rules** tab, and add the following rule:
      1. For **Type**, select *PostgreSQL*.
      
      2. Set **Port** to *5432*.
      
      3. For **Source**, select *Custom*, and configure access as follows:
      
         * For apps deployed to Mendix Cloud, add the app's IP address as the source. See [Mendix IP Addresses: Outgoing IP](/developerportal/deploy/mendix-ip-addresses/#outgoing) for a list of addresses to safelist.
         * To allow access from anywhere, set the source to *0.0.0.0/0*. Use this carefully and ensure it aligns with your security requirements.
         * To restrict access to VPN users only, provide your VPN IP address. All users running the Mendix app locally must connect to the VPN to access the database.
      
         {{% alert color="info" %}}For a single IPv4 address, the CIDR range is equal to the IP address with `/32` appended.{{% /alert %}}

{{% alert color="warning" %}}
AWS resources remain active indefinitely unless you delete them. To avoid unnecessary charges, delete resources when you finish using them.
{{% /alert %}}

### Creating a PostgreSQL Database with Microsoft Azure {#azure-database-create}

{{% alert color="info" %}}
For Azure documentation on this topic, see [Quickstart: Create an Azure Database for PostgreSQL](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/quickstart-create-server-portal) and [How to enable and use pgvector on Azure Database for PostgreSQL](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-use-pgvector)
{{% /alert %}}

The following steps use sample values suitable for experimentation:

1. Create a new resource from the home page of the Azure Portal. 

2. Search and select **Azure Database for PostgreSQL Flexible Server**.

3. Click **Create** and use the following specifications in the **Basics** tab:
   1. Select a **Subscription** and **Resource**.
   2. Enter a **Server name**. The name needs to be unique.
   3. Choose a **Region** that fits your requirements.
   4. Select a **PostgreSQL version**.
   5. If your main purpose for the database is development and testing, choose **Dev/Test** for **Workload type** to reduce the estimated costs.
   6. At the bottom, choose an **Authentication method**:
      1. For **PostgreSQL authentication**, choose a username and password and store them securely.
      2. For **Microsoft Entra authentication**, select an admin.
   
4. Continue with the **Networking** configurations in the next tab. Configure network access according to your needs:
    1. **Public access** (recommended for testing) – Add firewall rules for the IP addresses allowed to access the server:
        * To add your own IP when running the application locally, use **Add current client IP address**.
        * For apps deployed to Mendix Cloud, add the app's IP address. See [Mendix IP Addresses: Outgoing IP](/developerportal/deploy/mendix-ip-addresses/#outgoing) for a list of addresses to safelist.
        * To allow access from anywhere, use **Add 0.0.0.0 - 255.255.255.255**. Use this carefully and ensure it aligns with your security requirements.
    2. **Private access** – The server can only be accessed from the **Virtual network** you select. Ensure your Mendix app runs in the same network.
   
5. Continue through the **Security** or **Tags** tabs. You do not need to configure anything in these tabs to get the server running.

6. On the final tab, **Review + create**, review your settings and estimated costs. Create the resource.

7. Wait for the database to be created. This can take some time. Once the server is running, click **Go to resource**.

8. [Add the pgVector extension to the allowed extensions list](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-use-pgvector):
   1. Search for **Server parameters** in the search bar on the left. A list of parameters is loaded.
   2. Search for **azure.extensions**.
   3. In the column *VALUE*, search in the dropdown for **VECTOR** (this is the extension name in Azure, not *pgVector*).
   4. Save the changes.
   
9. Search for **Databases** in the search bar on the left. Verify that you have a PostgreSQL database with schema type "User", or create a new database by clicking **Add**.

{{% alert color="warning" %}}
Azure resources remain active indefinitely unless you delete them. To avoid unnecessary charges, delete resources when you finish using them.
{{% /alert %}}

### Setting Up a PostgreSQL Database Locally {#local-database}

Setting up a cloud database with the pgvector extension is a straightforward option for using a vector database for this sample implementation. However, it is not the only option. For example, you can also run a PostgreSQL database locally, as described in this section. This is useful for familiarizing yourself with PostgreSQL and tooling like pgAdmin.

Complete the following steps:

1. [Install PostgreSQL](https://www.postgresql.org/download/). The installation prompts you to install pgAdmin 4, which is recommended for creating the local server and database. You can use other tools if you prefer.
2. Create a local database that you can connect to. Use the tool from step 1 (for example, pgAdmin) to do the following:
   1. Register your new PostgreSQL server. The port is typically 5432. Use the credentials you entered during the PostgreSQL installation. You will need them later.
   2. Create a database and choose a unique name for it (for example, *myVectorDatabase*).
3. Install the pgvector extension. Installation steps vary depending on your hardware and operating system. Follow the [installation instructions](https://github.com/pgvector/pgvector?tab=readme-ov-file#installation) on GitHub and check the [installation notes](https://github.com/pgvector/pgvector?tab=readme-ov-file#installation-notes).

## Configuring the Database Connection Details in Your Application {#configure-database-connection}

1. Add the PgVector Knowledge Base module and its dependencies to your Mendix app and set it up. For detailed instructions, see [PgVector Knowledge Base](/agents/reference-guide/external-connectors/pgvector/).

2. Include the page **DatabaseConfiguration_Overview** in the navigation or use the snippet **Snippet_DatabaseConfigurations** on an existing page.

3. Run the app, sign in as admin, and navigate to the database configuration page you linked in the previous step.

4. Create a new configuration.

5. Edit the configuration details as follows:

   1. Locate the `{endpoint}` and `{vectorDatabaseName}` values to use in the Jdbc URL:
      
      **For AWS:**
      
      1. Go to Amazon RDS and ensure the region in which the RDS database was created is selected.
      2. Under **Databases**, click your database to view the details.
      3. On the **Connectivity & security** tab, select **Endpoints** in the **Connect using** section. The `{endpoint}` and `{vectorDatabaseName}` values are in the **Endpoint** and **Database name** fields.
      
      **For Azure:**
      
      1. Search for your newly created resource in Azure.
      2. On the **Overview** page, the `{endpoint}` value is next to **Endpoint name**.
      3. In the search bar on the left, search for **Databases**. The `{vectorDatabaseName}` is the value in the **Name** column. Use a database with schema type "User".

      **For a local database:**
      
      1. The `{endpoint}` value is `localhost`.
      2. The `{vectorDatabaseName}` is the database name you chose [during setup](#local-database).

   2. Format the Jdbc URL:
      
      ```
      jdbc:postgresql://{endpoint}:5432/{vectorDatabaseName}
      ```
      
      For example:
      
      ```
      jdbc:postgresql://my-server.postgres.database.azure.com:5432/postgres
      ```

      {{% alert color="info" %}}The default port for PostgreSQL databases is `5432`. If you manually chose another port, change this in the URL as well.{{% /alert %}}

   3. Enter the username and password that you set when you [created the PostgreSQL Database with Amazon RDS](#aws-database-create) or [created the PostgreSQL Database with Microsoft Azure](#azure-database-create).

   4. Save, select, and test the configuration. This activates the `pgvector` extension so the vector database is ready to be used.

## Troubleshooting {#troubleshooting}

### Password Authentication Failed for User "postgres" in the Mendix App {#authentication-error}

If you get the error message **FATAL: password authentication failed for user "postgres"**, this could be a caching issue when running queries from apps locally.

To resolve this, follow these steps:

1. Verify the configuration was set up correctly. Re-enter the password to be sure.
2. Close all browser tabs. 
3. Shut down the app locally and run it again.

### Error in Logs of the Mendix App About the Extension "Vector" {#extension-error}

If there is an error in the logs of your Mendix app about the extension called "vector", your PostgreSQL version may not meet the pgvector requirements, or you have not met the installation prerequisites.

To resolve this, verify that you use PostgreSQL version 11 or above. If you are using a PostgreSQL database on your local machine, verify you have followed all the installation prerequisites for your setup and operating system. 

### Timeout Error in Logs of the Mendix App When You Try to Connect to the External Database {#timeout-error}

If there is a timeout error in the logs of your Mendix app when you try to connect to the external database, consider if your company network prohibits connections to AWS servers. 

To resolve this, connect to a network that allows these connections, such as a phone hotspot or your home network.

## Read More {#read-more}

* [Embeddings-based Search – Open AI Cookbook](https://cookbook.openai.com/examples/question_answering_using_embeddings)
* [Vector Database Options on AWS](https://aws.amazon.com/blogs/database/the-role-of-vector-datastores-in-generative-ai-applications/)
* [Vector Database Options – OpenAI Cookbook](https://cookbook.openai.com/examples/vector_databases/readme)
* [How to: AI-powered search in AWS Relational Database Service (RDS) For PostgreSQL Using pgvector](https://aws.amazon.com/blogs/database/building-ai-powered-search-in-postgresql-using-amazon-sagemaker-and-pgvector/)
* [pgvector: Open-Source Extension For Vector Similarity Search For PostgreSQL](https://github.com/pgvector/pgvector?tab=readme-ov-file#pgvector)
