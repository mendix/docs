---
title: "Published OData Services"
url: /refguide8/published-odata-services/
tags: ["studio pro"]
aliases:
    - /refguide8/consumed-odata-services.html
    - /refguide8/consumed-odata-services
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/published-odata-services.pdf).
{{% /alert %}}

## 1 Introduction

In Studio Pro, entities can be exposed as [OData resources](/refguide8/published-odata-resource/) by adding a new published OData service. You can expose any number of related resources in a published OData service. By default, the non-qualified names of entities are used in the URI to uniquely identify them, but you can override the name of the resource as well.

The standard used for OData in Mendix is [OData version 3](http://www.odata.org/documentation/odata-version-3-0) with the default representation set to Atom XML. Not all parts of the standard are implemented. If something is not documented here, it is has not yet been added.

This document describes the options available to you when you create a published OData service, and ends with some runtime considerations.

## 2 General

### 2.1 Service Name

The service name is used to create a unique URI for the OData service. Thus, the service name should be well-formed in accordance with [RFC 3986](https://tools.ietf.org/html/rfc3986) and [RFC 3987](https://tools.ietf.org/html/rfc3987).

### 2.2 Version

Use the **version** field to assign a version number to the service. This number will be shown in the API documentation.

### 2.3 Namespace

In OData, the namespace is used to refer to data types. On the **Settings** tab, you can customize this namespace. You can change it to any value which starts with a letter followed by letters, digits, or dots with a maximum length of 512 characters.

### 2.4 Resources

A [resource](/refguide8/published-odata-resource/) is a network-accessible data object representing an entity, identified by a URI.

## 3 Settings

### 3.1 Associations

You can choose how you want to represent associations. For more information, see the [Associations](/refguide8/odata-representation/#associations) section of *OData Representation*.

### 3.2 Security {#security}

You can configure security for the OData service when [Project Security](/refguide8/project-security/) is enabled.

#### 3.2.1 Requires Authentication {#authentication}

{{% alert color="info" %}}

The **No Authentication** feature was introduced in version 8.0.0. In earlier versions, it was always **Username and password**.

The **Active Session** and **Custom** authentications were also introduced in version 8.0.0.

{{% /alert %}}

Select whether clients need to authenticate or not. Choose _No_ to allow access to the resources without restrictions. Choose _Yes_ to be able to select which authentication methods to support.

Even when you choose _Yes_, you can still expose OData resources to anonymous users. For detailed information on allowing anonymous users, refer to [Anonymous User Role](/refguide8/anonymous-users/).

#### 3.2.2 Authentication Methods

If authentication is required, you can select which authentication methods you would like to support.

* Select **Username and password** to allow clients to authenticate themselves using a username and a password in the **Authorization** header (this is called "basic authentication")
* Select **Active session** to allow access from JavaScript inside your current application
* Select **Custom** to authenticate using a microflow (this microflow is called every time a user wants to access a resource)

Check more than one authentication method to have the service try each of them. It will first try **Custom** authentication, then **Username and password**, and then **Active session**.

##### 3.2.2.1 Username & Password {#username-password}

Authentication can be done by including basic authentication in the HTTP header of the call. To do this you need to construct a header called **Authorization** and its content should be constructed as follows:

1.  Username and password are combined into a string "username:password".
2.  The resulting string is then encoded using the [RFC2045-MIME](https://tools.ietf.org/html/rfc2045) variant of Base64 (except not limited to 76 char/line).
3.  The authorization method and a single space (meaning, "Basic " is then put before the encoded string).

This result is a header which looks like `Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==`.

##### 3.2.2.2 Active Session {#authentication-active-session}

When you check this authentication method, the JavaScript in your app can access the REST service using the current user's session.

To prevent cross-site request forgery, the `X-Csrf-Token` header needs to be set on each request, for example:

```
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "http://mysite/odata/myservice/myresource", false);
xmlHttp.setRequestHeader("X-Csrf-Token", mx.session.getConfig("csrftoken"));
xmlHttp.send(null);
```

##### 3.2.2.3 Custom {#authentication-microflow}

Specify which microflow to use for custom authentication.

The microflow may take an [HttpRequest](/refguide8/http-request-and-response-entities/#http-request) as a parameter, so it can inspect the incoming request.

The microflow may also take an [HttpResponse](/refguide8/http-request-and-response-entities/#http-response) as a parameter. When the microflow sets the status code of this response to something other then **200**, this value is returned and the operation will not be executed. Any headers set on the response are returned (except when the microflow returns an empty user).

The authentication microflow should return a User.

There are three possible outcomes of the authentication microflow:

  * When the status code of the HttpResponse parameter is set to something other then **200**, this value is returned and the operation will not be executed
  * When the resulting User is not empty, the operation is executed in the context of that user
  * When the resulting User is empty, the next authentication method is attempted (when there are no other authentication methods, the result is **404 Not Found**)

#### 3.2.3 Allowed Roles

The allowed roles define which [module role](/refguide8/module-security/#module-role) a user must have to be able to access the service. This option is only available when **Requires authentication** is set to **Yes**.

{{% alert color="warning" %}}
Web service users cannot access OData services.
{{% /alert %}}

## 4 Properties

In the properties pane of the published OData service you can edit some of the properties that you can also set in the *General* tab, such as *Service name*, *Version*, and *Namespace*.

This section describes the additional properties that you can set.

### 4.1 Documentation

Here you can describe the purpose of the service. This is intended for other people
working on this project and is not available to users of the OData service.

### 4.2 Replace Illegal XML Characters

Some special characters cannot be used in XML. If your data contains these
characters, the client will get an error. If you set this setting to *Yes*,
those illegal characters are replaced by the DEL character, and the client will
not get an error. However, the data that the client receives will not be exactly
what is stored in your database, because these characters have been replaced.

Default value: *No*

This property is available in Studio Pro 8.12.0 and later.

### 4.3 Public Documentation

You can write a *summary* and a *description* intended for people using the service.

## 5 Runtime Considerations

### 5.1 General

Once your OData-enabled app is running, an overview of exposed OData resources is available on the root URL followed by `/odata-doc/`. For example, `http://localhost:8080/odata-doc/` You can copy and paste the links into for instance Excel to establish a link between your OData resources and Excel.

{{% alert color="warning" %}}
While the API documentation for OData resources is enabled by default, access to it may be restricted by the administrator for apps running in production.
{{% /alert %}}

For details on how to filter the OData response, refer to [OData Query Options](/refguide8/odata-query-options/).

For details on how Mendix attributes are represented in OData, refer to [OData Representation](/refguide8/odata-representation/).

When exposing entities through OData, the entities are retrieved from the Mendix database in a streaming fashion, to avoid out-of-memory errors in the Mendix Runtime.

### 5.2 On-Premises Deployments

Some on-premises servers, in particular those using Microsoft IIS, will strip the host header from requests. This means that your OData service and documentation will be published on an unexpected URL.

To resolve this issue, you will need to ensure your server preserves host headers. See the section [Preserving the Host Header](/developerportal/deploy/deploy-mendix-on-microsoft-windows/#preserve-header) in the *Microsoft Windows* deployment documentation.
