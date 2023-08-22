---
title: "Technical Details of Published REST"
url: /refguide8/published-rest-technical-details/
weight: 40
description: "Landing page for technical details about aspects of Published REST"
tags: ["HTTP Request", "Published REST", "Request Routing", "JSON Schema", "Swagger", "OpenApi", "Documentation", "custom authentication"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/published-rest-technical-details.pdf).
{{% /alert %}}

## 1 Introduction

This section of the Published REST documentation describes more technical aspects of the published REST capabilities of Mendix.

You can use published REST without knowing any of the details here. These documents allow you to further customize and troubleshoot Mendix published REST services.

## 2 Technical Documentation for Mendix Published REST

### 2.1 [Published REST Routing](/refguide8/published-rest-routing/)

This page shows how an incoming HTTP request is processed and which operation will be executed for a given request.

It can be used both for troubleshooting, and to aid in designing your published REST service.

### 2.2 [JSON Schema](/refguide8/published-rest-service-json-schema/)

Technical details of the JSON Schema which is created to support import and export mappings for an OpenApi (Swagger) documentation page.

### 2.3 [OpenAPI 2.0 Documentation](/refguide8/open-api/)

Technical details of the *swagger.jso* file which is created to describe the published REST service on an OpenApi (Swagger) documentation page.

### 2.4 [Parameters for the Custom Authentication Microflow](/refguide8/published-rest-authentication-parameter/)

Describes the parameters which are passed to a microflow which is performing custom authentication for a published REST service.
