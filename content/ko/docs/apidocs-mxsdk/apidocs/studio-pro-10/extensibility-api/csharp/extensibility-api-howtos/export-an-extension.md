---
title: "C# 확장 기능 내보내기"
linktitle: "확장 기능 내보내기"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-10/export-an-extension/
weight: 99
---

## 소개

이 사용 방법에서는 Marketplace에 게시하거나 다른 Mendix 개발자와 직접 공유할 수 있도록 확장 기능을 내보내는 방법을 설명합니다.

## 전제 조건

확장 기능 애드온 모듈을 내보내기 전에 다음 기능 플래그가 활성화되어 있는지 확인하십시오: `--enable-extension-development`

자세한 내용은 [Extensibility API 시작하기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/get-started/)를 참조하십시오.

## 확장 기능 내보내기

1. Studio Pro에서 개발 확장 기능이 포함된 앱을 여십시오.
2. 확장 기능 폴더와 동일한 이름으로 새 모듈을 만드십시오. 예를 들어, 확장 기능 폴더가 *MyFirstExtension*이면 모듈도 *MyFirstExtension*이어야 합니다.
3. **App Explorer**에서 이 모듈의 **Settings**로 이동하여 **Export** 탭을 클릭하십시오.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/export-an-extension/export-tab.png" max-width=80% >}}

4. **Module type**을 **Add-on module**로 설정하십시오.
5. **Module version** 필드에 확장 기능의 버전 번호를 입력하십시오.
6. **Extension Name** 필드에서 확장 기능의 이름을 선택하십시오. 이름은 모듈 이름과 일치해야 합니다.

    {{% alert color="info" %}} **Extension name** 필드가 설정되지 않는 경우 기능 플래그가 올바르게 구성되지 않은 것입니다. 자세한 내용은 [Extensibility API 시작하기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/get-started/)를 참조하십시오. {{% /alert %}}

7. **OK**을 클릭하여 설정을 저장하십시오.
8. **App Explorer**에서 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Export**를 클릭하여 확장 기능을 내보내십시오.

이제 [Marketplace에 확장 기능을 게시](/appstore/submit-content/#adding)하거나 다른 Mendix 개발자와 직접 공유할 수 있습니다.
