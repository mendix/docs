---
title: "Published REST Resource"
url: /refguide9/published-rest-resource/
weight: 50
description: "The configurable options for a published REST resource"
# If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# linked from DM: published rest > add resource > help (integration)
---

## Introduction

A published REST resource is part of a [published REST service](/refguide9/published-rest-service/) and represents a collection of items on which one or more [operations](/refguide9/published-rest-operation/) can be defined.

You can generate a published REST resource from an entity in your domain model. See [Generate a Published REST resource](/refguide9/generate-rest-resource/).

## General

### Resource Name{#name}

The resource name uniquely identifies the resource in the [service](/refguide9/published-rest-service/). It is part of the location of the operations, so it cannot contain spaces or special characters.

## Public Documentation {#public-documentation}

The public documentation is used in the service's [OpenAPI (Swagger) documentation page](/refguide9/published-rest-services/#interactive-documentation). You can use [GitHub-flavored markdown](/refguide9/gfm-syntax/) for rich text.
