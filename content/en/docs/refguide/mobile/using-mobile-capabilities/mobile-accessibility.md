---
title: "Mobile Accessibility"
url: /refguide/mobile/using-mobile-capabilities/mobile-accessibility/
weight: 85
description: "This guide allows you to customize accessibility for mobile applications."
tags: ["accessibility", "JavaScript", "native", "mobile"]
---

# 1 Introduction

This guide will teach you how to make your mobile application accessible. An accessible application ensures every user has a satisfactory experience regardless of their physical capabilities or how they use their devices. Specifically, this guide will explain the interactions between Mendix apps and mobile screen readers (VoiceOver for iOS and TalkBack for Android). 

This guide only applies to native mobile apps.

# 2 Prerequisites

Before starting this guide, make sure you have completed the following prerequisites:

* Install Mendix Studio Pro version **9.22.0** or above
* Complete the [Prerequisites](/refguide/mobile/distributing-mobile-apps/building-native-apps/deploying-native-app/#prerequisites) section of *Deploy Your First Mendix Native Mobile App*
* Make sure you are using [Make It Native 9 app](/releasenotes/mobile/make-it-native-parent/)

# 3 Setting up Accessibility for Mendix Native Widgets

Mendix tries to provide accessible widgets by default when it is possible and also allows provides configurable properties to customize the accessibility experience.

### 3.1  Accessibility Properties

### 3.1.1 Accessible

When `true`, indicates that the view is an accessibility element and if it is set to `false`, the screen reader will avoid it. Most of the widgets have accessible property `true` by default.

### 3.1.2 Screen Reader Caption

This caption doesn't appear on the screen but it lets the screen readers audibly describe onscreen elements, making navigation easier for people with visual disabilities. 

### 3.1.3 Screen Reader Hint

A screen reader hint helps users understand what will happen when they perform an action on the accessibility element when that result is not clear from the accessibility label. Hints are being announced by screen readers after the captions.

{{% alert color="info" %}}
For iOS, users can disable/enable hints through the device's VoiceOver settings. For Android, hints cannot be turned off.
{{% /alert %}}

## 3.2 Example: setting up accessibility for Button

Button is accessible by default and the screen reader caption will match button caption by default. We can override that through buttons properties:

{{< figure src="/attachments/howto/mobile/native-mobile/implementation/mobile-accessibility/buttonAccessibility.png" alt="accessible button"   width="400"  >}}

## 3.3 Testing Screen Reader Accessibility

### 3.3.1 Android

To enable TalkBack (Android screen reader), go to the Settings app on your Android device or emulator. Tap Accessibility, then TalkBack. Toggle the "Use service" switch to enable or disable it.

### 3.3.2 iOS

To enable VoiceOver (iOS screen reader), go to the Settings app on your iOS device (it's not available for simulator). Tap Accessibility. There you will find many tools that people use to make their devices more usable, such as bolder text, increased contrast, and VoiceOver.

## 3.4 Special Widgets Use Cases

### 3.4.1 Container

If a container is accessible, it groups its children into a single selectable element. By default containers are not accessible to allow accessibility for children but this can be configured if needed.

#### Example

Consider a list item that is composed of an image and two text labels that you want to be treated as a single item by screen readers. To achieve this, embed the image and text labels in a container and enable accessibility for the container. Make sure to update the caption and hint to properly reflect all content.

### 3.4.2 Image

Accessible image requires a screen reader caption as a mandatory property, as there is no way to set a default descriptive caption for images.

# 4 Configuring Accessibility in Custom Widgets

React native documentation has a helpful [accessibility document](https://reactnative.dev/docs/accessibility) that can be used as a reference while building custom widgets and here are the properties that might be of a great interest:

| Property | Usage                                                                                                                                                                              | Platform         |
|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| accessible| When true, indicates that the view is an accessibility element. When a view is an accessibility element, it groups its children into a single selectable component.                | Android and iOS  |
|accessibilityLabel| string that lets the screen readers audibly describe onscreen elements, making navigation easier for people with visual disabilities.                                              | Android and iOS  |
|accessibilityHint| An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not clear from the accessibility label. | Android and iOS  |
|accessibilityRole| communicates the purpose of a component to the user of an assistive technology.                                                                                                    | Android and iOS  |
|accessibilityState| Describes the current state of a component to the user of an assistive technology.                                                                                                 | Android and iOS  |
|importantForAccessibility| Can be used to control components overlapping in Android and decide which component will fire accessibility events                                                                 | Android|

The widget `xml` can be updated to contain configurations similar to these:
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
