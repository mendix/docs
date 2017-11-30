---
title: "Published OData Services"
parent: "integration"
---
In the Modeler, entities can be exposed as OData resources by adding a new 'Published OData service' document. You can expose any number of related resources in a Published OData service document. By default, the non-qualified names of entities are used in the URI to uniquely identify them, but you can override the name of the resource as well.

### OData Version

The standard used for OData in Mendix is OData version 3 ([http://www.odata.org/documentation/odata-version-3-0](http://www.odata.org/documentation/odata-version-3-0)) with default representation set to Atom XML. Not all parts of the standard are implemented. When something is undocumented here it's not added yet.

### Query options

Please refer to the [OData Query Options](odata-query-options) page to see how to filter the OData response.

### Supported Types

Please refer to the [OData Representation](odata-representation) page to see how Mendix attributes are being represented in OData.

### Service name

The service name is used to create a unique URI for the OData service. Thus, the service name should be well-formed in accordance with [RFC 3986](https://tools.ietf.org/html/rfc3986) and [RFC 3987](https://tools.ietf.org/html/rfc3987).

### Resources

A resource is a network-accessible data object representing an entity, identified by a URI. You can add, edit, or remove resources and their unique identifiers from the 'Resources' tab. 

### Service namespace

In OData, the namespace is used to refer to data types. On the 'Settings' tab, you can customize this namespace. You can change it to any value which starts with a letter followed by letters, digits, or dots with a maximum length of 512 characters.

### Performance

When exposing entities through OData, the entities are retrieved from the Mendix database in a streaming fashion, to avoid out-of-memory errors in the Mendix runtime.

### Security

To be able to consume OData in Mendix, you need to have two types of access rights: access right to the OData service as well as the right to the specific entities you are retrieving. Access can be granted either via authenticating as a user or via an anonymous user as long as the associated user role has access to both the OData service and the entities.

#### Authenticated Access

Authentication can be done by including basic authentication in the HTTP header of the call. To do this you need to construct a header called **Authorization** and its content should be constructed as follows:

1.  Username and password are combined into a string "username:password"
2.  The resulting string is then encoded using the [RFC2045-MIME](https://tools.ietf.org/html/rfc2045) variant of Base64, except not limited to 76 char/line
3.  The authorization method and a single space i.e. "Basic " is then put before the encoded string.

This result is a header which looks like _Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==_

#### Anonymous Access

With project security enabled, OData resources can still be exposed to anonymous users. Please refer to the section [Anonymous user role](anonymous-users) for detailed information on allowing anonymous users.

#### Project security off

If project security is off, for debugging purposes you can retrieve all data without needing to authenticate and without any security being applied. This is not possible in a production environment.

#### Role-based access

If security is enabled, it is required to configure which users have access rights to a specific OData service document. This can be done by opening the specific Published OData service document, navigating to the Settings tab and changing the allowed roles in the Security section. By default, no allowed user roles are selected. The security settings are reflected in [Module Security](module-security).

![](attachments/16713721/16843927.png)

#### How security works

1.  Typically, the client issues an initial anonymous request. The anonymous request is then validated against the OData service. If anonymous access is not granted to the respective OData service, the server will return with error code 401 (Unauthorized) and the response will include the WWW-Authenticate header to instruct the client to authenticate with basic authentication.
2.  If the client fails to provide correct credentials or does not provide a basic authentication at all, the server returns error code 401 (Unauthorized) and the WWW-Authenticate header, just as in the previous step.
3.  If the client is granted access (either anonymously or through basic authentication), the client access rights will be checked against the security configuration of the OData resources. All accessible resources are described in the Metadata XML document available under the root URL of the service with `/$metadata` appended.
4.  Each time the client makes a call to an OData service, whether it is a service description, or metadata, or resource, the authentication information will be re-evaluated.

### API documentation

Once your OData-enabled app is running, an overview of exposed OData resources is available on the root URL followed by `/odata-doc/`. For example, `http://localhost:8080/odata-doc/` You can copy and paste the links into for instance Excel to establish a link between your OData resources and Excel.

{{% alert type="warning" %}}

While the API documentation for OData resources is enabled by default, access to it may be restricted by the administrator for apps running in production.

{{% /alert %}}
