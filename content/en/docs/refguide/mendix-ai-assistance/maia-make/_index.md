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
Maia Make capabilities are grouped into a conversational interface, which is available in Studio Pro 11.8 and above.

To use this interface and Maia Make capabilities, an internet connection and signing in to Studio Pro are required.
{{% /alert %}}

Maia Make is a set of AI-assisted development capabilities in Studio Pro that are available through a unified conversational interface. Describe your requirements in natural language, and Maia generates development artifacts such as data structures, pages, and microflows. 

You can also ask Maia to provide explanations of your existing documents, such as microflows, workflows, and pages. Moreover, this interface allows you to integrate with external tools, such as Playwright and Figma, via MCP Servers, and it supports story-based development by generating app artifacts based on existing user stories.

The key Maia Make capabilities are as follows:

* Conversational assistance for general Mendix development queries
* Explanations of documents to clarify existing implementation details
* Generation of documents from natural language descriptions, such as domain model, pages, and microflows
* Integration with external tools, such as Playwright and Figma, via compatible MCP Servers
* Story-based development to help realize existing user stories
* Support for PDF and image inputs to help Maia better understand your requirements
* Adding relevant documents, such as microflows and pages, to the interface to give Maia a more desired context
* Editing existing documents, including renaming elements inside of documents such as entities, attributes, and microflow parameters
* Removing elements from documents, enabling more advanced refactoring (in Studio Pro 11.9 and above)
* Undoing changes generated on a per-document basis (in Studio Pro 11.9 and above)

{{% alert color="info" %}}
Support for workflows, view entities, enumerations, constants, modules, Java actions, and JavaScript actions was introduced in Studio Pro 11.9. In this version, Java actions are read-only; they can be used in microflows and explained. JavaScript actions can only be explained.

Starting with Studio Pro 11.10, Maia can generate JavaScript actions, add parameters to existing ones, and create or update the JavaScript file associated with a JavaScript action.
{{% /alert %}}

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

#### Support for Folder Structure

In Studio Pro 11.10 and above, Maia understands and leverages the existing folder structure within your Mendix applications for all documents except for pages. This enables Maia to:

* Organize documents into folders: When creating new documents, Maia can place them directly into relevant folders, respecting your project's organization.
* Follow existing folder structures: Maia works within your established folder hierarchy, making it easier to maintain consistency.
* Adhere to Mendix best practices: Maia can help organize documents according to the standard Mendix best practices for folder structure. For detailed guidance on optimal organization of folders, refer to the [Folder Structure](/refguide/naming-convention-best-practices/#folder-structure) section in *Naming Convention Best Practices*.

For more information on how each Maia Make capability work, refer to the following documents:

* [Maia Chat](/refguide/maia-chat/)
* [Maia Explain](/refguide/maia-explain/)
* [Maia for Domain Model](/refguide/maia-for-domain-model/)
* [Maia for Pages](/refguide/maia-for-pages/)
* [Maia for Microflows](/refguide/maia-for-microflows/)
* [Maia for Workflows](/refguide/maia-for-workflows/) (in Studio Pro 11.9 and above)
* [Maia for OQL](/refguide/maia-for-oql/) (in Studio Pro 11.9 and above)
* [Maia MCP Client](/refguide/maia-mcp/)
* [Studio Pro MCP Server](/refguide/studio-pro-mcp-server/)
* [Maia Web Fetch](/refguide/maia-web-fetch/)

In Studio Pro 11.8 and above, most of the features described in the documents above are available only through the chat interface. There are no separate entry points to these features in their respective editors. [Maia Explain](/refguide/maia-explain/) is an exception. You can still access this feature by right-clicking the documents (for example, microflows or pages) in the **App Explorer** and the **Maia Explain** option is in the context menu.

## Read More

* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
