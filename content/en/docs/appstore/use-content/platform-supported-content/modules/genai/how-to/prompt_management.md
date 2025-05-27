---
title: "Integrate Prompt Management into Your Mendix App"
url: /appstore/modules/genai/how-to/howto-prompt-management/
linktitle: "Integrating Prompt Management"
weight: 30
description: "This document guides you through integrating prompt management into your Mendix application, allowing users to perform prompt engineering at runtime."
---

## Introduction

This document explains how to integrate the [Prompt Management](/appstore/modules/genai/genai-for-mx/prompt-management/) capabilities of the ConversationalUI module into your smart app. It guides you through rebuilding a simplified version of an example that is implemented in the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475). To follow along, you can use your existing app or start from scratch as described in the [Build a Smart App from a Blank GenAI App](/appstore/modules/genai/how-to/blank-app/) document.

Through this document, you will:

* Understand how to implement prompt management in your Mendix application.
* Enable AI experts to prompt engineer in your running application.
* Learn how you can send a crafted prompt to an LLM of your choice.

### Prerequisites

Before integrating prompt management into your app, make sure you meet the following requirements:

* An existing app: either an app that you have already built or you can also start from scratch using the [Blank GenAI App](https://marketplace.mendix.com/link/component/227934).

* Installation: If not done already, install the [ConversationalUI](https://marketplace.mendix.com/link/component/239450) and [GenAICommons](https://marketplace.mendix.com/link/component/239448) modules from the Mendix Marketplace.

* Access to an LLM of your choice. In this example, the [Mendix Cloud GenAI Resources Packs](/appstore/modules/genai/MxGenAI/) are used, but you can use any provider with a connector that is compatible with [GenAICommons](/appstore/modules/genai/genai-for-mx/commons/) (such as [OpenAI](/appstore/modules/genai/reference-guide/external-connectors/openai/) or [Amazon Bedrock](/appstore/modules/aws/amazon-bedrock/)). 

* Basic understanding of GenAI concepts: Review the [Enrich Your Mendix App with GenAI Capabilities](/appstore/modules/genai/) page for foundational knowledge and familiarize yourself with the [GenAI Concepts](/appstore/modules/genai/using-gen-ai/).

* Basic understanding of Mendix: knowledgeable of simple page building, microflow modelling, and domain model creation.

## Use Case

This document shows you how to build a very simple user interface that allows users to generate product descriptions for their products. By integrating Generative AI (GenAI), you can leverage a large language model (LLM) to create these descriptions based on a pre-configured prompt. This document also explains how you can integrate the prompt management capabilities to your app and craft your first prompt in the UI at runtime. In the interface, users can input the product name and specify the desired length of the description. This input is dynamically inserted into a prompt previously created by an admin, which is then sent to the LLM. Users can then review the generated response.

This use case is a simplified version of the *Generate Product Description (Prompt Management)* example of the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475), which you can explore yourself to improve your knowledge.

## Integrate Prompt Management {#integrate-prompt-management}

Prompt Management is a capability of the ConversationalUI module. It enables users to create and engineer prompts at runtime. The following steps describe how you can add the capabilities to your app and navigation:

1. Open the [Security settings](/refguide/security/#user-role) of your project and edit the user role that should be able to create prompts at runtime. This is typically the admin role, but it may vary depending on your use case:

    * Locate the ConversationalUI module and assign at least the **PromptAdmin** and **User** module roles.
    * Search **MxGenAIConnector** module and assign the  **Administrator** module role.
    * Save the security settings.

2. Go to the **Navigation** and add a new item **Prompt Management**. Select a suitable icon—such as `notes-paper-text` from the Atlas icon set—and set the **On Click** action to *Show Page*. Search and select `Prompt_Overview` page, located under **ConversationalUI** > **USE_ME** > **Prompt Management** folder. Alternatively, you can add a button to a page and connect to the same page.

3. If you have not started from a GenAI Starter App, you also need to add a navigation item that calls the `NAV_ConfigurationOverview_Open` microflow of the **MxGenAIConnector**. For more details, see [Configuration](/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/#configuration).

You can now run the app, login as administrator, and verify that you can navigate to the **Prompt_Overview** and **MxGenAIConnector's Configuration** pages. If you already have a key for a **Text Generation** resource, you can import at this stage. For more details, see [Mendix Cloud GenAI](/appstore/modules/genai/mx-cloud-genai/Navigate-MxGenAI/).

## Create Your First Prompt {#create-prompt}

You can now create your first prompt in the user interface. The final prompt will look like this:

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-prompt-management/prompt_details.png" >}}

### Initial Prompt {#initial-prompt}

1. In the running app, open the **Prompt Management** overview page that you added to your navigation in the previous section.

2. Click **New Prompt** in the top-right corner.

3. You are asked to provide a **title** and **description** for your prompt.

    * For the title, you can use: `Product Description Generator`
    * For the description (optional), use: `Mendix How-To example: let the model generate a product description based on user input`

4. Next, select a **Usage type** to either create a `Single-Call` or `Conversational` prompt. The main difference is that Conversational prompts are designed for chat-based interactions, which include the full conversation history and do not rely on predefined user prompts. `Single-Call` prompts, on the other hand, are used for one-time interactions between the user and the LLM. For this example, select the `Single-Call` type and click **Save** to create the prompt.

5. You are now navigated to the prompt's details page, where you can perform prompt engineering at runtime. In the [User Prompt](/appstore/modules/genai/prompt-engineering/#user-prompt) field, enter the following prompt:
`Generate a short product description for a chair`. The **User Prompt** typically represents what the end user would write, although it can be prefilled by our own instructions.

6. Click **Run** in the top-right corner to view the model's response. However, since no model has been selected yet, you will be prompted to choose one before running the test. If no models are available to select, you first need to configure one (for the Mendix Cloud GenAI, you need to import a key on the configuration page you added in the previous section). You can later change the selected model by clicking the **Configuration** ({{% icon name="cog" %}}) icon located to the left of the **Run** button.

7. In the **Output card**, you can observe the response from the model. This is already sufficient for the first try. Click **Save As** button in the **Prompt card** to save this version of the prompt. For the title, use `Simple product description prompt` and save it. The prompt cannot be edited anymore.

### Iterate and First Test Case

1. To further improve your prompt and the user experience for the end users, you can now add some placeholder variables. Next to the version's dropdown you can click **New Prompt Version** icon ({{% icon name="copy-add-plus"%}}) to create a new draft version. Change the **User Prompt** to `Generate a short product description for a {{ProductName}}. The description should not be longer than {{NumberOfWords}} words.`

2. Notice that two variables have been created in the **Test Case card** on the right. These variables can later be used in your application to allow users to dynamically modify the user prompt without needing to understand what a prompt is, and without requiring any changes or restarts to the application. You can now enter the following values for the variables:

    * `30` for **NumberOfWords**

    * `chair` for **ProductName**

    Click **Run** to see how the model adjusts the output based on the updated prompt.

3. The values you entered for the variables are only available in the the prompt management capability and are not yet connected to your use case. To make them available for future test runs, use the **Save As** option.
Enter `Chair 30 words` as the title for the test case.

### System Prompt and Multiple Test Cases

1. Save the prompt's version one more time as described in the [Initial Prompt](#initial-prompt) section above. Enter `Added user input` as title. For the final version, add the additional instructions in the [System Prompt](/appstore/modules/genai/prompt-engineering/#system-prompt) field. Enter the following: `You are a sales assistant that can write engaging and inspiring product descriptions for our online marketplace. The user asks you to create a description for various products. You should always respond in {{Language}}.` and notice that the **Language** variable is created.

2. Add a new test case by clicking the `New Test Case` icon ({{% icon name="add"%}}) next to the test case dropdown. 
    * For **Language**, enter any language (preferably not English to properly test the response), in this example, use `German`. 
    * The other two variables, reuse the previous values: `30` and `chair`. Click **Run** to test the new input, then save the test case with the title: `Chair 30 words German`.

3. Now that you saved at least two test cases, open a dropdown next to the **Run** button and click **Run All**.
This will execute both test cases, allowing you to compare the different input values. Note that the **Language** variable was not set in the first test case, as it did not exist at the time. As a result, the model's response may be in English or another random language.

4. Once you are satisfied with your prompt, you can now save the version one more time with the title `Added system prompt and language`.

You have now successfully created your first prompt. A few additional configurations are still required, which will be covered later in this document.

## Create User Interface {#context-entity}

To connect a prompt with the rest of your application, it is helpful to create an entity that contains attributes for capturing user input, which will then be used to fill the prompt variables.

In this section, you will create both the entity and the user interface. The final page will look like this:

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-prompt-management/prompt_user_interface.png" >}}

1. In Studio Pro, go to your module's domain model (for new apps, **MyFirstModule**). Create an entity with the name `Product`.

2. Add the following attributes:
    * `ProductName` as *String*
    * `NumberOfWords` as *Integer*
    * `Language` as *String*
    * `ProductDescription` as *String* and set length to `unlimited`

3. Update the **Access rules** of the entity to grant read-write access to the attributes `ProductName`, `NumberOfWords`, and `ProductDescription` for both the **User** and **Administrator** roles. Also, ensure that both roles have the **Allow creating new objects** permission enabled. Save the entity to apply the changes.

4. Create a blank responsive web page called **Product_NewEdit**, and set the layout to **Atlas_Default**.

5. Add a data view to the page. Set the **Form orientation** to `Vertical`. Select your newly created entity `Product` as data source **Context**. Click **OK**. Let Studio Pro automatically fill the content of the data view.

6. Remove the `Language` input field, as this will not be provided by users.

7. Grant access to the page for both the **User** and **Administrator** roles by updating the Visible for property in the **Navigation** category of the page properties.

8. Add a button `Generate product description`, which will later execute the prompt. Place the button right before the `Product Description` input field.

9. Open your app’s navigation and add a new menu item called **Add product**. 

    * Set the **On click** action to **Create object** of the `Product` entity.
    * Then, open the `Product_NewEdit` page.
    * For the icon, you can use `add` from the Atlas icon category.

Alternatively, you can add a button to a page and connect to the same page via the **Create object** event. 

Now a user can create a new product in the UI, but the process was not yet enhanced with any AI.

## Connect Your Prompt with Your App {#connect-prompt-with-app}

In this section, you can connect the prompt that was already created with your user interface to let an LLM create the product description.

### Finalize Your Prompt

You first need to configure some additional settings for the prompt before it can be used in your app.

1. Run the app and navigate to your prompt.

2. Click the **Prompt Context Settings** icon ({{% icon name="microflow-disconnected"%}}). A pop-up will open where you can select the context entity. Search for **Product** and select the entity that was created in the previous section. When starting from the Blank GenAI App, this should be **MyFirstModule.Product**. Click **Save**.

3. Notice that the **Prompt Context Settings** icon has changed from {{% icon name="microflow-disconnected" %}} to {{% icon name="microflow-connected" %}} indicating that the context entity has been correctly selected. In the background, the system checks whether all prompt variables can be matched to attributes in the selected entity. If any variable names do not match the attribute names exactly, a warning icon will appear, and clicking it will display a helpful message. Below the list of variables, you may see an informational message indicating that not all attributes are being used as variables. This is simply a helpful reminder in case you unintentionally missed a variable. In this example, the `ProductDescription` attribute is a placeholder for the model's response and thus not part of the user or system prompt.

4. Navigate back to the **Prompt Overview** (via the breadcrumb `Overview`).

5. Hover over the *Ellipsis* ({{% icon name="three-dots-menu-horizontal-small" %}}) icon in the row of your prompt and click **Select Prompt in use**. On this page, select a version that you want to set to `In Use` which means it is selected for production and later selected in your microflow logic. Select the latest version `Added system prompt and language` and click **Select**.

### Enable Generation Microflow {#generation-microflow}

Now you will create the microflow that is called when a user hits the button. This microflow execute a call to the LLM and sets the `ProductDescription` attribute value to the model's response. The microflow can also be found in the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) in **ExampleMicroflows** > **Programmatic Prompt** > **ACT_Product_GenerateProductDescription** and will look like this:

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-prompt-management/prompt_microflow.png" >}}

1. In Studio Pro, go to the `Product_NewEdit` page. Open the button and change the **On click** event to `Call a microflow`. Click **New** to create a new microflow called `ACT_Product_GenerateProductDescription`. Click **Ok** to close the button properties.

2. Open the newly created microflow. First, grant the module roles access. Change the `Allowed roles` selection under the **Security** category and add both roles.

3. As a first action in the microflow, add a `Change object` action to change the **Language** attribute:
    * Object: `Product` (input parameter)
    * Member: `Language`
    * Value: `English` (you can use whatever language. This is just an example to show that you can have input for the prompt that is not defined by your users)

4. Add a `Retrieve` action to the microflow to retrieve the Prompt that you created in the UI:
    * Source: `From database`
    * Entity: `ConversationalUI.Prompt` (search for *Prompt*)
    * XPath constraint: `[Title = 'Product Description Generator']`
    * Range: `First`
    * Object name: `Prompt` (default)

5. Add the `Get Prompt For Context Object` action from the toolbox to get the `PromptToUse` object that has the variables replaced by the user's input:
    * Prompt: `Prompt` (the object that was previously retrieved in step 4)
    * Context object: `Product` (input parameter)
    * Object name: `PromptToUse` (default)

6. Add the `Create Request` action to set the system prompt:
    * System Prompt: `$PromptToUse/SystemPrompt` (expression)
    * Temperature: empty (expression; optional)
    * MaxTokens: empty (expression; optional)
    * TopP: empty (expression; optional)
    * Object name: `Request` (default)

7. Add the `Chat Completions (without history)` action to call the model:
    * DeployedModel: `$Prompt/ConversationalUI.Prompt_DeployedModel/GenAICommons.DeployedModel` (expression)
    * UserPrompt: `$PromptToUse/UserPrompt` (expression)
    * OptionalFileCollection: empty (expression)
    * OptionalRequest: `Request` (the object that was previously created in step 6)
    * Obect name: `Response` (default)

8. Lastly, add a `Change object` action to change the **ProductDescription** attribute:
    * Object: `Product` (input parameter)
    * Member: `ProductDescription`
    * Value: `$Response/ResponseText` (expression)

You habe now successfully implemented prompt management and connected it to a sample use case. Users can now generate a product description using the model, based on two input fields and the prompt you previously created. Run the app again and you can test the use case by yourself!

## Troubleshooting {#troubleshooting}

{{% alert color="info" %}}
If you seek more technical details, you can learn more on the [Prompt Management](/appstore/modules/genai/genai-for-mx/prompt-management/) documentation page. Furthermore, there is a more advanced prompt management example in the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) called *Generate Product Description (Prompt Management)*.
{{% /alert %}}

### Model Selection Is Empty {#empty-model-selection}

When you want to run your prompt from the prompt management page, you need to select a model. If the list is empty, you likely have not configured a model yet using one of the platform-supported (or other GenAICommons compatible) connectors. Also make sure that the model support `SystemPrompt` as well as `Text` as output modality.

### Context Entity Issues {#context-entity-issues}

When you select the `Context entity` in the UI but cannot find the one you are are seeking, you might need to restart your application after the entity was added to your domain model.

If the attributes do not match the variables, for example, you noticed a warning in the UI or Console of your running app, you might have used inconsistent names for the `{{variables}}` inside of your prompts compared to the attribute names. Double check if they are exactly the same (no whitespace or other characters).

### “Owner” of Prompt Is Empty {#owner-is-empty}

If the `Owner` field on the **Prompt Overview** page is empty, you are likely logged in as `MxAdmin` which does not have a name linked to it. For other users, the `Owner` field should be populated. This should not change the behavior of this document.
