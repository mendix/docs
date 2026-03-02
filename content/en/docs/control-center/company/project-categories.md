---
title: "Project Categories"
url: /control-center/project-categories/
description: "Manage Project Categories."
weight: 50
---

## Introduction

The **Categories** page allows you to manage the categories that can be assigned to your company's apps, so as to improve classification and searchability.     
You can also manage project categories through the [Project Category API](/apidocs-mxsdk/apidocs/project-category-api/).

Categories can be assigned to each app individually on the app's [Settings](/developerportal/general-settings/) page, but you can also use the [Projects API](/apidocs-mxsdk/apidocs/projects-api/) to edit the category assignment.

## Category Management

On the **Categories** page, you can manage app categories. A list of preconfigured categories is displayed, along with all their corresponding values. Next to the preconfigured **Country** category, you can configure a maximum of five categories with 250 values each. 

Use the **Add Country Category** to make the preconfigured **Country** category available, along with its list of 250 countries.

{{% alert color="info" %}}
You cannot edit the preconfigured **Country** category.
{{% /alert %}}

### Adding Categories

Follow these steps to add a category:

1. Click the **Add Category** button. This opens the **Add Category** pop-up window.  
2. In the **Category Name** field, enter a name for the new category.
3. Click **Add Value** to add one or more values for the new category.   
    You can add multiple values as a comma-separated list.    
    Each entry consists of a unique name and code. The unique code is automatically generated for you. You can edit it afterwards, as long as you provide a new unique code.

### Editing Categories

Follow these steps to edit a category:

1. Click the **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) button within a category, then click **Edit**. This opens the **Add Category** pop-up window.
2. Make edits as necessary, such as changing the category name, or adding or removing values.
3. Click **Save**.

### Deleting Categories

To delete a category, click the **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) button within a category, then click **Delete**.
