---
title: "Consistency Errors"
url: /refguide9/consistency-errors/
weight: 10
description: "Describes consistency errors in Mendix Studio Pro and the way to fix them."
---

## Introduction 

To make sure that your app is always consistent and properly built, Studio Pro does consistency checks when you build your app. 

When a consistency check is not met, Studio Pro will notify you about this via consistency errors on the [Errors pane](/refguide9/errors-pane/). The errors in pages, microflows, domain models, and document templates will be highlighted:

{{< figure src="/attachments/refguide9/modeling/menus/view-menu/errors-pane/consistency-errors/errors-pane.png" alt="Errors Pane" class="no-border" >}}

If you cannot see the **Errors** pane, you can enable it from the menu option **View > Error list**.

To enable you to find your errors quickly, each error will show you:

* A unique **Error Code** for the error
* A **Message** describing the error
* The name of the page **Element** causing the error
* The **Document** where this element is
* The **Module** where the document is

Double-clicking on the error will take you directly to the element causing the error.

Errors need to be solved before your app can be deployed. A consistency error can occur in the following editors or functionalities of Studio Pro:

* [Pages](/refguide9/consistency-errors-pages/) 
* [Navigation](/refguide9/consistency-errors-navigation/) 
* [Microflows](/refguide9/microflows/)
* [Workflows](/refguide9/workflows/)
* [Domain Model](/refguide9/domain-model/)
* [Integration](/refguide9/integration/)
* [Security](/refguide9/security/)

## Read More

* [Page Editor Consistency Errors](/refguide9/consistency-errors-pages/)
* [Navigation Consistency Errors](/refguide9/consistency-errors-navigation/)
* [Errors Pane](/refguide9/errors-pane/)
* [Pages](/refguide9/pages/)
* [Microflows](/refguide9/microflows/) 
* [Workflows](/refguide9/workflows/)
* [Navigation in Mendix](/refguide9/navigation/)
