---
title: "Interact with the Model API Using C#"
linktitle: "Model Interaction"
url: /apidocs-mxsdk/apidocs/interact-with-model-api-10/
weight: 11
---

## Introduction

Once you have created basic extensions, you may want to interact with the Studio Pro model to make changes to your app. The Model API enables this functionality and is exposed via the` Mendix.StudioPro.ExtensionsAPI.Model` namespace.

## Gaining Access to the Mendix Model SDK

To access the model, use the `CurrentApp` property of your extension class. All extension classes implement the [`Mendix.StudioPro.ExtensionsAPI.UI.UIExtensionBase`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI/UIExtensionBase.md) base class, which provides access to `CurrentApp`.

The `CurrentApp` property exposes an implementation of [`IModel`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Model/IModel.md). This gives you access to all model elements. 

{{% alert type="info" %}}
Any changes made to the model must be contained within a model transaction.
{{% /alert %}}

## Interacting with Model Elements

Any modification to the model must be done within a transaction; otherwise, a `System.InvalidOperationException` is thrown. There can be only a single active (for example, not committed or rolled back) `ITransaction` for the whole app.

Transactions group changes, but do not provide a way to isolate them. Changes to a model are immediately visible to all code interacting with the model. When transaction is rolled back or is undone by a user, all included changes are reverted.


## Start a Transaction

To create transaction, call [`IModel.StartTransaction`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Model/IModel/StartTransaction.md). This method returns a transaction object that implements [`ITransaction`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Model/ITransaction.md).

For your changes to reflect within the model, you must first commit the transaction by calling [`ITransaction.Commit`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Model/ITransaction/Commit.md).

If you wish to abort or revert your changes, call [`ITransaction.Rollback`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Model/ITransaction/Rollback.md).

## Examples

The most common use case for changing an app is to change one or few properties synchronously.

In the following example, an existing folder is renamed:

```csharp
using (var transaction = model.StartTransaction("rename folder"))
{
    folder.Name = "New_Name";
    transaction.Commit();
}
```

The next example below adds an entity named `testEntity` and adds an attribute called `testAttribute` to it.

```csharp
using (var transaction = model.StartTransaction("add entity"))
{
    var entity = CurrentApp.Create<IEntity>();
    var attr = CurrentApp.Create<IAttribute>();
    entity.Name = "testEntity";
    attr.Name = "testAttribute";
    entity.AddAttribute(attr);
    var copyEntity = CurrentApp.Copy(entity);
    transaction.Commit();
}
```