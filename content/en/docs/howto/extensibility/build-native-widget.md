---
title: "Build a Pluggable Native Widget"
url: /howto/extensibility/build-native-widget/
description: "Describes how to build a native widget, configure it, and style it in a Mendix app."
weight: 10
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Pluggable widgets enable developers to create new widgets beyond the core widgets shipped with Mendix Studio Pro. The pluggable widgets API works for both web and native mobile, offering you unique power and flexibility. For the web platform, the rendering is based on React and the React DOM. For mobile, the rendering uses the React Native framework.

In this how-to, you will learn to create a group box pluggable widget for native mobile applications with React Native.

This how-to teaches you core widget concepts by having you build configure, and style a group box widget. For more information on customizing pluggable widgets, see the [Pluggable Widgets API Documentation](/apidocs-mxsdk/apidocs/pluggable-widgets/).

A group box can be used to visually group related widgets together. Group boxes are displayed as a frame around nested widgets with an optional header. Group boxes can be configured to collapse and expand dynamically, and look like this:

{{< figure src="/attachments/howto/extensibility/build-native-widget/group-box-tease.png" alt="final widget" class="no-border" >}}

This how-to teaches you how to do the following:

* Generate a widget structure
* Put a pluggable widget into a Mendix app
* Configure your widget's properties and styling to suit multiple platforms

**Are you in a hurry?**

Clone this [code sample](https://github.com/mendix/native-group-box-pluggable-widget-sample) from GitHub with all group box features from this how-to already implemented.

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install the latest version of Mendix Studio Pro
* Install the Mendix Make It Native app on a mobile device or an emulator.
* Install the LTS version of [Node.js](https://nodejs.org).
* Install the latest [Yeoman](https://yeoman.io/) with the following command:

    ```shell
    npm install -g yo
    ```

* Install the latest Mendix Pluggable Widget Generator for Yeoman with the following command:

    ```shell
    npm install -g @mendix/generator-widget
    ```

* Install an integrated development environment (IDE) of your choice (Mendix recommends [Microsoft Visual Studio Code](https://code.visualstudio.com/))
* Have a basic understanding of:
    * Microsoft's Command Prompt or the Unix command line
    * [TypeScript](https://www.typescriptlang.org/)
    * [React](https://reactjs.org)

## Building a Native Group Box Widget

To build a group box widget for native mobile, you will follow these steps:

1. Scaffold a pluggable widget app.
2. Create a Mendix test app.
3. Build the group box widget.

The following subsections will elaborate on each of these steps.

### Scaffolding a Pluggable Widget App

The Pluggable Widget Generator is the quickest way to start developing a pluggable widget. When you run this generator with Yeoman, Yeoman will scaffold your app folder with a folder structure and certain files recommended by Mendix.

To scaffold your app folder for the group box widget, follow these steps:

1. Open up a terminal.
2. Change the current working directory to the folder where you want to store your widget app.

    {{% alert color="info" %}}Make sure to store your widget app in a folder not connected to Dropbox. Dropbox blocks files from being watched, which will prevent you from completing this document.{{% /alert %}}

3. Start the generator by executing the following command:

    ```shell
    yo @mendix/widget GroupBox
    ```

4. The generator will ask you for some input during setup. Provide this information to the generator:

    * Widget name: {*GroupBox*}
    * Widget description: {*Widget to group building blocks, snippets, or other widgets.*}
    * Organization name: {*com.mendix.widget.native*}
    * Copyright: {*Mendix 2019*}
    * License: {*Apache-2.0*}
    * Initial version: {*1.0.0*}
    * Author: {*Mendix*}
    * Mendix app path: {*./test/MxTestApp/*}
    * Programming language: {**TypeScript**}
    * Widget type: {**For native mobile apps**}
    * Widget template: {**Empty widget (recommended for more experienced developers)**}
    * Unit tests: {**No**}

    {{< figure src="/attachments/howto/extensibility/build-native-widget/pluggable-widget-generator-input.png" alt="Pluggable Widget Generator input" class="no-border" >}}

5. Your widget will build. If your app has been scaffolded correctly, you will see the following message:

    `> Widget successfully built!! Please open Mendix Studio Pro and start playing with your new widget.`

Note that whenever it is required to reinstall NPM package dependencies inside the scaffolded pluggable widget app with an NPM version of 7 or higher, make sure to run the installation script with an extra flag: `npm install --legacy-peer-deps`.

### Creating a Mendix Test App

In order to test your group box widget, you will a Mendix application that uses this widget in various ways. Create a Mendix app for this application by following these steps:

1. Open Studio Pro.
2. Create a new app by clicking **File** > **New App**.
3. Select the **Blank** app (do not select **Blank App**).
4. Click the **Use this starting point** button
5. Fill in the following details in the **App Settings** dialog box:
    * App name: *GroupBoxTestApp*
    * Enable online services: *No*
6. Click **Create app**.

Optionally, you can remove all unused widgets to optimize the debugging process. To do so, follow these steps:

1. Click **App** > **Show App Directory in Explorer**.
2. Open the **widgets** folder.
3. Delete all files in this folder.

Follow these steps to add the Mendix app as a test app to your widget app, so that you can start modeling with the new widget:

1. Close the app in Mendix Studio Pro by clicking **File** > **Close App**.
2. Move the contents of the Mendix app folder into **test/MxTestApp**, which is located inside your group box widget app folder.

Create a test case by following these steps:

1. Open the Mendix test app in **test/MxTestApp** by selecting **File** > **Open App**.
2. In the **Open App** dialog box, select **Locally on disk**.
3. Open the *GroupBoxTestApp.mpr* file inside your group box widget app folder.
4. Open **Home_Native** page.
5. Copy the **Home** container and paste it underneath that container:

    {{< figure src="/attachments/howto/extensibility/build-native-widget/home-container.png" alt="home container" class="no-border" >}}

6. Delete the contents of your new container.
7. Search in Toolbox for the **Group Box** widget.
8. Drag the widget into your empty container:

    {{< figure src="/attachments/howto/extensibility/build-native-widget/initial-widget.png" alt="initial widget" class="no-border" >}}

9. Double-click the widget, fill in your name as the **Default value**, and click **OK**.

You have set up your test app. To verify that your Mendix test app is set up correctly, follow these steps:

1. In Studio Pro, run the test app locally.
2. Use the Make It Native app to open your new app.
3. Verify that your app's home page contains the yellow text **Hello {your name}**.

    {{< figure src="/attachments/howto/extensibility/build-native-widget/1-yellow-text-mobile.png" alt="hello user" class="no-border" >}}

### Building the Group Box Widget

Now that your widget sample code is running, it is time to transform your sample widget into an actual group box widget. To do so, you will follow these steps:

1. Create a static UI.
2. Add widget properties.
3. Make the widget collapsible.
4. Add an expand and collapse icon property.
5. Add a collapsible property.
6. Add a custom default style.
7. Add a design property.

The following paragraphs will elaborate on each of these steps. Open up your group box widget app folder in your IDE of choice. From now on, all file references will be relative to this app folder.

#### Creating a Static UI

Define the structure and default style of the group box widget with these steps:

1. Open **src/components/HelloWorldSample.tsx**.

    This file contains the display component of your widget. Display components describe the widget's UI in terms of React Native components and contain the widget's behavioral logic. Display components do not interact with Mendix-specific APIs and therefore are usable in any React Native application.

2. Replace the **render** method with the following code snippet:

    ```tsx
        render(): ReactNode {
            return (
                <View style={this.styles.container}>
                    <View style={this.styles.header}>
                        <Text style={this.styles.headerContent}>Header caption</Text>
                        <Text style={this.styles.headerContent}>-</Text>
                    </View>
                    <View style={this.styles.content}>
                        <Text>Content</Text>
                    </View>
                </View>
            );
        }
    ```

    The **render** method uses two built-in components from React Native: **\<View>** and **\<Text>**. **\<View>** is a component like a \<div> or \<span> from HTML, whereas the **\<Text>** component is used to display some text. To learn more about the built-in components, consult the [React Native website](https://facebook.github.io/react-native/).

3. Open up a terminal.
4. Change the current working directory to your app folder.
5. Execute the following command to bundle your widget and update the widget bundle in your Mendix test app:

    ```shell
    npm start
    ```

    The executed script will keep watching your source files and rebundle the widget every time you save one of these files.

6. Open your Mendix test app in **test/MxTestApp** in Mendix Studio Pro.
7. Run the app locally.
8. Verify with the Make It Native app that your app looks like the image below:

    {{< figure src="/attachments/howto/extensibility/build-native-widget/2-header-caption-mobile.png" alt="basic app" class="no-border" >}}

The UI of your widget does not look like a group box yet. Apply a default style to make it look like one with the following steps:

1. Open *src/components/HelloWorldSample.tsx*.
2. Replace the following **defaultStyle** constant:

    ```tsx
    const defaultStyle: CustomStyle = {
        container: {},
        label: {
            color: "#F6BB42"
        }
    };
    ```

    with this:

    ```tsx
    const defaultStyle: CustomStyle = {
        container: {
            borderColor: "#000000",
            borderRadius: 4,
            borderWidth: 1,
            overflow: "hidden"
        },
        header: {
            backgroundColor: "#000000",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            paddingHorizontal: 15
        },
        headerContent: {
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "bold"
        },
        content: {
            paddingVertical: 10,
            paddingHorizontal: 15
        },
        label: {
            color: "#F6BB42"
        }
    };
    ```

    The objects assigned to the properties of **defaultStyle** are passed to the style props of the React Native components that you use in the **render** method. The property names inside the objects are similar to CSS style properties. To learn more about the supported properties and what effect they have, visit the following links:

    * [\<View> style props](https://facebook.github.io/react-native/docs/view-style-props)
    * [\<Text> style props](https://facebook.github.io/react-native/docs/text-style-props)

3. Save all files to rebundle and update the Mendix test app.
4. Refresh the Mendix app inside the Make It Native app.
5. Verify that the group box widget looks like the image below:

    {{< figure src="/attachments/howto/extensibility/build-native-widget/3-bw-header.png" alt="black white widget" class="no-border" >}}

When you build a widget for native mobile, keep in mind that the widget can be used on both iOS and Android. Both platforms have their own design language, and you should adhere as much as possible to both languages. To do this, you will sometimes need to define platform-specific styling or use platform-specific React Native components.

For the group box widget it would be nice to have square corners on Android devices. Apply this style behavior with the following steps:

1. In **src/components/HelloWorldSample.tsx** you must adjust the import statement in order to use the **Platform** detection feature. Change the import from this:

    ```tsx
    import { Text, View } from "react-native";
    ```

    to this:

    ```tsx
    import { Text, View, Platform } from "react-native";
    ```

2. Change the value of `defaultStyle.container.borderRadius` from `4` to `Platform.OS === "ios" ? 4 : 0` so that the initialization of the **defaultStyle** constant look as follows:

    ```tsx
    const defaultStyle: CustomStyle = {
        container: {
            borderColor: "#000000",
            borderRadius: Platform.OS === "ios" ? 4 : 0,
            borderWidth: 1,
            overflow: "hidden"
        },
        header: {
            backgroundColor: "#000000",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            paddingHorizontal: 15
        },
        headerContent: {
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "bold"
        },
        content: {
            paddingVertical: 10,
            paddingHorizontal: 15
        },
        label: {
            color: "#F6BB42"
        }
    };
    ```

3. Save all files to rebundle and update the Mendix test app.
4. Refresh the Mendix app inside the Make It Native app.
5. Verify that the group box widget looks like the image below (if you are using an Android test device, your border will look a little different):

    {{< figure src="/attachments/howto/extensibility/build-native-widget/3-bw-header.png" alt="black white widget" class="no-border" >}}

As you might have noticed, the display component is still called **HelloWorldSample**. Next you will introduce the term "GroupBox" in your code:

1. In **src/components/HelloWorldSample.tsx** change the class name from `HelloWorldSample` to *GroupBox*.
2. Change the file name to *GroupBox.tsx*.
3. Rename the **HelloWorldSampleProps** interface to *GroupBoxProps*.
4. Change the **GroupBox** class declaration to the following:

    ```tsx
    export class GroupBox extends Component<GroupBoxProps>
    ```

The changes you made in steps one and two cause errors in your container component defined in *src/GroupBox.tsx*. The container component is used by the Mendix Client, receives property data from this client, and forwards this data to the display component.

To fix the errors in the container component, use these steps:

1. Open *src/GroupBox.tsx*.
2. Replace the following import:

    ```tsx
    import { HelloWorldSample } from "./components/HelloWorldSample";
    ```

    with this:

    ```tsx
    import { GroupBox as WrappedGroupBox } from "./components/GroupBox";
    ```

3. Rename the **HelloWorldSample** component in the **render** method to *WrappedGroupBox*.

You are not using the **label** property of the **defaultStyle** constant anymore in the **render** method of the display component. Remove it by doing the following:

1. Open **src/components/GroupBox.tsx**.
2. Remove the **label** property from the **defaultStyle** constant:

    ```tsx
    const defaultStyle: CustomStyle = {
        container: {
            borderColor: "#000000",
            borderRadius: Platform.OS === "ios" ? 4 : 0,
            borderWidth: 1,
            overflow: "hidden"
        },
        header: {
            backgroundColor: "#000000",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            paddingHorizontal: 15
        },
        headerContent: {
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "bold"
        },
        content: {
            paddingVertical: 10,
            paddingHorizontal: 15
        }
    };
    ```

3. Open **src/GroupBox.tsx**.
4. Remove the **label** property from the **CustomStyle** interface and add the new style properties **header**, **headerContent**, **content**:

    ```tsx
    export interface CustomStyle extends Style {
        container: ViewStyle;
        header: ViewStyle;
        headerContent: TextStyle;
        content: ViewStyle;
    }
    ```

5. Save all files to rebundle and update the Mendix test app.
6. Refresh the Mendix app inside the Make It Native app.
7. Verify that the group box widget still looks the same after the refactoring:

    {{< figure src="/attachments/howto/extensibility/build-native-widget/3-bw-header.png" alt="black white widget" class="no-border" >}}

#### Adding Widget Properties

Now that you have a basic group box, give the Mendix developer the possibility to customize it with the help of widget properties: a header caption and a content property.

#### Header Caption Property

Next you will allow the Mendix developer to alter the header caption of your widget. You can reuse the code and configuration of the default value property you used earlier to alter the **Hello World** output of the sample widget. 

1. Open **src/GroupBox.xml** and change the sample text property to this:

    ```xml
    <property key="headerCaption" type="string" required="false">
        <caption>Header caption</caption>
        <description />
    </property>
    ```

2. Save the file. As soon as you save the file, the script running in the background will rebundle the widget and generate new typings in **typings/GroupBoxProps.d.ts**. These typings define the props the container component will receive. Some errors will surface in the container component because you renamed the property. 

3. Open **src/GroupBox.tsx** and change this line in your render method:

    `sampleText={this.props.sampleText ? this.props.sampleText : "World"}`

    to this:

    `headerCaption={this.props.headerCaption}`

    Note that our display component doesn't receive a **headerCaption** prop yet.

4. Your display component does not receive a headerCaption prop yet, so open **src/components/GroupBox.tsx** and replace this:

    ```tsx
    export interface GroupBoxProps {
        sampleText?: string;
        style: CustomStyle[];
    }
    ```

    with this:

    ```tsx
    export interface GroupBoxProps {
        headerCaption?: string;
        style: CustomStyle[];
    }
    ```

5. You still need to use the **headerCaption** prop in the render method to display the actual text in your header. Adjust the render method like this:

    ```tsx
    render(): ReactNode {
        return (
            <View style={this.styles.container}>
                <View style={this.styles.header}>
                    <Text style={this.styles.headerContent}>{this.props.headerCaption}</Text>
                    <Text style={this.styles.headerContent}>-</Text>
                </View>
                <View style={this.styles.content}>
                    <Text>Content</Text>
                </View>
            </View>
        );
    }
    ```

Do these final steps to sync and run your app:

1. In Studio Pro press <kbd>F4</kbd> or select **App** > **Synchronize App Directory** to sync your app with the changes you made to **src/GroupBox.xml**. 
2. An error will tell you to update your widget. Right-click the Group Box widget and select **Update widget**. 
3. Double-click the same widget and you will now see your new property. 
4. Fill in some caption text, click **OK**, and rerun your app locally to see your caption text in the app:

    {{< figure src="/attachments/howto/extensibility/build-native-widget/sample-caption-pro.png" alt="sample text pro" class="no-border" >}}

    {{< figure src="/attachments/howto/extensibility/build-native-widget/4-this-is-my-text.png" alt="sample text mobile" class="no-border" >}}

#### Content Property

You will also want Mendix developers to be able to fill content in the group box like building blocks, snippets, and other widgets. To enable this, do the following:

1. In **src/GroupBox.xml**, add a content property element above the header caption property.
2. Change the name element from **Group Box** to *Group box* so its name fits correct conventions. 
3. Remove the "needsEntityContext" attribute from the widget element, since this is no longer necessary. 
4. Your file should now look like this:

    ```xml
    <?xml version="1.0" encoding="utf-8" ?>
    <widget id="com.mendix.widget.native.groupbox.GroupBox" pluginWidget="true" offlineCapable="true"
        supportedPlatform="Native"
        xmlns="http://www.mendix.com/widget/1.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.mendix.com/widget/1.0/ ../node_modules/mendix/custom_widget.xsd">
        <name>Group box</name>
        <description />
        <icon />
        <properties>
            <propertyGroup caption="General">
                <property key="content" type="widgets" required="false">
                    <caption>Content</caption>
                    <description>Widgets to place inside.</description>
                    </property>
                <property key="headerCaption" type="string" required="false">
                    <caption>Header caption</caption>
                    <description />
                </property>
            </propertyGroup>
        </properties>
    </widget>
    ```

5. Save the file.
6. Open **src/GroupBox.tsx**.
7. Change the **render** method as follows to pass the content (React Native components) to the display component:

    ```tsx
    render(): ReactNode {
        const { content, headerCaption, style } = this.props;

        return (
            <WrappedGroupBox headerCaption={headerCaption} style={style}>
                {content}
            </WrappedGroupBox>
        );
    }
    ```

8. Save the file.
9. Open **src/components/GroupBox.tsx**.
10. Adjust the **render** method to render the content:

    ```tsx
    render(): ReactNode {
        const { children, headerCaption } = this.props;
        
        return (
            <View style={this.styles.container}>
                <View style={this.styles.header}>
                    <Text style={this.styles.headerContent}>{headerCaption}</Text>
                    <Text style={this.styles.headerContent}>-</Text>
                </View>
                <View style={this.styles.content}>
                    {children}
                </View>
            </View>
        );
    }
    ```

Verify that the new content property works:

1. Go back to Studio Pro.
2. Press <kbd>F4</kbd> or select **App** > **Synchronize App Directory** to bring your application in sync with the changes to the **src/GroupBox.xml** file.
3. Update the group box widget again. A content area will appear in the page editor:

    {{< figure src="/attachments/howto/extensibility/build-native-widget/content-area.png" alt="content area" class="no-border" >}}

4. Drag a **Call nanoflow button** widget into the content area.
5. Click **New** and a new nanoflow *ACT_ShowMessage*.
6. Double-click the button and change the **Caption** to *Show message*.
7. Navigate to **ACT_ShowMessage**.
8. Drag a **Show message** activity into your nanoflow.
9. Double-click the activity and add the text *Hello World!* to the **Template**, then click **OK**.
10. Rerun the app locally.
11. With the Make It Native app, verify that your button is inside the group box and is triggering a message popup saying **Hello World!**.

    {{< figure src="/attachments/howto/extensibility/build-native-widget/5-hello-world.png" alt="hello world" class="no-border" >}}

It would be nice to hide the content area of the group box completely when there is no content added to the group box in Mendix Studio Pro:

1. In *src/components/GroupBox.tsx* import the `Children` component so your total components look like this:

    ```tsx
    import {
        Children,
        Component,
        ReactNode,
        createElement,
        ComponentClass
    } from "react";
    ```

2. Extract the rendering of the content area from the **render** method to a lambda method called **renderContent**:

    ```tsx
    private renderContent = (): ReactNode => {
        if (Children.count(this.props.children) === 0) {
            return null;
        }

        return <View style={this.styles.content}>{this.props.children}</View>;
    };
    ```

3. Make a call to **renderContent** in the **render** method. When you do this, your **render** method will look like this:

    ```tsx
    render(): ReactNode {
        return (
            <View style={this.styles.container}>
                <View style={this.styles.header}>
                    <Text style={this.styles.headerContent}>{this.props.headerCaption}</Text>
                    <Text style={this.styles.headerContent}>-</Text>
                </View>
                {this.renderContent()}
            </View>
        );
    }
    ```

4. To see your changes, drag a new **Group box** widget onto your home page. Run your app and check to see that your new group box with no content shows no empty white box:

    {{< figure src="/attachments/howto/extensibility/build-native-widget/6-button-inside.png" alt="new group box" class="no-border" >}}

5. Delete the empty **Group box** widget you created in the previous step, then rerun your app to save your changes.

#### Making the Widget Collapsible

Now that your widget can contain content, the next challenge is to hide this content by making the group box Collapsible.

To start, make the complete header clickable:

1. Navigate to the display component (**src/components/GroupBox.tsx**).
2. Import the React component **ComponentClass** so that your React imports look like this:

    ```tsx
    import { Children, Component, ReactNode, createElement, ComponentClass } from "react";
    ```

3. Import the React Native components **TouchableOpacity** and **TouchableNativeFeedback** so that your React Native imports look like this:

    ```tsx
    import {
        Text,
        View,
        Platform,
        TouchableOpacity,
        TouchableNativeFeedback
    } from "react-native";
    ```

4. Create the following lambda method that is responsible for rendering the clickable header:

    ```tsx
    private renderHeader = () => {
        const view = (
            <View style={this.styles.header}>
                <Text style={this.styles.headerContent}>{this.props.headerCaption}</Text>
                <Text style={this.styles.headerContent}>-</Text>
            </View>
        );

        const Touchable: ComponentClass<any> = Platform.OS === "ios" ? TouchableOpacity : TouchableNativeFeedback;

        return <Touchable>{view}</Touchable>;
    };
    ```

    In the method above, the **Touchable** constant is a dynamic component. Depending on which platform on your app is running, the **Touchable** constant represents either the React Native built-in component **TouchableOpacity** or **TouchableNativeFeedback**. Each platform uses a different component to achieve a different type of tap feedback. Tapping on Android causes a ripple effect, whereas on iOS tapping causes an opacity effect.

5. Change the **render** method to make use of **renderHeader**:

    ```tsx
    render(): ReactNode {
        return (
            <View style={this.styles.container}>
                {this.renderHeader()}
                {this.renderContent()}
            </View>
        );
    }
    ```

6. Make sure all files have been saved.
7. Reload your test app in the Make It Native app to view the change.
8. Verify the header is clickable by tapping it. You should see a light-up effect on iOS. Note that on Android, the ripple effect is not visible on a black background, so you cannot verify yet if it is clickable.

Now make it possible to expand or collapse the group box:

1. Navigate to the display component (**src/components/GroupBox.tsx**).
2. Create an **GroupBoxState** interface below the **GroupBoxProps** one:

    ```tsx
    export interface GroupBoxState {
        collapsed: boolean;
    }
    ```

3. Change the class definition to give our component a state to keep track on whether it is collapsed or not:

    ```tsx
    export class GroupBox extends Component<GroupBoxProps, GroupBoxState>
    ```

4. Set collapsed to **false** as the initial state inside the class:

    ```tsx
    readonly state: GroupBoxState = {
        collapsed: false
    };
    ```

5. To change the collapsed state, add a property **toggleCollapsed** to the class and assign the following arrow function to it:

    ```tsx
    private toggleCollapsed = (): void => {
        const collapsed = !this.state.collapsed;
        this.setState({ collapsed });
    };
    ```

6. Let the **Touchable** component execute the **toggleCollapsed** method when it is tapped. Also, add a switch between a plus and minus character in the header depending on the state. The **renderHeader** method should look as follows:

    ```tsx
    private renderHeader = () => {
        const view = (
            <View style={this.styles.header}>
                <Text style={this.styles.headerContent}>{this.props.headerCaption}</Text>
                <Text style={this.styles.headerContent}>{this.state.collapsed ? "+" : "-"}</Text>
            </View>
        );

        const Touchable: ComponentClass<any> = Platform.OS === "ios" ? TouchableOpacity : TouchableNativeFeedback;

        return <Touchable onPress={this.toggleCollapsed}>{view}</Touchable>;
    };
    ```

7. Change the **renderContent** method to only render the content when the group box is not collapsed:

    ```tsx
    private renderContent = (): ReactNode => {
        if (this.state.collapsed || Children.count(this.props.children) === 0) {
            return null;
        }

        return <View style={this.styles.content}>{this.props.children}</View>;
    };
    ```

8. Verify in the Make it Native app that you can expand and collapse the group box by tapping your widget's header.

#### Adding an Expand and Collapse Icon Property

The next step is to allow a Mendix developer to use a custom icon in the clickable header. First, define the properties and adjust the display component so that it can render icons:

1. Navigate to **src/GroupBox.xml**.
2. Add two icon properties to set an icon for indicating the actions expand and collapse:

    ```xml
    <?xml version="1.0" encoding="utf-8" ?>
    <widget id="com.mendix.widget.native.groupbox.GroupBox" pluginWidget="true" offlineCapable="true" supportedPlatform="Native"
        xmlns="http://www.mendix.com/widget/1.0/"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.mendix.com/widget/1.0/ ../node_modules/mendix/custom_widget.xsd">
        <name>Group box</name>
        <description />
        <icon />
        <properties>
            <propertyGroup caption="General">
                <property key="content" type="widgets" required="false">
                    <caption>Content</caption>
                    <description>Widgets to place inside.</description>
                </property>
                <property key="headerCaption" type="string" required="false">
                    <caption>Header caption</caption>
                    <description />
                </property>
                <property key="expandIcon" type="icon" required="false">
                    <caption>Expand icon</caption>
                    <description>Icon used to indicate that the group box can be expanded.</description>
                </property>
                <property key="collapseIcon" type="icon" required="false">
                    <caption>Collapse icon</caption>
                    <description>Icon used to indicate that the group box can be collapsed.</description>
                </property>
            </propertyGroup>
        </properties>
    </widget>
    ```

3. Add property groups around the properties to create a more readable properties window in Studio Pro:

    ```xml
    <?xml version="1.0" encoding="utf-8" ?>
    <widget id="com.mendix.widget.native.groupbox.GroupBox" pluginWidget="true" offlineCapable="true" supportedPlatform="Native"
        xmlns="http://www.mendix.com/widget/1.0/"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.mendix.com/widget/1.0/ ../node_modules/mendix/custom_widget.xsd">
        <name>Group box</name>
        <description />
        <icon />
        <properties>
            <propertyGroup caption="General">
                <propertyGroup caption="General">
                    <property key="content" type="widgets" required="false">
                        <caption>Content</caption>
                        <description>Widgets to place inside.</description>
                    </property>
                </propertyGroup>
                <propertyGroup caption="Header">
                    <property key="headerCaption" type="string" required="false">
                        <caption>Caption</caption>
                        <description />
                    </property>
                    <property key="expandIcon" type="icon" required="false">
                        <caption>Expand icon</caption>
                        <description>Icon used to indicate that the group box can be expanded.</description>
                    </property>
                    <property key="collapseIcon" type="icon" required="false">
                        <caption>Collapse icon</caption>
                        <description>Icon used to indicate that the group box can be collapsed.</description>
                    </property>
                </propertyGroup>
            </propertyGroup>
        </properties>
    </widget>
    ```

4. Save the *.xml* file.
5. Navigate to the display component **src/components/GroupBox.tsx**.
6. Add two new props for an expand and collapse icon by changing the **GroupBoxProps** interface:

    ```tsx
    export interface GroupBoxProps {
        collapseIcon?: ReactNode;
        expandIcon?: ReactNode;
        headerCaption?: string;
        style: CustomStyle[];
    }
    ```

7. Create a property **renderIcon** and assign an arrow function to it that uses the **expandIcon** and **collapseIcon** props:

    ```tsx
    private renderIcon = (): ReactNode => {
        const { collapseIcon, expandIcon } = this.props;

        if (this.state.collapsed) {
            return expandIcon ? expandIcon : <Text style={this.styles.headerContent}>+</Text>;
        }

        return collapseIcon ? collapseIcon : <Text style={this.styles.headerContent}>-</Text>;
    };
    ```

8. Change the method **renderHeader** so that it makes use of **renderIcon**:

    ```tsx
    private renderHeader = () => {
        const view = (
            <View style={this.styles.header}>
                <Text style={this.styles.headerContent}>            {this.props.headerCaption}</Text>
                {this.renderIcon()}
            </View>
        );
        
        const Touchable: ComponentClass<any> = Platform.OS === "ios" ? TouchableOpacity : TouchableNativeFeedback;
        
        return <Touchable onPress={this.toggleCollapsed}>{view}</Touchable>;
    };
    ```

Next you have to pass the icons configured by the Mendix developer to your display component. If an icon is not explicitly configured, you will pass a default glyph (glyphs are provided by the Mendix Client). Glue everything together in the container component by doing the following:

1. Navigate to the container component **src/GroupBox.tsx**.
2. Create two constants outside the class which hold the glyph references:

    ```tsx
    const defaultCollapseIconGlyph = "glyphicon-minus";
    const defaultExpandIconGlyph = "glyphicon-plus";
    ```

3. Add the following imports:

    ```tsx
    import { DynamicValue, NativeIcon, ValueStatus } from "mendix";
    import { Icon } from "mendix/components/native/Icon";
    import {
        GroupBox as WrappedGroupBox,
        GroupBoxProps as WrappedGroupBoxProps
    } from "./components/GroupBox";
    ```

4. Add a property **renderIcon** to the **GroupBox** class and assign the following arrow function to it:

    ```tsx
    private renderIcon = (toBeRenderedIcon: DynamicValue<NativeIcon> | undefined, glyph: string) => {
        const nativeIcon: NativeIcon =
            toBeRenderedIcon && toBeRenderedIcon.status === ValueStatus.Available
                ? toBeRenderedIcon.value
                : { type: "glyph", iconClass: glyph };

        return <Icon icon={nativeIcon} />;
    };
    ```

5. Adjust the **render** method so that it makes use of **renderIcon**:

    ```tsx
    render(): ReactNode {
        const { collapseIcon, expandIcon, content, headerCaption, style } = this.props;

        const props: WrappedGroupBoxProps = {
            headerCaption,
            collapseIcon: this.renderIcon(collapseIcon,             defaultCollapseIconGlyph),
            expandIcon: this.renderIcon(expandIcon, defaultExpandIconGlyph),
            style
        };

        return <WrappedGroupBox {...props}>{content}</WrappedGroupBox>;
    }
    ```

6. Navigate to Studio Pro.
7. Press <kbd>F4</kbd> or select **App** > **Synchronize App Directory** to bring your application in sync with the changes you made to the **src/GroupBox.xml** file.
8. Update the group box widget.
9. Double-click your widget.
10. In the **Icon** described as **Icon used to indicate that the group box can be expanded** click **Edit**.
11. Click the € sign and click **Select**:

    {{< figure src="/attachments/howto/extensibility/build-native-widget/euro-icon.png" alt="euro" class="no-border" >}}

12. Click **OK**, then run the app locally.
13. Inspect your changes. Notice that you cannot see any icon in group box's header. This is because your background color and text color are both black. Remember that in the **defaultStyle** constant of your display component you defined that text of React Native components that get the **headerContent** style applied to it should be white. However, you are not explicitly applying this style to our **Icon** component that you pass from our container component to the display component. You could argue to move the creation of the **Icon** component inside your display component, but this will go against the strict separation of concerns related to the container and display component, since the **Icon** component is Mendix specific. Therefore, it should be part of the container component.

Fix your icon issue by introducing a default style for your container component:

1. In **src/GroupBox.tsx** add the following **defaultStyle** constant outside the container component class:

    ```tsx
    const defaultStyle: CustomStyle = {
        container: {},
        header: {},
        headerContent: {
            color: "#FFFFFF",
            fontSize: 16
        },
        content: {}
    };
    ```

2. Import the `flattenStyles` function:

    ```tsx
    import { Style, flattenStyles } from "./utils/common";
    ```

3. Add the following private attribute to the container component class:

    ```tsx
    private readonly styles = flattenStyles(defaultStyle, this.props.style);
    ```

    The **flattenStyles** function will take the styling of the **defaultStyle** constant as a starting point and will override this with properties supplied in the **style** prop.

4. Adjust the **renderIcon** method so that it returns an **Icon** component with a color and size defined:

    ```tsx
    private renderIcon = (toBeRenderedIcon: DynamicValue<NativeIcon> | undefined, glyph: string) => {
        const nativeIcon: NativeIcon =
            toBeRenderedIcon && toBeRenderedIcon.status === ValueStatus.Available
                ? toBeRenderedIcon.value
                : { type: "glyph", iconClass: glyph };

        return (
            <Icon color={this.styles.headerContent.color} icon={nativeIcon} size={this.styles.headerContent.fontSize} />
        );
    };
    ```

5. Refresh the app in the Make It Native app. You should see the white icons in the correct size:

    {{< figure src="/attachments/howto/extensibility/build-native-widget/7-better-button-inside.png" alt="better button" class="no-border" >}}

    {{< figure src="/attachments/howto/extensibility/build-native-widget/8-collapsed-w-euro-sign.png" alt="collapsed with euro" class="no-border" >}}

#### Adding a Collapsible Property

You are close to completing your group box widget. There are two more features essential for a Mendix developer: setting if the group box should be collapsible and setting the initial state of being collapsed or not.

First change the widget property configuration:

1. Navigate to **src/GroupBox.xml**.
2. Add a **collapsible** property underneath the **content** property:

    ```xml
    <?xml version="1.0" encoding="utf-8" ?>
    <widget id="com.mendix.widget.native.groupbox.GroupBox" pluginWidget="true" offlineCapable="true" supportedPlatform="Native"
        xmlns="http://www.mendix.com/widget/1.0/"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.mendix.com/widget/1.0/ ../node_modules/mendix/custom_widget.xsd">
        <name>Group box</name>
        <description />
        <icon />
        <properties>
            <propertyGroup caption="General">
                <propertyGroup caption="General">
                    <property key="content" type="widgets" required="false">
                        <caption>Content</caption>
                        <description>Widgets to place inside.</description>
                    </property>
                    <property key="collapsible" type="enumeration" defaultValue="no">
                        <caption>Collapsible</caption>
                        <description />
                        <enumerationValues>
                            <enumerationValue key="no">No</enumerationValue>
                            <enumerationValue key="yesStartExpanded">Yes (start expanded)</enumerationValue>
                            <enumerationValue key="yesStartCollapsed">Yes (start collapsed)</enumerationValue>
                        </enumerationValues>
                    </property>
                </propertyGroup>
                <propertyGroup caption="Header">
                    <property key="headerCaption" type="string" required="false">
                        <caption>Caption</caption>
                        <description />
                    </property>
                    <property key="expandIcon" type="icon" required="false">
                        <caption>Expand icon</caption>
                        <description>Icon used to indicate that the group box can be expanded.</description>
                    </property>
                    <property key="collapseIcon" type="icon" required="false">
                        <caption>Collapse icon</caption>
                        <description>Icon used to indicate that the group box can be collapsed.</description>
                    </property>
                </propertyGroup>
            </propertyGroup>
        </properties>
    </widget>
    ```

3. Add a property group **Common** below the **Header** property group and include the system properties **Name** and **Visibility** to improve the properties window even more:

    ```xml
    <?xml version="1.0" encoding="utf-8" ?>
    <widget id="com.mendix.widget.native.groupbox.GroupBox" pluginWidget="true" offlineCapable="true" supportedPlatform="Native"
    xmlns="http://www.mendix.com/widget/1.0/"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.mendix.com/widget/1.0/ ../node_modules/mendix/custom_widget.xsd">
    <name>Group box</name>
    <description />
    <icon />
    <properties>
        <propertyGroup caption="General">
            <propertyGroup caption="General">
                <property key="content" type="widgets" required="false">
                    <caption>Content</caption>
                    <description>Widgets to place inside.</description>
                </property>
                <property key="collapsible" type="enumeration" defaultValue="no">
                    <caption>Collapsible</caption>
                    <description />
                    <enumerationValues>
                        <enumerationValue key="no">No</enumerationValue>
                        <enumerationValue key="yesStartExpanded">Yes (start expanded)</enumerationValue>
                        <enumerationValue key="yesStartCollapsed">Yes (start collapsed)</enumerationValue>
                    </enumerationValues>
                </property>
            </propertyGroup>
            <propertyGroup caption="Header">
                <property key="headerCaption" type="string" required="false">
                    <caption>Caption</caption>
                    <description />
                </property>
                <property key="expandIcon" type="icon" required="false">
                    <caption>Expand icon</caption>
                    <description>Icon used to indicate that the group box can be expanded.</description>
                </property>
                <property key="collapseIcon" type="icon" required="false">
                    <caption>Collapse icon</caption>
                    <description>Icon used to indicate that the group box can be collapsed.</description>
                </property>
                </propertyGroup>
                <propertyGroup caption="Common">
                    <systemProperty key="Name" />
                    <systemProperty key="Visibility" />
                </propertyGroup>
            </propertyGroup>
        </properties>
    </widget>
    ```

4. Add this image as a widget icon by following the substeps below:

    1. Download this image:

        {{< figure src="/attachments/howto/extensibility/build-native-widget/group-box.png" alt="Group box icon" class="no-border" >}}

    2. Rename the file to *GroupBox.icon.png*
    3. Add the file to the *src* folder which contains the *xml* file

Now support this section's two features with your display component:

1. Navigate to the display component **src/components/GroupBox.tsx**.
2. Add a prop for collapsibility and a prop for the initial state of being collapsed or not to the **GroupBoxProps** interface:

    ```tsx
    export interface GroupBoxProps {
        startCollapsed?: boolean;
        collapsible: boolean;
        collapseIcon?: ReactNode;
        expandIcon?: ReactNode;
        headerCaption?: string;
        style: CustomStyle[];
    }
    ```

3. Change the initialization of the state so that the collapsed state starts with the value passed through the **startCollapsed** prop:

    ```tsx
    readonly state: GroupBoxState = {
        collapsed: !!this.props.startCollapsed
    };
    ```

If you do not want the group box to be collapsible at all, you must remove the **Touchable** component that wraps the header to prevent toggling the collapsed state. Moreover, remove the icons inside the header indicating the group box is collapsible. Enact these changes by following these steps:

1. Change the **renderHeader** method so that it does not render the **Touchable** component around the header **View** component:

    ```tsx
    private renderHeader = () => {
        const { collapsible, headerCaption } = this.props;

        const view = (
            <View style={this.styles.header}>
                <Text style={this.styles.headerContent}>{headerCaption}</Text>
                {this.renderIcon()}
            </View>
        );

        if (collapsible) {
            const Touchable: ComponentClass<any> = Platform.OS === "ios" ? TouchableOpacity : TouchableNativeFeedback;
            return <Touchable onPress={this.toggleCollapsed}>{view}</Touchable>;
        }

        return view;
    };
    ```

2. Prevent the header **View** component from being rendered at all when the group box is not collapsible and there is no header caption. Otherwise, the header would be visible as an empty block:

    ```tsx
    private renderHeader = () => {
        const { collapsible, headerCaption } = this.props;

        const view = (
            <View style={this.styles.header}>
                <Text style={this.styles.headerContent}>{headerCaption}</Text>
                {this.renderIcon()}
            </View>
        );

        if (collapsible) {
            const Touchable: ComponentClass<any> = Platform.OS === "ios" ? TouchableOpacity : TouchableNativeFeedback;
            return <Touchable onPress={this.toggleCollapsed}>{view}</Touchable>;
        } else if (headerCaption) {
            return view;
        }

        return null;
    };
    ```

3. Change the **renderIcon** method to prevent an icon from being rendered when the group box is not collapsible by adding a guard that returns null:

    ```tsx
    private renderIcon = (): ReactNode => {
        const { collapsible, collapseIcon, expandIcon } = this.props;

        if (!collapsible) {
            return null;
        }

        if (this.state.collapsed) {
            return expandIcon ? expandIcon : <Text style={this.styles.headerContent}>+</Text>;
        }

        return collapseIcon ? collapseIcon : <Text style={this.styles.headerContent}>-</Text>;
    };
    ```

4. Change the **render** method to so it can function when there is neither header nor content to be rendered by returning null:

    ```tsx
    render(): ReactNode {
        const renderedHeader = this.renderHeader();
        const renderedContent = this.renderContent();
        
        if (!renderedHeader && !renderedContent) {
            return null;
        }
        
        return (
            <View style={this.styles.container}>
                {renderedHeader}
                {renderedContent}
            </View>
        );
    }
    ```

The last thing to do is change the container component so that the properties get passed to the display component:

1. Navigate to the container component **src/GroupBox.tsx**.
2. Change the **render** method to supply the display component with the information from the collapsible prop that the container component receives:

    ```tsx
    render(): ReactNode {
        const { collapsible, collapseIcon, expandIcon, content, headerCaption, style } = this.props;

        const isCollapsible = collapsible !== "no";

        const props: WrappedGroupBoxProps = {
            collapsible: isCollapsible,
            headerCaption,
            collapseIcon: this.renderIcon(collapseIcon,             defaultCollapseIconGlyph),
            expandIcon: this.renderIcon(expandIcon, defaultExpandIconGlyph),
            style
        };

        if (collapsible) {
            props.startCollapsed = collapsible === "yesStartCollapsed";
        }

        return <WrappedGroupBox {...props}>{content}</WrappedGroupBox>;
    }
    ```

3. Navigate to Studio Pro.
4. Press <kbd>F4</kbd> or select **App** > **Synchronize App Directory** to bring your application in sync with the changes you made to the **src/GroupBox.xml** file.
5. Update the group box widget. Notice that now your widget has the icon you loaded into its *xml*:

    {{< figure src="/attachments/howto/extensibility/build-native-widget/groupbox-64-icon.png" alt="groupbox 64" class="no-border" >}}

6. Verify that the collapsible property options behave correctly by double-clicking your widget and testing each collapsible property option on your test device:

    {{< figure src="/attachments/howto/extensibility/build-native-widget/collapsible-properties.png" alt="collapsible properties" class="no-border" >}}

#### Adding a Custom Default Style

Although you have an extensively featured group box widget, you can still improve its styling. Currently, the widget receives basic styling which has been baked its code. You can make the Mendix Client override this default styling by defining a custom default style for the widget in Atlas UI. To define a custom default style, follow these steps:

1. Open **test/MxTestApp/theme/styles/native/app/custom.js**. This file will let you define a custom default style for your group box widget.
2. Add the following imports and constant to *custom.js* to define a default custom style:

    ```js
    import { brand } from "../core/variables";
    import shadeblendconvert from "../core/helpers/_functions/shadeblendconvert";

    export const com_mendix_widget_native_groupbox_GroupBox = {
        container: {
            borderColor: brand.primary
        },
        header: {
            backgroundColor: shadeblendconvert(0.4, brand.primary)
        },
        headerContent: {
            color: "#000000"
        }
    };
    ```

    Note that the name of the constant has to be almost the same as the widget ID. However, the widget ID's periods need to be underscores. Using this convention, the Mendix Client can apply the custom style defined in this constant to the group box widget.

3. Save the file and refresh the your app in the Make It Native app to see your new default style. On Android, note the ripple effect on the header that was previously not visible:

    {{< figure src="/attachments/howto/extensibility/build-native-widget/9-default-styling.png" alt="default styling" class="no-border" >}}

#### Adding a Design Property

It would be nice to provide the developer with some pre-defined styles that can be used for the group box. Create three style classes for the group box based on the brand colors success, warning, and danger:

1. In **test/MxTestApp/theme/styles/native/app/custom.js**, add the following constants to end of the file:

    ```js
    export const groupBoxSuccess = {
        container: {
            borderColor: brand.success
        },
        header: {
            backgroundColor: shadeblendconvert(0.4, brand.success)
        },
        headerContent: {
            color: "#000000"
        }
    };

    export const groupBoxWarning = {
        container: {
            borderColor: brand.warning
        },
        header: {
            backgroundColor: shadeblendconvert(0.4, brand.warning)
        },
        headerContent: {
            color: "#000000"
        }
    };

    export const groupBoxDanger = {
        container: {
            borderColor: brand.danger
        },
        header: {
            backgroundColor: shadeblendconvert(0.4, brand.danger)
        },
        headerContent: {
            color: "#000000"
        }
    };
    ```

2. In Studio Pro, double-click the group box widget.
3. Navigate to the appearance section.
4. In the **Class** field, fill in *groupBoxWarning* to apply the warning style to the group box.
5. Click **OK** and rerun the app locally to see the warning style:

    {{< figure src="/attachments/howto/extensibility/build-native-widget/10-warning-styling.png" alt="warning styling" class="no-border" >}}

Defining all the different styles inside **test/MxTestApp/theme/styles/native/app/custom.js** can make your code less readable. To prevent this, extract the styles specifically for the group box widget and store them in a separate file:

1. Create a new file **test/MxTestApp/theme/styles/native/app/group-box.js**.
2. Move all the code from **test/MxTestApp/theme/styles/native/app/custom.js** into the new file.
3. Add the following import to **test/MxTestApp/theme/styles/native/app/custom.js**:

    ```js
    export * from "./group-box";
    ```

4. Refresh your app in the Make It Native app to verify the custom warning style is still being applied to the group box widget.

    {{< figure src="/attachments/howto/extensibility/build-native-widget/10-warning-styling.png" alt="warning styling" class="no-border" >}}

The developer needs to have the class names memorized to apply a certain group box style. By using a design property this will no longer be necessary:

1. Open **test/MxTestApp/theme/settings-native.json**.
2. At the bottom after the "com.mendix.widget.native.slider.Slider" property, add the following property:

    ```json
    "com.mendix.widget.native.groupbox.GroupBox": [
        {
            "name": "Group box style",
            "type": "Dropdown",
            "description": "Style of the group box.",
            "options": [
                {
                    "name": "Success",
                    "class": "groupBoxSuccess"
                },
                {
                    "name": "Warning",
                    "class": "groupBoxWarning"
                },
                {
                    "name": "Danger",
                    "class": "groupBoxDanger"
                }
            ]
        }
    ]
    ```

    Note that the property name must be the same as the widget ID. This will ensure this design property can be configured for your group box widget in Studio Pro.

3. In Studio Pro, press <kbd>F4</kbd> or select **App** > **Synchronize App Directory** to bring your application in sync with the changes you made to the previous two files.
4. Double-click the group box widget and navigate to the **Appearance** tab.
5. Verify that there is a design property called **Group box style**.
6. Select the **Success** style and click **OK**:

    {{< figure src="/attachments/howto/extensibility/build-native-widget/success-design-property.png" alt="success style" class="no-border" >}}

7. Rerun the app locally and verify the new success style in the Make It Native App:

    {{< figure src="/attachments/howto/extensibility/build-native-widget/11-success.png" alt="mobile success" class="no-border" >}}

## Read More

* [Pluggable Widgets API Documentation](/apidocs-mxsdk/apidocs/pluggable-widgets/)
* [Designing Mobile User Interfaces](/refguide/mobile/designing-mobile-user-interfaces/)
* [Native Mobile Styling Reference Guide](/refguide/native-styling-refguide/)
* [How to Build Pluggable Widgets](/howto/extensibility/pluggable-widgets/)
