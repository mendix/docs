---
title: "Scheduled Event"
url: /refguide9/scheduled-events/
weight: 80
description: "Scheduled Event 구성 옵션"
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Scheduled Event를 사용하면 런타임이 특정 시점에 Microflow를 실행하도록 할 수 있습니다.

Scheduled Event는 모듈에 문서로 추가됩니다(모듈을 마우스 오른쪽 버튼으로 클릭하면 *Add other* 아래에 나열됩니다).

{{% alert color="warning" %}}
Scheduled Event는 로컬에서 테스트할 수 있지만, 앱이 Free App으로 배포된 경우에는 실행되지 않습니다. Free App 제한 사항에 대한 자세한 내용은 [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/#free-app)의 Free App 섹션을 참조하십시오.
{{% /alert %}}

## 변형

Mendix 9.12.0까지 Scheduled Event는 클러스터 리더 노드에서만 실행되었으며, 최대 한 번 보장(at-most-once guarantee)을 제공했습니다. 이는 클러스터 리더 노드에 문제가 발생하면 실행되지 않음을 의미합니다. 또한 이러한 Scheduled Event는 적절한 월간 및 연간 이벤트를 지원하지 않으며 일광 절약 시간으로 인해 1시간의 시간 이동이 발생할 수 있습니다. 이러한 '레거시' Scheduled Event는 더 이상 권장되지 않으며 Mendix 10부터 더 이상 지원되지 않습니다.

Mendix 9.12.0부터 Scheduled Event가 개선되어 [Task Queue](/refguide9/task-queue/)를 사용하여 실행되며, 최소 한 번 보장(at-least-once guarantee)을 제공합니다. 클러스터의 임의의 노드에서 실행되며 월간 및 연간 이벤트를 적절하게 지원합니다.

가장 중요한 것은, Task Queue 기반 Scheduled Event에서는 더 이상 특정 날짜 및 시간을 지정할 수 없다는 것입니다. 모든 이벤트는 설정한 스케줄에 따라 지정된 시간에 반복됩니다.

또한, 이러한 반복 이벤트는 일광 절약 시간에도 예상대로 작동합니다.

Mendix 9.12 이상에서는 다음 스케줄 유형을 지원합니다:

* **Legacy** – Mendix 9.12.0 이전에 존재하던 유형 — [레거시 Scheduled Event](/refguide9/scheduled-events-legacy/) 참조
* **Yearly** – 특정 일 또는 날짜에 지정된 시간에 1년에 한 번 발생하는 이벤트 — [연간 Scheduled Event](/refguide9/scheduled-events-task-queue/#yearly) 참조
* **Monthly** – 특정 일에 지정된 시간에 매월 발생하는 이벤트 — [월간 Scheduled Event](/refguide9/scheduled-events-task-queue/#monthly) 참조
* **Weekly** – 특정 요일에 지정된 시간에 매주 발생하는 이벤트 — [주간 Scheduled Event](/refguide9/scheduled-events-task-queue/#weekly) 참조
* **Daily** – 지정된 시간에 매일 발생하는 이벤트 — [일간 Scheduled Event](/refguide9/scheduled-events-task-queue/#daily) 참조
* **Hourly** – 매 시간마다 발생하는 이벤트 — [시간별 Scheduled Event](/refguide9/scheduled-events-task-queue/#hourly) 참조
* **Minutes** – 매 분마다 발생하는 이벤트 — [분별 Scheduled Event](/refguide9/scheduled-events-task-queue/#minutes) 참조

## 마이그레이션{#migration}

버전 [9.12.0](/releasenotes/studio-pro/9.12/#9120) 이상으로 마이그레이션할 때, Studio Pro는 가능한 경우 레거시 Scheduled Event를 Task Queue 기반 이벤트로 변환을 시도합니다. 변환이 불가능한 경우 (버전 [9.12.1](/releasenotes/studio-pro/9.12/#9121) 이상에서) 사용 중단 경고가 표시됩니다. 경고를 마우스 오른쪽 버튼으로 클릭하여 수정 가능한 옵션을 확인하십시오. 적합한 옵션이 없으면 수동으로 변환을 수행해야 합니다.

다음 경우는 Mendix 9.12.0 이상으로 모델이 업그레이드될 때 자동으로 변환할 수 없습니다:

* 이벤트가 반복되지 않는 경우 — Scheduled Event를 제거하거나 [Java API](/refguide9/task-queue/#queuing)를 사용하여 일회성 작업을 예약하십시오. 반복되지 않는 Scheduled Event는 더 이상 지원되지 않습니다.
* 이벤트의 시작 시간이 미래인 경우(지원 중단 예정) — 시작 시간을 과거 날짜로 변경하거나 Task Queue 기반 Scheduled Event로 전환하십시오.
* 이벤트의 간격 유형이 Month 또는 Year인 경우(각각 31일 및 365일로 변환됨) — 대신 Monthly 또는 Yearly 유형을 사용하십시오.
* 이벤트의 간격 유형이 Seconds인 경우 — 대신 1분 간격의 Scheduled Event를 사용하십시오. 1분 미만으로 반복하는 Scheduled Event는 더 이상 지원되지 않습니다.
* 이벤트의 간격이 다음 가장 큰 간격 유형으로 정확히 나누어지지 않는 경우(예: 7분마다 실행되는 이벤트). 이는 60분으로 정확히 나누어지지 않습니다. 이런 경우 매시간 8번 실행되고 4분이 남아 매시간 4분씩 '드리프트'됩니다.

    지원되지 않는 간격을 사용하는 것이 절대적으로 중요한 경우, 간격 값 1(매분)로 이벤트를 예약한 다음 Microflow 시작 부분에서 해당 특정 시간에 실행을 계속해야 하는지 확인하는 Decision을 추가해야 합니다.

{{% alert color="warning" %}}
Mendix 9.12.0 이상에서는 레거시 Scheduled Event를 편집할 수 있지만, 새 레거시 Scheduled Event를 생성할 수는 없습니다.
{{% /alert %}}
