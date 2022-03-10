---
title: "Decisions"
url: /refguide8/decisions/
parent: "application-logic"
menu_order: 50
tags: ["studio pro", "decision", "decisions"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

{{% alert type="info" %}}
<img src="attachments/chinese-translation/china.png" style="display: inline-block; margin: 0" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/decisions.pdf).
{{% /alert %}}

## 1 Introduction

Decisions are elements that split or merge sequence flows based on conditions set for these elements. Decisions have a shape of a diamond.

The elements described in this document are in the **Decisions** section of the **Toolbox**:

{{% image_container width="300" %}}
![Decisions](attachments/decisions/decisions.png)
{{% /image_container %}}

There are following types of decisions:

* [Decision](decision) – makes a choice based on a condition and follows one and only one of the outgoing sequence flows

	{{% image_container width="400" %}}![](attachments/decisions/decision-example.png){{% /image_container %}}

* [Object Type Decision](object-type-decision) – makes a choice based on the type of an object of a generalized entity

	![](attachments/decisions/object-type-decision.png)

* [Merge](merge) – merges incoming flows 

	![](attachments/decisions/merge.png)
