---
title: "ATS Helper"
parent: "rg-two-ats"
---

## 1 Introduction

The ATS Helper is an inspection tool that provides the information needed to create test steps in your test cases or actions. With the ATS Helper, you identify widgets in the running application, and it determines the `mx-name` of the widget. This saves you from diving into the HTML source code or the application model.

## 2 Installation

Install the ATS Helper by creating a bookmark in your browser. This bookmark loads the latest version of the ATS Helper from ATS and starts it.

Follow these steps to set the bookmark:

1. Open your ATS instance in the browser.
2. Log in with your account.
3.  Open the information dialog by clicking this icon in the upper right corner of the screen:

	![](attachments/rg-two-ats-helper/information.png)
   
4.  Find the link that says **ATS Helper**:

	![](attachments/rg-two-ats-helper/info-dialog.png)

5. Create a browser bookmark for this link with one of these methods:
   * Drag the link to your browser's bookmark bar
   * Right-click the link and select **Add bookmark for this link**

### 2.1 Compatibility

The ATS Helper works in Firefox, Chrome, Edge, and Internet Explorer 11.

## 3 Usage

### 3.1 Starting the ATS Helper

Use the ATS Helper within the application under test. Follow these steps to load the helper in your application:

1. Open your application
2. Click the **ATS Helper** bookmark that you created before.

The following dialog box will appear on top of your application's UI:

![](attachments/rg-two-ats-helper/loaded.png)

### 3.2 Inspecting Widgets

To inspect a widget, press and hold <kbd>Ctrl</kbd> while moving your mouse pointer to a UI element.

![](attachments/rg-two-ats-helper/inspection.png)

The ATS Helper will highlight the selected widget with a yellow border. The ATS Helper dialog box will show you the `Mx Name` as well as the Mx Name Selector properties.

If you release <kbd>Ctrl</kbd>, the widget will remain selected.

The properties shown by the ATS Helper are the following

| Property        | Description                              |
| --------------- | ---------------------------------------- |
| MxName          | The name of the widget. Required input for many actions |
| MxName Selector | The full CSS selector for the widget. Used for advanced test steps or custom actions. |

### 3.3 Moving and Closing

You can drag and drop this dialog box with your mouse. To close the helper, press the **x** icon in the top-right corner of the screen.
