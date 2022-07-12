---
title: "Decisions"
url: /refguide/decisions/
weight: 50
tags: ["studio pro", "decision", "decisions"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction
Decisions are elements that split or merge sequence flows based on conditions set for these elements. Decisions have a shape of a diamond.

The elements described in this document are in the **Decisions** section of the **Toolbox**:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/decisions/decisions.png" alt="Decisions"   width="300"  >}}

There are following types of decisions:

* [Decision](/refguide/decision/) – makes a choice based on a condition and follows one and only one of the outgoing sequence flows

	{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/decisions/decision/decision-example.png"   width="400"  >}}

* [Object Type Decision](/refguide/object-type-decision/) – makes a choice based on the type of an object of a generalized entity

	{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/decisions/object-type-decision.png" >}}

* [Merge](/refguide/merge/) – merges incoming flows 

	{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/decisions/merge.png" >}}
