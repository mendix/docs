---
title: "Pluggable Widgets API"
url: /apidocs-mxsdk/apidocs/pluggable-widgets/
description: "This API helps you to understand pluggable widgets, how they extend app functionality, and how they can be built to interact with Mendix's APIs in Mx10."
no_list: false
description_list: true
weight: 90
---

## Introduction

Mendix comes with a wide variety of [Widgets](/refguide/pages/#widgets-categories), but sometimes your app requires a widget outside of this set. To support a more advanced UI pattern or create app-specific interactions, you will need to make your own pluggable widget. This documentation will help you achieve that in Studio Pro 10. See these links for other versions' documentation:

* [Mendix 9](/apidocs-mxsdk/apidocs/pluggable-parent-9/)
* [Mendix 8](/apidocs-mxsdk/apidocs/pluggable-parent-8/)

Your new pluggable widget can be used while modeling pages alongside standard Mendix components. It can also be shared between multiple apps and distributed through the [Marketplace](/appstore/).

You are in control of a pluggable widget's appearance and behavior. Customize a pluggable widget by implementing a widget as a plain [React](https://reactjs.org/) component written in JavaScript or TypeScript. The component will be rendered in a Mendix app, and will be able to use APIs provided by Mendix to interact with that app.

Pluggable widgets, like core widgets, can have properties which a Mendix developer can (and sometimes must) configure every time the widget is used in Mendix Studio Pro. You can define these properties by making a widget definition XML file (for more information on widget definition XML files, see the [Widget Definition XML File](#widget-definition) section below).

Pluggable widgets can also include a preview component for when they are previewed in Studio Pro's **Design mode**.

For information on which libraries Mendix supports when developing pluggable widgets, see the [Pluggable Widgets](/refguide/mendix-client/#pluggable-widgets) section of *Mendix Client*.

For information on how to update Pluggable Widgets Tools to a newer version, see [Updating Pluggable Widgets Tools](/howto/extensibility/update-pluggable-widgets-tools/)

{{% alert color="info" %}}
Using [System Texts](/refguide/system-texts/) to translate languages is not available for use with the Pluggable Widgets API.
{{% /alert %}}

## Client Component {#client-component}

The essential part of a pluggable widget is its client component: a React component rendered inside the end-user’s app. Creating this component requires some basic React knowledge. Read [React's tutorial](https://reactjs.org/tutorial/tutorial.html) if you have not worked with React before. Note that if you are building a widget for [native mobile](/refguide/mobile/) apps, you should use [React Native](https://facebook.github.io/react-native/) instead of React.

The client component is mainly focused on presentation and interaction with an end-user, while data fetching, validation, and updating are handled by the Mendix Platform. Mendix provides your component with APIs which follow a [unidirectional data flow pattern](https://www.geeksforgeeks.org/unidirectional-data-flow/), much like the [Redux](https://redux.js.org/basics/data-flow) and [Flux](https://facebook.github.io/flux/docs/in-depth-overview#structure-and-data-flow) APIs. Mendix follows the “batteries included but removable” motto. You do not have to care about nuances if standard behavior suffices for you, but you can adjust behaviors when required.

A widget component is [mounted](https://en.reactjs.org/docs/react-component.html#mounting) and [unmounted](https://en.reactjs.org/docs/react-component.html#unmounting) when a widget is shown or hidden — for example when a page is opened or due to [conditional visibility](/refguide/common-widget-properties/#visibility-properties). A component receives [props](https://en.reactjs.org/docs/components-and-props.html) which resemble properties described in its widget definition XML file. A prop's key comes from the [`key`](#key-attribute) attribute, and its value is based on the configuration of the property. Prop values are immutable, but the Mendix Platform re-renders the component passing new values when necessary.

A prop value is often not just a primitive value, but an object whose structure depends on the [`type`](#type-attribute) of its widget's property. A prop's values can expose data, metadata, and associated actions — whatever is applicable for the property. Here is an example of one interface. It is a value for an action property, such as the type you would find in the [On click](/refguide/on-click-event/#on-click) property of an action button:

```ts
    export interface ActionValue {
        readonly canExecute: boolean;
        readonly isExecuting: boolean;
        execute(): void;
    }
```

The above interface could be used this way: a component uses a `canExecute` flag to decide whether it should be enabled, uses an `isExecuting`  flag to show an inline progress indicator, and triggers `execute()` method in a reaction to user click. Normally, after `execute()` has been triggered, the component will be re-rendered with a new value that has the `isExecuting` flag set, and when an action, for example a microflow, completes, the component is re-rendered again without `isExecuting`.

## Widget Package {#widget-package}

A pluggable widget is distributed as single widget package file with an *.mpk* extension. This file should be placed in your app's `widgets` directory. Mendix Studio Pro discovers all widgets in your app when you open your app, add a widget through the Marketplace, or click **App** > **Synchronize App Directory**.

Manually building a widget package can be difficult, so Mendix recommends you use scripts provided by the [Mendix Pluggable Widget Generator](https://www.npmjs.com/package/@mendix/generator-widget). For more information on how to use a generator, see [How To Build a Text Box Pluggable Widget: Part 1](/howto/extensibility/create-a-pluggable-widget-one/).

A widget package file is just a ZIP archive containing the following things:

* A *package.xml* file describing the whole package
* A widget definition XML file, preferably located in *{widgetName}.xml* where `widgetName` is the last part of widget [ID](#widget-id)
* A client component of a widget located, for example, in  *com/mendix/widget/MyProgressCircle.js* for a widget with the ID `com.mendix.widget.MyProgressCircle`
* Optionally, a widget preview Studio Pro’s **Design mode** located in *{widgetName}.editorPreview.js*
* Optionally, widget icons (which must be the PNG format):
    * *{widgetName}.icon.png* sets the widget icon inside the Studio Pro toolbox in list view (the ideal image size is 64x64 pixels, but other sizes will be resized to fit)
    * *{widgetName}.icon.dark.png* sets the dark-mode equivalent to *{widgetName}.icon.png*
    * *{widgetName}.tile.png* sets the tile image inside the Studio Pro toolbox in tile view (the ideal image size is 256x192 pixels, but other sizes will be resized to fit)
    * *{widgetName}.tile.dark.png* sets the dark-mode equivalent to *{widgetName}.tile.png*
* Optionally, some widget-related resources, preferably located next to the file which contains the client component
    * Note that all CSS files you add (except the one located in the **lib** sub-directory) will automatically be loaded in an app via the widget

Naming your widget package file after the `widgetName` is best practice. Also, a widget package can include multiple widgets by putting several of the above items in the same widget package. However, creating such packages is *not recommended*. 

The *package.xml* file has the following structure:

```xml
	<?xml version="1.0" encoding="utf-8" ?>
	<package xmlns="http://www.mendix.com/package/1.0/">
		<clientModule name="{packageName}" version="{packageVersion}" xmlns="http://www.mendix.com/clientModule/1.0/">
			<widgetFiles>
				<widgetFile path="{widgetName}.xml"/>
			</widgetFiles>
		</clientModule>
	</package>
```

Both `packageName` and `packageVersion` should be aligned with the app's information in the Marketplace if you wish to publish the package. It is best practice to use the widget ID as a `packageName`.

## Widget Definition XML File {#widget-definition}

The widget definition XML file is an essential part of a widget because it describes that widget's basic information and capabilities, such as if that widget can function offline. This file also contains a defined list of properties configurable in the widget. If you use the Mendix Pluggable Widget Generator, the contents of this file will be scaffolded for you.

A simple widget XML file might look like this:

```xml
    <?xml version="1.0" encoding="utf-8" ?>
    <widget [attributes]>
        <name>{User friendly widget name}</name>
        <description>{User friendly short description}</description>
        <properties>
            [properties]
        </properties>
    </widget>
```

A widget XML file consists of three sections: widget attributes, widget description, and widget properties definition.

### Widget Attributes

Here is an example of a widget’s attributes section:

```xml
    <widget
        id="com.mendix.widget.MyProgressCard"
        pluginWidget="true"
        offlineCapable="true"
        supportedPlatform="Web"
        [...]
    >
```

This section is generated based on options chosen while running the Mendix Pluggable Widget Generator. You will rarely need to modify it after it is generated. This sample widget features several widget attributes:

* `id`<a id="widget-id"></a> — This the fully qualified name of the widget called widget ID. Using widget ID, the Mendix Platform distinguishes widgets from each other. Widget ID should never be changed after a widget is used in an app or is published in the Marketplace. Reverse domain-style names, as in example above, are recommended.
* `pluginWidget`  — This should always be set to `true`. This way, the Mendix Platform can distinguish between the newer pluggable widgets and the older custom widgets.
* `offlineCapable` — This shows if a widget can work while an app is offline. For more information on offline apps, see the [Offline-First](/refguide/offline-first/) guide. A widget that fetches information from a third-party API, for example a widget that fetches airline ticket prices, could not function without an internet connection. If a widget cannot work offline, Mendix Studio Pro will forbid its use on pages that must be available offline.
* `supportedPlatform` — This shows the platforms a widget is compatible with.  `Web` describes widgets that are only compatible with web and hybrid mobile apps. `Native` describes widgets that are compatible with native mobile apps.

### Widget Description {#widget-description}

The presentation of the widget in Studio Pro is determined by the first set of elements inside the widget tag. The order of these descriptive tags is important, and is demonstrated in the list below. Only the name and description tags are mandatory — the others are optional. The description can be omitted with a self-closing tag: `<description />`: 

* `name` — The display name of the widget.
* `description` — A short written description of the widget.
* `studioProCategory` — See [Toolbox Category](#toolbox-category).
* `helpUrl` — See [Help Page](#help).
* `icon` — See [Icon](#icon).

```xml
    <name>My Progress Card</name>
    <description>Displays my progress.</description>
```

In Mendix Studio Pro, the widget described above would look like this:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/basic-widget.png" alt="basic widget" >}}

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/basic-widget-progress-card.png" alt="basic progress card in structure mode" >}}

#### Toolbox Category {#toolbox-category}

To provide more clarity for Studio Pro users you can specify a toolbox category for your widgets. When provided, it determines a toolbox category for a widget in Studio Pro. It is possible to specify existing built-in categories such as **Data** or **Input** as well as new arbitrary categories like **Maps**. 

When an existing category is specified, then your widget is placed in it next to existing built-in widgets. When a new category is specified, then your widget placed in that new category. 

A category can be provided through the `studioProCategory` tag:

```xml
   <studioProCategory>Open Street Maps</studioProCategory>
```

In the example above, a widget would be placed under **Open Street Maps widgets** in Studio Pro. Note that **widgets** is added automatically in the Studio Pro UI.

{{% alert color="info" %}}
When your widget is published in Marketplace and is assigned a special toolbox category by the Marketplace team, that special toolbox category always takes precedence over a developer-configured category.
{{% /alert %}}

#### Help Page {#help}

You can provide additional help information to widget users by using a help page. If you do so, a widgets configuration screen will get a **Help** button, assigned to the <kbd>F1</kbd> shortcut key, that opens a specified page. This button is positioned in the lower-left corner of the popup dialog:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/widget-dialog-help-button.png" alt="basic widget" class="no-border" >}}

A URL of a help page can be provided through the `helpUrl` property after the `description` tag:

```xml
    <helpUrl>https://marketplace.mendix.com/link/component/105695/</helpUrl>
```

For more complex help pages you can link to a markdown page. For security reasons, URLs have the following restrictions:

* Must use HTTPS protocol
* Host name must end with *.mendix.com* or *github.com*
* If host name is *github.com* the full URL must end with *.md*

#### Icon {#icon}

The `<icon>` element accepts a base64 encoded image that is displayed as the widget icon in Studio Pro. The element is optional and can be omitted. When no icon is provided, Studio Pro will display a fallback icon.

```xml
<icon>PHN2Zy...9zdmc+</icon>
```

{{% alert color="info" %}}
Bundling the icon in the [widget package](#widget-package) is our recommended approach. The files are easier to work with and allow for more customization.
{{% /alert %}}

### Widget Properties Definition {#properties-definition}

This section is represented by the `properties` tag in the widget XML file. It describes widget properties used in Studio Pro to configure the widget. Here is an example of a properties definition section for a widget which shows a progress card for a dashboard:

```xml
    <properties>
        <propertyGroup caption="General">
            <propertyGroup caption="Main">
                <property key="label" type="textTemplate">
                    <caption>Label</caption>
                    <description>Card label</description>
                </property>
                <property key="icon" type="icon" required="false">
                    <caption>Icon</caption>
                    <description>Card icon</description>
                </property>
                <property key="percentage" type="attribute">
                    <caption>Percentage</caption>
                    <description>Progress percentage</description>
                    <attributeTypes>
                        <attributeType name="Decimal"/>
                        <attributeType name="Integer"/>
                    </attributeTypes>
                </property>
            </propertyGroup>
            <propertyGroup caption="Action">
                <property key="showButton" type="boolean" defaultValue="false">
                    <caption>Show button</caption>
                    <description>Show button on the card</description>
                </property>
                <property key="buttonAction" type="action" required="false">
                    <caption>On click</caption>
                    <description>Action to be performed when button is clicked</description>
                </property>
                <systemProperty key="TabIndex"/>
            </propertyGroup>
        </propertyGroup>
        <propertyGroup caption="Visual">
            <propertyGroup caption="Progress bar">
                <property key="animateProgressBar" type="boolean" defaultValue="true">
                    <caption>Animate</caption>
                    <description>Show progress bar animation</description>
                </property>
                <property key="progressBarColor" type="expression" defaultValue="'red'">
                    <caption>Color</caption>
                    <description>Progress bar CSS color</description>
                    <returnType type="String" />
                </property>
            </propertyGroup>
        </propertyGroup>
    </properties>
```

## Property Groups {#property-groups}

Before examining properties themselves, it is useful to understand property groups. Property groups are formed by properties wrapped in a `propertyGroup` tag. Studio Pro uses the property groups to render how the widget configuration UI appears in Studio Pro. Grouping can be used to help the modeling developer understand the configuration of a more complex widget. It is best practice to both use property groups and group properties based on their purposes. The property groups from the code in [Widget Properties Definition](#properties-definition) above forms the following structure:

```
    ├── General
    │   ├── Main
    │   │   ├── Label
    │   │   ├── Icon
    │   │   └── Percentage
    │   │
    │   └── Action
    │       ├── Show button
    │       ├── On click
    │       └── Tab index
    │
    └── Visual
        └── Progress bar
            ├── Animate
            └── Color
```

This is how the property group structure is represented in Studio Pro:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/edit-progress-card.png" alt="edit progress general" class="no-border" >}}

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/edit-visual-tab.png" alt="edit progress visual" class="no-border" >}}

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/properties-widget.png" alt="properties widget" class="no-border" >}}

When properties are shown in a dialog box, first-level groups (**General** and **Visual**) are represented as tabs. Second-level groups (**Main**, **Action** and **Progress bar**) are represented as boxes. When properties are shown in a pane, first-level groups are ignored and second-level groups are shown as categories.

Note that the **Common** and **Appearance** tabs are added to your widget configuration automatically. These tabs contain properties applicable to all widgets: [Name](/refguide/common-widget-properties/#name), [Class](/refguide/common-widget-properties/#class), [Style](/refguide/common-widget-properties/#style), and [Design Properties](/apidocs-mxsdk/apidocs/design-properties/).

## Widget Property

This section will explain the shape of the widget property. For more detailed information on widget properties, see [Pluggable Widget Property Types](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/). Every `property` tag in the Widget Properties Definition has a shape similar to this:

```xml
    <property key="cardName" type="textTemplate">
        <caption>Card name</caption>
        <description>Name of the card</description>
    </property>
```

Some properties can or must have more attributes or tags. This depends on the `type` property. The following elements should be present for every property:

* `key`<a id="key-attribute"></a> — This element is a property's unique, single-word identifier. The `key` elements are used internally to identify properties, so they should never change after a widget is used in an app or is published in the Marketplace. A `key` element also identifies a property value when it is passed to a pluggable widget’s client component.
* `type`<a id="type-attribute"></a> — This element is a property's type. The `type` element defines which values can be configured for a property, which UI is used in the Mendix Studio Pro, and what type of value a pluggable widget’s client component receives.
* `caption` —  This element is a short label identifying a property to a modeling developer. The first letter of a caption should be capitalized.
* `description` — This element is a longer description of a property. A description should be capitalized and limited to one or two sentences.

Here is how a caption and description look in Studio Pro:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/card-icon.png" alt="caption" class="no-border" >}}

{{< figure src="/attachments/apidocs-mxsdk/apidocs/pluggable-widgets/card-description.png" alt="description" class="no-border" >}}

## Documents in this Section
