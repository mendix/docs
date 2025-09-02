---
title: "SAP Horizon Native UI Resources"
url: /appstore/modules/sap-ui-resources/sap-native-resources/
description: "The SAP Horizon Native UI Resources module allows you to create Native apps with Fiori Horizon-theme UI styling."
aliases:
    - /partners/sap/sap-native-resources/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [SAP Horizon Native UI Resources module](https://marketplace.mendix.com/link/component/210026) allows you to design your native mobile app pages with SAP Horizon-styled widgets and building blocks as part of your layout. The module uses the Horizon theme. Based on the selected mobile theme, your app will use the light or dark version of the theme.

The SAP Horizon Native UI Resources module includes the following resources:

* Components - Mendix core components with a SAP Horizon look and feel
* Building blocks - Groups of components used to create prebuilt SAP Fiori page blocks
* Page templates - Predesigned pages that you can use directly in your app
* Layouts - Layouts that you can use to build your app

### Typical Use Cases

You may want to use this module if you are building a native mobile Mendix app with a SAP Fiori Horizon theme. The module will make your native app consistent with SAP Fiori UI-based applications.

## Prerequisites

The SAP Horizon Native UI Resources module requires the following modules:

* [Atlas Core](https://marketplace.mendix.com/link/component/117187)
* [Atlas Native Content](https://marketplace.mendix.com/link/component/117175)
* [Native Mobile Resources](https://marketplace.mendix.com/link/component/109513)

## Installation

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the SAP Horizon Native UI Resources module into your app.

## Configuration

After you install the module, you can find it in the **App Explorer**, in the **SAP_Native_Resources** section. The module provides a number of [components](#components), [building blocks](#building-blocks), [page templates](#page-templates), and [layouts](#layouts) that you can use to style your app to be consistent with the SAP Fiori Horizon theme. To apply the theme to your app, do the following steps:

1. In the */theme* folder of your app, find the *custom-variable.js* file and rename it to *custom-variable-old.js*.
2. Move the *horizon-custom-variable.js* from the */themesource/sap_native_resources/native* folder to the */theme* folder of your app.
3. Rename the *horizon-custom-variable.js* file to *custom-variable.js*.
4. In Mendix Studio Pro, in [App Settings](/refguide/app-settings/) go to the **Theme** tab. 
5. Verify that the **SAP_Native_Resources** module loads as the last theme module. If required, move it to the last position in the list.

    If the module does not load as the last, it may be overwritten by other theme modules, and the changes it introduces may not appear.

6. Edit your app and replace components such as buttons and labels with SAP Fiori ones.

{{% alert color="info" %}}
When using the module, keep the following additional concerns in mind:

* The SAP Horizon Native UI Resources module does not include icons other than glyphs. If required, you can upload any new icons into the module's [Image Collection](/refguide/image-collection/).
* The side menus allow only static content. For dynamic menu options, use the action sheet or bottom sheet.
* If you want to customize the styling or look of the components, you can add a new *main.js* file in **SAP_Native_Resources > Styling > native**.
{{% /alert %}}

### Customization

If you want to apply custom styling to the SAP Horizon UI module, see [Customize Styling: Adding Custom Styling](/howto/front-end/customize-styling-new/#add-custom-styling).

## Reference

To help you work with the SAP Horizon Native UI Resources module, the following sections of this document describe the available components, building blocks, page templates, and layouts that you can use in your application.

### Components {#components}

The module styles most Mendix components to match SAP Fiori styles by default.

If you want to change a Mendix component to match the SAP Fiori style, you need to manually add the required classes to the component.

### Building Blocks {#building-blocks}

The module adds the following building blocks:

* Fiori Action Sheet - The action sheet is displayed at the bottom of the page. It allows the end-user to pull the sheet over the page and select an item from it.
* Fiori Card - The card is usually used to display content in the card form.
* Fiori Header - There are two types of headers. The first type has an SAP icon and page title, and can be used at the top of the page. The second type is the page title with a side menu where you can add navigation options.

### Page Templates {#page-templates}

There are some predesigned pages that you can use to quickly create a native page. You can choose these templates while creating a new page in your native mobile app.

The module adds the following page templates:

* Dashboard - The dashboards displays basic information about the app at a glance.
* Detail page - This page displays information about an item.
* List - The module includes a list type where items are displayed in the card style.
* Form - This is basic form that includes all Fiori inputs. You can use and modify this form according to your requirements.

### Layouts {#layouts}

The module adds the following page templates:

* *FioriNative_Default* - This layout adds the SAP icon at the top of the page for the native mobile layouts provided by the Atlas Core module.
* *FioriNative_FullPage* - Use this layout to customize the header for a page.
* *FioriNative_Header* - This layout includes a page title with a back button. It is usually used for secondary pages (not for the Home Page).
