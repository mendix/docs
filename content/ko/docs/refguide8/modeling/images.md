---
title: "이미지"
url: /refguide8/images/
weight: 70
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

이미지는 애플리케이션을 더 밝게 만드는 데 사용할 수 있습니다. [탐색 항목](/refguide8/navigation-tree/)과 다양한 종류의 [버튼](/refguide8/button-widgets/)은 캡션 왼쪽에 작은 이미지(아이콘)를 가집니다. 이미지는 [페이지](/refguide8/pages/)와 [문서 템플릿](/refguide8/document-templates/)의 이미지 뷰어 위젯에서도 사용할 수 있습니다. 또한 [Enumeration 값](/refguide8/enumerations/#enum-value-properties)에는 Data Grid 열에 표시할 수 있는 이미지가 있을 수 있습니다.

**System** 모듈에는 표준 구성 요소에서 사용되는 일부 이미지가 포함되어 있습니다. 페이지에 Data View를 배치하면 **Save** 및 **Cancel** 버튼에 **System** 모듈의 이미지가 표시됩니다. 원하는 경우 항상 다른 이미지를 사용할 수 있습니다. Data Grid의 컨트롤 바 버튼에 있는 이미지도 마찬가지입니다.

{{% alert color="info" %}}
이런 종류의 이미지를 **정적** 이미지라고 합니다. 어떤 객체를 저장하든 항상 동일하게 보이기 때문입니다. 예를 들어, 저장 버튼에 넣은 아이콘은 어떤 객체를 저장하든 항상 동일하게 보입니다.

다른 객체에 대해 다른 이미지를 표시하려는 경우(예: 제품 사진) 이러한 이미지는 데이터베이스에 이미지로 저장해야 합니다. 자세한 내용은 [이미지 및 파일 작업 방법](/howto8/data-models/working-with-images-and-files/)을 참조하십시오.
{{% /alert %}}

## 지원 형식

다음 이미지 형식이 지원됩니다: *png*, *jpeg*, *gif*, *bmp*, *svg*. 정보 손실 없이 압축되고 투명도를 매우 잘 지원하는 *png* 형식을 권장합니다.

## 사용자 정의 이미지

자체 이미지를 사용하려면 먼저 [이미지 컬렉션](/refguide8/image-collection/)에 추가해야 합니다. 이미지 컬렉션을 만들고 이미지를 추가하는 방법에 대한 자세한 내용은 [이미지 컬렉션](/refguide8/image-collection/)을 참조하십시오.

가져온 모듈(예: Atlas UI 모듈)의 기존 이미지 컬렉션에 사용자 정의 이미지를 추가해서는 안 됩니다. 이렇게 하면 나중에 모듈의 새 버전을 가져올 때 덮어쓸 위험이 있습니다.

이미지 컬렉션에 이미지를 추가한 후에는 앱의 모든 모듈에서 사용할 수 있습니다.

{{% alert color="info" %}}
CSS 또는 사용자 정의 위젯에서 이미지 컬렉션의 이미지를 참조해야 하는 경우 이미지의 이름은 `/img/{module_name}${image_collection_name}${image_name}`입니다.
{{% /alert %}}

## 공통 속성

### 이름

이것은 이미지의 이름입니다.
