---
title: "Teamcenter용 3D Viewer"
url: /partners/siemens/3d-viewer-for-teamcenter/
description: "3D Viewer for Teamcenter is an add-on module for the 3D Viewer app service. It adds additional functionality to enable fetching a JT model from a Teamcenter instance and visualize it using existing 3D Viewer widgets."
---

## 소개

[3D Viewer for Teamcenter](https://marketplace.mendix.com/link/component/118608) 모듈은 [Teamcenter Connector](https://marketplace.mendix.com/link/component/111627)의 도움으로 Teamcenter 인스턴스에서 JT 모델을 연결, 검색 및 가져올 수 있게 합니다. 이는 3D 모델로 작업하는 데 도움이 되는 사용하기 쉬운 나노플로우(Nanoflow) 및 마이크로플로우(Microflow)를 제공하는 [3D Viewer](/partners/siemens/3d-viewer/) 앱 서비스의 애드온 모듈입니다.

### 일반적인 사용 사례

이 모듈을 사용하여 Teamcenter 인스턴스에 저장된 JT 모델을 검색하고 가져온 다음 [3D Viewer](/partners/siemens/3d-viewer/) 위젯(Widget)을 사용하여 가져온 모델을 시각화할 수 있습니다. 모델을 가져오면 모델 제품 구조 트리 및 PMI 트리 탐색, 단면 절단 등 3D Viewer 기본 제공 도구에서 활성화된 많은 기본 작업을 수행할 수 있습니다.

{{% alert color="warning" %}}
이 모듈만으로는 3D 모델을 시각화하기에 충분하지 않습니다.
{{% /alert %}}

### 기능

이 모듈을 사용하면 다음을 수행할 수 있습니다:

* Teamcenter 인스턴스에 로그인
* 리비전 규칙을 설정하여 Teamcenter에서 모델 검색
* 항목 리비전과 연결된 모델 가져오기
* 3D Viewer 앱 서비스와 함께 사용할 때 모델 시각화 및 검사

### 종속성

Teamcenter 인스턴스에 저장된 모델을 시각화하려면 앱에 다음 컴포넌트도 가져와야 합니다:

* [3D Viewer](https://marketplace.mendix.com/link/component/118345) 앱 서비스 – JT 모델을 시각화하는 데 필요한 기본 제공 위젯(Widget)과 도메인 모델(Domain Model) 엔티티(Entity)를 제공합니다
* [Teamcenter Connector](https://marketplace.mendix.com/link/component/111627) – 3D Viewer 앱 서비스가 Teamcenter에서 모델을 연결하고 로드하는 데 필요합니다

### 제한 사항

Teamcenter에서 모델을 시각화하기 위한 제한 사항은 3D Viewer와 유사합니다. 자세한 내용은 *3D Viewer*의 [제한 사항](/partners/siemens/3d-viewer/#limitations) 섹션을 참조하십시오.

## 전제 조건

다음 전제 조건이 갖춰져 있는지 확인하십시오:

* [Studio Pro 9.4.0](/releasenotes/studio-pro/9.4/) 이상 설치
* 실행 중인 Teamcenter 인스턴스(Teamcenter 인스턴스를 구성하려면 **Teamcenter Host Address** 및 **Teamcenter FMS URL**이 필요합니다 – 자세한 정보는 아래의 [Teamcenter 인스턴스 데이터에 액세스하기 위한 Teamcenter Login API 재사용](#reusing) 섹션을 참조하십시오)
* Teamcenter 계정(관리자 사용자 계정과 비관리자 사용자 계정을 모두 보유하는 것이 좋습니다)

## 설치

Teamcenter 인스턴스에서 가져온 모델을 시각화하려면 아래 컴포넌트를 앱에 가져와야 합니다(필요에 따라 [Marketplace 콘텐츠 사용 방법](/appstore/use-content/)의 지침을 따르십시오):

* [3D Viewer for Teamcenter](https://marketplace.mendix.com/link/component/118608)
* [3D Viewer](https://marketplace.mendix.com/link/component/118345) 앱 서비스(v.2.0.0 이상)
* [Teamcenter connector](https://marketplace.mendix.com/link/component/111627)(v.3.3.0)

다운로드 및 가져오기 후 설치된 컴포넌트의 **Administrator** 및 **User** [모듈 역할](/refguide/module-security/#module-role)을 앱에서 해당하는 [사용자 역할](/refguide/user-roles/)에 매핑해야 합니다.

## 앱 시작 시 초기화

이 모듈을 자동으로 시작하려면 다음 단계를 따르십시오:

1. **Startup** 마이크로플로우(Microflow)를 만들고 **Viewer3D/USE_ME/VisServerAction** 및 **Viewer3D_TC/USE_ME/VisServerAction_TC** Java 액션을 마이크로플로우(Microflow)에 추가하십시오.
2. 반환 유형을 **Value**가 **true**인 Boolean으로 설정하십시오.
3. **App Settings** > **Runtime** > **After startup**을 통해 마이크로플로우(Microflow)를 After Startup 단계로 설정하십시오.
4. **Visualization Server** Java 액션을 더블 클릭하고 **Http endpoint**가 `@Viewer3D.HttpEndpoint`로 설정되어 있는지 확인하십시오:

    {{< figure src="/attachments/partners/siemens/3d-viewer/3d-viewer-for-teamcenter/teamcenter-startupflow.jpg" alt="teamcenter-startupflow" class="no-border" >}}

## 사용법

3D Viewer 앱 서비스는 JT 모델을 시각화하기 위한 위젯(Widget) 세트와 Mendix 파일 스토리지에 저장된 데이터를 가져오기 위한 나노플로우(Nanoflow) 및 Java 액션 세트를 제공합니다. 한편 Teamcenter Connector 모듈은 Teamcenter 인스턴스와 상호 작용하기 위한 전체 규모의 API를 제공합니다.

3D Viewer for Teamcenter 모듈은 위의 두 컴포넌트 사이의 중간 계층 역할을 합니다. 주로 Teamcenter Connector가 제공하는 API를 활용하고 Teamcenter 인스턴스에서 JT 형식 모델 데이터를 가져오기 위한 나노플로우(Nanoflow), Java 액션 및 마이크로플로우(Microflow)를 제공합니다.

Teamcenter에서 JT 모델을 시각화하고 작업하려면 3D Viewer for Teamcenter에서 얻은 데이터를 시각화하기 위해 3D Viewer 앱 서비스에 포함된 3D 위젯(Widget)을 사용하십시오.

### Teamcenter 인스턴스 데이터에 액세스하기 위한 Teamcenter Login API 재사용 {#reusing}

Teamcenter에서 데이터를 가져오려면 앱의 최종 사용자가 인증되고 권한이 부여되어야 합니다. Teamcenter Connector는 **Marketplace Modules** > **TcConnector** > **Published** > **APIs** > **Login** 폴더에서 관리자 및 사용자 로그인 로직을 모두 제공합니다. 최종 사용자가 Teamcenter에서 데이터를 가져와 앱에서 시각화할 수 있도록 앱을 구축하고 있으므로 최종 사용자가 Teamcenter 사용자 이름과 비밀번호를 입력하여 Teamcenter 데이터에 액세스할 수 있는 로그인을 구축해야 합니다.

이 로그인을 구축하려면 다음 단계를 따르십시오:

1. 앱의 페이지에 **Login** [버튼](/refguide/button-widgets/)을 추가하십시오.
2. **On click** 액션을 **Viewer3D_TC** > **USE_ME** > **Login** > **LoginTeamcenter** 마이크로플로우(Microflow)로 설정하십시오.
3. 앱을 로컬에서 실행하십시오. **Login**을 클릭하면 **Teamcenter Host Address** 및 **Teamcenter FMS URL**을 제공하고 인스턴스를 **Active**로 설정하여 연결하려는 Teamcenter 인스턴스를 추가, 편집 및 관리할 수 있는 Teamcenter 관리 페이지가 표시됩니다:

    {{< figure src="/attachments/partners/siemens/3d-viewer/3d-viewer-for-teamcenter/teamcenter-configuration.jpg" alt="teamcenter-configuration" class="no-border" >}}

4. **Login**으로 돌아가서 구성하고 활성으로 설정한 Teamcenter 인스턴스에 로그인하기 위해 Teamcenter 계정을 입력할 수 있습니다:

    {{< figure src="/attachments/partners/siemens/3d-viewer/3d-viewer-for-teamcenter/teamcenter-teamcenterlogin.jpg" alt="teamcenter-teamcenterlogin" class="no-border" >}}

{{% alert color="info" %}}
위는 **Viewer3D_TC** 모듈에 포함된 예제 Teamcenter 로그인 플로우입니다. **TcConnector** > **Published** > **APIs** > **Login**에서 다른 Teamcenter 로그인 API가 제공되며 필요에 따라 사용 방법을 선택할 수 있습니다.
{{% /alert %}}

### Teamcenter에서 해당 모델 목록 가져오기

3D Viewer For Teamcenter 모듈의 **SearchTC** 나노플로우(Nanoflow)는 검색 기준(예: 항목 이름, 항목 ID 또는 리비전 ID로 검색)을 설정하고 모델 목록을 가져오는 기능을 제공합니다. 이 나노플로우(Nanoflow)는 먼저 활성 Teamcenter 사용자 세션이 유효한지 확인한 다음 검색을 수행하므로 모델 검색 전에 로그인이 필수적입니다. 이 나노플로우(Nanoflow)의 결과로 ModelDocument 객체 목록이 반환되며 이는 이 나노플로우(Nanoflow)를 목록 뷰 위젯(Widget)의 데이터 소스로 설정할 수 있음을 의미합니다. 또한 **Viewer3D_TC** > **USER_ME** > **ShowBOMLineQueryPopUp**을 사용하면 검색에 특정 리비전 규칙을 적용하고 다른 모델 데이터를 반환받을 수 있습니다.

목록을 가져오려면 다음 단계를 따르십시오:

1. **Open TC model** 버튼을 만들고 앱의 페이지에 추가하십시오.
2. 버튼의 **On click** 액션을 [팝업 페이지](/refguide/page-properties/#pop-up)를 표시하도록 설정하십시오.
3. 팝업 페이지에 목록 뷰를 추가하고 **Data source**를 **Viewer3D_TC/USE_ME/SearchTC**로 설정하십시오.
4. SearchTC 나노플로우(Nanoflow)에는 SearchCriteria 객체가 입력 파라미터로 필요하므로 목록 뷰를 [Data view](/refguide/data-view/)로 감싸십시오.
5. 기본 **SearchCriteria** 객체를 만들고 결과로 반환하는 *createSearchCriteriaObject*라는 간단한 나노플로우(Nanoflow)를 만드십시오. Data view의 **Data source**를 이 새 나노플로우(Nanoflow)로 설정하십시오.
6. 최종 사용자가 항목 이름(즉, 모델 이름)을 입력하고 검색할 수 있도록 [텍스트 상자](/refguide/text-box/) 및 **Search** 버튼을 추가하십시오:

    {{< figure src="/attachments/partners/siemens/3d-viewer/3d-viewer-for-teamcenter/teamcenter-tcmodellist.jpg" alt="teamcenter-tcmodellist" class="no-border" >}}

7. 검색 결과에 대한 모델 목록을 표시하려면 SearchTC 나노플로우(Nanoflow)의 SearchCriteria 객체의 입력 파라미터가 버튼 클릭 시 업데이트되어야 합니다. 따라서 최종 사용자가 텍스트 상자에 모델 이름을 입력할 때 모델 이름이 **SearchCriteria** 객체의 **TCItemName** 속성에 저장되는지 확인하십시오:

    {{< figure src="/attachments/partners/siemens/3d-viewer/3d-viewer-for-teamcenter/teamcenter-textboxchange.jpg" alt="teamcenter-textboxchange" class="no-border" >}}

    그리고 최종 사용자가 **Search** 버튼을 클릭할 때 목록 뷰 위젯(Widget)이 목록을 새로 고치도록 변경 사항이 동기화되는지 확인하십시오:

    {{< figure src="/attachments/partners/siemens/3d-viewer/3d-viewer-for-teamcenter/teamcenter-searchsync.jpg" alt="teamcenter-searchsync" class="no-border" >}}

8. 모델 검색 페이지가 다음과 같은지 확인하십시오:

    {{< figure src="/attachments/partners/siemens/3d-viewer/3d-viewer-for-teamcenter/teamcenter-wrapdataviews.jpg" alt="teamcenter-wrapdataviews" class="no-border" >}}

9. 앱을 로컬에서 실행한 다음 Teamcenter에 로그인하고 Teamcenter 모델 팝업 창을 여십시오. 모델 이름을 입력하고 검색하십시오. 입력한 항목 이름이 포함된 모델 목록이 표시됩니다.

    {{< figure src="/attachments/partners/siemens/3d-viewer/3d-viewer-for-teamcenter/teamcenter-samplesearch.jpg" alt="teamcenter-samplesearch" class="no-border" >}}

### 모델 목록에서 모델 열기

이제 SearchTC 나노플로우(Nanoflow)를 호출하여 모델 목록을 가져올 수 있으므로 이러한 모델을 시각화하고 싶을 수 있습니다. SearchTC 나노플로우(Nanoflow)는 ModelDocument 객체 목록을 반환하며 모델을 시각화하려면 3D Viewer에 포함된 3D 위젯(Widget)을 사용해야 합니다. **Model ID**와 **Model Source Type**은 모든 JT 모델의 고유 식별자이며 이 두 속성을 사용하여 JT 모델에 액세스하고 작업할 수 있습니다. ModelDocument 객체에는 3D 위젯(Widget)에서 JT 모델을 식별하고 시각화하는 데 필요한 속성(가장 중요한 것은 모델 ID 및 모델 소스 유형)이 포함되어 있습니다. 3D Viewer는 모델을 시각화하기 위해 모델 ID와 모델 소스 유형이 필요하므로 ModelDocument 객체를 3D Viewer 위젯(Widget)에 전달해야 합니다.

모델 목록 팝업 페이지를 구축했으므로 한 가지 시나리오는 팝업 페이지에서 목록 항목을 선택한 다음 ModelDocument 객체를 홈 페이지로 반환하여 거기서 시각화하는 것입니다. 이를 활성화하려면 다음 단계를 따르십시오:

1. *PageObject*라는 이름의 새 엔티티(Entity)를 추가하고 **Viewer3D/Domain Model**에 정의된 **ModelDocument** 엔티티(Entity)와 연결하십시오:

    {{< figure src="/attachments/partners/siemens/3d-viewer/3d-viewer-for-teamcenter/teamcenter-pageobject.jpg" alt="teamcenter-pageobject" class="no-border" >}}

2. 앱의 홈 페이지에서 메인 영역을 Data view로 감싼 다음 기본 PageObject 객체를 만들고 반환하는 *createPageObject*라는 나노플로우(Nanoflow)를 만드십시오. 이 나노플로우(Nanoflow)를 Data view의 **Data source**로 설정하십시오.
3. 홈 페이지에서 이전 Data view 내에 다른 Data view를 추가하고 새 Data view의 **Data source**를 **Context**로 설정하십시오. 이렇게 하면 PageObject와 연결된 ModelDocument 객체에 액세스할 수 있습니다:

    {{< figure src="/attachments/partners/siemens/3d-viewer/3d-viewer-for-teamcenter/teamcenter-homepagedataviews.jpg" alt="teamcenter-homepagedataviews " class="no-border" >}}

4. **Toolbox**에서 3D 위젯(Widget)을 찾아 내부 Data view에 추가하십시오(각 위젯(Widget)의 사용법에 대한 자세한 내용은 [3D Viewer](/appstore/app-services/3d-viewer/)를 참조하십시오). 이제 3D Viewer 위젯(Widget)에 필요한 **Model ID**와 **Model Source Type**을 설정할 수 있습니다:

    {{< figure src="/attachments/partners/siemens/3d-viewer/3d-viewer-for-teamcenter/teamcenter-setviewermodelid.jpg" alt="teamcenter-setviewermodelid " class="no-border" >}}

5. TC 모델 열기 팝업 페이지에서 가장 바깥쪽 Data view를 추가하고 **Data source**로 **Context**를 선택한 다음 **PageObject**를 선택하십시오:

    {{< figure src="/attachments/partners/siemens/3d-viewer/3d-viewer-for-teamcenter/teamcenter-popuppageobject.jpg" alt="teamcenter-popuppageobject" class="no-border" >}}

6. *OpenSelectedModel*이라는 나노플로우(Nanoflow)를 만들고 목록 뷰의 **On click** 액션으로 설정하십시오. 이 나노플로우(Nanoflow)는 PageObject와 연결된 ModelDocument를 업데이트하고 업데이트된 PageObject를 반환합니다. 최종 사용자가 모델 목록 항목을 클릭할 때마다 PageObject가 업데이트되고 최종 사용자가 있는 홈 페이지가 새로 선택한 모델로 업데이트됩니다.

    {{< figure src="/attachments/partners/siemens/3d-viewer/3d-viewer-for-teamcenter/teamcenter-openselectedmodel.jpg" alt="teamcenter-openselectedmodel" class="no-border" >}}

7. 앱을 로컬에서 실행하십시오. 선택한 모델을 볼 수 있습니다.

{{% alert color="info" %}}
모델을 시각화하는 다른 방법도 있습니다. 핵심 아이디어는 유효한 모델 ID와 모델 소스 유형을 3D Viewer 위젯(Widget)에 전달하는 것입니다.
{{% /alert %}}

### 사용자 정의 BOMLine 쿼리로 검색

기본 BOMLine 쿼리로 Teamcenter 서버를 검색하여 ModelDocument 객체 목록을 가져오는 것 외에도 **Viewer_3D**는 사용자 정의 쿼리를 설정할 수 있는 **ShowBOMLineQueryPopUp** 페이지도 제공합니다.

**ShowBOMLineQueryPopUp** 페이지는 **ModelDocument** 객체를 입력 파라미터로 요구하며 모델에 적용하려는 특정 리비전 규칙을 설정하고 이러한 리비전 규칙에 따라 모델 데이터를 가져올 수 있습니다. 페이지에 특별히 설정된 것이 없으면 **SearchTC** 나노플로우(Nanoflow)는 기본 BOMLine 쿼리로 실행됩니다.

사용자 정의 리비전 규칙을 설정하려면 다음 단계를 따르십시오:

1. **ModelDocument** 목록 항목에 *Set Revision Rule*이라는 이름의 버튼을 추가하십시오.
2. **Viewer3D_TC/USE_ME/ShowBOMLineQueryPopUp**을 표시하는 *ShowBOMLineQueryPopUp*이라는 나노플로우(Nanoflow)를 만드십시오:

    {{< figure src="/attachments/partners/siemens/3d-viewer/3d-viewer-for-teamcenter/teamcenter-showbomlinequery-nano.jpg" alt="teamcenter-showbomlinequery-nano" class="no-border" >}}

3. **ShowBOMLineQueryPopUp** 나노플로우(Nanoflow)를 버튼의 **On click** 액션으로 설정하십시오:

    {{< figure src="/attachments/partners/siemens/3d-viewer/3d-viewer-for-teamcenter/teamcenter-setrevisionrules.jpg" alt="teamcenter-setrevisionrules" class="no-border" >}}

4. 앱을 로컬에서 실행하십시오. 선택한 모델에 리비전 규칙을 설정하고 필요한 정보로 모델을 가져올 수 있습니다:

    {{< figure src="/attachments/partners/siemens/3d-viewer/3d-viewer-for-teamcenter/teamcenter-setrevisionpage.jpg" alt="teamcenter-setrevisionpage" class="no-border" >}}

### 항목 리비전에서 ModelDocument 생성

**ModelDocument** 엔티티(Entity) 유형 객체는 모델을 시각화하기 위해 3D Viewer 전체에 걸쳐 정의된 고유 식별자입니다. **SearchTC** 나노플로우(Nanoflow)에서 반환된 ModelDocument 목록을 가져오는 것 외에도 **Viewer3D_TC**에는 항목 리비전에서 직접 유효한 ModelDocument를 구성할 수 있는 **GetModelDocumentByTCItemRevision** 마이크로플로우(Microflow)도 포함되어 있습니다. 이를 통해 Teamcenter의 모델을 시각화하는 데 더 많은 유연성이 추가됩니다.

## 더 읽기

* [3D Viewer](/partners/siemens/3d-viewer/)
