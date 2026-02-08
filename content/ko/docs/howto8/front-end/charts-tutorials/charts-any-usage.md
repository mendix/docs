---
title: "Any Chart 사용하기"
url: /howto8/front-end/charts-any-usage/
weight: 20
description: "Any Chart 위젯을 사용하여 고급 차트를 만드는 방법"
---

## 소개

기본 차트 위젯은 선, 막대, 열, 파이 등과 같이 쉽게 구성할 수 있는 차트 세트를 제공합니다. 이러한 차트는 고급 옵션으로 미세 조정할 수 있습니다.

고급 옵션이 충분하지 않을 때는 **Any Chart** 위젯을 사용할 수 있습니다.

**Any Chart**를 사용하면 Plotly.js로 가능한 모든 차트 유형과 차트를 동적으로 구성하는 옵션을 구축할 수 있습니다. 따라서 3D 차트를 구축하거나 동적 시리즈 세트를 갖고 싶다면 **Any Chart**가 좋은 선택입니다.

이 사용 방법 가이드에서는 다음을 배우게 됩니다:

* 샘플 데이터로 선 차트 만들기
* 차트용 데이터 내보내기
* 런타임 플레이그라운드로 차트 미세 조정하기

## 사전 요구 사항

이 사용 방법 가이드를 시작하기 전에 다음 사전 요구 사항이 있는지 확인하십시오:

* 최신 버전의 Mendix Studio Pro
* 최신 [Any Chart](/appstore/modules/any-chart/) 모듈
* JSON 데이터 구조에 대한 이해

## 차트 구조

**Any Chart** 위젯은 JSON **Data** 배열과 **Layout** 객체로 구성할 수 있습니다. 구성은 정적으로, **Source attribute**를 통해 또는 **Sample data**로 설정할 수 있습니다.

**Source attribute**의 구성은 정적 설정에 병합되어 공통 속성을 덮어씁니다. **Sample data**는 **Source** attribute가 선택되지 않았거나 Studio Pro 미리보기에서 샘플 데이터를 렌더링할 때 런타임에 데모 목적으로 사용됩니다.

## 차트 만들기

**Any Chart** 위젯으로 선 차트를 만들려면 다음 단계를 따르십시오:

1. Data View(차트 컨텍스트)가 있는 페이지를 만드십시오.
2. Data View에 Any Chart 위젯을 추가하십시오.
3. [Any Chart 치트 시트](/refguide8/charts-any-cheat-sheet/#line-chart)에서 선 차트 샘플을 선택하십시오:

    ```json
    [ { "x": [ 1, 2 ], "y": [ 1, 2 ], "type": "scatter" } ]
    ```

4. Studio Pro에서 데이터를 Any Chart 위젯 속성 탭 **Data**의 **Static** 필드에 복사하십시오.
5. 앱을 실행하여 차트가 올바르게 렌더링되는지 확인하십시오.
6. 데이터를 Domain Model에서 생성될 정적 부분과 동적 부분으로 나누십시오.

    Static :  

    ```json
    [ { "type": "scatter" } ]
    ```

    Sample data :  

    ```json
    [ { "x": [ 1, 2 ], "y": [ 1, 2 ] } ]
    ```

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-any-usage/any-chart-configuration.png" alt="Any Chart Configuration" class="no-border" >}}

7. 앱을 실행하여 차트를 미리 보십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-any-usage/charts-any-sample.png" alt="Any Chart result" class="no-border" >}}

## 데이터 내보내기

차트 위젯용 JSON 데이터를 생성하려면 다음 단계를 따르십시오:

1. Chart(컨텍스트) Entity에 **Data** 문자열(무제한 길이) Attribute를 추가하십시오.
2. 위젯에서 **Data** 탭의 **Source attribute** 필드를 설정하십시오.
    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-any-usage/any-chart-configuration-attribute.png" alt="Select data attribute" class="no-border" >}}
3. **JSON Structure**를 만들고 **Sample data**를 스니펫으로 사용하십시오.
    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-any-usage/any-chart-json-structure-line-chart-data.png" alt="Create export mapping" class="no-border" >}}
4. **JSON Structure**로 **Export Mapping**을 만드십시오.
    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-any-usage/any-chart-line-chart-export-mapping-select.png" alt="Select data structure" class="no-border" >}}
    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-any-usage/any-chart-line-chart-export-mapping.png" alt="Map objects" class="no-border" >}}
5. 데이터를 검색하는 Microflow를 만드십시오.
6. **Export Mapping**을 사용하여 **String Variable**을 생성하십시오. **Source attribute**로 선택된 객체 Attribute에 값을 저장하십시오.
    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-any-usage/any-chart-export-microflow.png" alt="Export microflow" class="no-border" >}}
    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-any-usage/any-chart-export-microflow-structure.png" alt="Export microflow" class="no-border" >}}

필요한 경우 데이터와 동일한 방식으로 레이아웃을 생성할 수도 있습니다. 대부분의 경우 **Static** 레이아웃으로 충분합니다.

## 미세 조정

Studio Pro에서 JSON 구성을 편집하는 것은 번거로울 수 있습니다. 실시간 미리보기 편집기를 사용하면 개발자가 변경 사항의 출력을 직접 볼 수 있습니다.

{{% alert color="warning" %}}

편집기는 플레이그라운드일 뿐이며 설정이 저장되지 않습니다. 다음에 앱을 볼 때 사용하려는 런타임 미리보기에서 수행한 모든 변경 사항은 **Any Chart** 위젯에도 적용해야 합니다.

{{% /alert %}}

차트 위젯 구성을 미세 조정하려면 다음 단계를 따르십시오:

1. **Data** 탭에서 **Mode** 옵션을 **Development**로 설정하십시오.

2. 앱을 실행하고 차트가 포함된 페이지를 여십시오.

3. 차트 오른쪽 상단의 **Toggle Editor** 버튼을 클릭하여 설정을 미세 조정하십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-advanced-tuning/charts-toggle-editor-open.png" alt="chart editor" class="no-border" >}}

4. 편집기에서 드롭다운 메뉴에서 **Data** 또는 **Layout**을 선택하십시오.

5. Static 또는 Data 설정을 편집하십시오.

6. 새 설정을 복사하고 Studio Pro에 적용하십시오.

7. 앱을 다시 실행하여 변경 사항이 적용되었는지 확인하십시오.

## 더 읽기

* **Any Chart** 속성: [Any Chart](/refguide8/charts-any-configuration/)
* 가장 일반적인 차트 유형: [Any Chart 치트 시트](/refguide8/charts-any-cheat-sheet/)
* 가장 일반적인 설정: [구성 치트 시트](/refguide8/charts-advanced-cheat-sheet/)
* 전체 JSON 레퍼런스: [https://plot.ly/javascript/reference/](https://plot.ly/javascript/reference/)
* [JSON Structures](/refguide8/json-structures/)
* [Export Mappings](/refguide8/export-mappings/)  
