---
title: "Extensions API"
url: /extensions-api/
description: "Studio Pro Extensions API documentation."
weight: 55
no_list: false
description_list: true
cascade:
    - content_type: "APIs and SDK"
    - mendix_version: 10
---

# Mendix Studio Pro Extensions

Welcome and thanks for using the Studio Pro Extensibility API.
Extensions are self-contained modules which users can add to Studio Pro. This means that with Extensibility you can add new features and functionality to Studio Pro. The Extensibility API is an api that allows developers to interact with a curated list of internal systems of Studio Pro. This documentation provides guides and reference documentation for the Extensibility API.

## Intended Audience

In order to use extensions you will need at least a basic understanding of the Mendix platform. You will need this some understanding of the Mendix Model and additionally some C# development experience.
Extensions are developed using [C#](https://docs.microsoft.com/en-us/dotnet/), and compiled into a `.dll` assembly file.

If you need to add your own custom UI to Studio Pro, you can achieve this using web technology.
Your web-based UI will be rendered in Studio Pro using a [hosted web view](/extensions-api/webview_intro/), the API provides communication functionality between your web UI and the C# extension logic.

## Getting Started:

For detailed explanation on how to get started with extensions you can check out our [getting started guide](getting_started/).

We also supply a list of [Tutorials](/extensions-api/tutorials/) to help you get started.

You can also check out our samples and [Api reference documentation](https://github.com/mendix/ExtensionAPI-Samples)

For information on our releases please see the [Extensions Api Release Notes](/extensions-api/release_notes/) page.