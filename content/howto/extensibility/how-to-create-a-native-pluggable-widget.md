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

- Generate a widget structure
- Create...
- Build...
- Configure...

**Are you in a hurry?**

Clone this [code sample](https://github.com/mendix/native-group-box-pluggable-widget-sample) from GitHub with all group box features from this how-to already implemented.

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

- Install Mendix Studio Pro 8.2.2
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

## 3 {Title of Section [Use Present Participle Verb/Gerund]}

### TEMP: Structure

- Setting up pluggable widget project directory

  - Using generator
    - Explain generated code
  - Creating a test project
  - Put test project in dist folder
  - Run sample code from generator in test project

- Transform sample code in groupbox code
  - Create display component with basic look and header caption
    - iOS: round corners
    - Android: sharp corners
  - Change glue component to passthrough header caption
  - Add containment
  - Add toggable functionality
    - Touchable component (dynamic component)
  - Add icon property for expand and collapse
  - Add collapsible property
  - Add default styling from modeler
  - Create design property

To {do this task}, follow these steps:

1. {Step 1}
2. {Step 2}

![](attachments/{sub-folder with same name as doc file}/{image filename}.png)

### 3.1 Scaffolding pluggable widget project

The Pluggable Widget Generator is the quickest way to start developing a pluggable widget. When you run this generator with Yeoman, Yeoman will scaffold your project folder with a folder structure and certain files recommended by Mendix.

To scaffold your project folder for the group box widget, open up a terminal, navigate to the folder where you want to store your project and start the generator by executing the following command:

```shell
yo @mendix/widget GroupBox
```

The generator will ask you for some input during setup. Please provide the following information:

1. Widget name: _{Your widget name}_
2. Widget description: _{Your widget description}_
3. Organization name: _{Your organization name}_
4. Copyright: _{Your copyright date}_
5. License: _{Your license}_
6. Initial version: _{Your initial version number}_
7. Author: _{Your author name}_
8. Mendix Project path: _./test/MxTestProject/_
9. Programming language: **TypeScript**
10. Widget type: **For native mobile apps**
11. Widget template: **Empty widget (recommended for more experienced developers)**
12. Unit tests: **No**

In the image below you can find an example of what information to provide as input.
![Pluggable Widget Generator input example](attachments/how-to-create-a-native-pluggable-widget/pluggable-widget-generator-input-example.png)

### 3.2 Creating a Mendix test project

In order to test our group box widget we want to create a Mendix application that uses this widget in various ways.

1. Open Mendix Studio Pro v8.2.2 to create a new test project by selecting **File > New Project** from the top menu bar. Select the starter app **Blank**, which is the last option on the last page. Then click the **Use this starting point** button, and fill in the following details in the **App Settings** dialog box:

   - App name: **GroupBoxTestProject**
   - Enable online services: **No**

   After that, click the **Create app** button.

   Optionally you may remove all unused custom widgets to optimize the debugging process. Select **Project > Show Project Directory in Explorer** from the Mendix Studio Pro menu and open the **widgets** folder. Then, delete all the files in this folder.

   After that, close the project by selecting **File > Close Project** from the top menu bar.

2. Move the contents of the Mendix test project folder into **test/MxTestProject** which is located inside your group box widget project folder.

3. Open the moved Mendix test project by selecting **File > Open Project...** from the top menu bar. In the **Open App** dialog box, select **Locally on disk** and browse to the **GroupBoxTestProject.mpr** file inside your group box widget project folder.

4. Create a test case for the group box widget:

   1. Open **Home_Native** page.
   2. Copy "Home" container and paste it underneath that container
   3. Delete the content.
   4. Search in toolbox for the **Group Box** widget.
   5. Drag the widget into the new container.
   6. Double click the widget and fill in your name as default value.

5. Setting up the test project is done. Run the test project locally and use the makeitnative app to view the sample widget code in action. If you followed the steps carefully you should see yellow text in your app saying "Hello {your name}".

### 3.3 Building the group box widget

Now that we have seen our project code running in native, it is time to transform our sample widget into an actual group box widget.

Open up your group box widget project folder in your IDE of choice. From now on, all file references will be relative to this project folder.

#### 3.3.1 Creating static UI

First we will change the display component. A display component represents the widget and doesn't interact with Mendix specific APIs and, therefore, can be used in any React application. The current display component is located in **src/components** and has the filename **HelloWorldSample.tsx**. Open this file and you can see a typical React Native component with a render method. This method returns the Graphical User Inteface (GUI) of the component.

Let's change the output of this method to display a group box. Replace the existing code with the following:

```tsx
return (
  <View style={this.styles.container}>
    <View style={this.styles.header}>
      <Text style={this.styles.headerContent}>Header caption</Text>
      <Text style={this.styles.headerContent}>-</Text>
    </View>
    <View style={this.styles.content}>Content</View>
  </View>
);
```

To apply a custom style to our structure above, replace the following code representing the default style:

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

Open up a terminal in your project folder and execute the following command to bundle your widget and update the widget code in your Mendix test project everytime you save your files:

```shell
npm run dev
```

If not done so already, open your Mendix test project in **test/MxTestProject** in Mendix Studio Pro and run the app locally. Use the Make It Native app to check out the changes.

When you build a widget for native mobile, you need to keep in mind that the widget can be used on two platforms: iOS & Android. Both plaforms have their own design language and we want to adhere as much as possible to both of them. In order to do so, we sometimes need to define platform specific styling or use platform specific React Native components.

For the group box widget it would be nice to have square like corners instead of rounded onces on Android devices. We can do so by changing the value for border radius from:

```tsx
const defaultStyle: CustomStyle = {
  container: {
    borderRadius: 4
  }
```

to:

```tsx
const defaultStyle: CustomStyle = {
  container: {
    borderRadius: Platform.OS === "ios" ? 4 : 0
  }
```

In order to use "Platform", you need to adjust the following import:

```tsx
import { Text, View } from "react-native";
```

to:

```tsx
import { Text, View, Platform } from "react-native";
```

As you might have noticed, the display component is still called "HelloWorldSample". Change the classname to "GroupBox" and change the filename to "GroupBox.tsx". Also rename the "HelloWorldSampleProps" interface to "GroupBoxProps" and adjust the GroupBox class extension code to `extends Component<GroupBoxProps>`.

The first two changes will cause errors in our container component defined in **src/GroupBox.tsx**. The container component will be used by the Mendix client, receives all kind of property data from the client and forwards this data to the display component. The container works like glue between the Mendix application and the display component.

To fix the errors in the container component, replace the following import:

```tsx
import { HelloWorldSample } from "./components/HelloWorldSample";
```

with:

```tsx
import { GroupBox as WrappedGroupBox } from "./components/GroupBox";
```

Also rename the "HelloWorldSample" component in the render method to "WrappedGroupBox".

You might have noticed that we aren't using the **label** style anymore in the display component, so we can remove it.

1. Go to **src/components/GroupBox.tsx** and delete the **label** style from the **defaultStyle** constant:

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

2. Go back to **src/GroupBox.tsx**, remove the **label** property from the **CustomStyle** interface and add the new style properties **header**, **headerContent**, **content**:

   ```tsx
   export interface CustomStyle extends Style {
     container: ViewStyle;
     header: ViewStyle;
     headerContent: TextStyle;
     content: ViewStyle;
   }
   ```

#### 3.3.2 Adding widget properties

##### Header caption property

We want to let the Mendix developer alter the header caption of our widget. We can reuse the code and configuration of the sample text property we used earlier to alter the "Hello World" output of the sample widget. Open **src/GroupBox.xml** and alter the sample text property, so that it looks like this:

```xml
<property key="headerCaption" type="string" required="false">
  <caption>Header caption</caption>
  <description/>
</property>
```

As soon as you save the file, the script running on the background will rebundle the widget and generate new typings in **typings/GroupBoxProps.d.ts** that define the props the container component will receive. Some errors will popup in the container component, because we renamed the property. Open **src/GroupBox.tsx** and change the following line in your render method:

`sampleText={this.props.sampleText ? this.props.sampleText : "World"}`

to:

`headerCaption={this.props.headerCaption}`

Our display component doesn't receive a headerCaption prop yet, so open **src/components** and replace:

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

We still need to use the "headerCaption" prop in the render method to display the actual text in our header. Adjust the render method like this:

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

Go back to Mendix Studio Pro and press <kbd>F4</kbd> or select **Project > Synchronize Project Directory** from the topbar menu to bring your application in sync with the changes we made to the **src/GroupBox.xml** file. You will notice an error occurs telling us to update our widget. Right click on the "Group Box" widget and select "Update widget". Double click the same widget and you will now see our newly created property. Fill in your caption text, click the "OK" button and rerun your app locally to see your caption text in the app.

#### Content property

Besides the header caption, we also want the developer to be able to fill content in the group box like building blocks, snippets or other widgets. Go to **src/GroupBox.xml** and add a content property element above the header caption property. Also change the name element from "Group Box" to "Group box" to stay in line with naming of other widgets and remove the "needsEntityContext" attribute from the widget element, since this is no longer necessary. After the changes your file should look like this:

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

Save the file, go to **src/GroupBox.tsx** and change the render method as follows:

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

Save the file, go to **src/components/GroupBox.tsx** and adjust the render method, so that it matches the following:

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

Go back to Mendix Studio Pro and press <kbd>F4</kbd> or select **Project > Synchronize Project Directory** from the topbar menu to bring your application in sync with the changes we made to the **src/GroupBox.xml** file. Update the "Group Box" widget again. A content area will appear in the page editor.

Next, drag a "Call nanoflow button" widget into the content area and create a new nanoflow "ACT_ShowMessage". Double click the button and change the caption to "Show message".

Navigate to the nanoflow "ACT_ShowMessage" and drag in a "Show message" activity. Double click the activity and add the text "Hello World!" to the Template. Click the "OK" button.

Run the app locally and verify that your button is triggering a message popup saying "Hello World!".

It would be nice to hide the content area from the widget completely when there is no content to display.

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

3. Make a call to **renderContent** in the render **render** method:

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

### 3.3 Making the widget collapsilble

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

5. Reload your test app in the Make It Native app to view the change. Try to click on the header. Note that on Android, the ripple effect is not visible on a black background, so at the moment you can't visually verify yet whether it's clickable.

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

8. Check your changes in the Make It Native app.

### 3.4 Adding an expand & collapse icon property

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

5. Check the app in the Make It Native app and you should see the icons in white and the correct size.

### 3.5 Adding a collapsible property

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

### 3.6 Adding custom default style

Although we have an extensively featured group box, we can still improve the styling of the widget. Right now, we apply very basic styling that's baked into our widget code. We can let the Mendix Client override this default styling by defining a custom style for our widget in Atlas UI.

Before we are going to define a custom style, we want to align the widget mpk file name and the widget's deployment folder structure with other Mendix widgets.

1. Navigate to **package.json**

2. Change the **packagePath** value from "mendix" to "com.mendix.widget.native":

   ```json
   {
     "name": "groupbox",
     "widgetName": "GroupBox",
     "version": "1.0.0",
     "description": "Widget to group building blocks, snippets or other widgets",
     "copyright": "Mendix 2019",
     "author": "Mendix",
     "config": {
       "widgetPath": "./test/MxTestProject/widgets",
       "projectPath": "./test/MxTestProject/"
     },
     "packagePath": "com.mendix.widget.native",
     "scripts": {
       "start": "npm run dev",
       "build": "pluggable-widgets-tools build:ts:native",
       "dev": "pluggable-widgets-tools start:ts:native",
       "lint": "pluggable-widgets-tools lint",
       "lint:fix": "pluggable-widgets-tools lint:fix",
       "prerelease": "npm run lint",
       "release": "pluggable-widgets-tools release:ts:native"
     },
     "license": "Apache-2.0",
     "bugs": {
       "url": "https://github.com/Mendix/groupbox/issues"
     },
     "devDependencies": {
       "@mendix/pluggable-widgets-tools": "^8.2.0",
       "@types/big.js": "^4.0.5",
       "@types/classnames": "^2.2.6",
       "@types/jest": "^24.0.0",
       "@types/react": "^16.8.17",
       "@types/react-dom": "^16.8.4",
       "@types/react-native": "^0.57.56"
     },
     "dependencies": {
       "big.js": "^5.2.2"
     }
   }
   ```

3. Save the file.

4. Stop the execution of the `npm run dev` command in your terminal and execute it again to make sure the widget will be bundled again in a new mpk file.

5. Delete the old widget mpk file in the Mendix test project. This file is located at **test/MxTestProject/widgets/mendix.GroupBox.mpk**.

6. Open the file **src/GroupBox.xml**.

7. Change the widget id attribute value from "mendix.groupbox.GroupBox" to "com.mendix.widget.native.groupbox.GroupBox":

   ```xml
   <?xml version="1.0" encoding="utf-8" ?>
   <widget id="com.mendix.widget.native.groupbox.GroupBox" pluginWidget="true" offlineCapable="true" supportedPlatform="Native"
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

8. Save the file to rebundle the widget.

9. Go to Mendix Studio Pro and press <kbd>F4</kbd> or select **Project > Synchronize Project Directory** from the topbar menu to bring your application in sync with the changes we made to the previous two files. You will notice an error saying that the group box widget can't be found. This is due to the fact that we changed the name of the widget mpk file.

10. Take the following steps to fix the error:

    1. Search in toolbox for the **Group Box** widget.
    2. Drag the widget into the same container as the previous group box widget.
    3. Apply the same properties as the previous widget to the new widget.
    4. Drag the button inside the previous widget into the new widget.
    5. Delete the previous widget.

11. Go back to your widget project and open **test/MxTestProject/theme/styles/native/app/custom.js**. This is the place where we can define a custom default style for our group box widget.

12. Add the following imports and constant to the file to define a default custom style:

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

13. Save the file and refresh the your app in the Make It Native app to see your new default style. Also note the ripple effect on the header in Android that was previously not visible.

- Add default styling from modeler
- Create design property

## 4 Read More

{Add links to related documents and blog posts; make sure necessary third-party links are contextualizecd ./d in the above sections, as they should not be put here}
