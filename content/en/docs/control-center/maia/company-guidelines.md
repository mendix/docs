---
title: "Company Guidelines"
url: /control-center/company-guidelines/
description: "Describes how to add company-wide guidelines which govern how teams build apps with Mendix."
weight: 10
beta: true
---

{{% alert color="warning" %}}
This feature is in Public Beta. For more information, refer to [Release Status](/releasenotes/release-status/).
{{% /alert %}}

## Introduction

**Company Guidelines** provides a central location where you define, manage, and maintain the standards that govern how your teams build with Mendix. Without this shared foundation, Maia operates without knowledge of your company's standards, producing outputs that require repeated manual adjustment to align with your architectural patterns, compliance policies, and naming conventions. When you define guidelines in the **Company Guidelines** central library, Maia becomes aware of them and can surface relevant guidance when generating outputs. This helps ensure that AI-generated content is informed by your company's standards across the software delivery lifecycle.

Company guidelines define the following:

* Guidelines and standards – Compliance, security, and governance policies that teams must follow.
* Reusable assets and conventions – Architecture and integration standards, development and design best practices.
* Shared terminology – Domain language and company-specific terminology.

When you upload company guideline documents, the system extracts and categorizes guidelines, which you can then review and apply. Once applied, these guidelines are stored in a central library. This ensures consistent AI generation across your software delivery lifecycle.

## Adding Company Guidelines

You can manually add guidelines, or you can upload a guideline document, review its items, then apply them. For details, follow the steps in these sections.

### Manually Adding Guidelines

Follow these steps to manually add guidelines:

1. Click **Add Guideline**. The **New Guideline** window is displayed.
2. In the **Guideline** field, enter a description.
3. From the **Category** drop-down list, select up to three categories to be assigned to the guideline.
4. Click **Create Guideline**. The new guideline is added to the **Guidelines Library** tab.

### Uploading Guideline Documents

Follow these steps to add guidelines in bulk by uploading a guideline document:

1. Click **Upload Guidelines**. The **Upload and Process Guidelines** window is displayed.
2. Upload one or more .md, .pdf, .docx, .xlsx, and .txt format documents. For an example of what constitutes a good guideline document, check out <a href="/originals/control-center/company-guidelines/Company Guidelines - Example Document.pdf" target="_blank" rel="noopener noreferrer">this sample .pdf</a>.

2. Click **Process Documents**. The newly uploaded documents are displayed in the **Documents that need your attention** section, pending processing and review.

    Mendix parses and processes the uploaded documents in the background. During this time, the status of the documents is **Processing**. After processing is complete, the status changes to **Pending Review**, and a **Review Guidelines** button is displayed on the document card.

3. Click **Review Guidelines** to go through the pre-processed list of guidelines and review and apply them. The **Review Proposed Guidelines** page is displayed, showing a list of all the guidelines in the document, along with the categories they fall under. These categories are generated and assigned by Mendix AI agents. For details on the available categories, refer to the [Guideline Categories](#guideline-categories) section of this page.

    You can perform the following actions for each guideline in the list:
    
    * Click **Mark as Reviewed** if you want to keep the guideline and its assigned categories.
    * In the contextual menu:
    
        * Click **Edit** if you want to edit a guideline and its categories.
        * Click **Clear Review Status** if you want to revoke the reviewed status of the guideline.
        * Click **Remove** if you want to discard the guideline.

    You can search by guideline text, or filter by category and approval status.

4. While reviewing the guidelines in the list, you have the following options:

* **Save and exit** – Saves the current state of the reviewed guidelines. This allows you to review the remaining guidelines later, or have someone else also review them before applying.
* **Apply reviewed** – Only adds reviewed guidelines to the guideline library. Any unreviewed guidelines are discarded.     
    Conflicts with existing guidelines or duplicates are not automatically detected. Mendix recommends reviewing the library if needed.
* **Apply all** – Adds all guidelines to the guideline library, even if they are not marked as reviewed.    
     Conflicts with existing guidelines or duplicates are not automatically detected. Mendix recommends reviewing the library if needed.

Applied guidelines are now listed on the **Guidelines Library** tab of the main page.

### Guideline Categories {#guideline-categories}

After a document is parsed, guidelines are automatically assigned to one or more categories. These are the possible categories:

* Domain terminology – Guidelines in this category define what a term, concept, severity level, tier, or process state means, so agents interpret it consistently.
* Architecture and integration – Guidelines in this category govern how services communicate, integrate, or expose contracts to other systems: API contracts, protocols, payload formats, versioning, service topology, cross-system schemas.
* Data and domain modeling – Guidelines in this category govern how data is structured, named, typed, owned, classified, or modeled within or across services: entity design, field names, schema ownership, domain boundaries.
* Development standards – Guidelines in this category govern how code is written, tested, reviewed, named, built, deployed, or operated inside a single service or team: coding conventions, branch naming, internal tooling.
* Security – Guidelines in this category impose a technical control: encryption, authentication, authorization, secrets management, input validation, vulnerability management, access controls.
* Compliance and governance – Guidelines in this category impose a regulatory obligation, audit/evidence requirement, approval workflow, or governance process with an accountability trail: mandated processes, sign-offs, deadlines with owners.
* Design and brand – Guidelines in this category govern visual design, UX behavior, copywriting, tone, or brand identity on user-facing surfaces: layouts, colors, typography, voice, accessibility.

## Company Guidelines Page Tabs

The main **Company Guidelines** page includes the **Guidelines Library** and **Source Documents** tabs.

### Guidelines Library Tab 

The **Guidelines Library** tab lists all the guidelines that have been processed and applied, along with their categories. Each guideline has the following details:

* The user who reviewed and appied the guideline
* The source document, if the guideline is extracted from an uploaded document
* A contextual menu which includes the options to edit or delete the guideline

You can search by guideline text, or filter by category and source document.

### Source Documents Tab 

The **Source Documents** tab lists the documents from which applied guidelines originate, along with the following details:

* **Document name** – The name of the uploaded document.
* **Uploaded by** – The name of the user who uploaded the document.
* **Date** – The date when the document was uploaded.
* **Status** – The status of the document, which can be one of the following:
    * **Processing**
    * **Pending Review** – Click **Review** to go through the list of guidelines.
    * **Applied**
    * **Failed**
* **Delete** – Delete the document. This deletes all of its associated guidelines.
