---
title: "세션 관리"
url: /refguide10/session-management/
description: "세션이 설정되고 관리되는 방법을 설명합니다."
weight: 35
---

## 소개 

최종 사용자가 애플리케이션에 로그인하면 Mendix Runtime은 사용자가 애플리케이션 내에서 활동하는 동안 유지되는 세션을 설정합니다. 세션은 마지막 런타임 요청 이후 경과된 시간과 [세션 타임아웃](/refguide10/custom-settings/#SessionTimeout)에 의해 결정되는 일정 시간 동안 비활동 상태가 지속되면 만료됩니다.

Mendix 버전 10.9.0 이상에서는 인증 토큰을 사용하여 사용자가 앱에서 활발히 작업하지 않는 동안에도 세션을 활성 상태로 유지할 수 있습니다. 오프라인 우선 앱의 경우, 이 방법은 장기 세션에 대한 이전 접근 방식을 대체하여 보안을 향상시킵니다.

이 접근 방식은 세션 관리를 위한 보다 통합된 솔루션을 제공하여, 네이티브 또는 웹 기반의 온라인 및 오프라인 애플리케이션에서 장기 세션을 사용할 수 있게 합니다. 예를 들어, 온라인 앱의 로그인을 사용자 지정하여 세션이 만료되더라도 최종 사용자가 자격 증명을 다시 제공할 필요가 없도록 "로그인 유지" 기능을 제공할 수 있습니다.

Mendix 버전 10.9.0 이상에서 새 앱을 생성하면 아래 설명대로 세션 관리가 작동합니다.

10.9.0 이전 버전에서 생성된 앱을 사용하는 경우, 오프라인 우선 앱에는 장기 세션이 사용됩니다. 자세한 내용은 *Progressive Web App*의 [세션](/refguide10/mobile/introduction-to-mobile-technologies/progressive-web-app/#sessions) 섹션을 참조하십시오.

10.9.0 이전 Mendix 버전의 온라인 앱은 클라이언트에서 Keep Alive 요청을 보내는 [EnableKeepAlive](/refguide10/tricky-custom-runtime-settings/#session-duration) 설정을 사용하는 다른 접근 방식을 사용합니다.

## 인증 토큰

인증 토큰은 사용자가 오랜 기간 동안 로그인 상태를 유지할 수 있게 합니다. 사용자의 자격 증명을 사용자의 장치에 저장하고, 이전 세션이 만료되면 자동으로 새 세션을 생성하는 데 사용합니다. 오프라인 우선 애플리케이션에서는 기본적으로 활성화되어 있습니다.

{{% alert color="warning" %}}
인증 토큰은 `login.html`에 의존하는 로그인 처리에서는 사용할 수 없습니다. 인증 토큰을 사용하려면 Sign in Nanoflow 액션 또는 `login2` 클라이언트 API를 사용하는 [모델링된 로그인 페이지를 생성](/refguide10/mobile/using-mobile-capabilities/auth-users/#model-the-sign-in-page)하십시오.
{{% /alert %}}

### 인증 토큰 생성

런타임이 `get_session_data` 요청을 받으면 `useAuthToken` 쿠키의 존재 여부를 확인합니다. 존재하는 경우, 생성된 고유 인증 토큰 `authtoken`을 포함하는 추가 HttpOnly 쿠키를 추가합니다. 이 토큰은 이후 작업에서 사용자를 인증하고 세션이 만료될 때 세션을 연장하는 데 사용됩니다.

이 접근 방식은 이러한 쿠키가 서버 이외의 것에서는 접근할 수 없기 때문에 보안이 향상됩니다.

### 인증 토큰 활성화

클라이언트 API `login`을 사용하는 오프라인 우선 앱의 경우, 버전 10.9.0 이상에서는 인증 토큰 시스템이 기본적으로 사용됩니다.

온라인 앱에서 인증 토큰을 생성하려면 클라이언트 API `login2`를 사용해야 합니다.

`login2` API를 사용하면 `useAuthToken` 매개변수를 전달할 수 있습니다. 값 `true`는 인증 토큰을 활성화하고, `false`는 비활성화합니다. 로그인 액션이 런타임에 `true`를 전달하면, 런타임은 클라이언트 시작 시 인증 토큰을 생성해야 함을 나타내는 HttpOnly 쿠키 `useAuthToken`을 추가합니다.

또한 로그인 페이지를 모델링하여 최종 사용자가 기억 여부를 결정할 수 있도록 "로그인 유지" 옵션을 제공할 수도 있습니다.

아래 링크에서 다음에 대한 `login2` API 사양을 확인하십시오:

* [React](https://apidocs.rnd.mendix.com/10/client-react/mx.html#.login2)
* [Non-react (Dojo)](https://apidocs.rnd.mendix.com/10/client/mx.html#.login2)  

### 인증 토큰 만료

인증 토큰의 유효 기간을 결정하는 사용자 지정 런타임 설정 [`com.mendix.webui.HybridAppLoginTimeOut`](/refguide10/custom-settings/#commendixwebuiHybridAppLoginTimeOut)이 있습니다. 값이 설정되지 않으면 토큰은 1년 동안 유효합니다.

## 애플리케이션 동작

### 네이티브 및 오프라인 PWA 애플리케이션

이 기능은 이전 버전과의 호환성을 유지합니다. 최종 사용자가 장치에서 앱을 업데이트하지 않았지만 런타임이 최신 버전인 경우에도 이전 세션 관리 방법을 지원하기 위해 올바르게 작동합니다.

버전 10.9 이상으로 업그레이드된 오프라인 우선 애플리케이션은 현재 클라이언트 API `login`을 사용하는 경우, 내부적으로 새 API login2를 호출하고 인증 토큰 시스템을 활성화하므로 기본적으로 새 인증 토큰 시스템을 사용합니다. 오프라인 우선 앱에서 인증 토큰을 생성하지 않으려면 새 API `login2`를 사용하되 `useAuthToken` 매개변수를 `false`로 설정하여 비활성화할 수 있습니다.

버전 10.9 이상에서 생성된 애플리케이션은 오프라인이든 온라인이든 클라이언트 API 'login2'를 통해 인증 토큰 시스템을 활성화 또는 비활성화하고 기본 설정에 따라 'useAuthToken' 매개변수를 설정할 수 있는 유연성이 있습니다.

이는 장기 세션을 사용하는 Mendix 버전 10.9 이전의 오프라인 우선 애플리케이션이 버전 10.9.0 이상으로 업그레이드되면 인증 토큰 접근 방식이 동일한 동작을 제공한다는 것을 의미합니다.

버전 10.9.0 이상에서 새로 생성된 오프라인 우선 애플리케이션도 인증 토큰 접근 방식을 사용합니다.

오프라인 우선 앱에서 인증 토큰을 생성하지 않으려면 새 API `login2`를 사용하되 `useAuthToken` 매개변수를 `false`로 설정하여 인증 토큰 사용을 비활성화할 수 있습니다.

### 온라인 애플리케이션

Mendix 버전 10.9.0 이전에는 인증 토큰이 지원되지 않습니다.

기본적으로 Mendix 앱 버전 10.9.0 이상의 온라인 앱에서는 인증 토큰이 사용되지 않습니다. 그러나 새 API `login2`를 사용하고 `useAuthToken` 매개변수를 `true`로 설정하여 최종 사용자를 기억하는 데 사용할 수 있습니다.

온라인 앱은 여전히 세션 중 변경되는 커밋되지 않은 데이터를 유지하기 위해 [EnableKeepAlive](/refguide10/tricky-custom-runtime-settings/#session-duration) 설정을 사용합니다. 해당 설정이 비활성화된 경우, `useAuthToken`이 `true`로 설정된 Mendix 앱 버전 10.9.0 이상에서는 세션이 만료된 후([SessionTimeout](/refguide10/custom-settings/#SessionTimeout) 후 발생) 액션이 수행되면 커밋되지 않은 변경 사항이 손실됩니다. 이 경우 인증 토큰은 사용자 로그인 상태를 유지하기 위해 세션을 재초기화하는 데 사용되며, 이후 애플리케이션이 다시 로드됩니다.

### 클라이언트-Runtime 세션 관리 흐름

<!-- Diagram created here:
https://www.plantuml.com/plantuml/uml/bPB1Rjim44Jl-efjV7M3n4Lww2687TSd5oZgzbOWeAMnj91Cgikb7AVklnTI65iA3BGv211dXyCt8E-y6j6mhP9tMc0BMbS1kPXzuaksjH6pfRL9ornSiDczgvpGQ5UmecVm-1LWKz3lP9ggauMp6grN7s_ci-b9Nl4JQ7ALJ4NSRkZffAFdUXA5yrap9ndaUJ07wbMvdrK1oP8tMB95VpwQVlXyivYTPhq-_VbN8yefryPg3tKeluRvazIdCLryWStuaUuhXjKBCfxIxlTuni3zBLZbBMW5QI2TtNU_D9fVBoQBUM9IvSOeOinn7Nr9J7z_UnkLJxHqELlQiHOKFAP1Y--kXANkgg0Gyb1IHoe1IJol7z10UBCdBT06o9XIWL5qWeVtxEoOl6b0tEPqUcRKh8t7c7vQCZQZdN3SqaByY13jg9z3gNCbmr-UAoBjg_9AEVGX-X_QS-WST5eWBRleVkcOFwOC5RG5xW1pMCXB9Js22LGO3GQ4mRFDpp1VzYcUwLjaNxksFMinsDDo9uV3eVtUrDLi53A8AemdFDOioFvnUusfE6FTazjqQnEqEBLboygcugTpVLbV-lr_lIJ3g-VQKo9Vr_yEDWlRwYy0
-->

{{< figure src="/attachments/refguide10/runtime/session.png" alt="The Session Management Flow between client and the runtime." class="no-border" >}}

이 다이어그램은 세션을 초기화하거나 검색하기 위한 클라이언트와 런타임 간의 상호작용을 보여줍니다.

### 세션 삭제

세션은 두 가지 상황에서 삭제됩니다:

* 애플리케이션 시작 시 데이터베이스 업그레이드가 있는 경우 - 예를 들어 모델 변경이 있거나 데이터베이스가 새로운 경우.
* 만료된 세션의 주기적 정리 중.

    만료된 세션이 정리되는 빈도는 [ClusterManagerActionInterval](/refguide10/custom-settings/#ClusterManagerActionInterval) 런타임 설정을 사용하여 구성할 수 있습니다.

    세션이 만료된 것으로 간주되는 시기는 [SessionTimeout](/refguide10/custom-settings/#SessionTimeout) 런타임 설정을 사용하여 구성할 수 있습니다.

익명 세션이 삭제되면 연관된 익명 사용자도 함께 삭제됩니다.
