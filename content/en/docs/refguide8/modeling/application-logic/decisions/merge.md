---
title: "Merge"
url: /refguide8/merge/
parent: "decisions"
menu_order: 1
tags: ["studio pro", "merge", "decisions"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="info" %}}
<img src="attachments/chinese-translation/china.png" style="display: inline-block; margin: 0" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/merge.pdf).
{{% /alert %}}

## 1 Introduction

A merge can be used to combine flows into one. If previously you split the microflow flow (for example, when adding a decision) and now one and the same action needs to be executed for these separated flows, you can combine the two (or more) paths using a merge. 

For example, you have a situation where the microflow has been separated into two flows according to certain conditions. In one flow an order status is set to complete and in the other the status is set to incomplete. After this you want to retrieve all associated order lines to aggregate the prices into a total for both flows. You can use a merge to combine the two flows so you can use only one activity to retrieve order lines.

![](/attachments/refguide8/modeling/application-logic/decisions/merge.png)


