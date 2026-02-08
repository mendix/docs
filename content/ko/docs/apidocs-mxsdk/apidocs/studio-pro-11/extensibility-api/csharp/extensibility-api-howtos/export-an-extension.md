---
title: "C# 확장 내보내기"
linktitle: "확장 내보내기"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-11/export-an-extension/
weight: 99
---

## 소개

이 How-to에서는 export an extension so you can publish it in the Marketplace or share it directly with other Mendix developers.

## 전제 조건

확장 애드온 모듈을 내보내기 전에 다음 기능 플래그가 활성화되어 있는지 확인하세요: `--enable-extension-development` 

For more information, see [Get Started with the Extensibility API](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/get-started/).

## 확장 내보내기

1. In Studio Pro, open the app that contains your development extension.
2. Create a new module with the same name as your extension folder. For example, if your extension folder is named *MyFirstExtension*, your module must also be named *MyFirstExtension*.
3. In the **App Explorer**, navigate to the **Settings** of this module and click the **Export** tab.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/export-an-extension/export-tab.png" max-width=80% >}}

4. Set **Module type** to **Add-on module**.
5. In the **Module version** field, enter the version number of the extension.
6. In the **Extension Name** field, select the name of your extension. This must match your module name.

    {{% alert color="info" %}} If you do not see the **Extension name** field, your feature flag is not configured correctly. For more information, see [Get Started with the Extensibility API](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/get-started/). {{% /alert %}}

7. Click **OK** to save the settings.
8. In the **App Explorer**, right-click the module and click **Export** to export the extension.

이제 [publish the extension in the Marketplace](/appstore/submit-content/#adding) or share it with other Mendix developers.
