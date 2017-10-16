---
title: "SAP Purchase Order Approval"
parent: "sap-tutorials"
description: "Learn the basics of Mendix development and how to extend the SAP Purchase Order Approval app."
tags: ["SAP", "purchase order", "ES4"]
---

## 1 Introduction

This tutorial takes you through the basics of development in the Mendix Desktop Modeler and teaches you how to build an approval step in the SAP Purchase Order Approval App. The approval is invoked from the Mendix app and will trigger a request to the SAP Gateway Demo System (ES4).

**This how-to will teach you how to do the following:**

* Add the SAP Gateway Demo System (ES4) credentials to the app
* Change the UI by modifying and adding pages
* Add business logic by selecting microflows
* Define the data structures using entities in the domain model
* Send requests to the SAP Gateway Demo System (ES4)

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Create a free [Mendix Account](https://www.mendix.com/sign-up/SAP)
* Open and log in to the [Mendix Desktop Modeler](https://appstore.home.mendix.com/link/modelers/) (this tutorial was written for Desktop Modeler version **7.5.1**)
* Request the authentication credentials required to connect with the SAP Gateway Demo System (ES4) by registering [here](https://register.sapdevcenter.com/SUPSignForms/)

## 3 Starting with the SAP Purchase Order Approval App

To start this tutorial, go to the [Mendix Developer Portal](https://sprintr.home.mendix.com/index.html) and follow these steps:

1.  Click **Create App** in the upper-right corner of the screen.
2.  Go to the **SAP** tab and select **SAP Purchase Order Approval Tutorial**.
3.  Click **Use this app**.
4.  Enter *SAP Purchase Order Approval App* for the name of the new app, and click **Create App**.
5.  Sign in to SAP Cloud Platform:

    ![](attachments/sap-purchase-order-approval/01-sap-login.png)

6.  Select the **Region**, **Domain**, **Organization**, and **Space** that you want to use:

    ![](attachments/sap-purchase-order-approval/02-create-development.png)

7.  Verify that the environment has been created successfully:

    ![](attachments/sap-purchase-order-approval/03-confirm-dev-created.png)

8. Click **Edit App** to edit the app in the Mendix Desktop Modeler.
    * If you see the **Version Selection** pop-up window, select version **7.5.1**

## 4 Configure the TechEd Settings
You are following this tutorial from TechEd, which means you are using a proxy. Follow these steps to configure the deployment and proxy settings:

1. In the Desktop Modeler, go to **Edit > Preferences**.
2. Set the **JDK directory** to *D:\SAP\JavaVM\NTAMD64\sapjvm_8.1.030\sapjvm_8*.
3. Click **OK** to save the properties.

    ![](attachments/sap-teched-manage-products/04-jdk-settings.png)

{{% alert type="info" %}}

If this setting is already configured in your Modeler, you can leave it as it is.

{{% /alert %}}

## 5 Running the App for the First Time

Now that you've created the credentials, you can run the app and have it connect with the SAP Gateway Demo System (ES4) system.

To run the app for the first time, follow these steps:

1.  Click **Run** > **Run Locally**:

    ![](attachments/sap-purchase-order-approval/04-run-locally.png)

    If you see the pop-up window asking if you want to create a database, select **Yes**.
2. Wait until the startup of the app has finished and the app is running.
3. Click **View** to view the app in your browser:

    ![](attachments/sap-purchase-order-approval/05-view-button.png)

4. Enter your ES4 credentials and click **Login**:

    ![](attachments/sap-teched-purchase-order-approval/06-enter-credentials.png)

5.  You will now see the Purchase Order Approval App in the browser:

    ![](attachments/sap-purchase-order-approval/06-purchase-orders-app.png)

In the following steps, you will implement the purchase order approval functionality.

## 6 Creating an Approval Object Container

In Mendix, the data structure of an application is captured in entities that you can find in the domain model.

To create the data structure for an approval input object, follow these steps:

1. Open the **Domain Model** of **MyFirstModule**.

    ![](attachments/sap-purchase-order-approval/10-domain-model.png)

2. Right-click the main editor of the window and select **Add entity**.
3. Double-click the entity to open its properties:<br>
4. Enter *ApprovalDialog* for the **Name** (make sure there are no spaces in the name!).<br>
5. Set the **Persistable** property to **No**.<br>
6. On the **Attributes** tab, click **New** to add a new attribute and do the following:<br>
  a. Enter *Note* for its **Name**.<br>
  b. Set the **Length** of the attribute **Type** (**String**) to **Unlimited**.<br>
7.  On the **Associations** tab, add an association to the **PurchaseOrder** entity of the **SAPPurchaseOrderApprovalConnector** module (by searching for "PurchaseOrders" or by expanding the modules and selecting the entity as in the screenshot below):<br>

    ![](attachments/sap-purchase-order-approval/11-association-dialog.png)

Now that you've defined the data structure, you can move on to creating the button and business logic for opening a custom approval dialog window.

## 7 Adding an Approve Button

Buttons in Mendix open pages or invoke microflows. Microflows in Mendix are used to define business logic.

To add an **Approve** button to the home page, follow these steps:

1. Search (using <kbd>Ctrl</kbd> + <kbd>G</kbd>) for **Homepage [MyFirstModule]**, select it, and click **Go to**. This is the starting page of the app.
2.  Scroll to the bottom of the page, right-click the **MyFirstModule.ButtonToolbar** snippet, and select **Show snippet**.

    ![](attachments/sap-purchase-order-approval/07-button-toolbar-snippet.png)

3. Right-click in the snippet area and select **Add widget** > **Button** > **Call microflow button**. Microflows consist of microflow actions, which trigger basic operations such as creating, changing, and deleting objects as well as aggregating object lists and showing messages.

4. In the **Select Microflow** dialog window, click **New** to create a new microflow and enter *ACT_OpenApproveDialog* for the **Name**. For details on Mendix naming convention best practices, see [Mendix Development Best Practices](https://docs.mendix.com/howtogeneral/bestpractices/dev-best-practices).
5. Select the button you just created and change the **Caption** to *Approve*.
6. In the Properties pane on the right, change the **Button Style** to *Success*.<br>

    ![](attachments/sap-purchase-order-approval/08-button-caption.png)

6.  Click **Run Locally** and then **View** to view the app in your browser.
7.  The new **Approve** button will appear in the bottom-right of the page. Click it and observe that nothing happens. You will create business logic in the microflow in one of the coming sections to make that button work.

  ![](attachments/sap-purchase-order-approval/09-approve-button.png)

Nice work. Continue below for creating business logic in the microflow so the approve button will actually trigger an action.

## 8 Creating Logic for the Approve Button

Follow these steps to create some simple logic to open the approval dialog pop-up.

1. Search (using <kbd>Ctrl</kbd> + <kbd>G</kbd>) for **ACT_OpenApproveDialog**, select it, and click **Go to**. This is the microflow you added in chapter 6.
2. Right-click the line between the green en red dots in the microflow editor and select **Insert > Activity**.
3. Double-click the new activity, select **Create object** and click **Select**.
4. In the Create Object dialog, click **Select** and select the **ApproveOptionalText** entity.

  ![](attachments/sap-purchase-order-approval/12-select-entity.png)

5. Click **New** to add a member.
6. Select *PurchaseOrdersModel.ApproveOptionalText_PurchaseOrder* as member.
7. Enter *``$PurchaseOrder``* in the Value text area.

  ![](attachments/sap-purchase-order-approval/13-edit-change-item.png)

8. Click **OK** to close the dialog window.
9. Add another **Activity** to the right of the one you just created.
10. Double-click the Activity to select the type of action.
11. Select **Show Page** and click **Select**.

  ![](attachments/sap-purchase-order-approval/14-show-page.png)

12. In the Show Page dialog select the **NewApproveOptionalText** as object to pass.
12. Click **Select** to select a page and click **New** to add a new page.
13. In the Create Page dialog:<br>
  a. Change the **Page name** to *Approve_Popup*.<br>
  b. Change the **Navigation layout** to *PopupLayout (NavigationLayouts)*.<br>
  c. Select **Form basic vertical**.<br>
14. Click **OK** to create the new page and close the dialog windows.
15. Run the app locally and click the **Approve** button to see what happens.

Nice work. You have added business logic to the microflow that will ensure that a fresh object is shown in the dialog pop-up. In the next section you will change the popup.

## 9 Change the Approval Dialog Pop-Up

To create a basic approval dialog page, follow these steps:

1. In the **ACT_OpenApproveDialog** microflow, right-click the **Show page** activity and select **Go to page**.
2. In the **Properties** for the **ApprovalDialog** page, change the **Title** to *Approve the purchase order?*.
4. Double-click the **Text** area and:<br>
  a. Set **Placeholder text** to *Add a comment*.<br>
  b. Set **Show label** to *No*.
5. Click **OK** to save the properties.
6. Double-click the **Save** button to open its properties and:<br>
  a. Change the **Caption** to *Approve*.<br>
  b. Change the **On click** action to *Call a microflow*.
7. Click **New** in the Select Microflow dialog and name it *ACT_ApprovePurchaseOrder*.
8. Click **OK** to close the dialog windows.
9. Open the properties of the **Cancel** button and change the Render mode to **Link**.
10. Run the app locally and view it in your browser.
11. Click **Approve**. A new dialog window will open:

  ![](attachments/sap-purchase-order-approval/18-approve-dialog.png)

12. Click **Approve** to confirm the Purchase Order.

Nice work, although you see nothing happens when you click the **Approve** button. This makes sense because there is no business logic added in the microflow *ACT_ApprovePurchaseOrder*. This is what you are going to do in the next section.

## 10 Creating Business Logic to Approve a Purchase Order

Follow these steps to create more complex logic to approve a purchase order and push it to SAP Cloud:

1. In the **Approve_Popup** page in the *MyFirstModule* module, right-click the **Approve** button you created in the previous section, and select **Go to microflow**.
2. Right-click the line between the green start event and the red end event and select **Insert > Activity**.

    ![](attachments/sap-purchase-order-approval/15-add-activity.png)

3. Double-click the activity, select **Retrieve** and click **Select**.
4. In the Retrieve Objects dialog window, set the **Association** to **ApproveOptionalText_PurchaseOrder**.
5. Click **OK** to close the dialog window.
6. Add an **Activity** to the right of the retrieve.
7. Select **Microflow call** as **Type of Action** for this activity.
8. In the Call Microflow dialog window, set:<br>
  a. the microflow action to **Con_ApprovePurchaseOrder**.<br>
  b. the value of the **PurchaseOrderID** to ``$PurchaseOrder/POId``.<br>
  c. the **Edit parameter value** of Note to ``$ApproveOptionalText/Text``.<br>
9. Click **OK** to close the dialog window.<br>
10. Add a **Close page** activity after the second activity.

    ![](attachments/sap-purchase-order-approval/16-close-page.png)

11. Add an **Exclusive split** after the **Close page** activity and open its properties:<br>
  a. Change the **Caption** to *Success?*<br>
  b. Change the **Expression** to ``if $ApprovePurchaseOrder != empty then $ApprovePurchaseOrder/Success else false``.<br>
12. Click **OK** to close the dialog window.
13. Right-click the red arrow and set the **Conditional value** to **true**.
14. Add a **Show message** activity to the true flow.
15. Change the template in the Show Message dialog window to *Purchase Order approved.*.
16. Click **OK** to close the dialog window.
17. Add a **Microflow call** activity after the message.
18. Select the *SUB_RefreshPageData* microflow as the microflow action.
19. Click **OK** to save the settings.
20. Add a **Merge** after the last **Microflow call**.
21. Drag an arrow from the **Exclusive split** to the **Merge** and you will see that the condition value will automatically been set to **False**.

  ![](attachments/sap-purchase-order-approval/17-split.png)

22. Run the app locally and view it in your browser.
23. Click **Approve**.
24. Add a comment in the comment section (for example, *Test approval*), then click **Approve**.

  ![](attachments/sap-purchase-order-approval/19-approval-popup.png)

Congratulations on extending the SAP Purchase Order Approval App and finishing this tutorial!
