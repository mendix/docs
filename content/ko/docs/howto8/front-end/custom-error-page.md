---
title: "사용자 정의 오류 페이지 만들기"
url: /howto8/front-end/custom-error-page/
weight: 55
---

## 소개

애플리케이션이 중지될 때마다 유명한 녹색 몬스터가 표시됩니다. 애플리케이션이 다운될 때 앱 사용자에게 더 전문적인 페이지를 제공하기 위해, Mendix는 *Mendix Cloud*에서 사용자 정의 오류 페이지 생성을 지원합니다.

`offline.html` 페이지, `404.html` 페이지, `403.html` 페이지를 만들 수 있습니다.

각 파일은 다른 목적을 제공합니다:

* `offline.html`: 애플리케이션이 수동으로 중지되었을 때 제공됩니다
* `404.html`: 경로가 존재하지 않을 때마다 제공됩니다
* `403.html`: IP 필터가 구현되었거나 클라이언트 인증서 제한으로 인해 리소스에 대한 접근이 거부되었을 때 제공됩니다

이러한 파일을 만들지 않으면 각 시나리오에 기본 "녹색 몬스터"가 대신 사용됩니다.

{{< figure src="/attachments/howto8/front-end/custom-error-page/monsters.png" class="no-border" >}}

이 사용 방법 가이드에서는 다음을 배우게 됩니다:

* 사용자 정의 오류 페이지 만들기

## 사전 요구 사항

이 사용 방법 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* 앱의 로컬 저장소가 있어야 합니다
* 앱이 *Mendix Cloud에서 호스팅*되어야 합니다

## 사용자 정의 오류 페이지 만들기

1. 앱의 로컬 폴더를 여십시오.
2. **theme**으로 이동하십시오:

    {{< figure src="/attachments/howto8/front-end/custom-error-page/theme.png" class="no-border" >}}

3. *error_page*라는 새 폴더를 만드십시오:

    {{< figure src="/attachments/howto8/front-end/custom-error-page/error-page.png" class="no-border" >}}

4. **error_page** 폴더에 *offline.html* 파일을 배치하십시오:

    {{< figure src="/attachments/howto8/front-end/custom-error-page/offline.png" class="no-border" >}}

    선택적으로 *404.html* 및 *403.html* 페이지도 만들 수 있습니다.

    {{% alert color="info" %}}이러한 *.html* 파일에서는 외부 리소스 또는 절대 경로 `/error_page/` 아래의 리소스만 참조할 수 있습니다; `/error_page/` 경로는 애플리케이션이 중지되었을 때 사용 가능한 유일한 경로입니다.{{% /alert %}}

5. Studio Pro에서 변경 사항을 커밋하십시오.

{{% alert color="warning" %}}
앱이 오프라인일 때 사용자 정의 오류 페이지가 표시되기까지 최대 한 시간이 걸릴 수 있습니다.
{{% /alert %}}

### 오프라인 페이지 예제

`offline.html/404.html/403.html` 페이지 예제는 다음과 같을 수 있습니다:

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

이 예제는 *style.css*와 *script.js*를 참조하며, 특별한 스타일링 및/또는 JavaScript가 필요한 경우 이 파일도 만들어 **error_page** 디렉토리에 배치해야 합니다.
