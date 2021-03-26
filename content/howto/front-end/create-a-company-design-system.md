---
title: "Create a company design system"
parent: "ui-design"
menu_order: 1
tags: ["Atlas", "UI", "UX", "user experience"]
---

[!!! TODO: Verify menu_order and tags]

Mendix is all about enabling developers. Within projects developers can be enabled by using a design system that allows them to quickly build consistent and coherent interfaces in line with the company brand. Atlas 3 comes with a [default design system]()) which can be used to build your own design system.

[!!! TODO: add the atlas 3 design system live app url when it's live]

Note that in this document we use the term design system, but one could also consider this a UI Kit, depending on how it is used and implemented.

A design system is the single source of truth and contains all the elements that a team needs to design, realize and develop a product. The design system includes the styling (e.g. colors, fonts, spacing, images), principles, best practices, components and patterns (widgets, page templates, building blocks and design properties). To make it easy to get started, Mendix offers the [Mendix Design System app](), which can be used as a foundation to create your companies own Mendix design system.

[!!! TODO: Mendix Design System app link can be added when released on the market place]

Follow the following high level steps in the next paragraphs to create your own design system. Note that based on the needs/requirements, different choices can be made.

## 1. Create a company Design System app

Create a new app based on the [Mendix Design System app](). You can give this a name to your liking, for example MyCompany Design System.

[!!! TODO: Mendix Design System app link can be added when released on the market place]

The Design system app app contains pages to showcase the components and patterns, as well as the possible design variations and principles of use.

## 2. Add a company theme module

Add a new company theme module as described in [Customize styling - Create a theme module](customize-styling-new). You can give this a name to your liking, for example MyCompany Theme. This is the module that can be used in the other apps, and/or be part of your company starter apps.

[!!! TODO: make customize styling link more precise to point to Create a theme module section]

## 3. Customize the company theme module

There are several things you can do to customize your company theme module:

- Customize the styling as described in [Customize styling - Create a theme module](customize-styling-new).
- Based on new styling [add design properties](extend-design-properties).
- Add your own layouts, page templates, building blocks or change the existing ones.

[!!! TODO: make customize styling link more precise to point to Create a theme module section]

## 4. Extend and preview

You can easily test your theme with the already defined pages. For new layouts, page templates, building blocks, and widgets you can add new pages to showcase the functionality and add documentation to describe its design variations, purpose and best practices.

## 5. Share the theme module

You can publish the theme module as a separate module in the private market place and/or create a new company starter app that contains the theme module as discussed. When there are changes to the theme module it's recommended to update both so that new projects get the latest version and existing project can update their theme.
