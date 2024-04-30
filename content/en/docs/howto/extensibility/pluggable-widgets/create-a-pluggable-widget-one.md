---
title: "Build a Pluggable Web Widget: Part 1"
linktitle: "1. Build Pluggable Web Widget"
url: /howto/extensibility/create-a-pluggable-widget-one/
weight: 10
description: "This how-to teaches you how to create a pluggable web widget."
tags: ["widget", "pluggable", "JavaScript", "API", "JavaScript-API"]
---

## 1 Introduction

Pluggable web widgets are the new generation of custom-built widgets. These widgets are based on React and use a different architecture than the older custom widgets based on Dojo. With pluggable web widgets, you can develop powerful tools in simple, precise ways. In the first part of this series, you will learn to create a text input widget.

This how-to teaches you how to do the following:

* Generate a widget structure
* Create a basic text input widget
* Add a label

**Are you in a hurry?** 

Clone this [code sample](https://github.com/mendix/text-box-sample) from GitHub with the basic and advanced features already implemented.

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install the LTS version of [Node.js](https://nodejs.org/en/download/).
* Install [Yeoman](https://yeoman.io/) with the following command:

    ```shell {linenos=false}
      $ npm install -g yo
    ```

* Install the Mendix Pluggable Widget Generator with the following command:

    ```shell {linenos=false}
    $ npm install -g @mendix/generator-widget
    ```

* Install an integrated development environment (IDE) of your choice (Mendix recommends [Microsoft Visual Studio Code](https://code.visualstudio.com/))
* Have a basic understanding of [TypeScript](https://www.typescriptlang.org/)

## 3 Creating a TextBox Input Widget

The following steps teach you how to build a pluggable input widget, and show you how to use the new pluggable widget API.

### 3.1 Creating a Test App {#creating-a-test-project}

1. Open Mendix Studio Pro and create a new test app by selecting **File > New App** from the top menu bar and then **Blank App**.
2. Create a test case for the new widget:<br />
    1. In the domain model of **MyFirstModule**, add a new entity.<br />
    2. Add a new attribute of type **String**.<br />
    3. Open **MyFirstModule’s** **Home** page.<br />
    4. There, add a **Data view** widget, double-click the widget, and give it a data source microflow by selecting **Data source** > **Type** > **Microflow**.<br />
    5. Next to the microflow field click the **Select** button, and click **New**.<br />
    6. Provide the name *DSS_CreateTestObject* to this new microflow.<br />
    7. Click the **Show** button. This will open the microflow editor. Then click the **OK** button to close the dialog box.<br />
    8. Add a new **Create object** action on your microflow.

3. Open the new **Create object** action's properties by double clicking it. For its **Entity**, click the **Select** button and choose the entity you created above. Then click **OK** to close the dialog box.
4. Right-click the **Create Entity** activity, then click **Set $NewEntity as Return Value**.
5. Go back to the home page, open the **Add Widget** menu, and then add a **TextBox** widget inside the data view.
6. Open the Textbox's properties and select the **Datasource Attribute (path)** string attribute you created above. Then click the **OK** button to close the dialog box. The end result should look like this:

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/createtestobject.png" class="no-border" >}}

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/microflowcreateentity.png" class="no-border" >}}

### 3.2 Scaffolding the Widget

The Pluggable Widget Generator is the quickest way to start developing a widget. It creates a widget’s recommended folder structure and files.

Using a terminal or command line, navigate to your new Mendix app's folder, create a new folder named *myPluggableWidgets*, and start the generator using:

```shell {linenos=false}
mkdir myPluggableWidgets
cd myPluggableWidgets
yo @mendix/widget TextBox
```

The generator will ask you a few questions during setup. Answer the questions by specifying the following information:

* Widget name: *{Your widget name}*
* Widget Description: *{Your widget description}*
* Organization Name: *{Your organization name}*
* Copyright: *{Your copyright date}*
* License: *{Your license}*
* Initial Version:*{Your initial version number}*
* Author: *{Your author name}*
* Mendix App path: **../../**
* Programming language: **TypeScript**
* Which type of components do you want to use? **Function Components** 
* Widget type: **For web and hybrid mobile apps**
* Widget template: **Empty widget (recommended for more experienced developers)**
* Unit tests: **No**
* End-to-end tests: **No**

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/generatorblack-new.png" alt="mx generator" class="no-border" >}}

As part of the widget scaffolding, the generator builds the widget for the first time. You can do this yourself by running `npm run build`. There is also a watcher available that will rebuild your widget as you make changes to files.

Start the watcher by running `npm start`.

{{% alert color="info" %}}
NPM version 7 changed the resolution behavior of peerDependencies. Try adding `--legacy-peer-deps` to your install command if it results in peer dependency resolution errors.
{{% /alert %}}

### 3.3 Using the Widget

When the build script completes it will package your widget as a `.mpk` file and copy it to the `widgets/` directory in your Mendix project. Now that the generator has finished its job it is time to use the widget in Studio Pro.

1. To find your widget for the first time you need to refresh from the files system. Use <kbd>F4</kbd> or select **App** > **Synchronize Project Directory** from the Studio Pro menu.<br />
1. Open the **Home_Web** page in the page editor.
1. Open the toolbox on the right of your screen and locate the newly created **Text Box** widget. It should be at the bottom of the list.
1. Drag the Text Box widget to the Data View added in [section 3.1](#creating-a-test-project).
1. Run your app locally and open it in the browser. The homepage should now display Hello World below the previously added text widget.

The end result will be similar to the screenshot below:

{{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/hello-world.png" class="no-border" >}}

### 3.4 Adding the Attribute

Open the *(YourMendixApp)/myPluggableWidgets/textBox* folder in your IDE of choice. From now on, all file references will be relative to this path. To set up your new widget, first you must use an attribute of the context object and display that attribute in an input field: 

1. Go ahead and remove the file *src/components/HelloWorldSample.tsx*. Errors in *TextBox.editorPreview.tsx* will be dealt with in step 6 below.
2. The generator creates the widget definition file `src/TextBox.xml` with preset properties. Replace the `sampleText` property following this snippet:

    ```xml
    <?xml version="1.0" encoding="utf-8" ?>
    <widget id="mendix.textbox.TextBox" pluginWidget="true" needsEntityContext="true" supportedPlatform="Web" offlineCapable="true" xmlns="http://www.mendix.com/widget/1.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.mendix.com/widget/1.0/ ../xsd/widget.xsd">
        <name>Text Box</name>
        <description>Edit text input</description>
        <icon/>
        <properties>
            <propertyGroup caption="Data source">
                <property key="textAttribute" type="attribute">
                    <caption>Attribute (path)</caption>
                    <description/>
                    <attributeTypes>
                        <attributeType name="String"/>
                    </attributeTypes>
                </property>
            </propertyGroup>
        </properties>
    </widget>
    ```

    Explaining the code:

    * *TextBox.xml* is the [widget definition file](/apidocs-mxsdk/apidocs/pluggable-widgets/#widget-definition) used in Studio Pro which reads the widget's capabilities
    * The property `pluginWidget=true` will make the widget work with the new widget API
    * The property `needsEntityContext=true` is set up to allow the attribute to be taken from context
    * The property of the [type attribute](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#attribute) only allows the selection of string attributes from the domain model

3. The generator includes scripts which assist with building and packaging your widget. Use `npm start` to run the watcher, it will generate updated Typescript types based on the widget definition file.

    When done generating the types can be found in `typings/TextBoxProps.d.ts`

    {{% alert color="info" %}}The console will display an error along the lines of _"HelloWorldSample.tsx could not be found"_. We will address this in the section [Labeling the Input](#label-input) of this how-to. It can be ignored for now.{{% /alert %}}

4. Create a new file, `src/components/TextInput.tsx`. This will be the display component. A display component is a regular React component and does not interact with Mendix APIs. It can be re-used in any React application.

    Paste the following [React function component](https://react.dev/learn/your-first-component) into the newly create `TextInput.tsx` file.

    ```tsx
    import { createElement, ReactElement } from "react";

    export interface TextInputProps {
        value: string;
    }

    export function TextInput({ value }: TextInputProps): ReactElement {
    return <input type="text" value={value} />;
    }
    ```
    
    In short, the component receives an input object, called props, containing a string property named `value`. In turn the component returns a [React input element](https://react.dev/reference/react-dom/components/input) with its value set to what the `TextInput` component received in `props.value`. While the syntax looks like HTML, [it actually is Javascript](https://react.dev/learn/writing-markup-with-jsx).

5. The container component *src/TextBox.tsx* receives the properties in the runtime, and forwards the data to the display component. The container works like glue between the Mendix application and the display component. In *TextBox.tsx* overwrite the render function until they look like this:

    ```tsx
    import { createElement, ReactElement } from "react"; 
    import { TextBoxContainerProps } from "../typings/TextBoxProps";
    import { TextInput } from "./components/TextInput";

    import "./ui/TextBox.css";

    export function TextBox({ textAttribute }: TextBoxContainerProps): ReactElement {
        const value = textAttribute.value || "";
        return <TextInput value={value} />;
    }
    ```

    Explaining the code:

    * Line 2 imports the generated types for the widget. It was generated when we ran `npm start` in the previous section and its properties are based on the [widget definition file](/apidocs-mxsdk/apidocs/pluggable-widgets/#widget-definition).
    * The `textAttribute` is a data access object provided by the Pluggable Widgets API. It not only provides the widget with the latest value of the attribute, but also offers methods for updating the value and performing validation. React will re-render the component when the props change.
    * On line 8 we provide a fallback value for the textAttribute value. This is necessary, as its value may be `undefined` and our TextInput display component only accepts `string`. The OR operator offers [short-circuit evaluation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR#short-circuit_evaluation), which will return the value on the left if it evaluates to truthy. Otherwise it will return the value provided on the right side. 

6. Pluggable Widgets also have a Preview component, which is used in the design mode of the Studio Pro page editor. Update `src/TextBox.editorPreview.tsx` such that the deleted `HelloWorldSample` component is replaced by our `TextInput` component. This will resolve the errors thrown by `npm start`.

    ```tsx
    import { ReactElement, createElement } from "react";
    import { TextBoxPreviewProps } from "../typings/TextBoxProps";
    import { TextInput } from "./components/TextInput";

    export function preview({ textAttribute }: TextBoxPreviewProps): ReactElement {
        return <TextInput value={textAttribute} />;
    }
    ```

    Unlike the Container component, the Preview component receives mocked values for the the widget attributes. In this case `textAttribute` always receives a string. Thanks to this it is not necessary to deal with a possible `undefined` value.

7. Wait for the watcher to finish rebuilding your widget. If the watcher is not running, start it with `npm start` or build the widget manually with `npm run build`.
8. In Studio Pro, refresh your project from the filesystem with <kbd>F4</kbd> or from the menu with **App** > **Synchronize Project Directory**. The widget should now have a red border indicating that it needs to be refreshed. Open the context menu and select **Update all widgets**.

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/updateallwidgets.png" class="no-border" >}}

1.  Open the widget properties. In the **Data source** tab **select** the **Text attribute** from the attribute created in [Creating a Test App](#creating-a-test-project) above.


8. When running the app, the new widget is already functional. The first text box is a standard Text box widget and the second is your pluggable web widget. When data is changed in the first input and the cursor is moved to the next widget, the data of your widget is also updated: 

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/twotextwidgets.png" alt="two text widgets" class="no-border" >}}

### 3.5 Adding Style

The input works, but the styling could be improved. In the next code snippets, you will add the default styling to make your TextBox widget look like a Mendix widget. Also, you need to pass the `Class`, `Style` and `Tab index` [standard properties](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis/#standard-properties) from the `Common` tab which originate from the **Edit Custom Widget** dialog box:

{{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/customwidgetedit.png" alt="custom widget" class="no-border" >}}

1. In *TextBox.tsx*, pass the properties from the runtime to the `TextInput` component:

    ```tsx
    class TextBox extends Component<TextBoxContainerProps> {
        render(): ReactNode {
            const value = this.props.textAttribute.value || "";
            return <TextInput
                value={value}
                style={this.props.style}
                className={this.props.class}
                tabIndex={this.props.tabIndex}
            />;
        }
    }
    ```

2. In *components/TextInput.tsx*, add the attributes to the interface and render them in the input:

    ```tsx
    import { CSSProperties, Component, ReactNode, createElement } from "react";
    import classNames from "classnames";
    export interface InputProps {
        value: string;
        className?: string;
        index?: number;
        style?: CSSProperties;
        tabIndex?: number;
    }
    export class TextInput extends Component<InputProps> {
        render(): ReactNode {
            const className = classNames("form-control", this.props.className);
            return <input
                type="text"
                className={className}
                style={this.props.style}
                value={this.props.value}
                tabIndex={this.props.tabIndex}
            />;
        }
    }
    ```

    Explaining the code:
    * The style property is a React style object which can be passed to an HTML element directly
    * `classNames` is an external utility function which dynamically creates and combines class names; it must be imported before it can be used (for the full API, see the property’s [documentation](https://github.com/JedWatson/classnames))
    * Each property with a question mark is optional
3. Your efforts will result in a well-styled input widget:

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/styledinputwidgets.png" alt="styled widgets" class="no-border" >}}

### 3.6 Labeling the Input{#label-input}

While the Mendix input elements come with labels, you will need to add one to TextBox manually. With the new API it is easy to [add a label](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#label) to any widget.

1. In the *TextBox.xml* file, add an element `<propertyGroup caption="Label">` with a child element `<systemProperty />` above the existing `<propertyGroup caption="Data source">` element:

    ```xml
    <propertyGroup caption="Label">
        <systemProperty key="Label" />
    </propertyGroup>
    ```

    This will add the **Show label** radio buttons in the widget properties tab **Label** (after synchronizing the app directory and updating the widget). When **Show label** is set to true, it will automatically render the label for you in the page editor and the browser:

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/edittextboxtwo.png" alt="edit text box two" class="no-border" >}}

2. In *TextBox.tsx* remove the usages of `{this.props.style}` and `{this.props.class}`, because labeled widgets do not have them and the styling is applied to the surrounding FormGroup.
3. Preview the label in the page editor:

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/editdataviewone.png" alt="edit data view one" class="no-border" >}}

4. This will result in a label above or next to the input depending on the available space, data view `Form orientation`, and the `Label width (weight)`:

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/inputwidgetswithlabel.png" alt="input elements with label" class="no-border" >}}

### 3.6 Handling Updates

The value from the attribute can be displayed and updated using the other input, however you cannot change the value directly from within your widget. You can close the loop by following these steps. 

1. In *TextBox.tsx*, create a function that will update the attribute and pass it to the `TextInput` component:

    ```tsx
    class TextBox extends Component<TextBoxContainerProps> {
        private readonly onUpdateHandle = this.onUpdate.bind(this);
        render(): ReactNode {
            const value = this.props.textAttribute.value || "";
            return <TextInput
                value={value}
                style={this.props.style}
                className={this.props.class}
                tabIndex={this.props.tabIndex}
                onUpdate={this.onUpdateHandle}
            />;
        }
        private onUpdate(value: string): void {
            this.props.textAttribute.setValue(value);
        }
    }
    ```

    Explaining the code: 

    * JavaScript can pass functions from one object to another — this way, the Mendix API stays in the container `TextBox component` and provides a function to the display component to pass updates back to the attribute
    * When a function is passed to another component, the function might have a scoping issue — this can be solved by binding the context `this` to the function before passing it to the display component (for more information, see this [freeCodeCamp blog post](https://medium.freecodecamp.org/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb))

2. In *components/TextInput.tsx*, handle the change events of the input and pass the new value to the `onUpdate` function of the container component:

    ```tsx
    import { CSSProperties, ChangeEvent, Component, ReactNode, createElement } from "react";
    import classNames from "classnames";
    export interface InputProps {
        value: string;
        className?: string;
        index?: number;
        style?: CSSProperties;
        tabIndex?: number;
        onUpdate?: (value: string) => void;
    }
    export class TextInput extends Component<InputProps> {
        private readonly handleChange = this.onChange.bind(this);
        render(): ReactNode {
            const className = classNames("form-control", this.props.className);
            return <input
                type="text"
                className={className}
                style={this.props.style}
                value={this.props.value}
                tabIndex={this.props.tabIndex}
                onChange={this.handleChange}
            />;
        }
        private onChange(event: ChangeEvent<HTMLInputElement>): void {
            if (this.props.onUpdate) {
                this.props.onUpdate(event.target.value);
            }
        }
    }
    ```

    Explaining the code: 

    * The input's `value` is set by the `this.props.value`, and this property is not changed directly; the update function will use the `setValue` to trigger a re-render with the updated property
    * There are two ways of handling input changes in React: [controlled components](https://reactjs.org/docs/forms.html#controlled-components) or [uncontrolled components](https://reactjs.org/docs/uncontrolled-components.html)
    * The `onUpdate` function is optional and it should be checked for availability before executing it
    * The custom widget TextBox will still not pass text to the Text box widget after this step — it will gain this functionality in [Build a Text Box Pluggable Widget: Part 2 (Advanced)](/howto/extensibility/create-a-pluggable-widget-two/).

Congratulations, you have now made a fully functional input widget!

Continue with the next tutorial to learn how to add validation feedback, custom validations, and an on-change event activity. You will also learn how to handle a read-only state, improve web accessibility, and make a Mendix Studio Pro preview.

## 4 Read More

* [Build a Pluggable Web Widget: Part 2 (Advanced)](/howto/extensibility/create-a-pluggable-widget-two/)
* [Pluggable Widgets API](/apidocs-mxsdk/apidocs/pluggable-widgets/)
* [Client APIs Available to Pluggable Widgets](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis/)
* [Pluggable Widget Property Types](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/)
