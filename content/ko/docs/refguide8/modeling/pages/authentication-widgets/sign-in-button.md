---
title: "Sign-In 버튼"
url: /refguide8/sign-in-button/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}**Sign-in 버튼**은 네이티브 모바일 페이지에서 지원되지 않습니다.{{% /alert %}}

## 소개

**Sign-in 버튼**은 사용자의 로그인 ID와 비밀번호를 서버로 전송하여 인증합니다:

{{< figure src="/attachments/refguide8/modeling/pages/authentication-widgets/sign-in-button/sign-in-button.png" alt="Sign-In Button" class="no-border" >}}

오류가 있으면 [유효성 검사 메시지 위젯](#validation-message-widget) 또는 팝업 창에 표시됩니다.

**Sign-in 버튼**은 [Login ID 텍스트 박스](/refguide8/login-id-text-box/) 및 [Password 텍스트 박스](/refguide8/password-text-box/)와 함께 페이지에 배치해야 합니다.

## 속성

Sign-in 버튼 속성의 예시는 아래 이미지에 나와 있습니다:

{{< figure src="/attachments/refguide8/modeling/pages/authentication-widgets/sign-in-button/sign-in-button-properties.png" alt="Sign-In Button Properties"   width="250"  class="no-border" >}}

Sign-in 버튼 속성은 다음 섹션으로 구성됩니다:

* [Common](#common) 
* [Design Properties](#design-properties)
* [General](#general)
* [Visibility](#visibility)

### Common 섹션 {#common}

{{% snippet file="/static/_includes/refguide8/common-section-link.md" %}}

### Design Properties 섹션 {#design-properties}

{{% snippet file="/static/_includes/refguide8/design-section-link.md" %}}

### General 섹션 {#general}

Sign-in 버튼의 대부분의 속성은 버튼 위젯의 속성과 동일합니다. **General** 섹션의 버튼 속성에 대한 자세한 내용은 *버튼 속성*의 [General 섹션](/refguide8/button-properties/#general)을 참조하세요.

#### 유효성 검사 메시지 위젯 {#validation-message-widget}

**유효성 검사 메시지 위젯**은 Sign-in 버튼의 고유 속성입니다. 페이지에 인증 실패 메시지를 표시하는 [유효성 검사 메시지 위젯](/refguide8/validation-message/)을 정의합니다. 이 속성에서 위젯을 선택하지 않으면 인증 실패 메시지가 팝업 창에 표시됩니다:
{{< figure src="/attachments/refguide8/modeling/pages/authentication-widgets/sign-in-button/validation-failure.png" alt="Validation Failure" class="no-border" >}}

기본값: *None*

### Visibility 섹션 {#visibility}

{{% snippet file="/static/_includes/refguide8/visibility-section-link.md" %}}

## 추가 참조

* [페이지](/refguide8/page/)
* [Login ID 텍스트 박스](/refguide8/login-id-text-box/)
* [Password 텍스트 박스](/refguide8/password-text-box/)
* [유효성 검사 메시지](/refguide8/validation-message/)
