---
title: "Working with Vector Graphics"
url: /refguide8/native-svg/
weight: 80
description: "Learn how to integrate SVGs into your native mobile apps."
tags: ["native", "svg", "images", "mobile", "vector", "vector graphics"]
---

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

{{< figure src="/attachments/refguide8/mobile/native-mobile/native-svg/before.png" alt="before" >}}

Here is how an SVG with the `fill` property looks:

{{< figure src="/attachments/refguide8/mobile/native-mobile/native-svg/after.png" alt="after" >}}

You can check the list of allowed style properties at the [react-native-svg](https://github.com/react-native-community/react-native-svg#common-props) repository.

### 4.1 Coloring SVG Icons

Icons can only be set for buttons and bottom bar items. When you integrate an SVG icon into a button or bottom bar item, you will have to set the SVG's color yourself. When using an app which employs Atlas UI, by default the colors are all white. For more information on styling, see the [Native Mobile Styling Reference Guide](/refguide8/native-styling-refguide/).

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

{{< figure src="/attachments/refguide8/mobile/native-mobile/native-svg/blue-svg.png" alt="blue svg" >}}

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

* [Build a Pluggable Native Widget](/howto8/extensibility/build-native-widget/)
* [Atlas UI](/howto8/front-end/atlas-ui/)
* [Pluggable Widgets API](/apidocs-mxsdk/apidocs/pluggable-widgets/)
