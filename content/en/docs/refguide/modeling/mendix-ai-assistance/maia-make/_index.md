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

Maia Make is a set of AI-assisted development capabilities in Studio Pro that are available through a unified conversational interface. Describe your requirements in natural language, and Maia generates development artifacts such as data structures, overview pages, and microflows. 

You can also ask Maia to provide explanations of your existing logic and pages. Moreover, this interface allows you to integrate with external tools via MCP Servers (Playwright, Figma, and others) and it supports story-based development by generating app artifacts based on existing user stories.

The key Maia Make capabilities are as follows:

* Conversational assistance for general Mendix development queries
* Logic and page explanations to clarify existing implementation details
* Domain model generation from natural language descriptions
* Overview page generation from natural language descriptions
* Microflow generation including XPath constraints and expressions
* External tool integration via compatible MCP Servers (such as Playwright, Figma)
* Story-based development to help realize existing user stories
* PDF and image support to help Maia understand your requirements better
* Add relevant logic and pages to the interface to give Maia a more desired context

## Using Maia Make Capabilities

Maia Make capabilities are enabled by default. You can disable them in Studio Pro **Preferences**, via the **Maia** tab.

To access the conversational interface and Maia Make capabilities, in the upper-right corner of Studio Pro, click the **Maia** pane. It appears under the **Chat** tab:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/maia-make/maia-make-interface.png" max-width=40% alt="Maia Make interface" >}}

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

For more information on how each Maia Make capability work, refer to the following documents:

* [Maia Chat](/refguide/maia-chat/)
* [Maia Explain](/refguide/maia-explain/)
* [Maia for Domain Model](/refguide/maia-for-domain-model/)
* [Maia for Pages](/refguide/maia-for-pages/)
* [Maia for Microflows](/refguide/maia-for-microflows/)
* [Maia MCP Client](/refguide/maia-mcp/)

In Studio Pro 11.8 and above, most of the features described in the documents above are available only through the chat interface. There are no separate entry points to these features in their respective editors. [Maia Explain](/refguide/maia-explain/) is an exception. You can still access this feature by right-clicking the documents (microflows or pages) in the **App Explorer** and the **Maia Explain** option is in the context menu.

## Read More

* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
