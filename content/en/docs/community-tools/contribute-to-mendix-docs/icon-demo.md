---
title: "Icon Demos"
linktitle: "Icon Demos"
url: /icons
description: "Demo file for SVG icon shortcodes."
draft: true
---
<!-- markdownlint-disable-file -->

## Introduction

Mendix provides a standard set of approved icons in [The Mendix Icon Set](https://mendix.atlassian.net/l/cp/U89wu3oL). This icon set is downloaded to the [docs/static/mx-icons](https://github.com/mendix/docs/tree/development/static/mx-icons) library in SVG format for use in the docs via shortcodes, like this:

To see more information about the pipeline, click **Details** ({{% icon name="notes-paper-text" %}}).

## Syntax

This shortcode has two attributes:

* `name` (required) — This must exactly match the name of the file in the *docs/static/mx-icons* library.
* `color` (optional) – By default, the icon has the same color as the surrounding text. You can override this by specifying an optional `color` attribute, like this: {{% icon name="alert-circle" color="red" %}}. You can set the color to green, red, blue, gray, yellow, or purple.

{{% alert color="info" %}}For details on the icon style guidance, see the [Documentation Style Guide](https://mendix.atlassian.net/wiki/spaces/RNDHB/pages/2510061889/Images+and+Icons#Icons).{{% /alert %}}

## Some Suggested Icons

{{% figure src="/attachments/community-tools/contribute-to-mendix-docs/common-icons.png" %}}

Here are some icons that might be particularly useful for the docs. In the list below, you can see the name of the icon file, a common tooltip associated with the icon, and the icon itself. A few of the icons are shown here with the optional color attributes.

* add: **Add** ({{% icon name="add" %}})
* alarm-bell: **Notify** ({{% icon name="alarm-bell" %}}) 
* alert-circle: **Alert** ({{% icon name="alert-circle" %}})
* alert-triangle: **Warning** ({{% icon name="alert-triangle" color="yellow" %}})
* calendar: **Schedule** ({{% icon name="calendar" %}})
* cog: **Settings** ({{% icon name="cog" %}})
* checkmark-circle: **Save** ({{% icon name="checkmark-circle" %}})
* checkmark-circle-filled: **Success** ({{% icon name="checkmark-circle-filled" color="green" %}})
* chevron-down: **Move Down** ({{% icon name="chevron-down" %}})
* chevron-left: **Move Left** ({{% icon name="chevron-left" %}})
* chevron-right: **Move Right** ({{% icon name="chevron-right" %}})
* chevron-up: **Move Up** ({{% icon name="chevron-up" %}})
* controls-play-filled: **Run** ({{% icon name="controls-play-filled" %}})
* deploy: **Deploy** ({{% icon name="deploy" %}})
* download-button: **Download** ({{% icon name="download-button" %}})
* hyperlink: **Copy Link** ({{% icon name="hyperlink" %}})
* info-circle: **Information** ({{% icon name="info-circle" color="blue" %}})
* layout-rounded-1-filled: **Global Navigation** ({{% icon name="layout-rounded-1-filled" %}})
* lock: **Lock** ({{% icon name="lock" %}})
* notes-paper-edit: **Edit Details** ({{% icon name="notes-paper-edit" %}})
* notes-paper-text **Details** ({{% icon name="notes-paper-text" %}})
* paperclip: **Attach** ({{% icon name="paperclip" %}})
* pencil: **Edit** ({{% icon name="pencil" %}})
* pin: **Pin** ({{% icon name="pin" %}})
* remove: **Remove** ({{% icon name="remove" %}})
* remove-circle-filled: **Error** ({{% icon name="remove-circle-filled" color="red" %}})
* search: **Search** ({{% icon name="search" %}})
* star: **Favorite** ({{% icon name="star" %}})
* subtract-circle-filled: **Not Running** ({{% icon name="subtract-circle-filled"  color="gray" %}})
* three-dots-menu-horizontal: **More Options** ({{% icon name="three-dots-menu-horizontal" %}})
* three-dots-menu-vertical-filled: **DevTools** ({{% icon name="three-dots-menu-vertical-filled" %}})
* trash-can: **Delete** ({{% icon name="trash-can" %}})
* view: **View** ({{% icon name="view" %}})
* view-off: **View** ({{% icon name="view-off" %}})
