---
title: "Placeholder"
url: /refguide/placeholder/
weight: 10
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A **placeholder** can be used in two ways:

* In a [layout](/refguide/layout/) to define a "gap" that can be filled in a [page](/refguide/page/) based on that layout
* In a layout that defines the layout as a master layout

Each placeholder is colored blue with its name displayed in the middle of it. The placeholder named **Main** is always shown in a darker shade of blue. 

For example, the image below shows two placeholders, **Main** and **Other** positioned within a layout grid. 

{{< figure src="/attachments/refguide/modeling/pages/page-resources/layout/placeholder/placeholder.png" alt="Two placeholders in a layout grid. One is labeled 'Main', and one is labeled 'Other'"   width="400"  >}}

## 2 Properties

An example of placeholder properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/pages/page-resources/layout/placeholder/placeholder-properties.png" alt="Properties pane for a placeholder" >}}

A placeholder has a single section, **Misc** and a single property, **Name**.

### 2.1 Name

Unlike most other widgets, the name of a placeholder carries a special significance. A layout contains one or more placeholders and one of these placeholders must be named **Main**.

The placeholder name is used to map page contents from one layout to the other when switching layouts or creating a new page.

When a user switches a page from one layout to another, the placeholder names will be used to map the content of the page to the new layout. For every placeholder that has content in the current layout, Studio Pro will search for a placeholder with the same name in the new one. As the **Main** placeholder is mandatory, the user can always be assured that any page content placed in this placeholder will be retained. Any content in placeholders not present in the new layout will be moved above the canvas, from where it can be placed in the placeholders in the new page.

Because of this, user experience can be improved significantly if all of an app's layouts adhere to the same or a similar naming scheme. This will ensure layouts can be alternated freely without having to consider the effect on the content of each individual placeholder. 

The placeholder naming scheme also has an impact on [page templates](/refguide/page-templates/). When creating a new page, the template will map its content based on the names of the placeholders in its preview layout. Consequently, a template might describe the content for a placeholder that is not available in the selected layout. To prevent this, a compatible layout is automatically pre-selected when clicking a page template in the create new page dialog. If an incompatible layout is then selected manually, all the content for the missing placeholders will be discarded. 
