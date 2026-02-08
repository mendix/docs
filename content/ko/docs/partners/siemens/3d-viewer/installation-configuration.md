---
title: "3D Viewer 설치 및 구성"
url: /partners/siemens/3d-viewer/installation-configuration/
weight: 1
description: "Describes how to install and configure the 3D Viewer app service."
---

## 설치

### 라이선스 토큰 취득 {#obtain-license-token}

3D Viewer는 프로덕션 사용을 위해 유효한 구매 및 상업용 라이선스가 필요한 프리미엄 Siemens 제품입니다.

[Mendix Studio Pro](/releasenotes/studio-pro/)를 사용하여 로컬 개발 환경에서 라이선스 없이 3D Viewer를 사용할 수 있습니다. 자세한 내용은 [로컬 실행 또는 미리보기](/deployment/#run-locally-or-preview)를 참조하십시오.
그러나 서버 환경에 애플리케이션을 배포하려면 라이선스가 필요합니다. 여기에는 다음이 포함됩니다:

* [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)
* 자체 관리 또는 [온프레미스](/developerportal/deploy/on-premises-design/) 인프라, 예:

    * [Kubernetes](/developerportal/deploy/private-cloud/)
    * [Docker](/developerportal/deploy/docker-deploy/)
    * [Azure](/developerportal/deploy/mendix-on-azure/)
    * [SAP BTP](/developerportal/deploy/sap-cloud-platform/)

자세한 내용은 [앱 배포](/deployment/)를 참조하십시오.

평가판 라이선스 토큰을 요청하려면 [3D Viewer Marketplace 페이지](https://marketplace.mendix.com/link/component/118345)에서 **Contact Us** 버튼을 클릭하거나 MX3DViewerHelp.sisw@siemens.com으로 이메일을 보내십시오.

라이선스 토큰을 취득한 후 [라이선스 토큰 구성](#configure-license-token)에 설명된 대로 구성하십시오.

### 앱에 컴포넌트 설치

앱에 3D Viewer 앱 서비스를 다운로드하고 설치하려면 *Marketplace 콘텐츠 사용*의 [App Explorer에서 콘텐츠 가져오기](/appstore/use-content/#import) 섹션의 지침을 따르십시오. 앱 서비스가 설치되면 **Viewer3D** 폴더 아래에 바로 사용할 수 있는 항목 모음과 **Toolbox**의 **Add-on widget** 카테고리에 3D 위젯(Widget) 모음이 표시됩니다.

## 앱 시작 시 초기화

3DViewer 기능을 사용하려면 앱이 3D Viewer 서비스에 바인딩되어야 합니다. 이는 앱이 시작될 때 마이크로플로우(Microflow)를 실행하여 달성됩니다. 3D Viewer에는 3D Viewer 서비스를 시작할 수 있는 **VisServerAction**이라는 Java 액션이 포함되어 있습니다. 앱의 After Startup 마이크로플로우(Microflow)에서 이 Java 액션을 호출하면 앱이 시작될 때 자동으로 3D Viewer가 시작됩니다(After Startup 실행은 일반적으로 특정 도구를 항상 실행하려는 것을 의미합니다).

앱에 After Startup 마이크로플로우(Microflow)가 설정되어 있지 않은 경우 다음 단계를 따르십시오:

1. **Startup** 마이크로플로우(Microflow)를 만들고 **Viewer3D/USE_ME/VisServerAction** Java 액션을 추가하십시오.
2. 마이크로플로우(Microflow)의 반환 유형을 **Value**가 **true**인 **Boolean**으로 설정하십시오.
3. **App Settings** > **Runtime** > [After startup](/refguide/app-settings/#after-startup)을 통해 이 마이크로플로우(Microflow)를 **After startup** 단계로 설정하십시오.

앱에 이미 시작 후 실행되도록 설정된 마이크로플로우(Microflow)가 있는 경우 위의 단계에 설명된 대로 **Viewer3D/USE_ME/VisServerAction** Java 액션으로 확장하고 구성해야 합니다.

## 구성

### 사전 정의된 엔티티(Entity) {#predefined-entities}

**ModelDocument** 엔티티(Entity)는 모델의 모든 정보를 통합하는 개념적 엔티티(Entity)입니다. 이 엔티티(Entity)에서 상속하거나, 연결을 설정하거나, 이 엔티티(Entity)를 모듈에 복사할 수 있습니다.

{{< figure src="/attachments/partners/siemens/3d-viewer/modeldocument.jpg" alt="modeldocument" class="no-border" >}}

| 속성 | 설명 |
| --- | --- |
| **ModelId** | 모델을 식별하는 고유 문자열입니다. |
| **ModelName** | 모델의 이름입니다. |
| **Source** | 모델의 출처를 나타냅니다. 현재 **Mendix**와 **Teamcenter** 두 가지 값이 있습니다. 소스가 **Mendix**이면 모델이 Mendix 파일 스토리지에서 온 것을 나타냅니다. 소스가 **Teamcenter**이면 모델이 Teamcenter 인스턴스에서 온 것을 나타냅니다. |
| **Author** | 모델의 작성자입니다. |
| **CreationDate** | Mendix 파일 스토리지에 저장된 모델의 경우 **CreationDate**는 JT 모델이 파일 스토리지에 처음 업로드된 시간에 해당합니다. Teamcenter에 저장된 모델의 경우 **CreationDate**는 이 모델 리비전의 생성 날짜를 나타냅니다. |
| **FileSize** | 바이트 단위의 모델 크기입니다. |
| **FileType** | 3D 모델 형식입니다. |
| **Status** | Mendix 파일 스토리지에 업로드 및 저장된 모델에 특정적으로 사용됩니다. **Status**에는 세 가지 값이 있습니다: **Complete**(Mendix 파일 스토리지로의 모델 업로드가 완료됨), **InProgress**(업로드 진행 중), **Error**(업로드 실패). |
| **ErrorReason** | 모델 업로드 오류의 원인입니다. |

**Pagination** 엔티티(Entity)는 **GetModelListFromMendix** 나노플로우(Nanoflow)의 입력 파라미터 역할을 합니다. 이를 통해 나노플로우(Nanoflow)가 반환하는 모델 목록을 페이지 매김할 수 있습니다. **Pagination** 속성의 값이 특별히 설정되지 않으면 **GetModelListFromMendix**는 전체 모델 목록을 반환합니다.

{{< figure src="/attachments/partners/siemens/3d-viewer/pagination.jpg" alt="pagination" class="no-border" >}}

| 속성 | 용도 |
| --- | --- |
| Count | 가져올 페이지 번호를 나타냅니다. |
| PageSize | 한 페이지의 항목 크기입니다. |
| OffSet | 페이지 첫 번째 항목으로부터의 오프셋입니다. |

**Markup** 엔티티(Entity)는 **System.Image** 유형의 엔티티(Entity)이며 마크업 이미지를 나타냅니다.

**MxModelDocument** 및 **MxChildDocument** 엔티티(Entity)는 내부 엔티티(Entity)이며 대부분의 경우 필요하지 않습니다.

### 상수 {#constants}

Studio Pro 8.15의 경우 기본값이 **visualization**인 **HTTPEndpoint** 상수는 **Viewer3D/USE_ME/VisServerAction** Java 액션에서 사용되는 **Endpoint** 파라미터의 값을 제한하는 데 사용됩니다.

Studio Pro 9.4 이상의 경우 **HTTPEndpoint**는 **Endpoint**로 이름이 변경되었으며 이 상수를 구성할 필요가 없습니다.

값이 **Mendix**인 **ModelSourceType** 상수는 모델 소스를 나타내는 데 사용됩니다. 이 상수를 사용하여 **Uploader** 위젯(Widget)의 **Data source** 파라미터, **Viewer** 위젯(Widget)의 **Model source type** 파라미터 또는 **ModelDocument** 엔티티(Entity)의 **Source** 속성 값을 제한할 수 있습니다.

**LicenseToken** 상수는 이 앱 서비스를 사용하는 앱에 유효한 라이선스 토큰을 제공합니다. 3D Viewer는 상용 제품이므로 유효한 라이선스 토큰을 보유하고 올바르게 구성해야 합니다. 라이선스 토큰을 취득하고 구성하는 방법에 대한 자세한 내용은 [라이선스 토큰 취득](#obtain-license-token) 및 [라이선스 토큰 구성](#configure-license-token) 섹션을 참조하십시오.

### 마이크로플로우(Microflow) {#microflow}

**DeleteModelFromMendix** 마이크로플로우(Microflow)는 **ModelDocument** 객체를 입력 파라미터로 받아 Mendix 파일 스토리지에 저장된 해당 모델을 삭제합니다.

{{< figure src="/attachments/partners/siemens/3d-viewer/deletemodelfrommendix.jpg" alt="deletemodelfrommendix" class="no-border" >}}

**DownloadMarkup** 마이크로플로우(Microflow)는 **Markup** 객체를 입력 파라미터로 받아 이미지를 로컬 디렉토리에 다운로드합니다.

{{< figure src="/attachments/partners/siemens/3d-viewer/downloadmarkup.jpg" alt="downloadmarkup" class="no-border" >}}

### 나노플로우(Nanoflow) {#nanoflow}

**CreateModelDocumentFromFileDocument** 나노플로우(Nanoflow)는 **FileDocument** 객체를 입력 파라미터로 받아 **System.FileDocument** 또는 그 특수화의 엔티티(Entity)로 저장된 사용자 모델 파일을 나타내는 **ModelDocument** 객체를 생성합니다. Viewer 위젯(Widget)은 **ModelDocument** 객체를 데이터 소스로 받도록 사전 구축되어 있으므로 이 나노플로우(Nanoflow)를 통해 기존 파일 스토리지에서 모델을 가져와 시각화할 수 있습니다.

{{< figure src="/attachments/partners/siemens/3d-viewer/CreateModelDocumentFromFileDocument.jpg" alt="CreateModelDocumentFromFileDocument" class="no-border" >}}

**GetModelListFromMendix** 나노플로우(Nanoflow)는 **Pagination** 객체를 입력 파라미터로 받아 Mendix 파일 스토리지에서 모델 목록을 가져오고 결과로 **ModelDocuments** 목록을 반환합니다. 각 ModelDocument는 Mendix 파일 스토리지에 저장된 모델을 나타냅니다.

{{< figure src="/attachments/partners/siemens/3d-viewer/getmodellistfrommendix.jpg" alt="getmodellistfrommendix" class="no-border" >}}

**GetMarkupsFromMendix** 나노플로우(Nanoflow)는 **ModelDocument** 객체를 입력 파라미터로 받아 이 모델과 연결된 마크업 이미지를 가져오고 결과로 **Markup** 객체 목록을 반환합니다. 각 마크업은 Mendix 파일 스토리지에 저장된 이미지를 나타냅니다.

{{< figure src="/attachments/partners/siemens/3d-viewer/getmarkupsfrommendix.jpg" alt="getmarkupsfrommendix" class="no-border" >}}

### Java 액션 {#java-action}

**VisServerAction** Java 액션은 3D Viewer가 제공하는 모든 기능을 실현하는 데 중요한 시각화 서버 인프라를 설정하는 데 사용됩니다. 마이크로플로우(Microflow) 액션으로 노출됩니다.

3D Viewer가 작동하려면 앱의 After Startup 마이크로플로우(Microflow)가 **VisServerAction** Java 액션을 호출하도록 설정해야 합니다.

### 위젯(Widget) {#widgets}

#### 코어 위젯(Widget)

3D 모델 시각화를 활성화하는 데 필요한 **Core** 위젯(Widget)은 아래에 설명되어 있습니다.

##### Container3D {#container3d}

**Container3D** 위젯(Widget)은 다른 3D 위젯(Widget)을 넣기 위해 설계된 컨테이너 위젯(Widget)입니다(Uploader 위젯(Widget) 제외, Uploader 위젯(Widget)은 Container3D 위젯(Widget) 내에 배치할 필요가 없습니다). 3D 위젯(Widget)이 서로 통신할 수 있도록 공유 컨텍스트를 제공합니다.

이 위젯(Widget)은 페이지의 아무 위치에나 배치할 수 있습니다.

##### Uploader {#uploader}

**Uploader** 위젯(Widget)은 로컬 머신에서 하나 이상의 모델을 선택하여 Mendix 파일 스토리지에 업로드하는 기능을 제공합니다.

이 위젯(Widget)은 페이지의 아무 위치에나 배치할 수 있습니다.

속성의 **General** 탭에서 **Model ID** 및 **Data source** 속성을 사용하여 업로드 중인 모델의 **Model ID** 및 **Model source type** 값을 가져올 수 있습니다.

##### Viewer {#viewer}

**Viewer** 위젯(Widget)은 3D 모델의 보기 창을 제공합니다.

이 위젯(Widget)을 [Container3D](#container3d) 위젯(Widget) 안에 배치하십시오.

이 위젯(Widget)이 모델을 올바르게 시각화하려면 다음 속성을 설정하십시오:

* **Data Source** 탭에서 올바른 **Model ID** 및 **Model source type** 속성을 구성하십시오:
    * 유효한 **Model ID** 값 예 – ModelDocument 객체의 ModelId 속성 값 또는 Uploader 위젯(Widget) 속성에 의해 설정된 Model ID 속성 값
    * 유효한 **Model Source Type** 값 – **Mendix** 또는 **Teamcenter**; **Viewer3D/USER_ME/ModelSourceType** 상수도 사용할 수 있습니다
* **Transport** 탭에서 **HttpEndpoint**가 **@Viewer3D.HttpEndpoint** 또는 **visualization**으로 설정되어 있는지 확인하십시오
* **Appearance** 탭에서 위젯(Widget)의 높이가 고정되어 있는지 확인하십시오(예: **Style**을 **height:600px**로 설정하거나 부모의 높이가 고정되어 있는지 확인). 그렇지 않으면 뷰어가 무한히 확장됩니다
* **General** 탭에는 위젯(Widget) 동작을 변경하기 위한 선택적 사용자 정의 옵션이 있습니다:
    * **Viewer ID** – 위젯(Widget)의 ID를 설정합니다 — 나중에 뷰어 인스턴스를 가져오는 데 사용할 수 있습니다
    * **Show coordinate system** – 뷰어의 왼쪽 하단 모서리에 좌표계가 표시되는지 결정합니다
    * **Show navigation cube** – 뷰어의 오른쪽 상단 모서리에 탐색 큐브가 표시되는지 결정합니다
    * **Show tooltip** – 최종 사용자가 모델 부품을 클릭할 때 툴팁이 표시되는지 결정합니다; Boolean 값을 받습니다
    * **Automatically load parts** – 모델 부품이 자동으로 Viewer에 로드되는지 결정합니다; **Yes**로 설정하면 Viewer가 **Model ID** 및 **Model source type** 값을 받는 한 모델이 자동으로 로드됩니다; **No**로 설정하면 PS Tree 부품 토글에서 트리거될 때만 모델이 Viewer에 로드됩니다(이 사용 사례의 경우 [PS Tree](#ps-tree) 위젯(Widget)을 추가하여 PS Tree를 클릭하여 부품 로딩을 트리거할 수 있습니다)
    * **Advance configuration** – Viewer에 대한 JSON 문자열 형식의 고급 구성을 제공합니다. 자세한 내용은 [고급 구성](/partners/siemens/3d-viewer/advanced-configuration/)을 참조하십시오.
* **Events** 탭에는 위젯(Widget) 동작을 변경하기 위한 선택적 사용자 정의 옵션이 있습니다:
    * **On selection change** – String 속성을 **Selection** 속성에 바인딩하면 이 속성을 입력 파라미터로 사용하여 Viewer에서 선택이 변경될 때 트리거할 액션을 추가할 수 있습니다
    * **On error** – String 속성을 **Error** 속성에 바인딩하면 Viewer에서 발생한 오류 메시지를 얻고 오류 발생 시 트리거할 사용자 정의 액션을 추가할 수 있습니다
    * **On progress change** – String 속성을 **Progress status** 속성에 바인딩하면 현재 모델 로딩 상태를 얻을 수 있습니다; Decimal 속성을 **Progress percentage** 속성에 바인딩하면 현재 모델 로딩 비율을 얻을 수 있습니다; 이 변경에 의해 트리거되는 사용자 정의 액션도 추가할 수 있습니다
    * **On load** – Boolean 속성을 **Loaded** 속성에 바인딩하면 제품 구조가 로드되었는지에 대한 정보를 얻을 수 있습니다; 이 변경에 의해 트리거되는 사용자 정의 액션도 추가할 수 있습니다

3D Viewer는 또한 필요에 맞는 사용자 정의 로직을 호출하고 구현할 수 있도록 Viewer에서 일부 API를 노출합니다. 3D Viewer API 사용 방법 및 기타 세부 정보는 [3D Viewer API 사용](/partners/siemens/3d-viewer-api/)을 참조하십시오.

#### 패널 위젯(Widget) {#panel-widgets}

**Panel** 위젯(Widget)에는 최종 사용자가 작업할 수 있는 상호 작용 항목이 포함된 작업 패널이 있습니다.

각 패널 위젯(Widget)은 [Container3D](#container3d) 위젯(Widget) 내에 배치해야 합니다. 올바른 데이터 소스가 있는 Viewer 위젯(Widget)도 동일한 Container3D 위젯(Widget)에 있어야 합니다.

##### PS Tree {#ps-tree}

**PS Tree** 위젯(Widget)은 모델을 구성하는 항목의 계층적 트리 뷰를 표시합니다. 트리 노드를 토글하면 최종 사용자가 Viewer에 로드되는 모델 부품을 제어할 수 있습니다. 또한 이 위젯(Widget)은 정규 표현식을 사용하여 노드 이름을 검색하고 결과를 강조 표시하는 기능을 지원합니다.

**General** 탭에서 다음 옵션을 사용할 수 있습니다:

* **Expand all** – 초기 로드 시 모델의 제품 구조 트리를 완전히 확장할지 결정합니다
* **Show search** – 최종 사용자가 부품 이름을 입력하고 위젯(Widget)에서 부품을 검색할 수 있는 검색 바를 토글하는 데 사용됩니다
* **Show search options** – 드롭다운 목록에 모든 노드 검색 결과를 표시할지 결정합니다

{{< figure src="/attachments/partners/siemens/3d-viewer/pstree-showsearchoptions.jpg" max-width=50% alt="show search options in PS Tree" >}}

* **Show leaf structure** – 하위 부품 데이터가 위젯(Widget)에 표시되는지 결정합니다

##### PS Tree Table

**PS Tree Table** 위젯(Widget)은 모델의 제품 구조와 선택한 다른 모델 속성을 표시하는 구성 가능한 트리 테이블을 제공합니다.

[PS Tree](#ps-tree) 위젯(Widget)과 비교하여 이 위젯(Widget)은 **Column**이라는 추가 구성 가능 속성을 추가합니다. 열을 추가하고 이 열에 표시할 속성을 지정하여 테이블을 확장할 수 있습니다. 사전 정의된 속성의 예로는 **Volume**, **Mass**, **Units**, **HasPMI**, **Density**가 있습니다. 목록의 사전 정의된 속성 이외의 다른 속성을 표시하려면 모델에 정의된 유효한 속성을 지정하여 추가할 수도 있습니다.

{{< figure src="/attachments/partners/siemens/3d-viewer/pstreetable-general.jpg" alt="pstreetable-general" class="no-border" >}}

##### PMI Tree {#pmi-tree}

**PMI Tree** 위젯(Widget)은 모델의 제품 제조 정보, 모델 뷰 및 디자인 그룹의 계층적 트리 표시를 제공합니다.

**General** 탭에서 **Expand all tree nodes** 속성은 모든 트리 노드가 기본적으로 확장되는지 결정합니다. **Yes**로 설정하면 위젯(Widget) 로드 시 최종 사용자에게 기본적으로 완전히 확장된 PMI 트리가 표시됩니다. **No**로 설정하면 PMI 트리가 기본적으로 완전히 확장되지 않습니다.

또한 **General** 탭의 **Auto load** 속성은 PMI 구조 트리가 로드되면 모든 PMI 정보가 자동으로 뷰어에 로드되어야 하는지 결정합니다.

##### Section View {#section-view}

**Section View** 위젯(Widget)은 모델에 단면 절단을 만들고 다양한 각도에서 단면 뷰를 제공합니다.

이 위젯(Widget)을 [Container3D](#container3d) 위젯(Widget) 안에 배치하십시오. 모델에 단면 평면을 추가할 수 있도록 동일한 Container3D 위젯(Widget)에 [Viewer](#viewer) 위젯(Widget)이 있어야 합니다.

특별한 구성이 필요하지 않습니다. 이 위젯(Widget)을 사용하면 원하는 방향 축과 클리핑 모드로 모델에 단면 평면을 추가, 삭제 및 지울 수 있습니다. 앱에서 이 위젯(Widget)의 동작에 대한 자세한 내용은 *3D Viewer 사용법*의 [3D 단면 생성](/partners/siemens/3d-viewer/usage/#create-3d-section) 섹션을 참조하십시오.

##### Markup Builder {#markup-builder}

**Markup Builder** 위젯(Widget)은 모델에 2D 마크업을 만들고 주석이 달린 스크린샷을 저장하는 기능을 제공합니다. 2D 마크업이 포함된 스냅샷은 Mendix 파일 스토리지에 모델과 함께 저장됩니다.

**General** 탭에서 **Enable** 속성을 설정하여 마크업 모드를 켜거나 끌 수 있습니다. **True**로 설정하면 모델이 2D 차원으로 잠기고 마우스 회전에 반응하지 않습니다. **False**로 설정하면 모델이 잠금 해제되고 회전 가능한 상태로 돌아갑니다.

또한 **General** 탭에는 마크업 주석의 색상을 설정할 수 있는 **markup color** 속성이 있습니다. 유효한 값은 [CSS 유효 색상 값](https://www.w3schools.com/CSSref/css_colors_legal.asp)입니다(예: RGB 값, 사전 정의된 색상 이름 및 16진수 색상 값).

**Event** 탭에서 Boolean 속성을 **Save** 속성에 바인딩하면 최종 사용자가 Markup Builder 패널에서 **Save**를 클릭한 후 마크업 이미지의 저장 상태를 얻을 수 있습니다. 팝업 메시지 표시와 같은 사용자 정의 액션도 추가할 수 있습니다. 속성 값이 **True**로 변경되면 모델과 연결된 마크업 이미지가 Mendix 파일 스토리지에 성공적으로 저장된 것입니다. 속성 값이 **False**이면 저장이 성공하지 못한 것입니다. **Action** 속성을 설정하여 **Save** 상태 값에 따라 액션을 트리거할 수 있습니다.

##### Measurement {#measurement}

**Measurement** 위젯(Widget)은 거리, 각도, 선 길이, 반경 및 면적 측정을 포함한 3D 모델에 대한 측정을 수행하는 기능을 제공합니다.

이 위젯(Widget)을 [Container3D](#container3d) 위젯(Widget) 안에 배치하십시오. 모델에 대한 측정을 수행할 수 있도록 동일한 Container3D 위젯(Widget)에 [Viewer](#viewer) 위젯(Widget)이 있어야 합니다.

**General** 탭에서 측정 결과의 언어를 설정할 수 있습니다. 기본 언어는 영어입니다.

{{< figure src="/attachments/partners/siemens/3d-viewer/measurement-language.jpg" alt="measurement language"  >}}

특별한 구성이 필요하지 않습니다. 이 위젯(Widget)을 사용하면 부품 또는 부품 간의 거리, 길이, 반경, 면적 및 각도를 측정할 수 있습니다. 3D 모델에서 측정을 수행하는 방법에 대한 자세한 내용은 *3D Viewer 사용법*의 [3D 측정 수행](/partners/siemens/3d-viewer/usage/#perform-measurements) 섹션을 참조하십시오.

##### Preference {#preference}

**Preference** 위젯(Widget)을 사용하면 개인 환경 설정을 지정하고 저장할 수 있습니다.

이 위젯(Widget)을 [Container3D](#container3d) 위젯(Widget) 안에 배치하십시오. 모델의 PMI를 필터링할 수 있도록 동일한 Container3D 위젯(Widget)에 [Viewer](#viewer) 위젯(Widget)이 있어야 합니다.

이 위젯(Widget)을 사용하면 다음 필터링 설정을 사용할 수 있습니다:

* 유형별 PMI 엔티티(Entity) 필터링

* 모델 뷰 필터링

* 디자인 그룹 필터링

* 어셈블리 수준 PMI 표시

앱에서 이 위젯(Widget)의 동작에 대한 자세한 내용은 *3D Viewer 사용법*의 [환경 설정](/partners/siemens/3d-viewer/usage/#set-preferences) 섹션을 참조하십시오.

#### 도구 모음 위젯(Widget)

**Toolbar** 위젯(Widget)은 추가 구성이 필요하지 않습니다. [Container3D](#container3d) 위젯(Widget) 내에 [Viewer](#viewer) 위젯(Widget)과 함께 배치하기만 하면 됩니다.

| 위젯(Widget) | 설명 |
| --- | --- |
| Tool Bar Item Camera Mode | 뷰에 표시되는 표면 객체의 외관을 제어하는 기능을 제공합니다. 이 옵션은 표면 객체가 면 지오메트리 또는 엣지 지오메트리로 표시되는지 결정합니다. |
| Tool Bar Item Camera Orientation | 다양한 카메라 방향에서 모델을 볼 수 있습니다. |
| Tool Bar Item Explode Slider | 어셈블리의 분해도를 만들 수 있습니다. |
| Tool Bar Item Fit All | Viewer에서 모든 모델 부품을 맞출 수 있습니다. |
| Tool Bar Item Render Mode | 다양한 모델 렌더 모드 간에 전환할 수 있습니다. |
| Tool Bar Item Selection Mode | 모델 부품, 엣지, 면 및 바디를 선택하는 기능을 제공합니다. |
| Tool Bar Item Snapshot | 현재 Viewer의 스냅샷을 촬영하고 로컬 머신에 저장하는 기능을 제공합니다. |

### 라이선스 토큰 구성 {#configure-license-token}

환경에 따라 라이선스 토큰을 구성하려면 다음 안내를 따르십시오.

#### Mendix Cloud에 배포된 앱의 경우

Mendix Cloud에 앱을 배포하는 경우 [Mendix Portal](/developerportal/deploy/environments-details/)에서 라이선스 토큰을 구성하십시오.

앱을 배포하기 전에 배포 패키지에서 앱 **Constants**를 구성하십시오.

{{< figure src="/attachments/partners/siemens/3d-viewer/licensetoken-cloudportal.jpg" alt="licensetoken-cloudportal" class="no-border" >}}

이미 앱을 배포한 경우 **[Model Options](/developerportal/deploy/environments-details/#model-options)** 탭에서 기존 **LicenseToken** 상수 값을 변경하고 앱을 다시 시작하십시오.

{{< figure src="/attachments/partners/siemens/3d-viewer/licensetoken-envdetails.jpg" alt="licensetoken-envdetails" class="no-border" >}}

#### 자체 환경에 배포된 앱의 경우

자체 환경에 앱을 배포하는 경우 자체 환경에서 라이선스 토큰을 구성해야 합니다. 자세한 정보는 [앱 배포](/deployment/)를 참조하십시오.
