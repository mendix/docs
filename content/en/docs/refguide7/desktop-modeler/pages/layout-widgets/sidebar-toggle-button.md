---
title: "Sidebar toggle button"
url: /refguide7/sidebar-toggle-button/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---


The sidebar toggle is a button that when pressed will make a region of a [scroll container](/refguide7/scroll-container/) appear or disappear. This makes it possible to create sidebars, for instance a menu on a mobile phone that is hidden by default and can be shown by clicking the button. See the picture for an example layout that used the sidebar toggle. 

{{< figure src="/attachments/refguide7/desktop-modeler/pages/layout-widgets/sidebar-toggle-button/sidebar-toggle-button.png" >}}

## Button properties

{{% snippet file="/static/_includes/refguide7/Caption+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Image+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Render+Mode+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Button+Style+Property.md" %}}

## Common properties

{{% snippet file="/static/_includes/refguide7/Name+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Class+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Style+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Tab+index+Property.md" %}}

## General properties

### Region

Choose the region that should be collapsed/expanded by clicking this button.

| Region | Effect |
| --- | --- |
| Left | The left region of the layout container will be toggled. |
| Right | The right region of the layout container will be toggled. |

{{% alert color="info" %}}

The sidebar toggle is right-to-left-aware (RTL) which means that in RTL languages the sidebar will slide in from the right if you choose 'Left'.}

{{% /alert %}}

_Default value:_ Left

### Mode

Determines how the region will be toggled.

| Mode | Effect |
| --- | --- |
| Push content aside | The sidebar moves the rest of the content off-screen (only available mode in Mendix 5.17 and older). |
| Slide over content | The sidebar moves over the content. |
| Shrink content | The content shrinks to make space for the sidebar. |

### Initially open

Only applicable if the mode is "Shrink content".

## Visibility properties

{{% snippet file="/static/_includes/refguide7/Visibility+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Visibility+Property+With+Module+Roles+Extended.md" %}}
