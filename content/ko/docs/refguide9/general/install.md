---
title: "Mendix Studio Pro 설치"
url: /refguide9/install/
linktitle: "Mendix Studio Pro 설치"
weight: 15
description: "Mendix Studio Pro를 설치하는 방법을 설명합니다."
aliases:
    - /howto9/general/install/
---

{{% button color="info" href="https://marketplace.mendix.com/link/studiopro/" text="Go to Marketplace" title="Download Studio Pro from the Marketplace" %}}

## 소개

Mendix Studio Pro를 사용하면 Mendix Platform에서 앱을 빌드할 수 있습니다. 이 문서에서는 **Studio Pro 9.24 LTS**를 설치하는 단계를 안내합니다. 지원되는 시스템 및 필요한 프레임워크의 전체 목록은 [시스템 요구 사항](/refguide9/system-requirements/)을 참조하십시오.

Mac 장치를 사용하는 경우, [Parallels 구성하기](/refguide9/using-mendix-studio-pro-on-a-mac/)를 참조하여 Windows 가상 머신을 구성하십시오.

Studio Pro 설치 방법에 대한 자세한 데모를 보려면 다음 동영상을 따라하십시오:

{{< vidyard "WUp2tLi68nXFQd7xhPbDtt" >}}

## Mendix Studio Pro 다운로드

Mendix Studio Pro는 Windows 실행 파일로 컴퓨터에 설치할 수 있습니다. 이 실행 파일은 Mendix Marketplace에서 다운로드할 수 있습니다. Mendix Studio Pro를 다운로드하려면 다음 단계를 따르십시오:

1. [Mendix Marketplace](https://marketplace.mendix.com/link/studiopro/)의 Studio Pro 다운로드 페이지로 이동합니다.
2. **LTS/MTS Releases** 탭으로 이동하여 최신 **9.24** 패치를 찾습니다.
3. 최신 9.24 LTS 패치 버전의 Mendix Studio Pro에 대해 **Download**를 클릭합니다.

## Mendix Studio Pro 설치 {#install}

앱 빌드를 시작하기 전에 Mendix Studio Pro를 컴퓨터에 설치해야 합니다. Mendix Studio Pro를 설치하려면 다음 단계를 따르십시오:

1. 다운로드한 Mendix Studio Pro 실행 파일을 엽니다. 파일 이름은 *Mendix-9.X.X-Setup*과 같습니다. 그런 다음 **Next**를 클릭합니다:

    {{< figure src="/attachments/refguide9/general/install/setup-wizard.png"   width="400"  class="no-border" >}}

2. **I accept the terms in the License Agreement**를 선택하고 **Next**를 클릭합니다:

    {{< figure src="/attachments/refguide9/general/install/terms-of-use.png"   width="400"  class="no-border" >}}

3. Studio Pro를 설치할 폴더를 선택하고 **Next**를 클릭합니다:

    {{< figure src="/attachments/refguide9/general/install/select-folder.png"   width="400"  class="no-border" >}}

4. 사용할 시작 메뉴 바로가기 폴더를 입력하고 **Next**를 클릭합니다:

    {{< figure src="/attachments/refguide9/general/install/shortcut-folder.png"   width="400"  class="no-border" >}}

5. 데스크톱에 Studio Pro 바로가기를 만들려면 데스크톱 옵션을 선택하고 **Next**를 클릭합니다.
6. **Install**을 클릭하여 컴퓨터에 Studio Pro를 설치합니다:

    {{< figure src="/attachments/refguide9/general/install/ready-to-install.png"   width="400"  class="no-border" >}}

7. 컴퓨터를 재시작하라는 메시지가 표시되면 선택을 하고 **Finish**를 클릭합니다. 그렇지 않으면 **Launch Mendix 9.X.X**를 선택하고 **Finish**를 클릭하여 설치를 완료하고 Studio Pro를 실행합니다.

## 문제 해결 {#troubleshooting}

Studio Pro를 설치할 때 가끔 문제가 발생할 수 있습니다. 한 가지 해결 방법은 시스템을 재시작하고 아직 설치되지 않은 전제 조건을 별도로 설치하는 것입니다.

전제 조건은 다음과 같습니다:

* | Studio Pro 9.0.0 - 9.24.33 | Studio Pro 9.24.34 이상 |
    | --- | --- |
    |  [Microsoft .NET Desktop Runtime 6.0.x](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) – Mendix는 6.0.6 이상 버전을 권장합니다 | [Microsoft .NET Desktop Runtime 8.0.x](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) – Mendix는 8.0.14 이상 버전을 권장합니다 |
    
* Java JDK

    * Mendix Studio Pro 9.24.34 이상 - [Eclipse Temurin JDK 21 (x64)](https://github.com/adoptium/temurin21-binaries/releases)
    * Mendix Studio Pro 9.24.16 이상 – [Eclipse Temurin JDK 17 (x64)](https://github.com/adoptium/temurin17-binaries/releases)
    * Mendix Studio Pro 9.18.0~9.24.15 – [Eclipse Temurin JDK 11 (x64)](https://github.com/adoptium/temurin11-binaries/releases)
    * Mendix Studio Pro 9.14~9.17 – [Adoptium Temurin Java SDK](https://github.com/adoptium/temurin11-binaries/releases/download/jdk-11.0.14.1%2B1/OpenJDK11U-jdk_x64_windows_hotspot_11.0.14.1_1.msi)
    * Mendix Studio Pro 9.13 이하 – [AdoptOpenJDK 11](https://cdn.mendix.com/installer/AdoptOpenJDK/OpenJDK11U-jdk_x64_windows_hotspot_11.0.3_7.msi)
* [Microsoft Visual C++ 2015 및 2019 Redistributable Package](https://aka.ms/vs/16/release/vc_redist.x64.exe)
* [Mendix Native Mobile Builder 원클릭 설치 프로그램](https://appdev-mx-cdn.s3.amazonaws.com/native-builders/latest.exe)
* [Git for Windows (x64)](https://git-scm.com/download/win) 다음 버전 사용:

    | 9.18.0 - 9.24.5 | 9.24.6 이상 |
    | --- | --- |
    | [2.37.1](https://github.com/git-for-windows/git/releases/tag/v2.37.1.windows.1) | [2.41.0](https://github.com/git-for-windows/git/releases/tag/v2.41.0.windows.3) |

* [Microsoft Edge WebView2 Evergreen Runtime (x64 또는 ARM64) (Evergreen Standalone Installer 버전)](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)
* Mendix Studio Pro 버전 9.24.0 이상에는 다음 버전의 [Gradle](https://gradle.org/install/#manually)이 필요하며, Gradle은 Studio Pro가 설치된 폴더의 상위 디렉터리(일반적으로 `C:\Program Files\Mendix`)에 `C:\Gradle` 대신 추출해야 합니다.
    * Mendix Studio Pro 버전 9.24.34 이상: Gradle 버전 8.5 이상
    * Mendix Studio Pro 버전 9.24.11 이상: Gradle 버전 7.6.3 이상
    * Mendix Studio Pro 버전 9.24.0~9.24.10: Gradle 버전 7.6 이상

설치 프로그램에서 받은 오류 메시지에 따라 단일 전제 조건을 설치하거나 모두 수동으로 설치할 수 있습니다.

그런 다음 Studio Pro 설치를 다시 시도할 수 있습니다.

## Mendix Studio Pro 오프라인 설치 {#offline}

Mendix Studio Pro 설치 환경에는 애플리케이션 실행에 필요한 모든 도구와 프레임워크가 포함되어 있습니다. 설치 시 전제 조건이 발견되지 않으면 Studio Pro 설치 프로세스가 누락된 요소를 자동으로 다운로드하고 설치합니다. Mendix Studio Pro 설치 프로그램에는 모든 종속성이 포함되어 있지 않으며, 필요한 소프트웨어가 누락된 경우 인터넷 연결에 의존하여 이를 가져옵니다.

전제 조건 설치 프로그램을 미리 준비하여 Mendix Studio Pro 설치 프로세스가 원격 위치에서 다운로드하는 대신 이를 사용할 수 있도록 할 수 있습니다. 설치 프로그램을 준비하려면 다음 단계를 따르십시오:

1. Mendix Studio Pro 설치 프로그램을 위한 폴더를 생성합니다.
2. 최신 [Mendix Studio Pro 설치 프로그램](https://marketplace.mendix.com/link/studiopro/)을 다운로드하고 생성한 폴더로 이동합니다.
3. Mendix Studio Pro 설치 프로그램을 배치한 동일한 위치에 **Dependencies**라는 이름의 폴더를 생성합니다.
4. 위의 [문제 해결](#troubleshooting) 섹션에 나열된 전제 조건을 다운로드하고 **Dependencies** 폴더로 이동합니다.
5. 다음 종속성의 이름을 변경합니다:
    * Microsoft .NET Desktop Runtime 6.0.x 실행 파일(*dotnet.exe*)의 이름을 *windowsdesktop-runtime-6.0-x64.exe*로 변경
    * Java Development Kit 11, 17 또는 21 (x64) *msi*(예: *OpenJDK17U-jdk_x64_windows_hotspot_17.0.10_7.msi*)의 이름을 Studio Pro 버전에 따라 다음 중 하나로 변경:
        * *adoptiumjdk_21_x64.msi* – 9.24.34 이상 버전
        * *adoptiumjdk_17_x64.msi* – 9.24.16 이상 버전
        * *adoptiumjdk_11_x64.msi* – 9.14.0~9.24.15 버전
        * *adoptopenjdk_11_x64.msi* – 9.13.x 이하 버전
    * Visual Studio 2019용 Visual C++ Redistributable(x64) 실행 파일(예: *VC_redist.x64.exe*)의 이름을 *vcredist2019_x64.exe*로 변경
    * `latest` 실행 파일의 이름을 *mendix_native_mobile_builder.exe*로 변경
    * *Git-{version}-64-bit.exe* 실행 파일의 이름을 *git_for_windows_installer.exe*로 변경
    * Microsoft Edge WebView2 Evergreen Runtime 설치 프로그램 *MicrosoftEdgeWebview2Setup.exe*의 이름은 변경하지 않고 그대로 유지
    * Mendix 9 버전 9.24.34 이상: *gradle-8.5-bin.zip*이라는 이름의 zip 파일에 Gradle 버전 8.5 사용
    * Mendix 9 버전 9.24.11 이상: *gradle-7.6.3-bin.zip*이라는 이름의 zip 파일에 Gradle 버전 7.6.3 사용
    * Mendix 버전 9.24.0~9.24.10: *gradle-7.6-bin.zip*이라는 이름의 zip 파일에 Gradle 버전 7.6 사용

6. 위의 [Mendix Studio Pro 설치](#install) 섹션에 설명된 대로 설치 프로그램을 실행합니다.

설치 중 **AdoptOpenJDK 11 x64 failed; code 1639** 오류가 발생하면 다음을 시도하십시오:

* 설치 프로세스를 중단합니다
* Dependencies 폴더에서 관리자 권한으로 Adopt Open JDK 종속성을 수동으로 설치합니다
* Studio Pro를 다시 설치해 봅니다

## 로그인

설치 후 Studio Pro를 처음 시작하면 Mendix Platform에 로그인하라는 메시지가 표시됩니다. 이를 통해 Studio Pro 내에서 Team Server, Marketplace, 클라우드에 앱 배포 등의 Mendix Platform 서비스에 접근할 수 있습니다.

Mendix 계정으로 로그인하거나, Mendix Platform에서 Identity Provider로 설정된 경우 회사 계정으로 로그인할 수 있습니다.

일부 상황에서, 예를 들어 네트워크에 방화벽이나 프록시 서버가 있는 경우 로그인 과정에서 신뢰할 수 없는 인증서에 대한 경고가 나타날 수 있습니다:

{{< figure src="/attachments/refguide9/general/install/untrusted-certificate.png" width="600px" class="no-border" >}}

계속하려면 **Accept for this session** 버튼을 클릭하여 현재 세션에 대해 인증서를 수락하거나 **View certificate information** 버튼을 클릭하여 영구적으로 설치할 수 있습니다.

{{% alert color="warning" %}}
신뢰할 수 없는 인증서를 수락하면 보안 위험이 발생할 수 있습니다. 네트워크 관리자의 확인을 받은 후에만 수행하십시오.
{{% /alert %}}

## 더 읽기

* [Studio Pro 개요](/refguide9/studio-pro-overview/)
* [앱 모델링](/refguide9/modeling/)
