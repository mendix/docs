---
title: "적응성을 위한 모범 사례"
url: /appstore/creating-content/sol-adaptability-best-practices/
linktitle: "적응성을 위한 모범 사례"
weight: 3
description: "조정을 위한 Solution 만들기 모범 사례"
---

## Domain Model

다음 섹션에서는 Solution의 Domain Model에 대한 모범 사례를 설명합니다.

### 데이터 모델 코어를 정의하는 Solution Module

안정성을 보장하기 위해 대부분의 데이터 모델을 Solution 모듈 내에 정의하는 것을 권장합니다. 이를 통해 게시자가 제공하는 Entity, Attribute 및 Association과 구현 중에 추가되는 것 사이의 명확한 분리를 유지하는 데 도움이 됩니다. 또한 모든 고객 인스턴스를 고려하지 않고도 내부 리팩토링이 가능합니다.

### 확장 Entity를 통한 확장 (컴포지션 패턴 또는 특수화)

일반적으로 Mendix는 코어 Entity가 소유하는 1:N 또는 1:1 관계를 가진 별도의 확장 Entity를 사용하는 것을 권장합니다. 이를 통해 구현 중에 추가 Attribute 및 Association을 추가할 수 있습니다. 별도의 Entity를 사용하면 대규모 데이터 마이그레이션 없이 확장 기능을 도입하거나 제거할 수도 있습니다. 

특수화(Specialization)를 사용할 수도 있습니다. Mendix는 컴포지션 패턴이 요구를 해결하지 못하는 경우 대안으로 고려할 것을 권장합니다.  

다음 표는 컴포지션 패턴과 특수화의 주요 차이점을 설명합니다:

| 기능 | 컴포지션 | 특수화 |
| --- | --- | --- |
| **데이터 변경 없이 적용 용이** | 예, 새 확장 객체를 만들어 이미 존재하는 코어 객체에 연결할 수 있습니다. | 아니오, Entity/특수화 유형을 변경하려면 객체를 다시 만들어야 합니다. |
| **보안에 대한 유연성** | 코어와 확장은 자체 보안 규칙을 가집니다. 코어 규칙은 재정의할 수 없습니다. | 특수화는 Solution 모듈 내에 정의된 Entity에 대해서도 보안 규칙을 재정의할 수 있습니다. |
| **여러 확장 버전** (예: `Vehicle`이 `Car`와 `Train` 모두 됨) | 설정이 복잡할 수 있습니다. | 더 적합합니다. |
| **오프라인 동기화** | 완전히 지원됩니다. | 제한 사항이 적용됩니다. 자세한 내용은 [오프라인 모범 사례](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/best-practices/#inheritance)를 참조하십시오. |

### 예제

다음은 예제입니다:

{{< figure src="/attachments/appstore/create-content/create-solutions/sol-adapt/sol-adaptability-best-practices/adaptability-domain-model-example.png" alt="Example of data model extensions"  class="no-border" >}}

이 예제에서는 다음과 같은 세부 사항이 적용됩니다:

* **Company**는 권장되는 접근 방식이고 재고려할 요구 사항이 없으므로 컴포지션을 통해 확장됩니다. **AccountManager**와 같은 추가 Entity를 만들어 연결할 수 있습니다.
* **Vehicle**은 모든 고객이 자동차, 기차 등 여러 차량 유형을 가질 수 있으므로 특수화를 통해 확장됩니다.
* **Task**는 모든 고객이 Entity 액세스에 대해 매우 고유한 요구 사항을 가지고 있으므로 특수화를 통해 확장됩니다.
* **Logo**는 확장할 수 없습니다.

## 로직의 일부를 조정 가능하게 만들기

Microflow, Nanoflow 및 Workflow인 로직을 오픈 애플리케이션 모듈에 문서를 배치하여 조정 가능하게 만들 수 있습니다. 서브 플로우를 사용하면 전체 흐름을 조정할 수 있는지 또는 특정 부분만 조정할 수 있는지 결정할 수 있습니다.

| 목적 | 호출 플로우 | 호출되는 (서브-)플로우 |
| --- | --- | --- |
| (재)사용 가능한 코어 로직을 (재사용 가능한) Microflow로 분할 | Solution 모듈 (사용 가능) | 오픈 애플리케이션 모듈 |
| 숨겨진 코어 로직의 일부를 조정 가능하게 만들기 | Solution 모듈 (숨김) | 오픈 애플리케이션 모듈 |
| (재)사용 가능한 코어의 일부를 조정 가능하게 만들기 | Solution 모듈 (사용 가능) | 오픈 애플리케이션 모듈 |
| 조정 가능한 Microflow에서 코어 로직 재사용 | 오픈 애플리케이션 모듈  | Solution 모듈 (사용 가능) |
| 조정 가능한 Microflow 분할 | 오픈 애플리케이션 모듈  | 오픈 애플리케이션 모듈 (새로 만든 플로우) |

{{% alert color="info" %}}
모든 문서 유형이 Solution 모듈의 일부가 될 수 있지만, Nanoflow, Microflow 및 Java Action만 사용 가능하게 만들 수 있습니다.
{{% /alert %}}

## 조정 가능한 UI 만들기

Microflow에 사용할 수 있는 동일한 패턴을 페이지를 조정 가능하거나 부분적으로 조정 가능하게 만드는 데 사용할 수 있습니다. 이를 위해 숨길 수도 있는 페이지, 편집 가능한 레이아웃 및 스니펫의 조합을 사용할 수 있습니다.

| 객체 | 오픈 앱 모듈/UI 리소스 모듈 | Solution 모듈 |
| --- | --- | --- | 
| **페이지** | 조정 가능한 페이지. | 코어 페이지는 Microflow 및 Nanoflow를 통해 숨기고 호출할 수 있습니다. |
| **스니펫** | UI의 일부 또는 전체 UI를 조정 가능하게 만듭니다. | 코어 스니펫은 숨겨진 코어 페이지에서 재사용하기 위한 것이면 숨길 수 있습니다. |
| **레이아웃** | 애플리케이션의 메인 레이아웃. 고객이 모든 (조정 가능하고 숨겨진) 페이지의 레이아웃을 변경할 수 있도록 Solution별 [마스터 레이아웃](/refguide/layout/#master-layout)을 사용하십시오. | 코어 레이아웃은 숨기고 조정 가능한 마스터 레이아웃을 사용할 수 있습니다. |
| **빌딩 블록** | 조정 중에 사용될 빌딩 블록은 오픈 모듈에 있어야 합니다. | 코어 Solution 개발 중에 사용되는 빌딩 블록은 숨길 수 있습니다. |
| **SASS 파일** | 앱의 테마와 룩 앤 필을 정의합니다. | SASS 정의를 지원하지 않습니다. 기존 테마 및 디자인 속성의 사용과 추가 스타일링은 인라인 스타일링을 통해서만 수행할 수 있습니다. |

{{% alert color="info" %}}
앱 제목, 파비콘 및 로그인 페이지는 앱 수준에 있으므로 항상 조정 가능합니다.
{{% /alert %}}

### 계단식 테마 모듈

Solution 개발의 경우 Mendix는 테마 모듈에 계층적 접근 방식을 사용하여 가능한 한 조정 가능하게 만들 것을 권장합니다.  

자세한 내용은 SASS 파일을 구조화하는 방법에 대한 세부 사항을 포함하는 [적응 가능한 Solution 브랜딩](https://academy.mendix.com/link/paths/130/Brand-your-Adaptive-Solution) 학습 경로를 참조하십시오.

여러 적응 가능한 Solution을 유지 관리하는 ISV는 다음과 같이 테마 모듈을 구성할 수 있습니다:

| 모듈 | 구현 주체 | 공유 대상 | 목적 |
| --- | --- | --- | --- |
| Atlas Core | Mendix | 모든 ISV Solution 및 고객 구현 | 모든 Mendix 앱의 기반 |
| ISV 테마 | ISV (공유 UX 팀) | 모든 ISV Solution 및 고객 구현 | 기본 ISV 테마 포함 |
| ISV Solution별 | ISV (Solution R&D 팀) | 특정 ISV Solution의 모든 고객 구현 | 개별 Solution을 위한 추가 스타일링 |
| 고객 테마 | 고객 구현 팀 | ISV의 모든 Solution의 모든 고객 구현 | ISV별 로직을 고객에 맞게 재정의(예: 색상 팔레트 및 타이포그래피) |
| 고객 앱별 | 고객 구현 팀 | ISV의 특정 Solution의 고객 구현 | 특정 고객 인스턴스의 스타일링 재정의 |

{{% alert color="info" %}}
단일 Solution을 가진 ISV의 경우, 이를 세 개의 모듈로 줄일 수 있습니다: 

* Atlas Core
* ISV 테마
* 고객 테마
{{% /alert %}}

일반적으로 Mendix는 사용되는 디자인 시스템에 대해 명시적이고 관련 빌딩 블록을 만들 것을 권장합니다. 이를 통해 조정 및 코어 UI 전반에 걸쳐 일관된 룩 앤 필을 유지할 수 있습니다.

## 상수(Constants) 사용

사용 가능한 상수의 기본값은 구현 시 재정의할 수 없지만, [Mendix Runtime 설정](/developerportal/deploy/environments-details/#constants)을 사용하여 로컬 Studio Pro 값을 변경할 수 있습니다. 숨겨진 상수를 포함한 상수는 환경 설정의 일부로 항상 구성할 수 있습니다.

자세한 내용은 *Studio Pro 가이드*의 [상수 기본값](/refguide/constants/#default-value)을 참조하십시오.

## 구현 번역 및 용어 구현

구현 중에 애플리케이션을 번역 가능하게 만들려면 번역 가능한 모든 문서가 오픈 애플리케이션 모듈에 저장되어야 합니다. [일괄 번역](/refguide/batch-translate/) 및 [일괄 교체](/refguide/batch-replace/) 기능을 사용하면 구현 중에 텍스트를 번역하거나 업데이트할 수 있습니다. 예를 들어 "Asset"과 같은 기본 개념을 "Car"와 같은 고객별 단어로 변경하여 용어를 구현하는 데 사용할 수 있습니다.

{{% alert color="info" %}}
보호된 콘텐츠는 잠겨 있으므로 조정 가능한 콘텐츠만 번역할 수 있습니다.
{{% /alert %}}

변수는 쉽게 번역할 수 없으며, 보호된 Microflow에서 텍스트를 변경할 수도 없습니다. 잠겨 있기 때문입니다. 해결 방법으로, [getCaption](/refguide/enumerations-in-expressions/#getCaption) 함수와 결합된 편집 가능한 Enumeration을 국제화 맵으로 사용하는 것을 고려하십시오. 

## Java 소스 코드 보호

Java Action에서 내보내기 수준을 **Hidden**으로 설정하면 일반 모듈과 동일한 경로의 앱 디렉토리에서 Action이 언팩되지 않습니다. Java 코드는 패키지에 넣어지지만, 난독화나 다른 보안 조치는 수행되지 않습니다. 이는 패키지를 리버스 엔지니어링하면 소스 코드가 드러남을 의미합니다.

Mendix는 Java 파일의 지적 재산을 더 보호하기 위한 기능을 제공하지 않습니다. 소스 코드를 난독화하는 것과 같은 추가 보호를 위해서는 다른 소프트웨어를 사용하는 것을 권장합니다.

## 더 읽어보기

* [올바른 컴포넌트 사용](https://academy.mendix.com/link/modules/510/lectures/4050/2.1-Using-the-Right-Components)
