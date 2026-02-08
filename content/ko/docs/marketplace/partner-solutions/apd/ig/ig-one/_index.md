---
title: "APM 1 설치 가이드"
url: /appstore/partner-solutions/apd/ig-one/
weight: 2
---

## 소개

이 문서는 APM 도구의 설치 및 제거에 대해 설명합니다. 대상 독자는 Mendix Modeler로 작업하며 Mendix 애플리케이션을 개발, 설치 및 지원하는 Mendix 고급 애플리케이션 개발자입니다.

자세한 내용은 여기에서 확인하십시오:

* [사전 요구 사항](/appstore/partner-solutions/apd/ig-one-prerequisites/)
* [설치 단계](/appstore/partner-solutions/apd/ig-one-installation-steps/)
* [업그레이드 단계](/appstore/partner-solutions/apd/ig-one-upgrade-steps/)
* [제거 단계](/appstore/partner-solutions/apd/ig-one-uninstall-steps/)

## 숙련된 사용자를 위한 설치

숙련된 사용자를 위해 설치의 간략한 개요는 다음과 같습니다:

1. 백업합니다(Modeler에서 커밋, 데이터베이스 백업, 프로젝트 폴더 복사).
2. APM Agent 모듈을 가져옵니다.
3. English US 이외의 언어를 사용하는 경우 언어를 복사합니다.
4. `USE_ME/AfterStartup` 및 `USE_ME/BeforeShutdown`을 사용하도록 구성합니다.
5. 관리자 역할에 권한을 추가합니다.
6. 네비게이션에 USE_ME/IVK_OpenConsole Microflow를 추가합니다.
7. `APMAgent.CompanyName` 및 `APMAgent.AppName` 상수를 설정합니다.
8. 선택적으로 메일을 보내는 Microflow를 호출하도록 `APMAgent.NotifyMicroflowName` 상수를 구성합니다.
9. 앱을 시작합니다.
10. APM 도구로 이동하면 설치 페이지가 열립니다.
11. 설치 페이지에서 라이선스 요청을 메일로 보냅니다. APM 1.10에서는 라이선스 요청 코드를 사용하여 라이선스 키를 자동으로 획득할 수 있습니다.
12. 라이선스 키가 포함된 메일을 받으면 키를 입력합니다.
13. 운영 또는 비운영 설정을 선택합니다.
14. 저장합니다.

## 숙련된 사용자를 위한 업그레이드

APM 1.5.4 이상에서 최신 버전으로 업그레이드하려면 다음 단계를 따르십시오:

1. 모듈을 가져옵니다.
2. `userlib`에서 이전 jar를 제거합니다.
3. 시작하면 필요한 모든 데이터 변경이 자동으로 수행됩니다.
4. 1.7.0 이전 버전에서 그 이상으로 업그레이드하는 경우, 라이선스가 이제 앱별로 적용되므로 새 라이선스를 요청해야 합니다.
5. 1.10.0 이전 버전에서 그 이상으로 업그레이드하는 경우, 새 상수 `AppName`이 도입되었으므로 설정해야 합니다.
