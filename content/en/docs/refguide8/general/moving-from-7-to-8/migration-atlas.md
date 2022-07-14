---
title: "Troubleshooting Atlas UI Changes"
url: /refguide8/migration-atlas/
weight: 20
description: "This document explains how to fix your styling when migrating a project from Mendix 7 to Mendix 8."
tags: [ "Widgets", "Themes", "Classes", "Atlas", "Atlas UI", "Styling", "SASS", "CSS"]
---

## 1 Introduction

When you upgrade to Mendix 8, your widgets' DOM structure will be changed. This means that the correlating Sass styling will not work as expected anymore. This document will allow you to make your theming compatible with Mendix 8.

Each section in this document could apply to your app, but some sections may *not* apply. If a section does not apply to your case, you may skip it.

{{% alert color="warning" %}}If you have added any content in the **Atlas_UI_Resource module**, you have to move that content out of the module. If you do not, it will be overwritten.{{% /alert %}}

When your app is using unmodified Atlas UI resources, upgrading your app to Mendix 8 will automatically update your Atlas UI resources to version 2.1. If you did not make any changes in the custom folder, you are good to go and you can skip the rest of this guide. 

If you are using unmodified Atlas UI resources but you made changes to the custom folder, these changes are preserved and will be used by the new Atlas UI version. You will see a consistency error in this case. Proceed to the steps described in the [Working with a Modified Custom Folder](#modified) section below to resolve this error.

If you are using a modified version of Atlas UI resources, Mendix cannot update it automatically. You will see a consistency error in this case. To resolve your theming issues, you need to update Atlas yourself.

Follow the steps below to begin upgrading your Atlas UI Resources module:

1. Download the latest [Atlas UI Resources](/appstore/modules/atlas-ui-resources/) module (v2.0.0 or higher).
2. Import this module into your app and replace the old resource module. This will overwrite the layouts, page templates, and building blocks inside of the resource module. The **theme** folder related to your old resource module will be moved to **theme_old**. You will get a new **theme** folder with the latest changes. From here, you must choose one of the following based on if you have custom styling or not:<br />
	* If you did not change anything in the old **theme** folder, you can safely remove **theme_old** and leave everything else as is. Your styling will work and you can stop with consulting this document. <br />
	* If you did change anything in the old **theme** folder, you will have to do some manual work to align your styling. Consult the information below to decide what to do based on your needs.

## 2 Integrating the Old Theme Folder into the New One

When migrating from Mendix 7 to Mendix 8, you must integrate **theme_old** into **theme** while adhering to several guidelines. Which guidelines you must follow vary based on your specific project. Consult the subsections below for instructions based on your unique case.

{{% alert color="info" %}}If you customized any widget where the DOM structure has changed, consult [Troubleshoot DOM Changes when Migrating to Mendix 8](/refguide8/migration-dom-issues/) to ensure your custom styling works.{{% /alert %}}

### 2.1 Working with HTML Files

If you have altered  your HTML files, consult the instructions below. If you have not, you may ignore this subsection.

If you changed any **index\*.html** files, make sure to do the following:

* Apply the same changes you did in the old file to the new HTML file
* Make sure the **bootstrap.min.css**, **bootstrap-rtl.min.css**, and **mxui.css** imports are not there
* Make sure you do not import **styles/css/lib/lib.css** anymore
* Make sure you have put either `<link rel="stylesheet" type="text/css" href="styles/web/css/main.css?{{cachebust}}">` or `{{themecss}}` inside of the `<head></head>` tags

If you changed any **login\*.html** files, complete the following actions:

* Apply the same changes you did in the old file to the new HTML file
* Confirm the **bootstrap.min.css** and **mxui.css** imports are gone (if they are not, delete them)
* Make sure you do not import `styles/css/lib/lib.css` anymore
* Place either `<link*rel*="stylesheet" *type*="text/css" *href*="styles/web/css/main.css?{{cachebust}}">` or `{{themecss}}` inside of the `<head></head>` tags

### 2.2 Working with JSON Files

If you have altered *settings.json* or *components.json* files, consult the instructions below. If you have not, you may ignore this subsection.

#### 2.2.1 Design Properties

If you changed design properties in your theme, you must manually integrate them into the new Atlas UI.

Design properties are stored in the `designProperties` section in the *settings.json* file.

If you have custom design properties which have not been moved to the new Atlas UI theme, you will see consistency errors (error code **CE6083**) which will notify you about your project's missing design properties.

Please move your custom design properties to the *settings.json* file of the new Atlas UI theme.

### 2.2.2 Additional CSS Files

{{% alert color="warning" %}}
Changing `cssFiles` is not recommended. Please consider moving custom CSS files to your *theme/styles/web/sass/app/_custom.scss* file.
{{% /alert %}}

If you changed `cssFiles` in *settings.json*, you must integrate your changes to the new *settings.json* file.

By default Atlas UI version 1 includes two files:

```javascript
"cssFiles": [
    "styles/css/lib/lib.css",
    "styles/css/custom/custom.css"
],
```

Atlas 2.1.0, however, uses a single file:

```javascript
"cssFiles": [
	"styles/web/css/main.css"
],
```

If your `cssFiles` section adds more files, you must include them in your new theme's *settings.json* file.

If you changed hybrid mobile app imports in *components.json*, make sure to do the following:

* Manually integrate your old *components.json* into the new folder
* Confirm the *bootstrap.min.css*, *bootstrap-rtl.min.css*, and *mxui.css* imports are gone (if they are not, delete them)
* Confirm that *styles/css/lib/lib.css* is changed to *styles/web/css/main.css*	

### 2.3 Working with Custom Folder Files

If you have altered your custom folders, consult the instructions below. If you have not, you may ignore this subsection.

If you added, removed, or changed custom variables in a custom folder, copy your content from *theme_old/styles/sass/custom/_custom-variables.scss* to *theme/styles/web/sass/app/_custom-variables.scss*.

If you added or changed custom styling in the custom folder, copy your content or files from *theme_old/styles/sass/custom/* to *theme/styles/web/sass/app/*.
* In this case, also make sure that your old *custom.scss* file is renamed to *_custom.scss*

### 2.4 Working with Lib Folder Files

If you have altered your *styles/sass/lib* folder, consult the instructions below. If you have not, you may ignore this subsection.

If you changed any files in the *styles/sass/lib* folder, complete the actions below::

* If you changed a file’s content or name, you must manually make the same changes in the new file and in the new theme folder (while also keeping the Mendix 8 [DOM changes](/refguide8/migration-dom-issues/) in mind)
* If you removed a file, no action is required

If you added a file to the *lib/base* folder, copy that file from *theme_old/styles/sass/lib/base/* to *theme/styles/web/sass/core/base/*. You must also complete the following action:

* Import the file into *theme/styles/web/sass/main.scss* under the `Base` group in alphabetic order

If you added a file to the *lib/components* folder, copy that file from *theme_old/styles/sass/lib/components/* to *theme/styles/web/sass/core/widgets/*. You must also complete the following actions:

1. Import the file into *theme/styles/web/sass/main.scss* under the `Widgets` group in alphabetical order
2. Cut all design properties and extra classes from your file (to be pasted later), leaving only the default styling
3. Create a new file in *theme/styles/web/sass/core/helpers/* with the same name
4. Paste those design properties and extra classes into this new file
5. Import the file into *theme/styles/web/sass/main.scss* under the import mentioned above

If you added a file to the *lib/customwidgets* folder, copy your content from *theme_old/styles/sass/lib/customwidgets/* to *theme/styles/web/sass/core/widgetscustom/*. You must also complete the following action:

* Import the file into *theme/styles/web/sass/main.scss* under the `Custom Widgets` group in alphabetical order

If you added a file to the *lib/buildingblocks* folder, copy that file from *theme_old/styles/sass/lib/buildingblocks/* to *theme/styles/web/sass/resources/atlas_resources_default/buildingblocks*. You must also complete the following action:

* Import the file into *theme/styles/web/sass/main.scss* under the `Building Blocks` group in alphabetical order

If you added a file to the *lib/layouts* folder, copy that file from *theme_old/styles/sass/lib/layouts/* to *theme/styles/web/sass/resources/atlas_resources_default/layouts*. You must also complete the following action:

* Import the file into *theme/styles/web/sass/main.scss* under the `Layouts` group in alphabetical order

Make sure any custom or added Sass files are all imported in either *styles/web/sass/main.scss* or *styles/web/sass/app/_custom.scss*.

After troubleshooting your issues with the guidance above, complete the following steps to test your migrated app:

### 2.5 Working with a Modified Custom Folder {#modified}

1. Recompile your Sass to CSS.
2. Test your app to see if everything works as expected.
3. Delete *theme_old*.

## 3 Read More

* [Troubleshoot DOM Changes](/refguide8/migration-dom-issues/)
* [Atlas UI](/howto8/front-end/atlas-ui/)
