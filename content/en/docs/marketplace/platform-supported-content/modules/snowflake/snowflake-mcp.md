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

* A chat interface where the user can retrieve and modify data in Snowflake Cloud by requesting in natural language.
* Reusing existing functionality of stored procedures in Snowflake Cloud by task oriented AI agents.

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
      <summary>Expand for example code including some testdata</summary>
      
      ```sql
      -- You can run this example/demo under sysadmin role, for real production screnario's use proper authorisation
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
   </details>
    

2. Create the stored procedures which the MCP server will expose as tools.
   <details>
      <summary>Expand for example code for a generic stored procdure returning meta data</summary>
      
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
   </details>   
   <details>
      <summary>Expand for example code for a generic stored procdure for retrieving records</summary>
      
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
   </details>
   <details>
      <summary>Expand for example code for a generic stored procdure for inserting records</summary>
      
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
   </details>
    

3. Create the Snowflake MCP server exposing the stored procedures as tools. 
   For more information, see [Create an MCP Server object](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp#create-an-mcp-server-object) in Snowflake documentation.
   <details>
      <summary>Expand for example code to generate a Snowflake MCP server with the stored procdures above as tools</summary>
      
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
   </details>
    

4. Create the authentication and access configuration, so it can invoked by the Mendix application with the MCP Client module.

    1. Retrieve the IP addresses from where the MCP Server is connector. 
       You can retrieve your own IP address from [whatismyipaddress.com](https://whatismyipaddress.com/) when your applicatons runs locally in Studio Pro.
       When it runs on Mendix public cloud, you can retrieve the IP addresses [here](https://docs.mendix.com/developerportal/deploy/mendix-ip-addresses/#mendix-cloud).
       
    2. Create a `NETWORK RULE` using the IP addresses that you retrieved.
      <details>
         <summary>Expand for example code</summary>
         
         ```sql
         --Run under accountadmin rol or securityadmin role 
         CREATE OR REPLACE NETWORK RULE SNOWFLAKE_MCP_DEMO.MCPSERVERS.MCP_DEMO_ALLOWED_IPS
           TYPE = IPV4
           MODE = INGRESS
           VALUE_LIST = ('1.2.3.4', '5.4.6.8', '9.10.11.12');
         ```
      </details>
      
    3. Create a Snowflake user, to be used for the Mendix Agent.
       As this user is used by a system, a 'service' type user is created.
      <details>
         <summary>Expand for example code</summary>
         
         ```sql
         -- Run under useradmin (or higher) role
         CREATE USER IF NOT EXISTS MX_AGENT
         default_role = SYSADMIN
         TYPE = SERVICE
         ALLOWED_INTERFACES = ();
         ```
      </details>
       
    4. Create a `NETWORK POLICY` for this user.
      <details>
         <summary>Expand for example code</summary>
         
         ```sql
         -- Run under accountadmin rol or securityadmin role 
         CREATE OR REPLACE NETWORK POLICY MX_AGENT_NETWORK_POLICY
           ALLOWED_NETWORK_RULE_LIST = ('SNOWFLAKE_MCP_DEMO.MCPSERVERS.MCP_DEMO_ALLOWED_IPS');
         ```
      </details>
       
    5. Set the user to use this policy.
      <details>
         <summary>Expand for example code</summary>
         
         ```sql
         -- Run under accountadmin rol or securityadmin role 
         ALTER USER MX_AGENT SET NETWORK_POLICY = MX_AGENT_NETWORK_POLICY;
         ```
      </details>
      
    6. Create a Personal Access Token (PAT) for the user.
       Be aware the for a Service type user, a role has to be granted. 
      <details>
         <summary>Expand for example code</summary>
         
         ```sql
         -- Run under accountadmin rol or securityadmin role 
         GRANT ROLE SYSADMIN TO USER MX_AGENT;
         
         ALTER USER MX_AGENT ADD PAT MX_AGENT_MCP_PAT
           ROLE_RESTRICTION = SYSADMIN
           DAYS_TO_EXPIRY = 30
           COMMENT = 'PAT for MCP demo';
         ```
      </details>

## Connecting a Mendix Agent to the MCP Server

After preparing the MCP server, you can now create a Mendix AI agent and connect it to the server by performing the following steps:

1. In Studio Pro, create a new app using the [Agent Builder Starter App](https://marketplace.mendix.com/link/component/240369).
2. In the [MCP Client](/appstore/modules/genai/mcp-modules/mcp-client/), add the credentials for your Large Language Model and retrieve list of available models.
3. Create a microflow that adds the Snowflake user PAT, that you created in the previous section, as Bearer token in the HTTP header.
4. Configure the Snowflake MCP server in the MCP Connections page
5. Create an AI agent and configure the following properties:
    * LLM model
    * Prompt
    * Snowflake-managed MCP server

6. Test your agent and verify that it can connect to the Snowflake-managed MCP server.

## Example

[video link when available]
