---
title: "Navigation"
parent: "project"
---
Two types of navigation exist, "Web navigation" and "Mobile navigation". Web Navigation is used to navigate to web forms, whereas Mobile Navigation navigates to mobile forms.
Different navigation properties are available depending on the navigation type.

The end user can navigate through your application by way of a menu bar. Web Navigation also features an (optional) navigation tree. The menu bar consists of menus with items (two levels for web and one level for mobile) and the navigation tree can contain three levels of items. You can also specify the home page, i.e. the form or microflow that is opened after signing in.

## General

### Default Home Page

The default home page indicates which form or microflow is opened when a user has just signed in. If an alternative home page (see below) is specified for one of the user roles of the user that home page will be used instead.

### Show Navigation Tree (web only)

If this option is checked, you can also define a navigation tree to navigate your application.

### Enable mobile (mobile only)

Indicates whether mobile is enabled. When mobile is enabled you need a proper license to run in production.

## Menu Bar

The menu bar defines the menus in the menu bar at the top of the screen. Each item on the first level (just below 'Menu Bar') defines a menu. For Web Navigation another level is available, for which each item defines a menu item.

Both menus and menu items are [navigation items](navigation-item).

{{% alert type="warning" %}}

If [security](project-security) is enabled, the menu will only show items that the user has access.

{{% /alert %}}

## Alternative Home Pages

By using alternative home pages you can show different home pages for different users. If an end user logs in, the first alternative home page of which the user role matches a user role of the user is displayed. If no match is found, the default home page is used.

Per alternative home page you can specify the user role it applies to and the target (form or microflow) that will be opened.

## Navigation Tree (web only)

If the option 'Show Navigation Tree' is checked, the navigation tree defines a tree that the end user can use to navigate to forms or execute microflows. The tree in the modeler reflects the tree that the user sees.

The navigation tree consists of [navigation items](navigation-item).

{{% alert type="warning" %}}

If [security](project-security) is enabled, the navigation tree will only show items that the user has access to.

{{% /alert %}}
