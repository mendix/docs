---
title: "동적 시리즈 차트 만들기"
url: /howto8/front-end/charts-dynamic-series/
weight: 50
---

## 소개

차트 위젯은 동적 시리즈의 기본 구현을 제공합니다. 이를 통해 앱의 데이터를 기반으로 런타임에 차트의 데이터 시리즈 수(예: 선 차트의 선)를 변경할 수 있습니다.

이 사용 방법 가이드에서는 다음을 배우게 됩니다:

* 동적 시리즈가 있는 차트 만들기

## 사전 요구 사항

이 사용 방법 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* Mendix Marketplace에서 최신 [Charts Widget](/appstore/widgets/charts/) 다운로드

## 차트 데이터 설정하기

### Domain Model 설정하기

동적 시리즈가 있는 차트 위젯을 만들려면 특정 데이터 구조를 설정해야 합니다.

1. Attribute **xValue**와 **yValue**를 가진 Entity **Value**를 포함하도록 Domain Model을 구성하십시오.
1. Attribute **name**, **color**, **fillColor**를 가진 또 다른 Entity **Series**를 추가하십시오.
1. 두 Entity 간에 Association **Value_Series**를 추가하십시오.
    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-dynamic-series/charts-dynamic-series-model.png" alt="Values entity" class="no-border" >}}

### 차트에 데이터 입력하기

이제 차트에 데이터를 입력해야 합니다.

1. **Series** Entity를 마우스 오른쪽 버튼으로 클릭하십시오.
2. **Generate overview pages...**를 선택하십시오.
3. 페이지를 생성할 Entity로 **Series**와 **Value**를 모두 선택하십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-dynamic-series/charts-dynamic-series-generate-pages.png" alt="Generate Series and Value overview and data entry pages" class="no-border" >}}

4. **Series_Overview** 페이지를 내비게이션에 연결하십시오.
5. 앱을 (로컬에서) **실행**하십시오.
6. 샘플 데이터를 입력하십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-dynamic-series/charts-dynamic-series-data-entry.png" alt="Enter data for chart" class="no-border" >}}

## 차트 위젯 구성하기

### 차트 페이지 추가하기

이제 차트가 포함된 페이지를 만들어야 합니다.

1. 새 페이지를 만드십시오.
2. **Value**의 첫 번째 객체를 컨텍스트로 만드는 Microflow를 사용하는 Data View를 추가하십시오.
3. Data View 안에 **Area chart** 위젯을 추가하십시오.

### 동적 시리즈로 Area Chart 구성하기

동적 시리즈로 차트 위젯을 구성하려면 다음 단계를 따르십시오:

1. Area Chart 위젯을 마우스 오른쪽 버튼으로 클릭하고 **Properties**를 선택하십시오.
1. **Chart properties** 탭에서 새 **Series** 속성을 추가하십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-basic-create/charts-series.png" alt="Chart Series" class="no-border" >}}

1. **Data source** 탭에서 **Dynamic**을 선택하십시오.
1. **Data entity**를 *Value*로 설정하십시오. 이것은 데이터 값이 검색될 Entity입니다.
1. **Data source**를 **Database**로 설정하십시오 (REST 엔드포인트는 동적 시리즈에서 지원되지 않습니다).

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-dynamic-series/charts-dynamic-series-select.png" alt="select Dynamic" class="no-border" >}}

1. **Data Points** 탭에서 설정하십시오:

    * **X-axis data attribute**를 *Value/xValue*로
    * **Y-axis data attribute**를 *Value/yValue*로

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-dynamic-series/charts-dynamic-series-data-points.png" alt="select Data Points" class="no-border" >}}

1. **Dynamic series** 탭에서 설정하십시오:

    * **Series entity**를 *Series*로
    * **Series name attribute**를 *Series/name*으로
    * **Line color attribute**를 *Series/color*로
    * **Area color attribute**를 *Series/fillcolor*로

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-dynamic-series/charts-dynamic-series-attributes.png" alt="select Data Points" class="no-border" >}}

1. 차트 페이지를 사용자 내비게이션에 추가하십시오.

## 차트 보기

차트를 보려면 다음 단계를 따르십시오:

1. 앱을 (로컬에서) 실행하십시오.
1. 동적 시리즈 차트가 포함된 페이지를 여십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-dynamic-series/charts-dynamic-series-chart.png" alt="Dynamic Series Chart" class="no-border" >}}

## 더 읽기

* [기본 차트 만들기](/howto8/front-end/charts-basic-create/)
* [고급 설정으로 차트 미세 조정하기](/howto8/front-end/charts-advanced-tuning/)
* [Any Chart 사용하기](/howto8/front-end/charts-any-usage/)
