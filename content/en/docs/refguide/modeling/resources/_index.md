---
title: "Resources"
url: /refguide/resources/
weight: 50
description: "Introduces the helping documents (resources) that can be used in Studio Pro."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

Resources are helping documents in a module that cannot function on their own but can be used in other documents. For example, a microflow or a page can function on its own, but a Java action can only function in a microflow.  

Resources can be reused in different modules of your app. 

## Adding Resources

To add a resource document, do the following:

1. In the [App Explorer](/refguide/app-explorer/), right-click the module or a folder you want to add a resource to and select **Add other**:

    {{< figure src="/attachments/refguide/modeling/resources/app-explorer-resources.png" class="no-border" >}}

2. In the **Resources** category, select the document you would like to add to your app.

## Resources Overview

The **Resources** category contain various document types that can be used in different editors of Studio Pro:

| Element            | Is used in                      | Description                                                  |
| ------------------ | -------------------------------------- | ------------------------------------------------------------ |
| [Java action](/refguide/java-actions/) | Microflows                             | Java actions can extend the functionality of your application. They can be called from microflows. |
| [JavaScript action](/refguide/javascript-actions/) | Nanoflow                               | JavaScript actions can extend the functionality of your application. They can be called from nanoflows. |
| [Rule](/refguide/rules/)      | Microflows                             | Rules contain the application logic that should result in an enumeration or a Boolean. They are used in decisions in microflows. |
| [Enumeration](/refguide/enumerations/) | Domain model                           | Enumerations are used to define attributes of an enumeration type. |
| [Dataset](/refguide/data-sets/) | Pages                                  | Datasets define the data shown in reports widgets.        |
| [Constant](/refguide/constants/) | Microflow expressions and Consumed web services | Constants are used to define configuration values.           |
| [Regular expression](/refguide/regular-expressions/) | Domain model                           | Regular expressions are used in validation rules to define criteria that a string should match to pass the validation. They cannot be used in other places which require regular expressions (for example, the *isMatch()* function). |
| [Scheduled event](/refguide/scheduled-events/) | Microflows                     | Scheduled events let the runtime execute a microflow at a specific moment in time. |
| [Document template](/refguide/document-templates/) | Microflows                             | Document template is used to format the document in a client and to download or print it. |

## Read More

* [Microflows](/refguide/microflows/)
* [Domain Model](/refguide/domain-model/)
* [Pages](/refguide/pages/)
