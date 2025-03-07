---
title: "UI Recommender"
url: /refguide/ui-recommender/
weight: 20
description: "Describes UI Recommender in Mendix Studio Pro."
---

## Introduction

{{% alert color="info" %}}
UI Recommender is available in Studio Pro 10.18 and above. 
{{% /alert %}}

{{% alert color="info" %}}
UI Recommender works both online and offline. No internet connection or signing-in is required.
{{% /alert %}}

UI Recommender allows you to easily add new widgets to a page in Mendix Studio Pro without losing the context of what you are currently working on.

## Using UI Recommender

 UI Recommender is enabled by default. You can disable it via **Edit** > **Preferences** > **Maia** > **In-Editor Recommender** > **Enable for Page Editor**. 

UI Recommender is displayed as a small blue plus sign in the page editor. It is only available in **Design Mode**. To use UI Recommender, do the following:

1. Open the UI Recommender dialog box in the following way:

    1. Go to **Design Mode** if you are not in this mode.
    1. Hover over an element on the page and a blue plus sign that represents UI Recommender appears:

        {{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/ui-recommender/blue-plus-sign.png" alt="UI Recommender sign">}}

        * It appears at the closest border of the widget (top/bottom or left/right for inline widgets).
        * Its position relates to where an element will be inserted (for example, selecting the sign at the top or left will insert an element before the current widget).
    
    1. Click the blue plus sign to open the UI Recommender dialog box:

        {{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/ui-recommender/dialog.png" alt="UI Recommender dialog" >}}
    
    Alternatively, you can open the UI Recommender dialog box using keyboard shortcuts:

    1. Go to **Design Mode** if you are not in this mode.
    1. Click an element to select it on the page.
    1. Press <kbd>Ctrl</kbd> + <kbd>,</kbd> on Windows (or <kbd>Command</kbd> + <kbd>,</kbd> on Mac) to open UI Recommender at the top or left of the element. Or press <kbd>Ctrl</kbd> + <kbd>.</kbd> on Windows (or <kbd>Command</kbd> + <kbd>.</kbd> on Mac) to open UI Recommender at the bottom or right of the element.

2. To add an element, do the following:

    1. In the UI Recommender dialog box, search for the element you would like to add:

        {{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/ui-recommender/search-in-dialog.png" alt="Search in UI Recommender" >}}
        
    1. Navigate the list using the <kbd>↑</kbd> or <kbd>↓</kbd> arrow keys.
    1. Add the selected element by pressing <kbd>Enter</kbd> or by clicking on the element from the list.
    1. The added element is highlighted and selected, and the dialog closes automatically. When no element is added, the dialog can also be closed by pressing <kbd>Esc</kbd>.

## Read More

* [Adding Elements on a Page](/refguide/page/#add-elements)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
