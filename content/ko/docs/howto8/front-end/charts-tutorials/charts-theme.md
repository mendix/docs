---
title: "차트 테마 사용하기"
url: /howto8/front-end/charts-theme/
weight: 40
description: "앱에서 차트 위젯으로 생성된 모든 차트에 적용될 테마를 설정하는 방법"
---

## 소개

개별 **Charts** 위젯의 외관은 고급 설정으로 미세 조정할 수 있습니다. 테마를 사용하면 개발자가 모든 차트에 적용되는 전역 설정을 만들 수 있습니다. 이 방법으로 앱의 모든 차트에 대해 색상, 언어, 글꼴 등을 설정할 수 있습니다.

이 사용 방법 가이드에서는 다음을 배우게 됩니다:

* 모든 차트의 글꼴 스타일 변경하기
* 테마 구성 추가하기

## 사전 요구 사항

이 사용 방법 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* Mendix Marketplace에서 최신 [Chart Widget](/appstore/widgets/charts/) 다운로드
* 차트 설정: [차트 만들기](/howto8/front-end/charts-basic-create/) 참조

## 차트 테마 만들기

원본 차트의 모습입니다:

{{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-advanced-tuning/charts-toggle-editor.png" alt="chart" class="no-border" >}}

### 고급 사용자 정의 구성 만들기

필요한 사용자 정의 구성을 쉽게 만들려면 다음 단계를 따르십시오:

1. 차트가 있는 앱을 여십시오.
1. 차트가 있는 페이지를 여십시오.
1. 차트 위젯 설정을 여십시오.
1. **Advanced** 탭으로 이동하십시오.
1. **Mode**를 **Developer**로 설정하십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-advanced-tuning/charts-widget-properties-advanced.png" alt="chart widget properties" class="no-border" >}}

1. 앱을 실행하십시오.
1. 브라우저에서 차트가 있는 페이지를 여십시오.
1. **Toggle Editor** 버튼을 클릭하십시오.
1. **Layout** 섹션에 **Custom settings**을 추가하십시오.

    ```json
    {
      "font": {
        "family": "Open Sans",
        "size": 14,
        "color": "#555"
      }
    }
    ```

1. 차트에 원하는 글꼴이 표시될 때까지 글꼴 설정을 변경하십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-advanced-tuning/charts-toggle-editor-open.png" alt="chart editor" class="no-border" >}}

    {{% alert color="warning" %}}편집기 변경 사항은 유지되지 않습니다. 위젯의 고급 설정이나 테마에 저장해야 합니다.{{% /alert %}}

1. Studio Pro에서 차트 위젯의 **Mode**를 **Advanced**로 설정하여 Toggle Editor 버튼을 제거하십시오.

    {{% alert color="warning" %}}테마 설정은 Advanced 또는 Developer 모드의 차트에만 적용됩니다.{{% /alert %}}

### 테마 구성 추가하기

앱의 모든 차트에 적용될 테마 파일을 추가하려면 다음 단계를 따르십시오:

1. Studio Pro에서 메뉴 **Project > Show Project Directory in Explorer**로 이동하십시오.
1. **theme** 폴더를 여십시오.
1. 새 파일을 만드십시오: *com.mendix.charts.json*

    {{% alert color="info" %}}다음 사항에 유의하십시오<br/>
    * 파일 이름은 대소문자를 구분합니다<br/>
    * 파일 확장자는 `json`입니다<br/>
    * 파일에는 비어 있더라도 *json* 객체가 포함되어야 합니다 — 예: `{ }`
    {{% /alert %}}

### 글로벌 글꼴 변경하기

앱의 모든 차트에서 글꼴을 변경하려면 다음 단계를 따르십시오:

1. 일반 텍스트 편집기에서 *[project folder]/theme/com.mendix.charts.json* 파일을 편집하십시오.
1. 내용을 바꾸거나 업데이트하십시오. **layout** 섹션에 이 사용 방법의 첫 번째 섹션에서 만든 스타일 변경 사항을 배치하십시오.

    ```json
    {
      "layout": {
        "font": {
          "family": "Impact",
          "size": 20,
          "color": "#4682B4"
        }
      }
    }
    ```

1. Mendix 앱을 다시 시작하십시오.
1. 예상 결과를 확인하십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-theme/charts-toggle-editor-changed.png" alt="chart updated" class="no-border" >}}

## 더 읽기

* [Charts](/refguide8/chart-widgets/)
* [레이아웃 샘플](/refguide8/charts-advanced-cheat-sheet/#layout-all)
* [구성 샘플](/refguide8/charts-advanced-cheat-sheet/#config-options)
