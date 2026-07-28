---
title: "Snowflake Modules"
url: /appstore/snowflake-modules/
description: "Presents details on the Snowflake-specific modules available in the Mendix Marketplace."
weight: 40
no_list: false
description_list: true
---

## Introduction

You can combine the AI capabilities offered by Mendix and Snowflake to enable the development of low-code agentic enterprise solutions. The integration works in both directions, that is, Snowflake Cortex Agents can invoke Mendix business logic, while Mendix AI agents can connect to Snowflake MCP servers.

In addition to AI-driven applications, the integration also includes the capability to build data-driven applications. That is, you can use data from Snowflake in your Mendix app with the External Database connector or the Snowflake AI Data connector, as well as ingest your Mendix data into Snowflake by using the Mendix Data Loader.

The following diagram outlines the available integration options:

{{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-ai-data-connector/Snowflake Architecture slide.png" >}}

For more information, refer to the sections below.

## Snowflake AI and Data Integration Options

The integration between Mendix and Snowflake offers several options for building AI-driven applications.

### AI-Assisted Development

Mendix supports the [Model Context Protocol](https://modelcontextprotocol.io/introduction), which is an open protocol that standardizes how Large Language Models (LLMs) can autonomously connect to apps. For more information about the available options, refer to the following topics:

* [Integrate a Mendix MCP Server with a Snowflake Cortex Agent](/appstore/modules/snowflake/connect-snowflake-ai-agent-to-mendix/)
* [Connect a Mendix AI Agent to a Snowflake-Managed MCP Server](/appstore/modules/snowflake/connect-ai-agent-to-snowflake-mcp/)
* [Bring Your Own Snowflake LLM](/appstore/modules/snowflake/bring-your-own-snowflake-llm/)

### Building AI-Powered Applications

The [Snowflake AI Data Connector](https://marketplace.mendix.com/link/component/225717) is the recommended, purpose-built method of integrating Mendix with Snowflake for the purpose of developing AI-powered Mendix apps.

You can also use the [External Database connector](https://marketplace.mendix.com/link/component/219862) to trigger some Cortex AI functions through SQL queries. For a comparison of the functions of the connectors, refer to the sections below.

#### Snowflake AI Data Connector

The [Snowflake AI Data Connector](https://marketplace.mendix.com/link/component/225717) is the recommended option for building AI-driven applications. It enables you to perform the following tasks:

* Trigger a number of [Snowflake Cortex ML functions](https://docs.snowflake.com/en/guides-overview-ml-functions). For a more detailed list, refer to [Snowflake AI Data Connector: Typical Use Cases](/appstore/connectors/snowflake/snowflake-ai-data-connector/#use-cases).
* Use [Snowflake Cortex Analyst](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-analyst).
* Execute synchroneous calls.
* Access Cortex AI functions.
* Query your Cortex Search services.

#### External Database Connector

The [External Database connector](https://marketplace.mendix.com/link/component/219862) can also be used to support AI-driven applications by allowing you to run SQL queries that call upon some Cortex AI functions, such as *sentiment*. For more information, see [External Database Connector: Using Cortex AI functions](/appstore/modules/snowflake/external-database-connector/).

### Building Data-Driven Applications {#data-driven}

The [External Database connector](https://marketplace.mendix.com/link/component/219862) and the [Snowflake AI Data Connector](https://marketplace.mendix.com/link/component/225717) can also be used to build data-driven applications. For a comparison of the functions of the connectors, refer to the sections below.

#### External Database Connector

The [External Database connector](https://marketplace.mendix.com/link/component/219862) is the recommended option for building data-driven applications. It offers a premium developer experience where you can test connections and queries during design time by using a view of all schemas and objects to which you can connect. It makes use of the JDBC protocol and the usage of Python stored procedures in addition to Java. 

The External Database connector has GA support for Snowflake from [Studio Pro 10.12](/releasenotes/studio-pro/10.12/) (Beta versions are available from [Studio Pro 10.10](/releasenotes/studio-pro/10.10/)).

#### Snowflake AI Data Connector

The [Snowflake AI Data Connector](https://marketplace.mendix.com/link/component/225717) is primarily used for AI-driven applications, but it can also be used to perform small-scale data updates. This may be useful in cases where you are already using this connector for its AI functionalities, and you would like to do a limited amount of data processing without having to install a new connector for this purpose. However, for reading or writing large amounts of data, it is recommended to use the External Database connector instead.

The Snowflake AI Data Connector requires an additional step to transform data rows received from the REST SQL API into Mendix objects. For more information, see [Snowflake AI Data Connector](/appstore/connectors/snowflake/snowflake-ai-data-connector/).

#### Loading Mendix Data into Snowflake

The [Mendix Data Loader](https://app.snowflake.com/marketplace/listing/GZTDZHHIE0/mendix-mendix-data-loader/), available from the [Snowflake Marketplace](https://app.snowflake.com/marketplace), aids in ingesting Mendix data into Snowflake. The application is deployed in your Snowflake environment and interacts with the configured Mendix apps to ingest data that is exposed using an [Published OData Service](/refguide/published-odata-services/). 

### Security and Governance

##### Role Base Access Control (RBAC)

For information about using Snowflake's role-based access control in a Mendix application, see [Role-based Access Control](/appstore/modules/snowflake/snowflake-rbac/).

## Documents in This Category


