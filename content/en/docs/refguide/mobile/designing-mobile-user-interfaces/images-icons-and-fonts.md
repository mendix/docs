---
title: Images, Icons and Fonts
url: /refguide/mobile/designing-mobile-user-interfaces/images-icons-and-fonts/
parent: /refguide/mobile/designing-mobile-user-interfaces/
weight: 30
description: Learn how to integrate SVGs into your native mobile apps.
description: This tutorial will teach you to enrich the design of your native mobile app with custom fonts.
aliases:
    - /refguide/native-svg/
    - /howto/mobile/native-custom-fonts/
---

>>>>> /refguide/mobile/native-mobile/native-svg.md

## 1 Introduction

When building a native mobile application, you may want to use vector images for icons or other illustrations. For this purpose, you can use Scalable Vector Graphics (SVGs). This reference guide will provide guidance for working with SVGs in native mobile apps.

## 2 Optimizing SVGs {#optimizing}

When exporting an SVG from an editor, you will often produce an SVG with several unnecessary elements. These elements increase file size, decrease performance, and can cause unwanted side effects. Therefore it is recommended that you run your SVG through an SVG-optimization tool. 

To optimize your SVGs, you can either run them through an online tool such as [SVGOMG](https://jakearchibald.github.io/svgomg/) or use a local tool such as [SVGO](https://github.com/svg/svgo).

## 3 Unsupported Elements

SVGs can contain several kinds of elements. However, not all of them are supported in native mobile apps. Unsupported elements will have no effect and should be removed. The following SVG elements are *not* supported for native mobile apps:

* Complex gradients
* Animations 
* Video
* JavaScript code 
* CDATA elements
* `<style />` tags and `style` attributes (please use regular properties instead)

We suggest manually removing these elements from your SVGs, or using the tools mentioned in [Optimizing SVGs](#optimizing) above to ensure their compatibility. 

## 4 Styling SVGs

You might want to change certain colors in your SVG, for example when adding an image. Mendix allows you to do this by setting the `fill` and `stroke` properties in image's styling. These properties will then be applied to *all* the elements inside the SVG that do not have these properties.

Take the following SVG as an example:

```svg
<svg viewBox="0 0 100 100">
    <rect x="10" y="10" width="80" height="80" stroke="blue"/>
</svg>
```

Setting the `fill` property on this image's styling will turn the rectangle (`rect` element) to the color provided. Setting the `stroke` property will result in no changes, since the `stroke` has already been set.

Here is how an SVG without the `fill` property looks:

{{< figure src="/attachments/refguide/mobile/native-mobile/native-svg/before.png" alt="before" >}}

Here is how an SVG with the `fill` property looks:

{{< figure src="/attachments/refguide/mobile/native-mobile/native-svg/after.png" alt="after" >}}

You can check the list of allowed style properties at the [react-native-svg](https://github.com/react-native-community/react-native-svg#common-props) repository.

### 4.1 Coloring SVG Icons

Icons can only be set for buttons and bottom bar items. When you integrate an SVG icon into a button or bottom bar item, you will have to set the SVG's color yourself. When using an app which employs Atlas UI, by default the colors are all white. For more information on styling, see the [Native Mobile Styling Reference Guide](/refguide/native-styling-refguide/).

For example, the following code:

```jsx
export const DemoButton = {
	container: {
		backgroundColor: 'green'
	},
	caption: {
		color: 'orange'
	},
	icon: {
		color: 'blue'
	}
}
```

Would produce the following button and SVG:

{{< figure src="/attachments/refguide/mobile/native-mobile/native-svg/blue-svg.png" alt="blue svg" >}}

## 5 Using SVGs in Pluggable Native Widgets

To use an SVG in a pluggable native widget's image property, we recommend using the provided `Image` or `Icon` component. This will allow a static image of any supported format to be used within your pluggable widget, including SVGs.

Here is an example of using the `Image` component:

```jsx
import { createElement } from "react";
import { Image } from "mendix/components/native/Image";

export const PluggableWidget = () => (
    <Image source="PUT_SOURCE_HERE" style={{ fill: 'blue' }} />
);
```

Here is an example of using the `Icon` component:

```jsx
import { createElement } from "react";
import { Icon } from "mendix/components/native/Icon";

export const PluggableWidget = () => (
    <Icon 
        icon={{
            type: "image",
            iconUrl: "PUT_SOURCE_HERE"
        }}
        size={20}
        color="blue"
    />
);
```

If you want to use SVG elements directly in your pluggable widget, see the [react-native-svg](https://github.com/react-native-community/react-native-svg) library.

## 5 Read More

* [Build a Pluggable Native Widget](/howto/extensibility/build-native-widget/)
* [Atlas UI](/howto/front-end/atlas-ui/)
* [Pluggable Widgets API](/apidocs-mxsdk/apidocs/pluggable-widgets/)


>>>>> /howto/mobile/native-mobile/implementation/native-custom-fonts.md

## 1 Introduction

Good typography plays a major role in conveying your app's message while reinforcing your company's brand identity. Setting up the fonts you need is as simple as dragging and dropping the required fonts and setting your app's style. As you can see in the [Prerequisites](#prerecs) section below, Mendix offers two ways for you to add custom fonts: using the Mendix Native Mobile Builder or manually.

### 1.1 Introduction to Fonts in Mendix Native Mobile Apps

When it comes to fonts files, several standards and types are common. True Type (*.ttf*), Open Type (*.otf* or *.ttf*), and Web Open Font Format (*.woff*) are the most common. 

The *.woff* file type does not work with native mobile apps. As this document focuses on native mobile platforms only, you should not use this file type in your apps.

Open Type fonts support a variety of metadata as also the possibility to package multiple font varieties in a single file. This feature is not supported for mobile platforms. You should have each variety of the Font Family you would like to add as a separate file. 

Android and iOS each take a different approach to fonts. Where Android requires an explicit declaration for each font added, iOS can derive the font type and font style dynamically. Adding fonts to each platform requires a different approach. Android expects font files to exist in a specific folder, while iOS requires the font files to be explicitly linked in its build process. 

Furthermore, both platforms resolve available fonts differently. While iOS fully supports Open Type fonts and can select fonts based on their metadata, Android requires explicit linking of the font file to the weight and style.

React Native, the underlying framework of Mendix native mobile apps, unifies the process of adding fonts. For example, fonts added under **assets/fonts** on Android are explicitly linked in the app. These fonts are then exposed directly in the framework for styling your widgets using the common CSS properties you use routinely.

There are limitations to mobile font capabilities. For example, Android supports a very limited set of font types: regular, bold, italic, and bold italic.

What does that mean for your app's CSS styles? 

For example, what would happen if you were to use the following snippet in your CSS styles:

```
{ 
    fontWeight: 550
}
```

Your font, when running app on Android, would end up looking regular instead of the semi-bold font you would expect. This is because Android would first look up the available font styles registered. Unable to resolve the weight, it would fall back to the next best option. The same applies to styles.

In addition, Android expects the font filename to be a combination of the actual font family name, weight, and style. For example for Time New Roman bold italic, it expects something like *TimeNewRoman_bold_italic.ttf*. Failing to comply with these naming conventions makes the `fontFamily`, `fontWeight`, and `fontStyle` attributes fail to style text correctly.

So how can these issues be mitigated? First of all, explicitly styling text using the common CSS text attributes `fontWeight` and `fontStyle` should be avoided. The results will vary per platform. Instead, use postscript names. Specifically, instead of a single `fontFamily` attribute with multiple weights and styles, a font family needs to be defined per weight and style combination.

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

## 2 Prerequisites {#prerecs}

Before starting this how-to, make sure you have completed the following prerequisites:

Before adding fonts [using the Mendix Native Mobile Builder](#fonts-nbui):

* Run through the Native Mobile Builder's wizard at least once

Before [adding fonts manually](#manual):

* Understand the native mobile [local build process](/howto/mobile/native-build-locally/)
* Locally check out your repository 
* Understand git and have a git tool installed
* Have XCode installed for the iOS sections below

## 3 Adding Custom Fonts With the Mendix Native Mobile Builder {#fonts-nbui}

The Mendix Native Mobile Builder simplifies adding custom fonts to your app. It configures both Android and iOS app and also provides the snippets needed to simply copy and paste in your Mendix app's native styles. To add custom fonts to your app, follow these steps: 

1.  Start the Mendix Native Mobile Builder:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/start-nbui.png" alt="Start Native Builer"   width="350"  >}}

1.  Navigate to **Custom Fonts**:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-custom-fonts/advanced-fonts.png" alt="Custom fonts screen"   width="350"  >}}

1.  Drag and drop the font files you would like to apply. For example, Times New Roman is being used here. When the process is complete you should see the font family uploaded in the list:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-custom-fonts/advanced-fonts2.png" alt="Custom fonts screen filled"   width="350"  >}}

1.  Extend the list using the arrow to the right. Verify the expected fonts are available. You can continue by adding as many fonts as you prefer:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-custom-fonts/advanced-fonts2.png" alt="Custom fonts screen filled & extended"   width="350"  >}}

1.  Click the snippet button to get the code snippet which you can copy to your styles:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-custom-fonts/advanced-fonts4.png" alt="Custom fonts screen code snippet"   width="350"  >}}

1. Build your app to get a new binary with fonts included. 

## 4 Using Custom Fonts in Your App

To use the new fonts to style your content, follow these instructions:

1.  Copy the snippet from the Native Mobile Builder:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-custom-fonts/advanced-fonts4.png" alt="Custom fonts screen code snippet"   width="350"  >}}

1.  Open your styles *js* file and paste the snippet there. For this example, the *custom-variables.js* file is being used. For more information on styling your app, see [How to Style Your Mendix Native Mobile App](/howto/mobile/how-to-use-native-styling/):

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-custom-fonts/custom-variables.png" alt="Custom variables file"   width="350"  >}}

1.  The constant can now be imported and used to define the font family of any test style. Elements styled using these classes will now be styled using the font:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-custom-fonts/custom-style.png" alt="Custom style"   width="350"  >}}

## 5 Adding Custom Fonts Manually {#manual}

While the Mendix Native Mobile Builder simplifies adding fonts, you might find yourself in a situation where you must add fonts manually instead.

### 5.1 Adding Custom Fonts to an Android App

To manually add custom fonts to your Android app, follow these instructions: 

1. Collect all the fonts you would like to use.
1.  Use a tool like [Open Type Inspector](https://opentype.js.org/font-inspector.html) and derive the PostScript names for each font:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-custom-fonts/postscript-name.png" alt="Open Type Inspector name metadata"   width="350"  >}}

1. Rename the fonts to match the Postscript name. The Times New Roman font used in our example has these options: 
    * TimesNewRomanPSMT, for regular
    * TimesNewRomanPS-BoldMT, for bold

1. Copy the renamed fonts to the `android\app\src\main\assets\fonts` folder.
1.  If you plan on using the tool to build your app, commit your changes:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-custom-fonts/custom-fonts-android-repo.png" alt="GitHub repo after uploading cutom fonts"   width="350"  >}}

1. Build your Android app using your preferred method.

Congratulations, you have learned how to add fonts to an Android app.

### 5.2 Adding Custom Fonts to an iOS App

Use XCode to manually add fonts to an iOS app:

1. Collect all the fonts you would like to use.
1.  Use a tool like [Open Type Inspector](https://opentype.js.org/font-inspector.html) and derive the PostScript names for each font:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-custom-fonts/postscript-name.png" alt="Open Type Inspector name metadata"   width="350"  >}}

1. Rename the fonts to match the Postscript name. The Times New Roman font used in our example has these options: 
    * TimesNewRomanPSMT, for regular
    * TimesNewRomanPS-BoldMT, for bold

1. Open XCode and select the workspace at **ios\NativeTemplate.xcworkspace**.
1. Drag and drop the renamed fonts to the **Resources/Fonts** folder in App Explorer. 
1.  Select both targets from the dialog box that shows up:

     {{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-custom-fonts/custom-fonts-xcode-dialog.png" alt="XCode option dialog for adding files"   width="350"  >}}

1.  Your folder structure should look like this:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-custom-fonts/custom-fonts-project-explorer-filled.png" alt="App Explorer with fonts"   width="350"  >}}

1.  Open the *Info.plist* file by pressing <kbd>{⌘}</kbd> + <kbd>{Shift}</kbd> + <kbd>{0}</kbd>` and searching for the file. Press <kbd>{Enter}</kbd> to open it:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-custom-fonts/xcode-open-infoplist.png" alt="XCode Open file dialog"   width="350"  >}}

1.  Find the key `Fonts provided by the application`. Expand it if needed:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-custom-fonts/xcode-plist-fonts.png" alt="Plist fonts key"   width="350"  >}}

1. Press the **+** button next to the key to create a new, empty item in the list.
1.  Type the font file name you wish to add as the value. In this case, we are adding the regular Times New Roman font, therefore the filename value is `TimesNewRomanPSMT.ttf`:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-custom-fonts/xcode-plist-fonts-filled.png" alt="Plist fonts key filled"   width="350"  >}}

1.  If you plan on using the tool to build your app, commit your changes:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-custom-fonts/custom-fonts-ios-repo.png" alt="GitHub repo after uploading cutom fonts"   width="350"  >}}

1. Build your iOS app with your preferred method.

Congratulations, you have learned how to add fonts to an iOS app. 

## 6 Read More

* [Implement Native Mobile Styling](/howto/mobile/native-styling/)
* [Troubleshoot Common Native Mobile Issues](/howto/mobile/common-issues/)
