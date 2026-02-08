---
title: "Consumed OData Service"
url: /refguide8/consumed-odata-service/
weight: 10
---

## 소개

[Data Hub 패널](/refguide8/data-hub-pane/)을 통해 프로젝트 모듈에서 외부 Entity를 사용하면 소비된 서비스의 세부 정보를 지정하는 Consumed OData Service 문서가 추가됩니다. 이것은 게시 앱에 대한 API이자 Entity와 연관된 데이터입니다.

## Consume OData Service 화면

프로젝트에 추가된 **Consumed OData Service** 문서는 다음 정보를 표시합니다:

{{< figure src="/attachments/refguide8/modeling/integration/consumed-odata-services/consumed-odata-service/consumed-odata-doc-connection-tab.png" alt="Connection Tab" class="no-border" >}}

* 서비스 이름과 원본 앱의 소스 애플리케이션 아이콘
* 소비된 서비스의 버전 번호
* **View in Catalog** 링크 - 등록된 전체 서비스 세부 정보를 볼 수 있는 **Service Details**로 이동합니다
* **Update/Switch** – 동일한 앱 및 서비스에 대해 [Catalog](/catalog/)에서 감지된 다른 버전으로 소비된 서비스 계약을 업데이트할 수 있습니다. 버튼은 Catalog에서 소비된 계약에 대해 반환된 내용에 따라 다음을 표시합니다:
    * **Update** – 현재 소비된 계약(**Consumed OData Service** 문서에 표시됨)을 **업데이트**할 수 있도록 이 버튼이 표시됩니다. 현재 서비스 엔드포인트에 있는 계약이 제시됩니다. 동일한 엔드포인트에는 비파괴적인 마이너 변경만 배포하는 것이 모범 사례입니다.
    * **Switch** – 동일한 서비스의 다른 등록된 인스턴스(같은 이름, 같은 앱에서)가 Catalog에서 사용 가능하고 다른 엔드포인트에 배포된 경우(예: 다른 환경으로 또는 이전 버전을 소비하는 기존 앱을 중단시킬 변경으로 인해) 이 버튼이 표시됩니다

    {{% alert color="info" %}}Studio Pro는 **Consumed OData Service**에 대한 **Update** 옵션을 표시하여 업데이트가 가능한지 확인할 수 있습니다. Data Hub 검색 및 **Project** 패널에서 서비스 엔드포인트에서 다른 계약이 감지되면 서비스에 대해 업데이트 화살표로 표시됩니다. 서비스 업데이트 및 전환에 대한 자세한 정보는 이 문서의 [Consumed OData Service 업데이트 또는 전환](#updating) 섹션을 참조하십시오. {{% /alert %}}

    {{% alert color="info" %}}**Data Hub** 패널에서 **Update**가 사용 가능한 소비된 서비스에는 이를 나타내는 업데이트 화살표가 표시됩니다:<br />
    {{< figure src="/attachments/refguide8/modeling/integration/consumed-odata-services/consumed-odata-service/data-hub-pane-update-available.png" alt="update service data hub pane" class="no-border" >}}
    {{% /alert %}}

### Connection 탭

**Connection** 탭은 Consumed OData Service의 연결 값을 표시합니다:

### 서비스 URL {#service-url}

**Service URL**은 서비스 엔드포인트의 URL을 표시합니다:

* **Select**를 클릭하여 서비스에 대한 다른 [Constant](/refguide8/constants/)를 선택하십시오
* **Show**를 클릭하여 서비스 URL 또는 엔드포인트를 표시하는 **Constant** 대화 상자를 표시하십시오:

    {{< figure src="/attachments/refguide8/modeling/integration/consumed-odata-services/consumed-odata-service/consumed-service-constant.png" alt="Connection Tab" class="no-border" >}}

### 시간 초과

**Timeout**은 서비스 엔드포인트에서 데이터를 가져오는 응답 시간입니다. **Timeout (s)**의 초 수 이후에 엔드포인트가 응답하지 않으면 예외가 발생합니다. 이것이 Microflow 액티비티 중에 발생하면 Microflow가 롤백되거나 사용자 정의 [오류 처리](/howto8/logic-business-rules/set-up-error-handling/)로 이동합니다.

기본값: *300초*

### 프록시 구성

**Proxy configuration**을 통해 요청에 프록시를 사용할지 구성할 수 있습니다:

* **Use project settings** – 프로젝트 수준에서 정의된 설정을 사용합니다(기본값)
* **Override** – 프록시의 호스트, 포트, 사용자 이름 및 비밀번호 설정을 지정하여 이 Action에 대한 프로젝트 수준 설정을 재정의합니다
* **No proxy** – 프로젝트 수준에서 프록시가 구성되어 있더라도 이 서비스에 대해 프록시를 사용하지 않습니다

{{% alert color="info" %}}
대부분의 경우 이 설정을 무시하고 기본값인 **Use project settings**를 사용할 수 있습니다.
{{% /alert %}}

### 인증

**Use HTTP authentication** 체크박스는 기본 인증을 사용할지 여부를 지정합니다. 선택한 경우 다음 세부 정보를 지정해야 합니다:

* **User name** – 인증에 사용될 사용자 이름을 정의합니다
* **Password** – 인증에 사용될 비밀번호를 정의합니다

기본 인증 외에도 사용자 정의 인증을 사용할 수 있습니다. 자세한 정보는 아래의 [HTTP 헤더](#http-headers) 섹션을 참조하십시오.

### HTTP 헤더 {#http-headers}

**Add**, **Edit** 또는 **Delete**를 클릭하여 사용자 정의 HTTP 인증 헤더를 위해 엔드포인트에 전달할 추가 HTTP 요청 헤더를 이 목록에 지정할 수 있습니다. 각 사용자 정의 헤더는 키와 값의 쌍입니다.

**Headers from a Microflow**를 사용하면 동적 값에 대한 키와 값 쌍을 생성하는 Microflow를 지정할 수 있습니다. Microflow는 **System.HttpHeader** 객체 목록을 반환해야 합니다.

{{% alert color="info" %}}
보다 유연한 HTTP 요청 헤더의 경우 **System.HttpHeader** 목록을 반환하는 Microflow를 선택할 수 있습니다. 이 Microflow는 **System.HttpResponse** 타입의 파라미터를 가질 수 있습니다. Microflow는 요청이 이루어질 때마다 호출됩니다. 처음에는 HTTP 응답 파라미터가 비어 있습니다. 응답이 **401 Unauthorized**인 경우 해당 HTTP 응답으로 Microflow가 호출되고 새 HTTP 헤더로 다른 호출이 이루어집니다.
{{% /alert %}}

{{% alert color="info" %}}
사용자 정의 인증은 인증 값이 검색되는 Microflow(예: SSO)로 수행할 수 있습니다. 접근 및 인증에 대한 자세한 정보는 Studio Pro 10 가이드의 *Security and Shared Datasets* 문서에서 [Using Custom HTTP Header Validation for Published Entities](/refguide10/security-shared-datasets/#http-header-validation)를 참조하십시오.
{{% /alert %}}

## Metadata 탭 {#metadata}

**Metadata** 탭에서 메타데이터 파일을 선택하거나 URL을 통해 얻은 메타데이터를 사용할 수 있습니다:

{{< figure src="/attachments/refguide8/modeling/integration/consumed-odata-services/consumed-odata-service/metadata-tab.jpg" alt="Metadata Tab" class="no-border" >}}

### 메타데이터 편집기

메타데이터 편집기를 사용하면 파일이나 URL에서 OData 계약을 열 수 있습니다. 이미 계약을 소비한 경우 이 편집기를 사용하여 파일이나 URL에서 새 버전으로 기존 계약을 업데이트할 수 있습니다.

**메타데이터 편집기**를 열려면 **Edit**를 클릭하십시오. 편집기에서 메타데이터의 URL 또는 파일을 지정할 수 있습니다:

{{< figure src="/attachments/refguide8/modeling/integration/consumed-odata-services/consumed-odata-service/metadata-editor.jpg" alt="Metadata Editor" class="no-border" >}}

다음 설정을 사용할 수 있습니다:

* **Import from** – 메타데이터 위치에 대해 **URL** 또는 **File**을 선택하십시오:
    * **URL** – **Edit**를 클릭하여 메타데이터의 URL을 지정하십시오
    * **File** – **Browse**를 클릭하여 XML 메타데이터 파일을 선택하십시오

[버전 8.16.0](/releasenotes/studio-pro/8.16/)부터 기본 인증 지원이 추가되었습니다. URL에서 메타데이터를 다운로드할 때 서버가 사용자 이름과 비밀번호(기본 인증)를 요청할 수 있습니다. 이 경우 대화 상자에서 사용자 이름과 비밀번호를 입력하라는 메시지가 표시됩니다. 메타데이터 파일이 동일한 서버의 동일한 영역 내의 다른 메타데이터 파일을 참조하는 경우 사용자 이름과 비밀번호가 재사용됩니다.

{{% alert color="info" %}}
이 정보는 저장되지 않으므로 동일한 서버에서 메타데이터를 다시 다운로드하면 사용자 이름과 비밀번호를 다시 입력해야 합니다.
{{% /alert %}}

메타데이터를 가져오면 [Data Hub 패널](/refguide8/data-hub-pane/)에서 Consumed OData Service의 외부 Entity를 추가할 수 있습니다.

### Consumed OData Service 속성

Consumed OData Service의 **Properties** 탭을 클릭하면 OData 서비스 문서에 대해 정의된 속성과 다음 추가 속성이 표시됩니다:

{{< figure src="/attachments/refguide8/modeling/integration/consumed-odata-services/consumed-odata-service/consumed-odata-service-doc-properties.png" class="no-border" >}}

* **Entities** – Entity 및 관련 데이터셋을 정의하는 메타데이터의 URL
* **Documentation** – 현재 앱에 대한 이 서비스의 추가 설명
* **Service name** – 소비되는 Published OData Service의 이름
* **Service version** – 소비되는 서비스의 버전
* **Service ID** – Catalog에서 서비스의 고유 식별자
* **Application ID** – Catalog에서 서비스가 게시된 애플리케이션의 고유 식별자
* **Metadata** – 서비스를 정의하는 메타데이터 파일의 내용
* **OData version** – OData 버전(v3 또는 v4일 수 있음)

## Consumed OData Service 업데이트 또는 전환 {#updating}

### 서비스 엔드포인트에서 소비{#consume-service-endpoints}

프로젝트에 외부 Entity를 추가하면 특정 환경에 배포된 특정 버전의 서비스(*서비스 엔드포인트*)에서 Entity를 소비하게 됩니다. 서비스의 메타데이터 파일 또는 계약은 이 엔드포인트에 위치합니다.

다른 환경에 배포된 동일한 서비스는 다른 서비스 엔드포인트에 있으며 Catalog에서 다른 자산으로 등록됩니다. 다음 예제에서는 프로덕션 환경과 **Acceptance** 환경에 배포된 **CustomerApi service version 1.1.0**에 대한 두 개의 엔드포인트가 있습니다:

{{< figure src="/attachments/refguide8/modeling/integration/consumed-odata-services/consumed-odata-service/same-service-different-endpoints.png" alt="2 endpoints"   width="250"  class="no-border" >}}

**Acceptance** 환경에 배포된 **CustomerApi version 1.0.0**에서 **Customer** Entity를 프로젝트에 드래그하면 Studio Pro가 엔드포인트에 있는 계약에서 필요한 정보를 검색합니다.

### 서비스 버전의 시맨틱 넘버링 {#semantic}

다른 사용자가 소비하는 Published OData Service에 대해 변경 사항을 적용할 때 서비스 게시자가 엄격한 수정 프로세스를 채택하는 것이 중요합니다.

Mendix는 서비스 업데이트를 발행할 때 엄격한 버전 관리 시스템(예: 시맨틱 넘버링)을 사용할 것을 권장합니다. 서비스 버전은 다음 지침에 따라 서비스가 업데이트되고 배포될 때 변경 사항의 수준과 심각도를 명확하게 나타내야 합니다.

#### 마이너 서비스 업데이트

*마이너* 서비스 업데이트는 예를 들어 서비스에 추가된 필드나 포함된 새 작업으로, 이전 버전을 소비하는 앱을 중단시키지 않습니다.

시맨틱 넘버링을 사용하면 서비스에 대한 마이너/비파괴적 변경은 버전 번호의 소수 부분 증가로 나타낼 수 있습니다. 예: 1.0.11, 1.0.12, 1.1, 1.2.

마이너 서비스 업데이트는 동일한 서비스 엔드포인트에 배포할 수 있으며, 이를 통해 모든 소비 앱이 최신 버전의 서비스를 소비하도록 보장합니다.

#### 메이저 서비스 업데이트

*메이저* 서비스 업데이트는 예를 들어 Entity 또는 속성(Attribute)이 제거되거나 입력 파라미터가 필요한 경우로, 소비하는 앱과 호환되지 않아 소비 앱이 "중단"될 수 있습니다.

Published Service에 메이저 변경이 이루어진 경우, 메이저 변경이 있었음을 명확하게 나타내는 새 서비스 버전 번호와 함께 *다른 엔드포인트*에 서비스를 배포하는 것이 좋습니다. 시맨틱 넘버링에서는 정수의 증분 증가로 표시됩니다.

이 경우 새 서비스는 Catalog에 다른 서비스로 등록되며 별도의 자산으로 표시됩니다. 다음 예제에서는 **OrderManagementService**의 4개의 등록된 항목이 있습니다:

{{< figure src="/attachments/refguide8/modeling/integration/consumed-odata-services/consumed-odata-service/consume-major-service-update-version.png" alt="4 endpoints"   width="250"  class="no-border" >}}

버전 번호가 **1.0.0**에서 **2.0.0**으로 변경된 메이저 서비스 업데이트가 있습니다. 또한 두 버전 모두 **Acceptance**에 배포되어 Catalog에서 별도로 등록된 자산이 됩니다.

{{% alert color="info" %}}
Mendix가 아닌 OData 서비스의 Entity는 하나 이상의 필드의 키로 식별됩니다. 서비스 업데이트에서 키 필드가 변경되면 이것도 파괴적 변경으로 간주됩니다.
{{% /alert %}}

### 업데이트 또는 전환

소비된 서비스에 대한 마이너 및 메이저 업데이트가 Catalog에서 감지되면 **Consumed OData Service** 화면에서 다음 옵션을 사용할 수 있습니다.

#### 업데이트

**Update** 옵션은 Published OData Service의 새 버전이 발행되어 이전 버전과 동일한 엔드포인트에 배포될 때 사용할 수 있습니다. Studio Pro는 엔드포인트의 계약이 프로젝트에서 현재 소비되는 것과 다르다는 것을 인식합니다. 업데이트 후 Studio Pro는 엔드포인트에서 사용 가능한 것과 동일한 계약을 갖게 됩니다.

알려진 업데이트 제한 사항에 대해서는 *Consumed OData Service*의 [제한 사항](/refguide8/consumed-odata-services/#consumed-odata-service-limitations) 섹션을 참조하십시오.

##### Project 패널

**Project** 패널에서는 다음과 같이 표시됩니다:

{{< figure src="/attachments/refguide8/modeling/integration/consumed-odata-services/consumed-odata-service/project-pane-update-available.png" alt="update service project-pane" class="no-border" >}}

* *현재 소비되는* 서비스 버전이 표시됩니다(이 예에서 **1.0.11**)
* 파란색 **Update** - 클릭하여 **Update Service** 상자를 열고 계약을 새 것으로 업데이트하십시오. Studio Pro가 Catalog에서 새 계약을 검색하여 프로젝트에 로드합니다.
* 녹색 체크 표시로 표시되는 현재 서비스 버전에서 소비되는 Entity 목록

##### Data Hub 검색 결과

**Data Hub** 패널에서 동일한 소비된 서비스에 대한 검색 결과는 다음을 표시합니다:

{{< figure src="/attachments/refguide8/modeling/integration/consumed-odata-services/consumed-odata-service/data-hub-pane-update-available.png" alt="update service dhpane" class="no-border" >}}

* 현재 엔드포인트에 있는 서비스 버전, **1.0.12**

* 파란색 **Update** - 클릭하여 **Update Service** 상자를 열고 계약을 새 것으로 업데이트하십시오. Studio Pro가 Catalog에서 새 계약을 검색하여 프로젝트에 로드합니다.

* Catalog의 이 새 버전의 Entity 목록이 표시되며, 녹색 체크 표시로 표시된 로컬로 소비된 Entity를 포함합니다. 그러나 이전 버전의 계약이 현재 소비되고 있으므로 Domain Model에 드래그할 수 없음을 나타내기 위해 이러한 Entity는 회색으로 표시됩니다. 유일한 옵션은 **Update**를 클릭하여 업데이트된 OData Service를 검색하는 것입니다.

##### Update Service 대화 상자

**Consumed OData Service** 문서 또는 **Data Hub** 및 **Project** 패널의 업데이트 아이콘에서 **Update**를 클릭하면 **Update** 대화 상자가 표시됩니다.

{{< figure src="/attachments/refguide8/modeling/integration/consumed-odata-services/consumed-odata-service/update-service-dialog-box.png" alt="update service dhpane" class="no-border" >}}

프로젝트에서 현재 소비되는 Consumed OData Service(**1.0.0**)가 왼쪽에 표시되며, **Update**를 클릭하여 Catalog에서 새 계약(**2.0.0**)을 검색할 수 있습니다.

#### 전환

OData 서비스가 다른 엔드포인트 또는 다른 환경에 게시되면 Catalog에서 다른 자산으로 등록됩니다.

위의 [서비스 엔드포인트에서 소비](#consume-service-endpoints) 섹션에 제공된 예제에서 **Acceptance** 환경에서 서비스를 소비하는 경우 Consumed OData Service 화면에 **Switch** 버튼이 표시되어 **Production**에서 동일한 서비스를 소비할 수 있습니다.

#### 소비된 서비스 전환

여러 환경에 배포되거나 메이저 서비스 업데이트(따라서 다른 엔드포인트에 배포됨)로 게시된 Published OData Service는 **Data Hub** 패널의 검색 결과에서 별도의 항목으로 표시됩니다.

다음 예제에서 프로덕션 환경에 배포된 **OrderManagementService** 버전 **1.0.0**이 앱에서 소비됩니다. 그러나 동일한 서비스가 **Acceptance** 환경에 배포되어 있습니다:

{{< figure src="/attachments/refguide8/modeling/integration/consumed-odata-services/consumed-odata-service/consume-major-service-update.png" alt="major change environment" class="no-border" >}}

**Acceptance 환경**에 배포된 서비스를 소비하려면 다음 단계를 따르십시오:

1. **Consumed OData Service** 화면에서 **Update** > **Switch**를 클릭하십시오:

    {{< figure src="/attachments/refguide8/modeling/integration/consumed-odata-services/consumed-odata-service/update-switch.png" alt="major change environment" class="no-border" >}}

2. **Switch** 대화 상자에서 드롭다운 목록에서 소비하려는 서비스를 선택하고 **Switch**를 클릭하십시오:

    {{< figure src="/attachments/refguide8/modeling/integration/consumed-odata-services/consumed-odata-service/switch-environment.png" alt="major change environment" class="no-border" >}}

3. 소비된 서비스가 이제 새로 선택한 환경에서 소비됩니다. **Consumed OData Service** 화면의 정보가 변경된 서비스 세부 정보를 표시하고 **Data Hub** 패널에 선택한 환경에서 소비하고 있음이 표시됩니다:

    {{< figure src="/attachments/refguide8/modeling/integration/consumed-odata-services/consumed-odata-service/switch-new-environment.png" alt="major change environment dh pane"   width="300"  class="no-border" >}}

## 추가 정보

* [Data Hub 패널](/refguide8/data-hub-pane/)
* [Consumed OData Service](/refguide8/consumed-odata-service/)
