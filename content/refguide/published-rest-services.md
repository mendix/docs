---
title: "Published REST Services"
parent: "integration"
---

{{% alert type="info" %}}

The **published REST service** feature was introduced in version 7.10.0.

{{% /alert %}}

## 1 Introduction

A document of type [published REST service](published-rest-service) enables you to expose your services to other apps using the REST standard. Using the document 'published REST service' you can administer the resources you expose and per resource you can administer the operations that a user can perform on that particular resource. 
Each operation on a resource is a single rest-service. Each operation triggers a microflow executing the service and returning a HTTP-response to the user.
![](https://www.tieka.nl/demos/PublishedRestService.png)

## 2 General settings

### <a name="service-name"></a>2.1 Service Name

The service name uniquely identifies the service in the app. You are free to choose any logical name for your service. You can for instance base the service name on the resources it exposes and the operations that can get performed on them, but whatever suits your app best is fine. Beware that the service name is part of the service-location, so it cannot contain spaces or special characters.

### <a name="example-location">2.2 Example Location

The example location shows the URL on which the service can be reached. This is an example: 

![](attachments/published-rest-service/example-location-url.png)

### <a name="public-documentation"></a>2.3 Public Documentation

The public documentation is the first description of your services that users will read when they encounter your services. It is the first paragraph in your apps /rest-doc/ and is used in the service's [OpenAPI 2.0 (Swagger) Documentation](open-api). You can use [GitHub-flavored markdown](gfm-syntax) for rich text.

### <a name="export-swagger-json"></a>2.4 Button 'Export swagger.json'

Click **Export swagger.json** to save the service's [OpenAPI (Swagger) documentation](open-api) somewhere on your machine. This is a machine-readable file in the [OpenAPI 2.0 file format](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md). Most API tools support this format.

When the app is running, this file is available under `/rest-doc/servicename/swagger.json`. For an overview of the available options when you add a published service, see [Published REST Service](published-rest-service).

## <a name="security"></a>3 Security Settings

NB. This option is only visible in the modeler if the project's Security-setting is set to **Prototype / demo**  or **Production**. 

## <a name="authorization"></a>3.1 Authentication

{{% alert type="info" %}}

The **Authentication** feature was introduced in version 7.11.0. In earlier versions, it was always **Username and password**.

{{% /alert %}}

Published REST services are secured with basic authentication. This is automatically applied when you set the [security level](project-security) of your app to **Prototype / demo**  or **Production**. 

If you don't want basic authentication, there are two options (since 7.11.0):

* You can choose to have [no authentication](published-rest-service#authentication) for specific published REST services, or
* When you [allow anonymous users](project-security#anonymous-users) to your app, all published REST services become available without authentication

For more details, see [Published REST Routing](published-rest-routing).

## 4 Resources' settings

A REST service exposes a number of [resources](published-rest-resource). A resource usually represents an entity but does not need to. It is just a name, so it can differ from the entity. A resource has a name and a documentation. Use the documentation to inform your users about this specific resource, so they know what to expect. 

## 5 Operations' settings

This is where the actual work gets done. When you select a resource, you add as many operations to it as you need. Each operation has:
- a method of type GET, PUT, POST, PATCH, and DELETE. 
- an operation path which gets appended to the location and for your convenience an example location is shown.
- a microflow that does the actual processing and which will return the HTTP Response. 

On the tab 'Public documentation' you can add the description. Use this as documentation to inform your users about this specific operation, so they know what to expect for this operation.

For more details, see [Published REST Operation](published-rest-operation).

## <a name="interactive-documentation"></a>6 Documentation and testing

Every [published REST service](published-rest-service) is automatically documented and available to the App's user for testing. This documentation and test location is available in the app under `http://yourapp.com/rest-doc/`. Each service has an interactive documentation page using [Swagger UI](https://swagger.io/swagger-ui/). You can interact with the service to see how it behaves.

The documentation of the services is available in the [Open API 2.0](open-api) format, which is readable by many systems and tools.

## 7 Logging

To log detailed information about interaction with your published REST service, [set the log level](logging) of the **REST Publish** log node to **Trace**.
