---
title: "Extend Design Properties to Customize Your Web Modeler Experience"
parent: "atlas-ui"
menu_order: 60
tags: ["Atlas", "UI", "UX", "user experience", "customize", "custom", "studio"]
---

## 1 Introduction

There is a customizable **settings.json** file for the Atlas UI that can be found in the **theme** folder of your Mendix project. 

**This how-to will teach you how to do the following:**

* Change Atlas UI to Old Mendix UI Framework
* Extend design properties applied in the Web Modeler

## 2 Extending Design Properties Applied in the Web Modeler

Properties in the **Design** section of the Web Modeler allow users to change the position and styling of widgets on a page. Atlas UI contains a design properties file that can be extended with your own custom design properties.

You can find the design properties in the **theme** folder > **settings.json** file of the Mendix project.

The example below shows the design properties of a `"Button"`. 

* `"name"` – the name of the design property
* `"type"` – the type of the design property (for example, `Dropdown` or `Toggle`)
* `"description"` – a brief explanation of the design property
* `"options"` – the array of options that shows the name and CSS class specified in the Sass files for Atlas UI

![](attachments/howto/extend_settings.png)

These design properties are used in the **Design** section of the Web Modeler.

![Design Properties in the Web Modeler](attachments/extend-design-properties-to-customize-the-web-modeler-experience/wm-button-design-properties.png)

{{% alert type="info" %}}

When you apply a new class in **settings.json** file, make sure that this class exists in the scss file. For example, the detailed Sass information for buttons can be found in this file: */theme/styles/sass/lib/components/_buttons.scss*

{{% /alert %}}

## 3 Changing Atlas UI to Old Mendix UI Framework 

If your project's version is 7.8.0 or lower, you can change Atlas UI framework to the old Mendix UI Framework.

The first line in the **settings.json** file enables the resources, page templates, and building blocks that are integrated with Atlas UI, the Web Modeler, and the Desktop Modeler:

 ```"pageTemplates" : "WebModeler"```

If this line is deleted, the old Mendix UI Framework resources will be loaded in the Mendix Web Modeler and the Desktop Modeler. If you do not want to use Atlas UI, it is possible to delete this line.

{{% alert type="warning" %}}

You can only switch to the old Mendix UI Framework following the instructions above if your project's  version is 7.8.0 or lower.

{{% /alert %}}

## 4 Read More

* [How to Get Started with Atlas UI](get-started-with-atlasui)
* [How to Create Company Atlas UI Resources](create-company-atlas-ui-resources)
* [How to Create Custom Preview Images for Building Blocks & Page Templates](create-custom-preview-images-for-building-blocks-and-page-templates)
* [How to Migrate Existing Projects to Atlas UI](migrate-existing-projects-to-atlasui)
* [How to Share Company Atlas UI Resources](share-company-atlas-ui-resources)
