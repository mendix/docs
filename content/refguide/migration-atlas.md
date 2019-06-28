---
title: "Troubleshoot Atlas UI Changes when Migrating to Mendix 8"
parent: "moving-from-7-to-8"
menu_order: 20
description: "This document explains how to fix your styling when migrating a project from Mendix 7 to Mendix 8."
tags: [ "Widgets", "Themes", "Classes", "Atlas", "Atlas UI", "Styling", "SASS", "CSS"]
---

## 1 Introduction

When you upgrade to Mendix 8, your widgets' DOM structure will be changed. This means that the correlating Sass styling will not work as expected anymore. This document will allow you to make your theming compatible with Mendix 8.

{{% alert type="warning" %}}If you have added any content in the **Atlas_UI_Resource module**, you have to move that content out of the module. If you do not, it will be overwritten.{{% /alert %}}

Follow the steps below to begin upgrading your Atlas Resources:

1. Download the latest Atlas Resources module (v1.3.0 or higher). 
2. Import this module into your app and replace the old resource module. This will overwrite the layouts, page templates, and building blocks inside of the resource module. The **theme** folder related to your old resource module will be moved to **theme_old**. You will get a new **theme** folder with the latest changes. From here, you must act differently based on if you have custom styling or not:<br />
	a. If you did not change anything in the old **theme** folder, you can safely remove **theme_old** and leave everything else as is. Your styling will work and you can stop with consulting this document. <br />
	b. If you did change anything in the old **theme** folder, you will have to do some manual work to align your styling. Consult the information below to decide what to do based on your needs.

## 2 Integrating the Old Theme Folder into the New One

When migrating from Mendix 7 to Mendix 8, you must integrate **theme_old** into **theme** while adhering to several guidelines. Which guidelines you must follow vary based on your specific project. Consult the subsections below for instructions based on your unique case.

{{% alert type="info" %}}If you customized any widget where the DOM structure has changed, consult [Troubleshoot DOM Changes when Migrating to Mendix 8](migration-dom-issues) to ensure your custom styling works.{{% /info %}}

## 2.1 Working with HTML Files

If you have altered the CSS in your HTML files, consult the instructions below. If you have not, you may ignore this subsection.

If you changed any **index\*.html** files, make sure to do the following:

* Apply the same changes you did in the old file to the new html file
* Make sure the **bootstrap.min.css** and **mxui.css** imports are not there
* Make sure you don’t import **styles/css/lib/lib.css** anymore
* Make sure you’ve put either `<link *rel*="stylesheet" *type*="text/css" *href*="styles/web/css/main.css?{{cachebust}}">` or `{{themecss}}` inside of the `<head></head>` tags

If you changed any **login\*.html** files, complete the following actions:

* Apply the same changes you did in the old file to the new HTML file
* Confirm the **bootstrap.min.css** and **mxui.css** imports are gone (if they are not, delete them)
* Make sure you don’t import `styles/css/lib/lib.css` anymore [todo: discuss this to edit it]
* Place either `<link*rel*="stylesheet" *type*="text/css" *href*="styles/web/css/main.css?{{cachebust}}">` or `{{themecss}}` inside of the `<head></head>` tags

## 2.2 Working with JSON Files

If you have altered your JSON files, consult the instructions below. If you have not, you may ignore this subsection.

If you changed Design Properties for Web in **settings.json**, you must manually integrate your old **settings.json** into the new folder.

If you changed Hybrid App imports in **components.json**, make sure to do the following:

* Manually integrate your old **components.json** into the new folder
* Confirm the **bootstrap.min.css** and **mxui.css** imports are gone (if they are not, delete them)
* Confirm that **styles/css/lib/lib.css** is changed to **styles/web/css/main.css**

### 2.3 Working with Custom Folder Files

If you have altered your custom folders, consult the instructions below. If you have not, you may ignore this subsection.

If you added, removed, or changed custom variables in a custom folder, copy your content from **theme_old/styles/sass/custom/_custom-variables.scss** to **theme/styles/web/sass/app/_custom-variables.scss**.

If you added or changed custom styling in a custom folder, copy your content from **theme_old/styles/sass/custom/** to **theme/styles/web/sass/app/**.

### 2.4 Working with Lib Folder Files

If you have altered your **styles/sass/lib** folder, consult the instructions below. If you have not, you may ignore this subsection.

If you changed any files in the **styles/sass/lib** folder, complete the actions below::

* If you changed a file’s content or name, you must manually integrate that file into the new file and in the new theme folder (while also keeping the Mendix 8 [DOM changes](migration-dom-issues) in mind)
* If you removed a file, no action is required

If you added a file to the **lib/base** folder, copy your content from **theme_old/styles/sass/lib/base/** to **theme/styles/web/sass/core/base/**. You must also complete the following action:

* Add imports to `theme/styles/web/sass/main.scss` in the `core/base` group on alphabetic order

If you added a file to the `lib/components` folder, copy your contents from **theme_old/styles/sass/lib/components/** to **theme/styles/web/sass/core/widgets/**. You must also complete the following action:

* Add imports to **theme/styles/web/sass/main.scss** in the **core/widgets** group in alphabetic order

If you added a file to the **lib/customwidgets** folder, copy your content from **theme_old/styles/sass/lib/customwidgets/** to **theme/styles/web/sass/core/widgetscustom/**. You must also complete the following action:

* Add imports to **theme/styles/web/sass/main.scss** in the **core/widgetscustom** group in alphabetic order

If you added a file to the **lib/buildingblocks** folder, copy your content from **theme_old/styles/sass/lib/buildingblocks/** to **theme/styles/web/sass/resources/atlas_resources_default/buildingblocks**. You must also complete the following action:

* Add imports to **theme/styles/web/sass/main.scss** in the **resources/atlas_resources_default/buildingblocks** group in alphabetic order

If you added a file to the **lib/layouts** folder, copy your content from **theme_old/styles/sass/lib/layouts/** to **theme/styles/web/sass/resources/atlas_resources_default/layouts**. You must also complete the following action:

* Add imports to **theme/styles/web/sass/main.scss** in the **resources/atlas_resources_default/layouts** group in alphabetic order

Make sure any custom or added SASS files are all imported in either **styles/web/sass/main.scss** or **styles/web/sass/app/_custom.scss**.

After troubleshooting your issues with the guidance above, complete the following steps to test your migrated app project:

1. Recompile your SASS to CSS.
2. Test your app project to see if everything works as expected.
3. Delete **theme_old**.

## 3 Read More

* [Troubleshoot DOM Changes when Migrating to Mendix 8](migration-dom-issues)