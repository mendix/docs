---
title: "Mendix Runtime"
url: /refguide8/runtime/
weight: 40
no_list: false
description_list: true 
---

## 소개

Mendix Runtime은 Mendix 모델을 "실행"하고 사용자에게 페이지를 제공하는 인터프리터입니다.

Mendix의 각 패치 버전에는 해당 버전에서 사용할 수 있는 기능을 구현하는 고유한 Runtime 버전이 포함됩니다. 예를 들어, Mendix 8.4.1과 8.4.2의 Runtime은 서로 다르며, 해당 버전용으로 빌드된 Mendix 앱만 실행할 수 있습니다.

## Runtime 개요

Mendix Runtime은 [Runtime Server](/refguide8/runtime-server/)와 [Mendix Client](/refguide8/mendix-client/) 두 부분으로 구성됩니다. 두 부분 간의 관계는 아래 차트에 표시되어 있습니다.

Runtime Server는 클라우드 플랫폼에서 실행되며, Microflow를 실행하고 파일, 관계형 데이터베이스 및 기타 필요한 서비스에 연결합니다. Mendix Client의 연결을 기다립니다. Runtime Server에 대한 자세한 내용은 [Runtime Server](/refguide8/runtime-server/)를 참조하십시오.

Mendix Client는 최종 사용자가 시작합니다. 웹 브라우저나 기타 지원되는 디바이스에서 시작할 수 있습니다. 온라인 모드에서는 Runtime Server와의 세션을 시작하며, 인증이 필요할 수도 있고 필요하지 않을 수도 있습니다. Runtime Server는 세션 세부 정보를 데이터베이스에 기록하여 Mendix Client가 요청을 수행할 수 있도록 합니다. Mendix Client에 대한 자세한 내용은 [Mendix Client](/refguide8/mendix-client/)를 참조하십시오.

최종 사용자는 Mendix Client와 상호 작용하며, Mendix Client는 데이터를 처리하거나 서버 측 기능(예: Microflow)을 수행하기 위해 Runtime Server에 요청을 보냅니다. 요청이 끝나면 커밋되지 않은 데이터를 포함한 모든 상태가 Mendix Client에 다시 전달됩니다. 이 통신이 어떻게 이루어지는지에 대한 자세한 내용은 [Mendix Runtime의 통신 패턴](/refguide8/communication-patterns/)에서 확인할 수 있습니다.

Runtime Server에서 Mendix Client로 상태를 전달하면 Runtime Server가 상태 비저장(Stateless) 방식이 되어, 어떤 Runtime Server 인스턴스든 Mendix Client의 요청에 응답할 수 있습니다. 로드 밸런서가 어떤 Runtime Server 인스턴스가 요청에 응답할지 결정합니다. 최종 사용자의 세션이 종료되면 Runtime Server는 해당 세션에 대한 참조를 제거합니다.

앱의 인스턴스가 둘 이상인 경우, 인스턴스 중 하나가 *Cluster Leader*가 됩니다. 해당 인스턴스의 Runtime Server는 쉽게 분산할 수 없는 여러 활동을 담당합니다. 여기에는 다음이 포함됩니다:

* 세션 정리 처리
* 클러스터 노드 만료 처리
* 백그라운드 작업 만료 처리
* 차단된 사용자 해제
* Scheduled Event 실행
* 데이터베이스 동기화 작업 수행
* 새 배포 후 영구 세션 제거

다중 인스턴스에 대한 자세한 정보는 [클러스터형 Mendix Runtime](/refguide8/clustered-mendix-runtime/)에서 확인할 수 있습니다.

{{< figure src="/attachments/refguide8/runtime/runtime-overview.png" alt="An overview of the Mendix Runtime" class="no-border" >}}

차트의 각 구성 요소에 대한 설명은 아래와 같습니다:

### 외부 서비스

외부 서비스는 Mendix 앱 외부에서 데이터 및 기타 기능을 제공합니다. SAP과 같은 외부 데이터 소스, Google Maps와 같은 외부 디스플레이 위젯, IBM Watson 머신러닝과 같은 외부 데이터 처리가 이에 해당합니다. Runtime Server는 HTTP(S) 연결을 통해 이들과 통신합니다.

### 인프라스트럭처

Mendix 앱이 배포될 하드웨어입니다. 일반적으로 퍼블릭 또는 프라이빗 클라우드에서 가상 머신을 제공하는 IaaS(Infrastructure as a Service) 형태로 제공됩니다. 그러나 온프레미스에서 실행되는 물리적 머신일 수도 있습니다. Amazon Web Services(AWS), Microsoft Azure 또는 Windows Server 머신이 인프라의 예입니다.

### 파일

앱에서 사용하는 데이터의 일부인 파일이 저장되는 곳입니다. 특히 이미지를 포함한 *FileDocument* 객체의 값을 포함하며, 이는 크기 및 성능 제한을 피하기 위해 데이터베이스 외부에 저장되는 바이너리 객체입니다.

### 관계형 데이터베이스

앱의 Domain Model에 정의된 객체를 보관하는 데이터베이스(또는 공유 데이터베이스의 스키마)입니다.

### 플랫폼

Mendix 앱이 실행되는 운영 체제와 앱에 바인딩된 데이터베이스 등의 추가 서비스입니다.

### 인스턴스

**App Container**라고도 합니다. Runtime Server를 실행하고 노출합니다. 인스턴스가 하나만 있을 수도 있지만, 고가용성과 더 나은 성능을 제공하기 위해 여러 인스턴스가 있을 수 있습니다.

### Runtime Server

Mendix Runtime의 서버 측입니다. [Runtime Server](/refguide8/runtime-server/)에 설명되어 있습니다.

### 로드 밸런서

로드 밸런서는 Mendix Client에서 들어오는 요청을 받아 Runtime Server 인스턴스로 전달합니다. 요청이 여러 인스턴스에 균등하게 분배되도록 하여 부하를 분산합니다.
Mendix Client는 HTTPS를 사용하여 로드 밸런서와 통신합니다. 로드 밸런서의 서버 측에서 환경 인스턴스로의 통신은 HTTP를 사용하여 수행됩니다.

### 정적 콘텐츠

모든 Mendix 앱은 브라우저에서 Mendix Client를 로드하기 위해 정적 콘텐츠가 제공되어야 합니다. 여기에는 Mendix Client를 시작하는 데 필요한 스크립트, 앱의 테마를 정의하는 CSS 파일, 클라이언트 측 로직을 정의하는 JavaScript 파일이 포함됩니다.

### Mendix Client

최종 사용자가 앱과 상호 작용할 수 있는 브라우저 또는 디바이스입니다. Chrome과 같은 웹 브라우저나 iPhone과 같은 모바일 디바이스가 될 수 있습니다. 일반적으로 화면, 포인터 장치, 입력 장치를 갖추고 있어 최종 사용자가 앱을 사용할 수 있습니다. Mendix Client는 [Mendix Client](/refguide8/mendix-client/)에 설명되어 있습니다.

## 라이선스

프로덕션 모드에서 애플리케이션을 실행하려면 라이선스가 필요합니다. 라이선스가 없으면 Runtime Server가 몇 시간 후에 절전 모드로 전환됩니다. Mendix 앱의 라이선스에 대한 정보는 [앱 라이선스](/developerportal/deploy/licensing-apps-outside-mxcloud/)에서 확인할 수 있습니다.

## API

Java Action을 작성하여 Runtime Server의 기능을 확장할 수 있습니다. 자세한 내용은 [Mendix Runtime API](/apidocs-mxsdk/apidocs/runtime-api-9/)를 참조하십시오.

{{% alert color="info" %}}
게시된 웹 서비스용 WSDL과 같은 사용 가능한 API 문서에 대한 링크는 URL 경로 `/api-doc`에서 확인할 수 있습니다(예: `http://localhost:8080/api-doc/`).
{{% /alert %}}

## 이 카테고리의 문서
