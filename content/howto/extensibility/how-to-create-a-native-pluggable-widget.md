---
title: "Create a native pluggable widget"
#category: "Enter the category under which the document should be published (for example, "Mobile"); if there is a parent, remove this category line"
#parent: "Enter the parent document filename of this document if necessary (for example, "design-the-architecture"); if there is a category, remove this parent line"
#menu_order: Enter the position of the document in the category or under the parent; number by 10 (for first), 20, 30, etc. for easy ordering of other documents in the future if necessary; don't add brackets or quotation marks; if no number is added, the system will add an extremely high number to order the documents, which means that if you only want a document to appear at the top, you only have to add "10" to that specific document, you don't have to order all the other documents in the category/under the parent
#description: "Set a description with a maximum of 140 characters; this should describe what the goal of the document is, and it can be different from the document introduction; this is optional, and it can be removed"
#tags: [Add a maximum of 5-7 tags/keywords; keep them focused on the most important topics of the document, and make sure the tag is used as a word in the actual content (will function best for SEO as a word in a heading); each tag should have quotation marks and be separated by a comma, for example: "Samba", "MxCloud", "cloud", "share"; the tags should be enclosed with brackets and quotation marks]
---

## 1 Introduction

Pluggable widgets enable developers to introduce custom-built widgets in their Mendix applications. Not just for web, but also for native mobile. In this how-to you will learn to create a group box pluggable widget for native mobile applications.

**This how-to will teach you how to do the following:**

TODO:

- Generate a widget structure
- Create...
- Build...
- Configure...

**Are you in a hurry?**

Clone this [code sample](https://github.com/mendix/native-group-box-pluggable-widget-sample) from GitHub with all group box features from this how-to already implemented.

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

- Install Mendix Studio Pro 8.3
- Install the Mendix Make it Native app on a mobile device or an emulator.
- Install Long Term Support (LTS) v10.16.3 or any higher version of [Node.js](https://nodejs.org)
- Install latest [Yeoman](https://yeoman.io/) with the following command:

```shell
npm install -g yo
```

- Install Mendix' Pluggable Widget Generator v8.2.0 for Yeoman with the following command:

```shell
npm install -g @mendix/generator-widget@8.2.0
```

- Install an integrated development environment (IDE) of your choice (Mendix recommends [Microsoft Visual Studio Code](https://code.visualstudio.com/))
- Have a basic understanding of [TypeScript](https://www.typescriptlang.org/) and [React](https://reactjs.org)

## 3 Building a native group box widget

To build a group box widget for native mobile, there are a several steps to follow:

1. Scaffolding a pluggable widget project
2. Creating a Mendix test project
3. Building the group box widget

The following paragraphs will elaborate on each of these steps.

### 3.1 Scaffolding a pluggable widget project

The Pluggable Widget Generator is the quickest way to start developing a pluggable widget. When you run this generator with Yeoman, Yeoman will scaffold your project folder with a folder structure and certain files recommended by Mendix.

To scaffold your project folder for the group box widget, follow these steps:

1. Open up a terminal.
2. Change the current working directory to the folder where you want to store your project.
3. Start the generator by executing the following command:

   ```shell
   yo @mendix/widget GroupBox
   ```

4. The generator will ask you for some input during setup. Please provide the following information:

   1. Widget name: _GroupBox_
   2. Widget description: _Widget to group building blocks, snippets or other widgets_
   3. Organization name: _com.mendix.widget.native_
   4. Copyright: _Mendix 2019_
   5. License: _Apache-2.0_
   6. Initial version: _1.0.0_
   7. Author: _Mendix_
   8. Mendix Project path: _./test/MxTestProject/_
   9. Programming language: _TypeScript_
   10. Widget type: _For native mobile apps_
   11. Widget template: _Empty widget (recommended for more experienced developers)_
   12. Unit tests: _No_

   In the image below you can see how your input should look like in the terminal.

   ![Pluggable Widget Generator input](attachments/how-to-create-a-native-pluggable-widget/pluggable-widget-generator-input.png)

5. Verify that the generator outputs the following message to make sure your project has been scaffolded correctly:

   > Widget successfully built!! Please open Mendix Studio Pro and start playing with your new widget.

### 3.2 Creating a Mendix test project

In order to test our group box widget we want to create a Mendix application that uses this widget in various ways. Create a Mendix project for this application by following these steps:

1. Open Mendix Studio Pro v8.2.2.
2. Create a new project by selecting **File > New Project** from the top menu bar.
3. Select the starter app **Blank**, which is the last option on the last page.
4. Click the **Use this starting point** button
5. Fill in the following details in the **App Settings** dialog box:

   - App name: _GroupBoxTestProject_
   - Enable online services: _No_

6. Click the **Create app** button.

Optionally you can remove all unused custom widgets to optimize the debugging process. To do so, follow these steps:

1. Select **Project > Show Project Directory in Explorer** from the Mendix Studio Pro menu.
2. Open the **widgets** folder.
3. Delete all the files in this folder.

Now we want to use the created Mendix project as a test project in the group box widget project. Follow these steps to add the Mendix project as test project to our widget project, so that we can start modeling with the new widget:

1. Close the project in Mendix Studio Pro by selecting **File > Close Project** from the top menu bar.
2. Move the contents of the Mendix project folder into **test/MxTestProject**, which is located inside your group box widget project folder.

To test our group box widget we need to use the widget in the Mendix test project. Let's create a test case by following these steps:

1. Open the Mendix test project in **test/MxTestProject** in Mendix Studio Pro by selecting **File > Open Project...** from the top menu bar.
2. In the **Open App** dialog box, select **Locally on disk**.
3. Open the **GroupBoxTestProject.mpr** file inside your group box widget project folder.
4. Create a test case for the group box widget with the following steps:

   1. Open **Home_Native** page.
   2. Copy "Home" container and paste it underneath that container
   3. Delete the content.
   4. Search in toolbox for the **Group Box** widget.
   5. Drag the widget into the new container.
   6. Double click the widget and fill in your name as default value.

5. Setting up the test project is done. To verify that your Mendix test project is set up correctly, follow these steps:

   1. In Mendix Studio Pro run the test project locally.
   2. Use the Mendix Make it Native app to open the native mobile application to view the sample widget code in action.
   3. Verify that the homepage of the application contains a yellow text saying "Hello {your name}".

### 3.3 Building the group box widget

Now that we have seen our widget sample code running, it is time to transform our sample widget into an actual group box widget. We will do so with the following steps:

1. Creating a static UI
2. Adding widget properties
3. Making the widget collapsilble
4. Adding an expand & collapse icon property
5. Adding a collapsible property
6. Adding a custom default style
7. Adding a design property

The following paragraphs will elaborate on each of these steps. Open up your group box widget project folder in your IDE of choice. From now on, all file references will be relative to this project folder.

#### 3.3.1 Creating a static UI

Let's first define the structure and default style of the group box widget by following these steps:

1. Open the file located at **src/components/HelloWorldSample.tsx**.

   This file contains the display component of our widget. Display components describe the widget's UI in terms of React Native components and contain all the behavioral logic of the widget. Display components don't interact with Mendix specific APIs and, therefore, should be usable in any React Native application.

2. Replace the **render** method with the following code snippet:

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

   The **render** method uses two built-in components from React Native: **\<View>** and **\<Text>**. **\<View>** is a component like a \<div> or \<span> from HTML whereas the **\<Text>** component is used to display some text. To learn more about the built-in components please consult the [React Native website](https://facebook.github.io/react-native/).

3. Open up a terminal.
4. Change the current working directory to your project folder.
5. Execute the following command to bundle your widget and update the widget bundle in your Mendix test project:

   ```shell
   npm run dev
   ```

   The executed script will keep watching your source files and rebundle the widget everytime you save one of these files.

6. Open your Mendix test project in **test/MxTestProject** in Mendix Studio Pro.
7. Run the project locally.
8. Verify with the Make it Native app that your app looks like the image below.
   [INSERT IMAGE]

The UI of our widget doesn't really look like a group box yet. Let's apply a default style to make it look like one with the following steps:

1. Open **src/components/HelloWorldSample.tsx**.
2. Replace the following **defaultStyle** constant:

   ```tsx
   const defaultStyle: CustomStyle = {
     container: {},
     label: {
       color: "#F6BB42"
     }
   };
   ```

   with:

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

   The objects assigned to the properties of **defaultStyle** are passed to the style props of the React Native components that we use in the **render** method. The property names inside the objects are very familiar to the CSS style properties. To learn more about the supported properties and what effect they have, visit the following links:

   - [\<View> style props](https://facebook.github.io/react-native/docs/view-style-props)
   - [\<Text> style props](https://facebook.github.io/react-native/docs/text-style-props)

3. Make sure all files are saved, so that rebundling takes place and the deployment folder of our Mendix test project gets updated.
4. Refresh the Mendix app inside the Make it Native app.
5. Verify that the group box widget looks like the image below.
   [INSERT IMAGE]

When you build a widget for native mobile, you need to keep in mind that the widget can be used on two platforms: iOS & Android. Both plaforms have their own design language and we want to adhere as much as possible to both of them. In order to do so, we sometimes need to define platform specific styling or use platform specific React Native components.

For the group box widget it would be nice to have square like corners instead of rounded onces on Android devices. Apply this style behavior with the following steps:

1. Change the value of defaultStyle.container.borderRadius from `4` to `Platform.OS === "ios" ? 4 : 0`, so that the initialization of the **defaultStyle** constant look as follows:

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

2. Adjust the following import statement in order to use the **Platform** object:

   ```tsx
   import { Text, View } from "react-native";
   ```

   to:

   ```tsx
   import { Text, View, Platform } from "react-native";
   ```

3. Save all files to rebundle and update the Mendix test project.
4. Refresh the Mendix app inside the Make it Native app.
5. Verify that the group box widget looks like the image below.
   [INSERT IMAGE]

As you might have noticed, the display component is still called "HelloWorldSample". Let's introduce the term "GroupBox" in our code with the following steps, so that the readability and, thus, quality of our code improves:

1. Change the classname from "HelloWorldSample" to "GroupBox".
2. Change the filename to "GroupBox.tsx".
3. Rename the **HelloWorldSampleProps** interface to "GroupBoxProps".
4. Change the GroupBox class declaration to the following:

   ```tsx
   export class GroupBox extends Component<GroupBoxProps<CustomStyle>>
   ```

The changes you made in step 1 and 2 causes errors in our container component defined in **src/GroupBox.tsx**. The container component will be used by the Mendix Client, receives all kind of property data from this client and forwards this data to the display component. You could say the container component works like glue between the Mendix application and the display component.

To fix the errors in the container component, use these steps:

1. Open **src/GroupBox.tsx**.
2. Replace the following import:

   ```tsx
   import { HelloWorldSample } from "./components/HelloWorldSample";
   ```

   with:

   ```tsx
   import { GroupBox as WrappedGroupBox } from "./components/GroupBox";
   ```

3. Rename the **HelloWorldSample** component in the **render** method to "WrappedGroupBox".

You might have noticed that we aren't using the **label** property of the **defaultStyle** constant anymore in the **render** method of the display component, so let's remove it:

1. Open **src/components/GroupBox.tsx**
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
6. Refresh the Mendix app inside the Make it Native app.
7. Verify that the group box widget still looks the same (image below) after the refactoring.
   [INSERT IMAGE]

#### 3.3.2 Adding widget properties

Now that we have a basic group box, let's give the Mendix developer the possibility to customize it with the help of widget properties: a header caption and content property.

##### Header caption property

We want to let the Mendix developer alter the header caption of our widget. We can reuse the code and configuration of the "default value" property we used earlier to alter the "Hello World" output of the sample widget. Let's refactor this property:

1. Open **src/GroupBox.xml**.
2. Alter the sampleText property (the property shown in Mendix Studio Pro as "default value") to make it look like this:

   ```xml
   <property key="headerCaption" type="string" required="false">
     <caption>Header caption</caption>
     <description/>
   </property>
   ```

3. Save the file. When you did this, the script running on the background will rebundle the widget and generate new typings in **typings/GroupBoxProps.d.ts** that define the props the container component will receive. Some errors will popup in the container component, because we renamed the property.
4. Open **src/GroupBox.tsx**.
5. Change in the **render** method the reference to the non-existent **sampleText** prop to the **headerCaption** prop and rename the **sampleText** prop of the **WrappedGroupBox** component to "headerCaption":
   [TODO: include complete render method in code snippet]

   `sampleText={this.props.sampleText ? this.props.sampleText : "World"}`

   to:

   `headerCaption={this.props.headerCaption}`

   Note that our display component doesn't receive a **headerCaption** prop yet.

6. Open **src/components/GroupBox.tsx**.
7. Rename the **sampleText** property of the **GroupBoxProps** interface to "headerCaption":

   ```tsx
   export interface GroupBoxProps {
     headerCaption?: string;
     style: CustomStyle[];
   }
   ```

8. We still need to use the newly defined **headerCaption** prop in the **render** method to display the actual text in our header. Adjust the **render** method by using the **headerCaption** prop:

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

9. Go back to Mendix Studio Pro.
10. Press <kbd>F4</kbd> or select **Project > Synchronize Project Directory** from the topbar menu to bring your application in sync with the changes we made to the **src/GroupBox.xml** file. You will notice an error occurs telling us to update our widget.
11. Right click on the "Group Box" widget and select "Update widget".
12. Double click the same widget and you will now see our newly created property shown as "Header caption".
13. Fill in your caption text and click the "OK" button
14. Rerun your app locally.
15. Use the Make it Native app to see your caption text appear in the group box of the app.

##### Content property

Besides the header caption, we also want the developer to be able to fill content in the group box like building blocks, snippets or other widgets. Let's create a new property for that:

1. Open **src/GroupBox.xml**.
2. Add a content property element above the header caption property. Also change the name element from "Group Box" to "Group box" to stay in line with naming of other widgets and remove the "needsEntityContext" attribute from the widget element, since this is no longer necessary. After the changes your file should look like this:

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

Let's verify that the new content property works:

1. Go back to Mendix Studio Pro
2. Press <kbd>F4</kbd> or select **Project > Synchronize Project Directory** from the topbar menu to bring your application in sync with the changes we made to the **src/GroupBox.xml** file.
3. Update the "Group Box" widget again. A content area will appear in the page editor.
4. Drag a "Call nanoflow button" widget into the content area.
5. Create a new nanoflow "ACT_ShowMessage".
6. Double click the button and change the caption to "Show message".
7. Navigate to the nanoflow "ACT_ShowMessage".
8. Drag in a "Show message" activity.
9. Double click the activity and add the text "Hello World!" to the Template. Click the "OK" button.
10. ReRun the app locally
11. Verify with the Make it Native app that your button is inside the group box and is triggering a message popup saying "Hello World!".

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

#### 3.3.3 Making the widget collapsilble

Now that our widget can contain content, the next challange is to hide this content by making it collapsible.

First we will make the complete header clickable.

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

4. Change the render method to make use of **renderHeader**:

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

5. Reload your test app in the Make it Native app to view the change. Try to click on the header. Note that on Android, the ripple effect is not visible on a black background, so at the moment you can't visually verify yet whether it's clickable.

Let's now make it possible to expand or collapse the group box.

1. Navigate to the display component (**src/components/GroupBox.tsx**).
2. Create an **GroupBoxState** interface below the **GroupBoxProps** one:

   ```tsx
   export interface GroupBoxProps {
     headerCaption?: string;
     style: CustomStyle[];
   }

   export interface GroupBoxState {
     collapsed: boolean;
   }
   ```

3. Change the class definition as follows to give our component a state to keep track on whether it's collapsed or not:

   ```tsx
   export class GroupBox extends Component<GroupBoxProps, GroupBoxState>
   ```

4. Set collapsed to false for the initial state by adding the following code inside the class:

   ```tsx
   readonly state: GroupBoxState = {
       collapsed: false
   };
   ```

5. Add the following lambda method to the class to change the collapsed state:

   ```tsx
   private toggleCollapsed = (): void => {
       const collapsed = !this.state.collapsed;
       this.setState({ collapsed });
   };
   ```

6. Let the **Touchable** component execute the **toggleCollapsed** method when it's pressed (clicked). Also switch between a plus and minus character in the header depending on the state. The **renderHeader** method should look as follows:

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

8. Check your changes in the Make it Native app.

#### 3.3.4 Adding an expand & collapse icon property

The next step is to allow a Mendix developer to use a custom icon in the clickable header.

1. Head to **src/GroupBox.xml** and add two icon properties:

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

2. Add property groups around the properties to create a more readable properties window in Mendix Studio Pro:

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

3. Save the xml file and head over to the display component.

4. Add two new props for an expand and collapse icon by changing the **GroupBoxProps** interface:

5. Create a lambda method **renderIcon** that uses an supplied icon:

   ```tsx
   private renderIcon = (): ReactNode => {
        const { collapseIcon, expandIcon } = this.props;

        if (this.state.collapsed) {
            return expandIcon ? expandIcon : <Text style={this.styles.headerContent}>+</Text>;
        }

        return collapseIcon ? collapseIcon : <Text style={this.styles.headerContent}>-</Text>;
    };
   ```

6. Change the method **renderHeader** so that it makes use of **renderIcon**:

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

7. Next we have to pass the icons set by the Mendix developer to our display component. If an icon isn't explicitly set, we will pass a default glyph (glyphs are provided by the Mendix client). Go to the container component (**src/GroupBox.tsx**) so we can make the changes.

8. Create two constants outside the class that hold the glyph references:

   ```tsx
   const defaultCollapseIconGlyph = "glyphicon-minus";
   const defaultExpandIconGlyph = "glyphicon-plus";
   ```

9. Do the following imports:

   ```tsx
   import { DynamicValue, NativeIcon, ValueStatus } from "mendix";
   import { Icon } from "mendix/components/native/Icon";
   import {
     GroupBox as WrappedGroupBox,
     GroupBoxProps as WrappedGroupBoxProps
   } from "./components/GroupBox";
   ```

10. Add a lambda method **renderIcon** to the **GroupBox** class:

    ```tsx
    private renderIcon = (toBeRenderedIcon: DynamicValue<NativeIcon> | undefined, glyph: string) => {
        const nativeIcon: NativeIcon =
            toBeRenderedIcon && toBeRenderedIcon.status === ValueStatus.Available
                ? toBeRenderedIcon.value
                : { type: "glyph", iconClass: glyph };

        return <Icon icon={nativeIcon} />;
    };
    ```

11. Adjust the **render** method so that it makes use of **renderIcon**:

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

12. Go to Mendix Studio Pro and select for the expand icon property a Euro sign.
13. Run the app locally and check out your changes.

You should notice that you can't see any icon in the header of the group box. The reason for this is that our background color and text color are both black. Remember that in the **defaultStyle** constant of our display component we defined that text of React Native components that get the **headerContent** style applied to it, should be white. However, we are not explicitly applying this style to our **Icon** component that we pass from our container component to the display component. You could argue to move the creation of the **Icon** component inside your display component, but this will go against the strict seperation of concerns related to the container and display component, since the **Icon** component is Mendix specific. Therefore, it should be part of the container component.

Let's fix the issue by introducing a default style for our container component.

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

4. Adjust the **renderIcon** method, so that it returns an **Icon** component with a color and size defined:

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

5. Check the app in the Make it Native app and you should see the icons in white and the correct size.

#### 3.3.5 Adding a collapsible property

We are close to a fully featured group box. Though there are two more features that would be of high use for a Mendix developer: setting whether the group box should be collapsible and setting the initial state of being collapsed or not.

1. Head to **src/GroupBox.xml** and add a **collapsible** property underneath the **content** property:

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

2. Add a property group **Common** below the **Header** property group and include the system properties **Name** and **Visibility** to improve the properties window even more:

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

3. Add the image below as the icon for the widget as a finishing touch.

   ![Group box icon](attachments/how-to-create-a-native-pluggable-widget/GroupBox.png)

   You can do so by adding the Base64 representation of this image to the icon element in the xml file:

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

4. Save the xml file and head over to the display component.

5. Let's first add two new props for collapsibility and the initial state of being collapsed or not by adding them to the **GroupBoxProps** interface:

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

6. Change the initilization of the state, so that the collapsed state starts with the value passed through the **startCollapsed** prop:

   ```tsx
   readonly state: GroupBoxState = {
        collapsed: !!this.props.startCollapsed
    };
   ```

If the group box should not be collapsible at all, we would have to remove the **Touchble** component that wraps the header to prevent toggling the collapsed state. Moreover, we should remove the icons inside the header indicating the group box is collapsible. Let's make those changes.

1. Change the **renderHeader** method so that it doesn't render the Touchable component around the header View component:

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

2. Also prevent the header View component from being rendered at all when the group box isn't collapsible and there is no header caption, because the header would otherwise be visible as an empty block:

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

3. Change the **renderIcon** method to prevent an icon from being rendered when the group box isn't collapsible by adding a guard that returns null:

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

4. Change the **render** method to deal correctly with the situation where there is no header nor content to be rendered by returning null when this situation occurs:

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

The last thing we need to do is changing the container component so that the properties get passed to the display component.

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

#### 3.3.6 Adding a custom default style

Although we have an extensively featured group box, we can still improve the styling of the widget. Right now, we apply very basic styling that's baked into our widget code. We can let the Mendix Client override this default styling by defining a custom default style for our widget in Atlas UI. To define a custom default style, follow these steps:

1. Open **test/MxTestProject/theme/styles/native/app/custom.js**. This is the place where we can define a custom default style for our group box widget.

2. Add the following imports and constant to the file to define a default custom style:

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

   Note that the name of the constant has to be almost the same as the id of the widget. Only the dots of the widget id need to be underscores. Only with this name the Mendix Client will apply the custom style defined in this constant to the group box widget.

3. Save the file and refresh the your app in the Make it Native app to see your new default style. Also note the ripple effect on the header in Android that was previously not visible.

### 3.3.7 Adding a design property

It would be nice to provide the developer with some pre-definded styles that he can use for the group box. Let's create three style classes for the group box based on the brand colors success, warning and danger.

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

2. Go to Mendix Studio Pro and double click the group box widget
3. Head to the appearance section.
4. In the class field fill in "groupBoxWarning" to apply the warning style to the group box.
5. Hit "OK" and rerun the app locally to see the warning style.

Defining all the different styles inside **test/MxTestProject/theme/styles/native/app/custom.js** can make your code less readable. To prevent this we can extract the styles specifically for the group box and store them in a seperate file.

1. Create a new file **test/MxTestProject/theme/styles/native/app/group-box.js**.
2. Move all the code from **test/MxTestProject/theme/styles/native/app/custom.js** into the newly created file.
3. Add the following import to **test/MxTestProject/theme/styles/native/app/group-box.js**:

   ```js
   export * from "./group-box";
   ```

4. Verify the custom warning style is still being applied to the group box widget in the Make it Native app.

The developer needs to know the classnames by hard to apply a certain group box style. By making use of a design property this is no longer necessary.

1. Open **test/MxTestProject/theme/settings-native.json**.
2. Append after the "com.mendix.widget.native.slider.Slider" property the following property:

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

3. Go to Mendix Studio Pro and press <kbd>F4</kbd> or select **Project > Synchronize Project Directory** from the topbar menu to bring your application in sync with the changes we made to the previous two files.

4. Double click the group box widget and head to the appearance tab.

5. Verify that there is a design property called "Group box style".

6. Select the success style and hit "OK".

7. Rerun the app locally and verify the new green style in the Make it Native App.

## 4 Read More

{Add links to related documents and blog posts; make sure necessary third-party links are contextualizecd ./d in the above sections, as they should not be put here}
