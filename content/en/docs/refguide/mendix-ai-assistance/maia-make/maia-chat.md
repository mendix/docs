---
title: "Maia Chat"
linktitle: "Chat"
url: /refguide/maia-chat/
weight: 5
description: "Describes how to use Maia Chat, the built-in AI chat interface in Studio Pro."
aliases:
    - /refguide/mendix-chat/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

{{% alert color="info" %}}
Maia Chat is also available in the Mendix Portal. For more information, refer to the [Maia Chat](/portal/maia/#maia-chat) section in *Maia in Mendix Portal*.
{{% /alert %}}

{{% alert color="info" %}}
To use Maia Chat, you need an internet connection and must be signed in to Studio Pro.
{{% /alert %}}

{{% alert color="info" %}}
Maia Chat does not use any project, customer, or company information. It only uses the data you enter in the chat to fulfill the request. Do not enter any personal or sensitive data.
{{% /alert %}}
 
Maia Chat is a built-in chat interface in the Mendix Platform powered by generative AI. You can ask questions about all aspects of Mendix, including how to apply concepts, best practices, governance tools, and development patterns. It is based on large language models (LLMs) using data from various resources. 

Maia Chat uses the following data sources:

* [Mendix Docs](/)
* [Mendix Community](https://community.mendix.com/)
* [Mendix Academy](https://academy.mendix.com/)
* [Mendix Blog](https://www.mendix.com/blog/)
* [Mendix Medium](https://medium.com/mendix)
* [Mendix Evaluation Guide](https://www.mendix.com/evaluation-guide/)
* [Mendix Support Knowledge Base](https://support.mendix.com/hc/en-us/p/knowledge-base) (in Studio Pro 11.10 and above)

## Using Maia Chat

### In Studio Pro 11.8 and Above

In Studio Pro 11.8 and above, Maia Chat is incorporated into the unified Maia Make capabilities, which are enabled by default. Maia Chat does not have a dedicated interface. For more information, see [Maia Make Capabilities](/refguide/maia-make/).

### In Studio Pro 11.7 and Below

In Studio Pro 11.7 and below, there are two ways to access Maia Chat in Studio Pro:

* Click the **Maia** ({{% icon name="sparkles" %}}) icon to the right of the top bar.
* Go to the **View** menu and click **Maia**.

The chat interface appears on the right side of Studio Pro under the **Maia** pane:

{{< figure src="/attachments/refguide/mendix-ai-assistance/maia-make/maia-chat/maia-chat-interface.png" alt="" width="250px">}}

You can start using Maia Chat by clicking one of the demo questions. Alternatively, you can ask your own question, and press <kbd>Enter</kbd> or click **Ask** to send the question. For information on the supported shortcut keys in Maia Chat, see the [Maia Chat Shortcut Keys](/refguide/keyboard-shortcuts/#maia-chat-shortcuts) section in *Keyboard Shortcuts*.

For tips on getting better responses, see the [Best Practices](/portal/maia/#best-practices) section in *Maia in Mendix Portal* or the [Text Input](/refguide/maia-make/#text-input) section of *Maia Make Capabilites*.

#### Giving Feedback {#feedback}

Mendix encourages you to provide feedback on Maia Chat answers to help improve the feature.

There are several ways to give feedback on the generated answer:

* Click the thumbs up icon ({{% icon name="thumbs-up" %}}) or the thumbs down icon ({{% icon name="thumbs-down" %}})
* To provide more detailed feedback, click the add feedback icon ({{% icon name="notes-paper-edit" %}}). A detailed **Feedback** section appears below the answer:

    {{< figure src="/attachments/refguide/mendix-ai-assistance/maia-make/maia-chat/feedback-section.png" alt="" width="250px" >}}
    
Click **Submit feedback** to send your feedback. Maia Chat then returns you to the main chat interface, where you can continue asking questions.

## Read More

The **Maia** pane also includes a **Learn** tab. For more information, see [Maia Learn](/refguide/maia-learn/).
