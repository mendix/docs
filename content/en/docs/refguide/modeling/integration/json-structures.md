---
title: "JSON Structures"
url: /refguide/json-structures/
weight: 10
description: "Describes how to use a JSON structure document that can be used in import and export mappings."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 General

A JSON structure document stores a JSON snippet and converts it into a schema structure that can be used in [Import Mappings](/refguide/import-mappings/) and [Export Mappings](/refguide/export-mappings/) to convert JSON content to Mendix objects and vice versa. 

{{< figure src="/attachments/refguide/modeling/integration/json-structures/sample-structure.png" class="no-border" width="600" >}}

### 1.1 JSON Snippet

Contains text of the JSON snippet. It is usually pasted from API documentation, or you can enter it manually for simple JSON.

{{% alert color="info" %}}
When you paste or modify the JSON snippet, it is automatically checked for validity. If the snippet is not valid, an exclamation mark appears above the snippet:

{{< figure src="/attachments/refguide/modeling/integration/json-structures/19398781.png" class="no-border" >}}

You cannot click **OK** without making the JSON valid.
{{% /alert %}}

### 1.2 Format

Formattings and whitespacing of JSON snippets that are found in API documentation may vary. You can paste JSON into the document without bothering about whitespaces. The **Format** button formats the JSON snippet so it is recognizable and readable. The semantic contents of the snippets are not changed.

{{% alert color="info" %}}
Special unicode characters are encoded according to JSON standards. For example, if the original snippet contained a heart-shaped symbol (❤️), it is replaced by '\u2764'.
{{% /alert %}}

### 1.3 Structure

Shows a tree structure with a schema that is parsed from the JSON snippet. The following columns are available:

* **Name** – this shows the name of a JSON element. If the JSON element does not have a name, it shows the element type within parentheses: (Object), (Array), (Wrapper), or (Value).
* **Value** – this shows the original value of the element in the JSON snippet. It is used to make it easier to find back the original element in the snippet. It is not used in the rest of the model.
* **Primitive Type** – this shows the type of element after parsing.
* **Occurrence** – this shows the occurrence of the element. Typically, JSON arrays have multiple occurrence (0..*) and JSON objects have a single occurrence (1).
* **Custom name** – this column is editable. Often, the name JSON objects or arrays can not be inferred from the snippet. For reference, you can modify the name of the JSON element. This name is important when you use mapping documents based on the JSON schema. You will see this name in mapping elements. It is used when you want to use **Map Automatically** to generate domain model entities and associations.

{{% alert color="info" %}}
When you modify the JSON snippet, you need to refresh the structure by clicking **Refresh**. If you have not done so, an error will appear:

{{< figure src="/attachments/refguide/modeling/integration/json-structures/19399140.png" class="no-border" >}}

You cannot click **OK** without updating the structure.
{{% /alert %}}

### 1.4 Documentation

Documentation that describes the snippet.

## 2 Parsing of the JSON Snippet

### 2.1 Simple JSON Objects

A simple JSON object is contained in curly braces (between `{` and `}`). It contains a comma-separated list of JSON properties. See the following example.

{{< figure src="/attachments/refguide/modeling/integration/json-structures/sample-structure.png" class="no-border" width="600" >}}

Each JSON property is composed of a key ("name") and a value ("John"). If the value is between double quotes ("  "), it is considered a string, otherwise the type is derived from the value. The following JSON values are supported:

* `"string"` – converted into an attribute of type String
* `123` – converted into an attribute of type Integer
* `true` or `false` – converted into an attribute of type Boolean
* `"1985-04-12T23:20:50.52Z"` – converted into an attribute of type **Date and time**
* `12.50` – converted into an attribute of type Decimal

### 2.2 JSON Arrays

A JSON array is contained in square brackets (between `[` and `]`). It contains a comma-separated list of JSON values or JSON objects.

* a JSON array can be the root of the JSON snippet

* a JSON array can be contained within a JSON object

* a JSON array can be contained within another JSON array

{{% alert color="info" %}}
The first item of the array will be used to determine the type of the items in the array. Mixed arrays are unsupported. A mixed array is an array with entries of different data types (for example, string and integer). In the tree structure, an error will appear that you cannot use mixed arrays in your mappings.
{{% /alert %}}
