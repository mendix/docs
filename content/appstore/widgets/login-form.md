---
title: "Login Form"
category: "Widgets"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The [Login Form](https://appstore.home.mendix.com/link/app/87/) widget is a custom login form that can be used as an alternative to the default Mendix login page.

### 1.1 Features

* Log in from any page in your Mendix application
* Implement a link to open a **Forgot my password** page

## 2 Configuration

To configure this widget, follow these steps:

1. Insert the widget in a page.
2. Configure the properties described in the next section.

## 3 Properties {#properties}

### 3.1 Display

* **Username placeholder** –  the placeholder text to display in the **User name** field
* **Password placeholder** –  the placeholder text to display in the **Password** field
* **'Login' button caption** –  the text to display on the login button
* **Progress bar caption** –  the text to display in the progress bar caption while the login request executes
* **Empty username/password message** –  the feedback message shown when a user does not provide all the credentials
* **'Forgot password' link text** –  the text to use in the **Forgot password** page link

### 3.2 Behaviour

* **Show progress bar** –  set to display a progress bar while the user signs in
* **Forgot password microflow** –  the microflow triggered when the user clicks **Forgot password**
* **Focus username input field** –  moves the ftocus to the **User name** field when the form is shown (only use this if it is not done automatically)

### 3.3 Mobile

* **Auto capitalize** –  enables auto-capitalize functionality on the **User name** input field for mobile devices
* **Auto correct** –  enables auto-correct functionality on the **User name** input field for mobile devices

### 3.4 Password

* **Show/mask password toggle** –  adds a toggle button for showing or masking a password
* **'Show password' button caption** –  the caption used for the show-password button
* **'Mask password' button caption** –  the caption used for the mask-password button
* **'Show password' button image** –  the optional image to display on the show-password button
* **'Mask password' button image** – the optional image to display on the mask-password button

## 4 Limitations

* Mendix Runtime returns no feedback about the existence of a user name; this is by design
