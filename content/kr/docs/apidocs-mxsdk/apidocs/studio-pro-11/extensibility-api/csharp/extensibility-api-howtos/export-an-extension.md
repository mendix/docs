---
title: "C# 확장 프로그램 내보내기"
linktitle: "확장 프로그램 내보내기"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-11/export-an-extension/
weight: 99
---

## 소개

이 사용 방법(how-to)에서는 Marketplace에 게시하거나 다른 Mendix 개발자와 직접 공유할 수 있도록 확장 프로그램을 내보내는 방법을 설명합니다.

## 전제 조건

확장 프로그램 추가 기능(add-on) 모듈을 내보내기 전에 다음 기능 플래그가 활성화되어 있는지 확인하십시오: `--enable-extension-development`

자세한 내용은 [Extensibility API 시작하기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/get-started/)를 참조하십시오.

## 확장 프로그램 내보내기

1. Studio Pro에서 개발 확장 프로그램이 포함된 앱을 엽니다.
2. 확장 프로그램 폴더와 동일한 이름으로 새 모듈을 만듭니다. 예를 들어 확장 프로그램 폴더 이름이 *MyFirstExtension*인 경우 모듈 이름도 *MyFirstExtension*이어야 합니다.
3. **App Explorer**에서 이 모듈의 **Settings**로 이동하여 **Export** 탭을 클릭합니다.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/export-an-extension/export-tab.png" max-width=80% >}}

4. **Module type**을 **Add-on module**로 설정합니다.
5. **Module version** 필드에 확장 프로그램의 버전 번호를 입력합니다.
6. **Extension Name** 필드에서 확장 프로그램의 이름을 선택합니다. 이는 모듈 이름과 일치해야 합니다.

    {{% alert color="info" %}} **Extension name** 필드가 표시되지 않으면 기능 플래그가 올바르게 구성되지 않은 것입니다. 자세한 내용은 [Extensibility API 시작하기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/get-started/)를 참조하십시오. {{% /alert %}}

7. **OK**를 클릭하여 설정을 저장합니다.
8. **App Explorer**에서 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Export**를 클릭하여 확장 프로그램을 내보냅니다.

이제 [확장 프로그램을 Marketplace에 게시](/appstore/submit-content/#adding)하거나 다른 Mendix 개발자와 공유할 수 있습니다.
