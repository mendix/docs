---
title: "리소스"
url: /refguide9/resources/
weight: 50
description: "Studio Pro에서 사용할 수 있는 보조 문서(리소스)를 소개합니다."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 소개

리소스는 모듈 내에서 단독으로 기능할 수 없지만 다른 문서에서 사용할 수 있는 보조 문서입니다. 예를 들어, Microflow나 페이지는 단독으로 기능할 수 있지만, Java Action은 Microflow 내에서만 기능할 수 있습니다.  

리소스는 앱의 다양한 모듈에서 재사용할 수 있습니다. 

## 리소스 추가

리소스 문서를 추가하려면 다음을 수행하십시오:

1. [App Explorer](/refguide9/app-explorer/)에서 리소스를 추가할 모듈 또는 폴더를 마우스 오른쪽 버튼으로 클릭하고 **Add other**를 선택하십시오:

    {{< figure src="/attachments/refguide9/modeling/resources/app-explorer-resources.png" class="no-border" >}}

2. **Resources** 카테고리에서 앱에 추가할 문서를 선택하십시오.

## 리소스 개요

**Resources** 카테고리에는 Studio Pro의 다양한 편집기에서 사용할 수 있는 여러 문서 유형이 포함되어 있습니다:

| 요소            | 사용 위치                      | 설명                                                  |
| ------------------ | -------------------------------------- | ------------------------------------------------------------ |
| [Java Action](/refguide9/java-actions/) | Microflow                             | Java Action은 애플리케이션의 기능을 확장할 수 있습니다. Microflow에서 호출할 수 있습니다. |
| [JavaScript Action](/refguide9/javascript-actions/) | Nanoflow                               | JavaScript Action은 애플리케이션의 기능을 확장할 수 있습니다. Nanoflow에서 호출할 수 있습니다. |
| [Rule](/refguide9/rules/)      | Microflow                             | Rule은 Enumeration 또는 Boolean 결과를 반환해야 하는 애플리케이션 로직을 포함합니다. Microflow의 Decision에서 사용됩니다. |
| [Enumeration](/refguide9/enumerations/) | Domain Model                           | Enumeration은 Enumeration 유형의 속성을 정의하는 데 사용됩니다. |
| [Dataset](/refguide9/data-sets/) | 페이지                                  | Dataset은 리포트 위젯에 표시되는 데이터를 정의합니다.        |
| [Constant](/refguide9/constants/) | Microflow 표현식 및 사용된 웹 서비스 | Constant는 구성 값을 정의하는 데 사용됩니다.           |
| [정규 표현식](/refguide9/regular-expressions/) | Domain Model                           | 정규 표현식은 유효성 검사 규칙에서 문자열이 유효성 검사를 통과하기 위해 일치해야 하는 기준을 정의하는 데 사용됩니다. 정규 표현식이 필요한 다른 위치(예: *isMatch()* 함수)에서는 사용할 수 없습니다. |
| [Scheduled Event](/refguide9/scheduled-events/) | Microflow                     | Scheduled Event는 런타임이 특정 시점에 Microflow를 실행하도록 합니다. |
| [Document Template](/refguide9/document-templates/) | Microflow                             | Document Template은 클라이언트에서 문서의 형식을 지정하고 다운로드하거나 인쇄하는 데 사용됩니다. |

## 더 읽기

* [Microflow](/refguide9/microflows/)
* [Domain Model](/refguide9/domain-model/)
* [페이지](/refguide9/pages/)
