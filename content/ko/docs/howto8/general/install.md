---
title: "Mendix Studio Pro 설치"
url: /howto8/general/install/
weight: 10
description: "이 사용 방법에 따라 Mendix Studio Pro를 설치하는 방법을 알아보세요."
---

## 소개

Mendix Studio Pro를 사용하면 Mendix Platform에서 앱을 빌드할 수 있습니다. 이 사용 방법 문서에서는 최신 버전의 Mendix Studio Pro를 설치하는 단계를 안내합니다. Mac 기기를 사용하는 경우 [Parallels 구성](/howto8/general/using-mendix-studio-pro-on-a-mac/)을 참조하여 Windows 가상 머신을 구성하세요.

Studio Pro 설치 방법에 대한 상세 데모는 다음 동영상을 참조하세요:

{{< vidyard "WUp2tLi68nXFQd7xhPbDtt" >}}

## 사전 조건

이 사용 방법을 시작하기 전에 다음 사전 조건을 완료하세요:

* Studio Pro를 설치할 Windows 환경(지원되는 시스템 및 필수 프레임워크의 전체 목록은 [System Requirements](/refguide8/system-requirements/)를 참조하세요)

## Mendix Studio Pro 다운로드

Mendix Studio Pro는 Windows 실행 파일로 시스템에 설치할 수 있습니다. 이 실행 파일은 Mendix Marketplace에서 다운로드할 수 있습니다. 다음 단계에 따라 Mendix Studio Pro를 다운로드하세요:

1. [Mendix Marketplace](https://marketplace.mendix.com/link/studiopro/)의 Studio Pro 다운로드 페이지로 이동하세요.
2. 오른쪽 상단의 **Download** 버튼을 클릭하여 최신 Mendix Studio Pro를 다운로드하세요.

## Mendix Studio Pro 설치 {#install}

앱 빌드를 시작하기 전에 컴퓨터에 Mendix Studio Pro를 설치해야 합니다. 다음 단계에 따라 Mendix Studio Pro를 설치하세요:

1. 다운로드한 Mendix Studio Pro 실행 파일을 여세요. 이름은 *Mendix-8.X.X-Setup*과 같습니다. 그런 다음 **Next**를 클릭하세요:

    {{< figure src="/attachments/howto8/general/install/setup-wizard.png" class="no-border" >}}

2. **I accept the terms in the License Agreement**를 선택하고 **Next**를 클릭하세요:

    {{< figure src="/attachments/howto8/general/install/terms-of-use.png" class="no-border" >}}

3. Studio Pro를 설치할 폴더를 선택하고 **Next**를 클릭하세요:

    {{< figure src="/attachments/howto8/general/install/select-folder.png" class="no-border" >}}

4. 사용할 시작 메뉴 바로 가기 폴더를 입력하고 **Next**를 클릭하세요:

    {{< figure src="/attachments/howto8/general/install/shortcut-folder.png" class="no-border" >}}

5. **Desktop** 옵션을 선택하여 바탕 화면에 Studio Pro 바로 가기를 만들고 **Next**를 클릭하세요:

    {{< figure src="/attachments/howto8/general/install/location.png" class="no-border" >}}

6. **Install**을 클릭하여 컴퓨터에 Studio Pro를 설치하세요:

    {{< figure src="/attachments/howto8/general/install/ready-to-install.png" class="no-border" >}}

7. **Launch Mendix 8.X.X**를 선택하고 **Finish**를 클릭하여 설치를 완료하고 Studio Pro를 실행하세요:

    {{< figure src="/attachments/howto8/general/install/completing-setup.png" class="no-border" >}}

## 문제 해결 {#troubleshooting}

Studio Pro를 설치할 때 문제가 발생할 수 있습니다. 한 가지 해결 방법은 시스템을 재시작하고 아직 설치되지 않은 사전 조건을 별도로 설치하는 것입니다.

사전 조건은 다음과 같습니다:

* [Microsoft .NET Framework 4.7.2](https://dotnet.microsoft.com/en-us/download/dotnet-framework/net472)
* Java JDK
    * Mendix Studio Pro 8.18.29 이상의 경우 [Eclipse Temurin JDK 17](https://github.com/adoptium/temurin17-binaries/releases/download/jdk-17.0.10%2B7/OpenJDK17U-jdk_x64_windows_hotspot_17.0.10_7.msi)
    * Mendix Studio Pro 8.18.28 이하의 경우 [AdoptOpenJDK 11](https://cdn.mendix.com/installer/AdoptOpenJDK/OpenJDK11U-jdk_x64_windows_hotspot_11.0.3_7.msi)
* [Microsoft Visual C++ 2010 SP1 Redistributable Package](https://download.microsoft.com/download/1/6/5/165255E7-1014-4D0A-B094-B6A430A6BFFC/vcredist_x64.exe)
* [Microsoft Visual C++ 2015 Redistributable Package](https://download.microsoft.com/download/6/A/A/6AA4EDFF-645B-48C5-81CC-ED5963AEAD48/vc_redist.x64.exe)
* [Mendix Native Mobile Builder one-click Installer](https://artifacts.rnd.mendix.com/native-builders/latest.exe)

설치 프로그램에서 받은 오류 메시지에 따라 단일 사전 조건을 설치하거나 모두 수동으로 설치할 수 있습니다.

그 후 Studio Pro 설치를 다시 시도할 수 있습니다.

## Mendix Studio Pro 오프라인 설치 {#offline}

Mendix Studio Pro 설치 환경에는 애플리케이션을 실행하는 데 필요한 모든 도구와 프레임워크가 포함되어 있습니다. 설치 시 사전 조건이 발견되지 않으면 Studio Pro 설치 프로세스가 누락된 요소를 자동으로 다운로드하고 설치하려고 시도합니다. Mendix Studio Pro 설치 프로그램에는 모든 종속성이 포함되어 있지 않으며 필요한 소프트웨어가 누락된 경우 인터넷 연결에 의존합니다.

사전 조건 설치 프로그램을 미리 준비하여 Mendix Studio Pro 설치 프로세스가 원격 위치에서 다운로드하는 대신 가져올 수 있습니다. 다음 단계에 따라 설치 프로그램을 준비하세요:

1. Mendix Studio Pro 설치 프로그램을 위한 폴더를 만드세요.
2. 최신 [Mendix Studio Pro 설치 프로그램](https://marketplace.mendix.com/link/studiopro/)을 다운로드하고 만든 폴더로 이동하세요.
3. Mendix Studio Pro 설치 프로그램이 있는 같은 위치에 **Dependencies**라는 이름의 폴더를 만드세요.
4. 위의 [문제 해결](#troubleshooting) 섹션에 나열된 사전 조건을 다운로드하고 **Dependencies** 폴더로 이동하세요.
5. 다음 종속성의 이름을 변경하세요:
    * `.NET Framework 4.7.2` 실행 파일을 `dotnetfx472.exe`로
    * Java Development Kit 11 또는 17 (x64) *msi*(예: *OpenJDK17U-jdk_x64_windows_hotspot_17.0.10_7.msi*)를 Studio Pro 버전에 따라 다음 중 하나로:
      * *adoptiumjdk_17_x64.msi* – 8.18.29 이상 버전
      * *adoptopenjdk_11_x64.msi* – 8.18.28 이하 버전
    * `Visual C++ 2010 SP1 Redistributable (x64)` 실행 파일을 `vcredist2010_x64.exe`로
    * `Visual C++ Redistributable for Visual Studio 2015 (x64)` 실행 파일을 `vcredist2015_x64.exe`로
    * `latest` 실행 파일을 `mendix_native_mobile_builder.exe`로
6. 위의 [Mendix Studio Pro 설치](#install) 섹션에 설명된 대로 설치 프로그램을 실행하세요.

## 더 읽기

* [Studio Pro Overview](/refguide8/studio-pro-overview/)
* [App Modeling](/refguide8/modeling/)
