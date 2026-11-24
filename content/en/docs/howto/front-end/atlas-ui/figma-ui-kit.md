---
title: "Atlas UI Kit for Figma"
url: /howto/front-end/figma-ui-kit/
weight: 70
description: "Learn how to set up and use the Atlas UI Kit for Figma."
---

## Introduction

The Mendix Figma UI Kit is a library of ready-made UI components, layouts, and widgets that you can use as a visual reference when designing your Mendix application. Figma is for design and visual reference. It is not where you build or export working Mendix components. 

The Figma UI Kit helps you understand what UI components are available in Mendix, how they look, and how to use them consistently. Using it provides the following benefits:

* **Save time** – Start with ready-made components instead of designing everything from scratch.
* **Stay consistent** – Keep your application aligned with the Atlas UI design and styling.
* **Design with confidence** – Preview components and their variations before implementing them in Mendix Studio Pro.
* **Bridge design and development** – If you work with designers in your team, use the UI Kit to align on designs and simplify task transfers. If you do not have a designer, you can use Figma yourself to explore, plan, and communicate your UI designs before building them in Mendix.

To start creating your designs with a UI kit, you must download [Atlas UI Kit for Figma](https://www.figma.com/community/file/1291681319513425134). You can design using any components that are up-to-date with the most recent [Atlas framework](https://atlasdesignsystem.mendixcloud.com/p/dashboard).

Inside the kit you will find the following:

* Components that can be used as a library or copy/pasted 
* Widgets and layouts 

## Prerequisites 

To use the Atlas UI Kit for Figma to its fullest potential you will need the following:

* A Figma subscription (required to use the kit's file as a library)
* The Figma desktop app (download it to take advantage of Figma's best features)
    * To install the Figma desktop app, go to the [Figma website](https://www.figma.com/), download the app, and install it

## Basics 

Here are the basics for working with Studio Pro and the Mendix Figma UI Kit:

1. Open the UI Kit in Figma:
    1. In Figma, open the Atlas UI Kit for Figma.
    1. Explore the available components, widgets, and layouts.
    1. Find the component you want to use and check its appearance and available variations.
1. Use the component in Mendix:
    1. Open your application in Mendix Studio Pro.
    1. Find the corresponding widget or building block in the Toolbox.
    1. Drag it onto your page and configure it to match your requirements.
1. Need to customize the component's appearance?
    * Use the Figma design as a visual reference. Check the component's colors, typography, spacing, and other properties, then apply the corresponding styling in Mendix Studio Pro.

Please note that Figma components cannot be directly imported into Mendix as functional components. You must recreate the design from Figma UI Kit using Mendix widgets and building blocks.

## Recommended Practices

The following practices are recommended:

1. Use the library and foundations on your app.  
1. Use the global local variables for changing the colors from your components.
1. Prioritize designing components from this kit, because they are already supported on Atlas and Studio Pro.
1. Use typographies that are supported by Atlas and are in the Atlas UI Kit for Figma.

The following practices are *not* recommended:

1. Do not change the components' names (doing so will de-link them from the library).
1. Do not change the component layers' names.

## Read More

* [Customize Styling](/howto/front-end/customize-styling-new/)
* [Implement Best Practices for UX Design](/howto/front-end/ux-best-practices/)
* [Configure Your Theme](/howto/front-end/configuring-your-theme/)
