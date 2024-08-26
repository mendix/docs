---
title: "Extensibility API"
url: /apidocs-mxsdk/apidocs/extensibility-api/
description: "Describes the Studio Pro Extensibility API."
weight: 57
no_list: false
description_list: true
---

{{% alert color="warning" %}} This feature is in beta. For more information, see [Beta Releases](/releasenotes/beta-features/). {{% /alert %}}

## Introduction

Extensions are self-contained modules which users can add to Studio Pro. This means that with extensibility you can add new features and functionality to Studio Pro. The Extensibility API is an API that allows developers to interact with a curated list of internal systems of Studio Pro. This documentation provides guides and reference documentation for the Extensibility API.

If you need to add your own custom UI to Studio Pro, you can achieve this using web technology. Your web-based UI will be rendered in Studio Pro using a hosted web view, the API provides communication functionality between your web UI and the C# extension logic.

## Prerequisites

* You need at least a basic understanding of the Mendix platform.
* You need some understanding of the Mendix Model.
* You need to have some C# development experience. Extensions are developed using [C#](https://docs.microsoft.com/en-us/dotnet/), and compiled into a `.dll` assembly file.

## Getting Started

For detailed explanation on how to get started with extensions, check out [Get Started with the Extensibility API](/apidocs-mxsdk/apidocs/extensibility-api/getting-started/).

You can also check out our examples and [API reference documentation](https://github.com/mendix/ExtensionAPI-Samples).

## How-tos

Here is a list of how-tos for you to begin with:

* [How to create a menu extension](/apidocs-mxsdk/apidocs/extensibility-api/create-menu-extension/)
* [How to create a dockable pane](/apidocs-mxsdk/apidocs/extensibility-api/create-dockable-pane-extension/)
* [How to add a context menu to an entity](/apidocs-mxsdk/apidocs/extensibility-api/create-context-menu/)
* [How to host some web content inside a modal dialog using a modal web view](/apidocs-mxsdk/apidocs/extensibility-api/create-modal-web-view/)
* [How to create microflows for calculations](/apidocs-mxsdk/apidocs/extensibility-api/create-microflows-for-calculations/)

## Learn More

You can dive into the following topics in depth:

* [What are the extension points](/apidocs-mxsdk/apidocs/extensibility-api/extensionpoints_intro/)
* [What are the Extensibility API services](/apidocs-mxsdk/apidocs/extensibility-api/introductions/services/)
* [How to access the Studio Pro from the Model API](/apidocs-mxsdk/apidocs/extensibility-api/interact-with-model-api/)
* [How to host web content via a web view wrapper](/apidocs-mxsdk/apidocs/extensibility-api/introductions/web-views/)
* [How to build a Todo example extension](/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/build-todo-example-extension/)
* [What are extension points](/apidocs-mxsdk/apidocs/extensibility-api/extensionpoints_intro/)

## Documentation in This Category
