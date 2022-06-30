---
title: "Snippet"
url: /refguide7/snippet/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---


Snippets define reusable interface parts. They can be used on both [pages](/refguide7/page/) and [layouts](/refguide7/layout/). By using snippets you can make changes in fewer places when you modify the interface. For example, you can have a snippet that is used both in the contents area of a template grid and in a data view. If you change something in the snippet, that change will show up in both places.

A snippet can, optionally, define an [entity](/refguide7/entities/) that serves as a context for the widgets placed on it. For example, if you wanted to use an attribute of a Customer entity in a snippet, you could place a text box that shows the customer's name in the snippet without having to define a data view first.

When an entity is defined on a snippet, any usages of the snippet need to be placed inside a context for that entity or a specialization: a data view, for example.

## Common Properties

### Name

The name of the snippet. You can change the name via the project explorer.

{{% snippet file="/static/_includes/refguide7/Documentation+Property.md" %}}

## Designer Properties

### Canvas width

The canvas width property defines the width in pixels of the snippet in the snippet editor. It is purely used for editing purposes; this property has no effect on the actual application.

_Default value:_ 800

### Canvas height

The canvas height property defines the preferred minimum height in pixels of the snippet in the snippet editor. It is purely used for editing purposes; this property has no effect on the actual application.

_Default value:_ 600

## General Properties

### Entity

This property defines the entity that is used as context for the widgets placed on this snippet.
