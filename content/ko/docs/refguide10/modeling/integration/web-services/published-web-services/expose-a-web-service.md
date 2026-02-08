---
title: "웹 서비스 노출"
url: /refguide10/integration/expose-a-web-service/
weight: 12
description: "Mendix가 웹 서비스를 사용하여 앱의 기능과 데이터를 노출하는 것을 지원하는 방법을 설명합니다."
aliases:
    - /howto10/integration/expose-a-web-service/
---

## 소개

Mendix는 애플리케이션의 기능과 데이터를 다른 사람에게 노출하는 많은 방법을 지원합니다. 가장 쉬운 방법은 웹 서비스를 사용하는 것입니다. 웹 서비스에는 여러 오퍼레이션이 포함될 수 있습니다.

이 사용 방법 문서에서는 다음을 수행하는 방법을 알려드립니다:

* 웹 서비스 만들기
* 마이크로플로우(Microflow)를 웹 서비스 오퍼레이션으로 게시하기

## 사전 요구 사항

이 사용 방법 문서를 시작하기 전에 다음 사전 요구 사항을 완료하십시오:

* 최신 버전의 [Mendix Studio Pro](https://marketplace.mendix.com/)를 다운로드하세요

{{% alert color="warning" %}}
이 사용 방법 문서는 Studio Pro 9.24를 기반으로 작성되었습니다. 이 사용 방법 문서의 모든 이미지, 이름 및 단계는 이 버전을 기반으로 합니다. 다른 버전을 사용할 때 화면의 이미지 및/또는 이름이 이 사용 방법 문서에서 사용된 이미지 및 이름과 다를 수 있습니다.
{{% /alert %}}

## 데이터 구조 및 GUI

1. 도메인 모델에서 다음 **Customer** 엔티티(Entity)를 만드세요(엔티티를 만드는 방법에 대한 자세한 내용은 [도메인 모델 구성](/refguide10/configuring-a-domain-model/) 참조):

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/expose-a-web-service/8945665.png" class="no-border" >}}

2. **Customer** 유형의 객체를 관리하기 위한 개요 및 상세 페이지를 만드세요(개요 및 상세 페이지를 만드는 방법에 대한 자세한 내용은 [첫 번째 개요 및 상세 페이지 만들기](/howto10/front-end/create-your-first-two-overview-and-detail-pages/) 참조).
3. 고객 개요 페이지에 접근하기 위한 메뉴 항목을 만드세요(메뉴 항목을 만드는 방법에 대한 자세한 내용은 [네비게이션 설정](/refguide10/setting-up-the-navigation-structure/) 참조).
4. 애플리케이션을 실행하고 웹 서비스에서 노출할 데이터를 추가하세요.

## 게시된 웹 서비스 만들기 {#create-published-web-service}

게시된 웹 서비스를 만들려면 다음 단계를 따르세요:

1. 게시된 웹 서비스를 저장할 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add other** > **Published web service**를 선택하세요.

2. **Add Published Web Service** 창에서 **Name**에 *CustomerWebService*를 입력한 다음 **OK**를 클릭하세요:

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/expose-a-web-service/18581728.png" class="no-border" >}}

3. 이제 **Published Web Service** 속성 창이 표시됩니다. 다음 탭 세부 정보를 확인하세요:
    * **Operations** 탭에서 웹 서비스의 사용 가능한 오퍼레이션을 볼 수 있습니다(현재 목록이 비어 있으므로, 아래 [마이크로플로우 게시](#publish-a-microflow) 섹션에서 오퍼레이션을 추가합니다):

        {{< figure src="/attachments/refguide10/modeling/integration/web-services/expose-a-web-service/18581713.png" class="no-border" >}}

    * **Settings** 탭에서 다른 설정을 구성할 수 있습니다. 웹 서비스를 게시하기 전에, 특히 **Target namespace**를 변경하세요(이 설정에 대한 자세한 내용은 [Published Web Service](/refguide10/published-web-service/) 참조):

        {{< figure src="/attachments/refguide10/modeling/integration/web-services/expose-a-web-service/18581712.png" class="no-border" >}}

4. **OK**를 클릭하세요.

## 노출할 기능 만들기 {#expose}

노출할 기능을 만들려면 다음 단계를 따르세요:

1. 데이터베이스에서 고객 목록을 검색하고 반환하는 마이크로플로우(Microflow)를 만드세요(마이크로플로우를 만드는 방법에 대한 자세한 내용은 [메뉴 항목에서 마이크로플로우 트리거](/refguide10/triggering-microflow-from-menu-item/) 참조).
2. 검색 액션의 범위 설정을 동적으로 설정하기 위해 두 개의 입력 매개변수를 추가하세요. 검색 액션의 범위 옵션을 다음과 같이 구성하세요:

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/expose-a-web-service/18581709.png" class="no-border" >}}

    이 마이크로플로우를 참조하세요:

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/expose-a-web-service/model.jpg" class="no-border" >}}

오류가 발생하면 서비스 문서의 **Operations** > **Parameters** 섹션에서 입력 매개변수를 **Optional** 및 **Nillable**로 표시해야 합니다(다음 섹션 참조).

## 마이크로플로우 게시 {#publish-a-microflow}

마이크로플로우를 게시하려면 다음 단계를 따르세요:

1. 마이크로플로우의 배경 어딘가를 마우스 오른쪽 버튼으로 클릭하고 **Publish as Web service operation**을 선택하세요:

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/expose-a-web-service/18581708.png" class="no-border" >}}

2. [게시된 웹 서비스 만들기](#create-published-web-service)에서 만든 웹 서비스를 찾아 **Select**를 클릭하세요:

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/expose-a-web-service/18581723.png" class="no-border" >}}

3. 이제 **Operation Operation** 속성 편집기가 표시됩니다. 다음 탭 세부 정보를 확인하세요:

    * **General** 탭에서 **Name** 및 **Documentation**을 변경할 수 있습니다.
    * **Parameters** 탭에서 입력 매개변수를 **Optional** 및 **Nillable**로 표시할 수 있습니다([노출할 기능 만들기](#expose) 단계에서 [매개변수](/refguide10/parameter/)를 추가할 때 필요).
    * **Return type** 탭에서 반환 유형을 구성할 수 있습니다.

4. **Select...**를 클릭하여 반환 객체 **Customer**의 어떤 속성과 연관을 노출할지 선택하세요:

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/expose-a-web-service/18581704.png" class="no-border" >}}

5. 노출할 멤버를 선택하고 **OK**를 클릭하세요. 선택한 멤버만 웹 서비스에서 반환됩니다.
6. **OK**를 클릭하여 오퍼레이션을 저장하세요.

## WSDL 가져오기

방금 만든 웹 서비스와 다른 사람이 상호 작용할 수 있도록 하려면 WSDL(Web Services Description Language)이 필요합니다. WSDL은 웹 서비스의 오퍼레이션을 호출하는 방법을 설명합니다.

WSDL을 가져오려면 다음 단계를 따르세요:

1. 애플리케이션을 로컬에서 또는 Free App 환경에서 실행하세요.
2. 브라우저에서 애플리케이션을 확인하세요:
    * 애플리케이션을 로컬에서 실행하는 경우 애플리케이션 URL은 다음과 같아야 합니다: `http://localhost:8080/index.html`
    * Free App 환경에서 애플리케이션을 실행하는 경우 애플리케이션 URL은 다음과 같아야 합니다: `https://myfirstapp.mendixcloud.com/index.html`
3. 위의 두 경우 모두 `/index.html`을 `/ws-doc/`으로 대체하여 웹 서비스 문서 페이지를 열 수 있습니다:

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/expose-a-web-service/18581703.png" class="no-border" >}}

    목록에서 웹 서비스의 이름을 볼 수 있습니다.
4. "WSDL schema" URL을 클릭하여 WSDL을 여세요. 이 WSDL을 다른 사람에게 제공하여 웹 서비스와 상호 작용할 수 있도록 하세요.

## 인증 및 사용자

사용자 인증을 변경하려면 다음 단계를 따르세요:

1. **App Explorer**에서 게시된 웹 서비스를 더블클릭하세요.
2. **Published Web Service** 속성 창에서 **Settings** 탭을 여세요. **No Authentication**이 설정되어 있으므로 현재 웹 서비스 사용자는 인증할 필요가 없습니다:

    {{< figure src="/attachments/refguide10/modeling/integration/web-services/expose-a-web-service/18581702.png" class="no-border" >}}

3. **Authentication**을 **Username and password**로 변경하세요.

4. **OK**를 클릭하고 애플리케이션을 다시 실행하세요. 이제 사용자는 웹 서비스를 사용하기 전에 인증해야 합니다.

Studio Pro를 사용하면 자체 사용자 객체가 `System.User`를 상속하는 한 자체 사용자 관리 기능을 만들 수 있습니다. `System` 모듈의 `User` 엔티티에는 `WebServiceUser` Boolean 속성이 포함되어 있습니다. 이 속성은 사용자가 웹 서비스와 상호 작용할 수 있는지 여부를 결정합니다. 특정 사용자가 웹 서비스와 상호 작용할 수 있게 하려면 이 속성의 값이 **True**여야 합니다.

## 고려 사항

웹 서비스를 노출할 때 다음 사항을 고려하세요:

* Studio Pro에서 일부 단어는 Mendix 사용을 위해 예약되어 있습니다(예: type, Enumeration)
* 앞에 밑줄("`_`")이 있는 "_type" 속성을 게시하고 싶지 않을 수 있으므로, 선택한 속성 창의 마지막 열에서 WSDL 이름을 변경할 수 있습니다
* 게시 후 속성 이름을 변경하면 WSDL의 이름은 자동으로 변경되지 않습니다(고객의 구현이 깨질 수 있기 때문)

## 더 읽기

* [복잡한 웹 서비스 사용하기](/howto10/integration/consume-a-complex-web-service/)
* [간단한 웹 서비스 사용하기](/howto10/integration/consume-a-simple-web-service/)
* [XML 문서 내보내기](/howto10/integration/export-xml-documents/)
* [Excel 문서 가져오기](/howto10/integration/importing-excel-documents/)
* [Selenium 지원 활성화](/howto10/integration/selenium-support/)
* [XML 문서 가져오기](/howto10/integration/importing-xml-documents/)
* [REST 서비스 사용하기](/howto10/integration/consume-a-rest-service/)
* [OData를 사용하여 BI 도구에 데이터 노출하기](/howto10/integration/exposing-data-to-bi-tools-using-odata/)
