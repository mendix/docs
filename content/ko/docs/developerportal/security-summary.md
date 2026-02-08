---
title: "보안"
url: /developerportal/security/
weight: 14
description: "앱을 빌드, 실행 및 관리할 때 사용할 수 있는 보안 옵션에 대한 개요입니다."
---

## 소개

보안은 앱을 빌드하거나, 환경의 다른 부분과 통합하거나, Mendix 플랫폼 내에서 조직과 앱을 관리할 때 반드시 고려해야 하는 핵심 요소입니다. 보안에 관한 정보는 Mendix 문서의 다양한 섹션에 있습니다. 이 페이지는 관련 주제에 대한 사용 가능한 문서의 개요를 제공합니다.

## 구현 계획

앱을 만들기 전에 평가 가이드를 참조하여 사용 가능한 보안 옵션을 검토하세요:

* [평가 가이드: 보안](https://www.mendix.com/evaluation-guide/enterprise-capabilities/security/)

## 앱 빌드

애플리케이션을 빌드할 때 다음 주제를 참조하세요:

* [앱 모델링: 보안](/refguide/security/) - 앱 빌드 시 사용할 수 있는 보안 옵션 개요
* [보안 앱 만들기](/howto/security/create-a-secure-app/) - 보안 앱 생성 프로세스에 대한 상세 안내
* [앱 보안 모범 사례 구현](/howto/security/best-practices-security/) - 앱 보안에 권장되는 모범 사례
* [익명 사용자 보안 설정](/howto/security/set-up-anonymous-user-security/) - 익명 사용자 보안 설정 프로세스에 대한 상세 안내
* [앱 보안](/refguide/app-security/) - **앱 보안** 메뉴 및 하위 메뉴에 대한 설명:
    * [사용자 역할](/refguide/user-roles/) - **사용자 역할** 메뉴에 대한 설명
    * [관리자](/refguide/administrator/) - **관리자** 메뉴에 대한 설명
    * [데모 사용자](/refguide/demo-users/) - **데모 사용자** 메뉴에 대한 설명
    * [익명 사용자](/refguide/anonymous-users/) - **익명 사용자** 메뉴에 대한 설명
    * [비밀번호 정책](/refguide/password-policy/) - **비밀번호 정책** 메뉴에 대한 설명
    * [엄격 모드](/refguide/strict-mode/) - **엄격 모드** 메뉴에 대한 설명
* [앱 모델링: 모듈 보안](/refguide/module-security/) - 모듈 생성 시 사용할 수 있는 보안 옵션 개요
* [보안 및 공유 데이터셋](/refguide/security-shared-datasets/) - OData 서비스(공유 데이터셋)와의 보안 통합 개요
* [워크플로 프로세스 보안 구성](/refguide/workflow-security/) - 워크플로(Workflow) 프로세스에 사용할 수 있는 보안 구성 개요
* [모바일: 오프라인 데이터 보안](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/local-data-security/) - 모바일 앱의 오프라인 데이터 보안 구성에 대한 상세 안내
* [콘텐츠 보안 정책](/howto/security/csp/) - 앱에 구성할 수 있는 콘텐츠 보안 정책 개요
* [이중 인증](/developerportal/deploy/two-factor-authentication/) - 이중 인증 설정 시 사용 가능한 옵션에 대한 설명

## 앱 실행

앱의 비즈니스 운영을 위한 보안 실천에 대한 정보는 다음 주제를 참조하세요:

### Mendix Cloud

* [앱에서 나가는 연결 보안](/developerportal/deploy/securing-outgoing-connections-from-your-application/ ) - Mendix Cloud에서 나가는 연결을 보안하기 위한 다양한 시나리오 개요

### Mendix on Kubernetes

* [Mendix on Kubernetes: 내 앱과 데이터는 Mendix on Kubernetes에서 어떻게 보호되나요?](https://www.mendix.com/evaluation-guide/deployment/private-cloud/mendix-private-cloud/) - Mendix on Kubernetes 제품과 그것이 제공하는 보안에 대한 개요

### 온프레미스

* [온프레미스 설치를 위한 보안](/developerportal/deploy/security-checklist-for-your-on-premises-installation/) - 온프레미스에 설치된 앱에 사용할 수 있는 보안 옵션 체크리스트

## 조직 및 앱 관리

앱 거버넌스를 위한 보안 실천에 대한 정보는 다음 주제를 참조하세요:

* [앱: 소프트웨어 구성](/developerportal/deploy/software-composition/) - **앱(Apps)** 메뉴의 **Software Composition** 페이지 설명
* [Control Center: 소프트웨어 구성](/control-center/software-composition/) - **Control Center**의 **Software Composition** 페이지 및 Mendix 포털에서 배포 패키지의 종속성을 식별하는 옵션 설명
* [Control Center 보안 설정](/control-center/security/) - 회사 사용자의 Mendix 플랫폼 접근을 관리하는 데 도움이 되는 설정
* [SSO(BYOIDP) 설정](/control-center/security/set-up-sso-byoidp/) - Control Center에서 BYOIDP SSO를 구성하는 상세 프로세스 안내
* [데이터 접근성 및 보안](/catalog/manage/security/) - Catalog에서 사용할 수 있는 보안 옵션 개요
* [보안 위험 완화](https://www.mendix.com/evaluation-guide/governance/risk-control/mitigate-security-risk/) - 보안 위험 완화를 위한 모범 사례

## 지원 받기

추가 정보, 자주 묻는 질문 및 문제 해결 팁은 [자주 묻는 질문 – 보안](/support/security-findings-faq/)을 참조하세요. 추가 질문이 있으시면 Customer Success Manager(CSM)에게 문의하거나 [Mendix 커뮤니티 포럼](https://community.mendix.com/p/community)에 참여하세요.
