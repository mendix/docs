---
title: "Mendix Runtime의 고급 커스텀 설정"
linktitle: "고급 커스텀 설정"
url: /refguide8/tricky-custom-runtime-settings/
description: "Mendix Runtime의 고급 커스텀 설정과 구성 방법을 설명합니다."
---

## 소개

Mendix에는 많은 커스텀 설정이 있으며, 대부분은 [Runtime 사용자 정의](/refguide8/custom-settings/)에 설명되어 있습니다.

그러나 더 일반적으로 사용되는 커스텀 설정 중 일부는 복잡하고 광범위한 영향을 미칠 수 있습니다. 따라서 이러한 설정에 약간의 특별한 관심을 기울이고 변경의 결과를 더 철저히 설명하고자 합니다.

## 세션 기간

### 웹 클라이언트 설정

다음 설정은 Mendix 웹 클라이언트의 동작에 영향을 줍니다:

| Name | Description | Default value |
| --- | --- | --- |
| `EnableKeepAlive` | Defines whether the web client sends a keep alive request every `SessionTimeout`/2 milliseconds in order to prevent a session timeout. Each click in the browser also acts as `KeepAlive`. Disabling this property will result in the user being logged out automatically after 10 minutes of inactivity, even if the browser remains open. | true |

### 일반 설정

다음 커스텀 설정을 구성할 수 있습니다:

| Name | Description | Default value |
| --- | --- | --- |
| `SessionTimeout` | Defines after how much time the session becomes invalid (in milliseconds). After that timeout, a session becomes applicable for removal. The session won't be destroyed until the next time the cluster manager evaluates the active sessions. | 600000 |
| `ClusterManagerActionInterval` | The interval (in milliseconds) used for performing all cluster manager actions. These actions include unblocking users and removing invalid sessions. If nothing is specified, the interval is half the `SessionTimeout`. | 300000 |

세션 타임아웃을 늘리면 특히 모바일 디바이스에서 사용자 경험을 개선할 수 있습니다. 사용자에게 데이터를 표시하는 데 사용되는 Entity나 사용자가 Microflow를 실행할 때 생성 또는 검색된 Entity는 해당 사용자의 세션에 연결되며, 이러한 Entity는 오랜 기간 동안 메모리에 남아 있을 수 있다는 점을 염두에 두는 것이 중요합니다. 사용자가 로그아웃하면 이러한 Entity가 메모리에서 제거되지만, 사용자가 유휴 상태이지만 로그아웃하지 않는 경우(예: 다른 작업을 수행하면서 브라우저 탭을 열어두거나 로그아웃하지 않고 브라우저를 닫는 경우) 세션 타임아웃은 유휴 세션에 의해 메모리 사용량이 묶이는 것을 방지하는 안전장치 역할을 할 수 있습니다. 첫 번째 경우는 `EnableKeepAlive` 커스텀 설정을 false로 설정하여 완화할 수도 있습니다. 대부분의 브라우저에서 이 설정은 유휴 브라우저 탭도 세션 타임아웃의 영향을 받도록 보장합니다.

세션 타임아웃 확인 및 기타 중요한 이벤트의 빈도가 `ClusterManagerActionInterval`에 연결되어 있으므로, 값이 많이 증가하는 경우(예: 24시간 이상) 세션 타임아웃의 절반이라는 기본값을 사용하지 않는 것이 합리적입니다. `SessionTimeout` 값이 얼마나 높게 설정되든 `ClusterManagerActionInterval`에 최대값을 두는 것이 합리적일 수 있습니다. 대략적인 수치는 15분이지만, 궁극적으로 이는 애플리케이션의 기능적 요구 사항에 따라 달라집니다.

상태 비저장 Runtime을 사용하면 메모리 사용이 문제를 일으킬 가능성이 두 가지 이유로 줄어들었습니다. 첫 번째 이유는 수평 확장 환경에서 실행할 수 있는 기능입니다. 여러 Runtime은 의도하지 않은 메모리 사용도 해당 Runtime에 분산되어 유휴 사용자 세션의 영향을 줄입니다. 그러나 주된(두 번째) 이유는 대부분의 메모리 사용이 클라이언트로 이동되었다는 것입니다. 따라서 메모리의 모든 Entity가 애플리케이션 노드에 저장되는 대신 상당 부분이 클라이언트의 브라우저에 저장됩니다. 이것은 `SessionTimeout` 기본값을 훨씬 높은 값으로 증가시킬 때 애플리케이션 노드에 미칠 수 있는 잠재적 부담을 크게 줄여야 합니다.

세션 타임아웃을 늘릴 때 영향을 받을 수 있는 또 다른 중요한 사항은 Mendix 라이선스에 의해 부과되는 사용자 제한입니다. 더 긴 세션은 특정 시점에서 더 많은 동시 사용자를 의미할 수 있습니다. 이것은 애플리케이션을 실행하는 데 필요한 라이선스의 세부 사항을 결정할 때 염두에 두어야 할 사항입니다.

마지막으로 보안 고려 사항이 있습니다. 유휴 세션은 사용자가 표준 보안 절차를 따르지 않는 경우 세션이 하이재킹될 가능성이 있음을 의미합니다. 컴퓨터를 잠그지 않은 채 떠나고 이후에 컴퓨터 앞에 있지 않으면, 해당 사용자의 컴퓨터에 물리적으로 접근할 수 있는 사람이 세션을 훔치거나 사용하여 자신의 이익을 위해 사용할 수 있습니다. 기본 세션 타임아웃 값을 사용하면 물리적 접근이 가능한 기간이 훨씬 제한되므로(즉, 24시간의 세션 타임아웃이 10분의 세션 타임아웃보다 위험합니다) 이 위험이 줄어듭니다. 이것이 얼마나 우려되는지는 애플리케이션의 핵심 비즈니스 목표와 앱을 사용하는 사람들의 유형에 따라 다릅니다. 예를 들어, IT 전문가는 대부분의 다른 사용자 그룹보다 표준 보안 절차를 따를 가능성이 높습니다.

따라서 이러한 값을 변경할 때 위의 모든 사항을 염두에 두십시오. 또한 이러한 값을 변경하는 결정이 올바른 고려 사항으로 이루어졌는지 확인하십시오.

## 쿼리 로깅

### 데이터베이스 설정: 공통 설정

| Name | Description | Default value |
| --- | --- | --- |
| `LogMinDurationQuery` | Defines whether database queries are logged via the `ConnectionBus_Queries` log node if they finished after the amount of milliseconds specified here. By default, only the concerning SQL query will be logged. Set the log level of the `ConnectionBus_Queries` log node to TRACE to show more information about the page or the microflow that leads to this query. |   |

`LogMinDurationQuery`는 예상보다 오래 걸리는 쿼리를 감지하는 데 매우 유용한 도구입니다. 이것은 앱에서 사용하는 데이터가 커진 후에만 예상보다 오래 걸리는 쿼리에 특히 유용합니다. 이는 쿼리가 몇 달간 사용한 후에만 느려질 수 있으며 사전 릴리스 성능 테스트에서 나타나지 않았을 수 있음을 의미합니다. 쿼리가 느린지 여부를 결정하는 것은 실행 중인 앱의 유형에 따라 다릅니다. 그러나 일반적으로 사용자에게 직접 영향을 미치는(즉, 백그라운드 프로세스가 아닌) 쿼리는 백그라운드에서 실행되는 쿼리보다 느린 것으로 판단하는 임계값이 더 낮습니다. 예를 들어, 무언가를 선택하기 전에 로드하는 데 5초가 걸리는 드롭다운 메뉴는 1초가 아닌 5초가 걸리는 "느린" 쿼리로 인해 4초가 아닌 8초가 걸리는 백그라운드 PDF 생성보다 훨씬 나쁩니다.

Mendix Cloud에서는 10000(즉, 10초)의 기본값을 선택했습니다. 이러한 쿼리는 애플리케이션의 프런트 엔드에서 눈에 띄기 때문입니다. 애플리케이션에 백그라운드 프로세스가 없으면 이 값이 너무 높을 수 있습니다. 반면에 애플리케이션이 최소한의 사용자 상호 작용으로 많은 백그라운드 프로세스를 실행하는 경우 이 값이 너무 낮을 수 있습니다. 결국 설정할 올바른 값은 앱의 기능적 요구 사항에 따라 다르며 그에 따라 설정해야 합니다.

이 설정의 가장 중요한 부분은 이 값을 초과하는 쿼리에 대해 정기적으로 애플리케이션 로그를 확인하고 문제가 있는 것으로 판단되면 해결하는 것입니다. 후속 조치 없이 이 값을 설정하는 것은 값을 설정하지 않는 것만큼이나 유용하지 않습니다. 느리게 실행되는 쿼리는 사용자 경험, 영향을 받는 모든 작업의 처리량, 애플리케이션의 메모리 사용량, 애플리케이션의 CPU 사용량에 부정적인 영향을 미칠 수 있으며, 극단적인 경우 서비스 중단으로 이어질 수도 있습니다. 이 모든 것을 감안하여 Mendix는 애플리케이션에 적합한 숫자로 이 값을 설정하고 기록된 모든 쿼리에 대해 후속 조치를 취할 것을 강력히 권장합니다.

애플리케이션 로그에서 다음 문구를 찾으면 이러한 로그 항목을 찾을 수 있습니다: **Query executed in**. 이 문구는 다음과 같은 예시에 나타납니다: `Jan 01 02:03:04.567 - WARNING - ConnectionBus_Queries: (1/4) Query executed in 642 seconds and 694 milliseconds: UPDATE "somemodule$someentity"`.

## 데이터베이스 연결 수

### 연결 풀링

아래 설정은 데이터베이스 연결 풀링 동작을 정의하는 데 사용됩니다. Runtime은 재사용 가능한 데이터베이스 연결 풀을 사용합니다. 예를 들어, 사용할 수 있는 연결 수를 정의할 수 있습니다. 연결 풀링은 [Apache Commons Object-pooling API](https://commons.apache.org/pool/)를 사용하여 구현됩니다.

| Name | Value | Default value |
| --- | --- | --- |
| `ConnectionPoolingMaxActive` | Sets the cap on the total number of active instances from the pool. | 50 |
| `ConnectionPoolingMaxIdle` | Sets the cap on the number of "idle" instances in the pool. | 50 |
| `ConnectionPoolingMinIdle` | Sets the minimum number of objects allowed in the pool before the evictor thread (if active) spawns new objects. Note that no objects are created when `numActive` + `numIdle` >= `maxActive`.  This setting has no effect if the idle object evictor is disabled (meaning, if `timeBetweenEvictionRunsMillis` <= 0). | 0 |

{{% alert color="info" %}}
이러한 설정을 변경하면 변경 사항을 적용하기 위해 앱을 재시작해야 합니다.
{{% /alert %}}

{{% alert color="info" %}}
이러한 설정은 *Runtime 인스턴스당* 구성됩니다. [애플리케이션을 확장](/developerportal/deploy/scale-environment/)한 경우, 데이터베이스 측의 연결 수는 Runtime 인스턴스 수에 의해 곱해집니다. 예를 들어, `ConnectionPoolingMaxIdle`을 `50`으로 설정하고 앱을 2개의 Runtime 인스턴스로 확장하면, 각 Runtime 인스턴스는 최대 50개의 연결을 만들지만 데이터베이스 측에서는 최대 100개의 연결이 됩니다.
{{% /alert %}}

`ConnectionPoolingMaxIdle` 및 `ConnectionPoolingMinIdle` 설정을 변경할 때 다음 사항을 고려하십시오:

* 유휴 연결이 많으면 메모리 사용량이 증가합니다
* 유휴 연결이 많으면 연결 자체를 생성할 필요가 없으므로 쿼리 시작 시 오버헤드가 줄어듭니다
* 유휴 연결이 적으면 메모리 사용량이 감소합니다
* 유휴 연결이 적으면 연결 자체를 생성해야 하므로 쿼리 시작 시 오버헤드가 증가합니다

가장 흥미로운 설정은 `ConnectionPoolingMaxActive`입니다. 이것은 특정 시점에서 병렬로 실행할 수 있는 총 쿼리 수를 제한합니다. Mendix 애플리케이션에서 이 값의 기본 설정은 50입니다. 이는 주어진 시간에 최대 50개의 쿼리가 병렬로 실행될 수 있음을 의미합니다. 대부분의 애플리케이션에서 이것은 매우 안전한 숫자입니다. 대부분의 쿼리는 밀리초만 걸리므로 50개의 쿼리가 병렬로 실행되는 지점에 도달하려면 많은 동시 사용자가 필요합니다. 앱이 연결 풀링 한도에 지속적으로 도달하면 다음과 같은 오류가 발생합니다:

* `WARNING - ConnectionBus: Database connections: 50 active, 0 idle.`
* `ERROR - ConnectionBus: Opening JDBC connection to 1.2.3.4:5432 failed with SQLState: null Error code: 0 Message: Cannot get a connection, pool error Timeout waiting for idle object Retrying...(1/4)`

그리고/또는 다음과 같은 DB 연결 풀 그래프가 표시됩니다:

{{< figure src="/attachments/refguide8/runtime/custom-settings/tricky-custom-runtime-settings/mendix-customsettings-tricky-img1.png" class="no-border" >}}

`ConnectionPoolingMaxActive` 값을 (훨씬) 더 높은 숫자로 늘리고 싶은 유혹이 들 것입니다. 그러나 다음 중 하나라도 해당되면 이것은 취해야 할 올바른 조치가 아닙니다:

* 애플리케이션 로그에 장기 실행 쿼리가 표시되는 경우 – 이 경우 먼저 이를 수정하는 것이 더 합리적입니다. 그렇지 않으면 결국 같은 문제에 부딪히게 되지만 애플리케이션 (재)시작 후 발생하는 데 약간 더 오래 걸릴 뿐입니다
* 데이터베이스의 메모리가 부족하거나 정기적으로 메모리 부족 상태인 경우 – 이 경우 먼저 데이터베이스 노드 크기를 업그레이드하는 것이 더 합리적입니다
    * 이 경우 애플리케이션 로그에서 장기 실행 쿼리를 찾을 수 있을 가능성이 높습니다
* 주어진 시간에 활성 사용자 세션이 몇 개뿐인 경우 – 3명의 사용자가 지속적으로 50개의 병렬 데이터베이스 연결을 사용하는 이유를 설명할 수 없다면 애플리케이션을 리팩토링해야 할 수 있습니다

그러나 다음 조건이 모두 해당되면 `ConnectionPoolingMaxActive` 값을 (훨씬) 더 높은 숫자로 늘려야 합니다:

* 대량의 동시 사용자(즉, 최소 수천 명)가 있는 경우
* `LogMinDurationQuery`를 비교적 낮은 숫자(예: 3초)로 설정해도 애플리케이션 로그에 장기 실행 쿼리가 표시되지 않는 경우
* 항상 충분한 데이터베이스 메모리가 있는 경우

일반적으로, `ConnectionPoolingMaxActive` 값을 (훨씬) 더 높은 숫자로 늘리는 것이 올바른 조치인 경우는 매우 드뭅니다. 안타깝게도 연결 풀링 문제에 부딪혔을 때 일반적으로 취하는 조치이긴 합니다.

## 더 읽기

* [Runtime 사용자 정의](/refguide8/custom-settings/)
