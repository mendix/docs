---
title: "Prioritization Models Supported by the Portfolio Management app"
linktitle: "Prioritization Models"
url: /developerportal/control-center/prioritization-models/
parent: "portfolio-management"
weight: 10
description: "Describes the prioritization models supported by the Portfolio Management app."
tags: ["Portfolio Management", "prioritization models", "wsjf prioritization", "rice prioritization"]
---

## 1 Introduction

When you manage projects in a flow-based manner, only looking at each job's return on investment theoretically does not produce the best economic benefit. Instead, sequencing jobs based on their priorities and updating their priorities continuously can bring you the best result.

The [Portfolio Management](/developerportal/control-center/portfolio-management/) app supports two prioritization models, WSJF and RICE. These two prioritization models can be used to prioritize your projects in a flow-based environment. WSJF and RICE are based on different components. You can pick the prioritization model that is most suitable for your project portfolio management.

## 2 WSJF {#wsjf}

Weighted Shortest Job First (WSJF) score is calculated as the cost of delay (CoD) divided by the job size, and the CoD of a project is the sum of its Business Value, Time Criticality, and Risk Reduction scores. If a project can deliver the most CoD within the shortest duration, it has the highest WSJF score, and provides the best economic return.

### 2.1 Calculating CoD

You can calculate the CoD by adding up three primary components:

* Business Value – This indicates how much business value this project generates. For example, if the project can bring great revenue to your business or leads to a potential high penalty or other negative effects if it gets delayed, it has high business value. You define the business value based on relative estimation instead of using actual monetary values. In the Portfolio Management app, you can select **Highest**, **High**, **Medium**, **Low**, or **Lowest** to rate the business value of a project.
* Time Criticality – This indicates how time-critical this project is. For example, if the project's business value drops over time greatly or have a fixed deadline, it is more time-critical. In the Portfolio Management app, you can select **Highest**, **High**, **Medium**, **Low**, or **Lowest** to rate the time criticality of a project. The Time Criticality score is also a relative estimation, instead of an absolute estimation.
* Risk Reduction – This indicates how much risk this project reduces. Consider how much risk the project can reduce for your business. Similar to Business Value and Time Criticality, the Risk Reduction score is also a relative estimation. In the Portfolio Management app, you can set the Risk Reduction score to **Highest**, **High**, **Medium**, **Low**, or **Lowest**.

### 2.2 Calculating Job Size

You should use relative estimation to calculate the job size of a project. In the Portfolio Management app, the job size of a project is rated by five levels: **XS**, **S**, **M**, **L**, or **XL**. For example, you can set the smallest job to **XS**, and then set the other projects relative to that.

If the job size of a project is too big, we recommend you to split it into multiple smaller projects.

## 3 RICE {#rice}

You get the Reach Impact Confident Effort (RICE) score of a project by multiplying the Reach, Impact, and Confidence estimates, and then dividing the product by the Effort estimate.

* Reach – This is the estimated number of relevant users that the project may affect within a time period. You can define by yourself who the users are and how the reach is defined. You must enter an integer for the Reach value.

* Impact – This is the estimated amount of impact that the project may have on individual users. When you score the impact of a project, you can use a combined weighted score that combines different factors that constitute impact at your organization. You can set it to **Highest**, **High**, **Medium**, **Low**, or **Lowest** in the Portfolio Management app.

* Confidence – This indicates how confident you are about your Impact and Reach estimates. For example, if your estimates for one project are mostly based on a gut feeling, while your estimates for another project are well backed up by user research and experimentation, the Confidence score for the first project should be lower than the second one. In the Portfolio Management app, you can set the Confidence for a project to **Highest**, **High**, **Medium**, **Low**, or **Lowest**. If your confidence for the estimates is very low, you can reconsider if the project is as good as it seems.

* Effort – This is the estimated total amount of time that the project will require from all members of your team: product, design, and development. This unit of this factor is persons per month or persons per month. For example, if one project requires ten persons to work on it for three weeks, and another project requires five persons to work on it for six weeks, the Effort score for these two project should be the same. You must enter an integer for the Effort score.