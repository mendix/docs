---
title: "C#의 Extensibility Extension Points"
linktitle: "Extension Points"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-10/extension-points/
weight: 9
---

## 소개

Extension Points를 사용하면 Studio Pro IDE의 다양한 영역에 기능을 연결할 수 있습니다. `ExtensionPoint`는 확장 개발자가 상속할 수 있는 기본 클래스입니다. 상속하면 Studio Pro가 해당 기능을 로드합니다. 이 클래스들은 모두 `*Extension` 접미사를 가지며, [`ExtensionBase`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI/ExtensionBase.md) 기본 클래스를 상속하고, 몇 가지 가상 또는 추상 멤버를 포함합니다.

`ExtensionPoint`는 Studio Pro에 사용자 정의 동작을 추가할 수 있는 유일한 방법입니다. 제공되는 다른 모든 API는 이러한 동작의 구현 또는 표현을 지원하기 위해서만 존재합니다.

주입되려면 위의 예에서 보여주는 것처럼 클래스에 [ExportAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.composition.exportattribute?view=dotnet-plat-ext-6.0)를 적용해야 합니다. 이 속성은 Studio Pro에서 사용하는 [Managed Extensibility Framework](https://docs.microsoft.com/en-us/dotnet/framework/mef/)의 일부입니다.

## 사용 가능한 Extension Points 목록

### Studio Pro UI 확장

* [ContextMenuExtension](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI.Menu/ContextMenuExtension-1.md) – 모델 요소에 새 컨텍스트 메뉴 항목을 주입할 수 있습니다
* [MenuExtension](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI.Menu/MenuExtension.md) – Studio Pro 메뉴 바에 새 메뉴 항목을 주입할 수 있습니다
* [DockablePaneExtension](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI.DockablePane/DockablePaneExtension.md) – Connector나 Documentation 같은 새 [도킹 가능한 창](/refguide/studio-pro-overview/#panes)을 도입할 수 있습니다. 창은 Studio Pro [레이아웃 시스템](/refguide/view-menu/#layout-of-panes)과 자동으로 통합됩니다
  
  {{% alert color="info" %}}Studio Pro 사용자가 열 수 있도록 각 창에 대해 새 **View** 메뉴 항목을 도입하는 것이 좋습니다.{{% /alert %}}

다음에 접근할 수 있는 추가 기능이 있습니다:

* [Studio Pro 구성](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI/ExtensionBase/Configuration.md)
* [현재 열린 앱](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI/UIExtensionBase/CurrentApp.md) 및 해당 앱에 대한 이벤트 구독 메커니즘
* [UIExtensionBase](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI/UIExtensionBase.md)에 노출된 subscribe 및 unsubscribe 메서드를 사용하여 이벤트를 구독할 수 있습니다. 

### Studio Pro 및 MxBuild 확장

* [ConsistencyCheckExtension](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.ConsistencyCheck/ConsistencyCheckExtension-1.md) – [일관성 검사](/refguide/consistency-errors/) 프로세스에 사용자 정의 로직을 주입할 수 있습니다
