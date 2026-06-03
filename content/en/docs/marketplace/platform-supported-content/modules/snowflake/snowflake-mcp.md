---
title: "Connect a Mendix AI Agent to a Snowflake-Managed MCP Server"
linktitle: "Connect Mendix to a Snowflake MCP Server"
url: /appstore/modules/snowflake/connect-ai-agent-to-snowflake-mcp/
description: "Describes the steps required to use a Snowflake-managed MCP server with a Mendix AI agent."
weight: 80
---

## Introduction

The Model Context Protocol (MCP) is an open protocol that standardizes how Large Language Models (LLMs) can autonomously connect to apps. Many AI platforms and third-party systems have already adopted MCP for easier integration and empowerment of LLMs. Mendix provides an MCP Server module to facilitate an MCP server from a Mendix app, as well as an MCP Client module. For more information, see [Model Context Protocol (MCP)](/appstore/modules/genai/mcp/).

[Snowflake-managed MCP servers](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp) enable AI agents to securely integrate with Snowflake accounts without needing to deploy separate infrastructure. This includes performing CRUD (Create, Read, Update, and Delete) operations on data, as well as leveraging functionalities such as stored procedures and Cortex. Mendix users can configure the [MCP Client Module](/appstore/modules/genai/mcp-modules/mcp-client/) to enable the connection from a Mendix AI agent to a Snowflake MCP server.

### Typical Use Cases

* A chat interface where the user can retrieve and modify data in Snowflake Cloud by requesting in natural language.
* Reusing existing functionality of stored procedures in Snowflake Cloud by task-oriented AI agents.

### Prerequisites {#prerequisites}

To establish a connection between a Mendix AI Agent and a Snowflake-managed MCP server, you can either start with the [Blank GenAI App](https://marketplace.mendix.com/link/component/227934) or [Agent Builder Starter App](https://marketplace.mendix.com/link/component/240369), but make sure to update the [MCP Client](https://marketplace.mendix.com/link/component/244893) module to version 3.1.0 (or higher) when its version is lower.

Alternatively, to start from scratch or to add the capability to an exsiting application, you must also install the following modules and their prerequisites:

* [MCP Client](https://marketplace.mendix.com/link/component/244893) (version 3.1.0 or newer)
* [Conversational UI](https://marketplace.mendix.com/link/component/239450)

## Preparing a Snowflake-Managed MCP Server

To configure a Snowflake-managed MCP server, follow these steps: 

1. In Snowflake, set up the database and schemas which will be used by the server.

    For a code sample, see [Database and Schema Setup](#code-db-schema)
    
2. Create the stored procedures which the MCP server will expose as tools.
      
    For code samples, see the following:

    * [Procedure to Return Metadata](#code-metadata)
    * [Procedure to Retrieve Records](#code-records)
    * [Procedure to Insert Records](#code-records-insert)

3. Create the Snowflake MCP server exposing the stored procedures as tools.

    For more information, see [Create an MCP Server object](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp#create-an-mcp-server-object) in Snowflake documentation.

    For a code sample, see [Generate MCP Server with Procedures as Tools](#code-generate-server).

4. Create the authentication and access configuration, so it be can invoked by the Mendix application with the MCP Client module.

    1. Retrieve the IP addresses from where the MCP Server connector. 
        
        For applications running locally in Studio Pro, you can retrieve your own IP address from [whatismyipaddress.com](https://whatismyipaddress.com/). For applications running in Mendix Cloud, see [Mendix IP Addresses: Mendix Cloud](/developerportal/deploy/mendix-ip-addresses/#mendix-cloud).
       
    2. Create a `NETWORK RULE` using the IP addresses that you retrieved.

        You may use code similar to the following sample:
                     
        ```sql
        --Run under accountadmin rol or securityadmin role 
        CREATE OR REPLACE NETWORK RULE SNOWFLAKE_MCP_DEMO.MCPSERVERS.MCP_DEMO_ALLOWED_IPS
                TYPE = IPV4
                MODE = INGRESS
                VALUE_LIST = ('1.2.3.4', '5.4.6.8', '9.10.11.12');
        ```
      
    3. Create a Service-type Snowflake user, to be used for the Mendix Agent.

        You may use code similar to the following sample:
         
        ```sql
        -- Run under useradmin (or higher) role
        CREATE USER IF NOT EXISTS MX_AGENT
        default_role = SYSADMIN
        TYPE = SERVICE
        ALLOWED_INTERFACES = ();
        ```
       
    4. Create a `NETWORK POLICY` for this user.

        You may use code similar to the following sample:
         
        ```sql
        -- Run under accountadmin rol or securityadmin role 
        CREATE OR REPLACE NETWORK POLICY MX_AGENT_NETWORK_POLICY
            ALLOWED_NETWORK_RULE_LIST = ('SNOWFLAKE_MCP_DEMO.MCPSERVERS.MCP_DEMO_ALLOWED_IPS');
        ```
       
    5. Set the user to use this policy.

        You may use code similar to the following sample:
         
        ```sql
        -- Run under accountadmin rol or securityadmin role 
        ALTER USER MX_AGENT SET NETWORK_POLICY = MX_AGENT_NETWORK_POLICY;
        ```
      
    6. Create a Personal Access Token (PAT) for the user. Because this is a Service-type user, you must also grant them an admin role. 
         
        ```sql
        -- Run under accountadmin or securityadmin role 
        GRANT ROLE SYSADMIN TO USER MX_AGENT;
         
        ALTER USER MX_AGENT ADD PAT MX_AGENT_MCP_PAT
                ROLE_RESTRICTION = SYSADMIN
                DAYS_TO_EXPIRY = 30
                COMMENT = 'PAT for MCP demo';
        ```

### Sample Code

In this section, you can find sample code to help you configure a Snowflake-managed MCP server.

{{% alert color="info" %}}
The code samples are intended to show the range of available options. They are presented as examples only, and may require significant adaptation to work in your own environment.
{{% /alert %}}

#### Database and Schema Setup {#code-db-schema}

The following is a code sample including test data:
      
```sql
-- You can run this example under the Sysadmin role. For real production screnarios, use proper authorisation.
CREATE DATABASE IF NOT EXISTS SNOWFLAKE_MCP_DEMO;
CREATE SCHEMA   IF NOT EXISTS   SNOWFLAKE_MCP_DEMO.TOOLS;
CREATE SCHEMA   IF NOT EXISTS   SNOWFLAKE_MCP_DEMO.MCPSERVERS;
CREATE SCHEMA   IF NOT EXISTS   SNOWFLAKE_MCP_DEMO.TESTDATA;

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

#### Procedure to Return Metadata {#code-metadata}

The following is an example of a generic stored procedure which returns metadata:
      
```sql
-- You can run this example/demo under sysadmin role, for real production screnario's use proper authorisation
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

#### Procedure to Retrieve Records {#code-records}

The following is an example of a generic stored procedure which retrieves records:
      
```sql
-- You can run this example/demo under sysadmin role, for real production screnario's use proper authorisation
CREATE OR REPLACE PROCEDURE SNOWFLAKE_MCP_DEMO.TOOLS.RETRIEVE_RECORDS(
    fully_qualified_table VARCHAR,
    filter_column VARCHAR,
    filter_value VARCHAR
)
RETURNS VARCHAR
LANGUAGE PYTHON
RUNTIME_VERSION = '3.11'
PACKAGES = ('snowflake-snowpark-python')
HANDLER = 'run'
AS
    $$
    import json
        def run(session, fully_qualified_table, filter_column, filter_value):
            parts = fully_qualified_table.split('.')
            if len(parts) != 3:
                return json.dumps({"status": "error", "message": "Table must be fully qualified: DATABASE.SCHEMA.TABLE"})
            try:
                if filter_column and filter_value:
                    escaped = filter_value.replace("'", "''")
                    sql = f"SELECT * FROM {fully_qualified_table} WHERE {filter_column} = '{escaped}'"
                else:
                    sql = f"SELECT * FROM {fully_qualified_table}"
            rows = session.sql(sql).collect()
            results = [row.as_dict() for row in rows]
                for r in results:
                    for k, v in r.items():
                        if not isinstance(v, (str, int, float, bool, type(None))):
                            r[k] = str(v)
                return json.dumps({"status": "success", "row_count": len(results), "data": results})
          except Exception as e:
              return json.dumps({"status": "error", "message": str(e)})
$$;
```

#### Procedure to Insert Records {#code-records-insert}

The following is an example of a generic stored procedure which inserts records:
      
```sql
-- inputs can be for example:
-- fully_qualified_table = 'SNOWFLAKE_MCP_DEMO.TESTDATA.TICKETS'
-- column_values: '{"PRIORITY": "Low", "TEKST": "text here"}'
      
-- You can run this example/demo under sysadmin role, for real production screnario's use proper authorisation
    CREATE OR REPLACE PROCEDURE SNOWFLAKE_MCP_DEMO.TOOLS.INSERT_RECORD(
        fully_qualified_table VARCHAR,
          column_values VARCHAR
      )
      RETURNS VARCHAR
      LANGUAGE PYTHON
      RUNTIME_VERSION = '3.11'
      PACKAGES = ('snowflake-snowpark-python')
      HANDLER = 'run'
      AS
      $$
      import json
      def run(session, fully_qualified_table, column_values):
          parts = fully_qualified_table.split('.')
          if len(parts) != 3:
              return json.dumps({"status": "error", "message": "Table must be fully qualified: DATABASE.SCHEMA.TABLE"})
          db, schema, table = parts
          cols_rows = session.sql(f"""
              SELECT COLUMN_NAME, DATA_TYPE, IS_NULLABLE
              FROM {db}.INFORMATION_SCHEMA.COLUMNS
              WHERE TABLE_SCHEMA = '{schema}' AND TABLE_NAME = '{table}'
              ORDER BY ORDINAL_POSITION
          """).collect()
          if not cols_rows:
              return json.dumps({"status": "error", "message": f"Table {fully_qualified_table} not found or has no columns"})
          schema_info = {row["COLUMN_NAME"]: row["DATA_TYPE"] for row in cols_rows}
          try:
              values = json.loads(column_values)
          except json.JSONDecodeError as e:
              return json.dumps({"status": "error", "message": f"Invalid JSON in column_values: {str(e)}", "expected_columns": list(schema_info.keys())})
          for col_name in values:
              if col_name not in schema_info:
                  return json.dumps({"status": "error", "message": f"Column '{col_name}' does not exist in {fully_qualified_table}", "valid_columns": list(schema_info.keys())})
          col_names = list(values.keys())
          val_parts = []
          for col in col_names:
              val = values[col]
              if val is None:
                  val_parts.append("NULL")
              elif isinstance(val, (int, float)):
                  val_parts.append(str(val))
              else:
                  escaped = str(val).replace("'", "''")
                  val_parts.append(f"'{escaped}'")
          col_list = ", ".join(col_names)
          val_list = ", ".join(val_parts)
          sql = f"INSERT INTO {fully_qualified_table} ({col_list}) VALUES ({val_list})"
          try:
              session.sql(sql).collect()
              return json.dumps({"status": "success", "message": f"Record inserted into {fully_qualified_table}", "columns_inserted": col_names})
          except Exception as e:
              return json.dumps({"status": "error", "message": str(e)})
    $$;
```

#### Generate an MCP Server with Procedures as Tools {#code-generate-server}

The following is an example of the code to generate a Snowflake MCP server with the above stored procedures above as tools:
      
```sql
-- You can run this example/demo under sysadmin role, for real production screnario's use proper authorisation
CREATE OR REPLACE MCP SERVER SNOWFLAKE_MCP_DEMO.MCPSERVERS.DEMO_MCP_SERVER
    FROM SPECIFICATION $$
        tools:
        - title: "Get Schema Metadata"
              identifier: "SNOWFLAKE_MCP_DEMO.TOOLS.GET_SCHEMA_METADATA"
              name: "get_schema_metadata"
              type: "GENERIC"
              description: "Returns metadata for all tables and columns in a given database schema, including data types, nullability, row counts, and comments."
              config:
                type: "procedure"
                warehouse: "MYWAREHOUSE"
                input_schema:
                  type: "object"
                  properties:
                    db_name:
                      description: "The database name to inspect"
                      type: "string"
                    schema_name:
                      description: "The schema name to inspect"
                      type: "string"
            - title: "Insert Record"
              identifier: "SNOWFLAKE_MCP_DEMO.TOOLS.INSERT_RECORD"
              name: "insert_record"
              type: "GENERIC"
              description: "Inserts a single record into a specified table. Accepts a fully qualified table name and a JSON string of column-value pairs."
              config:
                type: "procedure"
                warehouse: "MYWAREHOUSE"
                input_schema:
                  type: "object"
                  properties:
                    fully_qualified_table:
                      description: "Fully qualified table name in DATABASE.SCHEMA.TABLE format"
                      type: "string"
                    column_values:
                      description: "JSON string of column names and values to insert, e.g. {\"PRIORITY\": \"High\", \"TEKST\": \"New ticket\"}"
                      type: "string"
            - title: "Retrieve Records"
              identifier: "SNOWFLAKE_MCP_DEMO.TOOLS.RETRIEVE_RECORDS"
              name: "retrieve_records"
              type: "GENERIC"
              description: "Retrieves records from a specified table. Optionally filter by a single column value. Returns all rows if no filter is provided."
              config:
                type: "procedure"
                warehouse: "MYWAREHOUSE"
                input_schema:
                  type: "object"
                  properties:
                    fully_qualified_table:
                      description: "Fully qualified table name in DATABASE.SCHEMA.TABLE format"
                      type: "string"
                    filter_column:
                      description: "Optional column name to filter on. Pass empty string for no filter."
                      type: "string"
                    filter_value:
                      description: "Optional value to match in the filter column. Pass empty string for no filter."
                      type: "string"
    $$;
```

## Connecting a Mendix Agent to the MCP Server

After setting up the MCP server, you can now create a Mendix AI agent and connect it to the MCP server by performing the following steps:

1. Optional: If your [MCP Client](/appstore/modules/genai/mcp-modules/mcp-client/) version is older than 3.1.0, update it to version 3.1.0 or newer.
2. In Studio Pro, create a new app using the [Agent Builder Starter App](https://marketplace.mendix.com/link/component/240369).
3. Create a constant for the Snowflake user PAT that you created in the previous section, and set its value in the Runtime configuration.
4. Go to **App/Marketplace Modules/MCPClient/Example Implementations/MCP Client/** and copy the **GetCredentials_EXAMPLE** microflow to your own app module. 

    Give the copied microflow a meaningful name to show that it is used to get Snowflake PAT authentication, for example, **GetCredentials_SF_PAT**.

5. Change this microflow so it only adds the PAT as Bearer token to the header by performing the following steps:

    1. Remove the first **Config: Create Http Header And Add to List** activity.
    2. Change the **Value** attribute of the second **Config: Create Http Header And Add to List** activity to `'Bearer ' + @General.SnowflakePAT`.

6. Start the app and log in.
7. On the **Administrator functionalities** page, use the **LLM connections** section to configure your Large Language Model subscription and retrieve the list of available Large Language Models.

    You can leverage a LLM (Large Language Model) from your Snowflake account in your Mendix application for GenAI functionality. For more information, see [Bring Your Own Snowflake LLM](/appstore/modules/snowflake/bring-your-own-snowflake-llm/).

8. On the **Consumed MCP Services** page, click **MCP Client** and configure the following properties of your Snowflake MCP server:
    
    1. Enter a name.
    2. Specify the MCP endpoint in the following format: `https://<snoflake-account-id>.snowflakecomputing.com/api/v2/databases/<database name>/schemas/<schema name>/mcp-servers/<mcpserver name>`.
        
        {{% alert color="info" %}} If your Snowflake account ID contains underscores (`_`), replace them with `-` in the endpoint. This is only required for the account ID, not for the database name, schema name, or MCP server name.
        {{% /alert %}}
        
    3. For the protocol value, enter *v2025_03_26*.
    4. Enter a version number.
    5. Set the connection time out, for example, 60 seconds.
    6. For the **Get credentials microflow**, select the microflow that you created in step 4 above (**GetCredentials_SF_PAT**).
    7. Save your changes and verify that the **Server status** is now set to **OK** with a green checkmark.
    8. To inspect the MCP server, click **View MCP tools and prompts**.

9. Create an AI agent and configure the following properties:

    * LLM model
    * System prompt - Make sure to specify the schema and table name to use and provide instructions on how to use the MCP server tools. For an example prompt, see [Example System Prompt](#example-prompt).
    * In **Tools**, select the Snowflake-managed MCP server that you configured.

10. Test your agent by asking questions related to the exposed tools of the Snowflake MCP server, for example, *Which tickets have High priority?*.

### Example System Prompt {#example-prompt}

The following is an example of a system prompts that specifies the schema and table name, and provides instructions on how to use the MCP server tools:
         
```text
You are a support ticket management assistant connected to a Snowflake database via MCP tools.
         
You help users create, retrieve, and inspect support tickets stored in the SNOWFLAKE_MCP_DEMO.TESTDATA schema.
         
## Available Tools
         
You have access to the following MCP tools:
         
1. **get_schema_metadata** - Retrieves table and column metadata for a database  - Use this FIRST when you need to understand the data structure before performing other operations.
- Parameters: db_name (e.g. "SNOWFLAKE_MCP_DEMO"), schema_name (e.g. "TESTDATA")
         
2. **insert_record** - Inserts a single record into a table.
- Parameters: fully_qualified_table (e.g. "SNOWFLAKE_MCP_DEMO.TESTDATA.TICKETS"), column_values (JSON string)
- The value for the TICKETID column is automatically generated in the database, so omit this column when inserting.
- Always provide both PRIORITY and TEXT columns.
- PRIORITY must be one of: "High", "Medium", "Low"
         
3. **retrieve_records** - Retrieves records from a table with optional filtering.
- Parameters: fully_qualified_table, filter_column (optional), filter_value (optional)
- Pass empty strings for filter_column and filter_value to retrieve all records.
         
## Data Model
         
The primary table is SNOWFLAKE_MCP_DEMO.TESTDATA.TICKETS:
- TICKETID (NUMBER, auto-increment) - Unique ticket identifier
- PRIORITY (VARCHAR) - Ticket priority: High, Medium, or Low
- TEXT (VARCHAR) - Description of the ticket/issue
         
## Guidelines
         
- When a user asks to create a ticket, extract the priority and description from their request. If priority is not specified, ask for it.
- When a user asks to view or search tickets, use retrieve_records. Use the filter parameters when they want to filter by a specific column.
- If a user asks about the data structure or available tables, use get_schema_metadata.
- Always confirm successful operations by showing the user what was created or retrieved.
- Use fully qualified table names (DATABASE.SCHEMA.TABLE) in all tool calls.
- If a tool call returns an error, explain the issue clearly and suggest a correction.
```
