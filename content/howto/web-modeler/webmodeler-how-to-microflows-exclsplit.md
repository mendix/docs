---
title: "Configure an Exclusive Split Step 1: Add Entities and Attributes to the Domain Model, and Configure a Microflow"
category: "Web Modeler"
description: "This how to describes the process of configuring an exclusive split in the Mendix Web Modeler."
tags: ["web modeler", "microflows", "exclusive split", "domain model"]
---

## 1 Introduction

This how-to explains how you can configure an exclusive split in the Microflow editor of the Web Modeler. 

An exclusive split is an activity which is used to model conditions or decisions in the logic of your app. For more information on the exclusive split, see [Exclusive Split](../../refguide/web-modeler/microflows-exclusive-split-wm). 

**This how-to will teach you how to do the following:**

* Add entities and attributes necessary to configure the exclusive split
* Configure the exclusive split with the boolean type of parameter or attribute
* Configure the exclusive split with the enumeration type of parameter or attribute

This how-to describes the following use case: 

You have an online shopping app. You will create a page where you can manage your customer's details, i.e, name, grade, and the customer's status (active or blocked). 

You will also create a page with the list of customers. Upon clicking a specific button on this page, different pages (order forms) will be shown to customers with different grades: Bronze, Silver, and Gold. 

Customers can make an order from this page. However, if the blocked user tries to make the order, the app will show them an error message and close the current page.  

## 2 Prerequisites 

To start this tutorial, make sure you have completed the following prerequisites:

* Create a [Mendix account](https://signup.mendix.com/link/signup/?source=direct)
* [Create an app](../tutorials/start-with-a-blank-app-1-create-the-app)

## 3 Configuring the Exclusive Split with the Attribute of the Enumeration Type  

In this example we will create a microflow and configure the exclusive split when you want to open different order forms depending on the customer grade. 

This use case will require an exclusive split with attribute of the enumeration type (list of predefined values). For more information on types of attributes, see [Attribute Types](../../refguide/web-modeler/domain-models-attributes-wm). 

### 3.1 Adding an Entity and an Attribute to the Domain Model 

The app will open the corresponding page depending on the grade of a customer, for this we need to create a new entity and a new attribute first. To create the new entity and attribute, do the following:

1. Open your [domain model](../../refguide/web-modeler/domain-models-wm).
2. Create entity *Customer*. For more information on how to create the entity, see section [3 Adding New Entities](../../refguide/web-modeler/domain-models-wm).
3. For the **Customer** entity, create attribute (for more information on how to create the attribute, see section [4 Adding New Attributes](../../refguide/web-modeler/domain-models-wm)) and do the following:<br />
  a. Set the attribute **Name** to *Grade*.<br />
  b. Set the [**Type**](../../refguide/web-modeler/domain-models-attributes-wm) to **Enumeration**.<br />
  c. Click **Select enumeration** to create a new enumeration.<br />

  ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-create-new-attribute-enumeration.png)

  d. In the **Select enumeration** dialog window, click **New**.<br />
  e. In the **Create new enumeration** dialog window, click **Add Item** (*Grade* is filled out automatically for the **Name**).<br />

  ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-new-enumeration-add-item.png)

  f. Enter *Bronze* for the **Caption** (**Name** is filled out as *Bronze* automatically as well).<br />

  ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-new-enumeration-add-item-bronze.png)

  g. Click **Add Item** and repeat the step above to create the **Silver** and **Gold** grades.<br />
  h. Click **Create** to close the dialog windows and create the new attribute.

  ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-new-enumeration-bronze-silver-gold.png)

The new attribute is created.

![](attachments/webmodeler-how-to-microflows-exclsplit/wm-grade-attribute.png)

### 3.2 Configuring a Microflow 

To configure the exclusive split with the attribute or parameter of the enumeration type, follow these steps:

1. [Create a new microflow](../../refguide/web-modeler/microflows-wm) and name it, for example, *Show_grade_specific_page*.
2.  In the **Toolbox** tab, select the exclusive split, drag and drop it to the microflow. 

   ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-drag-and-drop-excl-split.png)

3.  We need to pass a parameter to configure the exclusive split correctly.  In the **Toolbox**, select **Parameter** and drag and drop it to the microflow.

   ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-microflow-not-set-parameter.png)

4. In our example the logic we are adding should apply to the single customer that is selected in the page. Hence, we need to add the customer as the parameter. Change the following properties of the **Parameter**:<br />

   a. Set **Data Type** to **Object**.<br />
   b. Set **Entity** to **Customer**. 

   ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-parameter-properties.png)

5.  In the **Properties** of the exclusive split, click the **Configure condition** field.

   ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-excl-split-configure-condition.png)

6.  In the **Configure condition** pop-up window, we need to select the attribute that the condition will be based on. So, click the **Variables/Attributes** tab, select the **Grade Customer_grade** condition, and click **Save**. 

   ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-configure-condition-grade.png)

   Caption **Grade?** is added automatically to the exclusive split according to the attribute name to indicate which condition the exclusive split is based on. 

7. We need to add different logic for each value of the **Grade** attribute. To do this, in the **Properties** tab, set cases for the exclusive split doing the following:<br />

   a. Select **Edit** in the **(not set)** field.<br />

   ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-setting-cases-for-excl-split.png)
   b. Set **Bronze** in the **Select Value** drop-down menu.<br />
   c. Click the **Go back** icon to return to the exclusive split properties.<br />

   ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-excl-split-go-back.png)
   d. Click **Add New Case** in the **Cases** section.<br />
   e. Repeat steps b-d to add all possible cases: **Silver**, **Gold** and **Empty** (a case when the customer's grade is not set). 

   ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-excl-split-possible-cases.png)

8.  To open a corresponding order form (page) for customers with the bronze grade, select **Show Page** in the **Toolbox**, drag and drop it to flow labelled **Bronze** in the microflow. 

   ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-microflow-show-page.png)

9. Open the properties for the **Show Page** activity and do the following:
   a. Click the **Select a page** field.<br />
   b. In the **Select Page** dialog window, click **New page**, and [create a page](../../refguide/web-modeler/page-editor-wm) for customer grade **Bronze**. 
   **Note** After you create a page, it will be added to the **Select field** automatically.<br />

   ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-show-page-select-page.png)
   c. In **Data Source**>**Object to Pass**, set **Customer** to get the data on customers and their grade. 

10. Repeat steps 8-9 for customers of Silver and Gold grades, creating the order form pages for silver and gold customers respectively.
11.  For the customers with no grade indicated we will show an error message. To do so, select **Show Message** in the **Toolbox**, and add it to the flow labelled **(empty)** in the microflow. 

    ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-microflow-empty-flow-show-message.png)

12. In the **Properties** tab for the **Show message** activity, do the following:
    a. Select **Error** as the message type.<br />
    b. Fill out the **Template** that will be shown to users when this message pops up (in our example: Please select the customer grade first).<br />
    c. Leave the **Blocking** property for the message enabled, which prevents the user continue work until the pop-up window is closed.  

    ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-empty-customer-grade-message.png)

Congratulations! We have now created the microflow that will open different order forms for customers with different grades, or show an error message when the customer has no grade.

If you want to test your microflow by adding it to the pages, see [Configure an Exclusive Split in the Web Modeler Step 2: Embedding the Microflow to Your App](webmodeler-how-to-microflows-exclsplit-p2).

## 4 Configuring the Exclusive Split with Attribute of the Boolean Type  

In this example we will create a microflow and configure the exclusive split when you want to prevent a blocked customer from making an order. The reasons for blocking the customer can be that customer's credit score is too low, or password has expired. 

This use case will require an exclusive split with an attribute of the boolean type (true or false). For more information on the types of attributes, see [Attribute Types](../../refguide/web-modeler/domain-models-attributes-wm).

### 4.1 Adding an Entity and an Attribute to the Domain Model 

As we will verify customers by their statuses, we need to create a corresponding attribute for the entity first. For this, do the following:

1. Open your [domain model](../../refguide/web-modeler/domain-models-wm).
2. For the Customer entity, create attribute (for more information on how to create the attribute, see section [3 Adding New Attributes](../../refguide/web-modeler/domain-models-wm)),  and do the following: <br />
   a. Set name to *Blocked*. <br />
   b. Set the [**Type**](../../refguide/web-modeler/domain-models-attributes-wm) to **Boolean**. <br />
   c. Click **Create**.  

![](attachments/webmodeler-how-to-microflows-exclsplit/wm-new-attribute-create-dialog.png)

The new attribute for the **Customer** entity is created.

![](attachments/webmodeler-how-to-microflows-exclsplit/wm-blocked-attribute.png)

### 4.2 Configuring a Microflow

To configure the exclusive split with the attribute of the boolean type, follow these steps:

1. [Create a new microflow](../../refguide/web-modeler/microflows-wm) and name it, for example *Customer_status_check*.
2.  In the **Toolbox** tab, select the exclusive split, drag and drop it to the microflow. 

   ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-drag-and-drop-excl-split.png)

3.  We need to pass a parameter to configure the exclusive split. In the **Toolbox** tab, select **Parameter**, and drag and drop it to the microflow.

   ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-microflow-not-set-parameter.png)

4. In our example the logic we are adding should apply to the status of the customer. Hence, we need to add the customer as the parameter. In the **Properties** tab for the **Parameter**, do the following:
   a. Set **Data Type** to **Object** 
   b. Set **Entity** to **Customer**.

   ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-parameter-properties.png)

5.  Click the exclusive split, and in the **Properties** tab, click the **Configure condition** field.

   ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-excl-split-configure-condition.png)

6.  In the **Configure condition** pop-up window, we need to select the attribute that the condition will be based on. So, in the **Configure condition** pop-up window, click  the **Variables/Attributes** tab, select **Blocked Boolean** attribute of the **Customer**, and click **Save**.

   ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-configure-condition-pop-up.png)

7.  Cases **true** and **false** are set automatically for properties of the exclusive split, and the corresponding flows are added to the microflow. Caption **Blocked?** is added automatically according to the attribute name. 

  ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-true-false-flows-microflow.png)

8.  To show an error message to the blocked customers, select **Show message** in the **Toolbox**, and add it to the **true** flow in the microflow. 

   ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-show-message-true-flow.png)

9. In the **Properties** tab for the **Show message** activity, do the following:
   a. Select **Error** as the message type.
   b. Fill out the **Template** that will be shown to users when this message pops up (In our example: Sorry, you can't proceed with the order). 
   c. Leave the **Blocking** property for the message enabled, which prevents the user continue work until the pop-up window is closed.

   ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-show-message-properties-true-flow.png)

10.  In the **Toolbox** tab, select the **Close Page** activity, drag and drop it to the microflow.

  ![](attachments/webmodeler-how-to-microflows-exclsplit/wm-microflow-blocked-completed.png)

Congratulations! We have now created a microflow that will show an error message and close the current page if the customer is blocked.

If you want to embed your microflow to the pages, see [Configure an Exclusive Split Step 2: Embedding the Microflow to Your App](webmodeler-how-to-microflows-exclsplit-p2).



 







