---
title: "Glossary"
url: /appstore/modules/genai/glossary/
linktitle: "Glossary"
weight: 5
description: "Quick reference for key agentic and generative AI terms used in Mendix documentation."
---

## Introduction

This glossary provides brief definitions of key agentic and generative AI terms used in the Mendix documentation.

## Agent {#agent}

An AI system that combines an LLM with a reasoning loop and can be extended with memory, tools, skills, and the ability to call and execute functions. It can plan, evaluate results, and iterate toward a goal. For more information, see [GenAI Agents](/appstore/modules/genai/agents/).

## Agent Orchestration {#agent-orchestration}

The coordination layer—often built within an app or workflow—that manages how agents work together: which agent takes responsibility, what context is shared, and how handoffs, retries, failures, and recovery are handled.

## Agentic {#agentic}

Describes a system, workflow, or behavior that operates with some degree of intelligence, autonomy, or adaptive decision-making, even when not built as a standalone agent.

## Agentic Workflow {#agentic-workflow}

A workflow pattern where specific steps are handled through agentic decision-making instead of fixed logic. The workflow keeps the overall structure and control; agentic components handle steps that require reasoning, interpretation, or adaptive action.

## Embeddings {#embeddings}

Mathematical representations of text as numeric vectors. Embeddings models convert strings into vectors of fixed dimension, where conceptually similar strings result in similar vectors. This enables semantic search based on meaning rather than exact character matches. Embeddings are typically stored in a [vector database](#vector-database) and are a core component of [RAG](#retrieval-augmented-generation).

## Generative AI {#generative-ai}

A category of artificial intelligence technology that can generate new content such as text, images, code, or other outputs based on learned patterns from training data. Generative AI can be used to accelerate business processes, provide user-friendly interactions, and enhance apps with features such as chatbots, content generation, text analysis, and language translation.

## Hallucination {#hallucination}

When an LLM generates incorrect, nonsensical, or fabricated information that is not grounded in its training data or the provided context. Hallucinations occur when models fill gaps in knowledge with plausible-sounding but inaccurate content. For example, an LLM might confidently state that a fictional person won an award that never existed, or cite nonexistent research papers.

## Human in the Loop {#human-in-the-loop}

A design pattern where an agent pauses at defined points to request human input—such as approval, correction, or a decision—before continuing. The human is an active part of the agent’s execution, not just a monitor of it.

## Knowledge Base {#knowledge-base}

A storage system for discrete pieces of information that can be retrieved and used to augment prompts. Combining a knowledge base with [embeddings](#embeddings) (vector representations of the data) creates a [vector database](#vector-database) that supports semantic similarity searches. Knowledge bases are essential for [RAG](#retrieval-augmented-generation) patterns. In Mendix, the [PgVector Knowledge Base](/appstore/modules/genai/pgvector/) module provides this functionality.

## Large Language Model (LLM) {#large-language-model}

An advanced neural network trained on large amounts of text that can understand input and generate responses. LLMs can perform tasks such as text generation, answering questions, summarization, and translation. Mendix connectors support LLMs from providers including OpenAI, Amazon Bedrock, and Mendix Cloud GenAI. For details on supported models, see [Available Models](/appstore/modules/genai#models).

## Model Context Protocol (MCP) {#model-context-protocol}

An open protocol that standardizes how large language models can autonomously connect to applications. MCP enables apps to expose tools and prompts to external clients, and consume tools and prompts from external servers. Mendix provides an MCP Server module to build an MCP server from a Mendix app, enabling developers to expose tools and prompts to external MCP clients, as well as an MCP Client module that enables your app to connect to MCP servers, allowing it to discover and use tools and prompts. For more information, see [Model Context Protocol](/appstore/modules/genai/mcp/).

## Prompt Engineering {#prompt-engineering}

The practice of structuring instructions to guide generative AI models in producing desired outcomes. Prompt engineering involves designing the input text sent to the LLM, typically through [system prompts](#system-prompt) and [user prompts](#user-prompt). This includes crafting instructions on what the model should do, providing context and information needed to follow those instructions, structuring input data, and specifying the requested output format. The quality of prompts directly influences the quality of AI responses. For more information, see [Prompt Engineering](/appstore/modules/genai/prompt-engineering/).

## Retrieval Augmented Generation (RAG) {#retrieval-augmented-generation}

A pattern that combines [embeddings](#embeddings)-based knowledge retrieval with text generation. RAG retrieves relevant information from a specified [knowledge base](#knowledge-base) (typically a [vector database](#vector-database)) based on the user's input, augments the prompt with this retrieved data, and then generates a response grounded in that specific information. This allows models to answer questions about private or domain-specific data. For example, when a user asks "What is our refund policy?", RAG retrieves relevant policy documents from the knowledge base, adds them to the prompt, and generates an accurate answer based on the actual policies.

## System Prompt {#system-prompt}

Instructions that define the model's behavior, role, and constraints. System prompts establish how the LLM should respond and what personality or expertise it should adopt. These are typically set by developers and stay the same across interactions. For example, "You are a helpful customer service assistant for an e-commerce platform. Always be polite, concise, and follow company policies when answering questions."

## Token {#token}

The basic unit of text that LLMs process. Models break down text into tokens, which can be words, parts of words, or individual characters depending on the model's tokenization method. For example, "agentic workflow" might be broken into tokens like `["agent", "ic", " work", "flow"]`.

## Tool Calling {#tool-calling}

A capability that allows LLMs to request execution of specific functions or tools to gather additional information or perform actions. The model returns a structured request indicating which function to call and with what parameters, which the app then executes and returns results to the model. Also known as tool use or function calling. Tool calling enables agent patterns like ReAct (Reasoning + Acting), where agents iteratively reason about what to do and then call tools to take action. For more information, see [Tool Calling](/appstore/modules/genai/function-calling/).

## Trace {#trace}

A trace is a structured record of execution across a system or workflow. In the context of an agent, it captures the sequence of inputs, reasoning steps, tool calls, intermediate actions, and outputs that led to a result.

## User Prompt {#user-prompt}

The input text provided by an end user or app to an LLM. User prompts contain the specific question, request, or data that the model should process. These vary with each interaction based on what the user needs. For example, "What is your refund policy?" or "Summarize this customer feedback: [feedback text]." User prompts work in combination with [system prompts](#system-prompt) to produce responses.

## Vector Database {#vector-database}

A specialized database designed to store and query [embeddings](#embeddings) vectors. Vector databases support similarity searches using mathematical techniques (such as measuring vector similarity) to find the most semantically similar items to a query. This capability is essential for [RAG](#retrieval-augmented-generation) patterns. In Mendix, PostgreSQL with the pgvector extension serves as a vector database. For more information, see [PgVector Knowledge Base](/appstore/modules/genai/pgvector/).
