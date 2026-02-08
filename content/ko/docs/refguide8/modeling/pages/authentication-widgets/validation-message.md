---
title: "유효성 검사 메시지"
url: /refguide8/validation-message/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}유효성 검사 메시지 위젯은 네이티브 모바일 페이지에서 지원되지 않습니다.{{% /alert %}}

## 소개

**유효성 검사 메시지** 위젯은 페이지에 인증 실패 메시지를 표시합니다:

{{< figure src="/attachments/refguide8/modeling/pages/authentication-widgets/validation-message/validation-message.png" alt="Validation Message Widget" class="no-border" >}}

다음 두 가지 조건이 모두 충족될 때만 최종 사용자에게 표시됩니다:

1. Sign-in 버튼의 **유효성 검사 메시지 위젯** 속성에서 유효성 검사 메시지가 선택된 경우. 이 속성에 대한 자세한 내용은 *Sign-In 버튼*의 [유효성 검사 메시지 위젯](/refguide8/sign-in-button/#validation-message-widget) 섹션을 참조하세요.
2. 인증이 실패한 경우, 즉 최종 사용자가 잘못된 자격 증명을 입력한 경우.

## 속성

유효성 검사 메시지 속성의 예시는 아래 이미지에 나와 있습니다:

{{< figure src="/attachments/refguide8/modeling/pages/authentication-widgets/validation-message/validation-message-properties.png" alt="Validation Message Properties"   width="300"  class="no-border" >}}

유효성 검사 메시지 속성은 다음 섹션으로 구성됩니다:

* [Common](#common) 
* [Design Properties](#design-properties)

### Common 섹션 {#common}

{{% snippet file="/static/_includes/refguide8/common-section-link.md" %}}

### Design Properties 섹션 {#design-properties}

{{% snippet file="/static/_includes/refguide8/design-section-link.md" %}}

## 추가 참조

* [페이지](/refguide8/page/)
* [Login ID 텍스트 박스](/refguide8/login-id-text-box/)
* [Password 텍스트 박스](/refguide8/password-text-box/)
* [Sign-In 버튼](/refguide8/sign-in-button/)
