---
title: "UI Resources Package"
url: /refguide/ui-resources-package/
tags: ["studio pro", "ui resources"]
---

## 1 Introduction

The UI resources package is a specific [module](/refguide/modules/) marked by a green icon in the App Explorer, that determines the app's look and feel. It does this in two distinct ways. First, the package supplies the app with all the page documents required to create well-designed, consistent pages, such as [page templates](/refguide/page-templates/) and [building blocks](/refguide/building-block/). Second, the package contains theme information, which allows users to easily switch out themes that complement the accompanying page documents. 

Which module is set as the UI resources package is governed by the **UI resources package** setting in the **Theme** tab of the [App Settings settings](/refguide/project-settings/). This setting will automatically be updated if a new UI resources package is imported. 

The core concept of a UI resources package as an easily shared source of design utilities works best if the contents of the module is restricted to page templates and building blocks. Adding pages, microflows, and entities is possible and can be useful, but it also forces users to use static resources that may not be ideally suited to their specific application. Consequently, when they inevitably feel the need to tweak those resources to their requirements, the package can no longer be easily updated and maintained by the original designer.

## 2 Theme Folder

When a UI resources package is imported into the app, it will automatically overwrite the app's **theme** folder with its own theme files. A **theme_old** folder will be created to back up the previous theme. This means that any classes and styles added to templates in the package can be capitalized on fully by the theme without having to worry about the styling breaking when you import the template into a new app. As long as the template or building block remains in the same UI resources package, it will look exactly the way it was designed. 

Note that the replacement of the theme folder only occurs when importing a new UI resources package from an external source, such as an *.mpk* or from the Marketplace. Selecting a different existing module as the UI resources package will not affect the theme folder.

## 3 Page Templates and Building Blocks

Although page templates and building blocks can be added to any module, storing them in the UI resources package confers several benefits. 

Within the package, top-level folders are treated as categories for the purposes of displaying both page templates and building blocks. Add a page template to the **Dashboard** folder of the UI resources package, and a **Dashboard** category will automatically appear in the **Create Page** wizard containing the template.

To facilitate sorting, UI resources package folder names can be prefixed with a number. Any folder names starting with a number followed by a period and a space will appear in the Create Page wizard in numeric (rather than alphabetic) order. The prefix will be omitted. For example, folders with the names *10. Administration* and *9. Banking* will appear as *Banking, Administration*. 

The same principles apply to building blocks with regards to the **Building blocks** tab of Studio Pro **Toolbox**. Any building blocks or page templates found in modules other than the UI resources package will appear in the generic **Local** category, which is always sorted on top.

Additionally, adding page templates and building blocks to the UI resources package ensures that they remain in sync with the app's theme, even when importing them into a different app. 

## 4 Importing and Exporting

UI resources packages can be exported in the same manner as a normal module: right-click the package in the **App Explorer** and select **Export UI resources package**. Along with the rest of the module's documents, the **theme** folder in the app directory will automatically be exported along with the package. This folder will be ready to be inserted into any apps the package is imported into in the future. This function is only available for the green module marked as the **UI resources package**. To export a different module as a UI resources package, the **UI resources package** setting must be manually set to that module in the app settings before export. 

When a UI resources packages is imported as a module, it will automatically update the app with a new theme folder and designate itself the app's new UI resources package.
