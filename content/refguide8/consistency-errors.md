---
title: "Consistency Errors"
url: /refguide8/consistency-errors/
parent: "errors-pane"
menu_order: 10
description: "Describes consistency errors in Mendix Studio Pro and the way to fix them."
tags: ["Studio Pro", "consistency errors", "checks", "errors"]
---

{{% alert type="info" %}}
<img src="attachments/chinese-translation/china.png" style="display: inline-block; margin: 0" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/consistency-errors.pdf).
{{% /alert %}}

## 1 Introduction 

To make sure that your app is always consistent and properly built, Studio Pro does consistency checks when you build your app. 

When a consistency check is not met, Studio Pro will notify you about this via consistency errors on the [Errors pane](errors-pane). The errors in pages, microflows, domain models, and document templates will be highlighted:

![Errors Pane](attachments/consistency-errors/errors-pane.png)

If you cannot see the **Errors** pane, you can enable it from the menu option **View > Error list**.

To enable you to find your errors quickly, each error will show you:

* A unique **Error Code** for the error
* A **Message** describing the error
* The name of the page **Element** causing the error
* The **Document** where this element is
* The **Module** where the document is

Double-clicking on the error will take you directly to the element causing the error.

Errors need to be solved before your app can be deployed. A consistency error can occur in the following editors or functionalities of Studio Pro:

* [Pages](consistency-errors-pages) 
* [Navigation](consistency-errors-navigation) 
* [Microflows](microflows)
* [Domain Model](domain-model)
* [Integration](integration)
* [Security](security)

##  2 Read More

* [Page Editor Consistency Errors](consistency-errors-pages)
* [Navigation Consistency Errors](consistency-errors-navigation)
* [Errors Pane](errors-pane)
* [Pages](pages)
* [Microflows](microflows) 
* [Navigation in Mendix](navigation)
