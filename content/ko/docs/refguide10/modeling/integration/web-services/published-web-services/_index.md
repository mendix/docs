---
title: "Published Web Services"
url: /refguide10/published-web-services/
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

이 문서에서는 게시된 웹 서비스에 대해 설명합니다. 게시된 웹 서비스 화면에 대한 구체적인 정보는 [Published web service](/refguide10/published-web-service/) 문서를 참조하세요.

Mendix 애플리케이션에서 자체 웹 서비스를 게시할 수 있습니다. 게시된 웹 서비스는 [SOAP 1.1](https://www.w3.org/TR/2000/NOTE-SOAP-20000508/)을 기반으로 합니다. 이러한 웹 서비스는 오퍼레이션(operation)으로 구성됩니다. 다른 애플리케이션이 이 웹 서비스의 오퍼레이션을 호출하면 결과를 반환합니다. 이 결과는 웹 서비스가 호출될 때 실행되는 마이크로플로우(Microflow)를 기반으로 합니다.

마이크로플로우를 웹 서비스로 사용할 수 있도록 하려면, 마이크로플로우의 빈 공간에서 마우스 오른쪽 버튼을 클릭하고 **Publish as web service operation...**을 선택하세요.

## 런타임 문서

실행 시 Studio Pro 프로젝트는 웹 서비스 문서를 게시합니다. 주소는 (로컬에서 실행하는 경우) `http://localhost:8080/ws-doc/`입니다. 이 문서는 서비스를 두 가지 방법으로 사용하는 방법을 설명합니다.

### WSDL

이것은 컴퓨터가 읽을 수 있는 XML 문서입니다. Studio Pro는 이 문서를 읽고 웹 서비스와 상호 작용하는 방법을 자동으로 파악할 수 있습니다.

### 예제 요청/응답 XML 메시지

**Published web services** 페이지(`http://localhost:8080/ws-doc/`)에서 게시된 웹 서비스별 모든 오퍼레이션 목록을 찾을 수 있습니다. 이 링크는 샘플 메시지를 설명하는 페이지로 연결됩니다. Mendix-to-Mendix 상호 작용을 구축할 때는 이러한 예제가 필요하지 않습니다. 자체 클라이언트를 만들려는 사용자를 돕기 위한 것입니다.

## 게시된 웹 서비스 호출은 어떻게 작동하나요?

게시된 마이크로플로우는 외부에서 시스템에 의해 호출될 수 있습니다. 이 섹션에서는 이 프로세스가 어떻게 작동하는지 설명합니다.

### 호출 시작

웹 서비스 호출은 단순히 Runtime이 수신하고 웹 서비스 호출로 인식하는 HTTP 호출입니다. XML 메시지가 수신되고 Runtime이 이해할 수 있는 형식으로 파싱됩니다.

#### 인증

모든 웹 서비스 호출에는 인증이 필요합니다. 구체적으로, SOAP 엔벨로프 헤더에는 사용자 이름과 비밀번호를 포함하는 **Authentication** 요소가 포함되어야 합니다:

```xml
<soap:Header>
  <tns:authentication>
    <username>john</username>
    <password>john'ssecretpassword</password>
  </tns:authentication>
</soap:Header>
```

이 세부 정보는 Runtime의 기존 웹 서비스 사용자와 일치해야 합니다. 이러한 사용자는 Administrator로 로그인하고 시스템 모듈의 **Users** 데이터 그리드에서 **Create web service user**를 클릭하여 만들 수 있습니다. 일반(비웹 서비스) 사용자는 웹 서비스를 호출하는 데 사용할 수 없으며, 웹 서비스 사용자는 표준 로그인 페이지를 통해 로그인할 수 없습니다.

그 외에는 일반 사용자와 웹 서비스 사용자가 마이크로플로우를 호출하는 방식에 차이가 없습니다.

#### 매개변수 처리

게시된 마이크로플로우의 입력인 매개변수 유형에 따라 두 가지가 발생할 수 있습니다:

1. 입력이 도메인 엔티티인 경우, XML은 XML-to-Domain 매핑을 사용하여 엔티티로 변환됩니다. 이러한 매핑은 매핑에 따라 실제 도메인 객체를 만듭니다.
2. 일반 매개변수(integer, string 등)는 어떤 방식으로든 변환되지 않으며 직접 입력으로 사용됩니다.

### 마이크로플로우 실행

매개변수가 XML에서 파싱되면 마이크로플로우 호출은 정상적으로 진행됩니다.

### 결과가 XML로 다시 변환됨

마이크로플로우에 반환 값이 있으면 웹 서비스 호출의 결과로 반환됩니다. 매개변수와 마찬가지로 기본 유형은 직접 반환되고, 도메인 엔티티는 XML로 변환하기 위한 매핑이 필요합니다. 숫자 형식은 consumed 및 published 웹 서비스 간에 일관됩니다. 숫자에서 후행 0이 제거되고 과학적 표기법은 사용되지 않습니다.

### 응답 상태

응답의 기본 HTTP 상태 코드는 200 (OK)입니다. 클라이언트가 잘못된 요청을 보내거나 내부 서버 오류가 발생하면 Runtime은 SOAP 오류로 응답합니다. 이 경우 HTTP 헤더에 상태 500이 포함됩니다.

상태 코드는 실제 응답 전에 전송됩니다. 응답 중에 전송 오류가 발생하면 응답 상태를 변경할 수 없습니다. 이는 수신 측이 서비스가 응답 직렬화 중에 실패했더라도 상태 코드 200을 받을 수 있음을 의미합니다. 이는 메모리 사용을 최적화하기 위해 Studio Pro가 전체 응답을 메모리에 만들지 않기 때문입니다. 대신, 직렬화 중에 응답이 즉시 클라이언트에 전송되어 메모리를 확보합니다. 이것은 웹 서비스를 완료하기 전에 유효한 응답을 만드는 데 필요한 데이터가 있어야 한다는 것을 의미합니다.
