---
title: "Icon Collection"
url: /refguide9/icon-collection/
weight: 5
description: "This guide shows you why and how to create an icon collection."
---

## Introduction

You can create an icon collection to manage the icons you can use in your app. This is useful if you have a collection of your own brand's icons, as well as if your app uses third-party icons. Icon collections are created from a font.

If you want to use the same set of icons across several apps, you can export and import complete icon collections. For more information, see [Importing and Exporting Apps, Modules, Widgets, and Documents](/refguide9/import-and-export/).

## Adding an Icon Collection

To add an icon collection, do the following:

1. Right-click a module in the **App Explorer**.
1. Select **Add other** > **Icon collection**.
1. Name your icon collection.

## Icon Collection Actions

You can perform the following actions within icon collections using the buttons at the top of the icon collection tab:

{{< figure src="/attachments/refguide9/modeling/pages/page-resources/icon-collection/actions.png" alt="Icon collection actions" class="no-border" >}}

Some of the actions can be applied to multiple icons. You can select all icons using <kbd>Ctrl</kbd> + <kbd>A</kbd>, or select multiple icons by combining your click with <kbd>Ctrl</kbd> or <kbd>Shift</kbd>

### Import Font File

The **Import font file** button allows you to select a font file to base your icon collection on. The imported icons will be given a name based on their character codes in the font file. This is possible only the *ttf* format is supported.

If the icon collection already contains icons, you will be warned that importing a font file will override the existing icons. Icons that are present in the newly selected file will be kept, including their name and tags. This allows you to upgrade your icon collection to use a newer version of the font. However, any icon that is not present in the newly selected font file will instead be removed.

### Import Icon Data

The **Import icon data** button lets you batch import names and tags for your icons. You can provide the data as a text file, a *.csv* file, or even paste it directly from your clipboard. The only requirement is that the data is in the following format and order:

```
[Char_code];[Name];[Search_Tags (optional)]
[Char_code];[Name];[Search_Tags (optional)]
...
```

For example, it could look like the following:

```
F01C9;ab-testing;UX, Research
F16E0;abacus;Calculation
F1328;abjad-arabic;Alphabet, Language
```

{{% alert color="info" %}}
You can easily convert your font data into this format is by either using a text manipulation software like VSCode or creating an Excel sheet and saving it as a *.csv* file.
{{% /alert %}}

After loading the data from a file or your clipboard, you will see a preview of the data before it is applied. Make sure to check the list, as it will also mention any potential problems that might cause a specific line to be ignored:

{{< figure src="/attachments/refguide9/modeling/pages/page-resources/icon-collection/excel.png" alt="Editing Icon Data in an Excel sheet" class="no-border" >}}

{{< figure src="/attachments/refguide9/modeling/pages/page-resources/icon-collection/import-icon-data.png" alt="The imported Icon Data" class="no-border" >}}

### Configure

A CSS stylesheet is automatically generated for your icon collection. The **Configure** button allows you to change settings that affect the generated CSS classes. This is not required, but is recommended. There are two values that can be configured: collection class and prefix.

#### Collection Class

This is a CSS class that represents the entire icon collection. This must either be a valid CSS class name or be left blank. 

To ensure the collection class is a valid CSS class, it must start with a letter or underscore and can only contain letters, numbers, hyphens, and underscores. 

If this field is left blank, a collection class will be automatically generated based on the name of the icon collection.

#### Prefix

The prefix will be used together with the icon name to generate a unique CSS class for each icon in the icon collection. 

To ensure the prefix results in a valid CSS class, it must start with a letter or underscore and can only contain letters, numbers, hyphens, and underscores. 

If this field is left blank, a prefix will generated based on the name of the icon collection.

### Delete

The **Delete** button removes selected icons from the icon collection. You will be warned if the icons are used elsewhere in the app.

Deleting an icon will not remove it from the font file.

### Find Usages

Located in **Find Results**, the **Find usages** button displays all the places where this icon is used in your app.

## Renaming and Tagging Icons

The name and tags columns of the icon collection are editable and allow you to directly change these values of any icon.

The name of the icon will be used to generate a CSS class. To ensure the icon name results in a valid CSS class, it must start with a letter or underscore and can only contain letters, numbers, hyphens or underscores.

Two icons in the same collection cannot share the same name.

Tags allow you to define a list of search terms that make it easier to find the correct icon. An icon can be given multiple tags by entering them as a comma-separated list. Unlike icon names, two icons can have the same tags. For example, you could apply a "sound" tag to a mute icon as well as an unmute icon.

You can search for these icons when selecting an icon to use in your app.

## Advanced Usage

### Using Generated CSS Classes Directly

When you deploy your app or run it locally, a CSS stylesheet will be automatically generated and included with your app. You can use the generated CSS classes for your icons directly in your stylings, for example in a CSS stylesheet or as part of the design properties of a widget. This is not intended to be the main way to use your icon collection, but is available as an option for advanced usage.

To use an icon, you will need to use both the collection class and the specific class of an icon, as shown in the editor's **Generated CSS classes** column.

When using an icon in this way, be aware that the find usages option will not be able to find all usages of an icon. Deleting an icon that is being used like this, also will not result in a consistency error.

In some cases the generated CSS classes of an icon changes and you will have to manually update your styling:

* Renaming an icon changes the CSS class of that icon
* Changing the configured collection class or prefix of the icon collection, including removing either option (this affects all icons in the collection)
* If the collection class or prefix is not explicitly configured, renaming the icon collection or moving it to a different module (this affects all icons in the collection)

To prevent issues from occurring, Mendix recommends configuring the icon collection and naming all icons before you start using them directly in your styling. Afterwards, do not make any further changes.

Icon tags do not affect the generated CSS styling. Thus, you are always able to edit, remove, or update icon tags even after you have started using your icons in your styling.
