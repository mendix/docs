---
title: "Setting up a Vector Database"
url: /appstore/modules/genai/pgvector-setup/
linktitle: "Vector Database Setup"
weight: 5
description: "Describes how to set up a vector database to store and manage vector embeddings for a knowledge base"
---

## Introduction {#introduction}

Vector databases play an important role in embeddings-based AI use cases by facilitating efficient storage, retrieval, and manipulation of high-dimensional vectors representing textual or semantic information. A crucial step within those use cases like semantic search and Retrieval Augmented Generation (RAG) is to find the closest and thus most similar pieces of information to a given semantic input. Those similarity and distance calculations between high-dimensional vectors cannot be done on a normal database and thus a vector database is needed.

This page describes how a PostgreSQL vector database can be set up to explore use cases with knowledge bases.

{{% alert color="info" %}}
This procedure describes a setup based on a PostgreSQL database with the pgvector extension to query embedding vectors. However, this is not the only possible solution. Other (vector) database types may better fit your use case.
{{% /alert %}}

## Managing a PostgreSQL Database with Amazon RDS {#aws-database}

A PostgreSQL database in Amazon RDS includes the required extension for `pgvector` pre-installed. When you connect using the [PgVector Knowledge Base](https://marketplace.mendix.com/link/component/225063) module, this extension activates automatically, allowing the database to function as a vector database for knowledge bases.

### Creating a PostgreSQL Database with Amazon RDS {#aws-database-create}

{{% alert color="info" %}}
For detailed steps for creating a PostgreSQL Database with Amazon RDS, see [Create and Connect to a PostgreSQL Database](https://aws.amazon.com/getting-started/hands-on/create-connect-postgresql-db/) in the *AWS Documentation*. You can check out the following sections in the AWS Documentation for preliminary background knowledge:

* Enter the RDS Console
* Create a PostgreSQL DB Instance
{{% /alert %}}

You can use the values in the steps below for experimental purposes:

1. Sign in to the AWS console. 

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
   1. On the **Connectivity & Security** tab, find the inbound security group rule. By default this only accepts incoming traffic from your current IPv4 address.
   
   2. Optionally, if the database is required to be accessible from other locations as well, click the security group rule, go to the **Inbound rules** tab, then add a rule as follows:
      1. For **Type**, select *PostgreSQL*.
      
      2. Set **Port** to *5432*.
      
      3. For **Source**, select *Custom*, and provide the IP CIDR range in the field as follows:
      
         * If you have access to a VPN, you can also provide its IP here. Then for the connection to your database to work, all users running the Mendix app locally must be connected to the VPN.
         * If you have deployed your Mendix app to Mendix Cloud, you need to let the database accept incoming requests from it. For this, create inbound rules and select the IP address of your Mendix app as the source. See [Mendix IP Addresses: Outgoing IP](/developerportal/deploy/mendix-ip-addresses/#outgoing) for a list of addresses to safe-list in this scenario.
         * If you want the database to be accessible from anywhere, have a rule with its source set to *0.0.0.0/0*.
      
         {{% alert color="info" %}}For a single IPv4 address, the CIDR range is equal to the IP address with `/32` appended.{{% /alert %}}

### Deleting Resources in AWS {#aws-database-delete}

If no action is taken, resources in AWS will stay around indefinitely. Make sure to think about deleting the resources when you are done experimenting. When using services from AWS, you are responsible for having the necessary resources and deleting the ones that are no longer needed, to prevent from being charged more than is required. This is especially relevant the moment resources fall outside of the free-tier after a certain time.

## Managing a PostgreSQL Database with Microsoft Azure {#azure-database}

A PostgreSQL database in Microsoft includes the required `pgvector` extension (called *vector*) pre-installed. The steps below describe how to enable its use. When you connect using the [PgVector Knowledge Base](https://marketplace.mendix.com/link/component/225063) module, this extension activates automatically allowing the database to function as a vector database for knowledge bases.

### Creating a PostgreSQL Database with Microsoft Azure {#azure-database-create}

{{% alert color="info" %}}
For detailed steps for creating a PostgreSQL Database with Azure and enabling the *pgVector* extension, see [Quickstart: Create an Azure Database for PostgreSQL](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/quickstart-create-server-portal) and [How to enable and use pgvector on Azure Database for PostgreSQL](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-use-pgvector) in the *Azure Documentation*.
{{% /alert %}}

You can use the values in the steps below for experimental purposes:

1. Create a new resource from the home page of the Azure Portal. 

2. Search and select **Azure Database for PostgreSQL Flexible Server**.

3. Click **Create** and use the following specifications in the **Basics** tab:
   1. Select a **Subscription** and **Resource**.
   2. Enter a **Server name**. The name needs to be unique.
   3. Choose a **region** that best fits your requirements.
   4. Select a **PostgreSQL version**.
   5. If your main purpose of the database is development and testing, choose **Development** for **Workload type** that will reduce the estimated costs.
   6. At the bottom, choose an **Authentication method**:
      1. For **PostgreSQL authentication**, make sure that you store username and password securely.
      2. For **Microsoft Entra authentication**, select an admin.
   
4. Continue with the **Networking** configurations in the next tab.
   1. Based on your requirements, decide how the database server can be accessed (for testing purposes, it is recommended to use *Public Access*):
      1. **Public access**: firewall rules need to be added for the IP addresses that are allowed to access the server. Use **Add current client IP address** to add your own IP when running the application locally. For apps running in Mendix Cloud, add the IP of that environment, see [Mendix IP Addresses: Outgoing IP](/developerportal/deploy/mendix-ip-addresses/#outgoing) for a list of addresses to safe-list in this scenario. Alternatively, you can use **Add 0.0.0.0 - 255.255.255.255** so that no IP addresses are blocked. Use this carefully and make sure that this aligns with your security requirements.
      2. **Private Access**: the server can only be accessed from a **Virtual Network** that needs to be selected (or created). Make sure that your Mendix App is running in the same network.
   
    {{% alert color="info" %}}For experimental purposes, you do not need to configure anything in the **Security** or **Tags** tabs to get the server running.{{% /alert %}}
   
5. On the last tab **Review + create**, review your settings and estimated costs. **Create** the resource if there is nothing you need to change.

6. Wait for the database to be created. This can take some time. You may already navigate to the newly created resource by searching for the name you chose.

7. Once the server is running, you can add the pgVector extension to the allowed extensions list (see [How to enable and use pgvector on Azure Database for PostgreSQL](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-use-pgvector) in the *Azure documentation*) or see the following steps:
   1. Search for **Server parameters** in the search bar on the left. A list of parameters is loaded.
   2. Search for **azure.extensions**.
   3. In the column *VALUE*, search in the dropdown for **VECTOR** (note that in Azure the extension is not called *pgVector* but just *Vector*).
   4. Save the changes.
   
8. Search for **Databases** in the search bar on the left. Verify that there is already a database that you can use. Alternatively, create a new database by clicking **Add** at the top.

### Deleting Resources in Azure {#azure-database-delete}

If no action is taken, resources on Azure will stay around indefinitely. Make sure to think about deleting the resources when you are done experimenting. When using services from Azure, you are responsible for having the necessary resources and deleting the ones that are no longer needed, to prevent from being charged more than is required.

## Configuring the Database Connection Details in Your Application {#configure-database-connection}

1. Add the [PgVector Knowledge Base](https://marketplace.mendix.com/link/component/225063) module and its dependencies to your Mendix app and set it up correctly, see [PgVector Knowledge Base](/appstore/modules/genai/pgvector/).

2. Include the page **DatabaseConfiguration_Overview** in the navigation or use the snippet **Snippet_DatabaseConfigurations** on an existing page.

3. Run the app, sign in as admin and navigate to the previously linked **Vector database configurations** page.

4. Create a new configuration.

5. Edit the configuration details as follows:
   1. Format the Jdbc URL in the following way:
      `jdbc:postgresql://{endpoint}:5432/{vectorDatabaseName}`.

       {{% alert color="info" %}}The default port for PostrgreSQL databases is `5432`. If you manually chose another port, then change this in the URL as well.{{% /alert %}}

      To find the endpoint in the **AWS console**: 

      1. Go to Amazon RDS and make sure the right region in which the RDS database was created is selected at the top.

      2. Under **Databases**, click your new database to view the details.

      3. On the **Connectivity & Security** tab, you can find the endpoint.
   
         The value for `{vectorDatabaseName}` in the URL is the initial database name you set when you [created the PostgreSQL database with Amazon RDS](#aws-database-create).

      To find the endpoint in the **Azure portal**:

      1. Search for your resource that was newly created.

      2. On the **Overview** page, copy the value next to **Server name**, for example *my-servername.postgres.database.azure.com* as the `{endpoint}` in the URL.

      3. In the search bar on the left, search for **Databases**. In the search result, there is a list of possible databases that can be used for `{vectorDatabaseName}` in the URL. Only use a database with *schema type* "User".

   2. Use the master username and master password that you set in the **Settings** when you [created the PostgreSQL Database with Amazon RDS](#aws-database-create) or for the admin user in the [Azure Portal](#azure-database-create) as your username and password.

   3. Save and test the configuration. This will activate the `pgvector` extension and the vector database is ready to be used.

## Setup Alternatives {#setup-alternatives}

Setting up a cloud database with the pgvector extension is one of the easiest options for using a vector database for our sample implementation. However, there are also alternatives and general considerations, which are described in this section.

### Running a PostgreSQL Database Locally {#local-database}

It is possible to run a PostgreSQL database locally. It is useful to familiarize yourself with PostgreSQL and tooling like pgAdmin. 

Make sure that you meet the following prerequisites:

1. You have [PostgreSQL installed](https://www.postgresql.org/download/). During the installation, it asks to install pgAdmin 4 as well, which is recommended for creating the local server and database. You can also choose other tooling to your liking to reach the same goal.
2. Have a new local database that you can connect to. Use the tool that you choose in step 1, for example pgAdmin, to do the following:
   1. Register your new PostgreSQL server. The port is typically 5432. The credentials needed here are the ones you entered during the installation of PostgreSQL. You will need this later.
   2. Create a database, for example, myVectorDatabase. You will need this later.
3. Have the pgvector extension installed. Depending on your hardware and operating system, the steps to install the pgvector extension can be different. Follow the [installation instructions](https://github.com/pgvector/pgvector?tab=readme-ov-file#installation) on GitHub carefully and make sure to check the [installation notes](https://github.com/pgvector/pgvector?tab=readme-ov-file#installation-notes).

In this case, the configuration of the database connection details in your application is similar to what was described in the [Configuring the Database Connection Details in Your Application](#configure-database-connection) section. Your Jdbc URL will now look like `jdbc:postgresql://localhost:5432/{vectorDatabaseName}` where the value for `{vectorDatabaseName}` is the one you have chosen while creating the database.

## Troubleshooting {#troubleshooting}

### Password Authentication Failed for User "postgres" in the Mendix App {#authentication-error}

If you get the error message **FATAL: password authentication failed for user "postgres"**, it could be a caching issue during the running of queries from apps locally.

When this occurs, do as follows:

1. Make sure the configuration was set up correctly. Re-enter the password to be sure.
2. Close all browser tabs. 
3. Shut down the app locally and run the app again.

### Error in Logs of the Mendix App About the Extension "Vector" {#extension-error}

If there is an error in the logs of your Mendix app about the extension called “vector", it could be that your PostgreSQL version does not meet the requirement of pgvector, or you have not met the installation prerequisites.

When this occurs, make sure that you use the PostgreSQL version 11 or above. If you are using a PostgreSQL database on your local machine, make sure you have followed all the installation prerequisites specific for your setup and operating system. 

### Timeout Error in Logs of the Mendix App When You Try to Connect to the External Database {#timeout-error}

If there is a timeout error in the logs of my Mendix app when you try to connect to the external database, the cause could be that some company network prohibits connections to AWS servers. 

When this occurs, make sure you are connected to a network that does allow these connections, for example, with a phone hotspot or from your home network.

## Read More {#read-more}

* [Embeddings-based Search – Open AI Cookbook](https://cookbook.openai.com/examples/question_answering_using_embeddings)
* [Vector Database Options on AWS](https://aws.amazon.com/blogs/database/the-role-of-vector-datastores-in-generative-ai-applications/)
* [Vector Database Options – OpenAI Cookbook](https://cookbook.openai.com/examples/vector_databases/readme)
* [How to: AI-powered search in AWS Relational Database Service (RDS) For PostgreSQL Using pgvector](https://aws.amazon.com/blogs/database/building-ai-powered-search-in-postgresql-using-amazon-sagemaker-and-pgvector/)
* [pgvector: Open-Source Extension For Vector Similarity Search For PostgreSQL](https://github.com/pgvector/pgvector?tab=readme-ov-file#pgvector)z2
