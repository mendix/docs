---
title: "Annotation"
url: /refguide8/annotation/
weight: 60
aliases:
    - /refguide8/annotation-flow.html
    - /refguide8/annotation-flow
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

An annotation is an element that can be used to put comments to a flow.

In the example below, you use a **Show message** activity to warn end-users about unpaid orders with a pop-up message in the client. Later you want to extend this warning with an email message send to the user. You can use an annotation as a reminder and put it above the current activity.

{{< figure src="/attachments/refguide8/modeling/application-logic/annotation/anotation.png" class="no-border" >}}

## Common Properties

### Caption

For details, see [Common Properties](/refguide8/microflow-element-common-properties/).

## Annotation Flow {#annotation-flow}

An annotation flow is a connection that can be used to link an annotation to a flow object(s).

For example, this is an annotation flow linking an annotation and a **Microflow call** activity:

{{< figure src="/attachments/refguide8/modeling/application-logic/annotation/anotation-flow.png" class="no-border" >}}
