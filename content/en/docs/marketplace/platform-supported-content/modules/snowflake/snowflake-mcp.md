---
title: "Connect a Mendix AI Agent to a Snowflake-Managed MCP Server"
linktitle: "Connect Mendix to a Snowflake MCP Server"
url: /appstore/modules/snowflake/connect-ai-agent-to-snowflake-mcp/
description: "Describes the steps required to use a Snowflake-managed MCP server with a Mendix AI agent."
weight: 80
---

## Introduction

The Model Context Protocol (MCP) is an open protocol that standardizes how Large Language Models (LLMs) can autonomously connect to apps. Many AI platforms and third-party systems have already adopted MCP for easier integration and empowerment of LLMs. Mendix provides an MCP Server module to facilitate an MCP server from a Mendix app, as well as an MCP Client module. For more information, see [Model Context Protocol (MCP)](/appstore/modules/genai/mcp/).

[Snowflake-managed MCP servers](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp) let AI agents securely use data ([CRUD](## "Create Read Update Delete")) and leverage functionaliy, e.g stored procedures and cortext functionality, from Snowflake accounts without needing to deploy separate infrastructure. Mendix users can configure the [MCP Client Module](/appstore/modules/genai/mcp-modules/mcp-client/) to enable the connection from a Mendix AI agent to a Snowflake MCP server.

### Typical Use Cases

A chat interface where the user can retrieve and modify data in Snowflake Cloud by requesting in natural language.
Reusing existing functionality of stored procedures in Snowflake Cloud by task oriented AI agents.

### Prerequisites {#prerequisites}

[Any specific versions of Studio Pro? Other prereqs?]

To establish a connection between a Mendix AI Agent and a Snowflake-managed MCP server, you can either start with the [Blank GenAI App](https://marketplace.mendix.com/link/component/227934) or [Agent Builder Starter App](https://marketplace.mendix.com/link/component/240369), but make sure to update the [MCP Client](https://marketplace.mendix.com/link/component/244893) module to version 3.1.0 (or higher) when its version is lower.

Or when you want to start from scratch or you want add to an exsiting application, you must also install the following modules and their prerequisites:

* [MCP Client](https://marketplace.mendix.com/link/component/244893) (version 3.1.0 or higher)
* [Conversational UI](https://marketplace.mendix.com/link/component/239450)

## Preparing a Snowflake-Managed MCP Server

To configure a Snowflake-managed MCP server, follow these steps: 

1. In Snowflake, set up the database and schema's which will be used by the server.
<details>
<summary>Expand for example code</summary>
   
```sql
   CREATE DATABASE IF NOT EXISTS SNOWFLAKE_MCP_DEMO;
   CREATE SCHEMA IF NOT EXISTS   SNOWFLAKE_MCP_DEMO.TOOLS;
   CREATE SCHEMA IF NOT EXISTS   SNOWFLAKE_MCP_DEMO.MCPSERVERS;
   CREATE SCHEMA IF NOT EXISTS   SNOWFLAKE_MCP_DEMO.TESTDATA;
   
   CREATE OR REPLACE TABLE SNOWFLAKE_MCP_DEMO.TESTDATA.TICKETS (
    TICKETID NUMBER AUTOINCREMENT START 1 INCREMENT 1,
    PRIORITY VARCHAR(10),
    TEXT VARCHAR(500)
   );
   
   INSERT INTO SNOWFLAKE_MCP_DEMO.TESTDATA.TICKETS (PRIORITY, TEXT)
   VALUES
    ('High', 'Server is down in production environment'),
    ('Medium', 'User unable to reset password'),
    ('Low', 'Request for additional monitor'),
    ('High', 'Database connection timeout on checkout page'),
    ('Medium', 'Email notifications not being sent');
    
```
</details>

2. Create stored procedures which the MCP server will expose as tools.

<details>
<summary>Expand for example code</summary>
   ```SQL
   CREATE OR REPLACE PROCEDURE SNOWFLAKE_MCP_DEMO.TOOLS.GET_SCHEMA_METADATA(
       db_name VARCHAR,
       schema_name VARCHAR
   )
   RETURNS VARIANT
   LANGUAGE PYTHON
   RUNTIME_VERSION = '3.11'
   PACKAGES = ('snowflake-snowpark-python')
   HANDLER = 'run'
   AS
   $$
   import json
   def run(session, db_name, schema_name):
       rows = session.sql(f"""
           SELECT
               c.TABLE_CATALOG,
               c.TABLE_SCHEMA,
               c.TABLE_NAME,
               t.TABLE_TYPE,
               t.ROW_COUNT,
               t.COMMENT AS TABLE_COMMENT,
               c.COLUMN_NAME,
               c.ORDINAL_POSITION,
               c.DATA_TYPE,
               c.IS_NULLABLE,
               c.COLUMN_DEFAULT,
               c.CHARACTER_MAXIMUM_LENGTH,
               c.NUMERIC_PRECISION,
               c.NUMERIC_SCALE,
               c.COMMENT AS COLUMN_COMMENT
           FROM {db_name}.INFORMATION_SCHEMA.COLUMNS c
           JOIN {db_name}.INFORMATION_SCHEMA.TABLES t
               ON c.TABLE_CATALOG = t.TABLE_CATALOG
               AND c.TABLE_SCHEMA = t.TABLE_SCHEMA
               AND c.TABLE_NAME = t.TABLE_NAME
           WHERE c.TABLE_SCHEMA = '{schema_name}'
           ORDER BY c.TABLE_NAME, c.ORDINAL_POSITION
       """).collect()
       tables = {}
       for row in rows:
           tname = row["TABLE_NAME"]
           if tname not in tables:
               tables[tname] = {
                   "database": row["TABLE_CATALOG"],
                   "schema": row["TABLE_SCHEMA"],
                   "table_type": row["TABLE_TYPE"],
                   "row_count": row["ROW_COUNT"],
                   "comment": row["TABLE_COMMENT"],
                   "columns": []
               }
           tables[tname]["columns"].append({
               "name": row["COLUMN_NAME"],
               "position": row["ORDINAL_POSITION"],
               "data_type": row["DATA_TYPE"],
               "nullable": row["IS_NULLABLE"],
               "default": row["COLUMN_DEFAULT"],
               "max_length": row["CHARACTER_MAXIMUM_LENGTH"],
               "precision": row["NUMERIC_PRECISION"],
               "scale": row["NUMERIC_SCALE"],
               "comment": row["COLUMN_COMMENT"]
           })
       return tables
   $$;
   ```
</details>


    * `RETRIEVE_RECORDS`
    * `INSERT_RECORD`

3. Create the MCP server. For more information, see [Create an MCP Server object](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp#create-an-mcp-server-object) in Snowflake documentation.
4. Create the authentication and access configuration, so it can invoked by Mendix.

    1. Retrieve the IP addresses.
    2. Create a `NETWORK RULE` using the IP addresses that you retrieved.
    3. Create a `NETWORK POLICY`.
    4. Set the user to use this policy.
    5. Create a Personal Access Token (PAT) for the user.

## Connecting a Mendix Agent to the MCP Server

After preparing the MCP server, you can now create a Mendix AI agent and connect it to the server by performing the following steps:

1. In Studio Pro, create a new app using the [Agent Builder Starter App](https://marketplace.mendix.com/link/component/240369).
2. In the [MCP Client](/appstore/modules/genai/mcp-modules/mcp-client/), add the credentials for your Large Language Model.
3. Create a microflow to retrieve the Snowflake user PAT that you created in the previous section.
4. Add the Snowflake MCP server.
5. Create an AI agent and configure the following properties:

    * LLM
    * Prompt
    * Snowflake-managed MCP server

6. Test your agent and verify that it can connect to the Snowflake-managed MCP server.

## Example

[video link when available]
