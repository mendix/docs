---
title: "Published Web Services"
url: /refguide/published-web-services/
weight: 30
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

This document describes published web services. If you're looking for specific information on the published web services screen, you can check the [Published web service](/refguide/published-web-service/) documentation.

You can publish your own web services in a Mendix application. These webservices are made up of operations. Other applications can then call operations of this webservice and you can return a result. This result is based on a microflow that will be executed when the webservice is called.

To enable usage of a microflow as a web service, right-click anywhere in the whitespace of the microflow and select "Publish as web service operation...".

## 2 Runtime Documentation

When running, Mendix projects publish webservices documentation. The address is (if running locally) `http://localhost:8080/ws-doc/`. This documentation explains how the service can be used, in two ways:

### 2.1 WSDL

This is an XML document that is computer readable. This means that Studio Pro can read this document and automatically figure out how to interact with the webservice.

### 2.2 Example Request/Response XML Messages

On the "Published webservices" page (`http://localhost:8080/ws-doc/`) you will also find a list of all operations, per published webservice. These link to pages which describe sample messages. Note that you do not need these examples when building a Mendix-to-Mendix interaction, they are there purely to help people who want to create their own clients.

## 3 How Does a Published Web Service Call Work?

A microflow that has been published can be called by systems from the outside. In this section, we will take a look at how this process works.

### 3.1 Call Is Initiated

A webservice call is simply a HTTP call that the runtime receives and recognizes as a webservice call. An XML message is received and parsed to a format that the runtime understands.

#### 3.1.1 Authentication

Every webservice call requires authentication. Specifically, the SOAP envelope header should contain an element called "authentication", which contains a username and password:

```xml
<soap:Header>
        <tns:authentication>
            <username>john</username>
            <password>john'ssecretpassword</password>
        </tns:authentication>
    </soap:Header>

```

These details _must_ match an existing webservice user in the runtime. These users can be created by signing in as an Administrator and clicking on "create webservice user" in the Users datagrid in the system module. Normal (non-webservice) users cannot be used to call webservices and webservice users cannot sign in via the standard login page.

Other than that, there is no difference between how normal users and web service users call microflows.

#### 3.1.2 Parameter Handling

Depending on which types of parameters are inputs to the published Microflow, two things can happen.

If an input is a Domain Entity, the XML is translated to the entity using an XML-to-Domain mapping. Note that these mappings create actual domain objects, depending on the mapping.

Normal parameters (integer, string etc) aren't converted in any way and used as inputs directly.

### 3.2 Microflow Is Executed

Once the parameters have been parsed from the XML, the microflow call proceeds as normal.

### 3.3 Result Is Converted Back to XML

If the microflow has a return value, it will be returned as a result of the webservice call. As with the parameters, basic types will be returned directly, and Domain Entities require a mapping to be converted to XML. Formatting of numbers is consistent between consumed and published web services. Trailing zeroes are removed from numbers and no scientific notation is used.

### 3.4 Response Statuses

The default HTTP status code in the response is 200 (OK). When the client sends a malformed request, or when an internal server error occurs, the runtime responds with a SOAP fault. The HTTP header will contain status 500 in these cases.

Please note that the status code is sent before the actual response. If during the response sending an error occurs, the response status cannot be changed. This means that the receiving side may receive a status code 200, even though the service failed afterwards during the serialization of the response. The reason for this is that to optimize memory usage we do not create the entire response in memory. Instead, during serialization the response is immediately sent to the client to free up memory. This means that you need to make sure you have the data needed to create a valid response before finishing the webservice.
