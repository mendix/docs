---
title: "Step 1: Build the Domain Model & Configure a Microflow"
url: /studio7/microflows-how-to-configure-decision-p1/
description: "This how-to describes the process of configuring a decision in Mendix Studio."
weight: 10
tags: ["studio", "microflows", "decision", "domain model"]
---

## 1 Introduction

This how-to explains how you can configure a decision in the microflow editor of Mendix Studio. 

A decision is an activity which is used to model conditions in your app logic. For more information on the decision, see [Decision](/studio7/microflows-decision/). 

This how-to will teach you how to do the following:

* Add entities and attributes necessary to configure the decision
* Configure the decision with the Boolean type of parameter or attribute
* Configure the decision with the enumeration type of parameter or attribute

This how-to describes the following use case: 

You have an online shopping app. You will create a page where you can manage your customer's details, that is, name, grade, and the customer's status (active or blocked). 

You will also create a page with the list of customers. Upon clicking a specific button on this page, different pages (order forms) will be shown to customers with different grades: Bronze, Silver, and Gold. 

Customers can make an order from this page. However, if the blocked user tries to make the order, the app will show them an error message and close the current page.  

## 2 Configuring the Decision with the Attribute of the Enumeration Type  

In this example you will create a microflow and configure a decision that opens different order forms depending on the customer grade. 

This use case will require the decision with attribute of the enumeration type (list of predefined values). For more information on types of attributes, see [Attribute Types](/studio7/domain-models-attributes/). 

### 2.1 Adding an Entity and an Attribute to the Domain Model 

The app will open the corresponding page depending on the grade of a customer, for this you need to create a new entity and a new attribute first. To create the new entity and attribute, do the following:

1. Open your [domain model](/studio7/domain-models/).
2. Create entity *Customer*. For more information on how to create the entity, see section [3 Adding New Entities](/studio7/domain-models/) in *Domain Models Overview*.
3.  For the **Customer** entity, create attribute (for more information on how to create the attribute, see section [4 Adding New Attributes](/studio7/domain-models/)) and do the following:<br />
    a. Set the attribute **Name** to *Grade*.<br />
    b. Set the [**Type**](/studio7/domain-models-attributes/) to **Enumeration**.<br />
    c. Click **Select enumeration** to create a new enumeration.<br />d. In the **Select enumeration** dialog window, click **New**.<br/>
    e. In the **Create new enumeration** dialog window, click **Add Item** (*Grade* is filled out automatically for the **Name**).<br />

    {{< figure src="/attachments/studio7/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p1/new-enumeration-add-item.png" >}} <br />

    f. Enter *Bronze* for the **Caption** (**Name** is filled out as *Bronze* automatically as well).<br />

    {{< figure src="/attachments/studio7/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p1/new-enumeration-add-item-bronze.png" >}}<br />

    g. Click **Add Item** and repeat the step above to create the **Silver** and **Gold** grades.<br />
    h. Click **Create** to close the dialog windows and create the new attribute.

    {{< figure src="/attachments/studio7/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p1/new-enumeration-bronze-silver-gold.png" >}}

The new attribute is created.

{{< figure src="/attachments/studio7/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p1/grade-attribute.png" >}}

### 2.2 Configuring a Microflow 

To configure the decision with the attribute or parameter of the enumeration type, follow these steps:

1. [Create a new microflow](/studio7/microflows/) and name it, for example, *Show_grade_specific_page*.
2. In the **Toolbox** tab, select **Decision**, drag and drop it to the microflow.
3.  You need to pass a parameter to configure the decision correctly.  In the **Toolbox**, select **Parameter** and drag and drop it to the microflow.

    {{< figure src="/attachments/studio7/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p1/microflow-not-set-parameter.png" >}}

4.  In this example, logic you are adding should apply to the single customer that is selected in the page. Hence, you need to add the customer as a parameter. Change the following properties of the **Parameter**:<br />
    a. Set **Data Type** to **Object**.<br />
    b. Set **Entity** to **Customer**.

    {{< figure src="/attachments/studio7/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p1/parameter-properties.png" >}}

5. In the **Properties** of the decision, click the **Configure condition** field.
6.  In the **Configure condition** pop-up window, you need to select an attribute that the condition will be based on. So, click the **Variables/Attributes** tab, select the **Grade Customer_grade** condition, and click **Save**. 

    {{< figure src="/attachments/studio7/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p1/configure-condition-grade.png" >}}

    Caption **Grade?** is added automatically to the decision according to the attribute name to indicate which condition the decision is based on. 
7.  You need to add different logic for each value of the **Grade** attribute. To do this, in the **Properties** tab, set cases for the decision doing the following:<br />
    a. Select **Edit** in the **(not set)** field.<br />

    {{< figure src="/attachments/studio7/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p1/setting-cases.png" >}} <br/>
   
    b. Set **Bronze** in the **Select Value** drop-down menu.<br />
    c. Click the **Go back** icon to return to the decision properties.<br />

    {{< figure src="/attachments/studio7/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p1/go-back-button.png" >}} <br/>
   
    d. Click **Add New Case** in the **Cases** section.<br />
    e. Repeat steps b-d to add all possible cases: **Silver**, **Gold**, and **Empty** (a case when the customer's grade is not set). 

    {{< figure src="/attachments/studio7/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p1/possible-cases.png" >}} 

8. To open a corresponding order form (page) for customers with the bronze grade, select **Show Page** in the **Toolbox**, drag and drop it to flow labelled **Bronze** in the microflow. 
9.  Open the properties for the **Show Page** activity and do the following:<br />
    a. Click the **Select a page** field.<br />
    b. In the **Select Page** dialog window, click **New page**, and [create a page](/studio7/page-editor/) for customer grade **Bronze**. 
    **Note** After you create a page, it will be added to the **Select field** automatically.<br />

    {{< figure src="/attachments/studio7/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p1/show-page-select-page.png" >}} <br />
   
    c. In **Data Source**>**Object to Pass**, set **Customer** to get the data on customers and their grade. 
10. Repeat steps 8-9 for customers of Silver and Gold grades, creating the order form pages for silver and gold customers respectively.
11. For the customers with no grade indicated you will show an error message. To do so, select **Show Message** in the **Toolbox**, and add it to the flow labelled **(empty)** in the microflow. 

    {{< figure src="/attachments/studio7/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p1/microflow-empty-flow-show-message.png" >}}

12. In the **Properties** tab for the **Show message** activity, do the following:<br />
    a. Select **Error** as the message type.<br />
    b. Fill out the **Template** that will be shown to users when this message pops up (in this example: Please select the customer grade first).<br />
    c. Leave the **Blocking** property for the message enabled, which prevents the user continue work until the pop-up window is closed.  
    {{< figure src="/attachments/studio7/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p1/empty-customer-grade-message.png" >}}

Congratulations! You have now created the microflow that will open different order forms for customers with different grades, or show an error message when the customer has no grade.

If you want to test your microflow by adding it to the pages, see [Configure an decision Step 2: Embed the Microflow in Your App](/studio7/microflows-how-to-configure-decision-p2/).

## 3 Configuring the Decision with Attribute of the Boolean Type  

In this example, you will create a microflow and configure the decision to prevent a blocked customer from making an order. The reasons for blocking the customer can be that customer's credit score is too low, or password has expired. 

This use case will require a decision with an attribute of the Boolean type (true or false). For more information on the types of attributes, see [Attribute Types](/studio7/domain-models-attributes/).

### 3.1 Adding an Entity and an Attribute to the Domain Model 

As you will verify customers by their statuses, you need to create a corresponding attribute for the entity first. For this, do the following:

1. Open your [domain model](/studio7/domain-models/).
2.  For the Customer entity, create attribute (for more information on how to create the attribute, see section [3 Adding New Attributes](/studio7/domain-models/)),  and do the following: <br />
    a. Set name to *Blocked*. <br />
    b. Set the [**Type**](/studio7/domain-models-attributes/) to **Boolean**. <br />
    c. Click **Create**. 

    {{< figure src="/attachments/studio7/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p1/new-attribute-create-dialog.png" >}}

The new attribute for the **Customer** entity is created.

{{< figure src="/attachments/studio7/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p1/blocked-attribute.png" >}}

### 3.2 Configuring a Microflow

To configure the decision with the attribute of the Boolean type, follow these steps:

1. [Create a new microflow](/studio7/microflows/) and name it, for example *Customer_status_check*.
2. In the **Toolbox** tab, select the decision, drag and drop it to the microflow. 

3.  You need to pass a parameter to configure the decision. In the **Toolbox** tab, select **Parameter**, and drag and drop it to the microflow.

    {{< figure src="/attachments/studio7/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p1/microflow-not-set-parameter.png" >}}

4.  In this example, logic you are adding should apply to the status of the customer. Hence, you need to add the customer as the parameter. In the **Properties** tab for the **Parameter**, do the following:<br />
    a. Set **Data Type** to **Object** <br />
    b. Set **Entity** to **Customer**.

    {{< figure src="/attachments/studio7/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p1/parameter-properties.png" >}}

5. Click the decision, and in the **Properties** tab, click the **Configure condition** field.
6.  In the **Configure condition** pop-up window, you need to select the attribute that the condition will be based on. So, in the **Configure condition** pop-up window, click  the **Variables/Attributes** tab, select **Blocked Boolean** attribute of the **Customer**, and click **Save**.

    {{< figure src="/attachments/studio7/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p1/configure-condition-pop-up.png" >}}

7.  Cases **true** and **false** are set automatically for properties of the decision, and the corresponding flows are added to the microflow. Caption **Blocked?** is added automatically according to the attribute name. 

    {{< figure src="/attachments/studio7/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p1/true-false-flows-microflow.png" >}}

8. To show an error message to the blocked customers, select **Show message** in the **Toolbox**, and add it to the **true** flow in the microflow. 
9.  In the **Properties** tab for the **Show message** activity, do the following:<br/>
    a. Select **Error** as the message type.<br/>
    b. Fill out the **Template** that will be shown to users when this message pops up (In this example: Sorry, you can't proceed with the order). <br/>
    c. Leave the **Blocking** property for the message enabled, which prevents the user continue work until the pop-up window is closed.

    {{< figure src="/attachments/studio7/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p1/show-message-properties-true-flow.png" >}} 

10. In the **Toolbox** tab, select the **Close Page** activity, drag and drop it to the microflow.

    {{< figure src="/attachments/studio7/microflows/microflows-how-to-configure-decision/microflows-how-to-configure-decision-p1/microflow-blocked-completed.png" >}}

Congratulations! You have now created a microflow that will show an error message and close the current page if the customer is blocked.

If you want to embed your microflow to the pages, see [Step 2: Embed the Microflow in Your App](/studio7/microflows-how-to-configure-decision-p2/).
