---
title: "Published web service"
parent: "published-web-services"
---
{{% alert type="warning" %}}

This document describes the properties of a published web service. If you want a general overview of how mendix publishes microflows as webservices, you can check the [Published web services](published-web-services) overview documentation.

{{% /alert %}}

## General

### Name

The name of the webservice. Note that this does not correspond to one particular Microflow, but encompasses a number of them (operations).

### Target namespace

This is the value of the targetNamespace attribute in the published WSDL file for this service. In Mendix, a target namespace must be a valid Uniform Resource Identifier (URI). For more information on XML namespaces, see [Wikipedia](http://en.wikipedia.org/wiki/XML_namespace).

{{% alert type="warning" %}}

It is important to correctly configure the target namespace before publishing your WSDL to third parties. Changing it later might break the third-party applications that call your published web services.

{{% /alert %}}

### Documentation

Can be used to describe what the webservice is used for.

## Operations

Provide the actual operations of which the webservice is composed. Each of these operations is a Microflow.

See [Operations](operations).
