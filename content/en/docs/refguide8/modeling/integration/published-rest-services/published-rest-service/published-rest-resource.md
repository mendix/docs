---
title: "Published REST Resource"
url: /refguide8/published-rest-resource/
weight: 50
description: "The configurable options for a published REST resource"
tags: ["published REST", "resource", "studio pro"]
# If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# linked from DM: published rest > add resource > help (integration)
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/published-rest-resource.pdf).
{{% /alert %}}

## 1 Introduction

A published REST resource is part of a [published REST service](/refguide8/published-rest-service/) and represents a collection of items on which one or more [operations](/refguide8/published-rest-operation/) can be defined.

You can generate a published REST resource from an entity in your domain model. See [Generate a Published REST resource](/refguide8/generate-rest-resource/).

## 2 General

### 2.1 Resource Name{#name}

The resource name uniquely identifies the resource in the [service](/refguide8/published-rest-service/). It is part of the location of the operations, so it cannot contain spaces or special characters.

## <a name="public-documentation"></a>2.2 Public Documentation

The public documentation is used in the service's [OpenAPI (Swagger) documentation page](/refguide8/published-rest-services/#interactive-documentation). You can use [GitHub-flavored markdown](/refguide8/gfm-syntax/) for rich text.
