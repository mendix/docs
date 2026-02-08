---
title: "빌딩 블록 및 페이지 템플릿용 사용자 정의 미리보기 이미지 만들기"
linktitle: "사용자 정의 미리보기 이미지"
url: /howto8/front-end/create-custom-preview-images-for-building-blocks-and-page-templates/
weight: 50
---

{{% alert color="info" %}}
Atlas UI Resources 모듈은 더 이상 사용되지 않으며, Atlas 2도 마찬가지입니다. 아직 Atlas 2를 사용하고 있다면, Mendix는 [Atlas 2에서 Atlas 3으로 마이그레이션](/refguide9/moving-from-atlas-2-to-3/)하는 것을 권장합니다.
{{% /alert %}}

## 소개

사용자 정의 UI 리소스를 쉽게 탐색할 수 있도록 빌딩 블록과 페이지 템플릿에 대한 사용자 정의 미리보기 이미지를 만들 수 있습니다. [Atlas UI 사이트](https://atlas2.mendix.com)에서 *.sketch* 및 *.psd* 형식으로 다운로드할 수 있는 템플릿을 제공합니다.

이 사용 방법 가이드에서는 다음을 배우게 됩니다:

* 다양한 편집기에서 빌딩 블록 미리보기 이미지 만들기
* 다양한 편집기에서 페이지 템플릿 미리보기 이미지 만들기

## 빌딩 블록 미리보기 이미지 만들기

{{< figure src="/attachments/howto8/front-end/atlas-ui/create-custom-preview-images-for-building-blocks-and-page-templates/create_custom_image_bb.png" class="no-border" >}}

### Sketch에서 빌딩 블록 미리보기 이미지 만들기

Sketch에서 빌딩 블록 미리보기 이미지를 만들려면 다음 단계를 따르십시오:

1. [Atlas UI 이미지 템플릿 리소스 팩](https://atlas2.mendix.com/index3.html#/resources/7881299347899269)을 다운로드하십시오.
2. **BB_previewimage.sketch**라는 Sketch 파일을 여십시오. 이 파일에는 두 개의 아트보드가 있습니다. 첫 번째 아트보드는 Studio Pro의 Toolbox에서 사용자 정의 미리보기 이미지가 어떻게 보이는지의 예를 보여줍니다. 두 번째 아트보드는 이미지를 배치하는 곳입니다.
3. **Template**이라는 레이어를 숨긴 다음 **Building Block preview** 폴더에 미리보기 이미지를 삽입하십시오.
4. 이미지에 만족하면 아트보드를 선택하십시오.
5. 화면 오른쪽 하단에 나타나는 **Export** 대화 상자에서 기본 설정이 다음과 같은지 확인하십시오:
    * **Size**: 1x
    * **Format**: PNG

    {{< figure src="/attachments/howto8/front-end/atlas-ui/create-custom-preview-images-for-building-blocks-and-page-templates/create_custom_image_bb_sketch.png" class="no-border" >}}

6. 이미지를 내보내십시오.

### Photoshop에서 빌딩 블록 미리보기 이미지 만들기

Photoshop에서 빌딩 블록 미리보기 이미지를 만들려면 다음 단계를 따르십시오:

1. [Atlas UI 이미지 템플릿 리소스 팩](https://atlas2.mendix.com/index3.html#/resources/7881299347899269)을 다운로드하십시오.
2. **BB_previewimage.psd**라는 Photoshop 파일을 여십시오.
3. **Layers** 패널에서 스마트 오브젝트를 더블 클릭하십시오.

    {{< figure src="/attachments/howto8/front-end/atlas-ui/create-custom-preview-images-for-building-blocks-and-page-templates/create_custom_image_bb_photoshop.png" class="no-border" >}}

4. 폴더의 내용을 빌딩 블록 미리보기 이미지로 바꾸십시오.
5. 변경 사항을 저장하고 템플릿 파일로 돌아가십시오.
6. 이미지에 만족하면 *.png* 파일로 내보내십시오.

### Illustrator에서 빌딩 블록 미리보기 이미지 만들기

Illustrator에서 빌딩 블록 미리보기 이미지를 만들려면 다음 단계를 따르십시오:

1. [Atlas UI 이미지 템플릿 리소스 팩](https://atlas2.mendix.com/index3.html#/resources/7881299347899269)을 다운로드하십시오.
2. **BB_previewimage.ai**라는 Illustrator 파일을 여십시오. 이 파일에는 두 개의 아트보드가 있습니다. 첫 번째 아트보드는 Studio Pro의 Toolbox에서 사용자 정의 미리보기 이미지가 어떻게 보이는지의 예를 보여줍니다. 두 번째 아트보드는 이미지를 배치하는 곳입니다.
3. **Template**이라는 레이어를 숨긴 다음 **Building Block preview** 폴더에 미리보기 이미지를 삽입하십시오.
4. 이미지에 만족하면 아트보드를 선택하십시오.
5. **File** > **Export for screens**을 클릭한 다음 **BB Image@2x** 아트보드를 선택하십시오.
6. 기본 설정이 다음과 같은지 확인하십시오:
    * **Scale**: 1x
    * **Format**: PNG

    {{< figure src="/attachments/howto8/front-end/atlas-ui/create-custom-preview-images-for-building-blocks-and-page-templates/create_custom_image_bb_illustrator.png" class="no-border" >}}

7. 이미지를 내보내십시오.

### 다른 이미지 편집기에서 빌딩 블록 미리보기 이미지 만들기

원하는 다른 이미지 편집기에서 빌딩 블록 미리보기 이미지를 만들 수도 있습니다. 빌딩 블록 미리보기 이미지는 너비 280px, 높이 216px이어야 합니다. 이미지를 *.png* 파일로 저장하십시오.

## 페이지 템플릿 미리보기 이미지 만들기

{{< figure src="/attachments/howto8/front-end/atlas-ui/create-custom-preview-images-for-building-blocks-and-page-templates/create_custom_image_pt.png" class="no-border" >}}

### Sketch에서 페이지 템플릿 미리보기 이미지 만들기

Sketch에서 페이지 템플릿 미리보기 이미지를 만들려면 다음 단계를 따르십시오:

1. [Atlas UI 이미지 템플릿 리소스 팩](https://atlas2.mendix.com/index3.html#/resources/7881299347899269)을 다운로드하십시오.
2. **PT_previewimage.sketch**라는 Sketch 파일을 여십시오. 이 파일에는 세 개의 아트보드가 있습니다. 처음 두 아트보드는 페이지 템플릿 미리보기 이미지가 어떻게 보이는지의 예를 보여줍니다. 세 번째 아트보드는 이미지를 배치하는 곳입니다.
3. **Template**이라는 레이어를 숨긴 다음 **Building Block preview** 폴더에 미리보기 이미지를 삽입하십시오.
4. 이미지에 만족하면 아트보드를 선택하십시오.
5. 화면 오른쪽 하단에 나타나는 **Export** 대화 상자에서 기본 설정이 다음과 같은지 확인하십시오:
    * **Size**: 1x
    * **Format**: PNG

    {{< figure src="/attachments/howto8/front-end/atlas-ui/create-custom-preview-images-for-building-blocks-and-page-templates/create_custom_image_pt_sketch.png" class="no-border" >}}

6. 이미지를 내보내십시오.

### Photoshop에서 페이지 템플릿 미리보기 이미지 만들기

Photoshop에서 페이지 템플릿 미리보기 이미지를 만들려면 다음 단계를 따르십시오:

1. [Atlas UI 이미지 템플릿 리소스 팩](https://atlas2.mendix.com/index3.html#/resources/7881299347899269)을 다운로드하십시오.
2. **PT_previewimage.psd**라는 Photoshop 파일을 여십시오.
3. **Layers** 패널에서 스마트 오브젝트를 더블 클릭하십시오.

    {{< figure src="/attachments/howto8/front-end/atlas-ui/create-custom-preview-images-for-building-blocks-and-page-templates/create_custom_image_pt_photoshop.png" class="no-border" >}}

4. 폴더의 내용을 페이지 템플릿 미리보기 이미지로 바꾸십시오.
5. 변경 사항을 저장하고 템플릿 파일로 돌아가십시오. 이미지에 만족하면 *.png* 파일로 내보내십시오.

### Illustrator에서 페이지 템플릿 미리보기 이미지 만들기

Illustrator에서 페이지 템플릿 미리보기 이미지를 만들려면 다음 단계를 따르십시오:

1. [Atlas UI 이미지 템플릿 리소스 팩](https://atlas2.mendix.com/index3.html#/resources/7881299347899269)을 다운로드하십시오.
2. **PT_previewimage.ai**라는 Illustrator 파일을 여십시오. 이 파일에는 세 개의 아트보드가 있습니다. 처음 두 아트보드는 페이지 템플릿 미리보기 이미지가 어떻게 보이는지의 예를 보여줍니다. 세 번째 아트보드는 이미지를 배치하는 곳입니다.
3. **Template**이라는 레이어를 숨긴 다음 **Page template preview** 폴더에 미리보기 이미지를 삽입하십시오.
4. 이미지에 만족하면 아트보드를 선택하십시오.
5. **File** > **Export for screens**을 클릭한 다음 **PT@2x** 아트보드를 선택하십시오.
6. 기본 설정이 다음과 같은지 확인하십시오:
    * **Scale**: 1x
    * **Format**: PNG

    {{< figure src="/attachments/howto8/front-end/atlas-ui/create-custom-preview-images-for-building-blocks-and-page-templates/create_custom_image_bb_illustrator.png" class="no-border" >}}

7. 이미지를 내보내십시오.

### 다른 이미지 편집기에서 페이지 템플릿 미리보기 이미지 만들기

원하는 다른 이미지 편집기에서 페이지 템플릿 미리보기 이미지를 만들 수도 있습니다. 페이지 템플릿 미리보기 이미지는 너비 255px, 높이 255px이어야 합니다. 이미지를 *.png* 파일로 저장하십시오.

## 더 읽기

* [Atlas UI 시작하기](/howto8/front-end/get-started-with-atlasui/)
* [회사 Atlas UI 리소스 만들기](/howto8/front-end/create-company-atlas-ui-resources/)
* [기존 앱을 Atlas UI로 마이그레이션하기](/howto8/front-end/migrate-existing-projects-to-atlasui/)
* [회사 Atlas UI 리소스 공유하기](/howto8/front-end/share-company-atlas-ui-resources/)
