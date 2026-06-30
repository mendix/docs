---
title: "Maia Make Capabilities"
url: /refguide/maia-make/
weight: 4
description: "Describes Maia Make capabilities in Mendix Studio Pro."
description_list: true
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction 

{{% alert color="info" %}}
Maia Make capabilities are available in Studio Pro 11.8 and above.

To use Maia Make capabilities, an internet connection and signing in to Studio Pro are required.
{{% /alert %}}

Maia Make is a set of AI-assisted development capabilities in Studio Pro that are available through a unified conversational interface. Describe your requirements in natural language, and Maia generates development artifacts such as data structures, pages, and microflows. 

You can also ask Maia to provide explanations of your existing documents, such as microflows, workflows, and pages. Moreover, this interface allows you to integrate with external tools, such as Playwright and Figma, via MCP Servers, and it supports story-based development by generating app artifacts based on existing user stories.

## Maia Make Capabilities Overview

### Supported Document Types

Maia Make can generate new documents, modify existing documents, and explain app documents and structures through a unified conversational interface. The following table lists all document types that Maia Make can work with and the Studio Pro version in which support for each document type was introduced:

| Document Type | Available in Maia Make from | Remarks |
| --- | --- | --- |
| [Domain model](/refguide/maia-for-domain-model/) | Studio Pro 11.8 | |
| [Pages](/refguide/maia-for-pages/) | Studio Pro 11.8 | |
| [Microflows](/refguide/maia-for-microflows/) | Studio Pro 11.8 | |
| [Workflows](/refguide/maia-for-workflows/) | Studio Pro 11.9 | |
| [OQL](/refguide/maia-for-oql/) | Studio Pro 11.9 | |
| View entities | Studio Pro 11.9 | |
| Enumerations | Studio Pro 11.9 | |
| Constants | Studio Pro 11.9 | |
| Modules | Studio Pro 11.9 | |
| Java actions | Studio Pro 11.9 | Read-only; Java actions cannot be generated. |
| JavaScript actions | Studio Pro 11.9 | Explain-only in Studio Pro 11.9. Generation, adding parameters, and updating the associated JavaScript file available from Studio Pro 11.10. |
| Navigation | Studio Pro 11.11 | |
| Menu | Studio Pro 11.11 | |
| Data Transformers | Studio Pro 11.12 | |

### Maia Make Standalone Capabilities

The following table lists Maia Make Standalone Capabilities and the Studio Pro version in which each capability was introduced:

| Capability | Description | Available in Maia Make from | Remarks |
| --- | --- | --- | --- |
| [Maia Chat](/refguide/maia-chat/) | Answers questions about all aspects of Mendix development. | Studio Pro 11.8 | |
| [Maia Explain](/refguide/maia-explain/) | Explains the purpose and logic of existing documents. | Studio Pro 11.8 | |
| [Maia MCP Client](/refguide/maia-mcp/) | Connects Maia to external MCP servers, giving it access to third-party tools. | Studio Pro 11.8 | |
| [Studio Pro MCP Server](/refguide/studio-pro-mcp-server/) | Exposes Studio Pro as an MCP server for use by external AI tools. | Studio Pro 11.10 | |
| [Maia Web Fetch](/refguide/maia-web-fetch/) | Fetches and reads content from public websites and APIs. | Studio Pro 11.10 | |
| [Maia Agent Skills](/refguide/maia-agent-skills/) | Extends Maia with reusable knowledge. | Studio Pro 11.11 | |
| [Maia Agent Instructions](/refguide/maia-instructions/) | Extends Maia with instructions to be followed with every prompt | Studio Pro 11.12 | |


### Maia Make General Capabilities

The following table lists the general capabilities of Maia Make and the Studio Pro version in which support for each capability was introduced:

| Capability | Description | Available in Maia Make from | Remarks |
| --- | --- | --- | --- |
| Story-based development | Generates app artifacts based on existing user stories to support story-driven development workflows. | Studio Pro 11.8 | |
| PDF/image support | Allows you to provide PDFs and images as input to help Maia better understand your requirements. | Studio Pro 11.8 | |
| Adding documents as context | Lets you add relevant documents, to provide Maia with additional context. | Studio Pro 11.8 | |
| Editing existing documents | Enables Maia to modify existing documents, including renaming elements. | Studio Pro 11.8 | |
| Removing elements | Allows Maia to remove elements from documents to support more advanced refactoring tasks. | Studio Pro 11.9 | |
| Undo support | Allows you to undo Maia-generated changes on a per-document basis. | Studio Pro 11.9 | |
| Folder structure support | Organizes new documents into existing folders and follows your established folder hierarchy when generating content. | Studio Pro 11.10 | Not supported for pages. |
| Themes and styling | Allows Maia to modify theme variables, create custom styling, and manage design properties. | Studio Pro 11.12 | |
| Markdown attachment support | Allows you to provide Markdown documents as input to help Maia better understand your requirements. | Studio Pro 11.12 | |

## Using Maia Make Capabilities

Maia Make capabilities are enabled by default. You can disable them in Studio Pro **Preferences**, via the **Maia** tab.

To access the conversational interface and Maia Make capabilities, in the upper-right corner of Studio Pro, click the **Maia** pane. It appears under the **Chat** tab:

{{< figure src="/attachments/refguide/mendix-ai-assistance/maia-make/maia-make-interface.png" max-width=40% alt="Maia Make interface" >}}

Alternatively, you can also click **View** at the Studio Pro top bar and select **Maia** to open the interface.

{{% alert color="info" %}}
In Studio Pro 11.7 and below, the **Chat** tab is only used for [Maia Chat](/refguide/maia-chat/) where you can ask questions about all aspects of Mendix.

There is also the **Learn** tab under the **Maia** pane. It is a separate Maia capability that is not part of Maia Make capabilities. For more information, see [Maia Learn](/refguide/maia-learn/).
{{% /alert %}}

{{% alert color="warning" %}}
The Maia ({{% icon name="sparkles" %}} ) icon on the right side of the top bar does not work in Studio Pro 11.8.
{{% /alert %}}

### Maia Make Capabilities Interface Overview

The conversational interface includes the following options:

* **New chat** - It allows you to clear the messages and start a new conversation which does not reference your current chat.
* **Configure MCP Connections** ({{% icon name="plug" %}} icon) - It allows you to connect external [MCP](https://modelcontextprotocol.io/introduction) servers to Maia, giving it access to third-party tools during chat. For more information on how to configure MCP connections, see [Maia MCP Client](/refguide/maia-mcp/).
* **{{% icon name="paperclip" %}} Add** (Image, Story, PDF) - With this option, you can attach images, PDFs, or user stories to help Maia understand your requirements better.
* **Add file to Maia Chat** (@ icon) - It allows you to add certain logic or pages to Maia as context. You can also access this option by right-clicking the documents (microflows or pages) in the **App Explorer** and it appears in the context menu.

## Configuring a Custom AI Provider {#custom-provider}

By default, Maia uses the Mendix platform's AI service. You can configure Maia to use your own LLM provider instead (also known as bring your own LLM or BYO LLM).

{{% alert color="info" %}}
Configuring a custom AI provider is available in Studio Pro 11.12 and above as a beta feature.
{{% /alert %}}

To enable custom LLM provider configuration, follow these steps:

1. Open the Studio Pro settings.
2. In the **Preferences** dialog box that opens, go to the **New Features** tab.
3. Select the **Enable configuring a custom AI provider for Maia** checkbox, then click **OK**.

After enabling this feature, a **Settings** ({{% icon name="cog" %}}) icon appears in the upper-right corner of the Maia pane.

### Provider Configuration {#provider-configuration}

Custom AI provider settings are per-project and local to your workstation. Each app can have its own configuration, and settings are not committed to version control.

#### Mendix Platform {#mendix-platform}

The Mendix platform AI service is the default, recommended option and requires no configuration. Some Mendix platform optimizations may not be available if you use a custom LLM provider instead.

#### Amazon Bedrock {#amazon-bedrock}

To configure Amazon Bedrock as your LLM provider, follow these steps:

1. Click **Settings** ({{% icon name="cog" %}}) in the Maia pane.
2. Select **Amazon Bedrock** from the **LLM Provider** list.
3. Create an API key in AWS, then enter the **Base URL** and your **API Key**. Studio Pro stores the API key securely across sessions.
4. Enter the **Model ID**. You can find available model IDs in your AWS Bedrock console. Mendix recommends Claude Sonnet 4.6 for optimal Maia performance.
5. Click **Save Config**.

#### OpenAI Compatible {#openai-compatible}

To configure an OpenAI-compatible provider, follow these steps:

1. Click **Settings** ({{% icon name="cog" %}}) in the Maia pane.
2. Select **OpenAI Compatible** from the **LLM Provider** list.
3. Enter the **Base URL** for your API endpoint.
4. Enter the **Model ID**.
5. Optional: Enter your **API Key**. Studio Pro stores this key securely across sessions.
6. Click **Save Config**.

## Save a Maia Session {#save-maia-session}

A Maia session contains your conversation history and context, which can help analyze Maia's responses and behavior for troubleshooting or support purposes. To save a Maia session, go to **Help** > **Support Tools** > **Capture Maia Agent Session**.

In Studio Pro 11.9 - 11.11, this option is found at **Help** > **Support Tools** > **Dump Maia Agent Session**.

## Read More

* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
