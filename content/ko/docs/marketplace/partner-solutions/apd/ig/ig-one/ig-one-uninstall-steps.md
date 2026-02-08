---
title: "제거 단계"
url: /appstore/partner-solutions/apd/ig-one-uninstall-steps/
weight: 3
---

## 소개

이 장에서는 APM 도구의 제거에 대해 설명합니다. 이 장에서 "선택 사항"은 설치 시 해당 옵션이 선택되었는지 확인한 후 취소해야 함을 의미합니다.

## 백업

팀 서버에 작업을 커밋했습니까? 데이터베이스 백업을 만들었습니까?
{{< figure src="/attachments/appstore/partner-solutions/apd/ig/ig-one/ig-one-uninstall-steps/Delete_Module.png" class="no-border" >}}

이 단계에서 앱의 widgets 폴더를 로컬에 복사하거나 TortoiseGit과 같은 서드파티 버전 관리 클라이언트를 설치하십시오. 다음 단계에서 실수로 변경된 내용을 되돌릴 수 있습니다.

## APMAgent 모듈 삭제

Modeler에서 APMAgent 모듈을 가져옵니다.
{{< figure src="/attachments/appstore/partner-solutions/apd/ig/ig-one/ig-one-uninstall-steps/Commit.png" class="no-border" >}}

## CLEVR 커스텀 Widget 삭제

CLEVR이 커스터마이징한 Marketplace Widget 버전:

* ManTooltip.mpk
* StringFormatter.mpk
* CssSelectorHelperBoolean.mpk
* StyleSheetSwap.mpk
* MicroflowTimer_APM.mpk
* FormatString_APM.mpk
* ChartJS_APM.mpk
* BootstrapTreeViewWidget_APM.mpk
* BooleanSlider_APM.mpk

## 권한 삭제

프로젝트 보안 / 사용자 역할 탭에서 선택한 관리자 역할의 APMAgent.Admin 권한을 삭제합니다. 마지막 대화 상자에서 편집하면 Mendix가 자동으로 권한을 제거합니다.
{{< figure src="/attachments/appstore/partner-solutions/apd/ig/ig-one/ig-one-uninstall-steps/Delete_Permissions.png" class="no-border" >}}

***참고.*** *Debug 역할을 추가한 경우 지금 제거하십시오.*

## 네비게이션에서 삭제

네비게이션에서 "APMAgent/USE_ME/IVK_OpenConsole"을 호출하는 APM Tools 항목을 삭제합니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/ig/ig-one/ig-one-uninstall-steps/Delete_From_Navigation.png" class="no-border" >}}

## 선택 사항: After Startup 및 Before Shutdown 되돌리기

After startup Microflow에서 APMAgent\USE_ME\AfterStartup으로의 **Call microflow** 액티비티를 제거합니다. 이 기능은 런타임에서 구성할 수 있으며 기본적으로 도구가 시작되지 않습니다.
Before shutdown Microflow에서 APMAgent\USE_ME\BeforeShutdown으로의 **Call microflow** 액티비티를 제거합니다.
프로젝트 설정에서 AfterStartup 및 BeforeShutdown Microflow를 찾을 수 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/ig/ig-one/ig-one-uninstall-steps/Revert_After_Startup.png" class="no-border" >}}

## 선택 사항: Mendix Cloud 또는 온프레미스 런타임의 요청 권한 취소

Mendix Cloud 슬롯의 경우 Mendix 지원팀에 추가된 권한을 취소하도록 요청하는 이메일을 보내십시오.

## 사용자 라이브러리 제거

프로젝트 폴더 'userlib'에서 APMAgent 라이브러리를 제거합니다:

* apm
* com.mendix.ojdbc6.jar
* com.mendix.postgresql.jdbc4.jar
* com.mendix.sqljdbc4.jar
* org.hsqldb.hsqldb.jar
* org.mariadb.jdbc.jar
* log4j

## Modeler 또는 런타임 시작

클린 배포 후 시작합니다.
