---
title: "Edge-to-Edge Display"
url: /refguide/mobile/designing-mobile-user-interfaces/edge-to-edge/
weight: 25
description: "This guide explains how to implement edge-to-edge display in Mendix native mobile apps and configure bottom bar layouts."
---

## Introduction

Edge-to-edge display is a modern Android design approach where your app's content extends to the full screen, drawing behind the system bars (status bar at the top and navigation bar at the bottom). This creates a more immersive, modern look by utilizing the entire display area.

## How Does Mendix Support Edge-to-Edge Display?

From Native template version 17.0.0 and Mendix Studio Pro version 11.6.0, Mendix automatically implements edge-to-edge display following Google's recommendations to ensure your app looks modern and polished on Android devices. This means the Android status bar and navigation bar are transparent, allowing your app's design to shine through. System UI elements blend seamlessly with your app's design, creating a cohesive, polished appearance.

### Status Bar Changes

The status bar has the following changes:

* It takes on the color of your app's background (typically the header area).
* Your app content extends behind the status bar (which shows items such as the time, battery charge, and notifications).

### Navigation Bar Changes

The navigation bar has the following changes making your app's bottom navigation appears unified with the Android system UI, creating the polished, edge-to-edge experience that Google recommends:

* It is made transparent, allowing it to blend seamlessly with your app's design. In practice, this means the navigation bar takes on the background color of your bottom bar, making it appear as an integrated part of your app rather than a separate system element.
* Your app content extends behind the navigation bar which contains the back, home, and recent apps buttons.
* The height is automatically adjusted. When the Android navigation bar is present, your app automatically detects its height and adds it to your bottom bar height. This dynamic adjustment ensures that your bottom bar content remains fully visible and accessible, preventing any overlap with the system navigation buttons. 

## What This Means for You

Mendix Native template 17.0.0 automatically provides you with an edge-to-edge display experience with the following features.

* **No Manual Calculations**: You don't need to worry about calculating insets or adjusting for different device configurations
* **Automatic Adaptation**: The bottom bar automatically adjusts its height based on whether the navigation bar is visible
* **Consistent Appearance**: Your app maintains a modern, cohesive look across all Android devices

{{% alert color="info" %}}
You may need to set a height for your bottom bar if you have customized it. See [Adjusting the Bottom Bar Layout](#adjust-bottom) for more information.
{{% /alert %}}

## Important Warnings and Responsibilities

### Common Issues to Avoid

{{% alert color="warning" %}}

#### Do Not Place Buttons Near the Android Navigation Bar

```
┌─────────────────────────┐
│   Your App Content      │
│                         │
│                         │
│   [Submit Button]       │ ← TOO CLOSE!
└─────────────────────────┘
  [◀  ⚫  ▢] Navigation Bar
```

**Problem**: Users may accidentally tap navigation buttons instead of your app buttons, or your buttons may be partially hidden.

**Solution**: Add sufficient padding/margin at the bottom of your layouts to account for the navigation bar height.

{{% /alert %}}

## Configuration via `custom-variables.js`

Find `// Navigation Styles` within `custom-variables.js`, where you can adjust the proper design according to your needs. The configuration JavaScript is usually located in `<your-native-template>/src/custom-variables.js`

## Adjusting the Bottom Bar Layout {#adjust-bottom}

### When Might You Need This?

If you have customized your bottom navigation bar and notice layout issues after enabling edge-to-edge display (such as icons or labels appearing cut off or misaligned), you may need to adjust the bottom bar styling.

Because the navigation bar is now transparent and your app content extends behind it, any custom bottom bar configurations you previously had may need slight adjustments to account for the new layout. The transparent navigation bar means your bottom bar needs to ensure adequate spacing and sizing for all its elements to remain visible and accessible.

### Solution: Custom Navigation Styles

Add or modify the configuration in your `main.js` file to fine-tune the bottom bar appearance by doing the following:

1. Copy the following configuration into your `main.js` file:

    ```javascript
    export const navigationStyle = {
        bottomBar: {
            container: {
                height: 60,
            },
            label: {
                fontSize: 18,
            },
            selectedLabel: {
                fontSize: 18,
            },
            icon: {
                size: 25          
            },
            selectedIcon: {
                size: 25    
            }
        },
    };
    ```

2. Adjust the following values to match your needs:

   * `height`: Increase if your bottom bar content is too close to the Android navigation bar or decrease if it's far away.
   * `label`: Adjust label text size for cases where the Android navigation bar is close to your bottom bar (if height doesn't solve the problem)
   * `icon`: Adjust icon size for cases where the Android navigation bar is close to your bottom bar (if height doesn't solve the problem)

3. Test your modified configuration on various Android devices to ensure the layout works well across different screen sizes.
