---
title: "Consumed Web Service"
url: /refguide10/consumed-web-service/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

이 문서에서는 가져온 웹 서비스의 속성을 설명합니다. 가져온 웹 서비스에 대한 일반적인 개요는 [Consumed Web Services](/refguide10/consumed-web-services/) 개요 문서를 참조하세요.

## WSDL Source

URL 또는 디스크에 저장된 WSDL 파일에서 WSDL을 로드할 수 있습니다.

{{% alert color="warning" %}}
인증이 필요한 URL에서 WSDL 파일을 로드하려고 하면 사용자 이름과 비밀번호를 입력하라는 메시지가 표시됩니다.

WSDL 파일에는 여러 서비스가 포함될 수 있으며 서비스에는 여러 포트가 포함될 수 있습니다. WSDL을 로드하면 여러 포트가 포함된 각 서비스에 대해 포트를 선택하라는 대화 상자가 나타납니다.
{{% /alert %}}

## Services

이 부분은 WSDL에서 찾을 수 있는 서비스를 지정합니다.

* **Name** – 서비스의 이름
* **Port** – 선택된 포트
* **Location** – 서비스의 위치
* **Location constant** – 예를 들어 개발 환경에서 프로덕션 환경으로 이동할 때 SOAP 서비스의 URL이 변경되는 경우 서비스에 대한 추가 위치를 추가하는 데 사용할 수 있습니다. [Constants](/refguide10/constants/)도 참조하세요

WSDL에 다중 포트 서비스가 정의된 경우, 사용할 포트를 선택할 수 있는 팝업 대화 상자가 표시됩니다.

## Operations

이 부분은 WSDL에서 찾은 모든 오퍼레이션을 보여줍니다. 목록을 확장하고 오른쪽 창에서 개별 오퍼레이션에 대한 추가 정보를 볼 수 있습니다.

## Advanced Settings

**Send binary data as attachment (MTOM)**을 체크하여 MTOM(Message Transmission Optimization Mechanism)을 활성화하세요. 이는 웹 서비스에서 바이너리 데이터를 효율적으로 보내고 받는 방법입니다. [w3.org](https://www.w3.org/TR/soap12-mtom/)에서 자세히 알아보세요.

{{% alert color="warning" %}}
메시지 최적화는 **Call web service** 액션에서 요청 본문을 만들기 위해 하나 이상의 내보내기 매핑을 사용하는 경우에만 적용됩니다.
{{% /alert %}}

## Consumed Web Services 호출

Consumed Web Service를 호출하는 방법에 대한 자세한 내용은 [Call Web Service](/refguide10/call-web-service-action/)를 참조하세요.
