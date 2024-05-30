---
title: "Quality and Security Management"
url: /appstore/partner-solutions/qsm/
linktitle: "QSM"
description: "Introduces Mendix Quality and Security Management, which is a cloud service developed by Mendix and the Software Improvement Group (SIG), and the implemented checks for best practices."
aliases:
    - /addons/aqm-addon/
    - /addons/aqm-addon/index.html
---

{{% alert color="info" %}}
This product has been renamed from **Mendix Application Quality Monitor (AQM)** to **Mendix Quality and Security Management (QSM)**.
{{% /alert %}}

## 1 Introduction

[Mendix Quality and Security Management (QSM)](https://www.softwareimprovementgroup.com/solutions/sigrid-for-mendix-quality-and-security-management/) is a cloud service developed by Mendix and the Software Improvement Group (SIG). Mendix QSM performs a static analysis of Mendix application models according the ISO 25010 standard for maintainability. Dashboards provide instant insight into the quality of the application models as they're built, including quality ratings based on benchmarks of thousands of projects.

By proactively monitoring quality on a daily basis customers can improve maintainability and reduce lifecycle costs.

The Mendix QSM quality model is based on the SIG/TÜViT Evaluation Criteria. These criteria provide standardized evaluation and certification of the technical quality of the source code of software products. The purpose of such evaluation and certification is to provide an instrument to developers for guiding improvement of the products they create and enhance.

The general notion of software quality embraces a variety of quality aspects, of which a taxonomy is available in the [ISO/IEC 25010](https://iso25000.com/index.php/en/iso-25000-standards/iso-25010) international standard on software product quality. The scope of the SIG/TÜViT **Evaluation Criteria** is limited to the internal quality characteristic of maintainability and its sub-characteristics of **analyzability, modifiability, testability, modularity and reusability**. The evaluation concerns the source code of a software product, not the behavior of the product in a test or production environment.

## 2 Additional Information

{{% alert color="info" %}}
To obtain or renew your purchased license, go to [this form](https://addon.mendix.com/index.html).
{{% /alert %}}

* Mendix QSM is available for projects based on Mendix 6.0 and above
* Mendix QSM supports self-service onboarding of new QSM apps for existing customers via Mendix Support
* Mendix QSM is part of our Mendix pricelist – for more information or activation, please contact your Mendix Customer Success Manager or Sales
* Detailed documentation is available via the complementary Sigrid Academy
* Mendix QSM dashboard reports are generated every night based on the latest version in your Project Team Server
    * By default, the Mendix QSM reports are based on the main line in your app's Team Server
    * We are building CI support for Mendix that will allow you to run QSM in your Mendix CI pipeline (for more information, see [SigridCI](https://github.com/Software-Improvement-Group/sigridci))

## 3 Implemented Checks for Best Practices

QSM includes automated checks for a subset of the [Mendix Development Best Practices](/refguide/dev-best-practices/). The following checks are currently implemented in QSM:

|Check Code|Check Name|
|----------|----------|
|MF-1|[Microflow – elements – Using more than 25 elements in a microflow is discouraged](/refguide/dev-best-practices/#size)|
|MF-2|[Microflow – documentation – All complex microflows (more than 10 activities and/or 2 decisions) must have an annotation describing the purpose of the microflow](/refguide/dev-best-practices/#documentation-and-annotations)|
|DM-1|[Domain model – entities – Using more than two inheritance levels on domain entities is discouraged](/refguide/dev-best-practices/#inheritance)|
|DM-2|[Domain model – entities – Using calculated attribute values is discouraged](/refguide/dev-best-practices/#attributes)|

## 4 Release Notes

### 2.0.0

#### Quality Monitor tool update

It is now possible to compare snapshots with each other. This functionality is similar to the metrics table.
The Compare snapshot functionality shows the differences between two snapshots.

We have enhanced dependency graph with some nice new features so you can see more information about the dependencies:

* You can see details of dependencies between two components by clicking on the edges.
* You can also see the dependency graph of the previous snapshot.
* The Graph can be filtered by dependency types, so you see only relevant information
* If you want to analyze the dependencies a bit further, you now can download the information in the DOT format. This can be used in tools like Graphviz.
* Large graphs are now correctly rendered again.

#### Analysis tool update - Pseudocode generator

The Analysis tool has been enhanced a lot, this will mitigate the occurrence of commonly seen false positive duplicates in the Microflows and Pages:

* Render references similar to attributes in CreateObject action
* Render variable name and show-in-browser value for DownloadFile action
* Render name and called operation for WebserviceCall action
* Render new values for attributes that get modified by ChangeObject action
* Render template name and parameters for GenerateDocument action
* Don’t render canvas size for pages and snippets
* AllowedRoles are now all rendered on a single line in the pseudo code of a Page

#### System Analysis Toolkit

We have upgraded the Model to the latest version 8.0 of SIG/TÜVIT Maintainability Model (Feb. 2016 calibrated version).
