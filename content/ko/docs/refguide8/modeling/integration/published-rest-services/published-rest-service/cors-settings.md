---
title: "Published REST Service의 CORS 설정"
url: /refguide8/cors-settings/
weight: 60
description: "Published REST Service에 대한 접근 제어를 위한 추가 옵션"
# If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# linked from DM: published rest > Enable CORS > Settings > Help (integration)
---

## 소개

교차 출처 리소스 공유(CORS)는 추가 HTTP 헤더를 사용하여 브라우저에 다른 출처(도메인)의 서버에서 선택된 리소스에 대한 접근 권한을 부여하도록 지시합니다.

[Published REST Service](/refguide8/published-rest-service/)에서 CORS를 활성화하면 기본적으로 모든 서버의 모든 웹사이트가 서비스에 접근할 수 있습니다. **CORS Settings** 대화 상자를 사용하면 이러한 유형의 접근을 더 세부적으로 구성할 수 있습니다.

## Allowed Origins

여기에서 서비스에 접근할 수 있는 웹사이트를 지정할 수 있습니다. **All**을 선택하거나 쉼표로 구분된 호스트 이름 목록이 포함된 상수를 지정할 수 있습니다.

## Max Age

여기에서 브라우저가 새 CORS 설정이 있는지 확인하기 전에 이 설정을 기억할 수 있는 기간을 선택할 수 있습니다. 브라우저가 더 적은 요청을 수행하므로 시간이 길수록 성능에 좋습니다. 그러나 CORS 설정을 변경하면 이 시간이 경과할 때까지 모든 브라우저에서 변경 사항이 적용되지 않습니다.

## Allow Credentials

이 상자를 선택하면 브라우저가 이 서비스에 쿠키, 인증 헤더 및/또는 클라이언트 인증서를 보낼 수 있음을 나타냅니다.
