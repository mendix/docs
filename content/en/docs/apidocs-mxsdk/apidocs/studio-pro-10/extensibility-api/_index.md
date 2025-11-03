---
title: "Extensibility API"
url: /apidocs-mxsdk/apidocs/extensibility-api-10/
description: "The Extensibility API allows you to extend Studio Pro by adding custom functionality."
weight: 57
no_list: false
description_list: true
cascade:
    - beta: true
---

{{% alert color="warning" %}} This feature is in beta. For more information, see [Release Status](/releasenotes/release-status/). {{% /alert %}}

{{% alert color="info" %}}
For information on new releases of the Extensibility API see:

* [Extensibility: C# API Release Notes](/releasenotes/studio-pro/csharp-extensibility-api/). 
* [Extensibility: Web API Release Notes](/releasenotes/studio-pro/web-extensibility-api/).
{{% /alert %}}

## Introduction

Extensions are self-contained modules which users can add to Studio Pro. This means that with extensibility you can add new features and functionality to Studio Pro. The Extensibility API is an API that allows developers to interact with a curated list of internal systems of Studio Pro. This documentation provides guides and reference documentation for the Extensibility API.

The API is provided in two flavors, depending which language you are developing in. C# and web based (via Typescript):
