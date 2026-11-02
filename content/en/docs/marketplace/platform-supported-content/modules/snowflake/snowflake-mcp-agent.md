---
title: "Integrate a Mendix MCP Server with a Snowflake Cortex Agent"
linktitle: "Connect Snowflake AI Agents to Mendix"
url: /appstore/modules/snowflake/connect-snowflake-ai-agent-to-mendix/
description: "Describes the steps required to use a Snowflake AI agent with a Mendix-managed MCP server."
weight: 80
---

## Introduction

You can integrate a Mendix application with a Snowflake Cortex Agent using the Model Context Protocol (MCP). When a Mendix app is configured with the MCP module, it acts as an MCP server that exposes microflows as callable tools. A Snowflake Cortex Agent can then invoke those tools to execute Mendix business logic as part of an AI-driven workflow.

This article covers two integration methods:

* [Method 1 - Snowflake functions as an intermediary layer](#method-1)

    The Cortex Agent uses a custom tool backed by a Snowflake SQL wrapper function, which delegates to a Python function that communicates with the Mendix MCP server using Basic Authentication.

* [Method 2 - Direct MCP connector](#method-2)

    The Cortex Agent connects directly to the Mendix MCP server through a Snowflake external MCP server and API integration using OAuth 2.0.

Both methods allow a Cortex Agent to invoke Mendix business logic. The method you choose depends on how much control you need over authentication, request construction, and response handling.

This article uses the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) as a reference implementation. The GenAI Showcase App is available in the Mendix Marketplace and demonstrates how to configure a Mendix app as an MCP server and expose microflows as MCP tools.

## Prerequisites {#prerequisites}

Before you start, make sure you have completed the following prerequisites:

* You have a Snowflake environment with access to Cortex Agents.
* You have a Mendix application with the MCP module installed and configured.
* Your Mendix app is deployed to a Mendix Cloud environment that is reachable from Snowflake.
* You have the permissions required to create Snowflake integrations, functions, and agents.
* You have exposed at least one microflow as an MCP tool in your Mendix app.

### Additional Prerequisites for Method 1

For Method 1, you also need the following:

* A Snowflake external access integration configured for the Mendix MCP endpoint
* A Snowflake secret containing the username and password for Basic Authentication

### Additional Prerequisites for Method 2

For Method 2, you also need the following:

* An OAuth 2.0 client registration in your identity provider (for example, Microsoft Entra ID)
* The client ID, client secret, token endpoint, authorization endpoint, and API scope for that registration

## Example Scenario

{{% alert color="info" %}}
The following examples demonstrate the integration pattern. For production use, consider adding stronger error handling, security, retries, response validation, and logging.
{{% /alert %}}

The examples in this article use a Mendix MCP tool named *RetrieveNumberOfTicketsInStatus*. This tool is exposed by a Mendix microflow and accepts the following input:

| Parameter | Type | Description |
| --- | --- | --- |
| Status | String | The ticket status to query |

The microflow returns the number of tickets for the given status. In this example, the supported values and their results are the following:

| Status value | Returned count |
| --- | --- |
| Open | 42 |
| Closed | 128 |
| In Progress | 19 |

A user interacting with the Cortex Agent can ask a question such as, *How many tickets are open?*

The agent invokes the appropriate tool and returns the result.

## Method 1 - Using Snowflake Functions as an Intermediary Layer {#method-1}

In this method, the Cortex Agent does not connect directly to the Mendix MCP server. Instead, it uses a custom tool that is backed by a Snowflake SQL wrapper function. That wrapper function calls a Snowflake Python function, which handles all MCP communication with the Mendix app.

This approach gives you full control over the following:

* Authentication (using a Snowflake secret for Basic Authentication credentials)
* MCP session initialization
* Request construction and payload formatting
* HTTP communication and response parsing

### When to Use Method 1

Use this method when:

* You want to hide MCP protocol details from the Cortex Agent.
* You want to expose business-friendly Snowflake functions.
* You need to control authentication and payload construction inside Snowflake.
* You are implementing custom validation or response handling logic.
* You are not able to use OAuth as authentication.

### Architecture

The following describes the request flow for Method 1:

```text
The user sends a prompt to the Snowflake Cortex Agent, for example: How many tickets are open?
The Cortex Agent interprets the prompt and selects the appropriate custom tool based on the tool description.
The custom tool calls the Snowflake SQL wrapper function CALL_MENDIX_MCP_ACCP_WITHBASICAUTH_RETRIEVE_NR_TICKETS, passing the status value extracted from the prompt.
The SQL wrapper function constructs the MCP tools/call payload and delegates execution to the Python function CALL_MENDIX_MCP_ACCP_WITHBASICAUTH.
The Python function retrieves the Basic Authentication credentials from the configured Snowflake secret and constructs the Authorization header.
The Python function initializes an MCP session with the Mendix MCP server and sends the tools/call request.
The Mendix MCP server receives the request and invokes the RetrieveNumberOfTicketsInStatus microflow with the provided status value.
The microflow executes the business logic and returns the ticket count to the MCP server.
The MCP server returns the result to the Python function, which parses the response and returns it as a VARIANT to the Cortex Agent.
The Cortex Agent presents the result to the user.
```

### Configuring Method 1

To configure your app for method 1, perform the following steps:

1. Configure the Mendix MCP tool.

    In your Mendix application, make sure the microflow **RetrieveNumberOfTicketsInStatus** is exposed as an MCP tool through the MCP module. The tool must define the following:

    * **Tool name** - `RetrieveNumberOfTicketsInStatus`
    * **Input parameter** - `Status` of type `String`
    * **Description** - A description that helps the AI agent understand when to call this tool

    For more information on exposing microflows as MCP tools, see the [MCP module documentation](/agents/mcp/) on the Mendix documentation site.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-mcp-agent/mcp-agent1.png" class="no-border" alt="Mendix microflow exposed as an MCP tool, implementing conditional logic to return ticket counts by status." >}}

2. Create a Snowflake secret for basic authentication.

    Store the Mendix MCP server credentials in a Snowflake secret so that they are not hardcoded in your function.

    ```text
    CREATE OR REPLACE SECRET SNOWFLAKE_INTELLIGENCE.TOOLS.MENDIX_MCP_BASIC_SECRET
      TYPE = PASSWORD
      USERNAME = 'your-mendix-username'
      PASSWORD = 'your-mendix-password';
    ```

    Do not include actual credentials in shared documentation or version control. Use placeholder values and manage secrets through role-based access controls.

3. Create the external access integration.

    The Python function requires outbound access to the Mendix Cloud endpoint. Create an external access integration to allow this.

    ```text
    CREATE OR REPLACE EXTERNAL ACCESS INTEGRATION MENDIX_MCP_ACCP_INTEGRATION_WITHBASICAUTH
      ALLOWED_NETWORK_RULES = (<your-network-rule>)
      ALLOWED_AUTHENTICATION_SECRETS = (SNOWFLAKE_INTELLIGENCE.TOOLS.MENDIX_MCP_BASIC_SECRET)
      ENABLED = TRUE;
    ```

    Replace `<your-network-rule>` with a network rule that allows outbound access to your Mendix Cloud environment host.

4. Create the authenticated Python MCP function.

    Create the low-level Snowflake Python function that handles all communication with the Mendix MCP server. This function does the following:

    * Retrieves Basic Authentication credentials from the Snowflake secret.
    * Constructs the Authorization header.
    * Initializes the MCP session.
    * Sends the MCP tools/call request.
    * Parses both JSON and text or event-stream responses.
    * Returns the result as a `VARIANT`.

    ```text
    CREATE OR REPLACE FUNCTION SNOWFLAKE_INTELLIGENCE.TOOLS.CALL_MENDIX_MCP_ACCP_WITHBASICAUTH(
      "METHOD" VARCHAR,
      "PARAMS" VARCHAR
    )
    RETURNS VARIANT
    LANGUAGE PYTHON
    RUNTIME_VERSION = '3.11'
    PACKAGES = ('snowflake-snowpark-python', 'requests')
    HANDLER = 'call_mcp'
    EXTERNAL_ACCESS_INTEGRATIONS = (MENDIX_MCP_ACCP_INTEGRATION_WITHBASICAUTH)
    SECRETS = ('MENDIX_MCP_BASIC_SECRET' = SNOWFLAKE_INTELLIGENCE.TOOLS.MENDIX_MCP_BASIC_SECRET)
    AS '
    import requests
    import json
    import uuid
    import base64
    import _snowflake
    def get_basic_auth_header():
        creds = _snowflake.get_username_password("MENDIX_MCP_BASIC_SECRET")
        username = creds.username
        password = creds.password
        token = base64.b64encode(f"{username}:{password}".encode("utf-8")).decode("utf-8")
        return f"Basic {token}"
    def parse_response(response, request_id=None):
        content_type = response.headers.get("Content-Type", "")
        if "text/event-stream" in content_type or not response.text.strip().startswith("{"):
            result = None
            for line in response.text.splitlines():
                if line.startswith("data:"):
                    data_str = line[len("data:"):].strip()
                    if data_str:
                        try:
                            msg = json.loads(data_str)
                            if request_id and msg.get("id") == request_id:
                                result = msg
                            elif not request_id:
                                result = msg
                        except json.JSONDecodeError:
                            pass
            return result if result else {"raw_sse": response.text}
        else:
            return response.json()
    def call_mcp(method, params):
        base_url = "https://<your-mendix-app>.apps.<region>.mendixcloud.com/MendixMCP/mcp"
        session = requests.Session()
        headers = {
            "Content-Type": "application/json",
            "Accept": "application/json, text/event-stream",
            "MCP-Protocol-Version": "2025-03-26",
            "Authorization": get_basic_auth_header()
        }
        init_id = str(uuid.uuid4())
        init_payload = {
            "jsonrpc": "2.0",
            "id": init_id,
            "method": "initialize",
            "params": {"protocolVersion": "2025-03-26", "capabilities": {}}
        }
        init_resp = session.post(base_url, json=init_payload, headers=headers, timeout=30)
        init_resp.raise_for_status()
        init_result = parse_response(init_resp, init_id)
        session_id = init_resp.headers.get("Mcp-Session-Id", "")
        if session_id:
            headers["Mcp-Session-Id"] = session_id
        notif_payload = {
            "jsonrpc": "2.0",
            "method": "notifications/initialized",
            "params": {}
        }
        session.post(base_url, json=notif_payload, headers=headers, timeout=30)
        if method == "initialize":
            return init_result
        if params and params.strip():
            params_obj = json.loads(params)
        else:
            params_obj = {}
        request_id = str(uuid.uuid4())
        payload = {
            "jsonrpc": "2.0",
            "id": request_id,
            "method": method,
            "params": params_obj
        }
        response = session.post(base_url, json=payload, headers=headers, timeout=60)
        response.raise_for_status()
        return parse_response(response, request_id)
    ';
    ```

    Replace `<your-mendix-app>` and `<region>` with the actual hostname of your deployed Mendix Cloud environment.

5. Create the SQL wrapper function.

    Create a business-specific SQL wrapper function that the Cortex Agent will call. This function accepts the STATUS input, constructs the MCP tools/call payload, and delegates execution to the Python function created in the previous step.

    ```text
    CREATE OR REPLACE FUNCTION SNOWFLAKE_INTELLIGENCE.TOOLS.CALL_MENDIX_MCP_ACCP_WITHBASICAUTH_RETRIEVE_NR_TICKETS(
      "STATUS" VARCHAR
    )
    RETURNS VARIANT
    LANGUAGE SQL
    AS '
      SELECT SNOWFLAKE_INTELLIGENCE.TOOLS.CALL_MENDIX_MCP_ACCP_WITHBASICAUTH(
        ''tools/call'',
        TO_VARCHAR(
          OBJECT_CONSTRUCT(
            ''name'', ''RetrieveNumberOfTicketsInStatus'',
            ''arguments'', OBJECT_CONSTRUCT(''Status'', STATUS)
          )
        )
      )
    ';
    ```

    This abstraction keeps MCP-specific request construction hidden from the Cortex Agent and exposes a clean, business-oriented function signature.

6. Configure the Cortex Agent custom tool.

    In Snowflake, create or open a Cortex Agent and add a custom tool that references the wrapper function `CALL_MENDIX_MCP_ACCP_WITHBASICAUTH_RETRIEVE_NR_TICKETS(VARCHAR)`.

    In the tool description, specify the following:

    * What the tool does
    * When the agent should use it
    * Which values are supported for the Status argument: **Open**, **In Progress**, **Closed**

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-mcp-agent/mcp-agent2.png" class="no-border" alt="Snowflake Cortex Agent configured with a custom tool that invokes the SQL wrapper function." >}}

7. Test the integration.

    You can test the wrapper function directly in Snowflake before using it through the agent.

    ```text
    SELECT SNOWFLAKE_INTELLIGENCE.TOOLS.CALL_MENDIX_MCP_ACCP_WITHBASICAUTH_RETRIEVE_NR_TICKETS('Open');
    SELECT SNOWFLAKE_INTELLIGENCE.TOOLS.CALL_MENDIX_MCP_ACCP_WITHBASICAUTH_RETRIEVE_NR_TICKETS('Closed');
    SELECT SNOWFLAKE_INTELLIGENCE.TOOLS.CALL_MENDIX_MCP_ACCP_WITHBASICAUTH_RETRIEVE_NR_TICKETS('In Progress');
    ```

    A successful response returns a VARIANT value containing the JSON-RPC result from the Mendix MCP server.

## Method 2 - Connecting the Cortex Agent Directly to the Mendix MCP Server {#method-2}

In this method, the Cortex Agent connects to the Mendix MCP server through a Snowflake external MCP server and API integration. The Cortex Agent uses the MCP connector directly, without requiring custom Snowflake functions for request construction or authentication.

Authentication is handled through OAuth 2.0, using an identity provider such as Microsoft Entra ID.

This method requires less custom code in Snowflake and makes the Mendix MCP server available as a named connector in the agent configuration.

### When to Use Method 2

Use this method when you want to:

* Connect the Cortex Agent to the MCP server more directly.
* Reduce the amount of custom Snowflake function code.
* Rely on Snowflake MCP connector support.
* Manage authentication through OAuth 2.0 integration settings.

### Architecture

The following describes the request flow for Method 2:

```text
The user sends a prompt to the Snowflake Cortex Agent, for example: How many tickets are open?
The Cortex Agent interprets the prompt and determines that the MCP connector should be used to fulfill the request.
Snowflake routes the request through the configured external MCP server to the Mendix MCP endpoint.
The Snowflake API integration handles OAuth 2.0 authentication, obtaining and attaching the required access token to the request.
The Mendix MCP server receives the authenticated request and identifies the tool to invoke based on the MCP tools/call payload.
The Mendix MCP server invokes the RetrieveNumberOfTicketsInStatus microflow with the provided status value.
The microflow executes the business logic and returns the ticket count to the MCP server.
The MCP server returns the result through the Snowflake MCP connector to the Cortex Agent.
The Cortex Agent presents the result to the user.
```

### Configuring Method 2

To configure your app for method 2, perform the following steps:

1. Register an OAuth 2.0 client in your identity provider.

    Before creating the Snowflake API integration, register an OAuth 2.0 client application in your identity provider (for example, Microsoft Entra ID). Note the following values, which you will need in the next step:

    * Client ID
    * Client secret
    * Token endpoint
    * Authorization endpoint
    * API scope

    Keep your client secret confidential. Do not include it in shared documentation, code, or version control systems.

2. Create a Snowflake API integration to configure OAuth 2.0 access to the Mendix MCP endpoint:

    ```text
    USE ROLE ACCOUNTADMIN;
    CREATE API INTEGRATION custom_mcp_api_integration
      API_PROVIDER = external_mcp
      API_ALLOWED_PREFIXES = ('https://<your-mendix-app>.apps.<region>.mendixcloud.com/MendixMCP/mcp')
      API_USER_AUTHENTICATION = (
        TYPE = OAUTH2
        OAUTH_CLIENT_ID = 'your-client-id'
        OAUTH_CLIENT_SECRET = 'your-client-secret'
        OAUTH_TOKEN_ENDPOINT = 'https://login.microsoftonline.com/<your-tenant-id>/oauth2/v2.0/token'
        OAUTH_CLIENT_AUTH_METHOD = CLIENT_SECRET_BASIC
        OAUTH_AUTHORIZATION_ENDPOINT = 'https://login.microsoftonline.com/<your-tenant-id>/oauth2/v2.0/authorize'
        OAUTH_ALLOWED_SCOPES = ('your-api-scope')
        OAUTH_REFRESH_TOKEN_VALIDITY = 86400
      )
      ENABLED = TRUE;

    Replace the following placeholders with your environment-specific values:

    | Placeholder | Description |
    | --- | --- |
    | `<your-mendix-app>` | The subdomain of your Mendix Cloud environment |
    | `<region>` | The Mendix Cloud region (for example, `eu-1c`) |
    | `your-client-id` | The OAuth 2.0 client ID from your identity provider |
    | `your-client-secret` | The OAuth 2.0 client secret from your identity provider |
    | `<your-tenant-id>` | The tenant ID of your Microsoft Entra ID directory |
    | `your-api-scope` | The API scope registered for the Mendix MCP application |

    The `OAUTH_REFRESH_TOKEN_VALIDITY` value is set in seconds. The example value of `86400` equals 24 hours.

3. After creating the API integration, create the external MCP server in Snowflake. 

    This makes the Mendix MCP endpoint available as a named connector that can be attached to a Cortex Agent.

    ```text
    USE ROLE ACCOUNTADMIN;
    CREATE EXTERNAL MCP SERVER mendix_mcp_server
      WITH DISPLAY_NAME = 'Mendix MCP server'
      URL = 'https://<your-mendix-app>.apps.<region>.mendixcloud.com/MendixMCP/mcp'
      API_INTEGRATION = custom_mcp_api_integration;
    ```

4. Add the Mendix MCP server as a connector to a Cortex Agent, by performing the following steps:

    1. In Snowflake, navigate to **AI & ML > Cortex Agents**.
    2. Create a new agent or open an existing agent.
    3. In the agent configuration page, locate the **MCP Connectors** section.
    4. Click **Add MCP** server.
    5. Select the Mendix MCP server from the list of available external MCP servers.
    6. Save the agent configuration.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-mcp-agent/mcp-agent3.png" class="no-border" alt="Cortex Agent overview page showing the MCP Connectors section with the Mendix MCP server configured." >}}

5. Connect and test the MCP connector.

    When using the agent for the first time, you may be prompted to authorize the OAuth connection. To test the integration, perform the following steps:

    1. Open the agent preview or runtime chat view.
    2. In the **MCP Connectors** panel, click **Connect** next to Mendix MCP server.
    3. Complete the OAuth authorization flow if prompted.
    4. Ask a question that should trigger the Mendix tool, for example, *How many tickets are open?*

    The agent should invoke the `RetrieveNumberOfTicketsInStatus` tool through the MCP connector and return the result.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-mcp-agent/mcp-agent4.png" class="no-border" alt="Cortex Agent runtime view showing the Mendix MCP server connector with the Connect option." >}}

## Security Considerations

The following sections outline some security considerations and best practices, depending on the method you use.

### Both Methods

* Do not include actual credentials, client secrets, or tenant-specific values in shared code or documentation.
* Apply the principle of least privilege when assigning roles to integrations and functions.
* Validate which microflows are exposed as MCP tools in your Mendix app and ensure only intended tools are accessible.
* Ensure that only the required Mendix Cloud endpoints are reachable from Snowflake.

### Method 1

* Store Basic Authentication credentials in a Snowflake secret and reference the secret in the function definition using the SECRETS clause.
* Restrict access to both the secret and the Python function using role-based access controls.

### Method 2

* Protect your OAuth 2.0 client secret and rotate it according to your organization's security policy.
* Verify that the token endpoint, authorization endpoint, and scope are correctly configured in both Snowflake and your identity provider.
* Ensure the OAuth application in your identity provider is configured to allow only the required grant flows.

## Troubleshooting

If you encounter any issues, use the following troubleshooting tips to help you solve them.

### Method 1

#### Python Function Cannot Reach Endpoint

The Python function cannot reach the Mendix endpoint.

##### Solution

Verify that the external access integration is correctly configured and that the network rule allows outbound access to the Mendix Cloud host.

#### Basic Authentication Failure

Basic authentication fails.

##### Solution

Check the following:

* The Snowflake secret exists and contains the correct username and password.
* The function definition references the correct secret name in the `SECRETS` clause.
* The Mendix MCP server is configured to accept basic authentication.

#### Unexpected Wrapper Function Result

The wrapper function returns an unexpected result.

##### Solution

Verify that the tool name `RetrieveNumberOfTicketsInStatus` and the argument name `Status` in the SQL wrapper function exactly match the tool definition in your Mendix app.

#### Unexpected Status Value Causes an Error

The Mendix microflow throws an exception for unsupported values.

##### Solution

Ensure the Cortex Agent tool description clearly states the supported values (**Open**, **Closed**, **In Progress**) so the agent does not pass invalid input.

### Method 2

#### No MCP Server in Agent Configuration

The external MCP server does not appear in the agent configuration.

##### Solution

Verify that the external MCP server was created successfully and that your Snowflake role has the required permissions to view and use it.

#### OAuth Authentication Failure

OAuth authentication fails.

##### Solution

Check the following:

* The client ID and client secret are correct.
* The tenant ID matches your identity provider directory.
* The token endpoint and authorization endpoint URLs are correct.
* The configured scope matches the API registration in your identity provider.
* The identity provider allows the required OAuth grant flow for this client.

#### Tool Not Invoked

The agent does not invoke the expected tool.

##### Solution

Verify that the Mendix MCP server exposes the tool correctly and that the MCP connector is in a connected state in the agent session. If the connector shows as disconnected, click **Connect** and complete the authorization flow.
