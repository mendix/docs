---
title: "Edit Button"
parent: "control-bar"
---
The edit button allows user to edit, or view, an object selected in the grid or reference set selector.

## Appearance Properties

### Image

See [Button Properties](button-properties).

### Caption

See [Button Properties](button-properties).

### Class

See [Button Properties](button-properties)

### Style

See [Button Properties](button-properties)

## Behavior Properties

### Form

This property indicates the form that is shown to end-end user when he or she clicks this button. The end-user can use this form to edit the selected object. This form should contain a data view connected to the same entity as the grid, or as the reference set selector.

### Form settings

The form settings specify how the form is opened. See [Opening Forms](opening-forms).

### Forms for specializations

If the entity that is connected to the grid or reference set selector has specializations you can optionally specify forms for each specialization. When you edit a row in the data grid the most specific form is opened. For each specialization you specify the form to open, where to open it and a title for the form.

{{% alert type="info" %}}

Let us say you have an entity Vehicle and two specializations thereof: Bicycle and Car. And there is a specialization of Car called SportsCar. You create a data grid that is connected to Vehicle. With the form property of the data grid you specify what form to open for arbitrary Vehicles. For the specializations Bicycle and Car you create separate forms to edit them. If you now edit a row of type Bicycle the form specific for bicycles will be opened. If you edit a Car, you get the form for cars. If you edit a SportsCar, the form for cars will be opened! There is no form specific for sports cars (in this example) and car is the 'closest' generalization for which there is a form.

{{% /alert %}}

### Default button

See [Button Properties](button-properties).

## Visibility Properties

### Visible

See [Button Properties](button-properties).
