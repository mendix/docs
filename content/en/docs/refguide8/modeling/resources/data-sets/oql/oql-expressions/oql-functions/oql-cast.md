---
title: "OQL CAST"
url: /refguide8/oql-cast/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/oql-cast.pdf).
{{% /alert %}}

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
  * INTEGER
  * LONG
  * STRING

## 2 Supported Conversions

The table below describes which CAST conversions are supported:

* ✔ – the conversion is supported
* ✔* – the conversion is supported, but the behavior differs per database (see remarks below)
* ✘ – the conversion is not supported

| From \ To | BOOLEAN | DATETIME | DECIMAL | INTEGER | LONG | STRING (unlimited) | STRING (limited) |
|------| :------: | :------: | :------: | :------: | :------: | :------: | :------: |
| BOOLEAN | ✔ | ✘ | ✘ | ✘ | ✘ | ✔* | ✔*<sup><small>1</small></sup> |
| DATETIME | ✘ | ✔ | ✘ | ✘ | ✘ | ✔* | ✔*<sup><small>2</small></sup> |
| DECIMAL | ✘ | ✘ | ✔* | ✔* | ✔* | ✔* | ✔*<sup><small>2</small></sup> |
| INTEGER | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ |
| LONG | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ |
| STRING | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ |
<Small>[1] BOOLEAN to STRING (limited) is supported only if the resulting string length is ≥ 5.<br />[2] The conversion of DATETIME and DECIMAL to STRING (limited) is supported only if the value fully fits into the string length. The conversion can fail if the resulting string length is less than 20.</small>
