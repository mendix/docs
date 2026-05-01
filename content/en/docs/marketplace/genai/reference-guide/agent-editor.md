---
title: "Agent Editor"
url: /appstore/modules/genai/genai-for-mx/agent-editor/
linktitle: "Agent Editor"
description: "Describes the purpose, configuration, and usage of the Agent Editor and Agent Editor Commons modules from the Mendix Marketplace that allow developers to build, define, and refine agents, and integrate GenAI principles and agentic patterns into their Mendix app."
weight: 20
---

## Introduction

The [Agent Editor](https://marketplace.mendix.com/link/component/257918) module enables users to develop, test, and optimize their GenAI use cases by creating effective agents that interact with large language models (LLMs).
With the Agent Editor module, you can define agents at design time in Studio Pro (11.9.0 and above) and manage their lifecycle as part of your project by leveraging existing platform capabilities such as Model documents, version control, and deployment capabilities. Agents can be defined and developed locally, and then deployed directly to cloud environments using the app model.

The Agent Editor is compatible with the Agent Commons module. Using this module, you can define and manage prompts, microflows (as tools), external MCP servers, knowledge bases, and large language models to build agentic patterns that support your business logic. Additionally, it allows you to define variables that act as placeholders for data from the app session context, which are replaced with actual values when the end user interacts with the app.

The Agent Editor module includes a Studio Pro extension that allows users to define GenAI Agents as documents in the app model. The Agent Editor Commons module, which is installed as part of the same package, includes logic and activities to call these agents from microflows in a running application.

{{% alert color="info" %}}
Currently, Agent Editor supports only Mendix Cloud GenAI as a provider. Support for other providers, such as (Azure) OpenAI and Amazon Bedrock, is planned for future releases.
{{% /alert %}}

### Typical Use Cases {#use-cases}

Typical use cases for Agent Editor include:

* Defining and maintaining agent behavior as part of the app model in the Studio Pro, including prompts, models, tools, and knowledge bases.

* Building agentic patterns directly in a Mendix app that rely on LLM interactions, microflow tools, MCP services, and knowledge base retrieval, while keeping configuration close to the application logic.

* Supporting team-based development workflows where agent definitions are version-controlled, reviewed, tested locally, and deployed together with the app to cloud nodes.

### Features {#features}

The Agent Editor helps teams design, test, and ship agents as part of their app lifecycle in the Studio Pro.

It provides the following features:

* Agent-specific Studio Pro documents for agent definitions and related dependencies, including text generation models, knowledge bases, and consumed MCP services.
* Prompt authoring with placeholder support, so runtime values from user or context objects can be injected during execution.
* Tool and knowledge base configuration directly in the Agent editor, including activation toggles for fast iteration and comparison.
* Built-in local test functionality from Studio Pro to validate prompts and agent behavior before release.
* Microflow integration through the **Call Agent** toolbox action under the **Agent Editor** category.
* Agent definitions as app-model documents under version control, making changes traceable and allowing rollback to previously committed states when needed.
* Deployment together with the app model, with environment-specific flexibility through constant overrides.

### Dependencies {#dependencies}

The Agent Editor module requires Mendix Studio Pro version 11.9.0 or above.

The following module dependencies are required for the currently supported capabilities of Agent Editor and need to be installed:

* [Administration](https://marketplace.mendix.com/link/component/23513)
* [Agent Commons](https://marketplace.mendix.com/link/component/240371)
* [Atlas Core](https://marketplace.mendix.com/link/component/117187)
* [Community Commons](https://marketplace.mendix.com/link/component/170)
* [Conversational UI](https://marketplace.mendix.com/link/component/239450)
* [Data Widgets](https://marketplace.mendix.com/link/component/116540)
* [Encryption](https://marketplace.mendix.com/link/component/1011)
* [GenAI Commons](https://marketplace.mendix.com/link/component/239448)
* [MCP Client](https://marketplace.mendix.com/link/component/244893)
* [Mendix Cloud GenAI Connector](https://marketplace.mendix.com/link/component/239449)
* [Nanoflow Commons](https://marketplace.mendix.com/link/component/109515)
* [Web Actions](https://marketplace.mendix.com/link/component/114337)

In addition, make sure the following widgets are available in your project:

* [Events Widget](https://marketplace.mendix.com/link/component/224259)
* [Markdown Viewer Widget](https://marketplace.mendix.com/link/component/230248)

## Installation {#installation}

If you are starting from a blank app or adding agent-editing functionality to an existing project, you need to manually install the [Agent Editor](https://marketplace.mendix.com/link/component/257918) package from the Mendix Marketplace. After downloading, you might see a warning asking for permission to add an extension to your app. Make sure to click **Trust module and enable extension** in the pop-up to install the Agent Editor.
Before proceeding, ensure your project includes the latest versions of the required [dependencies](#dependencies). Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to install the Agent Editor. 

After installation, two modules are added to your app:

* **Agent Editor** under **Add On modules** in the **App Explorer**. This module contains the Studio Pro extension that adds the new document types and editors.
* **Agent Editor Commons** under **Marketplace modules** in the **App Explorer**. This module contains the logic to call agents from microflows.

The detailed functionality of these modules is explained in the following sections of this page.

### First-Time Setup {#setup}

After installing the modules, complete the following setup before defining the model and Agent documents:

1. Exclude the `/agenteditor` folder from version control.
    In the Studio Pro, go to **App** > **Show App Directory in Explorer**. Then, in the file explorer, edit the `.gitignore` file and add `/agenteditor` on a new line. This folder contains log files and should typically not be tracked in Git.
2. Ensure the encryption key is configured in the **App** > **Settings** > **Configuration** in Studio Pro. 
    Make sure that it is 32 characters long. For more information, see the [EncryptionKey Constant](/appstore/modules/encryption/#encryptionkey-constant) section of *Encryption*.
3. Configure startup import logic.
    Select `ASU_AgentEditor` as your [after-startup microflow](/refguide/runtime-tab/#after-startup) in **App** > **Settings** > **Runtime**, or add it to your existing after-startup microflow.

## Configuration {#configuration}

To use the Agent Editor functionalities in your app, you must perform the following tasks in Studio Pro:

1. Define the model.
2. Define the agent with a prompt, context entity, and model settings.
3. Define and add tools and knowledge bases.
4. Test the agent.
5. Include the agent in the app logic.
6. Deploy the agent to cloud environments.
7. Improve the agent in the next iterations.

For a step by step tutorial, check out the [create your first agent](/appstore/modules/genai/how-to/howto-single-agent/#define-agent-editor) documentation.

### Defining the Model {#define-model}

With the Agent Editor, you can define the model as a document in your app model. This model can then be linked to one or more agents in your project.

Defining a Model document is mandatory. Without a Model document, the agent you configure in the next steps cannot run.

At this moment, only models provided by Mendix Cloud GenAI are supported.

Model configuration is document-based and can be managed directly in Studio Pro:

* A Model document can be added from the **App Explorer** at the module level. Right-click on the module or folder where you want to create your Model document, select **Add other**, and find Model in the bottom section.
* The **Model key** must be configured with a String constant that contains the key for a Text Generation resource. This key can be obtained in the [Mendix Cloud GenAI Portal](https://genai.home.mendix.com).
* After the key is selected, model metadata is imported and shown in the editor.
* You can validate the connectivity in the **Connection** section by using the **Test** button.

{{% alert color="info" %}}
The value you use for the constant in the Studio Pro can be different from the value used in cloud environments. Constant values can be overridden per environment during deployment. This, for example, means that you can locally connect to a text generation resource using a different key than the one used for production.
{{% /alert %}}

### Defining the Agent With a Prompt, Context Entity, and Model Settings {#define-agent}

After defining the model, define the Agent document and configure the prompts and context. This configuration is mandatory for the agent to run.

Defining an agent is also document-based and can be configured using the Agent editor:

* Add an Agent document from the **App Explorer** at the module level. Right-click on the module or folder where you want to create your Model document, select **Add other** and find Agent in the bottom section.
* Select a Module document for an agent to call a text generation resource.
* Configure the **System prompt** and, additionally for task-style execution, the **User prompt**. In these prompts, define placeholders with double braces (for example, `{{variable}}`).
* When placeholders are used, select a **Context entity** to resolve values at runtime. The placeholders used within the prompts need to match with the attribute names of the entity selected, so that attribute values can be inserted instead of the placeholders at runtime.
* Optionally, adjust the **Model settings** as needed (maximum tokens, temperature, and TopP), based on the supported ranges of the model provider.

You can also check out template agents in the **USE_ME** folder of the **AgentEditorCommons** module.

For more information about prompts and prompt engineering, see [Prompt Engineering](/appstore/modules/genai/prompt-engineering/).

Selecting a model is mandatory. You can save the document without it, but if the model configuration is incomplete, Studio Pro will show consistency errors. These errors block running the app locally, cloud deployment, and agent testing in later steps.

### Defining and Adding Tools and Knowledge Bases{#define-tools}

To extend the capabilities of your agent, you can add tools directly in the Agent editor. In the Agent Editor, microflows and (external) MCP services can be added as tools to let the agent act dynamically and autonomously, or to access specific data based on input it determines. When the agent is invoked, it uses the function calling pattern to execute the required microflow by using the input specified in the model response. For more technical details about microflow tools and function calling behavior, see [Function Calling](/appstore/modules/genai/function-calling/).

#### Configuring Consumed MCP Service {#define-mcp}

To use MCP tools, first create a consumed MCP service document in your module by selecting **Add other** > **Consumed MCP service** in the **App Explorer**.

In the consumed MCP service document, configure the following fields:

* **Endpoint**: This is the URL where the server can be reached. Create or select the String constant that contains your MCP endpoint.
* **Credentials microflow** (optional): Select this when the server requires authentication. The microflow must return a list of `System.HttpHeader` objects. Input parameters are not allowed.
* **Protocol version**: Select the version used by your server. Typical values are `v2025_03_26` for MCP servers that support streamable HTTP transport and `v2024_11_05` for SSE-type servers.

To validate the configuration, click **List tools** in the **Tools** section of the consumed MCP service document. If the connection succeeds, the list of exposed tools is shown.

In the consumed MCP service playground, authentication headers are used only to explore tools from Studio Pro and are not stored. Set up a credentials microflow to pass authentication headers at runtime.

#### Adding Tools to the Agent {#add-tools}

Add Tools can in the **Tools** section of the Agent editor by clicking **New** and selecting a tool type.

You can choose from the following tool types:

* **Microflow tool**: Select a microflow that returns a string. Provide a **Name** and **Description** so that the LLM can determine when to use the tool.
* **MCP tool**: Select a consumed MCP service in the tool configuration.

In the Agent editor, tools can be temporarily disabled and re-enabled by using the **Active** checkbox. This is useful while iterating and testing the agent behavior with different tool combinations or descriptions. Only enabled tools will be usable by the agent at runtime when called in the app.

Configure [tool choice](/appstore/modules/genai/genai-for-mx/commons/#enum-toolchoice) to control how the agent behaves with regard to tool calling.

#### Configuring Knowledge Base Document {#define-knowledgebase}

Knowledge bases are configured as separate documents and can then be linked to agents.

To configure a knowledge base, create the document in your module by selecting **Add other** > **Knowledge base** in the **App Explorer**.

At this moment, only Mendix Cloud GenAI knowledge bases are supported.

In the Knowledge base editor:

* Set the **Knowledge base key** by creating or selecting a String constant in your module.
* After selecting the key, verify that the knowledge base details are imported and shown.
* Optionally, click **List collections** to test the connection and see the available collections from the knowledge base resource under the **Configured Collections**.

#### Linking Knowledge Bases to the Agent {#add-knowledgebase}

To link a knowledge base to an agent, use the **Knowledge bases** section in the Agent editor and click **New**.

In the knowledge base entry:

* Select the configured knowledge base document in the **Knowledge base**.
* In **Collection**, select one of the available collections from the dropdown, type, or paste a collection name to reference a collection that does not exist yet.
* Provide **Name** and **Description** so the LLM can determine when this knowledge base should be used. This serves the same purpose as naming tools.
* Optionally configure retrieval settings:
    * **Max results** controls the maximum number of chunks returned in a single retrieval.
    * **Min similarity** sets the cosine-similarity threshold between 0 and 1. Higher values (for example, 0.8) are stricter than lower values (for example, 0.2).

Knowledge base links can also be temporarily disabled and re-enabled by using the **Active** checkbox, which helps when comparing retrieval behavior during rapid iteration. Only enabled knowledge bases will be usable by the agent at runtime when called in the app.

{{% alert color="info" %}}
Currently, MCP tools support whole-server integration only. Selecting individual tools from the server is not yet supported.
{{% /alert %}}

### Testing the Agent {#test-agent}

The Agent editor provides a **Test** button to execute test calls by using your local app at runtime.

Testing is available when the following conditions are met:

* The app model has no consistency errors in Studio Pro (as shown in the **Errors** pane).
* The app is running locally.
* The after-startup logic as mentioned in the [First-time Setup](#setup) section, has run successfully.
* The text generation resource configured in the Model document is reachable. You can verify this by clicking **Test** on the Model document.

If you change the agent definition (for example, by updating the system prompt or adding or removing tools), restart the local app runtime before testing again. The Agent editor provides a UI indication for this, but it is recommended to account for it explicitly while iterating.

When these conditions are met, you can use the test functionality to validate prompt behavior and configuration before integrating the agent into app logic.

If a call fails during testing, a generic error message is shown in the Agent editor UI. Detailed error information is available in the running app console in Studio Pro (the **Console** pane), similar to errors you would inspect while testing the app itself.

### Including the Agent in the App Logic {#call-agent}

You can include an agent in the app logic by calling it from a microflow. To do so, the Agent Editor provides the **Call Agent** toolbox actions in the **Agent Editor** category. The **Call Agent without History** action is currently focused on single-call, task-style execution, where **Call Agent with History** supports conversational scenarios with multiple messages.

When configuring the action, select the Agent document so that the right agent is called. If your prompts use variable placeholders, pass a context object to the action. This object must be of the selected context entity type so that placeholders can be resolved at runtime.

For **Call Agent without History**, you can optionally pass a `Request` object to set request-level values, and a `FileCollection` object with files to send along with the user message to make use of vision or document chat capabilities. For **Call Agent with History** the `Request` object is mandatory, as it contains any previous messages from the conversation. Support for files and images depends on the underlying large language model. Refer to the documentation of the specific connector.

The output is a `GenAICommons.Response` object, aligned with the GenAI Commons and Agent Commons domain models and actions, which can be used for further logic. Additionally, all agents created via the Agent Editor extension are seamlessly integrated with other Mendix offerings, such as the [Token consumption monitor](/appstore/modules/genai/genai-for-mx/conversational-ui/#snippet-token-monitor) or the [Traceability](/appstore/modules/genai/genai-for-mx/conversational-ui/#traceability) feature from [ConversationalUI](/appstore/modules/genai/genai-for-mx/conversational-ui/).

### Including the Agent in a Conversational User Interface (#conversational-ui)

Pages and Snippets as building blocks for chat-type UI patterns exist in the [ConversationalUI module](/appstore/modules/genai/genai-for-mx/conversational-ui/). The central entity here is the `ChatContext` which represents a user-agent chat session. When using the Agent Editor, in order to instantiate a new `ChatContext`, you can use the **New Chat for Agent** action in the microflow that opens your chat page and pass the Agent document. Read more about the conversational UI patterns in the [documentation](/appstore/modules/genai/genai-for-mx/conversational-ui/#chat-context-operations).

### Deploying the Agent to Cloud Environments {#deploy-agent}

Agents created with the Agent Editor are documents in the app model. This means they are packaged and deployed together with the rest of the app whenever a deployment is performed.

Environment-specific flexibility is provided through constants. Values such as the model key, knowledge base key, or custom MCP endpoint can be overridden per app environment during the deployment process. For details, see [Environment Details: Constants](/developerportal/deploy/environments-details/#constants).

Agents created in Studio Pro (using Agent Editor) are visible in the Agent Commons UI, but they are not editable there.

### Improving the Agent in Next Iterations {#improve-agent}

To change any agentic logic, update the Agent (and related) documents in the app model in Studio Pro and deploy the app to the cloud node again for the changes to take effect.

To return to historical agent versions, use version control to inspect previously committed states of the Agent document and related documents. This allows you to compare changes over time and restore an earlier configuration when needed.

## Known Limitations {#limitations}

* Currently, the Agent Editor supports only Mendix Cloud GenAI as a provider for text generation models and knowledge bases. Support for other providers, such as (Azure) OpenAI and Amazon Bedrock, is planned for a future release.
* Support for Mac users is limited: some functionalities might not work, such as doing a test call for Model documents. Mendix recommends using Studio Pro on Windows to use all features of the Agent Editor smoothly.
* MCP tool support is limited to whole-server integration. Selecting individual tools from a consumed MCP service to be added to an agent is not yet supported. That also means that the tool choice option `Tool` can only refer to a microflow tool currently.
* If a document that is referenced by an Agent document is excluded, Studio Pro shows a consistency error accordingly. In the current version, these consistency errors may not be resolved automatically when the excluded document is included again. You can resolve it by synchronizing the project directory (<kbd>F4</kbd>) or by making a small change in any agent-related document (for example, add a character to a system prompt and remove it again).
* The extension creates a `/agenteditor` log folder in the app directory. This is not excluded from version control automatically upon including the module from the Marketplace. This folder should be added to `.gitignore` manually as described in the [First-time setup](#setup) section.

## Troubleshooting {#troubleshooting}

### Testing the Agent From Studio Pro Results in an Error

This error is typically due to incorrect model configuration or an exception originating from the API call of the large language model. Check the **Console** pane in Studio Pro for detailed logs. Additionally, verify that the `ASU_AgentEditor` microflow was added to your after-startup logic as described in the [First-time setup](#setup) section, and that the app startup has completed fully.

### Testing the Agent From Studio Pro Is Disabled

Executing a test requires a running local app and synchronized Agent documents to the runtime. Make sure the app has been deployed locally after the last change in any agent-related document.

### The App Does Not Start Locally

This is often caused by validations that are executed in the after-startup logic. Make sure that the encryption key is set and all model and knowledge base documents are correctly configured with valid constant values. Check the **Console** pane in Studio Pro for additional details.

### Errors Pane Shows “Extension Agent-Editor Failed To Complete Its Consistency Checks”

This is a known issue caused by internal timeouts. It is more likely to occur if there are many Agent documents as part of the project. You can resolve it by synchronizing the project directory (<kbd>F4</kbd>), running the project locally, or by making a small change in any agent-related document (for example, add a character to a system prompt and remove it again). If it happens very frequently, contact Mendix Support.

### Agent Documents Are Not Visible in Agent Commons UI

Agent documents created in Studio Pro are imported through after-startup logic. Verify that `ASU_AgentEditor` is configured as the after-startup microflow, or included in your existing after-startup microflow as described in the [First-time setup](#setup) section. After these configuration changes, restart the app.

### MCP Tools Cannot Be Listed or Called

If the **List tools** fail, verify the consumed MCP service configuration: endpoint constant value, protocol version, and credentials microflow (when authentication is required). For technical details, the log files in the `/agent-editor` folder of the app directory can be inspected.

If possible, also confirm that the target endpoint is reachable from the running app runtime: this can be done for example, by temporarily configuring it manually in the [MCP Client module](/appstore/modules/genai/mcp-modules/mcp-client/) and checking the **Console** pane in Studio Pro for logs.

If calling the tools fails at runtime while testing the agent, check the **Console** pane in Studio Pro for error logs.

### Knowledge Base Collections Are Not Listed for Mendix Cloud Knowledge Bases

If the **List collections** does not return results, verify the **Knowledge base key** constant and confirm that the configured knowledge base resource is reachable.

### Placeholder Values Are Not Resolved During Calls

If prompts contain placeholders, ensure a context object is passed, and it matches the selected **Context entity**. Also, verify that variable names in the prompt match available attributes on that entity.

### Extension Is Not Loaded After Module Import from Marketplace

If you import the Agent Editor for the first time and the options to create Agent, Model, Knowledge base, or Consumed MCP service documents do not appear, or if the extension is not listed under **View** > **Extensions**, restart Studio Pro.

If you previously used the Agent Editor and now see an error such as `The parameter 'Agent' is of unknown type 'agenteditor.agent'.`, restart Studio Pro.

In both cases, confirm that the Agent Editor extension is loaded and enabled under **View** > **Extensions**.
