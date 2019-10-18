---

title: "Structure Widgets"
parent: "page-editor-widgets"
description: "Describes Structure widgets in Mendix Studio."
menu_order: 60
tags: ["studio", "page editor", "layout", "layout widgets", "structure widgets"]
---

## 1 Introduction 

Structure widgets are widgets that allow you to provide structure to your page and group other widgets inside them. 

Layout widgets are the following ones:

* [Columns and Sidebars](#columns) 
* [Container](#container-overview)
* [Group Box](#group-box-overview)
* [Tab Container](#tab-container)

## 2 Columns and Sidebars{#columns}

**Column** and **Sidebar** widgets are widgets with a pre-set number of columns. All widgets in this category are based on a [layout grid](#layout-grid) – an element that structures your page with rows and columns. 

## 3 Layout Grid Overview {#layout-grid}

The **Layout Grid** helps you to configure a page and make it responsive immediately. This means that a layout grid has a built-in behavior to show how a page will look like on different devices. Switch **Device** modes in the top bar to see how a page will be displayed on a phone, tablet or desktop.

{{% image_container width="350" %}}![Device Modes](attachments/page-editor-widgets-structure/device-modes.png)
{{% /image_container %}}

Layout grid contains [columns and rows](#columns-and-rows). 

A row consists of items that are placed next to each other in a responsive (desktop) view. 

![Row Example](attachments/page-editor-widgets-structure/row-example.png)

A column is a cell inside a row. You can place one or several elements inside a column, for example, you can place two buttons inside it.

{{% image_container width="400" %}}![Column Example](attachments/page-editor-widgets-structure/column-example.png)
{{% /image_container %}}

Use a column to align items in a row.  For more information on rows and columns, see section [2.2 Row and Column Properties](#columns-and-rows). 

### 2.1 Layout Grid Properties {#layout-grid-properties}

You can access the **Layout Grid** properties through the breadcrumb trail (for more information, see the **[Breadcrumb Trail](page-editor#breadcrumb)** section in *Pages*). 
Layout grid properties consist of the following sections:

* [Expand](#expand-section) 
* [General](#general-section)
* [Design](page-editor-widgets-design-section)

#### 2.1.1 Expand Section {#expand-section}

The **Expand** section > **Add Row** allows you to add a row above or below the selected one to create more space to place widgets in. 

{{% image_container width="300" %}}![Expand Section](attachments/page-editor-widgets-structure/layout-grid-expand-row.png)
{{% /image_container %}}

To add a row, select a row in the layout grid and click one of the buttons in **Add Row**. A row identical to the selected one will be inserted.

{{% alert type="info" %}}

**Row** and **Column** also have the **Expand** section with the same properties.  

{{% /alert %}}

#### 2.1.2 General Section {#general-section}

The **General** section of the layout grid contains the **Full Width** property. When this property is enabled, the layout grid takes the whole width of a container it is placed in. When disabled, the layout  grid will have a fixed size in the center of your page, adjusted automatically according to your device.

#### 2.1.3 Design Section

For information on the **Design** section and its properties, see [Design Section in Widgets](page-editor-widgets-design-section).

### 2.2 Row and Column Properties {#columns-and-rows}

**Row** and **Column** properties consist of the following sections:

* [Expand](#expand-section) 
* [Row Layout](#row-layout)

{{% image_container width="300" %}}![Row and Column Properties](attachments/page-editor-widgets-structure/row-and-column-sections.png)
{{% /image_container %}}

#### 2.2.1 Expand Section

The **Expand** section for **Column** and **Row** has the same properties and functions as the **Expand** section of a layout grid. For details, see the [Expand Section](#expand-section) in the *Layout Grid Overview*.

#### 2.2.2 Row Layout Section {#row-layout}

In the **Row Layout** section you can change the way columns in a row are arranged, for example, change the number of columns and select the way they will be displayed on a desktop, a tablet, and a phone.  

| Property | Description                                                  |
| -------- | ------------------------------------------------------------ |
| Desktop  | Changes the number and width of columns for a desktop.       |
| Tablet   | Changes the number and width of columns for a tablet. Options available for the **Tablet** layout depend on the option selected for the **Desktop**. |
| Phone    | Changes the number and width of columns for a phone. Options available for the **Phone** layout depend on the option selected for the **Desktop**. |

In the example below, you can see that you can select different row layouts for different types of devices and check the way the layout is shown in your app. 

![Row Layouts for Different Devices](attachments/page-editor-widgets-structure/row-layout-scheme.png)

## 4 Container Overview {#container-overview}

A **Container** is used as a layout element where you can place a widget or a group of widgets and simultaneously style, drag or delete them. For example, you can place a section title and input widgets for filling out program's details in one container, and subsequently reposition the whole container at once to a different location on the page. 

{{% image_container width="400" %}}![Container Example](attachments/page-editor-widgets-structure/container.png)
{{% /image_container %}}

Container properties consist of the **Design** section. For information, see [Design Section in Widgets](page-editor-widgets-design-section).

## 5 Group Box Overview {#group-box-overview}

A group box is used to group widgets together. The group box can be configured to collapse or expand dynamically with all the elements inside it. 

{{% image_container width="400" %}}![Group Box Example](attachments/page-editor-widgets-structure/group-box.png)
{{% /image_container %}}

### 5.1 Group Box Properties

Group box properties consist of the **General** section and the **Design** section. For information on the **Design** section and its properties, see [Design Section in Widgets](page-editor-widgets-design-section).

Properties available in the **General** section are described in the table below.

| Property    | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| Show Header | **Show Header** defines whether a header is shown above the group box. <br />*This property is enabled by default.* |
| Caption     | This property is only displayed when the **Show Header** option is enabled. It defines the caption that is shown in the header. |
| Collapsible | This property is only displayed when the **Show Header** option is enabled. It defines whether the group box and its elements can be collapsed or expanded. Possible values of this property are the following:<ul><li>**Yes (start expanded)** – the elements inside the group box will be initially expanded and can be collapsed when a user clicks a minus icon in the header</li><li>**Yes (start collapsed)** – the elements inside the group box will be initially collapsed and can be expanded when a user clicks a plus icon in the header </li><li>**No** – group box elements cannot be expanded or collapsed</li></ul> |

## 6 Tab Container Overview {#tab-container}

A tab container is a container that is used to show information categorized into tabs. This can be useful if the amount of information that you would like to display is larger than the amount of space on the screen. For example, you can show a list of customers on one tab, and orders on the other one. 

{{% image_container width="400" %}}![Tab Container Example](attachments/page-editor-widgets-structure/tab-container-example.png)
{{% /image_container %}}

You can place a widget or a group of widgets inside each tab and configure information in them separately. 

### 6.1 Tab Container General Properties

In the **General** section, you can configure the following properties:

*  **Tabs** – use radio buttons to switch from one tab to another; click the tab and drag it to change the order of tabs; click the **Edit** icon to open the tab properties and configure it (for more information, see section [5.3 Tab Properties](#tab-properties))

	{{% image_container width="300" %}}![](attachments/page-editor-widgets-structure/tab-container-tabs-property.png)
	{{% /image_container %}}

*  **Add New Tab** – adds a new tab to your tab container; tab properties will open automatically (for more information, see section [5.3 Tab Properties](#tab-properties))

	{{% image_container width="300" %}}![](attachments/page-editor-widgets-structure/add-new-tab.png)
	{{% /image_container %}}

### 6.2 Tab Container Design Properties

For information on the **Design** section and its properties, see [Design Section in Widgets](page-editor-widgets-design-section).

### 6.3 Tab Properties {#tab-properties}

Each tab has the following properties: 

* **Caption** – defines the name of the tab; you can also edit the caption by double-clicking it in the page 

*  **Default Tab** – defines which tab is active when the page is opened. If no tab is set as the default one, the first tab page will be shown. By default, none of the tabs are set as a default tab.

	{{% image_container width="300" %}}![](attachments/page-editor-widgets-structure/tab-properties.png)
	{{% /image_container %}}

## 7 Read More

* [Pages](page-editor) 
* [Widgets](page-editor-widgets)
