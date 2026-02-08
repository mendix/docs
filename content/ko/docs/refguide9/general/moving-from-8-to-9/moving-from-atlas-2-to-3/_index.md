---
title: "Atlas 2에서 Atlas 3으로 마이그레이션"
url: /refguide9/moving-from-atlas-2-to-3/
weight: 6
aliases:
    - /refguide/moving-from-atlas-2-to-3/
---

## 소개

Atlas 3는 Mendix의 스타일링에 새로운 수준의 성능과 정교함을 제공합니다. Atlas 2에서 Atlas 3으로 업그레이드하려면 아래의 [Atlas 2에서 Atlas 3으로 업그레이드](#upgrade) 섹션을 참조하십시오. Atlas 3가 Mendix에 가져오는 변경 사항에 대한 높은 수준의 요약을 보려면 [Atlas 3 변경 요약 참조 가이드](/refguide9/atlas3-change-summary/)를 참조하십시오.

Atlas 2에서 Atlas 3으로 업그레이드하려면 아래의 [Atlas 2에서 Atlas 3으로 업그레이드](#upgrade) 섹션을 완료해야 합니다. Atlas에 사용자 정의 스타일링을 추가하지 *않은* 경우, 다음 하위 섹션만 완료하면 됩니다:

* [테마 디렉터리 업그레이드](#upgrade-theme-directory)
* [UI 콘텐츠 마이그레이션](#upgrade-ui-content)
* [웹 스타일링 마이그레이션](#upgrade-web-styling)
* [네이티브 스타일링 마이그레이션](#upgrade-native-styling)
* [사용자 정의 디자인 속성 마이그레이션](#upgrade-design-properties)

업그레이드 지침 이후의 섹션에서는 Atlas 3으로 업그레이드할 때 발생할 수 있는 알려진 문제와 문제 해결 사항을 참조합니다. Atlas에 사용자 정의 스타일링을 도입한 경우에만 참조하면 됩니다:

* [Atlas 3으로 업그레이드 후 예상되는 문제](#expected-issues)
* [Atlas 3으로 업그레이드 후 엣지 케이스 문제](#edge-cases)
* [일반적인 Atlas 문제 해결](#troubleshoot)

## Atlas 2에서 Atlas 3으로 업그레이드 {#upgrade}

업그레이드 전에, Atlas 3에서는 Mendix 9에서 하이브리드 프로필이 지원 중단되었기 때문에 모든 하이브리드 콘텐츠가 제거된다는 점에 유의하십시오. 앱에 하이브리드 콘텐츠가 필요한 경우, Atlas의 것과 별도로 모든 하이브리드 콘텐츠를 직접 생성하지 않는 한 Atlas 3으로 업그레이드하지 않는 것을 Mendix는 권장합니다.

업그레이드 프로세스를 시작하기 전에, *스타일링 사용자 정의 방법*의 [파일 및 폴더 구조](/howto9/front-end/customize-styling-new/#file-and-folder) 섹션을 읽어 Atlas 3에서 도입된 폴더 구조 변경 사항을 확인하면 도움이 될 수 있습니다.

### 테마 디렉터리 업그레이드 {#upgrade-theme-directory}

Atlas 3 사양에 맞게 테마 디렉터리를 업그레이드하려면 다음 단계를 완료하십시오:

1. Atlas 2의 **theme** 디렉터리 이름을 변경합니다. Mendix는 *theme_atlas2*로 이름을 변경할 것을 제안합니다:

    {{< figure src="/attachments/refguide9/general/moving-from-8-to-9/moving-from-atlas-2-to-3/atlas2-themefolder.png" alt="Atlas2 folder" class="no-border" >}}

1. Atlas 3 [theme.zip](https://github.com/mendix/widgets-resources/releases/download/atlas-ui-theme-dist/theme.zip)을 다운로드하고 Mendix 앱 폴더의 루트에 추출합니다. 폴더 구조는 아래 예제와 유사해야 합니다. **Mendix 앱 루트**, 그 다음 **theme**, 그 다음 **web** 및 **native**:

    {{< figure src="/attachments/refguide9/general/moving-from-8-to-9/moving-from-atlas-2-to-3/atlas3-themefolder.png" alt="Atlas 3 folder" class="no-border" >}}

### UI 콘텐츠 마이그레이션 {#upgrade-ui-content}

**Atlas 3**는 이전에 Atlas_UI_Resources에 있던 UI 콘텐츠를 3개의 별도 모듈로 배포합니다: **Atlas Core**, **Atlas Web Content** 및 **Atlas Native Content**.

* [Atlas Core](https://marketplace.mendix.com/link/component/117187) - Atlas 핵심 스타일링 및 레이아웃 포함
* [Atlas Web Content](https://marketplace.mendix.com/link/component/117183) - Atlas 웹 페이지 템플릿 및 빌딩 블록 포함
* [Atlas Native Content](https://marketplace.mendix.com/link/component/117175) - Atlas 네이티브 페이지 템플릿 및 빌딩 블록 포함

#### Atlas UI Resources를 Atlas Core로 업그레이드

1. **Atlas UI Resources**에 있는 Atlas UI 콘텐츠(예: 빌딩 블록, 페이지 템플릿 또는 레이아웃)를 수정한 경우, 수정한 UI 콘텐츠를 앱 내의 다른 사용자 정의 모듈로 이동하는 것이 좋습니다. Atlas UI 콘텐츠를 수정하지 않은 경우 *이 단계를 건너뛰십시오*.
1. Studio Pro에서 모듈을 마우스 오른쪽 버튼으로 클릭한 다음 **Rename**을 클릭하여 **Atlas_UI_Resources** 모듈의 이름을 **Atlas_Core**로 변경합니다:

    {{< figure src="/attachments/refguide9/general/moving-from-8-to-9/moving-from-atlas-2-to-3/2-rename.png" class="no-border" >}}

1. Marketplace에서 [Atlas Core](https://marketplace.mendix.com/link/component/117187)를 다운로드하고 **Atlas_Core**로 이름이 변경된 기존 **Atlas_UI_Resources**를 교체합니다:

    {{< figure src="/attachments/refguide9/general/moving-from-8-to-9/moving-from-atlas-2-to-3/3-import.png" class="no-border" >}}

#### 앱에 Atlas Web Content 추가

1. Marketplace에서 [Atlas Web Content](https://marketplace.mendix.com/link/component/117183)를 다운로드합니다

    {{< figure src="/attachments/refguide9/general/moving-from-8-to-9/moving-from-atlas-2-to-3/atlas3-change-summary/atlas-web-content-marketplace.png" alt="Atlas web content" class="no-border" >}}

1. **Atlas Web Content**가 **Marketplace Modules** 안에 새 모듈로 나타납니다

    {{< figure src="/attachments/refguide9/general/moving-from-8-to-9/moving-from-atlas-2-to-3/atlas-web-content-folder-structure.png" alt="Atlas web content folder"   width="250"  class="no-border" >}}

#### 앱에 Atlas Native Content 추가

1. Marketplace에서 [Atlas Native Content](https://marketplace.mendix.com/link/component/117175)를 다운로드합니다:

    {{< figure src="/attachments/refguide9/general/moving-from-8-to-9/moving-from-atlas-2-to-3/atlas3-change-summary/atlas-native-content-marketplace.png" alt="Atlas native content" class="no-border" >}}

1. **Atlas Native Content**가 **Marketplace Modules** 안에 새 모듈로 나타납니다:

    {{< figure src="/attachments/refguide9/general/moving-from-8-to-9/moving-from-atlas-2-to-3/atlas-native-content-folder.png" alt="Atlas native content folder"   width="300"  class="no-border" >}}

### 웹 스타일링 마이그레이션 {#upgrade-web-styling}

**Atlas 2 웹 테마**에 대한 수정 사항은 다음을 포함합니다:

* 사용자 정의 변수 변경
* 자체 사용자 정의 스타일링 추가
* 디자인 속성 변경
* *Login.html* 및 *index.html* 변경

위의 수정 사항을 수행한 경우, 아래 단계를 따르십시오. 단계는 5개 섹션으로 나뉘어 있습니다:

* [웹 사용자 정의 변수](#web-custom-variables)
* [웹 사용자 정의 스타일링](#web-custom-styling)
* [웹 추가 사용자 정의 스타일링](#web-additional-custom-styling)
* [웹 디자인 속성](#web-design-properties)
* [웹 리소스](#web-resources)

#### 웹 사용자 정의 변수 {#web-custom-variables}

이 섹션은 **Atlas 2 테마**의 *custom-variables.scss* 파일에 대한 수정 사항과 관련됩니다:

```text
theme_atlas2/styles/web/sass/app/_custom-variables.scss
```

사용자 정의 변수 수정 사항을 **Atlas 3**으로 이동하려면 두 가지 옵션이 있습니다:

**옵션 1** — 사용자 정의 변수가 앱 수준에 적용되는 경우, 수정 사항을 **Atlas 3 테마** 디렉터리의 **custom-variables** SCSS 파일로 이동해야 합니다:

```text
theme/web/custom-variables.scss
```

**옵션 2** — 변수를 재사용 가능한 모듈로 추출하려면 **themesource** 디렉터리에 생성한 모듈의 **custom-variables** SCSS 파일로 이동합니다:

```text
themesource/your-module/web/custom-variables.scss
```

#### 웹 사용자 정의 스타일링 {#web-custom-styling}

이 섹션은 **Atlas 2 테마**의 **custom** SCSS 파일에 대한 수정 사항과 관련됩니다:

```text
theme_atlas2/styles/web/sass/app/_custom.scss
```

사용자 정의 스타일링 수정 사항을 **Atlas 3**으로 이동하려면 두 가지 옵션이 있습니다:

**옵션 1** — 사용자 정의 스타일링이 앱 수준에 적용되는 경우, 수정 사항을 **Atlas 3 테마** 디렉터리의 **main** SCSS 파일로 이동해야 합니다:

```text
theme/web/main.scss
```

**옵션 2** — 사용자 정의 스타일링을 재사용 가능한 모듈로 추출하려면 **themesource** 디렉터리에 생성한 모듈의 **main** SCSS 파일로 이동합니다:

```text
themesource/your-module/web/main.scss
```

#### 웹 추가 사용자 정의 스타일링 {#web-additional-custom-styling}

이 섹션은 **Atlas 2 테마**의 **app** 폴더에 대한 수정 사항 및 추가한 SCSS 스타일시트와 관련됩니다:

```text
theme_atlas2/styles/web/sass/app/_
```

여기에 추가한 추가 스타일시트를 **Atlas 3**으로 이동하려면 두 가지 옵션이 있습니다:

**옵션 1** — 추가 스타일시트가 앱 수준에 적용되는 경우, 이러한 변경 사항을 **Atlas 3 테마**의 **web** 디렉터리로 이동해야 합니다:

```text
theme/web/_
```

추가 파일을 SCSS 컴파일에 포함하려면 *theme/web/main.scss*에 `@import <file name>`을 포함해야 합니다.

**옵션 2** — 추가 스타일시트를 재사용 가능한 모듈로 추출하려면 **themesource**에 생성한 모듈로 이동합니다:

```text
themesource/your-module/web/_
```

추가 파일을 SCSS 컴파일에 포함하려면 *themesource/your-module/web/main.scss*에 `@import<file name>`을 포함해야 합니다.

#### 웹 디자인 속성 {#web-design-properties}

이 섹션은 **Atlas 2 테마**의 *settings.json* 파일에 대한 수정 사항과 관련됩니다:

```text
theme_atlas2/settings.json
```

*settings.json*에 추가한 사용자 정의 디자인 속성은 **themesource** 디렉터리에 생성한 모듈의 웹 **design-property** JSON 파일로 이동해야 합니다:

```text
themesource/your-module/web/design-properties.json
```

**Atlas Core** 또는 **Atlas Web Content** 모듈에는 추가하지 마십시오.

플랫폼 지원 또는 커뮤니티 지원 Widget에 대한 사용자 정의 디자인 속성이 있는 경우, 아래 두 시나리오를 따르십시오.

#### 웹 리소스 {#web-resources}

이 섹션은 *login.html* 및 *index.html* 문서에 대한 수정 사항과 글꼴 라이브러리, 이미지 등의 추가 정적 리소스와 관련됩니다.

**Atlas 2 테마**에서 생성한 사용자 정의 *index.html* 또는 *login.html* 페이지는 **Atlas 3 테마**의 **web** 디렉터리로 이동해야 합니다:

```text
theme/web/login.html
```

추가 HTML 문서에도 동일하게 적용됩니다.

이미지나 글꼴 라이브러리와 같은 추가 정적 리소스는 **Atlas 3 테마**의 **web**의 **resources** 디렉터리로 이동해야 합니다:

```text
theme/web/resources
```

### 네이티브 스타일링 마이그레이션 {#upgrade-native-styling}

**Atlas 2 테마**의 **native** 섹션에 수정을 가하지 않았다면 이 섹션을 건너뛰고 [UI 콘텐츠 마이그레이션](#upgrade-ui-content) 섹션으로 계속하십시오.

**Atlas 2 테마**에 대한 수정 사항은 다음을 포함합니다:

* 사용자 정의 변수 변경
* 추가 사용자 정의 스타일링 추가
* 디자인 속성 변경

위의 수정 사항을 수행한 경우, 아래 단계를 따르십시오. 단계는 4개 섹션으로 나뉘어 있습니다:

* [네이티브 사용자 정의 변수](#native-custom-variables)
* [네이티브 사용자 정의 스타일링](#native-custom-styling)
* [네이티브 추가 사용자 정의 스타일링](#native-additional-custom-styling)
* [네이티브 디자인 속성](#native-design-properties)

#### 네이티브 사용자 정의 변수 {#native-custom-variables}

이 섹션은 **Atlas 2 테마**의 **custom-variables** js 파일에 대한 수정 사항과 관련됩니다.

```text
theme_atlas2/styles/native/app/custom-variables.js
```

사용자 정의 변수 수정 사항을 **Atlas 3**으로 이동하려면 두 가지 옵션이 있습니다:

**옵션 1** - 사용자 정의 변수가 앱 수준에 적용되는 경우, 수정 사항을 **Atlas 3 테마** 디렉터리의 **custom-variables** scss 파일로 이동해야 합니다.

```text
theme/native/custom-variables.js
```

**옵션 2** - 변수를 재사용 가능한 모듈로 추출하려면 **themesource** 디렉터리에 생성한 모듈의 **custom-variables** scss 파일로 이동합니다.

```text
themesource/your-module/native/custom-variables.js
```

#### 네이티브 사용자 정의 스타일링 {#native-custom-styling}

이 섹션은 **Atlas 2 테마**의 **custom** js 파일에 대한 수정 사항과 관련됩니다.

```text
theme_atlas2/styles/native/app/_custom.js
```

사용자 정의 스타일링 수정 사항을 **Atlas 3**으로 이동하려면 두 가지 옵션이 있습니다:

**옵션 1** - 사용자 정의 스타일링이 앱 수준에 적용되는 경우, 수정 사항을 **Atlas 3 테마** 디렉터리의 **main** js 파일로 이동해야 합니다.

```text
theme/native/main.js
```

**옵션 2** - 사용자 정의 스타일링을 재사용 가능한 모듈로 추출하려면 **themesource** 디렉터리에 생성한 모듈의 **main** js 파일로 이동합니다.

```text
themesource/your-module/native/main.js
```

#### 네이티브 추가 사용자 정의 스타일링 {#native-additional-custom-styling}

이 섹션은 **Atlas 2 테마**의 **app** 폴더에 대한 수정 사항 및 추가한 js 스타일시트와 관련됩니다.

```text
theme_atlas2/styles/native/app/_
```

여기에 추가한 추가 스타일시트를 **Atlas 3**으로 이동하려면 두 가지 옵션이 있습니다:

**옵션 1** - 추가 스타일시트가 앱 수준에 적용되는 경우, 이러한 변경 사항을 **Atlas 3 테마**의 **web** 디렉터리로 이동해야 합니다.

```text
theme/native/_
```

JavaScript의 `import` 구문을 사용하여 *theme/native/main.js*에서 파일을 가져오고 가져온 파일이 노출하는 변수를 내보내야 합니다.

**옵션 2** - 추가 스타일시트를 재사용 가능한 모듈로 추출하려면 **themesource**에 생성한 모듈로 이동합니다.

```text
themesource/your-module/native/_
```

JavaScript의 `import` 구문을 사용하여 *themesource/your-module/native/main.js*에서 파일을 가져오고 가져온 파일이 노출하는 변수를 내보내야 합니다.

#### 네이티브 디자인 속성 {#native-design-properties}

이 섹션은 **Atlas 2 테마**의 *settings-native.json* 파일에 대한 수정 사항과 관련됩니다.

```text
theme_atlas2/settings-native.json
```

*settings-native.json*에 추가한 사용자 정의 **디자인 속성**은 **themesource** 디렉터리에 생성한 모듈의 네이티브 **design-property** json 파일로 이동해야 합니다.

```text
themesource/your-module/web/design-properties.json
```

**Atlas Core** 또는 **Atlas Native Content** 모듈에는 추가하지 마십시오.

플랫폼 지원 또는 커뮤니티 지원 Widget에 대한 사용자 정의 디자인 속성이 있는 경우, 아래의 [사용자 정의 디자인 속성 마이그레이션](#upgrade-design-properties) 섹션을 참조하십시오.

### 사용자 정의 디자인 속성 마이그레이션 {#upgrade-design-properties}

#### 플랫폼 지원 Widget에 대한 디자인 속성 추가

다음 예제와 유사하게 하나 이상의 플랫폼 지원 Widget을 자체 디자인 속성으로 확장한 경우입니다.

**container widget**에 컨테이너 인스턴스에 테두리를 추가하는 디자인 속성 **border**를 확장했습니다. 디자인 속성의 경우 `Element` 이름은 `DivContainer`입니다.

```json
{
 "pageTemplates": "WebModeler",
 "cssFiles": ["styles/web/css/main.css"],
 "designProperties": {
  "DivContainer": [
  	{
  		"name": "Align content",
  		"type": "Dropdown",
  		"description": "Align content of this element left, right or center it. Align elements inside the container as a row or as a column.",
  		"options": [
  				{
  					"name": "Left align as a row",
  					"oldNames": ["Left align as row"],
  					"class": "row-left"
  				},
  				{
  					"name": "Center align as a row",
    				"oldNames": ["Center align as row"],
  					"class": "row-center"
  				},
  				{
  					"name": "Right align as a row",
  					"oldNames": ["Right align as row"],
  					"class": "row-right"
   				}
   		]
   },
   {
    "name": "Border", // custom design property targeting the platform's DivContainer
    "type": "Toggle",
    "description": "Add a border.",
    "class": "div-container-border"
   }
  ]
 }
}
```

위 예제에서 두 가지 디자인 속성이 있습니다: **align content**와 **border**. Align content는 Atlas 3에서 정의된 디자인 속성이고, border는 사용자 정의 디자인 속성입니다. Atlas 3 정의 디자인 속성과의 충돌을 방지하려면 사용자 정의 디자인 속성만 **themesource** 디렉터리에 생성한 모듈의 웹 **design-property** json 파일로 내보내는 것이 좋습니다. 결과는 아래 예제와 유사합니다.

```json
{
 "DivContainer": [
  {
   "name": "Border",
   "type": "Toggle",
   "description": "Add a border.",
   "class": "div-container-border"
  }
 ]
}
```

#### 커뮤니티 지원 Widget에 대한 디자인 속성 추가

다음 예제와 유사하게 앱에서 커뮤니티 지원 Widget에 대한 자체 디자인 속성을 정의한 경우, 이 단계를 따르십시오.

**Atlas 2**에서 MyCustomWidget에 대한 디자인 속성 `"Opacity"`를 추가했습니다. 아래 *settings.json* 파일에 표시되어 있습니다.

```json
{
 "pageTemplates": "WebModeler",
 "cssFiles": ["styles/web/css/main.css"],
 "designProperties": {
  "MyCustomWidget": [
   {
    "name": "Opacity",
    "type": "Dropdown",
    "description": "Emphasize the visual-importance via opacity.",
    "options": [
     {
      "name": "Light",
      "class": "opacity-light"
     },
     {
      "name": "Normal",
      "class": "opacity-normal"
     }
    ]
   }
  ]
 }
}
```

이것은 사용자 정의 디자인 속성이므로 **themesource** 디렉터리에 생성한 모듈의 웹 **design-property** json 파일에 추가해야 합니다. 결과는 아래 예제와 유사합니다.

```json
{
 "MyCustomWidget": [
  {
   "name": "Opacity",
   "type": "Dropdown",
   "description": "Emphasize the visual-importance via opacity.",
   "options": [
    {
     "name": "Light",
     "class": "opacity-light"
    },
    {
     "name": "Normal",
     "class": "opacity-normal"
    }
   ]
  }
 ]
}
```

#### 디자인 속성 옵션 병합

디자인 속성 옵션은 themesource 모듈 간에 병합할 수도 있습니다. 자세한 내용은 *디자인 속성 API 문서*의 [다른 모듈의 디자인 속성 확장 또는 재정의](/apidocs-mxsdk/apidocs/design-properties/#extend-existing-design-properties) 섹션을 참조하십시오.

## Atlas 3으로 업그레이드 후 예상되는 문제 {#expected-issues}

위의 섹션을 완료한 후 오류 목록에 오류가 있을 수 있습니다:

* 이름이 변경된 디자인 속성과 관련된 오류의 경우, 관련 오류를 마우스 오른쪽 버튼으로 클릭하고 **Updated all renamed design properties in project**를 클릭합니다:

    {{< figure src="/attachments/refguide9/general/moving-from-8-to-9/moving-from-atlas-2-to-3/4-errors.png" alt="errors" class="no-border" >}}

* **Phone** 또는 **Tablet** 내비게이션 프로필이 더 이상 존재하지 않는다는 오류의 경우, 오류를 마우스 오른쪽 버튼으로 클릭하고 **Go to**를 선택하면 누락된 Phone 또는 Tablet 프로필을 가리키는 Widget으로 이동합니다 — 다음 방법 중 하나를 사용하여 오류를 해결합니다:
    * 레이아웃을 삭제
    * 레이아웃의 Widget을 삭제
    * Mendix 애플리케이션에 **Phone web** 또는 **Tablet web** 내비게이션 프로필 추가
    * Widget의 속성 패널에서 **Profile**을 **Responsive web**과 같은 이미 존재하는 프로필로 변경

    Mendix 9에서 내비게이션 프로필이 변경되었음에 유의하십시오. 자세한 내용은 [Mendix 9 릴리스 노트](/releasenotes/studio-pro/9.0/)를 참조하십시오.

    {{< figure src="/attachments/refguide9/general/moving-from-8-to-9/moving-from-atlas-2-to-3/5-nav.png" class="no-border" >}}

* 하이브리드 Phone 프로필을 사용하는 경우, 내비게이션 프로필에서 **Change profile type**을 클릭하여 해당하는 웹 프로필로 변경하십시오:
    * Hybrid tablet app offline → Tablet web offline
    * Hybrid tablet app online → Tablet web
    * Hybrid phone app offline → Phone web offline
    * Hybrid phone app online → Phone web

    {{< figure src="/attachments/refguide9/general/moving-from-8-to-9/moving-from-atlas-2-to-3/6-hybrid-phone.png" class="no-border" >}}

* Badge, Progress Circle, Progress Bar 또는 Maps Widget을 사용하는 경우, Widget의 정의를 업데이트하고 각 Widget에 추가된 새 속성에 따라 재구성하십시오:

    {{< figure src="/attachments/refguide9/general/moving-from-8-to-9/moving-from-atlas-2-to-3/7-errors.png" class="no-border" >}}

* **Design property X is not supported by your theme** 오류가 있는 경우, Atlas 3에서 디자인 속성이 제거되었거나 위의 [사용자 정의 디자인 속성 마이그레이션](#upgrade-design-properties) 섹션에서 지침에 따라 새 파일 구조에 자체 디자인 속성을 추가해야 합니다. 오류를 억제하려면 오류를 마우스 오른쪽 버튼으로 클릭한 다음 **Remove property**를 선택합니다. 디자인 속성 확장 방법을 확인하려면 [디자인 속성 확장 방법](/howto9/front-end/extend-design-properties/)을 따르십시오.

    {{< figure src="/attachments/refguide9/general/moving-from-8-to-9/moving-from-atlas-2-to-3/8-errors-background.png" class="no-border" >}}

* **Unknown option X for design property** 오류가 있는 경우, Atlas 3에서 디자인 속성 옵션이 제거되었음을 의미합니다. 다음 방법 중 하나를 사용하여 오류를 해결합니다:
    * 디자인 속성을 기본 옵션으로 설정: 오류를 마우스 오른쪽 버튼으로 클릭한 다음 **Set property X to default** 선택
    * 웹의 경우 *theme_atlas2/settings.json*에서, 네이티브의 경우 *theme_atlas2/settings-native.json*에서 디자인 속성 옵션의 CSS 클래스를 검색한 다음 해당 [Widget의 style 속성](/refguide9/common-widget-properties/#style)에 추가

    {{< figure src="/attachments/refguide9/general/moving-from-8-to-9/moving-from-atlas-2-to-3/9-set-prop.png" class="no-border" >}}

* **Nanoflow commons/Native mobile resources are not compatible** 오류가 있는 경우 **Marketplace**에서 새 주요 버전을 가져오십시오.

* **"CE9500: This feedback widget has an invalid App ID. Right-click this error to update the App ID of all feedback widgets."** 오류가 있는 경우, 앱에 온라인 서비스가 활성화되어 있고 하나 이상의 피드백 Widget을 사용하고 있습니다. 그러나 위에서 언급한 구성 되돌리기로 인해 최소 하나의 앱 ID 구성 속성이 유효하지 않게 되었습니다. 모든 피드백 Widget의 앱 ID를 앱의 올바른 앱 ID로 업데이트하려면, 오류를 마우스 오른쪽 버튼으로 클릭하고 **Update the App ID of all feedback widgets**를 선택합니다. 이렇게 하면 *모든* 피드백 Widget이 업데이트됩니다. 또는 개별 오류를 검사하면 개별적으로 처리하려는 경우 개별 오류 Widget으로 이동합니다.

## Atlas 3으로 업그레이드 후 엣지 케이스 문제 {#edge-cases}

Mendix 9에서 하이브리드 프로필은 지원 중단되었습니다. Atlas 3에서는 모든 하이브리드 콘텐츠가 제거됩니다. Atlas 2에서 Atlas 3으로 업그레이드할 때 더 이상 존재하지 않는 하이브리드 프로필의 기본 홈 페이지로 사용되는 페이지에 대한 오류가 있을 수 있습니다:

{{< figure src="/attachments/refguide9/general/moving-from-8-to-9/moving-from-atlas-2-to-3/10-edge.png" class="no-border" >}}

이를 수정하려면 오류를 마우스 오른쪽 버튼으로 클릭한 다음 **Go to Navigation profile 'HybridPhone'**을 선택하고 기본 홈 페이지를 변경합니다:

{{< figure src="/attachments/refguide9/general/moving-from-8-to-9/moving-from-atlas-2-to-3/set-hybrid-nav.png" class="no-border" >}}

## 일반적인 Atlas 문제 해결 {#troubleshoot}

일반적인 Atlas 문제를 해결하려면 다음을 수행하십시오:

* **Layout X no longer exists** 오류가 있는 경우, 오류를 마우스 오른쪽 버튼으로 클릭한 다음 오류가 발생한 페이지로 이동합니다. 페이지의 속성에서 새롭고 적절한 레이아웃을 선택합니다.
* **The selected image X no longer exists** 오류가 있는 경우, 오류를 마우스 오른쪽 버튼으로 클릭하고 오류가 발생한 페이지로 이동하여 새 이미지를 선택합니다. 앱에 따라 **Atlas_NativeMobile_Content** 모듈을 다운로드하고 해당 모듈의 이미지를 사용할 수 있습니다.
* **The selected placeholder X no longer exists** 오류가 있는 경우, 오류를 마우스 오른쪽 버튼으로 클릭하고 오류가 발생한 페이지로 이동한 후 다음 대안 옵션으로 오류를 수정합니다:
    * 페이지가 사용하는 레이아웃을 일치하는 이름의 플레이스홀더를 포함하도록 조정합니다.
    * 페이지에서 콘텐츠를 플레이스홀더 밖으로 이동합니다.

## 더 읽기

* [Atlas 3 웹사이트](https://www.mendix.com/atlas/)
* [Atlas Design System 앱](https://atlasdesignsystem.mendixcloud.com/)
* [Atlas 3 변경 요약](/refguide9/atlas3-change-summary/)
* [Studio Pro 9 릴리스 노트](/releasenotes/studio-pro/9.0/)
