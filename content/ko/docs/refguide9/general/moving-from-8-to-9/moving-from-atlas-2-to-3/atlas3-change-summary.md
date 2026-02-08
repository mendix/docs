---
title: "Atlas 3 변경 요약"
url: /refguide9/atlas3-change-summary/
weight: 7
---

## 소개

이 문서는 Atlas 3이 Mendix에 가져오는 변경 사항에 대한 높은 수준의 요약입니다.

## 높은 수준의 요약

Atlas 3에는 스타일 및 브랜딩에 대한 많은 변경 사항이 포함되어 있으며, 더 현대적인 외관을 가지고 있습니다. Atlas 2와 Atlas 3의 차이점은 참조 앱을 통한 비교로 가장 잘 표현됩니다. Atlas 3으로 앱이 어떻게 보일 수 있는지 자세히 알아보려면 [Atlas Design System](https://atlasdesignsystem.mendixcloud.com/) 웹사이트를 참조하십시오.

웹과 네이티브 모두에서 레이아웃, Widget, 빌딩 블록 및 페이지 템플릿이 개선되었습니다. 이러한 변경 사항에는 레이아웃 및 간격, 색상 및 미학, 사용자 경험 등이 포함되지만 이에 국한되지 않습니다.

### 새로운 테마

새로운 테마에는 다음과 같은 장점이 있습니다:

* 업데이트된 색상 팔레트
* 변수의 값 변경
* Widget 기본 스타일링을 위한 제외 변수 도입
* Mendix Blue에서 Ultramarine으로 변경
* 통합된 플랫폼 경험을 위해 템플릿에 MxDock 추가

### 그리드 시스템

새로운 그리드 시스템에는 다음과 같은 장점이 있습니다:

* 8픽셀 그리드 시스템으로 이동
* 작업하기 좋은 기본 단위 제공(숫자 4와 8은 쉽게 곱할 수 있음)
* 디자인에서 더 많은 균일성 제공

### Float 제거

Float 제거에는 다음과 같은 장점이 있습니다:

* Atlas core 전체에서 "float: left" 및 "float: right" 사용 제거
* Float에서 flex 레이아웃으로 마이그레이션
* 레이아웃에 대한 float 의존성 제거(flex는 float보다 더 현대적인 옵션)

### 디자인 속성

기존 디자인 속성 변경 사항 요약은 아래 표를 참조하십시오.

| Spacing 옵션 - <br>spacing-inner, spacing-inner-medium, spacing-inner-large 추가 | 모든 구성 요소에 대한 내부 간격 옵션 도입. 디자인 속성을 네이티브의 것과 일치시킴. 네이티브와 웹 두 매체에서의 디자인은 동일한 경험이어야 합니다. |
| --- | --- |
| Spacing outer 옵션 | 이전 간격 옵션은 더 명시적으로 outer로 이름이 변경되어 "margin"을 참조하고, inner는 "padding"을 참조합니다. 네이티브와 웹 간의 디자인 구현을 일치시킵니다. |
| 간소화된 스타일 옵션 | 여러 Widget에 걸쳐 primary, secondary, success, warning 및 danger로 사용 가능한 스타일 옵션을 간소화했습니다. "brand-inverse" 및 "brand-info" 옵션은 여전히 sass 프레임워크에서 실행 가능한 클래스입니다. |

추가 디자인 속성 요약은 아래 표를 참조하십시오.

| Tab Container | 탭 스타일링 및 위치 지정을 위한 디자인 속성 추가. |
| --- | --- |
| Datagrid 2 | Datagrid 2의 스타일링 및 레이아웃을 위한 디자인 속성 추가. |
| Badge | 새로 업데이트된 Badge의 스타일링을 위한 style 디자인 속성 추가. |
| Badge Button | Badge Button 디자인을 위한 디자인 속성 추가, 표준 버튼과 동일한 속성: style, size, full-width 및 border. |
| Progress Circle | 새로 업데이트된 Progress Circle의 스타일링을 위한 디자인 속성 추가. 바 색상 및 바 두께를 포함한 속성. |
| Progress Bar | 새로 업데이트된 Progress Bar의 스타일링을 위한 디자인 속성 추가. 바 색상 및 바 두께를 포함한 속성. |
| 추가 배경 변형 | 디자인 속성을 통해 배경 색상에 어두운 및 밝은 변형을 추가할 수 있습니다. |
| image-fit을 사용한 반응형 이미지 | 이제 이미지를 컨테이너에 맞게 크기를 조정하는 옵션을 추가할 수 있습니다. 옵션에는 fill, contain, cover 및 scale-down이 포함됩니다. |

### 웹 환경 변경 사항

웹 환경과 관련된 주요 변경 사항 목록은 다음과 같습니다:

* Widget에서 페이지 템플릿에 이르기까지 디자인 및 사용자 경험의 모든 측면에 영향을 미치는 색상 팔레트가 개선되었습니다
* 레이아웃 및 간격이 이제 8픽셀 시스템에 의존하여 디자인에서 더 많은 균일성을 만듭니다
* 가능한 경우 **float** 대신 디스플레이 유형 **flex**가 사용되었습니다
* 많은 디자인 속성이 도입되었고 기존 속성에 추가 옵션이 추가되었습니다:
    * Widget에 대한 **padding**을 구성할 수 있는 **Inner** 간격 옵션. 이는 모든 Widget에 적용됩니다
        * 이전 간격 옵션은 이제 더 명시적으로 **Outer**로 이름이 변경되어 Widget의 **margin**에 적용됩니다
    * Structure Widget에 배경 색상에 대한 새로운 **gradient** 옵션이 추가됩니다
    * Structure Widget에 배경 색상에 음영을 적용하는 **shade** 디자인 속성이 추가됩니다
    * List View Widget에 각 목록 항목의 상단과 하단에 수평 테두리를 추가하는 **style** 옵션이 추가됩니다
    * 정적 및 동적 이미지에 이미지 맞춤을 지원하는 새 디자인 속성이 추가됩니다(예: fill, contain, cover 또는 scale-down)
    * Tab Container Widget에 탭의 스타일링과 간격을 위한 새로운 디자인 속성이 추가됩니다
    * Text Widget에 텍스트를 흰색으로 만드는 새로운 **color** 옵션이 추가됩니다
    * Table Widget에 스타일링 및 레이아웃을 위한 새로운 디자인 속성이 추가됩니다
* 다음을 지원하기 위해 헬퍼 클래스가 추가되었습니다(*core/base/_spacing.scss*):
    * 간격
    * 그림자
    * Widget 높이
    * Widget 너비
    * Widget 테두리
* 일부 디자인 속성이 제거되었습니다:
    * 모든 Widget에 대한 Info 및 Inverse 브랜드 스타일
* 일부 디자인 속성이 지원 중단되었습니다:
    * List View Widget의 **styleless** 옵션
* **Brand Default** 옵션이 있었던 **Style**, **Color**, **Background color** 등의 디자인 속성이 이제 **Brand Secondary**로 불립니다

## UI 콘텐츠

빌딩 블록 또는 페이지 템플릿을 사용하는 경우, [Mendix Marketplace](https://marketplace.mendix.com/)에서 해당 모듈을 다운로드하십시오.

웹 플랫폼의 경우, [Atlas Web Content](https://marketplace.mendix.com/link/component/117183) 모듈을 다운로드합니다:

{{< figure src="/attachments/refguide9/general/moving-from-8-to-9/moving-from-atlas-2-to-3/atlas3-change-summary/atlas-web-content-marketplace.png" alt="Atlas web content" class="no-border" >}}

네이티브 플랫폼의 경우, [Atlas Native Mobile Content](https://marketplace.mendix.com/link/component/117175) 모듈을 다운로드합니다:

{{< figure src="/attachments/refguide9/general/moving-from-8-to-9/moving-from-atlas-2-to-3/atlas3-change-summary/atlas-native-content-marketplace.png" alt="Atlas native content" class="no-border" >}}

## 웹용 디자인 속성

Atlas 3 웹에 대한 디자인 속성 변경 사항입니다:

| Parent   | Property   | Removed  | Added  | Renamed   |
| --- | --- | --- | --- | --- |
| Widget  | Spacing Top  |   | {"name": "Inner none","class": "spacing-inner-top-none"},{"name": "Inner small","class": "spacing-inner-top"},{"name": "Inner medium","class": "spacing-inner-top-medium"},{"name": "Inner large","class": "spacing-inner-top-large"} | "None" => "Outer none""Small" => "Outer small""Medium" => "Outer medium""Large" => "Outer large" |
| Widget     | Spacing bottom |          | Same as Spacing Top      | Same as Spacing Top     |
| Widget     | Spacing right    |            | Same as Spacing Top        | Same as Spacing Top      |
| Widget     | Spacing left  |        | Same as Spacing Top     | Same as Spacing Top   |
| DivContainer     | Background color             | {  "name": "Brand Default",  "oldNames": [    "Default"  ],  "class": "background-default"},{  "name": "Brand Inverse",  "oldNames": ["Inverse"],  "class": "background-inverse"},{  "name": "Brand Info",  "oldNames": ["Info"],  "class": "background-info"}, | {  "name": "Background Primary",  "oldNames": ["Background Default"],  "class": "background-main"},{  "name": "Brand Secondary",  "oldNames": ["Brand Default", "Default"]  "class": "background-secondary"},{  "name": "Brand Gradient",  "class": "background-brand-gradient"} |                                                              |
| DivContainer       | Shade (new)      |           | {"name": "Light","class": "background-light"},{"name": "Dark","class": "background-dark"} |          |
| GroupBox        | Style                        | {"name": "Brand Default","oldNames": ["Default"],"class": "groupbox-default"},{"name": "Brand Inverse","oldNames": ["Inverse"],"class": "groupbox-inverse"},{"name": "Brand Info","oldNames": ["Info"],"class": "groupbox-info"}, | {"name": "Brand Secondary","oldNames": ["Default", "Brand Default"],"class": "groupbox-secondary"}, |          |
| StaticImageViewer        | Fit (new)       |           | {"name": "Fill","class": "img-fill"},{"name": "Contain","class": "img-contain"},{"name": "Cover","class": "img-cover"},{"name": "Scale-down","class": "img-scale-down"} |             |
| DynamicImageViewer    | Fit (new)   |         | Same as StaticImageViewer  |                                                              |
| Label                                                        | Style                        | {"name": "Brand Default","oldNames": ["Default"],"class": "label-default"},{"name": "Brand Inverse","oldNames": ["Inverse"],"class": "label-inverse"},{"name": "Brand Info","oldNames": ["Info"],"class": "label-info"}, | {"name": "Brand Secondary","oldNames": ["Default", "Brand Default"],"class": "label-secondary"}, |                                                              |
| TabContainer (new)       |     |        |      |       |
| DynamicText      | FontWeight renamed to Weight |      |     |     |
| DynamicText   | Size (new)   |        | {"name": "Small","class": "text-small"},{"name": "Large","class": "text-large"} |      |
| DynamicText   | Color   | {"name": "Brand Default","oldNames": ["Default"],"class": "text-default"},{"name": "Brand Inverse","oldNames": ["Inverse"],"class": "text-inverse"},{"name": "Brand Info","oldNames": ["Info"],"class": "text-info"}, | {"name": "White","class": "text-white"},{  "name": "Brand Secondary",  "oldNames": ["Default", "Brand Default"],  "class": "text-secondary"}, |                                                              |
| Table (new )    |     |       |          |     |
| com.mendix.widget.custom.badge.Badge (new)                   |   |    |   |   |
| com.mendix.widget.custom.progressbar.ProgressBar (new)       |   |    |   |   |
| com.mendix.widget.custom.badgebutton.BadgeButton (new)       |   |    |   |   |
| com.mendix.widget.custom.progresscircle.ProgressCircle (new) |   |    |   |   |

## 네이티브 모바일용 디자인 속성

Atlas 3 네이티브 모바일에 대한 디자인 속성 변경 사항입니다:

| Parent  | Property  | Removed  | Added  |
| --- | --- | --- | --- |
| All      | Background color          | {<br>    "name": "Primary",<br>    "class": "backgroundPrimary"<br>},<br>{<br>    "name": "Gray",<br>    "class": "backgroundGray"<br>}, | {<br>    "name": "Background Primary",<br>    "oldNames": ["Background Default"],<br>    "class": "background-main"<br>},<br>{<br>    "name": "Background Secondary",<br>    "oldNames": ["Background Dashboard"],<br>    "class": "background-secondary"<br>}, |
| Widget                                                       | Spacing top               |                                                              | {<br>    "name": "Smaller",<br>    "class": "spacingOuterTopSmaller"<br>},<br>{<br>    "name": "Larger",<br>    "class": "spacingOuterTopLarger"<br>}, |
| Widget                                                       | Spacing bottom            |                                                              | {<br>    "name": "Smaller",<br>    "class": "spacingOuterBottomSmaller"<br>},<br>{<br>    "name": "Larger",<br>    "class": "spacingOuterBottomLarger"<br>}, |
| Widget                                                       | Spacing right             |                                                              | {<br>    "name": "Smaller",<br>    "class": "spacingOuterRightSmaller"<br>},<br>{<br>    "name": "Larger",<br>    "class": "spacingOuterRightLarger"<br>}, |
| Widget                                                       | Spacing left              |                                                              | {<br>    "name": "Smaller",<br>    "class": "spacingOuterLeftSmaller"<br>},<br>{<br>    "name": "Larger",<br>    "class": "spacingOuterLeftLarger"<br>}, |
| DivContainer                                                 | Background color          | {<br>    "name": "Secondary",<br>    "class": "backgroundSecondary"<br>}, | {<br>    "name": "Gray",<br>    "class": "backgroundGray"<br>},<br>{<br>    "name": "Brand Info",<br>    "class": "backgroundBrandInfo"<br>} |
| ScrollContainer                                              | Background color          | {<br>    "name": "Secondary",<br>    "class": "backgroundSecondary"<br>}, | {<br>    "name": "Gray",<br>    "class": "backgroundGray"<br>},<br>{<br>    "name": "Brand Info",<br>    "class": "backgroundBrandInfo"<br>} |
| Image               | No longer exists          | No longer exists            | No longer exists            |
| StaticImageViewer | Shape   |     | {<br>    "name": "Square",<br>    "class": "imageSquare"<br>},<br>{<br>    "name": "Circle",<br>    "class": "imageCircle"<br>} |
| StaticImageViewer  | Size   |   | {<br>    "name": "Icon",<br>    "class": "imageIcon",<br>    "oldNames": ["imageCircleIcon", "imageSquareIcon"]<br>},<br>{<br>    "name": "Small",<br>    "class": "imageSmall",<br>    "oldNames": ["imageCircleSmall", "imageSquareSmall"]<br>},<br>{<br>    "name": "Medium",<br>    "class": "imageMedium",<br>    "oldNames": ["imageCircleMedium", "imageSquareMedium"]<br>},<br>{<br>    "name": "Large",<br>    "class": "imageLarge",<br>    "oldNames": ["imageCircleLarge", "imageSquareLarge"]<br>},<br>{<br>    "name": "Larger",<br>    "class": "imageLarger",<br>    "oldNames": ["imageCircleLarger", "imageSquareLarger"]<br>},<br>{<br>    "name": "FullSize",<br>    "class": "imageFullSize"<br>} |
| DynamicImage   | No longer exists  | No longer exists  | No longer exists |
| DynamicImageViewer  | Same as StaticImageViewer | Same as StaticImageViewer | Same as StaticImageViewer |
| DynamicText | Color  | {<br>    "name": "Contrast lowest",<br>    "class": "textContrastLowest"<br>},<br>{<br>    "name": "Contrast lower",<br>    "class": "textContrastLower"<br>},<br>{<br>    "name": "Contrast low",<br>    "class": "textContrastLow"<br>},<br>{<br>    "name": "Contrast default",<br>    "class": "textContrastDefault"<br>},<br>{<br>    "name": "Contrast high",<br>    "class": "textContrastHigh"<br>},<br>{<br>    "name": "Contrast higher",<br>    "class": "textContrastHigher"<br>},<br>{<br>    "name": "Contrast highest",<br>    "class": "textContrastHighest"<br>} | {<br>    "name": "Paragraph",<br>    "class": "textParagraph"<br>},<br>{<br>    "name": "Disabled",<br>    "class": "textDisabled"<br>},<br>{<br>    "name": "Black",<br>    "class": "textBlack"<br>}, |
| DynamicText  | Size  |   | {<br>    "name": "Smallest",<br>    "class": "textSmallest"<br>},<br>{<br>    "name": "Largest",<br>    "class": "textLargest"<br>} |
| DynamicText | Weight  | {<br>    "name": "Light",<br>    "class": "textLight"<br>},<br>{<br>    "name": "Semibold",<br>    "class": "textSemiBold"<br>}, |     |
|  | Decoration (New)          |  | {<br>    "name": "Underline",<br>    "class": "textUnderline"<br>},<br>{<br>    "name": "Line Through",<br>    "class": "textLineThrough"<br>} |
| LayoutGrid (New)   |  |    |  |
| LayoutGridRow (New) |   |   |    |
| LayoutGridColumn (New)  |     |    | |
| ListView  | Background color (new)    |   | {<br>    "name": "Primary",<br>    "class": "backgroundPrimary"<br>},<br>{<br>    "name": "Gray",<br>    "class": "backgroundGray"<br>},<br>{<br>    "name": "Brand Primary",<br>    "class": "backgroundBrandPrimary"<br>},<br>{<br>    "name": "Brand Success",<br>    "class": "backgroundBrandSuccess"<br>},<br>{<br>    "name": "Brand Warning",<br>    "class": "backgroundBrandWarning"<br>},<br>{<br>    "name": "Brand Danger",<br>    "class": "backgroundBrandDanger"<br>},<br>{<br>    "name": "Brand Info",<br>    "class": "backgroundBrandInfo"<br>} |
| com.mendix.widget.native.animation.Animation                 | Background color          | {<br>    "name": "Secondary",<br>    "class": "backgroundSecondary"<br>}, | {<br>    "name": "Gray",<br>    "class": "backgroundGray"<br>},<br>{<br>    "name": "Brand Info",<br>    "class": "backgroundBrandInfo"<br>} |
| com.mendix.widget.native.floatingactionbutton.FloatingActionButton | Style                     |                                                              | {<br>    "name": "Secondary",<br>    "class": "floatingActionButtonSecondary"<br>}, |
| com.mendix.widget.native.safeareaview.SafeAreaView           | Background color          | {<br>    "name": "Secondary",<br>    "class": "backgroundSecondary"<br>}, | {<br>    "name": "Gray",<br>    "class": "backgroundGray"<br>},<br>{<br>    "name": "Brand Info",<br>    "class": "backgroundBrandInfo"<br>} |

## 더 읽기

* [Atlas 3 웹사이트](https://www.mendix.com/atlas/)
* [Atlas Design System 앱](https://atlasdesignsystem.mendixcloud.com/)
* [Studio Pro 9 릴리스 노트](/releasenotes/studio-pro/9.0/)
