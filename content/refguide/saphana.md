---
title: "SAP HANA"
parent: "data-storage"
---

## Known Issues

### Unicode support
At this point, only [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane) unicode characters are supported.

## Ordering on associated attributes

Retrieving an entity that is sorted on an attribute of one of its associated entities is not supported in SAP HANA. For example, if there are two associated entities *Person* and *Address* and they have *name* and *street* attributes respectively; You can not retrieve `Person` objects sorted on `Person_Address/Address/street`. 

## Case sensitivity
SAP Hana is case sensitive in string comparisons and checks. This reveals itself when using functions such as `contains()`, `starts-with()`, `ends-with()`, etc. or using equality(`=`) or inequality(`!=`) in xpath constraints. (e.g. `contains('OneTwo', 'one')` results in `false`)