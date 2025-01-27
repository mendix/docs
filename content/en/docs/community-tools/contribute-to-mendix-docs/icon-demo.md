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

```
{{%/* icon name="three-dots-menu-horizontal" */%}}
```

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

## All Icons

For those who don't have a Mac and need to be able to review all the icons!

<!-- To recreate this list
In /static/mx-icons use the command "dir *.svg /B > allicons.txt" to create a list of all the icons.
Open allicons.txt
Find ".svg" and replace with "" (empty replacement string)
Turn on Regular Expression searching
Find "(.*?)\n" and replace with "<td style="text-align: center"><span style="size:4em">{{% icon name="$1" %}}</span><br />$1</td> \n"
Find "(<td.*?)\n(<td.*?)\n(<td.*?)\n(<td.*?)\n(<td.*?)\n" and replace with "<tr>\n  $1\n  $2\n  $3\n  $4\n  $5\n</tr>\n"

Copy the whole file into this section with a "<table>" tag at the start and a "</table>" tag at the end
-->

<table>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="accessibility-filled" %}}</span><br />accessibility-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="accessibility" %}}</span><br />accessibility</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="add-circle-filled" %}}</span><br />add-circle-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="add-circle" %}}</span><br />add-circle</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="add-filled" %}}</span><br />add-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="add" %}}</span><br />add</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="aerospace-filled" %}}</span><br />aerospace-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="aerospace" %}}</span><br />aerospace</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="airplane-filled" %}}</span><br />airplane-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="airplane" %}}</span><br />airplane</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="alarm-bell-filled" %}}</span><br />alarm-bell-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="alarm-bell-off-filled" %}}</span><br />alarm-bell-off-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="alarm-bell-off" %}}</span><br />alarm-bell-off</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="alarm-bell" %}}</span><br />alarm-bell</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="alert-circle-filled" %}}</span><br />alert-circle-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="alert-circle" %}}</span><br />alert-circle</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="alert-filled" %}}</span><br />alert-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="alert-triangle-filled" %}}</span><br />alert-triangle-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="alert-triangle" %}}</span><br />alert-triangle</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="alert" %}}</span><br />alert</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="align-bottom-filled" %}}</span><br />align-bottom-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="align-bottom" %}}</span><br />align-bottom</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="align-center-filled" %}}</span><br />align-center-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="align-center" %}}</span><br />align-center</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="align-left-filled" %}}</span><br />align-left-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="align-left" %}}</span><br />align-left</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="align-middle-filled" %}}</span><br />align-middle-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="align-middle" %}}</span><br />align-middle</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="align-right-filled" %}}</span><br />align-right-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="align-right" %}}</span><br />align-right</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="align-top-filled" %}}</span><br />align-top-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="align-top" %}}</span><br />align-top</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="alt-text" %}}</span><br />alt-text</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="analytics-bars-filled" %}}</span><br />analytics-bars-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="analytics-bars" %}}</span><br />analytics-bars</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="analytics-graph-bar-filled" %}}</span><br />analytics-graph-bar-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="analytics-graph-bar" %}}</span><br />analytics-graph-bar</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="apis-filled" %}}</span><br />apis-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="apis" %}}</span><br />apis</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="app-empty-filled" %}}</span><br />app-empty-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="app-empty" %}}</span><br />app-empty</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="app-multiple-filled" %}}</span><br />app-multiple-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="app-multiple" %}}</span><br />app-multiple</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="apple-logo-filled" %}}</span><br />apple-logo-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="apple-logo" %}}</span><br />apple-logo</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-circle-down-filled" %}}</span><br />arrow-circle-down-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-circle-down" %}}</span><br />arrow-circle-down</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-circle-left-filled" %}}</span><br />arrow-circle-left-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-circle-left" %}}</span><br />arrow-circle-left</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-circle-right-filled" %}}</span><br />arrow-circle-right-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-circle-right" %}}</span><br />arrow-circle-right</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-circle-up-filled" %}}</span><br />arrow-circle-up-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-circle-up" %}}</span><br />arrow-circle-up</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-down" %}}</span><br />arrow-down</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-left" %}}</span><br />arrow-left</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-narrow-down" %}}</span><br />arrow-narrow-down</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-narrow-left" %}}</span><br />arrow-narrow-left</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-narrow-right" %}}</span><br />arrow-narrow-right</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-narrow-up" %}}</span><br />arrow-narrow-up</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-right" %}}</span><br />arrow-right</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-square-down-filled" %}}</span><br />arrow-square-down-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-square-down" %}}</span><br />arrow-square-down</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-square-left-filled" %}}</span><br />arrow-square-left-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-square-left" %}}</span><br />arrow-square-left</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-square-right-filled" %}}</span><br />arrow-square-right-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-square-right" %}}</span><br />arrow-square-right</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-square-up-filled" %}}</span><br />arrow-square-up-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-square-up" %}}</span><br />arrow-square-up</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-thick-down-filled" %}}</span><br />arrow-thick-down-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-thick-down" %}}</span><br />arrow-thick-down</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-thick-left-filled" %}}</span><br />arrow-thick-left-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-thick-left" %}}</span><br />arrow-thick-left</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-thick-right-filled" %}}</span><br />arrow-thick-right-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-thick-right" %}}</span><br />arrow-thick-right</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-thick-up-filled" %}}</span><br />arrow-thick-up-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-thick-up" %}}</span><br />arrow-thick-up</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-triangle-down-filled" %}}</span><br />arrow-triangle-down-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-triangle-down" %}}</span><br />arrow-triangle-down</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-triangle-left-filled" %}}</span><br />arrow-triangle-left-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-triangle-left" %}}</span><br />arrow-triangle-left</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-triangle-right-filled" %}}</span><br />arrow-triangle-right-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-triangle-right" %}}</span><br />arrow-triangle-right</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-triangle-up-filled" %}}</span><br />arrow-triangle-up-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-triangle-up" %}}</span><br />arrow-triangle-up</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrow-up" %}}</span><br />arrow-up</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="arrows-retweet" %}}</span><br />arrows-retweet</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="asterisk" %}}</span><br />asterisk</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="badge-filled" %}}</span><br />badge-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="badge" %}}</span><br />badge</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="bank-filled" %}}</span><br />bank-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="bank" %}}</span><br />bank</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="barcode" %}}</span><br />barcode</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="binoculars-filled" %}}</span><br />binoculars-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="binoculars" %}}</span><br />binoculars</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="bitcoin" %}}</span><br />bitcoin</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="blockquote-filled" %}}</span><br />blockquote-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="blockquote" %}}</span><br />blockquote</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="blocks-filled" %}}</span><br />blocks-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="blocks" %}}</span><br />blocks</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="book-closed-filled" %}}</span><br />book-closed-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="book-closed" %}}</span><br />book-closed</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="book-open-filled" %}}</span><br />book-open-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="book-open" %}}</span><br />book-open</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="bookmark-filled" %}}</span><br />bookmark-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="bookmark" %}}</span><br />bookmark</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="box-cog-filled" %}}</span><br />box-cog-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="box-cog" %}}</span><br />box-cog</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="box-download-filled" %}}</span><br />box-download-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="box-download" %}}</span><br />box-download</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="brain-filled" %}}</span><br />brain-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="brain" %}}</span><br />brain</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="branch-line-filled" %}}</span><br />branch-line-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="branch-line" %}}</span><br />branch-line</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="briefcase-filled" %}}</span><br />briefcase-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="briefcase-finances-filled" %}}</span><br />briefcase-finances-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="briefcase-finances" %}}</span><br />briefcase-finances</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="briefcase" %}}</span><br />briefcase</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="browser-cloud-filled" %}}</span><br />browser-cloud-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="browser-cloud" %}}</span><br />browser-cloud</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="browser-code-filled" %}}</span><br />browser-code-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="browser-code" %}}</span><br />browser-code</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="browser-dashboard-filled" %}}</span><br />browser-dashboard-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="browser-dashboard" %}}</span><br />browser-dashboard</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="browser-filled" %}}</span><br />browser-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="browser-low-code-filled" %}}</span><br />browser-low-code-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="browser-low-code" %}}</span><br />browser-low-code</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="browser-no-code-filled" %}}</span><br />browser-no-code-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="browser-no-code" %}}</span><br />browser-no-code</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="browser-page-text-filled" %}}</span><br />browser-page-text-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="browser-page-text" %}}</span><br />browser-page-text</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="browser-search-filled" %}}</span><br />browser-search-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="browser-search" %}}</span><br />browser-search</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="browser-trophy-filled" %}}</span><br />browser-trophy-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="browser-trophy" %}}</span><br />browser-trophy</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="browser" %}}</span><br />browser</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="bug-filled" %}}</span><br />bug-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="bug" %}}</span><br />bug</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="calendar-1-filled" %}}</span><br />calendar-1-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="calendar-1" %}}</span><br />calendar-1</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="calendar-filled" %}}</span><br />calendar-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="calendar" %}}</span><br />calendar</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="camera-filled" %}}</span><br />camera-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="camera" %}}</span><br />camera</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="camping-tent-filled" %}}</span><br />camping-tent-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="camping-tent" %}}</span><br />camping-tent</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="cap-filled" %}}</span><br />cap-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cap" %}}</span><br />cap</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="car-filled" %}}</span><br />car-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="car" %}}</span><br />car</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cards-apps-filled" %}}</span><br />cards-apps-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="cards-apps" %}}</span><br />cards-apps</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cards-users-filled" %}}</span><br />cards-users-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cards-users" %}}</span><br />cards-users</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cash-payment-bill-2-filled" %}}</span><br />cash-payment-bill-2-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cash-payment-bill-2" %}}</span><br />cash-payment-bill-2</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="cash-payment-bill-filled" %}}</span><br />cash-payment-bill-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cash-payment-bill" %}}</span><br />cash-payment-bill</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cat-filled" %}}</span><br />cat-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cat" %}}</span><br />cat</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cd-filled" %}}</span><br />cd-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="cd" %}}</span><br />cd</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="charger-filled" %}}</span><br />charger-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="charger" %}}</span><br />charger</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="checkmark-circle-filled" %}}</span><br />checkmark-circle-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="checkmark-circle" %}}</span><br />checkmark-circle</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="checkmark-filled" %}}</span><br />checkmark-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="checkmark-shield-filled" %}}</span><br />checkmark-shield-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="checkmark-shield" %}}</span><br />checkmark-shield</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="checkmark-square-filled" %}}</span><br />checkmark-square-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="checkmark-square" %}}</span><br />checkmark-square</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="checkmark" %}}</span><br />checkmark</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="chevron-down-default" %}}</span><br />chevron-down-default</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="chevron-down" %}}</span><br />chevron-down</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="chevron-left-default" %}}</span><br />chevron-left-default</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="chevron-left" %}}</span><br />chevron-left</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="chevron-right-default" %}}</span><br />chevron-right-default</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="chevron-right" %}}</span><br />chevron-right</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="chevron-up-default" %}}</span><br />chevron-up-default</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="chevron-up" %}}</span><br />chevron-up</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cicd" %}}</span><br />cicd</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="circle-dash" %}}</span><br />circle-dash</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="circle" %}}</span><br />circle</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="city-hall-filled" %}}</span><br />city-hall-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="city-hall" %}}</span><br />city-hall</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="clipboard-shield-exclamation-filled" %}}</span><br />clipboard-shield-exclamation-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="clipboard-shield-exclamation" %}}</span><br />clipboard-shield-exclamation</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="clipboard-shield-search-filled" %}}</span><br />clipboard-shield-search-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="clipboard-shield-search" %}}</span><br />clipboard-shield-search</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="closed-caption-filled" %}}</span><br />closed-caption-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="closed-caption" %}}</span><br />closed-caption</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-check-filled" %}}</span><br />cloud-check-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-check" %}}</span><br />cloud-check</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-data-transfer-filled" %}}</span><br />cloud-data-transfer-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-data-transfer" %}}</span><br />cloud-data-transfer</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-disable-filled" %}}</span><br />cloud-disable-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-disable" %}}</span><br />cloud-disable</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-download-filled" %}}</span><br />cloud-download-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-download" %}}</span><br />cloud-download</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-filled" %}}</span><br />cloud-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-lock-filled" %}}</span><br />cloud-lock-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-lock" %}}</span><br />cloud-lock</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-off-filled" %}}</span><br />cloud-off-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-off" %}}</span><br />cloud-off</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-office-filled" %}}</span><br />cloud-office-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-office" %}}</span><br />cloud-office</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-refresh-filled" %}}</span><br />cloud-refresh-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-refresh" %}}</span><br />cloud-refresh</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-remove-filled" %}}</span><br />cloud-remove-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-remove" %}}</span><br />cloud-remove</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-repository-filled" %}}</span><br />cloud-repository-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-repository" %}}</span><br />cloud-repository</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-run-filled" %}}</span><br />cloud-run-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-run" %}}</span><br />cloud-run</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-sap-filled" %}}</span><br />cloud-sap-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-sap" %}}</span><br />cloud-sap</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-search-filled" %}}</span><br />cloud-search-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-search" %}}</span><br />cloud-search</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-settings-filled" %}}</span><br />cloud-settings-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-settings" %}}</span><br />cloud-settings</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-stack-it-filled" %}}</span><br />cloud-stack-it-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-stack-it" %}}</span><br />cloud-stack-it</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-subtract-filled" %}}</span><br />cloud-subtract-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-subtract" %}}</span><br />cloud-subtract</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-sync-filled" %}}</span><br />cloud-sync-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-sync" %}}</span><br />cloud-sync</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-upload-filled" %}}</span><br />cloud-upload-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-upload" %}}</span><br />cloud-upload</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-warning-filled" %}}</span><br />cloud-warning-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud-warning" %}}</span><br />cloud-warning</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cloud" %}}</span><br />cloud</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="cog-filled" %}}</span><br />cog-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cog-hand-give-filled" %}}</span><br />cog-hand-give-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cog-hand-give" %}}</span><br />cog-hand-give</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cog-play-filled" %}}</span><br />cog-play-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cog-play" %}}</span><br />cog-play</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="cog-shield-filled" %}}</span><br />cog-shield-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cog-shield" %}}</span><br />cog-shield</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cog" %}}</span><br />cog</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="color-bucket-brush-filled" %}}</span><br />color-bucket-brush-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="color-bucket-brush" %}}</span><br />color-bucket-brush</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="color-contrast" %}}</span><br />color-contrast</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="color-painting-palette-filled" %}}</span><br />color-painting-palette-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="color-painting-palette" %}}</span><br />color-painting-palette</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="compass-directions-filled" %}}</span><br />compass-directions-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="compass-directions" %}}</span><br />compass-directions</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="compressed-filled" %}}</span><br />compressed-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="compressed" %}}</span><br />compressed</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="computer-chip-filled" %}}</span><br />computer-chip-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="computer-chip" %}}</span><br />computer-chip</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="computer-retro-filled" %}}</span><br />computer-retro-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="computer-retro" %}}</span><br />computer-retro</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="connect-1-filled" %}}</span><br />connect-1-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="connect-1" %}}</span><br />connect-1</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="connect-filled" %}}</span><br />connect-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="connect" %}}</span><br />connect</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="console-terminal-filled" %}}</span><br />console-terminal-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="console-terminal" %}}</span><br />console-terminal</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="consumer-products-filled" %}}</span><br />consumer-products-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="consumer-products" %}}</span><br />consumer-products</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="contacts-filled" %}}</span><br />contacts-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="contacts" %}}</span><br />contacts</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="contrast-filled" %}}</span><br />contrast-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="contrast" %}}</span><br />contrast</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-backward-filled" %}}</span><br />controls-backward-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-backward" %}}</span><br />controls-backward</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-eject-filled" %}}</span><br />controls-eject-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-eject" %}}</span><br />controls-eject</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-fast-backward-filled" %}}</span><br />controls-fast-backward-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-fast-backward" %}}</span><br />controls-fast-backward</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-fast-forward-filled" %}}</span><br />controls-fast-forward-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-fast-forward" %}}</span><br />controls-fast-forward</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-forward-filled" %}}</span><br />controls-forward-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-forward" %}}</span><br />controls-forward</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-pause-filled" %}}</span><br />controls-pause-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-pause" %}}</span><br />controls-pause</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-play-filled" %}}</span><br />controls-play-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-play" %}}</span><br />controls-play</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-record" %}}</span><br />controls-record</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-shuffle" %}}</span><br />controls-shuffle</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-step-backward-filled" %}}</span><br />controls-step-backward-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-step-backward" %}}</span><br />controls-step-backward</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-step-forward-filled" %}}</span><br />controls-step-forward-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-step-forward" %}}</span><br />controls-step-forward</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-stop-filled" %}}</span><br />controls-stop-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-stop" %}}</span><br />controls-stop</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-volume-full-filled" %}}</span><br />controls-volume-full-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-volume-full" %}}</span><br />controls-volume-full</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-volume-low-filled" %}}</span><br />controls-volume-low-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-volume-low" %}}</span><br />controls-volume-low</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-volume-off-filled" %}}</span><br />controls-volume-off-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="controls-volume-off" %}}</span><br />controls-volume-off</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="conversation-question-warning-filled" %}}</span><br />conversation-question-warning-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="conversation-question-warning" %}}</span><br />conversation-question-warning</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="conveyor-belt" %}}</span><br />conveyor-belt</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cookie-filled" %}}</span><br />cookie-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="cookie" %}}</span><br />cookie</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="copy-filled" %}}</span><br />copy-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="copy" %}}</span><br />copy</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="crane-filled" %}}</span><br />crane-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="crane" %}}</span><br />crane</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="create" %}}</span><br />create</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="credit-card-filled" %}}</span><br />credit-card-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="credit-card" %}}</span><br />credit-card</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="credits-cloud-filled" %}}</span><br />credits-cloud-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="credits-cloud" %}}</span><br />credits-cloud</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="crossroad-sign-filled" %}}</span><br />crossroad-sign-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="crossroad-sign" %}}</span><br />crossroad-sign</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="crown-filled" %}}</span><br />crown-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="crown" %}}</span><br />crown</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cube-card-filled" %}}</span><br />cube-card-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="cube-card-multiple-filled" %}}</span><br />cube-card-multiple-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cube-card-multiple" %}}</span><br />cube-card-multiple</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cube-card" %}}</span><br />cube-card</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cube-cog-filled" %}}</span><br />cube-cog-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cube-cog" %}}</span><br />cube-cog</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="cube-filled" %}}</span><br />cube-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cube" %}}</span><br />cube</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cutlery-filled" %}}</span><br />cutlery-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cutlery" %}}</span><br />cutlery</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="cyber-security-filled" %}}</span><br />cyber-security-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="cyber-security" %}}</span><br />cyber-security</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="dashboard-filled" %}}</span><br />dashboard-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="dashboard" %}}</span><br />dashboard</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="data-transfer" %}}</span><br />data-transfer</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="database-arrow-down-filled" %}}</span><br />database-arrow-down-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="database-arrow-down" %}}</span><br />database-arrow-down</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="database-arrow-up-filled" %}}</span><br />database-arrow-up-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="database-arrow-up" %}}</span><br />database-arrow-up</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="database-filled" %}}</span><br />database-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="database" %}}</span><br />database</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="decrease" %}}</span><br />decrease</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="deploy-filled" %}}</span><br />deploy-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="deploy-server-filled" %}}</span><br />deploy-server-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="deploy-server" %}}</span><br />deploy-server</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="deploy" %}}</span><br />deploy</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="desktop-filled" %}}</span><br />desktop-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="desktop" %}}</span><br />desktop</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="diamond-filled" %}}</span><br />diamond-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="diamond" %}}</span><br />diamond</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="direction-buttons-arrows-filled" %}}</span><br />direction-buttons-arrows-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="direction-buttons-arrows" %}}</span><br />direction-buttons-arrows</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="direction-buttons-filled" %}}</span><br />direction-buttons-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="direction-buttons" %}}</span><br />direction-buttons</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="disable" %}}</span><br />disable</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="document-audio-wave-filled" %}}</span><br />document-audio-wave-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="document-audio-wave" %}}</span><br />document-audio-wave</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="document-filled" %}}</span><br />document-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="document-open-filled" %}}</span><br />document-open-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="document-open" %}}</span><br />document-open</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="document-pie-chart-filled" %}}</span><br />document-pie-chart-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="document-pie-chart" %}}</span><br />document-pie-chart</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="document-play-filled" %}}</span><br />document-play-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="document-play" %}}</span><br />document-play</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="document-save-filled" %}}</span><br />document-save-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="document-save" %}}</span><br />document-save</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="document-text-filled" %}}</span><br />document-text-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="document-text" %}}</span><br />document-text</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="document" %}}</span><br />document</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="dollar" %}}</span><br />dollar</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="double-bed-filled" %}}</span><br />double-bed-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="double-bed" %}}</span><br />double-bed</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="double-chevron-left" %}}</span><br />double-chevron-left</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="double-chevron-right" %}}</span><br />double-chevron-right</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="double-helix" %}}</span><br />double-helix</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="double-slim-chevron-up" %}}</span><br />double-slim-chevron-up</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="download-bottom" %}}</span><br />download-bottom</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="download-button" %}}</span><br />download-button</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="duplicate-filled" %}}</span><br />duplicate-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="duplicate" %}}</span><br />duplicate</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="ear-filled" %}}</span><br />ear-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="ear" %}}</span><br />ear</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="eight-filled" %}}</span><br />eight-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="eight" %}}</span><br />eight</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="email-filled" %}}</span><br />email-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="email" %}}</span><br />email</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="entity-filled" %}}</span><br />entity-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="entity" %}}</span><br />entity</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="environment-start-filled" %}}</span><br />environment-start-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="environment-start" %}}</span><br />environment-start</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="environment-stop-filled" %}}</span><br />environment-stop-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="environment-stop" %}}</span><br />environment-stop</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="environments-filled" %}}</span><br />environments-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="environments" %}}</span><br />environments</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="equalizer-filled" %}}</span><br />equalizer-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="equalizer" %}}</span><br />equalizer</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="eraser-filled" %}}</span><br />eraser-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="eraser" %}}</span><br />eraser</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="euro" %}}</span><br />euro</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="event-filled" %}}</span><br />event-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="event" %}}</span><br />event</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="expand-horizontal" %}}</span><br />expand-horizontal</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="expand-vertical" %}}</span><br />expand-vertical</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="external" %}}</span><br />external</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="facebook" %}}</span><br />facebook</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="factory-filled" %}}</span><br />factory-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="factory" %}}</span><br />factory</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="fallback-filled" %}}</span><br />fallback-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="fallback" %}}</span><br />fallback</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="file-csv-filled" %}}</span><br />file-csv-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="file-csv" %}}</span><br />file-csv</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="file-log-filled" %}}</span><br />file-log-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="file-log" %}}</span><br />file-log</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="file-mpk-filled" %}}</span><br />file-mpk-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="file-mpk" %}}</span><br />file-mpk</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="file-pdf-filled" %}}</span><br />file-pdf-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="file-pdf" %}}</span><br />file-pdf</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="file-txt-filled" %}}</span><br />file-txt-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="file-txt" %}}</span><br />file-txt</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="file-zip-filled" %}}</span><br />file-zip-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="file-zip" %}}</span><br />file-zip</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="film-filled" %}}</span><br />film-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="film" %}}</span><br />film</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="filter-filled" %}}</span><br />filter-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="filter" %}}</span><br />filter</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="fire-filled" %}}</span><br />fire-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="fire" %}}</span><br />fire</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="firewall-filled" %}}</span><br />firewall-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="firewall" %}}</span><br />firewall</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="five-filled" %}}</span><br />five-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="five" %}}</span><br />five</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="flag-filled" %}}</span><br />flag-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="flag" %}}</span><br />flag</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="flash-filled" %}}</span><br />flash-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="flash" %}}</span><br />flash</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="flask-conical-filled" %}}</span><br />flask-conical-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="flask-conical" %}}</span><br />flask-conical</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="floppy-disk-arrow-down-filled" %}}</span><br />floppy-disk-arrow-down-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="floppy-disk-arrow-down" %}}</span><br />floppy-disk-arrow-down</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="floppy-disk-arrow-up-filled" %}}</span><br />floppy-disk-arrow-up-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="floppy-disk-arrow-up" %}}</span><br />floppy-disk-arrow-up</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="floppy-disk-checkmark-filled" %}}</span><br />floppy-disk-checkmark-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="floppy-disk-checkmark" %}}</span><br />floppy-disk-checkmark</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="floppy-disk-filled" %}}</span><br />floppy-disk-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="floppy-disk-group-filled" %}}</span><br />floppy-disk-group-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="floppy-disk-group" %}}</span><br />floppy-disk-group</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="floppy-disk-remove-filled" %}}</span><br />floppy-disk-remove-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="floppy-disk-remove" %}}</span><br />floppy-disk-remove</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="floppy-disk" %}}</span><br />floppy-disk</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="folder-closed-filled" %}}</span><br />folder-closed-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="folder-closed" %}}</span><br />folder-closed</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="folder-open-filled" %}}</span><br />folder-open-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="folder-open" %}}</span><br />folder-open</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="folder-upload-filled" %}}</span><br />folder-upload-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="folder-upload" %}}</span><br />folder-upload</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="four-filled" %}}</span><br />four-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="four" %}}</span><br />four</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="fruit-apple-filled" %}}</span><br />fruit-apple-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="fruit-apple" %}}</span><br />fruit-apple</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="fullscreen" %}}</span><br />fullscreen</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="gift-filled" %}}</span><br />gift-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="gift" %}}</span><br />gift</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="git-filled" %}}</span><br />git-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="git" %}}</span><br />git</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="github" %}}</span><br />github</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="globe-1-filled" %}}</span><br />globe-1-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="globe-1" %}}</span><br />globe-1</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="globe-filled" %}}</span><br />globe-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="globe" %}}</span><br />globe</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="google" %}}</span><br />google</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="graduation-hat-filled" %}}</span><br />graduation-hat-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="graduation-hat" %}}</span><br />graduation-hat</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="graphql" %}}</span><br />graphql</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hammer-filled" %}}</span><br />hammer-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hammer-wrench-filled" %}}</span><br />hammer-wrench-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hammer-wrench" %}}</span><br />hammer-wrench</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="hammer" %}}</span><br />hammer</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hand-badge-filled" %}}</span><br />hand-badge-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hand-badge" %}}</span><br />hand-badge</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hand-cog-filled" %}}</span><br />hand-cog-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hand-cog" %}}</span><br />hand-cog</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="hand-compass-filled" %}}</span><br />hand-compass-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hand-compass" %}}</span><br />hand-compass</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hand-diamond-filled" %}}</span><br />hand-diamond-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hand-diamond" %}}</span><br />hand-diamond</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hand-down-filled" %}}</span><br />hand-down-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="hand-down" %}}</span><br />hand-down</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hand-headphones-filled" %}}</span><br />hand-headphones-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hand-headphones" %}}</span><br />hand-headphones</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hand-horse-filled" %}}</span><br />hand-horse-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hand-horse" %}}</span><br />hand-horse</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="hand-left-filled" %}}</span><br />hand-left-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hand-left" %}}</span><br />hand-left</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hand-magnifying-glass-data-filled" %}}</span><br />hand-magnifying-glass-data-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hand-magnifying-glass-data" %}}</span><br />hand-magnifying-glass-data</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hand-right-filled" %}}</span><br />hand-right-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="hand-right" %}}</span><br />hand-right</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hand-shield-check-filled" %}}</span><br />hand-shield-check-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hand-shield-check" %}}</span><br />hand-shield-check</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hand-up-filled" %}}</span><br />hand-up-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hand-up" %}}</span><br />hand-up</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="hands-clapping-filled" %}}</span><br />hands-clapping-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hands-clapping" %}}</span><br />hands-clapping</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hands-star-filled" %}}</span><br />hands-star-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hands-star" %}}</span><br />hands-star</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="handshake-business-filled" %}}</span><br />handshake-business-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="handshake-business" %}}</span><br />handshake-business</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hard-drive-2-filled" %}}</span><br />hard-drive-2-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hard-drive-2" %}}</span><br />hard-drive-2</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hard-drive-filled" %}}</span><br />hard-drive-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hard-drive" %}}</span><br />hard-drive</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="headphones-filled" %}}</span><br />headphones-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="headphones-mic-filled" %}}</span><br />headphones-mic-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="headphones-mic" %}}</span><br />headphones-mic</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="headphones" %}}</span><br />headphones</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="heart-broken-filled" %}}</span><br />heart-broken-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="heart-broken" %}}</span><br />heart-broken</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="heart-filled" %}}</span><br />heart-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="heart" %}}</span><br />heart</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hierarchy-files-filled" %}}</span><br />hierarchy-files-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hierarchy-files" %}}</span><br />hierarchy-files</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="home-filled" %}}</span><br />home-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="home" %}}</span><br />home</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="horizontal-rule-filled" %}}</span><br />horizontal-rule-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="horizontal-rule" %}}</span><br />horizontal-rule</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hourglass-filled" %}}</span><br />hourglass-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="hourglass" %}}</span><br />hourglass</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="household-appliances-filled" %}}</span><br />household-appliances-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="household-appliances" %}}</span><br />household-appliances</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="hyperlink" %}}</span><br />hyperlink</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="id-card-filled" %}}</span><br />id-card-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="id-card-mx-filled" %}}</span><br />id-card-mx-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="id-card-mx" %}}</span><br />id-card-mx</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="id-card" %}}</span><br />id-card</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="id-circle-filled" %}}</span><br />id-circle-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="id-circle" %}}</span><br />id-circle</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="image-collection-filled" %}}</span><br />image-collection-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="image-collection" %}}</span><br />image-collection</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="image-filled" %}}</span><br />image-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="image" %}}</span><br />image</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="images-filled" %}}</span><br />images-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="images" %}}</span><br />images</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="increase" %}}</span><br />increase</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="info-circle-filled" %}}</span><br />info-circle-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="info-circle" %}}</span><br />info-circle</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="instagram" %}}</span><br />instagram</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="key-cog-filled" %}}</span><br />key-cog-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="key-cog" %}}</span><br />key-cog</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="key-filled" %}}</span><br />key-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="key" %}}</span><br />key</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="laptop-filled" %}}</span><br />laptop-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="laptop-tablet-filled" %}}</span><br />laptop-tablet-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="laptop-tablet" %}}</span><br />laptop-tablet</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="laptop" %}}</span><br />laptop</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="layout-1-filled" %}}</span><br />layout-1-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="layout-1" %}}</span><br />layout-1</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="layout-2-filled" %}}</span><br />layout-2-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="layout-2" %}}</span><br />layout-2</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="layout-column-filled" %}}</span><br />layout-column-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="layout-column" %}}</span><br />layout-column</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="layout-filled" %}}</span><br />layout-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="layout-horizontal-filled" %}}</span><br />layout-horizontal-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="layout-horizontal" %}}</span><br />layout-horizontal</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="layout-list-filled" %}}</span><br />layout-list-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="layout-list" %}}</span><br />layout-list</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="layout-rounded-1-filled" %}}</span><br />layout-rounded-1-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="layout-rounded-1" %}}</span><br />layout-rounded-1</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="layout-rounded-filled" %}}</span><br />layout-rounded-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="layout-rounded" %}}</span><br />layout-rounded</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="layout" %}}</span><br />layout</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="leaf-filled" %}}</span><br />leaf-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="leaf" %}}</span><br />leaf</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="legal-certificate-filled" %}}</span><br />legal-certificate-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="legal-certificate" %}}</span><br />legal-certificate</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="lego-block-stack-filled" %}}</span><br />lego-block-stack-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="lego-block-stack" %}}</span><br />lego-block-stack</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="light-bulb-shine-filled" %}}</span><br />light-bulb-shine-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="light-bulb-shine" %}}</span><br />light-bulb-shine</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="linkedin" %}}</span><br />linkedin</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="list-bullets" %}}</span><br />list-bullets</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="list-numbers" %}}</span><br />list-numbers</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="location-pin-filled" %}}</span><br />location-pin-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="location-pin" %}}</span><br />location-pin</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="lock-filled" %}}</span><br />lock-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="lock-key-filled" %}}</span><br />lock-key-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="lock-key" %}}</span><br />lock-key</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="lock-shield-filled" %}}</span><br />lock-shield-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="lock-shield" %}}</span><br />lock-shield</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="lock" %}}</span><br />lock</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="login-1-filled" %}}</span><br />login-1-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="login-1" %}}</span><br />login-1</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="login-2-filled" %}}</span><br />login-2-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="login-2" %}}</span><br />login-2</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="login" %}}</span><br />login</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="logistics-filled" %}}</span><br />logistics-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="logistics" %}}</span><br />logistics</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="logout-1-filled" %}}</span><br />logout-1-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="logout-1" %}}</span><br />logout-1</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="logout" %}}</span><br />logout</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="luggage-travel-filled" %}}</span><br />luggage-travel-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="luggage-travel" %}}</span><br />luggage-travel</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="magnet-filled" %}}</span><br />magnet-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="magnet" %}}</span><br />magnet</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="map-location-pin-filled" %}}</span><br />map-location-pin-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="map-location-pin" %}}</span><br />map-location-pin</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="martini-filled" %}}</span><br />martini-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="martini" %}}</span><br />martini</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="megaphone-filled" %}}</span><br />megaphone-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="megaphone" %}}</span><br />megaphone</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="mendix-browser-filled" %}}</span><br />mendix-browser-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="mendix-browser" %}}</span><br />mendix-browser</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="mendix-cloud-filled" %}}</span><br />mendix-cloud-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="mendix-cloud" %}}</span><br />mendix-cloud</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="mendix-icon-filled" %}}</span><br />mendix-icon-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="mendix-icon" %}}</span><br />mendix-icon</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="message-bubble-add-filled" %}}</span><br />message-bubble-add-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="message-bubble-add" %}}</span><br />message-bubble-add</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="message-bubble-check-filled" %}}</span><br />message-bubble-check-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="message-bubble-check" %}}</span><br />message-bubble-check</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="message-bubble-disable-filled" %}}</span><br />message-bubble-disable-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="message-bubble-disable" %}}</span><br />message-bubble-disable</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="message-bubble-edit-filled" %}}</span><br />message-bubble-edit-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="message-bubble-edit" %}}</span><br />message-bubble-edit</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="message-bubble-filled" %}}</span><br />message-bubble-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="message-bubble-information-filled" %}}</span><br />message-bubble-information-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="message-bubble-information" %}}</span><br />message-bubble-information</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="message-bubble-quotation-filled" %}}</span><br />message-bubble-quotation-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="message-bubble-quotation" %}}</span><br />message-bubble-quotation</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="message-bubble-remove-filled" %}}</span><br />message-bubble-remove-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="message-bubble-remove" %}}</span><br />message-bubble-remove</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="message-bubble-sync-filled" %}}</span><br />message-bubble-sync-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="message-bubble-sync" %}}</span><br />message-bubble-sync</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="message-bubble-typing-filled" %}}</span><br />message-bubble-typing-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="message-bubble-typing" %}}</span><br />message-bubble-typing</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="message-bubble" %}}</span><br />message-bubble</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="miscommunication-filled" %}}</span><br />miscommunication-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="miscommunication" %}}</span><br />miscommunication</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="mobile-phone-filled" %}}</span><br />mobile-phone-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="mobile-phone" %}}</span><br />mobile-phone</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="modal-window-filled" %}}</span><br />modal-window-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="modal-window" %}}</span><br />modal-window</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="money-bag-filled" %}}</span><br />money-bag-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="money-bag" %}}</span><br />money-bag</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="money-filled" %}}</span><br />money-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="money" %}}</span><br />money</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="monitor-camera-filled" %}}</span><br />monitor-camera-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="monitor-camera" %}}</span><br />monitor-camera</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="monitor-cash-filled" %}}</span><br />monitor-cash-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="monitor-cash" %}}</span><br />monitor-cash</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="monitor-e-learning-filled" %}}</span><br />monitor-e-learning-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="monitor-e-learning" %}}</span><br />monitor-e-learning</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="monitor-filled" %}}</span><br />monitor-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="monitor-pie-line-graph-filled" %}}</span><br />monitor-pie-line-graph-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="monitor-pie-line-graph" %}}</span><br />monitor-pie-line-graph</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="monitor" %}}</span><br />monitor</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="moon-new-filled" %}}</span><br />moon-new-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="moon-new" %}}</span><br />moon-new</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="mountain-flag-filled" %}}</span><br />mountain-flag-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="mountain-flag" %}}</span><br />mountain-flag</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="move-down" %}}</span><br />move-down</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="move-left" %}}</span><br />move-left</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="move-right" %}}</span><br />move-right</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="move-up" %}}</span><br />move-up</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="music-note-filled" %}}</span><br />music-note-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="music-note" %}}</span><br />music-note</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="navigation-menu" %}}</span><br />navigation-menu</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="navigation-next" %}}</span><br />navigation-next</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="newspaper-blog-filled" %}}</span><br />newspaper-blog-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="newspaper-blog" %}}</span><br />newspaper-blog</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="nine-filled" %}}</span><br />nine-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="nine" %}}</span><br />nine</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="notes-checklist-filled" %}}</span><br />notes-checklist-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="notes-checklist-flip-filled" %}}</span><br />notes-checklist-flip-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="notes-checklist-flip" %}}</span><br />notes-checklist-flip</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="notes-checklist" %}}</span><br />notes-checklist</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="notes-paper-edit-filled" %}}</span><br />notes-paper-edit-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="notes-paper-edit" %}}</span><br />notes-paper-edit</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="notes-paper-text-filled" %}}</span><br />notes-paper-text-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="notes-paper-text" %}}</span><br />notes-paper-text</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="odata-filled" %}}</span><br />odata-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="odata" %}}</span><br />odata</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="office-sheet-filled" %}}</span><br />office-sheet-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="office-sheet" %}}</span><br />office-sheet</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="one-filled" %}}</span><br />one-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="one" %}}</span><br />one</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="org-chart-filled" %}}</span><br />org-chart-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="org-chart" %}}</span><br />org-chart</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="outdent" %}}</span><br />outdent</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="paper-clipboard-filled" %}}</span><br />paper-clipboard-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="paper-clipboard" %}}</span><br />paper-clipboard</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="paper-holder-filled" %}}</span><br />paper-holder-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="paper-holder-full-filled" %}}</span><br />paper-holder-full-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="paper-holder-full" %}}</span><br />paper-holder-full</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="paper-holder" %}}</span><br />paper-holder</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="paper-list-filled" %}}</span><br />paper-list-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="paper-list" %}}</span><br />paper-list</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="paper-plane-filled" %}}</span><br />paper-plane-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="paper-plane" %}}</span><br />paper-plane</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="paperclip" %}}</span><br />paperclip</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="park-filled" %}}</span><br />park-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="park" %}}</span><br />park</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="password-lock-filled" %}}</span><br />password-lock-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="password-lock" %}}</span><br />password-lock</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="password-type-filled" %}}</span><br />password-type-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="password-type" %}}</span><br />password-type</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="paste-filled" %}}</span><br />paste-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="paste" %}}</span><br />paste</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="pen-write-paper-filled" %}}</span><br />pen-write-paper-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="pen-write-paper" %}}</span><br />pen-write-paper</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="pencil-filled" %}}</span><br />pencil-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="pencil-write-paper-filled" %}}</span><br />pencil-write-paper-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="pencil-write-paper" %}}</span><br />pencil-write-paper</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="pencil" %}}</span><br />pencil</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="performance-graph-calculator-filled" %}}</span><br />performance-graph-calculator-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="performance-graph-calculator" %}}</span><br />performance-graph-calculator</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="phone-filled" %}}</span><br />phone-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="phone-handset-filled" %}}</span><br />phone-handset-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="phone-handset" %}}</span><br />phone-handset</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="phone" %}}</span><br />phone</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="piggy-bank-filled" %}}</span><br />piggy-bank-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="piggy-bank" %}}</span><br />piggy-bank</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="pin-filled" %}}</span><br />pin-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="pin" %}}</span><br />pin</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="pipeline-filled" %}}</span><br />pipeline-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="pipeline-plus-filled" %}}</span><br />pipeline-plus-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="pipeline-plus" %}}</span><br />pipeline-plus</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="pipeline-rerun-filled" %}}</span><br />pipeline-rerun-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="pipeline-rerun" %}}</span><br />pipeline-rerun</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="pipeline-run-cancel-filled" %}}</span><br />pipeline-run-cancel-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="pipeline-run-cancel" %}}</span><br />pipeline-run-cancel</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="pipeline-run-filled" %}}</span><br />pipeline-run-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="pipeline-run" %}}</span><br />pipeline-run</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="pipeline" %}}</span><br />pipeline</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="plane-ticket-filled" %}}</span><br />plane-ticket-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="plane-ticket" %}}</span><br />plane-ticket</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="platypus-filled" %}}</span><br />platypus-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="platypus" %}}</span><br />platypus</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="play-circle-filled" %}}</span><br />play-circle-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="play-circle" %}}</span><br />play-circle</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="plug-filled" %}}</span><br />plug-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="plug" %}}</span><br />plug</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="pound-sterling" %}}</span><br />pound-sterling</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="power-button" %}}</span><br />power-button</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="print-filled" %}}</span><br />print-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="print" %}}</span><br />print</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="private-platform-filled" %}}</span><br />private-platform-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="private-platform" %}}</span><br />private-platform</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="progress-bars-filled" %}}</span><br />progress-bars-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="progress-bars" %}}</span><br />progress-bars</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="qr-code-filled" %}}</span><br />qr-code-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="qr-code" %}}</span><br />qr-code</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="question-circle-filled" %}}</span><br />question-circle-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="question-circle" %}}</span><br />question-circle</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="react" %}}</span><br />react</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="redo" %}}</span><br />redo</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="refresh" %}}</span><br />refresh</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="remove-circle-filled" %}}</span><br />remove-circle-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="remove-circle" %}}</span><br />remove-circle</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="remove-shield-filled" %}}</span><br />remove-shield-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="remove-shield" %}}</span><br />remove-shield</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="remove" %}}</span><br />remove</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="repeat" %}}</span><br />repeat</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="repository-filled" %}}</span><br />repository-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="repository-git-filled" %}}</span><br />repository-git-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="repository-git" %}}</span><br />repository-git</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="repository-mx-filled" %}}</span><br />repository-mx-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="repository-mx" %}}</span><br />repository-mx</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="repository-package-filled" %}}</span><br />repository-package-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="repository-package" %}}</span><br />repository-package</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="repository" %}}</span><br />repository</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="resize-full" %}}</span><br />resize-full</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="resize-small" %}}</span><br />resize-small</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="road-filled" %}}</span><br />road-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="road" %}}</span><br />road</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="robot-head-filled" %}}</span><br />robot-head-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="robot-head" %}}</span><br />robot-head</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="rocket-filled" %}}</span><br />rocket-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="rocket" %}}</span><br />rocket</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="rss-feed" %}}</span><br />rss-feed</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="ruble" %}}</span><br />ruble</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="scim" %}}</span><br />scim</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="scissors" %}}</span><br />scissors</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="search" %}}</span><br />search</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="server-build-filled" %}}</span><br />server-build-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="server-build" %}}</span><br />server-build</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="server-cloud-filled" %}}</span><br />server-cloud-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="server-cloud" %}}</span><br />server-cloud</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="server-filled" %}}</span><br />server-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="server" %}}</span><br />server</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="settings-slider-1-filled" %}}</span><br />settings-slider-1-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="settings-slider-1" %}}</span><br />settings-slider-1</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="settings-slider-filled" %}}</span><br />settings-slider-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="settings-slider" %}}</span><br />settings-slider</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="seven-filled" %}}</span><br />seven-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="seven" %}}</span><br />seven</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="share-1-filled" %}}</span><br />share-1-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="share-1" %}}</span><br />share-1</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="share-arrow-filled" %}}</span><br />share-arrow-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="share-arrow" %}}</span><br />share-arrow</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="share" %}}</span><br />share</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="shield-broken-filled" %}}</span><br />shield-broken-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="shield-broken" %}}</span><br />shield-broken</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="shipment-box-filled" %}}</span><br />shipment-box-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="shipment-box" %}}</span><br />shipment-box</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="shopping-cart-filled" %}}</span><br />shopping-cart-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="shopping-cart-full-filled" %}}</span><br />shopping-cart-full-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="shopping-cart-full" %}}</span><br />shopping-cart-full</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="shopping-cart" %}}</span><br />shopping-cart</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="shortage-filled" %}}</span><br />shortage-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="shortage" %}}</span><br />shortage</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="sidebar-close-filled" %}}</span><br />sidebar-close-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="sidebar-close" %}}</span><br />sidebar-close</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="sidebar-open-filled" %}}</span><br />sidebar-open-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="sidebar-open" %}}</span><br />sidebar-open</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="siemens" %}}</span><br />siemens</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="signal-full-filled" %}}</span><br />signal-full-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="signal-full" %}}</span><br />signal-full</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="six-filled" %}}</span><br />six-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="six" %}}</span><br />six</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="slack" %}}</span><br />slack</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="slim-chevron-down" %}}</span><br />slim-chevron-down</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="slim-chevron-up" %}}</span><br />slim-chevron-up</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="slim-equal-sign" %}}</span><br />slim-equal-sign</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="smart-house-garage-filled" %}}</span><br />smart-house-garage-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="smart-house-garage" %}}</span><br />smart-house-garage</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="smart-watch-circle-filled" %}}</span><br />smart-watch-circle-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="smart-watch-circle" %}}</span><br />smart-watch-circle</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="smart-watch-square-filled" %}}</span><br />smart-watch-square-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="smart-watch-square" %}}</span><br />smart-watch-square</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="smiley-confused" %}}</span><br />smiley-confused</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="smiley-happy-open-mouth" %}}</span><br />smiley-happy-open-mouth</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="smiley-happy" %}}</span><br />smiley-happy</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="smiley-laugh-cry" %}}</span><br />smiley-laugh-cry</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="smiley-neutral" %}}</span><br />smiley-neutral</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="smiley-sad-crying" %}}</span><br />smiley-sad-crying</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="smiley-sad" %}}</span><br />smiley-sad</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="smiley-surprised" %}}</span><br />smiley-surprised</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="soap" %}}</span><br />soap</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="software-development-operations" %}}</span><br />software-development-operations</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="sort-alphabet-ascending" %}}</span><br />sort-alphabet-ascending</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="sort-alphabet-descending" %}}</span><br />sort-alphabet-descending</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="sort-ascending" %}}</span><br />sort-ascending</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="sort-descending" %}}</span><br />sort-descending</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="sort-numerical-ascending" %}}</span><br />sort-numerical-ascending</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="sort-numerical-descending" %}}</span><br />sort-numerical-descending</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="sort" %}}</span><br />sort</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="sparkles-filled" %}}</span><br />sparkles-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="sparkles" %}}</span><br />sparkles</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="star-filled" %}}</span><br />star-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="star" %}}</span><br />star</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="stock-decrease" %}}</span><br />stock-decrease</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="stock-increase" %}}</span><br />stock-increase</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="stopwatch-filled" %}}</span><br />stopwatch-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="stopwatch" %}}</span><br />stopwatch</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="store-filled" %}}</span><br />store-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="store" %}}</span><br />store</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="strikethrough" %}}</span><br />strikethrough</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="substract" %}}</span><br />substract</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="subtract-circle-filled" %}}</span><br />subtract-circle-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="subtract-circle" %}}</span><br />subtract-circle</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="subversion-filled" %}}</span><br />subversion-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="subversion" %}}</span><br />subversion</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="sun-filled" %}}</span><br />sun-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="sun" %}}</span><br />sun</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="swap" %}}</span><br />swap</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="synchronize-arrow-clock" %}}</span><br />synchronize-arrow-clock</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="t-shirt-filled" %}}</span><br />t-shirt-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="t-shirt" %}}</span><br />t-shirt</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="table-filled" %}}</span><br />table-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="table-lamp-filled" %}}</span><br />table-lamp-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="table-lamp" %}}</span><br />table-lamp</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="table" %}}</span><br />table</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="tablet-filled" %}}</span><br />tablet-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="tablet" %}}</span><br />tablet</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="tag-filled" %}}</span><br />tag-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="tag-group-filled" %}}</span><br />tag-group-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="tag-group" %}}</span><br />tag-group</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="tag" %}}</span><br />tag</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="target-filled" %}}</span><br />target-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="target" %}}</span><br />target</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="task-list-multiple-filled" %}}</span><br />task-list-multiple-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="task-list-multiple" %}}</span><br />task-list-multiple</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="teams-filled" %}}</span><br />teams-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="teams" %}}</span><br />teams</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="tennis ball-filled" %}}</span><br />tennis ball-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="tennis ball" %}}</span><br />tennis ball</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="text-align-center" %}}</span><br />text-align-center</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="text-align-justify" %}}</span><br />text-align-justify</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="text-align-left" %}}</span><br />text-align-left</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="text-align-right" %}}</span><br />text-align-right</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="text-background-filled" %}}</span><br />text-background-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="text-background" %}}</span><br />text-background</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="text-bold" %}}</span><br />text-bold</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="text-color-filled" %}}</span><br />text-color-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="text-color" %}}</span><br />text-color</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="text-decrease" %}}</span><br />text-decrease</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="text-font" %}}</span><br />text-font</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="text-header" %}}</span><br />text-header</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="text-height" %}}</span><br />text-height</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="text-increase" %}}</span><br />text-increase</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="text-indent-left" %}}</span><br />text-indent-left</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="text-indent-right" %}}</span><br />text-indent-right</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="text-italic" %}}</span><br />text-italic</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="text-size" %}}</span><br />text-size</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="text-subscript" %}}</span><br />text-subscript</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="text-superscript" %}}</span><br />text-superscript</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="text-width" %}}</span><br />text-width</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="three-dots-menu-horizontal-filled" %}}</span><br />three-dots-menu-horizontal-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="three-dots-menu-horizontal-small" %}}</span><br />three-dots-menu-horizontal-small</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="three-dots-menu-horizontal" %}}</span><br />three-dots-menu-horizontal</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="three-dots-menu-vertical-filled" %}}</span><br />three-dots-menu-vertical-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="three-dots-menu-vertical" %}}</span><br />three-dots-menu-vertical</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="three-filled" %}}</span><br />three-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="three" %}}</span><br />three</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="thumbs-down-filled" %}}</span><br />thumbs-down-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="thumbs-down" %}}</span><br />thumbs-down</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="thumbs-up-filled" %}}</span><br />thumbs-up-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="thumbs-up" %}}</span><br />thumbs-up</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="time-clock-filled" %}}</span><br />time-clock-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="time-clock" %}}</span><br />time-clock</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="tint" %}}</span><br />tint</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="top-hat-filled" %}}</span><br />top-hat-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="top-hat" %}}</span><br />top-hat</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="train-filled" %}}</span><br />train-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="train" %}}</span><br />train</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="trash-can-filled" %}}</span><br />trash-can-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="trash-can" %}}</span><br />trash-can</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="tree-filled" %}}</span><br />tree-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="tree" %}}</span><br />tree</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="trophy-filled" %}}</span><br />trophy-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="trophy" %}}</span><br />trophy</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="twitter" %}}</span><br />twitter</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="two-filled" %}}</span><br />two-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="two" %}}</span><br />two</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="ui-webpage-slider-filled" %}}</span><br />ui-webpage-slider-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="ui-webpage-slider" %}}</span><br />ui-webpage-slider</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="umbrella-filled" %}}</span><br />umbrella-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="umbrella" %}}</span><br />umbrella</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="unchecked" %}}</span><br />unchecked</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="underline" %}}</span><br />underline</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="undo" %}}</span><br />undo</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="unlink" %}}</span><br />unlink</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="unlock-filled" %}}</span><br />unlock-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="unlock" %}}</span><br />unlock</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="upload-bottom" %}}</span><br />upload-bottom</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="upload-button" %}}</span><br />upload-button</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="uptime" %}}</span><br />uptime</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-3d-box-filled" %}}</span><br />user-3d-box-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-3d-box" %}}</span><br />user-3d-box</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-business-filled" %}}</span><br />user-business-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-business-statistics-filled" %}}</span><br />user-business-statistics-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-business-statistics" %}}</span><br />user-business-statistics</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-business" %}}</span><br />user-business</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-cloud-filled" %}}</span><br />user-cloud-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-cloud" %}}</span><br />user-cloud</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-cog-filled" %}}</span><br />user-cog-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-cog" %}}</span><br />user-cog</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-developer-filled" %}}</span><br />user-developer-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-developer" %}}</span><br />user-developer</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-empty-filled" %}}</span><br />user-empty-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-empty" %}}</span><br />user-empty</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-filled" %}}</span><br />user-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-key-filled" %}}</span><br />user-key-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-key" %}}</span><br />user-key</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-low-code-filled" %}}</span><br />user-low-code-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-low-code" %}}</span><br />user-low-code</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-man-filled" %}}</span><br />user-man-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-man" %}}</span><br />user-man</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-neutral-group-filled" %}}</span><br />user-neutral-group-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-neutral-group" %}}</span><br />user-neutral-group</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-neutral-pair-filled" %}}</span><br />user-neutral-pair-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-neutral-pair" %}}</span><br />user-neutral-pair</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-neutral-shield-filled" %}}</span><br />user-neutral-shield-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-neutral-shield" %}}</span><br />user-neutral-shield</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-neutral-shortage-filled" %}}</span><br />user-neutral-shortage-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-neutral-shortage" %}}</span><br />user-neutral-shortage</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-neutral-sync-filled" %}}</span><br />user-neutral-sync-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-neutral-sync" %}}</span><br />user-neutral-sync</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-pair-filled" %}}</span><br />user-pair-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-pair" %}}</span><br />user-pair</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-question-filled" %}}</span><br />user-question-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-question" %}}</span><br />user-question</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-woman-filled" %}}</span><br />user-woman-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user-woman" %}}</span><br />user-woman</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="user" %}}</span><br />user</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="utilities" %}}</span><br />utilities</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="variable-filled" %}}</span><br />variable-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="variable" %}}</span><br />variable</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="version-control-filled" %}}</span><br />version-control-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="version-control" %}}</span><br />version-control</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="video-camera-filled" %}}</span><br />video-camera-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="video-camera" %}}</span><br />video-camera</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="view-filled" %}}</span><br />view-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="view-off-filled" %}}</span><br />view-off-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="view-off" %}}</span><br />view-off</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="view" %}}</span><br />view</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="voice-wave" %}}</span><br />voice-wave</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="webhook" %}}</span><br />webhook</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="wheat-filled" %}}</span><br />wheat-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="wheat" %}}</span><br />wheat</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="whiteboard-filled" %}}</span><br />whiteboard-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="whiteboard" %}}</span><br />whiteboard</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="windows-logo" %}}</span><br />windows-logo</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="wizard-hat-filled" %}}</span><br />wizard-hat-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="wizard-hat" %}}</span><br />wizard-hat</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="wrench-filled" %}}</span><br />wrench-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="wrench" %}}</span><br />wrench</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="x" %}}</span><br />x</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="yen" %}}</span><br />yen</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="youtube" %}}</span><br />youtube</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="zero-filled" %}}</span><br />zero-filled</td> 
</tr>
<tr>
  <td style="text-align: center"><span style="size:4em">{{% icon name="zero" %}}</span><br />zero</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="zoom-in-filled" %}}</span><br />zoom-in-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="zoom-in" %}}</span><br />zoom-in</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="zoom-out-filled" %}}</span><br />zoom-out-filled</td> 
  <td style="text-align: center"><span style="size:4em">{{% icon name="zoom-out" %}}</span><br />zoom-out</td> 
</tr>

</table>
