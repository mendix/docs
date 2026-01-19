---
title: "OQL Module"
url: /appstore/modules/oql-module/
description: "Describes the configuration and usage of the OQL module, which is available in the Mendix Marketplace."
---

## Introduction

The [OQL Module](https://marketplace.mendix.com/link/component/66876) adds microflow actions which execute [OQL](https://docs.mendix.com/refguide/oql/) queries and return the results as a list of Mendix objects, a count of results in the database, or a CSV file. This means that you do not need to write your own Java actions to execute OQL queries.

### Typical Use Cases

This module allows users to run OQL queries directly from a string or from a [dataset](/refguide/data-sets/) without having to write Java code.

It is also an alternative to [View Entities](/refguide/view-entities/) where you need support for running dynamic OQL queries and using OQL parameters. Unless these features are necessary, Mendix recommends that you use View Entities.

You can also use this module to interactively investigate data problems in a running app.

{{% alert color="warning" %}}
The OQL Module does not validate the input query and does not apply user role access controls when executing queries.
Care should be taken to guarantee that the query is valid and does not expose app data.
{{% /alert %}}

### Features

The OQL module has the following features:

* Executes an OQL query directly or loads a query from a dataset
* Supports running queries with limit and offset
* Supports OQL named query parameters
* Returns data directly or generates a CSV file
* If you opt to generate a CSV file, this can be created with the following characteristics:
    * Compressed in a Zip file
    * Customized to use different characters for quoting strings, separating values, and escaping special characters
    * Customized to remove new line sequences from string values

## Available OQL Actions

{{% alert color="info" %}}

* Only `SELECT` queries are supported
* All actions support defining named parameters for queries – see [Named Parameters](#named-parameters), below, for more information
* All queries are executed without access rules

{{% /alert %}}

### ExecuteOQLStatement {#executeoqlstatement}

This action executes an OQL query, either directly or by loading one from a dataset. If you wish to use a dataset, you need to provide its fully-qualified name (for example "MyFirstModule.Dataset", rather than just "Dataset").

This action takes the following parameters:

* `statement`: OQL Query or fully qualified name of a Dataset (module and Dataset name) to be executed
* `returnEntity`: Entity type to be used to store results
* `amount`: If not `empty` or 0, will limit the number of results to at most this amount. It is recommended to use an explicit sorting order in the OQL query when using amount
* `offset`: If not `empty` or 0, will offset the results of the query by this quantity. It is recommended to use an explicit sorting order in the OQL query when using offset
* `preserveParameters`: If false, all parameters defined for this query will be cleared

It returns the following:

* A list of Mendix objects of type `returnEntity` using the following rules:
    * Each query result column is stored in an attribute or association of the same name
    * Attributes and associations of the `returnEntity` that are not present in the query are given the default value
    * If there is a query result column which cannot be matched to an attribute or association, then the module will throw an error
    * Only associations owned by the `returnEntity` are considered when setting associations

### CountRowsOQLStatement {#countrowsoqlstatement}

Similar to `ExecuteOQLStatement`, above, but returns only the number of results. Use this to obtain information from the database without the overhead of generating Mendix objects.

This action does not support datasets.

[Named parameters](#named-parameters) are always reset on completion.

This action takes the following parameters:

* `statement`: OQL Query to be executed
* `amount`: Limits the number of results to at most this amount. If there are more results in the query than this limit, this amount is returned instead. If set to 0, no limit is applied
* `offset`: This parameter is ignored and might be removed in a future version

It returns the following:

* The number of results of executing `statement`

### ExportOQLToCSV {#exportoqltocsv}

This action executes an OQL query and saves the result in a CSV file.

[Named parameters](#named-parameters) are always reset on completion.

This action takes the following parameters:

* `statement`: OQL Query or fully qualified name of a Dataset (module and Dataset name) to be executed
* `returnEntity`: A FileDocument or one of its specializations where the resulting file will be stored
* `removeNewLinesFromValues`: Indicates if new lines inside string values should be replaced with spaces
* `zipResult`: Indicates if the resulting file should be compressed inside a ZIP file
* `exportHeaders`: Indicates if the first line of the result should contain a header with the names of each column
* `separatorChar`: Indicates what character should be used to separate columns in the result
* `quoteChar`: Indicates what character should be used to quote string values. Should be left empty if you wish to use `escapeChar`. The quote character is escaped in a quoted string by repeating it, following [RFC4180](https://www.ietf.org/rfc/rfc4180.txt)
* `escapeChar`: Indicates what character should be used to escape spaces and other special characters if string values are unquoted. Only applicable if `quoteChar` is not defined.

It returns the following:

* An object of type specified in the `returnEntity` parameter containing the CSV file with the results of executing `statement`

## Named Parameters {#named-parameters}

If you wish to use named parameters inside an OQL query, you must call the following actions to set their values before calling the actions above:

* `AddBooleanParameter`: For Boolean parameters
* `AddDateTimeParameter`: For Date and Time parameters
* `AddDecimalParameter`: For parameters of type Decimal
* `AddIntegerLongValue`: For parameters of type Integer/Long
* `AddObjectParameter`: For parameters that reference a Mendix Object
* `AddStringParameter`: For String parameters

{{% alert color="info" %}}
If you wish to keep the same parameters across multiple calls to the [ExecuteOQLStatement](#executeoqlstatement) action, you must set `preserveParameters` to `true`. All other OQL actions above will clear all defined parameters after every call.
{{% /alert %}}
