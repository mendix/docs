---
title: "Published Web Service"
url: /refguide8/published-web-service/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/published-web-service.pdf).
{{% /alert %}}

## 1 Introduction

This document describes the properties of a published web service. If you want a general overview of how Mendix publishes microflows as web services, see [Published Web Services](/refguide8/published-web-services/).

## 2 Operations

{{< figure src="/attachments/refguide8/modeling/integration/published-web-services/published-web-service/16843888.png" >}}

Provide the actual operations of which the web service is composed. Each of these operations is a Microflow.

See [Operations](/refguide8/operations/).

## 3 Settings

{{< figure src="/attachments/refguide8/modeling/integration/published-web-services/published-web-service/16843887.png" >}}

### 3.1 Validate Against WSDL

If set to 'yes', incoming requests will be validated against the WSDL.

Default: *Yes*

### 3.2 Authentication

The authentication settings to define for communicating with the web service.

### 3.3 Target Namespace

This is the value of the targetNamespace attribute in the published WSDL file for this service. In Mendix, a target namespace must be a valid Uniform Resource Identifier (URI). For more information on XML namespaces, see [Wikipedia](http://en.wikipedia.org/wiki/XML_namespace).

It is important to correctly configure the target namespace before publishing your WSDL to third parties. Changing it later might break the third-party applications that call your published web services.

### 3.4 Generated XML

Select **Include tags for associations** if you need to include tags for associations in XML. This is usually not necessary, and support for this will be removed in a future version.

To see the effect of this check box, consider a person with two dogs and a cat. When you do not select **Include tags for associations**, the XML looks like this:

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

### 3.5 Export WSDL File & Export XML Schema Definition

By using this button, you can save the generated WSDL file, and its XML schema definition on your local hard drive. You can do this already before running your project, unlike when you download it from `http://localhost:8080/ws-doc/` .

### 3.6 Documentation

Documentation can be used to describe what the web service is used for.
