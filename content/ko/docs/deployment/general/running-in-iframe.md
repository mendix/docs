---
title: "Iframe 및 실행 중인 앱"
url: /developerportal/deploy/running-in-iframe/
weight: 50
description: "iframe에서 앱을 실행할 때 고려해야 할 사항"
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 소개

기본적으로 Mendix 애플리케이션은 iframe 내에서 실행이 차단됩니다. 이는 *클릭재킹*을 사용한 공격으로부터 최종 사용자를 보호하기 위한 것입니다. 이에 대한 자세한 내용은 *앱 보안 모범 사례 구현 방법*의 [HTTP 헤더 추가](/howto/security/best-practices-security/#adding-http-header) 섹션을 참조하십시오.

[Content Security Policy](#running-mendix-app) 디렉티브를 설정하여 애플리케이션이 iframe 내에서 실행되도록 활성화할 수 있습니다.

Mendix Cloud에서 iframe에 대한 자세한 내용은 *Environment Details*의 [iframe에서 앱 실행](/developerportal/deploy/environments-details/#iframe) 섹션을 참조하십시오.

이전 버전과의 호환성이 필요한 경우 더 이상 사용되지 않는 `X-Frame-Options` HTTP 헤더를 설정할 수도 있습니다.

## Content Security Policy {#csp}

Content Security Policy(CSP)가 적용되면 호스트 애플리케이션과 Mendix 애플리케이션 모두에서 iframe 내에서 Mendix 애플리케이션을 실행하기 위한 추가 디렉티브가 필요합니다.

### 호스트 애플리케이션

호스트 애플리케이션이 CSP를 적용하는 경우 Mendix 애플리케이션의 URL에서 프레임 및 스크립트 로딩을 명시적으로 허용하도록 구성해야 합니다.

### Mendix 애플리케이션 {#running-mendix-app}

Mendix 애플리케이션이 iframe에서 실행되도록 허용하려면 노드 환경의 `Content-Security-Policy` HTTP 헤더의 `frame-ancestors` 디렉티브를 설정해야 합니다. Mendix Cloud의 경우 *Environment Details*의 [HTTP Headers](/developerportal/deploy/environments-details/#http-headers) 섹션에 설명된 대로 Mendix Portal 내에서 수행할 수 있습니다.

## 브라우저 문제 해결

대부분의 브라우저에는 메인 페이지와 동일한 도메인인 경우에만 iframe이 허용되도록 하는 추가 보안 기능이 있습니다. 애플리케이션의 도메인이 iframe을 포함하는 메인 페이지와 동일하지 않은 경우 *SameSite* 쿠키가 이를 허용하도록 설정된 경우에만 실행됩니다. *web.dev* 웹사이트의 [SameSite cookies explained](https://web.dev/samesite-cookies-explained/)에서 SameSite 쿠키에 대한 좋은 설명을 찾을 수 있습니다.

Mendix Cloud에서 애플리케이션을 실행하는 경우 *Environment Details*의 [iframe에서 앱 실행](/developerportal/deploy/environments-details/#iframe) 섹션에 설명된 대로 사용자 정의 런타임 설정을 통해 SameSite 쿠키를 설정할 수 있습니다.

애플리케이션이 Mendix Cloud 외부(예: 온프레미스)에 배포된 경우 올바른 값으로 SameSite 쿠키를 설정하도록 웹 서버를 구성해야 합니다.

## 제한 사항

### 런타임 종속성

임베드된 경우에도 웹 클라이언트는 세션을 시작하고 Microflow를 실행하며 데이터와 상호 작용하기 위해 Mendix 런타임과 통신해야 합니다. Mendix는 타사 서비스와 직접 통합하는 독립형 클라이언트 전용 솔루션으로 기능할 수 없습니다.

### 크로스 애플리케이션 통신

Mendix는 임베드된 애플리케이션과 호스트 애플리케이션 또는 다른 iframe 애플리케이션 간의 네이티브 메시징을 지원하지 않습니다. 이러한 통신은 사용자 정의 JavaScript를 사용하여 수동으로 구현해야 합니다.

### 인증 격리

iframe에 임베드된 Mendix 애플리케이션은 호스트 애플리케이션의 세션 또는 사용자 자격 증명을 상속하지 않습니다. 공유 인증을 활성화하려면 JWT 기반 인증과 같은 보안 사용자 정의 메커니즘을 구현해야 합니다.

### 반응형

iframe은 기본적으로 반응형이 아닙니다. 즉, 기본적으로 `<iframe>`은 다양한 화면 크기에 맞게 자동으로 크기를 조정하거나 뷰포트가 변경될 때 종횡비를 유지하지 않습니다. 이를 위해서는 사용자 정의 CSS 또는 JavaScript 라이브러리가 필요합니다.

### 포커스 관리 및 접근성

iframe의 포커스 관리는 iframe이 별도의 문서 컨텍스트를 생성하고 포커스가 iframe에 들어가면 부모 페이지가 포커스에 대한 직접 제어를 잃기 때문에 고유한 접근성 문제를 제시합니다.

iframe은 특히 키보드 및 스크린 리더 사용자를 위해 접근성을 보장하기 위해 신중한 처리와 철저한 테스트가 필요합니다.
