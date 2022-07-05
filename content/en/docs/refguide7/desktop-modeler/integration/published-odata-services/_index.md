---
title: "Published OData Services"
url: /refguide7/published-odata-services/
aliases:
    - /refguide7/consumed-odata-services.html
    - /refguide7/consumed-odata-services
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

In the Modeler, entities can be exposed as [OData resources](/refguide7/published-odata-resource/) by adding a new published OData service. You can expose any number of related resources in a published OData service. By default, the non-qualified names of entities are used in the URI to uniquely identify them, but you can override the name of the resource as well.

## 2 OData Version

The standard used for OData in Mendix is [OData version 3](http://www.odata.org/documentation/odata-version-3-0)) with the default representation set to Atom XML. Not all parts of the standard are implemented. If something is not documented here, it is has not yet been added.

## 3 Query Options

For details on how to filter the OData response, refer to [OData Query Options](/refguide7/odata-query-options/).

## 4 Supported Types

For details on how Mendix attributes are represented in OData, refer to [OData Representation](/refguide7/odata-representation/).

## 5 Service Name

The service name is used to create a unique URI for the OData service. Thus, the service name should be well-formed in accordance with [RFC 3986](https://tools.ietf.org/html/rfc3986) and [RFC 3987](https://tools.ietf.org/html/rfc3987).

## 6 Resources

A [resource](/refguide7/published-odata-resource/) is a network-accessible data object representing an entity, identified by a URI. You can add, edit, or remove resources and their unique identifiers from the **Resources** tab. 

## 7 Service Namespace

In OData, the namespace is used to refer to data types. On the **Settings** tab, you can customize this namespace. You can change it to any value which starts with a letter followed by letters, digits, or dots with a maximum length of 512 characters.

## 8 Performance

When exposing entities through OData, the entities are retrieved from the Mendix database in a streaming fashion, to avoid out-of-memory errors in the Mendix runtime.

## 9 Associations

You can choose how you want to represent associations. For more information, see the [Associations](/refguide7/odata-representation/#associations) section of *OData Representation*.

## 10 Security

To be able to consume OData in Mendix, you need to have two types of access rights: access right to the OData service as well as the right to the specific entities you are retrieving. Access can be granted either via authenticating as a user or via an anonymous user as long as the associated user role has access to both the OData service and the entities.

### 10.1 Authenticated Access

Authentication can be done by including basic authentication in the HTTP header of the call. To do this you need to construct a header called **Authorization** and its content should be constructed as follows:

1.  Username and password are combined into a string "username:password"
2.  The resulting string is then encoded using the [RFC2045-MIME](https://tools.ietf.org/html/rfc2045) variant of Base64, except not limited to 76 char/line
3.  The authorization method and a single space (meaning, "Basic " is then put before the encoded string).

This result is a header which looks like `Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==`.

### 10.2 Anonymous Access

With project security enabled, OData resources can still be exposed to anonymous users. For detailed information on allowing anonymous users, refer to [Anonymous User Role](/refguide7/anonymous-users/).

### 10.3 Project Security Off

If project security is off, for debugging purposes you can retrieve all data without needing to authenticate and without any security being applied. This is not possible in a production environment.

### 10.4 Role-Based Access

If security is enabled, it is required to configure which users have access rights to a specific OData service document. This can be done by opening the specific Published OData service document, navigating to the Settings tab and changing the allowed roles in the Security section. By default, no allowed user roles are selected. The security settings are reflected in [Module Security](/refguide7/module-security/).

{{< figure src="/attachments/refguide7/desktop-modeler/integration/published-odata-services/16843927.png" >}}

### 10.5 How Security Works

1.  Typically, the client issues an initial anonymous request. The anonymous request is then validated against the OData service. If anonymous access is not granted to the respective OData service, the server will return with error code 401 (Unauthorized) and the response will include the WWW-Authenticate header to instruct the client to authenticate with basic authentication.
2.  If the client fails to provide correct credentials or does not provide a basic authentication at all, the server returns error code 401 (Unauthorized) and the WWW-Authenticate header, just as in the previous step.
3.  If the client is granted access (either anonymously or through basic authentication), the client access rights will be checked against the security configuration of the OData resources. All accessible resources are described in the Metadata XML document available under the root URL of the service with `/$metadata` appended.
4.  Each time the client makes a call to an OData service, whether it is a service description, or metadata, or resource, the authentication information will be re-evaluated.

### 11 API Documentation

Once your OData-enabled app is running, an overview of exposed OData resources is available on the root URL followed by `/odata-doc/`. For example, `http://localhost:8080/odata-doc/` You can copy and paste the links into for instance Excel to establish a link between your OData resources and Excel.

{{% alert color="warning" %}}
While the API documentation for OData resources is enabled by default, access to it may be restricted by the administrator for apps running in production.
{{% /alert %}}
