---
title: "Static Label (Document Template)"
url: /refguide9/static-label-document-template/
aliases:
    - /refguide9/Static+label+(document+template).html
    - /refguide9/static-label-(document-template).html
    - /refguide9/Static+label+(document+template)
    - /refguide9/static-label-(document-template)
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

정적 라벨은 한 줄의 정적 텍스트를 표시합니다. Data View, Template Grid 또는 테이블 내부에 사용자 정의 텍스트를 배치하는 데 사용할 수 있습니다.

예를 들어, 'Customer name' 텍스트가 있는 라벨은 다음과 같이 표시됩니다:

{{< figure src="/attachments/refguide9/modeling/resources/document-templates/918130.png" class="no-border" >}}

현재 페이지 번호 또는 총 페이지 수를 문서에 삽입하려면 정적 라벨 내부(정적 라벨에서만)에서 토큰을 사용할 수 있습니다.

예를 들어, 정적 라벨 내용 `Page [%pageNumber%] of [%totalPageCount%]`는 **Page 2 of 4**로 인쇄됩니다.

## 공통 속성

{{% snippet file="/static/_includes/refguide9/name-property.md" %}}

## 외관 속성

### 캡션

문서에 표시될 값입니다.

### 스타일

자세한 내용은 [Style](/refguide9/style/)을 참조하십시오.
