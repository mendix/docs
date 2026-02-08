---
title: "3D Viewer"
url: /partners/siemens/3d-viewer/
weight: 20
description: "Describes the configuration and usage of the 3D Viewer app service, which enables uploading, visualizing, and operating on 3D JT files in your web apps."
aliases:
  - /appstore/app-services/3d-viewer/index.html
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 소개

[3D Viewer](https://marketplace.mendix.com/link/component/118345) 서비스를 사용하면 Mendix 파일 스토리지를 사용하여 모델을 저장하면서 웹 애플리케이션에서 JT 파일을 업로드, 시각화 및 작업할 수 있습니다. 이 앱 서비스에는 기본 제공 Java 액션, JavaScript 액션, [도메인 모델(Domain Model)](/refguide/domain-model/), [나노플로우(Nanoflow)](/refguide/nanoflows/), [마이크로플로우(Microflow)](/refguide/microflows/) 및 3D 모델로 작업하는 앱을 구축할 수 있는 3D 위젯(Widget) 세트가 포함되어 있습니다. 또한 자체 3D 애플리케이션을 구축할 때 매우 유용한 전체 기능과 통합이 포함되어 있습니다. 항목을 드래그 앤 드롭하고 구성하기만 하면 됩니다.

이 앱 서비스는 3D 렌더링 엔진을 처음부터 구축할 필요가 없도록 복잡한 작업을 대신 처리합니다.

다음은 3DViewer에 포함된 항목의 개요입니다:

| 항목 | 이름 |
| ---  | --- |
| [사전 정의된 엔티티(Entity)](/partners/siemens/3d-viewer/installation-configuration/#predefined-entities) | ModelDocument, Pagination, Markup, MxChildDocument, MxModelDocument |
| [상수](/partners/siemens/3d-viewer/installation-configuration/#constants) | HTTPEndpoint / Endpoint, LicenseToken, ModelSourceType |
| [마이크로플로우(Microflow)](/partners/siemens/3d-viewer/installation-configuration/#microflow) | DeleteModelFromMendix, DownloadMarkup |
| [나노플로우(Nanoflow)](/partners/siemens/3d-viewer/installation-configuration/#nanoflow) | CreateModelDocumentFromFileDocument, GetMarkupsFromMendix, GetModelListFromMendix |
| [Java 액션](/partners/siemens/3d-viewer/installation-configuration/#java-action) | VisServerAction |
| [위젯(Widget)](/partners/siemens/3d-viewer/installation-configuration/#widgets) | Container3D, Markup builder, Measurement, PMI tree, PS tree, PS tree table, Section view, Toolbar item camera mode, Toolbar item camera orientation, Toolbar item explode slider, Toolbar item fit all, Toolbar item render mode, Toolbar item selection mode, Toolbar item snapshot, Uploader, Viewer, Preference |

대부분의 경우 **Viewer3D/USE_ME** 폴더에 포함된 것만 필요합니다. **Internal** 폴더의 콘텐츠는 내부용이며 필요하지 않습니다.

## 일반적인 사용 사례

Mendix 애플리케이션에서 3D 모델을 업로드, 저장 및 시각화하려는 경우 이 앱 서비스를 사용할 수 있습니다. 모델 제품 구조 트리 및 PMI(Product Manufacturing Information) 트리 탐색, 단면도 생성, 2D 마크업 등과 같은 기본 작업을 수행할 수 있습니다.

## 기능

이 앱 서비스를 사용하면 다음을 수행할 수 있습니다:

* Mendix 파일 스토리지 또는 자체 파일 스토리지에서 모델 업로드 및 로드(모놀리식 JT 및 분산 JT 형식 모두 지원)
* URL에서 모델 열기
* 모델 미리보기
* 줌, 회전, 전체 맞춤 및 패닝 등 다양한 방법으로 모델 보기 지원
* 빠른 직관적 컨트롤로 제품 구조 탐색
* 부품 표시 및 숨기기
* 부품 선택 및 선택 해제
* 사전 설정된 보기 각도에서 모델 검사
* PMI 표시
* 모델 뷰 표시
* 부품/어셈블리 속성 표시
* 분해도 표시
* 3D 단면 생성
* 모델에 2D 마크업 생성
* 모델 스냅샷 촬영
* 거리, 각도, 면적, 반경 및 길이에 대한 3D 측정 수행
* PMI 필터 옵션 설정 및 개인 환경 설정으로 저장

## 제한 사항 {#limitations}

3D Viewer 앱 서비스에는 몇 가지 3D 위젯(Widget)이 포함되어 있습니다. 다음은 Mendix Studio Pro의 페이지에서 이러한 위젯(Widget)을 배치하는 방법에 대한 제한 사항입니다:

* **Container3D** 위젯(Widget)은 다른 3D 위젯(Widget)의 컨텍스트 공유 컨테이너 역할을 하므로 3D 위젯(Widget)이 이 컨텍스트를 통해 서로 통신하고 해당 작업을 수행할 수 있습니다. 따라서 다른 모든 3D 위젯(Widget)(**Uploader** 위젯(Widget) 제외)은 Container3D 위젯(Widget) 내부에 배치해야 합니다. 3D 위젯(Widget)이 Container3D 위젯(Widget) 외부에 배치되면 이러한 위젯(Widget)이 예상대로 작동하지 않습니다. 이 경우 **Design mode**로 전환하면 알림과 오류가 표시됩니다.

    {{< figure src="/attachments/partners/siemens/3d-viewer/widgetoutsidecontainer3d-structuremode.jpg" alt="widgetoutsidecontainer3d-structuremode" class="no-border" >}}

* 하나의 **Container3D** 위젯(Widget)에는 하나의 **Viewer** 위젯(Widget)만 포함할 수 있습니다. 여러 Viewer 위젯(Widget)이 Container3D 위젯(Widget) 내부에 배치되면 **Design mode**에서 오류 메시지가 표시됩니다.
* **Viewer** 위젯(Widget)은 3D 모델을 표시하는 데 사용됩니다. 다른 모든 3D 위젯(Widget)(**Uploader** 및 **Container3D** 위젯(Widget) 제외)은 상호 작용하기 위해 페이지에 Viewer 위젯(Widget)이 있어야 합니다.
* JT 형식(버전 9 이상)을 지원합니다.
* 분산 JT *.zip* 파일을 업로드하기 전에 UTF-8 인코딩을 사용하여 JT 파일을 압축하는지 확인하십시오. 예를 들어 7-Zip을 사용하는 경우 **Parameters**에 *cu*를 입력해야 합니다.

    {{< figure src="/attachments/partners/siemens/3d-viewer/shatteredjt-utf8.png" alt="shatteredjt-utf8" class="no-border" >}}

## 전제 조건

3D Viewer 버전 4.0.0 이상은 Studio Pro 버전 [10.0.0](/releasenotes/studio-pro/10.0/) 이상에서 사용할 수 있습니다.

다른 릴리스의 요구 사항에 대한 자세한 정보는 Marketplace의 [컴포넌트 페이지](https://marketplace.mendix.com/link/component/118345)에서 릴리스 기록을 참조하십시오.

## 더 읽기

* Academy 과정: [3D 모델 검사 앱 구축](https://academy.mendix.com/link/paths/115/Build-a-3D-Model-Inspection-App)
