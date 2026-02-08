---
title: "테마 구성"
url: /howto9/front-end/configuring-your-theme/
weight: 15
description: "Studio Pro에서 페이지의 스타일링을 구성하는 방법을 설명합니다."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

이 문서에서는 Studio Pro에서 페이지의 스타일링을 구성하는 방법을 설명합니다.

## 테마 구성

웹 브라우저에서 Mendix 애플리케이션을 열 때 로드되는 스타일링은 인덱스 페이지의 HTML에서 구성됩니다.

Studio Pro에서 페이지를 볼 때 동일한 스타일링이 로드되도록 하려면, 앱의 theme 폴더에 있는 *settings.json*에서 `"cssFiles"` 속성을 구성할 수 있습니다. 예를 들어, 이 구성에서는 Studio Pro에서 페이지를 볼 때 `theme/web/main.scss`가 로드됩니다:

```json
{
    "cssFiles": [ "theme/web/css/main.scss" ]
}
```

클라이언트와 Studio Pro에서 로드되는 스타일링을 별도로 유지 관리하지 않으려면, 인덱스 페이지에서 다음 토큰을 사용하여 클라이언트에서 동일한 스타일링을 로드할 수 있습니다: `{{themecss}}`.

```html
<head>
    {{themecss}}
</head>
```
