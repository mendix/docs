---
title: "Mobile Accessibility"
url: /refguide/mobile/using-mobile-capabilities/mobile-accessibility/
weight: 87
description: "This guide allows you to customize accessibility for native mobile applications."
---

## Introduction

This guide teaches you how to make your native mobile application accessible. An accessible application ensures every user has a satisfactory experience regardless of their physical capabilities or how they use their devices. Specifically, this guide will explain the interactions between Mendix apps and mobile screen readers (VoiceOver for iOS and TalkBack for Android). 

This guide only applies to native mobile apps.

## Prerequisites

Before starting this guide, make sure you have completed the following prerequisites:

* Install [Mendix Studio Pro](https://marketplace.mendix.com/link/studiopro/)
* Complete the [Prerequisites](/refguide/mobile/distributing-mobile-apps/building-native-apps/deploying-native-app/#prerequisites) section of *Build a Mendix Native App in the Cloud*
* Make sure you are using [Make It Native 9 app](/releasenotes/mobile/make-it-native-parent/)

## Setting Up Accessibility for Mendix Native Widgets

Mendix provides accessible widgets by default when possible, and also provides configurable properties to customize the accessibility experience.

### Accessibility Properties

#### Accessible

When `true`, indicates that the view is an accessibility element. If is set to `false`, the screen reader will avoid it. Most widgets have the accessible property set to `true` by default.

#### Screen Reader Caption

This caption does not appear on the screen, but it lets screen readers audibly describe on-screen elements making navigation easier for people with visual disabilities. 

#### Screen Reader Hint

A screen reader hint helps users understand what will happen when they perform an action on the accessibility element when that result is not clear from the accessibility label. Hints are announced by screen readers after the captions.

{{% alert color="info" %}}
For iOS, users can enable or disable hints through the device's VoiceOver settings. For Android, hints cannot be turned off.
{{% /alert %}}

### Example: Button Widget Accessibility

The native button widget is accessible by default and the screen reader caption will match the button's caption by default. You can override that through the button's properties:

{{< figure src="/attachments/howto/mobile/native-mobile/implementation/mobile-accessibility/buttonAccessibility.png" alt="accessible button"   width="350"  class="no-border" >}}

### Testing Screen Reader Accessibility

#### Android

To enable TalkBack (the Android screen reader), go to the **Settings** app on your Android device or emulator. Tap **Accessibility**, then **TalkBack**. Toggle the **Use service** switch to enable or disable it.

#### iOS

To enable VoiceOver (the iOS screen reader), go to the **Settings** app on your iOS device (it is not available for simulator). Tap **Accessibility**. There you will find many accessibility tools, such as bolder text, increased contrast, and VoiceOver.

### Special Widgets Use Cases

#### Container

If a container is accessible, it groups its children into a single selectable element. By default containers are not accessible in order to allow accessibility for children. This can be configured differently if your app demands it.

As an example, imagine a list item composed of an image and two text labels which you want to be treated as a single item by screen readers. To achieve this, embed the image and text labels in a container and enable accessibility for the container. Make sure to update the caption and hint to properly reflect all content.

#### Image

An accessible image requires a screen reader caption as a property because there is no way to set a default descriptive caption for images.

## Configuring Accessibility in Custom Widgets

React native documentation has a helpful [accessibility document](https://reactnative.dev/docs/accessibility) you can use as a reference while building custom widgets. 

Here are some selected properties which you might be particularly interested in:

| Property | Usage | Platform         |
|----------|-----------|---------------|
| accessible| When true, indicates that the view is an accessibility element. When a view is an accessibility element, it groups its children into a single selectable component.                | Android and iOS  |
|accessibilityLabel| A string that lets screen readers audibly describe on-screen elements, making navigation easier for people with visual disabilities.                                              | Android and iOS  |
|accessibilityHint| An accessibility hint which helps users understand what will happen when they perform an action on the accessibility element when that result is not clear from the accessibility label. | Android and iOS  |
|accessibilityRole| Communicates the purpose of a component to the user of an assistive technology.                                                                                                    | Android and iOS  |
|accessibilityState| Describes the current state of a component to the user of an assistive technology.                                                                                                 | Android and iOS  |
|importantForAccessibility| Can be used to control components overlapping in Android and decide which component will fire accessibility events.                                                                 | Android|

The widget's *XML* file can be updated to contain configurations similar to these:

```xml
<propertyGroup caption="Accessibilty">
    <property key="accessible" type="boolean" defaultValue="true">
        <caption>Accessible</caption>
        <description />
    </property>
    <property key="screenReaderCaption" type="textTemplate" required="false">
        <caption>Screen reader caption</caption>
        <description />
    </property>
    <property key="screenReaderHint" type="textTemplate" required="false">
        <caption>Screen reader hint</caption>
        <description />
    </property>
</propertyGroup>
```
