---
title: "Consistency Errors"
menu_order: 70
description: "Describes consistency errors in Mendix Studio and the way to fix them."
tags: ["studio", "consistency errors", "checks", "errors"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction 

To make sure that your app is always properly built, Mendix Studio does several consistency [checks](checks) when publishing your app. When a consistency check is not met, Studio will notify you about this via consistency errors on the **Checks** panel. For more information on how to view the consistency errors, see the [Viewing Checks for Your App and Interacting with the Checks Panel](checks#viewing-checks) section in *Checks*. 

Errors need to be solved before your app can be published. An example of a consistency error is when you do not specify the entity property of a data view on a page. 

![](attachments/consistency-errors/data-view-no-entity.png)

Consistency errors can occur in the following editors of Mendix Studio:

* Pages (For information on consistency error in the page editor, see [Page Consistency Errors](consistency-errors-pages))
* Navigation document (For information on consistency error in the navigation, see [Navigation Consistency Errors](consistency-errors-navigation))
* Microflows (For information on consistency error in the microflow editor, see [Microflow Consistency Errors](consistency-errors-microflows))

##  2 Main Documents in This Category

* [Page Consistency Errors](consistency-errors-pages) – provides information on page consistency errors and how to fix them
* [Navigation Consistency Errors](consistency-errors-navigation) – provides information on navigation consistency errors and how to fix them
* [Microflow Consistency Errors](consistency-errors-microflows) – provides information on microflow consistency errors and how to fix them
* [Domain Model Consistency Errors](consistency-errors-domain-model) – provides information on domain model consistency errors and how to fix them