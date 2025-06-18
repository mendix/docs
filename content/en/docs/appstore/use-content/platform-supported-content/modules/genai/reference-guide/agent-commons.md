---
title: "Agent Commons"
url: /appstore/modules/genai/genai-for-mx/agent-commons/
linktitle: "Agent Commons"
description: "Describes the purpose, configuration, and usage of the Agents Commons module from the Mendix Marketplace that allows developers to build, define, and refine Agents, to integrate GenAI principles, and Agentic patterns into their Mendix app."
weight: 20
---

## Introduction

The [Agent Commons](https://marketplace.mendix.com/link/component/240371) module enables users to develop, test, and optimize their GenAI use cases by creating effective agents that interact with large language models (LLMs).
With the Agent Commons module, you can use the Agent Builder interface within your app to define agents at runtime and manage multiple versions over time.

You can wire up prompts, microflows (as tools), knowledge bases, and large language models to build agentic patterns that support your business logic. The Agent Builder also allows you to define variables that act as placeholders for data from the app session context, which are replaced with actual values when the end user interacts with the app.

The Agent Commons module includes the necessary data model, pages, and snippets to seamlessly integrate the agent builder interface into your app and start using agents within your app logic.

### Typical Use Cases

Typical use cases for Agent Commons include:

* Incorporating one or more agentic patterns in the app that involve interactions with an LLM. These patterns may also include microflows as tools, knowledge bases, and guardrails.

* Enabling prompt updates or improvements without modifying the underlying LLM integration code or low-code application logic. This allows non-developers, such as data scientists, to change prompts and iterate on agent configurations.

* Supporting rapid iteration on prompts, microflows, knowledge bases, models, and variable placeholders in a playground setup, separate from core app logic.

### Features

The Agent Commons module offers the following features:

* Agent Builder UI components and data model for managing, storing, and rapidly iterating on agent versions at runtime. No app deployment is required to update an agent.

* Drag and drop operations for calling both single-call and conversational agents from microflows and workflows.

* Prompt placeholders, allowing dynamic insertion of values based on user or context objects at runtime.

* Logic to define and run tests individually or in bulk, with result comparisons.

* Export/import functionality for transporting agents across different app environments (for example, local, acceptance, production).

* The ability to manage the active agent version used by the app logic in the app environment eliminates the need for redeployment.

{{% alert color="info" %}} The current scope of the module focuses on LLM invocations using a variety of prompts, optionally enhanced with placeholders (variables). Agents can be further extended by integrating microflows with a single parameter as tools using the [Function Calling](/appstore/modules/genai/function-calling/) setup, and by connecting to knowledge bases provided through [Mendix Cloud GenAI Resources](/appstore/modules/genai/mx-cloud-genai/resource-packs/#knowledge-bases). {{% /alert %}}

### Dependencies {#dependencies}

The Agent Commons module requires Mendix Studio Pro version [10.21.0](/releasenotes/studio-pro/10.21/#10210) or above.

In addition, install the following modules:

* [Community Commons](https://marketplace.mendix.com/link/component/170)
* [GenAI Commons](https://marketplace.mendix.com/link/component/239448)
* [Mendix Cloud GenAI Connector](https://marketplace.mendix.com/link/component/239449)
* [Conversational UI](https://marketplace.mendix.com/link/component/239450)

## Installation

If you are starting from a blank app or adding agent-building functionality to an existing project, you need to manually install the [Agent Commons](https://marketplace.mendix.com/link/component/240371) module from the Mendix Marketplace. 
Before proceeding, ensure your project includes the latest versions of the required [dependencies](#dependencies). Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to install the Agent Commons module.

## Configuration {#configuration}

To use the Agent Commons functionalities in your app, you must perform the following tasks in Studio Pro:

1. Assign the relevant [module roles](#module-roles) to the applicable user roles in the project **Security**.
2. Add the [Agent Builder UI to your app](#ui-components) by using the pages and snippets as a basis.
3. Ensure that a [deployed model](#deployed-models) is configured.
4. [Define](#define-agent) the prompts, add functions, knowledge bases, and test the agent.
5. Add the agent to the app [logic](#app-logic) of your specific use case.
6. Improve and [iterate on agent versions](#improve-agent).

### Configuring the Roles {#module-roles}

In the project **Security** of your app, assign the **AgentCommons.AgentAdmin** module role to user roles responsible for defining and refining agents, as well as selecting the active agent version used in the running app environment.

### Adding the Agent Builder UI to Your App {#ui-components} 

The module includes a set of reusable pages, layouts, and snippets, allowing you to add the agent builder to your app. 

#### Pages and Layouts

To define the agents at runtime, add the **Agent_Overview** page (**USE_ME** > **Agent Builder**) to your app **Navigation**, or include the **Snippet_Agent_Overview** in a page that is already part of your navigation.

From the overview, users can access the **Version_Details** page to edit prompts and run tests. For more customization, you can refer to the contents of **Snippet_Agent_Details**.

If you need to adjust the layout or apply other customizations, it is recommended to copy the relevant page into your own module and modify it to match your app styling or use case. 

For example, download and run the [Agent Builder Starter App](https://marketplace.mendix.com/link/component/240369) to see the pages in action.

### Configuring Deployed Models {#deployed-models}

To interact with LLMs using Agent Commons, you need at least one GenAI connector that adheres to the GenAI Commons principles. To test agent behavior, you must configure at least one [Deployed Model](/appstore/modules/genai/genai-for-mx/commons/#deployed-model) for your chosen connector. Refer to the specific connector’s documentation for detailed instructions on setting up the Deployed Model.

* For [Mendix Cloud GenAI](https://marketplace.mendix.com/link/component/239449), importing the **Key** from the Mendix portal automatically creates a MxCloud Deployed Model. This is part of the [configuration](/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/#configuration).
* For [Amazon Bedrock](https://marketplace.mendix.com/link/component/215042), the creation of Bedrock Deployed Models is part of the [model synchronization mechanism](/appstore/modules/aws/amazon-bedrock/#sync-models).
* For [OpenAI](https://marketplace.mendix.com/link/component/220472), the configuration of OpenAI Deployed Models is part of the [configuration](/appstore/modules/genai/reference-guide/external-connectors/openai/#general-configuration).

### Defining the Agent {#define-agent}

When the app is running, a user with the `AgentAdmin` role can set up agents, write prompts, link microflows as tools, and provide access to knowledge bases. Once an agent is associated with a deployed model, it can be tested in an isolated environment, separate from the rest of the app’s logic, to validate its behavior effectively.

Users can create two types of agents:

* **Conversational Agent**: Intended for scenarios where the end user interacts through a chat interface, or where the agent is called conversationally  by another agent.

* **Single-Call Agent**: Designed for isolated agentic patterns such as background processes, subagents in an Agent-as-Tool setup, or any use case that doesn't require a conversational interface with historical context.

 {{< figure src="/attachments/appstore/platform-supported-content/modules/genai/agentcommons/agentbuilderUI.png" >}}

#### Defining Context Entity {#define-context-entity}

If your agent's prompt includes variables, your app must define an entity with attributes that match the variable names. An object of this entity serves as the context object, which holds the context data that will be passed when the **call agent** operation is triggered. For more details, see the [Use the agent in the app logic](#app-logic) section below.

This object contains the actual values that will be inserted into the prompt texts where the variables were defined. To link the context entity to the agent, select it in the Agent Commons UI. If you have created a new entity, run the app locally first to ensure it appears in the selection list.

The `AgentAdmin` will see warnings on the Agent Version Details page if:

* The entity has not been selected

* The entity's attributes do not match the defined variables

* The attribute length is insufficient to hold the actual values when logic is executed in the running app.

#### Adding Microflows as Tools

To allow your agent to act dynamically and autonomously or to access specific data based on input it determines, microflows can be added as tools. When the agent is invoked, it uses the function calling pattern to execute the required microflows, using the input specified in the model’s response.

For more technical details, see the [Function Calling](/appstore/modules/genai/function-calling/) documentation.

#### Adding Knowledge Bases

For supported knowledge bases registered in your app, you can connect them to agents to enable autonomous retrievals. To set this up, refer to the documentation of the connector provided by your chosen knowledge base provider and follow the instructions for establishing a connection from your app.

To allow the agent to perform semantic searches, add the knowledge base to the agent definition and configure the retrieval parameters, such as metadata filters, the number of chunks to retrieve, and the threshold similarity.

#### Testing and Refining the Agent

While writing the system prompt (for both conversational and single-call types) or the user prompt (only for the single-call type), the prompt engineer can include variables by enclosing them in double braces, for example, `{{variable}}`. The actual values of these placeholders are typically known at runtime based on the user's page context. 
To test the behavior of the prompts, a test can be executed. The prompt engineer must provide test values for all variables defined in the prompts. Additionally, multiple sets of test values for the variables can be defined and run in bulk. Based on the test results, the prompt engineer can add, remove, or rephrase certain parts of the prompt.

### Using the Agent in the App Logic {#app-logic}

After a few quick iterations, the first version of the agent is typically ready to be saved and integrated into the application logic for end-user testing. To do this, you can add one of the available operations from the Agent Commons module into your app logic.

#### Creating a Version

New agents will be created in the draft status by default, meaning they are still being worked on and can be tested using the agent commons module only. Once an agent is ready to be integrated into the app logic (i.e., logic triggered by end users), it must be saved as a version. This will store a snapshot of the prompt texts and the configured microflows as tools and knowledge bases. To select the active version for the agent, use the three-dot ({{% icon name="three-dots-menu-horizontal" %}}) menu option on the agent overview and click  **Select Version in use**.

#### Calling the Agent from a Microflow {#call-agent-microflow}

For most use cases, a `Call Agent` microflow activity can be used. You can find these actions in Studio Pro **Toolbox**, under the **Agents Kit** category while editing a microflow. Take a look at the table below if you are unsure which action to use based on your [agent type](#define-agent):

| Toolbox action name | Supported agent types | Description |
|---|---|---|
| [Call Agent with History](#call-agent-with-history) | Single-Call, Conversational | This action returns the assistant response for a single user message or based on a conversation history. The user message or an alternating chat history of the user and assistant message needs to be added to the request before calling this action. See [Add Message to Request](/appstore/modules/genai/genai-for-mx/commons/#chat-add-message-to-request) <br> This operation is designed for conversational agents, but will work for single-call agents as well; note that in that case, the user prompt defined on the agent version is ignored. |
| [Call Agent without History](#call-agent-without-history) | Single-Call | This action returns the assistant response for a single user message. For Single-Call agents, the user message is already part of the agent version and thus does not need to be passed explicitly or added to the optional request. |

##### Call Agent with History {#call-agent-with-history}

This action uses all defined settings, including the selected model, system prompt, tools, knowledge base, and model parameters to call the Agent using the specified `Request` and execute a `Chat Completions` operation. If a context entity is configured, the corresponding context object must be passed so that variables in the system prompt can be replaced. The operation returns a `Response` object containing the assistant’s final message, consistent with the chat completions operations from GenAI Commons.

To use it:

1. Create a `Request` object using the [Create Request](/appstore/modules/genai/genai-for-mx/commons/#chat-create-request), [Default Preprocessing](/appstore/modules/genai/conversational-ui-module/conversational-ui/#chatcontext-operations), or the [Create Request with Chat History](/appstore/modules/genai/conversational-ui-module/conversational-ui/#request-operations) action. You can set optional attributes (such as temperature) directly on the request if you want to override those defined in the agent version. You can also [add additional knowledge bases or tools to the request](/appstore/modules/genai/genai-for-mx/commons/#add-function-to-request) that are not already defined with the agent version.
2. Add at least one user message to the request using the [GenAI Commons operation](/appstore/modules/genai/genai-for-mx/commons/#chat-add-message-to-request). You can alternate between user and assistant messages if you want to send a whole conversation history to the model. If you used [Create Request with Chat History](/appstore/modules/genai/conversational-ui-module/conversational-ui/#request-operations) or [Default Preprocessing](/appstore/modules/genai/conversational-ui-module/conversational-ui/#chatcontext-operations) and your Chat Context contained messages, you can ignore this step.
3. Ensure the Agent object is in scope, for example, retrieve it from the database by name.
4. Optional: For more specific use cases, a context object can be passed for variable replacement. This object needs to be of the entity that was selected while [defining the agent](#define-context-entity).
5. Pass both the `Request`, Agent, and optionally the context object to the `Call Agent with History` activity.

For a conversational agent, the chat context can be created based on the agent in one convenient operation. Use the `New Chat for Agent` operation from the **Toolbox** under the **Agents Kit** category. Retrieve the agent (for example, by name) and pass it with your custom context object to the operation. Note that this sets the system prompt for the chat context, making it applicable to the entire (future) conversation. Similar to other chat context operations, an action microflow needs to be selected for this microflow action. For more information, see the [Creating a Custom Action Microflow](/appstore/modules/genai/conversational-ui-module/conversational-ui/#action-microflow) section of Conversational UI.

{{% alert color="info" %}}
Download the [Agent Builder Starter App](https://marketplace.mendix.com/link/component/240369) from the Marketplace for a detailed example of how to use the **Call Agent** activity in an action microflow of a chat interface.
{{% /alert %}}

##### Call Agent without History {#call-agent-without-history}

This action is only supported by Single-call agents which have a user prompt defined as part of the agent version. It uses all defined settings, including the selected model, system prompt, user prompt, tools, knowledge base, and model parameters to call the agent by executing a `Chat Completions` operation. If any of such parameters should be overwritten or you want to pass a knowledge base or tool that is not already defined with the agent, you can do this by creating a request and adding these properties before passing it as `OptionalRequest` to the operation. If a context entity was configured, the corresponding context object must be passed so that variables in the system prompt can be replaced. The operation returns a `Response` object containing the assistant’s final message, similar to the chat completions operations from GenAI Commons.

To use it:

1. Ensure the Agent object is in scope, for example, retrieve it from the database by name. 
2. Optional: Create a `Request` object using the [GenAI Commons operation](/appstore/modules/genai/genai-for-mx/commons/#chat-create-request) to set optional attributes (such as temperature), if you want to overwrite those from the agent version. You can also [add additional knowledge bases or tools to the request](/appstore/modules/genai/genai-for-mx/commons/#add-function-to-request) that are not already defined with the agent version.
3. Optional: For more specific use cases, a context object can be passed for variable replacement. This object needs to be of the entity that was selected while [defining the agent](#define-context-entity).
4. Optional: You can [create a file collection and add files](/appstore/modules/genai/genai-for-mx/commons/#initialize-filecollection) to it that can be sent along with the user message to the model. Check the documentation of the underlying LLM connector for support of files and images.
5. Pass Agent and, if relevant, the optional request and context objects to the `Call Agent without History` activity.

#### Transporting the Agent to Other Environments

With the above microflow logic, the agent version is ready to be tested within the end-user flow, either in a local or test environment. Additionally, the agent can be exported and imported for transport to other environments when needed.

To export the agent, use the export button on the page where the agent is edited, or use the export and import buttons available on the overview page.

If context objects or functions have been modified, ensure that the correct version of the project is deployed before importing the new agent definition. This ensures that the domain model and microflows are aligned with the new agent version.

### Improving the Agent {#improve-agent}

When an agent version is saved, a button is available to create a new draft version. You can use the new draft as a starting point to make small changes or improvements based on feedback, either from testing or after the agent has been live for some time, and new scenarios need to be covered.

#### Creating Multiple Versions

The new draft version will initially have the same prompt texts, tools, and linked knowledge bases as the latest version. You can then modify the prompt texts to cover additional scenarios, and update the tools and knowledge bases by adding, removing, or editing them as needed. Once the improved agent is ready, it can be saved as a new version.

#### Managing In-Use Version per Environment

Each time a new version of the agent is created, a decision must be made regarding which version to use in the end-user logic. Mendix recommends evaluating the active version as part of the testing and release process.

When importing new agents into other environments, selecting the in-use version is always a manual step, requiring a conscious decision. The user will be prompted to choose the version to be used as part of the import user flow. Later, you can manage the active version directly from the Agent Overview.

 {{< figure src="/attachments/appstore/platform-supported-content/modules/genai/agentcommons/Select_in_use.png" >}}

## Technical Reference

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" >}}
