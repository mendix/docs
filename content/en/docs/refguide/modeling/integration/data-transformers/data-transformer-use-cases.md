---
title: "Data Transformer Use Cases"
url: /refguide/data-transformer-use-cases/
weight: 60
description: "Provides practical examples of common JSLT transformation patterns for Data Transformers."
beta: true
---

## Introduction

This document shows a variety of use cases that [Data Transformer documents](/refguide/data-transformers/) can address. It contains practical, example-driven walkthroughs of common JSLT transformation patterns. 

Each walkthrough focuses on a specific use case you may encounter when working with real-world API responses, such as restructuring nested data, renaming fields, or combining metadata with data. Rather than covering every detail of the JSLT language, the walkthroughs are hands-on and immediately applicable. They show a concrete input, the expected output, and the transformation that connects the two.

{{% alert color="info" %}}
The [Data Transformer document](/refguide/data-transformers/) feature is in beta. 
{{% /alert %}}

## Filtering Out Unused Fields {#filtering-out-unused-fields}

It is common for an API to return payloads that contain more fields than your app or a downstream system needs. Rather than passing the entire payload along, this transformation selects only the fields that are relevant, effectively dropping everything else. This keeps the output clean, reduces payload size, and avoids exposing unnecessary data.

### Example

**Input:**

```json
{
  "orderId": "ORD-4521",
  "customerId": "CUST-001",
  "orderDate": "2024-05-10T09:15:00Z",
  "shippingAddress": "456 Elm Street, Berlin, Germany",
  "totalAmount": 149.99,
  "currency": "EUR",
  "status": "shipped"
}
```

**JSLT:**

```jslt
{
  "orderId": .orderId,
  "customerId": .customerId,
  "status": .status
}
```

**Output:**

```json
{
  "orderId": "ORD-4521",
  "customerId": "CUST-001",
  "status": "shipped"
}
```

### Explanation

In JSLT, the output object is always constructed explicitly. Only the fields you name in the query appear in the output, just like SQL or OQL. This means that dropping fields requires no special syntax. Any field from the input that is not referenced in the JSLT is automatically excluded from the result. In this example, fields such as `orderDate` and `shippingAddress` are dropped by not being referenced in the query. The three relevant fields are carried over directly from the input.

For more information about constructing JSLT queries, see this [GitHub resource](https://github.com/schibsted/jslt/blob/master/tutorial.md#dot-accessors). 

## Simplifying Nested Structures {#simplifying-nested-structures}

Sometimes a JSON structure contains nested sub-objects that group related fields together, but you just need a simpler, flat representation. This transformation moves fields from nested sub-objects up to the top level, merging them into a single flat object.

### Example

**Input:**

```json
{
  "id": "USR-001",
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "profileImage": {
    "url": "https://example.com/images/jane.jpg",
    "altText": "Profile photo of Jane Doe"
  },
  "address": {
    "street": "123 Main St",
    "city": "Munich",
    "country": "Germany"
  }
}
```

**JSLT:**

```jslt
{
  "id": .id,
  "name": .name,
  "email": .email,
  "profileImageUrl": .profileImage.url,
  "profileImageAltText": .profileImage.altText,
  "addressStreet": .address.street,
  "addressCity": .address.city,
  "addressCountry": .address.country
}
```

**Output:**

```json
{
  "id": "USR-001",
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "profileImageUrl": "https://example.com/images/jane.jpg",
  "profileImageAltText": "Profile photo of Jane Doe",
  "addressStreet": "123 Main St",
  "addressCity": "Munich",
  "addressCountry": "Germany"
}
```

### Explanation

The transformation is straightforward. Each field in the output is explicitly mapped from the input using its full path. Fields that were previously nested inside a sub-object are accessed using dot notation (for example, `.profileImage.url`) and assigned to a new top-level key that reflects their origin (for example, `profileImageUrl`). The result is a flat object where all fields are at the same level.

For more information about dot accessors, see this [GitHub resource](https://github.com/schibsted/jslt/blob/master/tutorial.md#dot-accessors).

## Normalizing Objects to Arrays {#normalizing-objects-to-arrays}

Some APIs return collections of records as a keyed object, where each key acts as a unique identifier for that record (also known as dynamic keys). Mendix works more naturally with lists of objects, so this transformation converts that keyed structure into a flat, normalized array that can be directly mapped to a Mendix entity list.

### Example

**Input:**

```json
{
    "data": {
        "Tag1": {
            "TagName": "TQ-02-FIT-WA123123",
            "Value": 0
        },
        "Tag2": {
            "TagName": "TQ-02-WIT-WA123123",
            "Value": 41.7807087
        },
       "Tag3": {
            "TagName": "TQ-03-FIT-WA123123",
            "Value": 45.812341
        },
        "Tag4": {
            "TagName": "TQ-04-FIT-WA123123",
            "Value": 0
       }
   }
}
```

**JSLT:**

```jslt
[for (.data)
  {
    "TagId": .key,
    "TagName": .value.TagName,
    "Value": .value.Value
  }
]
```

**Output:**

```json
[ {
  "TagId" : "Tag1",
  "TagName" : "TQ-02-FIT-WA123123",
  "Value" : 0
}, {
  "TagId" : "Tag2",
  "TagName" : "TQ-02-WIT-WA123123",
  "Value" : 41.7807087
}, {
  "TagId" : "Tag3",
  "TagName" : "TQ-03-FIT-WA123123",
  "Value" : 45.812341
}, {
  "TagId" : "Tag4",
  "TagName" : "TQ-04-FIT-WA123123",
  "Value" : 0
} ]
```

### Explanation

When you use a for expression to iterate over an object, JSLT converts each key-value pair into:

```json
{ "key": "<the key>", "value": <the value> }
```

So for (`.data`) iterates over each entry, exposing `.key` (for example, `"Tag1"`) and `.value` (for example, { `"TagName": "...", "Value": ... }`). We then construct a new flat object per entry, promoting `.key` into its own "TagId" field alongside the fields from `.value`.

For more information on expressions and constructing lists in JSLT, see this [GitHub resource](https://github.com/schibsted/jslt/blob/master/tutorial.md#for-expressions).

## Zipping Metadata with Data {#zipping-metadata-with-data}

Some APIs return data and its metadata separately. The metadata describes the structure (for example, column names), while the data is returned as raw arrays. This is the case with Snowflake SQL REST APIs. To make the data meaningful and easy to consume, combine the two so that each value is associated with its corresponding column name.

In this example, a Snowflake SQL REST API response (with input fields irrelevant to this use case omitted) contains employee records returned as arrays, alongside a separate metadata block that defines the column names. The transformation zips these together to produce a list of objects.

### Example

**Input:**

```json
{
  "resultSetMetaData": {
    "numRows": 4,
    "rowType": [
      { "name": "EMPLOYEE_ID", "type": "fixed" },
      { "name": "FULL_NAME",   "type": "text"  },
      { "name": "DEPARTMENT",  "type": "text"  },
      { "name": "SALARY",      "type": "fixed" }
    ]
  },
  "data": [
    ["1001", "Anna Müller",  "Engineering", "72000"],
    ["1002", "James Carter", "Finance",     "65000"],
    ["1003", "Sofia Rossi",  "Engineering", "78000"],
    ["1004", "Liam O'Brien", "HR",          "58000"]
  ]
}
```

**JSLT:**

```jslt
let cols = .resultSetMetaData.rowType

{
  "data": [for (.data)
    let row = .
    {for (zip($cols, $row))
      .[0].name : .[1]
    }
  ]
}
```

**Output:**

```json
{
  "data" : [ {
    "EMPLOYEE_ID" : "1001",
    "FULL_NAME" : "Anna Müller",
    "DEPARTMENT" : "Engineering",
    "SALARY" : "72000"
  }, {
    "EMPLOYEE_ID" : "1002",
    "FULL_NAME" : "James Carter",
    "DEPARTMENT" : "Finance",
    "SALARY" : "65000"
  }, {
    "EMPLOYEE_ID" : "1003",
    "FULL_NAME" : "Sofia Rossi",
    "DEPARTMENT" : "Engineering",
    "SALARY" : "78000"
  }, {
    "EMPLOYEE_ID" : "1004",
    "FULL_NAME" : "Liam O'Brien",
    "DEPARTMENT" : "HR",
    "SALARY" : "58000"
  } ]
}
```

### Explanation

The transformation starts by storing the column definitions in a variable `$cols` for later use inside the loops. It then iterates over each row in `.data`, capturing the current row as `$row`. For each row, zip (`$cols`, `$row`) pairs every column definition with its corresponding value by position, producing two-element arrays like the following:

```json
[
  [{"name": "EMPLOYEE_ID", "type": "fixed"}, "1001"],
  [{"name": "FULL_NAME",   "type": "text"},  "Anna Müller"],
  ...
]
```

These pairs are then fed into an object for expression, which builds the output object by using the column name (`.[0].name`) as the key and the row value (`.[1]`) as the value.

For more information about declaring variables, see this [GitHub resource](https://github.com/schibsted/jslt/blob/master/tutorial.md#variables).

For more information about zip and other functions, see this [GitHub resource](https://github.com/schibsted/jslt/blob/master/functions.md#ziparray1-array2---array).

## Flattening Bill of Materials (BOM) {#flattening-bill-of-materials}

A Bill of Materials (BOM) is naturally represented as a tree structure, where each assembly can contain child sub-assemblies, which can themselves contain further children. Flattening such a structure into a simple list is sometimes needed when feeding data into downstream systems that expect a flat, tabular format. This transformation also simplifies the import mapping process of the BOM to Mendix entities.

In this example, a Bicycle BOM is represented as a nested tree. The transformation flattens it into a list of assemblies, where each entry records its own ID and name, its direct parent (`parentSubAssembly`), and its direct children (`childrenSubAssemblies`).

### Example

**Input:**

```json
{
  "name": "Bicycle",
  "rootSubAssemblies": [
    {
      "attributes": {
        "baseID": "UID-001",
        "name": "Back Wheel",
        "children": [
          {
            "attributes": {
              "baseID": "UID-002",
              "name": "Rubber Tire",
              "children": []
            }
          },
          {
            "attributes": {
              "baseID": "UID-003",
              "name": "Rim",
              "children": [
                {
                  "attributes": {
                    "baseID": "UID-004",
                    "name": "Spoke",
                    "children": []
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
}
```

**JSLT:**

```jslt
def flatten-assemblies(assemblies, parentAssembly)
  [for ($assemblies)
    let parentWithoutChildren = if ($parentAssembly)
      $parentAssembly.attributes.baseID
    else null
    let childrenWithoutGrandchildren = [for (.attributes.children)
      .attributes.baseID
    ]
    let currentAssembly = {
      "baseID": .attributes.baseID,
      "name": .attributes.name,
      "parentSubassembly": $parentWithoutChildren,
      "childrenSubassemblies": $childrenWithoutGrandchildren
    }
    let childAssemblies = if (.attributes.children and size(.attributes.children) > 0)
                            flatten-assemblies(.attributes.children, .)
                          else
                            []
    [$currentAssembly] + $childAssemblies
  ] | flatten(.)

{
  "name": .name,
  "flattenedAssemblies": flatten-assemblies(.rootSubAssemblies, null)
}
```

**Output:**

```json
{
  "name" : "Bicycle",
  "flattenedAssemblies" : [ {
    "baseID" : "UID-001",
    "name" : "Back Wheel",
    "parentSubassembly" : null,
    "childrenSubassemblies" : [ "UID-002", "UID-003" ]
  }, {
    "baseID" : "UID-002",
    "name" : "Rubber Tire",
    "parentSubassembly" : "UID-001",
    "childrenSubassemblies" : [ ]
  }, {
    "baseID" : "UID-003",
    "name" : "Rim",
    "parentSubassembly" : "UID-001",
    "childrenSubassemblies" : [ "UID-004" ]
  }, {
    "baseID" : "UID-004",
    "name" : "Spoke",
    "parentSubassembly" : "UID-003",
    "childrenSubassemblies" : [ ]
  } ]
}
```

### Explanation

The transformation defines a recursive function `flatten-assemblies` that takes a list of assemblies and the parent assembly of that list. For each assembly it processes, it first resolves the parent's baseID (or null if there is no parent) and collects the baseID of each direct child, without descending further. It then constructs a flat object for the current assembly containing its ID, name, parent reference, and list of child IDs. If the current assembly has children, the function calls itself recursively on those children, passing the current assembly as the new parent. The results for the current assembly and all its descendants are concatenated into a single array, and flatten is applied at the end of each recursive level to collapse the nested arrays into a flat list.

The root of the transformation starts this by calling `flatten-assemblies` on `rootSubAssemblies` with null as the initial parent, producing a fully flattened list that preserves the parent-child relationships without any nesting.

For more information about declaring functions in JSLT, see this [GitHub resource](https://github.com/schibsted/jslt/blob/master/tutorial.md#function-declarations).

## Extracting Information from a String {#extracting-information-from-a-string}

Sometimes multiple pieces of information are encoded within a single structured string, such as a file path, an identifier, or a URL, and you need to extract a specific piece of that information for use downstream or in your own app. JSLT string functions allow you to extract each component into its own dedicated field. This makes the data easier to consume, filter, and process without placing any additional burden on the downstream step. 

In this example, a file path string is broken down into its individual components: the root folder, department, year, and file name, each mapped to a dedicated output field.

### Example

**Input:**

```json
{
  "filePath": "reports/finance/2024/annual-report.pdf"
}
```

**JSLT:**

```jslt
{
  "folder": split(.filePath, "/")[0],
  "department": split(.filePath, "/")[1],
  "year": split(.filePath, "/")[2],
  "fileName": split(.filePath, "/")[3]
}
```

**Output:**

```json
{
  "folder": "reports",
  "department": "finance",
  "year": "2024",
  "fileName": "annual-report.pdf"
}
```

### Explanation

The `split` function breaks the file path string into an array of segments using `/` as the separator, producing the following array:

```json
["reports", "finance", "2024", "annual-report.pdf"]
```

Each segment is then accessed by its index: `[0]` for the first element, `[1]` for the second, and so on. This allows each component of the path to be mapped to a clearly named output field.

For more information about useful built-in functions, see this [GitHub resource](https://github.com/schibsted/jslt/blob/master/functions.md#jslt-functions).

## Working with SPARQL Query Results {#working-with-sparql-query-results}

SPARQL is a query language for RDF data, commonly used with knowledge graphs and semantic web APIs. Its query results follow a standard JSON format where the column names (called variables) are declared separately in a head block, and the actual result rows are returned as bindings, a list of objects where each key maps to a typed value wrapper rather than a plain value. This structure is precise and interoperable, but verbose. Transforming it into a simple flat list of objects makes it far easier to work with in import mappings.

In this example, a SPARQL query returns customer records. The transformation extracts the variable names from the head block and uses them to map each binding into a plain object, pulling the value field out of each typed wrapper.

### Example

**Input:**

```json
{
  "head": { "vars": ["customer", "customerId", "customerName"] },
  "results": {
    "bindings": [
      {
        "customer":     { "type": "uri",     "value": "http://.../Customer/0000000" },
        "customerId":   { "type": "literal", "value": "CUST001" },
        "customerName": { "type": "literal", "value": "Global Tech Solutions Inc." }
      }
    ]
  }
}
```

**JSLT:**

```jslt
let vars = .head.vars

([for (.results.bindings)
  let binding = .
  {for ($vars)
    . : fallback(get-key($binding, .).value, "")
  }
])
```

**Output:**

```json
[
  {
    "customer" : "http://.../Customer/0000000",
    "customerId" : "CUST001",
    "customerName" : "Global Tech Solutions Inc."
  }
]
```

### Explanation

The variable names are captured into `vars` at the root level before any looping begins. The transformation then iterates over each binding in the results. Because `.` is rebound inside the inner loop, the current binding is saved into `binding` immediately. The inner for loop iterates over the variable names, using each variable name as both the key and the lookup argument. `get-key($binding, .)` retrieves the typed value wrapper for that variable from the saved binding, and `.value` extracts the plain value from it. `fallback` ensures that if a variable is missing from a binding, an empty string is used instead of null. The result is a clean, flat list of objects with no type wrappers that you can easily use as a source for import mapping.

For more information about `get-key`, `fallback`, and other functions, see this [GitHub resource](https://github.com/schibsted/jslt/blob/master/functions.md#get-keyobject-key-fallback---value).
