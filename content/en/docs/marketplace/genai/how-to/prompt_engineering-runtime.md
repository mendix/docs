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

This document explains how to integrate the prompt engineering capabilities of the [Agent Commons](/appstore/modules/genai/genai-for-mx/agent-commons/) module into your app.

This document will help you with the following:

* Understand how to implement Agent Commons in your Mendix application.
* Enable AI experts to prompt engineer in your running application.
* Learn how you can call a crafted agent to an LLM of your choice.

## Prerequisites

Before integrating Agent Commons into your app, make sure you meet the following requirements:

* An existing app: use a GenAI starter app such as the [Blank GenAI App](https://marketplace.mendix.com/link/component/227934), or add to an app that you have already built
* Access to an LLM of your choice, using Mendix Cloud GenAI or another compatible connector
* Basic understanding of GenAI concepts: review the [Enrich Your Mendix App with GenAI Capabilities](/appstore/modules/genai/) page for foundational knowledge and to familiarize yourself with [GenAI Concepts](/appstore/modules/genai/using-gen-ai/)
* Basic understanding of Mendix: knowledge of simple page building, microflow modeling, and domain model creation

## Use Case

This document shows you how to build a simple user interface that lets users generate descriptions for their products. By integrating generative AI, you can leverage a large language model (LLM) to create these descriptions based on a preconfigured prompt as part of an agent.

This document also explains how you can integrate Agent Commons capabilities to your app and craft an agent in the UI at runtime. In the UI, users can input the product name and specify the desired length of the description. This input is dynamically inserted into a prompt previously created by an admin, which is then called. Users can then review the generated response.

This use case is a simplified version of the *Generate Product Description* example in the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475).

## Integrating Agent Commons {#integrate-agent-commons}

Agent Commons enables users to create powerful agents at runtime, enriching requests to an LLM with tools, knowledge bases, prompts and more. This example focuses mainly on prompt engineering at runtime.

If you are using a GenAI starter app such as the Blank GenAI app, you can skip ahead to [the next section](#configuration) because the following steps are already completed. Otherwise, follow these setup steps to add Agent Commons capabilities to your app and navigation:

1. Install the [Agent Commons module](/appstore/modules/genai/genai-for-mx/agent-commons/) module and its dependencies from the Mendix Marketplace.
2. Open your app's [Security](/refguide/security/#user-role) settings and edit the user role that you want to be able to create agents at runtime. This is typically the Administrator role, but this may vary depending on your use case. Follow these steps:

    1. For the Agent Commons module, assign the **AgentAdmin** module role.
    2. For the Conversational UI module, assign the **User** module role.
    3. Save the security settings.
3. Go to your app's **Navigation**, and add a new **Agents** item.     

   1. Select an icon, such as `notes-paper-text`, from the Atlas icon set.
   2. Set the `On Click` action to `Show Page`. 
   3. Search for and select the **Agent_Overview** page, located under **AgentCommons** > **USE_ME** > **Agent Builder** folder.

   {{% alert color="info" %}}Alternatively, you can use an Open page button to let users navigate to the **Agent_Overview** page.{{% /alert %}}

## Configuring a GenAI Connector {#configuration}

To enable generative AI capabilities, install and configure the [Mendix Cloud GenAI Connector](/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/) and its dependencies from the Mendix Marketplace. If you are using a GenAI starter app such as the Blank GenAI app, you can skip the installation and just follow the [configuration instructions](/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/#configuration).

{{% alert color="info" %}}
This example uses the Mendix Cloud GenAI Connector. Alternatively, you can install and configure an [external connector](/appstore/modules/genai/reference-guide/external-connectors/) for any provider with a connector that is compatible with [GenAICommons](/appstore/modules/genai/genai-for-mx/commons/). This includes [OpenAI](/appstore/modules/genai/reference-guide/external-connectors/openai/) and [Amazon Bedrock](/appstore/modules/aws/amazon-bedrock/). 
{{% /alert %}}

## Verifying Setup {#verification}

Run the app, log in as administrator, and verify that you can navigate to the **Agent_Overview** and **Mendix Cloud GenAI Configuration** pages.

## Creating an Agent {#create-agent}

You can now create your first agent in the user interface. The final agent will look like this:

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-prompt-engineering/prompt_engineering_details.png" alt="Product Description Generator agent configuration page showing version, model, test case variables, system and user prompts, and context entity settings" >}}

### Creating the Initial Agent {#initial-agent}

1. In the running app, open the **Agent_Overview** page.

2. Click **New Agent** in the top-right corner.

3. In the **Title** field, enter `Product Description Generator`.

4. Select **Task** as the **Usage type**.

    Task agents execute based on variables and user input, typically for single-call interactions and programmatic use in microflows. Chat agents, on the other hand, retain conversation history and are suitable for interactive dialogues. For this example, select **Task** and click **Save** to create the agent.

5. On the agent's details page, where you can perform prompt engineering at runtime, enter the following prompt in the [User Prompt](/appstore/modules/genai/prompt-engineering/#user-prompt) field: `Generate a short product description for a chair`.

    The user prompt typically represents the end user's input. You can also prefill it with predefined instructions, as shown here.

6. Select a model. If no models are available to select, configure one as described in the [Configure a GenAI Connector](#configuration) section.

7. Click **Test** in the top-right corner to view the model's response. On the **Output** card, you'll be able to see the response from the model.

8. Click **Save as new version** ({{% icon name="floppy-disk" %}}) next to the **Agent version** field to save this version of the agent. For the title, use `Simple product description agent`.

### Iterating and Creating First Test Case

To further improve your prompts and the user experience, you can add some placeholder variables.

1. Once you have saved an agent version, you cannot edit its fields anymore. So, in the **Agent version** dropdown, click **Draft** to start a new version and edit the fields again.

2. Change the **User Prompt** to `Generate a short product description for a {{ProductName}}. The description should not be longer than {{NumberOfWords}} words.`

3. Notice that two variables appear in the **Test Case** card on the right. You can use these variables later in your in your application to allow users to dynamically modify the user prompt without needing to understand what a prompt is, and without requiring any changes or restarts to the application. Enter the following values for the variables:

    * `30` for **NumberOfWords**
    * `chair` for **ProductName**

    Click **Test** to see how the model adjusts the output based on the updated prompt.

4. The values you entered for the variables are only available in the agent builder capability, and are not yet connected to your use case. To make them available for future test runs, use the **Save As** option. Enter `Chair 30 words` as the title for the test case.

5. Click **Save as new version** ({{% icon name="floppy-disk" %}}) next to the **Agent version** field to save this version of the agent. Enter `Added user input` as the title. 

### Adding a System Prompt and Multiple Test Cases

To further refine the agent's responses, add a system prompt that defines the assistant's role and create an additional test case for comparison.

1. In the **Agent version** dropdown, click **Draft** so that you can edit the fields again. This time, add instructions in the [System Prompt](/appstore/modules/genai/prompt-engineering/#system-prompt) field. Enter the following: `You are a sales assistant that can write engaging and inspiring product descriptions for our online marketplace. The user asks you to create a description for various products. You should always respond in {{Language}}.` Notice that the **Language** variable appears in the **Test Card**.

2. Add a new test case by clicking **New Blank Test Case** ({{% icon name="add"%}}) next to the **Test variable input** dropdown. 
   
    * For **Language**, enter `German`.
    * For the other two variables, reuse the previous values: `30` and `chair`. 
    
3. Click **Test** to test the new input, then save the test case with the title `Chair 30 words German`.

4. Now that you have saved at least two test cases, open the dropdown next to the **Test** button, and click **Test All**. This runs both test cases, allowing you to compare the different input values. Note that the **Language** variable was not set in the first test case, as it did not exist at the time. As a result, the model's response may be in English or another random language.

5. Once you are satisfied with your agent, save the version with the title `Added system prompt and language`.

## Creating a User Interface {#context-entity}

To connect an agent with the rest of your application, it is helpful to create an entity that contains attributes for capturing user input. This will then be used to fill the prompt variables.

In this section, you will create both the entity and the user interface. The final page will look like this:

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-prompt-engineering/prompt_engineering_user_interface.png" alt="Product creation form with fields for product name, number of words, generate button, and AI-generated product description" >}}

1. In Studio Pro, go to your module's domain model. For new apps, this is **MyFirstModule**. 

2. Create an entity with the name `Product`.

3. Add the following attributes to the new entity:

    * `ProductName` as *String*
    * `NumberOfWords` as *Integer*
    * `Language` as *String*
    * `ProductDescription` as *String* and set the length to `unlimited`

4. Update the **Access rules** of the entity to grant read and write access to the attributes `ProductName`, `NumberOfWords`, and `ProductDescription` for both the **User** and **Administrator** roles. Ensure that both roles have the **Create objects** permission enabled. 

5. Save the entity to apply the changes.

6. Create a blank responsive web page called **Product_NewEdit**, and set the layout to **Atlas_Default**.

7. Add a data view to the page. 
    
    1. Set the **Form orientation** to `Vertical`. 
    2. Select your `Product` entity as the data source **Context**. 
    3. Click **OK**. Let Studio Pro automatically fill in the content of the data view.

8. Remove the `Language` input field, because this will not be provided by users.

9. Grant access to the page for both the **User** and **Administrator** roles by updating the **Visible for** property in the **Navigation** category of the page properties.

10. Right before the `Product Description` input field, add a **Generate product description** button. You will configure this later to run the agent.

11. Open your app’s navigation and add a new menu item called **Add Product**. 

    1. Set the **On click** action to **Create object** of the `Product` entity.
    2. Set the **On click page** to `Product_NewEdit`.
    3. Choose an icon, such as `add` from the Atlas icon category.

    Alternatively, you can add a button to a page and connect to the same page via the **Create object** event. 

Now a user can create a new product in the UI, but the process is not yet enhanced with any AI.

## Connecting Your Agent to Your App

In this section, you connect the agent that was already created in the user interface to let an LLM create the product description.

### Finalizing Your Agent

You need to configure some additional settings for the agent before it can be used in your application logic.

1. Run the app and navigate to your agent.

2. Above the user prompt, select the context entity. Search for the **Product** entity that you created previously.

    In the background, the system checks whether all prompt variables can be matched to attributes in the selected entity. If any variable names do not match the attribute names exactly, a warning message is displayed. Below the list of variables, you may see a message indicating that not all attributes are being used as variables. This is a helpful reminder in case you missed a variable. In this example, the `ProductDescription` attribute is a placeholder for the model's response, and thus not part of the user or system prompt.

3. Navigate back to the **Agent Overview** through the breadcrumb.

4. Hover over **More Options** ({{% icon name="three-dots-menu-horizontal-small" %}}) for your agent and click **Select version in use**. Selecting a version for use means that the version is used for production and is selectable in your microflow logic. Choose the latest version, `Added system prompt and language`, and click **Select**.

### Enabling a Generation Microflow {#generation-microflow}

Create the microflow that is called when a user clicks the button. This microflow will execute a call to the LLM and set the `ProductDescription` attribute value to the model's response. The microflow, which can also be found in the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) in **ExampleMicroflows** > **Prompt Engineering** > **ACT_Product_GenerateProductDescription**, will look like this:

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-prompt-engineering/prompt-engineering-microflow.png" alt="Microflow with four sequential steps: change Product Language, retrieve Agent from database, call Agent Without History, and update ProductDescription with response" >}}

1. In Studio Pro, go to the `Product_NewEdit` page.

2. Open the button and change the **On click** event to `Call a microflow`. 

3. Click **New** to create a new microflow called `ACT_Product_GenerateProductDescription`. 

4. Click **OK** to close the button properties.

5. Open the newly created microflow. 

6. Grant the module roles access. In the **Properties** pane, use the `Allowed roles` field under the **Security** category to add both roles.

7. As a first action in the microflow, add a `Change object` action to change the **Language** attribute:

    * Object: `Product` (input parameter)
    * Member: `Language`
    * Value: `'English'` (You can use any language. This is just an example to show that you can have input for the prompt that is not defined by your users.)

8. Add a `Retrieve` action to the microflow to retrieve the prompt that you created in the UI:
    
    * Source: `From database`
    * Entity: `AgentCommons.Agent`
    * XPath constraint: `[Title = 'Product Description Generator']`
    * Range: `First`
    * Object name: `Agent` (default)

9. Add the `Call Agent Without History` action to run the LLM call:
    
    * Agent: `$Agent`
    * Optional context object: `$Product` (input parameter)
    * Object name: `Response` (default)

10. Add a `Change object` action to change the **ProductDescription** attribute:
    
    * Object: `Product` (input parameter)
    * Member: `ProductDescription`
    * Value: `$Response/ResponseText` (expression)

You have now successfully implemented Agent Commons and connected it to a sample use case. Users can now generate a product description using an LLM, based on two input fields and the agent you previously created. Run the app again and you can test the use case.

## Troubleshooting {#troubleshooting}

For more technical details, refer to [Agent Commons](/appstore/modules/genai/genai-for-mx/agent-commons/).

For an example of advanced prompt engineering with Agent Commons, refer to the *Generate Product Description* section in the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475).

### Model Selection Is Empty {#empty-model-selection}

When you want to run your agent from the Agent Commons page, you need to select a model. If the list is empty, you likely have not configured a model yet using one of the platform-supported or other GenAICommons-compatible connectors. Make sure that the model supports `SystemPrompt` as well as `Text` as output modality.

### Context Entity Issues {#context-entity-issues}

When you select the `Context entity` in the UI, but cannot find the one you are looking for, you might need to restart your application after the entity was added to your domain model.

If the attributes do not match the variables, a warning is displayed in the UI or the Console of your running app. This might happen if you have used inconsistent names for the `{{variables}}` inside of your prompts compared to the attribute names. Confirm that they are exactly the same, with no whitespace or other characters.

### “Owner” of Agent Is Empty {#owner-is-empty}

If the `Owner` field on the **Agent Overview** page is empty, you are likely logged in as `MxAdmin`, which does not have a name linked to it. For other users, the `Owner` field should be populated. This should not change the behavior of this document.
