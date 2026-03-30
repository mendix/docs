---
title: "Decisions"
url: /refguide9/decisions/
weight: 50
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

Decisions are elements that split or merge sequence flows based on conditions set for these elements. Decisions have a shape of a diamond.

The elements described in this document are in the **Decisions** section of the **Toolbox**:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/decisions/decisions.png" alt="Decisions"   width="300"  class="no-border" >}}

There are following types of decisions:

* [Decision](/refguide9/decision/) – makes a choice based on a condition and follows one and only one of the outgoing sequence flows

    {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/decisions/decision/decision-example.png"   width="400"  class="no-border" >}}

* [Object Type Decision](/refguide9/object-type-decision/) – makes a choice based on the type of an object of a generalized entity

    {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/decisions/object-type-decision.png" class="no-border" >}}

* [Merge](/refguide9/merge/) – merges incoming flows 

    {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/decisions/merge.png" class="no-border" >}}
