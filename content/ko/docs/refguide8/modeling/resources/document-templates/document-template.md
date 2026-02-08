---
title: "Document Template"
url: /refguide8/document-template/
---

## 소개

이 문서에서는 Document Template의 속성을 설명합니다. Document Template의 용도와 배치할 수 있는 위젯의 종류를 확인하려면 [Document Template](/refguide8/document-templates/) 개요 문서를 참조하십시오.

## 외관 속성 {#appearance-properties}

### 페이지 형식

페이지 형식은 Document Template으로 대상으로 하는 페이지의 크기를 결정합니다. 예로 A4(세로) 및 A5(가로)가 있습니다. 사용자 정의 페이지 형식을 선택하고 아래의 [페이지 너비](#width) 및 [페이지 높이](#height) 속성을 사용할 수도 있습니다.

### 페이지 너비 (인치) {#width}

Document Template으로 대상으로 하는 페이지의 너비입니다. 페이지 형식을 선택하면 자동으로 설정됩니다. 변경하면 페이지 형식이 'Custom'으로 설정됩니다.

### 페이지 높이 (인치) {#height}

Document Template으로 대상으로 하는 페이지의 높이입니다. 페이지 형식을 선택하면 자동으로 설정됩니다. 변경하면 페이지 형식이 'Custom'으로 설정됩니다.

### Pixels per Inch (PPI)

픽셀 밀도는 픽셀 값을 기반으로 이미지의 크기를 계산하는 데 사용됩니다.

### 여백 왼쪽/오른쪽/위/아래 (인치)

여백은 용지의 테두리와 모든 면의 내용 사이의 거리를 지정합니다.

### 첫 번째 페이지에 머리글/바닥글 표시

머리글 및/또는 바닥글이 첫 번째 페이지에도 표시되는지 여부를 나타냅니다.

{{% alert color="warning" %}}
더 이상 첫 번째 페이지에 있지 않음을 나타내려면 Page Break 위젯을 사용해야 합니다. 콘텐츠를 생성하는 동안 이를 계산할 수 없습니다.
{{% /alert %}}

기본값: *True.*

### 머리글 활성화

각 페이지(선택적으로 첫 번째 페이지 제외)에 표시되는 머리글이 있는지 여부를 나타냅니다.

### 바닥글 활성화

각 페이지(선택적으로 첫 번째 페이지 제외)에 표시되는 바닥글이 있는지 여부를 나타냅니다.

## 스타일

자세한 내용은 [Style](/refguide8/style/)을 참조하십시오.

## 공통 속성

### 이름

Document Template의 이름입니다. Project Explorer를 통해 이름을 변경할 수 있습니다.

### 문서화

Document Template에 대한 문서화입니다.

## 디자인 속성

### 캔버스 너비

캔버스 너비는 Studio Pro에서 Document Template를 구축하는 캔버스의 너비를 결정합니다. 이 속성은 애플리케이션에 아무런 영향을 미치지 않습니다.
