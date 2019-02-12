---
title: "Container"
parent: "container-widgets"
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

A container widget can be used to style or simultaneously hide a group of widgets. In the browser, it is rendered as a simple `div` element by default. It is also possible to render a container as one of HTML5 sementic elements (for example, `section`, `main`, `article`, `nav`).

{{% alert type="info" %}}

![](attachments/16713858/16843976.png)
An empty container.

{{% /alert %}}

## Common properties

{{% snippet file="refguide/Name+Property.md" %}}

{{% snippet file="refguide/Class+Property.md" %}}

{{% snippet file="refguide/Style+Property.md" %}}

## General properties

### Render mode

The render mode determines which HTML5 tag will be used to show the container in the web browser.

| Value     | HTML Tag    |
| --------- | ----------- |
| Div       | `div`       |
| Section   | `section`   |
| Article   | `article`   |
| Header    | `header`    |
| Footer    | `footer`    |
| Main      | `main`      |
| Nav       | `nav`       |
| Aside     | `aside`     |
| Hgroup    | `hgroup`    |
| Address   | `address`   |

_Default value:_ Div

## Visibility properties

{{% snippet file="refguide/Visibility+Property.md" %}}

{{% snippet file="refguide/Visibility+Property+With+Module+Roles+Simple.md" %}}
