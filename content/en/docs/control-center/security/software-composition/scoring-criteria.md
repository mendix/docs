---
title: "Scoring Criteria Tab"
linktitle: "Scoring Criteria Tab"
url: /control-center/scoring-criteria-tab/
description: "Describes the Scoring Criteria tab on the Software Composition page of the Mendix Control Center."
weight: 3
---

## Introduction

The **Scoring Criteria** tab allows you to adjust the conditions and severity for each type of finding.     
A finding represents an issue identified in the components of an app.     
Scoring criteria reflect your company's risk preference.

The settings on this tab determine how each such vulnerability is calculated for apps, environments, and components.

{{< figure src="/attachments/control-center/security/software-composition/scoring_criteria.png" >}}

The default values are strict, but you can adjust them to reflect the practice of your company.

## Finding Types

The types of findings that you can adjust for are **Outdated** and **Deprecated**.

### Outdated

A finding is generated when a component becomes outdated, meaning when a new runtime compatible version is published to the Mendix Marketplace.    

For example, if you set a **Low** severity to 30 days, and if a new version of the component is published to the Marketplace, then the team must update this component to the new version and deploy the app within 30 days. Otherwise, it will be marked with a **Low** severity finding. 

There are two ways to adjust the scoring criteria:

* Change the condition — You can increase the number of days so the teams have more time to update their apps.
* Turn off the finding — You can turn off some or all findings if you do not want teams to focus on them.

### Deprecated

A finding is generated when a component has been labeled as deprecated in the Mendix Marketplace.

You can choose the severity level for deprecated components. For example, if your company views deprecated components as a critical risk, then set the **Critical** severity for this finding.

## Severity Levels

These are the severity levels of a finding:

* **Critical**
* **High**
* **Medium**
* **Low**

They are color-coded for easy identification throughout **Software Composition** pages.

For outdated components, you can adjust all severity levels.    
For deprecated components, you can choose which severity level to assign.
