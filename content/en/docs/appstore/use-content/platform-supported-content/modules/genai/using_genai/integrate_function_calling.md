---
title: "Integrate Function Calling into Your Mendix App"
url: /appstore/modules/genai/using-genai/howto-functioncalling/
linktitle: "Integrating Function Calling"
weight: 30
description: "This document guides you through integrating and implementing function calling in your Mendix application to enhance functionality."
---

## Introduction

This document explains how to use function calling in your smart app. To do this, you can use your existing app or or follow the [Build a Smart App from a Blank GenAI App](/appstore/modules/genai/using-genai/blank-app/) guide to start from scratch, as demonstrated in the sections below.

Through this document, you will:

* Understand how to implement function calling within your Mendix application.
* Learn to integrate GenAI capabilities to address specific business requirements effectively.

### Prerequisites {#prerequisites}

Before integrating function calling into your app, make sure you meet the following requirements:

* An existing app: To simplify your first use case, start building from a preconfigured set up [Blank GenAI Starter App](https://marketplace.mendix.com/link/component/227934). For more information, see [Build a Chatbot from Scratch Using the Blank GenAI App](/appstore/modules/genai/using-genai/blank-app/). 

* Installation: Install the [GenAI For Mendix](https://marketplace.mendix.com/link/component/227931) bundle from the Mendix marketplace. If you start with the Blank GenAI App, skip this installation.

* Intermediate knowledge of the Mendix platform: Familiarity with Mendix Studio Pro, microflows, and modules.

* Basic understanding of GenAI concepts: Review the [Enrich Your Mendix App with GenAI Capabilities](/appstore/modules/genai/) page for foundational knowledge and familiarize yourself with the [concepts](/appstore/modules/genai/using-gen-ai/).

* Understanding Function Calling and Prompt Engineering: Learn about [Function Calling](/appstore/modules/genai/function-calling/) and [Prompt Engineering](/appstore/modules/genai/get-started/#prompt-engineering) to use them within the Mendix ecosystem.

## Function Calling Use Case {#use-case}

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-functioncalling/structure_functioncalling.png" >}}

In this example, two functions will be implemented with the following purposes:

1. Retrieving the display name of the user when an email is requested in a chatbot, allows the information to be automatically filled for the end user.
2. Extracting bank holidays in the Netherlands using an API. For this example, a public API from [Open Holidays API](https://www.openholidaysapi.org/en/) is used.

### Choosing the Infrastructure {#infrastructure}

Selecting the infrastructure for integrating GenAI into your Mendix application is the first step. Depending on your use case and preferences, you can choose from the following options:

* [Mendix Cloud GenAI Resource Packs](/appstore/modules/genai/MxGenAI/): The Mendix Cloud GenAI Connector is part of the [GenAI For Mendix](https://marketplace.mendix.com/link/component/227931) bundle on the marketplace, allowing you to utilize Mendix Cloud GenAI Resource Packs directly within your Mendix application.

* [OpenAI](/appstore/modules/genai/openai/): The [OpenAI Connector](https://marketplace.mendix.com/link/component/220472) supports both OpenAI’s platform and Azure’s OpenAI service.

* [Amazon Bedrock](/appstore/modules/genai/bedrock/): The [Amazon Bedrock Connector](https://marketplace.mendix.com/link/component/215042) allows you to leverage Amazon Bedrock’s fully managed service to integrate foundation models from Amazon and leading AI providers. 

* Your Own Connector: Optionally, if you prefer a custom connector, you can integrate your chosen infrastructure. However, this document focuses on the Mendix Cloud GenAI, OpenAI, and Amazon Bedrock connectors, as they offer comprehensive support and ease of use to get started.

{{% alert color="info" %}}
Not all models support function calling. Ensure that your preferred GenAI provider is set up in your Mendix app and that a compatible model is available. Mendix provides an [overview of models and their capabilities](https://docs.mendix.com/appstore/modules/genai/#models).
{{% /alert %}}

### Customizing Microflows {#microflows}

To make the functions work, create and adjust certain microflows as shown below. These microflows will handle the logic required for gathering the display name of the user and extracting the bank holidays from the Netherlands in 2025 using an API.

1. Locate the pre-built microflow `ChatContext_ChatWithHistory_ActionMicroflow` in the **ConversationalUI** > **USE_ME** > **Conversational UI** > **Action microflow examples** folder and copy it into your `MyFirstBot` module.

2. Locate the `New Chat` action in the `ACT_FullScreenChat_Open` microflow. Inside this action, change the `Action microflow` input parameter to your new `MyFirstBot.ChatContext_ChatWithHistory_ActionMicroflow` from your `MyFirstBot` module.

To call a function, create a microflow per function to extract the necessary information.

#### Function: Extracting the User Name {#function-username}

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-functioncalling/GetCurrentUserName_Function.jpg" >}}

Create a new microflow with the name `GetCurrentUserName_Function`. 

1. Start with the `Retrieve` action, where you can use the following modifications as an example: 

    * Source: `From database`
    * Entity: `Administration.Account`
    * Range: `First`
    * XPath constraint: `[id = $currentUser]`
    * Object name: `Account`

2. Include a decision where:
    * Caption: for example, `Found?`
    * Decision Type: `Expression`
    * Expression: `$Account != empty`

    1. If the decision is `false`, an end event of type `String` is added where the return value can be set to `Mendix Administrator Chat User`.

    2. If the decision is `true`, an end event of type `String` is added where the return value is `$Account/FullName`.
    
#### Function: Getting Bank Holidays in the Netherlands 2025 {#function-bankholidays}

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-functioncalling/GetBankHolidays_Function.jpg" >}}

 For this example, call the new microflow `GetBankHolidays_Function`. 

1. Start with the `Call REST service` action, where you can use the following modifications as an example: 

    General tab:

    * Location: `https://openholidaysapi.org/PublicHolidays?countryIsoCode=NL&validFrom=2025-01-01&validTo=2025-12-31&languageIsoCode=EN`
    * HTTP method: `GET`
    * Use timeout on request: `Yes`
    * Timeout (s): You can choose the value, here we set it to `300`
    * The rest can be set to default.

    Response tab:

    * Response handling: `Store in a string`
    * Store in variable: `Yes`
    * Variable name: `HolidayJSON`

2. Right-click on the `Call REST` action and select `Set $HolidayJSON` as the return value. 

### Calling the Functions {#calling-the-functions}

Now, the following steps will focus exclusively on the `ChatContext_ChatWithHistory_ActionMicroflow` from your `MyFirstBot` module.

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-functioncalling/CallingFunctions_Microflow.jpg" >}}

As shown in the image, two key steps must be completed to enable the execution of both functions.

#### Adding Functions to the Request {#add-to-request}

1. After the outgoing `Request found` equals `true` decision, add the `Tools: Add Function to Request` toolbox action for the first function with the following settings: 

    * Request: `$Request`
    * Tool name: `get-current-user-name`
    * Tool description: `This function has no input, and returns a string containing the name of the user using the chat. It can be used to generate texts on behalf of the user, for example, the signature of an email, "Best regards, [user's name]".`
    * Function microflow: select the `GetCurrentUserName_Function` microflow created in the previous step. 
    * Use return value: No

2. Following this action, continue with the second function by adding the `Tools: Add Function to Request` action with the following settings: 

    * Request: `$Request`
    * Tool name: `get-bank-holidays-2025`
    * Tool description: `This function has no input, and returns a JSON containing the bank holidays in the Netherlands for the year 2025.`
    * Function microflow: select the `GetBankHolidays_Function` microflow created in the previous step. 
    * Use return value: No

### Optional: Changing the System Prompt {#edit-systemprompt}

Optionally, you can change the system prompt to provide the model additional instructions, for example, the tone of voice. Therefore, follow a similar approach described in the [Build a Chatbot from Scratch Using the Blank GenAI App](/appstore/modules/genai/using-genai/blank-app/#changing-system-prompt).

1. Open the copied `ACT_FullScreenChat_Open` microflow from your `MyFirstBot` module.
2. Locate the **New Chat** action.
3. Inside this action, find the `System prompt` parameter, which has by default an empty value.
4. Update the `System prompt` value to reflect your desired behavior. For example, *`Answer like a Gen Z person. Always keep your answers short.`*
5. Save the changes.

## Testing and Troubleshooting {#testing-troubleshooting}

Before testing, ensure that you have completed the Mendix Cloud GenAI, OpenAI, or Bedrock configuration as described in the [Build a Chatbot from Scratch Using the Blank GenAI App](/appstore/modules/genai/using-genai/blank-app/), particularly the [Infrastructure Configuration](/appstore/modules/genai/using-genai/blank-app/#config) section. 

To test the Chatbot, go to the **Home** icon to open the chatbot interface. Start interacting with your chatbot by typing in the chat box.
For example, type—`Write a message to my colleague Max asking about a meeting to discuss the content for our next GenAI how-to.` or `How many bank holidays do I have in December?`

Congratulations! Your chatbot is now ready to use.

If an error occurs, check the **Console** in Studio Pro for detailed information to assist in resolving the issue.
