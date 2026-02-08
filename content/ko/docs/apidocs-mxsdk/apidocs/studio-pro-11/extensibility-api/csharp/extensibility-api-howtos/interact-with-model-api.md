---
title: "C#를 사용하여 Model API와 상호 작용하기"
linktitle: "모델 상호 작용"
url: /apidocs-mxsdk/apidocs/interact-with-model-api-11/
weight: 11
---

## 소개

기본 확장을 만든 후에는 Studio Pro 모델과 상호 작용하여 앱을 변경하고 싶을 수 있습니다. Model API는 이 기능을 가능하게 하며 `Mendix.StudioPro.ExtensionsAPI.Model` 네임스페이스를 통해 노출됩니다.

## Mendix Model SDK에 접근하기

모델에 접근하려면 확장 클래스의 `CurrentApp` 속성을 사용하세요. All extension classes implement the [`Mendix.StudioPro.ExtensionsAPI.UI.UIExtensionBase`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI/UIExtensionBase.md) base class, which provides access to `CurrentApp`.

The `CurrentApp` property exposes an implementation of [`IModel`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Model/IModel.md). This gives you access to all model elements. 

{{% alert type="info" %}}
Any changes made to the model must be contained within a model transaction.
{{% /alert %}}

## 모델 요소와 상호 작용하기

모델에 대한 모든 수정은 트랜잭션 내에서 이루어져야 합니다. 그렇지 않으면 `System.InvalidOperationException`이 발생합니다. There can be only a single active (for example, not committed or rolled back) `ITransaction` for the whole app.

Transactions group changes, but do not provide a way to isolate them. Changes to a model are immediately visible to all code interacting with the model. When transaction is rolled back or is undone by a user, all included changes are reverted.

## 트랜잭션 시작하기

To create transaction, call [`IModel.StartTransaction`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Model/IModel/StartTransaction.md). This method returns a transaction object that implements [`ITransaction`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Model/ITransaction.md).

For your changes to reflect within the model, you must first commit the transaction by calling [`ITransaction.Commit`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Model/ITransaction/Commit.md).

If you wish to abort or revert your changes, call [`ITransaction.Rollback`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Model/ITransaction/Rollback.md).

## 예제

앱을 변경하는 가장 일반적인 사용 사례는 하나 또는 몇 개의 속성을 동기적으로 변경하는 것입니다.

다음 예제에서는 기존 폴더의 이름을 변경합니다:

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

## 추가 자료

* [Understanding the Mendix Metamodel](/apidocs-mxsdk/mxsdk/mendix-metamodel/)
