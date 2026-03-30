---
title: "SAP Fiori UI Resources"
url: /appstore/modules/sap-ui-resources/sap-fiori-3-0/
description: "Information on how to make an SAP Fiori version 3.0 themed app"
aliases:
    - /partners/sap/sap-fiori-3-0/
---

<!-- NOTES
Check all links
Should we have a section on the "Shell Bar"?

-->

## Introduction

The SAP Fiori user experience creates a consistent UI across SAP products. SAP Fiori is SAP’s new target design system for all SAP products in the *Intelligent Suite*. The [Web UI Package for SAP Fiori theme](https://marketplace.mendix.com/link/component/116359) module in the Mendix Marketplace allows you to create the same user experience in your Mendix apps.

The Mendix module gives you access to designing your pages with SAP Fiori-styled widgets and building blocks as part of your layout. Your Mendix app can be build with the following themes:

* SAP Horizon Evening
* SAP Horizon Morning
* SAP Quartz Light
* SAP Quartz Dark

You can experience the SAP Fiori design by using the [SAP Fiori Web Starter App](https://marketplace.mendix.com/link/component/116366) as the basis for a new app.

Alternatively, you can include the [Web UI Package for SAP Fiori theme](https://marketplace.mendix.com/link/component/116359) module in your existing app. See [Add Fiori to Your App](#add-fiori), below, for instructions on how to do this.

More information on using SAP Fiori design in your Mendix app is available in the following sections:

* [Widgets](#widgets) – Mendix core widgets having SAP Fiori styling
* [Building Blocks](#building-blocks) – groups of widgets which can be used to quickly create SAP Fiori styled pages
* [Layouts](#layouts) – different styles of page which can be used in your app — for example, Master/detail or Pop-Up
* [Page Templates](#page-templates) – readily-available page templates which are already styled ready for you to use in your Mendix app
* [Theme Selector](#theme-selector) – switch between different theme — for example *light* and *dark*

## Widgets{#widgets}

The majority of Mendix widgets have been styled to match SAP Fiori styles by default. Examples are shown below.

There are a couple of cases where you will need to apply some extra CSS classes manually to achieve the correct SAP Fiori look and feel. These are described in [Applying CSS Classes Manually](#apply-css).

Some SAP Fiori components are not yet supported by Mendix core widgets. These are listed in [Unsupported SAP Fiori Components](#unsupported-components), below.

### Examples of Mendix Core Widget Styling

You can see examples of the SAP Fiori styling of the Mendix Core Widgets by going to the **Mendix_Core_Elements** page of the Web UI Package for SAP Fiori theme Marketplace Module.

Most widgets work the same way as they do in other Mendix styles based on Atlas UI, but there are some changes which are listed in the sections below.

#### Buttons

You can choose different types of button by setting the appropriate **Button style**. The SAP Fiori styles are mapped as follows:

| **SAP Fiori Style** | **Mendix Button Style** |
| --- | --- |
| Default | Default |
| Emphasized | Primary |
| Positive | Success |
| Negative | Danger |
| Attention | Warning |
| Transparent | *this can be added using a building block* |

{{< figure src="/attachments/appstore/platform-supported-content/modules/ui-resources/sap-fiori-3-0/button-styles.png" alt="SAP Fiori Button Styles"   width="75%"  class="no-border" >}}

For the **Link button**, see [Applying CSS Classes Manually](#apply-css), below*.

#### Container Count Badge

The **container count badge** allows you to add a count badge to containers on Mendix pages as shown in the following example.

{{< figure src="/attachments/appstore/platform-supported-content/modules/ui-resources/sap-fiori-3-0/count-badge-example.png" alt="SAP Fiori Count Badge Example" class="no-border" >}}

You can create this style by adding the **ContainerCountBadge** widget inside a container.

{{< figure src="/attachments/appstore/platform-supported-content/modules/ui-resources/sap-fiori-3-0/count-badge-edit.png" alt="SAP Fiori Count Badge page design" class="no-border" >}}

The number which is displayed in the badge is supplied by a microflow which you can specify in the **Data Source** tab of the badge properties. The microflow must return an integer value.

{{< figure src="/attachments/appstore/platform-supported-content/modules/ui-resources/sap-fiori-3-0/count-badge-microflow.png" alt="SAP Fiori Count Badge microflow" class="no-border" >}}

You can specify the appearance of the count badge in the **Appearance** tab of the badge properties. If you want to maintain the correct SAP Fiori theme, you should choose the **Color Source** *Bootstrap Color Schema*.

{{< figure src="/attachments/appstore/platform-supported-content/modules/ui-resources/sap-fiori-3-0/count-badge-appearance.png" alt="SAP Fiori Count Badge appearance" class="no-border" >}}

#### List Views

Standard Mendix **List view** widgets can be used on your pages. However, these cannot be borderless. You can add a borderless list from a building block.

### Applying CSS Classes Manually{#apply-css}

Some SAP Fiori styling requires you to add some additional CSS classes manually for the styles to be implemented correctly. These cases are described in the following tables.

| SAP Component Style | Mendix Class |
| --- | --- |
| Disabled Link | link-disabled |
| Emphasized Link | link-emphasized |
| Inverted Link | link-inverted |
| Right Icon Link | link right icon |
| Left Icon Link | *this is the default* |

### Unsupported SAP Fiori Components{#unsupported-components}

* Avatar – you can mimic this using a **List 3** building block
* Message Strip – Mendix suggests you use one of the **Notifications** building blocks 
* Message Toast/Short message on actions
* Time
* Timepicker
* StepInput

In addition, there are some limitations on supporting other components:

* In **Menus** you cannot have:
    * two icons
    * a slider showing sub-menus
* In **Calendars** you cannot:
    * highlight multiple dates such as holidays or other special days
* In **Tables**
    * you cannot use icons on tables
    * you cannot select rows using checkboxes, you can only select rows using the standard Mendix selection methods
* In **Tabs** you cannot have
    * icons with a counter
    * only icons

## Building Blocks{#building-blocks}

You can see examples of the SAP Fiori building blocks by going to the **Building Blocks** page of the Web UI Package for SAP Fiori theme Marketplace Module. The building blocks are categorized by type.

## Layouts{#layouts}

You can see examples of the SAP Fiori navigation layouts by going to the **Layout** page of the Web UI Package for SAP Fiori theme Marketplace Module. These layouts are designed for use in *Responsive (Web)* applications, designed to run in any modern web browser, on any device.

The guidelines for the use of each layout are:

* Use the **PopupLayout** to create a page which appears in front of the existing page.
* Use the **SAP_Launchpad** layout when you want to create an SAP Fiori launchpad. See [SAP Fiori Launchpad – Overview](https://experience.sap.com/fiori-design-web/launchpad/) on the *SAP Fiori Design Guidelines* site for more information.
* Use a *Default* layout to display information in a single panel.
* Use a *MasterDetail* layout to display information in two panels side-by-side such as an *Order* with multiple *Order Lines*.
* Use a *Sliding* layout to display dynamic side content. See [Dynamic Side Content](https://experience.sap.com/fiori-design-web/dynamic-side-content/) on the *SAP Fiori Design Guidelines* site for more information.
* Use a *Letterbox* layout use Letterboxing display to restrict your layout to a certain width. See [Letterboxing](https://experience.sap.com/fiori-design-web/letter-boxing/) on the *SAP Fiori Design Guidelines* site for more information.
* Use an *Embedded* layout when you are using this page inside a page which already contains a Header.

Here is a list of the layouts you can use.

* PopupLayout (SAP_Fiori_Web_UI_Resources) 
* SAP_MasterDetail_Embedded (SAP_Fiori_Web_UI_Resources) 
* SAP_Launchpad (SAP_Fiori_Web_UI_Resources) 
* SAP_Default_Letterbox (SAP_Fiori_Web_UI_Resources) 
* SAP_MasterDetail_Sliding (SAP_Fiori_Web_UI_Resources)
* SAP_MasterDetail_Sliding_Letterbox (SAP_Fiori_Web_UI_Resources)
* SAP_Default_Embedded (SAP_Fiori_Web_UI_Resources)
* SAP_Default (SAP_Fiori_Web_UI_Resources)
* SAP_MasterDetail_Letterbox (SAP_Fiori_Web_UI_Resources)
* SAP_MasterDetail (SAP_Fiori_Web_UI_Resources) 

## Page Templates{#page-templates}

You can use one of the available page templates to rapidly create a consistent UI for your app pages. The templates provide you with the building blocks and widgets already arranged to provide an SAP Fiori-style page.

Note that these pages work best when combined with the appropriate **Navigation layout**. For example, the **Fiori Launchpad** page template works best with the *SAP_Launchpad (SAP_Fiori_Web_UI_Resources)* **Navigation Layout**.

## Theme Selector {#theme-selector}

In order to select the theme for your app, specify it in the *index.html* page as `html class="name-of-theme"`, for example, `html class="theme-horizon-morning"`. The following themes are available:

* **theme-horizon-morning**
* **theme-horizon-evening**
* **theme-quartz-light**
* **theme-quartz-dark**

## Demo Apps

On the [Mendix Marketplace](https://marketplace.mendix.com), you can find a number of [community-supported](/appstore/marketplace-content-support/#category) demo apps, which you can review or use to help you develop your own apps.

## Add Fiori to Your App{#add-fiori}

If you want to include the Web UI Package for SAP Fiori theme in an existing app perform the following steps:

1. Ensure that your app is using Mendix 9.6.11 or above. 
2. [Import](/appstore/use-content/) the [Web UI Package for SAP Fiori theme](https://marketplace.mendix.com/link/component/116359) module into your app.
3. Import the [Atlas Core](https://marketplace.mendix.com/link/component/117187) module into your app if it is not already there. Atlas Core must be version 3.2.2 or above.
4. Look in the **Theme** tab of the app settings. This must contain the `SAP_Fiori_Web_UI_Resources` module below the `Atlas_Core` module.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/ui-resources/sap-fiori-3-0/theme-order.png"  width="617px"  class="no-border" >}}
