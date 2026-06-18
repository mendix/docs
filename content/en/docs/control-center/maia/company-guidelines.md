---
title: "Company Guidelines"
url: /control-center/company-guidelines/
description: "Describes the Company Guidelines page in the Mendix Control Center."
weight: 10
beta: true
---

{{% alert color="warning" %}}
This feature is in Public Beta. For more information, refer to [Release Status](/releasenotes/release-status/).
{{% /alert %}}

## Introduction

Company guidelines provide organization-wide context for Maia, enabling relevant and compliant outputs across your Mendix development teams. In the absence of defined guidelines, Maia operates without shared knowledge of your company's standards, requiring repeated user input and producing inconsistent results.

Company guidelines define the following:

* Rules and standards – Compliance, security, and governance policies that teams must follow.
* Reusable assets and conventions – Architecture and integration standards, development and design best practices.
* Shared terminology – Domain language and company-specific terminology.

By configuring company guidelines, you establish a cohesive foundation that ensures Maia understands your organization's requirements and produces outputs that align with your development standards.

You can upload, review, and apply company guidelines through the **Company Guidelines** page.

## Creating Company Guidelines 

Follow these steps to create company guidelines:

1. Click **Upload Document**. You can upload .md, .pdf, and .docx format documents. For information on what constitutes a good guideline document, refer to the [Best Practices for Guideline Documents](#best-practices) section.

2. Once the document is uploaded, the **Company Guidelines** page displays a **Documents that need your attention** section. This includes guideline documents that need to be processed, reviewed, or fixed, and that are not yet active.    

    Mendix parses and processes the uploaded document in the background, during which the status of the document is **Processing**. Once processed, the status changes to **Pending Review**, and a **Review and Approve** button is displayed on the document.

3. Click **Review and Approve**. The **Review Proposed Guidelines** page is displayed, showing a list of all the guidelines in the document, along with the categories they fall under. These categories are generated and assigned by Mendix agents.

    Go through the list of guidelines and click **Mark as Reviewed** for those that you want to keep, or **Remove** for those that you want to discard.

    You can search by guideline text, or filter by category and status.

4. Once you have gone through all the guidelines, and are happy with the result, click **Create Guidelines**. The guidelines are now listed on the **Company Guidelines** tab of the main page.

### Best Practices for Guideline Documents {#best-practices}

[...]

## Company Guidelines Page Tabs 

The main **Company Guidelines** page includes the **Company Guidelines** and **Source Documents** tabs.

### Company Guidelines Tab 

The **Company Guidelines** tab lists all the guidelines that have been approved, along with the following details:

* The approver
* The source document
* [context menu]

You can search by guideline text, or filter by category and source file.

### Source Documents Tab 

The **Source Documents** tab lists the documents from which approved guidelines originate, along with the following details:

* **Document name** – The name of the uploaded document.
* **Uploaded by** – The name of the user who uploaded the document.
* **Date** – The date when the document was uploaded.
* **Status** – The status of the document, which can be one of the following:
    * **Processing**
    * **Pending Review** – You can click **Review and Approve** to go through the list of guidelines.
    * **Applied**
* **Delete** – Delete the document. This deletes all of its associated guidelines.
