---
title: "Rule"
url: /refguide9/rules/
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Rule은 특별한 종류의 Microflow입니다. 결과는 Enumeration 또는 Boolean이어야 하며, [Decision](/refguide9/decision/)에서 해당 결과를 기반으로 결정을 내리는 데 사용할 수 있습니다. 복잡한 결정을 Rule로 통합하고 다양한 위치에서 재사용할 수 있다는 것이 핵심 아이디어입니다.

## Microflow와의 차이점

Rule은 Microflow와 매우 유사합니다. Rule을 작성하는 방법에 대한 자세한 내용은 [Microflow](/refguide9/microflows/) 문서를 참조하십시오. Rule과 Microflow 사이에는 몇 가지 차이점만 있습니다:

* Rule은 Decision에서만 사용할 수 있습니다
* 반환 유형은 Boolean 또는 Enumeration이어야 합니다
* Rule은 데이터베이스의 데이터를 변경할 수 없습니다. 객체를 생성, 삭제, 변경 및 롤백하는 액션은 Rule에서 사용할 수 없습니다
* Rule은 클라이언트와 상호 작용할 수 없습니다. 폼을 표시하거나 닫고, 메시지를 표시하고, 유효성 검사 피드백을 보내고, 파일을 다운로드하는 액션은 Rule에서 사용할 수 없습니다
* Rule은 웹 서비스를 호출하거나, 문서를 생성하거나, XML을 가져올 수 없습니다

이러한 차이점은 Microflow가 제공하는 추가 기능이 필요하지 않은 경우 Rule이 Microflow보다 더 나은 성능을 발휘한다는 것을 의미합니다.

## 더 읽기

* [Microflow](/refguide9/microflows/)
* [Decision](/refguide9/decision/)
