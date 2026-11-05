---
title: "Managing Marketplace Content"
linktitle: "Marketplace Content"
url: /private-mendix-platform/marketplace/
description: "Documents creating, managing, and sharing Marketplace content in Private Mendix Platform."
weight: 30
---

## Introduction

If your organization has enabled the Marketplace for your Private Mendix Platform, you can build your own connectors and modules, and then share them on the Marketplace, so that other teams from your organization can use the connector in their own apps.

## Creating Marketplace Content

For more information about building a connector for your Mendix app, see the following topics:

* [Build a Connector](/appstore/creating-content/connector-guide-build/)
* [Best Practices for Building Connectors](/appstore/creating-content/connector-guide-best-practices/)

## Sharing Marketplace Content {#sharing}

To share the connector that you built, perform the following steps:

1. In the [Private Mendix Platform navigation menu](/private-mendix-platform/reference-guide/common/signin/#navigation), click **Marketplace > My Content**.

    {{< figure src="/attachments/private-platform/pmp-ug7.png" class="no-border" >}}

2. Click **Upload Content**.
3. In the **Upload Component** tab, perform the following actions:

    1. Enter a **Component name** and select one of the following **Component Types**:

        * **Module** - Software functionality that can include a data model, logic, and UI with a portable security model.
        * **Widget** - Single user-interface elements like containers, drop-down menus, and buttons.
        * **Service** - Software functionality that can be re-used for different use cases. Services usually include APIs that you can interact with by configuring a connection in the app's module.
        * **Solution** - Out-of-the-box solutions that are aimed at industry and domain problems, delivering instant value. These solutions are usually at least 80% ready for use, and need minimal adaptation to make them work for a customer-specific use case.
        * **Sample** - A project that provides an overview of the capabilities a product can perform. The project can act as an example, sales play, demo, or template.
        * **Starter Template** - Sample projects that have certain capabilities in place to provide a basis for you to start developing your own app. You do not need to create an app from a blank template, as you can use a template that already has some features configured. In addition, a template can have a personalized style that can be shared and used to enrich other apps with a specific design.
        * **Industry Template** - Accelerators for implementing industry-specific processes. Industry templates increase speed-to-value and time-to-market, and are great starting points for common use cases within the relevant industry. Contrary to solutions, industry templates are starter templates intended to provide inspiration for utilizing Mendix to create apps for industry-specific processes. They usually cover around 20% of the process.

    2. Click **Next**.
    3. In the **Upload MPK** field, click **Browse** and select the [.mpk file](/appstore/creating-content/connector-guide-build/#export-as-mpk) that you created for your component.
    4. In the **Studio Pro Version** drop-down, select the minimum version of Studio Pro required by your component.
    5. In the **Release Version** section, select the **Major**, **Minor**, and **Patch** version of your component.
    6. Provide **Release Notes** to describe the contents of the version you are uploading, and click **Next**.

        {{< figure src="/attachments/private-platform/pmp-ug8.png" class="no-border" >}}

4. In the **General Info** tab, perform the following actions:

    1. Select the **Cover Image** that will be displayed for your connector. The suggested image resolution is 600x240 px.
    2. In the **Tagline** field, include a short description of what your component does.
    3. In the **About** field, describe the purpose and use cases of your component in detail.
    4. From the **Industry** drop-down list, select up to three industries that are applicable to your component.
    5. From the **Category** drop-down list, select up to three areas of expertise that are applicable to your component.

5. In the **Support and Licensing** tab, perform the following actions:

    1. Optional: Enter the URL of your support portal, if available.
    2. Provide a support department contact email for the users of your component.
    3. Specify whether the component should be **visible for everyone**, or **visible for specific groups**.
    4. Select the type of **License** you want applied to your app. For details about the available open-source software licenses and their requirements, refer to [Open-Source Software Licenses](/appstore/submit-content/#license).
    5. In the **Owner** field, select the group that owns the component, and then click **Next**.

6. In the **Media and Documentation** tab, perform the following actions:

    1. Use the **Upload Screenshots** option to add a maximum of 10 screenshots of your component.    
    2. In the **YouTube Video** field, add a URL for a demo of your component.
    3. In the **Documentation** field, add details on requirements and configuration for your component.   
   
        Follow the template for the recommended content:

        * The **Typical usage scenario** for the component
        * The **Features and limitations** of the component
        * Any **Dependencies** (for example, the required Studio Pro version, modules, images, and styles)
        * The **Installation** steps and details
        * The **Configuration** steps and details
        * Any **Known bugs**
        * Any **Frequently Asked Questions**

        This field supports rich text.
 
    4. In the **Resources** section, add up to 5 URLs for resources that your users might find useful, such as a **GitHub URL**.
    5. Click **Show Preview** if you want to preview your component, or **Publish** if you want to publish it directly.

Depending on the process set up by your Private Mendix Platform administrator, your component may be subject to an approval process before it is shared with other users.

## Accessing Company and Group Content

The **Marketplace** page is a local version of the Mendix Marketplace, enclosed entirely within the Private Platform. You can access it by clicking **Marketplace > Company Content** in the Private Mendix Platform navigation menu.

{{< figure src="/attachments/private-platform/pmp-ug8.png" class="no-border" >}}

The page shows content available to end users, organized by category. You can click **View More** to view all items from a particular category. You can also click a content item to view or download it from the Private Platform Marketplace.

{{< figure src="/attachments/private-platform/pmp-refguide-company-content.png" class="no-border" >}}

To view all the components owned by your groups, use the **My Group Contents** page. You can access it by clicking **Marketplace > Group Content** in the Private Mendix Platform navigation menu. Only items that have been shared with the relevant group are displayed here. Draft versions of content are not shown on the page.