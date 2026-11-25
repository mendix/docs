---
title: "Accordion"
url: /refguide/mobile/designing-mobile-user-interfaces/accordion/
weight: 10
description: "This guide describes the classes and style properties of its titled widget."
---

## Introduction

This document describes the classes and style properties of the Accorion widget, which you can find in the __todo___ module.

### Accordion {#accordion}

The accordion widget displays collapsible content sections with headers.

```javascript
export const com_mendix_widget_native_accordion_Accordion = {
  container: {
    // This has all ViewStyle properties.
  },
  group: {
    container: {
      // This has all ViewStyle properties.
    },
    header: {
      container: {
        // This has all ViewStyle properties.
      },
      heading1: {
        // This has all TextStyle properties.
      },
      heading2: {
        // This has all TextStyle properties.
      },
      heading3: {
        // This has all TextStyle properties.
      },
      heading4: {
        // This has all TextStyle properties.
      },
      heading5: {
        // This has all TextStyle properties.
      },
      heading6: {
        // This has all TextStyle properties.
      },
      icon: {
        // This has all ViewStyle properties.
        size: null, // The size of the expand/collapse icon.
        color: null, // The color of the expand/collapse icon.
      },
    },
    content: {
      // This has all ViewStyle properties.
    },
  },
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. | Styles the wrapper container around the entire accordion. |
| `group` > `container` | This has all ViewStyle properties. | Styles the container around each accordion group. |
| `group` > `header` > `container` | This has all ViewStyle properties. | Styles the header container. |
| `group` > `header` > `heading1` | This has all TextStyle properties. | Styles the heading when level 1 is selected. |
| `group` > `header` > `heading2` | This has all TextStyle properties. | Styles the heading when level 2 is selected. |
| `group` > `header` > `heading3` | This has all TextStyle properties. | Styles the heading when level 3 is selected. |
| `group` > `header` > `heading4` | This has all TextStyle properties. | Styles the heading when level 4 is selected. |
| `group` > `header` > `heading5` | This has all TextStyle properties. | Styles the heading when level 5 is selected. |
| `group` > `header` > `heading6` | This has all TextStyle properties. | Styles the heading when level 6 is selected. |
| `group` > `header` > `icon` | This has all ViewStyle properties. | Styles the expand/collapse icon. |
| `group` > `header` > `icon` | `size` | The size of the expand/collapse icon. |
| `group` > `header` > `icon` | `color` | The color of the expand/collapse icon. |
| `group` > `content` | This has all ViewStyle properties. | Styles the collapsible content area. |

The default class to style all accordion widgets is named `com_mendix_widget_native_accordion_Accordion`.

### Activity Indicator {#activity-indicator}

The activity indicator widget displays a circular loading indicator. This is how an activity indicator widget could look in an app:

{{< figure src="/attachments/refguide/mobile/native-mobile/native-styling-refguide/activity-indicator.png" alt="activity indicator"   width="350"  class="no-border" >}}

```javascript
export const com_mendix_widget_native_activityindicator_ActivityIndicator = {
  container: {
    // This has all ViewStyle properties.
  },
  indicator: {
    color: 'gray', // This is the color of the indicator.
    size: 'large' // Possible values for indicator are `large` and `small`.
  }
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |  |
| `indicator` | `color` | This is the color of the indicator (defaults to `gray`). |
| `indicator` | `size` | Possible values for indicator are `large` and `small` (defaults to `large`). |

The default class to style all activity indicators is named `com_mendix_widget_native_activityindicator_ActivityIndicator`.

### Animation {#animation}

The animation widget allows you to animate a container. You can make the content wiggle, move, change size, and more. The widget's style properties are as follows:

```javascript
export const com_mendix_widget_native_animation_Animation = {
  container: {
    // This has all ViewStyle properties.
  },
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |