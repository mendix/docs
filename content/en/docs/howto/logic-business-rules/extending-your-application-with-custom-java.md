---
title: "Extend Your Application with Custom Java"
url: /howto/logic-business-rules/extending-your-application-with-custom-java/
category: "Logic & Business Rules"
menu_order: 120
tags: ["microflow", "logic", "java", "extend", "jdk", "custom", "UnsupportedClassVersionError"]
---

## 1 Introduction

Most application logic can be developed using microflows. Microflows are very powerful and contain a lot of the features that you need in every application. To prevent you from getting stuck due to a missing feature, Mendix microflows are extendable. So, whenever you feel something is missing, you can add it yourself with the use of Java actions. 

**This how-to will teach you how to do the following:**

* Extend your application with custom Java code

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisite:

*  Have Eclipse installed (download it [here](https://eclipse.org/))
	{{% alert color="info" %}}You can use any text editor to create custom Java actions, but we highly recommend using Eclipse. Studio Pro contains a **Deploy for Eclipse** feature verifying that everything that needs to be configured in Eclipse is done automatically. All you have to do is import the app into your Eclipse working environment.
	{{% /alert %}}
* Have an app ready using the [Asset Management](https://marketplace.mendix.com/link/component/107652) template.

## 3 Adding a Java Action in Studio Pro

1. Right-click the **AssetManager** module and select **Add other** > **Java action**.
2. Enter *ReverseAssetName* for the **Name** of the new Java action and click **OK**.
3.  In the **Java Action** wizard, click **Add** to add a parameter and do the following:</br>

	1. Enter *inputAssets* for the **Name** of the new parameter.</br>
	2. Select **Object** for the **Type**.</br>
	3. Click **Select** for **Entity** and select **AssetManager.Asset** as the object type.</br>
	4. Click **OK**.</br>

	{{% image_container width="500" %}}![](/attachments/howto/logic-business-rules/extending-your-application-with-custom-java/add.png)
	{{% /image_container %}}

4. Back on the **Java Action** wizard, change the **Return type** of the Java action to **String** and click **OK** to save the Java action.

	{{% image_container width="500" %}}![](/attachments/howto/logic-business-rules/extending-your-application-with-custom-java/return.png)
	{{% /image_container %}}

5. Select **App** > **Deploy for Eclipse** from the top Studio Pro toolbar.

## 4 Editing the Java Action in Eclipse

To edit the Java action in Eclipse, follow these steps:

1.  Open Eclipse, right-click in the **Package Explorer** window, and select **Import**.

2.  In the **Import** window, select **Existing Projects into Workspace** and click **Next**.

3.  Set the app directory as the root directory for this app and click **Finish**.

	{{% image_container width="400" %}}![](/attachments/howto/logic-business-rules/extending-your-application-with-custom-java/import3.png)
	{{% /image_container %}}

	{{% alert color="info" %}}If you don't know what the app directory is, select **App** > **Show App Directory in Explorer** in Studio Pro.
	{{% /alert %}}

4.  Double-click **ReverseAssetName.java** in the **Package Explorer** of Eclipse.

	{{% image_container width="300" %}}![](/attachments/howto/logic-business-rules/extending-your-application-with-custom-java/package-explorer.png)
	{{% /image_container %}}

	In the Java code, there is a placeholder marked with `//BEGIN USER CODE` and `//END USER CODE` comment statements. This is where you can add your own Java code. Studio Pro will never overwrite the code between those two statements.

	```java
		@java.lang.Override
		public java.lang.String executeAction() throws Exception
		{
			this.inputAssets = __inputAssets == null ? null : assetmanager.proxies.Asset.initialize(getContext(), __inputAssets);

			// BEGIN USER CODE
			throw new com.mendix.systemideinterfaces.MendixRuntimeException("Java action was not implemented");
			// END USER CODE
		}
	```

	Studio Pro generates a variable for `inputAssets`. You can use that variable to get the name of the asset and reverse it.

5. Replace the existing line:

	```java
		throw new com.mendix.systemideinterfaces.MendixRuntimeException("Java action was not implemented");
	```
	between `//BEGIN USER CODE` and `//END USER CODE`, with the code:

	```java
	String assetsAssetName = this.inputAssets.getAssetName(this.getContext());
	return new StringBuilder(assetsAssetName).reverse().toString();
	```

6. Select **File** > **Save** to save the Java action in Eclipse.

## 5 Calling the Java Action from a Microflow

1. Back in Studio Pro, locate the **Home** page via **App Explorer**.

2.  Under **{AssetName}**, right-click and select **Add widget**.

	{{% image_container width="300" %}}![](/attachments/howto/logic-business-rules/extending-your-application-with-custom-java/add-widget.png)
	{{% /image_container %}}

3. In the **Select Widget** dialog box that appears, select **Buttons** > **Call microflow button**.

4. In the **Select Microflow** dialog box, click **New** to create a new microflow.

5. Enter *ReverseName* for the **Name** of the new microflow and click **OK**.

6.  Right-click the **Reverse name** button you just created and select **Go to on click microflow** to open the new microflow.

7.  Drag the **ReverseAssetName** Java action from the **App Explorer** onto the line between the green start event and red end event. This generates a Java action activity.

	{{% image_container width="500" %}}![](/attachments/howto/logic-business-rules/extending-your-application-with-custom-java/microflow2.png)
	{{% /image_container %}}

8.  Double-click the generated activity to open the **Call Java Action** properties editor, and then click **Edit** for the first input to open the argument editor.

	{{% image_container width="500" %}}![](/attachments/howto/logic-business-rules/extending-your-application-with-custom-java/call1.png)
	{{% /image_container %}}

9. Press and hold the <kbd>Ctrl</kbd> key and then press the <kbd>spacebar</kbd> to open the code completion editor.

10. Select **$Asset (AssetManager.Asset)**.

	{{% image_container width="500" %}}![](/attachments/howto/logic-business-rules/extending-your-application-with-custom-java/argument.png)
	{{% /image_container %}}

11. Click **OK** to save the expression.

12. In the **Call Java Action** properties editor, change the output **Variable** to *ReversedName*.

	{{% image_container width="500" %}}![](/attachments/howto/logic-business-rules/extending-your-application-with-custom-java/call2.png)
	{{% /image_container %}}

13. Click **OK** to save the properties. The microflow should now look like this:

	{{% image_container width="500" %}}![](/attachments/howto/logic-business-rules/extending-your-application-with-custom-java/microflow3.png)
	{{% /image_container %}}

14. From the **Toolbox** (select **View** > **Toolbox** to open it, if necessary), drag a **Show message** activity into the microflow.

15. Double-click the activity to open the **Show Message** properties editor and enter *Reversed name: {1}* for **Template**.

16. In the **Parameters** section, click **New** to open the expression editor.

17. Select **$ReversedName (String)**, which is the output variable of the Java action.

18. Click **OK** to save the parameter. The **Show Message** properties should now look like this:

	{{% image_container width="500" %}}![](/attachments/howto/logic-business-rules/extending-your-application-with-custom-java/show-message.png)
	{{% /image_container %}}

19. Click **OK** to save the show message activity. The microflow should now look like this:

	{{% image_container width="500" %}}![](/attachments/howto/logic-business-rules/extending-your-application-with-custom-java/microflow4.png)
	{{% /image_container %}}

## 6 Deploying & Seeing the Results

1. Click the play button (**Run Locally**) to deploy the application locally and click **View App** to open the application in your browser.

2. Select **Add asset** from the top right.

3. In the new window input *Asset to Reverse* in the **Name** field.

4. Select **Save**.

5. Select the new asset from the app's **Dashboard**.

3. On the **Home** page, click **Reverse name** for the newly created asset:

	{{% image_container width="200" %}}![](/attachments/howto/logic-business-rules/extending-your-application-with-custom-java/app1.png)
	{{% /image_container %}}

4.  The reversed name of the asset appears in a dialog box.

	{{% image_container width="400" %}}![](/attachments/howto/logic-business-rules/extending-your-application-with-custom-java/app2.png)
	{{% /image_container %}}

## 7 Troubleshooting {#troubleshooting}

If you get an `UnsupportedClassVersionError` when running your app, follow these steps:

1. Clean your app's **deployment** folder by selecting **App** > **Clean Deployment Directory**.

2. Add the same JDK version to Eclipse as that which you are using in Studio Pro (this is the recommended version correlation). For details on JDK requirements, see the [Mendix Studio Pro](/refguide/system-requirements/#sp) section of *System Requirements*.

## 8 Read More

* [Define Access Rules Using XPath](/howto/logic-business-rules/define-access-rules-using-xpath/)
* [Create a Custom Save Button](/howto/logic-business-rules/create-a-custom-save-button/)
* [Work with Lists in a Microflow](/howto/logic-business-rules/working-with-lists-in-a-microflow/)
* [Optimize Retrieve Activities](/howto/logic-business-rules/optimizing-retrieve-activities/)
* [Set Up Error Handling](/howto/logic-business-rules/set-up-error-handling/)
* [Optimize Microflow Aggregates](/howto/logic-business-rules/optimizing-microflow-aggregates/)
* [Extract & Use Sub-Microflows](/howto/logic-business-rules/extract-and-use-sub-microflows/)
