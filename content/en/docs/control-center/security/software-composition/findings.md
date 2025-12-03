---
title: "Findings Tab"
linktitle: "Findings Tab"
url: /control-center/findings-tab/
description: "Describes the Findings tab on the Software Composition page of the Mendix Control Center."
weight: 3
---

## Introduction

The **Findings** tab allows you to view and manage vulnerable components across your app landscape, as published on the [Security Advisories](/releasenotes/security-advisories/) page. The information is organized based on the type of finding assigned to each component, making it easy to identify those that require action.

<!-- add screenshot -->

## Finding List

The following fields and options are available above the list of findings:

* A search box to search for information within the list.
* A filter to display items based on the type of finding. 
* A filter to display items based on the severity level.
* The **Show Snoozed Findings** toggle, which allows you to hide or display findings which you have chosen to snooze temporarily.
* The {{% icon name="office-sheet" %}}**Export All** option, which allows you to export all the information in the list to an Excel file.

The findings list contains the following information:

* **Severity** – The severity assigned to a component. This is computed on the [Scoring Criteria](/control-center/scoring-criteria-tab/) tab.
* **Finding Type** – The type of finding, which can read more about in the [Finding Types](/control-center/scoring-criteria-tab/#finding-types) section of the *Scoring Criteria Tab* page.
* **Component** – The component which is affected by the finding.
* **Version** – The version of the component which is affected by the finding.
* **Type** – The type of component. For more information, refer to the [Types of Marketplace Components](/appstore/#components-type) section on the *Marketplace* page.
* **Support** – The support type of the Marketplace component. This can be **Mendix**, **Partner**, or **Community**. For more information, refer to [Content Support Categories](/appstore/marketplace-content-support/#category).
* **Created On** – The date when the affected component was created.
* **Apps Affected** – The number of apps which use the affected component. Clicking the number in this column displays a list of apps.
* **View Details & Edit** – Displays the **Finding Overview** page, which contains details about the finding and the corresponding component.

## Finding Overview

The **Finding Overview** page displays detailed information about the selected finding, as well as appropriate actions to take on it.

### Finding Details

This section contains the following information:

* **Severity** – The severity of the finding, as computed based on the [NVD Vulnerability Metrics](https://nvd.nist.gov/vuln-metrics) framework.
* **CVE-ID** – The unique ID which identifies the finding on the **Security Advisories** page.
* **Age** – The number of days since the date when the CVSS score was computed.
* **Created on** – The date when the component was created.
* **Description** – The reason why the component was marked as vulnerable.

### Components Details

This section contains the following information:

* **Version** – The version of the component affected by this finding.
* **Type** – The type of the component affected by this finding.
* **Owner** – The entity that owns the component affected by this finding.
* **Apps using component** – The number of apps which use the component affected by this finding, along with a link to view them.

### Activity

This section logs all action pertaining to the finding, along with their dates.    
Activities include finding creation, Mendix Admin guidance updates, snoozing updates, scoring criteria changes.

### Actions

This section contains the following:

* **Status** – <!-- what are the possible statuses? Active/Snoozed/Done? --> The status of the finding.    
    You can choose to ignore the finding, and come back to it after a predefined time. To do that, click **Snooze**, then select a snooze duration, and add a reason.
* **Mendix Admin Guidance** – An AI generated text containing information about what the vulnerability is, why it is important to fix it, and how it can be fixed. You can edit this text.
