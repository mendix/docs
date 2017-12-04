---
title: "Published REST resource"
parent: "published-rest-services"
---

{{% alert type="info" %}}

The 'Published REST Service' was introduced in version 7.8.0.

{{% /alert %}}

## 1 Introduction

A_published REST resource is part of a [published REST service](published-rest-service) and represents a collection of items on which one or more [operations](published-rest-operation) can be defined.

## 2 General

### <a name="name"></a>2.1 Resource Name

The resource name uniquely identifies the resource in the [service](published-rest-service). It is part of the location of the operations, so it cannot contain spaces or special characters.

## <a name="public-documentation"></a>2.2 Public Documentation

The public documentation is used in the service's [OpenAPI (Swagger) documentation page](published-rest-services#interactive-documentation). You can use [GitHub-flavored markdown](gfm-syntax) for rich text.
