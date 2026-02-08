---
title: "Native Template 12"
url: /releasenotes/mobile/nt-12-rn/
weight: 40
description: "Native Template 12 릴리스 노트."
---

## 12.0.1 {#1001}

**릴리스 날짜: 2025년 3월 10일**

### 수정 사항

* 시스템 글꼴 크기를 변경할 때 Android에서 충돌이 발생하는 문제를 수정했습니다.

## 12.0.0 {#1000}

**릴리스 날짜: 2025년 1월 28일**

### 호환성을 깨뜨리는 변경 사항

#### 오프라인 데이터베이스 백엔드 변경 - OP-Sqlite 지원

* 오프라인 데이터베이스 백엔드를 OP-SQLite로 변경했습니다.

#### 중요 참고 사항

* 10.19 이상으로 업그레이드하는 프로젝트의 경우, 아래 [업그레이드 안내](#upgrade-instructions)를 따라 앱을 마이그레이션하세요.

### 업그레이드 안내 {#upgrade-instructions}

10.18 미만의 Mendix 버전에서 업그레이드하는 경우, 새로운 React Native 버전을 사용하기 위해 다음 단계를 따르세요:

1. 필수 모듈 업데이트:
    1. Native Mobile Resources: Mendix Marketplace에서 이 모듈을 최신 버전으로 업데이트하세요.
    1. Nanoflow Commons: 이 모듈을 최신 버전으로 업데이트하세요.
1. Studio Pro에서 위젯 업데이트:
    1. Native Mobile Resources 모듈을 업데이트한 후, Studio Pro에서 경고를 마우스 오른쪽 버튼으로 클릭하고 **Update All Widgets**를 클릭하여 프로세스를 완료하세요.
1. 애플리케이션 테스트:
    1. 업데이트 후 모든 기능이 예상대로 작동하는지 애플리케이션을 철저히 [테스트](/refguide/mobile/distributing-mobile-apps/)하세요.

Native Template에 대한 가장 직접적인 정보는 [GitHub Releases 페이지](https://github.com/mendix/native-template/releases/tag/v12.0.0)를 방문하세요.
