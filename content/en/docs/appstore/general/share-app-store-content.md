---
title: "Share Marketplace Content"
url: /appstore/general/share-app-store-content/
category: "General Info"
weight: 2
description: "Describes how to create and share Mendix Marketplace content."
tags: ["marketplace", "public app store", "private app store", widget", "module"]
aliases:
    - /developerportal/app-store/share-app-store-content.html
    - /developerportal/app-store/share-app-store-content
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The Mendix Marketplace is driven by contributions from members of the community who share the connectors, modules, and apps they have built with the Mendix Platform. This how-to shows how to add and update Marketplace content.

This how-to will teach you how to do the following:

* Add new content and promotions to share in the Marketplace
* Update existing Marketplace content

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Familiarize yourself with the [Marketplace Overview](/appstore/general/app-store-overview/) and [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/)

## 3 Marketplace Content Development Guidelines {#guidelines}

This section presents guidelines for developing content that you will submit to the Mendix Marketplace.

{{% alert color="info" %}}
Submitted Marketplace content will be reviewed within five working days.
{{% /alert %}}

### 3.1 General {#general}

These are some general guidelines for creating new Marketplace content:

* Set up a separate app to build and maintain your Marketplace component
* Use a relatively recent Mendix version when creating the item, not only the latest Mendix version
* Create multiple versions of your Marketplace component (for example, for Studio Pro 7 and 8 and Desktop Modeler 7)

You can add information the end-user should know to the component [Documentation](#doc) when you are adding the content to the Marketplace.

### 3.2 Intellectual Property

When considering intellectual property (IP) in the Mendix Marketplace, follow these guidelines:

* Do not copy any text, names,or other data from other components published in the Marketplace, since you do not own the copyright. Do not create unnecessary ambiguity or confusion that would mislead users of Marketplace components.
* Do not mention components published by others within your content on the Marketplace. 
* Make sure your component documentation only includes intellectual property that you have created. Your component should not include information or content published by others on the Marketplace, as this may lead to removing your component from the Marketplace. This also means other components can also be removed if they are using your component information or content. 
* If you come across instances of intellectual property abuse, let us know at *AppServices_Supplier_Team@mendix.com*.

For more information, see [Apply IP Protection](/appstore/creating-content/sol-ip-protection/).

### 3.3 For Widgets

To develop widgets and submit them to Marketplace, follow these guidelines:

* The widget should be [pluggable](/howto/extensibility/create-a-pluggable-widget-one/)
* When writing variable and function names, use lowerCamelCase (for example, *mySecondVariable*)
* Add code comments
* Use descriptive variable and function names in both XML and JavaScript
* A function should not be more than 200 lines of code
* A function should only do one thing, and it should do it properly
* Use hooks and functional components over class components
* Create test pages for mobile when content is made for mobile platforms

### 3.4 For Modules

To develop modules and submit them to the Marketplace, follow these guidelines:

* Create a folder named **USE_ME** and add the microflows and pages that are relevant for the user
* Create an empty folder with the version number as its name, which will appear in Studio Pro's App Explorer
* If you add any **userlib** .*jar* files, make sure they are accompanied by a blank **MyModule.RequiredLib** file so that users know where the .*jar* files come from

    {{< figure src="/attachments/appstore/general/share-app-store-content/userlibBlankFiles_boxed.jpg"   width="400"  >}}

* Verify that the module's Java actions compile correctly (the easiest way to check is to create a deployment package, as it will clean the deployment folder and rebuild the app; for more information, see [Environments](/developerportal/deploy/environments/))
* Reduce the use of layouts and use snippets instead, which will result in fewer module dependencies and will reduce the number of potential errors (for example, missing layouts)
* Implement [user roles](/refguide/user-roles/) and [security](/refguide/security/)
* Creating a new release or module export should be done while the security level of the app containing the module is set to **Production**
* The [status](/refguide/app-security/#app-status) must be **Complete** for the following access: page, microflow, OData, entity, and dataset
* For example pages and microflows to be copied to another module, select the **Exclude from project** option for the document in order to encourage duplication and reduce dependency errors 
* Do not rename entities and attributes when creating new versions, as data in these entities will get lost (replacing an existing module is based on the entity names)
* The module must include the English language

### 3.5 Mendix Partner Program

For more information on what this program offers, see [Mendix Component Partner Program](/appstore/creating-content/partner-program/) and [Mendix Commercial Solution Partner Program](https://www.mendix.com/partners/become-a-partner/isv-program/).

## 4 Adding New Marketplace Content {#adding}

To add content to the Marketplace, follow the steps in each section below.

### 4.1 Getting Started {#get-started}

To start, click **Add content** in the top bar of the Marketplace home screen. Follow these steps to continue adding content:

### 4.2 General {#general}

On the **General** page,  you need to provide some details about your component. 

#### 4.2.1 Describing Your Content

Follow these steps to describe your content:

1. Select a **Content type** for your component. 

    {{% alert color="warning" %}}You can only set the content type in the initial version of your content. You cannot change this setting after the initial version is published.{{% /alert %}}

2. You can add up to 3 **Categories** for your component, which will help Makers find your component easier.

3. Enter a **Name** for your component.
4. Enter a **Description** of your component.

    {{% alert color="warning" %}}You can use rich text in the editor. However, using rich text at the beginning of the description is not recommended, as the rich text will not get rendered properly. You should add a few lines of regular text before using rich text.{{% /alert %}}

 
5. Select the location where you want to publish your component:

    * <a id="public-app-store"></a>**Public Marketplace (all Mendix users)** – your component will be available to the Mendix community (this content will have to be reviewed and approved by Mendix before it is available)
    * <a id="private-app-store"></a>**Private Marketplace (your company only)** – your content will receive the **Private** label and be available only via your [Company Content](/appstore/general/app-store-overview/#company-content) page; selected private content of a content group can also be made available to [content group guests](/appstore/general/app-store-overview/#guests) for download; this content will not be reviewed by Mendix

    {{% alert color="warning" %}}You can only set the location in the initial version of your content. You cannot change this setting by updating the Marketplace component later.{{% /alert %}}


#### 4.2.2 Providing License Details {#license}

Select the type of **License** you want applied to your app (if applicable).

##### 4.2.2.1 Open-Source Software Licenses

These are the open-source software license options available and their requirements:

| | **Notes** | **Commercial use allowed?** | **Component code needs to be in public repo?** | **License text required with copyright info in code and distribution artifact?** | **Can modify?** (Mention modifications to code) | **Can consuming apps use without making their code public?** | **Notice files should be distributed with artifact?** | **Original component source code to be distributed with consuming app?** | **Can sub-license?** |
| --- | --- | --- | --- | --- | --- | --- |  --- | --- | --- |
| [MIT](https://opensource.org/licenses/MIT) | Add a specific *license.txt* file in your artifacts (meaning, in the *.mpk*). | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/cross-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/cross-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} |
| **BSD 2.0, 3.0** | | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/cross-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} |
| **Apache 1.0** | | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/cross-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} |
| [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) | Add a specific *license.txt* file in your artifacts (meaning, in the *.mpk*). | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/cross-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/cross-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}}  |
| **Creative Commons CC0 1.0 Universal (CC-0)** (Public Domain) | | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/cross-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/cross-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/cross-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/cross-mark.svg" >}} | {{< figure src="/attachments/appstore/general/share-app-store-content/check-mark.svg" >}} |

{{% alert color="info" %}}
The [GNU General Public License (GPL), version 3](https://www.gnu.org/licenses/gpl-3.0.en.html)  is not available to use, as everything licensed under GNU GPL is public; GNU GPL has a strong copyleft effect; modification has a strong copyleft effect; and all consuming apps should make their code public.
{{% /alert %}}

##### 4.2.2.2 Proprietary License {#proprietary-license}

You can configure your own proprietary license for your company’s content. The license can be used for multiple components, and it can be used by everyone within your organization. 

This license can be created for a new **Public Marketplace (all Mendix users)** component by requesting a new license and submitting it alongside the component. The license needs to be [approved by Mendix](/appstore/general/share-app-store-content/#guidelines) after you have created and submitted it the first time. Once it has been submitted for approval, you and the people within your organization can also use it it for other components.

Follow these steps to configure a proprietary license for a new public component:

1. Click **Request New License**.
2. Add a **License Name**, which is the name that will be displayed on the [component details page](/appstore/general/app-store-overview/#details).
3. Add a **License URL**, which should lead the user to a web page that lists the terms and conditions for using the component. Users can navigate to this web page by clicking the license name on the component details page.
4. Add a **Reason** for the new license. This is for the purpose of the Mendix review only, and it will not be displayed on the component details page.

#### 4.2.3 Generating New Leads {#lead-generation}

A lead is a potential sales contact that expresses interest in your product or service. Lead routing is the end-to-end process of collecting the leads and distributing them to you. It is possible to configure lead routing for the following content types in the Marketplace:

* Solutions
* Solution templates
* App services
* Platform services

When prospective customers are interested in your product, they can leave their contact information using the Marketplace product listing. This is done by clicking a call-to-action button and filling in a form.

You can configure the name of your **Call-to-action (CTA)** button from the following choices: 

* **Contact Us**, **Notify Me**, and **Request Demo** – requires the email address that will receive the customer information
* **Download** – no lead routing is established, but customers can directly download your product.

In the **Provide one or more emails** field, you must specify the email address(es) where notifications and information can be sent.

#### 4.2.4 Finishing Up

To finish up configuring this page, follow these steps:

1. Click **Upload an Image** to upload an icon for the component.

    {{< figure src="/attachments/appstore/general/share-app-store-content/general.jpg"   width="600"  >}}

2. <a id="draft"></a>On each page of the upload flow, click one of the following buttons:

    * **Save Draft** to save the details you have entered so far to the draft (which you can access via the [My Drafts](/appstore/general/app-store-overview/#my-drafts) link in the top bar)
    * **Save & Continue** to go to the next page of the upload flow

### 4.3 Package {#package}

On the **Package** page, select your content source. 

{{% alert color="info" %}}
If you are using **Solutions**, you will not see the option to select your content source. If you are using **Solutions Template**, selecting a content source is optional.
{{% /alert %}}

* If you select **Select from GitHub**, follow the steps in the dialog box for copying the link of the release you want to import (for more information on the best practices when creating a Marketplace item in GitHub, see [How to Set Up a GitHub Repo to Publish a Marketplace Item](/appstore/creating-content/set-up-repo/))
    * To include the repo's *README.md* file on the component's [Documentation](#doc) tab, make sure you have checked the **Import Documentation** box 
    * When you are finished, click **OK**
* If you select **Manual upload**, follow the steps in the dialog box for uploading the package source file
    * When you are finished, click **Save**

Select the **Studio Pro Version** on which you built the content.

If this is the first version of the component you are uploading, the number in the **Version** section of the **Package** page will be automatically set to **1.0.0**. 

Enter **Release Notes** for the component in the box provided describing what is new in that release.

Finally, you can upload a **Virus Scan Report**. Uploading a scan report is currently optional, but Mendix strongly recommends that you create this report using a service (for example, [VirusTotal](https://www.virustotal.com/gui/home/upload)). This will ensure a high-quality and secure component. Once you upload your app package or component file (for example, *.mpk*, *.mxmodule*, *.zip*, *.class*, *.csv*, *.txt*, or *.tar*) and run the scan with the scanning service, save the report as a PDF (via a screenshot, if necessary). Then, click **Upload** in the Marketplace to upload your report.

{{% alert color="warning" %}}
If the virus scan report is invalid or there is some issue with it, the [Marketplace approval process](/appstore/general/share-app-store-content/#approval) will reject the component and it will not be listed in the Marketplace. Ensure you upload a true virus scan report to avoid the rejection of your component.
{{% /alert %}}

{{% alert color="warning" %}}
If this report is not attached and during our approval process we identify security issues in your component, the component will not be listed in the public Marketplace until the issue is resolved.
{{% /alert %}}

{{< figure src="/attachments/appstore/general/share-app-store-content/package.jpg"   width="600"  >}}

### 4.4 Enable {#doc}

On the **Enable** page, you can enter details on requirements and configuration for your component in the **Documentation**. Note that this documentation option is only available when the **Import Documentation** box has not been checked (on the **Package** page above). 

Follow the template for the recommended content:

* You must fill out the following sections in order to submit your component:
    * An extended **Description** of the component
    * The **Typical usage scenario** for the component
    * The **Features and limitations** of the component
* These sections are optional:
    * Any **Dependencies** (for example, the required Studio Pro version, modules, images, and styles)
    * The **Installation** steps and details
    * The **Configuration** steps and details
    * Any **Compatibility** steps and details
    * Any **Known bugs**
    * Any **Frequently asked questions**

The editor comes with a set of basic formatting tools, such as bold, bullet lists, and URL links.

<a id="screenshot"></a>Click **Add Screenshot** to select images of the component (especially for configuration) from your computer and upload them (this is required for submitting a new component):

{{< figure src="/attachments/appstore/general/share-app-store-content/enable.jpg"   width="600"  >}}

You can optionally add a **Video** and **Demo**.

### 4.5 Capabilities {#capabilities}

On the **Capabilities** page, you can provide the following details about a solutions template:

* A category recommendation in the **Industry Cloud** section
* A **Banner** that will be displayed on your content page
* One or more key features to leverage in the **Solution Capabilities** section (for each capability, enter a **Name** and **Description**)
* A **Use Case** relevant to the content (enter a **Header** and **URL**)
* **External links** relevant to the content

{{< figure src="/attachments/appstore/general/share-app-store-content/capabilities.jpg"   width="600"  >}}

### 4.6 Publish {#publish}

Finally, on the **Publish** page, you can review all the details of your component you entered so far and edit as necessary (via the **Edit Section** button) before clicking **Publish Content**.

{{< figure src="/attachments/appstore/general/share-app-store-content/publish.png"   width="600"  >}}

After you click **Publish Content**, your draft will be reviewed by Mendix before it is visible in the Marketplace. See the next section on details for the approval process.

### 4.7 Approval Process {#approval}

All components that are to be listed in the [Public Marketplace](#public-app-store) are subject to an approval process to ensure the quality and accuracy of the listing and that the component meets the expectations of users. Component submissions are processed in a queue and reviewed on a first-come, first-served basis within 5 working days after submission.

{{% alert color="warning" %}}
Mendix strongly recommends performing the checks below before you submit your component for approval. This will also speed up the approval process.
{{% /alert %}}

Mendix does the following:

* Checks the licenses used in the uploaded *.mpk* files using the [Fossology](https://fossology.osuosl.org/repo/) tool
    * There should be no use of GPL, LGPL, or MPL licenses
    * For more details, see the [Providing License Details](/appstore/general/share-app-store-content/#license) section above
* Checks the *.mpk* files for malware using the [VirusTotal](https://www.virustotal.com/gui/home/upload) tool
* Checks for third-party vulnerabilities using the [Snyk](https://snyk.io/) tool
* If the component is a widget, module, connector, or solution template, Mendix checks that it can be used without errors in a specific Studio Pro version
* Checks that the documentation mentions all the details per the template (for example, dependencies, configuration, and how to use the component)
* Checks the grammar, alignment, and spelling for the component's description and documentation
* Checks that the logo is related to the component's functionality
* Checks that the screenshots are related to the configuration required to use the component in the end-user's app

It may sometimes take a few iterations for a component to be approved, depending on the issues identified. To avoid a high number of necessary iterations, make sure you have followed the [content development guidelines](#guidelines) and have performed the checks above before you submit a component for approval.

{{% alert color="info" %}}
Review and approval by Mendix is required only for the first version of a publicly-listed component. Subsequent versions of a public component do not need review or approval by Mendix.
{{% /alert %}}

{{% alert color="info" %}}
[Private Marketplace](#private-app-store) content does not require any review or approval.
{{% /alert %}}

## 5 Updating Existing Marketplace Content {#updating}

After you publish a component in the Mendix Marketplace, it is your responsibility to make sure that components are updated on a regular cadence. This is important so that components work with the latest versions of dependencies (especially Mendix Studio Pro), and it is required so Mendix can ensure the quality of components in the Marketplace. This means you need to monitor, maintain, and evolve the component so that the Marketplace listing is more noticeable, you can build user loyalty, and you can maintain the good reputation of your company. If the component is not updated regularly, the Marketplace listing will be analyzed for removal from public visibility.

Mendix expects the following updates for comoponents in the Platform, Community, and Premium [support categories](/appstore/general/app-store-content-support/#category):

* Bug fixes
* New features
* Feature removal
* Compatiblity updates with the latest Studio Pro version and other dependencies

To update content that has already been published, follow these steps:

1. Find the component by clicking **My Marketplace** and selecting one of the following:
    * **My Content**
    * **Company Content**
    * **Content Groups** (note that if an existing Marketplace component is assigned to a [content group](/appstore/general/app-store-overview/#content-groups) as specific content group [content](/appstore/general/app-store-overview/#group-content), you can only update the component if you are a member of that group)

2. Click the menu item next to the component you want to update and select **Manage Draft**.

    {{% alert color="info" %}}Only one draft version of a component can exist at a time, so when one draft version is in progress, another draft cannot be started. If there is a draft version in progress, click **View draft** on the page where you manage the component in order to see the draft.{{% /alert %}}

3. You can edit all component details, as described in the [Adding New Marketplace Content](#adding) section above.
4. In the **Version** section of the **Package** page, update the **Major**, **Minor**, and **Patch** numbers so that the component is saved as a new version:

    * **Major update** – a large change (which will save the component from version 5.0 to version 6.0, for example)
    * **Minor update** – a medium-sized change (which will save the component from version 6.0.0 to version 6.1.0, for example)
    * **Patch** – a small change (which will save the component from 6.1.0 to 6.1.1, for example)

5. On the **Publish** page, you can review all the details of your component you entered so far and edit as necessary (via the **Edit Section** button) before clicking **Publish Content**.

## 6 Reviewing Outdated Components

As the Mendix Marketplace grows, it is important for users to be able to find up-to-date and relevant components. In order to reduce the likelihood that users find outdated or obsolete components, we review Marketplace content and evaluate for the following points:

* Whether the component supports the versions of Studio Pro that Mendix supports (meaning, the current major version plus two previous major versions – for more information, see [LTS, MTS, and Monthly Releases](/releasenotes/studio-pro/lts-mts/))
* Whether the component has been updated recently or not for ages (for example, it was published in 2016 and has not been updated since)
* Whether it is being actively used or if it has limited usage or very few downloads, reviews, or ratings

For a component that is outdated based on the above points, this is the review and remediation process: 

1. Mendix sends a notification to the owner of the outdated component and the [Mendix Admin](/developerportal/control-center/#company), who then has to submit an update within 30 days in order for their component to remain active on the Marketplace. This update needs to be based on support for an active version of Studio Pro.
2. Mendix sends two reminders during these 30 days: the first on the 15th day, and the second on the 25th day.
3. If the component owner or Mendix Admin is unable to make the required update within the stipulated timeframe, Mendix unpublishes their component from the Marketplace. Unpublishing means the component is not listed on the Marketplace, but a copy of the component remains in the database.
4. If the owner or Mendix Admin wants to restore their unpublished component on the Marketplace, they make the required update and create a [Mendix Support](/developerportal/support/) request.

## 7 Read More

* [Marketplace Overview](/appstore/general/app-store-overview/)
* [Mendix Partner Program](/appstore/creating-content/partner-program/)
* [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/)
