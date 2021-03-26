---
title: "Get Started"
parent: "ui-design"
menu_order: 1
tags: ["Atlas", "UI", "UX", "user experience"]
---

[!!! TODO: verify page tags]

## 1. Introduction

This section explains Atlas and how developers can get started with the Atlas UI framework.

The idea behind the Atlas UI framework is to enable all types of developers to build consistent and beautiful apps. Developers can use the default look and feel, they can customize it (slightly), and it can be use to create a fully tailored re-usable design across apps.

Check out the Mendix 8 how-to documentation for [Atlas 2 documentation](../../howto8/front-end/atlas-ui).

## 2. Design Principles

Atlas UI has a philosophy based on the core principles described below. These principles guide all our design decisions at Mendix, and we encourage every Mendix user to adopt them when building their own apps.

### Simplicity

Freedom from complexity: we strive for simplicity to help you focus on what is important.

### Harmony

Create familiarity and consistency throughout your apps landscape, regardless of the device you use.

### Flexibility

Design apps that look good and scale in all situations without losing an intuitive and consistent experience.

## 3. Design Elements

Our UI library is fully integrated into Mendix Studio. After choosing a navigation layout in Mendix Studio, you can find page templates, building blocks, and widgets directly in your Toolbox. These UI elements form the foundation of your app.

![Atlas UI design elements](attachments/howto/designelements.png)

### 1. Navigation Layouts

[!!! NOTE: the numbering of this section and the ones below is done on purpose. The numbers are visible in the attached PNG image]

When building a Mendix app, the first thing you do is choose a navigation layout. These layouts are the frame within which your dynamic pages are housed, and they provide consistent structure throughout your app.

### 2. Page Templates

Page templates are predesigned collections of building blocks that can be used as-is, or you can enhance them with custom building blocks and widgets.

### 3. Building Blocks

Building blocks are single-purpose user interface elements and are comprised of multiple widgets. Multiple building blocks are usually used together on one page.

### 4. Widgets

Widgets are small user interface elements (alerts, buttons, charts, etc.) used to enhance existing building blocks.

### 5. Design Properties

You can further customize widgets by changing their design properties. Colors, text, and many other variables can be altered to make the widget what you need it to be.

## 4. Default look and feel

Mendix apps contain a default look which is part of the Atlas Core module. This offers the default look (styling and design properties) and feel for all the platform supported widgets and is the base for the designs of Mendix app. Check out the look and feel on the [Atlas website](https://atlas.mendix.com/).

Next to that, for both web and native mobile Mendix offers respectively Atlas Web Content and Atlas Native Mobile Content as out of the box modules with standard page templates and building blocks. These are part of the blank starter apps, but can be removed if users do not want to use the default templates and building blocks.

[!!! TODO: Add links to the modules in market place]

When Mendix releases a new version of these modules, these can be updated as regular modules.

## 5. Customize the default look and feel

Mendix apps come out of the box with the default Atlas look and feel, which can be customized using [Studio's theme customizer](../../studio/theme-customizer), by [changing the theme settings](customize-styling), by [adding custom styling](<(customize-styling)>). Next to that, it is possible to implement your own Design System or UI Kit as described in [Create a company design system]().

[!!! NOTE: the referenced customize styling.md should contain the new atlas 3 documentation]
[!!! TODO: add create a company dsign system link]
## 6. Re-use design across projects

To enable re-use and consistency it is possible to create UI modules that contain styling, design properties, page templates, building blocks and layouts. This can be used to implement the company brand as a re-usable module as described in [Create a company design system]() or to group certain UI functionality together.

[!!! TODO: add create a company dsign system link]
