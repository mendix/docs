---
title: "Published REST Services의 CORS 설정"
url: /refguide10/cors-settings/
weight: 60
description: "Published REST 서비스에 대한 접근을 제어하기 위한 추가 옵션"
# If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# linked from DM: published rest > Enable CORS > Settings > Help (integration)
---

## 소개

Cross-Origin Resource Sharing (CORS)는 추가 HTTP 헤더를 사용하여 브라우저에 다른 출처(도메인)의 서버에서 선택된 리소스에 대한 접근을 허용하도록 알려줍니다.

[Published REST Service](/refguide10/published-rest-service/)에서 CORS를 활성화하면 서비스에 접근할 수 있는 서버를 지정할 수 있습니다.

## 허용된 출처

이 서비스에 접근할 수 있는 웹사이트를 지정하는 상수를 선택하세요. 상수에는 쉼표로 구분된 호스트 출처 목록이 포함되어야 합니다. 출처는 프로토콜, 호스트 이름, 그리고 (선택적으로) 포트로 구성됩니다 (예: `https://www.mendix.com` 또는 `http://example.com:8080`). 인증이 필요하지 않고 모든 출처에서 접근 가능해야 하는 공개 서비스인 경우, 값이 `*`인 상수를 사용할 수 있습니다.

## Max Age

브라우저가 새로운 CORS 설정이 있는지 확인하기 전에 이 설정을 기억할 수 있는 시간을 선택하세요. 시간이 길수록 브라우저가 더 적은 요청을 수행하므로 성능에 좋습니다. 그러나 CORS 설정을 변경하면 이 시간이 경과할 때까지 모든 브라우저에서 변경 사항이 적용되지 않습니다.

## 자격 증명 허용

브라우저가 이 서비스에 쿠키, 인증 헤더 및/또는 클라이언트 인증서를 보낼 수 있음을 나타내려면 이 상자를 선택하세요.
