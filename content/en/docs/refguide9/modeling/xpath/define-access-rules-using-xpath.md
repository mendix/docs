---
title: "Defining Access Rules Using XPath"
linktitle: "Define Access Rules Using XPath"
url: /refguide9/define-access-rules-using-xpath/
weight: 4
description: "Describes how to define access rules for an entity using an XPath constraint."
aliases:
    - /howto9/logic-business-rules/define-access-rules-using-xpath/
---

## Introduction

The access rules of an entity define what a user is allowed to do with the objects of the entity. Users can be allowed to create and/or delete objects and to view and/or edit member values. A member is an attribute or an association of an entity. Furthermore, the set of objects available for viewing, editing, and removing can be limited by means of an XPath constraint (for details, see [XPath Constraints](/refguide9/xpath-constraints/) in the *Studio Pro Guide*). For more information on access rules, see [Access Rules](/refguide9/access-rules/) in the *Studio Pro Guide*.

In this how-to, you will prepare a data structure (including security), a GUI, and some example data for customers, orders, and a financial administrator account. After this preparation, you will define the access rules for the **Order** entity using XPath on the payment status. The XPath will constrain the order so that it can only be seen by a financial administrator when the payment status of the order is set to **paid**.

This how-to teaches you how to do the following:

* Define access rules for an entity using XPath

## Preparing the Data Structure, GUI, and Example Data

The access rules used in this how-to contain customer and order data. To define the access rules, you first need to set up the data structure, user roles, and GUI to maintain customer and order data.

To prepare the data structure, GUI, and example data, follow these steps:

1. Create the following domain model:

    {{< figure src="/attachments/refguide9/modeling/xpath/define-access-rules-using-xpath/18581378.png" class="no-border" >}}

    For more information on creating a domain model, see [Creating a Basic Data Layer](/refguide9/create-a-basic-data-layer/).
2. Create overview and detail pages to manage the **Customer** and **Order** objects (for more information on creating these pages, see [How to Create Your First Two Overview and Detail Pages](/howto9/front-end/create-your-first-two-overview-and-detail-pages/)).
3. Create menu items to access the **Order** and **Customer** overview pages (for more information on creating menu items, see [Setting Up Navigation](/refguide9/setting-up-the-navigation-structure/)).
4. Set the **Security level** of you application to **Production** (for more information, see [How to Create a Secure App](/howto9/security/create-a-secure-app/)).

    {{< figure src="/attachments/refguide9/modeling/xpath/define-access-rules-using-xpath/18581008.png" class="no-border" >}}

5. Enter *FinancialAdministrator* for the **Name** of the new user role on the **User roles** tab (for more information on adding roles, see [How to Create a Secure App](/howto9/security/create-a-secure-app/)):

    {{< figure src="/attachments/refguide9/modeling/xpath/define-access-rules-using-xpath/18581005.png" class="no-border" >}}

6. Give both module roles access to all your created pages, and create separate read and write access rights to all your created entities (for more information on how to set the entity access, see [How to Create a Secure App](/howto9/security/create-a-secure-app/)):

    {{< figure src="/attachments/refguide9/modeling/xpath/define-access-rules-using-xpath/18580997.png" class="no-border" >}}

    {{< figure src="/attachments/refguide9/modeling/xpath/define-access-rules-using-xpath/18581003.png" class="no-border" >}}

7. Add the following customer data to your app:

    {{< figure src="/attachments/refguide9/modeling/xpath/define-access-rules-using-xpath/18581374.png" class="no-border" >}}

8. Add the following order data to your app:

    {{< figure src="/attachments/refguide9/modeling/xpath/define-access-rules-using-xpath/18581373.png" class="no-border" >}}

9. Add an account to your application with the user role *FinancialAdministrator*:

    {{< figure src="/attachments/refguide9/modeling/xpath/define-access-rules-using-xpath/18581002.png" class="no-border" >}}

## Defining the Access Rules on the Order Entity Using XPath

In the previous section, you set up a basic data structure and created some sample data. In this section, you will define the access rules on the **Order** entity so that orders can only be viewed by a financial administrator if the payment status of the order is set to **Complete**. You will do this by adding an XPath constraint to the **Order** entity for the **FinancialAdministrator** module role.

To define the access rules on the **Order** entity using XPath, follow these steps:

1. Open the **Access rules** tab for the **Order** entity:

    {{< figure src="/attachments/refguide9/modeling/xpath/define-access-rules-using-xpath/18580996.png" class="no-border" >}}

2. Double-click the **FinancialAdministrator** module role to open its properties and go to the **XPath constraint** tab:

    {{< figure src="/attachments/refguide9/modeling/xpath/define-access-rules-using-xpath/18581000.png" class="no-border" >}}

3. To constrain the access of the financial administrator to only **Complete** orders, add the following **XPath**:

    {{< figure src="/attachments/refguide9/modeling/xpath/define-access-rules-using-xpath/18580995.png" class="no-border" >}}

4. Click **OK** and re-deploy your application.
5. When you sign in with the **Financial Administrator** account, you will see that only completed orders are shown in the orders overview:

    {{< figure src="/attachments/refguide9/modeling/xpath/define-access-rules-using-xpath/18580994.png" class="no-border" >}}

## Read More

* [Filtering Data on an Overview Page Using XPath](/refguide9/filtering-data-on-an-overview-page/)
