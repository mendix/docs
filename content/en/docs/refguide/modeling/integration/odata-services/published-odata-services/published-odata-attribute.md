---
title: "Published OData Attribute"
url: /refguide/published-odata-attribute/
weight: 10
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The **Edit published attribute** dialog allows you to edit the properties of an attribute published in an OData service.

{{< figure src="/attachments/refguide/modeling/integration/published-odata-attribute/edit-published-attribute.png" alt="Edit published attribute dialog box." class="no-border" >}}

## 2 General

### 2.1 Exposed Name

The exposed name is the name of the attribute as it appears to clients of the service. This cannot be the same as the exposed name of the entity.

### 2.2 Can Be Empty

Select this box if there is a possibility for this attribute the have an empty value. One way to make sure no empty values are created in the database is to add a required [validation rule](/refguide/validation-rules/).

For attributes that are part of the key of the entity, this box must be unselected.

### 2.3 Entity

The entity that this attribute is a part of.

### 2.4 Attribute

The attribute that is being published. This value cannot be changed; to publish a different attribute, use the **Add** button in the list of published attributes.

### 2.5 Type

The type of the attribute.

### 2.6 Exposed As

This field is shown when the type is an enumeration that was previously exposed as a string, and only for OData v4. Change the value to **Enumeration** to publish the enumeration. This informs clients of the possible values of this attribute.

### 2.7 Capabilities

Select **Sortable** to allow clients to sort results based on this attribute.

Select **Filter** to allow clients to filter results based on this attribute.

Note that these capabilities are not shown for attributes of entities without the **Readable** capability.

## 3 Public Documentation

In the **Public documentation** tab, you can write a summary and description intended for people using the service.
