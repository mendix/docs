---
title: "Prompt engineering"
url: /appstore/modules/genai/concepts/prompt-engineering/
linktitle: "Prompt engineering"
weight: 2
description: "Describes prompt engineering"
---

## 1 Introduction

Prompt engineering is the action of designing the input text that will be send to the model. This typically contains input from the end-user, enriched with instructions from the developer / administrator. A prompt typically contains:
* instructions on what the model should do,
* context & information that the model needs to follow the instructions,
* the relevant input data (from the end-user or passed from a microflow),
* the requested output structure (e.g. tone of voice or a JSON format).

Prompt engineering is very important to instruct the model to do what you would like it to do. It's therefore the first step to take when creating an AI Bot. When implementing patterns like RAG and ReAct, you can still change the behavior of the system by modifying the prompt. You need to explain the system how to use the knowledge and functions that is provided, otherwise it might ignore it, or act in a different way.

## 2 Typical components of a prompt

### 2.1 Instructions

Explain what the model should do. You have a specific task in mind, make sure to break it down into clear steps and create instructions that can be followed. When you explain what persona or role the model should fulfill, this will help the model to follow the instructions more easily.

When the input text is directly coming from the user, the instructions should also include what not to do.

### 2.2 Context & additional information

After explaining the model what to do, you can include additional context. You kan think about:
* Information about the user in your application (e.g. language, role, department, specific database records),
* Context information (e.g. a dump of all relevent data of the object the user is looking at),
* Knowledge coming from RAG.

Tip: you can use export to JSON or XML to provide this information in a structured way.

### 2.3 Input data

The actual input from the user.

### 2.4 Output
You can instruct the model to output in a specific way. Examples of this are:
* The model can output it's reasoning steps, or skip those.
* Generate a JSON structure based on an example, if you want to import the response for generating data or getting information about the reasoning.
* Use a specific tone of voice, target audience or content length.
* Use (or not use) Markdown formatting.
* Skip or include a pre-amble.


## 3 An iterative approach

It's recommended to test your system prompt against different scenarios. Writing a prompt is therefore similar to modelling a microflow.
1. You should start with a goal: what should the system do?
2. Think about your test & edge cases: what should the system do in what situation?
3. Write a first version of the prompt.
4. Test your prompt against your test cases.
5. Refine the prompt, by tweaking your variables and writing defensive statements against undesired behavior.

There is a difference between how models behave. For example newer models might interpret instructions slightly differently, or are more elaborate. It's therefore recommended to test your prompt when you switch models (e.g. after upgrading from ChatGPT-3.5 to ChatGPT-4o).


## 4 Some tips for better prompting

### 4.1 Specifity

Specifity and clarity are important. Just like humans, LLMs won't read your mind and need specific instructions. There is a difference between:

```
Write a story about Mendix
```
and
```
Write a story about Mendix.
It should be 1000 words long.
It should be focussed on the business impact low code can make on a company.
Make it exciting and focused on developers.
```

Tip: if you're unsure about whether a prompt is clear enough, ask a co-worker to interpret the prompt and see if they would follow the prompt and reach your desired outcome.

### 4.2 Explicitly allow the model to think

When you provide the model with instructions to reason about a problem and identify the steps needed to solve the problem, it will actually follow those instructions. Instead of relying on the model to come up with the best strategy to solve the problem, it helps to break the larger problem down into smaller steps. As an end result the quality of the output will be higher compared to asking the LLM to come up with the answer right away. 

### 4.3 Allow the model to say "I don't know"

A model will always try to follow the instructions and can therefore come up with a response that might not be what you expect, or worse: made up. In jargon we call this a hallucination. When you include in your system prompt that the LLM can ask for more info, or can respond that it does not know something this will make it more effective. Example components are:
```
If you are unsure how to respond, say “Sorry, I didn’t get that. Could you rephrase the question or provide more details?”
```

```
You're a barista that only talks about coffee.
If a user asks something about other topics, say:
    “Sorry, as a barista I cannot help you with that. Would you like some recommendations on how to brew coffee?”
```

```(In an RAG setup):
'You are a helpful assistant that tries to answer user questions based on chunks of topic-specific data.
If you cannot answer a question based on the provided information alone, you respond that you do not know.
For the current question, please base the answer on the following pieces of information:
<information>
...
</information>
```

### 4.4 Define the role the model fulfills

You can prime the model by explaining what it does. This will create a bias of the model towards specific reasoning and increase the quality of their answer based on what you expect from the (stereotypical) persona.

Examples are:

```
You are a helpdesk assistant
```

```
You are a writer that is specialized in marketing context
```

### 4.5 Explain the model what to do with provided tools

When using topics like Function Calling make sure that Functions have a descriptive name. Also instruct the model what the Functions can do and how they should be used. This will ensure that the LLM will call the functions at the right moment and use the response in the correct way. E.g. when using a tool like: `GetTicketInformationForIdentifier`:

```
Do not make assumptions about the Ticket Identifier.
Ask for clarification if you do not know this.
Only use the ticket information from the GetTicketInformationForIdentifier function for answering questions on ticket information.
```


### 4.6 Provide structure

When the prompt becomes longer it an help to use XML-like tags to give more structure to the prompt. This will help the model interpret the different sections and their role in the prompt better. You can use something like:

```xml
<instructions>
Answer the question of the user.
Base it on the articles provided.
Provide a reference to the articles where relevant.
</instructions>
<article>article 1</article>
<article>article 2</article>
<input>{user input}</input>
<output_formatting>
Write in a lively tone of voice.
Do not exceed 200 words.
Skip the preambule.
<output_formatting>
```

## 5 Learn more

### 5.1 Showcases
Check out the [OpenAI](https://marketplace.mendix.com/link/component/220475) and [Bedrock](https://marketplace.mendix.com/link/component/223535) Showcase Apps on the Marketplace to see how you can apply prompt engineering in practice to let a model perform specific tasks.

### 5.2 Bedrock & Anthropic Claude

- [AWS Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-engineering-guidelines.html)
    - [Examples](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-templates-and-examples.html)
- [Anthropic Claude](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
  - [Prompt Library](https://docs.anthropic.com/en/prompt-library/library)
- [Prompt Engineering Guide](https://www.promptingguide.ai/)

### 5.3 OpenAI

- [OpenAI](https://platform.openai.com/docs/guides/prompt-engineering)
    - [Examples](https://platform.openai.com/docs/examples)
- [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering)
- [Prompt Engineering Guide](https://www.promptingguide.ai/)
