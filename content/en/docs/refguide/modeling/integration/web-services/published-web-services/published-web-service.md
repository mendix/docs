---
title: "Published Web Service"
url: /refguide/published-web-service/
---

## Introduction

This document describes the properties of a published web service. If you want a general overview of how Mendix publishes microflows as web services, see [Published Web Services](/refguide/published-web-services/).

## Operations

{{< figure src="/attachments/refguide/modeling/integration/web-services/published-web-service/operation.png" class="no-border" >}}

Provide the actual [operations](/refguide/operations/) of which the web service is composed. Each of these operations is a microflow.

## Settings

{{< figure src="/attachments/refguide/modeling/integration/web-services/published-web-service/settings.png" class="no-border" >}}

### Validate Against WSDL

If set to **Yes**, incoming requests will be validated against the WSDL.

Default: **Yes**

### Authentication

This option allows you to define authentication settings for communicating with the web service. Studio Pro offers the following options:

* **No authentication** – clients do not need to provide credentials to call the web service
* **Username and password** – clients authenticate with a web service user
* **Custom authentication** – a microflow you define authenticates clients using information from the SOAP header

#### Username and Password {#authentication-username-password}

With this option, the SOAP header of each request must contain an `Authentication` element with a `Username` and a `Password` element, as shown in [Published Web Services](/refguide/published-web-services/#authentication). The credentials must belong to a web service user. For more information, see [Authentication and Users](/refguide/integration/expose-a-web-service/#authentication-and-users).

If the header is missing, or if it does not contain a username or a password, the call fails with a SOAP fault.

#### Custom Authentication {#authentication-custom}

With this option, the SOAP header of each request is processed in the following way:

1. The first element of the SOAP header is converted into an object by the import mapping you select.
2. This object is passed to the authentication microflow you select as its only parameter.
3. The microflow returns the user the operation is executed as.

The call fails with a SOAP fault if one of the following situations occurs:

* The request does not contain a SOAP header
* The header cannot be converted by the import mapping
* The microflow does not return a user
* The user that is returned is not active or is blocked

The following settings are available:

| Setting | Description |
| --- | --- |
| **Schema import wizard** | Opens the **Schema import wizard** dialog box, which creates the XML schema and the import mapping for the header. For more information, see [Schema Import Wizard](#schema-import-wizard). |
| **Import mapping** | The [import mapping](/refguide/import-mappings/) that converts the header element into an object. Select an import mapping that you created yourself or with the wizard. |
| **If no object was found** | The action performed when the import mapping cannot obtain a Mendix object, for example, when a database lookup finds no match. This setting is only shown when the selected import mapping has **Decide this at the place where the mapping gets used** selected. For more information, see [If No Object Was Found](/refguide/import-mappings/#if-no-object-was-found). |
| **Microflow** | The authentication microflow. This must have a single parameter of the entity type the import mapping creates, and it must return a `System.User` object. |

##### Schema Import Wizard {#schema-import-wizard}

In the **Schema import wizard** dialog box, select a **Source** for the header schema:

* **Predefined** – use a schema that is included with Studio Pro; select a **Header schema**, then select which **Selected parameters** to include in the import mapping:
    * **WS Security Username Token** – a WS-Security header with a username token
    * **WS Security 2002-04 with Kerberos v5 Token Profile** – a WS-Security header that can also contain a binary security token

    Each predefined schema offers these parameter sets:

    * **Custom element selection** – you select the elements to include yourself
    * **Username and Password** – the `Security`, `UsernameToken`, `Username`, and `Password` elements
    * **Username and BinarySecurityToken** – the `Security`, `Username`, and `BinarySecurityToken` elements and the `Id`, `ValueType`, and `EncodingType` attributes of `BinarySecurityToken`; only available for the Kerberos schema
* **Schema document** – use an XML schema document that is already in your app; click **Select** to choose it
* **File** – use an XSD file from your local machine; click **Select** to choose it

When you confirm the dialog box, Studio Pro imports the schema and creates an import mapping for the elements you selected.

### Target Namespace

This is the value of the targetNamespace attribute in the published WSDL file for this service. In Studio Pro, a target namespace must be a valid Uniform Resource Identifier (URI). For more information on XML namespaces, see [Wikipedia](https://en.wikipedia.org/wiki/XML_namespace).

It is important to correctly configure the target namespace before publishing your WSDL to third parties. Changing it later can break the third-party applications that call your published web services.

### Generated XML

Select **Include tags for associations** if you need to include tags for associations in XML. This is usually not necessary, and support for this will be removed in a future version.

To see the effect of this checkbox, below is an example of a person with two dogs and a cat. When you do not select **Include tags for associations**, the XML looks like this:

```xml
<Person name="John">
  <Dog name="Max" />
  <Dog name="Rex" />
  <Cat name="Chester" />
</Person>
```

When you do check **Include tags for associations**, the XML looks like this:

```xml
<Person name="John">
  <Person_Dog>
    <Dog name="Max" />
    <Dog name="Rex" />
  </Person_Dog>
  <Person_Cat>
    <Cat name="Chester" />
  </Person_Cat> 
</Person>
```

### Export WSDL File and Export XML Schema Definition

By using these buttons, you can save the generated WSDL file and its XML schema definition on your local hard drive. You can do this before running your app, unlike when you download it from `http://localhost:8080/ws-doc/`.

### Documentation

Documentation can be used to describe what the web service is used for.
