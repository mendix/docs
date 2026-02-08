---
title: "게시된 웹 서비스(Published Web Service)"
url: /refguide8/published-web-service/
---

## 소개

이 문서는 게시된 웹 서비스의 속성을 설명합니다. Mendix에서 Microflow를 웹 서비스로 게시하는 방법에 대한 일반적인 개요를 보려면 [게시된 웹 서비스(Published Web Services)](/refguide8/published-web-services/)를 참조하세요.

## 오퍼레이션

{{< figure src="/attachments/refguide8/modeling/integration/published-web-services/published-web-service/16843888.png" class="no-border" >}}

웹 서비스를 구성하는 실제 오퍼레이션을 제공합니다. 이러한 각 오퍼레이션은 Microflow입니다.

[오퍼레이션(Operations)](/refguide8/operations/)을 참조하세요.

## 설정

{{< figure src="/attachments/refguide8/modeling/integration/published-web-services/published-web-service/16843887.png" class="no-border" >}}

### WSDL에 대한 유효성 검사

'yes'로 설정하면 수신 요청이 WSDL에 대해 유효성이 검사됩니다.

기본값: *Yes*

### 인증

웹 서비스와의 통신을 위해 정의할 인증 설정입니다.

### 대상 네임스페이스(Target Namespace)

이것은 이 서비스에 대해 게시된 WSDL 파일의 targetNamespace 속성 값입니다. Mendix에서 대상 네임스페이스는 유효한 URI(Uniform Resource Identifier)여야 합니다. XML 네임스페이스에 대한 자세한 내용은 [Wikipedia](https://en.wikipedia.org/wiki/XML_namespace)를 참조하세요.

서드파티에 WSDL을 게시하기 전에 대상 네임스페이스를 올바르게 구성하는 것이 중요합니다. 나중에 변경하면 게시된 웹 서비스를 호출하는 서드파티 애플리케이션이 작동하지 않을 수 있습니다.

### 생성된 XML

XML에 Association에 대한 태그를 포함해야 하는 경우 **Include tags for associations**를 선택하세요. 이는 일반적으로 필요하지 않으며, 이에 대한 지원은 향후 버전에서 제거될 예정입니다.

이 체크박스의 효과를 확인하려면 두 마리의 개와 한 마리의 고양이를 가진 사람을 고려해 보세요. **Include tags for associations**를 선택하지 않은 경우 XML은 다음과 같습니다:

```xml
<Person name="John">
  <Dog name="Max" />
  <Dog name="Rex" />
  <Cat name="Chester" />
</Person>
```

**Include tags for associations**를 선택한 경우 XML은 다음과 같습니다:

```xml
<Person name="John">
  <Person_Dog>
    <Dog name="Max" />
    <Dog name="Rex" />
  </Person_Dog>
  <Person_Cat>
    <Cat name="Chester" />
  </Person_Cat> 
</Person>
```

### WSDL 파일 내보내기 및 XML 스키마 정의 내보내기

이 버튼을 사용하면 생성된 WSDL 파일과 해당 XML 스키마 정의를 로컬 하드 드라이브에 저장할 수 있습니다. `http://localhost:8080/ws-doc/`에서 다운로드하는 것과 달리 프로젝트를 실행하기 전에도 이 작업을 수행할 수 있습니다.

### 문서

문서는 웹 서비스의 용도를 설명하는 데 사용할 수 있습니다.
