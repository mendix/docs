---
title: "JSON Structures"
url: /refguide/json-structures/
weight: 10
description: "Describes how to use a JSON structure document that can be used in import and export mappings."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## General

A JSON structure document stores a JSON snippet and converts it into a schema structure that can be used in [Import Mappings](/refguide/import-mappings/) and [Export Mappings](/refguide/export-mappings/) to convert JSON content to Mendix objects and vice versa. 

{{< figure src="/attachments/refguide/modeling/integration/json-structures/sample-structure.png" class="no-border" width="600" >}}

### JSON Snippet

Contains text of the JSON snippet. It is usually pasted from API documentation, or you can enter it manually for simple JSON. Make sure the JSON snippet includes all required elements, with a value assigned to each attribute.

{{% alert color="info" %}}
When you paste or modify the JSON snippet, it is automatically checked for validity. If the snippet is valid, **Valid JSON** is shown below the snippet. If it is not valid, {{% icon name="remove-circle" %}} **Invalid JSON** is shown instead.

The structure is only parsed when the JSON is valid.
{{% /alert %}}

### Format

Formattings and whitespacing of JSON snippets that are found in API documentation may vary. You can paste JSON into the document without bothering about whitespaces.

{{% alert color="info" %}}
Special unicode characters are encoded according to JSON standards. For example, if the original snippet contained a heart-shaped symbol (❤️), it is replaced by '\u2764'.
{{% /alert %}}

### Structure

Shows a tree structure with a schema that is parsed from the JSON snippet. The following columns are available:

* **Name** – This shows the name of a JSON element. If the JSON element does not have a name, it shows the element type within parentheses: (Object), (Array), (Wrapper), or (Value).
* **Custom name** – This column is editable. Often, the name of JSON objects or arrays cannot be inferred from the snippet. For reference, you can modify the name of the JSON element. This name is important when you use mapping documents based on the JSON schema. You see this name in mapping elements. It is used when you want to use **Map Automatically** to generate domain model entities and associations.
* **Type** – This shows the type of element after parsing.
* **Value** – This shows the original value of the element in the JSON snippet. It is used to make it easier to find the original element in the snippet. It is not used in the rest of the model.

{{% alert color="info" %}}
When you modify the JSON snippet, the structure is refreshed automatically.
{{% /alert %}}

### Documentation

This seciton is for documentation that describes the snippet.

## Parsing of the JSON Snippet

### Simple JSON Objects

A simple JSON object is contained in curly braces (between `{` and `}`). It contains a comma-separated list of JSON properties, as shown in the following example:

{{< figure src="/attachments/refguide/modeling/integration/json-structures/sample-structure.png" class="no-border" width="600" >}}

Each JSON property is composed of a key ("name") and a value ("John"). The type of a property is derived from its value and is shown in the **Type** column of the structure. The following JSON values are supported:

* `"string"` – String
* `123` – Integer
* `9223372036854775807` – Long, if the number is too large for an Integer
* `12.50` – Decimal, also for numbers in scientific notation (for example, `1.2e3`)
* `true` or `false` – Boolean
* `"1985-04-12T23:20:50.52Z"` – DateTime
* `null` – Unknown, because no type can be derived from the value

Values between double quotes are considered strings, except for values that contain a complete ISO 8601 date and time, which are parsed as DateTime. A value that contains only a date (`"1985-04-12"`) or only a time (`"23:20:50"`) is considered a String.

### JSON Arrays

A JSON array is contained in square brackets (between `[` and `]`). It contains a comma-separated list of JSON values or JSON objects.

* a JSON array can be the root of the JSON snippet

* a JSON array can be contained within a JSON object

* a JSON array can be contained within another JSON array

{{% alert color="info" %}}
The first item of the array will be used to determine the type of the items in the array. Mixed arrays are unsupported. A mixed array is an array with entries of different data types (for example, string and integer). In the tree structure, an error will appear that you cannot use mixed arrays in your mappings.
{{% /alert %}}
