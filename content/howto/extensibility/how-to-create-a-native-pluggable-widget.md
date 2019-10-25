---
title: "Create a Pluggable Native Widget"
#category: "Extensibility"
#menu_order: 10
#description: "Describes building a native widget, configuring it, and styling it in a Mendix app."
#tags: ["native","widget","pluggable","react native","extensibility",]
---

## 1 Introduction

Pluggable widgets enable developers to introduce custom-built widgets in their Mendix applications for versions of Mendix Studio Pro 8.3 and above. Not just for web, but also for native mobile. In this how-to you will learn to create a group box pluggable widget for native mobile applications.

A group box can be used to visually group related widgets together. Group boxes are displayed as a frame around nested widgets with an optional header. Group boxes can be configured to collapse and expand dynamically:

![final widget](attachments/how-to-create-a-native-pluggable-widget/group-box-tease.png)

**This how-to will teach you how to do the following:**

* Generate a widget structure
* Put a pluggable widget into a Mendix app
* Configure your widget's properties and styling to suit multiple platforms

**Are you in a hurry?**

Clone this [code sample](https://github.com/mendix/native-group-box-pluggable-widget-sample) from GitHub with all group box features from this how-to already implemented.

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install Mendix Studio Pro 8.3
* Install the Mendix Make it Native app on a mobile device or an emulator.
* Install Long Term Support (LTS) v10.16.3 or any higher version of [Node.js](https://nodejs.org)
* Install latest [Yeoman](https://yeoman.io/) with the following command:

```shell
npm install -g yo
```

* Install Mendix' Pluggable Widget Generator v8.2.0 for Yeoman with the following command:

```shell
npm install -g @mendix/generator-widget@8.2.0
```

* Install an integrated development environment (IDE) of your choice (Mendix recommends [Microsoft Visual Studio Code](https://code.visualstudio.com/))
* Have a basic understanding of:
	* Command prompt or the Unix command line
	* [TypeScript](https://www.typescriptlang.org/)
	* [React](https://reactjs.org)

## 3 Building a Native Group Box Widget

To build a group box widget for native mobile, you will follow these steps:

1. Scaffold a pluggable widget project.
2. Creat a Mendix test project.
3. Build the group box widget.

The following subsections will elaborate on each of these steps.

### 3.1 Scaffolding a Pluggable Widget Project

The Pluggable Widget Generator is the quickest way to start developing a pluggable widget. When you run this generator with Yeoman, Yeoman will scaffold your project folder with a folder structure and certain files recommended by Mendix.

To scaffold your project folder for the group box widget, follow these steps:

1. Open up a terminal.
2. Change the current working directory to the folder where you want to store your widget project.
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
  * Mendix Project path: {*./test/MxTestProject/*}
  * Programming language: {**TypeScript**}
  * Widget type: {**For native mobile apps**}
  * Widget template: {**Empty widget (recommended for more experienced developers)**}
  * Unit tests: {**No**}

  ![Pluggable Widget Generator input](attachments/how-to-create-a-native-pluggable-widget/pluggable-widget-generator-input.png)

5. Your widget will build. If your project has been scaffolded correctly. you will see the following message:

`> Widget successfully built!! Please open Mendix Studio Pro and start playing with your new widget.`

### 3.2 Creating a Mendix Test Project

In order to test your group box widget, you will a Mendix application that uses this widget in various ways. Create a Mendix project for this application by following these steps:

1. Open Studio Pro.
2. Create a new project by clicking **File** > **New Project**.
3. Select the **Blank** app on the last page of **Starter Apps** (do not select **Blank App** on the first page).
4. Click the **Use this starting point** button
5. Fill in the following details in the **App Settings** dialog box:
  * App name: _GroupBoxTestProject_
  * Enable online services: _No_
6. Click **Create app**.

Optionally, you can remove all unused custom widgets to optimize the debugging process. To do so, follow these steps:

1. Click **Project** > **Show Project Directory in Explorer**.
2. Open the **widgets** folder.
3. Delete all files in this folder.

Follow these steps to add the Mendix project as a test project to your widget project, so that you can start modeling with the new widget:

1. Close the project in Mendix Studio Pro by clicking **File** > **Close Project**.
2. Move the contents of the Mendix project folder into **test/MxTestProject**, which is located inside your group box widget project folder.

Create a test case by following these steps:

1. Open the Mendix test project in **test/MxTestProject** by selecting **File** > **Open Project**.
2. In the **Open App** dialog box, select **Locally on disk**.
3. Open the *GroupBoxTestProject.mpr* file inside your group box widget project folder.
4. Open **Home_Native** page.
5.  Copy the **Home** container and paste it underneath that container:

	![home container](attachments/how-to-create-a-native-pluggable-widget/home-container.png)

6. Delete the contents of your new container.
7. Search in Toolbox for the **Group Box** widget.
8. Drag and drop the widget into the your empty container:

	![initial widget](attachments/how-to-create-a-native-pluggable-widget/initial-widget.png)

9. Double-click the widget, fill in your name as the **Default value**, and click **OK**.

You have set up your test project. To verify that your Mendix test project is set up correctly, follow these steps:

1. In Studio Pro, run the test project locally.
2. Use the Make It Native app to open your new app.
3. Verify that your app's home page contains the yellow text **Hello {your name}**.

	![hello user](attachments/how-to-create-a-native-pluggable-widget/hello-user.png)

### 3.3 Building the Group Box Widget

Now that your widget sample code is running, it is time to transform your sample widget into an actual group box widget. To do so, you will follow these steps:

1. Create a static UI.
2. Add widget properties.
3. Make the widget collapsilble.
4. Add an expand and collapse icon property.
5. Add a collapsible property.
6. Add a custom default style.
7. Add a design property.

The following paragraphs will elaborate on each of these steps. Open up your group box widget project folder in your IDE of choice. From now on, all file references will be relative to this project folder.

#### 3.3.1 Creating a Static UI

Define the structure and default style of the group box widget with these steps:

1. Open **src/components/HelloWorldSample.tsx**.

	This file contains the display component of your widget. Display components describe the widget's UI in terms of React Native components and contain the widget's behavioral logic. Display components do not interact with Mendix-specific APIs and therefore are usable in any React Native application.

2. Replace the **render** method with the following code snippet [todo: check render, this snippet formatting, and all numbered list snippet formatting]:

```tsx
	render(): ReactNode {
		return (
			<View style={this.styles.container}>
				<View style={this.styles.header}>
					<Text style={this.styles.headerContent}>Header caption</Text>
					<Text style={this.styles.headerContent}>-</Text>
				</View>
			<View style={this.styles.content}>Content</View>
		</View>
	);
	}
```

	The **render** method uses two built-in components from React Native: **\<View>** and **\<Text>**. **\<View>** is a component like a \<div> or \<span> from HTML, whereas the **\<Text>** component is used to display some text. To learn more about the built-in components, consult the [React Native website](https://facebook.github.io/react-native/). [todo: check style on components. In pluggable 1 components can be files like *TextBox.tsx*??]

3. Open up a terminal.
4. Change the current working directory to your project folder.
5. Execute the following command to bundle your widget and update the widget bundle in your Mendix test project:

```shell
	npm run dev
```

	The executed script will keep watching your source files and rebundle the widget everytime you save one of these files.

6. Open your Mendix test project in **test/MxTestProject** in Mendix Studio Pro.
7. Run the project locally.
8. Verify with the Make It Native app that your app looks like the image below:

	[INSERT header caption/content IMAGE]

The UI of our widget does not look like a group box yet. Apply a default style to make it look like one with the following steps:

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
       borderColor: "#000",
       borderRadius: 4,
       borderWidth: 1,
       overflow: "hidden"
     },
     header: {
       backgroundColor: "#000",
       display: "flex",
       flexDirection: "row",
       justifyContent: "space-between",
       paddingVertical: 10,
       paddingHorizontal: 15
     },
     headerContent: {
       color: "#FFF",
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

	The objects assigned to the properties of **defaultStyle** are passed to the style props of the React Native components that you use in the **render** method. The property names inside the objects are very familiar to the CSS style properties [todo: what?]. To learn more about the supported properties and what effect they have, visit the following links:
	
	* [\<View> style props](https://facebook.github.io/react-native/docs/view-style-props)
	* [\<Text> style props](https://facebook.github.io/react-native/docs/text-style-props)

3.  Save all files to rebundle and update the Mendix test project.
4. Refresh the Mendix app inside the Make It Native app.
5. Verify that the group box widget looks like the image below:

	[INSERT black and white group box IMAGE]

When you build a widget for native mobile, keep in mind that the widget can be used on both iOS and Android. Both plaforms have their own design language, and you should adhere as much as possible to both languages. To do this, you will sometimes need to define platform-specific styling or use platform-specific React Native components.

For the group box widget it would be nice to have square corners on Android devices. Apply this style behavior with the following steps:

1. In **src/components/HelloWorldSample.tsx** change the value of `defaultStyle.container.borderRadius` from `4` to `Platform.OS === "ios" ? 4 : 0` so that the initialization of the **defaultStyle** constant look as follows:

   ```tsx
   const defaultStyle: CustomStyle = {
     container: {
       borderColor: "#000",
       borderRadius: Platform.OS === "ios" ? 4 : 0,
       borderWidth: 1,
       overflow: "hidden"
     },
     header: {
       backgroundColor: "#000",
       display: "flex",
       flexDirection: "row",
       justifyContent: "space-between",
       paddingVertical: 10,
       paddingHorizontal: 15
     },
     headerContent: {
       color: "#FFF",
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

2. Adjust the following import statement in order to use the **Platform** object from this:

   ```tsx
   import { Text, View } from "react-native";
   ```

   to this:

   ```tsx
   import { Text, View, Platform } from "react-native";
   ```

3. Save all files to rebundle and update the Mendix test project.
4. Refresh the Mendix app inside the Make It Native app.
5. Verify that the group box widget looks like the image below [todo: insert android pic becayse the iOS ones will look identical (both border 4)?]:

	[INSERT second black and white image]

As you might have noticed, the display component is still called **HelloWorldSample**. Next you will introduce the term "GroupBox" in your code:

1. In **src/components/HelloWorldSample.tsx** change the classname from `HelloWorldSample` to *GroupBox*.
2. Change the file name to *GroupBox.tsx*.
3. Rename the **HelloWorldSampleProps** interface to *GroupBoxProps*.
4. Change the **GroupBox** class declaration to the following:

   ```tsx
   export class GroupBox extends Component<GroupBoxProps>
   ```

The changes you made in steps one and two cause errors in your container component defined in *src/GroupBox.tsx*. The container component are used by the Mendix Client, receive property data from this client, and forwards this data to the display component.

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

We are not using the **label** property of the **defaultStyle** constant anymore in the **render** method of the display component. Remove it by doing the following:

1. Open **src/components/GroupBox.tsx**.
2. Remove the **label** property from the **defaultStyle** constant:

   ```tsx
   const defaultStyle: CustomStyle = {
     container: {
       borderColor: "#000",
       borderRadius: Platform.OS === "ios" ? 4 : 0,
       borderWidth: 1,
       overflow: "hidden"
     },
     header: {
       backgroundColor: "#000",
       display: "flex",
       flexDirection: "row",
       justifyContent: "space-between",
       paddingVertical: 10,
       paddingHorizontal: 15
     },
     headerContent: {
       color: "#FFF",
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

5. Save all files to rebundle and update the Mendix test project.
6. Refresh the Mendix app inside the Make It Native app.
7. Verify that the group box widget still looks the same after the refactoring:

	[INSERT third identical b/w IMAGE?]

#### 3.3.2 Adding Widget Properties

#### 3.3.3 Header Caption Property

Next you will allow the Mendix developer to alter the header caption of your widget. You can reuse the code and configuration of the sample text property you used earlier to alter the **Hello World** output of the sample widget. Open **src/GroupBox.xml** and change the sample text property to this:

```xml
<property key="headerCaption" type="string" required="false">
  <caption>Header caption</caption>
  <description/>
</property>
```

As soon as you save the file, the script running in the background will rebundle the widget and generate new typings in **typings/GroupBoxProps.d.ts**. These typings define the props the container component will receive. Some errors will surface in the container component because you renamed the property. Open **src/GroupBox.tsx** and change the following line in your render method:

`sampleText={this.props.sampleText ? this.props.sampleText : "World"}`

to:

`headerCaption={this.props.headerCaption}`

Your display component does not receive a headerCaption prop yet, so open **src/components/GroupBox.tsx** and replace:

```tsx
export interface GroupBoxProps {
  sampleText?: string;
  style: CustomStyle[];
}
```

with:

```tsx
export interface GroupBoxProps {
  headerCaption?: string;
  style: CustomStyle[];
}
```

You still need to use the headerCaption prop in the render method to display the actual text in your header. Adjust the render method like this:

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

1. In Studio Pro press <kbd>F4</kbd> or select **Project > Synchronize Project Directory** to sync your app with the changes you made to **src/GroupBox.xml**. 
2. An error will tell you to update your widget. Right-click on the Group Box widget and select **Update widget**. 
3. Double-click the same widget and you will now see your new property. 
4. Fill in some caption text, click **OK**, and rerun your app locally to see your caption text in the app:

INSERT sample-caption-pro.png

INSERT mobile shot of caption text

#### 3.3.4 Content Property

You will also want Mendix developers to be able to fill content in the group box like building blocks, snippets, and other widgets. To enable this, do the following:

1. In **src/GroupBox.xml**, add a content property element above the header caption property.
2. Change the name element from **Group Box** to *Group box*. 
3. Remove the "needsEntityContext" attribute from the widget element, since this is no longer necessary. 
3. Your file should now look like this:

   ```xml
   <?xml version="1.0" encoding="utf-8" ?>
   <widget id="mendix.groupbox.GroupBox" pluginWidget="true" offlineCapable="true" supportedPlatform="Native"
       xmlns="http://www.mendix.com/widget/1.0/"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.mendix.com/widget/1.0/ ../node_modules/mendix/custom_widget.xsd">
       <name>Group box</name>
       <description>Widget to group building blocks, snippets or other widgets</description>
       <icon/>
       <properties>
           <propertyGroup caption="General">
               <property key="content" type="widgets" required="false">
                   <caption>Content</caption>
                   <description>Widgets to place inside</description>
               </property>
               <property key="headerCaption" type="string" required="false">
                   <caption>Header caption</caption>
                   <description/>
               </property>
           </propertyGroup>
       </properties>
   </widget>
   ```

3. Save the file.
4. Open **src/GroupBox.tsx**.
5. Change the **render** method as follows to pass the content (React Native components) to the display component:

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

6. Save the file.
7. Open **src/components/GroupBox.tsx**.
8. Adjust the **render** method to render the content:

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

[todo: because we changed the big B into a small b, the old widget in my project was Bbroken. If we want the little b thing for some reason, I need to replace step 3 below probably with "delete your old widget, then drag and drop a Group box" widget.]

1. Go back to Studio Pro.
2. Press <kbd>F4</kbd> or select **Project > Synchronize Project Directory** to bring your application in sync with the changes to the **src/GroupBox.xml** file.
3. Update the group box widget again. A content area will appear in the page editor:

INSERT content-area.png

4. Drag and drop a **Call nanoflow button** widget into the content area.
5. Click **New** and a new nanoflow *ACT_ShowMessage*.
6. Double-click the button and change the **Caption** to *Show message*.
7. Navigate to **ACT_ShowMessage**.
8. Drag and drop a **Show message** activity onto your nanoflow.
9. Double-click the activity and add the text *Hello World!* to the **Template**, then click **OK**.
10. Rerun the app locally.
11. With the Make it Native app, verify that your button is inside the group box and is triggering a message popup saying **Hello World!**.

Insert mobile hello world pic

It would be nice to hide the content area of the group box completely when there is no content added to the group box in Mendix Studio Pro:

1. Import **Children** in you display component:

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

3. Make a call to **renderContent** in the **render** method:

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

#### 3.3.3 Making the Widget Collapsilble

Now that your widget can contain content, the next challange is to hide this content by making the group box collapsible.

To start, make the complete header clickable:

1. Navigate to the display component (**src/components/GroupBox.tsx**).
2. Import the React Native components **TouchableOpacity** and **TouchableNativeFeedback**:

   ```tsx
   import {
     Text,
     View,
     Platform,
     TouchableOpacity,
     TouchableNativeFeedback
   } from "react-native";
   ```

3. Create the following lambda method that is resonposible for rendering the clickable header (TODO: explain why two different components and Touchable component = dynamic component):

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

4. Change the **render** method to make use of **renderHeader**:

   ```tsx
   render(): ReactNode {
       return (
           <View style={this.styles.container}>
               {this.renderHeader()}
               <View style={this.styles.content}>{this.props.children}</View>
           </View>
       );
   }
   ```

5. Make sure all files have been saved.
6. Reload your test app in the Make it Native app to view the change.
7. Verify the header is clickable. Note that on Android, the ripple effect is not visible on a black background, so at the moment you cannot verify yet if it's clickable.

Now make it possible to expand or collapse the group box:

1. Navigate to the display component (**src/components/GroupBox.tsx**).
2. Create an **GroupBoxState** interface below the **GroupBoxProps** one:

   ```tsx
   export interface GroupBoxState {
     collapsed: boolean;
   }
   ```

3. Change the class definition to give our component a state to keep track on whether it's collapsed or not:

   ```tsx
   export class GroupBox extends Component<GroupBoxProps, GroupBoxState>
   ```

4. Set collapsed to false for the initial state by this inside the class:

   ```tsx
   readonly state: GroupBoxState = {
       collapsed: false
   };
   ```

5. To change the collapsed state, add this lambda method to the class:

   ```tsx
   private toggleCollapsed = (): void => {
       const collapsed = !this.state.collapsed;
       this.setState({ collapsed });
   };
   ```

6. Let the **Touchable** component execute the **toggleCollapsed** method when it's tapped. Also, switch between a plus and minus character in the header depending on the state [todo keybindings?]. The **renderHeader** method should look as follows:

   ```tsx
   private renderHeader = () => {
       const view = (
           <View style={this.styles.header}>
               <Text style={this.styles.headerContent}>{this.props.headerCaption}</Text>
               <Text style={this.styles.headerContent}>-</Text>
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

8. Verify in the Make it Native app that you can expand and collapse the group box:

	TODO insert pic/gif here

#### 3.3.4 Adding an Expand and Collapse Icon Property

The next step is to allow a Mendix developer to use a custom icon in the clickable header.

First, define the properties and adjust the display component so that it can render icons:

1. Navigate to **src/GroupBox.xml**.
2. Add two icon properties to set an icon for indicating the actions expand and collapse:

   ```xml
   <?xml version="1.0" encoding="utf-8" ?>
   <widget id="mendix.groupbox.GroupBox" pluginWidget="true" offlineCapable="true" supportedPlatform="Native"
       xmlns="http://www.mendix.com/widget/1.0/"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.mendix.com/widget/1.0/ ../node_modules/mendix/custom_widget.xsd">
       <name>Group box</name>
       <description>Widget to group building blocks, snippets or other widgets</description>
       <icon/>
       <properties>
           <propertyGroup caption="General">
               <property key="content" type="widgets" required="false">
                   <caption>Content</caption>
                   <description>Widgets to place inside</description>
               </property>
               <property key="headerCaption" type="string" required="false">
                   <caption>Header caption</caption>
                   <description/>
               </property>
               <property key="expandIcon" type="icon" required="false">
                   <caption>Expand icon</caption>
                   <description>Icon used to indicate that the group box can be expanded</description>
               </property>
               <property key="collapseIcon" type="icon" required="false">
                   <caption>Collapse icon</caption>
                   <description>Icon used to indicate that the group box can be collapsed</description>
               </property>
           </propertyGroup>
       </properties>
   </widget>
   ```

3. Add property groups around the properties to create a more readable properties window in Studio Pro:

   ```xml
   <?xml version="1.0" encoding="utf-8" ?>
   <widget id="mendix.groupbox.GroupBox" pluginWidget="true" offlineCapable="true" supportedPlatform="Native"
       xmlns="http://www.mendix.com/widget/1.0/"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.mendix.com/widget/1.0/ ../node_modules/mendix/custom_widget.xsd">
       <name>Group box</name>
       <description>Widget to group building blocks, snippets or other widgets</description>
       <icon/>
       <properties>
           <propertyGroup caption="General">
               <propertyGroup caption="General">
                   <property key="content" type="widgets" required="false">
                       <caption>Content</caption>
                       <description>Widgets to place inside</description>
                   </property>
               </propertyGroup>
               <propertyGroup caption="Header">
                   <property key="headerCaption" type="string" required="false">
                       <caption>Caption</caption>
                       <description/>
                   </property>
                   <property key="expandIcon" type="icon" required="false">
                       <caption>Expand icon</caption>
                       <description>Icon used to indicate that the group box can be expanded</description>
                   </property>
                   <property key="collapseIcon" type="icon" required="false">
                       <caption>Collapse icon</caption>
                       <description>Icon used to indicate that the group box can be collapsed</description>
                   </property>
               </propertyGroup>
           </propertyGroup>
       </properties>
   </widget>
   ```

4. Save the *.xml* file.
5. Navigate to the display component.
6. Add two new props for an expand and collapse icon by changing the **GroupBoxProps** interface:

   ```tsx
   export interface GroupBoxProps {
     collapseIcon?: ReactNode;
     expandIcon?: ReactNode;
     headerCaption?: string;
     style: CustomStyle[];
   }
   ```

7. Create a lambda method **renderIcon** that uses the **expandIcon** and **collapseIcon** props:

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
               <Text style={this.styles.headerContent}>{this.props.headerCaption}</Text>
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

3. Do the following imports [todo: do?]:

   ```tsx
   import { DynamicValue, NativeIcon, ValueStatus } from "mendix";
   import { Icon } from "mendix/components/native/Icon";
   import {
     GroupBox as WrappedGroupBox,
     GroupBoxProps as WrappedGroupBoxProps
   } from "./components/GroupBox";
   ```

4. Add a lambda method **renderIcon** to the **GroupBox** class:

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
           collapseIcon: this.renderIcon(collapseIcon, defaultCollapseIconGlyph),
           expandIcon: this.renderIcon(expandIcon, defaultExpandIconGlyph),
           style
       };

       return <WrappedGroupBox {...props}>{content}</WrappedGroupBox>;
   }
   ```

6. Navigate to Studio Pro.
7. Press <kbd>F4</kbd> or select **Project > Synchronize Project Directory** to bring your application in sync with the changes you made to the **src/GroupBox.xml** file.
8. Update the group box widget. [todo: come to ruling on group box widget casing]
9. Gor the expand icon property, select a € sign [todo: how? bold sign?].
10. Run the app locally.
11. Inspect your changes. Notice that you cannot see any icon in group box's header. This is because your background color and text color are both black. Remember that in the **defaultStyle** constant of your display component you defined that text of React Native components that get the **headerContent** style applied to it should be white. [todo: Isa, can we delete from However to the rest of the paragraph? I wanna tighten this up as much as possible.] However, you are not explicitly applying this style to our **Icon** component that you pass from our container component to the display component. You could argue to move the creation of the **Icon** component inside your display component, but this will go against the strict seperation of concerns related to the container and display component, since the **Icon** component is Mendix specific. Therefore, it should be part of the container component.

Fix your icon issue by introducing a default style for your container component:

1. Add the following **defaultStyle** constant outside the container component class:

   ```tsx
   const defaultStyle: CustomStyle = {
     container: {},
     header: {},
     headerContent: {
       color: "#FFF",
       fontSize: 16
     },
     content: {}
   };
   ```

2. Import the flattenStyles function:

   ```tsx
   import { Style, flattenStyles } from "./utils/common";
   ```

3. Add the following private attribute to the container component:

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

5. Check the app in the Make it Native app. You should see the white icons in the correct size:

INSERT PIC HERE

#### 3.3.5 Adding a Collapsible Property

You are close to completing your group box widget. There are two more features essential for a Mendix developer: setting if the group box should be collapsible and setting the initial state of being collapsed or not.

First change the widget property configuration:

1. Navigate to **src/GroupBox.xml**.
2. Add a **collapsible** property underneath the **content** property:

   ```xml
   <?xml version="1.0" encoding="utf-8" ?>
   <widget id="mendix.groupbox.GroupBox" pluginWidget="true" offlineCapable="true" supportedPlatform="Native"
       xmlns="http://www.mendix.com/widget/1.0/"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.mendix.com/widget/1.0/ ../node_modules/mendix/custom_widget.xsd">
       <name>Group box</name>
       <description>Widget to group building blocks, snippets or other widgets</description>
       <icon/>
       <properties>
           <propertyGroup caption="General">
               <propertyGroup caption="General">
                   <property key="content" type="widgets" required="false">
                       <caption>Content</caption>
                       <description>Widgets to place inside</description>
                   </property>
                   <property key="collapsible" type="enumeration" defaultValue="no">
                       <caption>Collapsible</caption>
                       <description></description>
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
                       <description/>
                   </property>
                   <property key="expandIcon" type="icon" required="false">
                       <caption>Expand icon</caption>
                       <description>Icon used to indicate that the group box can be expanded</description>
                   </property>
                   <property key="collapseIcon" type="icon" required="false">
                       <caption>Collapse icon</caption>
                       <description>Icon used to indicate that the group box can be collapsed</description>
                   </property>
               </propertyGroup>
           </propertyGroup>
       </properties>
   </widget>
   ```

3. Add a property group **Common** below the **Header** property group and include the system properties **Name** and **Visibility** to improve the properties window even more:

   ```xml
   <?xml version="1.0" encoding="utf-8" ?>
   <widget id="mendix.groupbox.GroupBox" pluginWidget="true" offlineCapable="true" supportedPlatform="Native"
       xmlns="http://www.mendix.com/widget/1.0/"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.mendix.com/widget/1.0/ ../node_modules/mendix/custom_widget.xsd">
       <name>Group box</name>
       <description>Widget to group building blocks, snippets or other widgets</description>
       <icon/>
       <properties>
           <propertyGroup caption="General">
               <propertyGroup caption="General">
                   <property key="content" type="widgets" required="false">
                       <caption>Content</caption>
                       <description>Widgets to place inside</description>
                   </property>
                   <property key="collapsible" type="enumeration" defaultValue="no">
                       <caption>Collapsible</caption>
                       <description></description>
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
                       <description/>
                   </property>
                   <property key="expandIcon" type="icon" required="false">
                       <caption>Expand icon</caption>
                       <description>Icon used to indicate that the group box can be expanded</description>
                   </property>
                   <property key="collapseIcon" type="icon" required="false">
                       <caption>Collapse icon</caption>
                       <description>Icon used to indicate that the group box can be collapsed</description>
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

   ![Group box icon](attachments/how-to-create-a-native-pluggable-widget/GroupBox.png)

   a. Generate a Base64 representation of the *.png* file:

      **— For Windows**:

        i. Open command prompt.
        ii. Change the current working directory to the folder where the *GroupBox.png* is stored.
        iii. Execute the following command to generate the Base64 representation:

           ```cmd
           certutil -encode GroupBox.png data.b64
           ```

           The representation can be found in the file "data.b64" that's created in the same folder.

      **— For Unix**:

        i. Open a terminal.
        ii. Change the current working directory to the folder where the "GroupBox.png" is stored.
        iii. Execute the following command to generate the Base64 representation:

           ```shell
           base64 -i GroupBox.png -o data.b64
           ```

           The representation can be found in the file "data.b64" that's created in the same folder.

   2. Add the Base64 representation to the icon element in the *.xml* file:

      ```xml
      <?xml version="1.0" encoding="utf-8" ?>
      <widget id="mendix.groupbox.GroupBox" pluginWidget="true" offlineCapable="true" supportedPlatform="Native"
      xmlns="http://www.mendix.com/widget/1.0/"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.mendix.com/widget/1.0/ ../node_modules/mendix/custom_widget.xsd">
      <name>Group box</name>
      <description>Widget to group building blocks, snippets or other widgets</description>
      <icon>iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAAHdbkFIAAAAAXNSR0IArs4c6QAA ArVJREFUeAHtWk12gjAQBl4X9Q72PsVFnxufN+ihegOfG18XtfeRO9gVNBMZDPlx gIAQGDcxmczMN99MQohGkc9nt9sVCWVgChNiAAloKbBuOaU9hTBJDPGjKI7HYyyJ 2u/3aZ7nP24y7BIw8AIiUIZO+v2XFnlhGPrdrmqOYC4i80oVGJLY0JodqH0UdUgW 7er30fEN3LGM9c0njZlI45sEjilpEwXqyEpExffT1Vj7AmJ23q6kp1Lp7lko1gxg yaJBva0qTxFUBhCSImv+tYsy6oxfiYwgirw56KeQmpfcBGfetnUBDEv7WRhxYVc5 QMcowH7frR6oAQAdpqfrRWxua+xTrb6VCUcXoVPpuwJzAsBNlHLskguHt+3eNaEc NwDoFBH63mIDgIsqb0+lAT1A753EFxgDYAaYAXUfyMSSWuvr1HeZsf7kGVAPJLXH 55DIkyTZHA6HM/hQl2H17B7SOdhWrwXUVSD9Lu5paDCA9Lc5ksVJvDl/vMqcor56 JFNzjnJs1RrAMdm2OQ9GefFVU751qpoSObfJ5SwnA/oh0+Lg4VDTWnIy8NB6j0KD gWc/C6bHQNPcdc2CzvDoDDAAZoAZYAaYAWaAGVjsiSjreqBhPWZgbgxU9yMYmPpO i2Mzams/HUNctgdB9U49o8AxFCM24zmAM7Ed+j0R/QzV6u+huh9bBehzZt0nK0CP vs29ma5L9dW/e7jmEnuUscZddnC8fQUk8ScARQN9tdKmsE3ZE5eNMMfmPytllIma vHUFlDehjX4PrnnqqVPervfmv30F9BTIVMyQFUDtolMJpCsOrgCKOT4HUAwFLl/8 EmACAq9gb/hcAd4UBm6AKyDwBHrD5wrwpjBwA1wBgSfQGz5XgDeFgRtYfAXwjZBe wfAXTzFmu3XVp4bWh1tjiI0/zIDCwD+0qr6OmQMSvQAAAABJRU5ErkJggg==</icon>
      <properties>
          <propertyGroup caption="General">
              <propertyGroup caption="General">
                  <property key="content" type="widgets" required="false">
                      <caption>Content</caption>
                      <description>Widgets to place inside</description>
                  </property>
                  <property key="collapsible" type="enumeration" defaultValue="no">
                      <caption>Collapsible</caption>
                      <description></description>
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
                      <description/>
                  </property>
                  <property key="expandIcon" type="icon" required="false">
                      <caption>Expand icon</caption>
                      <description>Icon used to indicate that the group box can be expanded</description>
                  </property>
                  <property key="collapseIcon" type="icon" required="false">
                      <caption>Collapse icon</caption>
                      <description>Icon used to indicate that the group box can be collapsed</description>
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

5. Save the *.xml* file.

Now support this section's two features with our display component:

1. Navigate to the display component.
2. Add a props for collapsibility and a prop for the initial state of being collapsed or not to the **GroupBoxProps** interface:

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

3. Change the initilization of the state so that the collapsed state starts with the value passed through the **startCollapsed** prop:

   ```tsx
   readonly state: GroupBoxState = {
        collapsed: !!this.props.startCollapsed
    };
   ```

	If the group box should not be collapsible at all, you would have to remove the **Touchble** component that wraps the header to prevent toggling the collapsed state. Moreover, you should remove the icons inside the header indicating the group box is collapsible. Let's make those changes [todo: work with Isa to remove the Would and Should language. Docs stay clear by just telling people what to do (even when they explain reasoning).]:

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

1. Navigate to the container component.

2. Change the **render** method to supply the display component with the information from the collapsible prop that the container component receives:

   ```tsx
       render(): ReactNode {
           const { collapsible, collapseIcon, expandIcon, content, headerCaption, style } = this.props;

           const isCollapsible = collapsible !== "no";

           const props: WrappedGroupBoxProps = {
               collapsible: isCollapsible,
               headerCaption,
               collapseIcon: this.renderIcon(collapseIcon, defaultCollapseIconGlyph),
               expandIcon: this.renderIcon(expandIcon, defaultExpandIconGlyph),
               style
           };

           if (collapsible) {
               props.startCollapsed = collapsible === "yesStartCollapsed";
           }

           return <WrappedGroupBox {...props}>{content}</WrappedGroupBox>;
       }
   ```

3. Go to Mendix Studio Pro.
4. Press <kbd>F4</kbd> or select **Project > Synchronize Project Directory** from the topbar menu to bring your application in sync with the changes you made to the **src/GroupBox.xml** file.
5. Update the group box widget.
6. Verify that the collapsible property options behave correctly. [todo: how?]

#### 3.3.6 Adding a Custom Default Style

Although you have an extensively featured group box widget, you can still improve its styling. Currently, the widget recieves basic styling which has been baked its code. You can make the Mendix Client override this default styling by defining a custom default style for the widget in Atlas UI. To define a custom default style, follow these steps:

1. Open **test/MxTestProject/theme/styles/native/app/custom.js**. This file will let you define a custom default style for your group box widget.

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
       color: "#000"
     }
   };
   ```

   Note that the name of the constant has to be almost the same as the widget id. However, the widget id's periods need to be underscores. Using this convention the Mendix Client can apply the custom style defined in this constant to the group box widget.

3. Save the file and refresh the your app in the Make it Native app to see your new default style. Also note the ripple effect on the header in Android that was previously not visible. [todo: should we clarify that testers should test on both platforms after every step?]

### 3.3.7 Adding a Design Property

It would be nice to provide the developer with some pre-definded styles that can be used for the group box. Create three style classes for the group box based on the brand colors success, warning, and danger:

1. Open **test/MxTestProject/theme/styles/native/app/custom.js** and append the following constants at the end of the file:

   ```js
   export const groupBoxSuccess = {
     container: {
       borderColor: brand.success
     },
     header: {
       backgroundColor: shadeblendconvert(0.4, brand.success)
     },
     headerContent: {
       color: "#000"
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
       color: "#000"
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
       color: "#000"
     }
   };
   ```

2. In Studio Pro, double-click the group box widget.
3. Navigate to the appearance section.
4. In the **Class** field, fill in *groupBoxWarning* to apply the warning style to the group box.
5. Click **OK** and rerun the app locally to see the warning style:

	TODO INSERT PIC

Defining all the different styles inside **test/MxTestProject/theme/styles/native/app/custom.js** can make your code less readable. To prevent this, extract the styles specifically for the group box and store them in a seperate file:

1. Create a new file **test/MxTestProject/theme/styles/native/app/group-box.js**.
2. Move all the code from **test/MxTestProject/theme/styles/native/app/custom.js** into the new file.
3. Add the following import to **test/MxTestProject/theme/styles/native/app/group-box.js**:

   ```js
   export * from "./group-box";
   ```

4. Verify the custom warning style is still being applied to the group box widget in the Make it Native app.

The developer needs to have the classnames memorized to apply a certain group box style. By using a design property this will no longer be necessary:

1. Open **test/MxTestProject/theme/settings-native.json**.
2. After the "com.mendix.widget.native.slider.Slider" property, add the following property:

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

3. In Studio Pro click <kbd>F4</kbd> or select **Project > Synchronize Project Directory** from the topbar menu to bring your application in sync with the changes you made to the previous two files.

4. Double-click the group box widget and navigate to the **Appearance** tab.

5. Verify that there is a design property called **Group box style**.

6. Select the **success** style and click **OK**.

7. Rerun the app locally and verify the new success style in the Make it Native App:

todo insert pic

## 4 Read More

todo add styling and widget links
