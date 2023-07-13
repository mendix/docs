---
title: "Portfolio Management"
url: /developerportal/portfolio-management/
weight: 25
description: "Describes the Mendix Portfolio Management app."
tags: ["Portfolio Management"]
#The anchor #portfolios-settings below is mapped, so it should not be removed or changed. If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Portfolio Management](https://portfolio.mendix.com) tool is available to all Mendix Cloud customers. It enables staying informed about initiatives and managing them in the different development stages. It provides portfolio managers, business stakeholders, and developers with everything they need to collaborate effectively in one place and bring new initiatives to the Mendix Platform.

To start the Portfolio Management app, go to the Developer Portal, open the [Switch to menu](/developerportal/), and select **Portfolio**.

## 2 Portfolio Landscape Overview {#portfolio-landscape}

When you start the Portfolio Management app for the first time, an introduction page opens. The introduction page describes the new features and gives helpful information. You can click **Visit Portfolio Management** to open the **Portfolio Landscape Overview** page. After that, when you start the Portfolio Management app, the **Portfolio Landscape Overview** page directly opens. You can click **Learn more about Portfolio Management** to go back to the introduction page.

### 2.1 My Portfolios vs Company Portfolios

The **Portfolio Landscape Overview** page contains two sections: **My Portfolios** and **Company Portfolios**. A section only appears if there is at least one [portfolio card](#portfolio-card) in that section.

{{< figure src="/attachments/developerportal/portfolio-management/portfolio-landscape-overview.png" >}}

**My Portfolios** shows all the portfolios to which you have access. Clicking a portfolio card opens the portfolio.

**Company Portfolios** shows all the restricted portfolios in your company, to which you do not have access. Clicking a portfolio card shows more details about the portfolio. You can request access to a restricted portfolio by clicking **Request to Join** on the portfolio card. A Portfolio Manager needs to approve this [access request](#access-requests).

### 2.2 Portfolio Cards {#portfolio-card}

On the **Portfolio Landscape Overview** page, each portfolio is presented in a card. On a portfolio card, you can see the name of the portfolio, the company to which it belongs, the [privacy settings](#privacy-settings), and the avatars of Portfolio Managers (up to avatars of four Portfolio Managers).

#### 2.2.1 Different Privacy Settings of a Portfolio {#privacy-settings}

Currently, the privacy settings of a portfolio can be private or restricted. Their differences are shown in the table below:

| Portfolio type | Visible in the **Company Portfolios** section?               | How  to join the portfolio?                                  |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Private        | {{< figure src="/attachments/developerportal/portfolio-management/cross-mark.svg" >}} | A Portfolio Manager can [add users to the portfolio](#add-users). |
| Restricted     | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | A Portfolio Manager can [add users to the portfolio](#add-users). Users can also request access by clicking **Request to Join** on the portfolio card. A Portfolio Manager needs to approve this [access request](#access-requests). |

A Portfolio Manager can change the **Privacy Settings** on the [Portfolio Settings](#portfolio-settings) page.

### 2.3 Opening a Portfolio 

When you click a portfolio card to which you have access, the portfolio opens with a menu on the left side. 

{{< figure src="/attachments/developerportal/portfolio-management/opened-portfolio.png" >}}

Clicking a menu item opens the corresponding page:

* [Initiatives Overview](#initiatives-overview)
* [Archive](#archived-initiatives)
* [Access Management](#access-management)
* [Portfolio Settings](#portfolio-settings) (only available for Portfolio Managers)

### 2.4 Creating a New Portfolio {#create-portfolio}

On the **Portfolio Landscape Overview** page, you can create a new portfolio as follows:

1. On the upper-right corner of the page, click **Create Portfolio**. The **New Portfolio** dialog box opens.

2. Enter **Portfolio Name** and **Description** for the new portfolio.

3. For **Privacy Settings**, select **Private** or **Restricted**. For details on privacy settings, see the [Different Privacy Settings of a Portfolio](#privacy-settings) section.

    {{% alert color="info" %}}If the toggle on the [Privacy Requests](/developerportal/control-center/#privacy-requests) tab is turned on in Control Center, a Mendix Admin needs to approve the creation of a restricted portfolio. In that case, a Mendix Admin will receive a notification about your request and can approve or reject your request from the [Control Center](/developerportal/control-center/#privacy-requests). The **Privacy Settings** of the portfolio will be **Private** until a Mendix Admin approves your request.{{% /alert %}}

4. For **Prioritization Model**, select [WSJF Prioritization](/developerportal/portfolio-management/#wsjf) or [RICE Prioritization](/developerportal/portfolio-management/#rice).

5. From the **Currency** drop-down list, select the default currency for this portfolio.

6. Click **Create**.

The portfolio is created. You are the first Portfolio Manager of this portfolio. You can start [inviting other people](#add-users) to the portfolio.

## 3 Initiatives Overview {#initiatives-overview}

In the Portfolio Management app, the term "Initiative" represents a business objective or strategic goal, and could span across multiple apps. An initiative can be related to multiple apps or just one small part of a big app. For progress tracking, we recommend you to break down an app into smaller initiatives whenever possible.

The **Initiatives Overview** page gives an overview of all the initiatives in this portfolio.

{{< figure src="/attachments/developerportal/portfolio-management/initiatives-overview.png" >}}

In the search box, you can search for an initiative by the initiative name.

On the upper-right corner, you can use the **Filters** to filter initiatives. Using the drop-down list next to the **Filters**, you can [change your view](#change-view). Clicking the **Create Initiative** button allows you to [create a new initiative](#create-new-initiative).

### 3.1 Creating a New Initiative {#create-new-initiative}

{{% alert type="info" %}}Both Portfolio Managers and Contributors can create new initiatives. Only Viewers cannot do this action. For more information on roles and permissions, see the [Access Management](#access-management) section.{{% /alert %}}

To create a new initiative and add details to it, do as follows:

1. [Create the initiative.](#create-initiative)
2. [Add general information.](#add-general-information)
3. [Add planning information.](#add-planning-information)
4. [Add prioritization information.](#add-prioritization-information)
5. [Add estimated value.](#add-estimated-value)
6. [Add comments.](#add-comments)
7. [Save initiative details.](#save-details)

#### 3.1.1 Creating the Initiative {#create-initiative}

To create a new initiative, follow these steps:

1. Go to the **Initiatives Overview** page.
2. Click **Create Initiative**.
3. Enter the **Initiative Name** and the **Stage** in which the initiative is. 
4. Click **Create Initiative**. The initiative is created and appears on the **Initiatives Overview** page. The **Edit Initiative** side pane opens on the right side of the page where you can add the details of the new initiative.

Now you can proceed to [add general information](#add-general-information).

#### 3.1.2 Adding General Information {#add-general-information}

To add general information to your initiative, follow these steps:

1. In the **Edit Initiative** side pane, select **Tags** for the initiative. You can use tags to classify your initiatives, for example by types. You can select existing tags or create new tags. 

    {{% alert color="info" %}}For more information about how to create new tags, edit existing tags, or delete existing tags, see the [Managing Tags](#manage-tags) section.{{% /alert %}}

2. Enter the **Description** of the initiative.
3. If there is an existing app that you want to change or if development is already in progress, you can link the app to this initiative:

    1. In the search box below **Link Existing App**, search the app. The system displays the first 50 results.

        {{% alert color="info" %}}If a field has the **ⓘ** icon next to it like the **Link Existing App** field, then you can check out the description of this field by hovering over the **ⓘ** icon.{{% /alert %}}

    2. Select the app that you want to link to the initiative. If you like to see more information about a linked app, click the app name after it is linked.

4. Set the **Owner** for the initiative.
5. Select the **Stage**, **Department**, **Country**, and **Use Case** for the initiative.

    {{% alert type="info" %}}A Portfolio Manager can customize the options for **Stage**, **Department**, **Country**, and **Use Case** on the [Portfolio Settings](#portfolio-settings) page.{{% /alert %}}

6. If you want to add attachments, click **+** to add them. Once an attachment is added, all the users can open and download it.

Now you can proceed to [add planning information](#add-planning-information).

##### 3.1.2.1 Managing Tags {#manage-tags}

While you are in the process of [adding general information](#add-general-information), you can manage tags as follows:

In the **Edit Initiative** side pane, click the settings icon next to the **Tags** text box.

{{< figure src="/attachments/developerportal/portfolio-management/manage-tags.png" >}}

The **Manage Tags** dialog box opens.

{{< figure src="/attachments/developerportal/portfolio-management/manage-tags-dialog-box.png" >}}

To create a new tag, do as follows:

1. Click **Add Tag**. A text box appears, with a colored circle indicating the color of the new tag.
2. In the text box, enter the name for the new tag.
3. If you want to change the color of the new tag, click the colored circle and select a different color.
4. Click the checkmark icon to save the new tag.

To edit an existing tag, do as follows:

1. To change the tag name, click the name of the tag. After the name becomes editable. Edit the name in the text box, and then click outside the text box to save the change.
2. To change the tag color, click the colored circle, and select a different color.

To delete an existing tag, do as follows:

1. Hover over the row where the tag is listed, a delete icon (red trash can) appears at the end of the row.
2. Click the delete icon. The **Confirmation** dialog box opens.
3. Click **Delete Tag**.

#### 3.1.3 Adding Planning Information {#add-planning-information}

In the **Edit Initiative** side pane, click **Planning** to show all the fields in this section. Set the following dates in this section:

* **Intake Date** – the date when the initiative is accepted based on business requirements
* **Start Date** – the date when the first actions are taken to start implementation
* **Go-Live date** – the date when the app is expected to be up and running

Now you can proceed to [add prioritization information](#add-prioritization-information).

#### 3.1.4 Adding Prioritization Information {#add-prioritization-information}

In the **Edit Initiative** side pane, click **Prioritization** to show all the fields in this section. Set the values for the fields in this section.

{{% alert color="info" %}}
The title of this section can be **Prioritization: WSJF Model** or **Prioritization: RICE Model**, depending on the prioritization model selected on the [Portfolio Settings](#portfolio-settings) page. For more information about the prioritization models and the components of each model, see the [WSJF](/developerportal/portfolio-management/prioritization-models/#wsjf) section or the [RICE](/developerportal/portfolio-management/prioritization-models/#rice) section in *Prioritization Models Supported by Portfolio Management.*
{{% /alert %}}

Now you can proceed to [add estimated value](#add-estimated-value).

#### 3.1.5 Adding Estimated Value {#add-estimated-value}

In the **Edit Initiative** side pane, click **Estimated Value** to show all the fields in this section. These fields can solidify your business case and drive internal adoption, and help you map the realized value upon completion. Add information in the following fields in this section:

* **Type of Value** – Select the type of the value that is created by the initiative.
  
    {{% alert color="info" %}}A Portfolio Manager can customize the options for **Type of Value** on the [Portfolio Settings](#portfolio-settings) page.{{% /alert %}}
    
* **Frequency** – Select whether the value is **One-Off** or **Recurring**.
* **Value** – Enter the amount of the value in numbers. Use a comma every third digit from the right (for example, *1,000,000*)
* **Additional Information** – Enter anything that can help clarify how estimated value may impact the overall costs of the initiative.

If the initiative creates more than one type of value, click **Add Value** to add more value. After you enter all values, the system shows the **Sum of Recurring Values** and the **Sum of One-Off Values**.

Now you can proceed to [add comments](#add-comments).

#### 3.1.6 Adding Comments {#add-comments}

If you want to add a comment, click **Comments** in the **Edit Initiative** side pane, and then click **Post Comment** after you add the comment.

Now you can proceed to [save initiative details](#save-details).

#### 3.1.7 Saving Initiative Details {#save-details}

At the bottom of the **Edit Initiative** side pane, click **Save**. Now all the details are saved for the new initiative that you just created.

### 3.2 Changing Your View {#change-view}

To change your view on the **Initiatives Overview** page, click the drop-down list on the upper-right corner, and then select one of the following views:

{{< figure src="/attachments/developerportal/portfolio-management/switch-view.png" >}}

* [Kanban view](#kanban-view)
* [List view](#list-view)
* [WSJF Prioritization](#wsjf) or [RICE Prioritization](#rice) (the section you see here depends on the prioritization model selected in [Portfolio Settings](#portfolio-settings))

#### 3.2.1 Kanban View {#kanban-view}

In Kanban view, all the initiatives are represented by initiative cards, and are categorized in different columns. A column indicates the stage that an initiative is currently in. Clicking an initiative card opens a [side pane](#view-initiative) that shows initiative details. To move an initiative to a different stage, hover over the initiative card, and then click the **<** or **>** icon on the left or right side of the card.
{{% alert type="info" %}}A Portfolio Manager can set up custom stages for initiatives on the [Portfolio Settings](#portfolio-settings) page.{{% /alert %}}

To filter initiatives, you can select a filter from the **Filters** drop-down list on the top of the page.

Each initiative card shows the following information:

{{< figure src="/attachments/developerportal/portfolio-management/initiative-card.png" >}}

* ① Initiative name
* ② Ellipsis (**...**) – Clicking this button opens a menu that enables you to [edit](#edit-delete-initiative), [archive](#archive-initiative), or [delete](#edit-delete-initiative) the initiative.
  
    {{% alert type="info" %}}Both Portfolio Managers and Contributors can edit, archive, or delete an initiative. Only Viewers cannot do these actions. For more information on roles and permissions, see the [Access Management](#access-management) section.{{% /alert %}}
    
* ③ Tags for the initiative – These tags are used to classify the initiative (tags can be used, for example, to indicate the types of initiatives).
* ④ Department – This shows the department to which the initiative belongs.
* ⑤ Calendar icon – Hovering over the icon shows the following defined dates of the initiative lifecycle:
    * **Intake** – This shows the date when the initiative is accepted based on business requirements.
    * **Start** – This shows the date when the first actions are taken to start implementation.
    * **Go-Live** – This shows the date when the app is expected to be up and running.
* ⑥ Icon of the linked app – Clicking this shows the information about the Mendix app that is linked with the initiative.
* ⑦ Avatar of the initiative owner – Hovering over the avatar shows the name of the initiative owner.

#### 3.2.2 List View {#list-view}

In the list view, initiatives are shown in a list. Clicking the header of a column sequences the initiatives using the values in that column.

{{< figure src="/attachments/developerportal/portfolio-management/list-view.png" >}}

The list contains the following information:

* **Initiative Name** – Clicking this opens a [side pane](#view-initiative) that shows initiative details.
* **Department** – This shows the department to which the initiative belongs.
* **Stage** – This shows the stage the initiative is currently in.
  
    {{% alert type="info" %}}A Portfolio Manager can set up custom stages for initiatives on the [Portfolio Settings](#portfolio-settings) page.{{% /alert %}}
    
* **Intake Date** – This shows the date when the initiative is accepted based on business requirements.
* **Start Date** – This shows the date when the first actions are taken to start implementation.
* **Go-Live Date** – This shows the date when the app is expected to be up and running.
* Icon of the linked app – Clicking this shows the information about the Mendix app that is linked with the initiative.
* Avatar of the initiative owner – Hovering over the avatar shows the name of the initiative owner.
* Ellipsis (**...**) – Clicking this button opens a menu that enables you to [edit](#edit-delete-initiative), [archive](#archive-initiative), or [delete](#edit-delete-initiative) the initiative.
  
    {{% alert type="info" %}}Both Portfolio Managers and Contributors can edit, archive, or delete an initiative. Only Viewers cannot do these actions. For more information on roles and permissions, see the [Access Management](#access-management) section.{{% /alert %}}

#### 3.2.3 WSJF Prioritization {#wsjf}

{{% alert type="info" %}}For more information about WSJF and each individual component of WSJF, see the [WSJF](/developerportal/portfolio-management/prioritization-models/#wsjf) section in *Prioritization Models Supported by Portfolio Management*.{{% /alert %}}

In the WSJF prioritization view, all the initiatives are sequenced by their WSJF scores by default. Clicking the header of a different column sequences the initiatives using the values in that column.

The list contains the following information:

* **Initiative Name** – Clicking this opens a [side pane](#view-initiative) that shows initiative details.
* **Stage** – This shows which stage the initiative is currently in.

  {{% alert type="info" %}}A Portfolio Manager can set up custom stages for initiatives on the [Portfolio Settings](#portfolio-settings) page.{{% /alert %}}

* **Business Value** – This indicates how much business value this initiative will generate. You can select **Highest**, **High**, **Medium**, **Low**, or **Lowest**.
* **Time Criticality** – This indicates how time-critical this initiative is. You can select **Highest**, **High**, **Medium**, **Low**, or **Lowest**.
* **Risk Reduction** – This indicates how much this initiative will help mitigate or reduce future risks. You can select **Highest**, **High**, **Medium**, **Low**, or **Lowest**.
* **Size** – This is the job size of the initiative. You can select **XL**, **L**, **M**, **S**, or **XS**.
* **Score** – This is the WSJF score of the initiative.
* Calendar icon – Hovering over the icon shows the following defined dates of the initiative lifecycle:
    * **Intake** – This is the date when the initiative is accepted based on business requirements.
    * **Start** – This is the date when the first actions are taken to start implementation.
    * **Go-Live** – This is the date when the app is expected to be up and running.
* Icon of the linked app – Clicking this shows the information about the Mendix app that is linked with the initiative.
* Avatar of the initiative owner – Hovering over the avatar shows the name of the initiative owner.
* Ellipsis (**...**) – Clicking this button opens a menu that enables you to [edit](#edit-delete-initiative), [archive](#archive-initiative), or [delete](#edit-delete-initiative) the initiative.
  
    {{% alert type="info" %}}Both Portfolio Managers and Contributors can edit, archive, or delete an initiative. Only Viewers cannot do these actions. For more information on roles and permissions, see the [Access Management](#access-management) section.{{% /alert %}}

#### 3.2.4 RICE Prioritization {#rice}

{{% alert type="info" %}}For more information about RICE and each individual component of RICE, see the [RICE](/developerportal/portfolio-management/prioritization-models/#rice) section in *Prioritization Models Supported by Portfolio Management*.{{% /alert %}}

In the RICE prioritization view, all the initiatives are sequenced by their RICE scores by default. Clicking the header of a different column sequences the initiatives using the values in that column.

The list contains the following information:

* **Initiative Name** – Clicking this opens a [side pane](#view-initiative) that shows initiative details.
* **Stage** – This shows which stage the initiative is currently in.
  
    {{% alert type="info" %}}A Portfolio Manager can set up custom stages for initiatives on the [Portfolio Settings](#portfolio-settings) page.{{% /alert %}}
    
* **Reach** – This is the estimated number of relevant users that the initiative may affect within a time period. You must enter an integer in this field.
* **Impact** – This is the estimated amount of impact that the initiative may have on individual users. You can select **Massive**, **High**, **Medium**, **Low**, or **Minimal**.
* **Confidence** – This indicates how confident you are about your Impact and Reach estimates. You can select **High**, **Medium**, or **Low**.
* **Effort** – This is the estimated total amount of time that the initiative will require from all members of your team: product, design, and development. You must enter an integer in this field.
* **Score** – This is the RICE score of the initiative.
* Calendar icon – Hovering over the icon shows the following defined dates of the initiative lifecycle:
    * **Intake** – This is the date when the initiative is accepted based on business requirements.
    * **Start** – This is the date when the first actions are taken to start implementation.
    * **Go-Live** – This is the date when the app is expected to be up and running.
* Icon of the linked app – Clicking this shows the information about the Mendix app that is linked with the initiative.
* Avatar of the initiative owner – Hovering over the avatar shows the name of the initiative owner.
* Ellipsis (**...**) – Clicking this button opens a menu that enables you to [edit](#edit-delete-initiative), [archive](#archive-initiative), or [delete](#edit-delete-initiative) the initiative.
  
    {{% alert type="info" %}}Both Portfolio Managers and Contributors can edit, archive, or delete an initiative. Only Viewers cannot do these actions. For more information on roles and permissions, see the [Access Management](#access-management) section.{{% /alert %}}

### 3.3 Viewing Initiative Details {#view-initiative}

On the **Initiatives Overview** page, if you click an initiative, a side pane opens on the right side to show initiative details.

On the upper-right corner of the pane, there is a link button and an ellipsis button (**…**). Clicking the link button copies the link to the initiative. Clicking **...** opens a menu that allows you to [edit](#edit-delete-initiative), [archive](#archive-initiative), or [delete](#edit-delete-initiative) the initiative.

{{% alert type="info" %}}

Both Portfolio Managers and Contributors can edit, archive, or delete an initiative. Only Viewers cannot do these actions. For more information on roles and permissions, see the [Access Management](#access-management) section.

{{% /alert %}}

{{< figure src="/attachments/developerportal/portfolio-management/side-pane.png" >}}

When you view initiative details, you can only **Post Comment**. You cannot change any other information. To change other information, you need to [edit the initiative](#edit-delete-initiative).

### 3.4 Editing or Deleting an initiative {#edit-delete-initiative}

{{% alert type="info" %}}
Both Portfolio Managers and Contributors can edit or delete an existing initiative. Only Viewers cannot do these actions. For more information on roles and permissions, see the [Access Management](#access-management) section.
{{% /alert %}}

To edit or delete an initiative, go to the **Initiatives Overview** page, click the ellipsis button (**...**) for that initiative, and then select **Edit** or **Delete**. Alternatively, you can also click **...** in the [side pane](#view-initiative) where you view initiative details, and then select **Edit** or **Delete**.

### 3.5 Archiving an Initiative {#archive-initiative}

When an initiative is finished or the initiative is not relevant for the current time being, you can archive an initiative.

{{% alert type="info" %}}
Both Portfolio Managers and Contributors can archive an initiative. Only Viewers cannot do this action. For more information on roles and permissions, see the [Access Management](#access-management) section.
{{% /alert %}}

To archive an initiative, perform the following steps:

1. On the **Initiatives Overview** page, click the ellipsis button (**...**) for that initiative, and then select **Archive**. Alternatively, you can also click **...** in the [side pane](#view-initiative) where you view initiative details, and then select **Archive**.
2. In the dialog box that opens, select the reason why the initiative is archived: **Completed**, **Canceled**, **On Hold** or **Other Reason**, and also enter any information that other people should know about this change, and then click **Archive**.

    {{< figure src="/attachments/developerportal/portfolio-management/archive-dialog-box.png" >}}

A pop-up window opens and tells you that the initiative is successfully archived. Once the initiative is archived, you can find it on the [Archive](#archived-initiatives) page.

## 4 Archive {#archived-initiatives}

The **Archive** page shows all the initiatives that are archived. You can search for an initiative in the search bar. 

{{< figure src="/attachments/developerportal/portfolio-management/archived-initiatives.png" >}}

The list contains the following information:

* **Initiative Name** – Clicking it opens a side pane that shows the details of the archived initiative as well as why the initiative was archived, additional comments, who archived the initiative, and when.

    {{% alert type="info" %}}When you view the details of an archived initiative, you can only **Post Comment**. You cannot edit any other information.{{% /alert %}}

* **Department** – This shows the department to which the initiative belongs.
* **Stage** – This shows which stage the initiative was in when it was archived.
* **Archiving Reason** – This shows reason why the initiative was archived.
* **Archived Date** – This shows the date when the initiative was archived.
* **Archived By** – This shows the avatar of the user who archived the initiative.
* Ellipsis (**...**) icon – Clicking this opens a menu that enables you to [restore](#restore-delete-archived-initiative) or [delete](#restore-delete-archived-initiative) the archived initiative.
  
    {{% alert type="info" %}}Both Portfolio Managers and Contributors can restore or delete an archived initiative. Only Viewers cannot do these actions. For more information on roles and permissions, see the [Access Management](#access-management) section.{{% /alert %}}

### 4.1 Restoring or Deleting an Archived Initiative {#restore-delete-archived-initiative}

{{% alert type="info" %}}
Both Portfolio Managers and Contributors can restore or delete an archived initiative. Only Viewers cannot do these actions. For more information on roles and permissions, see the [Access Management](#access-management) section.
{{% /alert %}}

To restore or delete an archived initiative, go to the **Archive** page, click the ellipsis button (**...**) for that initiative, and then select **Restore** or **Delete**. After you restore an archived initiative, it goes back to the [Initiatives Overview](#initiatives-overview) page.

Alternatively, to delete an archived initiative, you can also click the ellipsis button (**...**) in the side pane where you view the archived initiative details, and then select **Delete**.

## 5 Access Management {#access-management}

The **Access Management** page shows all the users who have access to this portfolio. Portfolio Managers can see [access requests](#access-requests) by clicking the **Access Requests** tab. This tab is not visible for Contributors and Viewers.

{{< figure src="/attachments/developerportal/portfolio-management/access-management.png" >}}

There are three access roles: **Portfolio Managers**, **Contributors**, and **Viewers**.

The table below shows the permissions of Portfolio Managers, Contributors, and Viewers:

| Action | Portfolio Manager | Contributor | Viewer |
| --- | --- | --- | --- |
| Invite users | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/cross-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/cross-mark.svg" >}} |
| Remove user permissions and roles | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/cross-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/cross-mark.svg" >}} |
| Update user permissions and roles | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/cross-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/cross-mark.svg" >}} |
| View user access information | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} |
| Manage portfolio settings | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/cross-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/cross-mark.svg" >}} |
| Delete the portfolio | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/cross-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/cross-mark.svg" >}} |
| Create initiatives | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/cross-mark.svg" >}} |
| Edit existing initiatives | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/cross-mark.svg" >}} |
| Archive and restore initiatives | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/cross-mark.svg" >}} |
| Delete initiatives | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/cross-mark.svg" >}} |
| View initiative details | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} |
| Create comment | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} |
| Edit comments | Own comments | Own comments | Own comments |
| Delete comments | Own comments | Own comments | Own comments |
| View comments | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} |
| Add initiative attachments | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/cross-mark.svg" >}} |
| Delete initiative attachments | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/cross-mark.svg" >}} |
| View and download initiative attachments | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} |

### 5.1 Adding New Users {#add-users}

{{% alert color="info" %}}Only [Portfolio Managers](#access-management) can add new users.{{% /alert %}}

1. Go to **Access Management**.
2. On the upper-right corner, click **Add Users**.
3. In the dialog box, enter the **Email Address** of the user who you want to invite. You can add multiple email addresses if you need to invite more than one user. The users can be people within your company or outside your company. For users outside your company, their names and profile pictures are not displayed.
4. Select an **Access Role** for the user(s) – **Portfolio Manager**, **Contributor**, or **Viewer**. This determines the user's access level to all the initiatives in this portfolio.
5. Click **Add to List**.
6. Click **Send Invites**.

The users that you invited receive a notification per email and now appear on the **Access Management** page. 

For users outside your company, they need to accept their invitation. Once they accept, their **Status** will change from **Pending** to **Active**. 

For users within your company, if they have a Mendix account, their **Status** will be **Active** immediately; and if they do not have an Mendix account, their **Status** will change from **Pending** to **Active** after they create a Mendix account.

### 5.2 Editing and Removing a User

At the end of the row, click the ellipsis button (**...**), and then select the corresponding action. To update the permissions and the role of a user, click **Edit**. To remove a user from the portfolio, click **Remove**.

{{< figure src="/attachments/developerportal/portfolio-management/edit-delete-user.png" >}}

### 5.3 Access Requests {#access-requests}

Users from the same company can request access to a restricted portfolio from the [Portfolio Landscape Overview](#portfolio-landscape) by clicking **Request to Join** on the portfolio card. Access requests need to be approved by a Portfolio Manager. Portfolio Managers automatically get a [notification](/developerportal/#notifications) for a new access request. 

{{< figure src="/attachments/developerportal/portfolio-management/access-requests.png" >}}

The **Access Requests** page shows all open access requests for the portfolio with the following items:

* **Requested By** – This is the name and avatar of the user who requested access.
* **Role** – This is the access role that was requested by the user.
* **Date** – This is the date when the request was made.
* **Reject** – Clicking this rejects the request.
* **Approve** – Clicking this approves the request and gives the user access to the portfolio.

## 6 Portfolio Settings {#portfolio-settings}

{{% alert color="info" %}}

The **Portfolio Settings** page is only available for Portfolio Managers.

{{% /alert %}}

### 6.1 Changing Portfolio Settings

On the **Portfolio Settings** page, Portfolio Managers can change the following settings:

* **Portfolio Name** – Click **Edit Portfolio Details** to change the portfolio name.

* **Portfolio Description** – Click **Edit Portfolio Details** to change the portfolio description.

* **Privacy Settings** – You can set the settings to **Private** or **Restricted**. For details on privacy settings, see the [Different Privacy Settings of a Portfolio](#privacy-settings) section.

    {{% alert color="info" %}}If the toggle on the [Privacy Requests](/developerportal/control-center/#privacy-requests) tab is turned on in Control Center, a Mendix Admin needs to approve any change of **Privacy Settings**. In that case, a Mendix Admin will receive a notification about your change request and can approve or reject your request from Control Center. You can cancel a pending request by clicking **Cancel Request**.{{% /alert %}}
    
* **Stages** – Click the **^** button or the **v** button to move a stage upwards or downwards.

    {{< figure src="/attachments/developerportal/portfolio-management/move-upwards-downwards.png" >}}

* **Prioritization Model**

* **Currency**

* **Departments**

* **Countries**

* **Scope Estimation - Use Cases**

* **Expected Value - Types**

To delete or edit an existing option for a setting, hover over the option to show the **Delete** button or the **Edit** button at the end of row, and then click the corresponding button.

{{< figure src="/attachments/developerportal/portfolio-management/delete-edit-stage.png" >}}

To add an option for a setting, click **Add Department**, **Add Country**, **Add Stage**, **Add Use Case**, or **Add Value Type** below the corresponding list.

### 6.2 Deleting a Portfolio

1. On the **Portfolio Settings** page, click **Delete** at the bottom of the page. The **Delete Portfolio** Dialog box opens.
2. Read the warning carefully. Deleting a portfolio means that you permanently delete the portfolio, including all the data in it. This change cannot be reverted.
3. If you decide to continue, type *DELETE* in the text box.
4. Click **Delete**. The portfolio is permanently deleted.

{{% alert color="info" %}}A Mendix Admin can also delete a portfolio in the [Portfolios](/developerportal/control-center/#delete-portfolio) section of Control Center.{{% /alert %}}

## 7 Read More

* [Prioritization Models Supported by Portfolio Management](/developerportal/portfolio-management/prioritization-models/)
