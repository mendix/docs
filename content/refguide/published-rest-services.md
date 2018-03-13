---
title: "Published REST Services"
parent: "integration"
---

{{% alert type="info" %}}

The **published REST service** feature was introduced in version 7.10.0.

{{% /alert %}}

## 1 Introduction

Add a [published REST service](published-rest-service) to expose your entities and microflows to other apps using the REST standard.

## 2 Published REST Service

For an overview of the available options when you add a published  service, see [Published REST Service](published-rest-service).

## <a name="authorization"></a>3 Authentication

Published REST services are secured with basic authentication. This is automatically applied when you set the [security level](project-security) of your app to **Prototype / demo**  or **Production**. 

If you don't want basic authentication, there are two options:

* You can choose to have [no authentication](published-rest-service#authentication) for specific published REST services, or
* When you [allow anonymous users](project-security#anonymous-users) to your app, all published REST services become available without authentication

For more details, see [Published REST Routing](published-rest-routing).

## <a name="interactive-documentation"></a>4 Documentation

Every [published REST service](published-rest-service) is automatically documented. This documentation is available in the app under `http://yourapp.com/rest-doc/`. Each service has an interactive documentation page using [Swagger UI](https://swagger.io/swagger-ui/). You can interact with the service to see how it behaves.

The documentation of the services is available in the [Open API 2.0](open-api) format, which is readable by many systems and tools.

## 5 Logging

To log detailed information about interaction with your published REST service, [set the log level](logging) of the **REST Publish** log node to **Trace**.

## 6 Examples

**How to publish REST natively with Mendix**

{{% youtube zt1XBnK2LCM %}}
