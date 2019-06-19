---
title: "Annotation"
parent: "application-logic"
menu_order: 40
tags: ["studio pro", "annotation", annotation flow]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

An annotation is an element that can be used to put comments in a flow.

{{% alert type="info" %}}

Currently you warn users of unpaid orders with a pop-up message in the client. Later you want to extend this warning with an e-mail message send to the user. To remember this you can use an annotation and put it beside the current activity that warns the user.

![](attachments/819203/918060.png)

{{% /alert %}}

## 2 Common Properties

### 2.1 Caption

For details, see [Microflow Element Common Properties](microflow-element-common-properties).

## 3 Annotation Flow

An annotation flow is a connection that can be used to link an annotation to a flow object(s).

For example, this is an annotation flow linking an annotation and a microflow call activity:

![](attachments/819203/918062.png)