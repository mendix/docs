---
title: "Working with vector graphics"
parent: "native-mobile"
menu_order: 80
description: "A how-to on working with SVGs on native mobile"
tags: ["native", "svg", "images", "mobile"]
---

## 1 Introduction

When building a native app you may want to use vector images for icons or other illustrations. For this purpose, you can use SVGs. This how-to will go over several things you need to know when working with SVGs.

## 2 Optimizing SVGs

When exporting an SVG from an editor, you often get an SVG that has a lot of extra unneeded elements in it. These elements add up in size and performance, and can cause unwanted side effects. It's therefore recommended running your SVG through an SVG optimization tool. 

To optimize your SVGs, you can either run them through an online tool such as [SVGOMG](https://jakearchibald.github.io/svgomg/) or use a local tool such as [SVGO](https://github.com/svg/svgo). There are alternatives
 available on the SVGO page.

## 3 Unsupported elements

SVGs can contain many kinds of elements. Unfortunately, not all of them are supported. In this case, these elements will have no effect and should be removed. The following is not supported in SVGs used for native mobile apps:

- Complex gradients
- Animations video
- Javascript code/CDATA elements

We suggest manually removing these from the SVG, or using the tool mentioned in "Optimizing SVGs" to ensure its compatibility. 

## 4 Styling SVGs

In some cases, you might want to change the color of parts of your SVG, e.g. for an icon. Mendix allows you to do this by setting the `fill` and `stroke` properties in the styling of the image. These properties will then be applied to **all** the elements inside the SVG that do **not** have these properties.

For example, say you have the following SVG:

```svg
<svg viewBox="0 0 100 100">
    <rect x="10" y="10" width="80" height="80" stroke="blue"/>
</svg>
```

Setting the `fill` property on the styling of this image, will turn the rectangle (`rect` element) to the color provided, while setting the `stroke` property will result in no changes since the `stroke` has already been set.

## 5 Usage in pluggable widgets

To allow SVGs also to be used for an image property on a native pluggable widget, it is recommended to use the provided `Image` component. This will allow a static image of any supported format to be used within your pluggable widget, including SVGs.

For example:

```jsx
import { createElement } from "react";
import { Image } from "mendix/components/native/Image";

export const PluggableWidget = () => (
    <Image source="PUT_SOURCE_HERE" style={{ fill: 'blue' }} />
);
```

## 5 Read More

In case you want to make use of SVG elements directly in your pluggable widget, you can check out the [react-native-svg](https://github.com/react-native-community/react-native-svg) library.
