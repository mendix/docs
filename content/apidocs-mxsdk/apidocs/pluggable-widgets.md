---
title: "Pluggable Widgets API"
category: "API Documentation"
description: A guide for understanding pluggable widgets.
tags: ["Widget", "Pluggable", "Custom", "JavaScript", "React"]
---

## 1 Introduction

Mendix comes with a wide variety of [Widgets](/refguide/pages#widgets-categories), but sometimes your app requires a widget outside of this set. To support a more  advanced UI pattern or create project-specific interactions, you will need to make your own pluggable widget. Your new pluggable widget can be used while modeling pages alongside standard Mendix components. It can also be shared between multiple projects and distributed through the [App Store](https://docs.mendix.com/appstore/index).

You are in control of a pluggable widget's appearance and behavior. Customize a pluggable widget by implementing a widget as a plain [React](https://reactjs.org/) component written in JavaScript or TypeScript. The component will be rendered in a Mendix app, and will be able to use APIs provided by Mendix to interact with that app.

Pluggable widgets, like core widgets, can have properties which a Mendix developer can (and sometimes must) configure every time the widget is used in Mendix Studio or Mendix Studio Pro. You can define these properties by making a widget definition XML file (for more information on widget definition XML files, see the [Widget Definition XML File](#widget-definition) section below).

Pluggable widgets can also include a preview component for when they are rendered in Studio or previewed in Studio Pro's Design mode.

## 2 Differences Between Pluggable and Custom Widgets

Pluggable widgets are the successor to [Custom widgets](/howto/extensibility/widget-development). Pluggable widgets are based on a modern React framework, have access to better APIs in the client, and can use more advanced properties in Studio and Studio Pro. Therefore, pluggable widgets allow you to more easily implement existing front-end libraries, tools, and your own expertise. Pluggable widgets should be used instead of custom widgets whenever possible.

| Concept      | Pluggable widgets                                                                                     | Custom widgets                                                           |
| ------------ | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Framework    | [React](#client-component)                                                                          | [Dojo](/howto/extensibility/widget-development#dojo)                 |
| Data access  | Declarative, props-based                                                                              | Imperative, callback-based                                               |
| Data updates | [Receive updates in props](/apidocs-mxsdk/apidocs/client-apis-for-pluggable-widgets#dynamic-value) | [Subscribe](https://apidocs.rnd.mendix.com/8/client/mx.data.html#.subscribe) |
| API          | [Pluggable widgets API](/apidocs-mxsdk/apidocs/pluggable-widgets)                                     | [Mendix client API](https://apidocs.rnd.mendix.com/8/client/index.html)                |
| Platform     | [Web and native](#widget-description)                                                             | Web                                                                      |

| Feature                                                           | Pluggable widgets                                    | Custom widgets                                                        |
| ----------------------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------- |
| Access to attribute data                                          | [Yes](property-types-pluggable-widgets#attribute)    | Yes                                                                   |
| Retrieve additional data over associations, microflows, or nanoflows | [Yes](property-types-pluggable-widgets#datasource) (with [widgets](property-types-pluggable-widgets#widgets) only)   | [Yes](https://apidocs.rnd.mendix.com/8/client/mx.data.html#.get)          |  |
| Template Text; combine data and translatable text                 | [Yes](property-types-pluggable-widgets#texttemplate) | No                                                                    |
| Expressions; logic combined with data                             | [Yes](property-types-pluggable-widgets#expression)   | No                                                                    |
| File support; download, and open                           | [yes](property-types-pluggable-widgets#file)                                                   | [Yes](https://apidocs.rnd.mendix.com/8/client/mx.data.html#.saveDocument) |
| File support; upload                          | No                                                   | [Yes](https://apidocs.rnd.mendix.com/8/client/mx.data.html#.saveDocument) |
| Use conditional visibility                                        | [Yes](property-types-pluggable-widgets#visibility)   | No                                                                    |
| Use conditional editability                                       | [Yes](property-types-pluggable-widgets#editability)  | No                                                                    |
| Use glyph icons                                                   | [Yes](property-types-pluggable-widgets#icon)         | No                                                                    |
| Show input label                                                  | [Yes](property-types-pluggable-widgets#label)        | No                                                                    |
| Trigger an action on change of attribute                          | [Yes](property-types-pluggable-widgets#attribute)    | No                                                                    |
| Widgets can contain other widgets                                 | [Yes](property-types-pluggable-widgets#widgets)      | No                                                                    |

## 3 Client Component {#client-component}

The essential part of a pluggable widget is its client component: a React component rendered inside the end-user’s app. Creating this component requires some basic React knowledge. Read React's [tutorial](https://reactjs.org/tutorial/tutorial.html) if you have not worked with React before. Note that if you are building a widget to be used in [Native Mobile](/refguide/mobile#nativemobile) apps, you should use [React Native](https://facebook.github.io/react-native/) instead of React.

The client component is mainly focused on presentation and interaction with an end-user, while data fetching, validation, and updating are handled by the Mendix Platform. Mendix provides your component with APIs which follow a [unidirectional data flow pattern](https://www.geeksforgeeks.org/unidirectional-data-flow/), much like the [Redux](https://redux.js.org/basics/data-flow) and [Flux](https://facebook.github.io/flux/docs/in-depth-overview#structure-and-data-flow) APIs. Mendix follows the “batteries included but removable” motto. You do not have to care about nuances if standard behavior suffices for you, but you can adjust behaviors when required.

A widget component is [mounted](https://en.reactjs.org/docs/react-component.html#mounting) and [unmounted](https://en.reactjs.org/docs/react-component.html#unmounting) when a widget is shown or hidden — for example when a page is opened or due to [conditional visibility](/refguide/common-widget-properties#visibility-properties). A component receives [props](https://en.reactjs.org/docs/components-and-props.html) which resemble properties described in its widget definition XML file. A prop's key comes from the [`key`](#key-attribute) attribute, and its value is based on the configuration of the property. Prop values are immutable, but the Mendix Platform re-renders the component passing new values when necessary.

A prop value is often not just a primitive value, but an object whose structure depends on the [`type`](#type-attribute) of its widget's property. A prop's values can expose data, metadata, and associated actions — whatever is applicable for the property. Here is an example of one interface. It is a value for an action property, such as the type you would find in the [On click](/refguide/on-click-event#on-click) property of an action button:

```ts
    export interface ActionValue {
        readonly canExecute: boolean;
        readonly isExecuting: boolean;
        execute(): void;
    }
```

The above interface could be used this way: a component uses a `canExecute` flag to decide whether it should be enabled, uses an `isExecuting`  flag to show an inline progress indicator, and triggers `execute()` method in a reaction to user click. Normally, after `execute()` has been triggered, the component will be re-rendered with a new value that has the `isExecuting` flag set, and when an action, for example a microflow, completes, the component is re-rendered again without `isExecuting`.

## 4 Widget Package

A pluggable widget is distributed as single widget package file with an *.mpk* extension. This file should be placed in your project's `widgets` directory. Mendix Studio Pro discovers all widgets in your project when you open your project, add a widget through the App Store, or  click **Project > Synchronize Project Directory**.

Manually building a widget package can be difficult, so Mendix recommends you use scripts provided by the [Mendix Pluggable Widget Generator](https://www.npmjs.com/package/@mendix/generator-widget). For more information on how to use a generator, see [How To Build a Text Box Pluggable Widget: Part 1](/howto/extensibility/create-a-pluggable-widget-one).

A widget package file is just a ZIP archive containing the following things:

* A *package.xml* file describing the whole package
* A widget definition XML file, preferably located in *{widgetName}.xml* where `widdgetName` is the last part of widget [ID](#widget-id)
* A client component of a widget located, for example, in  `com/mendix/widget/MyProgressCircle.js` for a widget with the ID `com.mendix.widget.MyProgressCircle`
* Optionally, a widget rendering for Studio and Studio Pro’s Design mode located in *{widgetDefinitionXmlName}.webmodeler.js*
* Optionally, some widget-related resources, preferably located next to the file which contains the client component
	* Note that all CSS files you add, except the one located in the `lib` sub-directory, will automatically be loaded in an app via the widget

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

Both `packageName` and `packageVersion` should be aligned with the app's information in the App Store if you wish to publish the package. It is best practice to use the widget ID as a `packageName`.

## 5 Widget Definition XML File {#widget-definition}

The widget definition XML file is an essential part of a widget because it describes that widget's basic information and capabilities, such as if that widget can function offline. This file also contains a defined list of properties configurable in the widget. If you use the Mendix Pluggable Widget Generator, the contents of this file will be scaffolded for you.

A simple widget XML file might look like this:

```xml
    <?xml version="1.0" encoding="utf-8" ?>
    <widget [attibutes]>
        <name>{User friendly widget name}</name>
        <icon>{base64 encoded icon}</icon>
    
        <properties>
            [properties]
        </properties>
    </widget>
```

A widget XML file consists of three sections: widget attributes, widget description, and widget properties definition.

### 5.1 Widget Attributes

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

* `id`<a name="widget-id"></a> — This the fully qualified name of the widget called widget ID. Using widget ID, the Mendix Platform distinguishes widgets from each other. Widget ID should never be changed after a widget is used in a project or is published in the App Store. Reverse domain-style names, as in example above, are recommended.
* `pluginWidget`  — This should always be set to `true`. This way, the Mendix Platform can distinguish between the newer pluggable widgets and the older custom widgets.
* `offlineCapable` — This shows if a widget can work while an app is offline. For more information on offline apps, see the [Offline-First](/refguide/offline-first) guide. A widget that fetches information from a third-party API, for example a widget that fetches airline ticket prices, could not function without an internet connection. If a widget cannot work offline, Mendix Studio Pro and Studio will forbid its use on pages that must be available offline.
* `supportedPlatform` — This shows the platforms a widget is compatible with.  `Web` describes widgets that are only compatible with web and hybrid mobile apps. `Native` describes widgets that are compatible with native mobile apps.

### 5.2 Widget Description {#widget-description}

After widget attributes, you will see a description of a widget that will be presented in Studio and Studio Pro. This description includes a widget name and its icon encoded as a base64 image:

```xml
	<name>My Progress Card</name>
	<icon>[image base64]</icon>
```
In Mendix Studio Pro, the widget described above would look like this:

![basic widget](attachments/pluggable-widgets/basic-widget.png)

![basic progress card](attachments/pluggable-widgets/basic-widget-progress-card.png)

#### 5.2.1 Help Page {#help}

You can provide additional help information to widget users by using a help page. If you do so, a widget configuration screen will get a **Help** button, assigned to the <kbd>{F1}</kbd> shortcut key, that opens a specified page. This button is positioned in the left-bottom corner of the popup dialog:

![basic widget](attachments/pluggable-widgets/widget-dialog-help-button.png)

A URL of a help page can be provided through the `helpUrl` property after the `description` tag:

```xml
    <helpUrl>https://appstore.home.mendix.com/link/app/105695/</helpUrl>
```

For more complex help pages you can link to a markdown page. For security reasons, URLs have the following restrictions:

* Must use HTTPS protocol
* Host name must end with *.mendix.com* or *github.com*
* If host name is *github.com* the full URL must end with *.md*

### 5.3 Widget Properties Definition {#properties-definition}

This section is represented by the `properties` tag in the widget XML file. It describes widget properties used in Studio and Studio Pro to configure the widget. Here is an example of a properties definition section for a widget which shows a progress card for a dashboard:

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

## 6 Property Groups {#property-groups}

Before examining properties themselves, it is useful to understand property groups. Property groups are formed by properties wrapped in a `propertyGroup` tag. Studio and Studio Pro use the property groups to render how the widget configuration UI appears in the Studios. Grouping can be used to help the modeling developer understand the configuration of a more complex widget. It is best practice to both use property groups and group properties in the Studios UI based on their purposes. The property groups from the code in [Widget Properties Definition](#properties-definition) above forms the following structure:

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

![edit progress general](attachments/pluggable-widgets/edit-progress-card.png)

![edit progress visual](attachments/pluggable-widgets/edit-visual-tab.png)

![properties widget](attachments/pluggable-widgets/properties-widget.png)

When properties are shown in a dialog box, first-level groups (**General** and **Visual**) are represented as tabs. Second-level groups (**Main**, **Action** and **Progress bar**) are represented as boxes. When properties are shown in a pane, first-level groups are ignored and second-level groups are shown as categories.

Note that the **Common** and **Appearance** tabs are added to your widget configuration automatically. These tabs contain properties applicable to all widgets: [Name](/refguide/common-widget-properties#name), [Class](/refguide/common-widget-properties#class), [Style](/refguide/common-widget-properties#style), and **Design Properties**.

## 7 Widget Property

This section will explain the shape of the widget property. For more detailed information on widget properties, see [Pluggable Widget Property Types](property-types-pluggable-widgets). Every `property` tag in the Widget Properties Definition has a shape similar to this:

```xml
    <property key="cardName" type="textTemplate">
        <caption>Card name</caption>
        <description>Name of the card</description>
    </property>
```

Some properties can or must have more attributes or tags. This depends on the `type` property. The following elements should be present for every property:

* `key`<a name="key-attribute"></a> — This element is a property's unique, single-word identifier. The `key` elements are used internally to identify properties, so they should never change after a widget is used in a project or is published in the App Store. A `key` element also identifies a property value when it is passed to a pluggable widget’s client component.
* `type`<a name="type-attribute"></a> — This element is a property's type. The `type` element defines which values can be configured for a property, which UI is used in the Mendix Studios, and what type of value a pluggable widget’s client component receives.
* `caption` —  This element is a short label identifying a property to a modeling developer. The first letter of a caption should be capitalized.
* `description` — This element is a longer description of a property. A description should be capitalized and limited to one or two sentences.

Here is how a caption and description look in Studio Pro:

![caption](attachments/pluggable-widgets/card-icon.png)

![description](attachments/pluggable-widgets/card-description.png)

## 8 Read More

* [Client APIs Available to Pluggable Widgets](client-apis-for-pluggable-widgets)
* [Pluggable Widget Property Types](property-types-pluggable-widgets)
* [How to Build Pluggable Widgets](/howto/extensibility/pluggable-widgets)

