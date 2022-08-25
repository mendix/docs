---
title: "Create Company Atlas UI Resources"
url: /howto7/front-end/create-company-atlas-ui-resources/
weight: 30
tags: ["Atlas", "UI", "UX", "user experience"]
---

## 1 Introduction

Creating Atlas UI resources for your company is a great way to keep your company's apps in sync with your company brand. It’s easier to scale and manage apps throughout your app landscape when all the resources are neatly organized in a single module. 

This how-to will teach you how to do the following:

* Create your own UI resources
* Create page templates
* Export resources

## 2 Creating Page Templates

The Atlas UI resources include a large variety of page templates to use. When creating an app, a lot of pages you create will be custom-made, and developers may want to reuse these page templates within the app or in other apps without having to start from scratch. This is now possible in the Mendix Desktop Modeler.

In the example below, we’ll go through the steps of creating a new page template and talk about how the page template behaves in a local app and in the **UI Resources** module.

### 2.1 Example Scenario

In the Desktop Modeler, go to the **Project Explorer** of your app and right-click the page you want to use as the page template. In this example, we are using a dashboard page.

{{< figure src="/attachments/howto7/front-end/atlas-ui/create-company-atlas-ui-resources/creating_page_templates.png" >}}

Name the page template you want to create, then select your layout type. **Responsive** layouts are best when your app will be viewed on multiple screen sizes. **Tablet-specific** and **Phone-specific** types are best for their respective devices. The **Pop-up** layout type should be chosen when you would like the content of your page to be seen in a pop-up window or dialog box. The **Preview layout** is the default layout that will be used when creating the page template.

{{< figure src="/attachments/howto7/front-end/atlas-ui/create-company-atlas-ui-resources/creating_page_template_name.png" >}}

The page template is now a new document type in the module with its own icon. In the page templates **Properties** pane, there are some properties important for the template:

* **Display name** – the name of the page template, which will be shown in the **Create page** dialog box
* **Image** – the page template preview image, which will be shown in the **Create page** dialog box
* **Show when** – there are three options for when to show the page template: **Creating new pages** (default), **Generating edit pages**, and **Generating select pages**
* **Layout type** – the layout type is needed to categorize the page as suitable for a responsive, tablet, phone, or pop-up type
* **Preview layout** – the default layout that will be used when creating the page template

{{< figure src="/attachments/howto7/front-end/atlas-ui/create-company-atlas-ui-resources/creating_page_template_properties.png" >}}

When you create a new page in the module, it will now also show the created page template. The example below shows how the page template has been added to the **Local** category. Everything that has been created will stay **Local** until we move the page templates in the UI Resources module.

{{< figure src="/attachments/howto7/front-end/atlas-ui/create-company-atlas-ui-resources/creating_page_template_local.png" >}}

Page templates in Atlas UI are all built with building blocks. In the next section, we will walk through the steps of creating building blocks.

## 3 Creating Building Blocks

Building blocks are single-purpose user interface elements comprised of multiple widgets. Multiple building blocks are usually used together on one page. Atlas UI comes with a variety of building blocks like cards, forms, headers, and controls.

Every page can contain building blocks by grouping widgets together. In our example, we have a building block that consists of a container, title, text, and a button. This is a simple building block that is often used in apps.

Go to a page and select a group of widgets that can be used as a building block. Right-click  the container or parent widget that includes the widgets, then select **Create building block**:

{{< figure src="/attachments/howto7/front-end/atlas-ui/create-company-atlas-ui-resources/creating_bb.png" >}}

Name the building block you want to create:

{{< figure src="/attachments/howto7/front-end/atlas-ui/create-company-atlas-ui-resources/creating_bb_name.png" >}}

The building block is now a new document type in the module with its own icon. In the building block **Properties** pane, there are two properties important for the building block:

* **Display name** – the name of the building block that will show in the **Toolbox** pane of the Modeler
* **Image** – the building block preview image that will be shown in the **Toolbox** pane of the Modeler

{{< figure src="/attachments/howto7/front-end/atlas-ui/create-company-atlas-ui-resources/creating_bb_properties.png" >}}

The building block is now available in the **Toolbox**, where users can drag it and other building blocks onto the page. The example below shows that the building block has been added to the **Local** category. Everything that has been created will stay **Local** until we move the building block into the **UI Resources** module.

{{< figure src="/attachments/howto7/front-end/atlas-ui/create-company-atlas-ui-resources/creating_bb_toolbox.png" >}}

## 4 Moving from Local to Atlas UI Resources

Now that it’s clear how to create page templates and building blocks, we need to discuss how to get our resources from the **Local** category into a module that can be shared with our apps and users.

Let’s begin by placing our page template inside the **UI_Resources** module under **App Store modules**:

{{< figure src="/attachments/howto7/front-end/atlas-ui/create-company-atlas-ui-resources/creating_moving_local.png" >}}

In our example, the new page template has been added to the dashboard category. When we now create a new page in the Mendix Desktop Modeler, the **Homepage Template** is available in the **Create Page** wizard under the **Dashboards** category:

{{< figure src="/attachments/howto7/front-end/atlas-ui/create-company-atlas-ui-resources/creating_open_pt.png" >}}

The **UI_Resources** module has been organized with folders that can be renamed and used as categories for page templates and building blocks. The sorting is done using numbers in front of the name, which can be altered to change the order in which they appear. Page templates and building blocks can be placed inside the same folder to reuse the same category names.

Adding an underscore to the folder name in the Desktop Modeler (for example, **_Layouts**) ensures that the folder doesn’t get added to the categories for page templates or building blocks.

## 5 Export Company Atlas UI Resources

When the resources are ready to be shared with multiple developers or apps, the module can be exported from the Project Explorer. You are free to change the name of a module as long as the module has been exported as a UI resource package.

{{< figure src="/attachments/howto7/front-end/atlas-ui/create-company-atlas-ui-resources/export_ui_module.png" >}}

The module can now be imported in other apps or uploaded to the [Mendix Marketplace](https://marketplace.mendix.com/). There is an option to make the resource module available for private use only so that everybody in your company can benefit from and extend the module.

## 6 Read More

* [How to Get Started with Atlas UI](/howto7/front-end/get-started-with-atlasui/)
* [How to Create Custom Preview Images for Building Blocks & Page Templates](/howto7/front-end/create-custom-preview-images-for-building-blocks-and-page-templates/)
* [How to Extend Design Properties to Customize the Web Modeler Experience](/howto7/front-end/extend-design-properties-to-customize-the-web-modeler-experience/)
* [How to Migrate Existing Apps to Atlas UI](/howto7/front-end/migrate-existing-projects-to-atlasui/)
* [How to Share Company Atlas UI Resources](/howto7/front-end/share-company-atlas-ui-resources/)
