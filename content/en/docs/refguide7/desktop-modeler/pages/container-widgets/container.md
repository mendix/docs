---
title: "Container"
url: /refguide7/container/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

A container widget can be used to style or simultaneously hide a group of widgets. In the browser, it is rendered as a simple `div` element by default. It is also possible to render a container as one of HTML5 sementic elements (for example, `section`, `main`, `article`, `nav`).

{{% alert color="info" %}}

{{< figure src="/attachments/refguide7/desktop-modeler/pages/container-widgets/container/16843976.png" >}}
An empty container.

{{% /alert %}}

## Common properties

{{% snippet file="/static/_includes/refguide7/Name+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Class+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Style+Property.md" %}}

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

{{% snippet file="/static/_includes/refguide7/Visibility+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Visibility+Property+With+Module+Roles+Simple.md" %}}
