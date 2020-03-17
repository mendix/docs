---
title: "Filter and Sort Items in a List"
category: "Pages"
description: "Describes how to filter and sort items in a list in Mendix Studio."
menu_order: 30
tags: ["studio", "pages", "list", "how to", "filter", "sort"]
---

## 1 Introduction 

This how-to explains how you can filter and sort items in a list in Mendix Studio. 

**This how-to will teach you how to do the following:**

* Configure a filter for items in a list
* Sort items in a list

The how-to describes the following use case: 

You have a list inspections reports that shows companies checked on compliance with safety regulations. You would like to display only companies that failed this inspection. You also would like to display reports for February 2020 only. In addition, items should be sorted by date and time starting from the latest one.  

Domain model is configured the following way in this use-case:

<img src="attachments/pages-how-to-configure-list/domain-model.png" style="zoom:70%;" />

A list of inspection reports is displayed on a separate page and looks the following way:

<img src="attachments/pages-how-to-filter-and-sort/list-view-example.png" style="zoom:60%;" />

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Familiarize yourself with the domain model terms and learn how to perform basic functions. For more information, see [Domain Model](/studio/domain-models).
* Familiarize yourself with page terms and how to perform basic functions on pages. For more information, see [Pages](/studio/pages). 
* Familiarize yourself with terms on data filters. For more information, see [Data Filters](/studio/filters).

## 3 Filtering Information 

First, you need to add a filter to your list.  As you would like to show only companies which failed the inspection check, the **Passed** attribute (see the domain model image above) should have been marked in a inspection report as *No*. 

You also would like to show reports that were created or modified in February 2020, that means the **DateAndTime** attribute should fall into a range from February 1st, 2020 to February 29th, 2020. 

To configure a filter, do the following:

1. Select the list view and open its properties.

2. In the **Data Source** section, click **Filter**.

3. In the **Add Filter** dialog box, add conditions of the filter by doing the following:

    1. Select the **Passed** attribute in the drop-down menu:

		<img src="attachments/pages-how-to-filter-and-sort/add-filter-select-attribute.png" style="zoom:70%;" />

	2. Once you select the first part of the condition, you can select the other part to complete it. Select *false*:
	
		<img src="attachments/pages-how-to-filter-and-sort/add-filter-condition.png" style="zoom:70%;" />
	
	3. To filter inspection reports for February 2020, you need to add two conditions: the date and time should include but should not be earlier than February 1st, 2020; and the date and time should include but should not be later than February 29th, 2020. 
	
		Click **Add new condition** and select the **DateAndTime** attribute in the drop-down menu.
	
	5. Set an operator from *is* to *greater than or equal to*.
	
	6. Add the second part of the condition: the date should include but should not be earlier than February 1st, 2020. The format for date is YYYY-MM-DD, so type in *2020-02-01*.
	
		<img src="attachments/pages-how-to-filter-and-sort/date-condition.png" style="zoom:70%;" />
	
	7. Now you need to restrict data to the end of the month. Click **Add new condition** and select the **DateAndTime** attribute in the drop-down menu.

    8. Set an operator from *is* to *less than or equal to*.
    
    9. Add the second part of the condition: the date should include but should not be later than February 29th, 2020. The format for date is YYYY-MM-DD, so type in *2020-02-29*.
    
    	<img src="attachments/pages-how-to-filter-and-sort/complete-filter.png" style="zoom:70%;" />
	10.  Click **Save**.

You have created the filter that has three conditions and reads the following way: *Select records of InspectionReport where Passed is false and date and time is greater than or equal to Feb 1st, 2020 and date and time is less than or equal to Feb 29th, 2020*. This means this filter will show you only the reports that fall under all three conditions: which failed the inspection check and which were created or modified in February 2020. 

## 4 Sorting Items  

To sort items in the list by date and time starting from the latest one, follow the steps below:

1. Select the list view and open its properties.

2. In **Sorting Order** property, click **Add Sorting Rule**.

3. In **Add sorting rule** dialog box, select the **DateAndTime** attribute and set **Order** to *Descending*.

	<img src="attachments/pages-how-to-filter-and-sort/add-sorting-rule.png" style="zoom:70%;" />

4. Click **Add**.

Congratulations! You have added a filter and sorting order to your list. You can now preview your app and test your page. For more information on how to preview your page, see [Previewing & Publishing Your App](/studio/publishing-app).