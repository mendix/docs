---
title: "Page Parameters"
url: /refguide/page-parameter/
weight: 70
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Parameters are the means by which you pass data to your page. When a page is loaded, the parameters are filled with the current values.

To use an object or primitive value in your page, define a parameter. In the image below, the parameter is named **CustomerName**, is of type string, is not required, and has a default value of an empty string `''`:

{{< figure src="/attachments/refguide/modeling/pages/page/page-parameter.png" alt="use an object or primitive value" class="no-border" >}}

## Properties

### Name

* **Name** — The name of the parameter.

### Data Type

The data type of a parameter defines the type of the value that it expects. Possible data types are **Objects**, and **Primitives** such as `Boolean`, `Date and time`, `Decimal`, `Enumeration`, `Integer/Long`, and `String`.

Default: *Object*

### Argument {#argument}

Argument determines whether it is **Required** or **Optional** to [pass an argument](#passing-arguments) to the parameter when opening the page. If it is required it is mandatory to supply an argument for that parameter when opening a page.

### Default Value

When argument is set to **Optional**, a default value can be set. The default value is used if no [argument is passed](#passing-arguments) to the parameter. Given the example below, if no argument is passed for `CustomerName`, the page will open with the parameter set to `''`:

{{< figure src="/attachments/refguide/modeling/pages/page/page-parameter-default-value.png" alt="no argument example" max-width=70% >}}

{{% alert color="info" %}}
The default value is used when the argument is omitted during modeling. Not when the argument value is `empty` during runtime.
{{% /alert %}}

## Passing Arguments {#passing-arguments}

Arguments are passed to page parameters when a page is opened. For example, using a **Show page** action [on a widget event](/refguide/on-click-event/#show-page) or in a [microflow](/refguide/show-page/). For each parameter the page has an argument can be configured. It is only necessary to pass arguments to [required parameters](#argument):

{{< figure src="/attachments/refguide/modeling/pages/page/page-parameter-mappings.png" alt="example of passing arguments" width="500px" >}}

### Variable Arguments

Variable arguments are used to pass parameters from the context to the page. This is done by selecting from the available variables on the page presented in the dropdown. **Optional** parameters do not require an argument and can be omitted by selecting `(None)` :

{{< figure src="/attachments/refguide/modeling/pages/page/page-parameter-argument-variable.png" alt="example of variable arguments" max-width=70% >}}

### Expression-Based Arguments

This method allows users to use functions and follow associations within the expression to set the argument values. Using expressions for arguments provides flexibility in setting values and improves the functionality of pages. 

In the example below, the page has a parameter **AnimalName** which is populated by an expression extracting the **Name** member of the provided **Animal** object:

{{< figure src="/attachments/refguide/modeling/pages/page/page-parameter-expression.png" alt="example expression-based arguments" width="500px" >}}
