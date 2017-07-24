---
title: "Extending Your Application with Custom Java"
category: "Logic & Business Rules"
---

Most application logic can be developed using Microflows. They are very powerful and contain a lot of features that you need in every application. To prevent you from getting stuck because of a missing feature, we made Microflows extendable. So whenever you feel something is missing you can add it yourself by use of Java actions. In this how-to you will extend your application with custom java code.

## 1\. Preparation

Before you start with this how-to please complete the following prerequisites:

*   [Create and Deploy Your First App](create-and-deploy-your-first-app)
*   You need Eclipse: download it [here](https://eclipse.org/)

{{% alert type="info" %}}

You can use any text editor to create custom Java actions, but we highly recommend using Eclipse. The Mendix Modeler contains a 'Deploy for Eclipse' feature that makes sure that everything that needs to be configured in Eclipse is done automatically for you. You only need to import the project into your Eclipse working environment and you're done.

{{% /alert %}}

## 2\. Adding Java Actions in the Mendix Modeler

1.  Right click the module **MyFirstModule** and select **Add > Resources > Java action** from the menu.![](attachments/8784371/8946353.png)
2.  Name the new Java action **ReverseCustomerName** and click **OK.**
    ![](attachments/8784371/8946354.png)
3.  Click **Add **to add a parameter.
    ![](attachments/8784371/8946356.png)
4.  Name the parameter **inputCustomer** and select **Object** as type.
5.  Click **Select...** and select **MyFirstModule.Customer** as object type.
6.  Click **OK.**
    ![](attachments/8784371/8946357.png)
7.  Change the return type of the java action to **String** and click **OK** to save the java action.![](attachments/8784371/8946360.png)
8.  Select **Deploy for Eclipse** from the project menu in the Mendix Modeler.![](attachments/8784371/8946361.png)

## 3\. Editing the Java Action in Eclipse

1.  Open **Eclipse** and **right click** somewhere in the package explorer.
2.  Select **Import...** from the menu. 
    ![](attachments/8784371/8946362.png)
3.  Select **Existing Projects into Workspace** and click **Next.
    **![](attachments/8784371/8946363.png)
4.  Set the project directory as root directory for this project and click **Finish.**![](attachments/8784371/8946364.png)

    If you don't know what the project directory is, click **Show Project Directory in Explorer** of the **Project** menu in the Mendix Modeler.![](attachments/8784371/8946380.png)
5.  Double click the **ReverseCustomerName.java** in the package explorer of Eclipse.![](attachments/8784371/8946365.png)
    In the Java code there is a placeholder marked with "//BEGIN USER CODE" and "//END USER CODE" comment statements. This is where you can add your own java code. The Business modeler will never overwrite the code between those two statements. ![](attachments/8784371/8946366.png)
    As you can see, the Mendix Modeler generated a variable for the input customer object name 'inputCustomer'. You can use that variable to get the name of the customer and reverse it like this:

    ```java
    		String customerName = this.inputCustomer.getName(this.getContext());
    		return new StringBuilder(customerName).reverse().toString();
    ```

6.  Insert the above code between the **//BEGIN USER CODE **and **//END USER CODE** comment statements. It should look like this:![](attachments/8784371/8946367.png)
7.  Save the Java action in Eclipse.
    ![](attachments/8784371/8946381.png)

## 4\. Calling the Java Action from a Microflow

1.  Open the Mendix Modeler and locate the **Customer_Overview** page.
2.  Add a new **Microflow** button to the control bar of the data grid and change the caption to **Reverse Name**.![](attachments/8784371/8946368.png)
3.  Right click the new Microflow button and click **Select microflow...**.![](attachments/8784371/8946369.png)
4.  Name the new Microflow **Customer_ReverseName** and click **OK**.
    ![](attachments/8784371/8946370.png)
5.  Open the new Microflow, it should look like this:
    ![](attachments/8784371/8946371.png)
6.  Drag and drop the **Java action** from the project explorer onto the line between the green start and red end event. This generates a java action activity.
    ![](attachments/8784371/8946372.png)
7.  Double click the generated activity to open the **properties** editor.
    ![](attachments/8784371/8946373.png)
8.  Double click the first argument to open the **expression editor**.
9.  Press and hold the **Ctrl** button and press **space.** This opens code completion.
10.  Select **$Customer**.
    ![](attachments/8784371/8946374.png)
11.  Click **OK** to save the expression.
12.  Change the **Output variable** into **ReversedName.
    **![](attachments/8784371/8946375.png)
13.  Click **OK** to save the properties. The Microflow should now look like this:
    ![](attachments/8784371/8946383.png)
14.  Open the toolbox. It should be on the bottom right of the Mendix Modeler.
    ![](attachments/2949137/3080422.png)
15.  If you can't find the toolbox, you can re-open it from the view menu.
    ![](attachments/2949137/3080419.png)
16.  Drag and drop a show message activity from the toolbox to the line between the green start and red end event.
17.  Double click the activity to open the properties editor.
18.  Fill in **Reversed name: {1}** as Template. 
    ![](attachments/8784371/8946376.png)
19.  Add a new parameter by clicking the **New** button. This opens the expression editor.
20.  Press and hold the **Ctrl** button and press **space.** This opens code completion.
21.  Select **$ReversedName.** This is the output variable of the Java action.
    ![](attachments/8784371/8946378.png)
22.  Click **OK** to save the parameter. The show message properties should now look like this:![](attachments/8784371/8946379.png)
23.  Click **OK** to save the show message activity. This Microflow should now look like this:
    ![](attachments/8784371/8946384.png)

## 5\. Deploy and See the Results

1.  Click **Run in Sandbox** to deploy the application to the cloud. The Mendix Modeler automatically commits the changes to TeamServer (version control).
    ![](attachments/8784276/8946349.png)
2.  As soon as the deployment process is complete, click **View App** to open the application in your browser.
    ![](attachments/8784276/8946352.png)
3.  Open the customers overview, select a row and click the **Reverse Name** button. You should now see a message pop-up with the reversed customer name.

## 6\. Related content

*   [Defining access rules using XPath](defining-access-rules-using-xpath)
*   [Triggering Logic using Microflows](triggering-logic-using-microflows)
*   [Creating a Custom Save Button](creating-a-custom-save-button)
*   [Extending Your Application with Custom Java](extending-your-application-with-custom-java)
*   [Working With Lists in a Microflow](working-with-lists-in-a-microflow)
