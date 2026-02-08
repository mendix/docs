---
title: "C#을 사용하여 모델 API와 상호 작용하기"
linktitle: "모델 상호 작용"
url: /apidocs-mxsdk/apidocs/interact-with-model-api-10/
weight: 11
---

## 소개

기본 확장 프로그램을 만든 후에는 Studio Pro 모델과 상호 작용하여 앱을 변경하고 싶을 수 있습니다. Model API는 이 기능을 활성화하며 `Mendix.StudioPro.ExtensionsAPI.Model` 네임스페이스를 통해 노출됩니다.

## Mendix Model SDK에 대한 액세스 권한 얻기

모델에 액세스하려면 확장 클래스의 `CurrentApp` 속성을 사용하십시오. 모든 확장 클래스는 `CurrentApp`에 대한 액세스를 제공하는 [`Mendix.StudioPro.ExtensionsAPI.UI.UIExtensionBase`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI/UIExtensionBase.md) 기본 클래스를 구현합니다.

`CurrentApp` 속성은 [`IModel`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Model/IModel.md)의 구현을 노출합니다. 이를 통해 모든 모델 요소에 액세스할 수 있습니다.

{{% alert type="info" %}}
모델에 대한 모든 변경 사항은 모델 트랜잭션 내에 포함되어야 합니다.
{{% /alert %}}

## 모델 요소와 상호 작용

모델에 대한 모든 수정은 트랜잭션 내에서 수행되어야 합니다. 그렇지 않으면 `System.InvalidOperationException`이 발생합니다. 전체 앱에 대해 활성(예: 커밋되지 않거나 롤백되지 않음) `ITransaction`은 하나만 있을 수 있습니다.

트랜잭션은 변경 사항을 그룹화하지만 이를 격리하는 방법은 제공하지 않습니다. 모델에 대한 변경 사항은 모델과 상호 작용하는 모든 코드에 즉시 표시됩니다. 트랜잭션이 롤백되거나 사용자에 의해 취소되면 포함된 모든 변경 사항이 되돌려집니다.

## 트랜잭션 시작

트랜잭션을 생성하려면 [`IModel.StartTransaction`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Model/IModel/StartTransaction.md)을 호출하십시오. 이 메서드는 [`ITransaction`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Model/ITransaction.md)을 구현하는 트랜잭션 객체를 반환합니다.

변경 사항이 모델 내에 반영되도록 하려면 [`ITransaction.Commit`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Model/ITransaction/Commit.md)을 호출하여 트랜잭션을 커밋해야 합니다.

변경 사항을 중단하거나 되돌리려면 [`ITransaction.Rollback`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Model/ITransaction/Rollback.md)을 호출하십시오.

## 예시

앱을 변경하는 가장 일반적인 사용 사례는 하나 이상의 속성을 동기적으로 변경하는 것입니다.

다음 예에서는 기존 폴더의 이름이 변경됩니다:

```csharp
using (var transaction = model.StartTransaction("rename folder"))
{
    folder.Name = "New_Name";
    transaction.Commit();
}
```

아래의 다음 예제는 `testEntity`라는 엔티티를 추가하고 여기에 `testAttribute`라는 속성을 추가합니다.

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
