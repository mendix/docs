---
title: "커넥터 만들기"
url: /appstore/creating-content/connector-guide-build/
weight: 4
description: "커넥터의 개념, 작동 방식 및 커넥터를 빌드하고 게시하기 위한 기본 단계를 소개합니다."
---

## 소개

Mendix 커넥터를 사용하면 Mendix 애플리케이션을 다른 시스템에 연결할 수 있습니다. [Mendix Marketplace](https://marketplace.mendix.com/)에서 찾거나 다른 사용자가 사용할 수 있도록 Marketplace에 추가할 수 있습니다. 

이 사용 방법 가이드에서는 다음을 배웁니다:

* 커넥터란 무엇이며 어떻게 작동하는지
* 커넥터를 빌드하고 게시하기 위한 기본 단계

{{% alert color="info" %}}
심층적인 지침과 모범 사례는 [커넥터 만들기 모범 사례](/appstore/creating-content/connector-guide-best-practices/)를 참조하십시오.
{{% /alert %}}

### 사전 요구 사항

이 사용 방법 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* [Mendix Connector Kit 소개](https://www.mendix.com/blog/introducing-mendix-connector-kit/) 블로그 게시물을 읽으십시오.
* [Marketplace 콘텐츠 공유 방법](/appstore/submit-content/)을 읽으십시오.
* [통합](https://www.mendix.com/evaluation-guide/app-capabilities/integration/)에 대한 평가 가이드 페이지를 읽으십시오.
* [Java로 Microflow Action 빌드하는 방법](/howto/extensibility/howto-connector-kit/)을 읽으십시오. 
* [Mendix 커넥터 빌드](https://www.youtube.com/watch?v=wTQJ1MiXAow) 튜토리얼을 시청하십시오.
* Studio Pro를 설치하십시오.

## 커넥터 정의

커넥터는 앱에서 기존 타사 시스템 또는 다른 Mendix 애플리케이션에 대한 연결을 간소화하는 데 사용할 수 있습니다. 

### 다른 시스템에 연결

커넥터는 다른 시스템에 연결하는 데 중점을 둔 Mendix 모듈로 구현됩니다. [SOAP](/refguide/consumed-web-services/#soap), [REST](/refguide/integration/rest-services/), [OData](/refguide/consumed-odata-services/#external-entities) 또는 [Catalog](/catalog/)와 같은 플랫폼 지원 프로토콜을 사용할 수 있습니다. 

커넥터는 다른 시스템이 제공하는 Java 라이브러리를 패키징하여 연결할 수도 있습니다. 이러한 Java 라이브러리 기능은 Java Action을 통해 [사용자 지정 Microflow 활동](/howto/extensibility/howto-connector-kit/)으로 노출될 수 있습니다. 이를 통해 타사 통합에 대한 심층적인 지식이 없는 Mendix 개발자도 비즈니스 로직에서 이러한 커넥터를 더 쉽게 사용할 수 있습니다.

#### Mendix 앱을 Mendix 앱에 연결  

다음 표는 Mendix 앱을 다른 Mendix 앱에 연결하려는 경우 사용할 수 있는 솔루션을 보여줍니다:

| 카테고리 | 솔루션 |
| --- | --- |
| 플랫폼 지원 프로토콜 | 플랫폼 지원 기능을 사용하여 두 개 이상의 Mendix 애플리케이션을 연결합니다:<br> <ul><li>SOAP 웹 서비스 ([Published Web Services](/refguide/published-web-services/) 및 [Consumed Web Services](/refguide/consumed-web-services/) 참조)</li> <li>REST 웹 서비스 ([Published REST Services](/refguide/published-rest-service/) 및 [Consumed REST Service](/refguide/consumed-rest-service/) 참조)</li> <li>OData ([Published OData Services](/refguide/published-odata-services/) 및 [Consumed OData Services](/refguide/consumed-odata-services/) 참조)</li> <li>Catalog ([Catalog 가이드](/catalog/) 참조)</li></ul> | 
| 지원되지 않는 프로토콜   | 대안적인 프로토콜이나 플랫폼 지원 프로토콜 중 하나를 캡슐화하여 연결하는 모듈을 빌드합니다. [Java Action](/refguide/java-actions/) 또는 [JavaScript Action](/refguide/javascript-actions/)을 사용하여 수행할 수 있습니다.  | 

#### Mendix 앱을 타사 시스템에 연결  

다음 표는 Mendix 앱을 타사 시스템에 연결하려는 경우 사용할 수 있는 솔루션을 보여줍니다:

| 카테고리 | 솔루션 |
| --- | --- |
| 플랫폼 지원 프로토콜 | 플랫폼 지원 기능을 사용하여 Mendix 애플리케이션을 하나 이상의 타사 애플리케이션에 연결합니다: <ul><li>SOAP 웹 서비스</li> <li>REST 웹 서비스</li> <li>OData</li></ul>       | 
| eQube 지원 프로토콜   | eQube 지원 기능을 사용합니다: <ul><li>웹 서비스</li> <li>REST</li> <li>OData</li></ul> | 
| 지원되지 않는 프로토콜   | 대안적인 프로토콜이나 플랫폼 지원 프로토콜 중 하나를 캡슐화하여 연결하는 모듈을 빌드합니다. |

{{% alert color="info" %}}
[Catalog](/catalog/)는 조직에서 제공하는 공유 등록 자산의 허브입니다. 현재 OData, REST 및 Business Events를 지원합니다.
{{% /alert %}}

### Mendix 커넥터 가져오기

많은 기존 Mendix 커넥터를 [Mendix Marketplace](https://marketplace.mendix.com/)에서 앱으로 직접 다운로드할 수 있습니다. 사용 사례에 따라 회사의 비공개 Mendix Marketplace에도 다양한 Mendix 커넥터 모듈이 제공될 수 있습니다. 공개 및 비공개 Marketplace 콘텐츠의 차이점에 대한 자세한 내용은 *Marketplace에 업로드하기*의 [새 Marketplace 콘텐츠 추가](/appstore/submit-content/#adding) 섹션을 참조하십시오.

커넥터는 사용자 지정 Microflow 활동을 통해 데이터를 노출합니다. 따라서 애플리케이션 로직을 빌드할 때 Studio Pro [Toolbox](/refguide/view-menu/#toolbox)에서 찾아 구현할 수 있습니다. 그런 다음 커넥터 기능을 사용하려는 곳으로 드래그할 수 있습니다.

### 커넥터 배포

애플리케이션을 배포하면 커넥터가 자동으로 함께 배포됩니다. 몇 가지 런타임 또는 노드별 구성(애플리케이션 인터페이스 또는 상수를 통해)을 설정할 수도 있습니다.

예를 들어 [Amazon SNS](/appstore/modules/aws/amazon-sqs/) 커넥터를 확인하십시오. 이 커넥터는 AWS 제공 라이브러리를 사용하여 Amazon Simple Notification Service와 상호 작용합니다. 기능은 로직에서 사용할 수 있도록 Toolbox에서 사용 가능한 일련의 Mendix Action을 통해 노출됩니다.

## Studio Pro에서 Mendix 커넥터 빌드 {#build-connector}

새 Mendix 커넥터를 만들 때, 커넥터를 개발하고 테스트하는 앱을 갖는 것이 좋습니다. 이는 모든 커넥터 로직을 포함하는 모듈과 테스트 및 개발을 지원하는 하나 이상의 추가 모듈이 있음을 의미합니다. 추가 모듈의 로직은 메인 모듈이 작동하는 데 필요하지 않으므로 분리해야 합니다.

### 앱 설정 {#app-setup}

앱 설정을 시작하려면 Studio Pro를 열고 다음을 수행하십시오:

1. 커넥터를 위한 [새 앱](/refguide/new-app/)을 만듭니다.
2. 커넥터를 포함할 모듈을 만듭니다. 이를 위해 **App Explorer**에서 기존 모듈 외부 아무 곳이나 마우스 오른쪽 버튼으로 클릭하고 **Add Module**을 선택합니다.
3. 빌드하려는 커넥터 유형에 적합한 이름을 모듈에 지정합니다.
4. 루트 수준에서 기본 폴더 구조를 만듭니다. 

자세한 내용은 [앱 설정](/appstore/creating-content/best-practices/app-setup/)을 참조하십시오.

### 커넥터 구현 {#implement}

커넥터를 구현하는 방법은 전적으로 귀하와 사용 사례에 달려 있지만, 다음 사항을 염두에 두는 것이 좋습니다:

* 구현 애플리케이션에서 사용할 부분을 문서화하십시오.
* 구현 애플리케이션이 커넥터를 안전하게 사용할 수 있는 세분화된 보안 모델을 제공하십시오.
* 복잡한 부분을 숨기십시오. 가급적 Java 코드에, 또는 최소한 비공개 폴더에 숨기십시오. 
* Mendix 모듈에 지적 재산(IP) 보호를 적용하십시오. 자세한 내용은 [지적 재산 보호 적용](/appstore/creating-content/sol-ip-protection/)을 참조하십시오.
* 잘 유지 관리되는 쉽게 사용할 수 있는 라이브러리/모듈에 대한 종속성을 최소화하십시오. 가능하면 종속성을 사용하지 마십시오.
* 모든 핵심 코드를 커넥터 모듈에 포함하십시오. 개발이나 테스트를 지원하는 모든 것은 커넥터 모듈을 사용하는 별도의 모듈에 있어야 하며, 그 반대가 되어서는 안 됩니다.
* 커넥터를 테스트하십시오.

### 커넥터 내보내기 {#export}

Mendix 커넥터는 다른 Mendix [모듈](/appstore/modules/)과 같으므로 앱에서 내보낼 수 있습니다. 커넥터 모듈을 내보내면 다음도 함께 내보내집니다:

* Entity
* Microflow
* 페이지
* Java Action
* 테마 (**themesource** 폴더에서) *[Mendix Studio Pro 9 이상에서만]*
* 지정된 사용자 라이브러리 파일 (**userlibs** 폴더에서)
* 지정된 리소스 파일 (**resources** 폴더에서)
* 지정된 관련 Java 파일 (**javasource** 폴더의 모듈 하위 폴더에서)

#### .mpk 파일로 내보내기{#export-as-mpk}

커넥터를 *.mpk* 파일로 내보내려면 다음을 수행하십시오:

1. 버전이 Marketplace에 나타나는 버전 번호와 일치하는지 확인하십시오. Marketplace의 버전 관리는 1.0.0에서 시작합니다(자세한 내용은 *Marketplace에 업로드하기*의 [새 Marketplace 콘텐츠 추가](/appstore/submit-content/#adding) 섹션을 참조하십시오). 버전이 1.0.0 미만이면 Marketplace를 사용하여 커넥터를 배포할 수 없습니다.
2. [Gradle 스크립트](https://github.com/ako/CsvServices/blob/cd219e71249c194bca26b374716b88628237a6dd/build.gradle#L72)를 사용하여 내보내기 모듈 패키지를 생성합니다.
3. 버전 관리와 함께 릴리스 후보를 빌드 및 내보내고 Marketplace **DIST** 폴더에 넣습니다. 이 폴더를 만들어 모듈의 릴리스를 참조용으로 포함할 수 있습니다.

### 커넥터 배포 {#distribute}

다른 개발자 및 더 넓은 커뮤니티와 커넥터를 공유하려면 Mendix Marketplace에 게시할 수 있습니다. 모든 사용자 또는 회사에만 게시하도록 선택할 수 있습니다. 회사에만 게시하도록 선택하면 같은 회사에 속한 다른 개발자만 사용할 수 있습니다. Marketplace에 게시하는 방법과 공개 및 비공개 게시의 차이점에 대한 자세한 내용은 *Marketplace에 업로드하기*의 [새 Marketplace 콘텐츠 추가](/appstore/submit-content/#adding) 섹션을 참조하십시오.

커넥터를 게시하고 누군가가 Mendix 앱에 가져오면, 이 모든 요소가 내보낸 것과 동일한 위치에 배치됩니다.

파일을 공유하거나 Marketplace에 업로드하여 사용하려는 사람에게 모듈을 배포할 수 있습니다. 다음 단계를 따르십시오: 

1. 릴리스 노트를 준비합니다.
2. 다음을 수행하여 GitHub에 배포합니다:

    1. 코드를 GitHub에 커밋합니다(아직 Git 프로젝트로 만들지 않은 경우).
    2. 새 릴리스를 만듭니다.
3. GitHub의 릴리스를 사용하여 Marketplace에서 릴리스를 만듭니다.

### 아키텍처적 영향

커넥터는 모듈로 내보내진 다음 Marketplace에 게시됩니다. 이러한 이유로 개발 애플리케이션에서 가능한 한 분리됩니다. 사용자가 Marketplace에서 모듈을 다운로드하면 다른 애플리케이션에 모듈의 복사본이 가져와지기 때문에 필요합니다. 구현 애플리케이션은 일부 상수를 구성하거나, 특정 Microflow를 추가하거나, 페이지나 스니펫을 사용하거나, 런타임에서 특정 사항을 구성해야 할 수 있지만, 항상 독립적인 상황입니다.

## 더 읽어보기

* [Marketplace에 업로드하기](/appstore/submit-content/)
* [커넥터 만들기 모범 사례](/appstore/creating-content/connector-guide-best-practices/)
* [OData Services](/refguide/integration/odata-services/)를 사용하여 타사 서비스 커넥터를 빌드하는 방법에 대해 자세히 알아보기
