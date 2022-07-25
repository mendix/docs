---
title: "OQL CAST"
url: /refguide7/oql-cast/
---

## 1 Introduction

The CAST function converts an expression to a specific data type.

The syntax is as follows:

```
CAST ( expression AS data_type )
```

* `expression` – specifies the expression to convert
* `data_type` – specifies the data type to convert the expression to; the data type can be one of the following:
  * BOOLEAN
  * DATETIME
  * DECIMAL
  * FLOAT (deprecated)
  * INTEGER
  * LONG
  * STRING

## 2 Supported Conversions

The table below describes which CAST conversions are supported:

*  ✔ – the conversion is supported
*  ✔* – the conversion is supported, but the behavior differs per database (see remarks below)
*  ✘ – the conversion is not supported

| From \ To | BOOLEAN | DATETIME | DECIMAL | INTEGER | FLOAT | LONG | STRING (unlimited) | STRING (limited) |
|------| :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
| BOOLEAN | ✔ | ✘ | ✘ | ✘ |✘ | ✘ | ✔* | ✔*<sup><small>1</small></sup> |
| DATETIME | ✘ | ✔ | ✘ | ✘ |✘ | ✘ | ✔* | ✔*<sup><small>2</small></sup> |
| DECIMAL | ✘ | ✘ | ✔* | ✔* | ✔* | ✔* | ✔* | ✔*<sup><small>2</small></sup> |
| INTEGER | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| FLOAT | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔* | ✔*<sup><small>2</small></sup> |
| LONG | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| STRING | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
<small>[1] BOOLEAN to STRING (limited) is supported only if the resulting string length is ≥ 5.<br />[2] The conversion of DATETIME, DECIMAL, and FLOAT to STRING (limited) is supported only if the value fully fits into the string length. The conversion can fail if the resulting string length is less than 20.</small>
