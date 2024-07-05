---
title: "Interact with the Model SDK"
url: /apidocs-mxsdk/apidocs/extensibility-api/interact-with-model-sdk/
weight: 11
---

## 1 Introduction

After you created some basic extensions, you want to interact with the Studio Pro model in order to make changes to your app. The [Mendix Model SDK](/apidocs-mxsdk/mxsdk/sdk-intro/#12-mendix-model-sdk) allows you to do just that. The Model representation is exposed via the [`Mendix.StudioPro.ExtensionsAPI.Model`](https://github.com/mendix/ExtensionAPI-Samples/tree/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Model) namespace.

## 2 Gaining Access to the Mendix Model SDK

The easiest way to gain access to the Model is by using the `CurrentApp` property of Extension class. All Extension classes implement the [`Mendix.StudioPro.ExtensionsAPI.UI.UIExtensionBase`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI/UIExtensionBase.md) base class which provides this access.

The `CurrentApp` property exposes an implementation of [`IModel`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Model/IModel.md). with a IModel reference you can gain access to any other model elements. However, any changes that you introduce must be contained within a model transaction.

## 3 Interacting with Model Elements

Any modification to the model must be done within a transaction otherwise a `System.InvalidOperationException` is thrown. There can be only a single active (i.e. not committed or rolled back) ITransaction for the whole app.

Transactions do not provide a way to isolate changes, but to group them. That is, any change to a model is immediately visible to all code working with the model. When transaction is rolled back programmatically or is undone by a user, all changes included in it are reverted.

To create transaction you can call [`IModel.StartTransaction`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Model/IModel/StartTransaction.md)
This method will return a transaction object which implements [`ITransaction`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Model/ITransaction.md)

For your changes to reflect within the model you must first commit the transaction by calling [`ITransaction.Commit`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Model/ITransaction/Commit.md).

Alternatively if you wish to abort or revert your changes you can call [`ITransaction.Rollback`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Model/ITransaction/Rollback.md).

#### 3.1 Examples

The most common use case for changing an app is to change one or few properties synchronously.

In the following example, we rename an existing folder:

```csharp
using (var transaction = model.StartTransaction("rename folder"))
{
    folder.Name = "New_Name";
    transaction.Commit();
}
```

Here is another simple example that adds an Entity named `testEntity` and adds an attribute called `testAttribute` to it.

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

## 4 Read More

For more information please check:

- [`Mendix.StudioPro.ExtensionsAPI.Model`](https://github.com/mendix/ExtensionAPI-Samples/tree/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Model) namespace
- [Understanding the Mendix MetaModel](https://docs.mendix.com/apidocs-mxsdk/mxsdk/understanding-the-metamodel/)
