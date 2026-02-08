---
title: "C#의 Studio Pro Extensibility 서비스"
linktitle: "Studio Pro 서비스"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-10/services/
weight: 10
---

## 소개

Studio Pro 서비스는 확장에 핵심 Studio Pro 기능을 노출하는 인터페이스입니다. 이러한 인터페이스의 이름은 `I*Service`이며 `Mendix.StudioPro.ExtensionsAPI.Services` 또는 `Mendix.StudioPro.ExtensionsAPI.UI.Services` 네임스페이스에서 찾을 수 있습니다. Microsoft Extensions Framework(MEF)를 사용하여 주입할 수 있습니다. MEF 및 사용 방법에 대한 자세한 내용은 공식 [Microsoft 문서](https://learn.microsoft.com/en-us/dotnet/framework/mef/)를 참조하십시오.

{{% alert color="info" %}}단위 테스트 목적으로는 의미가 있을 수 있지만 프로덕션 코드에서 이러한 인터페이스를 구현해서는 안 됩니다.{{% /alert %}}

## 사용 가능한 서비스 목록

* 앱 모델 또는 그 일부에 대해 작동하는 도우미:
    * [`IMicroflowService`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Services/IMicroflowService.md)
    * [`IMicroflowExpressionService`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Services/IMicroflowExpressionService.md)
* 대화형 작업에 대한 액세스를 제공하는 서비스:
    * [`IAppService`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI.Services/IAppService.md)
    * [`ISelectorDialogService`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI.Services/ISelectorDialogService.md)
    * [`IDockingWindowService`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI.Services/IDockingWindowService.md)
* 유틸리티 서비스:
    * [`IConfigurationService`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Services/IConfigurationService.md)
    * [`ILogService`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Services/ILogService.md)
    * [`IExtensionFileService`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Services/IExtensionFileService.md)
