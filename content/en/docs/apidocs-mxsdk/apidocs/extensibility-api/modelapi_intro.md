---
title: "Introduction to Model Api"
url: /extensions-api/modelapi_intro/
weight: 11
---

# Interacting with the Studio Pro Model

So you have created some basic extensions but now want to interact with the Studio Pro model in order to make changes to your app?
The Model API allows you to do just that. The Model Representation is exposed via the [`Mendix.StudioPro.ExtensionsAPI.Model`](xref:Mendix.StudioPro.ExtensionsAPI.Model) namespace.

### Gaining access to the Model Api

The easiest way to gain access to the Model is by using the `CurrentApp` property of Extension class. All Extension classes implement the [`Mendix.StudioPro.ExtensionsAPI.UI.UIExtensionBase`](xref:Mendix.StudioPro.ExtensionsAPI.UI.UIExtensionBase) base class which provides this access.

The `CurrentApp` property exposes an implementation of [`IModel`](xref:Mendix.StudioPro.ExtensionsAPI.Model.IModel). with a IModel reference you can gain access to any other model elements.
However any changes that you introduce must be contained within a model transaction.

### Interacting with model elements

Any modification to the model must be done within a transaction otherwise a System.InvalidOperationException is thrown. There can be only a single active (i.e. not committed or rolled back) ITransaction for the whole app.

Transactions do not provide a way to isolate changes, but to group them. That is, any change to a model is immediately visible to all code working with the model. When transaction is rolled back programmatically or is undone by a user, all changes included in it are reverted.

To create transaction you can call [`IModel.StartTransaction`](xref:Mendix.StudioPro.ExtensionsAPI.Model.IModel)
This method will return a transaction object which implements [`ITransaction`](xref:Mendix.StudioPro.ExtensionsAPI.Model.ITransaction)

For your changes to reflect within the model you must first commit the transaction by calling [`ITransaction.Commit`](xref:Mendix.StudioPro.ExtensionsAPI.Model.ITransaction.Commit)

Alternatively if you wish to abort or revert your changes you can call [`ITransaction.Rollback`](xref:Mendix.StudioPro.ExtensionsAPI.Model.ITransaction.Rollback)

Examples
The most common use case for changing an app is to change one or few properties synchronously.

In the following example we will rename an existing folder:

```csharp
using (var transaction = model.StartTransaction("rename folder"))
{
    folder.Name = "New_Name";
    transaction.Commit();
}
```

here is another simple example which adds an Entity named `testEntity` and adds an attribute called `testAttribute` to it.

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

### Further Reading

For more information please check:

- [`Mendix.StudioPro.ExtensionsAPI.Model`](xref:Mendix.StudioPro.ExtensionsAPI.Model) namespace
- [Understanding the Mendix MetaModel](https://docs.mendix.com/apidocs-mxsdk/mxsdk/understanding-the-metamodel/)
