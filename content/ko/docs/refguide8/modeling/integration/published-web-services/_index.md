---
title: "Published Web Services"
url: /refguide8/published-web-services/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
이 문서는 Published Web Service에 대해 설명합니다. Published Web Service 화면에 대한 구체적인 정보를 찾고 있다면 [Published Web Service](/refguide8/published-web-service/) 문서를 확인하십시오.
{{% /alert %}}

## 소개

Mendix 애플리케이션에서 자체 웹 서비스를 게시할 수 있습니다. 이러한 웹 서비스는 작업으로 구성됩니다. 다른 애플리케이션이 이 웹 서비스의 작업을 호출할 수 있으며 결과를 반환할 수 있습니다. 이 결과는 웹 서비스가 호출될 때 실행되는 Microflow를 기반으로 합니다.

Microflow를 웹 서비스로 사용할 수 있도록 하려면 Microflow의 빈 공간을 마우스 오른쪽 버튼으로 클릭하고 "Publish as web service operation..."을 선택하십시오.

## 런타임 문서

실행 중일 때 Mendix 프로젝트는 웹 서비스 문서를 게시합니다. 주소는 (로컬에서 실행하는 경우) `http://localhost:8080/ws-doc/`입니다. 이 문서는 두 가지 방법으로 서비스를 사용하는 방법을 설명합니다:

### WSDL

이는 컴퓨터가 읽을 수 있는 XML 문서입니다. 이는 Studio Pro가 이 문서를 읽고 웹 서비스와 상호 작용하는 방법을 자동으로 파악할 수 있음을 의미합니다.

### 예시 요청/응답 XML 메시지

"Published webservices" 페이지(`http://localhost:8080/ws-doc/`)에서 게시된 웹 서비스별로 모든 작업 목록도 찾을 수 있습니다. 이러한 링크는 샘플 메시지를 설명하는 페이지로 연결됩니다. Mendix 간 상호 작용을 구축할 때는 이러한 예시가 필요하지 않으며, 자체 클라이언트를 만들려는 사람들을 돕기 위한 것입니다.

## Published Web Service 호출은 어떻게 작동합니까?

게시된 Microflow는 외부 시스템에서 호출할 수 있습니다. 이 섹션에서는 이 프로세스가 어떻게 작동하는지 살펴보겠습니다.

### 호출 시작

웹 서비스 호출은 단순히 런타임이 수신하고 웹 서비스 호출로 인식하는 HTTP 호출입니다. XML 메시지가 수신되고 런타임이 이해하는 형식으로 파싱됩니다.

#### 인증

모든 웹 서비스 호출에는 인증이 필요합니다. 구체적으로 SOAP 엔벨로프 헤더에 사용자 이름과 비밀번호를 포함하는 "authentication"이라는 요소가 포함되어야 합니다:

```xml
<soap:Header>
        <tns:authentication>
            <username>john</username>
            <password>john'ssecretpassword</password>
        </tns:authentication>
    </soap:Header>

```

이러한 세부 정보는 런타임의 기존 웹 서비스 사용자와 *반드시* 일치해야 합니다. 이러한 사용자는 관리자로 로그인하고 시스템 모듈의 Users 데이터 그리드에서 "create webservice user"를 클릭하여 생성할 수 있습니다. 일반(비 웹 서비스) 사용자는 웹 서비스를 호출하는 데 사용할 수 없으며 웹 서비스 사용자는 표준 로그인 페이지를 통해 로그인할 수 없습니다.

그 외에는 일반 사용자와 웹 서비스 사용자가 Microflow를 호출하는 방법에 차이가 없습니다.

#### 매개변수 처리

게시된 Microflow의 입력으로 어떤 유형의 매개변수가 사용되는지에 따라 두 가지 결과가 가능합니다.

입력이 Domain Entity인 경우 XML-to-Domain 매핑을 사용하여 XML이 Entity로 변환됩니다. 이러한 매핑은 매핑에 따라 실제 도메인 객체를 생성합니다.

일반 매개변수(정수, 문자열 등)는 변환 없이 직접 입력으로 사용됩니다.

### Microflow 실행

매개변수가 XML에서 파싱되면 Microflow 호출이 정상적으로 진행됩니다.

### 결과가 XML로 다시 변환됨

Microflow에 반환 값이 있으면 웹 서비스 호출의 결과로 반환됩니다. 매개변수와 마찬가지로 기본 유형은 직접 반환되며 Domain Entity는 XML로 변환하기 위한 매핑이 필요합니다. 숫자 형식은 소비된 웹 서비스와 게시된 웹 서비스 간에 일관됩니다. 후행 0은 숫자에서 제거되며 과학적 표기법은 사용되지 않습니다.

### 응답 상태

응답의 기본 HTTP 상태 코드는 200(OK)입니다. 클라이언트가 잘못된 요청을 보내거나 내부 서버 오류가 발생하면 런타임은 SOAP 오류로 응답합니다. 이러한 경우 HTTP 헤더에 상태 500이 포함됩니다.

상태 코드는 실제 응답 전에 전송된다는 점에 유의하십시오. 응답 전송 중 오류가 발생하면 응답 상태를 변경할 수 없습니다. 이는 수신 측이 상태 코드 200을 받을 수 있지만 응답 직렬화 중에 서비스가 이후에 실패했을 수 있음을 의미합니다. 이는 메모리 사용을 최적화하기 위해 전체 응답을 메모리에 생성하지 않기 때문입니다. 대신 직렬화 중에 응답이 즉시 클라이언트에 전송되어 메모리를 해제합니다. 이는 웹 서비스를 완료하기 전에 유효한 응답을 생성하는 데 필요한 데이터가 준비되어 있어야 함을 의미합니다.
