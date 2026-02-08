---
title: "Atlas UI 변경 사항 문제 해결"
url: /refguide8/migration-atlas/
weight: 20
description: "이 문서는 Mendix 7에서 Mendix 8로 프로젝트를 마이그레이션할 때 스타일링을 수정하는 방법을 설명합니다."
---

## 소개

Mendix 8로 업그레이드하면 위젯의 DOM 구조가 변경됩니다. 이는 관련 Sass 스타일링이 더 이상 예상대로 작동하지 않음을 의미합니다. 이 문서를 통해 테마를 Mendix 8과 호환되게 만들 수 있습니다.

이 문서의 각 섹션은 앱에 적용될 수 있지만 일부 섹션은 *적용되지 않을* 수 있습니다. 해당되지 않는 섹션은 건너뛰어도 됩니다.

{{% alert color="warning" %}}**Atlas_UI_Resource 모듈**에 내용을 추가한 경우, 해당 내용을 모듈 밖으로 이동해야 합니다. 그렇지 않으면 덮어쓰여집니다.{{% /alert %}}

앱이 수정되지 않은 Atlas UI 리소스를 사용하는 경우, 앱을 Mendix 8로 업그레이드하면 Atlas UI 리소스가 자동으로 버전 2.1로 업데이트됩니다. 커스텀 폴더에서 변경 사항을 만들지 않았다면 문제 없이 이 가이드의 나머지 부분을 건너뛸 수 있습니다.

수정되지 않은 Atlas UI 리소스를 사용하지만 커스텀 폴더를 변경한 경우, 이러한 변경 사항은 보존되고 새 Atlas UI 버전에서 사용됩니다. 이 경우 일관성 오류가 표시됩니다. 이 오류를 해결하려면 아래의 [수정된 커스텀 폴더 작업](#modified) 섹션에 설명된 단계를 진행하십시오.

수정된 버전의 Atlas UI 리소스를 사용하는 경우, Mendix가 자동으로 업데이트할 수 없습니다. 이 경우 일관성 오류가 표시됩니다. 테마 문제를 해결하려면 직접 Atlas를 업데이트해야 합니다.

Atlas UI Resources 모듈을 업그레이드하려면 아래 단계를 따르십시오:

1. 최신 [Atlas UI Resources](https://marketplace.mendix.com/link/component/104730) 모듈(v2.0.0 이상)을 다운로드하십시오.
2. 이 모듈을 앱에 가져와 이전 리소스 모듈을 교체하십시오. 이렇게 하면 리소스 모듈 내의 레이아웃, 페이지 템플릿 및 빌딩 블록이 덮어쓰여집니다. 이전 리소스 모듈과 관련된 **theme** 폴더는 **theme_old**로 이동됩니다. 최신 변경 사항이 있는 새 **theme** 폴더가 생성됩니다. 여기에서 커스텀 스타일링 여부에 따라 다음 중 하나를 선택해야 합니다:<br />
    * 이전 **theme** 폴더에서 아무것도 변경하지 않은 경우, **theme_old**를 안전하게 제거하고 나머지는 그대로 두면 됩니다. 스타일링이 작동하며 이 문서 참조를 중단할 수 있습니다. <br />
    * 이전 **theme** 폴더에서 변경한 경우, 스타일링을 정렬하기 위해 일부 수동 작업을 수행해야 합니다. 필요에 따라 결정하려면 아래 정보를 참조하십시오.

## 이전 테마 폴더를 새 폴더에 통합

Mendix 7에서 Mendix 8로 마이그레이션할 때 여러 지침을 준수하면서 **theme_old**를 **theme**에 통합해야 합니다. 어떤 지침을 따라야 하는지는 특정 프로젝트에 따라 다릅니다. 고유한 경우에 대한 지침은 아래 하위 섹션을 참조하십시오.

{{% alert color="info" %}}DOM 구조가 변경된 위젯을 커스터마이징한 경우, 커스텀 스타일링이 작동하는지 확인하려면 [Mendix 8로 마이그레이션 시 DOM 변경 사항 문제 해결](/refguide8/migration-dom-issues/)을 참조하십시오.{{% /alert %}}

### HTML 파일 작업

HTML 파일을 변경한 경우 아래 지침을 참조하십시오. 변경하지 않은 경우 이 하위 섹션을 무시해도 됩니다.

**index\*.html** 파일을 변경한 경우 다음을 수행하십시오:

* 이전 파일에서 수행한 동일한 변경 사항을 새 HTML 파일에 적용하십시오
* **bootstrap.min.css**, **bootstrap-rtl.min.css** 및 **mxui.css** 가져오기가 없는지 확인하십시오
* **styles/css/lib/lib.css**를 더 이상 가져오지 않는지 확인하십시오
* `<head></head>` 태그 안에 `<link rel="stylesheet" type="text/css" href="styles/web/css/main.css?{{cachebust}}">` 또는 `{{themecss}}`를 넣었는지 확인하십시오

**login\*.html** 파일을 변경한 경우 다음 작업을 완료하십시오:

* 이전 파일에서 수행한 동일한 변경 사항을 새 HTML 파일에 적용하십시오
* **bootstrap.min.css** 및 **mxui.css** 가져오기가 사라졌는지 확인하십시오(남아 있으면 삭제하십시오)
* `styles/css/lib/lib.css`를 더 이상 가져오지 않는지 확인하십시오
* `<head></head>` 태그 안에 `<link*rel*="stylesheet" *type*="text/css" *href*="styles/web/css/main.css?{{cachebust}}">` 또는 `{{themecss}}`를 넣으십시오

### JSON 파일 작업

*settings.json* 또는 *components.json* 파일을 변경한 경우 아래 지침을 참조하십시오. 변경하지 않은 경우 이 하위 섹션을 무시해도 됩니다.

#### 디자인 속성

테마에서 디자인 속성을 변경한 경우, 새 Atlas UI에 수동으로 통합해야 합니다.

디자인 속성은 *settings.json* 파일의 `designProperties` 섹션에 저장됩니다.

새 Atlas UI 테마로 이동되지 않은 커스텀 디자인 속성이 있는 경우, 프로젝트의 누락된 디자인 속성에 대해 알려주는 일관성 오류(오류 코드 **CE6083**)가 표시됩니다.

커스텀 디자인 속성을 새 Atlas UI 테마의 *settings.json* 파일로 이동하십시오.

### 추가 CSS 파일

{{% alert color="warning" %}}
`cssFiles` 변경은 권장되지 않습니다. 커스텀 CSS 파일을 *theme/styles/web/sass/app/_custom.scss* 파일로 이동하는 것을 고려하십시오.
{{% /alert %}}

*settings.json*에서 `cssFiles`를 변경한 경우, 새 *settings.json* 파일에 변경 사항을 통합해야 합니다.

기본적으로 Atlas UI 버전 1에는 두 파일이 포함됩니다:

```javascript
"cssFiles": [
    "styles/css/lib/lib.css",
    "styles/css/custom/custom.css"
],
```

그러나 Atlas 2.1.0은 단일 파일을 사용합니다:

```javascript
"cssFiles": [
	"styles/web/css/main.css"
],
```

`cssFiles` 섹션에 더 많은 파일을 추가한 경우, 새 테마의 *settings.json* 파일에 포함해야 합니다.

*components.json*에서 하이브리드 모바일 앱 가져오기를 변경한 경우 다음을 수행하십시오:

* 이전 *components.json*을 새 폴더에 수동으로 통합하십시오
* *bootstrap.min.css*, *bootstrap-rtl.min.css* 및 *mxui.css* 가져오기가 사라졌는지 확인하십시오(남아 있으면 삭제하십시오)
* *styles/css/lib/lib.css*가 *styles/web/css/main.css*로 변경되었는지 확인하십시오

### 커스텀 폴더 파일 작업

커스텀 폴더를 변경한 경우 아래 지침을 참조하십시오. 변경하지 않은 경우 이 하위 섹션을 무시해도 됩니다.

커스텀 폴더에서 커스텀 변수를 추가, 제거 또는 변경한 경우, *theme_old/styles/sass/custom/_custom-variables.scss*에서 *theme/styles/web/sass/app/_custom-variables.scss*로 내용을 복사하십시오.

커스텀 폴더에서 커스텀 스타일링을 추가하거나 변경한 경우, *theme_old/styles/sass/custom/*에서 *theme/styles/web/sass/app/*로 내용 또는 파일을 복사하십시오.

* 이 경우, 이전 *custom.scss* 파일의 이름이 *_custom.scss*로 변경되었는지도 확인하십시오

### Lib 폴더 파일 작업

*styles/sass/lib* 폴더를 변경한 경우 아래 지침을 참조하십시오. 변경하지 않은 경우 이 하위 섹션을 무시해도 됩니다.

*styles/sass/lib* 폴더의 파일을 변경한 경우 아래 작업을 완료하십시오:

* 파일 내용이나 이름을 변경한 경우, 새 파일과 새 테마 폴더에서 동일한 변경 사항을 수동으로 적용해야 합니다(Mendix 8 [DOM 변경 사항](/refguide8/migration-dom-issues/)도 염두에 두십시오)
* 파일을 제거한 경우, 별도의 작업이 필요하지 않습니다

*lib/base* 폴더에 파일을 추가한 경우, *theme_old/styles/sass/lib/base/*에서 *theme/styles/web/sass/core/base/*로 해당 파일을 복사하십시오. 다음 작업도 완료해야 합니다:

* *theme/styles/web/sass/main.scss*의 `Base` 그룹에 알파벳 순서로 파일을 가져오십시오

*lib/components* 폴더에 파일을 추가한 경우, *theme_old/styles/sass/lib/components/*에서 *theme/styles/web/sass/core/widgets/*로 해당 파일을 복사하십시오. 다음 작업도 완료해야 합니다:

1. *theme/styles/web/sass/main.scss*의 `Widgets` 그룹에 알파벳 순서로 파일을 가져오십시오
2. 파일에서 모든 디자인 속성과 추가 클래스를 잘라내십시오(나중에 붙여넣기 위해), 기본 스타일링만 남기십시오
3. *theme/styles/web/sass/core/helpers/*에 동일한 이름의 새 파일을 만드십시오
4. 해당 디자인 속성과 추가 클래스를 이 새 파일에 붙여넣으십시오
5. *theme/styles/web/sass/main.scss*의 위에서 언급한 가져오기 아래에 파일을 가져오십시오

*lib/customwidgets* 폴더에 파일을 추가한 경우, *theme_old/styles/sass/lib/customwidgets/*에서 *theme/styles/web/sass/core/widgetscustom/*으로 내용을 복사하십시오. 다음 작업도 완료해야 합니다:

* *theme/styles/web/sass/main.scss*의 `Custom Widgets` 그룹에 알파벳 순서로 파일을 가져오십시오

*lib/buildingblocks* 폴더에 파일을 추가한 경우, *theme_old/styles/sass/lib/buildingblocks/*에서 *theme/styles/web/sass/resources/atlas_resources_default/buildingblocks*로 해당 파일을 복사하십시오. 다음 작업도 완료해야 합니다:

* *theme/styles/web/sass/main.scss*의 `Building Blocks` 그룹에 알파벳 순서로 파일을 가져오십시오

*lib/layouts* 폴더에 파일을 추가한 경우, *theme_old/styles/sass/lib/layouts/*에서 *theme/styles/web/sass/resources/atlas_resources_default/layouts*로 해당 파일을 복사하십시오. 다음 작업도 완료해야 합니다:

* *theme/styles/web/sass/main.scss*의 `Layouts` 그룹에 알파벳 순서로 파일을 가져오십시오

모든 커스텀 또는 추가된 Sass 파일이 *styles/web/sass/main.scss* 또는 *styles/web/sass/app/_custom.scss*에 가져와졌는지 확인하십시오.

위의 안내에 따라 문제를 해결한 후 다음 단계를 완료하여 마이그레이션된 앱을 테스트하십시오:

### 수정된 커스텀 폴더 작업 {#modified}

1. Sass를 CSS로 다시 컴파일하십시오.
2. 앱을 테스트하여 모든 것이 예상대로 작동하는지 확인하십시오.
3. *theme_old*를 삭제하십시오.

## 더 읽기

* [DOM 변경 사항 문제 해결](/refguide8/migration-dom-issues/)
* [Atlas UI](/howto8/front-end/atlas-ui/)
