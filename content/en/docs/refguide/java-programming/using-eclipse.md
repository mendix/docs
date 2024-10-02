---
title: "Using Eclipse"
url: /refguide/using-eclipse/
weight: 20
description: "Describes how to set up Eclipse, and how to add a Mendix application to Eclipse and launch it."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the Evaluation Guide. See Mapping to Products for more details.
# Linked from https://www.mendix.com/evaluation-guide/enterprise-capabilities/extensibility/
---

## Introduction

You can use [Eclipse IDE for Java Developers](https://eclipseide.org/) to write and debug Java actions in your Mendix app. 

## Deploy For Eclipse

To use Eclipse, you first need to set up your app so that Eclipse recognizes it.

In Studio Pro, open the Mendix app containing the Java actions you want to edit. Select **App > Deploy for Eclipse** to generate the necessary files for Eclipse to recognize the App directory as a Java project. This generates the Eclipse project file, classpath file, and launch configuration.

## Setting Up Eclipse

In Mendix, all text is saved in UTF-8 encoding. To make sure your source code is also saved in UTF-8, do the following in Eclipse:

1. Select **Window > Preferences**.
2. Select **Workspace** in the new menu window.
3. Select **UTF-8**:

    {{< figure src="/attachments/refguide/java-programming/using-eclipse/eclipse-utf8-encoding.png" >}}

You must also have a Java Development Kit (JDK) installed and selected. You will normally have a JDK installed as part of your Studio Pro installation. Check that the JDK you want to use is listed under **Installed JREs** and select it as the default in Eclipse.

{{< figure src="/attachments/refguide/java-programming/using-eclipse/eclipse-jdk.png" alt="Selecting a default JDK" >}}

In addition, you must set the **Compiler compliance level** in the **Compiler** tab to the correct JDK version.

{{< figure src="/attachments/refguide/java-programming/using-eclipse/eclipse-jdk-compiler-version.png" >}}

## Adding a Mendix App

To add a Mendix app to Eclipse, do the following in Eclipse:

1. Select **File > Import**.
2. Open the **General** folder, select **Existing Projects into Workspace** and click **Next >**:

    {{< figure src="/attachments/refguide/java-programming/using-eclipse/eclipse-select-import.png" alt="Import existing project" >}}

3. Use the option **Select root directory**, browse to your Mendix app folder and click **Finish**:

    {{< figure src="/attachments/refguide/java-programming/using-eclipse/import-eclipse-project.png" >}}

## Launching a Mendix App

To launch the app, do the following:

1. Select **Run > Run configurations...** or **Run > Debug configurations...**, depending on how you would like to start the application. 
2. Find **Java application** in the list. It should contain a launch configuration with the same name as the Mendix app's directory.
3. Select the launch configuration.
4. Select **Run** (or **Debug**) to start the application:

    {{< figure src="/attachments/refguide/java-programming/using-eclipse/eclipse-run-configuration.png" >}}

After you have launched the application, the **M2EE Admin Console** will appear. This is the same console as you would normally see in Mendix Studio Pro, if you had run the application from there. You can stop your application by closing the console.

{{< figure src="/attachments/refguide/java-programming/using-eclipse/eclipse-debug-log.png" >}}
