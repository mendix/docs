---
title: "Rule"
url: /refguide8/rules/
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Rule은 특수한 종류의 Microflow입니다. 결과는 Enumeration 또는 Boolean이어야 하며, 해당 결과를 기반으로 결정을 내리기 위해 [Decision](/refguide8/decision/)에서 사용할 수 있습니다. 복잡한 결정을 Rule로 통합하여 다양한 곳에서 재사용할 수 있습니다.

## Microflow와의 차이점

Rule은 Microflow와 매우 유사합니다. Rule을 구축하는 방법에 대한 자세한 정보는 [Microflow](/refguide8/microflows/) 문서를 참조하십시오. Rule과 Microflow 사이에는 몇 가지 차이점만 있습니다:

* Rule은 Decision에서만 사용할 수 있습니다
* 반환 타입은 Boolean 또는 Enumeration이어야 합니다
* Rule은 데이터베이스의 데이터를 변경할 수 없습니다. 객체 생성, 삭제, 변경 및 롤백 액션은 Rule에서 사용할 수 없습니다
* Rule은 클라이언트와 상호작용할 수 없습니다. 폼 표시 또는 닫기, 메시지 표시, 유효성 검사 피드백 전송 및 파일 다운로드 액션은 Rule에서 사용할 수 없습니다
* Rule은 웹 서비스를 호출하거나, 문서를 생성하거나, XML을 가져올 수 없습니다

## 추가 정보

* [Microflow](/refguide8/microflows/)
* [Decision](/refguide8/decision/)
