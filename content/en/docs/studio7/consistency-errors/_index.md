---
title: "Consistency Errors"
url: /studio7/consistency-errors/
weight: 90
description: "Describes consistency errors in Mendix Studio and the way to fix them."
tags: ["studio", "consistency errors", "checks", "errors"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction 

To make sure that your app is always properly built, Mendix Studio does several consistency [checks](/studio7/checks/) when publishing your app. When a consistency check is not met, Studio will notify you about this via consistency errors on the **Checks** panel. For more information on how to view the consistency errors, see [Section 2 Viewing Checks for Your App and Interacting with the Checks Panel](/studio7/checks/#viewing-checks) in *Checks*. 

Errors need to be solved before your app can be published. An example of a consistency error is when you do not specify the entity property of a data view on a page. 

{{< figure src="/attachments/studio7/consistency-errors/data-view-no-entity.png" >}}

Consistency errors can occur in the following editors of Mendix Studio:

* Pages (For information on consistency error in the page editor, see [Page Consistency Errors](/studio7/consistency-errors-pages/))
* Navigation document (For information on consistency error in the navigation, see [Navigation Consistency Errors](/studio7/consistency-errors-navigation/))
* Microflows (For information on consistency error in the microflow editor, see [Microflow Consistency Errors](/studio7/consistency-errors-microflows/))

##  2 Read More

* [Page Consistency Errors](/studio7/consistency-errors-pages/)
* [Navigation Consistency Errors](/studio7/consistency-errors-navigation/)
* [Microflow Consistency Errors](/studio7/consistency-errors-microflows/)
* [Checks](/studio7/checks/)
* [Pages](/studio7/page-editor/)
* [Navigation Document](/studio7/navigation/)
* [Microflows](/studio7/microflows/)