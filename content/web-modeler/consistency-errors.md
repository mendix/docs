---
title: "Consistency Errors"
menu_order: 70
description: "Describes consistency errors in Mendix Studio and the way to fix them."
tags: ["studio", "consistency errors", "checks", "errors"]
---

## 1 Introduction 

To make sure that your app is always properly built, Mendix Studio does several consistency [checks](checks) when publishing your app. When a consistency check is not met, Studio will notify you about this via consistency errors on the **Checks** panel. For more information on how to view the consistency errors, see [Section 2 Viewing Checks for Your App and Interacting with the Checks Panel](checks#viewing-checks) in *Checks*. 

Errors need to be solved before your app can be published. An example of a consistency error is when you do not specify the entity property of a data view on a page. 

![](attachments/consistency-errors/data-view-no-entity.png)

Consistency errors can occur in the following editors of Mendix Studio:

* Page editor (For information on consistency error in the page editor, see [Page Editor Consistency Errors](consistency-errors-pages))
* Navigation document (For information on consistency error in the navigation, see [Navigation Consistency Errors](consistency-errors-navigation))
* Microflows editor (For information on consistency error in the navigation, see [Microflow Editor Consistency Errors](consistency-errors-microflows))

##  2 Read More

* [Page Editor Consistency Errors](consistency-errors-pages)
* [Navigation Consistency Errors](consistency-errors-navigation)
* [Microflow Editor Consistency Errors](consistency-errors-microflows)
* [Checks](checks)
* [Page Editor](page-editor)
* [Navigation Document](navigation)
* [Microflows](microflows)