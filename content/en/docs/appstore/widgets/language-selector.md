---
title: "Language Selector"
url: /appstore/widgets/language-selector/
category: "Widgets"
description: "Describes the configuration and usage of the Language Selector widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "languageSelector", "group box", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Language Selector](https://marketplace.mendix.com/link/component/202738/) widget allows the end-user to easily switch the language of your application.

To see the component in the Mendix Marketplace, click here:

{{% button color="dark" href="https://marketplace.mendix.com/link/component/202738/" text="See component in Marketplace" title="See component in Marketplace" %}}

### 1.1 Features

* Displays a list of app languages available to the end-user determined by the developer.
* Allows end-users to switch between languages and see changes immediately.
* Uses a default configuration in the Atlas Design System for ease of use.

## 2 Configuration

To configure this widget, follow these steps:

1. Use the [Language Settings](/refguide/language-settings/) page to configure your app's languages.
1. Use the Language Selector widget to configure how your language list will be visible in your app.
1. In the app, easily switch languages by tapping on desired language.

### 2.1 General Tab

#### 2.1.1 Languages Section

* **Data source** (required) – select a language datasource (we recommend using the **System.Language** entity as your database data source).
* **Language caption** (required) – add your expression to use for language items (we recommend using the expression *$currentObject/Description*).

#### 2.1.2 General Section

* **Menu position** – sets the location of a visible menu relative to the trigger area 
   * Default: **Bottom**
* **Open on** – determines if hovering or clicking the trigger widgets displays the menu
   * Default: **Click**
* **Hide for single language** – determines whether or not to render language selector in your DOM 
   * Default: **Yes**
