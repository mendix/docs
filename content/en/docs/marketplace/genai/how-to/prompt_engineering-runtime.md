---
title: "Prompt Engineering at Runtime"
url: /appstore/modules/genai/how-to/howto-prompt-engineering/
linktitle: "Prompt Engineering at Runtime"
weight: 30
description: "This document guides you through integrating Agent Commons into your Mendix application, allowing users to perform prompt engineering at runtime."
aliases:
   - /appstore/modules/genai/how-to/howto-prompt-management/
---

## Introduction

This document explains how to integrate the prompt engineering capabilities of the [Agent Commons](/appstore/modules/genai/genai-for-mx/agent-commons/) module into your smart app. It guides you through rebuilding a simplified version of an example that is implemented in the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475). To follow along, you can use your existing app or start from scratch as described in the [Build a Smart App from a Blank GenAI App](/appstore/modules/genai/how-to/blank-app/) document.

This document will help you with the following:

* Understand how to implement Agent Commons in your Mendix application.
* Enable AI experts to prompt engineer in your running application.
* Learn how you can call a crafted agent to an LLM of your choice.

## Prerequisites

Before integrating Agent Commons into your app, make sure you meet the following requirements:

* An existing app: either an app that you have already built, or one that you can start from scratch using the [Blank GenAI App](https://marketplace.mendix.com/link/component/227934).
* Installation: if not done already, install the [AgentCommons](https://marketplace.mendix.com/link/component/240371) module from the Mendix Marketplace.
* Access to an LLM of your choice: in this example, the [Mendix Cloud GenAI Resources Packs](/appstore/modules/genai/MxGenAI/) are used, but you can use any provider with a connector that is compatible with [GenAICommons](/appstore/modules/genai/genai-for-mx/commons/), such as [OpenAI](/appstore/modules/genai/reference-guide/external-connectors/openai/) or [Amazon Bedrock](/appstore/modules/aws/amazon-bedrock/). 
* Basic understanding of GenAI concepts: review the [Enrich Your Mendix App with GenAI Capabilities](/appstore/modules/genai/) page for foundational knowledge, and to familiarize yourself with [GenAI Concepts](/appstore/modules/genai/using-gen-ai/).
* Basic understanding of Mendix: knowledge of simple page building, microflow modeling, and domain model creation.

## Use Case

This document shows you how to build a very simple user interface that allows users to generate descriptions for their products. By integrating Generative AI (GenAI), you can leverage a large language model (LLM) to create these descriptions based on a pre-configured prompt as part of an agent. This document also explains how you can integrate Agent Commons capabilities to your app and craft your first agent in the UI at runtime. In the interface, users can input the product name and specify the desired length of the description. This input is dynamically inserted into a prompt previously created by an admin, which is then called. Users can then review the generated response.

This use case is a simplified version of the *Generate Product Description (Agent)* example in [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475), which you can explore yourself to improve your knowledge.

## Integrate Agent Commons {#integrate-agent-commons}

Agent Commons enables users to create powerful agents at runtime, enriching requests to an LLM with tools, knowledge bases, prompts and more. This example focuses mainly on prompt engineering at runtime. The following steps describe how you can add the capabilities to your app and navigation:

1. Open the [Security settings](/refguide/security/#user-role) of your project and edit the user role that should be able to create agents at runtime. This is typically the admin role, but it may vary depending on your use case.

    1. Locate the Agent Commons module and assign the **AgentAdmin** module role.
    2. Find the Conversational UI module and assign at least the **User** module role.
    3. Search Mendix Cloud GenAIConnector module and assign the **Administrator** module role.
    4. Save the security settings.

2. Go to **Navigation**, and add a new **Agents** item.     
   
   1. Select a suitable icon, such as `notes-paper-text`, from the Atlas icon set.
   2. Set the `On Click` action to `Show Page`. 
   3. Search and select the `Agent_Overview` page, located under **AgentCommons** > **USE_ME** > **Agent Builder** folder. Alternatively, you can add a button to a page and connect to the same page.

3. If you have not started from a GenAI Starter App, you also need to add a navigation item that opens the `Configuration_Overview` page of the **MxGenAIConnector**. For more details, see [Configuration](/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/#configuration).

You can now run the app, login as administrator, and verify that you can navigate to the **Agent_Overview** and **MxGenAIConnector's Configuration** pages. If you already have a key for a **Text Generation** resource, you can import it at this stage. For more details, see [Mendix Cloud GenAI](/appstore/modules/genai/mx-cloud-genai/Navigate-MxGenAI/).

## Create Your First Agent {#create-agent}

You can now create your first agent in the user interface. The final agent will look like this:
{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-prompt-engineering/prompt_engineering_details.png" >}}

### Initial Agent {#initial-agent}

1. In the running app, open the **Agent** overview page that you added to your navigation in the previous section.

2. Click **New Agent** in the top-right corner.

3. Provide a **title** and **description** for your agent.

    * For the title, you can use `Product Description Generator`.
    * For the description, which is optional, you can use `Mendix How-To example: let the model generate a product description based on user input`.

4. Select a **Usage type** to either create a `Single-Call` or `Conversational` agent. The main difference is that conversational prompts are designed for chat-based interactions, which include the full conversation history, and do not rely on predefined user prompts. `Single-Call` prompts, on the other hand, are used for one-time interactions between the user and the LLM. For this example, select the `Single-Call` type and click **Save** to create the agent.

5. On the agent's details page, where you can perform prompt engineering at runtime, enter the following prompt in the [User Prompt](/appstore/modules/genai/prompt-engineering/#user-prompt) field: `Generate a short product description for a chair`. The **User Prompt** typically represents what the end user would write, although it can be prefilled by our own instructions.

6. Click **Run** in the top-right corner to view the model's response. However, since no model has been selected yet, you will be prompted to select one before running the test. If no models are available to select, you first need to configure one. For Mendix Cloud GenAI, you need to import a key on the configuration page you added in the previous section.

7. On the **Output card**, you can see the response from the model. This is already sufficient for the first try. 

    1. Click the **Save As** button on the **Agent card** to save this version of the agent. 
    2. For the title, use `Simple product description agent` and save it.     

    The agent cannot be edited anymore.

### Iteration and First Test Case

To further improve your prompts and the user experience for the end users, you can now add some placeholder variables. 

1. Next to the version's dropdown, click the **New Agent Version** icon ( {{% icon name="copy-add-plus"%}}) to create a new draft version. Change the **User Prompt** to `Generate a short product description for a {{ProductName}}. The description should not be longer than {{NumberOfWords}} words.`

2. Notice that two variables have been created in the **Test Case card** on the right. These variables can later be used in your application to allow users to dynamically modify the user prompt without needing to understand what a prompt is, and without requiring any changes or restarts to the application. You can now enter the following values for the variables:

    * `30` for **NumberOfWords**

    * `chair` for **ProductName**

    Click **Run** to see how the model adjusts the output based on the updated prompt.

3. The values you entered for the variables are only available in the agent builder capability, and are not yet connected to your use case. To make them available for future test runs, use the **Save As** option.    
Enter `Chair 30 words` as the title for the test case.

### System Prompt and Multiple Test Cases

1. Save the agent's version one more time as described in the [Initial Agent](#initial-agent) section. Enter `Added user input` as the title. 

2. For the final version, add the additional instructions in the [System Prompt](/appstore/modules/genai/prompt-engineering/#system-prompt) field. Enter the following: `You are a sales assistant that can write engaging and inspiring product descriptions for our online marketplace. The user asks you to create a description for various products. You should always respond in {{Language}}.`, and notice that the **Language** variable is created.

3. Add a new test case by clicking the `New Test Case` icon ({{% icon name="add"%}}) next to the test case dropdown. 
   
    * For **Language**, enter any language, but preferably not English. For this example, use `German` to ensure correct testing.
    * For the other two variables, reuse the previous values: `30` and `chair`. 
    
4. Click **Run** to test the new input, then save the test case with the title: `Chair 30 words German`.

5. Now that you have saved at least two test cases, open a dropdown next to the **Run** button, and click **Run All**.
This will execute both test cases, allowing you to compare the different input values. Note that the **Language** variable was not set in the first test case, as it did not exist at the time. As a result, the model's response may be in English or another random language.

6. Once you are satisfied with your agent, you can now save the version one more time with the title `Added system prompt and language`.

You have now successfully created your first agent. A few additional configurations are still required, which will be covered later in this document.

## Create User Interface {#context-entity}

To connect an agent with the rest of your application, it is helpful to create an entity that contains attributes for capturing user input. This will then be used to fill the prompt variables.

In this section, you will create both the entity and the user interface. The final page will look like this:
{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-prompt-engineering/prompt_engineering_user_interface.png" >}}

1. In Studio Pro, go to your module's domain model. For new apps, this is **MyFirstModule**. 

2. Create an entity with the name `Product`.

3. Add the following attributes to the new entity:

    * `ProductName` as *String*
    * `NumberOfWords` as *Integer*
    * `Language` as *String*
    * `ProductDescription` as *String* and set length to `unlimited`

4. Update the **Access rules** of the entity to grant read-write access to the attributes `ProductName`, `NumberOfWords`, and `ProductDescription` for both the **User** and **Administrator** roles. Ensure that both roles have the **Allow creating new objects** permission enabled. 

5. Save the entity to apply the changes.

6. Create a blank responsive web page called **Product_NewEdit**, and set the layout to **Atlas_Default**.

7. Add a data view to the page. 
    
    1. Set the **Form orientation** to `Vertical`. 
    2. Select your newly created entity `Product` as data source **Context**. 
    3. Click **OK**. Let Studio Pro automatically fill in the content of the data view.

8. Remove the `Language` input field, as this will not be provided by users.

9. Grant access to the page for both the **User** and **Administrator** roles by updating the **Visible for property** in the **Navigation** category of the page properties.

10. Add a `Generate product description` button, which will later execute the agent. Place the button right before the `Product Description` input field.

11. Open your app’s navigation and add a new menu item called **Add product**. 

    1. Set the **On click** action to **Create object** of the `Product` entity.
    2. Open the `Product_NewEdit` page.
    3. For the icon, you can use `add` from the Atlas icon category.

Alternatively, you can add a button to a page and connect to the same page via the **Create object** event. 

Now a user can create a new product in the UI, but the process was not yet enhanced with any AI.

## Connect Your Agent to Your App

In this section, you can connect the agent that was already created in the user interface to let an LLM create the product description.

### Finalize Your Agent

You first need to configure some additional settings for the agent before it can be used in your app.

1. Run the app and navigate to your agent.

2. Below the user prompt, you can select the context entity. Search for **Product** and select the entity that was created in the previous section. When starting from the Blank GenAI App, this should be **MyFirstModule.Product**.

3. In the background, the system checks whether all prompt variables can be matched to attributes in the selected entity. If any variable names do not match the attribute names exactly, a warning message is displayed. Below the list of variables, you may see an informational message indicating that not all attributes are being used as variables. This is simply a helpful reminder in case you unintentionally missed a variable. In this example, the `ProductDescription` attribute is a placeholder for the model's response, and thus not part of the user or system prompt.

4. Navigate back to the **Agent Overview** through the breadcrumb.

5. Hover over the ellipsis ({{% icon name="three-dots-menu-horizontal-small" %}}) corresponding to your agent and click **Select Version in use**. On this page, select a version that you want to set to `In Use`. This means that it is selected for production, and also selectable in your microflow logic. Select the latest version `Added system prompt and language`, and click **Select**.

### Enable Generation Microflow {#generation-microflow}

Now you will create the microflow that is called when a user clicks the button. This microflow executes a call to the LLM, and sets the `ProductDescription` attribute value to the model's response. The microflow can also be found in the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) in **ExampleMicroflows** > **Prompt Engineering** > **ACT_Product_GenerateProductDescription** and will look like this:

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-prompt-engineering/prompt-engineering-microflow.png" >}}

1. In Studio Pro, go to the `Product_NewEdit` page.

2. Open the button and change the **On click** event to `Call a microflow`. 

3. Click **New** to create a new microflow called `ACT_Product_GenerateProductDescription`. 

4. Click **Ok** to close the button properties.

5. Open the newly created microflow. 

6. Grant the module roles access. Change the `Allowed roles` selection under the **Security** category and add both roles.

7. As a first action in the microflow, add a `Change object` action to change the **Language** attribute:

    * Object: `Product` (input parameter)
    * Member: `Language`
    * Value: `English` (You can use whatever language. This is just an example to show that you can have input for the prompt that is not defined by your users.)

8. Add a `Retrieve` action to the microflow to retrieve the prompt that you created in the UI:
    
    * Source: `From database`
    * Entity: `AgentCommons.Agent` (search for *Agent*)
    * XPath constraint: `[Title = 'Product Description Generator']`
    * Range: `First`
    * Object name: `Agent` (default)

9. Add the `Call Agent Without History` action from the toolbox to execute the LLM call:
    
    * Agent: `Agent` (the object that was previously retrieved in step 4)
    * Optional context object: `Product` (input parameter)
    * Object name: `Response` (default)

10. Add a `Change object` action to change the **ProductDescription** attribute:
    
    * Object: `Product` (input parameter)
    * Member: `ProductDescription`
    * Value: `$Response/ResponseText` (expression)

You have now successfully implemented Agent Commons and connected it to a sample use case. Users can now generate a product description using an LLM, based on two input fields and the agent you previously created. Run the app again and you can test the use case by yourself.

## Troubleshooting {#troubleshooting}

{{% alert color="info" %}}
For more technical details, refer to [Agent Commons](/appstore/modules/genai/genai-for-mx/agent-commons/). For an example of advanced prompt engineering with Agent Commons, refer to the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) called *Generate Product Description (Agents)*.
{{% /alert %}}

### Model Selection Is Empty {#empty-model-selection}

When you want to run your agent from the Agent Commons page, you need to select a model. If the list is empty, you likely have not configured a model yet using one of the platform-supported or other GenAICommons-compatible connectors. Make sure that the model supports `SystemPrompt` as well as `Text` as output modality.

### Context Entity Issues {#context-entity-issues}

When you select the `Context entity` in the UI, but cannot find the one you are looking for, you might need to restart your application after the entity was added to your domain model.

If the attributes do not match the variables, a warning is displayed in the UI or the Console of your running app. This might happen if you have used inconsistent names for the `{{variables}}` inside of your prompts compared to the attribute names. Double check if they are exactly the same, with no whitespace or other characters.

### “Owner” of Agent Is Empty {#owner-is-empty}

If the `Owner` field on the **Agent Overview** page is empty, you are likely logged in as `MxAdmin`, which does not have a name linked to it. For other users, the `Owner` field should be populated. This should not change the behavior of this document.
