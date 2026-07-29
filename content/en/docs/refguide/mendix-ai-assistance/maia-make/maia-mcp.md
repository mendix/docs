---
title: "Maia MCP Client"
linktitle: "MCP Client"
url: /refguide/maia-mcp/
weight: 80
description: "Describes the features in Maia MCP Client."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

{{% alert color="info" %}}
This feature was released as part of [Maia Make](/refguide/maia-make/) capabilities in Studio Pro 11.8. 

To use Maia MCP Client, an internet connection and signing in to Studio Pro are required.
{{% /alert %}}

Maia MCP Client, available from Studio Pro 11.8, helps you connect Maia to external [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) servers. Once connected, Maia can call tools provided by these servers during chat — for example, querying an external API, looking up design assets, or interacting with third-party services. You can find available MCP servers on the [MCP servers directory](https://modelcontextprotocol.io/examples). 

For information on the current limitations, see the [Limitations](#limitations) section below.

## Using MCP Client {#using-mcp-client}

There are two ways to open the MCP Client panel:

* Click the **Configure MCP Connections** ({{% icon name="plug" %}}) icon under the **Maia Chat** tab.
* Go to the **View** menu and click **MCP Settings**.

### Preset Servers {#preset-servers}

Preset MCP servers allow you connect to common services without entering URLs or credentials.

#### Mendix Marketplace {#mendix-marketplace-preset}

Studio Pro adds the **Mendix Marketplace** connection automatically when you open the MCP Client panel. It authenticates with your Mendix ID, so no extra credentials are needed. Marketplace tools are disabled by default; enable the ones you need from the expanded card.

Mendix manages this connection. You cannot remove it, but you can enable or disable it using the checkbox on the **Mendix Marketplace** card.

#### Preset Catalog {#preset-catalog}

Click **Add MCP Server** to open the catalog alongside the manual entry form. Each preset appears as a tile. Click a tile to select it. Studio Pro sets the URL, connection type, and authentication type automatically. Only the server name remains editable.

* For OAuth presets: click **Authenticate** to authorize in your browser, then click **OK** to save
* For bearer token presets: enter your token, then click **OK**

Tools from new preset connections are disabled by default. Enable the tools you need from the expanded connection card.

### Adding an MCP Server {#adding-server}

To add a server, click **+ Add MCP Server**, fill in the following fields, and click **OK**:

* **Server Name** — A display name. Must be unique among your configured servers.
* **URL** — The server endpoint. Must use `https://` or `http://`.
* **Connection type** — **HTTP (Streamable)** for most servers, or **SSE (Legacy)** for older servers that use Server-Sent Events instead of Streamable HTTP.
* **Authentication** — See the [Authentication](#authentication) section below.

#### Authentication {#authentication}

Choose how Studio Pro authenticates with the MCP server:

* **No Auth** — select this for servers that do not require credentials.
* **Bearer Token** — paste an API token or personal access token. The token is stored securely and is not exposed after entry.
* **Mendix Identity** — authenticates using the Mendix account you are already signed in to Studio Pro with. No extra credentials are needed. Use this option when connecting to MCP services provided by Mendix.
* **OAuth 2.1** — a browser window opens so you can authorize Studio Pro with the server's provider. Two optional fields appear:
    * **Client ID** — required if the server does not support automatic client registration.
    * **Client Secret** — required by some providers (for example, GitHub).

Most major providers — including GitHub and Figma — do not support automatic client registration. For these, you must first create an OAuth application in the provider's developer portal and then enter the **Client ID** (and **Client Secret** if required).

##### Example: Connecting to GitHub Copilot MCP {#github-example}

1. Go to [GitHub Developer Settings](https://github.com/settings/developers) and click **New OAuth App**.
2. Fill in the following information:
    * **Application name** — for example, `Mendix Studio Pro`
    * **Homepage URL** — for example, `https://mendix.com`
    * **Authorization callback URL** — `http://localhost:44380/mcp/oauth/callback` (GitHub allows only one; see [Callback URL](#callback-url))
3. Click **Register application**, then copy the **Client ID**.
4. Click **Generate a new client secret** and copy it — GitHub shows it only once.
5. In Studio Pro, add a server with the following details:
    * **URL** — `https://api.githubcopilot.com/mcp/`
    * **Authentication** — **OAuth 2.1**
    * **Client ID** and **Client Secret** — from the steps above
6. Click **Add**, authorize in the browser, and the connection completes.

{{% alert color="info" %}}
For Figma MCP, the simplest option is to generate a personal access token in Figma and use **Bearer Token** authentication. If you need OAuth, register an app at [Figma Developers](https://www.figma.com/developers), add the callback URL, and request the `mcp:connect` scope.
{{% /alert %}}

##### Callback URL {#callback-url}

The OAuth callback URL format is `http://localhost:{port}/mcp/oauth/callback`. Studio Pro uses a fixed port from the range **44380–44384**, one port per running Studio Pro instance, starting from 44380.

When registering an OAuth app with a provider, enter all five callback URLs if the provider allows multiple:

* `http://localhost:44380/mcp/oauth/callback`
* `http://localhost:44381/mcp/oauth/callback`
* `http://localhost:44382/mcp/oauth/callback`
* `http://localhost:44383/mcp/oauth/callback`
* `http://localhost:44384/mcp/oauth/callback`

If the provider allows only one callback URL, use `http://localhost:44380/mcp/oauth/callback`. Studio Pro always tries port 44380 first.

{{% alert color="info" %}}
If all ports in the range 44380–44384 are occupied (for example, when multiple Studio Pro instances are open), Studio Pro shows an error. Close another instance or free a port and try connecting again.
{{% /alert %}}

Use `--mcp-oauth-ports` to override the port range (for example, `--mcp-oauth-ports=44380-44384` or `--mcp-oauth-ports=44380,39321`).

{{% alert color="warning" %}}
Some servers validate the callback URL against the [OAuth Client ID Metadata Document (SEP-991)](https://modelcontextprotocol.io/seps/991-enable-url-based-client-registration-using-oauth-c). For these servers, custom ports are always rejected; the metadata document is hosted by Mendix and lists only ports 44380–44384 as valid callback URLs. Custom ports only work with servers that do not enforce this validation, such as internal or self-hosted servers.
{{% /alert %}}

### Managing Connections {#managing-connections}

Each server appears as a card in the MCP Client panel:

* **Enable or disable** a server using the checkbox. Disabling a server disconnects it and removes its tools from Maia.
* **Expand** the card to see its tools.
* **Remove** a server from the expanded view.

#### Connection Status {#connection-status}

| Color | Meaning |
| --- | --- |
| Green | Connected, tools available. |
| Orange | Connecting, authenticating, or disconnecting. |
| Blue | Loading tools from the server. |
| Red | Error. Check the error message for details. |
| Grey | Disconnected or disabled. |

If a connection drops, Studio Pro reconnects automatically. During reconnection, the status shows the retry progress (for example, **Retrying (2/5)...**). If all retries fail, disable and re-enable the server to try again.

### Managing Tools {#managing-tools}

After connecting, the server's tools appear in the expanded card. Each tool shows a name and description from the server.

Tools from a new server are **disabled by default**. Select a tool's checkbox to enable it. Use the **select all** checkbox to enable or disable all tools at once. Only enabled tools are available to Maia.

### How Maia Uses MCP Tools {#using-tools}

During chat, Maia considers all enabled MCP tools alongside its built-in capabilities. When Maia calls a tool:

1. The chat shows **Executing {tool} from {server}...** with a spinner.
2. The tool runs on the MCP server and returns a result.
3. Maia uses the result to formulate its answer.

You see the answer from Maia, not the raw tool output.

## Troubleshooting {#troubleshooting}

| Problem | Solution |
| --- | --- |
| "This server requires manual OAuth client registration" | Register an OAuth app with the provider and enter the Client ID. See the [GitHub example](#github-example) given above. |
| "Token exchange failed" or "incorrect_client_credentials" | Verify your Client ID and Client Secret. Check that the callback URL matches. |
| Authentication stuck in "Authenticating..." | Check that no firewall blocks localhost. Remove the server and add it again to restart the flow. |
| Connection fails immediately | Verify the URL. Try switching between **HTTP (Streamable)** and **SSE (Legacy)**. |
| "All OAuth callback ports are in use" | Close another Studio Pro instance to free a port in range 44380–44384, then try connecting again. |

## Limitations {#limitations}

Maia MCP Client has the following limitations:

* Only MCP tools are supported. Other MCP capabilities, such as resources and prompts, are not available.
* Only remote servers (HTTP or SSE) are supported. Local stdio servers are not supported.
* Tools from new servers are disabled by default.
* OAuth requires localhost access for the [callback URL](#callback-url).
* Server configurations are stored per project and are not shared across projects.

## Read More

* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Maia Chat](/refguide/maia-chat/)
