---
title: "Extensibility API for C# Developers"
linktitle: "C# Extensibility API"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-11/
description: "The C# extensibility API allows your custom Studio Pro extensions developed in C# to interact with some internal services of Studio Pro."
weight: 10
aliases:
    - /apidocs-mxsdk/apidocs/extensibility-api/
---

{{% alert color="warning" %}}
This feature is in beta. For more information, see [Release Status](/releasenotes/release-status/).
{{% /alert %}}

{{% alert color="info" %}}
For information on new releases of the Extensibility API, see [Extensibility: C# API Release Notes](/releasenotes/studio-pro/csharp-extensibility-api/).
{{% /alert %}}

## Introduction

Extensions can be written in C#, described here, or using a web API (for more information about the Web API, see [Extensibility API for Web Developers](/apidocs-mxsdk/apidocs/web-extensibility-api-11/)).

To add a custom UI to Studio Pro, you can use web technology. Your web-based UI will be rendered in Studio Pro through a hosted web view, and the API provides communication between your UI and the C# extension logic.

## Prerequisites

To use the C# API, you must have:

* A basic understanding of the Mendix platform
* Some understanding of the Mendix Model
* Some C# development experience

 Extensions are developed using [C#](https://docs.microsoft.com/en-us/dotnet/) and compiled into a `.dll` assembly file.

## Getting Started

For detailed information on how to get started with extensions, see [Get Started with the Extensibility API](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/get-started/).

You can also review some examples and [API reference documentation](https://github.com/mendix/ExtensionAPI-Samples).

## How-tos

Here is a list of how-tos for you to begin with:

* [How to Create a Menu Extension](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-menu-extension/)
* [How to Create a Dockable Pane Extension](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-dockable-pane-extension/)
* [How to Create a Context Menu](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-context-menu/)
* [How to Create a Web View Hosted Inside a Modal Dialog](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-modal-web-view/)
* [How to Create Microflows for Calculations](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-microflows-for-calculations/)
* [How to Interact with the Model API](/apidocs-mxsdk/apidocs/interact-with-model-api-11/)
* [How to Create a Microflow and Add Activities](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-microflow-add-activities/)
* [How to Add Menus and Sub-menus](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/add-menu/)
* [How to Build a To-do Example Extension](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/build-todo-example-extension/)
* [How to Export a C# Extension](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/export-an-extension/)

## Advanced APIs

Below are APIs for advanced users:

* [Use the Untyped Model Access API Using C#](/apidocs-mxsdk/apidocs/untyped-model-access-api-11/)

## Reference Guide

Review the following reference guides to explore additional Extensibility API topics:

* [Extension Points](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/extension-points/)
* [Extensibility Services](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/services/)
* [Extensibility Web Views](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/web-views/)
