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

The **Company Guidelines** page offers an organization-wide foundation for Mendix development that enables Maia to generate outputs aligned with your standards. It provides a central place where you can define, manage, and maintain guidelines and standards that govern how teams build with Mendix.

In the absence of defined guidelines, Maia operates without knowledge of your organization's requirements, so developers must manually reapply the same architectural guidelines, compliance policies, and naming conventions for each project. The **Company Guidelines** page eliminates this by giving Maia persistent, structured company context that is inherited automatically across all Maia capabilities.

Company guidelines define the following:

* Guidelines and standards – Compliance, security, and governance policies that teams must follow.
* Reusable assets and conventions – Architecture and integration standards, development and design best practices.
* Shared terminology – Domain language and company-specific terminology.

When you upload company guideline documents, the system extracts and categorizes guidelines, which you can then review and approve. Once approved, these guidelines are stored in a central library, and automatically served to Maia services, ensuring consistent AI generation across your software delivery lifecycle.

You can upload, review, and apply company guidelines through the **Company Guidelines** page.

## Creating Company Guidelines 

Follow these steps to create company guidelines:

1. Click **Upload Document**. You can upload .md, .pdf, and .docx format documents. For information on what constitutes a good guideline document, check out <a href="/originals/control-center/company-guidelines/Evora Development Guidelines.pdf" target="_blank" rel="noopener noreferrer">this sample .pdf</a>.

2. Once the document is uploaded, the **Company Guidelines** page displays a **Documents that need your attention** section. This includes guideline documents that need to be processed, reviewed, or fixed, and that are not yet active.    

    Mendix parses and processes the uploaded document in the background, during which the status of the document is **Processing**. Once processed, the status changes to **Pending Review**, and a **Review and Approve** button is displayed on the document.

3. Click **Review and Approve**. The **Review Proposed Guidelines** page is displayed, showing a list of all the guidelines in the document, along with the categories they fall under. These categories are generated and assigned by Mendix agents.

    Go through the list of guidelines and click **Mark as Reviewed** for those that you want to keep, or **Remove** for those that you want to discard.

    You can search by guideline text, or filter by category and status.

4. Once you have gone through all the guidelines, and are happy with the result, click **Create Guidelines**. The guidelines are now listed on the **Company Guidelines** tab of the main page.

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
