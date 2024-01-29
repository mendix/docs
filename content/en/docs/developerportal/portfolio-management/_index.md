---
title: "Portfolio Management"
url: /developerportal/portfolio-management/
weight: 25
description: "Describes the Mendix Portfolio Management app."
tags: ["Portfolio Management"]
#The anchor #portfolios-settings and #privacy-settings below is mapped, so it should not be removed or changed. If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Portfolio Management](https://portfolio.mendix.com) tool is available to all Mendix customers. It enables staying informed about initiatives and managing them in the different development stages. It provides portfolio managers, business stakeholders, and developers with everything they need to collaborate effectively in one place and bring new initiatives to the Mendix Platform. To start the Portfolio Management app, go to the Developer Portal, open the [Switch to menu](/developerportal/), and select **Portfolio**.

## 2 Portfolio Landscape Overview {#portfolio-landscape}

When you start the Portfolio Management app for the first time, an introduction page opens. The introduction page describes the new features and gives helpful information. You can click **Get Started** to open the **Portfolio Landscape Overview** page. After that, when you start the Portfolio Management app, the **Portfolio Landscape Overview** page directly opens. You can click **Learn more about Portfolio Management** to go back to the introduction page.

### 2.1 My Portfolios vs Company Portfolios {#my-porfolios-vs-company-portfolios}

The **Portfolio Landscape Overview** page contains two sections: **My Portfolios** and **Company Portfolios**. A section only appears if there is at least one [portfolio card](#portfolio-card) in that section.

{{< figure src="/attachments/developerportal/portfolio-management/portfolio-landscape-overview.png" class="image-border" alt="portfolio-landscape-overview" >}}

* **My Portfolios** – This section shows all the portfolios where you are a portfolio member. Clicking a portfolio card opens the portfolio.

* **Company Portfolios** – This section shows all the restricted and open portfolios in your company, for which you are not a portfolio member. 
  * Restricted portfolios – Clicking the portfolio card shows more details about the restricted portfolio. To join a restricted portfolio, click **Request to Join** on the portfolio card. A Portfolio Manager needs to approve this [access request](#access-requests).
  * Open portfolios – You can directly access the open portfolio by clicking the portfolio card. You will have the same access rights as the Viewer of the portfolio. To join an open portfolio, click **Request to Join** on the lower-left corner after opening the portfolio. A Portfolio Manager needs to approve this [access request](#access-requests).

### 2.2 Portfolio Cards {#portfolio-card}

On the **Portfolio Landscape Overview** page, each portfolio is presented in a card. On a portfolio card, you can see the name of the portfolio, the company to which it belongs, the [privacy settings](#privacy-settings), and the avatars of Portfolio Managers (up to avatars of four Portfolio Managers).

#### 2.2.1 Different Privacy Settings of a Portfolio {#privacy-settings}

Currently, the privacy settings of a portfolio can be private, restricted, or open. The table below shows their differences:

| Portfolio type | Visible in the **Company Portfolios** section?               | How to access the portfolio?                                 |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Private        | {{< figure src="/attachments/developerportal/portfolio-management/cross-mark.svg" >}} | A Portfolio Manager can [add users to the portfolio](#add-users). |
| Restricted     | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | <ul><li>A Portfolio Manager can [add users to the portfolio](#add-users).</li><li>Users can also request to join by clicking **Request to Join** on the portfolio card. A Portfolio Manager needs to approve this [access request](#access-requests).</li></ul> |
| Open           | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | <ul><li>All company members can access an open portfolio without being a portfolio member. They have the same access rights as the Viewer of the portfolio.</li><li>A Portfolio Manager can [add users to the portfolio](#add-users).</li><li>Users can also request to join by clicking **Request to Join** on the lower-left corner after opening the portfolio. A Portfolio Manager needs to approve this [access request](#access-requests).</li></ul> |

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

3. For **Privacy Settings**, select **Private**, **Restricted**, or **Open**. For details on privacy settings, see the [Different Privacy Settings of a Portfolio](#privacy-settings) section.

    {{% alert color="info" %}}If the toggle on the [Privacy Requests](/control-center/portfolios/#privacy-requests) tab is turned on in Control Center, a Mendix Admin needs to approve the creation of a restricted or open portfolio. In that case, a Mendix Admin will receive a notification about your request and can approve or reject your request from the [Control Center](/control-center/portfolios/#privacy-requests). The **Privacy Settings** of the portfolio will be **Private** until a Mendix Admin approves your request.{{% /alert %}}

4. For **Prioritization Model**, select [WSJF Prioritization](/developerportal/portfolio-management/#wsjf) or [RICE Prioritization](/developerportal/portfolio-management/#rice).

5. From the **Currency** drop-down list, select the default currency for this portfolio.

6. Click **Create**.

The portfolio is created. You are the first Portfolio Manager of this portfolio. You can start [inviting other people](#add-users) to the portfolio.

## 3 Initiatives Overview {#initiatives-overview}

In the Portfolio Management app, the term "Initiative" represents a business objective or strategic goal, and could span across multiple apps. An initiative can be related to multiple apps or just one small part of a big app. For progress tracking, Mendix recommends breaking down an app into smaller initiatives whenever possible.

The **Initiatives Overview** page gives an overview of all the initiatives in this portfolio.

{{< figure src="/attachments/developerportal/portfolio-management/initiatives-overview.png" >}}

In the search box on the top, you can search for an initiative by the initiative name.

On the upper-right corner, you can use the drop-down list to [change the view](#change-view). Clicking **Filters** enables you to filter initiatives and the results persist even after you change to a new view. You can [export and import Initiatives](/developerportal/portfolio-management/export-import-initiatives/) by clicking the {{% icon name="office-sheet" %}} icon, and [create a new initiative](#create-new-initiative) by clicking the **Create Initiative** button.

### 3.1 Creating a New Initiative {#create-new-initiative}

{{% alert type="info" %}}Both Portfolio Managers and Contributors can create new initiatives. Only Viewers cannot do this action. For more information on roles and permissions, see the [Access Management](#access-management) section.{{% /alert %}}

To create a new initiative and add details to it, do as follows:

1. [Create the initiative.](#create-initiative)
2. [Add general information.](#add-general-information)
3. [Link Epics to an Initiative.](#link-epics)
4. [Add planning information.](#add-planning-information)
5. [Add prioritization information.](#add-prioritization-information)
6. [Add estimated value.](#add-estimated-value)
7. [Add comments.](#add-comments)
8. [Save initiative details.](#save-details)

#### 3.1.1 Creating the Initiative {#create-initiative}

To create a new initiative, follow these steps:

1. Go to the **Initiatives Overview** page.
2. Click **Create Initiative**.
3. Enter the **Initiative Name** and the **Stage** in which the initiative is. 
4. Click **Create Initiative**. The initiative is created and appears on the **Initiatives Overview** page. The **Edit Initiative** side pane opens on the right side of the page where you can add the details of the new initiative.

Now you can proceed to [add general information](#add-general-information).

#### 3.1.2 Adding General Information {#add-general-information}

To add general information to your initiative, follow these steps:

{{% alert color="info" %}}Some fields in this procedure have an {{% icon name="info-circle" %}} icon next to them, for example, the **Link Existing App** field. You can check out the descriptions of these fields by hovering over the {{% icon name="info-circle" %}} icons.{{% /alert %}}

1. In the **Edit Initiative** side pane, select **Tags** for the initiative. You can use tags to classify your initiatives, for example by types. You can select existing tags or create new tags. 

    {{% alert color="info" %}}For more information about how to create new tags, edit existing tags, or delete existing tags, see the [Managing Tags](#manage-tags) section.{{% /alert %}}

2. Enter the **Description** of the initiative.

3. If any existing Mendix apps or any apps in development are related to this initiative, you can link these apps:

    1. In the search box below **Link Existing App**, search the app. The system displays the first 50 results.

    2. Select the app that you want to link to the initiative. If you like to see more information about a linked app, click the app name after it is linked.

    3. Repeat the two steps above to link more apps if you want to link more than one app.

4. Set the **Owner** for the initiative.

5. Select the **Stage**, **Department**, **Country**, and **Use Case** for the initiative.

    {{% alert type="info" %}}A Portfolio Manager can customize the options for **Stage**, **Department**, **Country**, and **Use Case** on the [Portfolio Settings](#portfolio-settings) page.{{% /alert %}}

6. If you want to add attachments, click **+** to add them. Once an attachment is added, all the users can open and download it.

Now you can proceed to [link Epics to your initiative](#link-epics).

##### 3.1.2.1 Managing Tags {#manage-tags}

While you are in the process of [adding general information](#add-general-information), you can manage tags as follows:

In the **Edit Initiative** side pane, click **Settings** ({{% icon name="cog" %}}) next to the **Tags** text box.

{{< figure src="/attachments/developerportal/portfolio-management/manage-tags.png" >}}

The **Manage Tags** dialog box opens.

{{< figure src="/attachments/developerportal/portfolio-management/manage-tags-dialog-box.png" >}}

To create a new tag, do as follows:

1. Click **Add Tag**. A text box appears, with a colored circle indicating the color of the new tag.
2. In the text box, enter the name for the new tag.
3. If you want to change the color of the new tag, click the colored circle and select a different color.
4. Click **Save** ({{% icon name="checkmark-circle" %}}) to save the new tag.

To edit an existing tag, do as follows:

1. To change the tag name, click the name of the tag. After the name becomes editable. Edit the name in the text box, and then click outside the text box to save the change.
2. To change the tag color, click the colored circle, and select a different color.

To delete an existing tag, do as follows:

1. Hover over the row where the tag is listed. A **Delete** button ({{% icon name="trash-can" %}}) appears at the end of the row.
2. Click **Delete**. The **Confirmation** dialog box opens.
3. Click **Delete Tag**.

#### 3.1.3 Linking Epics to an Initiative {#link-epics}

{{% alert color="info" %}}
Only Portfolio Managers and Contributors from the same company as the portfolio can link epics to an initiative. Viewers or external members cannot do this action.
{{% /alert %}} 

You can link any epic from [Epics](/developerportal/project-management/epics/) to an initiative. Follow the procedure below:

1. Make sure the app to which the epics belong is already linked in the **Link Existing App** field. 

   If the epics that you want to link belong to multiple apps, make sure these apps are all linked in the **Link Existing App** field.

   {{% alert color="info" %}}For more information about the differences among initiatives, apps, and epics, read the [section](#differences-initiatives-apps-epics) below. {{% /alert %}} 

2. At the bottom of the **Epics** section, click **+ Link Epics**. The **Link Epics** dialog window opens.

3. Select the app to which the epics belong.

4. Select the epics. You can search by the epic ID or name. 

5. Click **Add** to link the selected epics to the initiative. 

6. If you need to link epics belonging to other apps to this initiative, repeat the steps from 2 to 5, until you link all the epics.

Once an epic is added, its ID, name, owner, and progress are displayed in this section. Users can go to the epic directly from here if they have rights to the app to which the epic belongs.

{{% alert color="info" %}}
To remove an existing linked epic from the initiative, hover over the row where the epic is listed, and click the **Delete** button ({{% icon name="trash-can" %}}) that appears at the end of the row.
{{% /alert %}}

Now you can proceed to [add planning information](#add-planning-information).

##### 3.1.3.1 Differences Among Initiatives, Apps, and Epics {#differences-initiatives-apps-epics}

An initiative is usually worked upon in several epics. Initiatives are bigger projects that could span across multiple apps, systems, and services, while epics are related to a single app only and bundle user stories together. To learn more about the differences among initiatives, epics, and user stories, check out our [learning path](https://academy.mendix.com/link/modules/599/lectures/4660/2.2-The-Role-of-Portfolio-Management-in-the-Application-Lifecycle) and the examples below:

{{< figure src="/attachments/developerportal/portfolio-management/initiative-epic-user-story.png" >}}

The following figure shows examples of three portfolios. The first portfolio is to add a feature to an app, the second example is a minimal viable product (MVP) of an app, and the last example is to build an integration between two apps.

{{< figure src="/attachments/developerportal/portfolio-management/portfolios-initatives-apps-epics-stories.png" >}}

#### 3.1.4 Adding Planning Information {#add-planning-information}

In the **Edit Initiative** side pane, click **Planning** to show all the fields in this section. Set the following dates in this section:

* **Intake Date** – the date when the initiative is accepted based on business requirements
* **Start Date** – the date when the first actions are taken to start implementation
* **Go-Live date** – the date when the initiative is expected to be delivered or implemented.

Now you can proceed to [add prioritization information](#add-prioritization-information).

#### 3.1.5 Adding Prioritization Information {#add-prioritization-information}

In the **Edit Initiative** side pane, click **Prioritization** to show all the fields in this section. Set the values for the fields in this section.

{{% alert color="info" %}}
The title of this section can be **Prioritization: WSJF Model** or **Prioritization: RICE Model**, depending on the prioritization model selected on the [Portfolio Settings](#portfolio-settings) page. For more information about the prioritization models and the components of each model, see the [WSJF](/developerportal/portfolio-management/prioritization-models/#wsjf) section or the [RICE](/developerportal/portfolio-management/prioritization-models/#rice) section in *Prioritization Models Supported by Portfolio Management.*
{{% /alert %}}

Now you can proceed to [add estimated value](#add-estimated-value).

#### 3.1.6 Adding Estimated Value {#add-estimated-value}

In the **Edit Initiative** side pane, click **Estimated Value** to show all the fields in this section. These fields can solidify your business case and drive internal adoption, and help you map the realized value upon completion. Add information in the following fields in this section:

* **Type of Value** – Select the type of the value that is created by the initiative.
  
    {{% alert color="info" %}}A Portfolio Manager can customize the options for **Type of Value** on the [Portfolio Settings](#portfolio-settings) page.{{% /alert %}}
    
* **Frequency** – Select whether the value is **One-Off** or **Recurring**.
* **Value** – Enter the amount of the value in numbers. Use a comma every third digit from the right (for example, *1,000,000*)
* **Additional Information** – Enter anything that can help clarify how estimated value may impact the overall costs of the initiative.

If the initiative creates more than one type of value, click **Add Value** to add more value. After you enter all values, the system shows the **Sum of Recurring Values** and the **Sum of One-Off Values**.

Now you can proceed to [add comments](#add-comments).

#### 3.1.7 Adding Comments {#add-comments}

If you want to add a comment, click **Comments** in the **Edit Initiative** side pane, and then click **Post Comment** after you add the comment.

Now you can proceed to [save initiative details](#save-details).

#### 3.1.8 Saving Initiative Details {#save-details}

At the bottom of the **Edit Initiative** side pane, click **Save**. Now all the details are saved for the new initiative that you just created.

### 3.2 Changing Your View {#change-view}

To change your view on the **Initiatives Overview** page, click the drop-down list on the upper-right corner, and then select one of the following views:

{{< figure src="/attachments/developerportal/portfolio-management/switch-view.png" >}}

* [Kanban view](#kanban-view)
* [List view](#list-view)
* [WSJF Prioritization](#wsjf) or [RICE Prioritization](#rice) (the section you see here depends on the prioritization model selected in [Portfolio Settings](#portfolio-settings))
* [Planning view](#planning-view)

#### 3.2.1 Kanban View {#kanban-view}

In Kanban view, all the initiatives are represented by initiative cards, and are categorized in different columns. A column indicates the stage that an initiative is currently in. Clicking an initiative card opens a [side pane](#view-initiative) that shows initiative details. To move an initiative to a different stage, hover over the initiative card, and then click **Move Left** ({{% icon name="chevron-left" %}}) or **Move Right** ({{% icon name="chevron-right" %}}) on the left or right side of the card.

{{% alert type="info" %}}A Portfolio Manager can set up custom stages for initiatives on the [Portfolio Settings](#portfolio-settings) page.{{% /alert %}}

Each initiative card shows the following information:

{{< figure src="/attachments/developerportal/portfolio-management/initiative-card.png" >}}

* ① Initiative name
* ② **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) – Clicking this button opens a menu that enables you to [edit](#edit-delete-initiative), [archive](#archive-initiative), or [delete](#edit-delete-initiative) the initiative.
  
    {{% alert type="info" %}}Both Portfolio Managers and Contributors can edit, archive, or delete an initiative. Only Viewers cannot do these actions. For more information on roles and permissions, see the [Access Management](#access-management) section.{{% /alert %}}
    
* ③ Tags for the initiative – These tags are used to classify the initiative (tags can be used, for example, to indicate the types of initiatives).
* ④ Department – This shows the department to which the initiative belongs.
* ⑤ **Dates** icon ({{% icon name="calendar" %}}) – Hovering over this icon shows the following defined dates of the initiative lifecycle:
    * **Intake** – This shows the date when the initiative is accepted based on business requirements.
    * **Start** – This shows the date when the first actions are taken to start implementation.
    * **Go-Live** – This shows the date when the initiative is expected to be delivered or implemented.
* ⑥ Icon of the linked apps – If there is only one linked app, clicking the icon shows the information about the app. If there are multiple apps or no linked apps, the icon is not clickable.
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
* **Go-Live Date** – This shows the date when the initiative is expected to be delivered or implemented.
* Icon of the linked apps – If there is only one linked app, clicking the icon shows the information about the app. If there are multiple apps or no linked apps, the icon is not clickable.
* Avatar of the initiative owner – Hovering over the avatar shows the name of the initiative owner.
* **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) – Clicking this button opens a menu that enables you to [edit](#edit-delete-initiative), [archive](#archive-initiative), or [delete](#edit-delete-initiative) the initiative.
  
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
* **Dates** ({{% icon name="calendar" %}}) – Hovering over the icon shows the following defined dates of the initiative lifecycle:
    * **Intake** – This is the date when the initiative is accepted based on business requirements.
    * **Start** – This is the date when the first actions are taken to start implementation.
    * **Go-Live** – This shows the date when the initiative is expected to be delivered or implemented.
* Icon of the linked apps – If there is only one linked app, clicking the icon shows the information about the app. If there are multiple apps or no linked apps, the icon is not clickable.
* Avatar of the initiative owner – Hovering over the avatar shows the name of the initiative owner.
* **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) – Clicking this button opens a menu that enables you to [edit](#edit-delete-initiative), [archive](#archive-initiative), or [delete](#edit-delete-initiative) the initiative.
  
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
* **Dates** ({{% icon name="calendar" %}}) – Hovering over the icon shows the following defined dates of the initiative lifecycle:
    * **Intake** – This is the date when the initiative is accepted based on business requirements.
    * **Start** – This is the date when the first actions are taken to start implementation.
    * **Go-Live** – This shows the date when the initiative is expected to be delivered or implemented.
*  Icon of the linked apps – If there is only one linked app, clicking the icon shows the information about the app. If there are multiple apps or no linked apps, the icon is not clickable.
* Avatar of the initiative owner – Hovering over the avatar shows the name of the initiative owner.
* **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) – Clicking this button opens a menu that enables you to [edit](#edit-delete-initiative), [archive](#archive-initiative), or [delete](#edit-delete-initiative) the initiative.
  
    {{% alert type="info" %}}Both Portfolio Managers and Contributors can edit, archive, or delete an initiative. Only Viewers cannot do these actions. For more information on roles and permissions, see the [Access Management](#access-management) section.{{% /alert %}}

#### 3.2.5 Planning View {#planning-view}

The planning view gives you a clear visual representation of initiatives on a timeline to assist you with planning, coordination, and decision-making. Initiatives in this view are sorted by their go-live date. You can see maximum one year back and two years ahead from the current date.

{{< figure src="/attachments/developerportal/portfolio-management/planning-view.png" >}}

The view contains the following information:

* Initiative Name – Clicking this opens a side pane that shows initiative details.
* Icon of the linked apps – If there is only one linked app, clicking the icon shows the information about the app. If there are multiple apps or no linked apps, the icon is not clickable.
* Avatar of the initiative owner – Hovering over the avatar shows the name of the initiative owner.
* Timeline bar - The timeline bars indicates the start date and the go-live date of an initiative. Hovering over the timeline bar shows these dates in a tooltip:
    * **Start date** – The start date is the date when the first actions are taken to start implementation.
    * **Go-Live** – The go-live date is the date when the initiative is expected to be delivered or implemented.
* Today Indicator (the vertical blue line) – This indicates the date of today.
* **Today** – Clicking **Today** on the lower-right corner brings the view back to today.
* **Weeks**, **Months**, and **Quarters**  – Clicking one of these buttons on the lower-right corner changes the zoom level of the timeline.

### 3.3 Viewing Initiative Details {#view-initiative}

On the **Initiatives Overview** page, if you click an initiative, a side pane opens on the right side to show initiative details.

On the upper-right corner of the pane, there is a **Copy link** ({{% icon name="hyperlink" %}}) button and **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) button. Clicking **Copy link** copies the link to the initiative. Clicking **More Options** opens a menu that allows you to [edit](#edit-delete-initiative), [archive](#archive-initiative), or [delete](#edit-delete-initiative) the initiative.

{{% alert type="info" %}}
Both Portfolio Managers and Contributors can edit, archive, or delete an initiative. Only Viewers cannot do these actions. For more information on roles and permissions, see the [Access Management](#access-management) section.
{{% /alert %}}

{{< figure src="/attachments/developerportal/portfolio-management/side-pane.png" >}}

When you view initiative details, you can only post comments or link epics. You cannot change any other information. To change other information, you need to [edit the initiative](#edit-delete-initiative).

### 3.4 Editing or Deleting an initiative {#edit-delete-initiative}

{{% alert type="info" %}}
Both Portfolio Managers and Contributors can edit or delete an existing initiative. Only Viewers cannot do these actions. For more information on roles and permissions, see the [Access Management](#access-management) section.
{{% /alert %}}

To edit or delete an initiative, go to the **Initiatives Overview** page, click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) for that initiative, and then select **Edit** or **Delete**. Alternatively, you can also click **More Options** in the [side pane](#view-initiative) where you view initiative details, and then select **Edit** or **Delete**.

### 3.5 Archiving an Initiative {#archive-initiative}

When an initiative is finished or the initiative is not relevant for the current time being, you can archive an initiative.

{{% alert type="info" %}}
Both Portfolio Managers and Contributors can archive an initiative. Only Viewers cannot do this action. For more information on roles and permissions, see the [Access Management](#access-management) section.
{{% /alert %}}

To archive an initiative, perform the following steps:

1. On the **Initiatives Overview** page, click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) for that initiative, and then select **Archive**. Alternatively, you can also click **More Options** in the [side pane](#view-initiative) where you view initiative details, and then select **Archive**.
2. In the dialog box that opens, select the reason why the initiative is archived: **Completed**, **Canceled**, **On Hold** or **Other Reason**, and also enter any information that other people should know about this change, and then click **Archive**.

    {{< figure src="/attachments/developerportal/portfolio-management/archive-dialog-box.png" >}}

A pop-up window opens and tells you that the initiative is successfully archived. Once the initiative is archived, you can find it on the [Archive](#archived-initiatives) page.

### 3.6 Exporting and Importing Initiatives

On the **Initiatives Overview** page, you can import and export initiatives. For details, see [Export and Import Initiatives](/developerportal/portfolio-management/export-import-initiatives/).

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
* **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) – Clicking this opens a menu that enables you to [restore](#restore-delete-archived-initiative) or [delete](#restore-delete-archived-initiative) the archived initiative.
  
    {{% alert type="info" %}}Both Portfolio Managers and Contributors can restore or delete an archived initiative. Only Viewers cannot do these actions. For more information on roles and permissions, see the [Access Management](#access-management) section.{{% /alert %}}

### 4.1 Restoring or Deleting an Archived Initiative {#restore-delete-archived-initiative}

{{% alert type="info" %}}
Both Portfolio Managers and Contributors can restore or delete an archived initiative. Only Viewers cannot do these actions. For more information on roles and permissions, see the [Access Management](#access-management) section.
{{% /alert %}}

To restore or delete an archived initiative, go to the **Archive** page, click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) for that initiative, and then select **Restore** or **Delete**. After you restore an archived initiative, it goes back to the [Initiatives Overview](#initiatives-overview) page.

Alternatively, to delete an archived initiative, you can also click **More Options** in the side pane where you view the archived initiative details, and then select **Delete**.

## 5 Access Management {#access-management}

The **Access Management** page allows you to view and manage user access to the portfolio.

{{< figure src="/attachments/developerportal/portfolio-management/access-management.png" >}}

### 5.1 Members {#members}

The **Members** tab lists all the users that have portfolio access. You can search a user by their user name, email, or company. You can also filter users by their role and status. The list contains the following items:

* **User Name** – This is the name of the user.

* **Email** – This is the email of the user.

* **Company** – This shows the company to which the user belongs.

* **Status** – This shows whether the user is active or deactivated.

  {{% alert color="info" %}}A Mendix Admin can activate or deactivate a user on the [Members](/control-center/members/#active-deactive-members) page in Control Center.{{% /alert %}}

* **Role** – This is the role of the user. A user can be a Portfolio Manager, Contributor, or Viewer. For more information about the permissions of each role, see the table below in this section.

* **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) (only available to Portfolio Managers) – Clicking the button opens a menu with the following items:

    * **Edit Role** – Selecting this allows you to change the role of the user.
    * **Remove** – Selecting this allows you to remove the user from the portfolio. 

The table below shows the permissions of Portfolio Managers, Contributors, and Viewers:

| Action | Portfolio Manager | Contributor | Viewer\* |
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
| Export and import initiatives | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/cross-mark.svg" >}} |
| Link and unlink epics | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/cross-mark.svg" >}} |
| View linked epics | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/portfolio-management/check-mark.svg" >}} |

\* For open portfolios, all company members (other than the portfolio members) have the same rights as the Viewer of the portfolio.

#### 5.1.1 Leaving the Portfolio

To leave the portfolio, click the **Leave** button on the right side above the member list. 

If you are the only Portfolio Manager of the portfolio, when you click **Leave**, a dialog window opens and asks you to choose one of these two options:

* Delete the portfolio permanently together with all the data in the portfolio when you leave the portfolio; or
* Assign another user to be the new Portfolio Manager before you leave the portfolio.
    * If you choose to assign another user to be the new Portfolio Manager, click **Assign Portfolio Manager**, and then select an existing member and edit their role to Portfolio Manager, or invite a new member to be the new Portfolio Manager.

#### 5.1.2 Adding New Users {#add-users}

{{% alert color="info" %}}Only [Portfolio Managers](#access-management) can add new users.{{% /alert %}}

1. Go to **Access Management**.
2. On the upper-right corner of the **Members** tab, click **Add Users**.
3. In the dialog box, enter the email address of the user who you want to invite. The **Email Address** field also gives a drop-down list with all the active users from your company. You can add multiple email addresses if you need to invite more than one user. The users can be people within your company or outside your company. For users outside your company, their names and profile pictures are not displayed.
4. Select an **Access Role** for the users that you add – **Portfolio Manager**, **Contributor**, or **Viewer**. This determines their access level to all the initiatives in this portfolio.
5. Click **Add to List**.
6. Click **Send Invites**.

The users that you invited receive a notification per email and now appear on the **Access Management** page. 

For users outside your company, they need to accept the invitation. They will appear on the **Pending Invites** tab until they accept or reject the invitation. After they accept the invitation, they will appear in the **Members** tab.

For users within your company, they do not need to accept their invitation. If they have a Mendix account, they will immediately be given access and appear on the **Members** tab. If they do not have an Mendix account, they will appear on the **Pending Invites** tab. After they create a Mendix account and log in to Portfolio Management, they will immediately be given access and appear on the **Members** tab. 

#### 5.1.3 Removing Deactivated Users

{{% alert color="info" %}}Only [Portfolio Managers](#access-management) can remove a deactivated user.{{% /alert %}}

When there are deactivated members in the portfolio, the **Remove Deactivated Users** button becomes available above the list on the right side. Clicking the button allows you to remove all deactivated users from this portfolio in one go. If a deactivated user that you will remove still owns initiatives, these initiatives will no longer have an owner after you remove the user from the portfolio.

### 5.2 Access Requests {#access-requests}

{{% alert color="info" %}}
This tab is only visible to Portfolio Managers.
{{% /alert %}}

Users from the same company can request to join to a restricted or open portfolio.

For restricted portfolios you can request to join from the [Portfolio Landscape Overview](#portfolio-landscape) by clicking **Request to Join** on the portfolio card. For open portfolios you can request to join by clicking **Request to Join** on the lower-left corner after opening the portfolio. Access requests need to be approved by a Portfolio Manager. Portfolio Managers automatically get a [notification](/developerportal/global-navigation/#notifications) for a new access request.

{{< figure src="/attachments/developerportal/portfolio-management/access-requests.png" >}}

The **Access Requests** tab shows all open access requests for the portfolio. You can search a user by their user name. You can also filter users by their role. The list contains the following items:

* **Requested By** – This is the name and avatar of the user who requested access.
* **Role** – This is the access role that was requested by the user.
* **Date** – This is the date when the request was made.
* **Reject** – Clicking this rejects the request.
* **Approve** – Clicking this approves the request and gives the user access to the portfolio.

### 5.3 Pending Invites {#pending-invites}

{{% alert color="info" %}}
This tab is only visible to Portfolio Managers.
{{% /alert %}}

When a Portfolio Manager invites a user outside the company to join the portfolio, the user gets an invite via email. The user must first accept the invite, then they can access this portfolio. Until the user accepts or rejects the invite, the invite appears on the **Pending Invites** tab. After they accept the invitation, they will appear on the **Members** tab.

The **Pending Invites** tab shows all pending invites of external users. You can search a user by their email. You can also filter users by their role. The list contains the following items:

* **Email** – This shows the email of the invited user.
* **Role** – This shows the access role of the invited user.
* **Invite Date** – This shows the date the invite was sent.
* **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) – Clicking this button opens a menu with the following items:

    * **Edit Role** – Selecting this allows you to change the access role of the pending invite.

    * **Delete** – Selecting this allows you to cancel the pending invite.

## 6 Portfolio Settings {#portfolio-settings}

{{% alert color="info" %}}
The **Portfolio Settings** page is only available for Portfolio Managers.
{{% /alert %}}

### 6.1 Changing Portfolio Settings

On the **Portfolio Settings** page, Portfolio Managers can change the following settings:

* **Portfolio Name** – Click **Edit Portfolio Details** to change the portfolio name.

* **Portfolio Description** – Click **Edit Portfolio Details** to change the portfolio description.

* **Privacy Settings** – You can set the settings to **Private**, **Restricted**, or **Open**. For details on privacy settings, see the [Different Privacy Settings of a Portfolio](#privacy-settings) section.

    {{% alert color="info" %}}If the toggle on the [Privacy Requests](/control-center/portfolios/#privacy-requests) tab is turned on in Control Center, a Mendix Admin needs to approve any change of **Privacy Settings**. In that case, a Mendix Admin will receive a notification about your change request and can approve or reject your request from Control Center. You can cancel a pending request by clicking **Cancel Request**.{{% /alert %}}
    
* **Stages** – Click **Move Up** ({{% icon name="chevron-up" %}}) or **Move Down** ({{% icon name="chevron-down" %}}) to move a stage upwards or downwards.

    {{< figure src="/attachments/developerportal/portfolio-management/move-upwards-downwards.png" >}}

* **Prioritization Model**

* **Currency**

* **Departments**

* **Countries**

* **Scope Estimation - Use Cases**

* **Expected Value - Types**

To delete or edit an existing option for a setting, hover over the option to show the **Delete** button ({{% icon name="trash-can" %}}) or the **Edit** button ({{% icon name="pencil" %}}) at the end of row, and then click the corresponding button.

{{< figure src="/attachments/developerportal/portfolio-management/delete-edit-stage.png" >}}

To add an option for a setting, click **Add Department**, **Add Country**, **Add Stage**, **Add Use Case**, or **Add Value Type** below the corresponding list.

### 6.2 Deleting a Portfolio

1. On the **Portfolio Settings** page, click **Delete** at the bottom of the page. The **Delete Portfolio** Dialog box opens.
2. Read the warning carefully. Deleting a portfolio means that you permanently delete the portfolio, including all the data in it. This change cannot be reverted.
3. If you decide to continue, type *DELETE* in the text box.
4. Click **Delete**. The portfolio is permanently deleted.

{{% alert color="info" %}}A Mendix Admin can also delete a portfolio in the [Portfolios](/control-center/portfolios/#delete-portfolio) section of Control Center.{{% /alert %}}

## 7 Read More

* [Prioritization Models Supported by Portfolio Management](/developerportal/portfolio-management/prioritization-models/)
* [Application Portfolio Management with Low-Code](https://www.mendix.com/application-portfolio-management/)
* [Make Strategic Decisions with Portfolio Management](https://academy.mendix.com/link/paths/145/Make-Strategic-Decisions-With-Portfolio-Management)
* [Why Portfolio Management is Crucial to App Development at Scale](https://www.mendix.com/blog/why-portfolio-management-is-crucial-to-app-development-at-scale/)
