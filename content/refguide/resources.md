---
title: "Resources"
category: "App Modeling"
tags: ["studio pro", "resources"]
---

## 1 Introduction

Resources are helping elements that cannot function on their own but can be used in other documents. For example, a microflow or a page can function on their own, but a Java action can only function in a microflow.  

Resources can be reused in different modules of your project. 

## 2 Adding Resources

To add a resource, do the following:

1. In the [Project Explorer](project-explorer), right-click the module or a folder you want to add a resource to and select **Add other**:

   ![](attachments/resources/project-explorer-resources.png)

2. In the **Resources** category, select the element you would like to add to your project.

## 3 Resources Overview

The **Resources** category contain various elements that can be used in different editors of Studio Pro:

| Element            | Where it is used                       | Description                                                  |
| ------------------ | -------------------------------------- | ------------------------------------------------------------ |
| Java action        | Microflows                             | Java actions can extend the functionality of your application. Java actions can be called from microflows. |
| JavaScript action  | Nanoflow                               | JavaScript actions can extend the functionality of your application. JavaScript actions can be called from nanoflows. |
| Rule               | Microflows                             | Rules contain the application logic that should result in an enumeration or a Boolean. They are used in exclusive splits in microflows. |
| Enumeration        | Domain model                           | Enumerations are used to define attributes of an enumeration type. |
| Dataset            | Pages                                  | Data sets define the data shown in reporting widgets.        |
| Constant           | Microflow expressions and web services | Constants are used to define configuration values.           |
| Regular expression | Domain model                           | Regular expressions define criteria that a string should match and are used in validation rules to identify whether an string attribute type matches these criteria. |
| Scheduled event    | Runtime/Microflows                     | Scheduled events let the runtime execute a microflow at a specific moment in time. |
| Document template  | Microflows                             | Document template can used to generate a pdf.                |

## 4 Read More

