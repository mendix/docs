---
title: "Initiatives Overview"
url: /developerportal/portfolio-management/initiatives-overview/
weight: 5
description: "Describes the Initiatives Overview page in the Mendix Portfolio Management app."
---

## Introduction

In the Portfolio Management app, the term "Initiative" represents a business objective or strategic goal, and could span across multiple apps. An initiative can be related to multiple apps or just one small part of a big app. For progress tracking, Mendix recommends breaking down an app into smaller initiatives whenever possible.

The **Initiatives Overview** page gives an overview of all the initiatives in this portfolio.

{{< figure src="/attachments/developerportal/portfolio-management/initiatives-overview.png" >}}

In the search box on the top, you can search for an initiative by the initiative name.

On the upper-right corner, you can use the drop-down list to [change the view](#change-view). You can [export and import Initiatives](/developerportal/portfolio-management/export-import-initiatives/) by clicking the import or export {{% icon name="office-sheet" %}} icon. Clicking **Filters** enables you to filter initiatives and the filters remain applied when you change to a new view. You can [create a new initiative](#create-new-initiative) by clicking the **Create Initiative** button.

## Creating a New Initiative {#create-new-initiative}

{{% alert type="info" %}}Both Portfolio Managers and Contributors can create new initiatives. Only Viewers cannot do this action. For more information on roles and permissions, see the [Members](/developerportal/portfolio-management/access-management/#members) section in *Access Management*.{{% /alert %}}

To create a new initiative and add details to it, follow the steps below. To check the details of a step, click the link to go to the corresponding section.

1. [Create the initiative.](#create-initiative)
2. [Add general information.](#add-general-information)
3. [Link Epics to an initiative.](#link-epics)
4. [Add planning information.](#add-planning-information)
5. [Add prioritization information.](#add-prioritization-information)
6. [Add estimated value.](#add-estimated-value)
7. [Add comments.](#add-comments)
8. [Save initiative details.](#save-details)

### Creating the Initiative {#create-initiative}

To create a new initiative, follow these steps:

1. Go to the **Initiatives Overview** page.
2. Click **Create Initiative**.
3. Enter the **Initiative Name** and the **Stage** in which the initiative is. 
4. Click **Create Initiative**. The initiative is created and appears on the **Initiatives Overview** page. The **Edit Initiative** side pane opens on the right side of the page where you can add the details of the new initiative.

Now you can proceed to [add general information](#add-general-information).

### Adding General Information {#add-general-information}

To add general information to your initiative, follow these steps:

{{% alert color="info" %}}Some fields in this procedure have an {{% icon name="info-circle" %}} icon next to them, for example, the **Link Existing App** field. You can check out the descriptions of these fields by hovering over the {{% icon name="info-circle" %}} icons.{{% /alert %}}

1. In the **Edit Initiative** side pane, select the status of your initiative: **On Track**, **At Risk**, or **Off Track**.

2. Enter **Percentage Completed** if this is an ongoing initiative. You can enter a value between 0–100 to indicate how much of progress has been made for this initiative.

3. Select **Tags** for the initiative. You can use tags to classify your initiatives; for example, you can classify them by type. You can select existing tags or create new tags. 

   {{% alert color="info" %}}For more information about how to create new tags, edit existing tags, or delete existing tags, see the [Managing Tags](#manage-tags) section.{{% /alert %}}

4. Enter the **Description** of the initiative.

5. If any existing Mendix apps or any apps in development are related to this initiative, you can link these apps:

   1. In the search box below **Link Existing App**, search the app. The system displays the first 50 results.

   2. Select the app that you want to link to the initiative. If you like to see more information about a linked app, click the app name after it is linked.

   3. Repeat the two steps above to link more apps if you want to link more than one app.

6. Set the **Owner** for the initiative.

7. Select the **Stage**, **Department**, **Location**, **Country**, and **Use Case** for the initiative.

   {{% alert type="info" %}}A Portfolio Manager can customize the options for **Stage**, **Department**, **Location**, **Country**, and **Use Case** on the [Portfolio Settings](/developerportal/portfolio-management/portfolio-settings/) page.{{% /alert %}}

8. If you want to add attachments, click **+** to add them. Once an attachment is added, all the users can open and download it.

Now you can proceed to [link Epics to your initiative](#link-epics).

#### Managing Tags {#manage-tags}

While you are in the process of [adding general information](#add-general-information), you can manage tags as follows:

In the **Edit Initiative** side pane, click **Manage tags** ({{% icon name="cog" %}}) next to the **Tags** text box.

{{< figure src="/attachments/developerportal/portfolio-management/manage-tags.png"max-width="80%" >}}

The **Manage Tags** dialog box opens.

{{< figure src="/attachments/developerportal/portfolio-management/manage-tags-dialog-box.png" max-width="70%" >}}

To create a new tag, do as follows:

1. Click **Add Tag**. A text box appears, with a colored circle indicating the color of the new tag.
2. In the text box, enter the name for the new tag.
3. If you want to change the color of the new tag, click the colored circle and select a different color.
4. Click **Save** ({{% icon name="checkmark-circle" %}}) to save the new tag.

To edit an existing tag, do as follows:

1. To change the tag name, click the name of the tag. After, the name becomes editable. Edit the name in the text box, and then click outside the text box to save the change.
2. To change the tag color, click the colored circle and select a different color.

To delete an existing tag, do as follows:

1. Hover over the row where the tag is listed. A **Delete** button ({{% icon name="trash-can" %}}) appears at the end of the row.
2. Click **Delete**. The **Confirmation** dialog box opens.
3. Click **Delete Tag**.

### Linking Epics to an Initiative {#link-epics}

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

#### Differences Among Initiatives, Apps, and Epics {#differences-initiatives-apps-epics}

An initiative is usually worked upon in several epics. Initiatives are bigger projects that could span across multiple apps, systems, and services, while epics are related to a single app only and bundle user stories together. To learn more about the differences among initiatives, epics, and user stories, check out our [learning path](https://academy.mendix.com/link/modules/599/lectures/4660/2.2-The-Role-of-Portfolio-Management-in-the-Application-Lifecycle) and the examples below:

{{< figure src="/attachments/developerportal/portfolio-management/initiative-epic-user-story.png" >}}

The following figure shows examples of three portfolios. The first portfolio is to add a feature to an app, the second example is a minimal viable product (MVP) of an app, and the last example is to build an integration between two apps.

{{< figure src="/attachments/developerportal/portfolio-management/portfolios-initatives-apps-epics-stories.png" >}}

### Adding Planning Information {#add-planning-information}

In the **Edit Initiative** side pane, click **Planning** to show all the fields in this section. Set the following dates in this section:

* **Intake Date** – the date when the initiative is accepted based on business requirements
* **Start Date** – the date when the first actions are taken to start implementation
* **Go-Live date** – the date when the initiative is expected to be delivered or implemented.

Now, you can proceed to [add prioritization information](#add-prioritization-information).

### Adding Prioritization Information {#add-prioritization-information}

In the **Edit Initiative** side pane, click **Prioritization** to show all the fields in this section. Set the values for the fields in this section.

{{% alert color="info" %}}
The title of this section can be **Prioritization: WSJF Model** or **Prioritization: RICE Model**, depending on the prioritization model selected on the [Portfolio Settings](/developerportal/portfolio-management/portfolio-settings/) page. For more information about the prioritization models and the components of each model, see the [WSJF](/developerportal/portfolio-management/prioritization-models/#wsjf) section or the [RICE](/developerportal/portfolio-management/prioritization-models/#rice) section in *Prioritization Models Supported by Portfolio Management.*
{{% /alert %}}

Now you can proceed to [add estimated value](#add-estimated-value).

### Adding Estimated Value {#add-estimated-value}

In the **Edit Initiative** side pane, click **Estimated Value** to show all the fields in this section. These fields can solidify your business case and drive internal adoption, and help you map the realized value upon completion. Add information in the following fields in this section:

* **Type of Value** – Select the type of the value that is created by the initiative.

  {{% alert color="info" %}}A Portfolio Manager can customize the options for **Type of Value** on the [Portfolio Settings](/developerportal/portfolio-management/portfolio-settings/) page.{{% /alert %}}

* **Frequency** – Select whether the value is **One-Off** or **Recurring**.

* **Value** – Enter the amount of the value in numbers. Use a comma every third digit from the right (for example, *1,000,000*)

* **Additional Information** – Enter anything that can help clarify how estimated value may impact the overall costs of the initiative.

If the initiative creates more than one type of value, click **Add Value** to add more value. After you enter all values, the system shows the **Sum of Recurring Values** and the **Sum of One-Off Values**.

Now you can proceed to [add comments](#add-comments).

### Adding Comments {#add-comments}

If you want to add a comment, click **Comments** in the **Edit Initiative** side pane, and then click **Post Comment** after you add the comment.

Now you can proceed to [save initiative details](#save-details).

### Saving Initiative Details {#save-details}

At the bottom of the **Edit Initiative** side pane, click **Save**. Now all the details are saved for the new initiative that you just created.

## Changing Your View {#change-view}

To change your view on the **Initiatives Overview** page, click the drop-down list on the upper-right corner, and then select one of the following views:

{{< figure src="/attachments/developerportal/portfolio-management/switch-view.png" >}}

* [Kanban view](#kanban-view)
* [List view](#list-view)
* [WSJF Prioritization](#wsjf) or [RICE Prioritization](#rice) (the section you see here depends on the prioritization model selected in [Portfolio Settings](/developerportal/portfolio-management/portfolio-settings/))
* [Planning view](#planning-view)

### Kanban View {#kanban-view}

In Kanban view, all the initiatives are represented by initiative cards and are categorized in different columns. A column indicates the stage that an initiative is currently in. You can drag an initiative card to a different column to change its stage. You can also drag initiative cards around within a column to change their sequence. Newly created initiatives are placed at the bottom of the column. Clicking an initiative card opens a [side pane](#view-initiative) that shows initiative details.

{{% alert type="info" %}}A Portfolio Manager can set up custom stages for initiatives on the [Portfolio Settings](/developerportal/portfolio-management/portfolio-settings/) page.{{% /alert %}}

Each initiative card shows the following information:

{{< figure src="/attachments/developerportal/portfolio-management/initiative-card.png"max-width="60%" >}}

1. Initiative status – This shows the status of your initiative. It can be **On Track**, **At Risk**, or **Off Track**.

2. Initiative name – This is the name of the initiative. 

3. Tags for the initiative – These tags are used to classify the initiative (tags can be used, for example, to indicate the types of initiatives).

4. Prioritization score – This shows the prioritization score of the initiative.

5. **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) – Clicking this button opens a menu that enables you to [edit](#edit-delete-initiative), [archive](#archive-initiative), or [delete](#edit-delete-initiative) the initiative.

    {{% alert type="info" %}}Both Portfolio Managers and Contributors can edit, archive, or delete an initiative. Only Viewers cannot do these actions. For more information on roles and permissions, see the [Members](/developerportal/portfolio-management/access-management/#members) section in *Access Management*.{{% /alert %}}

6. **Dates** icon ({{% icon name="calendar" %}}) – Hovering over this icon shows the following defined dates of the initiative lifecycle:

   * **Intake** – This shows the date when the initiative is accepted based on business requirements.

   * **Start** – This shows the date when the first actions are taken to start implementation.

   * **Go-Live** – This shows the date when the initiative is expected to be delivered or implemented.

7. Icon of the linked apps – If there is only one linked app, clicking the icon shows the information about the app. If there are multiple apps or no linked apps, the icon is not clickable.

8. Avatar of the initiative owner – Hovering over the avatar shows the name of the initiative owner.

### List View {#list-view}

In the list view, initiatives are shown in a list. Clicking the header of a column sequences the initiatives using the values in that column.

{{< figure src="/attachments/developerportal/portfolio-management/list-view.png" >}}

The list contains the following information:

* **Initiative Name** – Clicking this opens a [side pane](#view-initiative) that shows initiative details.

* **Department** – This shows the department to which the initiative belongs.

* **Stage** – This shows the stage the initiative is currently in.

  {{% alert type="info" %}}A Portfolio Manager can set up custom stages for initiatives on the [Portfolio Settings](/developerportal/portfolio-management/portfolio-settings/) page.{{% /alert %}}

* **Status** – This shows the status of your initiative. It can be **On Track**, **At Risk**, or **Off Track**.

* **Completed** – This shows how much progress has been made for this initiative. It is a value between 0–100 and shown as percentage.

* **Intake Date** – This shows the date when the initiative is accepted based on business requirements.

* **Start Date** – This shows the date when the first actions are taken to start implementation.

* **Go-Live Date** – This shows the date when the initiative is expected to be delivered or implemented.

* Icon of the linked apps – If there is only one linked app, clicking the icon shows the information about the app. If there are multiple apps or no linked apps, the icon is not clickable.

* Avatar of the initiative owner – Hovering over the avatar shows the name of the initiative owner.

* **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) – Clicking this button opens a menu that enables you to [edit](#edit-delete-initiative), [archive](#archive-initiative), or [delete](#edit-delete-initiative) the initiative.

  {{% alert type="info" %}}Both Portfolio Managers and Contributors can edit, archive, or delete an initiative. Only Viewers cannot do these actions. For more information on roles and permissions, see the [Members](/developerportal/portfolio-management/access-management/#members) section in *Access Management*.{{% /alert %}}

### WSJF Prioritization {#wsjf}

{{% alert type="info" %}}For more information about WSJF and each individual component of WSJF, see the [WSJF](/developerportal/portfolio-management/prioritization-models/#wsjf) section in *Prioritization Models Supported by Portfolio Management*.{{% /alert %}}

In the WSJF prioritization view, all the initiatives are sequenced by their WSJF scores by default. Clicking the header of a different column sequences the initiatives using the values in that column.

The list contains the following information:

* **Initiative Name** – Clicking this opens a [side pane](#view-initiative) that shows initiative details.

* **Stage** – This shows which stage the initiative is currently in.

  {{% alert type="info" %}}A Portfolio Manager can set up custom stages for initiatives on the [Portfolio Settings](/developerportal/portfolio-management/portfolio-settings/) page.{{% /alert %}}

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

  {{% alert type="info" %}}Both Portfolio Managers and Contributors can edit, archive, or delete an initiative. Only Viewers cannot do these actions. For more information on roles and permissions, see the [Members](/developerportal/portfolio-management/access-management/#members) section in *Access Management*.{{% /alert %}}

### RICE Prioritization {#rice}

{{% alert type="info" %}}For more information about RICE and each individual component of RICE, see the [RICE](/developerportal/portfolio-management/prioritization-models/#rice) section in *Prioritization Models Supported by Portfolio Management*.{{% /alert %}}

In the RICE prioritization view, all the initiatives are sequenced by their RICE scores by default. Clicking the header of a different column sequences the initiatives using the values in that column.

The list contains the following information:

* **Initiative Name** – Clicking this opens a [side pane](#view-initiative) that shows initiative details.

* **Stage** – This shows which stage the initiative is currently in.

  {{% alert type="info" %}}A Portfolio Manager can set up custom stages for initiatives on the [Portfolio Settings](/developerportal/portfolio-management/portfolio-settings/) page.{{% /alert %}}

* **Reach** – This is the estimated number of relevant users that the initiative may affect within a time period. You must enter an integer in this field.

* **Impact** – This is the estimated amount of impact that the initiative may have on individual users. You can select **Massive**, **High**, **Medium**, **Low**, or **Minimal**.

* **Confidence** – This indicates how confident you are about your Impact and Reach estimates. You can select **High**, **Medium**, or **Low**.

* **Effort** – This is the estimated total amount of time that the initiative will require from all members of your team: product, design, and development. You must enter an integer in this field.

* **Score** – This is the RICE score of the initiative.

* **Dates** ({{% icon name="calendar" %}}) – Hovering over the icon shows the following defined dates of the initiative lifecycle:

    * **Intake** – This is the date when the initiative is accepted based on business requirements.
    * **Start** – This is the date when the first actions are taken to start implementation.
    * **Go-Live** – This shows the date when the initiative is expected to be delivered or implemented.

* Icon of the linked apps – If there is only one linked app, clicking the icon shows the information about the app. If there are multiple apps or no linked apps, the icon is not clickable.

* Avatar of the initiative owner – Hovering over the avatar shows the name of the initiative owner.

* **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) – Clicking this button opens a menu that enables you to [edit](#edit-delete-initiative), [archive](#archive-initiative), or [delete](#edit-delete-initiative) the initiative.

  {{% alert type="info" %}}Both Portfolio Managers and Contributors can edit, archive, or delete an initiative. Only Viewers cannot do these actions. For more information on roles and permissions, see the [Members](/developerportal/portfolio-management/access-management/#members) section in *Access Management*.{{% /alert %}}

### Planning View {#planning-view}

The planning view gives you a clear visual representation of initiatives on a timeline to assist you with planning, coordination, and decision-making. Initiatives in this view are sorted by their go-live date. You can see maximum one year back and two years ahead from the current date.

{{< figure src="/attachments/developerportal/portfolio-management/planning-view.png" >}}

The view contains the following information:

* Initiative name – Clicking this opens a side pane that shows initiative details.
* Initiative status – This shows the status of your initiative. It can be **On Track**, **At Risk**, or **Off Track**.
* Icon of the linked apps – If there is only one linked app, clicking the icon shows the information about the app. If there are multiple apps or no linked apps, the icon is not clickable.
* Avatar of the initiative owner – Hovering over the avatar shows the name of the initiative owner.
* Timeline bar – The timeline bar indicates the start date and the go-live date of an initiative. The color shading of the bar reflects how much progress has been made for the initiative. The darker shade indicates the percentage completed, while the lighter shade shows the remaining unfinished portion. (In dark mode, the shading is reversed.) Hovering over the timeline bar shows the following information in a tooltip:
    * **Start date** – The start date is the date when the first actions are taken to start implementation.
    * **Go-Live** – The go-live date is the date when the initiative is expected to be delivered or implemented.
    * **Completed** – This shows how much progress has been made for this initiative.
* Today indicator (the vertical blue line) – This indicates the date of today.
* **Today** – Clicking **Today** on the lower-right corner brings the view back to today.
* **Weeks**, **Months**, and **Quarters** – Clicking one of these buttons on the lower-right corner changes the zoom level of the timeline.

## Viewing Initiative Details {#view-initiative}

On the **Initiatives Overview** page, if you click an initiative, a side pane opens on the right side to show initiative details.

On the upper-right corner of the pane, there is a **Copy link** ({{% icon name="hyperlink" %}}) button and **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) button. Clicking **Copy link** copies the link to the initiative. Clicking **More Options** opens a menu that allows you to [edit](#edit-delete-initiative), [archive](#archive-initiative), or [delete](#edit-delete-initiative) the initiative.

{{% alert type="info" %}}
Both Portfolio Managers and Contributors can edit, archive, or delete an initiative. Only Viewers cannot do these actions. For more information on roles and permissions, see the [Members](/developerportal/portfolio-management/access-management/#members) section in *Access Management*.
{{% /alert %}}

{{< figure src="/attachments/developerportal/portfolio-management/side-pane.png" >}}

When you view initiative details, you can only post comments or link epics. You cannot change any other information. To change other information, you need to [edit the initiative](#edit-delete-initiative).

## Editing or Deleting an initiative {#edit-delete-initiative}

{{% alert type="info" %}}
Both Portfolio Managers and Contributors can edit or delete an existing initiative. Only Viewers cannot do these actions. For more information on roles and permissions, see the [Members](/developerportal/portfolio-management/access-management/#members) section in *Access Management*.
{{% /alert %}}

To edit or delete an initiative, go to the **Initiatives Overview** page, click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) for that initiative, and then select **Edit** or **Delete**. Alternatively, you can also click **More Options** in the [side pane](#view-initiative) where you view initiative details, and then select **Edit** or **Delete**.

## Archiving an Initiative {#archive-initiative}

When an initiative is finished or the initiative is not relevant for the current time being, you can archive an initiative.

{{% alert type="info" %}}
Both Portfolio Managers and Contributors can archive an initiative. Only Viewers cannot do this action. For more information on roles and permissions, see the [Members](/developerportal/portfolio-management/access-management/#members) section in *Access Management*.
{{% /alert %}}

To archive an initiative, perform the following steps:

1. On the **Initiatives Overview** page, click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) for that initiative, and then select **Archive**. Alternatively, you can also click **More Options** in the [side pane](#view-initiative) where you view initiative details, and then select **Archive**.

2. In the dialog box that opens, select the reason why the initiative is archived: **Completed**, **Canceled**, **On Hold**, or **Other Reason**. Also, enter any information that other people should know about this change. Then click **Archive**.

   {{< figure src="/attachments/developerportal/portfolio-management/archive-dialog-box.png" >}}

A pop-up window opens and tells you that the initiative is successfully archived. Once the initiative is archived, you can find it on the [Archive](/developerportal/portfolio-management/archive/) page.

## Exporting and Importing Initiatives

On the **Initiatives Overview** page you can import and export initiatives. For details, see [Export and Import Initiatives](/developerportal/portfolio-management/export-import-initiatives/).
