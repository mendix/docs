---
title: "Customize the Design of Your App"
url: /studio-how-to/theme-customizer-how-to-customize-design/
description: "This how-to describes how to change and customize design in Mendix Studio."
weight: 60
tags: ["studio", "theme customizer", "how to", "customize", "design"]
---

## 1 Introduction

This how-to explains how to customize your app in Mendix Studio and use your company's logo, change its colors, fonts, adjust header sizes. 

**This how-to will teach you how to do the following:**

* Upload your company logo
* Customize colors of widgets in your app
* Customize your top bar, sidebar, and backgrounds
* Change fonts and headers

This how-to describes the following use case: 

You would like to customize your app design: upload company's logo, change colors of your app, change the font, and make headings larger. 

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Familiarize yourself with the Theme Customizer. For more information, see [Theme Customizer](/studio/theme-customizer/). 
* Familiarize yourself with page terms. For more information, see [Pages](/studio/page-editor/). 

## 3 Uploading Your Company Logo 

To upload a logo, do the following:

1. Click the paintbrush icon in the left menu bar to open the **Theme Customizer**.

2. In the **Upload Logo** section, click **Select File**.

    {{< figure src="/attachments/studio-how-to/theme-customizer-how-to-customize-design/select-logo.png" alt="Select File for Logo" >}}

3. In the dialog box, select the image with your company logo.

4. Check out the selected image uploaded and shown in the preview:

    {{< figure src="/attachments/studio-how-to/theme-customizer-how-to-customize-design/logo-preview.png" alt="Logo Preview" >}}

5. In the **UI Customization** section, make the logo larger: set the **Logo Width** and **Logo Height** to 40 PX.

6. In the upper-right corner, select **Page View** to check how your logo looks on pages:

    {{< figure src="/attachments/studio-how-to/theme-customizer-how-to-customize-design/page-view-button.png" alt="Page View button" >}}

Good job! You have uploaded your company's logo.

## 4 Changing Your App Colors

You can customize your app colors in the **Brand Colors** section. Once you uploaded the logo, a color palette is generated based on the logo colors. 

To customize your app colors, do the following:

1. Click the paintbrush icon in the left menu bar to open the **Theme Customizer**.

2. In the **Brand Colors** section, click the **Default** option and select a color marked as *1* in **Logo Colors**:

    {{< figure src="/attachments/studio-how-to/theme-customizer-how-to-customize-design/implementing-logo-colors-default.png" alt="Implementing Logo Colors, Default Option" >}}

3. Click the **Primary** option and select a color marked as *3* in **Logo Colors**:

    {{< figure src="/attachments/studio-how-to/theme-customizer-how-to-customize-design/implementing-logo-colors-primary.png" alt="Implementing Logo Colors, Primary Option" >}}

4. In the upper-right corner, select **Page View** to see how your changes are applied to pages. The colors you have changed are applied to widgets that have the **Style** property, for example, buttons and texts. 

    {{< figure src="/attachments/studio-how-to/theme-customizer-how-to-customize-design/page-view.png" alt="Page View" >}}

5. Select different pages in the top bar to make sure you like how new colors are implemented on all pages of your app:

    {{< figure src="/attachments/studio-how-to/theme-customizer-how-to-customize-design/selecting-pages.png" alt="Select Pages" >}}

6. In the **Brand Colors** section, use an advanced way of choosing the color by filling in the HEX or RGB code of a color that are usually provided by the designers. Click the **Info** option and fill in the HEX color code `#B056EF`:

    {{< figure src="/attachments/studio-how-to/theme-customizer-how-to-customize-design/hex-color-code.png" alt="Using Color Code" >}}

7. Repeat step 5 to make sure the color fits all pages in your app.

8. Click **Save** in the upper-right corner to implement your changes.

You have changed the colors in your app. 

## 5 Customizing Top Bar, Sidebar, and Backgrounds

You can change the way your app layout looks by changing the colors and fonts of your top bar, sidebar, and backgrounds.

Do the following:

1.  Open the Theme Customizer.

2.  In the **UI Customization** section >**Topbar**, click **Background** and choose color numbered *5* in **Logo Colors**.  

3.  In the upper-right corner, select **Page View** to see how your changes are applied to pages. You can see that the top bar is light-blue now. 

4. Click the **Border** setting and fill in the HEX color code `#989393`. You can see that the border of the top bar is grey now.

    {{< figure src="/attachments/studio-how-to/theme-customizer-how-to-customize-design/topbar-colors.png" alt="Topbar Colors" >}}

5.  To change the logo size, do the following:

    1. Click the **Logo Width** setting and change it from 30 PX to 100 PX.
    2.  Click the **Logo Height** setting and change it from 30 PX to 100 PX.

6. To change make your sidebar background deep-blue, click **Background** in the **Sidebar** section and fill in the HEX color code `#0D3A7A`.

7. To change the background of your app to very light grey, click the **Defaults** setting in the **Background** section and choose fill in the HEX color code `F5F5F5`.

8. Click **Save** in the upper-right corner to implement your changes.

Great job! You customized your top bar, sidebar, logo size, and the background color.

## 6 Changing Fonts and Customizing Headers

The **Typography** section of the **Theme Customizer** allows you to manage text elements in your app, such as page headers or text in widgets. To change the fonts and customize headers, do the following:

1. Open the **Theme Customizer**.

2. In the **Typography** section, click the **Base Font Family** and change it to **Bitter**. 

3. To make the font of basic elements (such as a text in widgets) larger, change **Base Font Size** from *14* to *16*.

4.  As you would like to make all headers larger too, do the following:

    1. Set **H1 Size** to 40.

    2. Set **H2 Size** to 35.

    3. Set **H3 Size** to 30.

    4. Set **H4 Size** to 22:

        {{< figure src="/attachments/studio-how-to/theme-customizer-how-to-customize-design/header-size.png" alt="Header Size" >}}

5. In the upper-right corner, select **Page View** to see how your changes are applied to pages.

6. Click **Save** in the upper-right corner to implement your changes.

Congratulations! You have customized the style of your app. You can now [preview your app](/studio/publishing-app/) to test now the changes look like.  