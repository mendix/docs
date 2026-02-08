---
title: "Consumed Web Service"
url: /refguide8/consumed-web-services/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

이 문서에서는 가져온 웹 서비스에 대해 설명합니다. Consumed Web Service 화면에 대한 자세한 정보는 [Consumed Web Service](/refguide8/consumed-web-service/)를 참조하십시오.

## 웹 서비스

웹 서비스([Wikipedia](https://en.wikipedia.org/wiki/Web_service) 참조)는 시스템 간에 함수와 데이터 Entity를 노출하거나 흡수하는 방법입니다. 네트워크(또는 인터넷)를 통해 애플리케이션이 서로 "대화"할 수 있도록 하는 데 사용할 수 있습니다.

Mendix는 SOAP를 사용하는 서버 간 상호작용을 지원합니다. 이는 Mendix-to-Mendix, Mendix-to-ThirdParty 또는 ThirdParty-to-Mendix일 수 있습니다.

### Consumed Web Service

Mendix에서 타사 웹 서비스를 사용하는 것은 쉽습니다. 다른 시스템의 웹 서비스를 호출하고 Mendix 데이터베이스로 XML을 가져오는 Microflow 액티비티를 사용할 수 있습니다.

### Published Web Service

Mendix Server의 기능을 노출하여 다른 시스템이 특정 기능을 사용할 수 있도록 하려면 Microflow를 웹 서비스로 쉽게 게시할 수 있습니다. 자세한 정보는 [Published Web Service](/refguide8/published-web-services/)를 참조하십시오.

## XML

시스템이 서로를 이해하기 위해서는 데이터를 "인코딩"하는 표준 방법이 필요합니다. XML(eXtensible Markup Language)은 양 당사자가 메시지의 의미를 이해할 수 있도록 데이터가 인코딩(또는 래핑)되는 형식입니다. 다음은 XML 코딩의 간단한 예시입니다:

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

이 경우 'person' 객체가 'name', 'age' 속성과 참조된 'address' 객체의 해당 값으로 설명되어 있습니다.

XML은 Mendix에서 데이터를 내보내고 가져오기 위한 직렬화 및 역직렬화에 사용할 수 있습니다.

애플리케이션에 XSD를 가져오는 방법에 대한 자세한 정보는 [XML Schemas](/refguide8/xml-schemas/)를 참조하십시오.
XML 문서를 Domain Model Entity에 매핑하는 방법에 대한 자세한 정보는 [Import Mappings](/refguide8/import-mappings/)를, Domain Entity를 XML로 내보내는 방법에 대한 자세한 정보는 [Export Mappings](/refguide8/export-mappings/)를 참조하십시오.

## SOAP

엔터프라이즈 시장에서 SOAP([Wikipedia](https://en.wikipedia.org/wiki/SOAP_(protocol)) 참조)는 웹 서비스의 일반적인 프로토콜입니다. 시스템이 서로 통신하는 표준 방법을 정의합니다. XML이 메시지 형식으로 사용됩니다.

## XSD

XSD(XML Schema Definition) 문서는 양 당사자가 메시지의 의미를 알 수 있도록 XML의 구조를 설명하는 문서입니다. XSD 자체는 XML로 작성됩니다.

## WSDL

WSDL(Web Service Definition Language) 문서는 클라이언트가 게시하는 서버와 어떻게 상호작용할 수 있는지를 설명하는 문서입니다. 메시지 유형(수신 및 발신)과 메시지를 보내야 하는 위치(엔드포인트 URL)를 설명합니다.

Imported Web Service를 사용하면 외부 애플리케이션의 웹 서비스를 자체 애플리케이션에서 사용하기 위해 가져올 수 있습니다. 타사(예: [w3schools 예제 서비스](https://www.w3schools.com/xml/tempconvert.asmx?WSDL)) 또는 다른 Mendix 프로젝트에서 웹 서비스를 가져올 수 있습니다.

Microflow에서 이러한 Imported Web Service를 사용하려면 [Call Web Service](/refguide8/call-web-service-action/)를 참조하십시오.

## 프록시

방화벽 뒤에 있는 경우 프록시를 사용하여 웹 서비스를 호출해야 할 수 있습니다. 프록시를 사용하도록 JVM을 구성하는 방법에 대한 구체적인 정보는 [Using a Proxy to Call a Web Service](/refguide8/using-a-proxy-to-call-a-webservice/)에서 찾을 수 있습니다.

## 프로토콜

Mendix는 다음 프로토콜에 따라 웹 서비스 데이터 소비를 지원합니다:

* SOAP 1.1
* SOAP 1.2
* MTOM/XOP
* WS-MetadataExchange v1.1
* WS-Policy v1.2
* WS-Policy v1.5
* WS-PolicyAttachment 1.5
* WS-ReliableMessaging 1.1
* WS-Addressing 1.0 (Mendix 8.16부터)

Microsoft .NET 웹 서비스에 연결하려면 basicHttpBinding(SOAP 1.1) 또는 wsHttpBinding(SOAP 1.2)을 사용하도록 웹 서비스를 구성해야 합니다. 보안 연결의 경우 SSL을 구성하고 **web.config** 파일에서 보안 모드를 clientCredentialType `Basic`을 사용한 `Transport`로 설정해야 합니다. 사용자 자격 증명은 [Use HTTP authentication](/refguide8/call-web-service-action/#http-headers)에 설명된 대로 Studio Pro에서 **Call Web Service** 액티비티로 구성할 수 있습니다.
