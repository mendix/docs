---
title: "성능 통계"
url: /appstore/partner-solutions/apd/rg-two-statistics/
---

## 성능 통계

**Statistics** 탭에서 수집된 통계가 다음 열과 함께 표시됩니다:

* **Name** – Microflow 또는 클라이언트 API 호출의 이름
* **Count** – Microflow 또는 클라이언트 API 호출의 횟수
* **Avg (ms)** – 밀리초 단위의 평균 소요 시간
* **90% (ms)** – 90%의 경우에 해당하는 밀리초 단위의 소요 시간
* **Total (ms)** – 모든 발생의 밀리초 단위 총 시간

이 개요는 시간별 또는 일별로 통계를 표시합니다(기간 간 전환 가능). 각 Microflow, 페이지 또는 클라이언트 API 호출을 드릴다운하여 자세한 정보를 얻을 수 있습니다. Microflow의 경우 Microflow 액션 및 하위 Microflow에 대한 통계와 이력 차트가 표시됩니다. 페이지의 경우 이력 차트와 사용자가 해당 페이지에서 열은 페이지가 표시됩니다. 

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-statistics/statistics.png" class="no-border" >}}

## Microflow 통계

**Items** 탭은 통계 개요에서 선택한 Microflow의 모든 액션과 하위 Microflow에 대한 인사이트를 제공합니다. 드릴다운하여 자세한 내용을 확인하십시오.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-statistics/statistics_items.png" class="no-border" >}}

**Tree** 탭은 빠른 개요로 통계 결과를 볼 수 있습니다. 이 개요는 가장 긴 소요 시간을 가진 액션을 정확히 파악하는 데 도움이 됩니다. 드릴다운하여 자세한 내용을 확인하십시오.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-statistics/statistics_tree.png" class="no-border" >}}

통계의 트리에서 하위 액션이 상위보다 더 오래 걸릴 수 있습니다. 이는 평균 소요 시간이 비교되고, 결정이 있는 Microflow에서 대부분의 경우가 빠른 경로를 택하고 일부만 느린 경로를 택하는 경우, 상위의 평균이 느린 경로 하위의 평균보다 빠르기 때문입니다.

**History** 탭은 시간 경과에 따른 소요 시간과 횟수에 대한 인사이트를 제공합니다. 이러한 인사이트는 추세를 감지하고 최적화가 성공적이었는지 확인하는 데 도움이 됩니다. 

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/statistics_history.png" class="no-border" >}}

**Manual snapshots** 탭을 사용하여 수동 통계 스냅샷을 생성할 수 있습니다. 카운터를 지우면 수동 통계가 초기화됩니다. 이는 짧은 기간 동안 데이터를 수집하는 데 유용할 수 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/rg-two-statistics/manual_snapshot.png" class="no-border" >}}
