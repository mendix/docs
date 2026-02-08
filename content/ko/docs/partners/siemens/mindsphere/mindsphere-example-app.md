---
title: "Siemens Insights Hub Monitor 예제 사용"
linktitle: "Insights Hub Monitor 예제"
url: /partners/siemens/mindsphere-example-app/
weight: 110
---

## 소개

Siemens의 개방형 클라우드 기반 IoT 운영 체제인 Insights Hub에 저장된 데이터를 분석하는 Mendix 앱을 작성할 수 있습니다. 앱 구축을 돕기 위해 [Siemens Insights Hub Monitor Example](https://marketplace.mendix.com/link/component/117954) 앱이 Mendix Marketplace에서 제공되며 새로운 Mendix 앱의 시작점으로 사용할 수 있습니다.

이 문서는 Insights Hub 예제 앱에 대한 추가 설명을 제공합니다. 이 앱은 프로덕션용이 아닙니다. Mendix/Insights Hub 앱을 구축하기 시작하는 방법의 예제로 설계되었습니다.

Insights Hub Platform에 앱을 배포하는 방법에 대한 자세한 정보는 [Siemens Insights Hub – 배포](/developerportal/deploy/deploying-to-mindsphere/)를 참조하십시오. Mendix로 Insights Hub 앱을 개발하는 방법에 관심이 있으시면 [Mendix로 Insights Hub 앱 구축](https://academy.mendix.com/link/path/80/Build-a-MindSphere-app-with-Mendix) 학습 경로를 방문하십시오.

## 전제 조건

Insights Hub에서 앱을 실행하려면 아래에 설명된 전제 조건을 완료해야 합니다.

### 역할

Developer Cockpit이 포함된 테넌트(예: [Start for free](https://siemens.mindsphere.io/en/start) 테넌트)의 Insights Hub 사용자 계정이 필요합니다. 이 계정에는 다음 코어 역할이 필요합니다:

* mdsp:core:Developer
* mdsp:core:StandardUser
* mdsp:core:TenantUser

## Studio Pro에서 앱 열기

앱을 열지 않고 Studio Pro를 열고 다음 단계를 따르십시오:

1. Studio Pro 상단 바에서 *Switch to* 메뉴를 열고 Marketplace 아이콘을 클릭하여 브라우저에서 Mendix Marketplace를 여십시오:

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/app-store-icon.png" >}}

2. 검색 상자에 *Insights Hub Monitor*를 입력하고 검색 결과에서 **Siemens Insights Hub Monitor Example**을 선택하십시오:

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/app-store-search.png" >}}

3. **Download**를 클릭하고 **SiemensInsightsHubMonitorExample_V2_0_0.mpk**를 로컬 머신에 저장하십시오.

4. Studio Pro로 돌아가서 **File** 메뉴에서 **Import App Package…**를 선택하여 다운로드한 앱 패키지를 가져오십시오.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/app-store-import-app-package.png" >}}

5. **App name**과 **App directory**를 확인한 후 **OK**를 클릭하십시오:

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/app-store-download-project.png" >}}

## 예제 앱 배포 및 실행

Insights Hub용 Mendix 기반 애플리케이션은 Mendix 또는 Insights Hub에 배포할 수 있습니다. Mendix에 배포하는 것이 매우 쉬우며 자동 등록 프로세스를 사용할 수 있으므로 선호되는 옵션입니다.
배포 옵션에 대한 자세한 정보는 [Insights Hub에 배포](/developerportal/deploy/deploying-to-mindsphere/#deploying-your-app)를 참조하십시오.

자동 등록 프로세스를 시작하려면 **Publish** 버튼을 클릭하십시오.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/autoreg-publish.png" >}}

앱이 Mendix에 배포되면 **View App**을 클릭하십시오.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/autoreg-view-app.png" >}}

기본 브라우저가 열리고 앱이 시작되면 등록 프로세스가 트리거됩니다.

### 자동 등록

Insights Hub 내에서 실행되는 모든 앱은 등록이 필요합니다. 앱을 처음 열면 현재 등록되지 않았음을 인식하고 등록을 수행하라는 메시지가 표시됩니다. Developer Cockpit에서 수동으로 할 수 있지만, 여기서는 더 쉬운 자동 등록 프로세스를 따릅니다.

1. **Start Auto Registration**을 클릭하십시오.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/autoreg-choose-app-registration.png" alt="Choose app registration" >}}

    프로세스가 앱을 등록해야 할 테넌트를 파악하려고 합니다. 따라서 로그인해야 합니다.

2. 자격 증명을 입력하고 **Sign In**을 클릭하십시오.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/autoreg-web-key.png" alt="Choose app registration" >}}

    {{% alert color="info" %}}Developer Cockpit 옵션이 있는 테넌트가 두 개 이상인 경우 Insights Hub는 해당 테넌트 목록을 표시합니다. 앱을 등록하려는 테넌트를 선택하십시오.<br/><br/>Insights Hub에 테넌트가 하나만 있는 경우 프로세스가 자동으로 해당 테넌트를 선택합니다.{{% /alert %}}

3. 앱을 등록하기 위해 **Display Name**, **Internal Name** 및 선택적으로 **Description**을 입력하십시오.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/autoreg-name-description.png" alt="Choose app registration" >}}

    **Start for Free** 테넌트에서는 **admin** 역할이 계정에 자동으로 할당됩니다. 다른 모든 테넌트의 경우 계정에 자동으로 할당될 애플리케이션 사용자 역할을 하나 이상 선택해야 합니다.

4. 테넌트에서 등록 프로세스를 시작하려면 **Register**를 클릭하십시오.

    몇 초 후에 요약 페이지가 표시됩니다.

    {{% alert color="warning" %}}애플리케이션을 직접 실행하지 **마십시오**.{{% /alert %}}

    Siemens Insights Hub Monitor Example 앱은 상당히 많은 Insights Hub API를 사용합니다. 애플리케이션을 등록할 때 앱에서 사용하려는 각 API에 대한 액세스도 부여해야 합니다. 따라서 Operations Insight 애플리케이션에 대해 이 작업을 수행해야 합니다.

5. API에 대한 액세스를 부여하기 위해 **Developer Cockpit**을 클릭하십시오.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/autoreg-registration-completed.png" alt="Choose app registration" >}}

    앱의 등록 세부 정보를 보여주는 새 탭이 열립니다.

6. 필요한 Insights Hub 역할을 추가하려면 **Configure**를 클릭하십시오.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/devcockpit-app-details.png" alt="Choose app registration" >}}

7. 다음 Insights Hub API 역할을 앱에 추가하고 아래 표에 표시된 대로 올바른 애플리케이션 역할 **admin** 및 **user**에 할당하십시오:

    | **Insights Hub 애플리케이션 역할** | **Admin** | **User** |
    | ------------------------------- | --------- | -------- |
    | mdsp:core:assetmanagement.standarduser | X |  X |
    | mdsp:core:em.eventcreator | X |   |
    | mdsp:core:em.eventmanager | X |   |
    | mdsp:core:em.eventviewer | X |  X |
    | mdsp:core:iot.filAdmin | X |   |
    | mdsp:core:iot.filUser | X |  X |
    | mdsp:core:.iot.tsaUser | X |  X |
    | mdsp:core:.iot.timUser | X |  X |
    | mdsp:core:mindconnect.fullaccess | X |   |
    | mdsp:core:mindconnect.readonly | X |  X |
    | mdsp:core:tm.tenantUser | X |  X |
    | mdsp:core:tsm.full-access | X |   |
    | mdsp:core:tsm.read-only | X |  X |

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/devcockpit-mdsp-api-roles.png" alt="Choose app registration" >}}

    이제 앱 구성이 완료되었습니다.

8. **Registration completed!** 브라우저 탭으로 돌아가서 **Launch your application**을 클릭하면 앱이 시작됩니다.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/oi-home.png" alt="Choose app registration" >}}

### 스코프 및 역할{#scopesroles}

자동 등록 프로세스에서 *admin*과 *user* 두 개의 Insights Hub 애플리케이션 역할이 생성되었습니다:

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/devcockpit-app-roles.png" alt="Developer Cockpit application roles" >}}

Launchpad에 있는 *Settings* 앱에서 사용자에게 이러한 애플리케이션 역할을 할당할 수 있습니다.

또한 자동 등록 프로세스에서 *admin*과 *user* 두 개의 Insights Hub 애플리케이션 스코프가 생성되었으며 다음과 같이 역할에 할당되었습니다:

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/devcockpit-app-scopes.png" alt="Developer Cockpit application roles" >}}

예제 앱에는 *Admin*과 *User* 두 개의 Mendix 사용자 역할이 있습니다. 이들은 *admin*과 *user* 두 개의 애플리케이션 스코프에 매핑됩니다.

이는 앱에 대해 **Admin Role**이 부여된 Insights Hub 사용자에게 *admin* 스코프가 주어지며 따라서 Mendix 사용자 역할 *admin*을 갖게 된다는 것을 의미합니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/roles-and-scopes.png" alt="Relationship of Insights Hub App user roles with Mendix App user roles" >}}

자세한 정보는 Insights Hub 문서 [애플리케이션의 역할 및 스코프](https://developer.mindsphere.io/concepts/concept-roles-scopes.html#available-roles-of-mindsphere-apis)를 참조하십시오.

## 앱을 로컬에서 실행

앱을 로컬에서 실행하고 테스트하려면 [로컬 테스트](/partners/siemens/mindsphere-development-considerations/#localtesting)에 설명된 단계를 따르십시오.

## 더 읽기

* [Insights Hub 개발 고려 사항](/partners/siemens/mindsphere-development-considerations/)
* [Insights Hub 모듈 상세 정보](/partners/siemens/mindsphere-module-details/)
