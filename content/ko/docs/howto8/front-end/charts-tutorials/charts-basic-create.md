---
title: "기본 차트 만들기"
url: /howto8/front-end/charts-basic-create/
weight: 10
description: "기본 차트를 만들고 표시 옵션을 구성하는 방법"
---

## 소개

차트 위젯은 Mendix 애플리케이션에서 다양한 유형의 차트(예: 영역, 선, 막대, 열, 파이)의 기본 구현을 제공합니다.

이 사용 방법 가이드에서는 다음을 배우게 됩니다:

* 기본 샘플 데이터로 차트 만들기

* 차트 표시 옵션 구성하기

## 사전 요구 사항

이 사용 방법 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* Mendix Marketplace에서 최신 [Charts Widget](/appstore/widgets/charts/)을 다운로드하십시오

## 기존 앱에서 차트 위젯 구현하기

이 섹션에서는 기본 샘플 데이터로 차트를 만듭니다.

## Domain Model 설정하기

차트 위젯을 사용하려면 특정 데이터 구조를 설정해야 합니다. 이는 Domain Model의 Entity와 Attribute에 의해 정의됩니다.

1. **charts**라는 새 모듈을 만드십시오.

2. 문자열 Attribute **xValue**와 십진수 Attribute **yValue**를 가진 Entity **Value**를 포함하도록 Domain Model을 구성하십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-basic-create/charts-entity.png" alt="Value entity" class="no-border" >}}

## 데이터 입력 페이지 만들기

차트 위젯이 데이터를 가져올 기본 데이터 입력 페이지를 만들려면 다음 단계를 따르십시오:

1. Value Entity를 마우스 오른쪽 버튼으로 클릭하십시오.

2. **Generate overview pages**를 선택하십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-basic-create/charts-rest-generate-overview-pages.png" alt="Generate overview pages for Value entity" class="no-border" >}}

3. **Value_NewEdit** 페이지를 사용자 내비게이션에 추가하십시오.

## 새 페이지에 차트 위젯 추가하기

1. *ShowChart*라는 페이지를 만드십시오.

2. 사용자 내비게이션에 추가하십시오.

3. **Value** Entity를 포함하고 Microflow를 데이터 소스로 하는 **Data view**를 이 페이지에 추가하십시오.

4. Data View를 채울 **DS_NewValue**라는 새 Microflow를 만드십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-basic-create/charts-create-new-value.png" alt="Data view showing the Value entity" class="no-border" >}}

5. Data View를 마우스 오른쪽 버튼으로 클릭하고 **Go to microflow**를 선택하십시오.

6. 새 **DS_NewValue** Microflow에서 새 *Value* 객체를 만들고 해당 객체를 반환값으로 설정하십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-basic-create/charts-new-values-microflow.png" alt="New Value microflow" class="no-border" >}}

7. ShowChart 페이지에서 **Area chart** 위젯을 추가하십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-basic-create/charts-select-chart.png" alt="Select widget" class="no-border" >}}

8. 최종 페이지는 다음과 같아야 합니다.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-basic-create/charts-widget-page.png" alt="Final widget Page" class="no-border" >}}

## 차트 위젯 구성하기

차트 위젯을 구성하려면 다음 단계를 따르십시오:

1. 차트 위젯이 있는 페이지를 여십시오.

2. **Area chart**를 마우스 오른쪽 버튼으로 클릭하고 **Properties**를 선택하십시오.

3. **Chart properties** 탭에서 새 **Series** 속성을 추가하십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-basic-create/charts-series.png" alt="Chart Series" class="no-border" >}}

4. **Data source** 탭에서 *Value*를 **Entity**로 선택하십시오.

5. **Data source**를 **Database**로 설정하십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-basic-create/chart-add-entity.png" alt="select Entity" class="no-border" >}}

6. **Data points** 탭에서 *xValue*를 **X-axis data attribute**로, *yValue*를 **Y-axis data attribute**로 선택하십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-basic-create/charts-data-points.png" alt="select Data Points" class="no-border" >}}

## 차트 보기

차트를 보려면 다음 단계를 따르십시오:

1. 앱을 실행하십시오.

2. 브라우저에서 데이터 입력 페이지를 여십시오.

3. **x value**와 **y value**에 데이터 값을 입력하십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-basic-create/charts-front-end.png" alt="Enter Data" class="no-border" >}}

4. **Save** 버튼을 클릭하십시오.

5. **ShowChart** 페이지를 열어 생성된 차트를 확인하십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-basic-create/charts-area-chart.png" alt="Show Chart" class="no-border" >}}

## 더 읽기

* [REST 데이터 소스로 차트 사용하기](/howto8/front-end/charts-basic-rest/)
* [Any Chart 사용하기](/howto8/front-end/charts-any-usage/)
* [차트 테마 사용하기](/howto8/front-end/charts-theme/)
