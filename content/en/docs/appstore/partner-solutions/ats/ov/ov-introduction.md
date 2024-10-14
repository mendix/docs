---
title: "Introduction to ATS"
url: /appstore/partner-solutions/ats/ov-introduction/
weight: 1
---

## ATS Home Page

When you [log in to Application Test Suite (ATS)](https://ats.mendix.com), you see the **My apps** page. This page displays all the Mendix apps you are a member of and that have an ATS license. Every member of the team in your app has access to ATS.

{{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-introduction/my-apps.png" alt="The My apps page" class="no-border" >}}

Each app has a doughnut chart that displays how many test cases inside that app are passed. This allows for a quick overview of the progress of your apps.

## ATS Dashboard

When you open an app that does not contain any test cases, the dashboard looks like this:

{{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-introduction/empty-app.png" alt="ATS empty app dashboard" class="no-border" >}}

If you already have some active test cases in your **ATS app**, the dashboard will give you a summarized overview of the current state of your app at a glance.

{{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-introduction/dashboard.png" alt="ATS app dashboard" class="no-border" >}}

The dashboard can be divided into four parts:

* Current state chart
* 7-Day history
* Test case treeview
* PDF export

The **current state chart** will show you the total number of test cases in your app. Furthermore, it will present you the state of your test cases as numeral.

{{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-introduction/doughnutchart.png" alt="current state chart" class="no-border" >}}

The **7-Day history chart** reflects the state of your test cases over the past seven days.

{{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-introduction/7dayhistory.png" alt="7day history chart" class="no-border" >}}

The **Recent Tests** section shows you detailed information for all of your test cases and test suites. You can see the passed time since the latest execution and its result. For test suites, the success rate is calculated using the results of all containing test cases.

The dataset (which is the dataset used by a data-driven test case) is displayed in the **Test Data** column.

You can open the latest execution log of a failed test case by pressing **Show Log**.

If your test suites contain one or more test suites/cases, you can open the test suite by clicking the arrow in front of the test suite name. The test suite will expand and you will see all containing test suites/cases.

{{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-introduction/recent-tests.png" alt="Recent Tests" class="no-border" >}}

You can export the current results of your test cases by clicking **Download Report**. The **Generate Report** dialog box appears, where you can either generate a report of the entire app or select specific folders to include in the report.

{{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-introduction/download-report.png" alt="Dashboard export button" class="no-border" >}}

## Navigation

You can navigate inside ATS using the menu on the left side of the screen.

{{< figure src="/attachments/appstore/partner-solutions/ats/ov/ov-introduction/navigation.png" alt="Navigation menu" class="no-border" >}}

Using the menu, you can navigate to different pages inside ATS:

| Menu Item             | Explanation                                                                                          |
| -------------------------- | ----------------------------------------------------------------------------------------------------|
| **My Apps**             | This button will bring you back to the startpage.|
| **Dashboard**               | Gives an overview over the selected app.|
| **Test Cases**              | This page contains the **Repository**, the **Test Data**, and the **Stories**. Here you can create new test cases, test suites, and test data. You can also connect your user stories to your test cases.|
| **Test Runs**               | This page contains the **Jobs**, **Schedules**, and **CI/CD Templates**. Here you can see the results of your test cases, create new schedules, and create a CI/CD template for your test case/suite. |

## Different User Roles {#roles}

ATS has the following different user role settings.

### Scrum Master

The Scrum Master of your app can access the **App Settings** from the profile menu. Here you can add your app environment URL for testing and add a Selenium hub for executing your tests. This is the only difference with other roles.

### Others

All other roles in your app have access to ATS. The only difference is that the Scrum Master can access the **App Settings** of your app.

For more information, see the [ATS 2 Reference Guide](/appstore/partner-solutions/ats/rg-two-ats/).
