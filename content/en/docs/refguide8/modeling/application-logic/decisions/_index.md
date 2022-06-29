---
title: "Decisions"
url: /refguide8/decisions/
weight: 50
tags: ["studio pro", "decision", "decisions"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/decisions.pdf).
{{% /alert %}}

## 1 Introduction

Decisions are elements that split or merge sequence flows based on conditions set for these elements. Decisions have a shape of a diamond.

The elements described in this document are in the **Decisions** section of the **Toolbox**:

{{< figure src="/attachments/refguide8/modeling/application-logic/decisions/decisions.png" alt="Decisions"   width="300"  >}}

There are following types of decisions:

* [Decision](/refguide8/decision/) – makes a choice based on a condition and follows one and only one of the outgoing sequence flows

	{{< figure src="/attachments/refguide8/modeling/application-logic/decisions/decision/decision-example.png"   width="400"  >}}

* [Object Type Decision](/refguide8/object-type-decision/) – makes a choice based on the type of an object of a generalized entity

	{{< figure src="/attachments/refguide8/modeling/application-logic/decisions/object-type-decision.png" >}}

* [Merge](/refguide8/merge/) – merges incoming flows 

	{{< figure src="/attachments/refguide8/modeling/application-logic/decisions/merge.png" >}}
