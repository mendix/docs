---
title: "Build a Pluggable Web Widget: Part 1"
linktitle: "1. Build Pluggable Web Widget"
url: /howto/extensibility/create-a-pluggable-widget-one/
weight: 10
description: "This how-to teaches you how to create a pluggable web widget."
---

## Introduction

Pluggable web widgets are the new generation of custom-built widgets. These widgets are based on React and use a different architecture than the older custom widgets based on Dojo. With pluggable web widgets, you can develop powerful tools in simple, precise ways. In the first part of this series, you will learn to create a text input widget.

This how-to teaches you how to do the following:

* Generate a widget structure
* Create a basic text input widget
* Add a label

**Are you in a hurry?** 

Clone this [code sample](https://github.com/mendix/text-box-sample) from GitHub with the basic and advanced features already implemented.

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install the LTS version of [Node.js](https://nodejs.org/en/download/).
* Install an integrated development environment (IDE) of your choice (Mendix recommends [Microsoft Visual Studio Code](https://code.visualstudio.com/))
* Have a basic understanding of [TypeScript](https://www.typescriptlang.org/)

## Creating a TextBox Input Widget

The following steps teach you how to build a pluggable input widget, and show you how to use the new pluggable widget API.

### Creating a Test App {#creating-a-test-project}

1. Open Studio Pro and create a new test app by selecting **File > New App** from the top menu bar and then **Blank App**.
2. Create a test case for the new widget:<br />
    1. In the domain model of **MyFirstModule**, add a new entity.<br />
    2. Add a new attribute of type **String**.<br />
    3. Open **MyFirstModule’s** **Home** page.<br />
    4. There, add a **Data view** widget, double-click the widget, and give it a data source microflow by selecting **Data source** > **Type** > **Microflow**.<br />
    5. Next to the microflow field click the **Select** button, and click **New**.<br />
    6. Provide the name *DSS_CreateTestObject* to this new microflow.<br />
    7. Click the **Show** button. This will open the microflow editor. Then click the **OK** button to close the dialog box.<br />
    8. Add a new **Create object** action on your microflow.

3. Open the new **Create object** action's properties by double-clicking it. For its **Entity**, click the **Select** button and choose the entity you created above. Then click **OK** to close the dialog box.
4. Right-click the **Create Entity** activity, then click **Set $NewEntity as Return Value**.
5. Go back to the home page, open the **Add Widget** menu, and then add a **TextBox** widget inside the data view.
6. Open the Textbox's properties and select the **Datasource Attribute (path)** string attribute you created above. Then click the **OK** button to close the dialog box. The end result should look like this:

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/createtestobject.png" alt="The page editor in Studio Pro in structure mode. The page contains a Data View that has a Microflow as its datasource. It contains a Text Input widget referencing the text attribute created in this section." class="no-border" >}}

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/microflowcreateentity.png" alt="A Microflow with a single Create Entity Action. The Action creates an instance of the entity created in the steps above. The Microflow ends with returning the new entity." class="no-border" >}}

### Scaffolding the Widget

The Pluggable Widget Generator is the quickest way to start developing a widget. It creates a widget’s recommended folder structure and files.

Using a terminal or command line, navigate to your new Mendix app's folder, create a new folder named *myPluggableWidgets*, and start the generator using:

```shell
mkdir myPluggableWidgets
cd myPluggableWidgets
npx @mendix/generator-widget TextBox
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

As part of the widget scaffolding, the generator builds the widget for the first time. You can do this yourself by running `npm run build` inside your widget's directory.

There is also a watcher available that will rebuild your widget as you make changes to files. Start the watcher by running `npm start`.

{{% alert color="info" %}}
NPM version 7 changed the resolution behavior of peerDependencies. Try adding `--legacy-peer-deps` to your install command if it results in peer dependency resolution errors.
{{% /alert %}}

### Using the Widget

When the build script completes it will package your widget as a `.mpk` file and copy it to the `widgets/` directory in your Mendix app. Now that the generator has finished its job it is time to use the widget in Studio Pro. To use the widget, do the following:

1. To find your widget for the first time, you need to refresh the file system Studio Pro is looking at. Use <kbd>F4</kbd> or select **App** > **Synchronize Project Directory** from the Studio Pro menu bar.
1. Open the **Home_Web** page in the page editor.
1. Open the toolbox on the right of your screen and locate the newly created **Text Box** widget. It should be at the bottom of the list.
1. Drag the Text Box widget to the Data View added in [Creating a Test Project](#creating-a-test-project).
1. Run your app locally and open it in the browser. The homepage should now display Hello World below the text widget:

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/hello-world.png" alt="A live mendix app displaying a text field and below it the pluggable widget with the text Hello World." class="no-border" >}}

### Adding the Attribute

Open the *(YourMendixApp)/myPluggableWidgets/textBox* folder in your IDE of choice. From now on, all file references will be relative to this path. To set up your new widget, first you must use an attribute of the context object and display that attribute in an input field: 

1. Remove the file *src/components/HelloWorldSample.tsx*. Errors in *TextBox.editorPreview.tsx* will be dealt with in step 6 below.
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

    {{% alert color="info" %}}The console will display an error along the lines of `HelloWorldSample.tsx could not be found`. We will address this in the section [Labeling the Input](#label-input) of this how-to. It can be ignored for now.{{% /alert %}}

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
    
    In short, the component receives an input object, called props, containing a string property named `value`. In turn the component returns a [React input element](https://react.dev/reference/react-dom/components/input) with its value set to what the `TextInput` component received in `props.value`. While the syntax looks like HTML, [it actually is JavaScript](https://react.dev/learn/writing-markup-with-jsx).

5. The container component *src/TextBox.tsx* receives the properties in the runtime, and forwards the data to the display component. The container works like glue between the Mendix application and the display component. In *TextBox.tsx* update the component to look like this:

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

    Unlike the Container component, the Preview component receives mocked values for the widget attributes. In this case `textAttribute` always receives a string. Thanks to this it is not necessary to deal with a possible `undefined` value.

7. Once the watcher is done building your widget, go to Studio Pro and **synchronize** your project with <kbd>F4</kbd>. Synchronizing from the file system is a required step after changing the widget definition file. For other changes this is not necessary.  

    The widget now displays a red border indicating that it needs to be updated. Open its context menu with a right click and select **Update all widgets**.

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/updateallwidgets.png" alt="A demonstration of opening the context menu of a widget in the page editor to reveal the Update all widgets command." class="no-border" >}}

8. Open the widget properties. In the **Data source** tab **select** the **text attribute** created in [section 3.1](#creating-a-test-project).

9. **Run** the app locally to see the results, the new widget is already functional. The first text box is a standard Text box widget and the second is your pluggable web widget. Select the first text box and enter some text, unfocus the text box and the pluggable widget will now display the same data.

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/twotextwidgets.png" alt="A live Mendix App featuring two text fields displaying the identical text: test." class="no-border" >}}

### Adding Style

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

    You may notice that we do not [destructure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) the props object into variables for our Container component. The reason is that `class` [is a reserved keyword](https://developer.mozilla.org/en-US/docs/Web/API/Element/className#notes) in JavaScript and cannot be used as a variable name. This is also why we use `className` in the JSX of our components.

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
    * The question marks in the props indicate that [a property is optional](https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties). This is why the unchanged usage of `TextInput` in *src/TextBox.editorPreview.tsx* is not causing type errors.
    * To ensure our input has basic input [styling from Bootstrap](https://getbootstrap.com/docs/5.3/forms/form-control/), we prepend the css class `form-control` to the `className` property. Similar to how you would add classes to an HTML `class` attribute. There is no need to include Bootstrap, as Mendix' Atlas UI is based on Bootstrap.

3. Refresh your Mendix app in the browser, the result should be a well-styled input widget. If the change does not appear immediately, open your browser's devtools and disable cache. This ensures you are loading your widget's latest assets.

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/styledinputwidgets.png" alt="A live Mendix app with two text fields with a similar appearance." class="no-border" >}}

### Labeling the Input{#label-input}

Comparing our widget to the Mendix text input widget we are still missing a label. Luckily, it is very straightforward for any widget to add a label. [System properties](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#system-properties) are a special class of property types that allow for a unified approach to common problems. The properties `class`, `style`, and `tabIndex` from the previous section are other examples of system properties.

1. In the widget definition file, add a new property group. The caption can be anything, but we will name it `"Label"`. To the property group, add a new `systemProperty` element with the key `"Label"`.

    ```xml
    <propertyGroup caption="Label">
        <systemProperty key="Label" />
    </propertyGroup>
    ```

1. Open *src/TextBox.tsx* and remove the `style` and `className` props from `TextInput`. Now that the widget is a labeled input, it should no longer have the layout styling applied to it. In fact, the `pluggable-widget-tools` removed them from the type definition in *typings/TextBoxProps.d.ts*.

    ```tsx
    return <TextInput value={value} tabIndex={props.tabIndex} />;
    ```

1. **Synchronize** your project and **update** all widgets. Now open the widget **Properties** and open the **Label** tab.

    This will show the **Show label** radio buttons. When **Show label** is set to true, it will automatically render the label for you in the page editor and the browser:

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/edittextboxtwo.png" alt="The widget properties opened at the Label tab. The show label setting is set to true, which reveals a label caption field with the value TextBox." class="no-border" >}}

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/editdataviewone.png" alt="The page editor showing the caption TextBox in front of the pluggable widget" class="no-border" >}}

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-one/inputwidgetswithlabel.png" alt="A live Mendix app with two text fields with labels. The second text field has the label TextBox" class="no-border" >}}

{{% alert color="info" %}}The labels will appear in front of, or above the inputs. This depends on the surrounding [data view's properties](/refguide/data-view/#orientation) (**form orientation** and **label width**) and the size of the screen.{{% /alert %}}

### Handling Updates

Our widget now looks like a Mendix widget, but does not behave like one yet. While it is able to display the value of the text attribute, it is not able to update it yet. In this section we will close that loop.

1. In *src/components/TextInput.tsx* add an `onChange` property to the `TextInputProps`. This will act as a callback, allowing our `TextInput` component to signal changes in the value. It does this by calling the function with the new value. This is the same mechanism by which the `TextInput` component receives updated values from the `input` component.

    ```tsx {hl_lines=[6,"15-17"]}
    export interface TextInputProps {
        value: string;
        className?: string;
        style?: CSSProperties;
        tabIndex?: number;
        onChange?: (value: string) => void;
    }

    export function TextInput({ value, onChange, tabIndex, style, className }: TextInputProps): ReactElement {
        return (
            <input
                type="text"
                value={value}
                onChange={event => {
                    onChange?.(event.target.value);
                }}
                className={"form-control " + className}
                style={style}
                tabIndex={tabIndex}
            />
        );
    }
    ```

    Explaining the code:

    * Each time the input component has new data, it will trigger the `onChange` callback. In `TextInput` we tell the input component to execute the anonymous function written on lines 15-17. It receives an event object similar to the one provided by [event listeners](https://developer.mozilla.org/en-US/docs/Web/API/InputEvent). From the event object we extract the value of the input element, and call the onChange callback with that value.
    * The [optional chaining operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) `?.`, allows us to call a function that may be `undefined`. In that case the rest of the expression does not evaluate, avoiding a runtime error. It is equivalent to writing a nullish check:

        ```ts
        if (onChange != null && onChange != undefined) {
            onChange(event.target.value)
        }
        ```

2. Now that `TextInput` is able to provide updates, we need to make sure that those updates are forwarded to the Mendix client. To do this open *src/TextBox.tsx* and pass the `setValue` method of `props.textAttribute` to the `onChange` prop of `TextInput`.

    ```tsx {hl_lines=5}
    export function TextBox(props: TextBoxContainerProps): ReactElement {
        const value = props.textAttribute.value || "";
        return <TextInput 
            value={value} 
            onChange={props.textAttribute.setValue} 
            tabIndex={props.tabIndex} 
        />;
    }
    ```

    Explaining the code:

    * By defining a callback prop, a component advertises what data it is able to provide. Consumers of the callback get to decide how to respond to the availability of the new data. In this case we decided in `TextBox` that each time `TextInput` has new data, it is given to `props.textAttribute.setValue()`.

Congratulations, you have now made a fully functional input widget!

Continue with the next tutorial to learn how to add validation feedback, custom validations, and an on-change event activity. You will also learn how to handle a read-only state, improve web accessibility, and make a Studio Pro preview.

## Read More

* [Build a Pluggable Web Widget: Part 2 (Advanced)](/howto/extensibility/create-a-pluggable-widget-two/)
* [Pluggable Widgets API](/apidocs-mxsdk/apidocs/pluggable-widgets/)
* [Client APIs Available to Pluggable Widgets](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis/)
* [Pluggable Widget Property Types](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/)
