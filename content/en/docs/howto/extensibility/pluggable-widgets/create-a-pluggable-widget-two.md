---
title: "Build a Pluggable Web Widget: Part 2 (Advanced)"
linktitle: "2. Build Pluggable Web Widget"
url: /howto/extensibility/create-a-pluggable-widget-two/
weight: 20
description: "This how-to teaches you how to add advanced features to your TextBox input widget."
---

## Introduction

The new pluggable widget API makes building feature-complete widgets much easier. This how-to will go beyond [How to Build a Pluggable Web Widget: Part 1](/howto/extensibility/create-a-pluggable-widget-one/) and teach you how to add advanced features to your TextBox input widget.

This how-to teaches you how to do the following:

* Configure widget edit permissions
* Add validation feedback
* Add custom validations
* Create an onChange action
* Improve accessibility for screen readers 
* Enable Preview Mode in Mendix Studio Pro

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Complete [Build a Pluggable Web Widget: Part 1](/howto/extensibility/create-a-pluggable-widget-one/)

## Adding Advanced Features to Your TextBox Input Widget

To add advanced features to your TextBox input widget, consult the sections below.

### Configuring Edit Permissions

Right now the input is editable for any user at all times. However, the input should be disabled in cases when:

* A user does not have the security rights to edit
* A user is given read-only permission
* The context data view is not editable
* Mendix developers specify so in the widget's configuration

To add these restrictions, follow the instructions below:

1. In *TextBox.xml* add the [system property](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#editability) for `Editability` inside the `propertyGroup` of `Data source` (where you put the attribute inside `propertyGroup` will affect how the attribute renders in Studio Pro): 

    ```xml
    <propertyGroup caption="Editability">
        <systemProperty key="Editability"/>
    </propertyGroup>
    ```

2. Run `npm start` to update the widget and start the watcher if you have not already done so. When viewing in Studio Pro, the `Editability` property can be seen here:

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-two/editability-property-studio-pro.png" alt="Editability studio pro"   width="500"  class="no-border" >}}

3. Now add read-only functionality to your widget. In *TextBox.tsx*, replace the React component with the code below to check if the input should be disabled and pass it to in the `TextInput` component:

    ```tsx
    export function TextBox(props: TextBoxContainerProps): ReactElement {
        const value = props.textAttribute.value || "";
        return <TextInput
            value={value}
            onChange={props.textAttribute.setValue}
            tabIndex={props.tabIndex}
            disabled={props.textAttribute.readOnly}
        />;
    }
    ```

    Explaining the code:

    * The `textAttribute` has a property `readOnly`, which will be set to `true` based on:
        * If entity access is read only; based on the security model
        * If the containing data view is set to `Editable: No`
        * If the system property `Editability` is set with a true condition

4. In *components/TextInput.tsx*, add the `disabled` property to the `TextInputProps` interface and set the HTML input attribute to `disabled`:

    ```tsx
    import { createElement, CSSProperties, ReactElement } from "react";
    
    export interface TextInputProps {
        value: string;
        className?: string;
        style?: CSSProperties;
        tabIndex?: number;
        onChange?: (value: string) => void;
        disabled?: boolean;
    }
    
    export function TextInput({ value, onChange, tabIndex, style, className, disabled }: TextInputProps): ReactElement {
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
                disabled={disabled}
            />
        );
    }
    ```

    After altering this code, do the following to see your changes:

    1. In Studio Pro, press <kbd>F4</kbd> to synchronize your app directory.
    2. Right-click your TextBox widget and select **Update widget**. Then click **Run Locally** ({{% icon name="controls-play" %}}).
    3. Click **View App** to see your changes.

    Explaining the code:

    * The property `disabled` in an input element will behave according to the HTML's specifications — it will not respond to user actions, cannot be focused, is removed from the tab order, and will not fire any events

5. When you select **Never** for your TextBox widget's `Editable` property in Studio Pro, the widget will function like this: 

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-two/settonever.png" alt="editable never result"   width="500"  class="no-border" >}}

    Explaining the code:

    * The theme styling will apply the disabled style to the input in the same way as the standard input widget in the disabled state 

### Adding Validation Feedback

This section teaches you how to add validation to your TextBox widget. Using microflows and nanoflows, validation feedback can easily be provided. 

1. Drag a **call microflow button** widget below your TextBox widget and drop it there. On the subsequent dialog box, click **New** to assign a new microflow to your button, name it *Validation_Microflow*, and click **OK**:

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-two/validation-microflow-dialog.png" alt="validation microflow dialog box"   width="500"  class="no-border" >}}

    Before moving forward, go back to your app's **Home** page, double-click your validation button, and name it *Show validation feedback*.

2. Open your *Validation_Microflow* and drop a **Validation feedback** activity into your microflow: 

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-two/addingvalidation.png" alt="validation feedback client activity"   width="500"  class="no-border" >}}

    To define your validation feedback activity:
    1. Double-click the **Validation feedback** activity.
    2. Set **Variable** to **Entity (MyFirstModule Entity)**.
    3. Set **Member** to **Attribute**, and type *Validation feedback from a microflow* into **Template**.
    4. Click **OK**.
    5. Click **File** > **Save All** from the Studio Pro drop-down menu.

3. To render the message, create a new component *components/Alert.tsx*:

    ```tsx
    import { FunctionComponent, createElement, ReactNode } from "react";

    export interface AlertProps {
        alertStyle?: "default" | "primary" | "success" | "info" | "warning" | "danger";
        className?: string;
        children?: ReactNode;
    }
   
    export const Alert = ({ alertStyle = "danger", className, children }: AlertProps): ReactElement | null =>
        children
            ? <div className={`alert alert-${alertStyle} mx-validation-message ${className}`}>
                {children}
              </div>
            : null;
    
    Alert.displayName = "Alert";
    ```

    Explaining the code:

    * The `Alert` component does not have a state and can be written as a stateless function component
    * The component has a `displayName` for debugging and error messages
    * A `function` component can also have default properties which are set directly on the prototype

4. In *TextBox.tsx*, the validation feedback can be accessed though the attribute `validation` property and shown in the `Alert` component. Replace the component with the following code:

    ```tsx
    export function TextBox(props: TextBoxContainerProps): ReactElement {
        const value = props.textAttribute.value || "";
        const validationFeedback = props.textAttribute.validation;
        
        return (
            <Fragment>
                <TextInput
                    value={value}
                    onChange={props.textAttribute.setValue}
                    tabIndex={props.tabIndex}
                    disabled={props.textAttribute.readOnly}
                />
                <Alert>{validationFeedback}</Alert>
            </Fragment>
        );
    }
    ```

5. Add `Fragment` to the current React import (shown below), and add a new `Alert` import underneath the existing imports in *TextBox.tsx*:

    ```tsx
    import { createElement, ReactElement, Fragment } from "react";
    import { Alert } from "./components/Alert";
    ```

    After altering this code, do the following to see your changes:
    1. In Studio Pro, press <kbd>F4</kbd> to synchronize your app directory.
    2. Right-click your TextBox widget and select **Update widget**. Then click **Run Locally** ({{% icon name="controls-play" %}}).
    3. Click **View App** to see your changes.

    Explaining the code:

    * React nodes each require a root element — to create a non-rendering element and group the container elements, a `Fragment` can be used
    * When there is no error the validation will be empty, the `Alert` will not show, and the component will return `null`

    Now, your widget will show validation feedback from its microflow:

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-two/microflowwithvalidationfeedback.png" alt="validation feedback demo"   width="350"  class="no-border" >}}

### Customizing Validation

Validation can come from a modeled microflow or nanoflow, but can also be widget specific. For this sample you will learn to implement a custom, required [text template](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#texttemplate) message which will show when the input is empty.

1. In *TextBox.xml*, add the `requiredMessage` property inside the `propertyGroup` of `Data source`:

    ```xml
    <property key="requiredMessage" type="textTemplate" required="false">
        <caption>Required message</caption>
        <description/>
        <translations>
            <translation lang="en_US">An input text is required</translation>
        </translations>
    </property>
    ```

    Explaining the code:

    * `textTemplate` strings are translatable strings which can also have attributes and data values
    * Default values can be added to the XML and are language specific

2. In *TextBox.tsx*, add a validation handler to the attribute after the `onChange` function:

    ```ts
    export function TextBox(props: TextBoxContainerProps): ReactElement {
        const value = props.textAttribute.value || "";
        const validationFeedback = props.textAttribute.validation;
        
        useEffect(() => {
            props.textAttribute.setValidator((value?: string): string | undefined => {
                if (!value) {
                    return props.requiredMessage?.value ?? "";
                }
            });
        }, []);
        
        return (
            <Fragment>
                <TextInput
                    value={value}
                    onChange={props.textAttribute.setValue}
                    tabIndex={props.tabIndex}
                    disabled={props.textAttribute.readOnly}
                />
                <Alert>{validationFeedback}</Alert>
            </Fragment>
        );
    }
    ```

    After altering this code, do the following to see your changes:
    1. In Studio Pro, press <kbd>F4</kbd> to synchronize your app directory.
    2. Right-click your TextBox widget and select **Update widget**. Then click **Run Locally** ({{% icon name="controls-play" %}}).
    3. Click **View App** to see your changes.

    Explaining the code:

    * The `useEffect` is a hook used in a React component, and is only called once
    * The custom validator is registered to the attribute, and is called after each `setValue` call — the new value is only accepted when the validator returns no string
    * When the validator returns an error message, it will passed to the attribute, and a re-render is triggered — the standard `this.props.textAttribute.validation` will get the message and display it in the same way as the validation feedback

3. When entering text and removing all characters, the following error is shown:

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-two/nocharerror.png" alt="no character error"   width="500"  class="no-border" >}}

### Adding an OnChange Action

Until now the components did not keep any state. Each keystroke passed through the `onUpdate` function, which set the new value. The newly-set value was received through the React lifecycle, which updated the property and called the `render` function. This method can cause many rendering actions to be triggered by all widgets that are using that same attribute, such as a re-render for each keystroke. This pattern also makes it also difficult to trigger an onChange action. The onChange action should only trigger on leaving the input combined with a changed value. 

1. In *TextBox.xml*, add the `onChangeAction` inside `properties` and edit the `textAttribute` property by adding a reference in the `onChange` attribute to the key of the action :

    ```xml
    <propertyGroup caption="Data source">
        <property key="textAttribute" type="attribute" onChange="onChangeAction">
            <caption>Attribute (path)</caption>
            <description/>
            <attributeTypes>
                <attributeType name="String"/>
            </attributeTypes>
        </property>
    </propertyGroup>
    <!-- ... -->
    <propertyGroup caption="Events">
        <property key="onChangeAction" type="action" required="false">
            <caption>On change</caption>
            <description/>
        </property>
    </propertyGroup>
    ```

    After altering this code, do the following to see your changes:
    1. In Studio Pro, press <kbd>F4</kbd> to synchronize your app directory.
    2. Right-click your TextBox widget and select **Update widget**. Then click **Run Locally** ({{% icon name="controls-play" %}}).
    3. Click **View App** to see your changes.

    Adding this code will allow you to select various actions:

    {{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-two/variousactions.png" alt="various actions" class="no-border" >}}

2. In *TextBox.tsx*, check if `onChangeAction` is available and call the execute function `onLeave` when the value is changed. When doing this, replace the `onUpdate` function with your new `onLeave` function:

    ```tsx
    import { createElement, Fragment, ReactElement, useEffect } from "react";
    import { TextBoxContainerProps } from "../typings/TextBoxProps";
    import { TextInput } from "./components/TextInput";
    
    import "./ui/TextBox.css";
    import { Alert } from "./components/Alert";
    
    export function TextBox(props: TextBoxContainerProps): ReactElement {
        const value = props.textAttribute.value || "";
        const validationFeedback = props.textAttribute.validation;
        
        useEffect(() => {
            props.textAttribute.setValidator((value?: string): string | undefined => {
                if (!value) {
                    return props.requiredMessage?.value ?? "";
                }
            });
        }, []);
        
        function onLeave(value: string, isChanged: boolean): void {
            if (!isChanged) {
                return;
            }
            props.textAttribute.setValue(value);
        }
        
        return (
            <Fragment>
                <TextInput
                    value={value}
                    onLeave={onLeave}
                    tabIndex={props.tabIndex}
                    disabled={props.textAttribute.readOnly}
                />
                <Alert>{validationFeedback}</Alert>
            </Fragment>
        );
    }
    ```

3. In *components/TextInput.tsx*, introduce a state for input changes and use the `onBlur` function to call the `onLeave` function by replacing the `onUpdate` function:

    ```tsx
    import { createElement, CSSProperties, ReactElement, useEffect, useState } from "react";

    export interface TextInputProps {
        value: string;
        className?: string;
        style?: CSSProperties;
        tabIndex?: number;
        onLeave?: (value: string, changed: boolean) => void;
        disabled?: boolean;
    }
    
    interface TextInputState {
        editedValue?: string;
    }
    
    export function TextInput({ value, onLeave, tabIndex, style, className, disabled }: TextInputProps): ReactElement {
        const [state, setState] = useState<TextInputState>({ editedValue: undefined });
        useEffect(() => setState({ editedValue: undefined }), [value]);
        
        function getCurrentValue(): string {
            return state.editedValue !== undefined ? state.editedValue : value;
        }
        
        function onBlur(): void {
            onLeave?.(getCurrentValue(), getCurrentValue() !== value);
            setState({ editedValue: undefined });
        }
        
        return (
            <input
                type="text"
                value={getCurrentValue()}
                onChange={event => setState({ editedValue: event.target.value })}
                onBlur={onBlur}
                className={"form-control " + className}
                disabled={disabled}
                style={style}
                tabIndex={tabIndex}
            />
        );
    }

    ```

    Explaining the code:

    * The `useEffect` is a React hook that allows running code whenever its dependencies are changed
    * The `useState` is another React hook that provides a read-only object for accessing the widget's state, and a function that can be used to update it (and hence trigger a component update)
    * The state `editedValue` will be empty until the input value is changed by the user
    * The `onBlur` function will set the new value in the attribute through the container component — the state is reset, and the new value is received by an update of the attribute (which will propagate as a new property value)
    * The `onLeave` function will set the value. The `setValue` function will automatically call the onChange action, as this is connected with the XML configuration

### Adding Accessibility

To make the input widget more accessible for people using screen readers, you will need to provide hints about the input. 

1. In TextBox.tsx, add the `id`, `required`, and `hasError` props to the `TextInput` and `Alert` components:

    ```tsx
    export function TextBox(props: TextBoxContainerProps): ReactElement {
        const value = props.textAttribute.value || "";
        const validationFeedback = props.textAttribute.validation;
        const required = !!(props.requiredMessage && props.requiredMessage.value);
        
        useEffect(() => {
            props.textAttribute.setValidator((value?: string): string | undefined => {
                if (!value) {
                    return props.requiredMessage?.value ?? "";
                }
            });
        }, []);
        
        function onLeave(value: string, isChanged: boolean): void {
            if (!isChanged) {
                return;
            }
            props.textAttribute.setValue(value);
        }
        
        return (
            <Fragment>
                <TextInput
                    id={props.id}
                    value={value}
                    onLeave={onLeave}
                    tabIndex={props.tabIndex}
                    disabled={props.textAttribute.readOnly}
                    required={required}
                    hasError={!!validationFeedback}
                />
                <Alert id={props.id}>{validationFeedback}</Alert>
            </Fragment>
        );
    }
    ```

2. In *components/Alert.tsx*, add the `id` property:

    ```tsx
    export interface AlertProps {
        id?: string;
        alertStyle?: "default" | "primary" | "success" | "info" | "warning" | "danger";
        className?: string;
        children?: ReactNode;
    }
    
    export const Alert = ({ alertStyle = "danger", className, children, id }: AlertProps): ReactElement | null =>
        children ? (
            <div id={id} className={`alert alert-${alertStyle} mx-validation-message ${className}`}>
                {children}
            </div>
        ) : null;
    
    Alert.displayName = "Alert";
    ```

3. In *components/TextInput.tsx*, add the `id` property to the `InputProps` and pass it from the `TextBox` component to the `TextInput` component:

    ```tsx
    export interface TextInputProps {
        id?: string;
        value: string;
        className?: string;
        style?: CSSProperties;
        tabIndex?: number;
        hasError?: boolean;
        required?: boolean;
        disabled?: boolean;
        onLeave?: (value: string, changed: boolean) => void;
    }
    ```

    Then add the `id` and `aria` attributes to be rendered:

    ```tsx
    export function TextInput({ value, onLeave, tabIndex, style, className, disabled }: TextInputProps): ReactElement {
        const [state, setState] = useState<TextInputState>({ editedValue: undefined });
        useEffect(() => setState({ editedValue: undefined }), [value]);
        
        function getCurrentValue(): string {
            return state.editedValue !== undefined ? state.editedValue : value;
        }
        
        function onBlur(): void {
            onLeave?.(getCurrentValue(), getCurrentValue() !== value);
            setState({ editedValue: undefined });
        }
        
        return (
            <input
                id={id}
                type="text"
                value={getCurrentValue()}
                onChange={event => setState({ editedValue: event.target.value })}
                onBlur={onBlur}
                className={"form-control " + className}
                disabled={disabled}
                style={style}
                tabIndex={tabIndex}
                aria-labelledby={`${props.id}-label`}
                aria-invalid={props.hasError}
                aria-required={props.required}
            />
        );
    }
    ```

    After altering this code, do the following to see your changes:
    1. In Studio Pro, press <kbd>F4</kbd> to synchronize your app directory.
    2. Right-click your TextBox widget and select **Update widget**. Then click **Run Locally** ({{% icon name="controls-play" %}}).
    3. Click **View App** to see your changes.

    Explaining the code:
    
    In the previous guide, you added the system property `Label` to the widget. This tells Mendix to surround the pluggable widget with a caption. The relationship between a label and an input may be obvious to us, but not to browsers and screen readers. Proper labeling helps all your users to understand the purpose of elements on your page.
    
    The `label` element generated by Mendix has a pre-filled [`for` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/for) which references the pluggable widget's id (`props.name`). Matching the `input` element's `id` attribute signals that they belong together.
    
    If your widget contains an interactive element that does not have a built-in labeling mechanism, you can use [`aria-labelledby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby). In our example we show both options, but for built-in input elements the `for` attribute on a label is sufficient.

You have now made your widget compatible with screen readers. If a screen reader is describing your app aloud, it will list the widget elements to the user.

### Enabling Preview Mode

To easily view changes to your widget while in Studio Pro's **Design mode**, you can add preview functionality to your TextBox widget. Note that the properties received in preview mode will be slightly different than at the runtime level.

To add preview mode functionality, create a new file *src/TextBox.editorPreview.tsx* and add this code to it:

   ```tsx
   import { createElement, ReactElement } from "react";
   import { TextBoxPreviewProps } from "../typings/TextBoxProps";
   import { TextInput } from "./components/TextInput";
   
   export function preview(props: TextBoxPreviewProps): ReactElement {
      return <TextInput value={`[${props.textAttribute}]`} />;
   }
   
   export function getPreviewCss(): string {
      return require("./ui/TextBox.css");
   }
   ```

Explaining the code:

* The display component `TextInput` can be fully re-used to display the preview
* There is no need to attach any event handlers for updates 

### Grouping and System Properties

All pluggable widgets will automatically benefit from the `Visibility` property, which can be used to set the [conditional visibility](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/#visibility) of a widget. Within *widget.xml*, property groups can be used to move a property to a specific tab or place properties in a group. For more detailed information on property groups, see the [Property Groups](/apidocs-mxsdk/apidocs/pluggable-widgets/#property-groups) section of the *Pluggable Widgets API Documentation*.

To apply this knowledge, reorganize the `properties` section in *TextBox.xml* to make the properties look like the core text box properties (which you can see after double-clicking the widget):

```xml
<properties>
    <propertyGroup caption="General">
        <propertyGroup caption="Data source">
            <property key="textAttribute" type="attribute" onChange="onChangeAction" >
                <caption>Attribute (path)</caption>
                <description/>
                <attributeTypes>
                    <attributeType name="String"/>
                </attributeTypes>
            </property>
        </propertyGroup>
        <propertyGroup caption="Label">
            <systemProperty key="Label" />
        </propertyGroup>
        <propertyGroup caption="Editability">
            <systemProperty key="Editability"/>
        </propertyGroup>
        <propertyGroup caption="Visibility">
            <systemProperty key="Visibility"/>
        </propertyGroup>
        <propertyGroup caption="Validation">
            <property key="requiredMessage" type="textTemplate" required="false">
                <caption>Required message</caption>
                <description/>
                <translations>
                    <translation lang="en_US">A input text is required</translation>
                </translations>
            </property>
        </propertyGroup>
    </propertyGroup>
    <propertyGroup caption="Common">
        <systemProperty key="Name"/>
        <systemProperty key="TabIndex"/>
    </propertyGroup>
    <propertyGroup caption="Events">
        <propertyGroup caption="Events">
            <property key="onChangeAction" type="action" required="false">
                <caption>On change</caption>
                <description/>
            </property>
        </propertyGroup>
    </propertyGroup>
</properties>
```

Your code alterations will produce the following result:

{{< figure src="/attachments/howto/extensibility/pluggable-widgets/create-a-pluggable-widget-two/property-grouping-studio-pro.png" alt="property dialog Studio Pro"   width="500"  class="no-border" >}}

## Read More

* [Build a Pluggable Web Widget: Part 1](/howto/extensibility/create-a-pluggable-widget-one/)
* [Pluggable Widgets API](/apidocs-mxsdk/apidocs/pluggable-widgets/)
* [Client APIs Available to Pluggable Widgets](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis/)
* [Pluggable Widget Property Types](/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/)
