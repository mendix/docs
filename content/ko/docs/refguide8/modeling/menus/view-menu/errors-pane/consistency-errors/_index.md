---
title: "Consistency Errors"
url: /refguide8/consistency-errors/
weight: 10
description: "Mendix Studio Pro의 일관성 오류와 수정 방법에 대해 설명합니다."
---

## 소개

앱이 항상 일관되고 올바르게 빌드되도록 하기 위해, Studio Pro는 앱을 빌드할 때 일관성 검사를 수행합니다.

일관성 검사가 충족되지 않으면, Studio Pro는 [Errors 창](/refguide8/errors-pane/)의 일관성 오류를 통해 이를 알려줍니다. 페이지, Microflow, Domain Model 및 문서 템플릿의 오류가 강조 표시됩니다:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/errors-pane/consistency-errors/errors-pane.png" alt="Errors Pane" class="no-border" >}}

**Errors** 창이 보이지 않으면 **View > Error list** 메뉴 옵션에서 활성화할 수 있습니다.

오류를 빠르게 찾을 수 있도록 각 오류에 다음이 표시됩니다:

* 고유한 **Error Code**
* 오류를 설명하는 **Message**
* 오류를 유발하는 페이지 **Element** 이름
* 이 요소가 있는 **Document**
* 문서가 있는 **Module**

오류를 더블 클릭하면 오류를 유발하는 요소로 직접 이동합니다.

앱을 배포하기 전에 오류를 해결해야 합니다. 일관성 오류는 Studio Pro의 다음 편집기 또는 기능에서 발생할 수 있습니다:

* [Pages](/refguide8/consistency-errors-pages/)
* [Navigation](/refguide8/consistency-errors-navigation/)
* [Microflows](/refguide8/microflows/)
* [Domain Model](/refguide8/domain-model/)
* [Integration](/refguide8/integration/)
* [Security](/refguide8/security/)

## 더 보기

* [Page Editor Consistency Errors](/refguide8/consistency-errors-pages/)
* [Navigation Consistency Errors](/refguide8/consistency-errors-navigation/)
* [Errors Pane](/refguide8/errors-pane/)
* [Pages](/refguide8/pages/)
* [Microflows](/refguide8/microflows/)
* [Mendix의 Navigation](/refguide8/navigation/)
