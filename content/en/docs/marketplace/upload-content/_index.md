---
title: "Uploading Content to the Marketplace"
url: /appstore/submit-content/
weight: 3
description_list: true
description: "Describes how to submit content to the Mendix Marketplace content."
tags: ["marketplace", "public marketplace", "private marketplace", widget", "module"]
aliases:
    - /appstore/overview/share-content/
    - /appstore/general/share-app-store-content/
    - /developerportal/app-store/share-content/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The Mendix Marketplace is driven by contributions from community members who share the connectors, modules, and apps they have built with the Mendix Platform.

## Prerequisites

Before diving in, make sure you have read [Marketplace Overview](/appstore/overview/) and [Using Marketplace Content](/appstore/use-content/).

## Adding New Marketplace Content {#adding}

To get started, click **Add Content** in the left panel of the Marketplace home screen. You are presented with the **Before You Get Started** dialog, which outlines the resources you will need for uploading your component.

Once you make sure you have everything, click **Next**, then go through the steps in the following sections to add content.    
Some fields are mandatory, while others are optional — this is indicated in the user interface.

On each page of the upload flow, click one of these buttons:

* **Save and Exit** — Save the details you have entered so far for the draft. You can access the draft via the [My Drafts](/appstore/home-page/#my-drafts) link in the top bar.    
  This button is not displayed if you are editing a component.
* **Next** — Go to the next page of the upload flow.

### Uploading a Component {#general}

On the **Upload Component** tab, add the source file, and provide general information about your component.
  
Some fields only apply to specific component types, so follow the on-screen prompts for your particular scenario.

1. Add a **Component Name**.

2. Select the **Component Type**.      
   You can only set the component type when creating the initial version of your content. You cannot change this setting after it is published.    
   Find out more about component types in the [Types of Marketplace Components](/appstore/#components-type) section of *Marketplace*.

3. Select the **Visibility** of your component:

    * **Public** – Your component will be available to the entire Mendix community.    
      This content must be reviewed and approved by Mendix before it is available.
    * **Private** – Your content will receive the **Private** label, and be available only via your [Company Content](/appstore/home-page/#company-content) page.    
      Selected private content of a content group can also be made available to [content group guests](/appstore/home-page/#guests) for download.    
      This content is not reviewed by Mendix.    
    
    You can only set the visibility in the initial version of your content. You cannot change this setting by updating the Marketplace component later.

4. Under **Select Component Source**, select one of the options for uploading the source file:     

    * **MPK File** – Upload your source MPK.    
    * **GitHub Link** – Follow the steps in the dialog box for copying the link of the release you want to import. For details, see the [Using a GitHub Repo](/appstore/guidelines-content-creators/#github) section in *Guidelines for Content Creators*.    
       If you choose to import the source file from GitHub, the GitHub URL will automatically be displayed in the **Resources** section in Marketplace.    

    If you are uploading a solution, the **Upload Component Source** section is not displayed.    
    If you are uploading an industry template, selecting a component source in the **Upload Component Source** section is optional.    

5. Select the **Studio Pro Version** on which you built the content.    

6. If you are uploading a widget, select the **Compatible with Mendix React Client** checkbox to indicate compatibility.    
   This checkbox is mandatory starting with Studio Pro 11.
   
7. Add a version for your component.  

8. Enter **Release Notes** for the component in the box provided, describing what is new in that release. This field supports rich text.

9. If you are uploading a solution or an industry template, the **Business Connect** section is displayed. Enter one or more email addresses in the **Contact Email(s)** field, then click **Add Email**. These email addresses will be used by prospects to reach out to you.     
   This field is only available for public components.    
   {{% alert color="warning" %}}Please note that potential customers can contact you directly. If you start talking to the customer, it is your responsibility to provide access to the product for them. Mendix is not involved in such customer interactions. {{% /alert %}}

### Adding General Information

On the **General Information** tab, add more details about your component.

1. Upload a cover image. The suggested image resolution is 600x240 px.

2. In the **Component Tagline** field, include a short description of what your component does.

3. In the **About** field, describe the purpose and use cases of your component in detail.    
   You can use rich text in the editor. However, using rich text at the beginning of the description is not recommended, as it will not get rendered properly. You should add a few lines of regular text before using rich text.

4. From the **Industry** drop-down list, select up to three industries that are applicable to your component.

5. From the **Category** drop-down list, select up to three areas of expertise that are applicable to your component.

### Configuring Support and Licensing {#support-licensing}

On the **Support & Licensing** tab, select your license type, and add contact details.

1. Select the **License Type** you want applied to your app.    
   For details about the available open-source software licenses and their requirements, refer to [Open-Source Software Licenses](#license).     
   {{% alert color="info" %}}If you select BSD 2.0, BSD 3.0, or Apache 1.0, you need to provide the link to the public repository where the component is stored.{{% /alert %}}

2. Add your **Website**.

3. Add the **Contact Email** of your support department.

4. In the **Development Team** field, add the email addresses of the developers who have contributed to and own the component.

#### Open-Source Software Licenses {#license}

The following table describes the open-source software license options available and their requirements.

{{% alert color="warning" %}}
Open-source software licenses must abide by a set of compliance rules to ensure the safety of the Mendix ecosystem. Refer to [OSS Compliance for External Developers](/appstore/submit-content/oss-compliance/) for details.
{{% /alert %}}

| | **Notes** | **Commercial use allowed?** | **Component code needs to be in public repo?** | **License text required with copyright info in code and distribution artifact?** | **Can modify?** (Mention modifications to code) | **Can consuming apps use without making their code public?** | **Notice files should be distributed with artifact?** | **Original component source code to be distributed with consuming app?** | **Can sub-license?** |
| --- | --- | --- | --- | --- | --- | --- |  --- | --- | --- |
| [MIT](https://opensource.org/licenses/MIT) | Add a specific *license.txt* file in your artifacts, i.e. in the *.mpk* package. | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| **BSD 2.0, 3.0** | N/A | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| **Apache 1.0** | N/A | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) | Add a specific *license.txt* file in your artifacts, i.e. in the *.mpk* package. | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="checkmark-circle-filled" color="green" >}}  |
| **Creative Commons CC0 1.0 Universal (CC-0)** (Public Domain) | N/A | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |

{{% alert color="info" %}}
The [GNU General Public License (GPL), version 3](https://www.gnu.org/licenses/gpl-3.0.en.html) is not available to use, as everything licensed under GNU GPL is public.    
GNU GPL has a strong copyleft effect.    
Modification has a strong copyleft effect.    
All consuming apps should make their code public.
{{% /alert %}}

#### Proprietary Licenses {#proprietary-license} 

You can configure your own proprietary license for your company’s content. The license can be applied to multiple components, and it can be used by everyone within your organization. 

This license can be created for a new **Public Marketplace (all Mendix users)** component by requesting a new license and submitting it alongside the component. The license needs to be approved by Mendix after you have created and submitted it the first time. Once it has been submitted for approval, you and the people within your organization can also use it for other components.

Follow these steps to configure a proprietary license for a new public component:

1. Click **Request New License**.
2. Add a **License Name**, which will be displayed on the [component details page](/appstore/component-details/).
3. Add a **License URL**, which should lead the user to a web page that lists the terms and conditions for using the component. Users can navigate to this web page by clicking the license name on the component details page.
4. Add a **Reason** for the new license. This is solely for Mendix review purposes, and will not be displayed on the component details page.
   
### Adding Media and Documentation {#doc}

On the **Media & Documentation** tab, add any resources to guide your users.

1. Use the **Upload Screenshots** option to add a maximum of 10 screenshots of your component.    
   The suggested image ratio is 16:9.

2. In the **YouTube Video** field, add a URL for a demo of your component.

3. In the **Documentation** field, add details on requirements and configuration for your component.   
   Follow the template for the recommended content:

    * You must fill out the following sections in order to submit your component:
        * The **Typical usage scenario** for the component
        * The **Features and limitations** of the component
    * These sections are optional:
        * Any **Dependencies** (for example, the required Studio Pro version, modules, images, and styles)
        * The **Installation** steps and details
        * The **Configuration** steps and details
        * Any **Known bugs**
        * Any **Frequently Asked Questions**

   This field supports rich text.
 
4. In the **Resources** section, add up to 5 URLs for resources that your users might find useful, such as a **GitHub URL**.

5. Click **Show Preview** if you want to preview your component, or **Publish** if you want to publish it directly.

### Previewing the Component

Once all steps of the upload flow are completed, you can preview your component before publishing. To do that, click **Show Preview** on the **Media & Documentation** tab. This displays your component exactly as it will look like in the Marketplace.

From the preview window, you can either return to the editing flow, or publish the component.   

If you choose to publish the component, you will see one of these two buttons:

* **Publish Component** — This is displayed when publishing a new component or component version.
* **Publish Changes** — This is displayed when publishing changes to an existing component.

### Publishing {#publish} 

If the component is public, once you click **Publish Content**, your draft will be reviewed by Mendix before it becomes visible in the Marketplace.

If the component is private, the draft is either checked by the company admin, or it is published automatically, depending on your choice. 

Note that it may take a short while before the component becomes visible.

For details on the approval process, refer to [Governance Process](/appstore/submit-content/governance-process/).

Every new public component or component version is scanned through QSM, and, if no vulnerabilities are found, it is automatically uploaded. In case of vulnerabilities, Mendix manually checks the component or component version.

## Updating Existing Marketplace Content {#updating}

After you publish a component to the Mendix Marketplace, it is your responsibility to make sure that the component is updated on a regular cadence. This is important to ensure compatibility with the latest versions of dependencies, especially Mendix Studio Pro. It is also required so Mendix can ensure the quality of components in the Marketplace.   

This means you need to monitor, maintain, and evolve the component, thus making sure that the Marketplace listing is more noticeable, that you can build user loyalty, and that you can maintain the good reputation of your company. 

If the component is not updated regularly, the Marketplace listing will be analyzed for removal from public visibility.

Mendix expects the following updates for components in the Platform, Community, and Premium [support categories](/appstore/marketplace-content-support/#category):

* Bug fixes
* New features
* Feature removal
* Compatibility updates with the latest Studio Pro version and other dependencies

To update content that has already been published, follow these steps:

1. Find the component in one of the following sections:

    * **My Content**
    * **Company Content**
    * **Content Group**
    {{% alert color="info" %}}If an existing Marketplace component is assigned to a [content group](/appstore/home-page/#content-groups) as specific content group [content](/appstore/home-page/#group-content), you can only update the component if you are a member of that group.{{% /alert %}}

2. Click the menu item next to the component you want to update and select the appropriate option, depending on your access rights: 

   * **Edit**
   * **Unpublish Component**
   * **Add New Version**

    {{% alert color="info" %}}Only one draft version of a component can exist at a time, so when one draft version is in progress, another draft cannot be started. If there is a draft version in progress, click **Edit Draft** on the page where you manage the component in order to see the draft.{{% /alert %}}

3. You can edit all component details, as described in the [Adding New Marketplace Content](#adding) section above.
4. In the **Version** section of the **Package** page, update the **Major**, **Minor**, and **Patch** numbers so that the component is saved as a new version:

    * **Major update** – changes that break compatibility with earlier versions.
    * **Minor update** – new features that do not break existing usage.
    * **Patch** – a small change that fixes bugs or security issues.

5. On the **Preview** page, you can review all the details of your component entered so far, and edit as necessary using the **Back to Edit** button. Once done, click **Publish Content**.

These fields cannot be edited while updating a component:

* **Component Type**
* **Visibility**
* **Component Source**
* **Studio Pro Version**
* **Release Version**
* **License Type**
