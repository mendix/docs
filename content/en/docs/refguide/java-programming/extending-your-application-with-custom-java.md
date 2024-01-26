---
title: "Extending Your Application with Custom Java"
linktitle: "Extending App with Custom Java"
url: /refguide/extending-your-application-with-custom-java/
weight: 30
category: "Java Programming"
description: "Describes how to extend your application with custom Java code."
tags: ["microflow", "logic", "java", "extend", "jdk", "custom", "UnsupportedClassVersionError"]
---

## 1 Introduction

Most application logic can be developed using [microflows](/refguide/microflows/) and [nanoflows](/refguide/nanoflows/). These are very powerful and contain most of the features you need in every application. If there is a feature missing, you can extend Mendix microflows with the use of Java actions. 

This document teaches you how to do the following:

* Extend your application with custom Java code you can call from a microflow
* Use the [Mendix Runtime API](/apidocs-mxsdk/apidocs/runtime-api/) to retrieve data from the database using an XPath in a Java action

## 2 Prerequisites {#prerequisites}

This how-to assumes that you are familiar with using Studio Pro to create a simple app with a Domain Model and Pages.

Before starting this how-to, make sure you have completed the following prerequisites:

* Install Eclipse
    
    Eclipse is a Java editor which can be downloaded from the [Eclipse Foundation](https://eclipse.org/).

    {{% alert color="info" %}}Mendix recommends using Eclipse to edit your Java code, Yalthough you can use any text editor. Studio Pro contains a [Deploy for Eclipse](/refguide/app-menu/#eclipse) feature which automatically creates everything that needs to be configured so you only have to import the app into your Eclipse working environment.{{% /alert %}}

## 3 Setting Up a Simple App

Before you start, you need to create a simple app in which to create and use your Java actions. The app will store a number of products, each of which is assigned to a category. Each product will be in one of four states which indicates whether it is available from the supplier and whether it is currently in stock.

To create the app, follow these steps:

1. Open Studio Pro and **Create New App** using the **Blank Web App** template.
2. Right-click the module **MyFirstModule** and rename it to **Products**.
3. Create a Domain Model in the Products module consisting of three entities:

    * Category – with attribute
        * Name (string)
    * Product – with attributes
        * Name (string)
        * Description (string)
    * ProductState - with attributes
        * InStock (boolean)
        * Available (boolean)
        * Description (string)
    * Association Product_Category – one Category has many Products
    * Association Product_ProductState - one ProductState has many Products

    The Domain Model should look like this:

    {{< figure src="/attachments/refguide/java-programming/extending-your-application-with-custom-java/domain-model.png" alt="description" max-width="max-width" class="image-border" >}}

4. Right-click one of the entities and **Generate overview pages** for all three entities.
5. Add the `Product_Overview` page to the navigation or home page.
6. Run your app, go to the product overview page, and add some categories, products, and the four product states (for example "Available and In Stock").

Now you have some data to use when building your app.

## 4 Adding a Java Action to Reverse a Product Name

To demonstrate how to add a Java action, we will use Java to reverse the name of a product and display it.

### 4.1 Adding a Java Action to the Products Module

In this section, you will create a new Java action and deploy the app for Eclipse, which creates a file containing the Java class for the action.

1. Right-click the **Products** module and select **Add other** > **Java action**.
2. Enter *ReverseProductName* for the **Name** of the new Java action and click **OK**.
3. In the **Java Action** pane, click **Add** to add a parameter and do the following:</br>

    1. Enter *productParameter* for the **Name** of the new parameter.</br>
    2. Select **Object** for the **Type**.</br>
    3. Click **Select** for **Entity** and select **Products.Product** as the object type.</br>
    4. Click **OK**.</br>

    {{< figure src="/attachments/refguide/java-programming/extending-your-application-with-custom-java/add.png" width="500" >}}

4. Change the **Type** in the **Return** section of the Java action to **String**, change the **Variable name** to *ReversedName*.
5. Click **OK** to save the Java action.

    {{< figure src="/attachments/refguide/java-programming/extending-your-application-with-custom-java/return.png" width="500" class="image-border" >}}

6. Select **App** > **Deploy for Eclipse** from the Studio Pro menu.

By deploying for Eclipse, Studio Pro will generate Java code for all your Java actions. This Java code has three places where you can customize your Java actions:

* You can import additional libraries
* You can add code between `//BEGIN USER CODE` and `//END USER CODE`
* You can add code between `//BEGIN EXTRA CODE` and `//END EXTRA CODE`

Any other changes you make will be overwritten when you deploy your app.

### 4.2 Editing the Java Action in Eclipse

To edit the Java action in Eclipse, open Eclipse and follow these steps:

1. Select **File** > **Import…** from the Eclipse menu.
2. Select **Existing Projects into Workspace** and click **Next >**.
3. In **Select root directory** browse to the root directory of your app.
4. Click **Finish**.

    {{< figure src="/attachments/refguide/java-programming/extending-your-application-with-custom-java/import3.png" width="400" >}}

    {{% alert color="info" %}}If you don't know what the app directory is, select **App** > **Show App Directory in Explorer** in Studio Pro.{{% /alert %}}

5. Search in Eclipse for **ReverseProductName.java** and open it. You can also find it in the **Package Explorer** pane.

    {{< figure src="/attachments/refguide/java-programming/extending-your-application-with-custom-java/searchjavaclass.png" class="image-border" >}}

    In the Java code, there is some placeholder code between the `//BEGIN USER CODE` and `//END USER CODE` comment statements. This is where you can add your own Java code.

    ```java {linenos = false}
    	@java.lang.Override
    	public java.lang.String executeAction() throws Exception
    	{
    		// BEGIN USER CODE
    		throw new com.mendix.systemwideinterfaces.MendixRuntimeException("Java action was not implemented");
    		// END USER CODE
    	}
    ```

    Studio Pro uses your Java action configuration to generate a Product object called `productParameter`. You can use this object to get the name of the product and reverse it.

6. Replace the existing line `throw new com.mendix.systemwideinterfaces.MendixRuntimeException("Java action was not implemented");` between `//BEGIN USER CODE` and `//END USER CODE`, with the code:

    ```java {linenos = false}
    String productName = this.productParameter.getName(this.getContext());
    return new StringBuilder(productName).reverse().toString();
    ```

    This reverses the name of the product.

7. Select **File** > **Save** to save the Java action in Eclipse.

### 4.3 Calling the Java Action from a Microflow

Now you will add a button to the Product_NewEdit page which will use a microflow to display the product name backwards when pressed.

1. Back in Studio Pro, open the **Product_NewEdit page.
2. Add a **Call microflow button** to the page, next to the **Save** and **Cancel** buttons.
3. Select a **New** microflow and call it *ReverseName*. Studio Pro will automatically make the current Product object a parameter to the microflow.
4. Open the **ReverseName** microflow.
5. Drag the **ReverseProductName** Java action from the **App Explorer** into the microflow.
6. In the **Call Java Action** properties editor, select **$Product** from the **Product parameter** drop-down.

    {{< figure src="/attachments/refguide/java-programming/extending-your-application-with-custom-java/product-parameter.png" >}}

13. Click **OK** to save the properties. 
8. Drag a **Show message** activity into the microflow.
15. In the **Show Message** properties editor enter *Reversed name: {1}* for **Template**.
16. In the **Parameters** section, add a **New** parameter with the value **$ReversedName**. This is the output variable of the Java action.
18. Click **OK** to save the parameter. The **Show Message** properties should now look like this:

    {{< figure src="/attachments/refguide/java-programming/extending-your-application-with-custom-java/show-message.png" >}}

19. Click **OK** to save the **Show message** activity. The microflow will be similar to this this:

    {{< figure src="/attachments/refguide/java-programming/extending-your-application-with-custom-java/microflow4.png"  class="image-border" >}}

### 4.4 Deploying and Seeing the Results

1. Click **Run Locally** ({{% icon name="controls-play" %}}) to deploy the application locally, and click **View App** to open the application in your browser.
2. Navigate to the Products overview, and add a new Product, or edit an existing one.
3. Ensure your product has a name, then click **Reverse name**.

    You will see the name of the product in the dialog box, but displayed in reverse.

    {{< figure src="/attachments/refguide/java-programming/extending-your-application-with-custom-java/app2.png" width="400" >}}

## 5 XPath Retrieval in Java {#xpath}

## 6 Troubleshooting {#troubleshooting}

### 6.1 Unsupported Class Version Error

If you get an `UnsupportedClassVersionError` when running your app, follow these steps:

1. Clean your app's **deployment** folder by selecting **App** > **Clean Deployment Directory**.
2. Add the same JDK version to Eclipse as that which you are using in Studio Pro (this is the recommended version correlation). For details on JDK requirements, see the [Mendix Studio Pro](/refguide/system-requirements/#sp) section of *System Requirements*.

### 6.2 Compile Errors

When you deploy your app, Studio Pro will compile all the Java actions. If you have made a mistake in the Java, the action will not compile and you will be shown the error which you will need to correct using Eclipse.

### 6.3 Runtime Errors

When you use your app, you may encounter an error. You can look in the Studio Pro console to see if this is caused by an error in your Java.

## 7 Read More

* [Using Eclipse](/refguide/using-eclipse/)
* [Using the Java API](/refguide/java-api-tutorial/)
