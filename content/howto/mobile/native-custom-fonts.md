---
title: "Add Fonts to Your Native App"
parent: "hybrid-mobile"
menu_order: 40
description: "This tutorial will teach you to enrich the design of your native app with custom fonts."
tags: ["mobile", "debug", "android", "ios", "native", "fonts"]
---

## 1 Introduction

Good typography plays a major role in conveying your app's message while reinforcing your company's brand identity. Setting up the fonts you need is as simple as dragging and dropping the required fonts and setting your app's style. 

## 2 Introduction to Fonts in Mendix Native Apps

When it comes to fonts files, several standards and types are common. True Type (*.ttf*), Open Type (*.otf* or *.ttf*), and Web Open Font Format (*.woff*) are the most common. 

As this document focuses on native mobile platforms only, the later one can be safely ignored. 

Open Type fonts support a variety of metadata as also the possibility to package multiple font varieties in a single file. This feature is not supported for mobile platforms. You should have each variety of the Font Family you would like to add as a separate file. 

Android and iOS each take a different approach to fonts. Where Android requires an explicit declaration for each font added, iOS can derive the font type and font style dynamically. Adding fonts to each platform requires a different approach. Android expects font files to exist in a specific folder, while iOS requires the font files to be explicitly linked in its build process. 

Furthermore, both platforms resolve available fonts differently. While iOS fully supports Open Type fonts and can select fonts based on their metadata, Android requires explicit linking of the font file to the weight and style.

React Native, the underlying framework of Mendix Native Apps, unifies the process of adding fonts. For example, fonts added under **assets/fonts** on Android are explicitly linked in the project. These fonts are then exposed directly in the framework for styling your widgets using the common CSS properties you use routinely.

There are limitations to mobile font capabilities. For example, Android supports a very limited set of font types: regular, bold, italic, and bold italic.

What does that mean for your app's CSS styles? 

For example, what would happen if you were to use the following snippet in your CSS styles:

```
{ 
    fontWeight: 550
}
```

Your font, when running app on Android, would end up looking regular instead of the semibold font you would expect. This is because Android would first look up the available font styles registered. Unable to resolve the weight, it would fall back to the next best option. The same applies to styles.

In addition, Android expects the font filename to be a combination of the actual font family name, weight, and style. For example for Time New Roman bold italic, it expects something like *TimeNewRoman_bold_italic.ttf*. Failing to comply with these naming conventions makes the `fontFamily`, `fontWeight`, and `fontStyle` attributes fail to style text correctly.

So how can these issues be mitigated? First of all, explicitly styling text using the common CSS text attributes `fontWeight` and  `fontStyle` should be avoided. The results will vary per platform. Instead, use postscript names. Specifically, instead of a single `fontFamily` attribute with multiple weights and styles, a font family needs to be defined per weight and style combination.

For example, instead of writing this: 

```
export const bold = {
    fontFamily: "Times New Roman",
    fontWeight: "bold" | "500"
}
```

Define a constant like this: 

```
export const timesNewRomanFontFamily = {
    regular: "TimesNewRomanPSMT",
    boldItalic: "TimesNewRomanPS-BoldItalicMT",
    bold: "TimesNewRomanPS-BoldMT",
    italic: "TimesNewRomanPS-ItalicMT",
};
```

Then define the styles as follows: 

```
export const boldText = { 
    fontFamily: timesNewRomanFontFamily.bold,
}
```

Now wherever you use `boldText`, you will get the expected result on both platforms consistently.

## 3 Add Custom Fonts With the Mendix Native Mobile Builder 

The Mendix Native Mobile Builder simplifies adding custom fonts to your project. It configures both Android and iOS projects and also provides the snippets needed to simply copy and paste in your Mendix project's native styles. To add custom fonts to your project, follow these steps: 

1.  Start Native Builder:

    {{% image_container width="350" %}}![Start Native Builer](/attachments/nbui/start-nbui.png){{% /image_container %}}

1.  Navigate to Custom Fonts:

     {{% image_container width="350" %}}![Custom fonts screen](/attachments/nbui/advanced-fonts.png){{% /image_container %}}

1.  Drag and drop the fonts you would like to apply. For example, Time New Roman is being used here. When the process complete you should see the font family just uploaded in the list:

     {{% image_container width="350" %}}![Custom fonts screen filled](/attachments/nbui/advanced-fonts2.png){{% /image_container %}}

1.  Extend the list using the arrow to the right. Verify the expected fonts are available. You can continue and add as many fonts as you prefer:

     {{% image_container width="350" %}}![Custom fonts screen filled & extended](./attachments/nbui/advanced-fonts2.png)

1.  When ready click the snippet button {{% image_container width="30" %}}![Snippet button](./attachments/nbui/advanced-fonts-snippet.png){{% /image_container %}} to get the code snippet to copy to your styles:

     {{% image_container width="350" %}}![Custom fonts screen code snippet](/attachments/nbui/advanced-fonts4.png){{% /image_container %}}

1. Build your app, to get the new binary with fonts included. 

## 4 Use Custom Fonts in Your Project

To use the new fonts to style your content, follow these instructions:

1.  Copy the snippet from Native Mobile Builder:

     {{% image_container width="350" %}}![Custom fonts screen code snippet](/attachments/nbui/advanced-fonts4.png){{% /image_container %}}

1.  Open your styles js file and paste the snippet. For this example, the custom-variables.js file is being used. For more info on styling your app read the [Style Your Mendix Native Mobile App](https://docs.mendix.com/howto/mobile/how-to-use-native-styling#1-introduction) how to:

     {{% image_container width="350" %}}![Custom variables file](/attachments/nbui/custom-variables.png){{% /image_container %}}

1.  The constant can now be imported and be used to define the font family of any test style as needed. Elements styled using these classes will now be styled using the font:

     {{% image_container width="350" %}}![Custom style](/attachments/nbui/custom-style.png){{% /image_container %}}

## 5 Add Custom Fonts Manually

While Mendix Native Mobile Builder simplifies things tremendously, you might find yourself in a situation where using the tool might not be possible.

### 5.1 Add Custom Fonts to an Android Project

To manually add custom fonts to your Android app follow these instructions: 

1. Collect all the fonts you would like to use.
1.  Use a tool like [Open Type Inspector](https://opentype.js.org/font-inspector.html) and derive the Postscript name for each font:

     {{% image_container width="350" %}}![Open Type Inspector name metadata](/attachments/nbui/postscript-name.png){{% /image_container %}}

1. Rename the fonts to much the Postscript name. For the Time New Roman font used in the example we have these options: 
    * TimesNewRomanPSMT, for regular
    * TimesNewRomanPS-BoldMT, for bold

1. Copy the renamed fonts to the `android\app\src\main\assets\fonts` folder.
1.  If you plan in using the tool to build your project commit your changes:

     {{% image_container width="350" %}}![GitHub repo after uploading cutom fonts](/attachments/nbui/custom-fonts-android-repo.png){{% /image_container %}}

1. Build your Android app with your preferred method.

Congratulations, you have learned how to add fonts to an Android project.

### 5.2 Add Custom Fonts to an iOS Project

Use XCode to manually add fonts to an iOS project:

1. Collect all the fonts you would like to use.
1.  Use a tool like [Open Type Inspector](https://opentype.js.org/font-inspector.html) and derive the Postscript name for each font:

     {{% image_container width="350" %}}![Open Type Inspector name metadata](/attachments/nbui/postscript-name.png){{% /image_container %}}

1. Rename the fonts to much the Postscript name. For the Time New Roman font used in the example we have these options: 
    * TimesNewRomanPSMT, for regular
    * TimesNewRomanPS-BoldMT, for bold

1. Open XCode and select the workspace at **ios\NativeTemplate.xcworkspace**.
1. Drag and drop the renamed fonts to the **Resources/Fonts** folder in Project Explorer. 
1.  Select both targets from the dialog that shows up:

     {{% image_container width="350" %}}![XCode option dialog for adding files](/attachments/nbui/custom-fonts-xcode-dialog.png){{% /image_container %}}

1.  Your folder structure should look like the following:

     {{% image_container width="350" %}}![Project explorer with fonts](./attachments/nbui/custom-fonts-project-explorer-filled.png){{% /image_container %}}

1. Open the *Info.plist* file by pressing <kbd>{⌘}</kbd> + <kbd>{Shift}</kbd> + <kbd>{0}</kbd>` and search for the file. 
Hit enter to open it:

     {{% image_container width="350" %}}![XCode Open file dialog](/attachments/nbui/xcode-open-infoplist.png){{% /image_container %}}

1. Find the key `Fonts provided by the application`. Expand it if needed:

     {{% image_container width="350" %}}![Plist fonts key](/attachments/nbui/xcode-plist-fonts.png){{% /image_container %}}

1. Press the **+** button next to the key, to create a new empty item in the list.
1.  Type the font file name you wish to add as the value. In this case, we are adding the regular Time New Roman font, therefore the filename value is `TimesNewRomanPSMT.ttf`:

     {{% image_container width="350" %}}![Plist fonts key filled](/attachments/nbui/xcode-plist-fonts-filled.png){{% /image_container %}}

1. If you plan in using the tool to build your project commit your changes:

     {{% image_container width="350" %}}![GitHub repo after uploading cutom fonts](/attachments/nbui/custom-fonts-ios-repo.png){{% /image_container %}}

1. Build your iOS app with your preferred method.

Congratulations, you have learned how to add fonts to an iOS project. 
