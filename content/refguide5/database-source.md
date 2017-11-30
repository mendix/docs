---
title: "Database Source"
parent: "data-sources"
---


If database is selected as the data source for a widget then the object or objects shown are retrieved directly from the database with a query. As such, the data supplied is limited by the following factor:

1.  The access rules defined in the security section of the project.
2.  The XPath constraint supplied in the widgets settings.
3.  Objects already in context as defined by the [context mechanism](context-mechanism), if the apply context setting is set to true.
4.  An association, if the widget is nested in another data widget and the data path described runs over an association.

{{% alert type="success" %}}

Use access rules whenever possible to limit data in data grids. This way you know that the objects will always be constrained by these rules (as opposed to an XPath constraint on a single data grid). The access rules will also be applied when executing microflows which saves you from repeating XPath constraints.

{{% /alert %}}

## Components

### Search bar

See [Search Bar](search-bar).

### Sort bar

See [Sort Bar](sort-bar).

## Properties

### Entity (Path)

The entity (path) property specifies the target of the database query. A top-level data grid is always connected to an entity.

A nested data grid can either be connected to an entity or to an entity path starting in the entity of the containing data view. The entity path follows one association of type reference in the opposite direction in which the association's arrow is pointing (from * to 1).

Please note that this differs from the [association data source](association-source) in that the objects are not retrieved from the client cache but directly from the database. The association is simply parsed as an extra constraint in the database query.

{{% alert type="info" %}}

![](attachments/4522257/4751410.jpg)
The [domain model](domain-model) above describes a database in which an indeterminate number of users can be linked to a single country.

![](attachments/4522257/4751413.jpg)
The data view shown contains a single country. The data grid nested inside will display only those users that are linked to that particular country.

{{% /alert %}}

### Show search bar

With this property you can influence if and when a search bar is shown.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Never</td><td class="confluenceTd">No search bar or search button are ever shown. Effectively disables search.</td></tr><tr><td class="confluenceTd">With button (initially open)</td><td class="confluenceTd">The user can open and close the search bar using the search button; the search bar is initially open.</td></tr><tr><td class="confluenceTd">With button (initially closed)</td><td class="confluenceTd">The user can open and close the search bar using the search button; the search bar is initially closed.</td></tr><tr><td class="confluenceTd">Always</td><td class="confluenceTd">The search bar is always visible and cannot be close, nor is there a search button.</td></tr></tbody></table>

_Default value:_ With button (initially closed)

### Wait for search

If set to true, the grid will remain empty of contents until a search has been performed. This can be useful if the target entity contains an extremely large set of objects but most mutations only require a subset of the data. Waiting for search will ensure that no database query is performed until the desired subset is specified, thus skipping the initial loading period associated with major data retrievals.

_Default value:_ false

### XPath constraint

The [XPath constraint](xpath-constraints) allows for custom, hard-coded limitations on the data displayed. This constraint will be appended to the constraints (if any) already applied through security and context.

{{% alert type="warning" %}}

XPath constraints are applied equally to all users and only apply to the data displayed in a single data widget. If the goal is to shield a particular subset of the data from users then [entity access rules](access-rules) are superior in that they can be tailored to each individual user role and that they apply system-wide.

{{% /alert %}}

### Apply context

The property 'Apply context' indicates whether the [context mechanism](context-mechanism) will be used to constrain the list of objects in the grid.

{{% alert type="success" %}}

The apply context setting has the disadvantage of being implicit: the effects of the constraint are not immediately visible in the modeler. Context can also be implemented explicitly by nesting the data widget in, for example, a data view. The widget can then by filled over an association. This can greatly increase the transparency of the functionality described in the modeler.

{{% /alert %}}

_Default value_: False

Apply context is deprecated in version 5.19.0 in favor of the more explicit [XPath constraints](xpath-constraints).

### Remove from context

Using this property you can remove objects from the context. If you remove objects of a certain entity from the context they will not be used to constrain the list of objects, nor will references to that entity automatically be set when using a standard new button.

See [Context Mechanism](context-mechanism).

Apply context is deprecated in version 5.19.0 in favor of the more explicit [XPath constraints](xpath-constraints).
