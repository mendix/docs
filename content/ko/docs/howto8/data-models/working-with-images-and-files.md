---
title: "이미지 및 파일 작업"
url: /howto8/data-models/working-with-images-and-files/
weight: 4
---

## 소개

이 사용 방법 문서에서는 Mendix에서 이미지와 파일을 작업하는 방법을 설명합니다. Mendix는 기본적으로 파일 및 이미지 업로드를 지원합니다. 또한 업로드한 이미지를 보고 파일을 다운로드할 수 있습니다. 먼저 자체 도메인 모델을 만들고 어떤 Entity가 이미지이고 어떤 것이 파일인지 정의해야 합니다. 이는 '상속'이라는 개념을 통해 수행되며, 때때로 '일반화'라고도 합니다. 'System.Image'에서 상속하면 자체 Entity가 시스템 이미지 Entity의 모든 속성을 갖게 됩니다. 이를 통해 표준 플랫폼 위젯을 사용하여 이미지를 업로드하고 볼 수 있습니다. 파일 문서도 마찬가지입니다.

## 사전 조건

이 사용 방법을 시작하기 전에 다음 사전 조건을 완료하세요:

* [기본 데이터 레이어 생성 방법](/howto8/data-models/create-a-basic-data-layer/) 읽기

## 이미지

1. 도메인 모델을 열고 **MyImage**라는 Entity를 생성하세요.
2. Entity를 더블클릭하여 속성을 여세요.
3. **Generalization** 속성에서 **Select**를 클릭하여 Entity 선택기를 여세요.

    {{< figure src="/attachments/howto8/data-models/working-with-images-and-files/18582124.png" class="no-border" >}}

4. **System.Image**를 선택하고 **Select** 버튼을 클릭하세요.

    {{< figure src="/attachments/howto8/data-models/working-with-images-and-files/18582123.png" class="no-border" >}}

5. Entity 속성 양식에서 **OK**를 클릭하세요. Entity가 선택한 'System.Image' Entity의 모든 속성을 상속하며 다음과 같이 표시됩니다:

    {{< figure src="/attachments/howto8/data-models/working-with-images-and-files/18582136.png" class="no-border" >}}

6. 방금 생성한 Entity의 객체를 관리하기 위한 개요 및 상세 페이지를 생성하세요. 상세 페이지는 다음과 같이 표시되어야 합니다:

    {{< figure src="/attachments/howto8/data-models/working-with-images-and-files/18582131.png" class="no-border" >}}

7. **상세 페이지**를 열고 ImageUploader를 더블클릭하여 속성을 여세요. 이 양식에서 최대 파일 크기, 썸네일 너비 및 높이를 선택할 수 있습니다. Mendix는 ImageUploader를 통해 업로드하는 이미지의 썸네일을 자동으로 생성합니다.

    {{< figure src="/attachments/howto8/data-models/working-with-images-and-files/18582130.png" class="no-border" >}}

8. ImageViewer를 더블클릭하여 속성을 여세요. 이 양식에서 기본 이미지, 너비, 높이 및 뷰어가 썸네일 또는 전체 이미지를 표시할지 선택할 수 있습니다.

    {{< figure src="/attachments/howto8/data-models/working-with-images-and-files/18582129.png" class="no-border" >}}

## 파일 문서

1. 도메인 모델을 열고 **MyDocument** Entity를 생성하세요.
2. Entity를 더블클릭하여 **속성**을 여세요.
3. **Generalization** 속성에서 **Select**를 클릭하여 Entity 선택기를 여세요.
4. **Select Entity** 대화 상자에서 **System.FileDocument**를 선택하세요.
5. Entity 속성 양식에서 **OK**를 클릭하세요. Entity가 선택한 **System.FileDocument** Entity의 모든 속성을 상속하며 다음과 같이 표시됩니다:

    {{< figure src="/attachments/howto8/data-models/working-with-images-and-files/18582126.png" class="no-border" >}}

6. 방금 생성한 Entity의 객체를 관리하기 위한 개요 및 상세 페이지를 생성하세요. 페이지 생성 방법을 모르는 경우 [이 문서](/howto8/front-end/create-your-first-two-overview-and-detail-pages/)를 참조하세요. 상세 페이지는 다음과 같이 표시되어야 합니다:

    {{< figure src="/attachments/howto8/data-models/working-with-images-and-files/18582125.png" class="no-border" >}}

7. 상세 페이지를 열고 FileManager를 더블클릭하여 속성을 여세요. 이 양식에서 최대 파일 크기 및 허용되는 파일 확장자를 선택할 수 있습니다.

    {{< figure src="/attachments/howto8/data-models/working-with-images-and-files/18582122.png" class="no-border" >}}

## 내비게이션 및 보안

1. 사용을 시작하기 위해 개요 페이지에 대한 내비게이션 항목을 만드세요. 내비게이션 구조 설정 방법을 모르는 경우 [내비게이션 구조 설정 방법](/howto8/general/setting-up-the-navigation-structure/)을 참조하세요.
2. 이 애플리케이션의 보안을 활성화한 경우 개요 및 상세 페이지 모두에서 페이지 접근을 구성해야 합니다. 페이지 접근 구성 방법을 모르는 경우 [보안 앱 만들기 방법](/howto8/security/create-a-secure-app/)을 참조하세요.

## 더 읽기

* [기본 데이터 레이어 생성](/howto8/data-models/create-a-basic-data-layer/)
* [성능 향상을 위한 데이터 비정규화](/howto8/data-models/denormalize-data-to-improve-performance/)
* [데이터 유효성 검사 설정](/howto8/data-models/setting-up-data-validation/)
* [런타임 오류의 근본 원인 찾기](/howto8/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
