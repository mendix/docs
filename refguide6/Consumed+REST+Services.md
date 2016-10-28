---
title: "Consumed REST Services"
space: "Reference Guide 6"
parent: "Integration"
---


<div class="alert alert-info">{% markdown %}
[Call Rest Action](Call+Rest+Action) and JSON support in [Mapping Documents](Mapping+Documents) are available since Mendix 6.6.0.
{% endmarkdown %}</div>

## REST

Representational State Transfer (REST) is an approach to consume or expose resources. Over recent years it has gained popularity because of it's simplicity, because no extensive schemas or contracts are needed to transfer data between endpoints. It uses

*   HTTP URLs to locate resources, 
*   HTTP headers to authenticate and specify content types (such as XML or JSON)
*   HTTP methods to identify operations on resources, such as GET (retrieve data) or POST (send data).

Lack of contracts and schemas give you an easy start using REST. Many REST endpoints return complex data however. The [JSON Structure](JSON+Structures) document helps with giving structure to JSON data: from an example JSON snippet, a lightweight schema is extracted that is used in [Mapping Documents](Mapping+Documents). An [Import Mapping](Import+Mappings) document converts JSON (or XML) to Mendix objects, and an [Export Mapping](Export+Mappings) document serializes Mendix objects to JSON (or XML).

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
