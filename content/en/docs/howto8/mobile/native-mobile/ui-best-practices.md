---
title: "Implement Best Practices for Native Mobile App UI"
url: /howto8/mobile/ui-best-practices/
weight: 35
description: "This document will teach you how to build a native mobile app's UI."
tags: ["ux", "native", "mobile", "ui"]
---

## 1 Introduction

This document discusses how Mendix Platform users can build a native mobile app's user interface (UI). Other topics like testing and distributing are not discussed here. The guidelines in this document are a general advice and can be adjusted to better suit use cases and specific situations.

## 2 Roles

When building a native application, different roles are needed for app development. This does not necessarily mean there must be a different person for every role, as developers can serve multiple roles. Also, depending on your app there should be a difference in the level of expertise among certain roles.

### 2.1 Different Types of Roles

For most apps, development teams should include the following roles in their overall configuration:

* **Mendix development** – Building the domain model, pages, logic, integrations, and overall flow of the app. This is the most common and available role.
* **Front-end development** – Implementing the styling or the theme of the app as created in the designs.
* **UI design** – Designing the user interface, for example how the screens and components look, and determining the theme colors, typography, spacing, and borders.
* **UX design** – Designing the user experience (such as the flow of the app), determining which use cases to support, and deciding how certain functions should work.
* **Widget development (optional)** – Building new widgets to provide new interaction patterns or UI components that are not offered out of the box by Mendix or available though the Mendix Marketplace.

As mentioned above, not all apps require five different persons each handling one of these roles. Different team configurations are common.

### 2.2 Roles, Staff, and Types of Apps

Which roles and staff make up your development team depends on the type of apps you produce. In cases when less UI or UX expertise is required, most often with B2E apps, a Mendix developer can fill all roles. If the default theme is sufficient, or there are restrictions on time and budget this can be an effective configuration. By using Mendix's default Atlas theme and by discussing with users or the product owner, one Mendix developer can build the UI and UX on their own.

In apps where custom UX or UI is more important (for example B2C and B2B apps) the following combinations are often employed:

* **UI design + UX design** – This configuration is often used if an in-house UX team is used or a design agency is hired.
* **UI design + UX design + front-end development** – UX or UI experts that also have the skills to implement their designs and UX are key for this configuration. For example, several people in Mendix Expert Services are of these type.
* **Mendix development + front-end development** – A Mendix developer who knows how to implement styling, but does have to the skills to create the design.

## 3 Process

At Mendix we strongly believe in enabling other developers as they grow to scale and speed up development. In general there are more Mendix developers than UI or UX designers. Therefore, when building a mobile app it is important that a UI or UX designer can enable Mendix developers as much as possible to speed up development.

One could compare building with Mendix to building with toy blocks. Give a maker a set of generic blocks that can be combined, and they can build anything. However if they constantly need to buy new types of specific blocks,  their building would be slow and hampered.

To learn about building a Mendix native mobile app's UI, consult the sections below. Be sure to see the [Configure Design Properties](#configure-design-props) section below for key information on implementing design easily.

### 3.1 Create App Designs Using a UI Kit

By designing a set of reusable components including variations, a UI designer can create a UI kit that can be used to design pages. This includes settings like the brand colors, typography, spacing settings, and the UI components (for example buttons and inputs) including variations. Designers frequently use the [Sketch](https://www.sketch.com/) tool to complete these tasks with satisfying results.

This UI kit will be the input for creating the Mendix theme and related components. Therefore it helps to have Mendix and front-end knowledge to align what is available already in Mendix and what is needed for the designs..

### 3.2 Translate the UI Kit to Mendix Theme and Components

The front-end developer can translate the UI kit to a Mendix theme and standard layouts, as well as building blocks and page templates.

#### 3.2.1 Set Up Main Theme Settings

The goal of configuring the theme setting is to quickly implement the look and feel of your app or company branding. Mendix comes ready with a highly-configurable theme which gives you a head start in creating your app's overall look and feel. Configuring the theme settings inside your app's *theme/styles/native/app/custom-variables.js* file.

#### 3.2.2 Configure Design Properties {#configure-design-props}

The goal of design properties is to enable developers to implement design without having to know custom class names or write custom styling. This is a very important step in enabling developers.

By default Mendix has a default set of design properties which enable developers to build pages with several options. We advise you to change, add, or remove design properties according to your variations in the UI kit.

For example, Mendix offers a set of button variants (default, secondary, warning, success, and danger). However, during your design process you can choose to just have a default and a secondary variant. Choices like this are a part of UI design. It is up to people in UI and front-end design roles to determine how much freedom a Mendix developer should have.

The design properties are located in *theme/settings-native.json*, and more information be found in the [Design Properties API Documentation](/apidocs-mxsdk/apidocs/design-properties/).

#### 3.2.3 Create the App Layouts

The default Atlas theme comes pre-bundled with a set of layouts. If these do not fit your app’s design, you can create or customize the layouts and name them accordingly. Do not change the supplied layouts. Either create a separate module with the custom layouts, page templates, and building blocks or create your own [UI resources module](/howto8/front-end/create-company-atlas-ui-resources/#moving-from-local-to-atlas-ui-resources).

#### 3.2.4 Create Building Blocks for Common UI Structures

Apps often have multiple instances of patterns on pages or more complex UI patterns. For these cases it is useful to create building blocks so that other Mendix developers can easily apply common patterns. In building blocks, you can use custom class names in order to be more specific. For that properties that developers should be able to change in building blocks, use design properties as much as possible.

#### 3.2.5 Create Page Templates for Common Page Structures

Similar to buildings blocks, developers can create standard page templates so that other developers can easily implement a common type of page.

### 3.3 Implement Your UI Using Theme and Content

A Mendix developer can build an app's interface based on that app's theme, design properties, layouts, building block, and page templates. When missing capabilities make it difficult to build the pages as designed, it is good to iterate on the UI kit, theme, or available content. In certain cases it can be good to apply specific styling as explained in the next section.

### 3.4 Implement App or Use-Case Specific Styling

There are several cases in which an app's standard theme and content is not rich enough to build every page. In these cases front-end development can be used to implement specific styling. 

### 3.5 Iterate and Discuss

Mendix is a platform for Agile development environments, which also applies when creating a UI kit and the related Mendix themes and components. Keep iterating, discussing, and improving.

## 4 Best Practices 

### 4.1 Use Design Properties as Often as Possible

Try to avoid custom styling. Instead, use the available design properties as much as possible. This makes it easier for other developers to understand what is styled. We do not recommend creating a single design property that combines different styles, for example a property with padding and font size styles combined.

### 4.2 Plan to Reuse as Much as Possible

A common pitfall is to start directly implementing directly from designs without thinking about reuse. While implementing directly can make sense for small apps, this practice risks creating several custom classes, spawning more variations of components which can slow down development, and creating significant technical debt.

Try to avoid very specific class names. Very specific class names are often only used once, although the styles are probably used at least a few times. Combine and rewrite classes where possible. This will keep the theme clean and simple, and makes it easier to create design properties and enable Mendix developers.

### 4.3 Never Change Something in the Core Folder

By changing styling in the **core** folder you risk incurring errors the next time you update Atlas. Updating Atlas might also be more difficult. 

A large part of your app's overall styling can be changed in `theme/styles/native/app/custom-variables.js`. However, if more changes are needed you could extend a widget’s default styling or define the default styling yourself. For more information, see [How to Extend Design Properties to Customize Your Studio Experience](/howto8/front-end/extend-design-properties-to-customize/).

### 4.4 Favor Design Properties Over Including Properties

Avoid including properties which can be set with design properties. By being careful with your properties, your apps will be easier for other developers to understand and change. For example, if you make a certain element always have a margin there is a chance that this will not fit in certain designs. However, a developer could easily set a margin using design properties. One particularly useful approach is providing a default spacing this will cover 90% of cases, and give the developer the option to overwrite it using design properties. 

### 4.5 Study the Core Styling 

The default Mendix theme is a complete theme which serves as a good source of examples for how to approach styling.

### 4.6 Keep Styling Maintainable

It is a common pitfall to keep adding classes to a single file. However, this will make the file more difficult to maintain. Here some best practices for keeping styling maintainable:

* Apply clear, descriptive, and consistent names in styling—add comments when needed
* Use variables as much as possible for consistency and easy updating
* Combine and reuse parts of classes by using the spread operator `…`
* Split the styling in logical parts, group related styles together, and split them into separate files if those groups become too large—if you have multiple custom styling files, use *theme/styles/native/app/custom.js* to import all those files (this will make updating easier, as customizations are only in the *app* folder)
* *Custom.js* should not contain classes—only `export * from …*` statements to include classes from other files
* Put the styling for building blocks and page templates in *theme/styles/native/ui_resources/{YOUR_APP_OR_MODULE_NAME}* and include it in *theme/styles/native/main.js*
* Create separate folders in the app folder for the generic company styling and app specific styling (this enables re-use and consistency between apps)
* Always think about reuse; that common class you just created may be useful in other apps as well. Consider adding them to your company theme


## 5 Read More

* [Native Mobile Styling Reference Guide](/refguide8/native-styling-refguide/)
* [How to Style Your Mendix Native Mobile App](/howto8/mobile/how-to-use-native-styling/)