---
title: "Published REST Services"
url: /refguide/published-rest-services/
weight: 20
description: "An overview of published REST services from Mendix apps"
tags: ["publish", "REST service", "overview", "configuration"]
# If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# linked from integration - published rest > F1 help
---

## 1 Introduction

Add a [published REST service](/refguide/published-rest-service/) to expose your entities and microflows to other apps using the REST standard.

## 2 Published REST Service

For an overview of the available options when you add a published service, see [Published REST Service](/refguide/published-rest-service/).

You can easily expose an entity via REST by right-clicking the entity in the [domain model](/refguide/domain-model/) and selecting [Expose as REST resource](/refguide/generate-rest-resource/).

To publish a microflow as a REST operation, right-click anywhere in the editor and select [Publish as REST service operation](/refguide/publish-microflow-as-rest-operation/).

## <a name="authorization"></a>3 Authentication

Published REST services can be secured with basic authentication, active session authentication and custom authentication. Basic and active session authentication are the default, and are automatically applied when you set the [security level](/refguide/app-security/) of your app to **Prototype / demo**  or **Production**.

If you don't want basic authentication, there are three options:

* You can choose to have [no authentication](/refguide/published-rest-service/#authentication) for specific published REST services, or
* When you [allow anonymous users](/refguide/app-security/#anonymous-users) to your app, all published REST services become available without authentication, or
* You can implement [custom authentication using a microflow](/refguide/published-rest-service/#authentication-microflow)

{{% alert color="warning" %}}
Note that web service users cannot access REST services.
{{% /alert %}}

For more details, see [Published REST Routing](/refguide/published-rest-routing/) and the [Requires Authentication](/refguide/published-rest-service/#authentication) section in *Published REST Service*.

## <a name="interactive-documentation"></a>4 Documentation

Every [published REST service](/refguide/published-rest-service/) is automatically documented. This documentation is available in the app under `http://yourapp.com/rest-doc/`. Each service has an interactive documentation page using [Swagger UI](https://swagger.io/swagger-ui/). You can interact with the service to see how it behaves.

The documentation of the services is available in the [OpenAPI 2.0](/refguide/open-api/) format, which is readable by many systems and tools. It contains [JSON Schemas](/refguide/published-rest-service-json-schema/) for the messages definitions.

## 5 Logging

To log detailed information about interaction with your published REST service, [set the log level](/refguide/logging/) of the **REST Publish** log node to **Trace**.

