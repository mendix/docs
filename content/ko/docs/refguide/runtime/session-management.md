---
title: "세션 관리"
url: /refguide/session-management/
description: "세션이 어떻게 설정되고 관리되는지 설명합니다."
weight: 35
---

## 소개 

최종 사용자가 애플리케이션에 로그인하면 Mendix Runtime은 최종 사용자가 애플리케이션 내에서 활동하는 동안 지속되는 세션을 설정합니다. 세션은 마지막 Runtime 요청 이후 경과된 시간과 [세션 타임아웃](/refguide/custom-settings/#SessionTimeout)에 의해 결정되는 일정 시간의 비활동 후에 만료됩니다.

인증 토큰을 사용하여 최종 사용자가 앱에서 적극적으로 작업하지 않는 동안에도 세션을 활성 상태로 유지할 수 있습니다.

이 접근 방식은 세션 관리를 위한 통합 솔루션을 제공하여 온라인 및 오프라인 애플리케이션, 네이티브 또는 웹 기반 모두에서 장기 세션을 사용할 수 있게 합니다. 예를 들어, 온라인 앱 로그인을 커스터마이징하여 "로그인 유지" 기능을 제공하여 세션이 만료되더라도 최종 사용자가 자격 증명을 다시 제공하지 않아도 되도록 할 수 있습니다.

## 인증 토큰

인증 토큰은 사용자가 장기간 로그인 상태를 유지할 수 있도록 합니다. 사용자의 인증 데이터를 사용자 장치에 저장하고 이전 세션이 만료되면 자동으로 새 세션을 생성하는 데 사용합니다.

{{% alert color="warning" %}}
인증 토큰은 `login.html`에 의존하는 로그인 처리에서는 사용할 수 없습니다. 인증 토큰을 사용하려면 **Sign in** Nanoflow 액션 또는 [Mendix 11 Client API](/apidocs-mxsdk/apidocs/client-api/#client-api)를 사용하는 [모델링된 로그인 페이지를 생성](/refguide/mobile/using-mobile-capabilities/auth-users/#model-the-sign-in-page)하십시오. 자세한 내용은 아래 [인증 토큰 사용하기](#work-with)를 참조하십시오.
{{% /alert %}}

### 인증 토큰 생성

Runtime이 `get_session_data` 요청을 받으면 `useAuthToken` 쿠키의 존재 여부를 확인합니다. 존재하는 경우 생성된 고유 인증 토큰 `authtoken`을 보유하는 추가 HttpOnly 쿠키를 추가합니다. 이 토큰은 이후 액션에서 사용자를 인증하고 세션이 만료될 때 세션을 연장하는 데 사용됩니다.

이 접근 방식은 이러한 쿠키가 서버 이외의 다른 것에서 접근할 수 없기 때문에 보안을 강화합니다.

### 인증 토큰 활성화

온라인 앱에서 인증 토큰을 생성하려면 [Mendix 11 Client API](/apidocs-mxsdk/apidocs/client-api/#client-api)를 사용해야 합니다. 

이 API의 `login` 메서드를 사용하면 `useAuthToken` 매개변수를 전달할 수 있습니다. 값 `true`는 인증 토큰을 활성화하고 `false`는 비활성화합니다. 로그인 액션이 Runtime에 `true`를 전달하면 Runtime은 클라이언트 시작 시 인증 토큰을 생성해야 함을 나타내는 HttpOnly 쿠키 `useAuthToken`을 추가합니다. 

또한 로그인 페이지를 모델링하여 최종 사용자에게 "로그인 유지" 옵션을 제공하여 기억될지 여부를 선택할 수 있도록 할 수 있습니다. 자세한 내용은 아래 [인증 토큰 사용하기](#work-with)를 참조하십시오.

#### 인증 토큰 사용하기 {#work-with}

온라인 및 오프라인 앱 모두에서 인증을 사용하여 최종 사용자를 기억할 수 있습니다. Mendix에서 제안하는 세 가지 방법이 있습니다:

* `useAuthToken` 매개변수를 `true`로 설정한 **NanoflowCommons** 모듈(버전 5.0.0 이상)의 **SignIn** 액티비티를 사용합니다. 이것이 권장되는 가장 쉬운 방법입니다.
* `mx-api` 모듈의 `login` 메서드를 사용하여 [Mendix 11 Client API](/apidocs-mxsdk/apidocs/client-api/#client-api)에서 자체 [JavaScript 액션](/refguide/javascript-actions/)을 작성하고 `useAuthToken` 매개변수를 `true`로 설정합니다.
* [Runtime API](/apidocs-mxsdk/apidocs/runtime-api/)의 `addMendixCookies` 메서드를 사용하여 Java 액션을 작성하고 `useAuthToken` 매개변수를 `true`로 설정합니다.

### 인증 토큰 만료

인증 토큰의 유효 기간을 결정하는 사용자 정의 Runtime 설정 [`com.mendix.webui.AuthTokenTimeout`](/refguide/custom-settings/#commendixwebuiAuthTokenTimeout)이 있습니다. 값이 설정되지 않으면 토큰은 1년간 유효합니다. Mendix 11.3 이전에는 레거시 Runtime 설정 [`com.mendix.webui.HybridAppLoginTimeOut`](/refguide/custom-settings/#commendixwebuiHybridAppLoginTimeOut)을 대신 사용하십시오.

## 애플리케이션 동작

### 네이티브 및 오프라인 PWA 애플리케이션

이 기능은 하위 호환성을 유지합니다. 최종 사용자가 장치에서 앱을 업데이트하지 않았지만 Runtime이 더 새로운 버전인 경우에도 이전 세션 관리 방법을 지원하기 위해 올바르게 작동합니다.

업그레이드된 오프라인 우선 애플리케이션은 로그인 API 호출이 인증 토큰 시스템을 활성화하므로 기본적으로 새 인증 토큰 시스템을 사용합니다.

오프라인 우선 앱에서 인증 토큰을 생성하지 않으려면 `mx-api` 모듈의 `login` 메서드를 사용하여 [Mendix 11 Client API](/apidocs-mxsdk/apidocs/client-api/#client-api)에서 자체 플로우를 작성하되 `useAuthToken` 매개변수를 `false`로 설정하여 인증 토큰 사용을 비활성화할 수 있습니다.

### 온라인 애플리케이션

기본적으로 온라인 Mendix 앱에서는 인증 토큰이 사용되지 않습니다. 그러나 최종 사용자를 기억하기 위해 사용할 수 있습니다. 자세한 내용은 위의 [인증 토큰 사용하기](#work-with)를 참조하십시오.

온라인 앱은 세션 중에 변경된 커밋되지 않은 데이터를 유지하기 위해 여전히 [EnableKeepAlive](/refguide/tricky-custom-runtime-settings/#session-duration) 설정을 사용합니다. 해당 설정이 비활성화되고 `useAuthToken`이 `true`로 설정된 경우, [SessionTimeout](/refguide/custom-settings/#SessionTimeout) 후에 세션이 만료된 후 액션을 수행하면 커밋되지 않은 변경 사항이 손실됩니다. 이 경우 인증 토큰은 사용자의 로그인 상태를 유지하기 위해 세션을 다시 초기화하는 데 사용되며, 이후 애플리케이션이 다시 로드됩니다.

### Client-Runtime 세션 관리 흐름

<!-- Diagram created here:
https://www.plantuml.com/plantuml/uml/bPB1Rjim44Jl-efjV7M3n4Lww2687TSd5oZgzbOWeAMnj91Cgikb7AVklnTI65iA3BGv211dXyCt8E-y6j6mhP9tMc0BMbS1kPXzuaksjH6pfRL9ornSiDczgvpGQ5UmecVm-1LWKz3lP9ggauMp6grN7s_ci-b9Nl4JQ7ALJ4NSRkZffAFdUXA5yrap9ndaUJ07wbMvdrK1oP8tMB95VpwQVlXyivYTPhq-_VbN8yefryPg3tKeluRvazIdCLryWStuaUuhXjKBCfxIxlTuni3zBLZbBMW5QI2TtNU_D9fVBoQBUM9IvSOeOinn7Nr9J7z_UnkLJxHqELlQiHOKFAP1Y--kXANkgg0Gyb1IHoe1IJol7z10UBCdBT06o9XIWL5qWeVtxEoOl6b0tEPqUcRKh8t7c7vQCZQZdN3SqaByY13jg9z3gNCbmr-UAoBjg_9AEVGX-X_QS-WST5eWBRleVkcOFwOC5RG5xW1pMCXB9Js22LGO3GQ4mRFDpp1VzYcUwLjaNxksFMinsDDo9uV3eVtUrDLi53A8AemdFDOioFvnUusfE6FTazjqQnEqEBLboygcugTpVLbV-lr_lIJ3g-VQKo9Vr_yEDWlRwYy0
-->

{{< figure src="/attachments/refguide/runtime/session.png" alt="The Session Management Flow between client and the runtime." class="no-border" >}}

이 다이어그램은 세션을 초기화하거나 검색하기 위한 클라이언트와 Runtime 간의 상호 작용을 보여줍니다.

### 세션 삭제

세션은 두 가지 상황에서 삭제됩니다:

* 애플리케이션 시작 시 데이터베이스 업그레이드가 있는 경우 ‒ 예를 들어 모델 변경이 있거나 데이터베이스가 새로운 경우.
* 만료된 세션의 주기적 정리 중.

    [ClusterManagerActionInterval](/refguide/custom-settings/#ClusterManagerActionInterval) Runtime 설정을 사용하여 만료된 세션이 정리되는 빈도를 구성할 수 있습니다.

    [SessionTimeout](/refguide/custom-settings/#SessionTimeout) Runtime 설정을 사용하여 세션이 만료된 것으로 간주되는 시점을 구성할 수 있습니다.

익명 세션이 삭제되면 관련 익명 사용자도 함께 삭제됩니다.
