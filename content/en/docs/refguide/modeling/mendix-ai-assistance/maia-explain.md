---
title: "Maia Explain"
linktitle: "Explain"
url: /refguide/maia-explain/
weight: 10
description: "Describes the features in Maia Explain."
---

## Introduction 

{{% alert color="info" %}}
To use Maia Explain, an internet connection and signing in to Studio Pro are required.
{{% /alert %}}

Maia Explain helps you easily understand a microflow or a nanoflow. It explains the general purpose of the logic and highlights specific technical details to help you understand the logic further.

## Using Maia Explain

Maia Explain is enabled by default. If you want to disable this feature, go to **Edit** > **Preferences** > the **Maia** tab and clear the **Enable Maia Explain** checkbox.

There are two ways to launch Maia Explain:

* In the toolbar of the microflow or nanoflow editor, click **Explain**.
* In the App Explorer, right-click a microflow or a nanoflow to open its context menu, and click **Explain**.

A message is sent to Maia and a chat interface with an initial answer appears on the right side of Studio Pro under the **Maia** tab:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/maia-explain/maia-explain-interface.png" width="300px">}}

The initial answer consists of two parts: 

* **Explanation** - provides a high-level overview of the logic, including its overall purpose
* **Technical Highlights** - highlights the technical and functional details of the logic, including any input parameters and return value, if available 

Maia Explain supports follow-up questions. You can modify the tone of the answer, request further clarification, or ask for suggestions to improve the logic. Below are examples of what you could type as follow-up questions or requests:

* *Explain again, but in 10 words.*
* *Explain again, but in much greater detail. Be very thorough.*
* *What are your suggestions to improve this microflow?"*

{{% alert color="info" %}}
In this dedicated chat, only requests related to Maia Explain will be properly handled. If you have other questions, close this chat and go back to the general [Maia Chat](/refguide/maia-chat/) interface.
{{% /alert %}}

## Read More

* [Maia Chat](/refguide/maia-chat/)
