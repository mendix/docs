---
title: "Icon Collection"
url: /refguide/icon-collection/
weight: 5
description: "Why and how to create an icon collection"
tags: ["Studio Pro", "Icons", "Icon Collection"]
---

## 1 Introduction

You can create an icon collection to manage the icons you can use in your app, for example for branding or to use third-party icons. Icon collections are created from a font.

Remember that, if you want to use the same set of icons in several apps, you can export and import complete icon collections, with their icons. For more information, see [Importing and Exporting Apps, Modules, Widgets, and Documents](/refguide/import-and-export/).

## 2 Adding an Icon Collection

To add an icon collection, do the following.

1. Right-click a module in the **App Explorer**.
2. Select **Add other > Icon collection**.
3. Give your icon collection a name.

## 3 Icon Collection Actions

You can perform the following actions within icon collections using the buttons at the top of the icon collection tab.

{{< figure src="/attachments/refguide/modeling/pages/page-resources/icon-collection/actions.png" alt="Icon collection actions" >}}

Some of the actions can be applied to multiple icons. You can select all icons with <kbd>Ctrl</kbd>+<kbd>A</kbd>, or multiple icons by combining your click with <kbd>Ctrl</kbd> or <kbd>Shift</kbd>

### 3.1 Import font file

The **Import font file...** button allows you to select a font file to base your icon collection on. The imported icons will be given a name based on their character codes in the font file.

Only the *ttf* format is supported.

If the icon collection already contains icons, you will be warned that importing a font file will override the existing icons. Icons that are present in the newly selected file will be kept, including their name and tags. This allows you to upgrade your icon collection to use a newer version of the font. However, any icon that isn't present in the newly selected font file will instead be removed.

### 3.2 Configure

A CSS stylesheet is automatically generated for your icon collection. The **Configure** button allows you to change settings that affect the generated CSS classes. This isn't required, but is recommended. There are two values that can be configured:

#### 3.2.1 Collection Class

This is a CSS class that represents the entire icon collection. This must either be a valid CSS class name or be left blank. To ensure the collection class is a valid CSS class, it must start with a letter or underscore and can only contain letters, numbers, hyphens and underscores. When left blank, one will be generated based on the name the icon collection.

#### 3.2.2 Prefix

The prefix will be used together with the icon name to generate a unique CSS class for each icon in the icon collection. To ensure the prefix results in a valid CSS class, it must start with a letter or underscore and can only contain letters, numbers, hyphens and underscores. When left blank, one will generated based on the name of the icon collection.

### 3.3 Delete

The **Delete** button removes the selected icon(s) from the icon collection. You will be warned if the icon or icons are used elsewhere in the app.

Deleting the icon won't remove it from the font file.

### 3.4 Find Usages

The **Find usages** button displays, in the **Find Results** dock, all the places where this icon is used in your app.

## 4 Renaming and Tagging Icons

The name and tags column of the icon collection are editable, and allow you to directly change these values of any icon.

The name of the icon will be used to generate a CSS class. To ensure the icon name results in a valid CSS class, it must start with a letter or underscore and can only contain letters, numbers, hyphens or underscores.

Two icons in the same collection can't share the same name.

Tags allow you to define a list of search terms that make it easier to find the correct icon. An icon can be given multiple tags by entering them as a comma-separated list. Unlike icon names, two icons can have the same tags. For example, you could tag both a mute and unmute icon with the tag "sound".

You can search for these icons when selecting an icon to use in your app.

## 5 Advanced Usage: Using Generated CSS Classes Directly

When you deploy your app or run it locally, a CSS stylesheet will be automatically generated and included with your app. You can use the generated CSS classes for your icons directly in your stylings, for example in a CSS stylesheet or as part of the design properties of a widget. This isn't intended to be the main way to use your icon collection, but is available as an option for advanced usage.

To use an icon, you'll need to use both the collection class and the specific class of an icon, as shown in the "generated CSS classes" column in the editor.

When using an icon in this way, be aware that the find usages option won't be able to find all usages of an icon. Deleting an icon that is being used like this, also won't result in a consistency error.

In some cases the generated CSS classes of an icon changes and you'll have to manually update your styling:
* Renaming an icon changes the CSS class of that icon.
* Changing the configured collection class or prefix of the icon collection, including removing either option. This affects all icons in the collection.
* If the collection class or prefix isn't explicitly configured, renaming the icon collection or moving it to a different module. This affects all icons in the collection.

To prevent issues from occuring, we recommend configuring the icon collection and naming all icons before you start using them directly in your styling. Afterwards, do not make any further changes.

Icon tags don't affect the generated CSS styling. This means that you are always able to edit, remove or update icon tags, even after you've started using your icons directly in your styling.
