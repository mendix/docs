---
title: "고급 설정으로 차트 미세 조정하기"
linktitle: "차트 고급 튜닝"
url: /howto8/front-end/charts-advanced-tuning/
weight: 30
description: "차트 레이아웃과 유형을 변경하는 데 사용할 수 있는 설정을 설명합니다"
---

## 소개

개별 차트 위젯은 고급 설정으로 미세 조정할 수 있습니다. 이 설정은 레이아웃, 구성 및 데이터에 영향을 줄 수 있습니다.

이 사용 방법 가이드에서는 다음을 배우게 됩니다:

* 글꼴 스타일 변경하기 (레이아웃)
* 차트 유형 변경하기 (데이터 시리즈)
* 툴바 활성화하기 (구성)

## 사전 요구 사항

이 사용 방법 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* 최신 버전의 Mendix Studio Pro 설치
* Mendix Marketplace에서 최신 [Chart Widget](/appstore/widgets/charts/) 다운로드
* 차트 설정, [차트 만들기](/howto8/front-end/charts-basic-create/) 참조

## 레이아웃 변경하기 {#layout-changes}

변경 전 차트의 모습입니다:

{{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-advanced-tuning/charts-toggle-editor.png" alt="chart" class="no-border" >}}

사용자 정의 레이아웃을 만들려면 다음 단계를 따르십시오:

1. 차트가 포함된 앱을 여십시오.
2. 차트 위젯이 있는 페이지를 여십시오.
3. 차트 위젯 설정을 여십시오.
4. **Advanced** 탭으로 이동하십시오.
5. **Mode**를 **Developer**로 설정하십시오.
    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-advanced-tuning/charts-widget-properties-advanced.png" alt="chart widget properties" class="no-border" >}}
6. 앱을 실행하십시오.
7. 브라우저에서 차트가 있는 페이지를 여십시오.
8. **Toggle Editor** 버튼을 클릭하십시오.
9. **Layout** 섹션에 다음 **Custom setting**을 추가하십시오:

    ```json
    {
      "font": {
        "family": "Open Sans",
        "size": 14,
        "color": "#555"
      }
    }
    ```

10. 차트에 원하는 글꼴이 표시될 때까지 글꼴 설정을 변경하십시오. 글꼴 설정을 복사하십시오.

    {{% alert color="warning" %}}편집기에서 변경한 내용은 위젯의 고급 설정이나 테마에 저장하지 않으면 유지되지 않습니다.{{% /alert %}}

    일부 변경 후 차트는 다음과 같습니다:

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-advanced-tuning/charts-toggle-editor-open.png" alt="chart editor" class="no-border" >}}

11. **Advanced** 탭의 **Layout options** 속성에 새 글꼴 설정을 붙여넣으십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-advanced-tuning/charts-widget-properties-advanced-layout.png" alt="chart editor" class="no-border" >}}

12. Studio Pro에서 **Mode**를 다시 **Advanced**로 변경하십시오. 이렇게 하면 차트에서 Toggle Editor 버튼이 제거됩니다.

{{% alert color="warning" %}}

고급 설정은 Advanced 또는 Developer 모드의 차트에만 적용됩니다.

{{% /alert %}}

## 차트 유형 변경하기

변경 전 차트의 모습입니다:

{{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-advanced-tuning/charts-widget-bar.png" alt="chart editor" class="no-border" >}}

사용자 정의 구성을 만들려면 다음 단계를 따르십시오:

1. [레이아웃 지침](#layout-changes)의 1~8단계를 반복하십시오.
2. 드롭다운 메뉴에서 다르게 표시하려는 시리즈의 이름을 선택하십시오: 이 경우 **Series 1**.
3. **Custom settings**을 편집하십시오; `{ "type": "line" }`으로 변경하십시오.
    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-advanced-tuning/charts-widget-bar-line-combination.png" alt="chart editor" class="no-border" >}}
4. 사용자 정의 설정을 복사하십시오.
5. Studio Pro에서 **Series 1** 구성을 여십시오.
6. **Advanced** 탭의 **(Layout) Options** 속성에 데이터의 새 구성을 붙여넣으십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-advanced-tuning/charts-widget-bar-line-combination-properties.png" alt="chart editor" class="no-border" >}}

변경 후 차트는 다음과 같습니다:

{{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-advanced-tuning/charts-widget-bar-line-combination-result.png" alt="chart editor" class="no-border" >}}

## 구성 변경하기

사용자 정의 구성을 만들려면 다음 단계를 따르십시오:

1. [레이아웃 지침](#layout-changes)의 1~8단계를 반복하십시오.
2. 드롭다운 메뉴에서 **Configuration**을 선택하십시오.
3. **Custom settings**을 편집하고 `{ "displayModeBar": true }`로 변경하십시오.
4. 원하는 대로 더 많은 Custom settings을 추가하십시오. 더 많은 구성 설정은 [여기](https://plot.ly/javascript/configuration-options/)를 참조하십시오.
5. 편집기에서 변경한 내용은 유지되지 않으므로 필요한 설정을 복사하십시오.
6. **Advanced** 탭의 **Configuration options** 속성에 새 구성을 붙여넣으십시오.
    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-advanced-tuning/charts-widget-properties-advanced-config.png" alt="chart editor" class="no-border" >}}
7. **Mode**를 **Advanced**로 변경하여 Studio Pro에서 **Toggle Editor** 버튼을 제거하십시오.

    {{% alert color="warning" %}}고급 설정은 Advanced 또는 Developer 모드의 차트에만 적용됩니다{{% /alert %}}

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-advanced-tuning/charts-config-toolbar.png" alt="chart editor" class="no-border" >}}

## 더 읽기

[고급 속성](/refguide8/charts-configuration/#advanced) 레퍼런스

레이아웃 옵션: [치트 시트](/refguide8/charts-advanced-cheat-sheet/#layout-all)  
구성 옵션: [치트 시트](/refguide8/charts-advanced-cheat-sheet/#config-options)  
데이터 시리즈 옵션: [치트 시트](/refguide8/charts-advanced-cheat-sheet/#data-series)  

전체 레퍼런스: https://plot.ly/javascript/
