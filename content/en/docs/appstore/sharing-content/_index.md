---
title: "Sharing Marketplace Content"
url: /appstore/sharing-content/
weight: 4
no_list: false
description_list: true
description: "Describes how to create and share Mendix Marketplace content."
aliases:
    - /appstore/overview/share-content/
    - /appstore/general/share-app-store-content/
    - /developerportal/app-store/share-content/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The Mendix Marketplace is driven by contributions from members of the community who share the connectors, modules, and apps they have built with the Mendix Platform. This how-to shows how to add and update Marketplace content.

This how-to teaches you how to do the following:

* Add new content and promotions to share in the Marketplace
* Update existing Marketplace content

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Familiarize yourself with the [Marketplace Overview](/appstore/overview/) and [Using Marketplace Content](/appstore/use-content/)

## Marketplace Content Development Guidelines {#guidelines}

This section presents guidelines for developing content that you will submit to the Mendix Marketplace.

{{% alert color="info" %}}
Submitted Marketplace content will be reviewed within five working days.
{{% /alert %}}

### General {#general}

These are some general guidelines for creating new Marketplace content:

* Set up a separate app to build and maintain your Marketplace component
* Use a relatively recent Mendix version when creating the item, not only the latest Mendix version
* Create multiple versions of your Marketplace component (for example, for Studio Pro 8 and 9)

You can add information the end-user should know to the component [Documentation](#doc) when you are adding the content to the Marketplace.

### Intellectual Property

When considering intellectual property (IP) in the Mendix Marketplace, follow these guidelines:

* Do not copy any text, names,or other data from other components published in the Marketplace, since you do not own the copyright. Do not create unnecessary ambiguity or confusion that would mislead users of Marketplace components.
* Do not mention components published by others within your content on the Marketplace. 
* Make sure your component documentation only includes intellectual property that you have created. Your component should not include information or content published by others on the Marketplace, as this may lead to removing your component from the Marketplace. This also means other components can also be removed if they are using your component information or content. 
* If you come across instances of intellectual property abuse, let us know at *AppServices_Supplier_Team@mendix.com*.

For more information, see [Apply IP Protection](/appstore/creating-content/sol-ip-protection/).

### For Widgets

To develop widgets and submit them to Marketplace, follow these guidelines:

* The widget should be [pluggable](/howto/extensibility/create-a-pluggable-widget-one/)
* When writing variable and function names, use lowerCamelCase (for example, *mySecondVariable*)
* Add code comments
* Use descriptive variable and function names in both XML and JavaScript
* A function should not be more than 200 lines of code
* A function should only do one thing, and it should do it properly
* Use hooks and functional components over class components
* Create test pages for mobile when content is made for mobile platforms

### For Modules

To develop modules and submit them to the Marketplace, follow these guidelines:

* Create a folder named **USE_ME** and add the microflows and pages that are relevant for the user
* Create an empty folder with the version number as its name, which will appear in Studio Pro's App Explorer
* Java dependencies

    * In Mendix versions 10.3.0 and above, use [managed dependencies](/refguide/managed-dependencies/) where possible.
    * For versions below 10.3 and any [unmanaged dependencies](/refguide/managed-dependencies/#unmanaged) (that is, non-publicly-available `.jar` files), ensure that Java dependencies are put in the `userlib` folder.

        * When putting `.jar` files in the `userlib` folder, make sure the name includes a version number (for example, `org.apache.commons.io-2.3.0.jar`) and is accompanied by a blank `{jarfile-including-version}.{module_name}.RequiredLib` file so that users know where the .*jar* files come from (for example, for the module *MyModule*, `org.apache.commons.io-2.3.0.jar.MyModule.RequiredLib`)

            {{< figure src="/attachments/appstore/sharing-content/userlibBlankFiles_boxed.jpg" width="400"  class="no-border" >}}

* Verify that the module's Java actions compile correctly (the easiest way to check is to create a deployment package, as it will clean the deployment folder and rebuild the app; for more information, see [Environments](/developerportal/deploy/environments/))
* Reduce the use of layouts and use snippets instead, which will result in fewer module dependencies and will reduce the number of potential errors (for example, missing layouts)
* Implement [user roles](/refguide/user-roles/) and [security](/refguide/security/)
* Creating a new release or module export should be done while the security level of the app containing the module is set to **Production**
* The [status](/refguide/app-security/#app-status) must be **Complete** for the following access: page, microflow, OData, entity, and dataset
* For example pages and microflows to be copied to another module, select the **Exclude from project** option for the document in order to encourage duplication and reduce dependency errors 
* Do not rename entities and attributes when creating new versions, as data in these entities will get lost (replacing an existing module is based on the entity names)
* The module must include the English language

### Using a GitHub Repo {#github}

You can set up a GitHub repository to contain the development content for your Marketplace component, and you can share this repo URL as the component source on the [Package](#package) page in the submission process.

When setting up the GitHub repo for your component, follow these guidelines:

* Make sure the repo name matches the name that will be used for the published Marketplace component
* Use UpperCamelCase to replace the spaces in the name (for example, *MyFirstApp*)
* Make sure the repo description states what the component does (this description can also be used in the Mendix Marketplace)
* Add a *.gitignore* file to keep your repo clean

To create a new component release for the Mendix Marketplace, follow these steps:

1. Create a new tag on the appropriate commit on the production or release branch in your GitHub repo.
2. From this tag, create a [new release in GitHub](https://help.github.com/articles/creating-releases). 
3. In this GitHub release, provide an official name, and write the release notes. You can use these for the Marketplace release as well.
4. If you add the *.mpk* file as a binary file to the release tag, the Mendix Marketplace automatically syncs the *.mpk* to your new draft:

    {{< figure src="/attachments/appstore/sharing-content/github-releases.png" class="no-border" >}}

5. Link this GitHub release to the upcoming Mendix Marketplace release by mentioning the GitHub release number in the description. For more details, see the [Package](#package) and [Updating Existing Marketplace Content](#updating) sections below.

### Mendix Partner Program

For more information on what this program offers, see [Mendix Component Partner Program](/appstore/partner-program/) and [Mendix Commercial Solution Partner Program](https://www.mendix.com/partners/become-a-partner/isv-program/).

## Adding New Marketplace Content {#adding}

To get started, click **Add Content** in the top bar of the Marketplace home screen. Follow the steps in the sections below to add and submit the content.

{{% alert color="info" %}}
<a id="draft"></a>On each page of the upload flow, click one of the following buttons:

* **Save Draft** to save the details you have entered so far to the draft (which you can access via the [My Drafts](/appstore/overview/#my-drafts) link in the top bar)
* **Save & Continue** to go to the next page of the upload flow
{{% /alert %}}

### General {#general}

On the **General** page, you need to provide some details about your component. 

#### Describing Your Content

Follow these steps to describe your content:

1. Select a **Content type** for your component. 

    {{% alert color="warning" %}}You can only set the content type in the initial version of your content. You cannot change this setting after the initial version is published.{{% /alert %}}

2. Select the location **Visibility** where you want to publish your component:

    * <a id="public"></a>**Public Marketplace (all Mendix users)** – your component will be available to the Mendix community
        * This content will have to be reviewed and approved by Mendix before it is available)
    * <a id="private"></a>**Private Marketplace (your company only)** – your content will receive the **Private** label and be available only via your [Company Content](/appstore/overview/#company-content) page
        * Selected private content of a content group can also be made available to [content group guests](/appstore/overview/#guests) for download
        * This content will not be reviewed by Mendix

    {{% alert color="warning" %}}You can only set the location in the initial version of your content. You cannot change this setting by updating the Marketplace component later.{{% /alert %}}
    
3. You can add one **Category** (up to three total) for your component. A category groups similar components or services together that share common characteristics, functions, or purposes. Categories make it easier for Marketplace users to find what they are looking for.
4. Enter a **Name** for your component.
5. Enter a **Description** of your component.

    {{% alert color="warning" %}}You can use rich text in the editor. However, using rich text at the beginning of the description is not recommended, as it will not get rendered properly. You should add a few lines of regular text before using rich text.{{% /alert %}}

#### Providing License Details {#license}

Select the type of **License** you want applied to your app.

##### Open-Source Software Licenses

These are the open-source software license options available and their requirements:

| | **Notes** | **Commercial use allowed?** | **Component code needs to be in public repo?** | **License text required with copyright info in code and distribution artifact?** | **Can modify?** (Mention modifications to code) | **Can consuming apps use without making their code public?** | **Notice files should be distributed with artifact?** | **Original component source code to be distributed with consuming app?** | **Can sub-license?** |
| --- | --- | --- | --- | --- | --- | --- |  --- | --- | --- |
| [MIT](https://opensource.org/licenses/MIT) | Add a specific *license.txt* file in your artifacts (meaning, in the *.mpk*). | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| **BSD 2.0, 3.0** | | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| **Apache 1.0** | | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) | Add a specific *license.txt* file in your artifacts (meaning, in the *.mpk*). | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="checkmark-circle-filled" color="green" >}}  |
| **Creative Commons CC0 1.0 Universal (CC-0)** (Public Domain) | | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |

{{% alert color="info" %}}
The [GNU General Public License (GPL), version 3](https://www.gnu.org/licenses/gpl-3.0.en.html) is not available to use, as everything licensed under GNU GPL is public; GNU GPL has a strong copyleft effect; modification has a strong copyleft effect; and all consuming apps should make their code public.
{{% /alert %}}

##### Proprietary Licenses {#proprietary-license}

You can configure your own proprietary license for your company’s content. The license can be used for multiple components, and it can be used by everyone within your organization. 

This license can be created for a new **Public Marketplace (all Mendix users)** component by requesting a new license and submitting it alongside the component. The license needs to be [approved by Mendix](/appstore/sharing-content/#guidelines) after you have created and submitted it the first time. Once it has been submitted for approval, you and the people within your organization can also use it for other components.

Follow these steps to configure a proprietary license for a new public component:

1. Click **Request New License**.
2. Add a **License Name**, which is the name that will be displayed on the [component details page](/appstore/component-details/).
3. Add a **License URL**, which should lead the user to a web page that lists the terms and conditions for using the component. Users can navigate to this web page by clicking the license name on the component details page.
4. Add a **Reason** for the new license. This is for the purpose of the Mendix review only, and it will not be displayed on the component details page.

#### Generating New Leads {#lead-generation}

A lead is a potential sales contact that expresses interest in your product or service. Lead routing is the end-to-end process of collecting the leads and distributing them to you. It is possible to configure lead routing for the following content types in the Marketplace:

* Solutions
* Industry templates
* Services

When prospective customers are interested in your product, they can leave their contact information using the Marketplace product listing. This is done by clicking a call-to-action button and filling in a form.

You can configure the name of your **Main call-to-action** button from the following choices: 

* **Contact Us**, **Notify Me**, and **Request Demo** – requires the email address that will receive the customer information

    {{% alert color="warning" %}}If you choose to add one of these buttons, customers can contact you directly. If you start talking with the customer, it is your responsibility to provide access to the product for that customer. Mendix is not involved in such customer interactions. {{% /alert %}}

* **Download** – no lead routing is established, but customers can directly download your product.

In the **How would you like to receive information on new leads?** field, you must specify the email address (or addresses) where notifications and information can be sent.

#### Finishing Up

To finish up configuring this page, click **Upload** to upload an icon for your component.

{{< figure src="/attachments/appstore/sharing-content/general.png" class="no-border" >}}

### Package {#package}

{{% alert color="info" %}}
If you are using **Solutions**, you will not see the option to select your content source. If you are using **Industry Template**, selecting a content source is optional.
{{% /alert %}}

On the **Package** page, you can **Upload Source File**: 

* If you select **Manual upload**, follow the steps in the dialog box for uploading the package source file
    * When you are finished, click **Save**
* If you select **GitHub URL**, follow the steps in the dialog box for copying the link of the release you want to import (for details, see the [Using a GitHub Repo](#github) section above)
    * To include the repo's *README.md* file on the component's [Documentation](#doc) tab, make sure you have checked the **Import Documentation** box 
    * When you are finished, click **OK**

Select the **Studio Pro Version** on which you built the content.

If this is the first version of the component you are uploading, the number in the **Version** section will be automatically set to **1.0.0**. 

Enter **Release Notes** for the component in the box provided describing what is new in that release.

### Enable {#doc}

On the **Enable** page, you can enter details on requirements and configuration for your component in the **Documentation**. Note that the documentation option is only available when the **Import Documentation** box has not been selected on the **Package** page above. 

Follow the template for the recommended content:

* You must fill out the following sections in order to submit your component:
    * An extended **Description** of the component
    * The **Typical usage scenario** for the component
    * The **Features and limitations** of the component
* These sections are optional:
    * Any **Dependencies** (for example, the required Studio Pro version, modules, images, and styles)
    * The **Installation** steps and details
    * The **Configuration** steps and details
    * Any **Known bugs**
    * Any **Frequently asked questions**

The editor comes with a set of basic formatting tools, such as bold, bullet lists, and URL links.

<a id="screenshot"></a>Click **Upload Screenshot** to select images of the component (especially for configuration) from your computer and upload them (this is required for submitting a new component):

{{< figure src="/attachments/appstore/sharing-content/enable.png"  class="no-border" >}}

You can optionally add a **YouTube URL** and a **Demo URL**.

### Capabilities {#capabilities}

On the **Capabilities** page, you can provide the following details about an industry template:

* A category recommendation in the **Industry Cloud** section
* A **Banner** that will be displayed on your content page
* One or more key features to leverage in the **Solution Capabilities** section (for each capability, enter a **Name** and **Description**)
* A **Use Case** relevant to the content (enter a **Header** and **CTA URL**)
* **External Links** relevant to the content

{{< figure src="/attachments/appstore/sharing-content/capabilities.png"  class="no-border" >}}

### Publish {#publish}

Finally, on the **Publish** page, you can review all the details of your component you entered so far and edit as necessary (via the **Edit** button per section) before publishing.

{{< figure src="/attachments/appstore/sharing-content/publish.png"   width="600"  class="no-border" >}}

After you click **Publish Content**, your draft will be reviewed by Mendix before it is visible in the Marketplace. 

For details on the approval process, see [Governance Process](/appstore/sharing-content/governance-process/).

## Updating Existing Marketplace Content {#updating}

After you publish a component in the Mendix Marketplace, it is your responsibility to make sure that components are updated on a regular cadence. This is important so that components work with the latest versions of dependencies (especially Mendix Studio Pro), and it is required so Mendix can ensure the quality of components in the Marketplace. This means you need to monitor, maintain, and evolve the component so that the Marketplace listing is more noticeable, you can build user loyalty, and you can maintain the good reputation of your company. If the component is not updated regularly, the Marketplace listing will be analyzed for removal from public visibility.

Mendix expects the following updates for components in the Platform, Community, and Premium [support categories](/appstore/marketplace-content-support/#category):

* Bug fixes
* New features
* Feature removal
* Compatibility updates with the latest Studio Pro version and other dependencies

To update content that has already been published, follow these steps:

1. Find the component by going to the Marketplace home page and selecting one of the following:
    * **My Content**
    * **Company Content**
    * **Content Groups** (note that if an existing Marketplace component is assigned to a [content group](/appstore/overview/#content-groups) as specific content group [content](/appstore/overview/#group-content), you can only update the component if you are a member of that group)

2. Click the menu item next to the component you want to update and select **Manage Draft**.

    {{% alert color="info" %}}Only one draft version of a component can exist at a time, so when one draft version is in progress, another draft cannot be started. If there is a draft version in progress, click **View draft** on the page where you manage the component in order to see the draft.{{% /alert %}}

3. You can edit all component details, as described in the [Adding New Marketplace Content](#adding) section above.
4. In the **Version** section of the **Package** page, update the **Major**, **Minor**, and **Patch** numbers so that the component is saved as a new version:

    * **Major update** – a large change (which will save the component from version 5.0 to version 6.0, for example)
    * **Minor update** – a medium-sized change (which will save the component from version 6.0.0 to version 6.1.0, for example)
    * **Patch** – a small change (which will save the component from 6.1.0 to 6.1.1, for example)

5. On the **Publish** page, you can review all the details of your component you entered so far and edit as necessary (via the **Edit Section** button) before clicking **Publish Content**.

## Documents in This Category
