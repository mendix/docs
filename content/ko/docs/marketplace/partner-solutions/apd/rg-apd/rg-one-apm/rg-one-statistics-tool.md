---
title: "Statistics Tool"
url: /appstore/partner-solutions/apd/rg-one-statistics-tool/
---

## 소개

이 장에서는 Statistics Tool의 개요를 제공합니다. Statistics Tool은 Microflow 및 브라우저 클라이언트 요청의 소요 시간을 측정하고, 실행 횟수, 최소, 최대 및 평균 소요 시간과 같은 통계를 수집합니다. Statistics Tool은 시스템이 최적으로 작동하지 않을 때 시스템이 무엇을 하고 있는지에 대한 인사이트를 얻기 위한 첫 번째 단계로 사용됩니다. 또한 추세를 살펴봄으로써 잠재적인 성능 문제를 판단하는 데 사용됩니다.

## 통계

Statistics Tool 화면은 여러 섹션으로 나뉩니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/Overview.png" class="no-border" >}}

잠재적인 추세를 파악하기 위해 통계가 주기적으로 저장됩니다. **Periodic store frequency**는 [옵션](#Options)에서 변경할 수 있습니다.   

## 이력 차트

Microflow를 선택하고 **History chart** 버튼을 누르면 이력 통계가 포함된 그래프를 볼 수 있습니다:  

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-statistics-tool/Trend.png" class="no-border" >}}

통계는 **Start/Stop** 대화 상자의 시작/중지 버튼을 사용하여 시작하거나 중지할 수 있습니다. 이 대화 상자는 상단 바의 시작 버튼을 통해 접근할 수 있습니다.

## 수동 통계

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-statistics-tool/Manual_statistics.png" class="no-border" >}}  

수동 통계 섹션에서는 통계 스냅샷을 생성할 수 있습니다. 이 스냅샷은 다른 스냅샷과 비교하거나 특정 기간에 대한 통계를 파악하는 데 사용할 수 있습니다. **Reset snapshot** 버튼을 사용하면 통계가 초기화됩니다. **Store snapshot** 버튼을 사용하면 통계가 데이터베이스의 저장된 스냅샷에 저장됩니다.

**참고**: 기본적으로 결과는 **Total (ms)**로 정렬됩니다. 이렇게 하면 애플리케이션이 가장 많은 시간을 소비한 액션과 Microflow의 개요를 볼 수 있습니다. 평균(**Avg**)은 **Total (ms)**를 **Count**로 나눈 값입니다. **Avg**로 정렬하면 가장 긴 평균 소요 시간을 가진 액션과 Microflow를 찾을 수 있습니다. **Count**로 정렬하면 가장 많이 실행된 액션과 Microflow를 찾을 수 있습니다. **Last run**으로 정렬하면 최근에 실행된 Microflow를 볼 수도 있습니다.

## 실행 중인 액션

이 섹션은 실행 중인 액션과 Microflow의 실시간 개요를 제공합니다. 성능 불만이 있을 때 시작하기에 가장 좋은 곳입니다. 실행 중인 액션은 시작되었지만 아직 종료되지 않은 Microflow 목록을 표시합니다. 소요 시간은 시작과 새로고침 버튼을 누른 순간 사이의 시간입니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-statistics-tool/Now_Running.png" class="no-border" >}}

**참고**: 서버가 많은 로그 메시지를 생성하고, 서버가 높은 CPU에서 실행되며, 모든 도구가 실행 중일 때 Mendix가 로그 메시지를 구독자에게 보내는 스레드에 큐가 쌓일 수 있습니다. 결과적으로 통계의 최대값이 1초인 반면 실행 중인 Microflow가 10초가 걸리는 것처럼 보일 수 있습니다. 이는 실행 시간이 새로고침 날짜로 계산되고, Microflow의 소요 시간은 메시지 날짜로 계산되기 때문입니다. 이 경우 메시지 지연에 대한 디버그 실행 카운터가 높은 숫자(예: 10000밀리초)를 표시합니다. Statistics Tool은 처리 지연이 구성된 **Max Processing Delay (ms)** 이상일 때 메시지 수집과 처리를 일시 중지합니다.

## 저장된 스냅샷

저장된 스냅샷은 데이터베이스에 저장된 통계 모음입니다. 이 섹션은 모든 저장된 스냅샷의 개요를 제공합니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-statistics-tool/Snapshots.png" class="no-border" >}}

저장된 스냅샷에서 스냅샷별로 번들된 모든 통계를 찾을 수 있습니다. 이러한 스냅샷에는 여러 유형이 있습니다: 

* 스냅샷을 수동으로 생성할 수 있습니다 - 이들은 **Manual** 유형입니다.
* 스냅샷은 주기적으로(기본적으로 매일) 생성됩니다 - 이들은 **Periodic** 유형입니다.
* 트리거가 스냅샷 생성을 발동할 수 있습니다 - 이들은 **Measurement** 유형입니다.
* 트리거의 소스는 Measurements Tool이 될 수 있으며, 통계 트리거 또는 메시지 트리거도 됩니다.

정리 시 삭제되지 않도록 유지를 선택하여 스냅샷을 보존할 수 있습니다.

## 스냅샷 세부 정보

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-statistics-tool/Snapshot_Details.png" class="no-border" >}}

스냅샷의 이름을 변경하고, 적용된 필터링 세부 정보를 포함한 세부 정보를 볼 수 있습니다.

## Statistics Tool 옵션 {#Options}

Statistics Tool의 옵션을 보여주는 스크린샷입니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-statistics-tool/Options.png" class="no-border" >}}

Statistics Tool은 항상 모든 Microflow 통계를 측정합니다. Statistics Tool은 메모리에서 표시하거나 데이터베이스에 저장할 때 특정 Microflow를 제외할 수 있습니다.

저장되는 Statistics Tool 스냅샷의 빈도를 구성할 수 있습니다(예: 매일 또는 매시간). 또한 상위 **N**개 통계와 제외 패턴을 구성합니다. APM 도구 자체는 관리자가 구성한 상수를 통해 제외됩니다.

상위 **N**은 최대 소요 시간과 총 소요 시간 모두에 대한 것이므로, *N*개에서 *2 × N*개 사이의 레코드가 표시되거나 데이터베이스에 저장됩니다. 상위 **N** 값이 비어 있거나 0이면 모든 Microflow가 검색됩니다.

대시보드 옵션에도 상위 **N**과 제외 패턴이 포함되어 있어 이러한 옵션으로 대화식으로 필터링할 수 있습니다.

### 보호 탭

**Protections** 탭에서는 다음을 볼 수 있습니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-statistics-tool/Protections.png" class="no-border" >}}

Statistics Tool을 고정된 시간 동안 실행할 수 있습니다. Statistics Tool은 항상 실행되도록 되어 있습니다. 이 옵션은 짧은 기간(예: 바쁜 시간) 동안 통계를 측정하고 덜 바쁜 시간의 통계와 비교하려는 경우에 사용할 수 있습니다.

Statistics Tool도 **Max Processing Delay (ms)**로 보호됩니다. 처리 지연이 너무 크면 도구가 다르게 작동합니다 - 처리 지연이 50ms 미만이 될 때까지 메시지 처리를 일시 중지합니다. 따라서 100ms 미만의 값을 선택하는 것은 허용되지 않습니다. 각 도구가 자체 최대 처리 지연을 갖는 이유는 Log Tool을 먼저 중지하고, 그다음 Performance Tool, 마지막으로 Trap 또는 Statistics Tool을 중지하고 싶을 수 있기 때문입니다.

데이터는 일정 일수 후 자동으로 정리됩니다.

### 트리거 탭

트리거 탭에서 특정 Microflow 소요 시간에 발동하는 트리거를 정의할 수 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-statistics-tool/Triggers.png" class="no-border" >}}

트리거 구성 방법은 [Triggers](/appstore/partner-solutions/apd/rg-one-triggers/) 설명을 참조하십시오.

### 저장 및 적용

**Save & apply** 버튼을 사용하면 현재 실행 중인 Statistics Tool 세션에 옵션에 대한 변경 사항이 적용됩니다.
