---
title: "Consumed Web Service"
url: /refguide8/consumed-web-service/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

이 문서에서는 가져온 웹 서비스의 속성을 설명합니다. 가져온 웹 서비스에 대한 일반적인 개요는 [Consumed Web Service](/refguide8/consumed-web-services/) 개요 문서를 참조하십시오.

## WSDL 소스

URL 또는 디스크에 저장된 WSDL 파일에서 WSDL을 로드할 수 있습니다.

{{% alert color="warning" %}}
인증이 필요한 URL에서 WSDL 파일을 로드하려고 하면 사용자 이름과 비밀번호를 입력하라는 메시지가 표시됩니다.
{{% /alert %}}

{{% alert color="warning" %}}
WSDL 파일에는 여러 서비스가 포함될 수 있으며 서비스에는 여러 포트가 포함될 수 있습니다. WSDL을 로드하면 여러 포트가 포함된 각 서비스에 대해 포트를 선택하라는 대화 상자가 나타납니다.
{{% /alert %}}

## 서비스

이 부분은 WSDL에서 발견된 서비스를 지정합니다.

* **Name** – 서비스의 이름입니다.
* **Port** – 선택된 포트입니다.
* **Location** – 서비스의 위치입니다.
* **Location constant** – 예를 들어 개발 환경에서 프로덕션 환경으로 이동할 때 SOAP 서비스의 URL이 변경되는 경우 서비스에 대한 추가 위치를 추가하는 데 사용할 수 있습니다. [Constants](/refguide8/constants/)도 참조하십시오.

WSDL에 여러 포트가 있는 서비스가 정의된 경우 사용할 포트를 선택할 수 있는 팝업 대화 상자가 나타납니다.

## 작업

이 부분은 WSDL에서 발견된 모든 작업을 표시합니다. 목록을 확장하고 오른쪽 패널에서 개별 작업에 대한 추가 정보를 볼 수 있습니다.

## 고급 설정

**Send binary data as attachment (MTOM)**을 선택하여 MTOM(*Message Transmission Optimization Mechanism*)을 활성화하십시오: 웹 서비스에서 바이너리 데이터를 효율적으로 보내고 받는 방법입니다. 자세한 내용은 [w3.org](https://www.w3.org/TR/soap12-mtom/)에서 확인하십시오. 

{{% alert color="warning" %}}
메시지 최적화는 Call Web Service 액티비티에서 요청 본문을 생성하기 위해 하나 이상의 Export Mapping을 사용하는 경우에만 적용됩니다.
{{% /alert %}}

## Consumed Web Service 호출

Consumed Web Service를 호출하는 방법에 대한 자세한 내용은 [Call Web Service](/refguide8/call-web-service-action/)를 참조하십시오.
