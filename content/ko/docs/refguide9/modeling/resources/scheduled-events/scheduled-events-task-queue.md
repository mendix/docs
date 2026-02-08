---
title: "Scheduled Event – Task Queue"
url: /refguide9/scheduled-events-task-queue/
weight: 10
description: "Scheduled Event 구성 옵션"
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Scheduled Event를 사용하면 런타임이 특정 간격으로 Microflow를 반복적으로 실행하도록 할 수 있습니다.

Scheduled Event는 모듈에 문서로 추가됩니다(모듈을 마우스 오른쪽 버튼으로 클릭하면 *Add other* 아래에 나열됩니다).

{{% alert color="warning" %}}
Scheduled Event는 로컬에서 테스트할 수 있지만, 앱이 Free App으로 배포된 경우에는 실행되지 않습니다. Free App 제한 사항에 대한 자세한 내용은 [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/#free-app)의 Free App 섹션을 참조하십시오.
{{% /alert %}}

## 공통 속성

| 속성 | 설명 |
| --- | --- |
| Name | Scheduled Event의 이름입니다. 이 이름은 런타임에 `System.ProcessedQueueTask` 객체에 기록되어 이 Scheduled Event가 처리된 시점을 식별할 수 있습니다. 레거시 Scheduled Event와의 호환성을 위해 `ScheduledEventInformation` 객체에도 저장되지만, 이는 더 이상 권장되지 않으며 Mendix 11에서 제거될 예정입니다. |
| Documentation | 이 필드는 앱 모델에서의 문서화 목적으로만 사용됩니다. 최종 사용자에게는 표시되지 않으며 애플리케이션의 동작에 영향을 미치지 않습니다. |

## 실행 속성

| 속성 | 설명 |
| --- | --- |
| Microflow | Scheduled Event가 실행될 때 실행되는 Microflow입니다. 매개변수가 없어야 하며 모든 권한으로 실행됩니다([Microflow](/refguide9/microflow/) 참조). |
| Enabled | Scheduled Event가 활성화된 경우에만 Microflow가 실행됩니다. 이 설정은 Studio Pro 또는 Eclipse에서 실행할 때만 적용됩니다. 프로덕션 환경에서는 플랫폼 도구(예: [Apps](https://sprintr.home.mendix.com/) 또는 Windows Service Console)를 통해 Scheduled Event를 활성화/비활성화합니다. |

## 타이밍 속성

| 속성 | 설명 |
| --- | --- |
| Interval type | 실행해야 하는 스케줄 유형입니다. 유효한 값은 [Yearly](#yearly), [Monthly](#monthly), [Weekly](#weekly), [Daily](#daily), [Hourly](#hourly) 또는 [Minutes](#minutes)입니다. |

### 연간 속성 {#yearly}

연간 이벤트에는 2가지 유형이 있습니다:

* 특정 날짜에 실행
* 특정 요일에 실행

#### 특정 날짜

매년 같은 날짜에 이벤트를 실행할 수 있습니다(예: 4월 5일).

| 속성 | 설명 |
| --- | --- |
| Date | 이벤트를 실행할 월과 일입니다. |
| Time | 이벤트를 실행할 시간입니다. |
| On overlap | [장시간 실행 이벤트](#long-events)의 옵션 설명을 참조하십시오. |

{{% alert color="warning" %}}
윤일(2월 29일)을 선택할 수 있습니다. 윤년이 아닌 해에는 이벤트가 2월 28일에 실행됩니다.
{{% /alert %}}

#### 특정 월 및 요일

매년 특정 요일에 이벤트를 실행할 수 있습니다. 예를 들어, 4월의 첫 번째 월요일입니다.

| 속성 | 설명 |
| --- | --- |
| Month | 이벤트를 실행할 월입니다. |
| Day | 이벤트를 실행할 요일입니다. |
| Time | 이벤트를 실행할 시간입니다. |
| On overlap | [장시간 실행 이벤트](#long-events)의 옵션 설명을 참조하십시오. |

### 월간 속성 {#monthly}

월간 이벤트에도 2가지 유형이 있습니다:

* 매월 특정 날짜에 실행
* 특정 요일에 실행

#### 특정 날짜

매월 또는 몇 개월마다 같은 날짜에 이벤트를 실행할 수 있습니다(예: 매월 5일).

| 속성 | 설명 |
| --- | --- |
| Interval | 이벤트 실행 사이의 개월 수입니다. 12의 약수여야 합니다. |
| Months | 이벤트가 실행될 월입니다. 매월 실행할 때는 표시되지 않습니다. |
| Day | 이벤트를 실행할 월의 일입니다. |
| Time | 이벤트를 실행할 시간입니다. |
| On overlap | [장시간 실행 이벤트](#long-events)의 옵션 설명을 참조하십시오. |

{{% alert color="warning" %}}
선택한 날이 모든 선택된 월에 존재하지 않을 수 있습니다. 해당 월에서는 이벤트가 월의 마지막 날에 실행됩니다.
{{% /alert %}}

#### 특정 요일

매월 또는 몇 개월마다 특정 요일에 이벤트를 실행할 수 있습니다. 예를 들어, 매월 첫 번째 월요일입니다.

| 속성 | 설명 |
| --- | --- |
| Month | 이벤트를 실행할 월입니다. |
| Day | 이벤트를 실행할 요일입니다. |
| Time | 이벤트를 실행할 시간입니다. |
| On overlap | [장시간 실행 이벤트](#long-events)의 옵션 설명을 참조하십시오. |

#### 주간 속성 {#weekly}

매주 특정 요일에 이벤트를 실행할 수 있습니다. 예를 들어, 매주 월요일, 수요일, 금요일입니다.

| 속성 | 설명 |
| --- | --- |
| Day | 이벤트를 실행할 요일입니다. |
| Time | 이벤트를 실행할 시간입니다. |
| On overlap | [장시간 실행 이벤트](#long-events)의 옵션 설명을 참조하십시오. |

### 일간 속성 {#daily}

매일 이벤트를 실행할 수 있습니다.

| 속성 | 설명 |
| --- | --- |
| Time | 이벤트를 실행할 시간입니다. |
| On overlap | [장시간 실행 이벤트](#long-events)의 옵션 설명을 참조하십시오. |

### 시간별 속성 {#hourly}

매시간 또는 몇 시간마다 이벤트를 실행할 수 있습니다. 첫 번째 이벤트가 자정에 실행되지 않도록 오프셋을 설정할 수도 있습니다. 예를 들어, 01:30부터 3시간마다입니다.

| 속성 | 설명 |
| --- | --- |
| Interval | 이벤트 실행 사이의 시간 수입니다. 24의 약수여야 합니다. |
| Offset (minutes) | 이벤트 기간 시작 시간으로부터의 오프셋(분)입니다. 예를 들어, 3시간 간격 중간에 실행하려면 90으로 설정하십시오. 오프셋은 지정된 간격보다 짧아야 합니다|
| On overlap | [장시간 실행 이벤트](#long-events)의 옵션 설명을 참조하십시오. |

오프셋의 효과를 설명하기 위해 대화 상자에 예시 시간이 표시됩니다.

{{< figure src="/attachments/refguide9/modeling/resources/scheduled-events/hourly-event.png" class="no-border" >}}

### 분별 속성 {#minutes}

매분 또는 몇 분마다 이벤트를 실행할 수 있습니다.

| 속성 | 설명 |
| --- | --- |
| Interval | 이벤트 실행 사이의 분 수입니다. 60의 약수여야 합니다. |
| On overlap | [장시간 실행 이벤트](#long-events)의 옵션 설명을 참조하십시오. |

### 장시간 실행 이벤트 {#long-events}

반복되는 Scheduled Event가 간격보다 오래 걸리면 중복이 발생합니다. 이를 방지하기 위해 처리 방법을 선택해야 합니다. 이는 Scheduled Event의 **On overlap** 속성에서 설정합니다.

* **Skip next** – 이벤트가 간격보다 오래 걸리면 완료될 때까지 후속 이벤트를 건너뜁니다. 다음 이벤트는 다음 예약된 시간에 시작됩니다.

    이것이 기본값이며 이벤트가 항상 예약된 시간에 실행되도록 보장합니다.

* **Delay next** – 이벤트가 간격보다 오래 걸리면 완료될 때까지 다음 이벤트가 지연됩니다. 다음 이벤트는 이전 이벤트가 완료된 직후에 시작되며 예약된 시간에 실행되지 않을 가능성이 높습니다.

    연속적인 여러 이벤트가 간격보다 오래 걸리면 의도된 예약 시간과 실제 시작 시간 사이의 차이가 점점 커집니다. 이벤트를 실행하기에 일반적으로 충분한 간격을 선택하여 이 상황을 피해야 합니다.

    시간이 지남에 따라 이벤트가 의도된 스케줄에서 크게 벗어난 경우, 가장 좋은 방법은 이벤트를 삭제하고 새로운 이벤트를 (더 긴 간격으로) 만드는 것입니다.

## 추가 정보

### 일광 절약 시간

선택한 시간대가 UTC인 경우 이벤트는 항상 지정된 시간에 실행됩니다.
그러나 서버 시간을 선택한 경우 구성된 시간대(앱의 런타임 설정)에 대해 일광 절약 시간이 있을 수 있습니다.
일광 절약 시간 변경 범위 내의 시간(예: 유럽에서 01:00과 03:00 사이)을 선택하면, 그 시간은 1년 중 하루에 발생하지 않고 다른 하루에 두 번 발생합니다. Scheduled Event는 이에 영향을 받지 않으며 해당 날에 정확히 한 번 실행됩니다.

### 동시 실행

클러스터 노드당 10개 이상의 Scheduled Event를 동시에 실행할 수 없습니다.

이 제한은 재정의할 수 없습니다.

### 지원되지 않는 간격

시간 및 분 기반 간격은 각각 24 또는 60의 정수 약수만 가능합니다. 예를 들어, 60분에 정확히 나누어지지 않으므로 7분마다 실행되도록 이벤트를 예약할 수 없습니다. 지원되지 않는 간격을 사용하는 것이 절대적으로 중요한 경우, 간격 값 1(매시간 또는 매분)로 이벤트를 예약하고 Microflow 내에서 해당 특정 시간에 실행을 계속해야 하는지 결정해야 합니다.

### 모든 Scheduled Event에 대한 단일 세션

각 런타임 노드에는 모든 Scheduled Event에 사용되는 하나의 특정 세션이 메모리에 있습니다. 이 세션에 대한 변경 사항은 해당 노드의 모든 Scheduled Event에 표시됩니다. 하나의 Scheduled Event에서 Java Action을 통해 시간대를 변경하는 것과 같은 작업은 다른 Scheduled Event에서 예상치 못한 동작을 유발할 수 있습니다. 따라서 Scheduled Event의 세션 객체를 변경하지 않는 것이 강력히 권장됩니다.
