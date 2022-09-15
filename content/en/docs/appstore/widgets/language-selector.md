---
title: "LanguageSelector"
url: TBD
category: "Widgets"
description: "Describes the configuration and usage of the Language Selector widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "languageSelector", "group box", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [LanguageSelector](https://marketplace.mendix.com/link/component/TBD) widget enables to easily switch languages in your application.

### 1.1 Features

* Display the list of available languages in your system.
* Allows you to switch between languages and see the change immediately.
* To make it easy for you to use this widget we already setup default configuration in Atlas Design System.

## 2 Configuration

To configure this widget, follow these steps:

1. Use [Language Settings](https://docs.mendix.com/refguide/language-settings/) page to setup your languages.
2. Use this widget to configure how your language list will be visible in your page.
3. Easily switch languages by clicking on desired item.

### 2.1 General Tab

#### 2.1.1 Languages Section

* **Data source** (required) – select a language datasource (we recommend to use **System.Language** entity as your database data source).
* **Language caption** (required) – add your expression to use for language items (we recommend to use **$currentObject/Description** expression.

#### 2.1.2 General Section

* **Menu position**  – determines the location of a visible menu relative to the trigger area with widgets
    * Default: **Bottom**
* **Open on** – determines whether hovering or clicking the trigger widgets displays the menu
    * Default: **Click**
* **Hide for single language** - determines whether to render language selector in your DOM
    * Default: **Yes**
