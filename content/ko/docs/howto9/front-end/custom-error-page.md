---
title: "커스텀 에러 페이지 만들기"
url: /howto9/front-end/custom-error-page/
weight: 55
description: "맞춤형 사용자 경험을 위한 커스텀 에러 페이지를 만드는 방법을 설명합니다."
---

{{% alert color="info" %}}
이 문서에서는 웹 페이지용 커스텀 에러 페이지를 만드는 방법을 설명합니다. 네이티브 모바일은 사용자가 에러 페이지로 이어지는 URL을 입력할 수 없으므로 커스텀 에러 페이지를 사용하지 않습니다.

네이티브 페이지에 대한 커스터마이징된 에러 정보를 만들려면 커스텀 [시스템 텍스트](/refguide9/system-texts/)를 만드세요.
{{% /alert %}}

## 소개

애플리케이션이 중지될 때마다 기본 Mendix 에러 페이지가 표시됩니다. 그러나 더 맞춤화된 사용자 경험을 위해 Mendix Cloud에서 커스텀 에러 페이지를 만들 수 있습니다.

구체적으로 `offline.html` 페이지, `404.html` 페이지 및 `403.html` 페이지를 만들 수 있습니다.

각 파일은 다른 목적으로 사용됩니다:

* `offline.html`: 애플리케이션이 수동으로 중지되었을 때 제공됩니다
* `404.html`: 경로가 존재하지 않을 때마다 제공됩니다
* `403.html`: IP 필터가 구현되었거나 클라이언트 인증서 제한 때문에 리소스에 대한 접근이 거부될 때 제공됩니다

이러한 파일을 만들지 않으면 각 시나리오에 대해 기본 에러 페이지가 사용됩니다:

{{< figure src="/attachments/howto9/front-end/custom-error-page/custom-error-page.png" class="no-border" >}}

이 사용 방법에서는 다음을 수행하는 방법을 배웁니다:

* 커스텀 에러 페이지 만들기

## 사전 준비 사항

이 사용 방법을 시작하기 전에 다음 사전 준비 사항을 완료했는지 확인하세요:

* 앱의 로컬 리포지토리가 있어야 합니다
* 앱이 *Mendix Cloud에 호스팅*되어 있어야 합니다
* 사용 중인 Atlas 모듈 버전을 확인하세요

## 커스텀 에러 페이지 만들기

{{% alert color="info" %}}
Atlas 2를 사용하는 경우 [업그레이드](/refguide9/moving-from-atlas-2-to-3/)를 고려하세요. 불가능한 경우 아래 지침을 따르되 **error_page** 폴더를 **theme** 폴더에 직접 만드세요.
{{% /alert %}}

Atlas 3을 사용하는 경우 다음을 수행하세요:

1. 앱의 로컬 폴더를 여세요.
2. **theme**으로 이동하세요:

    {{< figure src="/attachments/howto9/front-end/custom-error-page/theme.png" class="no-border" >}}

3. **web**으로 이동하세요:

    {{< figure src="/attachments/howto9/front-end/custom-error-page/web.png" class="no-border" >}}

4. *error_page*라는 새 폴더를 만드세요:

    {{< figure src="/attachments/howto9/front-end/custom-error-page/error-page.png" class="no-border" >}}

5. **error_page** 폴더에 *offline.html* 파일을 배치하세요:

    {{< figure src="/attachments/howto9/front-end/custom-error-page/offline.png" class="no-border" >}}

    선택적으로 *404.html* 및 *403.html* 페이지도 만들 수 있습니다.

    {{% alert color="info" %}}이 *.html* 파일에서는 외부 리소스 또는 절대 경로 `/error_page/` 아래의 리소스만 참조할 수 있습니다; `/error_page/` 경로는 애플리케이션이 중지되었을 때 사용할 수 있는 유일한 경로입니다.{{% /alert %}}

6. Studio Pro에서 변경 사항을 커밋하세요.

{{% alert color="warning" %}}
앱이 오프라인일 때 커스텀 에러 페이지가 표시되기까지 최대 한 시간이 걸릴 수 있습니다.
{{% /alert %}}

### 오프라인 페이지 예시

`offline.html`, `404.html` 또는 `403.html` 페이지의 예시는 다음과 같습니다:

```html
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="/error_page/style.css">
    <script src="/error_page/script.js"></script>
  </head>
  <body>
    This application is currently offline.
  </body>
</html>
```

이 예시는 *style.css*와 *script.js*를 참조하며, 특별한 스타일링 및/또는 JavaScript를 원하는 경우 이러한 파일도 **error_page** 디렉토리에 만들어 배치해야 합니다.
