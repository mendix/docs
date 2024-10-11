---
title: "Language Selector"
url: /appstore/widgets/language-selector/
description: "Describes the configuration and usage of the Language Selector widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Language Selector](https://marketplace.mendix.com/link/component/202738/) widget allows the end-user to easily switch the language of your application.

### Features

* Displays a list of app languages available to the end-user determined by the developer.
* Allows end-users to switch between languages and see changes immediately.
* Uses a default configuration in the Atlas Design System for ease of use.

## Configuration

To configure this widget, follow these steps:

1. Use the [Language Settings](/refguide/language-settings/) page to configure your app's languages.
1. Use the Language Selector widget to configure how your language list will be visible in your app.
1. In the app, easily switch languages by tapping on desired language.

### General Tab

#### Languages Section

* **Data source** (required) – select a language data source (Mendix recommends using the **System.Language** entity as your database data source)
* **Language caption** (required) – add your expression to use for language items (Mendix recommends using the expression `$currentObject/Description`)

#### General Section

* **Menu position** – sets the location of a visible menu relative to the trigger area 
    * Default: **Bottom**
* **Open on** – determines if hovering or clicking the trigger widgets displays the menu
    * Default: **Click**
* **Hide for single language** – determines whether or not to render language selector in your DOM 
    * Default: **Yes**
