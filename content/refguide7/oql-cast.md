---
title: "OQL CAST"
parent: "oql-functions"
---


The CAST function converts an expression to a specific data type.

The syntax is as follows:

```
CAST ( expression AS data_type )
```

**expression**
Specifies the expression to convert.

**data_type**
Specifies the data type to convert the expression to.
The data type can be one of the following:

*   BOOLEAN
*   DATETIME
*   DECIMAL
*   FLOAT (deprecated)
*   INTEGER
*   LONG
*   STRING

#### Supported conversions
The table below describes which CAST conversions are supported.

*  ✔ - the conversion is supported
*  ✔* - the conversion is supported, but the behavior differs per database (see remarks below)
*  ✘ - the conversion is not supported

| From \ To | BOOLEAN | DATETIME | DECIMAL | INTEGER | FLOAT | LONG | STRING (unlimited) | STRING (limited) |
|------| :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
| BOOLEAN | ✔ | ✘ | ✘ | ✘ |✘ | ✘ | ✔* | ✔*<sup><small>1</small></sup> |
| DATETIME | ✘ | ✔ | ✘ | ✘ |✘ | ✘ | ✔* | ✔*<sup><small>2</small></sup> |
| DECIMAL | ✘ | ✘ | ✔* | ✔* | ✔* | ✔* | ✔* | ✔*<sup><small>2</small></sup> |
| INTEGER | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| FLOAT | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔* | ✔*<sup><small>2</small></sup> |
| LONG | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| STRING | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
*  [1] - BOOLEAN to STRING (limited) is supported only if resulting string length is ≥ 5
*  [2] - conversion of DATETIME, DECIMAL and FLOAT to STRING (limited) is supported only if the value fully fits into the String length. The conversion can fail if resulting string length is less than 20
