---
title: "Go to Option"
url: /refguide/go-to-option/
description: "Describes the Go to option in Mendix Studio Pro."
weight: 40
---

## Introduction

In Studio Pro editors, such as the navigation, page, or microflow editor, you can access a handy menu by right-clicking items. The **Go to** option is commonly used to find your way in an app. It allows you to navigate from one element to another, for example, to navigate to the target of a button or to the source of a data grid.

## The Go to Option

The examples of using the **Go to** option are described below:

* **Opening a target of a menu item** – in **App** > **Navigation**, you can right-click a menu item and select **Go to target**. Studio Pro opens the corresponding target of the menu item, for example, a page.

    {{< figure src="/attachments/refguide/modeling/menus/edit-menu/go-to-option/go-to-target.png" alt="Go to Target" class="no-border" width="600" >}}

* **Opening a data source of an element** – on pages, you can navigate to the data source of a widget. For example, you can right-click a button in the data grid and select **Go to microflow**. Mendix Studio Pro opens the corresponding microflow:

    {{< figure src="/attachments/refguide/modeling/menus/edit-menu/go-to-option/go-to-microflow.png" alt="Go to Microflow" class="no-border" width="500" >}}

* **Opening an entity from a microflow** – you can navigate to an entity in the domain model if you right-click an activity in the microflow and select **Go to entity**. Mendix Studio Pro opens the corresponding domain model:

    {{< figure src="/attachments/refguide/modeling/menus/edit-menu/go-to-option/go-to-entity.png" alt="Go to Entity" class="no-border" width="400" >}}

## The Go to Dialog {#go-to-dialog}

The **Go to** dialog box can be accessed by both the **Edit** menu or by using the <kbd>Ctrl</kbd> + <kbd>G</kbd> shortcut. The dialog box allows quick navigation to any document or domain model element in the app by typing a few letters and pressing <kbd>Enter</kbd>.

{{< figure src="/attachments/refguide/modeling/menus/edit-menu/go-to-option/go-to-dialog.png" alt="Go to Dialog"  width="400" >}}

The typed letters or term are cached, so if the dialog box is closed and reopened, the input is not lost.

This dialog box also supports a filter option. The filter selection is saved when you close and reopen the dialog box, and it persists over different user sessions. This means the filter selection is saved even if you close and reopen Studio Pro.

## Read More

* [Find, Find Advanced, and Find Usages](/refguide/find-and-find-advanced/)
* [Navigation](/refguide/navigation/)
* [Pages](/refguide/pages/)
* [Microflows](/refguide/microflows/)
* [Data in the Domain Model](/refguide/domain-model/)
