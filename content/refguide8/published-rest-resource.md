---
title: "Published REST Resource"
url: /refguide8/published-rest-resource/
parent: "published-rest-service"
menu_order: 50
description: "The configurable options for a published REST resource"
tags: ["published REST", "resource", "studio pro"]
# If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# linked from DM: published rest > add resource > help (integration)
---

{{% alert type="info" %}}
<img src="attachments/chinese-translation/china.png" style="display: inline-block; margin: 0" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/published-rest-resource.pdf).
{{% /alert %}}

## 1 Introduction

A published REST resource is part of a [published REST service](published-rest-service) and represents a collection of items on which one or more [operations](published-rest-operation) can be defined.

You can generate a published REST resource from an entity in your domain model. See [Generate a Published REST resource](generate-rest-resource).

## 2 General

### <a name="name"></a>2.1 Resource Name

The resource name uniquely identifies the resource in the [service](published-rest-service). It is part of the location of the operations, so it cannot contain spaces or special characters.

## <a name="public-documentation"></a>2.2 Public Documentation

The public documentation is used in the service's [OpenAPI (Swagger) documentation page](published-rest-services#interactive-documentation). You can use [GitHub-flavored markdown](gfm-syntax) for rich text.
