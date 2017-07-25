---
title: "Show Form"
parent: "client-activities"
---
With the show-form action you can show a form to the end user.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## Action Properties

### Form

The web or mobile form to show to the end user.

### Location (only for web forms)

Location defines how the form is shown.

| Option | Description |
| --- | --- |
| In content | The form replaces the existing top-level form. |
| Pop-up | The form is opened in a new dialog on top of the existing form(s). |
| Blocking pop-up | The form is opened in a new dialog on top of the existing form(s) and a hover, that makes it impossible to navigate to another form, is put on top of the underlying form(s). |

_Default value:_ Pop-up

### Pop-up title

Pop-up title displays the title of the form. By checking override form title you can override the title of the form that is opened. In this way you can reuse a form for two purposes (New, Edit) and still have different form titles.

### Form object

If the selected form contains a data view, it needs an object of the same entity as the data view to display its content. The form object is the object that is used by the data view to display its content.
