---
title: "포트폴리오 관리에서 지원하는 우선순위 모델"
linktitle: "우선순위 모델"
url: /developerportal/portfolio-management/prioritization-models/
parent: "portfolio-management"
weight: 100
description: "Mendix 포트폴리오 관리 도구에서 지원하는 우선순위 모델을 설명합니다."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

흐름 기반 방식으로 이니셔티브를 관리할 때, 각 이니셔티브의 투자 수익률만 이론적으로 보면 최적의 경제적 이점을 얻을 수 없습니다. 대신 우선순위에 따라 이니셔티브의 순서를 정하고 지속적으로 우선순위를 업데이트하면 최상의 결과를 얻을 수 있습니다.

[포트폴리오 관리](/developerportal/portfolio-management/) 도구는 WSJF와 RICE 두 가지 우선순위 모델을 지원합니다. 이 두 우선순위 모델은 흐름 기반 환경에서 이니셔티브의 우선순위를 정하는 데 사용할 수 있습니다. WSJF와 RICE는 서로 다른 구성 요소를 기반으로 합니다. 포트폴리오 관리에 가장 적합한 우선순위 모델을 선택할 수 있습니다.

## WSJF {#wsjf}

가중 최단 작업 우선(WSJF) 점수는 지연 비용(CoD)을 이니셔티브의 작업 규모로 나누어 계산합니다. CoD는 이니셔티브의 비즈니스 가치, 시간 긴급성, 위험 감소의 합입니다. 이니셔티브가 가장 작은 작업 규모로 가장 많은 CoD를 제공할 수 있으면 가장 높은 WSJF 점수를 가지며 최상의 수익 기회를 제공합니다.

{{< figure src="/attachments/developerportal/portfolio-management/prioritization-models/wsjf-score-calculation.png" class="no-border" >}}

### CoD 계산

다음 세 가지 주요 구성 요소를 더하여 CoD를 계산할 수 있습니다:

* **Business Value** – 이 이니셔티브가 얼마나 많은 비즈니스 가치를 생성할지 나타냅니다. 포트폴리오 관리 앱에서 **Highest**, **High**, **Medium**, **Low** 또는 **Lowest**를 선택하여 이니셔티브의 비즈니스 가치를 평가할 수 있습니다.
* **Time Criticality** – 이 이니셔티브가 얼마나 시간에 민감한지 나타냅니다. 포트폴리오 관리 앱에서 **Highest**, **High**, **Medium**, **Low** 또는 **Lowest**를 선택할 수 있습니다.
* **Risk Reduction** – 이 이니셔티브가 향후 위험을 얼마나 완화하거나 줄이는 데 도움이 될지 나타냅니다. 포트폴리오 관리 앱에서 **Highest**, **High**, **Medium**, **Low** 또는 **Lowest**를 선택할 수 있습니다.

계산 시 **Highest**, **High**, **Medium**, **Low**, **Lowest**는 각각 숫자 값 20, 13, 8, 5, 1로 변환됩니다.

### 작업 규모 계산

이니셔티브의 작업 규모는 이니셔티브에 필요한 노력의 양입니다. 포트폴리오 관리 도구에서 이니셔티브의 작업 규모는 **XL**, **L**, **M**, **S** 또는 **XS**의 5단계로 평가됩니다.

계산 시 **XL**, **L**, **M**, **S**, **XS**는 각각 숫자 값 20, 13, 8, 5, 1로 변환됩니다.

이니셔티브의 작업 규모가 너무 큰 경우 Mendix는 여러 개의 작은 이니셔티브로 분할할 것을 권장합니다.

## RICE {#rice}

도달 영향 확신 노력(RICE) 점수는 도달, 영향, 확신 추정값을 곱한 후 노력 추정값으로 나누어 구합니다. RICE 점수가 높은 이니셔티브가 더 나은 수익 기회를 가집니다.

{{< figure src="/attachments/developerportal/portfolio-management/prioritization-models/rice-score-calculation.png" class="no-border" >}}

* **Reach** – 일정 기간 내에 이니셔티브가 영향을 미칠 수 있는 관련 사용자의 추정 수입니다. 정수를 입력해야 하며 이 정확한 값이 계산에 사용됩니다.
* **Impact** – 이니셔티브가 개별 사용자에게 미칠 수 있는 영향의 추정량입니다. 포트폴리오 관리 앱에서 **Massive**, **High**, **Medium**, **Low** 또는 **Minimal**로 설정할 수 있습니다. 계산 시 각각 숫자 값 3, 2, 1, 0.5, 0.25로 변환됩니다.
* **Confidence** – 영향 및 도달 추정에 대한 확신 정도를 나타냅니다. 포트폴리오 관리 앱에서 **High**, **Medium** 또는 **Low**로 설정할 수 있습니다. 계산 시 각각 숫자 값 1, 0.8, 0.5로 변환됩니다.
* **Effort** – 팀의 모든 멤버(제품, 디자인, 개발)가 이니셔티브에 필요한 총 시간의 추정량입니다. 정수를 입력해야 합니다. 이 정확한 값이 계산에 사용됩니다.
