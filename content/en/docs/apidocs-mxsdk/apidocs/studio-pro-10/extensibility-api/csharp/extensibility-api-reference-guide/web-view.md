---
title: "Extensibility Web Views in C#"
linktitle: "Web Views"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-10/web-views/
weight: 12
---

## Introduction

Wherever the Studio Pro Extensibility API allows you to add custom UI, you can implement it using web technologies.

Studio Pro includes a built-in web view for displaying your web-based UI. It also provides a built-in web server that can be used to serve both the web UI and the data it requires.

Additionally, a two-way message passing mechanism enables direct communication between the web content and the C# part of your extension.

## Showing a Web View in the UI

There are a number of places where the Extensibility API allows you to add custom UI.

Typically, the Extensibility API requires you to return a view model for your UI. Every view model type has a corresponding base class used to display the UI in a web view.

The following table lists the APIs that allow you to add custom UI and the corresponding view model base class:

| UI element                     | API for adding UI                        | Base class for view model      |
|--------------------------------|------------------------------------------|--------------------------------|
| Tab (in working area)          | `IDockingWindowManager.OpenTab(...)`     | `WebViewTabViewModel`          |
| Document tab (in working area) | `AppExplorerExtension.EditDocument(...)` | `WebViewDocumentTabViewModel`  |
| Dockable pane                  | `DockablePaneExtension.Open(...)`        | `WebViewDockablePaneViewModel` |
| Modal dialog                   | `IDialogService.ShowDialog(...)`         | `WebViewModalDialogViewModel`  |

The view model base classes are `abstract`, so you are required to create your own view model class that derives from the base class.

Each view model class has a method called `InitWebView` that you must override to initialize the web view.

In this method, you can tell the web view to navigate to the (local) URL that contains your web content.

In addition, the view model class can be used to house the logic for communicating with the web view.

## Serving Content to the Web View

For serving content to the web view and communicating both ways with it, see [Build a Todo Example Extension](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/build-todo-example-extension/).

{{% alert color="warning" %}}
{{% snippet file="/static/_includes/apidocs-mxsdk/warning-wwwroot.md" %}}
{{% /alert %}}
