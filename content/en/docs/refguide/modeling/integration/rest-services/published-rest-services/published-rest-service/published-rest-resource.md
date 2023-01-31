---
title: "Published REST Resource"
url: /refguide/published-rest-resource/
weight: 50
description: "The configurable options for a published REST resource"
tags: ["published REST", "resource", "studio pro"]
# If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# linked from DM: published rest > add resource > help (integration)
---

## 1 Introduction

A published REST resource is part of a [published REST service](/refguide/published-rest-service/) and represents a collection of items on which one or more [operations](/refguide/published-rest-operation/) can be defined.

You can generate a published REST resource from an entity in your domain model. See [Generate a Published REST resource](/refguide/generate-rest-resource/).

## 2 General

### 2.1 Resource Name{#name}

The resource name uniquely identifies the resource in the [service](/refguide/published-rest-service/). It is part of the location of the operations, so it cannot contain spaces or special characters.

## <a name="public-documentation"></a>2.2 Public Documentation

The public documentation is used in the service's [OpenAPI (Swagger) documentation page](/refguide/published-rest-services/#interactive-documentation). You can use [GitHub-flavored markdown](/refguide/gfm-syntax/) for rich text.
