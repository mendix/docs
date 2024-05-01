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

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/createtestobject.png" alt="The page editor in Studio Pro in structure mode. The page contains a Data View that has a Microflow as its datasource. It contains a Text Input widget referencing the text attribute created in this section." class="no-border" >}}

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/microflowcreateentity.png" alt="A Microflow with a single Create Entity Action. The Action creates an instance of the entity created in the steps above. The Microflow ends with returning the new entity." class="no-border" >}}

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

{{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/generatorblack-new.png" alt="The Mendix Widget generator with the prompts answered according to the list above." class="no-border" >}}

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

{{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/hello-world.png" alt="A live mendix app displaying a text field and below it the pluggable widget with the text Hello World." class="no-border" >}}

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

    export function TextBox(props: TextBoxContainerProps): ReactElement {
        const value = props.textAttribute.value || "";
        return <TextInput value={value} />;
    }
    ```

    Explaining the code:

    * Line 2 imports the generated types for the widget. The types were generated when we ran `npm start` in the previous section and its properties are based on the [widget definition file](/apidocs-mxsdk/apidocs/pluggable-widgets/#widget-definition).
    * The `textAttribute` is a data access object provided by the Pluggable Widgets API. It not only provides the widget with the latest value of the attribute, but also offers methods for updating the value and performing validation. React will re-render the component when the props change.
    * On line 8 we provide a fallback value for the textAttribute value. This is necessary, as its value may be `undefined` and our TextInput display component only accepts `string`. The OR operator offers [short-circuit evaluation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR#short-circuit_evaluation), which will return the value on the left if it evaluates to truthy. Otherwise it will return the value provided on the right side. 

6. Pluggable Widgets also have a Preview component, which is used in the design mode of the Studio Pro page editor. Update *src/TextBox.editorPreview.tsx* such that the deleted `HelloWorldSample` component is replaced by our `TextInput` component. This will resolve the errors thrown by `npm start`.

    ```tsx
    import { ReactElement, createElement } from "react";
    import { TextBoxPreviewProps } from "../typings/TextBoxProps";
    import { TextInput } from "./components/TextInput";

    export function preview({ textAttribute }: TextBoxPreviewProps): ReactElement {
        return <TextInput value={textAttribute} />;
    }
    ```

    Unlike the Container component, the Preview component receives mocked values for the the widget attributes. In this case `textAttribute` always receives a string. Thanks to this it is not necessary to deal with a possible `undefined` value.

7. Once the watcher is done building your widget, go to Studio Pro and **synchronize** your project with <kbd>F4</kbd>. The widget now displays a red border indicating that it needs to be updated. Open its context menu with a right click and select **Update all widgets**.

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/updateallwidgets.png" alt="A demonstration of opening the context menu of a widget in the page editor to reveal the Update all widgets command." class="no-border" >}}

8.  Open the widget properties. In the **Data source** tab **select** the **text attribute** created in [section 3.1](#creating-a-test-project).


9. **Run** the app locally to see the results, the new widget is already functional. The first text box is a standard Text box widget and the second is your pluggable web widget. Select the first text box and enter some text, unfocus the text box and the pluggable widget will now display the same data.

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/twotextwidgets.png" alt="A live Mendix App featuring two text fields displaying the identical text: test." class="no-border" >}}

### 3.5 Adding Style

The input works, but the styling could be improved. In the next code snippets, you will add the default styling to make your TextBox widget look like a Mendix widget. All pluggable widgets receive [standard properties](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis/#standard-properties). To allow users of your widget to style it like any other Mendix widget you will need to apply the `class`, `style` and `tabIndex` props. These receive their values from the properties side bar (in the **Common** section of the **Properties** and **Styling** tabs).

1. In *src/TextBox.tsx*, pass the properties from the runtime to the `TextInput` component:

    ```tsx
    export function TextBox(props: TextBoxContainerProps): ReactElement {
        const value = props.textAttribute.value || "";
        return <TextInput 
            value={value} 
            style={props.style} 
            className={props.class} 
            tabIndex={props.tabIndex} 
        />;
    }
    ```

    You may notice that we do not [destructure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) the props object into variables for our Container component. The reason is that `class` [is a reserved keyword](https://developer.mozilla.org/en-US/docs/Web/API/Element/className#notes) in Javascript and cannot be used as a variable name. This is also why we use `className` in the JSX of our components.

2. Until we update the type of our TextInputProps, Typescript will display errors in *TextBox.tsx*. In *src/components/TextInput.tsx*, add the missing properties to the interface and pass them to the `input` component:

    ```tsx
    import { createElement, CSSProperties, ReactElement } from "react";

    export interface TextInputProps {
        value: string;
        className?: string;
        style?: CSSProperties;
        tabIndex?: number;
    }

    export function TextInput({ value, tabIndex, style, className }: TextInputProps): ReactElement {
        return <input 
            type="text" 
            value={value} 
            className={"form-control " + className} 
            style={style} 
            tabIndex={tabIndex} 
        />;
    }
    ```

    Explaining the code:
    * The `style` property is an object containing CSS properties which can be used to quickly add styling to a component. It is available on all [HTML components offered by React](https://react.dev/reference/react-dom/components/common#applying-css-styles).
    * The questionmarks in the props indicate that [a property is optional](https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties). This is why the unchanged usage of `TextInput` in *src/TextBox.editorPreview.tsx* is not causing type errors.
    * To ensure our input has basic input [styling from Bootstrap](https://getbootstrap.com/docs/5.3/forms/form-control/), we prepend the css class `form-control` to the `className` property. Similar to how you would add classes to an HTML `class` attribute. There is no need to include Bootstrap, as Mendix' Atlas UI is based on Bootstrap.

3. **Synchronize** your project with <kbd>F4</kbd> and **re-run** your app. The result should be a well-styled input.

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/styledinputwidgets.png" alt="A live Mendix app with two text fields with a similar appearance." class="no-border" >}}


### 3.6 Labeling the Input{#label-input}

Comparing our widget to the Mendix text input widget we are still missing a label. Luckily, it is very straightforward for any widget to add a label. [System properties](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#system-properties) are a special class of property types that allow for a unified approach to common problems. The properties `class`, `style`, and `tabIndex` from the previous section are other examples of system properties.

1. In the widget definition file, add a new property group. The caption can be anything, but we will name it `"Label"`. To the property group, add a new `systemProperty` element with the key `"Label"`.

    ```xml
    <propertyGroup caption="Label">
        <systemProperty key="Label" />
    </propertyGroup>
    ```
1. Open *src/TextBox.tsx* and remove the `style` and `className` props from `TextInput`. Now that the widget is a labeled input, it should no longer have the layout styling applied to it. In fact, the `pluggable-widget-tools` removed them from the type definition in *typings/TextBox.d.ts*.

    ```tsx
    return <TextInput value={value} tabIndex={props.tabIndex} />;
    ```


1. **Synchronize** your project and **update** all widgets. Now open the widget **Properties** and open the **Label** tab.

    This will show the **Show label** radio buttons. When **Show label** is set to true, it will automatically render the label for you in the page editor and the browser:

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/edittextboxtwo.png" alt="The widget properties opened at the Label tab. The show label setting is set to true, which reveals a label caption field with the value TextBox." class="no-border" >}}

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/editdataviewone.png" alt="The page editor showing the caption TextBox in front of the pluggable widget" class="no-border" >}}

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/inputwidgetswithlabel.png" alt="A live Mendix app with two text fields with labels. The second text field has the label TextBox" class="no-border" >}}


{{% alert color="info" %}}The labels will appear in front of, or above the inputs. This depends on the surrounding [data view's properties](/refguide/data-view/#411-form-orientation) (**form orientation** and **label width**) and the size of the screen.{{% /alert %}}


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
