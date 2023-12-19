---
title: "Icon Demos"
linktitle: "Icon Demos"
url: /icons
description: "Demo file for SVG icon shortcodes."
draft: true
banner: "This is a draft and will not be rendered in the production website. Use this page to test how icons will render. Linting has been disabled for this file."
---
<!-- markdownlint-disable-file -->

## 1 Introduction

Mendix provides a standard set of approved icons in [The Mendix Icon Set](https://mendix.atlassian.net/l/cp/U89wu3oL). This icon set is downloaded to the [docs/static/mx-icons](https://github.com/mendix/docs/tree/development/static/mx-icons) library in SVG format for use in the docs via shortcodes, like this:

To see more information about the pipeline, click **Details** ({{% icon name="notes-paper-text" %}}).

## 2 Syntax

This shortcode has two attributes:

* `name` (required) — This must exactly match the name of the file in the *docs/static/mx-icons* library.
* `color` (optional) – By default, the icon has the same color as the surrounding text. You can override this by specifying an optional `color` attribute, like this: {{% icon name="alert-circle" color="red" %}}

## 3 Some Suggested Icons

Here are some icons that might be particularly useful:

* add ({{% icon name="add" %}}) 
* alarm-bell ({{% icon name="alarm-bell" %}}) 
* alert-circle ({{% icon name="alert-circle" %}})
* cloud-check ({{% icon name="cloud-check" %}})
* cog ({{% icon name="cog" %}}) 
* checkmark-circle ({{% icon name="checkmark-circle" %}})
* controls-play ({{% icon name="controls-play" %}})
* download-button ({{% icon name="download-button" %}})
* layout-rounded-1 ({{% icon name="layout-rounded-1" %}})
* notes-paper-edit ({{% icon name="notes-paper-edit" %}})
* notes-paper-text ({{% icon name="notes-paper-text" %}})
* pencil ({{% icon name="pencil" %}})
* pipeline-run ({{% icon name="pipeline-run" %}})
* three-dots-menu-horizontal ({{% icon name="three-dots-menu-horizontal" %}})
* trash-can ({{% icon name="trash-can" %}})
* view ({{% icon name="view" %}})
