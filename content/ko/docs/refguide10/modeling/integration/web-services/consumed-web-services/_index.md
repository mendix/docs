---
title: "Consumed Web Services"
url: /refguide10/consumed-web-services/
weight: 25
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

이 문서에서는 가져온 웹 서비스에 대해 설명합니다. Consumed Web Services 화면에 대한 추가 정보는 [Consumed Web Service](/refguide10/consumed-web-service/) 문서를 참조하세요.

## 웹 서비스

웹 서비스([Wikipedia](https://en.wikipedia.org/wiki/Web_service) 참조)는 시스템 간에 기능과 데이터 엔티티를 노출하거나 수집하는 방법입니다. 네트워크(또는 인터넷)를 통해 애플리케이션이 통신할 수 있도록 하는 데 사용할 수 있습니다.

Mendix는 SOAP를 사용하는 서버 간 상호 작용을 지원합니다. 이는 Mendix-to-Mendix, Mendix-to-ThirdParty 또는 ThirdParty-to-Mendix일 수 있습니다.

### Consumed Web Services

Studio Pro에서 타사 웹 서비스를 사용하기 위해, 다른 시스템의 웹 서비스를 호출하고 XML을 Mendix 데이터베이스에 가져오는 마이크로플로우 액티비티가 제공됩니다.

### Published Web Services

Mendix Server에서 기능을 노출하여 다른 시스템이 특정 기능을 활용할 수 있도록 하려면 마이크로플로우(Microflow)를 웹 서비스로 쉽게 게시할 수 있습니다. 자세한 정보는 [Published Web Services](/refguide10/published-web-services/)를 참조하세요.

## XML

시스템이 서로를 이해할 수 있도록 데이터를 인코딩하는 표준 방법이 필요합니다. XML(eXtensible Markup Language)은 양쪽 당사자가 메시지의 의미를 이해할 수 있도록 데이터를 인코딩(또는 래핑)하는 형식입니다. 다음은 XML 코딩의 간단한 예입니다:

```xml
<person>
	<name>John Smith</name>
	<age>23</age>
	<address>
		<street>Dopeylane 14</street>
		<city>Worchestire</city>
	</address>
</person>
```

이 경우 'person' 객체는 'name', 'age' 속성의 해당 값과 참조된 'address' 객체로 설명됩니다.

XML은 Studio Pro에서 데이터를 내보내고 가져오기 위한 직렬화 및 역직렬화에 사용할 수 있습니다.

* XSD를 애플리케이션에 가져오는 방법에 대한 자세한 정보는 [XML Schemas](/refguide10/xml-schemas/)를 참조하세요.
* XML 문서를 도메인 모델 엔티티에 매핑하는 방법에 대한 자세한 정보는 [Import Mappings](/refguide10/import-mappings/)를, 도메인 엔티티를 XML로 내보내는 방법에 대한 자세한 정보는 [Export Mappings](/refguide10/export-mappings/)를 참조하세요.

## SOAP {#soap}

엔터프라이즈 시장에서 SOAP([Wikipedia](https://en.wikipedia.org/wiki/SOAP_(protocol)) 참조)는 웹 서비스의 일반적인 프로토콜입니다. 시스템 간 통신의 표준 방법을 정의합니다. XML이 메시지 형식으로 사용됩니다.

## XSD {#xsd}

XSD(XML Schema Definition) 문서는 양쪽 당사자가 메시지의 의미를 알 수 있도록 XML이 어떻게 구조화되어 있는지 설명하는 문서입니다. XSD 자체는 XML로 작성됩니다.

XSD 파일을 앱에 가져올 때 Studio Pro는 절대 경로만 허용하며, 허용되는 스키마는 파일이나 `https` 또는 `http`로 시작하는 링크로 제한됩니다.

[XML 스키마](/refguide10/xml-schemas/)를 가져오거나 내보낼 때 XSD 파일이 앱에 있어야 합니다. XML이 앱에 없는 XSD 파일을 참조하면 런타임 오류가 발생합니다. 이 오류를 해결하려면 XSD 파일을 수동으로 추가하세요.

## WSDL {#wdsl}

WSDL(Web Service Definition Language) 문서는 클라이언트가 이를 게시하는 서버와 어떻게 상호 작용할 수 있는지 설명하는 문서입니다. 메시지 유형(수신 및 발신)과 메시지가 보내져야 하는 위치(엔드포인트 URL)를 설명합니다.

WSDL에는 데이터를 검증하는 데 사용되는 연관된 [XSD](#xsd) 문서가 있습니다.

가져온 웹 서비스를 사용하면 외부 애플리케이션에서 웹 서비스를 가져와 자체 애플리케이션에서 사용할 수 있습니다. 타사 웹 서비스(예: [w3schools 예제 서비스](https://www.w3schools.com/xml/tempconvert.asmx?WSDL)) 또는 다른 Mendix 앱에서 웹 서비스를 가져올 수 있습니다.

마이크로플로우에서 이러한 가져온 웹 서비스를 사용하려면 [Call Web Service](/refguide10/call-web-service-action/)를 참조하세요.

## 프록시

방화벽 뒤에 있는 경우 웹 서비스를 호출하기 위해 프록시를 사용해야 할 수 있습니다. 프록시를 사용하도록 JVM을 구성하는 방법에 대한 구체적인 정보는 [프록시를 사용하여 웹 서비스 호출](/refguide10/using-a-proxy-to-call-a-webservice/)에서 찾을 수 있습니다.

## 프로토콜

Mendix는 다음 프로토콜에 따른 웹 서비스 데이터 사용을 지원합니다:

* SOAP 1.1
* SOAP 1.2
* MTOM/XOP
* WS-MetadataExchange v1.1
* WS-Policy v1.2
* WS-Policy v1.5
* WS-PolicyAttachment 1.5
* WS-ReliableMessaging 1.1
* WS-Addressing 1.0 (Mendix 8.16부터)

Microsoft .NET 웹 서비스에 연결하려면 웹 서비스를 basicHttpBinding(SOAP 1.1) 또는 wsHttpBinding(SOAP 1.2)을 사용하도록 구성해야 합니다. 보안 연결을 위해 SSL을 구성하고 *web.config* 파일에서 보안 모드를 `Transport`로, clientCredentialType을 `Basic`으로 설정해야 합니다. 사용자 자격 증명은 [Use HTTP authentication](/refguide10/call-web-service-action/#http-headers)에 설명된 대로 Studio Pro에서 **Call Web Service** 액티비티로 구성할 수 있습니다.
