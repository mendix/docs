---
title: "APM 2 설치 가이드"
url: /appstore/partner-solutions/apd/ig-two/
weight: 1
aliases:
    - /apm/installation-guide.html
    - /apm/installation-guide/
---

## 소개

CLEVR APM 2의 설치 가이드입니다.

다음 사항에 유의하십시오:

* APM 2를 사용하기 전에 데이터베이스 백업을 생성하고 백업 배포를 준비하십시오.
* APM 1과 2는 함께 설치할 수 있습니다(APM 1 모듈을 제거하려면 [제거 단계](/appstore/partner-solutions/apd/ig-one-uninstall-steps/)를 참조하십시오).

## 설치

APM 2를 설치하려면 다음 단계를 따르십시오:

1. 앱에서 APM을 사용하기 위한 라이선스를 준비합니다.
2. 브라우저에서 Mendix 계정을 사용하여 [https://apmmanager100.mendixcloud.com](https://apmmanager100.mendixcloud.com)의 APM Manager에 로그인합니다.
3. 대시보드에서 앱을 선택합니다.
4. 환경 대시보드에서 **New Environment** 타일을 선택합니다. Mendix 앱의 Scrum Master인 경우 테스트, 수락 및 운영 환경을 추가할 수 있습니다. 그렇지 않은 경우 Mendix Studio Pro 환경만 추가할 수 있습니다. 자세한 내용은 [Environments 개요](/appstore/partner-solutions/apd/rg-two-environments/) 문서를 참조하십시오.
5. 환경 이름을 선택합니다.
6. **Save and generate API key**를 클릭한 다음, 이 키를 10단계에서 **APMAgent.APMAPIKey** 상수의 값으로 사용합니다.
7. 앱이 열린 Studio Pro에서 Mendix Marketplace의 [Mendix Application Performance Monitor](https://marketplace.mendix.com/link/component/6127/) 모듈을 가져옵니다.
8. 앱의 **After startup** Microflow에 **USE_ME/AfterStartup** Microflow를 추가합니다.
9. **USE_ME/CopyPasteAPMBrowserWidget**에서 앱 레이아웃에 Widget을 복사합니다. 사용자가 Widget이 포함된 페이지를 여러 번 열더라도 한 번만 로드됩니다.
10. **USE_ME/APMAgent.APMAPIKey** 상수의 값을 6단계에서 생성한 키로 설정합니다.

## 업그레이드

APM 2 에이전트를 업그레이드하려면 다음 단계를 따르십시오:

1. 앱이 열린 Mendix Studio Pro에서 Mendix Marketplace의 [Mendix Application Performance Monitor](https://marketplace.mendix.com/link/component/6127/) 모듈을 가져와 교체합니다.
2. **userlib** 폴더에서 이전 APM 2 에이전트 *.jar* (*apmagent_obfuscated_merged_{version}.jar*)를 제거합니다.
3. Mendix Studio Pro에서 테스트하기 전에 **Clean deployment directory** 옵션을 사용합니다.

## 보안

에이전트는 포트 443을 통해 HTTPS로 [APM 2 매니저](https://apmmanager100.mendixcloud.com)에 대한 모든 통신을 시작합니다. 따라서 일부 온프레미스 설치의 경우 방화벽을 열어야 할 수 있습니다.
