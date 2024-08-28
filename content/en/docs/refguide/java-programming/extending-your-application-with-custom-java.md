---
title: "Extending Your Application with Custom Java"
linktitle: "Extending App with Custom Java"
url: /refguide/extending-your-application-with-custom-java/
weight: 30
description: "Describes how to extend your application with custom Java code."
# Linked from https://www.mendix.com/blog/easy-xpath-retrieval-in-java/ - please ask for this to be changed and redirect if moved
---

## Introduction

Most application logic can be developed using [microflows](/refguide/microflows/) and [nanoflows](/refguide/nanoflows/). These are very powerful and contain most of the features you need in every application. However, If there is a feature missing you can extend Mendix microflows with the use of Java actions. 

This document teaches you how to do the following:

* Extend your application with custom Java code you can call from a microflow
* Use the [Mendix Runtime API](/apidocs-mxsdk/apidocs/runtime-api/) to retrieve data from the database using an XPath in a Java action

## Prerequisites {#prerequisites}

This how-to assumes that you are familiar with using Studio Pro to create a simple app with a Domain Model, Pages, and Microflows.

Before starting this how-to, Mendix recommends that you install Eclipse. Eclipse is a Java editor which can be downloaded from the [Eclipse Foundation](https://eclipse.org/).

{{% alert color="info" %}}
Mendix recommends using Eclipse to edit your Java code, although you can use any text editor. Studio Pro contains a [Deploy for Eclipse](/refguide/app-menu/#eclipse) feature which automatically configures everything so you only have to import the app into your Eclipse working environment.
{{% /alert %}}

## Setting Up a Simple App{#simple-app}

Before you start, you need to create a simple app in which to create and use your Java actions. The app will store a number of products, each of which is assigned to a category. Each product has an indication as to whether it is available or not.

To create the app, follow these steps:

1. Open Studio Pro and **Create New App** using the **Blank Web App** template.
2. Right-click the module **MyFirstModule** and rename it to **Products**.
3. Create a Domain model in the Products module consisting of three entities:

    * Category – with attribute
        * Name (string)
    * Product – with attributes
        * Name (string)
        * Description (string)
    * ProductState - with attributes
        * Available (boolean)
        * Description (string)
    * Association Product_Category – one Category has many Products
    * Association Product_ProductState - one ProductState has many Products

    The Domain Model should look like this:

    {{< figure src="/attachments/refguide/java-programming/extending-your-application-with-custom-java/domain-model.png" alt="description" >}}

4. Right-click one of the entities and **Generate overview pages** for all three entities.
5. Add the `Product_Overview` page to the navigation or home page.
6. Run your app, go to the product overview page, and add some categories, products, and the two product states for availability true or false.

Now you have some data to use when building your app.

{{% alert color="info" %}}
The examples below use categories which include "book" and products with the name "The Lord of the Rings".
{{% /alert %}}

## Adding a Java Action to Reverse a Product Name

To demonstrate how to add a Java action, you will use Java to reverse the name of a product and display it.

### Adding a Java Action to the Products Module{#add-java-action}

In this section, you will create a new Java action and deploy the app for Eclipse, which creates a file containing the Java class for the action.

1. Right-click the **Products** module and select **Add other** > **Java action**.
2. Enter *ReverseProductName* for the **Name** of the new Java action and click **OK**.
3. In the **Java Action** pane, click **Add** to add a parameter and do the following:</br>

    1. Enter *productParameter* for the **Name** of the new parameter.</br>
    2. Select **Object** for the **Type**.</br>
    3. Click **Select** for **Entity** and select **Products.Product** as the object type.</br>
    4. Click **OK**.</br>

    {{< figure src="/attachments/refguide/java-programming/extending-your-application-with-custom-java/add.png" width="500" class="no-border" >}}

4. Change the **Type** in the **Return** section of the Java action to **String**, change the **Variable name** to *ReversedName*.
5. Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save the Java action.

    {{< figure src="/attachments/refguide/java-programming/extending-your-application-with-custom-java/return.png" width="500" >}}

6. Select **App** > **Deploy for Eclipse** from the Studio Pro menu.

By deploying for Eclipse, Studio Pro generates Java code for all your Java actions. This Java code has three places where you can customize your Java actions:

* You can import additional libraries
* You can add code between `//BEGIN USER CODE` and `//END USER CODE`
* You can add code between `//BEGIN EXTRA CODE` and `//END EXTRA CODE`

Any other changes you make will be overwritten when you deploy your app.

### Editing the Java Action in Eclipse

To edit the Java action in Eclipse, open Eclipse and follow these steps:

1. Select **File** > **Import…** from the Eclipse menu.
2. Select **Existing Projects into Workspace** and click **Next >**.
3. In **Select root directory** browse to the root directory of your app.
4. Click **Finish**.

    {{< figure src="/attachments/refguide/java-programming/extending-your-application-with-custom-java/import3.png" width="400" class="no-border" >}}

    {{% alert color="info" %}}If you don't know what the app directory is, select **App** > **Show App Directory in Explorer** in Studio Pro.{{% /alert %}}

5. Search in Eclipse for **ReverseProductName.java** and open it. You can also find it in the **Package Explorer** pane.

    {{< figure src="/attachments/refguide/java-programming/extending-your-application-with-custom-java/searchjavaclass.png" >}}

    In the Java code, there is some placeholder code between the `//BEGIN USER CODE` and `//END USER CODE` comment statements. This is where you can add your own Java code.

    ```java {hl_lines="4-6"}
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

    ```java
    String productName = this.productParameter.getName(this.getContext());
    return new StringBuilder(productName).reverse().toString();
    ```

    This reverses the name of the product.

7. Select **File** > **Save** to save the Java action in Eclipse.

### Calling the Java Action from a Microflow

Now you will add a button to the Product_NewEdit page which uses a microflow to display the product name backwards when pressed.

1. Back in Studio Pro, open the **Product_NewEdit** page.
2. Add a **Call microflow button** to the page, next to the **Save** and **Cancel** buttons.
3. Select a **New** microflow and call it *ReverseName*. Studio Pro automatically makes the current Product object a parameter to the microflow.
4. Open the **ReverseName** microflow.
5. Drag the **ReverseProductName** Java action from the **App Explorer** into the microflow.
6. In the **Call Java Action** properties editor, select **$Product** from the **Product parameter** drop-down.

    {{< figure src="/attachments/refguide/java-programming/extending-your-application-with-custom-java/product-parameter.png" class="no-border" >}}

7. Click **OK** to save the properties. 
8. Drag a **Show message** activity into the microflow.
9. In the **Show Message** properties editor enter *Reversed name: {1}* for **Template**.
10. In the **Parameters** section, add a **New** parameter with the value **$ReversedName**. This is the output variable of the Java action.
11. Click **OK** to save the parameter. The **Show Message** properties should now look like this:

    {{< figure src="/attachments/refguide/java-programming/extending-your-application-with-custom-java/show-message.png" class="no-border" >}}

12. Click **OK** to save the **Show message** activity. The microflow will be similar to this:

    {{< figure src="/attachments/refguide/java-programming/extending-your-application-with-custom-java/microflow4.png"  >}}

### Deploying and Seeing the Results

1. Click **Run Locally** ({{% icon name="controls-play" %}}) to deploy the application locally, and click **View App** to open the application in your browser.
2. Navigate to the **Product overview**, and add a new Product, or edit an existing one.
3. Ensure your product has a name, then click **Reverse name**.

    You will see the name of the product in the dialog box, but displayed in reverse.

    {{< figure src="/attachments/refguide/java-programming/extending-your-application-with-custom-java/app2.png" width="400" class="no-border" >}}

## XPath Retrieval in Java {#xpath}

Using the [Mendix Runtime API](/apidocs-mxsdk/apidocs/runtime-api/), your Java actions can interact with many parts of your app. One thing that many developers want to do is to retrieve a list of objects using an [XPath Constraint](/refguide/xpath-constraints/). This section describes how to implement an XPath retrieval in a Java action.

Using the Domain Model you set up in [Setting Up a Simple App](#simple-app), above, you want to retrieve a list of Products which meet the following criteria:

* Have a specified name
* Belong to a given category
* Are available

The example skips many features you would want to add to a real app, but is designed for simplicity.

### XPath in Microflow

Firstly, a reminder of how this XPath could be implemented in a Retrieve activity. You can use this XPath in a Retrieve activity in a microflow using the following steps:

1. Create a new microflow in the **Products** module and name it *ListWithRetrieve*.
2. Add a **Retrieve** activity and configure it as follows:

    * Source: From database
    * Entity: Products.Category
    * XPath constraint: Select a single category you know exists, for example `[(Name = 'Book')]`
    * Range: First
    * Output > Type: Products.Category
    * Output > Object Name: Category

    This will retrieve a category for us to use in the XPath.

3. Add a second **Retrieve** activity and configure it as follows:

    * Source: From database
    * Entity: Products.Product
    * XPath constraint:

        ```xpath
        [Products.Product_ProductState/Products.ProductState[
        Available = true ()
        ]]
        [Products.Product_Category = $Category]
        [Name = 'The Lord of the Rings']
        ```

    * Range: All
    * Output > Type: List of Products.Product
    * Output > Object Name: ProductList

4. Set the End Event to return **$ProductList** as a **Return type** *List of Products.Product*.
5. Now add a **Responsive (Web)** page to the Products module with the following characteristics:

    * Page name: *MicroflowProductList*
    * Layout: **Grids** > **Grid**

6. Set the **Data source** to be the Microflow **Products.ListWithRetrieve** and allow the grid to be filled automatically (paging controls are not necessary).
7. Configure the **New Product** and **Edit** ({{% icon name="pencil" %}}) buttons to open the **Product_NewEdit** page. Alternatively, you can just delete these two buttons.
8. Go to the **Home_Web** page and drag the **MicroflowProductList** page onto it, so that a button is added to the page.
9. Run your app locally.

    Clicking the **Microflow product list** button will display all Products named "The Lord of the Rings" with the Category "Book" which are `Available`. You may have to add some examples using the **Product Overview** if none are displayed.

### XPath in a Java Action

To use this same XPath in a Java action called from a microflow, perform the following steps:

1. Add a new Java action using the instructions in [Adding a Java Action to the Products Module](#add-java-action). The Java action has the following configuration:

    * Name – *findProductByNameAndCategory*
    * Parameters:
        * name – a **String**
        * category -  an **Object** of type **Products.Category**
    * Return > Type – **List** of **Products.Product** with the **Variable name** *ProductList*

    {{< figure src="/attachments/refguide/java-programming/extending-your-application-with-custom-java/java-action-2.png" width="400" class="no-border" >}}

2. Deploy the app for Eclipse using the menu item **App** > **Deploy for Eclipse**.
3. Search in Eclipse for **findProductByNameAndCategory.java** and open it. If the package was already open in Eclipse, you may need to refresh the editor using <kbd>F5</kbd>.

    You will now add the Java code to retrieve the product list using an XPath.

    Using raw strings in XPath is generally recognized as a bad practice. Using strings you will not get compile errors if the domain model changes. You can avoid this by using format strings and the proxy classes generated by Mendix Studio Pro. As soon as the domain model changes, the proxy classes are regenerated, and the identifiers used in this code will become unresolvable, resulting in compiler errors.

    First you need to import the classes you will use.

4. Add the following `import` statements after the generated import statements in the Java file:

    ```java
    import java.util.List;
    import com.mendix.core.Core;
    import products.proxies.Product;
    import products.proxies.ProductState;

    ```

    And now add the XPath code.

5. Add the following instructions between `//BEGIN USER CODE` and `//END USER CODE` to build the XPath and execute it. This replaces the placeholder command to throw a runtime exception.

    ```java
   	//create the xpath
	String xpath = String.format("//%s[%s/%s[%s = true()]][%s = $Category][%s = '%s']",
			Product.entityName,
			Product.MemberNames.Product_ProductState, ProductState.entityName,
			ProductState.MemberNames.Available,
			Product.MemberNames.Product_Category, 
			Product.MemberNames.Name, name
	        );
    //execute the xpath and return the list of products found
	return Core.createXPathQuery(xpath)
			.setVariable("Category", __category)
			.execute(getContext());
    ```

    {{% alert color="info" %}}This, simplified, approach should be made more robust in a real app by checking and sanitizing the inputs to prevent exceptions or attempts at hacking if the end-user can formulate the search.<br/><br/>Alternatively, you can use the XPath class from the [Community Commons](/appstore/modules/community-commons-function-library/) module, which provides a powerful way of working with XPaths and performs checks automatically.
    {{% /alert %}}

6. Select **File** > **Save** to save the Java action in Eclipse.
7. In Studio Pro, **Duplicate** the **ListWithRetrieve** microflow you created in the previous section and **Rename** it *ListWithJavaAction*.
8. Edit the **ListWithJavaAction** microflow.
9. Delete the second **Retrieve** activity.
10. Drag the **findProductByNameAndCategory** Java action to the end of the microflow
11. Configure the inputs of the **findProductByNameAndCategory** Java action as follows:

    * Name: a product name which exists in your data, for example 'The Lord of the Rings'
    * Category: $Category

    {{< figure src="/attachments/refguide/java-programming/extending-your-application-with-custom-java/call-java-action.png" width="400" class="no-border" >}}
12. **Duplicate** the **MicroflowProductList** page and **Rename** it *JavaActionProductList*.
13. Open the **JavaActionProductList** page.
14. Set the **Data source** for the data grid to be to be the Microflow **Products.ListWithJavaAction**.
15. Go to the **Home_Web** page and drag the **JavaActionProductList** page onto it, so that a button is added to the page.
16. Run your app locally.

    Clicking the **Java action product list** button will display all Products named "The Lord of the Rings" with the Category "Book" which are Available. You may have to add some examples using the **Product Overview** if none are displayed.

## Troubleshooting {#troubleshooting}

### Unsupported Class Version Error

If you get an `UnsupportedClassVersionError` when running your app, follow these steps:

1. Clean your app's **deployment** folder by selecting **App** > **Clean Deployment Directory**.
2. Add the same JDK version to Eclipse as that which you are using in Studio Pro (this is the recommended version correlation). For details on JDK requirements, see the [Mendix Studio Pro](/refguide/system-requirements/#sp) section of *System Requirements*.

### Compile Errors

When you deploy your app, Studio Pro will compile all the Java actions. If you have made a mistake in the Java, the action will not compile and you will be shown the error which you will need to correct using Eclipse.

### Runtime Errors

When you use your app, you may encounter an error. You can look in the Studio Pro console to see if this is caused by an error in your Java.

## Read More

* [Using Eclipse](/refguide/using-eclipse/)
* [Using the Java API](/refguide/java-api-tutorial/)
