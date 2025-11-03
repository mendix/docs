---
title: "Annotations"
url: /refguide8/annotations/
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

An **annotation** can be used to add comments to a domain model.

For example, an order entity contains two decimal attributes, **TotalPrice** and **Discount**. You can add an annotation to note that, unlike the total price, the discount represents a percentage and not an amount of money.

{{< figure src="/attachments/refguide8/modeling/domain-model/annotations/16844036.png" class="no-border" >}}

## Common Properties

### Caption

The caption property contains the text of the annotation.
