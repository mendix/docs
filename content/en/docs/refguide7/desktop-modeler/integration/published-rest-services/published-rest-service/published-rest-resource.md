---
title: "Published REST Resource"
url: /refguide7/published-rest-resource/
weight: 50
description: "The configurable options for a published REST resource"
tags: ["published REST", "resource"]
# If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# linked from DM: published rest > add resource > help (integration)
---

{{% alert color="info" %}}

The **published REST service** feature was introduced in version 7.10.0.

{{% /alert %}}

## 1 Introduction

A published REST resource is part of a [published REST service](/refguide7/published-rest-service/) and represents a collection of items on which one or more [operations](/refguide7/published-rest-operation/) can be defined.

You can generate a published REST resource from an entity in your domain model. See [Generate a Published REST resource](/refguide7/generate-rest-resource/).

## 2 General

### 2.1 Resource Name{#name}

The resource name uniquely identifies the resource in the [service](/refguide7/published-rest-service/). It is part of the location of the operations, so it cannot contain spaces or special characters.

## <a name="public-documentation"></a>2.2 Public Documentation

The public documentation is used in the service's [OpenAPI (Swagger) documentation page](/refguide7/published-rest-services/#interactive-documentation). You can use [GitHub-flavored markdown](/refguide7/gfm-syntax/) for rich text.
