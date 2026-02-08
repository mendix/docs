---
title: "개발"
url: /appstore/creating-content/best-practices/development/
weight: 9
---

## 소개

이 섹션에서는 커넥터 개발을 위한 모범 사례를 살펴봅니다. Java 또는 Mendix를 사용하여 커넥터를 개발할 수 있습니다.

## Java를 사용한 커넥터 개발

Java로 대부분의 기능을 구현하면 다음과 같은 이점이 있습니다: 

* 복잡성이 최종 사용자에게 숨겨져 앱을 더 쉽게 이해할 수 있습니다.     
{{% alert color="info" %}}
Mendix 앱은 비즈니스 요구 사항을 해결하는 데 집중해야 합니다. 일반적인 기술적 구성은 개발자에게 숨겨야 합니다. 현재 Java가 이를 달성하는 가장 좋은 방법입니다. 모듈은 Java 기능에 대한 Java 소스를 제공할 필요가 없습니다. 다른 앱에서 (숨겨진) *.jar*를 만들어 커넥터 모듈의 **user lib**에 넣을 수도 있습니다.
{{% /alert %}}
* 최종 사용자가 변경할 가능성이 적습니다.
* [단위 테스트](/appstore/creating-content/best-practices/testing/#unit-testing)를 사용할 수 있습니다.

### Java로 커넥터 빌드를 위한 앱 설정 확장 {#extend-app-java}

Java 및 Gradle과 함께 작동하도록 앱을 확장할 수 있습니다. 다음 단계를 따르십시오:

1. 다른 앱 폴더 옆에 **Implementation** 폴더를 추가합니다. 

    {{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/implementation-folder.png" class="no-border" >}}

2. **Implementation** 폴더를 Gradle `java-library` 프로젝트로 설정합니다. 자세한 내용은 Gradle 문서의 [Java 라이브러리 빌드 샘플](https://docs.gradle.org/current/samples/sample_building_java_libraries.html#run_the_init_task)을 참조하십시오. 다음은 **Implementation** 폴더의 확장입니다:

    {{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/gradle-library.png" class="no-border" >}}

    **Implementation** 폴더는 이제 독립적인 Gradle 프로젝트입니다. Gradle을 이해하는 모든 IDE에서 열 수 있으며, 원하는 코드로 확장할 수 있습니다.

3. **Implementation** 폴더를 빌드하고 결과 *.jar*를 **userlib** 폴더에 넣습니다. 

    구현에 추가 종속성이 있는 경우, 모든 종속 *.jar* 파일을 포함하는 하나의 `fat jar`를 만드는 것을 고려하십시오.     
{{% alert color="info" %}}
모든 모듈은 **userlib** 폴더에 *.jar* 파일이 있습니다. 이 *.jar*가 커넥터 모듈에서 사용되고 있음을 지정하기 위해 `<jar-file-name>-<modulename>.requiredLib`라는 추가 텍스트 파일을 추가하십시오.
{{% /alert %}}

4. 구현 후, 라이브러리는 **userlib** 폴더에 배치되며 Mendix 애플리케이션 클래스패스에서 사용할 수 있으므로 커넥터 모듈의 Java Action에서 사용할 수 있습니다.

Gradle로 앱을 확장하고 **Implementation** 프로젝트를 서브 모듈로 추가할 수도 있습니다. 이 경우 구현 프로젝트가 Mendix 앱의 일부가 됩니다. *.jar* 파일을 **userlib** 폴더에 복사하지 않고도 Java Action에서 사용할 수 있습니다. 

{{% alert color="warning" %}}
커넥터 모듈을 내보내기 전에 **userlib** 폴더에 *.jar* 파일이 배치되어 있어야 합니다. 그렇지 않으면 **Implementation** *.jar* 파일이 모듈과 함께 패키징되지 않습니다.
{{% /alert %}}

독립적인 Gradle 프로젝트는 다른 Java 프로젝트에서와 마찬가지로 단위 테스트 및 통합 테스트를 수행할 수 있습니다. 모범 사례는 [테스트](/appstore/creating-content/best-practices/testing/)를 참조하십시오.

## Mendix를 사용한 커넥터 개발

Java가 커넥터 모듈을 빌드하기 위한 주요 선택이 될 가능성이 높지만, Mendix를 사용할 수도 있습니다.

### Microflow를 Microflow 또는 Workflow 활동으로 사용 가능하게 만들기

최종 사용자가 Mendix 빌드 로직을 가능한 한 쉽게 재사용할 수 있도록 하려면, Microflow를 Microflow 또는 Workflow 활동으로 사용할 수 있게 만들어야 합니다. 자세한 내용은 *Workflow 기본 기능 수행*의 [Microflow를 통한 Workflow 트리거](/refguide/perform-workflow-basic-functions/#trigger-microflow) 섹션을 참조하십시오.

Microflow 속성의 [Microflow Action으로 노출](/refguide/java-actions/#expose-microflow-action) 섹션에서 **Toolbox**에 Microflow가 표시되도록 하십시오. Microflow 작업 영역을 마우스 오른쪽 버튼으로 클릭하여 수행할 수 있습니다. 또한 Action에 대한 캡션, **Toolbox**의 카테고리 및 아이콘을 지정할 수 있습니다. 이것들은 **Toolbox**와 Microflow에서 사용되므로 최종 사용자가 읽기 쉬워야 합니다.

{{< figure src="/attachments/appstore/create-content/create-connectors/connector-guide-best-practices/microflow-action.png" class="no-border" >}}

[Microflow Action으로 노출](/refguide/java-actions/#expose-microflow-action)한 후, 다른 Microflow 내에서 드래그 앤 드롭할 수 있습니다.

REST API 통합이나 복잡한 데이터 처리가 필요한 기능을 만드는 경우, 모듈의 공개 부분을 비공개 부분에 연결하는 잘 문서화된 Microflow가 있는지 확인하십시오. 이렇게 하면 구현 개발자가 통합의 복잡한 세부 사항을 이해할 필요가 없습니다.

REST API 통합이나 복잡한 데이터 처리가 필요한 기능을 만드는 경우, 모듈의 공개 부분을 비공개 부분에 연결하는 잘 문서화된 Microflow가 있는지 확인하십시오. 이렇게 하면 구현 개발자가 통합의 복잡한 세부 사항을 이해할 필요가 없습니다.

이름과 아이콘에 대해 다음 가이드라인을 따르십시오:

* 카테고리 이름은 유사한 기능을 다루는 카테고리의 이름과 일치해야 합니다.
* Microflow 또는 Workflow 노출 Action의 캡션 이름이 다른 것과 겹치지 않아야 합니다.
* 아이콘은 기능에 대한 즉각적인 인식을 제공해야 합니다. 정사각형이고 16 x 16 픽셀인지 확인하십시오. 이 크기는 매우 작으므로 너무 많은 세부 사항을 추가하지 않도록 하십시오.

### 커넥터 사용 구조화

[메인 커넥터 모듈 설정](/appstore/creating-content/best-practices/app-setup/#main-setup) 섹션에서 설명한 대로, 각 커넥터 빌드에는 모듈을 구현할 때 커넥터 모듈 사용자가 필요한 로직을 노출하는 **UseMe** 폴더가 있습니다. Toolbox에서 Microflow와 Java Action을 노출할 수 있습니다. 이는 사용자가 Microflow와 Java Action을 Microflow 활동 또는 Workflow 시스템 작업으로 사용할 수 있음을 의미합니다. 재사용 가능한 페이지 템플릿도 추가할 수 있습니다.

Microflow와 Java Action을 노출할 때 최종 사용자가 쉽게 찾을 수 있도록 해야 합니다. 예를 들어, 플랫폼 지원 항목에 대해 카테고리, 아이콘 및 이름이 어떻게 나열되는지 살펴보십시오. 입력 매개변수와 전체 Java Action/Microflow에 문서를 추가하십시오. 이것은 Java Action/Microflow 활동을 사용하면서 최종 사용자가 쉽게 액세스할 수 있는 플랫폼의 일부입니다.

페이지 템플릿의 경우, 대표적인 이미지를 사용하고, 모듈 사용에 기반한 의미 있는 카테고리를 정의하며, 템플릿을 쉽게 인식할 수 있는 이름을 지정하십시오.

## 로깅

무언가 잘못되거나 모듈이 일반 출력을 통해 노출할 수 없는 정보를 노출해야 할 때, 로깅이 좋은 옵션입니다. 

커넥터가 Java 코드 또는 Mendix 코드에서 로깅되는 경우 모든 로그 메시지에 대해 하나의 로그 노드를 사용하는지 확인하십시오. 

올바른 로그 수준을 사용하십시오:

* `CRITICAL` – 오류가 애플리케이션의 안정성을 해칩니다.
* `ERROR` – 프로세스가 오류에서 복구할 수 없습니다.
* `WARNING` – 무언가 잘못되었지만, 프로세스는 어쨌든 완료할 수 있습니다.
* `INFO` – 로그 파일에 항상 나타나야 하는 유용한 정보입니다.
* `DEBUG` – 커넥터가 예상대로 작동하지 않는 이유를 사용자가 파악해야 합니다.
* `TRACE` – 구현이 예상대로 작동하지 않는 이유를 파악합니다.

## 데이터 저장

모듈의 기능에 따라 최종 사용자의 애플리케이션에 데이터를 저장해야 할 수 있습니다. 단점은 최종 사용자가 **userlib** 충돌과 같은 문제를 해결하기 위해 모듈을 삭제할 수 있다는 것입니다. 

영속 Entity에 저장되는 데이터 양을 제한하고, 대신 노출된 로직을 통해 데이터를 최종 사용자의 애플리케이션 로직으로 전달하는 것을 권장합니다. 그러면 사용자가 저장하거나 프로세스 중에만 사용할지 결정할 수 있습니다. 

## Task Queue

큰 부하나 볼륨으로 인해 배치 처리되거나 여러 스레드로 분할될 수 있는 Action은 [Task Queue](/refguide/task-queue/)로 오프로드해야 합니다. 이 방법을 사용하면 여러 인스턴스에 걸쳐 여러 스레드에서 동시에 여러 작업을 오프로드할 수 있습니다. 사용자 요청을 기다리지 않고 백그라운드에서 이러한 작업을 실행할 수도 있습니다. 특정 Task Status를 설정하거나 진행 로그를 구현하여 최종 사용자에게 무언가 진행 중임을 알리십시오.

Studio Pro [8.18](/releasenotes/studio-pro/8.18/) 이하를 사용하는 경우 Process Queue 사용을 고려할 수 있습니다. 이러한 기능의 차이점은 *Task Queue*의 [Process Queue 대체](/refguide9/task-queue/#process-queue) 섹션을 참조하십시오.

## ConnectionDetails Entity

모든 일반 연결 및 보안 설정에 대해 **ConnectionDetails** Entity를 사용하십시오. 모든 작업에서 **ConnectionDetails_Get** Microflow를 사용하십시오. 이를 통해 한 곳에서 모든 설정을 쉽게 변경할 수 있습니다. 개별 설정은 상수 또는 데이터베이스에 저장하고 생성 중에 설정할 수 있습니다. 암호화 모듈에 대한 종속성을 방지하므로 상수를 사용하는 것이 권장됩니다.  

{{% alert color="warning" %}} 상수의 기본값 또는 프로젝트의 구성 설정을 사용하는 것은 안전하지 않습니다. 두 곳 모두 다른 사람이 읽을 수 있고 버전 관리에서 볼 수 있습니다. 이러한 설정을 다른 개발자와 공유할 수 있는 경우, 프로젝트 구성에 설정하고 기본값은 비워 두십시오. 이를 통해 모듈을 내보낼 때 실수로 설정을 노출할 위험을 제한합니다.{{% /alert %}}

데이터베이스에 민감한 정보를 저장해야 하는 경우, 항상 [Encryption](/appstore/modules/encryption/) 모듈을 사용하여 정보를 암호화하고 저장하며, 검색하고 복호화하십시오.

## 영속 Entity

가능하면 커넥터 모듈의 영속 Entity에 영속 데이터를 저장하지 마십시오. 개발자는 Java 컴파일 문제를 해결할 때 모듈을 제거할 것입니다. 다시 추가하면 영속 Entity에 저장된 데이터가 손실됩니다. 

비영속 Entity를 사용하고, 커넥터에서 전달된 데이터를 자체 도메인 모델에 저장하는 방법을 사용자가 결정하도록 하는 것이 좋습니다.

## Toolbox Action 및 비영속 Entity(NPE)

Toolbox Action에는 명확한 이름 지정, 일관된 분류 및 문서가 필요합니다.

NPE는 시각적으로 잘 정리되어야 합니다.

## Attribute

모든 Entity Attribute에 대해 다음을 고려하십시오:

* 모든 문자열 값을 무제한으로 설정하십시오.
* 모든 날짜 값을 확인하십시오. 서비스가 날짜만 반환하는 경우(시간 없음) **localize**를 **No**로 설정하십시오.
* 모든 숫자 값(decimal, integer, long)을 확인하고 기본값 0을 제거하십시오.

{{% alert color="info" %}}
SAP HANA 및 Oracle과 같은 데이터베이스는 order by 또는 group by 절에 대해 CLOB를 지원하지 않습니다. 따라서 정렬 또는 group by 작업에 사용되는 Attribute는 무제한으로 설정하면 안 됩니다.
{{% /alert %}}

## 종속성

Mendix 모듈 간에 종속성 관리가 없으므로, 모듈이 다른 모듈에 대한 종속성 수를 최소화하도록 하십시오. 다른 모듈에 의존해야 하는 경우, 해당 모듈이 귀하 또는 Mendix 자체에 의해 잘 유지 관리되는지 확인하십시오. 다른 커뮤니티 지원 모듈을 종속 모듈로 도입하면 모듈을 사용하려는 개발자에게 너무 큰 위험이 될 수 있습니다.

모듈의 모든 종속성은 사용해야 하는 최소 필수 버전을 포함하여 잘 문서화되어야 합니다. 또한 Mendix가 플랫폼 지원 모듈에 사용하는 *.RequiredLib* 파일을 사용하는 것이 권장되며, Gradle과 같은 빌드 스크립트로 가장 잘 처리됩니다. Gradle 작업에 대해 자세히 알아보려면 [Java로 커넥터 빌드를 위한 앱 설정 확장](#extend-app-java)을 참조하십시오.

## IP 보호

[Mendix Partner Program](/appstore/partner-program/) 및 [Mendix Commercial Solution Partner Program](https://www.mendix.com/partners/become-a-partner/isv-program/)의 멤버는 Mendix 도구를 사용하여 지적 재산(IP)을 보호하거나 최종 사용자가 모듈에 포함된 로직을 변경하지 못하도록 할 수 있습니다. 자세한 내용은 [지적 재산 보호 적용](/appstore/creating-content/sol-ip-protection/)을 참조하십시오.

IP를 보호하거나 최종 사용자가 로직을 변경하지 못하게 하는 것이 요구 사항이 아닌 경우, 사용 가능한 Mendix 도구를 사용하여 커넥터를 빌드할 수 있습니다. 오늘날 IP 보호를 원하는 경우 모듈의 민감한 부분을 숨겨진 Java 라이브러리로 구현해야 합니다. 

## 성능 고려 사항

커넥터가 대규모 데이터 세트를 처리할 것이라고 가정하면, 데이터가 어떻게 흐르는지 인식하십시오. 

### 메모리 사용

대규모 데이터 세트를 Mendix 애플리케이션으로 가져올 때, 메모리의 과도한 소비를 방지하기 위해 스트리밍 가능한 형식을 사용하십시오.

### 페이지네이션

NPE를 사용하는 경우 커넥터가 검색한 데이터가 메모리에 로드되므로, 단일 호출로 기본 시스템에서 대량의 데이터를 요청하지 않는 것이 중요합니다. 검색된 데이터의 크기를 제한하거나 페이지네이션하면 Mendix 앱의 성능이 향상됩니다. 검색 결과에 서버 측 페이지네이션을 사용하십시오.

적절한 사용자 경험을 제공하려면, 페이지에 로드되고 렌더링되는 데이터의 양을 제한해야 합니다. 일반적인 페이지 크기는 25개 또는 100개 객체가 권장되며, 데이터셋을 통한 최적화된 탐색을 위한 더 많은 항목 로드, 필터링 또는 검색 옵션이 있습니다.

### Import Mapping (깊은 구조)

Mendix는 재귀 구조에 대한 Import Mapping을 지원하지 않습니다. 데이터가 Mendix Entity로 직렬화될 때 성능 오버헤드가 발생하지 않도록 Import Mapping이 가능하도록 커넥터 도메인 모델을 간소화하는 것을 고려하십시오.

### 캐싱

자주 검색되는 객체에 대한 중복 데이터베이스 Action을 줄이기 위해 캐싱을 사용하십시오.

### Domain Model

커넥터는 도메인 모델을 사용하여 기본 시스템의 데이터를 노출합니다. 적절한 앱 성능을 보장하기 위해 도메인 모델 설계 중에 다음을 고려하십시오:

* 커넥터 도메인 모델에서 기본 소스 시스템의 전체 데이터 모델 복잡성을 노출하지 마십시오. 쉬운 데이터 교환을 위해 구현 개발자의 애플리케이션에서 커넥터를 구현하는 데 관련된 부분만 노출하십시오.
* 커넥터 로직(Java Action 코드 및 Microflow 등)을 가능한 한 가볍게 유지하십시오. 지나치게 복잡한 커넥터 로직은 구현하기가 더 어렵습니다.
* 영속 Entity를 사용하여 상속 및 연관의 수준을 2 이하로 제한하십시오. NPE의 경우 문제가 되지 않으므로 가능한 경우 사용을 고려하십시오.
* 참조 집합(다대다) 연관의 사용을 최소화하십시오. Mendix는 모든 쿼리에서 ID를 검색합니다(목록 검색의 경우 행당). 따라서 많은 참조, 특히 참조 집합은 추가 쿼리를 유발하여 데이터베이스에 추가 부하를 줍니다.
* 관련 있는 곳에 인덱스를 추가하는 것을 고려하십시오. 커넥터의 쿼리 로직 및/또는 구현 앱의 사용 사례에 맞게 의미 있는 방식으로 추가하십시오.
* 영속 Entity가 너무 커지지 않도록 하십시오. 상수를 통해 구성 가능하게 해야 하는 예약 정리 이벤트를 추가하여 이를 수행할 수 있습니다. 예를 들어 한 번에 {x}개의 객체를 제거합니다.
* 추가하는 모듈 역할에 기반한 유연하지만 안전한 Entity 액세스 규칙 세트를 추가하십시오. 커넥터의 사용 사례를 염두에 두십시오. Mendix는 영속 데이터를 피하는 것을 권장합니다. 
