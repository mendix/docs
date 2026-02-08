---
title: "REST 데이터 소스로 차트 사용하기"
url: /howto8/front-end/charts-basic-rest/
weight: 60
---

## 소개

차트 위젯을 사용하면 REST 서비스의 데이터를 사용하여 그래프를 그릴 수 있습니다.

이 사용 방법 가이드에서는 다음을 배우게 됩니다:

* REST API 게시하기
* 차트 위젯의 데이터 소스로 REST 엔드포인트 사용하기

## 사전 요구 사항

이 사용 방법 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* 앱 만들기
* Mendix Marketplace에서 최신 [Charts Widgets](/appstore/widgets/charts/) 가져오기

## REST 엔드포인트로 노출될 데이터 설정하기

Mendix에서는 Studio Pro에서 기본적으로 REST Web 서비스를 게시할 수 있습니다. 이러한 기능을 사용하여 REST 서비스를 게시하고 차트 위젯에서 이를 사용하여 그래프를 그릴 수 있습니다.

REST 서비스의 데이터로 Area Chart를 만들려면 다음 단계를 따르십시오:

{{% alert color="info" %}}

REST API 게시에 대한 자세한 내용은 이 Mendix 문서를 참조하십시오: [Published REST Operation](/refguide8/published-rest-operation/)

{{% /alert %}}

1. 앱에 새 모듈을 만드십시오.
1. 모듈 이름을 *ChartsREST*로 변경하십시오.
1. Domain Model을 여십시오.
1. 아래 그림에 표시된 Attribute와 Association을 가진 **Value** 및 **Series** Entity를 만드십시오.
    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-basic-rest/charts-rest-domain.png" alt="Chart Rest Domain" class="no-border" >}}
1. **Value**를 마우스 오른쪽 버튼으로 클릭하고 **Generate overview pages...**를 선택하십시오.
    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-basic-create/charts-rest-generate-overview-pages.png" alt="Chart Rest Enter Data" class="no-border" >}}
1. 생성된 **Value_NewEdit** 페이지를 내비게이션에 추가하십시오.
1. 앱을 실행하십시오.
1. 브라우저에서 NewEdit 페이지를 여십시오.
1. 적절한 필드에 데이터를 입력하여 값과 시리즈를 추가하십시오.

## 서비스 게시하기

모델의 데이터를 REST 서비스에서 사용하려면 JSON 구조를 만들어야 합니다.

### 구조 만들기

1. **JSON Structure**를 만드십시오
    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-basic-rest/chart-series-json-structure.png" alt="Charts Rest MD" class="no-border" >}}

### REST 서비스 구성하기

REST 서비스를 구성하려면 다음 단계를 따르십시오:

1. **Published REST service**를 추가하십시오.
    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-basic-rest/charts-rest-publish.png" alt="Charts Rest Publish" class="no-border" >}}

1. REST Service **Microflow**를 추가하십시오.
    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-basic-rest/charts-rest-microflow.png" alt="Charts Rest Microflow" class="no-border" >}}

1. **Export mapping**을 추가하십시오.
    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-basic-rest/charts-rest-export-mapping.png" alt="Charts Rest Export Mapping" class="no-border" >}}

## REST를 데이터 소스로 사용하기

차트에서 REST 데이터 소스 엔드포인트를 사용하려면 다음 단계를 따르십시오:

1. **Area chart** 위젯이 포함된 페이지를 앱에 만드십시오.

1. **Area chart** 위젯을 더블 클릭하십시오.

1. **Chart properties** 탭에서 새 차트 **Series** 속성을 추가하십시오.

1. **Series name**과 **Entity**를 추가하십시오.

1. **Data source**로 REST endpoint를 선택하십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-basic-rest/charts-rest-series.png" alt="Chart Rest Series" class="no-border" >}}

1. **REST URL**을 추가하십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-basic-rest/charts-rest-url.png" alt="Chart Rest URL" class="no-border" >}}

1. **Data points** 탭에서 **X-axis data attribute**와 **Y-axis data attribute**를 선택하십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-basic-create/charts-data-points.png" alt="select Data Points" class="no-border" >}}

1. REST 요청에 매개변수를 추가하십시오. **contextId**, **series name**이 기본적으로 제공됩니다.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-basic-rest/charts-rest-parameters.png" alt="select Data Points" class="no-border" >}}

1. 앱을 실행하고 차트를 보십시오.

    {{< figure src="/attachments/howto8/front-end/charts-tutorials/charts-basic-rest/charts-rest-area-chart.png" alt="Show Chart" class="no-border" >}}

## 더 읽기

* [차트 데이터 소스 REST 사용하기](/howto8/front-end/charts-basic-create/)
* [Any Chart 사용하기](/howto8/front-end/charts-any-usage/)
* [테마 차트 사용하기](/howto8/front-end/charts-theme/)
