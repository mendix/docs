---
title: "Get Started"
url: /howto/front-end/get-started/
weight: 10
tags: ["Atlas", "UI", "UX", "user experience", "design"]
---

## 1 Introduction

This section explains Atlas and how developers can get started with the Atlas UI framework.

The Atlas UI framework enables all types of developers to build consistent and beautiful apps. Developers can use the default look and feel, they can slightly customize it, and use Atlas to create a fully tailored re-usable design across apps.

Atlas 2 corresponds with Mendix 8. If you need information on Atlas 2, see the Mendix 8 how-to documentation for [Atlas 2](/howto8/front-end/atlas-ui/).

## 2 Design Principles

Atlas UI has a philosophy based on the core principles described below. These principles guide all our design decisions at Mendix, and we encourage every Mendix user to adopt them when building their own apps.

**Simplicity**  — Freedom from complexity: we strive for simplicity to help you focus on what is important.

**Harmony** — Create familiarity and consistency throughout your apps' landscape, regardless of the device you use.

**Flexibility** — Design apps that look good and scale in all situations without losing an intuitive and consistent experience.

## 3 Design Elements

Our UI library is fully integrated into Mendix Studio. After choosing a navigation layout in Mendix Studio, you can find page templates, building blocks, and widgets directly in your Toolbox. These UI elements form the foundation of your app.

{{< figure src="/attachments/howto/front-end/atlas-ui/get-started/designelements.png" alt="Atlas UI design elements" >}}

1. **Navigation Layouts** — When building a Mendix app, the first thing you do is choose a navigation layout. These layouts are the frame within which your dynamic pages are housed, and they provide consistent structure throughout your app.

2. **Page Templates** — Page templates are predesigned collections of building blocks that can be used as-is, or you can enhance them with custom building blocks and widgets.

3. **Building Blocks** — Building blocks are single-purpose user interface elements and are comprised of multiple widgets. Multiple building blocks are usually used together on one page.

4. **Widgets** — Widgets are small user interface elements (alerts, buttons, charts, etc.) used to enhance existing building blocks.

5. **Design Properties** — You can further customize widgets by changing their design properties. Colors, text, and many other variables can be altered to make the widget what you need it to be.

## 4 Default Look and Feel

Mendix apps contain a default look which is part of the [Atlas Core module](https://marketplace.mendix.com/link/component/117187). This offers the default look (styling and design properties) and feel for all the platform-supported widgets and forms the basis for Mendix app designs. To view these styling elements for yourself, see the [Atlas Design System](https://atlasdesignsystem.mendixcloud.com/) website.

Next to that, for both web and native mobile Mendix offers respectively [Atlas Web Content](https://marketplace.mendix.com/link/component/117183) and [Atlas Native Mobile Content](https://marketplace.mendix.com/link/component/117175) as out of the box modules with standard page templates and building blocks. These are part of the blank starter apps ([Blank Web App](https://marketplace.mendix.com/link/component/51830) & [Blank Native Mobile App](https://marketplace.mendix.com/link/component/109511)), but can be removed if users do not want to use the default templates and building blocks.

When Mendix releases a new version of these modules, these can be updated as regular modules.

## 5 Customizing Default Look and Feel

Mendix apps come out of the box with the default Atlas look and feel, which can be customized using [Studio's theme customizer](/studio/theme-customizer/), by [changing the theme settings](/howto/front-end/customize-styling-new/), and by [adding custom styling](/howto/front-end/customize-styling-new/). Next to that, it is possible to implement your own Design System or UI Kit as described in [Create a Company Design System](/howto/front-end/create-a-company-design-system/).

## 6 Re-Using Designs Across Apps

To enable re-use and consistency it is possible to create UI modules that contain styling, design properties, page templates, building blocks and layouts. This can be used to implement the company brand as a re-usable module as described in  [Create a Company Design System](/howto/front-end/create-a-company-design-system/) or to group certain UI functionality together.
