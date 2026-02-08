---
title: "Native Template 13"
url: /releasenotes/mobile/nt-13-rn/
weight: 30
description: "Native Template 13 릴리스 노트."
---

## 13.0.0 {#1300}

**릴리스 날짜: 2025년 3월 21일**

### 개선 사항

Android 기기에 대한 쿠키 암호화를 선택적으로 활성화하거나 비활성화하는 옵션을 추가했습니다. 이 옵션은 Studio Pro 9.8에서 도입되었으며 Studio Pro 버전 10.21까지 기본적으로 활성화되어 있었습니다.

이 옵션은 Studio Pro의 **Mobile** 프로필 Navigation Tab에서 찾을 수 있습니다.

쿠키 암호화에 대한 자세한 내용은 *오프라인 데이터 보안*의 [세션 쿠키 암호화](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/local-data-security/#encrypting-session-cookies)를 참조하세요. 

#### 중요 참고 사항

* 10.21 이상으로 업그레이드하는 프로젝트의 경우, 아래 [업그레이드 안내](#upgrade-instructions)를 따라 앱을 마이그레이션하세요.

#### 라이브러리 업데이트 및 개선 사항

* **@react-native-async-storage/async-storage:** 2.0.0  
* **react-native-reanimated:** 3.16.1
* **react-native-screens:** 4.4.0
* **react-native-image-picker:** 7.2.3
* **@react-native-community/netinfo:** 11.4.1

* bottom sheet 라이브러리를 **@gorhom/bottom-sheet**로 변경했습니다.

### 업그레이드 안내 {#upgrade-instructions}

10.18 미만의 Mendix 버전에서 업그레이드하는 경우, 새로운 React Native 버전을 사용하기 위해 다음 단계를 따르세요:

1. 필수 모듈 업데이트:
    1. Native Mobile Resources: Mendix Marketplace에서 이 모듈을 최신 버전으로 업데이트하세요.
    1. Nanoflow Commons: 이 모듈을 최신 버전으로 업데이트하세요.
1. Studio Pro에서 위젯 업데이트:
    1. Native Mobile Resources 모듈을 업데이트한 후, Studio Pro에서 경고를 마우스 오른쪽 버튼으로 클릭하고 **Update All Widgets**를 클릭하여 프로세스를 완료하세요.
1. 애플리케이션 테스트:
    1. 업데이트 후 모든 기능이 예상대로 작동하는지 애플리케이션을 철저히 [테스트](/refguide/mobile/distributing-mobile-apps/)하세요.

Native Template에 대한 가장 직접적인 정보는 [GitHub Releases 페이지](https://github.com/mendix/native-template/releases/tag/v13.0.0)를 방문하세요.
