---
title: "Memo QSM Measurement Results"
url: /appstore/partner-solutions/qsm/memo-measurement-results/
description: "Introduces Mendix Quality and Security Management, which is a cloud service developed by Mendix and the Software Improvement Group (SIG), and the implemented checks for best practices."
---

## Background

The Software Improvement Group (SIG) and Mendix have entered in a partnership to deliver quality measurement support to Mendix Licensees. In particular, SIG has developed the Quality and Security Management (QSM) tool that performs quality measurements on Mendix application models, calculates quality ratings from the measurements, and presents both measurements and ratings on a quality dashboard. QSM is developed by SIG and hosted on the Mendix infrastructure.

## Usage of Measurement Results by SIG for Continuous Improvement

The measurement results of QSM are used by the R&D team of SIG to improve the measurement algorithms, to recalibrate the rating system, and to provide anonymized benchmarks to Licensees:

* Improve measurements: Make adjustments to the algorithms that extract basic measurement information from Mendix application models. These can be bug fixes, support for new model constructs, or extraction of additional information.

* Recalibrate rating system: The thresholds employed by the rating system for mapping basic measurement results to star ratings are derived by data mining on past measurement results. For details, see the two publications in the note below. When new measurement results come available, recalibration is done to keep thresholds up to date.

  {{% alert color="info" %}} [1] Tiago L. Alves, José Pedro Correia, and Joost Visser, Benchmark-based Aggregation of Metrics to Ratings, In Proceedings of the Joint Conference of the 21st International Workshop on Software Measurement (IWSM) and the 6th International Conference on Software Process and Product Measurement (Mensura), pp20-29, IEEE Computer Society, 2011.</br></br>
  [2] Tiago Alves, Christiaan Ypma, and Joost Visser, Deriving Metric Thresholds from Benchmark Data, In proceedings of the 26th IEEE International Conference on Software Maintenance (ICSM 2010), September 12-18m 2010, Timisoara, Romania, IEEE Computer Society, 2010.{{% /alert %}}

* Anonymized benchmarks: Overviews can be provided that show the rating results of one or more selected apps in relation to a group of anonymous peers.

## SIG Information Security

SIG operates a software analysis laboratory with an ISO 17025 quality measurement system certified by TÜV Informationstechnik. Additionally, the SIG information security management system is certified against ISO 27001 by TÜV Nord. These management systems ensure the correct and secure handling of data in all SIG activities.
