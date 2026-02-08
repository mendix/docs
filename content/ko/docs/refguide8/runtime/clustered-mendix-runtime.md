---
title: "클러스터형 Mendix Runtime"
url: /refguide8/clustered-mendix-runtime/
description: "클러스터 기능을 사용하면 장애 조치 및/또는 고가용성 아키텍처를 활성화하기 위해 로드 밸런서 뒤에서 Mendix 애플리케이션을 실행하도록 설정할 수 있습니다."
---

## 소개

이 페이지에서는 Mendix Runtime을 클러스터로 실행할 때의 동작과 영향을 설명합니다. 클러스터 기능을 사용하면 장애 조치 및/또는 고가용성 아키텍처를 활성화하기 위해 로드 밸런서 뒤에서 Mendix 애플리케이션을 실행하도록 설정할 수 있습니다.

클러스터링을 가능하게 하는 주요 기능은 Mendix의 상태 비저장(Stateless) Runtime 아키텍처입니다. 이는 더티 상태(Non-Persistable Entity 인스턴스와 아직 영속화되지 않은 변경 사항)가 서버가 아닌 클라이언트에 저장된다는 것을 의미합니다. 이를 통해 Mendix Runtime의 확장이 훨씬 쉬워지며, 각 클러스터 노드가 클라이언트의 모든 요청을 처리할 수 있습니다. 상태 비저장 Runtime 아키텍처는 더 나은 더티 상태 유지 관리와 애플리케이션 상태에 대한 더 나은 통찰력을 제공합니다.

## 클러스터링 지원

클러스터링 지원은 Cloud Foundry Buildpack 구현에 기본적으로 내장되어 있습니다. 즉, Cloud Foundry를 사용하여 간단히 확장할 수 있습니다. Buildpack은 시스템이 자동으로 클러스터로 동작하기 시작하도록 보장합니다.

Kubernetes에서도 클러스터링이 지원되지만 *StatefulSet*을 사용해야 합니다. 이에 대한 자세한 정보는 *Minikube에서 Docker 사용*의 [확장에 대한 참고 사항](/developerportal/deploy/run-mendix-on-minikube/#scaling) 섹션에 있습니다.

## 클러스터 인프라

Mendix Runtime 클러스터에는 다음 인프라가 필요합니다:

{{< figure src="/attachments/refguide8/runtime/clustered-mendix-runtime/16844074.png" class="no-border" >}}

이는 Mendix 클러스터가 사용 가능한 Runtime 클러스터 노드에 클라이언트의 부하를 분산하기 위해 로드 밸런서가 필요하다는 것을 의미합니다. 또한 모든 노드가 동일한 Mendix 데이터베이스에 연결해야 하며, 파일은 S3에 저장되어야 합니다(자세한 내용은 아래 [파일 저장소](#file-storage) 섹션 참조). 클러스터의 노드 수는 애플리케이션, 고가용성 요구 사항 및 사용량에 따라 달라집니다.

## Cluster Leader와 Cluster Slave

Mendix Runtime에는 Cluster Leader 개념이 있습니다. 이것은 Mendix Runtime 클러스터 내에서 클러스터 관리 활동을 수행하는 단일 노드입니다. 이러한 활동은 다음과 같습니다:

* **세션 정리 처리** – 각 노드가 세션을 만료시키고(즉, 구성된 시간 동안 사용되지 않음) Cluster Leader가 데이터베이스에 영속화된 세션을 제거합니다
    * 예외적인 경우(예: 노드 충돌)에는 일부 세션이 데이터베이스에서 제거되지 않을 수 있으며, 이 경우 Cluster Leader가 이 제거가 여전히 수행되도록 합니다
* **클러스터 노드 만료 처리** – 만료된(즉, 구성된 시간 동안 하트비트를 보내지 않는) 클러스터 노드 제거
* **백그라운드 작업 만료 처리** – 정보가 만료된(즉, 특정 시간보다 오래된) 백그라운드 작업에 대한 데이터 제거
* **차단된 사용자 해제**
* **참조되지 않은 파일 정리** - *(Mendix 8.13.0 이상)* 삭제, 교체되었거나 커밋되지 않은 파일 문서를 저장소에서 제거
* **Scheduled Event 실행** – Scheduled Event는 Cluster Leader에서만 실행됩니다
* **새 배포 후 데이터베이스 동기화 수행**
* **새 배포 후 영구 세션 제거** – 모든 기존 세션을 무효화하여 최신 모델 버전과 동기화

이러한 활동은 Cluster Leader에서만 수행됩니다. Cluster Leader가 실행되지 않는 경우 클러스터는 여전히 작동하지만 위에 나열된 활동은 수행되지 않습니다.

Cloud Foundry Buildpack은 어떤 클러스터 노드가 Cluster Leader가 되고 어떤 노드가 Cluster Slave가 되는지 결정합니다.

## 클러스터 시작

클러스터의 개별 노드는 앱의 가동 시간에 영향을 주지 않고 시작 및 중지할 수 있습니다. 그러나 새 버전의 앱을 배포하면 전체 클러스터가 재시작되고 Cluster Leader가 데이터베이스 동기화가 필요한지 결정합니다. 이는 이 작업이 수행되는 동안 앱이 배포될 때 일부 다운타임이 있음을 의미합니다.

데이터베이스 동기화가 필요한 경우, 모든 Cluster Slave는 Cluster Leader가 데이터베이스 동기화를 완료할 때까지 기다립니다. 데이터베이스 동기화가 완료되면 모든 클러스터 노드가 완전히 기능하게 됩니다.

데이터베이스 동기화가 필요하지 않은 경우, 모든 클러스터 노드는 시작 직후 완전히 기능하게 됩니다.

## 파일 저장소 {#file-storage}

업로드된 파일은 공유 파일 저장소 시설에 저장해야 합니다. 모든 Mendix Runtime 노드가 동일한 파일에 접근해야 하기 때문입니다. 로컬 저장소 시설을 공유하거나 Amazon S3 파일 저장소, Microsoft Azure Blob 저장소 또는 IBM Bluemix Object Storage와 같은 중앙 저장소 시설에 파일을 저장해야 합니다.

이러한 저장소 시설에 파일을 저장하도록 Mendix Runtime을 구성하는 방법에 대한 자세한 내용은 [Runtime 사용자 정의](/refguide8/custom-settings/)를 참조하십시오.

## After-Startup 및 Before-Shutdown Microflow {#startup-shutdown-microflows}

Mendix에서 `After-Startup` 및 `Before-Shutdown` Microflow를 구성할 수 있습니다. Mendix 클러스터에서 이는 해당 Microflow가 노드별로 호출된다는 것을 의미합니다. 이를 통해 요청 핸들러 및 기타 활동을 등록할 수 있습니다. 그러나 이러한 Microflow 중에 데이터베이스 유지 관리를 수행하는 것은 동일한 클러스터의 다른 노드에 영향을 미칠 수 있으므로 강력히 권장되지 않습니다. 클러스터 시작 또는 종료 시 Microflow를 실행할 수 있는 기능은 없습니다.

## 클러스터 제한 사항

### Microflow 디버깅

다중 노드 클러스터를 실행하는 동안에는 Microflow가 어떤 노드에서 실행될지 예측할 수 없습니다. 따라서 Mendix Studio Pro에서 클러스터의 Microflow 실행을 디버깅하는 것은 불가능합니다. 그러나 Mendix Runtime의 단일 인스턴스를 실행하는 동안에는 여전히 Microflow를 디버깅할 수 있습니다.

### 클러스터 범위 잠금(보장된 단일 실행)

일부 앱은 특정 시점에서 특정 활동의 보장된 단일 실행을 요구합니다. 단일 노드 Mendix Runtime에서는 JVM 잠금을 사용하여 이를 보장할 수 있었습니다. 그러나 분산 시나리오에서는 이러한 JVM이 서로 다른 머신에서 실행되므로 사용 가능한 잠금 시스템이 없습니다. Mendix도 클러스터 범위 잠금을 지원하지 않습니다. 이를 우회할 수 없는 경우 외부 분산 잠금 관리자를 사용해야 할 수 있습니다. 그러나 분산 시스템에서의 잠금은 복잡하고 실패에 취약합니다(예: 잠금 기아 또는 잠금 만료).

{{% alert color="info" %}}
위에 설명된 이유로, Microflow의 **Disallow concurrent execution** 속성은 단일 노드에만 적용됩니다.
{{% /alert %}}

## 클러스터에서의 더티 상태

사용자가 Mendix 애플리케이션에 로그인하고 특정 애플리케이션 흐름을 진행하기 시작하면, 시스템은 데이터베이스에 아직 영속화하지 않으면서 일부 데이터를 임시로 유지할 수 있습니다. 데이터는 Mendix Client 메모리에 유지되며 사용자를 대신하여 Mendix Runtime 노드에 전달됩니다.

예를 들어, 항공편, 호텔, 렌터카가 포함된 휴가를 Mendix 앱을 통해 예약한다고 가정하십시오. 첫 번째 단계에서 항공편을 선택하고 구성하고, 두 번째에서 호텔, 세 번째에서 렌터카를 선택하고, 마지막 단계에서 예약과 결제를 확인합니다. 각 단계는 서로 다른 화면에 있을 수 있지만, 1단계에서 2단계로 이동할 때 예약한 항공편을 기억하고 싶을 것입니다. 이것이 "더티 상태"라고 합니다. 데이터가 아직 최종 확정되지 않았지만 서로 다른 요청 간에 유지되어야 합니다. 안정적으로 확장하고 장애 조치 시나리오를 지원하기 위해, 상태는 요청 간에 하나의 Mendix Runtime 노드 메모리에 저장될 수 없습니다. 따라서 상태는 호출자(Mendix Client)에 반환되고 후속 요청에 추가되어, 모든 노드가 해당 요청에 대해 해당 상태로 작업할 수 있습니다.

다음 이미지는 이 동작을 설명합니다:

{{< figure src="/attachments/refguide8/runtime/clustered-mendix-runtime/16844072.png" class="no-border" >}}

Mendix 데이터베이스에서 객체를 읽고 (변경되지 않은) 객체를 삭제하는 것은 여전히 "깨끗한 상태"입니다. 기존 객체를 변경하거나 새 객체를 인스턴스화하면 "더티 상태"가 생성됩니다. 더티 상태는 모든 요청과 함께 Mendix Client에서 Mendix Runtime으로 전송되어야 합니다. 객체를 커밋하거나 롤백하면 더티 상태에서 제거됩니다. 인스턴스화되었거나 변경된 객체가 삭제된 경우에도 동일합니다. Non-Persistable Entity는 항상 더티 상태의 일부입니다.

Mendix Client에서 시작된 요청(동기 및 비동기 호출 모두)에 대한 더티 상태만 요청 간에 유지될 수 있습니다. Scheduled Event, 웹 서비스 또는 백그라운드 실행과 같은 다른 모든 요청의 경우, 상태는 현재 요청에 대해서만 존재합니다. 그 후, 더티 상태는 영속화되거나 삭제되어야 합니다. Mendix Client 요청만이 더티 상태를 유지할 수 있도록 허용하는 이유는 현재 실제 사용자 입력으로 작동하는 유일한 채널이기 때문입니다. 사용자 입력은 요청 간에 데이터에 대한 더 많은 상호 작용과 유연성이 필요합니다. 이러한 요청만이 더티 상태를 유지하도록 허용함으로써 Mendix Runtime 및 외부 소스에 대한 부하를 최소화하고 성능을 최적화합니다.

{{% alert color="info" %}}
Mendix Client가 재시작될 때마다 모든 상태가 삭제됩니다. Mendix Client 메모리에만 보관되기 때문입니다. Mendix Client는 브라우저 탭을 다시 로드하거나(예: <kbd>F5</kbd> 누르기), 모바일 하이브리드 앱을 재시작하거나, 명시적으로 로그아웃할 때 재시작됩니다.
{{% /alert %}}

더티 상태의 일부인 객체가 많을수록 Mendix Runtime과 Mendix Client 간의 요청 및 응답에서 더 많은 데이터를 전송해야 합니다. 따라서 이는 성능에 영향을 미칩니다. 클러스터 환경에서는 동기화가 성능에 미치는 영향을 최소화하기 위해 더티 상태의 양을 최소화하는 것이 좋습니다.

Mendix Client는 요청을 처리하는 동안 잠재적으로 읽을 수 있는 데이터만 보내서 Mendix Runtime에 전송되는 상태 양을 최적화하려고 합니다. 예를 들어, `Booking`을 매개변수로 받고 Association을 통해 `Flight`를 검색하는 Microflow를 호출하면, 클라이언트는 요청과 함께 더티 상태에서 `Booking`과 관련된 `Flight`만 전달하지만 `Hotel`은 전달하지 않습니다. 이 동작은 최선의 노력입니다. Microflow가 분석하기에 너무 복잡한 경우(예: 상태 객체를 매개변수로 하는 Java Action이 호출되는 경우) 전체 더티 상태가 함께 전송됩니다. 이 최적화는 [네트워크 호출 최적화](/refguide8/project-settings/#optimize-network-calls) 프로젝트 설정을 통해 비활성화할 수 있습니다.

{{% alert color="warning" %}}
외부 데이터를 가져오기 위해 Mendix에서 외부 웹 서비스를 호출할 때, 해당 작업의 응답이 Mendix Entity로 변환된다는 점을 인식하는 것이 중요합니다. Mendix 데이터베이스에 영속화되지 않는 한 더티 상태의 일부가 되어 애플리케이션 성능에 부정적인 영향을 미칩니다. 이 영향을 줄이기 위해 이 동작은 향후 변경될 수 있습니다.
{{% /alert %}}

큰 요청 및 응답의 성능 영향을 줄이기 위해, 앱 개발자는 큰 요청 및 응답을 유발하는 다음 시나리오를 알고 있어야 합니다:

* 대량의 Non-Persistable Entity를 생성하고 페이지에 표시하는 Microflow
* 외부 데이터를 검색하고 Non-Persistable Entity로 변환하기 위해 웹 서비스를 호출하는 Microflow
* 각각 Microflow를 처리하기 위해 Mendix Runtime에 전송되는 상태를 유발하는 여러 Microflow 데이터 소스 데이터 뷰가 있는 페이지

{{% alert color="warning" %}}
위의 시나리오가 앱에 적용되는 경우 더티 상태가 너무 커지지 않도록 하려면, 더 이상 필요하지 않은 객체를 명시적으로 삭제하여 상태의 일부가 되지 않도록 하는 것이 좋습니다. 이렇게 하면 Mendix Runtime 노드가 요청을 처리하기 위한 메모리가 확보되고 성능이 향상됩니다.
{{% /alert %}}

## `System.Session` 또는 `System.User`와 Entity 연관

`$currentSession` *Session* 객체는 Microflow에서 사용할 수 있으므로 현재 세션에 대한 참조를 쉽게 얻을 수 있습니다. 객체를 저장해야 하는 경우 Association을 `$currentSession`으로 설정할 수 있으며, 객체를 다시 검색해야 하는 경우 `$currentSession`을 시작점으로 사용하여 Association에 의해 원하는 객체를 검색할 수 있습니다. 연관된 객체는 원하는 요구 사항을 충족하도록 설계할 수 있습니다. `System.User`와 연관된 Entity에도 동일한 패턴이 적용됩니다. 이 경우 `$currentUser` *User* 객체를 사용할 수 있습니다.

{{< figure src="/attachments/refguide8/runtime/clustered-mendix-runtime/2018-03-01_17-49-15.png" class="no-border" >}}

예를 들어, `System.Session`과 연관된 `Data` Entity에 `Key` 및 `Value` 멤버를 추가할 수 있습니다(키 값에 대한 상수를 가지고).

{{< figure src="/attachments/refguide8/runtime/clustered-mendix-runtime/2018-03-01_17-42-38.png" class="no-border" >}}

`Value` 값은 `Data` 인스턴스 목록의 `Key` 값에 대해 find를 수행하여 쉽게 얻을 수 있습니다.

{{< figure src="/attachments/refguide8/runtime/clustered-mendix-runtime/2018-03-01_17-56-37.png" class="no-border" >}}

{{% alert color="warning" %}}
데이터가 현재 사용자 또는 현재 세션과 연관되면 자동으로 가비지 컬렉션되지 않습니다. 따라서 이 데이터는 서버에 대한 모든 요청과 함께 전송되고 해당 요청의 응답에 의해 반환됩니다. 따라서 이 임시 데이터를 유지하기 위한 다른 솔루션이 불가능한 경우에만 Entity 인스턴스를 현재 사용자 및 현재 세션과 연관시켜야 합니다.
{{% /alert %}}

## 세션은 항상 영구적

원활한 클러스터링을 지원하기 위해 세션은 항상 데이터베이스에 영속화됩니다. 이전 버전에서는 이것이 알려진 성능 병목이었습니다. Mendix는 이제 이 성능 영향을 완화하기 위한 최적화를 포함하고 있습니다.

영구 세션에 최대 캐싱 시간 30초(기본값)를 부여하여 이 목적을 위한 데이터베이스 왕복을 줄입니다. 이는 세션에서 로그아웃한 후에도 클러스터의 다른 노드에서 30초 동안 세션에 접근할 수 있음을 의미하지만, 해당 노드가 로그아웃 직전에 해당 세션에 대한 이전 요청을 처리한 경우에만 해당됩니다. 이 타임아웃은 구성할 수 있습니다. 이를 낮추면 구성된 시간 창 내에서 세션에 접근할 수 있는 가능성이 작아지므로 클러스터가 더 안전해집니다. 그러나 이는 데이터베이스에 대한 더 빈번한 왕복이 필요합니다(성능에 영향). 타임아웃을 늘리면 반대 효과가 있습니다. 이는 `SessionValidationTimeout`(밀리초 값)을 설정하여 구성할 수 있습니다.

영구 세션은 각 요청에 대해 마지막 활성 날짜도 저장합니다. 이 특정 측면의 성능을 개선하기 위해, 세션의 마지막 활성 날짜 Attribute는 더 이상 각 요청에서 즉시 데이터베이스에 커밋되지 않습니다. 대신, 이 정보는 구성 가능한 간격으로 실행되는 작업을 위해 대기열에 추가되어 Mendix 데이터베이스에 저장됩니다. 이 작업은 세션이 다른 노드에서 로그아웃되지 않았는지, 마지막 활성 날짜가 데이터베이스의 것보다 더 최신인지 확인합니다. 간격은 `ClusterManagerActionInterval`(밀리초 값)을 설정하여 구성할 수 있습니다.

{{% alert color="warning" %}}
`SessionTimeout` 및 `ClusterManagerActionInterval` 커스텀 설정의 기본값을 재정의하면 "keep alive" 동작에 영향을 미치고 예기치 않은 세션 로그아웃이 발생할 수 있습니다. 모범 사례는 `ClusterManagerActionInterval`을 `SessionTimeout`의 절반으로 설정하여 각 노드가 세션 타임아웃 간격 동안 정리 작업을 적어도 한 번 실행할 수 있도록 하는 것입니다.
{{% /alert %}}
