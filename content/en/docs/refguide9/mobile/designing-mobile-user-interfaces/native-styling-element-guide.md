---
title: "Widget Styling Guide"
url: /refguide9/mobile/designing-mobile-user-interfaces/widget-styling-guide/
weight: 45
description: "This guide will contextualize the style elements Mendix uses in native mobile apps, as well as explain the classes and style properties of Mendix’s widgets."
aliases:
    - /refguide9/native-styling-refguide/
---

## Introduction {#native-mobile-styling}

This guide will contextualize the style elements Mendix uses in native mobile apps, as well as explain the classes and style properties of Mendix’s widgets. To learn the basics of native styling, you can consult [Designing Mobile User Interfaces](/refguide9/mobile/designing-mobile-user-interfaces/).

Mendix apps use layouts to dictate how pages can look and function. For native mobile apps specifically, you can use a native layout to easily integrate navigation and settings optimized for native functionality. For more information on layouts, see [Layout](/refguide9/layout/).

To keep widgets responsive, Mendix apps use Flexbox. Using Flexbox, a component can set the layout of its child components. This allows your app to retain a consistent layout across multiple form factors. For more information on layout, see React Native’s [Flexbox documentation](https://reactnative.dev/docs/flexbox).

You can use the `height` and `width` properties to set a widget component’s dimensions. For more information on size, see React Native’s [Height and Width documentation](https://reactnative.dev/docs/height-and-width).

## Style Objects {#style-objects}

A widget is composed of various elements, and each can be styled individually. You can customize your widgets using style objects. A style object is a JavaScript object with a set of attributes specific for each widget. Some of the attributes reuse properties of other elements, such as React Native’s ViewStyle, TextStyle, ImageStyle, and Colors elements. You can consult the following property sets for more information on styling properties as you customize your app:

* **ViewStyle** – React Native’s [View Style](https://reactnative.dev/docs/view-style-props) property set helps you alter borders, opacity, and other general aspects of your app (the view style property set also contains layout, shadow, and transform properties)
* **TextStyle** – React Native’s [Text](https://reactnative.dev/docs/text-style-props) property set will allow you to style text – using these props you can control text’s font, selection status, and more (the text property set also contains layout properties)
* **ImageStyle** – React Native’s [Image](https://reactnative.dev/docs/image-style-props) property set will allow you to style images from network sources, a local library, and temporary local images – using these properties you can alter an image’s size, border, and more, while the image property set also contains layout properties (the `resizeMode` value `repeat` is not supported)
* **Colors** – React Native’s [Color Reference](https://reactnative.dev/docs/colors) property set will allow you to alter colors – you can customize colors using red-green-blue notation, change hue or saturation, and more 

### Class Names

Each style object has a name, referred to as the object’s class name. You can create new custom classes, and then apply styling to a single widget by setting a class name onto a widget class property. Here you can see the code for creating a `customClassName`:

```javascript
// A custom styling class
export const customClassName = {
  container: {
    // ViewStyle properties
    paddingTop: 5
  },
  text: {
    // TextStyle properties
    fontWeight: "bold"
  }
}
```

That custom class can be easily accessed in Mendix Studio Pro:

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/custom-class.png" alt="custom class"   width="400"  class="no-border" >}}

When you want to apply styling to one instance of a widget, you can extend that widget’s default class. Each widget's default class is named in the [Data Containers](#understanding-data-widgets) section below. The example below shows how to extend a default class:

```javascript
export const ActionButton = {
  container: {
    // ViewStyle properties
    borderWidth: 3
  },
  caption: {
    // TextStyle properties
    fontSize: 20
  }
};
```

Add-on widgets each have their own default styling classes based on their full widget IDs (found in *{widget name}.xml*), and can be created by replacing the dots with underscores. The example below shows a pluggable widget’s default styling class:

```javascript
export const com_mendix_widget_native_badge_Badge = (Badge = {
  caption: {
    // TextStyle properties
    color: "#00FF00",
  }
});
```

For more information on creating your own classes, see the [Creating Your Own Classes](/refguide9/mobile/designing-mobile-user-interfaces/native-styling/#creating-your-own-classes) section in *Style Your Mendix Native Mobile App*. That document also shows how to use custom classes as design properties.

## Data Containers {#understanding-data-widgets}

Data containers are essential to many Mendix apps. These widgets will allow your users to create and handle data objects, and can be customized to fit your app’s needs.

### Data View Widget

The data view widget shows the contents of one data object. For more information about this widget, see [Data View](/refguide9/data-view/).This widget has no user interface, so it does not support any styling.

### List View Widget {#list-view}

The list view shows a list of objects arranged vertically or horizontally. For more information about this widget, see [List View](/refguide9/list-view/). This is not the default list view, but how a list view widget could look in an app:

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/list-view.png" alt="list view"   width="350"  class="no-border" >}}

```javascript
export const ListView = {
  container: {
    // All ViewStyle properties
    numColumns: 1 // This is the number of columns that the list should render.
  },
  listItem: {
    // All ViewStyle properties
    rippleColor: 'rgba(0, 0, 0, 0.2))', // This is the color of the ripple on Android, and will be applied only when the item has an on click action set, otherwise it will be ignored.
    underlayColor: null, // This is the color while pressing the item on iOS, and will be applied only when the item has an on click action set, otherwise it will be ignored and defaulted to opacity only.
  },
  listItemDisabled: {
    // Same properties as `listItem`. Overrides `listItem` styles if the item has an on click action and the action cannot be executed or is disabled during action.
  }
};
```

The widget's style properties are as follows:

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | All ViewStyle properties |       |
| `container` | `numColumns` | This is the number of columns that the list should render (defaults to 1). |
| `listItem`  | All ViewStyle properties |          |
| `listItem`  | `rippleColor` | This is the color of the ripple on Android, and will be applied only when the item has an on click action set, otherwise it will be ignored (defaults to `rgba(0, 0, 0, 0.2)`). |
| `listItem`  | `underlayColor` | This is the color while pressing the item on iOS, and will be applied only when the item has an on click action set, otherwise it will be ignored and defaulted to opacity only. |
| `listItemDisabled`  | Same properties as `listItem` | Overrides `listItem` styles if the item has an on click action and the action cannot be executed or is disabled during action. |

The default class to style all list views is named `ListView`.

## Text Widgets

Text widgets are used in almost all app pages. Because of their ubiquity, learning to style text widgets will make a large difference for your apps.

### Text

The text widget shows text which can optionally contain parameters. For more information on these widgets, see [Text Widgets](/refguide9/text/). 

```javascript
export const Text = {
  container: {
    // All ViewStyle properties
  },
  text: {
    // All TextStyle properties
  },
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |                 |
| `text`      | This has all TextStyle properties. |                 |

The default class to style all texts is named `Text`.

### Page Title 

The page title widget shows the title of the page on which it is used. This can be the title defined on the page itself, or the override title defined when showing a page. For more information on this widget, consult [Page Title](/refguide9/page-title/). 

```javascript
export const PageTitle = {
  container: {
    // All ViewStyle properties
  },
  text: {
    // All TextStyle properties
  },
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |                 |
| `text`      | This has all TextStyle properties. |                 |

The default class to style all page titles is named `PageTitle`.

## Structure Widgets

Structure widgets are a set of tools that allow you to provide structure for your page’s content. There is also a specific widget called container widget detailed below. For more information on these widgets, see [Structure](/refguide9/structure-widgets/).

### Layout Grid

The layout grid widget can be used to structure the content on your page. You are able to create rows and columns which you can configure to have fixed or dynamic sizing.

The widget’s style properties are divided over several objects: `LayoutGrid`, `row`, `noGuttersRow`, `col`, `colFitToContent`, `col1`, `col2`, `col3`, `col4`, `col5`, `col6`, `col7`, `col8`, `col9`, `col10`, `col11`, `col12`, and `noGutters`.

`col` is being applied when the Width property on a column is *Auto-fill*.

`colFitToContent` is being applied when the Width property on a column is *Auto-fit content*.

`col1`, `col2`, `col3`, `col4`, `col5`, `col6`, `col7`, `col8`, `col9`, `col10`, `col11`, `col12` are applied when the Width on a column property is *Manual*. Only one class is applied based on the related Size property.

`noGuttersRow` (Row) and `noGutters` (Column) are being applied when the Spacing between columns property on a row is set to *No*.

### Container 

A container widget can be used to style or hide a group of widgets. This widget does not have a visual representation by default, though styling can be used to add spacing. 

```javascript
export const Container = {
  container: {
    // All ViewStyle properties
    rippleColor: 'rgba(0, 0, 0, 0.2)', // This is the color of the ripple on Android, and will be applied only when the container has an on click action set, otherwise it will be ignored.
    underlayColor: null, // This is the color while pressing the container on iOS, and will be applied only when the container has an on click action set, otherwise it will be ignored and defaulted to opacity only.      
  },
  containerDisabled: {
    // Same properties as `container`. This overrides `container` styles if the there is an on click action set and the action cannot be executed or is disabled during action.
  },
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |        |
| `container` | `rippleColor` | This is the color of the ripple on Android, and will be applied only when the container has an on click action set, otherwise it will be ignored (defaults to `rgba(0, 0, 0, 0.2)`). |
| `container`  | `underlayColor` | This is the color while pressing the container on iOS, and will be applied only when the container has an on click action set, otherwise it will be ignored and defaulted to opacity only. |
| `containerDisabled` | Same properties as `container` | This overrides `container` styles if the there is an on click action set and the action cannot be executed or is disabled during action. |

The default class to style all page titles is named `Container`.

### Tab Container

Tab containers are used to show information categorized into multiple tab pages. Tab containers can help display information which exceeds a device’s screen space. This is how a default tab container widget could look in an app:

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/tab-container.png" alt="tab container"   width="350"  class="no-border" >}}

```javascript
export const TabContainer = {
  container: {
    // All ViewStyle properties   
  },
  tabBar: {
    // All ViewStyle properties
    bounces: null, // This is a Boolean value indicating whether the tab bar bounces when scrolling.
    pressColor: null, // This is a color for material ripple (Android only).
    pressOpacity: null, // This is opacity for a pressed tab.
    scrollEnabled: null, // This is a Boolean value enabling scrollable tabs.
    tabBarPosition: 'top' // This is the position of the tab bar in the tab view, and possible values are `top` and `bottom`. 
  },
  indicator: {
    // All ViewStyle properties   
  },
  tab: {
    // All ViewStyle properties   
  },
  label: {
    // All TextStyle properties   
  },  
  activeLabel: {
    // All TextStyle properties   
  },
  badgeContainer: {
    // All ViewStyle properties   
  },
  badgeCaption: {
    // All TextStyle properties   
  },
};
```

The widget's style properties are as follows:

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |     |
| `tabBar`    | This has all ViewStyle properties. |     |
| `tabBar` | `bounces` | This is a Boolean value indicating whether the tab bar bounces when scrolling. |
| `tabBar` | `pressColor` | This is a color for material ripple (Android only). |
| `tabBar` | `pressOpacity` | This is opacity for a pressed tab. |
| `tabBar` | `scrollEnabled` | This is a Boolean value enabling scrollable tabs. |
| `tabBar` | `tabBarPosition` | This is the position of the tab bar in the tab view, and possible values are `top` and `bottom` (defaults to `top`). |
| `indicator` | This has all ViewStyle properties. |     |
| `tab`       | This has all ViewStyle properties. |     |
| `label`     | This has all TextStyle properties. |     |
| `activeLabel`     | This has all TextStyle properties. |     |
| `badgeContainer`  | This has all ViewStyle properties. |     |
| `badgeCaption`    | This has all TextStyle properties. |     |

The default class to style all tab containers is named `TabContainer`.

### Scroll Container

A scroll container is used to make enable scrolling for a part of a page. This widget does not have a visual representation by default, though styling can be used to add spacing. 

```javascript
export const ScrollContainer = {
  container: {
    // All ViewStyle properties
  },
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |            |

The default class to style all scroll containers is named `ScrollContainer`.

## Input Elements

Input elements are typically used to show data to the user and allow them to edit data. For more information on these widgets, see [Input Elements](/refguide9/input-widgets/).

### Text Box {#text-box}

A text box can be used to display or edit a textual value. This is how a text box widget with validation feedback and a plain text box widget could look in an app:

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/text-box.png" alt="text box"   width="350"  class="no-border" >}}

```javascript
export const TextBox = {
  container: {
    // All ViewStyle properties   
  },
  containerDisabled: {
    // Same properties as `container`. Overrides `container` styles if the text box is non-editable.   
  },
  input: {
    // All TextStyle properties
    autoCapitalize: 'sentences', // This is a Boolean value indicating whether the tab bar bounces when scrolling. This automatically capitalizes certain characters when the user types: 
    // 'characters': capitalizes all characters 
    // 'words': capitalizes the first letter of each word 
    // 'sentences': capitalizes the first letter of each sentence (default) 
    // 'none': capitalizes nothing
    placeholderTextColor: null, // This is the text color of the placeholder string.
    selectionColor: null, // This is the highlight and cursor color of the text input.
    underlineColorAndroid: null, // This is the color of the `input` underline.
  },  
  inputFocused: {
    // Same properties as `input`. Overrides `input` styles if the text box is focused (with Studio Pro v8.15).
  },
  inputError: {
    // Same properties as `input`. Overrides `input` styles if there are validation errors.  
  },
  inputDisabled: {
    // Same properties as `input`. Overrides `input` styles if the text box is non-editable.
  },
  label: {
    // All TextStyle properties
    numberOfLines: 1 // This is the maximum number of lines to wrap the label text. If the text is any longer, it will be cut off with an ellipsis.  
  },
  labelDisabled: {
    // Same properties as `label`. Overrides `label` styles if the text box is non-editable.
  },
  validationMessage: {
    // This has all TextStyle properties.
  },  
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties.   |   |
| `containerDisabled` | Same properties as `container` | Overrides `container` styles if the text box is non-editable. |
| `input` | This has all TextStyle properties. |  |
| `input` | `autoCapitalize` | This automatically capitalizes certain characters when the user types: <ul><li>`characters`: capitalizes all characters </li><li>`words`: capitalizes the first letter of each word </li><li>`sentences`: capitalizes the first letter of each sentence (default) </li><li>`none`: capitalizes nothing </li></ul>|
| `input` | `placeholderTextColor` | This is the text color of the placeholder string. |
| `input` | `selectionColor` | This is the highlight and cursor color of the text input. |
| `input` | `underlineColorAndroid` | This is the color of the `input` underline. |
| `inputFocused` | Same properties as `input` | Overrides `input` styles if the text box is focused (with Studio Pro 8.15). |
| `inputError` | This has the same properties as `input` | Overrides `input` styles if there are validation errors. |
| `inputDisabled` | Same properties as `input` | Overrides `input` styles if the text box is non-editable. |
| `label` | This has all TextStyle properties |   |
| `label` | `numberOfLines` | This is the maximum number of lines to wrap the label text. If the text is any longer, it will be cut off with an ellipsis (defaults to `1`). |
| `labelDisabled` | Same properties as `label` | Overrides `label` styles if the text box is non-editable. |
| `validationMessage` | This has all TextStyle properties.   |    |

The default class to style all text boxes is named `TextBox`.

### Text Area

A text box can be used to display or edit a textual value with multiple lines. This widget supports the same style properties and structure as the [Text Box](#text-box) widget above. This is how a text area widget with validation feedback and a plain text area widget could look in an app:

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/text-area.png" alt="text area"   width="350"  class="no-border" >}}

The default class to style all text areas is named `TextArea`.

### Drop-Down {#drop-down}

A drop-down is an input widget that can be used to display and edit enumeration attributes.

Since Studio Pro 8.11, the drop-down widget has a new style property called `useUniformDesign: boolean` which enables the uniform design in both platforms.

```javascript
export const DropDown = {
  container: {
    // All ViewStyle properties   
  },
  containerDisabled: {
    // Same properties as `container`. Overrides `container` styles if the text box is non-editable.   
  },
  iconStyle: {
    // This has all TextStyle properties. Styles the arrow down icon next to the value (with Studio Pro v8.15).
  },  
  item: {
    // This has all TextStyle properties. Styles all the items in dropdown menu including selected item (with Studio Pro v8.11)
  }, 
  itemContainer: {
    // This has all ViewStyle properties. Styles all the item containers in dropdown menu including selected item container (with Studio Pro v8.11).
  },   
  label: {
    // This has all TextStyle properties.
    numberOfLines: 1 // The maximum number of lines to wrap the label text. If the text is any longer it will be cut off with an ellipsis.  
  },
  labelDisabled: {
    // Same properties as `label`. Overrides `label` styles if the drop-down is non-editable.
  },
  menuWrapper: {
    // This has all ViewStyle properties. Styles the wrapper view surrounding all the menu items (with Studio Pro v8.11).
  }, 
  pickerIOS: {
    // This has all ViewStyle properties.
  },
  pickerBackdropIOS: {
    // This has all ViewStyle properties.
  },
  pickerTopIOS: {
    // This has all ViewStyle properties.
  },
  selectedItem: {
    // This has all TextStyle properties. Styles the selected item in dropdown menu (with Studio Pro v8.11).
  }, 
  selectedItemContainer: {
    // This has all ViewStyle properties. Styles the selected item's container in dropdown menu (with Studio Pro v8.11).
  }, 
  useUniformDesign: null, // Enables new uniformDesign (with Studio Pro v8.11).
  validationMessage: {
    // This has all TextStyle properties. Styles the validation message (with Studio Pro v8.11).
  },
  value: {
    // This has all TextStyle properties. Styles the value button which toggle's dropdown and PickerIOS items. If placeholder is selected, placeholderTextColor will be applied
    placeholderTextColor: null, // If placeholder is selected, placeholderTextColor will be applied (with Studio Pro v8.11).
  },
  valueFocused: {
    // Same properties as `value`. Overrides `value` styles if the dropdown box is focused. (with Studio Pro v8.15).
  },  
  valueContainer: {
    // This has all ViewStyle properties and rippleColor. Styles the value button's container (with Studio Pro v8.11).
  },  
  valueContainerFocused: {
    // Same properties as `valueContainer`. Overrides `valueContainer` styles if the dropdown box is focused (with Studio Pro v8.15).
  },  
  valueContainerError: {
    // Same properties as `valueContainer`. Overrides `valueContainer` styles if the dropdown has a validation error (with Studio Pro v9.19.0).
  }, 
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |  |
| `containerDisabled` | Same properties as `container` | Overrides `container` styles if the drop-down is non-editable. |
| `iconStyle`  | This has all TextStyle properties | Styles the arrow down icon next to the value (with Studio Pro 8.15).|
| `item` | This has all TextStyle properties | Styles all the items in dropdown menu including selected item (with Studio Pro 8.11).|
| `itemContainer` | This has all ViewStyle properties | Styles all the item containers in dropdown menu including selected item container (with Studio Pro 8.11).|
| `label` | This has all TextStyle properties. | |
| `label` | `numberOfLines` | The maximum number of lines to wrap the label text. If the text is any longer it will be cut off with an ellipsis. Defaults to `1`. |
| `labelDisabled` | Same properties as `label` | Overrides `label` styles if the drop-down is non-editable. |
| `menuWrapper` | This has all ViewStyle properties | Styles the wrapper view surrounding all the menu items (with Studio Pro 8.11).|
| `pickerIOS` | This has all ViewStyle properties. |  |
| `pickerBackdropIOS` | This has all ViewStyle properties. |   |
| `pickerTopIOS` | This has all ViewStyle properties. |   |
| `selectedItem` | This has all TextStyle properties | Styles the selected item in dropdown menu (with Studio Pro 8.11).|
| `selectedItemContainer` | This has all ViewStyle properties | Styles the selected item's container in dropdown menu (with Studio Pro 8.11).|
| `useUniformDesign` | `boolean` | Enables new uniformDesign (with Studio Pro 8.11). |
| `validationMessage` | This has all TextStyle properties. | Styles the validation message (with Studio Pro 8.11).|
| `value`  | This has all TextStyle properties  | Styles the value button which toggle's dropdown and PickerIOS items. If placeholder is selected, placeholderTextColor will be applied |
| `value`  | `placeholderTextColor: string` | If placeholder is selected, placeholderTextColor will be applied (with Studio Pro 8.11).|
| `valueContainer` | This has all ViewStyle properties and rippleColor | Styles the value button's container (with Studio Pro 8.11).|
| `valueContainerFocused` | Same properties as `valueContainer` | Overrides `valueContainer` styles if the dropdown box is focused (with Studio Pro 8.15).|
| `valueContainerError` | Same properties as `valueContainer`  | Overrides `valueContainer` styles if the dropdown has a validation error (with Studio Pro v9.19.0).|
| `valueFocused`  | Same properties as `value` | Overrides `value` styles if the dropdown box is focused. (with Studio Pro 8.15).|

The default class to style all text areas is named `DropDown`.

### Checkbox

A checkbox input widget can be used to display and edit Boolean attributes and is rendered as either a switch or a checkbox. This is how a checkbox widget in switch render mode looks by default:

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/check-box.png" alt="checkbox"   width="350"  class="no-border" >}}

This is how a checkbox widget in checkbox render mode looks by default:

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/check-box-checkbox.png" alt="checkbox in checkbox render mode"   width="350"  class="no-border" >}}

```javascript
export const Checkbox = {
  container: {
    // All ViewStyle properties
  },
  containerDisabled: {
    // All ViewStyle properties. Same properties as `container`. Overrides `container` styles if the text box is non-editable.
  },
  label: {
    // This has all TextStyle properties.
    numberOfLines: 1 // The maximum number of lines to wrap the label text. If the text is any longer it will be cut off with an ellipsis.
  },
  labelDisabled: {
    // Same properties as `label`. Overrides `label` styles if the checkbox is non-editable.
  },
  validationMessage: {
    // This has all TextStyle properties.
  },

  // The following properties are only used for the render mode: Switch
  input: {
    // All ViewStyle properties.
    trackColorOn: null, // Custom color for the switch track when turned on.
    trackColorOff: null, // Custom color for the switch track when turned off.
    thumbColorOn: null, // Color of the foreground switch grip when turned on. If this is set on iOS, the switch grip will lose its drop shadow.
    thumbColorOff: null, // Color of the foreground switch grip when turned off. If this is set on iOS, the switch grip will lose its drop shadow.
  },
  inputError: {
    // This has the same properties as `input`. Overrides `input` styles if there are validation errors.
  },
  inputDisabled: {
    // This has the same properties as `input`. Overrides `input` styles if the checkbox is non-editable.
  },
  
  // The following properties are only used for the render mode: Checkbox
  checkboxInput: {
    // This has all ViewStyle properties.
    // Render mode: Checkbox.
    color: null, // Custom color for the tick icon.
    size: null, // Custom size for the tick icon.
  },
  checkboxInputDisabled: {
    // This has the same properties as `checkboxInput`. Overrides `checkboxInput` styles if the checkbox is non-editable.
  },
  checkboxInputError: {
    // This has the same properties as `checkboxInput`. Overrides `input` styles if there are validation errors.
  },
};
```

| Element | Style Properties    | Description | Render mode |
| --- | --- | --- | --- |
| `container` | This has all ViewStyle properties.   |   | Both |
| `containerDisabled` | Same properties as `container`. | Overrides `container` styles if the text box is non-editable. | Both |
| `label` | This has all TextStyle properties.   |  | Both |
| `label` | `numberOfLines` | The maximum number of lines to wrap the label text. If the text is any longer it will be cut off with an ellipsis. Defaults to `1`. | Both |
| `labelDisabled` | Same properties as `label`. | Overrides `label` styles if the checkbox is non-editable. | Both |
| `validationMessage` | This has all TextStyle properties.   |  | Both |
| `input` | This has all ViewStyle properties.   |   | Switch |
| `input` | `trackColorOn` | Custom color for the switch track when turned on. | Switch  |
| `input` | `trackColorOff` | Custom color for the switch track when turned off. | Switch |
| `input` | `thumbColorOn` | Color of the foreground switch grip when turned on. If this is set on iOS, the switch grip will lose its drop shadow. | Switch |
| `input` | `thumbColorOff` | Color of the foreground switch grip when turned off. If this is set on iOS, the switch grip will lose its drop shadow. | Switch |
| `inputError` | This has the same properties as `input`. | Overrides `input` styles if there are validation errors. | Switch |
| `inputDisabled` | This has the same properties as `input`. | Overrides `input` styles if the checkbox is non-editable. | Switch |
| `checkboxInput` | This has all ViewStyle properties. |  | Checkbox |
| `checkboxInput` | `color` | Custom color for the tick icon. | Checkbox |
| `checkboxInput` | `size` | Custom size for the tick icon. | Checkbox |
| `checkboxInputDisabled` | This has the same properties as `checkboxInput`. | Overrides `checkboxInput` styles if the checkbox is non-editable. | Checkbox |
| `checkboxInputError` | This has the same properties as `checkboxInput`. | Overrides `input` styles if there are validation errors. | Checkbox |

The default class to style all checkbox inputs is named `Checkbox`.

### Date Picker

A date picker is an input widget that can be used to display and edit date or time attributes. This is how a date picker widget could look in an app:

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/date-picker.png" alt="date picker"   width="300"  class="no-border" >}}

```javascript
export const DatePicker = {
  container: {
    // All ViewStyle properties
  },
  containerDisabled: {
    // All ViewStyle properties. Same properties as `container`. Overrides `container` styles if the text box is non-editable.
  },
  label: {
    // This has all TextStyle properties.
    // Render mode: Both.
    numberOfLines: 1 // The maximum number of lines to wrap the label text. If the text is any longer it will be cut off with an ellipsis. Render mode: Both.
  },
  labelDisabled: {
    // Same properties as `label`. Overrides `label` styles if the checkbox is non-editable.
    // Render mode: Both.
  },
  value: {
    // This has all TextStyle properties.
    rippleColor: 'rgba(0, 0, 0, 0.2)', // This is the color of the ripple on Android, and will be applied only when the date picker is pressed.
    underlayColor: null, // This is the color while pressing the date picker on iOS, if not set it will be defaulted to opacity only.
  },
  valueDisabled: {
    // This has all TextStyle properties. Overrides `value` styles if the date picker is non-editable.
  },
  valueContainerError: {
    // This has all TextStyle properties. Overrides `value` styles if the date picker has a validation error.
  }, 
  placeholder: {
    // This has all TextStyle properties.
  },
  placeholderDisabled: {
    // This has all TextStyle properties.  Overrides `placeholder` styles if the date picker is non-editable.
  },
  validationMessage: {
    // This has all TextStyle properties.
  },
  pickerBackdropIOS: {
    // This has all Viewstyle properties.
  },
  pickerIOS: {
    // This has all Viewstyle properties.
    color: null,
  },
  pickerTopIOS: {
    // This has all Viewstyle properties.
  },
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |  |
| `containerDisabled` | Same properties as `container` | Overrides `container` styles if the date picker is non-editable. |
| `label` | This has all TextStyle properties. |  |
| `label`  | `numberOfLines` | This is the maximum number of lines to wrap the label text. If the text is any longer, it will be cut off with an ellipsis (defaults to `1`.) |
| `labelDisabled` | Same properties as `label` | Overrides `label` styles if the date picker is non-editable. |
| `value` | This has all TextStyle properties |  |
| `value` | `rippleColor` | This is the color of the ripple on Android, and will be applied only when the date picker is pressed (defaults to `rgba(0, 0, 0, 0.2)`). |
| `value`  | `underlayColor` | This is the color while pressing the date picker on iOS, if not set it will be defaulted to opacity only. |
| `valueDisabled` | This has all TextStyle properties | Overrides `value` styles if the date picker is non-editable. |
| `valueContainerError` | This has all TextStyle properties | Overrides `value` styles if the date picker has a validation error. |
| `placeholder` | This has all TextStyle properties |   |
| `placeholderDisabled` | This has all TextStyle properties | Overrides `placeholder` styles if the date picker is non-editable. |
| `validationMessage` | This has all TextStyle properties |  |
| `pickerBackdropIOS` | This has all ViewStyle properties |  |
| `pickerIOS` | This has all ViewStyle properties |  |
| `pickerIOS` | `color` |  |
| `pickerTopIOS` | This has all ViewStyle properties |  |

The default class to style all date picker inputs is named `DatePicker`.

### Reference selector

The reference selector is an input widget that can be used to display and edit associations. For more information on this widget, see [Reference Selector](/refguide9/reference-selector/). This widget supports the same style properties and structure as the [drop-down](#drop-down) widget above.

The default class to style all reference selector inputs is named `ReferenceSelector`.

## Images, Videos, and Files

Images, videos, and files help your user app manage images and other files. For more information on these widgets, see [Images, Videos, and Files](/refguide9/image-and-file-widgets/).

### Image (#new-image)

The image widget can be used to show a static or dynamic image or an icon on a page, layout, or snippet.

```javascript
export const com_mendix_widget_native_image_Image = {
  container: {
    // All ViewStyle properties
  },
  image: {
    // This has all ImageStyle properties.
  },
  backdrop: {
    // All ViewStyle properties
  }
};
```

| Element             | Style Properties                    | Description                                                  |
| ------------------- | ----------------------------------- | ------------------------------------------------------------ |
| `container`         | This has all ViewStyle properties.  |                                                              |
| `image`             | This has all ImageStyle properties. |                                                              |
| `backdrop`          | This has all ViewStyle properties.  | Styles for the backdrop of an enlarged image view.           |

### Static Image {#image}

The static image widget can be used to show a predefined image on a page, layout, or snippet. For more information on this widgets, see [Static Image](/refguide9/image/). 

```javascript
export const Image = {
  container: {
    // All ViewStyle properties
    rippleColor: 'rgba(0, 0, 0, 0.2)', // This is the color of the ripple on Android, and will be applied only when the container has an on click action set, otherwise it will be ignored.
    underlayColor: null, // This is the color while pressing the container on iOS, and will be applied only when the container has an on click action set, otherwise it will be ignored and defaulted to opacity only.
  },
  containerDisabled: {
    // Same properties as `container`. Overrides `container` styles if the image has an on click action and the action cannot be executed or is disabled during action.
  },
  image: {
    // This has all ImageStyle properties.
  },
  imageDisabled: {
    // Same properties as `image`. Overrides `image` styles if the image has an on click action and the action cannot be executed or is disabled during action.
  },
};
```

| Element             | Style Properties                    | Description                                                  |
| ------------------- | ----------------------------------- | ------------------------------------------------------------ |
| `container`         | This has all ViewStyle properties.  |                                                              |
| `container`         | `rippleColor`                       | This is the color of the ripple on Android, and will be applied only when the container has an on click action set, otherwise it will be ignored (defaults to `rgba(0, 0, 0, 0.2)`). |
| `container`         | `underlayColor`                     | This is the color while pressing the container on iOS, and will be applied only when the container has an on click action set, otherwise it will be ignored and defaulted to opacity only. |
| `containerDisabled` | Same properties as `container`      | Overrides `container` styles if the image has an on click action and the action cannot be executed or is disabled during action. |
| `image`             | This has all ImageStyle properties. |                                                              |
| `imageDisabled`     | Same properties as `image`.          | Overrides `image` styles if the image has an on click action and the action cannot be executed or is disabled during action. |

The default class to style all static image styles is named `Image`. Please note that images loaded from the model are styled with `NativeDynamicImage` as described in the [Dynamic Image](#dynamic-image) section below.

### Dynamic Image {#dynamic-image}

A dynamic image can be used to display an image. This widget supports the same style properties and structure as the [Static Image](#image) widget above.

The default class to style all dynamic images is named `NativeDynamicImage`.

## Buttons

Buttons help your user perform actions. For more information about these widgets, see [Buttons](/refguide9/button-widgets/).

### Action Button

An action button can perform various actions such as calling a nanoflow, opening a page. 

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/action-button.png" alt="action button"   width="350"  class="no-border" >}}

```javascript
export const ActionButton = {
  container: {
    // All ViewStyle properties
    rippleColor: 'rgba(0, 0, 0, 0.2)', // This is the color of the ripple on Android, and will be applied only when the container has an on click action set, otherwise it will be ignored.
    underlayColor: null, // This is the color while pressing the container on iOS, and will be applied only when the container has an on click action set, otherwise it will be ignored and defaulted to opacity only.
  },
  containerDisabled: {
    // Same properties as `container`. Overrides `container` styles if the button has on click action set and it cannot be executed or is set with `Disable during action`.
  },

  caption: {
    // This has all TextStyle properties.
  },
  captionDisabled: {
    // Same properties as `caption`. Overrides `caption` styles if the button has on click action set and it cannot be executed or is set with `Disable during action`.
  },
  icon: {
    // This has all ViewStyle properties.
    size: 12, // This is the size of the button icon.
    color: null, // This is the color of the button icon.
  },
  iconDisabled: {
    // Same properties as `icon`. Overrides `icon` styles if the button has on click action set and it cannot be executed or is set with `Disable during action`.
  },
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |    |
| `container` | `rippleColor` | This is the color of the ripple on Android (defaults to `rgba(0, 0, 0, 0.2)`). |
| `container`  | `underlayColor` | This is the color while pressing the button on iOS, if not set it will be defaulted to opacity only. |
| `containerDisabled` | Same properties as `container` | Overrides `container` styles if the button has on click action set and it cannot be executed or is set with `Disable during action`. |
| `caption` | This has all TextStyle properties. |   |
| `captionDisabled` | Same properties as `caption` | Overrides `caption` styles if the button has on click action set and it cannot be executed or is set with `Disable during action`. |
| `icon` | This has all ViewStyle properties. |   |
| `icon` | `size` | This is the size of the button icon (defaults to `12`). |
| `icon` | `color` | This is the color of the button icon. |
| `iconDisabled` | Same properties as `icon` | Overrides `icon` styles if the button has on click action set and it cannot be executed or is set with `Disable during action`. |

The default class to style all actions buttons is named `ActionButton`. However, an action button in a header has the default class `ActionButtonHeader`.

## Pages {#pages}

To style pages, you can add classes to a page or its layout. The status bar and header are part of a page and can also be styled this way.

```javascript
export const Page = {
  statusBar: {
    barStyle: null, // The style of the status bar, which can be either `dark-content` (black text) or `light-content` (white text).
    backgroundColor: null, // The background color of the status bar (Android only).
  },
  header: {
    container: {
      // This has all ViewStyle properties.
    },
    title: {
      // This has all TextStyle properties.
    },
    backButtonText: {
      // This has all TextStyle properties.
    },
    backButtonIcon: {
      // This has all ImageStyle properties.
    }
  },
  container: {
    // This has all ImageStyle properties.
  }
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `statusBar` | `barStyle` | The style of the status bar, which can be either `dark-content` (black text) or `light-content` (white text). |
| `statusBar` | `backgroundColor` | The background color of the status bar (Android only). |
| `header` | `container` | This has all ViewStyle properties. |
| `header` | `title` | This has all TextStyle properties. |
| `header` | `backButtonText` | This has all TextStyle properties. |
| `header` | `backButtonIcon` | This has all ImageStyle properties. |
| `container` | This has all ViewStyle properties. |    |

The default classes for layouts and pages are `Layout` and `Page`.

## Navigation {#navigation-widget}

The navigation consists of the bottom bar (which allows users to navigate within your app) and the progress overlay (which can be used to show a loading indicator while waiting for something to load). This is how navigation could look like in an app:

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/nav-widget.png" alt="navigation widget"   width="300"  class="no-border" >}}

```javascript
export const navigationStyle = {
  bottomBar: {
    container: {
      // This has all ViewStyle properties.
    },
    label: {
      // This has all TextStyle properties.
    },
    selectedLabel: {
      // This has all TextStyle properties.
    },
    icon: {
      // This has all TextStyle properties.
    },
    selectedIcon: {
      // This has all ViewStyle properties.
    }
  },
  progressOverlay: {
    background: {
      // This has all ViewStyle properties.
    },
    container: {
      // This has all ViewStyle properties.
    },
    activityIndicator: {
      // This is the same as the `activity indicator` widget.
    },
    text: {
      // This has all TextStyle properties.
    }
  },    
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `bottomBar` | `container` | This has all ViewStyle properties. |
| `bottomBar` | `label` | This has all TextStyle properties. |
| `bottomBar` | `selectedLabel` | This has all TextStyle properties. |
| `bottomBar` | `icon` | This has all TextStyle properties. |
| `bottomBar` | `selectedIcon` | This has all ViewStyle properties. |
| `progressOverlay` | `background` | This has all ViewStyle properties. |
| `progressOverlay` | `container` | This has all ViewStyle properties. |
| `progressOverlay` | `activityIndicator` | This is the same as the [activity indicator](#activity-indicator) widget. |
| `progressOverlay` | `text` | This has all TextStyle properties. |

The default class to style the navigation is named `navigationStyle`. There is no support for custom class styling on navigation.

## Add-Ons

Add-on widgets are distributed through the [Native Mobile Resources](/appstore/modules/native-mobile-resources/) module, and are not shipped with Mendix Studio Pro. Other add-ons might also be distributed through app templates, as well as modules importing pages from other apps. 

### Activity Indicator {#activity-indicator}

The activity indicator widget displays a circular loading indicator. This is how an activity indicator widget could look in an app:

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/activity-indicator.png" alt="activity indicator"   width="350"  class="no-border" >}}

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

### App Events

The app events widget allows you to set actions when your app’s network status is changed, and can let you set limits on action calls. This widget has no user interface so does not support any styling.

### Background Image

The background image widget enables layering one or more widgets on top of an image.

```javascript
export const com_mendix_widget_native_backgroundimage_BackgroundImage = {
  container: {
    // This has all ViewStyle properties.
  },
  image: {
    // This has all ImageStyle properties.
    svgColor: 'black', // Property to set the color of an SVG image.
  }
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |  |
| `image` | This has all ImageStyle properties. |  |
| `image` | `svgColor` | Property to set the color of an SVG image (defaults to `black`). |

The default class to style all background images is named `com_mendix_widget_native_backgroundimage_BackgroundImage`.

### Badge

The badge widget displays text or values as a badge. This is how a badge widget could look in an app:

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/badge.png" alt="badge"   width="350"  class="no-border" >}}

```javascript
export const com_mendix_widget_native_badge_Badge = {
  container: {
    // This has all ViewStyle properties.
  },
  caption: {
    // This has all TextStyle properties.
  }
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |      |
| `caption` | This has all TextStyle properties. |      |

The default class to style all badges is named `com_mendix_widget_native_badge_Badge`.

### Barcode Scanner

The barcode scanner widget allows your app to scan barcodes and QR codes. This widget renders a camera view in a styleable container.

```javascript
export const com_mendix_widget_native_barcodescanner_BarcodeScanner = {
  container: {
    // This has all ViewStyle properties.
  },
  mask: {
    color: '#62B1F6', // Property to set the color of the mask border indicators.
    width: null, // Property to set the width of the barcode reader.
    height: null, // Property to set the height of the barcode reader.
    backgroundColor: 'rgba(0, 0, 0, 0.6)' // Property to set the background color of the mask.
  }
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |  |
| `mask` | This only allows the properties below. |  |
| `mask` | `color` | Property to set the color of the mask border indicators (defaults to `#62B1F6`). |
| `mask` | `width` | Property to set the width of the barcode reader. |
| `mask` | `height` | Property to set the height of the barcode reader. |
| `mask` | `backgroundColor` | Property to set the background color of the mask (defaults to `rgba(0, 0, 0, 0.6)`). |

The default class to style all barcode scanner widgets is named `com_mendix_widget_native_barcodescanner_BarcodeScanner`.

### Feedback

The feedback widget allows users to give direct feedback. This is how a feedback widget could look in an app:

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/feedback-two.png" alt="feedback"   width="350"  class="no-border" >}}

```javascript
export const com_mendix_widget_native_feedback_Feedback = {
  floatingButton: {
    // This has all ViewStyle properties.
  },
  dialog: {
    // This has all ViewStyle properties.
  },
  title: {
    // This has all TextStyle properties.
  },
  textAreaInput: {
    // This has all TextStyle properties.
    placeholderTextColor: null, // This is the text color of the placeholder string.
    selectionColor: null, // This is the highlight and cursor color of the text input.
    underlineColorAndroid: null, // This is the underline color for Android devices.
    numberOfLines: null, // This is the height of the text area is based on this number of text lines.
  },
  switchLabel: {
    // This has all TextStyle properties.
  },
  switchInput: {
    // This has all TextStyle properties.
    trackColorOn: null, // This is the custom color for the switch track when turned on.
    trackColorOff: null, // This is the custom color for the switch track when turned off.
    thumbColorOn: null, // This is the color of the foreground switch grip when turned on. If this is set on iOS, the switch grip will lose its drop shadow.
    thumbColorOff: null, // This is the color of the foreground switch grip when turned off. If this is set on iOS, the switch grip will lose its drop shadow.
  },
  button: {
    borderColor: null, // This is the color of dialog button borders.
    borderWidth: null, // This is the width of dialog button borders.
    color: null, // This is the color of dialog button text.
  },
  buttonDisabled: {
    color: null, // This is the color of dialog button text when disabled.
  },
  activityIndicator: {
    color: null, // This is the color of the activity indicator that is shown while feedback is being submitted.
  },
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `floatingButton` | This has all ViewStyle properties. |    |
| `dialog` | This has all ViewStyle properties. |  |
| `title` | This has all TextStyle properties. |  |
| `textAreaInput` | This has all TextStyle properties. |  |
| `textAreaInput` | `placeholderTextColor` | This is the text color of the placeholder string. |
| `textAreaInput` | `selectionColor` | This is the highlight and cursor color of the text input. |
| `textAreaInput` | `underlineColorAndroid` | This is the underline color for Android devices. |
| `textAreaInput` | `numberOfLines` | This is the height of the text area is based on this number of text lines. |
| `switchLabel` | This has all TextStyle properties. |   |
| `switchInput` | This has all TextStyle properties. |  |
| `switchInput` | `trackColorOn` | This is the custom color for the switch track when turned on. |
| `switchInput` | `trackColorOff` | This is the custom color for the switch track when turned off. |
| `switchInput` | `thumbColorOn` | This is the color of the foreground switch grip when turned on. If this is set on iOS, the switch grip will lose its drop shadow. |
| `switchInput` | `thumbColorOff` | This is the color of the foreground switch grip when turned off. If this is set on iOS, the switch grip will lose its drop shadow. |
| `button` | `borderColor` | This is the color of dialog button borders. |
| `button` | `borderWidth` | This is the width of dialog button borders. |
| `button` | `color` | This is the color of dialog button text. |
| `buttonDisabled` | `color` | This is the color of dialog button text when disabled. |
| `activityIndicator` | `color` | This is the color of the activity indicator that is shown while feedback is being submitted. |

The default class to style all feedback widgets is named `com_mendix_widget_native_feedback_Feedback`. 

### Floating Action Button

The floating action button widget lets you customize the appearance and functionality of floating action buttons. The widget’s style properties are as follows:

```javascript
export const com_mendix_widget_native_floatingactionbutton_FloatingActionButton = {
  container: {
    // This has all ViewStyle properties.
  },
  button: {
    // This has all ViewStyle properties.
    size: null, // This is the radius of the button.
    rippleColor: null, // This is the color of the ripple on Android.
  },
  buttonIcon: {
    // This has all ImageStyle properties.
  },
  secondaryButton: {
    // This has all ViewStyle properties.
    size: null, // This is the radius of the secondary buttons.
  },
  secondaryButtonIcon: {
    // This has all ImageStyle properties.
  },
  secondaryButtonCaption: {
    // This has all TextStyle properties.
  },
  secondaryButtonCaptionContainer: {
    // This has all ViewStyle properties.
  },
};
```

| Element | Style Properties    | Description |
| --- | ---| --- |
| `container` | This has all ViewStyle properties. |  |
| `button` | This has all ViewStyle properties.  |  |
| `button` | `size` | This is the radius of the button. |
| `button` | `rippleColor` | This is the color of the ripple on Android. |
| `buttonIcon` | This has all ImageStyle properties. |  |
| `secondaryButton` | This has all ViewStyle properties.  |  |
| `secondaryButton` | `size` | This is the radius of the secondary buttons. |
| `secondaryButtonIcon` | This has all ImageStyle properties. |  |
| `secondaryButtonCaption` | This has all TextStyle properties.  |  |
| `secondaryButtonCaptionContainer` | This has all ViewStyle properties. |  |

The default class to style all floating actions buttons is named `com_mendix_widget_native_floatingactionbutton_FloatingActionButton`.

### Maps

The maps widget supports various digital map providers. This is how a maps widget could look in an app:

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/maps.png" alt="maps"   width="350"  class="no-border" >}}

```javascript
export const com_mendix_widget_native_maps_Maps = {
  container: {
    // This has all ViewStyle properties.
  },
  loadingOverlay: {
    // This has all ViewStyle properties.
  },
  loadingIndicator: {
    color: null, // This is the color of the loading indicator.
  },
  marker: {
    color: null, // This is the color of the location marker.
    opacity: null, // This is the opacity of the location marker.
  },
};
```

The widget's style properties are as follows:

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |  |
| `loadingOverlay` | This has all ViewStyle properties. |  |
| `loadingIndicator` | `color` | This is the color of the loading indicator. |
| `marker` | `color` | This is the color of the location marker. |
| `marker` | `opacity` | This is the opacity of the location marker. |

The default class to style all map widgets is named `com_mendix_widget_native_maps_Maps`.

### Notifications

The notifications widget lets you display a custom message in your app. This widget has no user interface so does not support any styling.

### Progress Bar

The progress bar widget shows percentage of progress. This is how a progress bar widget could look in an app:

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/progress-bar.png" alt="progress bar"   width="300"  class="no-border" >}}

```javascript
export const com_mendix_widget_native_progressbar_ProgressBar = {
  container: {
    // This has all ViewStyle properties.
  },
  bar: {
    // This has all ViewStyle properties.
  },
  fill: {
    backgroundColor: null, // This is the background color of the filled progress bar portion.
  },
  marker: {
    // This has all TextStyle properties.
  },
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |  |
| `bar` | This has all ViewStyle properties. |  |
| `fill` | `backgroundColor` | This is the background color of the filled progress bar portion. |
| `validationMessage` | This has all TextStyle properties. |  |

The default class to style all progress bars is named `com_mendix_widget_native_progressbar_ProgressBar`.

### Progress Circle

The progress circle widget displays progress in a circle using positive or negative values. This is how a progress circle widget could look in an app:

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/progress-circle.png" alt="progress circle"   width="300"  class="no-border" >}}

```javascript
export const com_mendix_widget_native_progresscircle_ProgressCircle = {
  container: {
    // This has all ViewStyle properties.
  },
  circle: {
    size: null, // This is the radius of the progress circle.
    borderWidth: null, // This is the border width of the progress circle.
    borderColor: null, // This is the color of the progress circle border.
  },
  fill: {
    backgroundColor: null, // This is the color of the circle’s filled portion.
    width: null, // This is the width of the progress circle.
    lineCapRounded: null, // This determines if the rotating line’s front tip is rounded off or not.
  },
  text: {
    // This has all TextStyle properties.
  },
  validationMessage: {
    // This has all TextStyle properties.
  },
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |  |
| `circle` | `size` | This is the radius of the progress circle. |
| `circle` | `borderWidth` | This is the border width of the progress circle. |
| `circle` | `borderColor` | This is the color of the progress circle border. |
| `fill` | `backgroundColor` | This is the color of the circle’s filled portion. |
| `fill` | `width` | This is the width of the progress circle. |
| `fill` | `lineCapRounded` | This determines if the rotating line’s front tip is rounded off or not. |
| `text` | This has all TextStyle properties. |  |
| `validationMessage` | This has all TextStyle properties. |  |

The default class to style all progress circles is named `com_mendix_widget_native_progresscircle_ProgressCircle`.

### QR Code

The QR code widget generates a QR code based on a value, which a user can then scan. This is how a QR code widget could look in an app:

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/qr-code.png" alt="qr code"   width="350"  class="no-border" >}}

```javascript
export const com_mendix_widget_native_qrcode_QRCode = {
  container: {
    // This has all ViewStyle properties.
  },
  qrcode: {
    size: null, // The size of the QR code.
    color: null, // The color of the QR code. 
    borderColor: null, // The background color behind the QR code.
  },
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |   |
| `qrcode` | `size` | The size of the QR code. |
| `qrcode` | `color`| The color of the QR code. |
| `qrcode` | `backgroundColor` | The background color behind the QR code. |

The default class to style all QR codes is named `com_mendix_widget_native_qrcode_QRCode`.

### Range Slider {#range-slider}

The range slider widget allows you to change a range of values using a slider with maximum and minimum bound values. This is how a range slider widget could look in an app:

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/range-slider.png" alt="range slider"   width="300"  class="no-border" >}}

```javascript
export const com_mendix_widget_native_rangeslider_RangeSlider = {
  container: {
    // This has all ViewStyle properties.
  },
  track: {
    // This has all ViewStyle properties.
  },
  trackDisabled: {
    // This has all ViewStyle properties.
  },
  highlight: {
    // This has all ViewStyle properties.
  },
  highlightDisabled: {
    // This has all ViewStyle properties.
  },
  marker: {
    // This has all ViewStyle properties.
  },
  markerActive: {
    // This has all ViewStyle properties.
  },
  markerDisabled: {
    // This has all ViewStyle properties.
  },
  validationMessage: {
    // This has all TextStyle properties.
  },
};
```

| Element | Style Properties    | Description |
| ---| --- | --- |
| `container` | This has all ViewStyle properties. |    |
| `track` | This has all ViewStyle properties. |    |
| `trackDisabled` | This has all ViewStyle properties. |    |
| `highlight` | This has all ViewStyle properties. |    |
| `highlightDisabled` | This has all ViewStyle properties. |    |
| `marker` | This has all ViewStyle properties. |    |
| `markerActive` | This has all ViewStyle properties. |    |
| `markerDisabled` | This has all ViewStyle properties. |    |
| `validationMessage` | This has all TextStyle properties. |    |

The default class to style all range slider inputs is named `com_mendix_widget_native_rangeslider_RangeSlider`.

### Safe Area View

The safe area view widget prevents content from being rendered in unwanted areas, such as behind rounded screen corners or notches. This widget is only supported on iOS apps. Note that `container` styling will only be applied to the safe area.

The widget's style properties are as follows:

```javascript
export const com_mendix_widget_native_safeareaview_SafeAreaView = {
  container: {
    // This has all ViewStyle properties.
  },
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |        |

The default class to style all safe area views is named `com_mendix_widget_native_safeareaview_SafeAreaView`.

### Slider

The slider widget simply allows you to change a number value using a slider. This is how a slider widget could look in an app:

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/slider.png" alt="slider"   width="300"  class="no-border" >}}

This widget supports the same style properties as the [range slider](#range-slider) widget above.

The default class to style all slider inputs is named `com_mendix_widget_native_slider_Slider`.

### Ratings

The ratings widget allows users to rate an object from 0 to 5. This is how a ratings widget could look in an app:

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/ratings.png" alt="ratings"   width="350"  class="no-border" >}}

```javascript
export const com_mendix_widget_native_rating_Rating = {
  container: {
    // This has all ViewStyle properties.
  },
  containerDisabled: {
    // This has all ViewStyle properties.
  },
  icon: {
    // This has all ViewStyle properties.
    size: null, // The size of the icon.
    color: null, // The color of the icon.
    selectedColor: null, // The color of the icon when selected.
  },
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |  |
| `containerDisabled` | This has all ViewStyle properties. |  |
| `icon` | This has all ViewStyle properties. |  |
| `icon` | `size` | The size of the icon. |
| `icon` | `color` | The color of the icon. |
| `icon` | `selectedColor` | The color of the icon when selected. |

The default class to style all rating inputs is named `com_mendix_widget_native_rating_Rating`.

### Toggle Buttons

The toggle buttons widget allows you to set an enumeration attribute. This is how a toggle buttons widget could look in an app:

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/toggle-buttons.png" alt="toggle buttons"   width="350"  class="no-border" >}}

```javascript
export const com_mendix_widget_native_togglebuttons_ToggleButtons = {
  container: {
    // This has all ViewStyle properties.
  },
  containerDisabled: {
    // This has all ViewStyle properties.
  },
  button: {
    // This has all ViewStyle properties.
  },
  text: {
    // This has all TextStyle properties.
  },
  activeButton: {
    // This has all ViewStyle properties.
  },
  activeButtonText: {
    // This has all TextStyle properties.
  },
  validationMessage: {
    // This has all TextStyle properties.
  },
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |       |
| `containerDisabled` | This has all ViewStyle properties. |       |
| `button` | This has all ViewStyle properties. |       |
| `text` | This has all TextStyle properties. |       |
| `activeButton` | This has all ViewStyle properties. |       |
| `activeButtonText` | This has all TextStyle properties. |       |
| `validationMessage` | This has all TextStyle properties. |       |

The default class to style all toggle buttons is named `com_mendix_widget_native_togglebuttons_ToggleButtons`.

### Video Player

The video player widget allows you to play video based on a URL, and is limited to MP4 only. This is how a video player widget could look in an app:

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/video-player.png" alt="video player"   width="300"  class="no-border" >}}

```javascript
export const com_mendix_widget_native_videoplayer_VideoPlayer = {
  container: {
    // This has all ViewStyle properties.
  },
  indicator: {
    color: null, // The loading indicator color.
  },
  video: {
    // This has all ViewStyle properties.
  },
  errorMessage: {
    // This has all TextStyle properties.
  },
  fullScreenVideoPlayer: {
    // This has all ViewStyle properties. Android only.
  },
  controlBtnContainerStyle: {
    // This has all ViewStyle properties. Android only.
  },
  fullScreenVideoStyle: {
    // This has all ViewStyle properties. Android only. 
  },
  fullScreenActivityIndicatorStyle: {
    // This has all ViewStyle properties. Android only.
  },
};
```

The widget’s style properties are as follows:

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |        |
| `indicator` | `color` | The loading indicator color. |
| `video` | This has all ViewStyle properties. |      |
| `errorMessage` | This has all TextStyle properties. |      |
| `fullScreenVideoPlayer` | This has all ViewStyle properties. | Android only |
| `controlBtnContainerStyle` | This has all ViewStyle properties. | Android only |
| `fullScreenVideoStyle` | This has all ViewStyle properties. | Android only |
| `fullScreenActivityIndicatorStyle` | This has all ViewStyle properties. | Android only |

The default class to style all video players is named `com_mendix_widget_native_videoplayer_VideoPlayer`.

### Web View

The web view widget allows you to embed static or dynamic websites in your app. The widget's style properties are as follows:

```javascript
export const com_mendix_widget_native_webview_WebView = {
  container: {
    // This has all ViewStyle properties.
  },
  errorContainer: {
    // This has all ViewStyle properties.
  },
  errorText: {
    // This has all TextSTyle properties.
  },
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. |      |
| `errorContainer` | This has all ViewStyle properties. |      |
| `errorText` | This has all TextStyle properties. |     |

The default class to style all web views is named `com_mendix_widget_native_webview_WebView`. 

### Animation

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
| `container` | This has all ViewStyle properties. |      |

The default class to style all animation widgets is named `com_mendix_widget_native_animation_Animation`.

### Introduction Screen

This introduction screen widget displays paginated contents you can swipe through, and offers buttons on each page to proceed or go back:

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/intro-screen.gif" alt="intro screen"   width="350"  class="no-border" >}}

```javascript
export const com_mendix_widget_native_animation_Animation = {
  fullscreenContainer: {
    // This has all ViewStyle properties.
  },
  popupContainer: {
    // This has all ViewStyle properties.
  },
  paginationContainer: {
    // This has all ViewStyle properties.
  },
  paginationText: {
    // This has all TextStyle properties.
  },
  dotStyle: {
    // This has all ViewStyle properties.
  },
  activeDotStyle: {
    // This has all ViewStyle properties.
  },
  buttonsContainer: {
    // This has all ViewStyle properties.
  },
  container: {
    // This has all ViewStyle properties. Meant for buttonSkip, buttonDone, buttonPrevious, and buttonNext.
  },
  caption: {
    // This has all ViewStyle properties.
  },
  icon: {
    size: null, // The size of the icon.
    color: null, // The color of the icon.
  },
};
```

| Element | Style Properties | Description |
| --- | --- | --- |
| `fullscreenContainer` | This has all ViewStyle properties. | |
| `popupContainer` | This has all ViewStyle properties. | |
| `paginationContainer` | This has all ViewStyle properties. | |
| `paginationText` | This has all TextStyle properties. | |
| `dotStyle` | This has all ViewStyle properties. | |
| `activeDotStyle` | This has all ViewStyle properties. | |
| `buttonsContainer` | This has all ViewStyle properties. | |
| `container` | This has all ViewStyle properties. | Meant for buttonSkip, buttonDone, buttonPrevious, and buttonNext. |
| `caption` | This has all ViewStyle properties. | |
| `icon` | `size` | The size of the icon. |
| `icon` | `color` | The color of the icon. |

The default class to style all into screen widgets is named `com_mendix_widget_native_introscreen_IntroScreen`.

### List View Swipe

The list view swipe widget can make a list view interactive by adding swipe gestures and extra buttons in the background behind a list item:

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/list-view-swipe-buttons.gif" alt="list view swipe"   width="350"  class="no-border" >}}

```javascript
export const com_mendix_widget_native_listviewswipe_ListViewSwipe = {
  container: {
    // This has all ViewStyle properties.
  },
  leftAction: {
    // This has all ViewStyle properties.
    panelSize: null, // The number of pixels and the combined size of the background buttons.
    threshold: null, // The number of pixels to accept the swipe action.
  },
  rightAction: {
    // This has all ViewStyle properties.
    panelSize: null, // The number of pixels and the combined size of the background buttons.
    threshold: null, // The number of pixels to accept the swipe action.
  },
};
```

| Element | Style Properties | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. | |
| `leftAction` | This has all ViewStyle properties. | |
| `leftAction` |`panelSize` | The number of pixels and the combined size of the background buttons. |
| `leftAction` |`threshold` | The number of pixels to accept the swipe action. |
| `rightAction` | This has all ViewStyle properties. | |
| `rightAction` |`panelSize` | The number of pixels and the combined size of the background buttons. |
| `rightAction` |`threshold` | The number of pixels to accept the swipe action. |

The default class to style all animation widgets is named `com_mendix_widget_native_listviewswipe_ListViewSwipe`.

### Bottom Sheet

The bottom sheet widget creates a set of options while blocking interaction with the rest of the screen or a draggable surface anchored to the bottom of the screen. There are two customizable variations:

* Modal bottom sheet:

    {{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/modal-bottom-sheet.gif" alt="modal bottom sheet"   width="350"  class="no-border" >}}

* Expanding bottom sheet:

    {{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/expanding-bottom-sheet.gif" alt="expanding bottom sheet"   width="350"  class="no-border" >}}

```javascript
export const com_mendix_widget_native_bottomsheet_BottomSheet = {
  container: {
    // This has all ViewStyle properties.
  },
  containerWhenExpandedFullscreen: {
    // This has all ViewStyle properties. This has all ViewStyle properties. Only available if `Expading` and `Enable full screen` are enabled.
  },
  modal: {
    // This has all ViewStyle properties. 
  },
  defaultStyle: {
    // This has all TextStyle properties. Available when `Default` is selected as style for basic items.
  },
  primaryStyle: {
    // This has all TextStyle properties. Available when `Primary` is selected as style for basic items.
  },
  dangerStyle: {
    // This has all TextStyle properties. Available when `Danger` is selected as style for basic items.
  },
  customStyle: {
    // This has all TextStyle properties. Available when `Custom` is selected as style for basic items.
  },
};
```

| Element | Style Properties | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties. | |
| `containerWhenExpandedFullscreen` | This has all ViewStyle properties. | Only available if `Expading` and `Enable full screen` are enabled. |
| `modal` | This has all ViewStyle properties. | |
| `defaultStyle` | This has all TextStyle properties. | Available when `Default` is selected as style for basic items. |
| `primaryStyle` | This has all TextStyle properties. | Available when `Primary` is selected as style for basic items. |
| `dangerStyle` | This has all TextStyle properties. | Available when `Danger` is selected as style for basic items. |
| `customStyle` | This has all TextStyle properties. | Available when `Custom` is selected as style for basic items. |

The default class to style all bottom sheet widgets is named `com_mendix_widget_native_bottomsheet_BottomSheet`.

### Popup Menu

The popup menu widget allows you to show a context menu exactly where the user taps.

A main object has four objects:

```javascript
export const com_mendix_widget_native_popupmenu_PopupMenu = {
  basic: {
  // BasicItemStyle. Styles basic items.
    containerStyle: {
      // This has all ViewStyle properties. Styles the wrapper container around a basic item. 
    },
    itemStyle: {
      ellipsizeMode: null, // 'head', 'middle', 'tail', or 'clip'. Styles how the text will be clipped if its too long.
      rippleColor: null, // Styles the color of touch feedback when item is tapped. Works for both iOS and Android platforms.
      defaultStyle: {
        // This has all TextStyle properties. Styles all basic menu items which have the `default` style selected.
      },
      primaryStyle: {
        // This has all TextStyle properties. Styles all basic menu items which have the `primary` style selected.
      },
      dangerStyle: {
        // This has all TextStyle properties. Styles all basic menu items which have the `danger` style selected.
      },
      customStyle: {
        // This has all TextStyle properties. Styles all basic menu items which have the `custom` style selected.
      },
    },
    dividerColor: null, // Styles the divider color. 
  },

  custom: {
    // CustomItemStyle. Styles custom items.
    // This has the same properties as BasicItemStyle.
  },

  buttonContainer: {
    // This has all ViewStyle properties. Styles the wrapper view of triggerer since there could be multiple elements, and it has to be wrapped in a view. 
  },
  container: {
    // This has all ViewStyle properties. Styles the wrapper view around the whole menu.
  },
};
```

| Element | Style Properties | Description  |
| ---| --- | ---|
| `basic`     | BasicItemStyle |Styles basic items.  |
| `custom`    | CustomItemStyle |Styles custom items.  |
| `buttonContainer` | This has all ViewStyle properties. | Styles the wrapper view of triggerer since there could be multiple elements, and it has to be wrapped in a view. |
| `container` | This has all ViewStyle properties. | Styles the wrapper view around the whole menu. |

#### BasicItemStyle

| Element    | Style Properties |  Description     |
| ----| ---- | ------ |
| `containerStyle` | This has all ViewStyle properties. | Styles the wrapper container around a basic item. |
| `itemStyle` | ItemStyle      | Styles the basic items.      |
| `dividerColor` | `string`      | Styles the divider color.    |

#### ItemStyle

| Element | Style Properties  | Description  |
| -------------| ----- | ----- |
| `ellipsizeMode` | `head`, `middle`, `tail`, or `clip` | Styles how the text will be clipped if its too long. |
| `rippleColor` | `string`      | Styles the color of touch feedback when item is tapped. Works for both iOS and Android platforms. |
| `defaultStyle` |  This has all TextStyle properties. | Styles all basic menu items which have the `default` style selected.   |
| `primaryStyle` |  This has all TextStyle properties. | Styles all basic menu items which have the `primary` style selected.   |
| `dangerStyle` |  This has all TextStyle properties. | Styles all basic menu items which have the `danger` style selected.   |
| `customStyle` |  This has all TextStyle properties.  | Styles all basic menu items which have the `custom` style selected.  |

#### CustomItemStyle

| Element                   | Style Properties |  Description                                      |
| ---------------------------| ---- | ------------------------------------------------ |
| `containerStyle` | This has all ViewStyle properties. | Styles the wrapper container around a custom item. |
| `itemStyle` | `rippleColor: string`      | Styles the color of touch feedback when item is tapped. Works for both iOS and Android platforms. |
| `dividerColor` | `string`      | Styles the divider color.                         |

The default class to style all popup menus is named `com_mendix_widget_native_popupmenu_PopupMenu`.

### Carousel

The carousel widget allows you to show swipeable items in a carousel.

Main object has to have three objects called `container`, `cardLayout`, and `fullWidthLayout`. `cardLayout` and `fullWidthLayout` will be applied automatically depending on selected layout in widget properties.

```javascript
export const com_mendix_widget_native_carousel_Carousel = {
  container: {
    // This has all ViewStyle properties. Styles the view surrounding the carousel widget. For best results, make sure to give a fixed `height`
  },
  cardLayout: {
    // Styles the carousel when the layout is set to card.     
    slideItem: {
      // This has all ViewStyle properties. Styles the view surrounding each slide, including inactive slides.
    },
    inactiveSlideItem: {
      opacity: null, // Allows inactive slides to become more smaller and faded.   
      scale: null, // Allows inactive slides to become more smaller and faded.   
    },
    indicator: {
      color: null, // Styles the loading indicator which will be shown while the carousel is loading.
    },
    pagination: {
      container: {
        // This has all ViewStyle properties. Styles the main view around pagination, regardless of text or dot.
      },
      dotStyle: {
        // This has all ViewStyle properties. Styles all the pagination dots.   
  color: null, 
      },
      inactiveDotStyle: {
        // This has all ViewStyle properties. Additional styles for inactive dots. Will be merged with `dotStyle`.
  opacity: null,
  scale: null,
  color: null,
      },
      dotContainerStyle: {
        // This has all ViewStyle properties. Styles the view around individual pagination dots.  
      },
      text: {
        // This has all TextStyle properties. Will be applied when there are more than five elements in carousel, in which case pagination buttons become text like **1/5**.
      },
    },
  },

  fullWidthLayout: {
    // Styles the carousel when the layout is set to full width.
    // Same properties as cardLayout.
  },
};
```

| Element  | Style Properties | Description    |
| --- | --- | --- |
| container | This has all ViewStyle properties. | Styles the view surrounding the carousel widget. For best results, make sure to give a fixed `height`.                             |
| cardLayout | LayoutStyle | Styles the carousel when the layout is set to card  |
| fullWidthLayout | LayoutStyle  | Styles the carousel when the layout is set to full width. |

#### LayoutStyle

| Element | Style Properties | Description   |
| --- | --- | --- |
| slideItem | This has all ViewStyle properties.  | Styles the view surrounding each slide, including inactive slides.  |
| inactiveSlideItem | `opacity: number, scale: number` | `inactiveSlideOpacity` and `inactiveSlideScale`, will allow inactive slides smaller and faded. |
| indicator | `color: string`  | Styles the loading indicator which will be shown while the carousel is loading.   |
| pagination | Pagination  | Styles pagination container, dots, active dots, and text.  |

#### Pagination

| Element | Style Properties | Description  |
| ---|--- | --- |
| container | This has all ViewStyle properties.  | Styles the main view around pagination, regardless of text or dot.   |
| dotStyle | All ViewStyle properties + `color: string` | Styles all the pagination dots.  |
| inactiveDotStyle|  All ViewStyle properties + `opacity: number; scale: number; color: string` | Additional styles for inactive dots. Will be merged with `dotStyle`.  |
| dotContainerStyle | This has all ViewStyle properties. | Styles the view around individual pagination dots.  |
| text | This has all TextStyle properties.| Will be applied when there are more than five elements in carousel, in which case pagination buttons become text like **1/5**. |

The default class to style all popup menus is named `com_mendix_widget_native_carousel_Carousel`.

### Signature {#signature}

The signature widget allows you to draw and save a signature. The signature widget looks like this: 

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/signature.png" alt="signature"   width="350"  class="no-border" >}}

```javascript
export const com_mendix_widget_native_signature_Signature = {
  container: {
    // This has all ViewStyle properties. 
    penColor: null, // This will change the color of the stroke.
  },
  buttonWrapper: {
    // This has all ViewStyle properties. 
  },
  buttonClearContainer: {
    // This has all ViewStyle properties. 
    rippleColor: null, // This will change the color of the ripple on Android.
    activeOpacity: null, // This will change the opacity when touch is active on iOS.
    underlayColor: null, // This will change the underlay color when touch is active on iOS.
  },
  buttonClearCaption: {
    // This has all TextStyle properties. 
  },
  buttonSaveContainer: {
    // This has all ViewStyle properties.
  },
  buttonSaveContainer: {
    // This has all ViewStyle properties. 
    rippleColor: null, // This will change the color of the ripple on Android.
    activeOpacity: null, // This will change the opacity when touch is active on iOS.
    underlayColor: null, // This will change the underlay color when touch is active on iOS.
  }, 
  buttonSaveCaption: {
    // This has all TextStyle properties.
  },
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties.   |   |
| `container` | `penColor` | This will change the color of the stroke. |
| `buttonWrapper` | This has all ViewStyle properties. | |
| `buttonClearContainer` | This has all ViewStyle properties. | |
| `buttonClearContainer` | `rippleColor` | This will change the color of the ripple on Android.  |
| `buttonClearContainer` | `activeOpacity` | This will change the opacity when touch is active on iOS.  |
| `buttonClearContainer` | `underlayColor` | This will change the underlay color when touch is active on iOS.  |
| `buttonClearCaption` | This has all TextStyle properties. | |
| `buttonSaveContainer` | This has all ViewStyle properties. | |
| `buttonSaveContainer` | `rippleColor` | This will change the color of the ripple on Android.  |
| `buttonSaveContainer` | `activeOpacity` | This will change the opacity when touch is active on iOS.  |
| `buttonSaveContainer` | `underlayColor` | This will change the underlay color when touch is active on iOS.  |
| `buttonSaveCaption` | This has all TextStyle properties. | |

The default class to style all text boxes is named `com_mendix_widget_native_signature_Signature`.

### Line Chart

The [line chart](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/line-chart-native) widget renders a scalable line graph based on static and dynamic data sets.

```javascript
export const com_mendix_widget_native_linechart_LineChart = {
  container: {
    // This has all ViewStyle properties. 
  },
  errorMessage: {
    // This has all TextStyle properties. 
  },
  chart: {
    // This has all ViewStyle properties. 
  },
  grid: {
    backgroundColor: null, // Applies a color to the grid background (string).
    dashArray: null, // Applies a pattern of dashes and gaps to the grid lines (string containing a [dash pattern](https://www.w3.org/TR/SVG11/painting.html#StrokeDasharrayProperty).
    lineColor: null, // Applies a color to the grid lines (string).
    lineWidth: null, // Applies a width to the grid lines (number).
    padding: null, // Applies padding to all sides of the grid (number). Use it to make axis value labels visible.
    paddingBottom: null, // Applies padding to the bottom side of the grid (number). Use it to make axis value labels visible.
    paddingHorizontal: null, // Applies padding to the horizontal sides of the grid (number). Use it to make axis value labels visible.
    paddingLeft: null, // Applies padding to the left side of the grid (number). Use it to make axis value labels visible.
    paddingRight: null, // Applies padding to the right side of the grid (number). Use it to make axis value labels visible.
    paddingTop: null, // Applies padding to the top side of the grid (number). Use it to make axis value labels visible.
    paddingVertical: null, // Applies padding to the vertical sides of the grid (number). Use it to make axis value labels visible.
  },
  xAxis: {
    color: null, // Applies a color to the axis value labels (string).
    dashArray: null, // Applies a pattern of dashes and gaps to the axis line (string containing a [dash pattern](https://www.w3.org/TR/SVG11/painting.html#StrokeDasharrayProperty)).
    fontFamily: null, // Applies fonts to the axis value labels (string).
    fontSize: null, // Applies a size to the axis value labels (number).
    fontStyle: null, // Applies a font style to the axis value labels ("normal" or "italic").
    fontWeight: null, // Applies a font weight to the axis value labels ("normal" or "bold" or "100" or "200" or "300" or "400" or "500" or "600" or "700" or "800" or "900").
    lineColor: null, // Applies a color to the axis line (string).
    lineWidth: null, // Applies a width to the axis line (number).
    label: { 
      // All TextStyle properties.
      relativePositionGrid: null, // Positions the axis label at the bottom or right side of the grid ("bottom" or "right").
    },
  },
  yAxis: {
    // All `xAxis` element styles.
  },
  legend: {
    container: {
      // All ViewStyle properties.
    },
    item: {
      // All ViewStyle properties. 
    },
    indicator: {
      // All ViewStyle properties. 
    },
    label: {
      // All ViewStyle properties. 
    }
  },
  lines: {
    lineColorPalette: null, // Provides colors to lines that do not have a line color configured (string with list of colors separated by ';').
    customLineStyles: {
      any_custom_line_style_name: {
        line: {
          dashArray: null, // Applies a pattern of dashes and gaps to the graph line (string containing a [dash pattern](https://www.w3.org/TR/SVG11/painting.html#StrokeDasharrayProperty)).
          ending: null, // Applies a flat or rounded line end to the graph line ("flat" or "round").
          lineColor: null, // Applies a color to the graph line (string).
          lineWidth: null, // Applies a width to the graph line (number).
        },
        markers: {
          backgroundColor: null, // Applies a background color to the markers of the graph line (string).
          borderColor: null, // Applies a border color to the markers of the graph line (string).
          borderWidth: null, // Applies a border width to the markers of the graph line (string).
          display: null, // Influences whether markers are displayed. When displayed, it positions the markers of the graph line on top or underneath the line ("false" or "underneath" or "onTop").
          size: null, // Applies a size to the markers of the graph line (number).
          symbol: null, // Applies a symbol to the markers of the graph line ("circle" or "diamond" or "plus" or "minus" or "square" or "star" or "triangleDown" or "triangleUp").
        }
      }
    }
  }
};
```

| Element | Style Properties | Description |
| --- | --- | --- |
| `container` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | |
| `errorMessage` | All [TextStyle](https://reactnative.dev/docs/text-style-props) properties. | |
| `chart` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | |
| `grid` | `backgroundColor` | Applies a color to the grid background (string). |
| `grid` | `dashArray` | Applies a pattern of dashes and gaps to the grid lines (string containing a [dash pattern](https://www.w3.org/TR/SVG11/painting.html#StrokeDasharrayProperty)). |
| `grid` | `lineColor` | Applies a color to the grid lines (string). |
| `grid` | `lineWidth` | Applies a width to the grid lines (number). |
| `grid` | `padding` | Applies padding to all sides of the grid (number). Use it to make axis value labels visible. |
| `grid` | `paddingBottom` | Applies padding to the bottom side of the grid (number). Use it to make axis value labels visible. |
| `grid` | `paddingHorizontal` | Applies padding to the horizontal sides of the grid (number). Use it to make axis value labels visible. |
| `grid` | `paddingLeft` | Applies padding to the left side of the grid (number). Use it to make axis value labels visible. |
| `grid` | `paddingRight` | Applies padding to the right side of the grid (number). Use it to make axis value labels visible. |
| `grid` | `paddingTop` | Applies padding to the top side of the grid (number). Use it to make axis value labels visible. |
| `grid` | `paddingVertical` | Applies padding to the vertical sides of the grid (number). Use it to make axis value labels visible. |
| `xAxis` | `color` | Applies a color to the axis value labels (string). |
| `xAxis` | `dashArray` | Applies a pattern of dashes and gaps to the axis line (string containing a [dash pattern](https://www.w3.org/TR/SVG11/painting.html#StrokeDasharrayProperty)). |
| `xAxis` | `fontFamily` | Applies fonts to the axis value labels (string). |
| `xAxis` | `fontSize` | Applies a size to the axis value labels (number). |
| `xAxis` | `fontStyle` | Applies a font style to the axis value labels ("normal" or "italic"). |
| `xAxis` | `fontWeight` | Applies a font weight to the axis value labels ("normal" or "bold" or "100" or "200" or "300" or "400" or "500" or "600" or "700" or "800" or "900"). |
| `xAxis` | `lineColor` | Applies a color to the axis line (string). |
| `xAxis` | `lineWidth` | Applies a width to the axis line (number). |
| `xAxis` > `label` | All [TextStyle](https://reactnative.dev/docs/text-style-props) properties. | |
| `xAxis` > `label` | `relativePositionGrid` | Positions the axis label at the bottom or right side of the grid ("bottom" or "right"). |
| `yAxis` | All `xAxis` element styles. | |
| `yAxis` > `label` | All [TextStyle](https://reactnative.dev/docs/text-style-props) properties. | |
| `yAxis` > `label` | `relativePositionGrid` | Positions the axis label at the top or left side of the grid ("top" or "left"). |
| `legend` > `container` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | |
| `legend` > `item` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | |
| `legend` > `indicator` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | |
| `legend` > `label` | All [TextStyle](https://reactnative.dev/docs/text-style-props) properties. | |
| `lines` | `lineColorPalette` | Provides colors to lines that do not have a line color configured (string with list of colors separated by ';'). |
| `lines` > `customLineStyles` > `any_custom_line_style_name` > `line` | `dashArray` | Applies a pattern of dashes and gaps to the graph line (string containing a [dash pattern](https://www.w3.org/TR/SVG11/painting.html#StrokeDasharrayProperty)). |
| `lines` > `customLineStyles` > `any_custom_line_style_name` > `line` | `ending` | Applies a flat or rounded line end to the graph line ("flat" or "round"). |
| `lines` > `customLineStyles` > `any_custom_line_style_name` > `line` | `lineColor` | Applies a color to the graph line (string). |
| `lines` > `customLineStyles` > `any_custom_line_style_name` > `line` | `lineWidth` | Applies a width to the graph line (number). |
| `lines` > `customLineStyles` > `any_custom_line_style_name` > `markers` | `backgroundColor` | Applies a background color to the markers of the graph line (string). |
| `lines` > `customLineStyles` > `any_custom_line_style_name` > `markers` | `borderColor` | Applies a border color to the markers of the graph line (string). |
| `lines` > `customLineStyles` > `any_custom_line_style_name` > `markers` | `borderWidth` | Applies a border width to the markers of the graph line (string). |
| `lines` > `customLineStyles` > `any_custom_line_style_name` > `markers` | `display` | Influences whether markers are displayed. When displayed, it positions the markers of the graph line on top or underneath the line ("false" or "underneath" or "onTop"). |
| `lines` > `customLineStyles` > `any_custom_line_style_name` > `markers` | `size` | Applies a size to the markers of the graph line (number). |
| `lines` > `customLineStyles` > `any_custom_line_style_name` > `markers` | `symbol` | Applies a symbol to the markers of the graph line ("circle" or "diamond" or "plus" or "minus" or "square" or "star" or "triangleDown" or "triangleUp"). |

The default class to style all line chart widgets is named `com_mendix_widget_native_linechart_LineChart`.

### Bar Chart

The [Bar Chart](https://github.com/mendix/widgets-resources/tree/master/packages/pluggableWidgets/bar-chart-native) widget renders a horizontal bar graph based on static and dynamic data sets.

```javascript
export const com_mendix_widget_native_barchart_BarChart = {
  container: {
    // This has all ViewStyle properties. 
  },
  errorMessage: {
    // This has all TextStyle properties. 
  },
  chart: {
    // This has all ViewStyle properties. 
  },
  grid: {
    backgroundcolor: null, // Applies a color to the grid background (string).
    dashArray: null, //  Applies a pattern of dashes and gaps to the grid lines (string containing a [dash pattern](https://www.w3.org/TR/SVG11/painting.html#StrokeDasharrayProperty)).
    lineColor: null, // Applies a color to the grid lines (string).
    width: null, // Applies a width to the grid lines (number).
    padding: null, // Applies padding to all sides of the grid (number). This makes axis value labels visible.
    paddingBottom: null, // Applies padding to the bottom side of the grid (number). This makes axis value labels visible.
    paddingHorizontal: null, // Applies padding to the horizontal sides of the grid (number). This makes axis value labels visible.
    paddingLeft: null, // Applies padding to the left side of the grid (number). This makes axis value labels visible.
    paddingRight: null, // Applies padding to the right side of the grid (number). This makes axis value labels visible.
    paddingTop: null, // Applies padding to the top side of the grid (number). This makes axis value labels visible.
    paddingVertical: null, // Applies padding to the vertical sides of the grid (number). This makes axis value labels visible.
  },
  xAxis: {
    color: null, // Applies a color to the grid background (string).
    dashArray: null, // Applies a pattern of dashes and gaps to the axis line (string containing a [dash pattern](https://www.w3.org/TR/SVG11/painting.html#StrokeDasharrayProperty)).
    fontFamily: null, // Applies a font type to the axis value labels (string).
    fontSize: null, // Applies a size to the axis value labels (number).
    fontStyle: null, // Applies a font style to the axis value labels ("normal" or "italic").
    fontWeight: null, // Applies a font weight to the axis value labels ("normal" or "bold" or "100" or "200" or "300" or "400" or "500" or "600" or "700" or "800" or "900").
    lineColor: null, // Applies a color to the axis line (string).
    width: null, // Applies a width to the axis line (number).
    label: {
      // All TextStyle properties.
      relativePositionGrid: null, // Positions the axis label at the **bottom** or **right** side of the grid.
    }
  },
  yAxis: {
    // All `xAxis` element styles.
  },
  legend: {
    container: {
      // All ViewStyle properties.
    },
    item: {
      // All ViewStyle properties.
    },
    indicator: {
      // All ViewStyle properties.
    },
    label: {
      // All TextStyle properties.
    }
  },
  domain: {
    padding: {
      x: null, // Applies a number of pixels of padding to add the beginning and end of the X axis domain (number).
      y: null, // Applies a number of pixels of padding to add the beginning and end of the y axis domain (number).
    },
  },
  bars: {
    barColorPalette: null, // Provides colors to bars that do not have a bar color configured (string with list of colors separated by ';', one color for each series).
    barsoffset: null, // Determines the number of pixels each bar in a group should be offset from its original position on the Y axis (number). This is only applicable when presentation mode is **Grouped**.
    customBarStyles: {
      any_custom_bar_style_name: {
        bar: {
          ending: null, // Specifies a radius to apply to each bar.
          barcolor: null, // Applies a color to the bar (string). If bars are configured to have labels, the labels will be the same color as the bar.
          width: null, // Applies a width to the bar (number).
        },
        label: {
          fontFamily: null, // Applies a font type to the bar label (string).
          fontSize: null, // Applies a size to the bar label (number).
          fontStyle: null, // Applies a font style to the bar label (**normal** or **italic**).
          fontWeight: null, // Applies a font weight to the bar label ("normal" or "bold" or "100" or "200" or "300" or "400" or "500" or "600" or "700" or "800" or "900").
        }
      }
    }
  }
};
```

| Element | Style Properties | Description |
| --- | --- | --- |
| `container` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | |
| `errorMessage` | All [TextStyle](https://reactnative.dev/docs/text-style-props) properties. | |
| `chart` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | |
| `grid` | `backgroundColor` | Applies a color to the grid background (string). |
| `grid` | `dashArray` | Applies a pattern of dashes and gaps to the grid lines (string containing a [dash pattern](https://www.w3.org/TR/SVG11/painting.html#StrokeDasharrayProperty)). |
| `grid` | `lineColor` | Applies a color to the grid lines (string). |
| `grid` | `width` | Applies a width to the grid lines (number). |
| `grid` | `padding` | Applies padding to all sides of the grid (number). This makes axis value labels visible. |
| `grid` | `paddingBottom` | Applies padding to the bottom side of the grid (number). This makes axis value labels visible. |
| `grid` | `paddingHorizontal` | Applies padding to the horizontal sides of the grid (number). This makes axis value labels visible. |
| `grid` | `paddingLeft` | Applies padding to the left side of the grid (number). This makes axis value labels visible. |
| `grid` | `paddingRight` | Applies padding to the right side of the grid (number). This makes axis value labels visible. |
| `grid` | `paddingTop` | Applies padding to the top side of the grid (number). This makes axis value labels visible. |
| `grid` | `paddingVertical` | Applies padding to the vertical sides of the grid (number). This makes axis value labels visible. |
| `xAxis` | `color` | Applies a color to the axis value labels (string). |
| `xAxis` | `dashArray` | Applies a pattern of dashes and gaps to the axis line (string containing a [dash pattern](https://www.w3.org/TR/SVG11/painting.html#StrokeDasharrayProperty)). |
| `xAxis` | `fontFamily` | Applies a font type to the axis value labels (string). |
| `xAxis` | `fontSize` | Applies a size to the axis value labels (number). |
| `xAxis` | `fontStyle` | Applies a font style to the axis value labels ("normal" or "italic"). |
| `xAxis` | `fontWeight` | Applies a font weight to the axis value labels ("normal" or "bold" or "100" or "200" or "300" or "400" or "500" or "600" or "700" or "800" or "900"). |
| `xAxis` | `lineColor` | Applies a color to the axis line (string). |
| `xAxis` | `width` | Applies a width to the axis line (number). |
| `xAxis` > `label` | All [TextStyle](https://reactnative.dev/docs/text-style-props) properties. | |
| `xAxis` > `label` | `relativePositionGrid` | Positions the axis label at the **bottom** or **right** side of the grid. |
| `yAxis` | All `xAxis` element styles. | |
| `yAxis` > `label` | All [TextStyle](https://reactnative.dev/docs/text-style-props) properties. | |
| `yAxis` > `label` | `relativePositionGrid` | Positions the axis label at the **top** or **left** side of the grid. |
| `legend` > `container` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | |
| `legend` > `item` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | |
| `legend` > `indicator` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | |
| `legend` > `label` | All [TextStyle](https://reactnative.dev/docs/text-style-props) properties. | |
| `domain` > `padding` | `x` | Applies a number of pixels of padding to add the beginning and end of the X axis domain (number). |
| `domain` > `padding` | `y` | Applies a number of pixels of padding to add the beginning and end of the Y axis domain (number). |
| `bars` | `barColorPalette` | Provides colors to bars that do not have a bar color configured (string with list of colors separated by ';', one color for each series). |
| `bars` | `barsOffset` | Determines the number of pixels each bar in a group should be offset from its original position on the Y axis (number). This is only applicable when presentation mode is **Grouped**. |
| `bars` > `customBarStyles` > `any_custom_bar_style_name` > `bar` | `ending` | Specifies a radius to apply to each bar. |
| `bars` > `customBarStyles` > `any_custom_bar_style_name` > `bar` | `barColor` | Applies a color to the bar (string). If bars are configured to have labels, the labels will be the same color as the bar. |
| `bars` > `customBarStyles` > `any_custom_bar_style_name` > `bar` | `width` | Applies a width to the bar (number). |
| `bars` > `customBarStyles` > `any_custom_bar_style_name` > `label` | `fontFamily` | Applies a font type to the bar label (string). |
| `bars` > `customBarStyles` > `any_custom_bar_style_name` > `label` | `fontSize` | Applies a size to the bar label (number). |
| `bars` > `customBarStyles` > `any_custom_bar_style_name` > `label` | `fontStyle` | Applies a font style to the bar label (**normal** or **italic**). |
| `bars` > `customBarStyles` > `any_custom_bar_style_name` > `label` | `fontWeight` | Applies a font weight to the bar label ("normal" or "bold" or "100" or "200" or "300" or "400" or "500" or "600" or "700" or "800" or "900"). |

The default class to style all bar chart widgets is named `com_mendix_widget_native_barchart_BarChart`.

### Pie/Doughnut Chart

The [Pie/Doughnut Chart](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/pie-doughnut-chart-native) widget renders a dataset as a pie or doughnut chart (depending on its configuration) based on static data sets.

```javascript
export const com_mendix_widget_native_piedoughnutchart_PieDoughnutChart = {
  container: {
    // This has all ViewStyle properties. 
  },
  slices: {
    customStyles: {
      any_custom_key: {
        slice: {
          color: null, // Applies a color to the slice (string). If labels are configured to be shown, each label will be the same color as its corresponding slice.
          fontFamily: null, // Applies a font type to the slice label (string).
          fontSize: null, //  Applies a size to the slice label (number).
          fontStyle: null, // Applies a font style to the slice label (**normal** or **italic**).
          fontWeight: null, // Applies a font weight to the slice label ("normal" or "bold" or "100"-"900" ascending by increments of 100).
        },
      },
    },
    colorPalette: null, // Provides colors to slices that do not have a slice color configured (string with list of colors separated by a ';').
    innerRadius: null, //  Applies an inner radius to the chart when in doughnut presentation mode (number).
    padding: null, // Applies padding to all sides of the chart (number).
    paddingBottom: null, // Applies padding to the bottom side of the chart (number).
    paddingHorizontal: null, // Applies padding to the horizontal sides of the chart (number).
    paddingLeft: null, // Applies padding to the left side of the chart (number).
    paddingRight: null, // Applies padding to the right side of the chart (number).
    paddingTop: null, // Applies padding to the top side of the chart (number).
    paddingVertical: null, // Applies padding to the vertical sides of the chart (number).
  },
};
```

| Element | Style Properties | Description |
| --- | --- | --- |
| `container` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | |
| `slices` > `customStyles` > `any_custom_key` > `slice` | `color` | Applies a color to the slice (string). If labels are configured to be shown, each label will be the same color as its corresponding slice. |
| `slices` > `customStyles` > `any_custom_key` > `label` | `fontFamily` | Applies a font type to the slice label (string). |
| `slices` > `customStyles` > `any_custom_key` > `label` | `fontSize` | Applies a size to the slice label (number). |
| `slices` > `customStyles` > `any_custom_key` > `label` | `fontStyle` | Applies a font style to the slice label (**normal** or **italic**). |
| `slices` > `customStyles` > `any_custom_key` > `label` | `fontWeight` | Applies a font weight to the slice label ("normal" or "bold" or "100"-"900" ascending by increments of 100). |
| `slices` | `colorPalette` | Provides colors to slices that do not have a slice color configured (string with list of colors separated by a ';'). |
| `slices` | `innerRadius` | Applies an inner radius to the chart when in doughnut presentation mode (number). |
| `slices` | `padding` | Applies padding to all sides of the chart (number). |
| `slices` | `paddingBottom` | Applies padding to the bottom side of the chart (number). |
| `slices` | `paddingHorizontal` | Applies padding to the horizontal sides of the chart (number). |
| `slices` | `paddingLeft` | Applies padding to the left side of the chart (number). |
| `slices` | `paddingRight` | Applies padding to the right side of the chart (number). |
| `slices` | `paddingTop` | Applies padding to the top side of the chart (number). |
| `slices` | `paddingVertical` | Applies padding to the vertical sides of the chart (number). |

The default class to style all Pie/Doughnut Chart widgets is named `com_mendix_widget_native_piedoughnutchart_PieDoughnutChart`.

### Switch

A switch input widget can be used to display and edit Boolean attributes and is rendered as a switch. This is how a Switch widget looks by default:

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-styling-refguide/check-box.png" alt="checkbox"   width="350"  class="no-border" >}}

```javascript
export const com_mendix_widget_native_switch_Switch = {
  container: {
    // This has all ViewStyle properties. 
  },
  containerDisabled: {
    // Same properties as `container`. Overrides `container` styles if the text box is non-editable.
  },
  input: {
    // This has all TextStyle properties. 
    trackColorOn: null, // Custom color for the switch track when turned on.
    trackColorOff: null, // Custom color for the switch track when turned off.
    thumbColorOn: null, // Color of the foreground switch grip when turned on. If this is set on iOS, the switch grip will lose its drop shadow.
    thumbColorOff: null, // Color of the foreground switch grip when turned off. If this is set on iOS, the switch grip will lose its drop shadow.
  },
  inputError: {
    // This has the same properties as `input`. Overrides `input` styles if there are validation errors.
  },
  inputDisabled: {
    // This has the same properties as `input`. Overrides `input` styles if the checkbox is non-editable.
  },
  label: {
    // This has all TextStyle properties 
    numberOfLines: 1, // The maximum number of lines to wrap the label text. If the text is any longer it will be cut off with an ellipsis.
  },
  labelDisabled: {
    // Same properties as `label`. Overrides `label` styles if the checkbox is non-editable.
  },
  validationMessage: {
    // This has all TextStyle properties.
  },
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `container` | This has all ViewStyle properties.   |   |
| `containerDisabled` | Same properties as `container` | Overrides `container` styles if the text box is non-editable. |
| `input` | This has all TextStyle properties.   |   |
| `input` | `trackColorOn` | Custom color for the switch track when turned on. |
| `input` | `trackColorOff` | Custom color for the switch track when turned off. |
| `input` | `thumbColorOn` | Color of the foreground switch grip when turned on. If this is set on iOS, the switch grip will lose its drop shadow. |
| `input` | `thumbColorOff` | Color of the foreground switch grip when turned off. If this is set on iOS, the switch grip will lose its drop shadow. |
| `inputError` | This has the same properties as `input` | Overrides `input` styles if there are validation errors. |
| `inputDisabled` | This has the same properties as `input` | Overrides `input` styles if the checkbox is non-editable. |
| `label` | This has all TextStyle properties   |  |
| `label` | `numberOfLines` | The maximum number of lines to wrap the label text. If the text is any longer it will be cut off with an ellipsis. Defaults to `1`. |
| `labelDisabled` | Same properties as `label` | Overrides `label` styles if the checkbox is non-editable. |
| `validationMessage` | This has all TextStyle properties.   |  |

The default class to style all checkbox inputs is named `com_mendix_widget_native_switch_Switch`.

### Background Gradient

The background gradient widget allows you to apply a background that transitions between multiple colors in a linear direction.

```javascript
export const com_mendix_widget_native_backgroundgradient_BackgroundGradient = {
  container: {
    // This has all ViewStyle properties. 
  },
  colorList: {
    color: null, // Colors can be passed in different formats. Valid color value formats are #d0d0d0, rgb(115,155,155), or rgba(195,226,226,0.5)
    offset: null, // A color-stop's value, followed by one or more optional stop positions (should be between 0.0 and 1.0)
  },
  angle: null, // Line of direction. Takes a value from `0` to `360`. A value of 0 is equivalent to top; increasing values rotate the design clockwise.
  opacity: null, // Takes a value from `0` to `100`. The lower the value, the more transparent.
};
```

| Element | Style Properties    | Description |
| --- | --- | --- |
| `angle` | | Line of direction. Takes a value from `0` to `360`. A value of 0 is equivalent to top; increasing values rotate the design clockwise. |
| `colorList` | [gradient_color_object](#gradient-color-object) | Passes the colors you want to display in an array. Example: `[{ color: "#fff", offset: 0 }, { color: "#000", offset: 1 }]` |
| `container` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | |
| `opacity` | | Takes a value from `0` to `100`. The lower the value, the more transparent. |

The default class to style all background gradients is named `com_mendix_widget_native_backgroundgradient_BackgroundGradient`.

#### Background Gradient Types

##### gradient_color_object {#gradient-color-object}

An object `{ color: string, offset: number }` that represents the color and the offset.

| Name | Type | Description |
| --- | --- | --- |
| color | `string` | Colors can be passed in different formats. Valid color value formats are `#d0d0d0`, `rgb(115,155,155)`, or `rgba(195,226,226,0.5)` |
| offset | `number` | A color-stop's value, followed by one or more optional stop positions (should be between `0.0` and `1.0`) |

### Column Chart

The [column chart](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/column-chart-native) widget renders a vertical column graph based on static and dynamic data sets.

```javascript
export const com_mendix_widget_native_columnchart_ColumnChart = {
  container: {
    // All ViewStyle properties.
  },
  errorMessage: {
    // All TextStyle properties.
  },
  chart: {
    // All ViewStyle properties.
  },
  grid: {
    backgroundColor: null, // Applies a color to the grid background (string).
    dashArray: null, // Applies a pattern of dashes and gaps to the grid lines (string containing a [dash pattern](https://www.w3.org/TR/SVG11/painting.html#StrokeDasharrayProperty)).
    lineColor: null, // Applies a color to the grid lines (string).
    width: null, // Applies a width to the grid lines (number).
    padding: null, // Applies padding to all sides of the grid (number). This makes axis value labels visible.
    paddingBottom: null, // Applies padding to the bottom side of the grid (number). This makes axis value labels visible.
    paddingHorizontal: null, // Applies padding to the horizontal sides of the grid (number). This makes axis value labels visible.
    paddingLeft: null, // Applies padding to the left side of the grid (number). This makes axis value labels visible.
    paddingRight: null, // Applies padding to the right side of the grid (number). This makes axis value labels visible.
    paddingTop: null, // Applies padding to the top side of the grid (number). This makes axis value labels visible.
    paddingVertical: null, // Applies padding to the vertical sides of the grid (number). This makes axis value labels visible.
  },
  xAxis: {
    color: null, // Applies a color to the axis value labels (string).
    dashArray: null, // Applies a pattern of dashes and gaps to the axis line (string containing a [dash pattern](https://www.w3.org/TR/SVG11/painting.html#StrokeDasharrayProperty)).
    fontFamily: null, // Applies a font type to the axis value labels (string).
    fontSize: null, // Applies a size to the axis value labels (number).
    fontStyle: null, // Applies a font style to the axis value labels ("normal" or "italic").
    fontWeight: null, // Applies a font weight to the axis value labels ("normal" or "bold" or "100" or "200" or "300" or "400" or "500" or "600" or "700" or "800" or "900").
    lineColor: null, // Applies a color to the axis line (string).
    width: null, // Applies a width to the axis line (number).
    label: {
      // All TextStyle properties.
      relativePositionGrid: null, //P ositions the axis label at the **bottom** or **right** side of the grid.
    }
  },
  yAxis: {
    // All xAxis properties
  },
  legend: {
    container: {
      // All ViewStyle properties.
    },
    item: {
      // All ViewStyle properties.
    },
    indicator: {
      // All ViewStyle properties.
    },
    label: {
      // All TextStyle properties.
    },
  },
  domain: {
    padding: {
      x: null, // Applies a number of pixels of padding to add the beginning and end of the X axis domain (number).
      y: null, // Applies a number of pixels of padding to add the beginning and end of the Y axis domain (number).
    }
  },
  columns: {
    columnColorPalette: null, // Provides colors to columns that do not have a column color configured (string with list of colors separated by ';', one color for each series).
    columnsOffset: null, // Determines the number of pixels each column in a group should be offset from its original position on the Y axis (number). This is only applicable when presentation mode is **Grouped**.
    customColumnStyles: {
      any_custom_column_style_name: {
        column: {
          ending: null, // Specifies a radius to apply to each column.
          columnColor: null, // Applies a color to the column (string). If columns are configured to have labels, the labels will be the same color as the column.
          width: null, // Applies a width to the column (number).
        },
        label: {
          fontFamily: null, // Applies a font type to the column label (string).
          fontSize: null, // Applies a size to the column label (number).
          fontStyle: null, // Applies a font style to the column label (**normal** or **italic**).
          fontWeight: null, // Applies a font weight to the column label ("normal" or "bold" or "100" or "200" or "300" or "400" or "500" or "600" or "700" or "800" or "900").
        }
      }
    }
  }
};
```

| Element | Style Properties | Description |
| --- | --- | --- |
| `container` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | |
| `errorMessage` | All [TextStyle](https://reactnative.dev/docs/text-style-props) properties. | |
| `chart` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | |
| `grid` | `backgroundColor` | Applies a color to the grid background (string). |
| `grid` | `dashArray` | Applies a pattern of dashes and gaps to the grid lines (string containing a [dash pattern](https://www.w3.org/TR/SVG11/painting.html#StrokeDasharrayProperty)). |
| `grid` | `lineColor` | Applies a color to the grid lines (string). |
| `grid` | `width` | Applies a width to the grid lines (number). |
| `grid` | `padding` | Applies padding to all sides of the grid (number). This makes axis value labels visible. |
| `grid` | `paddingBottom` | Applies padding to the bottom side of the grid (number). This makes axis value labels visible. |
| `grid` | `paddingHorizontal` | Applies padding to the horizontal sides of the grid (number). This makes axis value labels visible. |
| `grid` | `paddingLeft` | Applies padding to the left side of the grid (number). This makes axis value labels visible. |
| `grid` | `paddingRight` | Applies padding to the right side of the grid (number). This makes axis value labels visible. |
| `grid` | `paddingTop` | Applies padding to the top side of the grid (number). This makes axis value labels visible. |
| `grid` | `paddingVertical` | Applies padding to the vertical sides of the grid (number). This makes axis value labels visible. |
| `xAxis` | `color` | Applies a color to the axis value labels (string). |
| `xAxis` | `dashArray` | Applies a pattern of dashes and gaps to the axis line (string containing a [dash pattern](https://www.w3.org/TR/SVG11/painting.html#StrokeDasharrayProperty)). |
| `xAxis` | `fontFamily` | Applies a font type to the axis value labels (string). |
| `xAxis` | `fontSize` | Applies a size to the axis value labels (number). |
| `xAxis` | `fontStyle` | Applies a font style to the axis value labels ("normal" or "italic"). |
| `xAxis` | `fontWeight` | Applies a font weight to the axis value labels ("normal" or "bold" or "100" or "200" or "300" or "400" or "500" or "600" or "700" or "800" or "900"). |
| `xAxis` | `lineColor` | Applies a color to the axis line (string). |
| `xAxis` | `width` | Applies a width to the axis line (number). |
| `xAxis` > `label` | All [TextStyle](https://reactnative.dev/docs/text-style-props) properties. | |
| `xAxis` > `label` | `relativePositionGrid` | Positions the axis label at the **bottom** or **right** side of the grid. |
| `yAxis` | All `xAxis` element styles. | |
| `yAxis` > `label` | All [TextStyle](https://reactnative.dev/docs/text-style-props) properties. | |
| `yAxis` > `label` | `relativePositionGrid` | Positions the axis label at the **top** or **left** side of the grid. |
| `legend` > `container` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | |
| `legend` > `item` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | |
| `legend` > `indicator` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | |
| `legend` > `label` | All [TextStyle](https://reactnative.dev/docs/text-style-props) properties. | |
| `domain` > `padding` | `x` | Applies a number of pixels of padding to add the beginning and end of the X axis domain (number). |
| `domain` > `padding` | `y` | Applies a number of pixels of padding to add the beginning and end of the Y axis domain (number). |
| `columns` | `columnColorPalette` | Provides colors to columns that do not have a column color configured (string with list of colors separated by ';', one color for each series). |
| `columns` | `columnsOffset` | Determines the number of pixels each column in a group should be offset from its original position on the Y axis (number). This is only applicable when presentation mode is **Grouped**. |
| `columns` > `customColumnStyles` > `any_custom_column_style_name` > `column` | `ending` | Specifies a radius to apply to each column. |
| `columns` > `customColumnStyles` > `any_custom_column_style_name` > `column` | `columnColor` | Applies a color to the column (string). If columns are configured to have labels, the labels will be the same color as the column. |
| `columns` > `customColumnStyles` > `any_custom_column_style_name` > `column` | `width` | Applies a width to the column (number). |
| `columns` > `customColumnStyles` > `any_custom_column_style_name` > `label` | `fontFamily` | Applies a font type to the column label (string). |
| `columns` > `customColumnStyles` > `any_custom_column_style_name` > `label` | `fontSize` | Applies a size to the column label (number). |
| `columns` > `customColumnStyles` > `any_custom_column_style_name` > `label` | `fontStyle` | Applies a font style to the column label (**normal** or **italic**). |
| `columns` > `customColumnStyles` > `any_custom_column_style_name` > `label` | `fontWeight` | Applies a font weight to the column label ("normal" or "bold" or "100" or "200" or "300" or "400" or "500" or "600" or "700" or "800" or "900"). |

The default class to style all column chart widgets is named `com_mendix_widget_native_columnchart_ColumnChart`.

### Gallery

The Gallery widget (a replacement for both template grids and list views) helps you build beautiful lists and grids for tablet and mobile devices.

```javascript
export const com_mendix_widget_native_gallery_Gallery = {
  container: {
    // This has all ViewStyle properties. 
  },
  emptyPlaceholder: {
    // This has all ViewStyle properties. Applies a view style to the empty placeholder.
  },
  firstItem: {
    // This has all ViewStyle properties. Applies a view style to the first item of the list.
  },
  lastItem: {
    // This has all ViewStyle properties. Applies a view style to the last item of the list.
  },
  list: {
    // This has all ViewStyle properties. Applies a view style to the list container.
  },
  listitem: {
    // This has all ViewStyle properties. Applies a view style to each item container in the list.
  },
  loadMoreButtonContainer: {
    // This has all ViewStyle properties. Applies a view style to the load more button container.
  },
  loadMoreButtonPressableContainer: {
    // This has all ViewStyle properties. Applies a view style to the load more button container.
    rippleColor: null, // Defines the color of the ripple effect. ([color](https://reactnative.dev/docs/colors)) (Android only)
    borderless: null, // Defines if ripple effect should not include border. (Boolean) (Android only)
    radius: null, // Defines the radius of the ripple effect. (number) (Android only)
    foreground: null, // Set to true to add the ripple effect to the foreground of the view, instead of the background. (Boolean) (Android only)
  },
};
```

| Element | Style Properties | Description |
| --- | --- | --- |
| `container` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | |
| `emptyPlaceholder` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | Applies a view style to the empty placeholder. |
| `firstItem` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | Applies a view style to the first item of the list. |
| `lastItem` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | Applies a view style to the last item of the list. |
| `list` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | Applies a view style to the list container. |
| `listItem` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | Applies a view style to each item container in the list. |
| `loadMoreButtonContainer` | All [ViewStyle](https://reactnative.dev/docs/text-style-props) properties. | Applies a view style to the load more button container. |
| `loadMoreButtonPressableContainer` | All [ViewStyle](https://reactnative.dev/docs/text-style-props) properties. | Applies a view style to the load more button container. |
| `loadMoreButtonPressableContainer` | rippleColor | Defines the color of the ripple effect. ([color](https://reactnative.dev/docs/colors)) (Android only) |
| `loadMoreButtonPressableContainer` | borderless | Defines if ripple effect should not include border. (Boolean) (Android only) |
| `loadMoreButtonPressableContainer` | radius | Defines the radius of the ripple effect. (number) (Android only) |
| `loadMoreButtonPressableContainer` | foreground | Set to true to add the ripple effect to the foreground of the view, instead of the background. (Boolean) (Android only) |
| `loadMoreButtonCaption` | All [TextStyle](https://reactnative.dev/docs/view-style-props) properties. | Applies a text style to the load more button caption. |

The default class to style all Gallery widgets is named `com_mendix_widget_native_gallery_Gallery`.

#### Gallery Filtering

In order to enable filtering within the gallery items you need to select the desired attributes to be filtered in the **Filtering** tab.

```javascript
export const com_mendix_widget_native_gallerytextfilter_GalleryTextFilter = {
  textInputContainer: {
    // This has all ViewStyle properties. Applies a view style to the container of the text input. 
  },
  textInputContainerFocused: {
    // This has all ViewStyle properties. Applies a view style to the container of the text input when the text box is focused.
  },
  textInput: {
    // This has all ViewStyle properties. Applies a view style to the text input.
  },
  textInputClearIcon: {
    // This has all ViewStyle properties. Applies style to the text clear button in the text box.
  },
};
```

| Element | Style Properties | Description |
| --- | --- | --- |
| `textInputContainer` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | Applies a view style to the container of the text input. |
| `textInputContainerFocused` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | Applies a view style to the container of the text input when the text box is focused. |
| `textInput` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | Applies a view style to the text input. |
| `textInputClearIcon` | All [ViewStyle](https://reactnative.dev/docs/view-style-props) properties. | Applies style to the text clear button in the text box. |

The default class to style all gallery text filter widgets is named `com_mendix_widget_native_gallerytextfilter_GalleryTextFilter`.

## Read More

* [Native Styling](/refguide9/mobile/designing-mobile-user-interfaces/native-styling/)
* [Design Properties Documentation](/apidocs-mxsdk/apidocs/design-properties/)
