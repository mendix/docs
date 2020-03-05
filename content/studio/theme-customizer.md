---
title: "Theme Customizer"
description: "Describes the Theme Customizer in Mendix Studio."
menu_order: 80
tags: ["studio", "theme customizer", "atlas ui"]
---

## 1 Introduction 

The **Theme Customizer** is a tool that helps you customize your app in Mendix Studio. For example, you can adjust colors, upload a logo, change a text style, thus making your app look consistent and unique.

![Default Style vs. Customized Style](attachments/theme-customizer/default-vs-customized.png)

To open the **Theme Customizer**, click the paintbrush icon in the left menu bar. 

![Theme Customizer Icon](attachments/theme-customizer/theme-customizer-icon.png)

On the left, the Theme Customizer contains settings that you can change to customize different elements of your app. The changes you make are previewed on the right side. There are two preview modes:

* [Widget View](#widget-view) – previews the style on individual widgets

*  [Page View](#page-view) – previews the style on a page

    {{% alert type="info" %}} The **Page View** feature is in beta. This means there might be changes to this feature. For more information on beta features, see [Mendix Beta Features](/releasenotes/beta-features/).
    {{% /alert %}}

You can switch between the modes by clicking the corresponding button in the top-bar:

![Preview Modes](attachments/theme-customizer/preview-modes.png)

## 2 Settings

You can change the way your app looks using different settings on the left side of the **Theme Customizer**, that are divided in the following sections:

### 2.1 Upload Logo

In the **Upload Logo** section, you can upload a picture that will be used as a logo in your app. You can upload  images with extensions png, jpg, jpeg, gif, svg. For more information on how to upload the logo, see the [Uploading a Logo](#uploading-logo) section.  

Once the logo is uploaded, a color palette is generated based on the logo colors. You can then select **Logo Colors** in color-pickers of different settings and align your app style with the style of your logo:

{{% image_container width="250" %}}![Logo Colors](attachments/theme-customizer/logo-colors.png)
{{% /image_container %}}

For more information on how to select a new color in a setting, see [Adjusting Colors](#adjusting-colors).

### 2.2 Brand Colors

In the **Brand Colors** section, you can define colors of different styles: **Default**, **Primary**, **Inverse**, **Info**, etc. These styles are applied for widgets that have the **Style** property, for example, buttons. That means, if you selected a green color for the **Success** style, buttons that have *Success* selected in the **Style** property will be green: 

![](attachments/theme-customizer/brand-colors-style-dependency.png)

### 2.3 UI Customization

In the **UI Customization** section, you can adjust the style and color of the main UI elements: topbar, sidebar, and backgrounds.

### 2.4 Typography

In the **Typography** section, you can override the text styles and text colors for your app, such as colors and size of headings and hyperlinks in your app:

{{% image_container width="250" %}}![Widget View](attachments/theme-customizer/widget-view.png)
{{% /image_container %}}

## 3 Widget View {#widget-view}

The **Widget View** previews the style on an individual widget or UI elements as an example. For instance, when you change **Typography**, the changes will be previewed on individual headings and paragraphs. 

## 4 Page View {#page-view}

{{% alert type="info" %}} The **Page View** feature is in beta. This means there might be changes to this feature. For more information on beta features, see [Mendix Beta Features](/releasenotes/beta-features/).
{{% /alert %}}

In the **Page View**, you can select any page from your app to preview changes on it. You can select a page from a drop-down menu in the top bar. You can also switch the Device modes to see how your style looks on the **Phone**, **Tablet**, or **Responsive view**.  

![Top Bar](attachments/theme-customizer/top-bar.png)

## 5 Performing Basic Actions

### 5.1 Uploading a Logo {#uploading-logo}

To upload a logo, do the following: 

1. Open the **Theme Customizer**.

2.  In the **Upload Logo** section, click **Select File**.  

    ![Uploading Your Logo](attachments/theme-customizer/upload-logo.png)

3. In the dialog box, select the picture you want to use as the logo.

4.  The selected picture is uploaded and shown in the preview. 

5. Click **Save** to save changes.

The logo of your app has changed.

### 5.2 Adjusting Colors {#adjusting-colors}

You can override the default colors of different elements in your app. You can change the colors of the elements that have a color picker in the drop-down window. 

To change the color, do the following:

1. In **Brand Colors**, **UI Customization** or **Typography** sections, select a setting you would like to change.

2.  Click this setting and pick a color by doing one of the following:

    1. Select a color in the palette.
    2. Filling in the code of the color.
    3. Selecting the color from **Brand Colors** and **Logo Colors** (**Logo Colors** are only available when you [upload a logo](#uploading-logo)).<br/>
	{{% image_container width="200" %}}![Brand Colors and Logo Colors](attachments/theme-customizer/adjusting-color.png)
    {{% /image_container %}}

3. See the result in the preview.

4. Click **Save** to save your changes. 

The color has been applied to your app.

## 6 Read More

* [Atlas UI](../../howto/front-end/atlas-ui)
