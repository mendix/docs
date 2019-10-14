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

TODO: Rename widget from "Group Box" to "Group box"

## 4 Read More

{Add links to related documents and blog posts; make sure necessary third-party links are contextualizecd ./d in the above sections, as they should not be put here}
