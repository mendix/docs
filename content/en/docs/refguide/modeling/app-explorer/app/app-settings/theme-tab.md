---
title: "Theme Tab"
url: /refguide/theme-tab/
weight: 50
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The look and feel of a Mendix application is governed by the [UI resources package](/refguide/ui-resources-package/). This package supplies the app with all the required theme information accompanied by matching page templates and building blocks. The module which is designated as the UI resources package is governed by the **UI resources package** setting. Generally, this is automatically updated when a new UI resources package is imported. However, with this setting, the desired module can also be set manually.

### ⚠ Theme ZIP File

{{% alert color="warning" %}}
The use of a ZIP file to configure an app's theme is deprecated. A [UI resources package](/refguide/ui-resources-package/) is the preferred method of sharing themes.
{{% /alert %}}

Older apps may still use a theme ZIP file as the basis for their theme. In this situation, the **Theme ZIP file** setting can be used to switch between any ZIP files found in the **theme** folder. 

{{% alert color="warning" %}}
This practice is deprecated and will be removed in a future version.
{{% /alert %}}

To switch from a ZIP file to a UI resources package, follow the steps below:

1. Replace the contents of the theme folder with the contents of the desired ZIP file.

2. Use the **UI resources package** setting described above to select a module. Ideally, this module should only contain UI documents, such as page templates and building blocks. This will allow you to export and import the module to other apps without worrying about reference errors.

3. Set the **Theme ZIP file** setting to **None**.

### Marking as a UI Resources Module

Modules that contain theme styling should be marked as UI resources modules. To do so, right-click the **Module {name}** in the App Explorer, then click **Mark as UI resources module**. This will give the modules a green icon, which makes it easy to distinguish theme modules from other modules, and also influences the order in which styling will be applied from those modules:

{{< figure src="/attachments/refguide/modeling/app-explorer/app/app-settings/theme-tab/green-module.png" alt="green module" class="no-border" >}}

### Ordering UI Resource Modules

When a module contains styling (SCSS/CSS), be sure it is added to the compiled CSS file in the correct order relative to other files. For example, if a theme module should overwrite styling that is defined in **Atlas_Core**, it is important that the theme module is added *after* **Atlas_Core**. 

You can set an explicit order in the theme settings (**App Settings** > **Theme**). This contains a list of all modules that are marked as UI resource modules, and allows you to set the explicit order in which they are added to the CSS file. Note that the lower a module is ordered in the list, the higher its precedence. For example, an app that uses a company theme module could be ordered as follows:

{{< figure src="/attachments/refguide/modeling/app-explorer/app/app-settings/theme-tab/app-theme-settings.png" alt="app theme settings" class="no-border" >}}
