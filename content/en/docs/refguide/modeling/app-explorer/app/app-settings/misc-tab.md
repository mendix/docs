---
title: "Miscellaneous Tab"
url: /refguide/miscellaneous-tab/
weight: 90
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

These settings determine the behavior of Studio Pro for this app. The settings apply to everyone that is working on this app.

### Bundle Widgets When Running Locally 

{{% alert color="info" %}}
This setting is only available in the Dojo Client version of Studio Pro, which is deprecated. For more information, see [Mendix Client](/refguide/mendix-client/).
{{% /alert %}}

When deploying to the cloud, custom widgets are bundled to optimize client-server communication. When deploying locally, this step is skipped to accelerate startup duration. In some cases, this may obfuscate errors triggered by faulty custom widgets.

If this option is set, custom widgets will also be bundled locally. This mimics the production deployment, eliminating risk at the cost of start-up time.

### Use Data Grid 2, Combo Box, and Image Widgets for Content Generation {#use-dg-cb-i}

{{% alert color="info" %}}
This setting is only available in the Dojo Client version of Studio Pro, which is deprecated. For more information, see [Mendix Client](/refguide/mendix-client/).
{{% /alert %}}

If this setting is enabled, modern widgets like [Data Grid 2](/appstore/modules/data-grid-2/), [Combo Box](/appstore/widgets/combobox/), and [Image](/appstore/widgets/image/) will be used when generating overview pages or the content of data views. Existing generated content remains as is. 

See the list below for detailed information on which widgets are generated in various circumstances:

* A Data Grid 2 module is generated instead of a Data Grid 1 module
* A combo box is generated instead of a combination of dropdown, reference selector, and input reference set selector widgets
* An image widget is generated instead of a static image widget and a dynamic image widget

### Default Association Storage

You can decide how associations are stored in the database.

This option allows you to change the default for new associations. The initial defaults are as follows:

* **New projects** – one-to-many and one-to-one associations are implemented as direct associations
* **Upgraded projects** – for projects which are upgraded from an older version of Mendix, all new associations continue to be implemented as association tables

For more information, including which types of association this applies to, see [Association Storage Options](/refguide/association-storage/).

### Suggest Lower-Case Variable Names in Microflows

When enabled, the names that Studio Pro suggests in microflows will start with a lower-case letter instead of an upper-case letter.

### Activity Default Colors

This table allows you to select a default color for each microflow activity type that is available in your app. The selected color will be used as the background color for all microflow activities of that type in your app. It is possible to override this default value for individual activities in the microflow editor. If you change the default color for an activity type, and there are activities of that type present in the app that have an individual background color specified, a dialog will be shown that allows you to apply the new default color to these activities as well.
