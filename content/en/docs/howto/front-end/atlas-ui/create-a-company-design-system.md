---
title: "Create a Company Design System"
url: /howto/front-end/create-a-company-design-system/
weight: 45
tags: ["Atlas", "UI", "UX", "user experience"]
---

## 1 Introduction

Mendix is all about enabling developers. Within apps developers can be enabled by using a design system that allows them to quickly build consistent and coherent interfaces in line with the company brand. Atlas 3 comes with a default design system which can be used to build your own design system. For more information, see the [Atlas Design System](https://atlasdesignsystem.mendixcloud.com/) website.

Note that in this document we use the term design system, but one could also consider this a UI Kit, depending on how it is used and implemented.

A design system is the single source of truth and contains all the elements that a team needs to design, realize and develop a product. The design system includes the styling (for example colors, fonts, spacing, images), principles, best practices, components and patterns (widgets, page templates, building blocks and design properties).

Follow the high level steps in the next paragraphs to create your own design system. Note that based on the needs/requirements, different choices can be made.

## 2 Creating a Company Design System App

Create a new app. You can give this a name to your liking, for example MyCompany Design System.

For advice on how to design an app, consult the  [Atlas Design System](https://atlasdesignsystem.mendixcloud.com/) website. This website contains pages which showcase key components, often-used patterns, as well as possible design variations and principles of use.

## 3 Adding a Company Theme Module

Add a new company theme module as described in the [Create a Theme Module](/howto/front-end/customize-styling-new/#create-theme-mod) section of *How to Customize Styling*. You can give this a name to your liking, for example MyCompany Theme. This is the module that can be used in the other apps, and/or be part of your company starter apps.

## 4 Customizing the Company Theme Module

There are several things you can do to customize your company theme module:

* Customize the styling as described in the [Create a Theme Module](/howto/front-end/customize-styling-new/#create-theme-mod) section of *How to Customize Styling*
* Based on new styling, you can [add design properties](/howto/front-end/extend-design-properties/)
* Add your own layouts, page templates, building blocks — or change the existing ones

## 5 Extending and Previewing

You can easily test your theme with the already defined pages. For new layouts, page templates, building blocks, and widgets you can add new pages to showcase the functionality and add documentation to describe its design variations, purpose and best practices.

## 6 Sharing the Theme Module

You can publish the theme module as a separate module in the private market place or create a new company starter app that contains the theme module as discussed. When there are changes to the theme module, we recommend updating both so that new apps get the latest version and the existing app can update its theme.
