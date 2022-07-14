---
title: "Sequence Flow"
url: /refguide7/sequence-flow/
---

## 1 Introduction

A sequence flow is an arrow that links events, activities, splits and merges with each other. Hereby it defines the order of execution. Flows always flow in one direction where elements follow each other up one by one. Splits always lead to one direction so it is not possible that multiple flows take place simultaneously.

{{% alert color="info" %}}

When you have two activities that you want to link together a sequence flow is used.

{{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/sequence-flow/917971.png" >}}

{{% /alert %}}

## 2 Behavior Properties

### 2.1 Condition Value

Condition value describes which direction should be followed based on the outcome of an [exclusive split](/refguide7/exclusive-split/) or an [inheritance split](/refguide7/inheritance-split/).
