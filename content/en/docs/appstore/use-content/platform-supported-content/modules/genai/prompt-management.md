---
title: "Prompt Management"
url: /appstore/modules/genai/prompt-management
linktitle: "Prompt Management"
weight: 20
description: "Describes the Prompt Management functionality that assists developers and data scientists in implementing prompts in their GenAI Mendix applications use cases."
---

## Introduction

Prompt management allows users to develop, test, and optimize their GenAI use cases by creating effective prompts to interact with large language models (LLM). 
Using the Conversational UI module (available as part of [GenAI for Mendix](https://marketplace.mendix.com/link/component/227931)), you can use the prompt management interface in your app to define prompts at runtime and manage multiple versions over time. It also supports defining variables that serve as placeholders for data from the app session context which are replaced by actual values when the end user interacts with the app. The module contains the necessary data model, pages, and snippets to include a prompt management interface to your app and get started.

### Typical Use Cases

Typical use cases for prompt management include the following:

* The app includes one or more chat completion interactions with an LLM. 
* The prompts for the LLM interaction need to be updated or improved without changing the code of the LLM interaction. This enables people outside the development team to change prompts (for example, data scientists).
* The use case benefits from rapid iterations on prompts, models, and variable placeholders in a playground set-up, separately from app logic.

### Features

The Prompt Management functionality provides the following:

* UI components and a data structure to manage, store, and rapidly iterate on prompt versions at runtime—without requiring app deployment to change the prompt.
* Support for both single-call and conversational prompts.
* Includes placeholders in prompts. The values will be populated in the running app based on a user/context object.
* Logic to define and execute tests individually or in bulk, with result comparison.
* Export/import functionality for transporting prompts across different app environments (local, acceptance, and production).
* The ability to manage the active prompt version used by the running app's logic.

### Prerequisites

The prerequisites of the [Conversational UI module](/appstore/modules/genai/conversational-ui/#prerequisites) apply here.

## Installation

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the Conversational UI module into your app.

## Configuration {#configuration}

To use the Prompt Management functionality in your app, you must perform the following tasks in Studio Pro:

1. Add the relevant [module roles](#module-roles) to the applicable user roles in the project security.
2. Add the [UI to your app](#ui-components) by using the pages and snippets as a basis.
3. Make sure to have a [deployed model](#deployed-models) configured.
4. Write and test the [first prompt](#write-prompt).
5. Add the prompt to the [logic](#app-logic) of the actual use case.
6. Improve and [iterate on prompt versions](#improve-prompt).

### Configuring the Roles {#module-roles}

Make sure that the module role `PromptAdmin` is part of the user roles that are intended to do prompt management. These users design, manage, and test prompts. They also decide which version is used in the running app environment. Users with the module role `User` can only read the title and description of a prompt, but not the content.

### Adding the UI to Your App {#ui-components} 

The module includes a set of reusable pages, layouts, and snippets, allowing you to add the conversational UI to your app.

#### Pages and Layouts {#pages-and-layouts}

You need to include the **Prompt_Overview** page so that prompt admin users can access it. For example, you can add it to your navigation, home page, or dedicated tools/settings page. 
If you need to change the layout or apply other customizations, Mendix recommends copying the page to your own module and modifying it to match your app styling or use case. The **Snippet_Prompt_Overview** snippet includes the content of the same page.
From this overview, the user can reach the **Version_Details** page to edit the prompt and execute tests. If customization is needed, its contents can be found in **Snippet_Prompt_Details**.

For example, download and run the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) to see the pages in action.

### Configure Deployed Models {#deployed-models}

You need at least one GenAI connector that follows the principles of GenAI commons to interact with LLMs from the Prompt Management logic. To test a prompt, you must configure at least one Deployed Model for your chosen connector. Refer to the specific connector’s documentation for detailed setup instructions on configuring the Deployed Model.

* For [Mendix Cloud GenAI](https://marketplace.mendix.com/link/component/227931), included by default, importing the **Key** from the Mendix portal automatically creates a MxCloud Deployed Model. This is part of the [configuration](/appstore/modules/genai/MxGenAI/#configuration).
* For [Amazon Bedrock](https://marketplace.mendix.com/link/component/215042), the creation of Bedrock Deployed Models is part of the [model synchronization mechanism](/appstore/modules/aws/amazon-bedrock/#sync-models).
* For [OpenAI](https://marketplace.mendix.com/link/component/220472), the configuration of OpenAI Deployed Models is part of the [configuration](/appstore/modules/genai/openai/#general-configuration).

### Write the Prompt {#write-prompt}

When the app is running, a user with the `PromptAdmin` role can set up a prompt and test it with a deployed model. The user can create either a Conversational prompt, intended for scenarios where the end-user interacts through a chat interface, or a Single-Call prompt, designed for isolated text generation purposes. While writing the system prompt (for both conversational and single-call types) or the user prompt (only for the single-call type), the prompt engineer can include variables by enclosing them in double braces, for example, `{{variable}}`. The actual values of these placeholders are typically known at runtime based on the user's page context. 

#### Test and Refine the Prompt

To test the behavior of the prompts, a test can be executed. The prompt engineer must provide test values for all variables defined in the prompts. Additionally, multiple sets of test values for the variables can be defined and run in bulk. Based on the test results, the prompt engineer can add, remove, or rephrase certain parts of the prompt.

#### Define Context Object

If the prompt contains variables, your app must have an entity with attributes that match the variable names. An object of this entity functions as the context object, containing the context data and being passed when the chat completion operation is triggered. For more details, see the [Use the prompt in the app logic section below](#app-logic). This object contains the actual values that will be inserted into the prompt where the variables were defined. This entity needs to be linked to the prompt in the Prompt Management UI If you create a new entity, run the app locally first to ensure it appears in the selection list. The `PromptAdmin` will see warnings on the Prompt Version details page if the attributes and variables do not match or if no entity has been selected for the prompt. Make sure that the attribute length of the context object is large enough to accommodate the actual values when logic is executed in the running app.

### Use the Prompt in the App Logic {#app-logic}

After several quick iterations, the first version of the prompt is typically ready to be saved and integrated into the application logic to be tested from the end-user perspective. For this, you can add one of the operations from this module to your logic.

#### Create a Version

New prompts will be created in the draft status by default, meaning  they are still being worked on and can be tested using the prompt management module only. When it is ready to be integrated into the actual app (i.e., the logic that end users trigger), the prompt must be saved as a version. This will store a snapshot of the prompt texts. To select the active version for the prompt, use the three-dot ({{% icon name="three-dots-menu-horizontal" %}}) menu option on the prompt overview and click  **Select Prompt in use**.

For a Single-Call type prompt, use `Get Prompt for Context Object`, which can be found in the **Toolbox** in Studio Pro while editing a microflow, under the category **GenAI (Request Building)**. This operation returns both a system prompt and a user prompt strings, on a combined `PromptToUse` object. These string attributes can be passed to the chat completions operation. Retrieve the prompt (e.g. by name) and pass it with your custom context object to the operation. For an example of this pattern, see the product description generation example in the [GenAI Showcase app](https://marketplace.mendix.com/link/component/220475). 

For a conversational prompt, the chat context can be created based on the prompt in one operation. Use the `New Chat for Prompt` operation from the **Toolbox** under the **Conversational UI** category. Retrieve the prompt (e.g. by name) and pass it with your custom context object to the operation. Note that this sets the system prompt for the chat context, making it applicable to the entire (future) conversation. Similar to other chat context operations, an [action microflow needs to be selected](/appstore/modules/genai/conversational-ui/#action-microflow) for this microflow action.

With this microflow logic, the prompt version is ready to be tested from the end-user flow (in a local or test environment). The prompt can be exported/imported for transport to other environments if needed.

### Improve the Prompt {#improve-prompt}

When a prompt version is saved, there is a button to create a new draft version. This new draft can be used as a starting point to make small changes or improvements based on feedback, either from testing or when the functionality is live for a certain amount of time and the necessity to cover additional scenarios arises.

#### Create Multiple Versions

The new draft version will initially have the same text as the latest version. The prompt texts can now be modified to cover the additional scenarios. When the improved prompt is ready, it can be saved as a new version.

#### Manage In-use Version per Environment

Each time a new versions of the prompt are created, a decision needs to be made regarding which version to use in the end-user logic. Mendix recommends evaluating the in-use version as part of the test and release process. When importing the new prompts into other environments, selecting the in-use version is always a manual step and, therefore, a conscious decision.

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" >}}
