---
title: "Annotation"
url: /refguide/annotation/
weight: 60
tags: ["studio pro", "annotation", annotation flow]
aliases:
    - /refguide/annotation-flow.html
    - /refguide/annotation-flow
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

An annotation is an element that can be used to put comments to a flow.

In the example below, you use a **Show message** activity to warn end-users about unpaid orders with a pop-up message in the client. Later you want to extend this warning with an e-mail message send to the user. You can use an annotation as a reminder and put it above the current activity.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/annotation/anotation.png" >}}

## 2 Common Properties

### 2.1 Caption

For details, see [Common Properties](/refguide/microflow-element-common-properties/).

## 3 Annotation Flow {#annotation-flow}

An annotation flow is a connection that can be used to link an annotation to a flow object(s).

For example, this is an annotation flow linking an annotation and a **Microflow call** activity:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/annotation/anotation-flow.png" >}}