---
title: "Snowflake Cortex"
url: /appstore/modules/genai/snowflake-cortex/
weight: 50
description: "Describes the Snowflake Cortex service."

---

## Introduction

[Snowflake Cortex AI](https://docs.snowflake.com/en/guides-overview-ai-features) allows users to quickly analyze data and build generative AI applications using fully managed LLMs, vector search and fully managed text-to-SQL services. It also enables multiple users to use AI models with no-code, SQL and Python interfaces.

## Integrating Your Mendix App with Snowflake Cortex

To allow your Mendix app to use Snowflake Cortex GenAI functionalities, install and configure the [Snowflake REST SQL connector](/appstore/connectors/snowflake/snowflake-rest-sql/).

Mendix also offers a [Snowflake showcase app](https://marketplace.mendix.com/link/component/225845), which you can use as an example of how to implement the Cortex functionalities in your own app.

## Functionalities Available in the Snowflake Showcase App

The Snowflake showcase app shows an example implementation of the following GenAI functionalities:

* [Analyst](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-analyst)
* [COMPLETE](https://docs.snowflake.com/en/user-guide/snowflake-cortex/llm-functions#label-cortex-llm-complete)
* [TRANSLATE](https://docs.snowflake.com/en/user-guide/snowflake-cortex/llm-functions#label-cortex-llm-translate)

In addition to the above, the integration also supports the [ANOMALY DETECTION](https://docs.snowflake.com/en/user-guide/ml-functions/anomaly-detection) ML functionality.

The showcase app has the following pages:

* **Introduction** - Information about Snowflake AI and the necessary prerequisites to use it.
* **Machine Learning** - Sample implementation of the ANOMALY DETECTION machine learning functionality.
* **Large Language Models** - Information about the available LLM functions, as well as a sample implementation of COMPLETE and TRANSLATE.
* **Cortex Analyst** - Sample implementation of Snowflake Cortex Analyst, including a chat feature that can take the SQL answer returned by Cortex Analyst, and convert it to natural language.

Under the hood, the functionalities are implemented by calling them from microflows which you can use as examples to implement the functions in your own app. For more information, refer to the following sections.

### Implementing the Analyst Functionality

For more information about configuring the integration between Mendix and Snowflake Cortex Analyst, see [Configuring Snowflake Cortex Analyst](/appstore/connectors/snowflake/snowflake-rest-sql/#cortex-analyst).

### Implementing Other Functionalities {#functionalities}

The [Snowflake showcase app](https://marketplace.mendix.com/link/component/225845) contains example implementations of the Analyst, ANOMALY DETECTION, COMPLETE and TRANSLATE functionalities. To examine these examples, perform the following steps:

1. Import the sample app into your Mendix Studio Pro.

    For more information, see [How to Use Marketplace Content](/appstore/use-content/).

2. In Studio Pro, in the [App Explorer](https://docs.mendix.com/refguide/app-explorer/), go to **Showcase_AI_RESTSQLAPI** > **Pages**.

    This section contains the following pages: 

    1. Introduction
    2. ML functions
    3. Cortex LLM Functions
    4. Cortex Analyst
   

3. To see how a Snowflake Cortex Analyst action is called, use the **Explorer** search box to find and open the *EXAMPLE_CortexAnalyst_GenerateResponseMessage** microflow.

   {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-rest-sql/CortexAnalystRequestExample.png" >}}

    This microflow calls the Snowflake Cortex Analyst function.

4. To see how you can modify the statement, refer to the *DS_Statement_ML_CreateView_Analyze* example microflow and check how the parameters are set at the **Statement_SetUp** step.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/genai/snowflake/StatementSetup.png" alt="" >}}

    For information about the parameters required by each functionality, refer to Snowflake documentation.   
