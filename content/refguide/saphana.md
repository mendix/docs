---
title: "SAP HANA"
parent: "data-storage"
---

## Known Issues

### Unicode Support

Currently, only [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane) unicode characters are supported.

### Ordering on Associated Attributes

Retrieving an entity that is sorted on an attribute of one of its associated entities is not supported in SAP HANA.

For example, you have two associated entities, *Person* and *Address*, and they have *name* and *street* attributes respectively. You cannot retrieve `Person` objects sorted on `Person_Address/Address/street`. 

### Case Sensitivity

SAP HANA is case sensitive when doing string comparisons and checks. This is important when using functions such as `contains()`, `starts-with()`, and `ends-with()`, or when using equality(`=`) or inequality(`!=`) in xpath constraints.

For example, `contains('OneTwo', 'one')` will return `false`.
