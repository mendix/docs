---
title: "Page template"
parent: "pages"
---


Page templates are the starting point for creating new pages. Every time a new page is created, a page template is selected as a baseline that can then be edited to match the pages specific needs. By mapping out the common design patterns of a project, a great deal of the initial work involved in creating new pages can be mitigated. 

Generally, page templates are stored in the project's [UI resources package](ui-resources-package). This keeps them in sync with the project theme, as well as providing a handy place to consolidate all design-related data. 

To create a page template, right-click on a page in either the project explorer or an empty section of the canvas and select 'Create page template'. The page will be added a new page template, which will automatically make it available in the create new page dialog. 

As the purpose of page templates is to facilitate design rather than functionality, page templates should be devoid of references to other documents. This is to prevent users from facing confusing errors when creating a new page. It also mitigates the chance of errors when importing page templates from a different project. 

## Common Properties

{{% snippet file="refguide/Document+Name+Property.md" %}}

{{% snippet file="refguide/Documentation+Property.md" %}}

{{% snippet file="refguide/Document+Class+Property.md" %}}

{{% snippet file="refguide/Style+Property.md" %}}

## Designer Properties

{{% snippet file="refguide/Canvas+Width+Property.md" %}}

{{% snippet file="refguide/Canvas+Height+Property.md" %}}

## General Properties

### Display name

The display name determines by what name the page template will appear in the create page dialog. 

### Image

The image selected will appear in the web modeler create page dialog. Selecting a representative image will allow users to easily distinguish between page templates. If left blank, the web modeler will display an empty white field. Any image selected will be scaled down to 200x200 pixels. 

### Shown when

Depending on the context in which a page is created, the user is presented with a different set of page templates to choose from. This setting determines which set the page templates belongs to. 

<table>
    <thead>
        <tr>
            <th class="confluenceTh">Value</th>
            <th class="confluenceTh">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="confluenceTd">Creating new pages</td>
            <td class="confluenceTd">The page template is available when creating new pages from most contexts, such as from the project explorer.<br class="atl-forced-newline"></td>
        </tr>
        <tr>
            <td class="confluenceTd">Generating edit pages<br class="atl-forced-newline"></td>
            <td class="confluenceTd">The page template is available when a user generates a new page from a new or edit button.<br class="atl-forced-newline"></td>
        </tr>
        <tr>
            <td class="confluenceTd">Generating select pages<br class="atl-forced-newline"></td>
            <td class="confluenceTd">The page templates is available when the user generates a new page from a select button.<br class="atl-forced-newline"></td>
        </tr>
    </tbody>
</table>

This setting may also place extra restrictions on the template. Page templates intended as new or edit pages require exactly one top-level data view be present. Page templates intended as select pages require exactly one list view, data grid, or template grid. 

_Default value:_ Creating new pages

### Layout type

[Layouts](layout) are all assigned a type in their properties. This type determines in which profiles the layout can be used. To ensure that a user can always map a page template to a compatible layout during page creation, a page template must be assigned one of these same layout types. In practice, this setting will affect in which profile tab of the create page dialog the page template is displayed. Additionally, it will automatically restrict the default layout setting to layouts of the same type.  

### Preview layout

Although page templates and layouts can be mixed and matched, this setting will determine which layout will be used to display the template in the editor. It also has a minor effect on the page creation process: if the template describes contents for layout [placeholders](placeholder) that are not present in the previously selected layout, the first compatible layout will be pre-selected in the create new page dialog. 

The options available for this setting are regulated by the Layout type setting. If you are having trouble finding the layout you are looking for, check if the layout type of the template and the desired layout match. 