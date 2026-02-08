---
title: "APD 3 설치 가이드"
url: /appstore/partner-solutions/apd/ig-three/
weight: 1
---

## 소개

[APM 2](/appstore/partner-solutions/apd/ig-two/)의 후속 제품인 CLEVR APD 3의 설치 가이드입니다.

## 사전 요구 사항 {#prerequisites}

이 사용 방법을 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* APD 3를 사용하기 전에 데이터베이스 백업을 생성하고 백업 배포를 준비하십시오.
* APM 2가 설치되어 있는 경우 다음을 수행하십시오: 
    * **APMAgent2.APMAPIKey** 상수의 현재 값(설정된 경우 **APMAgent2.APMAdvancedSettings**)을 기록하고,
    * 해당 값을 **APDAgent.APIKey** 및 해당되는 경우 **APDAgent.AdvancedSettings**에 사용하십시오.
* APM 1 및/또는 APM 2가 설치되어 있는 경우 제거하십시오(자세한 내용은 [APM 1 제거 단계](/appstore/partner-solutions/apd/ig-one-uninstall-steps/)를 참조하십시오).
* APD에서 앱을 검색하기 위한 [Mendix Personal Access Token](/portal/user-settings/#pat)을 생성하십시오:
    * Mendix Developer Profile의 [Developer Settings](https://user-settings.mendix.com/link/developersettings) 페이지로 이동합니다.
    * **New Token**을 클릭합니다.
    * 토큰 이름을 지정합니다(예: *APD Sync apps*).
    * **Project API**에서 *mx:app:metadata:read* 옵션을 선택합니다.
    * **Create**를 클릭합니다. 팝업 창에 비밀 토큰인 PAT가 표시됩니다. 
    * **Copy Token**을 클릭하여 PAT를 복사하고 생성된 토큰은 다시 표시되지 않으므로 안전한 위치에 저장하십시오.

## 설치

APD 3를 설치하려면 다음 단계를 따르십시오:

1. 앱에서 APD 3를 사용하기 위한 라이선스를 준비합니다.
2. 브라우저에서 Mendix 계정을 사용하여 [APD Manager](https://apd.mendix.com/)에 로그인합니다. (APM 1, APM 2와의 하위 호환성을 위해 [https://apmmanager100.mendixcloud.com](https://apmmanager100.mendixcloud.com)으로 전달됩니다).
3. [APD Manager](https://apd.mendix.com/)를 처음 여는 경우 다음과 같이 가입을 확인하십시오:
    1. **Mendix PAT** 필드에 [사전 요구 사항](#prerequisites) 섹션에서 생성한 Mendix Personal Access Token을 입력합니다.
    2. **Confirm signup**을 클릭합니다. 
4. 대시보드에서 앱을 선택합니다.
5. **Environments** 대시보드에서 **New Environment** 타일을 선택합니다. Mendix 앱의 [Scrum Master](/developerportal/general/app-roles/)인 경우 테스트, 수락 및 운영 환경을 추가할 수 있습니다. 그렇지 않은 경우 Mendix Studio Pro 환경만 추가할 수 있습니다. 자세한 내용은 [Environments](/appstore/partner-solutions/apd/rg-three-environments/)를 참조하십시오.
6. 환경 이름을 선택합니다.
7. **Save and generate API key**를 클릭합니다. 이 키는 아래 11단계에서 **APDAgent.APIKey** 상수의 값으로 사용됩니다.
8. 앱이 열린 Studio Pro에서 Mendix Marketplace의 [Mendix Application Performance Monitor](https://marketplace.mendix.com/link/component/6127/) 모듈을 가져옵니다.
9. 앱의 **After startup** Microflow에 **USE_ME/APDAfterStartup** Microflow를 추가합니다.
10. 앱의 레이아웃에 **USE_ME/APDBrowserAgentWidget** 스니펫을 사용합니다. 사용자가 Widget이 포함된 페이지를 여러 번 열더라도 한 번만 로드됩니다.
11. **USE_ME/APDAgent.APIKey** 상수의 값을 위의 7단계에서 생성한 키로 설정합니다.

## 업그레이드

APD 3 에이전트를 업그레이드하려면 다음 단계를 따르십시오:

1. Mendix Studio Pro에서 Mendix Marketplace의 [Mendix Application Performance Monitor](https://marketplace.mendix.com/link/component/6127/) 모듈을 가져와 교체합니다.
2. **userlib** 폴더에서 이전 APD 3 에이전트 *.jar* (*apdagent_obfuscated_merged_{version}.jar*)를 제거합니다.
3. Mendix Studio Pro에서 테스트하기 전에 **Clean deployment directory** 옵션을 사용합니다.
4. widgets 폴더에서 이전 *Mansystems.APMBrowserAgent.mpk*를 제거합니다.

## 보안

에이전트는 포트 443을 통해 HTTPS로 [APD 3 매니저](https://apmmanager100.mendixcloud.com)에 대한 모든 통신을 시작합니다. 온프레미스 설치의 경우 방화벽을 열어야 할 수 있습니다.
