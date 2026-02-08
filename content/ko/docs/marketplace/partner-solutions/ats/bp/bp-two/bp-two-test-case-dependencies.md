---
title: "테스트 케이스 의존성"
url: /appstore/partner-solutions/ats/bp-two-test-case-dependencies/
---

## 소개

이 문서는 테스트 케이스 의존성이 무엇인지 설명하고 ATS 내에서 테스트 케이스 의존성을 처리하는 가장 좋은 방법을 설명합니다.

## 테스트 케이스 의존성이란?

테스트 케이스 의존성은 하나의 테스트 케이스의 동작이나 결과가 다른 테스트 케이스의 이전 실행이나 결과에 의존하는 상황에 존재합니다.

정의를 설명하기 위한 두 가지 예제가 있습니다.

### 예제 1

회사 경비 앱에서 새 경비를 생성하는 테스트 케이스가 있습니다. **Amount** 필드에 랜덤 숫자를, **Description** 필드에 랜덤 문자열을 사용하여 새 경비를 생성합니다.

앱의 필드는 다음과 같습니다:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-two/bp-two-test-case-dependencies/amount-and-description-field.png" class="no-border" >}}

**TC.01 - Create New Expense** 화면은 다음과 같습니다:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-two/bp-two-test-case-dependencies/random-number-and-random-string.png" class="no-border" >}}

테스트 케이스는 사전에 알 수 없는 값으로 새 경비를 생성합니다. ATS는 테스트 케이스 간의 값 공유를 허용하지 않으며, 이는 테스트 케이스 간의 의존성을 허용하지 않음을 의미합니다.

해당 경비의 설명을 사용하여 경비를 삭제하는 또 다른 테스트 케이스가 있습니다.

**TC.02 - Delete Expense** 화면은 다음과 같습니다:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-two/bp-two-test-case-dependencies/delete-expense-by-datagrid-row.png" class="no-border" >}}

보시다시피 설명이 랜덤으로 생성된 값이므로 TC.02 - Delete Expense는 TC.01 - Create New Expense의 경비를 삭제할 수 없습니다.

### 예제 2

기능에 접근하려면 네 개의 서로 다른 페이지를 거쳐야 합니다. 이것 역시 GUI로 인해 발생하는 테스트 케이스 의존성입니다.

## 테스트 케이스 의존성을 사용하지 말아야 하는 이유 {#why}

이 챕터에서는 테스트에 미치는 영향을 정의하여 테스트 케이스 간 의존성을 사용하지 말아야 하는 이유를 설명합니다. 좋은 테스트 케이스의 기준을 사용합니다. 첫 번째 챕터의 첫 번째 예제가 사용되며, TC.01 - Create New Expense와 TC.02 - Delete Expense 테스트 케이스가 있지만 TC.02는 TC.01 이후에만 실행할 수 있습니다.

| 측면       | 의존성이 있는 경우의 결과 |
| :----------- | :--------------------------------- |
| 가용성 | <ul><li>TC.01이 고장나거나 유지보수 중이면 TC.02를 사용할 수 없습니다.</li><li>TC.01을 먼저 실행해야 합니다.</li></ul> |
| 속도        | <ul><li>TC.02는 TC.01이 완료된 후에만 실행할 수 있습니다.</li><li>TC.01과 TC.02를 병렬로 실행할 수 없습니다.</li></ul> |
| 신뢰성  | <ul><li>TC.01이 신뢰할 수 없으면 TC.02도 신뢰할 수 없습니다.</li><li>TC.01을 변경하면 TC.02에 영향을 줄 수 있습니다.</li></ul> |
| 정밀성, <br> 이해성, <br> 분석 가능성, <br> 명확성 | <ul><li>TC.02가 실패하면 TC.01과 TC.02 모두에서 버그를 테스트해야 합니다.</li><li>TC.02가 실패하면 문제가 TC.01 또는 TC.02에 있을 수 있습니다.</li></ul> |

보시다시피 이것은 테스트 표준에 부합하지 않으므로 사용하지 마세요. 같은 이유로 ATS는 테스트 케이스 간 데이터 공유를 허용하지 않습니다. 다음 섹션에서 다양한 옵션을 설명합니다.

## 테스트 케이스 의존성 처리

### 행동 방침

이전 섹션에서는 테스트 케이스 의존성을 사용하지 않는 이유를 설명했습니다. 매우 좋은 이유가 있는 경우에만 의존성을 수용해야 합니다. 테스트 케이스 의존성에 관해서는 다음 단계를 따르세요:

1. 의존성을 피하세요.
2. 의존성을 제거하세요.
3. 의존성을 최소화하세요.
4. 의존성을 관리하세요.

### 테스트 케이스 의존성 다루기

이전 실행에 의존하는 기능을 테스트하려는 경우(TC.01 및 TC.02 예제와 같이), 세 가지 옵션이 있습니다. 처음 두 옵션은 데이터 의존성도 다룹니다. TC.01 및 TC.02 예제를 사용하여 옵션을 설명합니다:

1. 옵션 1이 선호되는 선택입니다.
2. 옵션 2는 매우 긴 설정 루틴이 있고 테스트할 시나리오가 간단한 경우에만 적용됩니다.
3. 옵션 3은 1과 2가 불가능한 경우에만 사용하세요.

옵션은 아래에 설명되어 있습니다.

#### 옵션 1 – 직접 의존성 없는 별도의 테스트 케이스

두 개의 별도 테스트 케이스를 만드세요 (예: 새 경비를 생성하는 테스트 케이스와 새 경비를 삭제하는 테스트 케이스).

먼저 새 경비를 생성하는 테스트 케이스를 만드세요: TC.01 - Create New Expense. 이제 이러한 단계를 결합하고 해당 Action을 TC.02 - Delete Expense 테스트 케이스의 설정 단계로 사용하세요.

TC.01 - Create New Expense를 설정 단계로 사용한 화면은 다음과 같습니다:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-two/bp-two-test-case-dependencies/delete-expense-create-new-expense-setup-step.png" class="no-border" >}}

결론은 다음 표와 같습니다:

| 긍정적       | 부정적 |
| :------------ | :--------------------------------- |
| 테스트 케이스 간에 의존성이 없으며, 어떤 순서로든 병렬로 실행할 수 있습니다. | 기능적 의존성으로, 경비를 생성할 수 없으면 삭제할 수도 없습니다. |
| 더 나은 유지보수성을 위한 결합 Action의 사용. | TC.02의 실행 시간이 증가하며, 추가 단계를 수행해야 합니다. |
| TC.01의 기능이 고장나면 TC.02의 결과는 Not Executed입니다. | |

좋은 테스트 케이스 기준에 대한 측면은 다음 표와 같습니다:

| 측면       | 결과                             |
| :----------- | :--------------------------------- |
| 가용성 | <ul><li>TC.01이 고장나거나 유지보수 중이어도 TC.02는 여전히 사용 가능합니다.</li><li>TC.01을 먼저 실행할 필요가 없습니다.</li></ul> |
| 속도        | <ul><li>TC.02는 TC.01과 동시에 실행할 수 있으며 병렬로도 실행할 수 있습니다.</li></ul> |
| 신뢰성  | <ul><li>TC.01이 신뢰할 수 없어도 TC.02에 영향을 주지 않습니다.</li><li>TC.01을 변경해도 TC.02에 영향을 주지 않습니다.</li></ul> |
| 정밀성, <br> 이해성, <br> 분석 가능성, <br> 명확성 | <ul><li>TC.02가 실패하면 TC.01을 확인할 필요가 없습니다.</li><li>TC.02가 실패하면 문제는 TC.02에만 있을 수 있습니다.</li></ul> |

옵션 1이 가장 좋은 옵션입니다.

#### 옵션 2 – 하나의 테스트 케이스에 여러 시나리오

이 옵션은 매우 긴 설정 루틴이 있고 시나리오가 매우 짧은 경우에만 적용됩니다. 예를 들어, 새 경비를 생성하는 시나리오와 경비를 삭제하는 시나리오가 있습니다. 이러한 시나리오를 하나의 테스트 케이스로 결합할 수 있습니다.

두 시나리오는 다음과 같습니다:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-two/bp-two-test-case-dependencies/multiple-scenarios-create-new-expense-and-delete-expense.png" class="no-border" >}}

좋은 테스트 케이스 기준에 대한 측면은 다음 표와 같습니다:

| 측면       | 결과                             |
| :----------- | :--------------------------------- |
| 가용성 | <ul><li>다른 테스트 케이스에 대한 의존성은 없습니다. 그러나 테스트 케이스 내의 시나리오 중 하나가 실패하면 다른 시나리오가 실행되지 않습니다.</li></ul> |
| 속도        | <ul><li>테스트 케이스가 하나뿐이므로 병렬화가 불가능합니다. 그러나 여러 테스트 케이스에서 동일한 설정 절차를 수행하는 시간을 절약할 수 있습니다.</li></ul> |
| 신뢰성  | <ul><li>단일 테스트 케이스에 더 많은 시나리오를 넣을수록 시나리오 간 부작용이 있을 수 있으므로 결과의 신뢰성이 떨어집니다.</li></ul> |
| 정밀성, <br> 이해성, <br> 분석 가능성, <br> 명확성 | <ul><li>테스트 케이스가 실패하면 항상 테스트 로그를 확인하여 실패 원인이 있는 시나리오를 찾아야 합니다.</li></ul> |

#### 옵션 3 – 의존성이 있는 별도의 테스트 케이스

이것은 마지막 옵션이며, 옵션 1과 옵션 2가 작동하지 않는 경우에만 이 옵션을 사용해야 합니다. 이 옵션은 테스트 케이스 간 데이터 공유에는 적용되지 않습니다.

두 개의 별도 테스트 케이스를 만들고 Test Suite에서 결합하세요. 데이터 의존성이 없는지 확인하세요.

TC.01 - Create New Expense는 다음과 같습니다:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-two/bp-two-test-case-dependencies/tc.01-create-new-expense.png" class="no-border" >}}

TC.02 - Delete Expense는 다음과 같습니다:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-two/bp-two-test-case-dependencies/tc.02-delete-expense.png" class="no-border" >}}

TS.01 - Create New Expense and Delete Expense는 다음과 같습니다:

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-two/bp-two-test-case-dependencies/ts.01-create-new-expense-and-Delete-expense.png" class="no-border" >}}

TC.02가 TC.01의 결과에 의존하므로 ATS가 TC.01을 먼저 실행해야 합니다. ATS가 이를 수행하도록 하려면 실행 유형을 **Sequential**로 설정하세요.

{{< figure src="/attachments/appstore/partner-solutions/ats/bp/bp-two/bp-two-test-case-dependencies/ts.01-create-new-expense-and-Delete-expense-type-sequential.png" class="no-border" >}}

그러면 ATS가 Test Suite의 내용을 순서대로 실행합니다.

옵션 3의 결과는 [2 테스트 케이스 의존성을 사용하지 말아야 하는 이유](#why)에서 설명한 것과 동일합니다.
