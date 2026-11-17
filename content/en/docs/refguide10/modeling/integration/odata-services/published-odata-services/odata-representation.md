---
title: "OData Representation"
url: /refguide10/odata-representation/
weight: 60
---

## Introduction

This document describes how entities are represented in a published OData service.

## Attributes {#attributes}

| Mendix Data Type | Edm Type | Attribute Value | Atom XML Representation |
| --- | --- | --- | --- |
| ID ¹| Edm.Int64 | 3940649673954387 | 3940649673954387 |
| AutoNumber | Edm.Int64 | 1 | 1 |
| Binary (not supported) ² |   |   |   |
| Boolean | Edm.Boolean | true | true |
| Date and time | Edm.DateTimeOffset | Fri, 19 Dec 2014 10:27:27 GMT | 2014-12-19T10:27:27.000Z |
| Enumeration | Enumeration⁴ (OData v4) or Edm.String (OData v3) | Color.Blue | Blue |
| Big decimal  | Edm.Decimal | 0.3333333333333333333333333333333333 | 0.3333333333333333333333333333333333 |
| Hashed string | Edm.String | HashPassword | HashPassword |
| Integer  | Edm.Int64 | 50 | 50 |
| Long ¹ | Edm.Int64 | 3940649673954387 | 3940649673954387 |
| String ³ | Edm.String | John | John |
| String exposed as GUID ⁵ | Edm.Guid | 1B4E28BA-2FA1-11D2-883F-0016D3CCA427 | 1b4e28ba-2fa1-11d2-883f-0016d3cca427 |

<small>¹ When using Excel to import an OData source, long numbers may seem cut off. This is due to a restriction in the data type Microsoft uses. For more information, see [Last digits are changed to zeroes when you type long numbers in cells of Excel](https://support.microsoft.com/en-us/kb/269370).<br />
² Even though the binary data type is not supported, the FileDocument and Image system entities are supported and represented as Base64-encoded strings with the `Edm.Binary` type.<br />
³ When the string attribute has a limited length, the `MaxLength` attribute is specified.<br />
⁴ In Studio Pro 9.23 and below, all enumeration attributes were published as strings.<br />
⁵ Available in Studio Pro 10.12 and above. For more information, see the [Exposed As](/refguide10/published-odata-attribute/#exposed-as-guid) section of *Published OData Attribute*.</small>

Additionally, the `updated` field for an entry in OData comes from the system changedDate attribute of an entity. If this attribute is not available (because it is not published, the user does not have access rights, or it is empty in database), the default date (1-1-1970) will be used.

### Representation of ID {#id-representation}

Each entity has an ID, which is not shown as an attribute in the domain model. This is indicated in the service's metadata.

In OData 4, IDs are annotated with vocabulary annotation `Com.Mendix.IsAttribute` with value `false`. The term for this vocabulary annotation is included in the metadata.

In OData 3, IDs are marked with `isAttribute="false"`, using a Mendix-specific XML attribute in the `http://www.mendix.com/Protocols/MendixData` namespace.

### Large Long Values and JavaScript {#large-long-values}

A Mendix Long can hold values up to 2^63 − 1. In JavaScript, the largest safe integer is `Number.MAX_SAFE_INTEGER`, which is 2^53 − 1 (9007199254740991). 

When a client parses a larger integer as a JavaScript number, it can lose precision, so it no longer has the exact Long value. This can affect data in a browser. For example, consider the following OData response:

```json
{"@odata.context":"...snip...","value":[{"LongValue":12345678901234567}]}
```

Depending on the browser and how it parses and displays the response, the value of `LongValue` can appear as `12345678901234568`.

This loss of precision is not caused by Mendix. However, you should take it into account when modeling published services. To avoid it, consider the following:

* In the domain model, change the attribute type to String.
* Do not expose the Mendix [ID](#id-representation). Large values frequently occur in IDs because of the way they are constructed.

## Associations {#associations}

In the settings of the OData service, you can choose how associations are represented. There are two options, which are described below.

### As a Link

When you represent associations as links, the data of associated objects can be included in the response by using the `$expand` query parameter. For more information, see the [Retrieving Associated Objects](/refguide10/supported-odata-operations/#retrieving-associated-objects) section of *Supported OData Operations*.

This means you can only publish an association when the entity on the other side is published in this service as well. This also means that you cannot publish the same entity more than once in the same service (because in that case, it would not be clear where the link should point to).

Using this method, you can publish both sides of the association and you can publish many-to-many associations.

### As an Associated Object ID

When you choose to represent associations as an associated object ID, the ID of the associated object is represented as an `Edm.Int64` property. If the association refers to more than one object, you cannot publish it from that side.
