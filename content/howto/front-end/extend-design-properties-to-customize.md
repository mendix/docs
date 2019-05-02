---
title: "Extend Design Properties to Customize Your Studio Experience"
parent: "atlas-ui"
menu_order: 60
tags: ["Atlas", "UI", "UX", "user experience", "Studio", "customize", "custom"]
---

## 1 Introduction

There is a customizable **settings.json** file for the Atlas UI that can be found in the **theme** folder of your Mendix project. 

**This how-to will teach you how to do the following:**

* Change Atlas UI to Old Mendix UI Framework
* Extend design properties applied in Studio

## 2 Extending Design Properties Applied in Studio

Properties in the **Design** section of Studio allow users to change the position and styling of widgets on a page. Atlas UI contains a design properties file that can be extended with your own custom design properties.

You can find the design properties in the **theme** folder > **settings.json** file of the Mendix project.

The example below shows the design properties of a `"Button"`. 

* `"name"` – the name of the design property
* `"type"` – the type of the design property (for example, `Dropdown` or `Toggle`)
* `"description"` – a brief explanation of the design property
* `"options"` – the array of options that shows the name and CSS class specified in the Sass files for Atlas UI

![](attachments/howto/extend_settings.png)

These design properties are used in the **Design** section of Studio.

![Design Properties in Studio](attachments/extend-design-properties-to-customize/button-design-properties.png)

{{% alert type="info" %}}

When you apply a new class in **settings.json** file, make sure that this class exists in the scss file. For example, the detailed Sass information for buttons can be found in this file: */theme/styles/sass/lib/components/_buttons.scss*

{{% /alert %}}

## 3 Read More

* [Get Started with Atlas UI](get-started-with-atlasui)
* [Create Company Atlas UI Resources](create-company-atlas-ui-resources)
* [Create Custom Preview Images for Building Blocks & Page Templates](create-custom-preview-images-for-building-blocks-and-page-templates)
* [Migrate Existing Projects to Atlas UI](migrate-existing-projects-to-atlasui)
* [Share Company Atlas UI Resources](share-company-atlas-ui-resources)
