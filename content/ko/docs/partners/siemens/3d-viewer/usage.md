---
title: "3D Viewer 사용법"
url: /partners/siemens/3d-viewer/usage/
weight: 2
description: "Describes how to use the 3D Viewer app service."
---

## 소개

3D Viewer는 3D 모델을 시각화하기 위한 위젯(Widget) 세트와 데이터를 가져오기 위한 나노플로우(Nanoflow) 및 Java Action 세트를 제공합니다.

Mendix Studio Pro에서 빈 앱 템플릿으로 시작할 때 아래 단계를 따라 로컬 3D 모델을 빠르게 시각화할 수 있습니다.

## 브라우저에서 3D 모델 업로드 및 보기

[Viewer](/partners/siemens/3d-viewer/installation-configuration/#viewer) 위젯(Widget)이 3D 모델을 시각화하려면 두 가지 데이터 소스 속성을 설정해야 합니다: **Model ID**와 **Model source type**. 3D 모델을 업로드하고 페이지에서 직접 시각화하려면 [Uploader](/partners/siemens/3d-viewer/installation-configuration/#uploader) 위젯(Widget)에서 이러한 속성 세트를 반환하여 Viewer 위젯(Widget)에 설정해야 합니다.

이 절차는 JT 파일을 예로 사용하여 이 시각화를 구성하는 방법을 보여줍니다:

1. 페이지에 [Container3D](/partners/siemens/3d-viewer/installation-configuration/#container3d) 위젯(Widget)을 배치하십시오.
2. Uploader 및 Viewer 위젯(Widget)을 Container3D 위젯(Widget) 안에 넣고 레이아웃을 지정하십시오.
3. Viewer 위젯(Widget)의 고정 높이를 설정하십시오(**Design mode**로 전환하여 미리보기를 확인하십시오).
4. 앱 모듈의 도메인 모델(Domain Model)에서 엔티티(Entity)를 만들고 *UploadedModel*이라고 이름 지으십시오.
5. Uploader 및 Viewer 위젯(Widget)을 새 Data view 위젯(Widget) 안에 감싸십시오.
6. 나노플로우(Nanoflow)를 만들고 *CreatedUploadedModel*이라고 이름을 지은 후 Data view의 데이터 소스로 설정하십시오.
7. UploadedModel 엔티티(Entity)에 대해 두 개의 속성을 만드십시오. Uploader의 **Data source** 및 **UploadModelId**에서 반환된 값을 받도록 설정하십시오:

    {{< figure src="/attachments/partners/siemens/3d-viewer/uploader-uploadedmodelinfo.jpg" alt="uploader-uploadedmodelinfo" class="no-border" >}}

8. **Data Source** 탭에서 **Model ID**를 **UploadedModelID**로, **Model source type**을 **Mendix**로 설정하여 Viewer 위젯(Widget)의 데이터 소스 속성을 설정하십시오:

    {{< figure src="/attachments/partners/siemens/3d-viewer/viewer-datasourceuploaded.jpg" alt="viewer-datasourceuploaded" class="no-border" >}}

9. **General** 탭에서 **Automatically load parts**를 **Yes**로 설정하여 업로드 성공 시 자동으로 모델을 로드하십시오.
10. 앱을 로컬에서 실행하십시오. 이제 JT 파일을 업로드하고 브라우저에서 직접 볼 수 있습니다:

    {{< figure src="/attachments/partners/siemens/3d-viewer/runlocally-uploadandview.jpg" alt="runlocally-uploadandview" class="no-border" >}}

## Progress Bar 위젯(Widget)으로 모델 로딩 진행 상황 표시 {#displaying-model-loading}

최종 사용자가 모델을 업로드하거나 로드할 때 업로드 및 로딩 진행 상황을 알고 싶을 수 있습니다. Uploader 위젯(Widget)의 업로드 진행 상황은 업로더 패널에서 볼 수 있습니다:

{{< figure src="/attachments/partners/siemens/3d-viewer/uploader-uploadedstatus.jpg" alt="uploader-uploadedstatus" class="no-border" >}}

Viewer 위젯(Widget)의 로딩 진행 상황은 **Events** 탭의 **Progress status** 및 **Progress percentage** 속성을 통해 얻을 수 있습니다.

모델 로딩 진행 상황을 표시하려면 다음 단계를 따르십시오:

1. *PageObject*라는 엔티티(Entity)를 만들고 기본값이 `= 0`인 *LoadingProgress*라는 decimal 속성을 추가하십시오([Progress Bar](/appstore/widgets/progress-bar/) 위젯(Widget)은 decimal 값을 요구합니다).
2. **PageObject** 객체를 반환하는 *createPageObject*라는 나노플로우(Nanoflow)를 만드십시오.
3. [Container3D](/partners/siemens/3d-viewer/installation-configuration/#container3d) 위젯(Widget)을 Data view로 감싸고 Data view의 **Data source**를 **createPageObject** 나노플로우(Nanoflow)로 설정하십시오.
4. **Progress percentage** 속성을 설정하여 **LoadingProgress** 속성의 값을 설정하십시오:

    {{< figure src="/attachments/partners/siemens/3d-viewer/viewer-progresspercentage.jpg" alt="viewer-progresspercentage" class="no-border" >}}

5. 페이지에 Progress Bar 위젯(Widget)을 추가하고 **Values** 탭에서 **PageObject.LoadingProgress**를 **Progress Attribute**로 설정하십시오.
6. 앱을 로컬에서 실행하십시오. 실시간 모델 로딩 진행 상황을 볼 수 있습니다:

    {{< figure src="/attachments/partners/siemens/3d-viewer/runlocally-loadingprogress.jpg" alt="runlocally-loadingprogress" class="no-border" >}}

## 업로드 없이 모델 미리보기

Mendix 파일 스토리지에 업로드하지 않고 모델을 직접 미리보려면 파일을 Viewer로 드래그 앤 드롭하십시오. 미리보기 후 모델을 업로드하려면 Viewer의 왼쪽 상단 모서리에 있는 **Upload to Mendix File Storage** 아이콘을 클릭하십시오.

{{< figure src="/attachments/partners/siemens/3d-viewer/upload-to-mendix-file-storage.png"  class="no-border" >}}

## 더 많은 3D 기능 활용

페이지에 더 많은 3D 위젯(Widget)을 추가하여 더 많은 3D 기능을 활성화하고 필요에 따라 레이아웃을 배치할 수 있습니다. 예:

{{< figure src="/attachments/partners/siemens/3d-viewer/structuremode-more3dwidgets.jpg" alt="structuremode-more3dwidgets" class="no-border" >}}

## 업로드된 모델 관리

이전 사용 사례에서는 업로드한 모델만 시각화할 수 있었습니다.

일반적으로 데이터 스토리지에 업로드되어 저장된 모델을 관리해야 할 수도 있습니다. 3D Viewer는 앱에 모델 데이터 관리 기능을 구축하는 데 도움이 되는 **GetModelListFromMendix** 나노플로우(Nanoflow)와 **DeleteModelFromMendix** 마이크로플로우(Microflow)를 제공합니다.

### 모델 목록 구축

Mendix 네이티브 [목록 뷰](/refguide/list-view/)를 사용하여 다음 단계에 따라 모델 목록을 표시할 수 있습니다:

1. **View3D/USE_ME/GetModelListFromMendix** 나노플로우(Nanoflow)를 사용하거나 앱 모듈에 복사하십시오. 나노플로우(Nanoflow) 호출 후 **ModelDocument** 객체 목록이 반환됩니다.
2. 버튼 클릭 또는 원하는 다른 이벤트를 통해 모델 목록을 표시하기 위한 [팝업 페이지](/refguide/page-properties/#pop-up)를 추가하십시오.
3. 페이지에 목록 뷰를 배치하고 **GetModelListFromMendix** 나노플로우(Nanoflow)를 **Data source**로 설정하십시오.
4. **GetModelListFromMendix**에는 **Pagination** 파라미터 입력이 필요하므로 목록 뷰를 Data view로 감싸십시오. 그런 다음 *CreatePaginationObject*라는 나노플로우(Nanoflow)를 만들고 해당 나노플로우(Nanoflow)를 목록 뷰의 **Data source**로 설정하십시오.
5. 관심 있는 정보로 목록 항목을 채우십시오:

    {{< figure src="/attachments/partners/siemens/3d-viewer/openmodelpopup-listview.jpg" alt="openmodelpopUp-listview" class="no-border" >}}

### 모델 목록에서 모델 열기

모델 목록이 있으면 목록에서 모델을 클릭하여 선택하고 보고 싶을 수 있습니다. **Viewer** 위젯(Widget)은 모델을 시각화하기 위해 **ModelId**와 **Model Source Type**을 필요로 하므로 선택한 모델의 해당 정보를 [Viewer](/partners/siemens/3d-viewer/installation-configuration/#viewer) 위젯(Widget)에 전달해야 합니다. 각 목록 항목은 **ModelDocument** 객체이며 이 객체에는 선택한 모델에 대한 다양한 정보(ModelId 및 Model Source Type 포함)가 포함되어 있으므로 이 객체를 Viewer 위젯(Widget)에 전달해야 합니다.

구성을 위해 다음 단계를 따르십시오:

1. 목록 뷰의 **On click** 액션을 정의하여 선택한 모델을 다른 페이지에 있는 Viewer 위젯(Widget)에 전달하십시오(선택한 모델이 뷰어에 로드될 수 있도록). 한 가지 접근 방법은 **Viewer3D** 모듈의 도메인 모델(Domain Model)에 정의된 **ModelDocument** 엔티티(Entity)와 연결된 엔티티(Entity)를 만드는 것입니다. 이 객체를 Viewer가 있는 페이지와 모델 목록 페이지 간에 공유 객체로 만드십시오. 이 예에서는 다음 홈 페이지로 **PageObject**를 만듭니다:

    {{< figure src="/attachments/partners/siemens/3d-viewer/homepage-pageobject.jpg" alt="homepage-pageobject" class="no-border" >}}

    다음은 모델 팝업 페이지입니다:

    {{< figure src="/attachments/partners/siemens/3d-viewer/openmodelpopup-pageobject.jpg" alt="openmodelpopUp-pageobject" class="no-border" >}}

2. 모델 목록 항목의 **On click** 액션을 설정한 다음 **PageObject**와 연결된 **ModelDocument** 객체를 변경하여 값을 반환하면 홈 페이지가 PageObject 변경 시 새로 고침됩니다:

    {{< figure src="/attachments/partners/siemens/3d-viewer/openselectedmodel-nanoflow.jpg" alt="openselectedmodel-nanoflow" class="no-border" >}}

3. 앱을 로컬에서 실행하십시오. 열 모델을 선택하고 홈 페이지 뷰어로 시각화할 수 있는 간단한 모델 목록을 얻을 수 있습니다:

    {{< figure src="/attachments/partners/siemens/3d-viewer/openmodellistpopup-demo.jpg" alt="openmodellistpopup-demo" class="no-border" >}}

### 모델 삭제

데이터베이스에 원하지 않는 모델이 있을 수 있으므로 삭제할 수도 있습니다. 3D Viewer 앱 서비스는 이를 위해 **DeleteModelFromMendix** 마이크로플로우(Microflow)를 제공합니다.

데이터베이스에서 모델을 삭제하려면 다음 단계를 따르십시오:

1. **Viewer3D/USE_ME/DeleteModelFromMendix** 마이크로플로우(Microflow)를 직접 사용하거나 앱 모듈 중 하나에 복사하십시오.
2. DeleteModelFromMendix는 **ModelDocument**(Mendix 파일 스토리지에 저장된 모델을 나타냄)를 입력 파라미터로 예상합니다. 성공적으로 실행되면 모델이 Mendix 파일 스토리지에서 삭제됩니다. 이전 단계에서 모델 목록을 구축했으며 각 목록 항목은 ModelDocument입니다. 모델 목록 항목에 대해 [삭제 버튼](/refguide/button-widgets/)을 추가하십시오.
3. *DeleteModel*이라는 나노플로우(Nanoflow)를 만들고 **ModelDocument**를 입력 파라미터로 설정하십시오. 그런 다음 **DeleteModelFromMendix** 마이크로플로우(Microflow)를 호출하고 **ModelDocument**를 커밋하십시오:

    {{< figure src="/attachments/partners/siemens/3d-viewer/deletemodel-nanoflow.jpg" alt="deletemodel-nanoflow" class="no-border" >}}

4. **Delete** 버튼의 **On click** 이벤트를 **DeleteModel** 나노플로우(Nanoflow)로 설정하십시오.
5. 앱을 로컬에서 실행하십시오. **Delete**를 클릭하여 모델을 삭제할 수 있어야 합니다.

이제 모델 목록을 가져오고, 목록 항목을 선택하여 모델을 열고, 모델을 삭제할 수 있습니다.

## Viewer 이벤트 처리

[Viewer](/partners/siemens/3d-viewer/installation-configuration/#viewer) 위젯(Widget)에서 여러 이벤트를 감지하여 사용자 정의 이벤트 처리 로직을 구축하는 데 사용할 수 있습니다.

Viewer 위젯(Widget)에서 감지할 수 있는 네 가지 주요 이벤트 유형이 있으며 아래 섹션에서 설명합니다.

### 선택 변경 시 {#on-selection-change}

**Selection**을 설정하기 위해 하나의 속성을 선택하면 선택한 부품에 대한 정보를 얻을 수 있습니다(이를 위해 Viewer API를 사용해야 할 수 있습니다. Viewer API 사용 방법에 대한 문의가 있으면 [Siemens Support](https://support.sw.siemens.com/en-US/)에 문의하십시오).

**Selection**은 String 속성을 받습니다. 속성을 정의하고 해당 속성을 Selection 속성에 바인딩할 수 있습니다. 실행 중인 앱에서 사용자가 모델 부품을 선택하면 선택 이벤트가 트리거되고 선택한 부품 정보가 이 Selection 속성에 채워집니다. 선택한 객체 정보(psid 및 viewer)를 쉽게 가져와서 액션에서 사용할 수 있습니다.

{{< figure src="/attachments/partners/siemens/3d-viewer/viewer-onselectionchange-result.jpg" alt="viewer-onselectionchange-result" class="no-border" >}}

다른 Mendix 이벤트와 마찬가지로 **Action**에 대해 모델 부품 선택 시 트리거할 액션 목록에서 선택할 수 있습니다. 하나의 가능한 사용 사례는 Viewer에서 노출된 `GET` API를 활용하는 것입니다(예: `PSID`로 `Boundingbox`를 가져오거나 JavaScript 액션에서 `PSID`로 재질을 설정하고 이를 나노플로우(Nanoflow)에 포함한 다음 **Action**을 이 나노플로우(Nanoflow)를 호출하도록 설정).

{{< figure src="/attachments/partners/siemens/3d-viewer/viewer-onselect-sample.jpg" alt="viewer-onselect-sample" class="no-border" >}}

### 오류 시 {#on-error}

**Error** 이벤트를 설정하기 위해 하나의 속성을 선택하면 Viewer에서 발생한 오류를 감지할 수 있습니다.

**Error**는 String 속성을 받습니다. 속성을 정의하고 해당 속성을 이 속성에 바인딩할 수 있습니다. 실행 중인 앱에서 모델 시각화에 문제가 있으면 오류 이벤트가 트리거되고 오류 정보가 이 Error 속성에 채워집니다. Viewer에서 발생한 오류 메시지를 쉽게 얻고 오류 발생 시 트리거할 사용자 정의 액션을 추가할 수 있습니다.

{{< figure src="/attachments/partners/siemens/3d-viewer/viewerevent-onerror.jpg" alt="viewerevent-onerror" class="no-border" >}}

다른 Mendix 이벤트와 마찬가지로 **Action**에 대해 Viewer 오류 시 트리거할 액션 목록에서 선택할 수 있습니다. 하나의 가능한 사용 사례는 사용자에게 오류 세부 정보를 알리기 위한 오류 팝업 페이지를 표시하는 것입니다.

{{< figure src="/attachments/partners/siemens/3d-viewer/viewer-onerror-sample.jpg" alt="viewer-onerror-sample" class="no-border" >}} 

### 진행 상황 변경 시 {#on-progress-change}

**Progress status** 값에 대해 하나의 속성을 선택하면 모델, 제품 구조 트리 및 [PMI 트리](/partners/siemens/3d-viewer/installation-configuration/#pmi-tree)의 현재 로딩 상태와 로딩 비율을 가져올 수 있습니다.

**Progress status**는 String 속성을 받습니다. 속성을 정의하고 해당 속성을 이 속성에 바인딩할 수 있습니다. 실행 중인 앱에서 모델, 제품 구조 트리, PMI 트리 및 PMI 형상을 로드하면 로드 진행 상태 정보가 이 속성에 채워집니다. 모델 로딩 상태 정보(`Notloaded`, `Loading`, `Loaded`)를 쉽게 가져와서 액션에서 사용할 수 있습니다.

**Progress percentage**는 Decimal 속성을 받습니다. 속성을 정의하고 해당 속성을 이 속성에 바인딩할 수 있습니다. 실행 중인 앱에서 모델, 제품 구조 트리, PMI 트리 및 PMI 형상을 로드하면 로드 진행 비율 정보가 이 속성에 채워집니다. 이 로딩 비율을 쉽게 가져와서 액션에서 사용할 수 있습니다.

{{< figure src="/attachments/partners/siemens/3d-viewer/viewer-onprogress.jpg" alt="viewer-onprogress" class="no-border" >}} 

다른 Mendix 이벤트와 마찬가지로 **Action**에 대해 진행 상황 변경 시 트리거할 액션 목록에서 선택할 수 있습니다. 하나의 가능한 사용 사례는 캡처된 모델 로딩 비율을 사용자에게 표시하기 위해 Progress Bar 위젯(Widget)을 사용하는 것입니다.

{{< figure src="/attachments/partners/siemens/3d-viewer/viewer-onprogress-sample.jpg" alt="viewer-onprogress-sample" class="no-border" >}}

자세한 정보는 [Progress Bar 위젯(Widget)으로 모델 로딩 진행 상황 표시](#displaying-model-loading)를 참조하십시오.

### 로드 시 {#on-load}

**Loaded** 값에 대해 하나의 속성을 선택하면 제품 구조 트리의 현재 로딩 상태를 가져올 수 있습니다.

**OnLoad**는 Boolean 유형 속성을 받습니다. 속성을 정의하고 해당 속성을 이 속성에 바인딩할 수 있습니다. 실행 중인 앱에서 모델을 열면 먼저 제품 구조 트리가 로드되어야 하며 제품 구조 트리 로드 이벤트가 트리거되고 제품 구조 로드 정보가 이 속성에 채워집니다. 제품 구조 트리의 현재 로딩 상태를 가져와서 액션에서 사용할 수 있습니다.

{{< figure src="/attachments/partners/siemens/3d-viewer/viewer-onload-result.jpg" alt="viewer-onload-result" class="no-border" >}}

다른 Mendix 이벤트와 마찬가지로 **Action**에 대해 제품 구조 트리 로드 상태 시 트리거할 액션 목록에서 선택할 수 있습니다. **On Load** 액션을 호출하려면 유효한 **Loaded** 값을 바인딩해야 합니다. 하나의 가능한 사용 사례는 사용자에게 제품 구조가 성공적으로 로드되었는지 알리기 위한 팝업 페이지를 표시하는 것입니다.

{{< figure src="/attachments/partners/siemens/3d-viewer/viewer-onload-sample.jpg" alt="viewer-onload-sample" class="no-border" >}}

## 3D 단면 생성 {#create-3d-section}

모델이 뷰어에 로드되면 [Section View](/partners/siemens/3d-viewer/installation-configuration/#section-view) 위젯(Widget)은 다음을 지원합니다:

* 표준 단면 평면을 추가하여 모델의 내부 구조 검사
* 단면 평면 삭제
* 모든 단면 평면 지우기
* 부품 클리핑
* 평면 위치 조정

아래 섹션에서는 Section View 위젯(Widget) 내의 작업을 설명합니다.

{{< figure src="/attachments/partners/siemens/3d-viewer/sectionview-designmode.jpg" alt="sectionview-designmode" class="no-border" >}}

### 액션

* **Add** – 단면 평면을 추가하는 데 사용합니다. 먼저 모델을 단면할 축을 선택한 다음 **Add**를 클릭하십시오. 원하는 축의 단면 평면이 장면에 추가됩니다. 새로 추가된 단면 평면의 기본 위치는 선택한 방향의 바운딩 박스 중앙입니다.
* **Delete** – 선택한 단면 평면을 삭제하는 데 사용합니다. 단면 평면의 가장자리를 클릭하여 선택하십시오(선택하면 단면 평면 가장자리가 노란색으로 강조 표시됩니다). 그런 다음 **Delete**를 클릭하십시오.
* **Clear** – 장면에 추가된 모든 단면 평면을 지우는 데 사용합니다.

### 방향

* **X Direction** – 기본 좌표계의 X축을 참조로 설정합니다
* **Y Direction** – 기본 좌표계의 Y축을 참조로 설정합니다
* **Z Direction** – 기본 좌표계의 Z축을 참조로 설정합니다

예를 들어 **Y Direction**을 선택하면 ZX 평면에 단면이 생성됩니다.

### 클리핑

단면 평면이 선택되면(노란색으로 강조 표시) 클리핑 옵션을 선택하여 모델의 어느 부분을 클리핑할지 선택할 수 있습니다:

* **Off** – 클리핑하지 않음
* **Both** – 양쪽을 클리핑하여 단면 평면의 2D 교차 곡선을 표시
* **Near** – 양의 방향(**Direction** 쪽)을 클리핑
* **Far** – 음의 방향(**Direction** 반대 쪽)을 클리핑

### 위치

위치 슬라이더를 이동하여 축을 따라 단면 평면의 위치를 조정할 수 있습니다. 정확한 위치를 입력하여 단면 평면을 정확한 위치에 배치할 수도 있습니다.

여러 단면 평면을 추가하여 다른 방향으로 모델을 절단할 수 있습니다. 단면 후 단면 뷰의 스냅샷을 저장할 수 있습니다. 단면 뷰에 마크업 주석을 추가하고 나중에 검토할 수 있도록 저장할 수도 있습니다.

### SectionManipulator

고급 최종 사용자는 [고급 구성](/partners/siemens/3d-viewer/advanced-configuration/)을 사용하여 SectionManipulator를 활성화하여 단면 평면을 이동/회전할 수 있습니다. 아래에 설명된 두 가지 유형이 있습니다:

| SectionManipulator 활성화 | SectionHandle 활성화 |
| ---  | --- |
| {{< figure src="/attachments/partners/siemens/3d-viewer/sectionManipulator.png" alt="sectionManipulator" class="no-border" >}} | {{< figure src="/attachments/partners/siemens/3d-viewer/sectionHandle.png" alt="sectionHandle" class="no-border" >}} |

## 3D 측정 수행 {#perform-measurements}

모델이 뷰어에 로드되면 [Measurement](/partners/siemens/3d-viewer/installation-configuration/#measurement) 위젯(Widget)이 다양한 기하학적 엔티티(Entity)를 측정할 수 있는 도구 세트를 제공합니다:

{{< figure src="/attachments/partners/siemens/3d-viewer/measurement-panel.jpg" alt="measurement-panel" class="no-border" >}}

아래 섹션에서 이러한 도구를 설명합니다.

### 측정 모드

* **Distance** – 두 부품 피처 간의 거리 측정
* **Length** – 선의 길이 측정
* **Radius** – 원형 모서리 또는 표면의 반경 측정
* **Angle** – 두 모서리 또는 표면 간의 각도 측정
* **Area** – 표면의 면적 측정

### 액션

* **Delete** – 하나의 측정 결과를 선택한 다음 **Delete**를 클릭하면 선택한 측정 결과가 장면에서 제거됩니다
* **Clear** – 장면의 모든 측정 결과를 지웁니다

## 환경 설정 {#set-preferences}

Preference 위젯(Widget)의 설정을 변경하여 모델의 동작을 사용자 정의하고 필요에 맞게 설정할 수 있습니다.

{{< figure src="/attachments/partners/siemens/3d-viewer/preferences-general.png" alt="preferences-general" class="no-border" >}}

**Preference**를 클릭하여 대화 상자를 표시하십시오. 원하는 조합으로 필터를 환경 설정으로 설정할 수 있으며 **OK** 버튼을 클릭하면 다음에 파일을 열 때 필터가 적용됩니다. **Reset** 버튼은 모든 설정을 지웁니다. 이 방법은 애플리케이션이 실행 중일 때만 환경 설정을 지정할 수 있지만 애플리케이션이 시작되기 전에 환경 설정을 지정하는 더 고급 방법도 제공합니다. 자세한 내용은 [고급 구성](/partners/siemens/3d-viewer/advanced-configuration/)을 참조하십시오.
