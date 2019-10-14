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

5. Setting up the test project is done. Run the test project locally and use the makeitnative app to view the sample widget code in action. If you followed the steps carefully you should see yellow text in your app saying "Hello World".

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

#### 3.3.2 Adding widget properties

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

`headerCaption={this.props.headerCaption ? this.props.headerCaption : "World"}`

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

TODO: Rename widget from "Group Box" to "Group box"

## 4 Read More

{Add links to related documents and blog posts; make sure necessary third-party links are contextualizecd ./d in the above sections, as they should not be put here}
