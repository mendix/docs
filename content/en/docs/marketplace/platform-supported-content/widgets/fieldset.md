---
title: "Fieldset"
url: /appstore/widgets/fieldset/
description: "Describes the Fieldset widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Fieldset](https://marketplace.mendix.com/link/component/113922/Mendix/Fieldset) widget is a container which groups widgets within a form. Structuring a form helps end-users fill it out, especially when they rely on accessibility tools like a screen reader. 

## Features

* Group widgets in a form
* Attaches a legend to the group

## Properties

### General Section

* **Legend** – This defines the text shown as the caption of the group. This can include parameters. When no legend is set, the widget does not render a legend. The legend is also shown as the widget's caption in the page explorer
* **Content** – This defines which widgets the fieldset will group.

### Visibility

{{% snippet file="/static/_includes/refguide/visibility-section-link.md" %}}

### Common

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

## Usage Examples

Grouping multiple widgets in a form with fieldset can make your app's user experience smoother. You can apply fieldsets in any situation where multiple widgets would benefit from organization.

For example, use a fieldset to group input widgets that belong to the same address when a form requires multiple addresses:

{{< figure src="/attachments/appstore/platform-supported-content/widgets/fieldset/fieldset-address-example.png" alt="Grouping widgets for an address using Fieldset" class="no-border" max-width=80% >}}

Another common use case for fieldset widgets is using them to group contact information:

```
<form>
    <fieldset>
        <legend>Contact Information</legend>
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone"><br>
        <fieldset>
            <legend>Alternative Contact</legend>
            <label for="altPhone">Alternative Phone:</label>
            <input type="tel" id="altPhone" name="altPhone"><br>
            <label for="altEmail">Alternative Email:</label>
            <input type="email" id="altEmail" name="altEmail">
        </fieldset>
    </fieldset>
</form>
```

## Limitations

* This widget should only be used to group widgets belonging to a form
* The legend supports text only; you cannot place widgets in a legend