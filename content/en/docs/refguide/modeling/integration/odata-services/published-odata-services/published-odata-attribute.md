---
title: "Published OData Attribute"
url: /refguide/published-odata-attribute/
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The **Edit published attribute** dialog allows you to edit the properties of an attribute published in an OData/GraphQL service.

{{< figure src="/attachments/refguide/modeling/integration/odata-services/published-odata-attribute/edit-published-attribute.png" alt="Edit published attribute dialog box." class="no-border" >}}

## General

### Exposed Name {#exposed-name}

The exposed name is the name of the attribute as it appears to clients of the service. This cannot be the same as the exposed name of the entity.

### Can Be Empty

Select this box if there is a possibility for this attribute the have an empty value. One way to make sure no empty values are created in the database is to add a required [validation rule](/refguide/validation-rules/).

For attributes that are part of the key of the entity, this box must be unselected.

### Entity

The entity that this attribute is a part of.

### Attribute

The attribute that is being published. This value cannot be changed; to publish a different attribute, use the **Add** button in the list of published attributes.

### Type

The type of the attribute.

### Exposed As {#exposed-as}

This field is shown in the following cases:

* The type is an enumeration that was previously exposed as a string (only for OData v4). Change the value to **Enumeration** to publish the enumeration. This informs clients of the possible values of this attribute.
* The type is a string (only for OData v4). Change the value to **GUID** to publish the string attribute as a GUID. For more information, see the [Exposing a String Attribute as a GUID](#exposed-as-guid) section below.

#### Exposing a String Attribute as a GUID {#exposed-as-guid}

When you expose a string attribute as a GUID, the following applies:

* The attribute must be a string with unlimited length or a maximum length of at least 36 characters, and store GUIDs in a format such as `1b4e28ba-2fa1-11d2-883f-0016d3cca427`.
* If the value stored at runtime cannot be parsed as a GUID, the runtime throws an error.
* Clients can specify GUIDs in uppercase or lowercase letters. The runtime always returns GUIDs in lowercase letters.
* If a `POST` or `PUT` request attempts to set a value that is not a GUID, the runtime returns a `422` status code.

### Capabilities

Select **Sortable** to allow clients to sort results based on this attribute.

Select **Filter** to allow clients to filter results based on this attribute.

Note that these capabilities are not shown for attributes of entities without the **Readable** capability.

## Public Documentation

In the **Public documentation** tab, you can write a summary and description intended for people using the service.
