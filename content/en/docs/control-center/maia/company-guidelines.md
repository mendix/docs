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

In the absence of defined guidelines, Maia operates without knowledge of your organization's requirements, so developers must manually reapply the same architectural guidelines, compliance policies, and naming conventions for each project. The **Company Guidelines** page eliminates this by giving Maia persistent, structured company context that Maia capabilities inherit automatically.

Company guidelines define the following:

* Guidelines and standards – Compliance, security, and governance policies that teams must follow.
* Reusable assets and conventions – Architecture and integration standards, development and design best practices.
* Shared terminology – Domain language and company-specific terminology.

When you upload company guideline documents, the system extracts and categorizes guidelines, which you can then review and approve. Once approved, these guidelines are stored in a central library, and automatically served to Maia services, ensuring consistent AI generation across your software delivery lifecycle.

You can upload, review, and apply company guidelines through the **Company Guidelines** page.

## Creating Company Guidelines

To create company guidelines, follow these steps:

1. Click **Upload Document**. You can upload .md, .pdf, and .docx format documents. For information on what constitutes a good guideline document, check out <a href="/originals/control-center/company-guidelines/Evora Development Guidelines.pdf" target="_blank" rel="noopener noreferrer">this sample .pdf</a>.

2. After the document is uploaded, the **Company Guidelines** page displays a **Documents that need your attention** section. This includes guideline documents that need to be processed, reviewed, or fixed and that are not yet active.

    Mendix parses and processes the uploaded document in the background. During this time, the status of the document is **Processing**. After processing is complete, the status changes to **Pending Review**, and a **Review and Approve** button is displayed on the document.

3. Click **Review and Approve**. The **Review Proposed Guidelines** page is displayed, showing a list of all the guidelines in the document, along with the categories they fall under. These categories are generated and assigned by Mendix agents. For details on the available categories, refer to the [Guideline Categories](#guideline-categories) section of this page.

    Go through the list of guidelines and click **Mark as Reviewed** for those that you want to keep, or **Remove** for those that you want to discard.

    You can search by guideline text, or filter by category and status.

4. After you have gone through all the guidelines and are satisfied with the result, click **Create Guidelines**. The guidelines are now listed on the **Company Guidelines** tab of the main page.

### Guideline Categories {#guideline-categories}

After a document is parsed, guidelines are automatically assigned to the following categories. A single guideline can be assigned to multiple categories.

* Domain terminology – The guidelines in this category define what a term, concept, severity level, tier, or process state means, so agents interpret it consistently.
* Architecture and integration – The guidelines in this category govern how services communicate, integrate, or expose contracts to other systems: API contracts, protocols, payload formats, versioning, service topology, cross-system schemas.
* Data and domain modeling – The guidelines in this category govern how data is structured, named, typed, owned, classified, or modeled within or across services: entity design, field names, schema ownership, domain boundaries.
* Development standards – The guidelines in this category govern how code is written, tested, reviewed, named, built, deployed, or operated inside a single service or team: coding conventions, branch naming, internal tooling.
* Security – The guidelines in this category impose a technical control: encryption, authentication, authorization, secrets management, input validation, vulnerability management, access controls.
* Compliance and governance – The guidelines in this category impose a regulatory obligation, audit/evidence requirement, approval workflow, or governance process with an accountability trail: mandated processes, sign-offs, deadlines with owners.
* Design and brand – The guidelines in this category govern visual design, UX behaviour, copywriting, tone, or brand identity on user-facing surfaces: layouts, colors, typography, voice, accessibility.

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
    * **Pending Review** – Click **Review and Approve** to go through the list of guidelines.
    * **Applied**
* **Delete** – Delete the document. This deletes all of its associated guidelines.
