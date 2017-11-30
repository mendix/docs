---
title: "Opening Forms"
parent: "form-concepts"
---
In many places within forms you can open other forms. For example, the Edit button of the data grid opens a form to edit the selected object.

## Properties

In those places where a form is opened, a number of properties determine which form is opened, and how, and where it is opened.

### Form

This is the form that is shown to the end user. There can be a number restrictions on the form, depending on the place which the form is opened from. For example, the form that is opened by the New button must contain a data view that is connected to the same entity as the grid.

### Location (only in web forms)

This property indicates where the form is shown.

| Value | Description |
| --- | --- |
| In content | The form replaces the form that is currently in the content pane of the browser. |
| Pop-up | The form is shown as a non-blocking pop-up overlaying the form you were looking at. Non-blocking means that you can still use the underlying form. |
| Blocking pop-up | The form is shown as a blocking pop-up. Blocking means that you cannot use the underlying form until you close the pop-up. |

_Default value:_ Pop-up

### Form title

By default the title of the form is taken from the title property of the selected form. You can replace this title with a custom title if necessary.

{{% alert type="success" %}}

You can use the same form for the New and Edit buttons of a data grid. By replacing the pop-up title with a custom title, you can still have different titles for these pop-ups, e.g. 'New customer' and 'Edit customer'.

{{% /alert %}}
