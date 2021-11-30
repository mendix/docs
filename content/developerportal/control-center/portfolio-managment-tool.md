---
title: "Portfolio Management Tool"
category: "Control Center"
description: "Describes the Portfolio Management Tool "
tags: ["Portfolio Management"]
---

## 1 Introduction

The [portfolio management tool](https://portfolio.mendix.com) empowers you to manage your projects throughout the project lifecycle – from it starts as an idea until it is live. Here, you have an overview of all projects, the stages of each project in the form of a Kanban board, the timeline and estimated value for each project, and much more.

You need to log in to access the portfolio management tool. When you open the portfolio management tool, the system checks if you have access to any portfolios, and if so, you will see all the portfolios to which you have access.

If you are an administrator of your company, you can access all the portfolios of your company.

If you are an administrator of your company, and there are no portfolio of your company, the system will create a portfolio for your company.

You can be invited to access the portfolios of your company and also the portfolio outside your company.

Click the portfolio to see the overview of all the projects in this portfolio.

## 2 Projects Overview

{{% todo %}}[Add an image]{{% /todo %}}

On the **Portfolio Overview** page, you have an overview of all the projects in this portfolio in a Kanban board. You can see the stages of each project. You can define custom stages in [Portfolio Settings](portfolio-settings).

To change the stage of a project, you can drag it to the relevant column.

On the right side above the Kanban board, there is a drop-down list and a view icon. You can sort the projects using the drop-down list. You can change the Kanban view to a list view by clicking the view icon.

{{% todo %}}[Add an image]{{% /todo %}}

### 2.1 Create a New Project

To create a new project in this portfolio, perform the following steps:

1. Go to **Projects Overview**.

   {{% todo %}}[Add an image]{{% /todo %}}

2. Click **Create New Project**.

3. Enter the **Name** and the **Description** of the project.

4.  Select the **Stage**, **Department**, **Country**, and **Owner** of the project.

    {{% alert type="info" %}}
    You can customize the lists of **Stage**, **Department**, and **Country** in [Portfolio Settings](#portfolio-settings).<br/>You can only set **Owner** to a user who has access to this portfolio. To give a user access to the portfolio, go to [Access Management](#access-management).
    {{% /alert %}}

5.  If there is an existing app that you want to change or if development is already in progress, you can link the app to this project as follows:
    1. In the search box below **Link Existing App**, search the app. The search displays the first 50 results.
    2. Select the app that should be linked.
    3. To see more information about a linked app, click the app.   
    
6. Click **Scope** to show all the fields in this section. The **Scope** section helps you define the effort and risk profile of the project.

7.  Select the **Use Case** of the project.

    {{% alert type="info" %}}
    You can customize the list of **Use Case** in [Portfolio Settings](#portfolio-settings). to the portfolio, go to [Access Management](#access-management).
    {{% /alert %}}

8. Select the **App Size.**

9. Enter the **Numbers of Users** who you expect will use the app.

10. Select **Complexity** and **Exposure** of the project. For more information about complexity and exposure, see [The Complexity Matrix](https://www.mendix.com/resources/digital-execution-manual/) in *Digital Execution Manual*.

11. Click **Estimated Value** to show all the fields in this section. The **Estimated Value** section helps you solidify your business case and drive internal adoption. It also allows you to map the realised value upon completion.

12. Select the **Value Type** for the value that this project will create.

    {{% alert type="info" %}}
    You can customize the lists of **Value Type** in [Portfolio Settings](#portfolio-settings).
    {{% /alert %}}
    
13. Select whether the value is **one-off** or **Recurring**.    
14. Enter the **Monetary Value** of the value.
15. Enter **Supporting Information** for the estimated value.
16. If necessary, click **Add Value** to add another value. After you enter all the values, system shows you the **Total Recurring Value** and the **Total One-Off Value**.
17. Click **Planning** to show all the fields in this section. The **Planning** section defines the deadlines for the project. 
18. Enter the **Start Date** and the **Go-Live Date**. You can use the go-live date to estimate when you need to start.
19. Click **Notes** to show all the fields in this section.
20. Enter **Notes** for the project.
21. Click **Create Project**.

You have successfully created a project. You can find your new project in the Kanban board in the **Projects Overview** page.


## 3 Access Management {#access-management}

{{% todo %}}[Add an image]{{% /todo %}}

On the **Access Management** page, you can see a table that shows all the users who have access to this portfolio. The access roles of these accounts are either Portfolio Managers or Users. 

Administrators of a company are Portfolio Mangers automatically. Portfolio Managers can give other users access to this portfolio and define their access roles. 

For the information about the differences between the two access roles, see below:

| Actions                           | Portfolio Manager                                            | Users     |
| --------------------------------- | ------------------------------------------------------------ | --------- |
| Invite new users                  | Yes                                                          |           |
| Remove user permissions and roles | Yes<br /> {{% todo %}}Can Portfolio Managers be removed? How?{{% /todo %}} |           |
| Update user permissions and roles | Yes<br /> {{% todo %}}Same as above.{{% /todo %}}}           |           |
| View user access information      | Yes                                                          | Yes       |
| Manage portfolio settings         | Yes                                                          |           |
| Create new projects               | Yes                                                          |           |
| Edit existing projects            | Yes                                                          |           |
| Delete projects                   | Yes                                                          |           |
| View project details              | Yes                                                          | Yes       |
| Create notes                      | Yes                                                          | Yes       |
| Edit notes                        | Own notes                                                    | Own notes |
| Delete notes                      | Own notes                                                    | Own notes |
| View notes                        | Yes                                                          | Yes       |

To update the permissions and roles of a user, click the edit icon on the right side of the row.

To remove a user, click the red trash bin icon on the right side of the row.

### 3.1 Add New Users

To add new users to the portfolio, perform the following steps:

1. On the upper-right corner above the table, click **Add New Users**.
2. In the dialog box, enter the **Email Address** of the user. The user can be someone in your company or outside your company.
3. Select an **Access Role** for this user. It can be **Portfolio Manager** or **User**.
4. Click **Add to List**.
5. Repeat steps 2 and 4 until you add all the users.
6. Click **Send Invites**.

You have successfully added new users to the portfolio. The names of these users are added to the table.

{{% todo %}}[Add an image]{{% /todo %}}

{{% alert type="info" %}}
For the users from outside the company, after you added them to the portfolio, their **Status** in the table is **Pending**. They will get an initiation email from the system. After they confirm the invitation via the link in the email, their **Status** will become **Active**.<br /> The name and profile photo of the users from outside the company will not be visible in the portfolio.
{{% /alert %}}

## 4 Portfolio Settings {#portfolio-settings}