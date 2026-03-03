---
title: "Maia in Mendix Portal"
url: /portal/maia/
description: "Provides information on Maia options in Mendix Portal."
weight: 4
aliases:
    - /maia-mx-portal/
---

## Introduction

Mendix AI Assistance (Maia) refers to Mendix Platform capabilities that leverage [artificial intelligence (AI)](https://www.mendix.com/glossary/artificial-intelligence-ai/) and [machine learning (ML)](https://www.mendix.com/glossary/machine-learning/) to assist developers in application development. Maia is designed to help development teams in modeling and delivering Mendix applications faster, more consistently, and with higher quality.

{{< figure src="/attachments/developerportal/global-nav/maia-mendix-portal.jpg" width="500" >}}

## Maia Capabilities in Mendix Portal

These are the tasks you can achieve with Maia in Mendix Portal:

* **Maia Chat** — A built-in chat interface. For more information, refer to [Maia Chat](#maia-chat).
* **Maia Rewrite** — An AI-assisted writing aid integrated within the Mendix Community posting interface, which helps you ask properly formatted questions that are more likely to be answered. For more information on how to use it, refer to the [Asking Your Question](/community-tools/mendix-community/#asking-question) section in *Mendix Community*.
* **Maia Summarize** — An AI-assisted summarizing aid which condenses lengthy discussions for a question posted on Mendix Community into key points, making it easier for you to find solutions to your questions without having to plough through every single answer in the thread. For more information on how to use it, refer to the [Question Details](/community-tools/mendix-community/#question-details) section in *Mendix Community*.
* **Create Story with Maia** — An AI-assisted tool that helps you easily create stories. This option is available in the following places:

    * On the [Board](/developerportal/project-management/epics/board/) page
    * On the [Planning](/developerportal/project-management/epics/planning/) page
    * On the [Feedback](/developerportal/app-insights/feedback/#create-with-maia) page

* **Refine Story with Maia** — An AI-assisted tool that allows you to refine a previously created story with the help of Maia. This option is available for stories in the following places:

    * On the [Board](/developerportal/project-management/epics/board/) page
    * On the [Planning](/developerportal/project-management/epics/planning/) page

* **Maia for Feedback** – An AI-assisted tools that help you organize unsorted feedback into groups and themes. This is available on the [Feedback](/developerportal/app-insights/feedback/#organizing-feedback-with-maia) page.

## Maia Chat {#maia-chat}

{{% alert color="info" %}}
To use Maia Chat, you need to be signed in to Mendix and have an internet connection.
{{% /alert %}}

{{% alert color="info" %}}
Maia Chat does not use any project, customer, or company information. It only uses the data that you have entered in the Chat. Please do not enter any personal or sensitive data!
{{% /alert %}}

Maia Chat is a built-in chat interface in the Mendix Platform powered by Generative AI. Developers can ask questions about all aspects of Mendix, including how to apply concepts, best practices, governance tools, and development patterns.

Maia Chat is also available in Studio Pro 10.12.0 and above. See [Maia Chat](/refguide/maia-chat/) for more information.

For information on Mendix data storage policies and practices for Maia, see [Maia Privacy Policy](https://www.mendix.com/legal/privacy/maia/).

### Using Maia Chat

You can access Maia Chat in Mendix Portal by clicking the **Maia** ({{% icon name="sparkles" %}}) icon to the right of the top bar.

The chat interface appears at the right side of your browser window. You can start using Maia Chat either by clicking one of the demo questions or by asking your own question in the chatbox.

### Asking Follow-Up Questions {#follow-up}

Maia Chat supports asking follow-up questions based on your previous question and the answer you have received. For example, you can ask it to summarize the latest answer you received by typing *Can you summarize that?*.

{{% alert color="info" %}}

Maia Chat only keeps track of a conversation history within a session on a page in Mendix Portal.

{{% /alert %}}

## Best Practices {#best-practices}

Maia can normally provide a good answer to any question you pose. However, it may sometimes not give you the information you are looking for. You may get a better answer if you consider the following best practices.

### Asking Questions in English

Maia is trained on data which is primarily in English. Although Maia can cope with questions in other languages, the imprecision of (particularly machine-) translation means there is more chance of Maia misunderstanding or giving a less precise answer.

### Asking Direct Questions

Maia uses the Mendix documentation and the Mendix Community when producing an answer. The documentation is addressed to you, the reader, and questions to the Community are usually asked directly by the person who is asking. Maia therefore gives better answers if you put yourself in the position of asking the question.

So, for example, ask "How can I do something" rather than "How can my colleague do something" or "How does Mendix do something".

### Asking Specific Questions

Try to make your question as specific as possible. If your question is too vague or is very general Maia can find it difficult to get the right context.

### Giving Relevant Information

Maia needs to know as much as possible about what you are doing. However, it can be sidetracked if you include information which is not directly relevant to what you are asking. So ensure that you do not include irrelevant information.

However, do include enough information for context. For questions about errors, specific code behavior, or complex configurations, include concrete examples if possible, remembering to redact any sensitive information.

For example, if you ask "How do I sign in to Mendix" it will not necessarily be clear whether you are talking about the Mendix Portal, Studio Pro, or perhaps even your deployed Mendix App, so give Maia the complete context to ensure the answer is relevant.

### Using Mendix Terminology

Maia will provide better answers if you use Mendix terminology which it can recognize from the documentation and Community. If you use different terms, Maia may struggle to find the right answer, and is more likely to get confused about the subject of your question.

In addition, some terms in Mendix might have slightly different meanings depending on the context. If you suspect your term might be ambiguous, try to add a small clarifying detail.

For example, use "Studio Pro" rather than "the IDE" when talking about working on a Mendix model. If you have a question about a Marketplace module, make sure you give the exact name of the module.

### Using Follow Up Questions

If Maia does not give a response which clearly answers your question, try following up to ensure that it has understood the context and terminology you are using. Try rephrasing your question, adding more details, or focusing on a different aspect of your query.

### Separating Different Questions

If you are asking a second, unrelated, question, start a new interaction with Maia. If you continue in the same chat with Maia, it will remember what you asked before and the answers it gave. This may lead to it using the information from the previous interactions as input to your new question. See [Asking Follow-Up Questions](#follow-up) to see when Maia keeps track of conversation history.

### Looking at the Source Material

Remember that Maia is an AI and can make mistakes. Maia will give references to the source of the information. The reference titles can indicate whether the information is relevant to your case, and following the links may give additional help.
