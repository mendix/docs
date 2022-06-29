---
title: "Consistency Errors"
url: /refguide/consistency-errors/
weight: 10
description: "Describes consistency errors in Mendix Studio Pro and the way to fix them."
tags: ["Studio Pro", "consistency errors", "checks", "errors"]
---

## 1 Introduction 

To make sure that your app is always consistent and properly built, Studio Pro does consistency checks when you build your app. 

When a consistency check is not met, Studio Pro will notify you about this via consistency errors on the [Errors pane](/refguide/errors-pane/). The errors in pages, microflows, domain models, and document templates will be highlighted:

{{< figure src="/attachments/refguide/modeling/menus/view-menu/errors-pane/consistency-errors/errors-pane.png" alt="Errors Pane" >}}

If you cannot see the **Errors** pane, you can enable it from the menu option **View > Error list**.

To enable you to find your errors quickly, each error will show you:

* A unique **Error Code** for the error
* A **Message** describing the error
* The name of the page **Element** causing the error
* The **Document** where this element is
* The **Module** where the document is

Double-clicking on the error will take you directly to the element causing the error.

Errors need to be solved before your app can be deployed. A consistency error can occur in the following editors or functionalities of Studio Pro:

* [Pages](/refguide/consistency-errors-pages/) 
* [Navigation](/refguide/consistency-errors-navigation/) 
* [Microflows](/refguide/microflows/)
* [Workflows](/refguide/workflows/)
* [Domain Model](/refguide/domain-model/)
* [Integration](/refguide/integration/)
* [Security](/refguide/security/)

##  2 Read More

* [Page Editor Consistency Errors](/refguide/consistency-errors-pages/)
* [Navigation Consistency Errors](/refguide/consistency-errors-navigation/)
* [Errors Pane](/refguide/errors-pane/)
* [Pages](/refguide/pages/)
* [Microflows](/refguide/microflows/) 
* [Workflows](/refguide/workflows/)
* [Navigation in Mendix](/refguide/navigation/)
