---
title: "Prioritization Models Supported by Portfolio Management"
linktitle: "Prioritization Models"
url: /developerportal/portfolio-management/prioritization-models/
parent: "portfolio-management"
weight: 100
description: "Describes the prioritization models supported by the Mendix Portfolio Management tool."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

When you manage initiatives in a flow-based manner, only looking at each initiative's return on investment theoretically does not produce the best economic benefit. Instead, sequencing initiatives based on their priorities and updating their priorities continuously can bring you the best result.

The [Portfolio Management](/developerportal/portfolio-management/) tool supports two prioritization models, WSJF and RICE. These two prioritization models can be used to prioritize your initiatives in a flow-based environment. WSJF and RICE are based on different components. You can pick the prioritization model that is most suitable for your portfolio management.

## WSJF {#wsjf}

The weighted shortest job first (WSJF) score is calculated as the cost of delay (CoD) divided by the job size of an initiative. The CoD is the sum of the initiative's business value, time criticality, and risk reduction. If an initiative can deliver the most CoD with the smallest job size, it has the highest WSJF score, and provides the best chance of return.

{{< figure src="/attachments/developerportal/portfolio-management/prioritization-models/wsjf-score-calculation.png" class="no-border" >}}

### Calculating CoD

You can calculate the CoD by adding up the following three primary components:

* **Business Value**– This indicates how much business value this initiative will generate. For example, if the initiative can generate great revenue to your business or lead to a potential high penalty or other negative effects if it gets delayed, it has high business value. You define the business value based on a relative estimation instead of using actual monetary values. In the Portfolio Management app, you can select **Highest**, **High**, **Medium**, **Low**, or **Lowest** to rate the business value of an initiative.
* **Time Criticality** – This indicates how time-critical this initiative is. For example, if an initiative's business value decreases sharply over time or has a fixed deadline, it is very time-critical. In the Portfolio Management app, you can select **Highest**, **High**, **Medium**, **Low**, or **Lowest** to rate the time criticality of an initiative. The score should still be a relative estimation, instead of an absolute estimation.
* **Risk Reduction** – This indicates how much this initiative will help mitigate or reduce future risks. For example, moving an initiative to the cloud might not generate direct revenue, but it will prevent data loss risk. In the Portfolio Management app, you can select **Highest**, **High**, **Medium**, **Low**, or **Lowest** to rate the risk reduction of an initiative.

During the calculation, **Highest**, **High**, **Medium**, **Low**, and **Lowest** translate to the numeric values 20, 13, 8, 5, and 1 respectively.

### Calculating Job Size

The job size of an initiative is the amount of effort that an initiative requires. In the Portfolio Management tool, the job size of an initiative is rated by five levels: **XL**, **L**, **M**, **S**, or **XS**. You should rate the job size of an initiative by comparing it with other initiatives. For example, you can set the initiative with the smallest job size to **XS**, and then set the other initiatives relative to that.

During the calculation, **XL**, **L**, **M**, **S**, and **XS** translate to the numeric values 20, 13, 8, 5, and 1 respectively.

If the job size of an initiative is too big, Mendix recommends splitting it into multiple smaller initiatives.

## RICE {#rice}

You get the reach impact confident effort (RICE) score of an initiative by multiplying the Reach, Impact, and Confidence estimates and then dividing the result by the Effort estimate. An initiative with a higher RICE score has a better chance of return.

{{< figure src="/attachments/developerportal/portfolio-management/prioritization-models/rice-score-calculation.png" class="no-border" >}}

* **Reach** – This is the estimated number of relevant users that the initiative may affect within a time period. You can define by yourself who the users are and how the reach is defined. You must enter an integer and this exact value is used during the calculation. 
* **Impact** – This is the estimated amount of impact that the initiative may have on individual users. When you score the impact of an initiative, you can break down the impact into various factors, and use a combined weighted score that combines all these factors. In the Portfolio Management app, you can set it to **Massive**, **High**, **Medium**, **Low**, or **Minimal**. During the calculation, these translate to the numeric values 3, 2, 1, 0.5, and 0.25 respectively.
* **Confidence** – This indicates how confident you are about your Impact and Reach estimates. For example, if your estimates for one initiative are mostly based on a gut feeling, while your estimates for another initiative are well backed up by user research and experimentation, the Confidence score for the first initiative should be lower than the second one. In the Portfolio Management app, you can set the confidence for an initiative to **High**, **Medium**, or **Low**. During the calculation these translate to the numeric values 1, 0.8, and 0.5 respectively. If your confidence for an initiative is low, you can reconsider if the initiative is as good as it seems.
* **Effort** – This is the estimated total amount of time that the initiative will require from all members of your team: product, design, and development. This unit of this factor is persons per week or persons per month. For example, if one initiative requires ten persons to work on it for three weeks, and another initiative requires five persons to work on it for six weeks, the effort for these two initiatives is the same. You must enter an integer. This exact value is used during the calculation. 
