---
title: "Snippet"
space: "Mendix 7 Reference Guide"
parent: "pages"
---


Snippets define reusable interface parts. They can be used on [pages](page) and [layouts](layout). By using snippets you have to make changes in fewer places if you want to modify the interface. For example, you can have a snippet that is used both in the contents area of a template grid and in a data view. If you add a row to a table in the snippet, that change will show up in both places.

A snippet can optionally define an [entity](entities) that serves as a context for the widgets placed on it. For example, if you would select a Customer entity for a snippet, you could place a text box that shows the customer's name on the snippet without having to define a data view first.

When an entity is defined on a snippet, any usages of the snippet need to be placed inside a context for that entity or a specialization, e.g. a data view.

## Common Properties

### Name

The name of the snippet. You can change the name via the project explorer.

{% snippet Documentation+Property.md %}

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
