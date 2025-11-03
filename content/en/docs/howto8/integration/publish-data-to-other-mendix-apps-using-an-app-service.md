---
title: "Publish Data to Other Mendix Apps Using an App Service (Deprecated)"
url: /howto8/integration/publish-data-to-other-mendix-apps-using-an-app-service/
weight: 14
description: "Describes how to use an app service to publish data to other Mendix apps."
---

{{% alert color="info" %}}
App services are deprecated marked for removal. Use a [published web service](/refguide8/published-web-services/) or a [published REST service](/refguide8/published-rest-services/) instead.
{{% /alert %}}

## Introduction

In this how-to, you will create an app in which you keep track of the inventory of a shop. This app makes the inventory available for use in other Mendix apps via an app service.

## Creating the Domain Model

The domain model defines the products that you want the save and how you want to expose them.

To create the domain model, follow these steps:

1. In the domain model, create a persistable entity called **Product** with two attributes: **Name** (String) and **Stock** (Integer).
2. Create a non-persistable entity called **PublishedProduct** with the same attributes.

    {{< figure src="/attachments/howto8/integration/publish-data-to-other-mendix-apps-using-an-app-service/domain-model.png" class="no-border" >}}

## Creating Pages

To create pages that allows users to create, edit, and delete products, follow these steps:

1. Add a new page called **EditUser**.
2. Add a data view.
3. From the **Connector**, drag the **Product** entity onto to yellow **[Unknown]** bar.
4. On the dialog box that appears, click **OK**.

    {{< figure src="/attachments/howto8/integration/publish-data-to-other-mendix-apps-using-an-app-service/edit-product-page.png" class="no-border" >}}

5. Open the **Home page** and add a data grid.
6. From the **Connector**, drag the **Product** entity onto to yellow **[Unknown]** bar.
7. On the dialog box that appears, click **OK**.
8. From the **Project Explorer**, drag the **EditUser** page onto the **New** button.
9. From the **Project Explorer**, drag the **EditUser** page onto the **Edit [default]** button.

    {{< figure src="/attachments/howto8/integration/publish-data-to-other-mendix-apps-using-an-app-service/homepage.png" class="no-border" >}}

## Creating a Microflow

We will now create a microflow that retrieves all the products from the database and converts them to published products.

To create this microflow, follow these steps:

1. Add a microflow called **PublishProducts**.
2. From the **Toolbox**, drag a **Retrieve** activity into the microflow.
3. Double-click the **Retrieve** activity and select **From database**.
4. For **Entity**, select **Product**, then click **OK**.
5. From the **Toolbox**, drag a **Create list** activity into the microflow.
6. Double-click the **Create list** activity.
7. For **Entity**, select **PublishedProduct**, then click **OK**.
8. From the **Toolbox** (under **Other**), drag a **Loop** activity into the microflow.
9. Double-click the loop and for **Iterate over**, select **ProductList**, then click **OK**.
10. From the **Toolbox**, drag a **Create** activity onto the loop.
11. Double-click the **Create** activity and for **Entity**, select **PublishedProduct**.
12. Click **New**, and for **Member**, select **Name**.
13. For **Value**, enter *$IteratorProduct/Name*, then click **OK**.
14. Click **New**, and for **Member**, choose **Stock**.
15. For **Value**, enter *$IteratorProduct/Stock*, then click **OK**.
16. From the **Toolbox**, drag a **Change list** activity onto the loop
17. Connect the **Create PublishedProduct** activity to the **Add to list** activity.
18. Double-click the **Add to list** activity and for **List**, select **PublishedProductList**.
19. For **Value**, enter *$NewPublishedProduct*, then click **OK**.
20. Double-click the red end event and for **Type**, select **List**.
21. For **Entity**, select **PublishedProduct**.
22. For **Return value**, enter *$PublishedProductList*, then click **OK**.

    {{< figure src="/attachments/howto8/integration/publish-data-to-other-mendix-apps-using-an-app-service/microflow.png" class="no-border" >}} 

## Creating an App Service

You will use the microflow to create an app service that exposes the products to other apps. To accomplish this, follow these steps:

1. In **Project Explorer**, right-click a module and choose **Add** > **Published services** > **Published app service**.
2. For **Name**, enter *Shop*.
3. Click **Create version**.
4. Go to the **Actions** tab and click **New**.
5. For **Name**, enter *Products*.
6. For **Microflow**, select **PublishProducts**, then click **OK**.
7. Go to the **Settings** tab and for **Authentication**, select **Username and password**.
8. Go to the **General** tab and for **Status**, select **Consumable**, then click **OK**.
9. A dialog box will ask whether you want to make this version available. Click **OK**.

## Securing the App

Before you publish our app, you need to make sure it is protected with a username and password. To accomplish this, follow these steps:

1. In **Project explorer**, double-click **Project** > **Security**.
2. For **Security level**, select **Prototype/demo**.
3. Click **Edit module security**.
4. Go to the **Page access** tab and check all the checkboxes.
5. Go to the **Microflow access** tab and check all the checkboxes, then click **OK**.
6. Go to the **Administrator** tab.
7. Type a password, and then click **OK**.

## Publishing the App Service

You can now go ahead and deploy the app. This will publish your app service.

## Read More

* [Expose a Web Service](/howto8/integration/expose-a-web-service/)
* [Expose Data to BI Tools Using OData](/howto8/integration/exposing-data-to-bi-tools-using-odata/)
