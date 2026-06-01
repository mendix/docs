---
title: "Data Transformers"
url: /refguide/data-transformers/
weight: 50
description: "Describes Data Transformer documents in Mendix Studio Pro."
beta: true
---

## Introduction

Data Transformer documents transform data from one structure into another structure. In practice, this is a message-to-message transformation within Studio Pro. 

You can use this feature to pre-process an incoming message (for example, from an API response or MQTT message) before an import mapping. You can also use it to transform a message before passing it on to a downstream system that expects the data in a specific structure.

{{% alert color="info" %}}
This feature is in beta. 
{{% /alert %}}

### Prerequisites

* [Studio Pro 11.11](https://marketplace.mendix.com/link/studiopro/11.11.0) or higher

### Limitations

Data transformers currently have the following limitations:

* Only JSON-to-JSON transformation with JSLT (a JSON transformation language) is supported

### Usage Example

Consider an API that returns customer data with many fields, but you only need a few specific fields for your Mendix app:

**Input JSON from API:**

```json
{
  "customer_id": "12345",
  "first_name": "John",
  "last_name": "Smith",
  "email": "john.smith@example.com",
  "phone": "+1-555-0123",
  "address": "123 Main St",
  "city": "New York",
  "country": "USA",
  "account_status": "active",
  "credit_limit": 5000,
  "internal_notes": "VIP customer",
  "created_date": "2024-01-15"
}
```

**JSLT Transformation:**

```jslt
{
  "id": .customer_id,
  "fullName": .first_name + " " + .last_name,
  "email": .email,
  "location": .city + ", " + .country
}
```

**Output JSON:**

```json
{
  "id": "12345",
  "fullName": "John Smith",
  "email": "john.smith@example.com",
  "location": "New York, USA"
}
```

In this example, the data transformer extracts only the required fields, combines the first and last name into a single field, and creates a location string from the city and country. This simplified output can then be easily mapped to your Mendix entities.

## Add the Data Transformer Document

To add a data transformer document to your app, follow these steps:

1. Right-click the module you want to add the data transformer document to.
1. Select **Add other** > **Data Transformer**.
1. Name the data transformer:

    {{< figure src="/attachments/refguide/modeling/integration/data-transformers/add-data-transformer.png" alt="Add Data Transformer dialog" >}}

1. In the **Input JSON** editor, paste a JSON snippet that you want to transform.
1. Define the transformation in the **JSLT transformation** editor.
1. Click **Test Transformation** below the JSLT transformation editor to preview the transformation result in **Output JSON**:

    {{< figure src="/attachments/refguide/modeling/integration/data-transformers/define-transformation.png" alt="Data Transformer interface showing Input JSON, JSLT transformation, and Output JSON editors" >}}

## Use the Data Transformer in a Microflow

To perform a transformation in a microflow, complete the following steps:

1. Drag the **Transform JSON** activity into a microflow, preferably after a REST call or anything that provides input for the transformation:

    {{< figure src="/attachments/refguide/modeling/integration/data-transformers/transform-json-dialog.png" alt="Add Transform JSON activity" >}}

1. Double-click the activity and click **Select** to choose an existing data transformer document or to create a new one.
1. Click the **Variable (String)** drop-down and select the input string variable from the list.
1. Specify the name of the output in the **Variable name** text field.
1. Click **OK**:

    {{< figure src="/attachments/refguide/modeling/integration/data-transformers/configure-transformer-activity.png" alt="Configure Transform JSON activity dialog" >}}

## Data Transformer Output Uses

You can use your transformed JSON snippet in the following ways:

* Create a new JSON structure for import mapping
* Pass the transformed JSON to downstream systems
* Use it as input for further processing in a microflow

## Use Cases

You can use Data Transformer documents for the following use cases:

* [Filter out unused fields](/refguide/data-transformer-use-cases/#filtering-out-unused-fields)
* [Simplify nested structures](/refguide/data-transformer-use-cases/#simplifying-nested-structures)
* [Normalize objects to arrays (working with dynamic keys)](/refguide/data-transformer-use-cases/#normalizing-objects-to-arrays)
* [Zip metadata with data](/refguide/data-transformer-use-cases/#zipping-metadata-with-data)
* [Flatten bill of materials (BOM)](/refguide/data-transformer-use-cases/#flattening-bill-of-materials)
* [Extract information from a string](/refguide/data-transformer-use-cases/#extracting-information-from-a-string)
* [Work with SPARQL query results](/refguide/data-transformer-use-cases/#working-with-sparql-query-results)

## Read More

* Mendix resources:
    * For detailed examples of Data Transformers in action, see [Data Transformer Use Cases](/refguide/data-transformer-use-cases/)
* GitHub resources on JSLT
    * A short [introduction](https://github.com/schibsted/jslt/blob/master/README.md#jslt) and [tutorial](https://github.com/schibsted/jslt/blob/master/tutorial.md#jslt-tutorial) on how to use JSLT:
    * A complete list of [functions available in JSLT](https://github.com/schibsted/jslt/blob/master/functions.md#jslt-functions)
