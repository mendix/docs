---
title: "Mobile Form"
parent: "mobile-forms"
---
{{% alert type="warning" %}}

This document describes the properties of a mobile form. If you want to see what mobile forms are for and what kind of widgets can be placed on them, you can check the [Mobile Forms](mobile-forms) overview documentation.

{{% /alert %}}

## Appearance Properties

### Title

The title of the form that is shown above all of its content. If the form is shown in a pop-up the title appears in the title bar of the pop-up. The title can be overridden from places where forms are opened to make it possible to reuse a form for different purposes. For example, a [New Button](new-button) and an [Edit Button](edit-button) can refer to the same form but override the title to 'New' and 'Edit' respectively.

## Common Properties

### Name

The name of the form. You can change the name via the project explorer.

### Folder

The folder in which the form is located. You can change the folder by dragging the form to another location in the project explorer.

### Documentation

## Designer Properties

### Canvas width

The canvas width determines the width of the canvas on which you are building the form in the Modeler. This property has no effect on the application whatsoever.

## Navigation Properties

### Visible for

The module roles for which the form is visible. This has effect on navigation (menu bar and navigation tree) and on buttons that are visible only if allowed. See, for example, the [Edit Button](edit-button).

See also [Module Security](module-security).
