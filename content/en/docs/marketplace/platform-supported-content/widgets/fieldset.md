---
title: "Fieldset"
url: /appstore/widgets/fieldset/
description: "Describes the Fieldset widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Fieldset](https://marketplace.mendix.com/link/component/113922/Mendix/Fieldset) widget is a container which groups widgets within a form. Structuring a form helps end-users fill it out, especially when they rely on accessibility tools like a screen reader. For example, you could use this widget to group input widgets that belong to the same address when a form requires multiple addresses.

## Features

* Group widgets in a form
* Attaches a legend to the group

## Properties

### General Section

* **Legend** – ???

### Visibility

* **Visibility** 
    * **Context** – This allows you to specify how the fieldset is shown:
        * **Always** (default) – This makes the fieldset always shown.
        * **Based on value** – This makes the fieldset show depending on a value in context. The fieldset widget must have X be true in for this property to be togggled.
        * **Based on expression** – This allows the fieldset to be shown based on an expression, which you can write in the emergent window.
    * **Module roles** 
        * **Show the fieldset for selected roles** – If selected, allows you to specify certain roles in your app to show the fieldset to. Roles not assigned in the emergent list will not see the fieldset.

### Common

* **Name** – This allows you to set the name.
* **Tab index** – This allows you to set the tab index value.

## Usage Examples


## Limitations

* This widget should only be used to group widgets belonging to a form
