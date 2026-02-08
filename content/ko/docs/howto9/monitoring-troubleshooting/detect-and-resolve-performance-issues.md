---
title: "성능 문제 감지 및 해결"
url: /howto9/monitoring-troubleshooting/detect-and-resolve-performance-issues/
description: "가능한 성능 문제와 근본 원인 및 해결 방법을 설명합니다."
---

## 소개

모든 애플리케이션은 성능 문제에 직면할 수 있습니다. 이 문서에서는 발생할 수 있는 여러 성능 문제, 근본 원인 및 해결 방법을 설명합니다.

아래 흐름도는 Microflow처럼 설계되었으며, 성능 관련 문제를 해결하는 방법을 결정하기 위한 인프라를 제공합니다. 이 문서는 이 흐름을 기반으로 합니다.

{{< figure src="/attachments/howto9/monitoring-troubleshooting/detect-and-resolve-performance-issues/18580226.png" class="no-border" >}}

## 문제

성능 문제는 일반적으로 최종 사용자에게 두 가지 방식 중 하나로 나타납니다: 작업이 완료되는 데 너무 오래 걸리거나(페이지가 느리거나 응답하지 않음) 전체 페이지가 느리게 로드됩니다. 두 경우 모두 특정 작업을 완료하기 위해 일부 프로세스가 너무 오래 또는 너무 많이 실행되고 있습니다. 어떤 작업이 문제를 일으키는지 파악한 다음 해당 작업을 최적화하는 데 노력을 집중해야 합니다.

먼저 문제가 UI 중심인지 Microflow 중심인지 식별해야 합니다:

* 페이지가 처음 로드되는 데 오랜 시간이 걸리거나 Microflow 버튼을 클릭한 후 페이지가 느려지거나 응답하지 않는 경우, Microflow가 애플리케이션을 느리게 할 가능성이 높습니다
* 페이지가 로드된 후 UI가 글리치가 있거나 느린 경우, UI 중심 문제일 수 있습니다

{{% alert color="info" %}}
모든 성능 문제는 매우 상황에 따라 다르므로, 성능 문제에 대한 단일 만병통치약은 없습니다. 이 문서에서는 일반적인 문제와 해결 방법을 다루려고 합니다.
{{% /alert %}}

## 느린 UI

사용자 인터페이스가 느린 경우, 페이지에서 호출하는 느린 Microflow 때문인지 UI에서 수행하는 많은 호출 때문인지 파악해야 합니다. 이를 결정하려면 [Firefox Developer Edition](https://www.mozilla.org/nl/firefox/developer/)과 같은 개발자 도구(콘솔, 디버거, 성능 도구 등)가 있는 웹 브라우저를 사용해야 합니다.

예제 시나리오에서 앱에 대한 테스트를 실행하면 단일 페이지 로드에 대해 26개의 XPath 검색이 있는 것을 발견합니다. 각 단계의 실행 시간과 시작 전 대기 시간을 확인할 수 있습니다. 일부 검색은 다른 것보다 오래 걸릴 수 있지만, 이렇게 많은 검색이 발생한다는 사실 자체도 잠재적인 문제입니다.

느린 UI의 원인을 파악한 후—[너무 많은 로드](#loads) 또는 [느린 로드](#slow)—아래 섹션으로 이동할 수 있습니다.

### 너무 많은 로드 {#loads}

단일 페이지에서 너무 많은 로드가 발생하는 경우, Studio Pro에서 페이지 구조를 검토하여 해당 수를 줄일 수 있는지 확인하십시오. 많은 수의 로드의 일반적인 원인은 다음과 같습니다:

* 많은 데이터 그리드
* 많은 중첩된 데이터 뷰
* 많은 참조 선택기
* 많은 탭
* 위젯

모든 상황은 고유하지만, 느린 구성 요소를 찾는 데 잘 진행되고 있습니다. 여기에서 시행착오가 가장 효과적일 수 있습니다. 페이지에서 객체를 제거하여 속도가 빨라지면 느린 구성 요소를 좁힐 수 있습니다.

### 느린 로드 {#slow}

느린 로드가 문제라고 판단한 경우, 개발자 도구로 느린 로드를 살펴보고 어디에서 오는지 확인하십시오. 아래 섹션에서 구체적인 예를 다룹니다.

#### 느린 네트워크

소량의 데이터에 대해 데이터 전송이 오래 걸리는 경우, 시스템 관리자에게 추가 지원을 요청할 수 있습니다. 이 문서는 애플리케이션 모델 내에서 해결할 수 있는 문제에 초점을 맞춥니다.

#### 검색 액션

특정 검색 액션이 느린 경우, 이를 단순화하기 위해 노력할 수 있습니다. 다음을 검토하십시오:

* 복잡한 XPath
* 누락된 인덱스
* 결합된 보안 규칙(즉, 각각 복잡한 보안이 있는 여러 사용자 역할을 가진 사용자)

#### Microflow

느린 액션이 Microflow를 통해 발생하는 경우, 문제 해결에 대한 정보는 아래 [느린 Microflow](#slow-micro) 섹션을 참조하십시오.

## 느린 Microflow {#slow-micro}

성능 문제가 Microflow에 의해 발생하는 경우, 어떤 Microflow가 가장 느리고 해당 Microflow에서 어떤 액티비티가 가장 느린지 찾아야 합니다.

느린 액티비티를 식별하는 것이 명확할 수 있습니다. 몇 가지 단계만 있는 단일 Microflow가 있고 그 중 하나가 매우 느릴 수 있습니다. 이 경우 다음 섹션으로 이동하여 최적화에 집중하십시오. 그렇지 않으면 아래를 계속 읽으십시오.

느린 Microflow와 해당 Microflow의 특정 느린 액티비티를 식별하는 데 사용할 수 있는 도구는 아래 섹션에서 설명합니다.

### 서버 모니터링

Mendix Server와 [Apps](/developerportal/)는 다양한 성능 그래프와 로그를 제공합니다.

### Microflow 디버거

느린 페이지를 식별한 후, 해당 페이지에서 실행되는 Microflow를 쉽게 식별할 수 있습니다. 직접 참조되는 Microflow(예: 데이터 소스)뿐만 아니라 하위 Microflow, on-change 이벤트 핸들러, 페이지에서 호출할 수 있는 Domain Model 이벤트 핸들러도 확인하십시오.

브레이크포인트를 설정하고 관련 Microflow를 단계별로 실행하면 느린 액션을 빠르게(주관적으로) 찾을 수 있습니다(자세한 내용은 [Microflow 및 Nanoflow 디버깅](/refguide9/debug-microflows-and-nanoflows/) 참조). 느린 프로세스를 주관적으로 식별할 수 없는 경우, 다음 단계로 이동하십시오.

### Microflow 타임스탬프

타임스탬프를 사용하면 실행 시간을 측정하여 느린 Microflow와 액티비티를 객관적으로 식별할 수 있습니다. 이를 위해 다음과 같은 간단한 Microflow를 고려하십시오:

{{< figure src="/attachments/howto9/monitoring-troubleshooting/detect-and-resolve-performance-issues/18580222.png" class="no-border" >}}

타이머를 설정하려면, 먼저 현재 시간을 저장할 **Create variable** 액티비티를 첫 번째 단계로 추가하십시오:

{{< figure src="/attachments/howto9/monitoring-troubleshooting/detect-and-resolve-performance-issues/18580221.png" class="no-border" >}}

그런 다음 Microflow 끝에 **Log message** 액티비티를 추가하십시오:

{{< figure src="/attachments/howto9/monitoring-troubleshooting/detect-and-resolve-performance-issues/18580219.png" class="no-border" >}}

액티비티를 다음과 유사하게 설정하십시오:

{{< figure src="/attachments/howto9/monitoring-troubleshooting/detect-and-resolve-performance-issues/18580220.png" class="no-border" >}}

여기서 Microflow가 시작되었을 때와 완료되었을 때 사이의 밀리초 수를 계산한 다음 이를 정보로 콘솔에 기록합니다. 앱을 실행하면, 이 Microflow가 실행될 때마다 콘솔에 줄이 표시됩니다. 메시지에는 실행 시간이 포함됩니다.

원인이 되는 Microflow를 찾을 때까지 Microflow 타이머를 추가한 다음, 해당 Microflow에 추가 타이머를 추가하여 어떤 액티비티가 느린지 확인하십시오. 느린 액티비티를 찾으면 아래 [Microflow 액티비티 최적화](#optimizing) 섹션을 참조하십시오. 이 섹션들은 전체 Microflow를 최적화하는 방법에 대한 세부 사항을 제공합니다.

## Microflow 액티비티 최적화하기 {#optimizing}

### 느린 데이터베이스 검색

느린 검색은 여러 가지 이유로 발생할 수 있습니다:

* 최적이 아닌 XPath
* 복잡한 보안 XPath
* 누락된 인덱스
* 복잡한 계산 속성
* 검색된 객체의 많은 수(아래 [배치](#batches) 섹션 참조)

또한 비정규화가 일부 경우에 앱 성능을 향상시킬 수 있는 방법에 대한 자세한 내용은 [성능 향상을 위한 데이터 비정규화 방법](/howto9/data-models/denormalize-data-to-improve-performance/)을 참조하십시오.

### 느린 데이터베이스 커밋

느린 커밋은 종종 커밋 전 또는 커밋 후 이벤트에 의해 발생합니다. 느린 액티비티에 대한 해당 Microflow를 검토하십시오.

대량의 데이터(예: 수천 행)를 커밋하는 경우, 배치를 사용하여 성능을 개선하는 것을 고려하십시오. 또한 [클라이언트에서 새로고침](#refresh) 속성의 사용을 확인하십시오.

#### 배치 {#batches}

아래는 배치로 검색하는 방법의 예입니다. 커밋에 대해서도 매우 유사하게 수행할 수 있습니다.

{{< figure src="/attachments/howto9/monitoring-troubleshooting/detect-and-resolve-performance-issues/18580216.png" class="no-border" >}}

#### 클라이언트에서 새로고침 {#refresh}

변경 또는 커밋 액티비티의 **Refresh in client** 속성은 사용자에게 업데이트된 정보를 제공하는 데 매우 유용합니다. 그러나 대량의 행을 커밋할 때 클라이언트 브라우저에서 수천 행을 업데이트하려고 시도하므로 애플리케이션이 느려질 수 있습니다. 가능하면 끄는 것을 고려하십시오.

### 느린 하위 Microflow

느린 하위 Microflow가 있는 경우, 위의 [느린 Microflow](#slow-micro) 섹션을 기반으로 Microflow 내에서 느린 액티비티를 식별하는 프로세스를 시작하십시오.

### 일반적으로 느린 Microflow (특정 액티비티가 식별되지 않음)

Microflow 전체가 느리지만 원인으로 두드러지는 특정 액티비티가 없는 경우, Microflow의 구조를 고려하십시오. 아래 섹션에서 가능한 여러 문제를 설명합니다.

#### 많은 커밋

루프 내에서 데이터를 커밋하는 경우, Entity를 변경하고 목록에 저장하여 일반적으로 최적화할 수 있습니다. 예를 들어, 다음 Microflow를 고려하십시오:

{{< figure src="/attachments/howto9/monitoring-troubleshooting/detect-and-resolve-performance-issues/18580218.png" class="no-border" >}}

루프가 실행될 때마다 **Order** 객체가 커밋됩니다. 처리가 완료된 후 루프 외부에서 전체 목록을 커밋하여 이를 최적화할 수 있습니다. **Change order** 액티비티의 **Commit** 속성을 **No**로 설정한 다음 루프 외부에서 전체 OrderList의 커밋을 추가하십시오:

{{< figure src="/attachments/howto9/monitoring-troubleshooting/detect-and-resolve-performance-issues/18580217.png" class="no-border" >}}

이렇게 하면 Microflow 실행 중에 수행해야 하는 데이터베이스 작업 수가 줄어들어 성능이 향상됩니다.

#### 많은 검색

Microflow가 여러 검색을 수행하는 경우, 특히 루프에서 수행하는 경우 성능 문제의 원인일 수 있습니다. 이를 최적화하려면 루프 외부에서 목록으로 데이터를 검색할 수 있는 방법을 고려하십시오.

또한 검색된 Entity의 계산 속성을 확인하십시오. 실제로 사용되는지 여부에 관계없이 해당 Entity를 검색할 때마다 계산됩니다.

#### 불필요하거나 중첩된 루프

Microflow에 루프할 객체가 많거나, 특히 중첩된 루프가 있는 경우, 실행 시간이 빠르게 증가할 수 있습니다. 이 상황에서는 Domain Model 아키텍처에 대해 생각하고, 추가 Entity, 속성 또는 연관이 필요한 정보에 더 간단하게 접근할 수 있게 해주는지 고려하십시오. 루프에서 특정 객체를 검색하는 대신 XPath를 더 효과적으로 사용할 수도 있습니다.

항상 루프에서 수행되는 검색과 커밋을 살펴보고 가능한 한 최소화하십시오.

## MxAssist Performance Bot 사용하기

[MxAssist Performance Bot](/refguide9/mx-assist-performance-bot/)은 더 나은 성능을 위해 앱에 대한 잠재적 개선 사항을 찾는 데 도움을 줄 수 있습니다. **View** > **MxAssist Performance Bot**을 통해 접근할 수 있습니다.

성능 모범 사례에 대한 자세한 내용은 [성능 모범 사례](/refguide9/performance-best-practices/)를 참조하십시오.

## 더 읽기

* [Expert Webinar Series: Performance](https://youtu.be/xNR3BjJYt3U)
