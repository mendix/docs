---
title: "Performance Tool 결과"
url: /appstore/partner-solutions/apd/rg-one-performance-tool-results/
---
Performance Tool 결과는 세션별로 저장됩니다. 세션 이름은 화면 오른쪽 상단 모서리의 **Rename** 버튼으로 변경할 수 있습니다. 그 옆에는 **Show filter** 버튼이 있으며, 이 세션을 기록할 때 사용된 필터를 보여주는 대화 상자가 열립니다. 세션 결과는 "microflow performance" 레코드에 저장된 필드를 검색할 수 있는 검색 그리드에 표시됩니다. 기본적으로 그리드는 메인 Microflow만 표시합니다(Main? = Yes). 이들은 기록 중 다른 Microflow에 의해 호출되지 않은 Microflow입니다. 기본적으로 목록은 소요 시간에 따라 정렬됩니다. 

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-performance-tool/rg-one-performance-tool-results/Recorded_Session_Details.png" class="no-border" >}}

계산된 속성과 Domain Model 이벤트 Microflow도 메인 Microflow로 간주됩니다. 이들은 액션 시작 및 중지 시간 내에서 실행된다는 사실 외에는 이를 유발하는 Microflow에 연결할 수 없기 때문입니다.

사용자 열은 클라이언트 API 메시지와 사용자가 트리거한 액션에 대해 프로파일러가 실행 중일 때만 채워집니다. 예약된 이벤트와 Domain Model Microflow는 논리적으로 사용자가 없습니다.

호출된 Microflow를 보거나 드릴다운하면 **Actions** 탭에서 시작하는 대화 상자가 열립니다. Actions 탭에서는 이 Microflow와 관련된 하위 Microflow, 루프 및 기타 액션을 드릴다운할 수 있습니다. 

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-performance-tool/rg-one-performance-tool-results/Microflow_Actions_Tab.png" class="no-border" >}}

**Main microflows during this microflow** 탭은 Domain Model Microflow와 계산된 속성을 보여줍니다. 동일한 간격에서 발생하는 다른 Microflow도 여기에 나타날 수 있습니다.

**SQL statements** 탭은 현재 보고 있는 Microflow의 SQL 문을 보여줍니다. Microflow가 자체 런타임 요청으로 구성된 메인 Microflow인 경우, 개별 액션에 연결되지 않은 모든 SQL 문이 여기에 연결됩니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-performance-tool/rg-one-performance-tool-results/Action_SQL_Statements.png" class="no-border" >}} 

**Explain query plan** 버튼은 이 쿼리를 Explain Plan 문 안에 넣은 Query Tool 창을 엽니다. 이 Explain Plan은 SQL 문을 디버깅하고 튜닝하는 데 도움이 됩니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-performance-tool/rg-one-performance-tool-results/Explain_query_plan.png" class="no-border" >}} 

Microflow에 루프가 있으면 액션 그리드에도 표시됩니다. 각 반복에 대한 특별한 그리드로 액션을 드릴다운할 수 있습니다. 거기서 더 드릴다운할 수 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-performance-tool/rg-one-performance-tool-results/Loop_Action.png" class="no-border" >}}

Microflow 또는 액션의 전체 개요를 보려면 그리드에서 Microflow를 선택하고 **Show tree**를 클릭합니다. 이렇게 하면 Microflow와 실행된 모든 관련 액션 및 하위 Microflow의 트리 뷰가 제공됩니다. **Change parameters** 버튼을 사용하여 결과를 필터링할 수 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-performance-tool/rg-one-performance-tool-results/Tree_View.png" class="no-border" >}}

매개변수 대화 상자에서 소요 시간별 필터, 루프에 대해 표시되는 반복 수 및 일부 고급 속성(액션 표시/숨기기, 시작/종료 액션 표시/숨기기, 최대 깊이, 최대 깊이에 도달한 경우 노드에 경고 포함 옵션)을 변경할 수 있습니다.
