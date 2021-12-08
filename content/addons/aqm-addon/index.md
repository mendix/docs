---
title: "AQM"
---

## 1 Introduction

Mendix Application Quality Monitor (AQM) is a cloud service developed by Mendix and the Software Improvement Group (SIG). Mendix AQM performs a static analysis of Mendix application models according the ISO 25010 standard for maintainability. Dashboards provide instant insight into the quality of the application models as they're built, including quality ratings based on benchmarks of thousands of projects.

By proactively monitoring quality on a daily basis customers can improve maintainability and reduce lifecycle costs.

The Mendix AQM quality model is based on the [SIG/TÜViT Evaluation Criteria](https://www.sig.eu/wp-content/uploads/2018/05/20180509-SIG-TUViT-Evaluation-Criteria-Trusted-Product-Maintainability.pdf). These criteria provide standardized evaluation and certification of the technical quality of the source code of software products. The purpose of such evaluation and certification is to provide an instrument to developers for guiding improvement of the products they create and enhance.

The general notion of software quality embraces a variety of quality aspects, of which a taxonomy is available in the [ISO/IEC 25010](http://iso25000.com/index.php/en/iso-25000-standards/iso-25010) international standard on software product quality. The scope of the SIG/TÜViT **Evaluation Criteria** is limited to the internal quality characteristic of maintainability and its sub-characteristics of **analyzability, modifiability, testability, modularity and reusability**. The evaluation concerns the source code of a software product, not the behavior of the product in a test or production environment.

## 2 Additional Information

* Mendix AQM is available for projects based on Mendix 6.0 and above
* Mendix AQM supports self-service onboarding of new AQM apps for existing customers via Mendix Support
* Mendix AQM is part of our Mendix pricelist – for more information or activation, please contact your Mendix Customer Success Manager or Sales
* Detailed documentation is available via the complementary Sigrid Academy
* Mendix AQM dashboard reports are generated every night based on the latest version in your Project Team Server
  * By default, the Mendix AQM reports are based on the main line in your app's Team Server
  * We are building CI support for Mendix. It will allow you to run AQM in your Mendix CI pipeline (read about SigridCI [here](https://github.com/Software-Improvement-Group/sigridci))

## 3 Implemented Checks for Best Practices

AQM includes automated checks for a subset of the [Mendix Development Best Practices](/howto/general/dev-best-practices). The following checks are currently implemented in AQM:

|Check Code|Check Name|
|----------|----------|
|MF-1|[Microflow – elements – Using more than 25 elements in a microflow is discouraged](/howto/general/dev-best-practices#size)|
|MF-2|[Microflow – documentation – All complex microflows (more than 10 activities and/or 2 decisions) must have an annotation describing the purpose of the microflow](/howto/general/dev-best-practices#documentation-and-annotations)|
|DM-1|[Domain model – entities – Using more than two inheritance levels on domain entities is discouraged](/howto/general/dev-best-practices#inheritance)|
|DM-2|[Domain model – entities – Using calculated attribute values is discouraged](/howto/general/dev-best-practices#attributes)|
