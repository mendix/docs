---
title: "Prioritization Models in Portfolio Management"
linktitle: "Prioritization Models"
url: /developerportal/control-center/prioritization-models/
parent: "portfolio-management"
weight: 10
description: "Describes the prioritization models in  in Portfolio Management."
tags: ["Portfolio Management", "prioritization models", "wsjf prioritization", "rice prioritization"]
---

## 1 Introduction

When you manage projects in a flow-based manner, theoretically, only looking at each job's return on investment does not produce the best economic benefit. Instead, sequencing jobs based on their priorities and updating their priorities continuously can bring you the best result.

[Portfolio Management](/developerportal/control-center/portfolio-management/) app provides you with two prioritization models, WSJF and RICE. These two prioritization models can be used to prioritize your projects based in a flow-based environment. WSJF and RICE are based on different components. You can pick the prioritization model that is most suitable for your project portfolio management.

## 2 WSJF {#wsjf}

Weighted Shortest Job First (WSJF) score is calculated as the cost of delay (CoD) divided by the job size. For example, if a feature would be worth €200,000 per month, and there was a delay of four months, then the total CoD should be €800,000. If a project can deliver the most CoD within the shortest duration, it has the highest WSJF score, and provides the best economic return.

### 2.1 Calculating CoD

The CoD can be calculated using three primary components:

* **Business Value** – This indicates how much business value this project generates. If the project makes a great revenue impact on your business or leads to a potential high penalty or other negative effects if it gets delayed, it has high business value.
* **Time Criticality** – This indicates how time-critical this project is. If the project's business value drops over time greatly or have a fixed deadline, it is more time-critical.
* **Risk Reduction** – This indicates how much risk this project reduces. Consider how much risk the project can reduce for your business.

### 2.2 Calculating Job Size

To estimate the job size is not always easy. However, since you can select **XS**, **S**, **M**, **L**, or **XL**, you can set the smallest job to **XS**, and then set the other project relative to that.

If the job size of a project is too big, we recommend you to split it into multiple smaller projects.

## 3 RICE {#rice}

You get the Reach Impact Confident Effort (RICE) score of a project by multiplying the Reach, Impact, and Confidence estimates, and then dividing the product by the Effort estimate.

### 3.1 Calculating Reach

### 3.2 Calculating Impact

### 3.3 Calculating Confidence

### 3.4 Calculating Effort