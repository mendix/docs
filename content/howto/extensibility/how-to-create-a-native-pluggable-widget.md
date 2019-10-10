---
title: "Create a native pluggable widget"
#category: "Enter the category under which the document should be published (for example, "Mobile"); if there is a parent, remove this category line"
#parent: "Enter the parent document filename of this document if necessary (for example, "design-the-architecture"); if there is a category, remove this parent line"
#menu_order: Enter the position of the document in the category or under the parent; number by 10 (for first), 20, 30, etc. for easy ordering of other documents in the future if necessary; don't add brackets or quotation marks; if no number is added, the system will add an extremely high number to order the documents, which means that if you only want a document to appear at the top, you only have to add "10" to that specific document, you don't have to order all the other documents in the category/under the parent
#description: "Set a description with a maximum of 140 characters; this should describe what the goal of the document is, and it can be different from the document introduction; this is optional, and it can be removed"
#tags: [Add a maximum of 5-7 tags/keywords; keep them focused on the most important topics of the document, and make sure the tag is used as a word in the actual content (will function best for SEO as a word in a heading); each tag should have quotation marks and be separated by a comma, for example: "Samba", "MxCloud", "cloud", "share"; the tags should be enclosed with brackets and quotation marks]
---

## 1 Introduction

Pluggable widgets enable developers to introduce custom-built widgets in their Mendix applications. Not just for web, but also for native mobile. In this how-to you will learn to create a pluggable widget for native mobile applications.

**This how-to will teach you how to do the following:**

- Generate a widget structure
- Create...
- Build...
- Configure...

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
npm install -g @mendix/generator-widget
```

- Install an integrated development environment (IDE) of your choice (Mendix recommends [Microsoft Visual Studio Code](https://code.visualstudio.com/))
- Have a basic understanding of [TypeScript](https://www.typescriptlang.org/) and [React](https://reactjs.org)

## Structure

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

## 3 {Title of Section [Use Present Participle Verb/Gerund]}

To {do this task}, follow these steps:

1. {Step 1}
2. {Step 2}

![](attachments/{sub-folder with same name as doc file}/{image filename}.png)

### 3.1 {Title of Sub-Section}

## 4 Read More

{Add links to related documents and blog posts; make sure necessary third-party links are contextualized in the above sections, as they should not be put here}
