---
title: "경고 메시지 지우기"
url: /howto9/monitoring-troubleshooting/clear-warning-messages/
weight: 1
description: "경고 메시지를 확인하고 지워 설계 시 경고를 제거하는 방법을 설명합니다."
---

## 소개

이 사용 방법은 설계 시 경고를 제거하는 방법을 설명합니다. 이러한 경고가 애플리케이션을 중단시키지는 않지만, 깨끗한 앱을 유지하기 위해 수정하는 것이 중요합니다.

이 사용 방법 문서에서는 다음을 배울 수 있습니다:

* 경고 메시지 확인하기
* 경고 메시지 지우기

## 경고 메시지 확인하기

경고 메시지는 Studio Pro의 **Error List** 탭에서 볼 수 있습니다(기본적으로 Studio Pro 하단에 표시됨). 표시하려면 **Warnings** 상자를 선택해야 합니다.

{{< figure src="/attachments/howto9/monitoring-troubleshooting/clear-warning-messages/18579992.png" class="no-border" >}}

이 탭이 보이지 않으면 **View** 메뉴에서 **Error List** 옵션을 선택하여 표시할 수 있습니다:

{{< figure src="/attachments/howto9/monitoring-troubleshooting/clear-warning-messages/18579991.png" class="no-border" >}}

자세한 정보를 얻으려면 경고를 더블 클릭하거나 마우스 오른쪽 버튼으로 클릭하십시오.

## 일반적인 경고

{{% alert color="warning" %}}

[Deprecated] Using the main placeholder contents for pop-ups is deprecated.  This potion will be removed in a future version.  Please use a separate pop-up layout instead.

{{% /alert %}}

* 이 버전의 Studio Pro에서는 앱에 영향을 미치지 않지만, 업그레이드할 때 문제가 발생할 수 있습니다
* 이 예에서는 기본 플레이스홀더를 더 이상 사용하지 않도록 팝업 레이아웃을 조정해야 합니다

{{% alert color="warning" %}}

A flow origination from an error handler should not return to the main flow.

{{% /alert %}}

* 오류로 인해 Microflow가 분할된 후, 오류로 인해 실행되는 흐름은 오류가 발생하지 않을 때 실행되는 흐름과 병합되어서는 안 됩니다

{{% alert color="warning" %}}

Access rules for entity 'System.FileDocument' exist that define access rights for users with module role 'System.User'.  Note that these access rights apply to all users of your application, including anonymous users (if enabled).  It is recommended it create a specialized entity for each use case and configure access rules for those entities instead.

{{% /alert %}}

* System.FileDocument Entity의 보안에 보안 허점을 유발할 수 있는 기본 설정이 있습니다
* 이 경고는 이러한 시나리오를 제거하기 위해 특수화된 Entity를 생성할 것을 제안합니다

{{% alert color="warning" %}}

Action activity that has a side effect on the client is not recommended here because the microflow is used as a data source for data view 'dataView1'.

{{% /alert %}}

* 데이터 소스 Microflow는 클라이언트에 영향을 미치지 않아야 합니다
* 이 Microflow에는 제거해야 할 메시지 표시 또는 페이지 표시 액티비티가 있을 가능성이 높습니다

{{% alert color="warning" %}}

Empty caption. [English, United States] / Empty title. [English, United States]

{{% /alert %}}

* 지정된 캡션 또는 제목이 비어 있습니다
* 페이지를 이해할 수 있도록 채워야 합니다

{{% alert color="warning" %}}

Empty page title of target page.  Either set the page title of the target page or override it here. [English, United States]

{{% /alert %}}

* 페이지를 이해할 수 있도록 채워야 합니다(위의 "빈 캡션"과 유사)

{{% alert color="warning" %}}

Empty progress message. [English, United States]

{{% /alert %}}

* 선택된 진행 메시지가 비어 있지만 채워져야 합니다

{{% alert color="warning" %}}

Events have no effect inside a non-editable context.

{{% /alert %}}

* 이 컨텍스트는 읽기 전용이지만, 필드에 이벤트가 설정되어 있습니다(on-change, on-leave 또는 on-enter)

{{% alert color="warning" %}}

Microflow 'microflowname' is accessible through the server API because it specifies allowed roles. This is unnecessary because the microflow is not used from navigation or a page.

{{% /alert %}}

* 내비게이션이나 페이지를 통해 접근하지 않는 Microflow에 보안 역할을 허용할 필요가 없습니다
* 이로 인해 보안 문제가 발생할 수 있으며, 할당된 역할을 제거해야 합니다

{{% alert color="warning" %}}

Microflow does not do anything.

{{% /alert %}}

* 이 Microflow는 기능을 수행하지 않습니다. 제거하거나 기능을 추가해야 합니다

{{% alert color="warning" %}}

Module role is not part of any user role.

{{% /alert %}}

* 모듈 역할을 어떤 사용자도 사용할 수 없습니다
* 이 모듈 역할은 제거하거나 적절한 보안이 적용되도록 사용자 역할에 할당해야 합니다

{{% alert color="warning" %}}

Property 'XPath constraint' on the data grid of the select page has no effect when the page is used for selecting.  Instead, the selection constraints properties of the reference selector can be used to constrain the selectable objects.

{{% /alert %}}

* 참조 선택기에 폼을 사용할 때, 제약 조건은 폼이 아닌 참조 선택기에 설정해야 합니다

{{% alert color="warning" %}}

Empty required message while required is true. [English, United States]

{{% /alert %}}

* 페이지에서 필드를 필수로 설정할 수 있습니다
* 필드가 필수로 설정된 경우 **Required Message**가 설정되어야 합니다
* 이 경우 **Required Message**를 설정하거나 필드를 필수가 아니도록 해야 합니다

{{% alert color="warning" %}}

Required message is set even though required is set to false. [English, United States]

{{% /alert %}}

* 이전 경고와 유사합니다
* 필드가 필수가 아닌 경우 **Required Message**가 비어 있어야 합니다
* 필드를 필수로 만들려는 의도로 **Required Message**가 설정된 경우, 필드를 필수로 만들어야 합니다

{{% alert color="warning" %}}

Target namespace is '[http://www.example.com/](http://www.example.com/)'.  Please provide a target namespace specific to your published web service.

{{% /alert %}}

* 게시된 웹 서비스를 편집하여 적절한 네임스페이스를 포함하십시오

{{% alert color="warning" %}}

Variable 'Variable' is never used.

{{% /alert %}}

* 여기에는 여러 가지 잠재적 원인이 있습니다
* 해결 방법은 Microflow에서 변수를 제거하는 것이며, 이는 검색 액티비티를 삭제하거나 Microflow 호출의 반환 값을 사용하지 않도록 선택하는 것을 의미할 수 있습니다

## 더 읽기

* [런타임 오류의 근본 원인 찾기](/howto9/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [SoapUI를 사용한 웹 서비스 테스트](/howto9/testing/testing-web-services-using-soapui/)
* [JMX를 사용한 Mendix 모니터링](/howto9/monitoring-troubleshooting/monitoring-mendix-using-jmx/)
* [Java 액션 원격 디버깅](/howto9/monitoring-troubleshooting/debug-java-actions-remotely/)
* [로그 수준 구성](/howto9/monitoring-troubleshooting/log-levels/)
* [Microflow 및 Nanoflow 디버깅](/refguide9/debug-microflows-and-nanoflows/)
* [Java 액션 디버깅](/howto9/monitoring-troubleshooting/debug-java-actions/)
* [Microflow 원격 디버깅](/refguide9/debug-microflows-remotely/)

여러 경고는 부적절한 보안과 관련이 있습니다. 자세한 내용은 *Studio Pro 가이드*의 [App Security](/refguide9/app-security/)를 참조하십시오.
