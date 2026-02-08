---
title: "Runtime Server"
url: /refguide8/runtime-server/
description: "Runtime Server에 대한 설명과 작동 방식을 설명합니다."
weight: 10
---

## 소개

Runtime Server는 Microflow를 실행하고 파일, 관계형 데이터베이스 및 기타 필요한 서비스에 연결하는 Mendix Runtime의 구성 요소입니다. Mendix Client로부터 요청을 받고 응답으로 데이터를 제공합니다.

이 Runtime Server 설명은 클라우드에서 실행되는 앱을 기반으로 합니다. 테스트를 위해 Mendix를 로컬에서 실행할 수도 있지만, 개념적으로는 동일합니다.

## 설명

Runtime Server는 클라우드에 배포되며(자세한 내용은 [Runtime 배포](/refguide8/runtime-deployment/) 참조) Mendix Client 또는 다른 앱이나 서비스의 호출을 기다립니다. 요청을 처리하고 요청된 데이터와 적절한 경우 추가 상태 정보를 반환합니다. 이 통신이 어떻게 이루어지는지에 대한 자세한 내용은 [Mendix Runtime의 통신 패턴](/refguide8/communication-patterns/)을 참조하십시오. Runtime Server 자체는 상태 비저장(Stateless) 방식이므로 여러 인스턴스로 효율적으로 확장할 수 있습니다.

아래는 Runtime Server의 구성 요소를 보여주는 차트입니다. 각 구성 요소에 대한 설명은 차트 아래에 있습니다.

{{< figure src="/attachments/refguide8/runtime/runtime-server/runtime-server.png" alt="The makeup of the Runtime Server" class="no-border" >}}

### M2ee

M2ee는 앱이 클라우드에 배포될 때 Runtime Server를 실행하는 데 사용됩니다. Runtime Server가 실행되면, m2ee를 사용하여 Runtime Server에 다시 연결하여 로그 수준 설정, 로그인한 사용자 수 확인, 애플리케이션 내에서 현재 실행 중인 작업 표시, 또는 종료 명령 등의 명령을 실행할 수 있습니다.

M2ee는 Runtime Server의 관리 포트로 전송되는 JSON 형식의 인증된 POST 요청을 통해 Runtime Server와 통신합니다.

### Runtime Core

Java와 Scala로 작성된 인터프리터로, 프로젝트 모델을 사용하여 Mendix Client 또는 외부 서비스의 요청을 처리하는 방법을 결정하고 요청을 처리하는 데 필요한 다양한 프로세스를 제어합니다.

### 프로젝트 모델

Domain Model, Microflow, Import Mapping 등을 포함하여 앱의 동작 방식을 정의하는 모델을 포함합니다. 이것이 Runtime Core가 앱을 실행하기 위해 해석하는 것입니다.

### 임시 객체 저장소

Runtime Server에서 사용 중이지만 아직 데이터베이스에 커밋되지 않은 객체를 보관합니다. 이 객체들은 향후 커밋될 수 있고(예: 새 객체이거나 변경된 객체인 경우), 커밋되지 않은 상태로 남을 수도 있습니다(예: Non-Persistable 객체인 경우).

### 파일 저장소 관리자

비관계형 데이터의 검색 및 저장을 제어합니다. 특히 FileDocument Entity와 관련된 데이터를 검색합니다.

### 파일 저장소

앱에서 사용하는 데이터의 일부인 파일이 저장되는 곳입니다. 특히 이미지를 포함한 *FileDocument* 객체의 값을 포함하며, 크기 및 성능 제한을 피하기 위해 데이터베이스 외부에 저장해야 하는 바이너리 객체입니다.

### 데이터베이스 동기화

데이터베이스 동기화는 앱이 시작될 때 수행됩니다. 앱의 Domain Model이 업데이트된 후 앱이 배포될 때 데이터베이스에 적용해야 하는 데이터베이스 구조 변경을 관리합니다. 예를 들어, Entity에 새 Attribute가 추가되면 이를 지원하기 위해 데이터베이스 구조를 업데이트해야 합니다.

Runtime Server의 인스턴스가 둘 이상인 경우 이 활동은 Cluster Leader 인스턴스에서 수행됩니다. 이 활동이 진행되는 동안 다른 모든 인스턴스는 데이터베이스 동기화가 완료될 때까지 일시 중지됩니다.

### 외부 서비스 호출

데이터를 얻기 위한 외부 서비스 호출을 관리합니다. 앱은 OData나 REST 등 다양한 API 형식을 사용하여 여러 외부 서비스를 호출할 수 있습니다.

### 외부 서비스

앱에 데이터를 제공하는 서비스입니다. 서비스는 외부 서비스 요청을 수락하는 다른 Mendix 앱이거나 SAP 또는 Google Maps와 같은 타사 서비스일 수 있습니다.

### 관계형 데이터베이스

앱의 Domain Model에 정의된 객체를 보관하는 데이터베이스(또는 공유 데이터베이스의 스키마)입니다.

### 쿼리 실행기

앱에 바인딩된 관계형 데이터베이스에서 데이터를 검색하고 저장하기 위한 CRUD(생성, 읽기, 업데이트, 삭제) 작업을 관리합니다. 이 작업은 기본 데이터베이스에 맞게 조정된 SQL을 사용하여 수행됩니다.

쿼리가 SQL 형식이 아닌 경우 쿼리 실행기는 원래 형식(예: XPath 또는 OQL)에서 변환합니다.

또한 앱 내에서 설정된 보안을 적용합니다.

### 객체 관리자

Runtime Server에서 유지되는 객체(Non-Persistable, 새 객체, 변경된 객체)를 관리하고 요청이 끝날 때 Mendix Client에 다시 전달되도록 합니다.

### Microflow 엔진

프로젝트 모델의 Microflow에 정의된 로직을 실행합니다.

### 스케줄러

스케줄러는 미리 구성된 시간 또는 간격으로 Microflow 작업을 트리거합니다.

### 라이선스 서버

앱을 실행하는 데 사용되는 라이선스에 대한 정보를 제공하는 서비스입니다. 사용 중인 라이선스는 앱에 추가할 수 있는 명명된 사용자 수와 앱을 동시에 사용할 수 있는 사용자 수를 정의합니다.

### 커스텀 Java

프로젝트 모델에 Java Action으로 보관된 커스텀 Java를 실행합니다.

### Mendix Client API

Mendix Client의 요청을 받아 디코딩하고 Runtime Core 또는 객체 관리자에 전달하며, 요청이 처리되면 Mendix Client에 대한 응답을 형식화합니다. Mendix Client API는 *xas*(XML Application Server)로 알려져 있습니다.

### 커스텀 요청 핸들러

com.mendix.core.Core#addRequestHandler(…) API 호출을 사용하여 앱에 추가된 요청 핸들러입니다.

### 외부 서비스 요청

다른 서비스의 요청을 받아 디코딩하고 Runtime Core 또는 객체 관리자에 전달하며, 요청이 처리되면 서비스에 대한 응답을 형식화합니다. 이러한 요청은 다음과 같을 수 있습니다:

* Webservice – SOAP 인터페이스를 통해 Microflow를 노출합니다
* REST – REST 엔드포인트를 통해 Microflow를 노출합니다
* OData – Entity 데이터를 OData 엔드포인트로 노출합니다
* 기타 – WSDL 및 Swagger를 포함한 메타데이터 인터페이스입니다

### HTTPS 서버

Mendix Client 또는 다른 서비스의 HTTPS 요청을 디코딩하고 Runtime Server에 전달합니다.

### Mendix Client

최종 사용자가 앱과 상호 작용할 수 있는 브라우저 또는 디바이스입니다. Chrome과 같은 웹 브라우저나 iPhone과 같은 모바일 디바이스가 될 수 있습니다. 일반적으로 화면, 포인터 장치, 입력 장치를 갖추고 있어 최종 사용자가 앱을 사용할 수 있습니다.

Runtime Server는 *xas*라는 전용 API를 사용하여 Mendix Client와 통신합니다.

Mendix Client에 대한 설명은 [Mendix Client](/refguide8/mendix-client/)를 참조하십시오.
