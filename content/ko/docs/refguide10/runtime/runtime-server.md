---
title: "Runtime Server"
url: /refguide10/runtime-server/
description: "Runtime Server와 그 작동 방식을 설명합니다."
weight: 10
---

## 소개

Runtime Server는 Microflow를 실행하고 파일, 관계형 데이터베이스 및 기타 필요한 서비스에 연결하는 Mendix Runtime의 일부입니다. Mendix Client로부터 요청을 받아 응답으로 데이터를 제공합니다.

이 Runtime Server에 대한 설명은 클라우드에서 실행되는 앱을 기반으로 합니다. 테스트를 위해 로컬에서도 Mendix를 실행할 수 있으며, 개념적으로는 동일합니다.

## 설명

Runtime Server는 [배포](/refguide10/runtime-deployment/)되어 Mendix Client 또는 다른 앱이나 서비스의 요청을 기다립니다. 요청을 처리하고 요청된 데이터와 적절한 추가 상태 정보를 반환합니다. 자세한 내용은 [Mendix Runtime의 통신 패턴](/refguide10/communication-patterns/)을 참조하십시오. Runtime Server 자체는 상태 비저장(stateless)이므로 여러 인스턴스로 효율적으로 확장할 수 있습니다.

아래는 Runtime Server의 구성 요소를 보여주는 차트입니다. 각 구성 요소는 차트 아래에 설명되어 있습니다.

{{< figure src="/attachments/refguide10/runtime/runtime-server/runtime-server.png" alt="The makeup of the Runtime Server" class="no-border" >}}

### M2ee

M2ee는 앱이 클라우드에 배포될 때 Runtime Server를 시작하는 데 사용됩니다. Runtime Server가 실행되면 m2ee를 사용하여 Runtime Server에 다시 연결하여 로그 레벨 설정, 로그인한 사용자 수 조회, 애플리케이션 내에서 현재 실행 중인 액션 표시 또는 애플리케이션 종료와 같은 명령을 실행할 수 있습니다.

M2ee는 Runtime Server의 관리 포트로 전송되는 JSON 형식의 인증된 POST 요청을 통해 Runtime Server와 통신합니다.

### Runtime Core

Java와 Scala로 작성된 인터프리터로, 앱 모델을 사용하여 Mendix Client 또는 외부 서비스의 요청을 처리하는 방법을 결정하고 요청을 처리하는 데 필요한 다양한 프로세스를 제어합니다.

### Project Model

Domain Model, Microflow, Import Mapping 등을 포함하여 앱의 동작 방식을 정의하는 모델을 포함합니다. Runtime Core가 앱을 실행하기 위해 해석하는 것입니다.

### 임시 객체 저장소

Runtime Server에서 사용되지만 아직 데이터베이스에 커밋되지 않은 객체를 보관합니다. 향후 커밋될 수 있는 객체(예: 새 객체 또는 변경된 객체)이거나 커밋되지 않은 상태로 유지될 수 있는 객체(예: Non-persistable 객체)입니다.

### 파일 저장소 관리자

*FileDocument* Entity와 연관된 비관계형 데이터의 검색 및 저장을 제어합니다.

### 파일 저장소

앱에서 사용하는 데이터 파일의 저장 위치입니다. 보다 구체적으로, 크기 및 성능 제한을 피하기 위해 데이터베이스 외부에 저장되는 바이너리 객체인 이미지를 포함한 *FileDocument* 객체의 값을 포함합니다.

### 데이터베이스 동기화

앱이 시작될 때 데이터베이스 동기화가 시작됩니다. Domain Model을 업데이트한 후 앱을 배포할 때 적용해야 하는 데이터베이스 구조 변경 사항을 관리합니다. 예를 들어, 사용자가 Entity에 새 Attribute를 추가하면 이를 지원하기 위해 데이터베이스 구조를 업데이트해야 합니다.

Runtime Server의 인스턴스가 둘 이상인 경우, 이 활동은 Cluster Leader에 의해 수행됩니다. 이 활동이 진행되는 동안 다른 모든 인스턴스는 데이터베이스 동기화가 완료될 때까지 일시 중지됩니다.

### 외부 서비스 호출

데이터를 가져오기 위한 외부 서비스 호출을 관리합니다. 앱은 OData 또는 REST와 같은 다양한 API 형식을 사용하여 여러 외부 서비스를 호출할 수 있습니다.

### 외부 서비스

앱에 데이터를 제공하는 서비스입니다. 서비스는 외부 서비스 요청을 수락하는 다른 Mendix 앱이거나 SAP 또는 Google Maps와 같은 타사 서비스일 수 있습니다.

### 관계형 데이터베이스

앱의 Domain Model에 정의된 객체를 보관하는 데이터베이스(또는 경우에 따라 공유 데이터베이스의 스키마)입니다.

### 쿼리 실행기

앱에 바인딩된 관계형 데이터베이스에서 데이터를 검색하고 저장하기 위한 CRUD(생성, 읽기, 업데이트, 삭제) 작업을 관리합니다. 작업은 기본 데이터베이스에 맞게 조정된 SQL을 사용하여 수행됩니다. 쿼리가 SQL 형식이 아닌 경우, 쿼리 실행기는 원래 형식(예: XPath 또는 OQL)에서 변환합니다.

쿼리 실행기는 앱 내에 설정된 보안도 적용합니다.

### 객체 관리자

Runtime Server에서 유지되는 객체(Non-persistable, 새 객체, 변경된 객체)를 관리하고 요청이 끝날 때 Mendix Client로 다시 전달되도록 합니다.

### Microflow 엔진

앱 모델의 Microflow에 정의된 로직을 실행합니다.

### 스케줄러

사전 구성된 시간 또는 간격에 Microflow 액션을 트리거합니다.

### 라이선스 서버

앱을 실행하는 데 사용되는 라이선스에 대한 정보를 제공하는 서비스입니다. 라이선스는 앱에 추가할 수 있는 명명된 사용자 수와 동시에 앱을 사용할 수 있는 사용자 수를 정의합니다.

### Custom Java

앱 모델에 Java Action으로 저장된 사용자 지정 Java를 실행합니다.

### Mendix Client API

Mendix Client로부터 요청을 받아 디코딩하고 Runtime Core 또는 객체 관리자에 전달하며, 요청이 처리된 후 Mendix Client에 대한 응답을 형식화합니다. Mendix Client API는 xas(XML Application Server)로 알려져 있습니다.

### 외부 서비스 요청

다른 서비스의 요청을 받아 디코딩하고 Runtime Core 또는 객체 관리자에 전달합니다. 요청이 처리된 후 이 구성 요소는 요청에 대한 응답을 형식화합니다. 다음 요청을 처리할 수 있습니다:

* Webservice – SOAP 인터페이스를 통해 Microflow를 노출합니다
* REST – REST 엔드포인트를 통해 Microflow를 노출합니다
* OData – Entity 데이터를 OData 엔드포인트로 노출합니다
* 기타 – WSDL 및 Swagger를 포함한 메타데이터 인터페이스입니다

### HTTPS 서버

Mendix Client 또는 다른 서비스의 HTTPS 요청을 디코딩하고 Runtime Server로 전달합니다.

### Mendix Client

웹 브라우저(예: Google Chrome) 또는 모바일 장치(예: iPhone)로, 사용자가 앱과 상호작용할 수 있게 합니다. 일반적으로 사용자가 앱을 사용할 수 있도록 화면, 포인터 장치, 입력 장치가 있습니다.

Runtime Server는 개인 API를 통해 호출되는 여러 [Request Handler](/refguide10/request-handlers/)를 사용하여 Mendix Client와 통신합니다. 예를 들어, 이 중 하나는 xas라고 합니다.

Mendix Client에 대한 설명은 [Mendix Client](/refguide10/mendix-client/)를 참조하십시오.
