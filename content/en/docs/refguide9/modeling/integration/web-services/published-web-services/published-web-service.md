---
title: "Published Web Service"
url: /refguide9/published-web-service/
---

## Introduction

This document describes the properties of a published web service. If you want a general overview of how Mendix publishes microflows as web services, see [Published Web Services](/refguide9/published-web-services/).

## Operations

{{< figure src="/attachments/refguide9/modeling/integration/published-web-services/published-web-service/16843888.png" class="no-border" >}}

Provide the actual operations of which the web service is composed. Each of these operations is a Microflow.

See [Operations](/refguide9/operations/).

## Settings

{{< figure src="/attachments/refguide9/modeling/integration/published-web-services/published-web-service/16843887.png" class="no-border" >}}

### Validate Against WSDL

If set to 'yes', incoming requests will be validated against the WSDL.

Default: *Yes*

### Authentication

The authentication settings to define for communicating with the web service.

### Target Namespace

This is the value of the targetNamespace attribute in the published WSDL file for this service. In Mendix, a target namespace must be a valid Uniform Resource Identifier (URI). For more information on XML namespaces, see [Wikipedia](https://en.wikipedia.org/wiki/XML_namespace).

It is important to correctly configure the target namespace before publishing your WSDL to third parties. Changing it later might break the third-party applications that call your published web services.

### Generated XML

Select **Include tags for associations** if you need to include tags for associations in XML. This is usually not necessary, and support for this will be removed in a future version.

To see the effect of this checkbox, consider a person with two dogs and a cat. When you do not select **Include tags for associations**, the XML looks like this:

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

By using these buttons, you can save the generated WSDL file, and its XML schema definition on your local hard drive. You can do this already before running your app, unlike when you download it from `http://localhost:8080/ws-doc/` .

### Documentation

Documentation can be used to describe what the web service is used for.
