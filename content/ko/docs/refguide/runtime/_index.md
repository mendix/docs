---
title: "Mendix Runtime"
url: /refguide/runtime/
weight: 40
description: "Mendix Runtime에 대한 개요를 제공합니다."
no_list: false
description_list: true
---

## 소개

Mendix Runtime은 [Mendix 모델](/apidocs-mxsdk/mxsdk/mendix-metamodel/)을 해석하고 사용자에게 페이지를 제공하는 인터프리터입니다.

Mendix의 각 [패치 버전](/releasenotes/studio-pro/lts-mts/)에는 해당 버전의 Mendix에서 사용할 수 있는 기능을 구현하는 고유한 버전의 Mendix Runtime이 포함되어 있습니다. 예를 들어, Mendix 8.4.1과 8.4.2의 Runtime은 서로 다르며 해당 버전용으로 빌드된 Mendix 앱만 실행할 수 있습니다.

## Runtime 개요

Mendix Runtime은 [Runtime Server](/refguide/runtime-server/)와 [Mendix Client](/refguide/mendix-client/) 두 부분으로 구성됩니다. 이 두 부분의 관계는 아래 다이어그램에 나와 있습니다.

{{< figure src="/attachments/refguide/runtime/runtime-overview.png" alt="An overview of the Mendix Runtime" class="no-border" >}}

Mendix Runtime의 각 구성 요소는 아래에서 설명합니다.

### Runtime Server와 Mendix Client

*Runtime Server*는 클라우드 플랫폼에서 실행됩니다. Microflow를 실행하고 파일, 관계형 데이터베이스 및 기타 필요한 서비스에 연결합니다. Mendix Client의 연결을 기다립니다. Runtime Server에 대한 자세한 내용은 [Runtime Server](/refguide/runtime-server/)를 참조하십시오.

*Mendix Client*는 웹 브라우저 또는 기타 지원 장치에서 사용자가 시작합니다. 온라인 모드인 경우 인증이 필요하거나 필요하지 않은 Runtime Server와의 세션을 시작합니다. Runtime Server는 세션 세부 정보를 데이터베이스에 기록하여 Mendix Client가 요청을 할 수 있도록 합니다. Mendix Client에 대한 자세한 내용은 [Mendix Client](/refguide/mendix-client/)를 참조하십시오.

사용자는 Mendix Client와 상호 작용하며, Mendix Client는 [Request Handler](/refguide/request-handlers/)를 통해 Runtime Server에 데이터 처리 또는 서버 측 기능(예: Microflow 실행) 요청을 보냅니다. 요청이 끝나면 커밋되지 않은 데이터를 포함한 모든 상태가 Mendix Client로 다시 전달됩니다. 이 통신이 어떻게 이루어지는지에 대한 자세한 내용은 [Mendix Runtime의 통신 패턴](/refguide/communication-patterns/)을 참조하십시오.

Runtime Server에서 Mendix Client로 상태를 전달하면 Runtime Server가 상태 비저장(stateless)이 되어 모든 Runtime Server 인스턴스가 Mendix Client의 요청에 응답할 수 있습니다. 로드 밸런서가 어떤 Runtime Server 인스턴스가 요청에 응답할지 결정합니다. 사용자 세션이 종료되면 Runtime Server는 해당 세션에 대한 참조를 제거합니다.

앱의 인스턴스가 두 개 이상인 경우 인스턴스 중 하나가 *클러스터 리더*입니다. 이 인스턴스는 데이터베이스 동기화 작업을 수행하는 역할을 합니다. 또한 모든 노드에서 수행할 수 있는 여러 클러스터 관리 활동을 스케줄링합니다. 여기에는 다음이 포함됩니다:

* 세션 정리 처리
* 클러스터 노드 만료 처리
* 백그라운드 작업 만료 처리
* 차단된 사용자 차단 해제
* 예약된 이벤트 실행
* 새 배포 후 영구 세션 지우기

다중 인스턴스에 대한 자세한 정보는 [클러스터된 Mendix Runtime](/refguide/clustered-mendix-runtime/)을 참조하십시오.

### 외부 서비스

외부 서비스는 Mendix 앱 외부에서 데이터 및 기타 기능을 제공합니다. SAP와 같은 외부 데이터 소스, Google Maps와 같은 외부 표시 위젯, 또는 IBM Watson 머신 러닝과 같은 외부 데이터 처리가 될 수 있습니다. Runtime Server는 HTTP(또는 HTTPS) 연결을 통해 이러한 서비스와 통신합니다.

### 인프라

Mendix 앱이 배포되는 하드웨어입니다. 일반적으로 퍼블릭 또는 프라이빗 클라우드에서 가상 머신을 제공하는 IaaS(Infrastructure as a Service)로 제공됩니다. 그러나 인프라는 온프레미스에서 실행되는 물리적 머신일 수도 있습니다. 인프라의 예로는 Amazon Web Services(AWS), Microsoft Azure 또는 Windows Server 머신이 있습니다.

### 파일

앱에서 사용하는 데이터 파일의 저장 위치입니다. 더 구체적으로, 크기 및 성능 제한을 피하기 위해 데이터베이스 외부에 저장되는 바이너리 객체인 이미지를 포함한 FileDocument 객체의 값을 포함합니다.

### 관계형 데이터베이스

앱의 도메인 모델에 정의된 객체를 보관하는 데이터베이스(또는 때로는 공유 데이터베이스의 스키마)입니다.

### 플랫폼

Mendix 앱이 실행되는 운영 체제와 앱에 바인딩된 데이터베이스와 같은 추가 서비스입니다.

### 인스턴스

앱 컨테이너라고도 하며, Runtime Server를 시작하고 노출합니다. 최소한 하나의 인스턴스가 있어야 하지만, 고가용성과 더 나은 성능을 제공하기 위해 여러 인스턴스가 있을 수 있습니다.

### 로드 밸런서

로드 밸런서는 Mendix Client로부터 들어오는 요청을 받아 Runtime Server 인스턴스로 전달합니다. 요청이 서로 다른 인스턴스에 균등하게 분배되도록 하여 부하를 분산합니다.

Mendix Client는 HTTPS를 사용하여 로드 밸런서와 통신합니다. 로드 밸런서의 서버 측에서 환경 인스턴스로의 통신은 HTTP를 사용하여 수행됩니다.

### 정적 콘텐츠

모든 Mendix 앱은 브라우저에서 Mendix Client를 로드하기 위해 정적 콘텐츠를 제공해야 합니다. 여기에는 Mendix Client를 시작하는 데 필요한 스크립트, 앱의 테마를 정의하는 CSS 파일, 클라이언트 측 로직을 정의하는 JavaScript 파일이 포함됩니다.

## 라이선싱

프로덕션 모드에서 애플리케이션을 실행하려면 라이선스가 필요합니다. 라이선스가 없으면 Runtime Server는 몇 시간 후에 슬립 모드로 전환됩니다. Mendix 앱 라이선싱에 대한 정보는 [앱 라이선싱](/developerportal/deploy/licensing-apps-outside-mxcloud/)을 참조하십시오.

## API

Java 액션을 작성하여 Runtime Server의 기능을 확장할 수 있습니다. 자세한 내용은 [Mendix Runtime API](/apidocs-mxsdk/apidocs/runtime-api-11/)를 참조하십시오.

{{% alert color="info" %}}
앱에 게시된 서비스가 포함되어 있는 경우, [게시된 REST 서비스](/refguide/published-rest-services/)용 [OpenAPI 문서](/refguide/open-api/), [게시된 OData/GraphQL 서비스](/refguide/published-odata-services/)에 대한 링크, [게시된 웹 서비스](/refguide/published-web-services/)용 WSDL과 같은 사용 가능한 API 문서에 대한 링크가 URL 경로 `/api-doc`(예: `https://myapp.mendixcloud.com/api-doc/`)에서 제공됩니다.
{{% /alert %}}

## 이 카테고리의 문서
