---
title: "Consumed REST Services"
space: "Reference Guide 6"
parent: "integration"
---


<div class="alert alert-info">{% markdown %}
[Call Rest Action](/refguide6/call-rest-action) and JSON support in [Mapping Documents](/refguide6/mapping-documents) are available since Mendix 6.6.0.
{% endmarkdown %}</div>

## REST

Representational State Transfer (REST) is an approach to consume or expose resources. Over recent years it has gained popularity because of it's simplicity, because no extensive schemas or contracts are needed to transfer data between endpoints. It uses

*   HTTP URLs to locate resources, 
*   HTTP headers to authenticate and specify content types (such as XML or JSON)
*   HTTP methods to identify operations on resources, such as GET (retrieve data) or POST (send data).

Lack of contracts and schemas give you an easy start using REST. Many REST endpoints return complex data however. The [JSON Structure](/refguide6/json-structures) document helps with giving structure to JSON data: from an example JSON snippet, a lightweight schema is extracted that is used in [Mapping Documents](/refguide6/mapping-documents). An [Import Mapping](/refguide6/import-mappings) document converts JSON (or XML) to Mendix objects, and an [Export Mapping](/refguide6/export-mappings) document serializes Mendix objects to JSON (or XML).

## JSON

JavaScript Object Notation (JSON) is a lightweight representation of data. 

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

Above the object 'person' is described with the corresponding values for the attributes 'name', 'age' and the referred object 'address'.

## Limitations
It is not possible to specify a timeout value.
