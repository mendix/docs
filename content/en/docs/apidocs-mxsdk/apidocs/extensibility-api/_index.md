---
title: "Extensibility API"
url: /apidocs-mxsdk/apidocs/extensibility-api/
description: "Describes the Studio Pro Extensibility API."
weight: 57
no_list: false
description_list: true
---

## 1 Introduction

Extensions are self-contained modules which users can add to Studio Pro. This means that with extensibility you can add new features and functionality to Studio Pro. The Extensibility API is an API that allows developers to interact with a curated list of internal systems of Studio Pro. This documentation provides guides and reference documentation for the Extensibility API.

If you need to add your own custom UI to Studio Pro, you can achieve this using web technology. Your web-based UI will be rendered in Studio Pro using a hosted web view, the API provides communication functionality between your web UI and the C# extension logic.

## 2 Prerequisites

* You need at least a basic understanding of the Mendix platform.
* You need some understanding of the Mendix Model.
* You need to have some C# development experience. Extensions are developed using [C#](https://docs.microsoft.com/en-us/dotnet/), and compiled into a `.dll` assembly file.

## 3 Getting Started

For detailed explanation on how to get started with extensions you can check out the [Getting Started Guide](/apidocs-mxsdk/apidocs/extensibility-api/getting-started/).

You can also check out our samples and [API reference documentation](https://github.com/mendix/ExtensionAPI-Samples).

## 4 How-toss

Here is a list of how-tos for Extensibility API:

- How to [create a menu extension](/extensions-api/create-menu-extension/)
- How to [create a dockable pane](/extensions-api/create-a-dockable-pane/)
- How to [add a context menu](/extensions-api/add-context-menus/) to an entity
- How to host some web content inside a modal dialog using [a modal web view](/extensions-api/modal_webview_tutorial/)
- How to [create a microflow](/extensions-api/create-microflows/)

## 5 Learn More

You can delve into some in depth topics by following any of the links below:

- What are [extension points](/extensions-api/extensionpoints_intro/)
- What is the Extensibility API [services](/extensions-api/services_intro/)
- How to Access the Studio Pro from extensions [model API](/extensions-api/modelapi_intro/)
- How to host Web content via [web view wrapper](/extensions-api/webview_intro/)
- Todo Extension full sample app [todo extension](/extensions-api/todo_extension/)
- Also, please check out our API reference documentation from the Top Menu

## 6 Documentation in This Category
