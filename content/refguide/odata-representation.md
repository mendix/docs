---
title: "OData Representation"
parent: "published-odata-services"
---


| Mendix Data Type | Edm Type | Attribute Value | Atom XML Representation |
| --- | --- | --- | --- |
| Id | Edm.Int64 | 3940649673954387 | 3940649673954387 |
| Autonumber | Edm.Int64 | 1 | 1 |
| Binary (not supported) <sup>[1]</sup> |   |   |   |
| Boolean | Edm.Boolean | true | true |
| Currency (**deprecated**) | Edm.Double | 0.7882389488923784 | 0.7882389488923784 |
| Date and time | Edm.DateTimeOffset | Fri, 19 Dec 2014 10:27:27 GMT | 2014-12-19T10:27:27.000Z |
| Enumeration | Edm.String | Color.Blue | Blue |
| Float (**deprecated**) | Edm.Double | 0.7882389488923784 | 0.7882389488923784 |
| Big decimal  | Edm.Decimal | 0.3333333333333333333333333333333333 | 0.3333333333333333333333333333333333 |
| Hashed string | Edm.String | HashPassword | HashPassword |
| Integer  | Edm.Int64 | 50 | 50 |
| Long <sup>[2]</sup> | Edm.Int64 | 3940649673954387 | 3940649673954387 |
| String | Edm.String | John | John |
| Reference | Edm.Int64 | 3940649673954387 | 3940649673954387 |
| Reference set (not supported) |   |   |   |

1) Even though the Binary data type is not supported, _FileDocument_ and _Image_ system entities are supported and represented as Base64 encoded strings with type of 'Edm.Binary'.

2) When using Excel to import an OData source, long numbers may seem cut off. This is due to a restriction in the data type Microsoft uses. See [https://support.microsoft.com/en-us/kb/269370](https://support.microsoft.com/en-us/kb/269370) for more information.

Additionally, the 'updated' field for an entry in OData comes from the system changedDate attribute of an entity. If this attribute is not available (because it is not exposed, the user does not have access rights, or it is empty in database) the default date (1-1-1970)  will be used.
