---
title: "레거시 시스템을 Mendix 앱에 통합하기"
linktitle: "레거시 시스템 통합"
url: /refguide10/integrate-a-legacy-system/
weight: 50
description: "기존 시스템을 Mendix 앱에 통합하기 위한 잠재적 옵션을 평가하고 REST를 사용하여 레거시 시스템과 통합하는 방법을 설명합니다."
aliases: 
    - /howto10/integration/integrating-a-legacy-system-into-a-mendix-app/
---

## 소개

Mendix 애플리케이션은 기존 시스템과 자주 통신해야 합니다. 기존 플랫폼을 완전히 교체하거나 기존 데이터베이스를 활용하여 앱을 향상시키든, 레거시 시스템과의 통합 능력은 성공의 핵심입니다. 이 사용 방법 문서에서는 레거시 시스템과 통합하기 위해 Mendix 플랫폼 내에 존재하는 다양한 옵션을 소개합니다.

이 사용 방법 문서에서는 다음을 배우게 됩니다:

* 기존 시스템을 Mendix 앱에 통합하기 위한 잠재적 옵션 평가
* REST를 사용하여 레거시 시스템과 통합

## 전제 조건

이 사용 방법을 시작하기 전에 다음 전제 조건을 완료했는지 확인하세요:

* Domain Model 생성 방법 숙지 (자세한 내용은 [Domain Model 구성하기](/refguide10/configuring-a-domain-model/)를 참조하세요)
* 개요 및 상세 페이지 생성 방법 숙지 (자세한 내용은 [첫 번째 개요 및 상세 페이지 만들기](/howto10/front-end/create-your-first-two-overview-and-detail-pages/)를 참조하세요)
* Microflow 생성 방법 숙지 (자세한 내용은 [첫 번째 Microflow 구축하기: Hello world!](/refguide10/triggering-microflow-from-menu-item/)를 참조하세요)
* REST 및 웹 서비스의 개념 이해 (자세한 내용은 [복잡한 웹 서비스 사용하기](/howto10/integration/consume-a-complex-web-service/)를 참조하세요)
    * 레거시 시스템 위에 노출된 REST 서비스를 만드는 것은 이 튜토리얼의 범위를 벗어납니다. 이를 수행하는 방법에 대한 지침은 비-Mendix 플랫폼의 구성을 참조하세요

## REST를 사용하여 레거시 시스템과 상호 작용

레거시 시스템이 웹 서비스로 데이터를 노출할 수 있는 경우, Mendix REST 모듈을 사용하여 통합을 수행할 수 있습니다. 이 기술을 사용하면 필요한 경우에만 데이터에 접근하면서 기록 시스템을 보존할 수 있습니다.

이 기술을 사용하는 것을 고려해야 하는 상황은 다음과 같습니다:

* JSON을 노출하는 RFC 호출이 있는 SAP 아키텍처
* 웹 서비스 레이어가 있는 CRM 시스템 또는 데이터베이스

이 섹션에서는 REST를 사용하여 레거시 시스템에서 데이터를 검색하고 애플리케이션에 통합하는 방법을 배웁니다.

이 사용 방법에서는 공개적으로 사용 가능한 Google Books API를 사용합니다 (자세한 내용은 [Google Books APIs Getting Started](https://developers.google.com/books/docs/v1/getting_started)를 참조하세요). 이 데이터 모델을 중심으로 예제를 구성합니다. 각 레거시 시스템은 내부 데이터 모델에 기반한 다른 JSON 구조를 가집니다. 이 예제는 주어진 저자 검색 매개변수를 사용하여 책 컬렉션을 반환합니다. 이 API를 사용하려면 API 키를 수집해야 합니다 ([Google Books APIs API 키 획득 및 사용](https://developers.google.com/books/docs/v1/using?csw=1#APIKey)에 설명되어 있습니다). 이 특정 API의 응답 구조는 다음과 같습니다:

1. 이 JSON에 적합한 데이터 모델을 구성합니다.

    {{% alert color="warning" %}}모든 REST 서비스는 서로 다른 특정 JSON 구조를 가집니다. Mendix에서 JSON 데이터 구조를 구축하는 방법에 대한 자세한 내용은 [JSON Structures](/refguide10/json-structures/)를 참조하세요.{{% /alert %}}

2. 사용자가 저자와 제목을 입력할 수 있는 **BookSearch**라는 비영속 검색 Entity를 만듭니다. 이것은 두 번째 객체에 연결되어야 합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/integrating-a-legacy-system/18582034.png" class="no-border" >}}

3. 사용자가 검색어를 입력할 수 있는 데이터 뷰가 포함된 페이지를 만듭니다. 이 데이터 뷰의 데이터 소스는 새 검색 객체를 생성하여 반환하는 새 Microflow여야 합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/integrating-a-legacy-system/18582041.png" class="no-border" >}}

4. Microflow 버튼과 검색을 수행할 해당 Microflow를 만듭니다. 이 Microflow는 Marketplace REST 모듈에 포함된 REST `GET` Java Action을 사용합니다:

    {{< figure src="/attachments/refguide10/modeling/integration/rest-services/integrating-a-legacy-system/18582030.png" class="no-border" >}}

    이 플로우의 Microflow 활동은 다음과 같습니다:

    * 새 응답 객체를 생성합니다.<br>
    * 다음 대상을 사용하여 API에 REST 호출을 합니다:<br>

        {{< figure src="/attachments/refguide10/modeling/integration/rest-services/integrating-a-legacy-system/18582035.png" class="no-border" >}}<br>

    * 응답과 연관된 모든 항목을 검색하는 하위 Microflow를 호출합니다. 각 항목에는 연관된 모든 볼륨이 검색됩니다:

        {{< figure src="/attachments/refguide10/modeling/integration/rest-services/integrating-a-legacy-system/18582031.png" class="no-border" >}}<br>

    * **VolumeList**를 반복하고 검색 결과를 표시하기 위해 새 **BookResult** 객체를 만듭니다:

        {{< figure src="/attachments/refguide10/modeling/integration/rest-services/integrating-a-legacy-system/18582037.png" class="no-border" >}}<br>

    * 각 볼륨에 대해 **Over Association**으로 저자 목록을 검색합니다.<br>
    * 저자 이름 목록을 반복하고 **Change** 활동을 사용하여 저자 이름을 추가합니다. 이는 다음 상황을 수용하기 위해 수행됩니다:

        {{< figure src="/attachments/refguide10/modeling/integration/rest-services/integrating-a-legacy-system/18582036.png" class="no-border" >}}

5. 사용자가 애플리케이션에 로그인하고 검색어를 입력하면, REST 호출을 통해 결과가 성공적으로 채워집니다.

위의 예제는 Mendix 애플리케이션이 REST를 사용하여 데이터 시스템을 빠르게 통합하는 방법을 보여줍니다. 이 기본 프레임워크를 기반으로 다양한 활동을 통합할 수 있습니다. 이 프레임워크를 확장할 수 있는 방법은 다음과 같습니다:

* Mendix에서 데이터를 활용하기 위한 추가 Microflow 처리 로직 추가
* REST `POST` 액션을 사용하여 Mendix에서 값 푸시
* 다른 소스에서 Mendix 앱 데이터 업데이트

추가 문서 및 REST 서비스용 GitHub 프로젝트를 보려면 [Mendix RestServices GitHub 페이지](https://github.com/mendix/RestServices)를 참조하세요.

## 더 보기

* [REST Service 사용하기](/howto10/integration/consume-a-rest-service/)
* [복잡한 웹 서비스 사용하기](/howto10/integration/consume-a-complex-web-service/)
* [간단한 웹 서비스 사용하기](/howto10/integration/consume-a-simple-web-service/)
* [웹 서비스 노출하기](/howto10/integration/expose-a-web-service/)
