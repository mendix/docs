---
title: "Consumed REST Services"
url: /refguide7/consumed-rest-services/
description: "Presents an overview of consumed REST services and JSON in Mendix."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 REST

Representational state transfer (REST) is an approach to consuming or exposing resources. It has gained popularity because of its simplicity, because no extensive schemas or contracts are needed to transfer data between endpoints. It uses the following:

* HTTP URLs to locate resources
* HTTP headers to authenticate and specify content types (such as XML or JSON)
* HTTP methods to identify operations on resources, such as GET (retrieve data) or POST (send data)

Lack of contracts and schemas give you an easy start to using REST. However, many REST endpoints return complex data.

The [JSON Structure](/refguide7/json-structures/) document helps with giving structure to JSON data: from an example JSON snippet, a lightweight schema is extracted that is used in [Mapping Documents](/refguide7/mapping-documents/). The [Import Mapping](/refguide7/import-mappings/) document converts JSON (or XML) to Mendix objects, and the [Export Mapping](/refguide7/export-mappings/) document serializes Mendix objects to JSON (or XML).

## 2 JSON

JavaScript object notation (JSON) is a lightweight representation of data. 

```js
{
	"name": "John Smith",
	"age": 23,
	"address": 
	{
		"street": "Dopeylane 14",
		"city": "Worchestire"
	}
}
```

Above, the object `person` is described with the corresponding values for the attributes `name`, `age`, and the referred object `address`.

## 3 Examples

**How to consume REST natively with Mendix**

{{% youtube waOlvSqdaP4 %}}
