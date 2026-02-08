---
title: "설치 단계"
url: /appstore/partner-solutions/apd/ig-one-installation-steps/
weight: 2
---

## 소개

이 섹션에서는 APM 도구의 설치에 대해 설명합니다. 새 버전으로 업그레이드하는 방법에 대한 자세한 내용은 [업그레이드 단계](/appstore/partner-solutions/apd/ig-one-upgrade-steps/)를 참조하십시오.

## 백업

팀 서버에 작업을 커밋했습니까? 데이터베이스 백업을 만들었습니까?

{{< figure src="/attachments/appstore/partner-solutions/apd/ig/ig-one/ig-one-installation-steps/Commit.png" class="no-border" >}}

이 단계에서 앱의 widgets 폴더를 로컬에 복사하거나 TortoiseGit과 같은 서드파티 버전 관리 클라이언트를 설치하십시오. 다음 단계에서 실수로 변경된 내용을 되돌릴 수 있습니다.

## APMAgent 모듈 가져오기

Modeler에서 APMAgent 모듈을 가져옵니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/ig/ig-one/ig-one-installation-steps/Import_Module_Package.png" class="no-border" >}}

경고 대화 상자에서 덮어쓰여지는 Widget을 기록하여 이러한 변경 사항을 되돌릴 수 있도록 합니다.

## English US 이외의 언어를 사용하는 경우 언어 복사

**English, United States**만 사용하지 않는 경우, Modeler에서 **Tools** > **Language Operations**를 사용하여 APMAgent 모듈의 **English, United States** 언어를 모든 언어에 복사합니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/ig/ig-one/ig-one-installation-steps/Language_Operations_Header.png" class="no-border" >}}

{{< figure src="/attachments/appstore/partner-solutions/apd/ig/ig-one/ig-one-installation-steps/Language_Operations_APM.png" class="no-border" >}}

{{< figure src="/attachments/appstore/partner-solutions/apd/ig/ig-one/ig-one-installation-steps/Language_Operations_Footer.png" class="no-border" >}}

## 권한 추가

선택한 관리자 역할에 대해 프로젝트 **Security** > **User roles** 탭에 `APMAgent.Admin` 권한을 추가합니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/ig/ig-one/ig-one-installation-steps/Add_Permissions.png" class="no-border" >}}

**참고:** Debug 역할을 사용하지 마십시오. 이것은 APM 도구 개발자가 특정 기능을 테스트하기 위한 것입니다.

**참고:** Java에서 힙 덤프를 만들고 싶다면 HeapDump 역할을 추가할 수 있습니다. 클라우드에서는 Mendix 지원팀에 요청해야 하는 추가 권한이 필요합니다.

**참고:** 보안 관련 경고를 제거하려면 Debug, HeapDump, Load test recorder 및 OData 사용자 역할을 추가하십시오. 그런 다음 이러한 역할에 APM 모듈의 해당 권한인 APMAgent.Debug, APMAgent.HeapDump, APMAgent.OData 및 APMAgent.LoadTestRecorder를 부여하십시오.

## 네비게이션에 추가

APM 도구를 사용하려면 APM 도구 UI를 호출해야 합니다. 이를 위해 **APMAgent/USE_ME/IVK_OpenConsole** Microflow를 사용합니다. 예를 들어 네비게이션 메뉴 항목을 추가합니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/ig/ig-one/ig-one-installation-steps/Add_To_Navigation.png" class="no-border" >}}

## 선택 사항: After Startup 및 Before Shutdown에 추가

{{% alert color="info" %}}

AfterStartup 및 BeforeShutdown Microflow를 사용하는 것이 권장됩니다. 사용하지 않고 도구가 실행 중인 경우, Mendix 애플리케이션을 종료할 때 타임아웃을 기다리느라 시간이 걸릴 수 있습니다.

{{% /alert %}}

After startup Microflow에서 `APMAgent\USE_ME\AfterStartup`을 호출합니다. 이 기능은 런타임에서 구성할 수 있으며 기본적으로 도구가 시작되지 않습니다.

Before shutdown Microflow에서 `APMAgent\USE_ME\BeforeShutdown`을 호출합니다.

프로젝트 설정에서 AfterStartup 및 BeforeShutdown Microflow를 찾을 수 있습니다.

{{< figure src="/attachments/appstore/partner-solutions/apd/ig/ig-one/ig-one-installation-steps/Project_Settings_After_Startup.png" class="no-border" >}}

## APMAgent.CompanyName 및 APMAgent.AppName 상수 구성

상수에 회사 이름과 앱 이름을 설정합니다. 

**참고:** 모델에서 상수를 변경하지 마십시오. 상수에는 Modeler 설정 또는 런타임 설정을 사용하십시오. 업그레이드 후 모델 상수는 덮어쓰여집니다.

## 선택적으로 APMAgent.NotifyMicroflowName 상수 구성

이 상수는 트리거 알림 액션에서 호출되는 Microflow를 정의합니다. 이메일을 보내는 Microflow를 호출할 수 있습니다. Microflow는 세 개의 문자열 매개변수를 받습니다:

* **To**
* **Subject**
* **Message**

샘플 Microflow APMAgent.SampleNotifyMicroflow_LogMessage를 참조하십시오.

## Modeler 또는 런타임 시작

이제 시작할 수 있습니다.

오류가 나타나면 [시작 후 오류](/appstore/partner-solutions/apd/ig-one-after-startup-error/)를 참조하십시오.

그렇지 않으면 Admin으로 로그인하고 APM 도구로 이동합니다.

## 환영 대화 상자

처음 시작 후 작은 마법사가 시작됩니다:

{{< figure src="/attachments/appstore/partner-solutions/apd/ig/ig-one/ig-one-installation-steps/Welcome_Dialog.png" class="no-border" >}}

* 이 앱에 대한 라이선스 요청 코드를 받은 경우, 라이선스 요청 코드 필드에 이 코드를 입력할 수 있습니다.   
* **Mail license request** 버튼을 사용하여 라이선스 요청이 포함된 메일을 보냅니다.
* 메일 클라이언트가 열리지 않거나, 구성되지 않았거나, 기타 이유로 실패하면 **Manual license request** 버튼을 사용합니다. 이렇게 하면 [apmtool@clevr.com](mailto:apmtool@clevr.com)으로 보낼 이메일 텍스트를 복사-붙여넣기할 수 있는 대화 상자가 열립니다.
* 라이선스를 받으면 **License key** 필드에 라이선스를 복사-붙여넣기합니다.
* **Production** 또는 **Non-Production**을 선택합니다.
* **Save**를 선택합니다.

이제 시작 후 구성된 도구가 시작되었으며, 도구를 사용할 준비가 되었습니다.
