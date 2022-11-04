---
title: "Design Section"
url: /studio/page-editor-widgets-design-section/
description: "Describes the Design section in widgets properties in Mendix Studio."
tags: ["studio", "page editor", "widgets", "on click action", "events"]
---

## 1 Introduction 

The **Design** section in **Properties** allows you to change spacing and alignment of a widget on a page, but is not limited to these functions. For some elements you can, for example, change their color. Click the information icon to get more details on each option.

{{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-widgets-design-section/design-section-info-icon.png" >}}

## 2 Common Properties {#design-common-properties}

The **Design** section has the following properties common to all widgets:

| Property                                                 | Description                                                  | Possible Values                                              |
| -------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Spacing Top/ Spacing Bottom/ Spacing Left/ Spacing Right | **Outer spacing** adds margin above/ below/ left/ right of the widget, outside the element's borders. **Inner spacing** adds padding inside the element's borders. | Possible values for **Spacing Top**/ **Spacing Bottom**/ **Spacing Left**/ **Spacing Right** are the following:<ul><li>Outer none – no spacing outside element's border is applied</li><li>Outer small – small spacing outside element's border is applied</li><li>Outer medium – medium spacing outside element's border is applied</li><li>Outer large – large spacing outside element's border is applied</li><li>Inner none – no extra spacing is applied inside the element's borders</li><li>Inner small – small spacing is applied inside the element's borders</li><li>Inner medium –  medium spacing is applied inside the element's borders</li><li>Inner large – large spacing is applied inside the element's borders</li></ul> |
| Align Self                                               | Aligns the widget within its layout element. For more information on layout elements, see [Structure](/studio/page-editor-widgets-structure/). | Possible values for **Align Self** are the following:<ul><li>None – places the element next to the previous element</li><li>Left – aligns the element to the left (places the element to the left of the layout element it is placed in)</li><li>Right – aligns the element to the right (places the element to the right of the layout element it is placed in)</li></ul> |

The example of how spacing works on a button is schematically shown on an image below:

{{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-widgets-design-section/design-section-scheme.png" >}}

## 3 Specific Properties

The following widgets have specific properties:

* [List view](#list-view-design-properties)  (a Data Container widget)
* [Container](#container-design-properties) (a Structure widget)
* [Buttons](#button-design-properties) (all Button widgets)
* [Text](#text-design-properties) (a Text widget)

### 3.1 List View Specific Properties {#list-view-design-properties}

Specific properties for **List View** are described in the table below:

| Property    | Description                                                  | Possible Values                                              |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Style       | Changes the appearance of lines in the list view.            | Possible values for **Style** are the following:<ul><li>None</li><li>Striped</li><li>Bordered</li><li>Lined</li><li>No Styling</li></ul> |
| Hover Style | Highlights a row when hovering over it. Only useful if the row is clickable. | Enabled/Disabled                                             |
| Row Size    | Changes the size of the row.                                 | Possible values for **Row Size** are the following:<ul><li>None</li><li>Small</li><li>Large</li></ul> |

### 3.2 Container Specific Properties {#container-design-properties}

Specific properties for the **Container** widget are described in the table below:

| Property         | Description                                                  | Possible Values                                              |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Align Content    | Aligns content inside a container. <br />When aligning content as a column, elements inside a container will be aligned one under another; when aligning content as a row, elements inside a container will be aligned next to each other. | Possible values for **Align Content** are the following:<ul><li>None</li><li>Left align as a row</li><li>Center align as row</li><li>Right align as row</li><li>Left align as column</li><li>Center align as column</li><li>Right align as column</li></ul> |
| Background color | Applies a background color.<br />The color for each value depends on your settings in the **Theme Customizer**. For details, see [Theme Customizer](/studio/theme-customizer/). | Possible values for **Background color** are the following:<ul><li>None – color defined in **Backgrounds** > **Default** of the **UI Customization** section of the [Theme Customizer](/studio/theme-customizer/)</li><li>Background Primary</li><li>Background Secondary</li><li>Brand Primary</li><li>Brand Secondary</li><li>Brand Success</li><li>Brand Warning</li><li>Brand Danger</li><li>Brand Gradient</li></ul> |
| Shade            | Applies a shade to the background color.                     | Possible values for **Shade** are the following:<ul><li>None</li><li>Light</li><li>Dark</li></ul> |
| Add Shadow       | Applies shadow to the widget.                                | Possible values for **Add Shadow** are the following:<ul><li>None</li><li>Small</li><li>Medium</li><li>Large</li></ul> |

### 3.3 Button Specific Properties {#button-design-properties}

Specific properties for **Buttons** are described in the table below:

| Property   | Description                                                  | Possible Values                                              |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Size       | Changes the size of the button.                              | You can change the size from the preset size by selecting one of the following:<ul><li>Small – the button is smaller than the preset one</li><li>Large – the button is larger than the preset</li></ul> |
| Full Width | The button takes the whole width of a layout element it is placed in. For more information on layout elements, see [Structure](/studio/page-editor-widgets-structure/). | Enabled/Disabled                                             |
| Bordered   | Changes the style of the button to a button with a transparent background, a colored border, and a colored text. Color of the border and the text are inverted from the background color, that means, if the button background is red, the background will become transparent, but the border and text will become red.<br />{{% alert color="info" %}}This option has no effect on buttons which are rendered as links.<br />{{%/alert %}} | Enabled/Disabled                                             |
| Align Icon | Moves an icon (if any) to the right of the text or on top of it. | Possible values for **Align Icon** are the following:<ul><li>None – icon is to the left of the text</li><li>Right – icon is moved to the right side of the button or link</li><li>Top – icon is centered above the button text for *button* style and left-justified above the button text for *link* style (for more information on button styles, see [Buttons](/studio/page-editor-widgets-buttons/))</li></ul> |

### 3.4 Text Specific Properties {#text-design-properties}

Specific properties for the **Text** widget are described in the table below:

| Property     | Description                                                  | Possible Values                                              |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Weight       | Changes the weight of the font.                              | Possible values for **Weight** are the following:<ul><li>None</li><li>Light</li><li>Normal <em>(used if weight is set to **None**)</em></li><li>Semibold</li><li>Bold</li></ul> |
| Color        | Changes the color of the text. <br />The color for each value depends on your settings in the **Theme Customizer**. For details, see [Theme Customizer](/studio/theme-customizer/). | Possible values for **Color** are the following:<ul><li>Header color</li><li>Detail color (light-gray color)</li><li>Brand Primary</li><li>Brand Secondary</li><li>Brand Success</li><li>Brand Warning</li><li>Brand Danger</li><li>White</li></ul> |
| Alignment    | Aligns the text.                                             | Possible values for **Alignment** are the following:<ul><li>None</li><li>Left</li><li>Center</li><li>Right</li></ul> |
| Transform    | Changes letter case of the text.                             | Possible values for **Transform** are the following:<ul><li>None</li><li>Lowercase</li><li>Uppercase</li><li>Capitalize</li></ul> |
| Wrap Options | Wrap a long text into multiple lines.                        | Possible values for **Wrap Options** are the following:<ul><li>None – text is not wrapped</li><li>Wrap</li><li>No Wrap</li></ul> |

## 4 Read More

* [Widgets](/studio/page-editor-widgets/)
