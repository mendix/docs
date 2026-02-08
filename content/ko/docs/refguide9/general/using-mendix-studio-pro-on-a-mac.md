---
title: "Parallels 구성하기"
url: /refguide9/using-mendix-studio-pro-on-a-mac/
linktitle: "Parallels 구성"
weight: 18
description: "Mac 장치에서 Mendix 앱 개발을 시작하는 방법을 설명합니다."
aliases:
    - /howto9/general/using-mendix-studio-pro-on-a-mac/
---

## 소개

Parallels를 사용하면 Windows 가상 머신을 통해 Mac 장치에서 Mendix Studio Pro를 실행할 수 있습니다.

{{% alert color="warning" %}}
M1(X)과 같은 Apple Silicon Mac에서 Studio Pro를 실행하려면 Mendix Studio Pro 9.6.5 이상 또는 Mendix Studio Pro 9.9.1 이상의 MTS 버전이 필요합니다. 자세한 내용은 [시스템 요구 사항](/refguide9/system-requirements/)을 참조하십시오.
{{% /alert %}}

{{% alert color="info" %}}
Parallels를 사용할 때 일부 사용자는 네트워크 속도가 느려질 수 있습니다. 예를 들어, 새 앱을 만들기 위해 **Blank Web App**을 업로드할 때 평소보다 훨씬 오래 걸릴 수 있습니다. 이 문제를 해결하는 방법은 아래의 [네트워크 속도 향상](#increase-network-speed) 섹션을 참조하십시오.
{{% /alert %}}

Mac에서 Mendix 앱을 만들려면 이 사용 가이드를 따르십시오.

이 사용 가이드에서는 다음 방법을 배울 수 있습니다:

* Mendix Studio Pro를 위한 Windows 가상 머신 구성
* Windows 가상 머신을 사용하여 테스트 장치에서 Mendix 앱 실행
* 앱에 변경 사항을 적용한 후 테스트 장치에서 해당 변경 사항 확인

Mac에서 Parallels를 설치하고 구성하여 Studio Pro를 실행하는 방법에 대한 자세한 내용은 다음 동영상을 확인하십시오:

{{< vidyard "nJ9Tz8VnHPPKPrtSBgHv3U" >}}

## 전제 조건

다음 전제 조건을 완료했는지 확인하십시오:

* [Parallels Desktop Pro Edition](https://www.parallels.com/products/desktop/pro/)을 설치하고, Parallels에서 프롬프트가 나타나면 Windows를 설치하고, Windows 가상 머신을 생성합니다(Mendix의 네트워크 기능이 작동하려면 Parallels Desktop Pro Edition이 필요합니다)
* Windows 가상 머신에 Mendix Studio Pro를 설치합니다

{{% alert color="warning" %}}
Studio Pro 9.18 이상을 사용하는 경우, Parallels VM의 기본 브라우저로 macOS 브라우저가 아닌 Windows VM에 설치된 기본 브라우저를 사용하십시오. Windows VM 브라우저를 사용하면 로그인이 정상적으로 작동합니다.
{{% /alert %}}

## Mendix Studio Pro를 위한 Windows 가상 머신 구성

Mendix Studio Pro에서 사용할 Windows 가상 머신을 구성하려면 다음 단계를 따르십시오:

1. Parallels **Control Center**를 엽니다:

    {{< figure src="/attachments/refguide9/general/using-mendix-studio-pro-on-a-mac/windows-control-center.png" alt="parallels control center"   width="450"  class="no-border" >}}

2. **Configuration** ({{% icon name="cog" %}})을 클릭하여 **Configuration Panel**을 엽니다.
3. **Hardware** 탭으로 이동하고 왼쪽 패널에서 **Network**를 선택합니다:

    {{< figure src="/attachments/refguide9/general/using-mendix-studio-pro-on-a-mac/windows-configuration.png" alt="network in configuration"   width="450"  class="no-border" >}}

4. **Source**가 **Shared Network**으로 설정되어 있는지 확인합니다.
5. **Inbound** 대역폭과 **Outbound** 대역폭이 모두 **unlimited**로 표시되는지 확인합니다.

    그렇지 않은 경우, **Network Conditioner**를 활성화하고 대역폭을 제한하지 않는 프로파일로 설정하거나, **Options** 탭을 클릭한 다음 **Optimization** 패널에서 **Resource usage**를 **No limit**로 설정하십시오.
6. Parallels 드롭다운 메뉴에서 **Preferences**를 선택합니다:

    {{< figure src="/attachments/refguide9/general/using-mendix-studio-pro-on-a-mac/preferences-dropdown.png" alt="preferences in parallels"   width="200"  class="no-border" >}}

7. **Network** 탭으로 이동하고 왼쪽 패널에서 **Shared**를 선택합니다:

    {{< figure src="/attachments/refguide9/general/using-mendix-studio-pro-on-a-mac/parallels-preferences-no-ports.png" alt="network tab"   width="450"  class="no-border" >}}

8. **+** 버튼을 클릭하고 두 개의 포트를 추가합니다: 하나는 8080이고 다른 하나는 8083이며, 모두 Windows 가상 머신으로 포워딩합니다(8083 포트는 네이티브 모바일 앱 개발에만 필요합니다):

    {{< figure src="/attachments/refguide9/general/using-mendix-studio-pro-on-a-mac/port-setup.png" alt="plus button"   width="450"  class="no-border" >}}

    이 두 포트를 추가한 후 **Port forwarding rules**는 다음과 같아야 합니다:

    {{< figure src="/attachments/refguide9/general/using-mendix-studio-pro-on-a-mac/parallels-preferences-ports.png" alt="finished ports"   width="450"  class="no-border" >}}

축하합니다! Mac에서 Mendix 앱을 테스트할 수 있도록 포트 포워딩을 성공적으로 구성했습니다.

## 네트워크 드라이브 확인

{{% alert color="warning" %}}
Mendix Studio Pro에서 Mendix 앱을 생성하거나 열 때, 네트워크 드라이브가 아닌 매핑된 드라이브에서 작업해야 합니다.
{{% /alert %}}

테스트 장치에서 앱을 보기 전에 네트워크 드라이브를 확인하려면 아래 팁을 읽어보십시오:

* 올바른 매핑된 드라이브는 항상 파일 위치의 시작 부분에 드라이브 문자가 있습니다:

    {{< figure src="/attachments/refguide9/general/using-mendix-studio-pro-on-a-mac/mapped-drive.png" alt="mapped drive"   width="450"  class="no-border" >}}

* 올바르지 않은 네트워크 드라이브는 항상 파일 위치의 시작 부분에 **\\**가 있습니다:

    {{< figure src="/attachments/refguide9/general/using-mendix-studio-pro-on-a-mac/network-drive.png" alt="network drive"   width="450"  class="no-border" >}}

## 테스트 장치에서 앱 보기

테스트 장치에서 앱을 실행할 때, Mendix Studio Pro의 **View Mobile App** 대화 상자에 있는 QR 코드를 사용할 수 없습니다:

{{< figure src="/attachments/refguide9/general/using-mendix-studio-pro-on-a-mac/view-mobile-app.png" alt="view mobile app"   width="400"  class="no-border" >}}

대신, Make It Native 앱에 Mac의 IP 주소를 입력해야 합니다. 테스트 장치에서 앱을 실행하려면 아래 단계를 따르십시오:

1. 테스트 장치와 Mac이 같은 Wi-Fi 네트워크에 있는지 확인합니다.
2. 시스템 트레이의 Wi-Fi 아이콘 위에 커서를 놓은 다음, <kbd>Option</kbd>을 누른 상태에서 클릭하여 Mac의 고급 네트워크 정보를 확인합니다. 이 드롭다운 메뉴에서 **IP Address**를 확인할 수 있습니다.
3. Make It Native 앱의 **Host** 필드에 `{your IP address}:8080`을 다음과 같이 입력합니다:

    {{< figure src="/attachments/refguide9/general/using-mendix-studio-pro-on-a-mac/ip-in-dev-app.png" alt="ip in dev app"   width="200"  class="no-border" >}}

4. **Launch**를 탭하여 앱을 봅니다.

축하합니다! 테스트 장치에서 앱을 성공적으로 확인했습니다.

{{% alert color="info" %}}
Make It Native 앱과 연결 문제가 발생하면 방화벽이 연결을 차단하고 있지 않은지 확인하십시오. Windows Defender 및 기타 방화벽 관련 문제 해결에 대한 정보는 *전제 조건*의 [오류: 스크립트를 로드할 수 없음](/refguide9/mobile/getting-started-with-mobile/prerequisites/#unable-load-script) 섹션을 참조하십시오.
{{% /alert %}}

## 테스트 장치에서 앱 변경 사항 확인

앱에 변경 사항을 적용한 후 장치에서 해당 변경 사항을 확인하는 방법에 대한 정보는 *모바일 시작하기*의 [테스트 장치에서 앱 변경 사항 확인](/refguide9/mobile/getting-started-with-mobile/#viewingchanges) 섹션을 참조하십시오.

## 성능 개선

성능을 개선하려면 다음을 수행할 수 있습니다:

* Coherence 모드 대신 창 모드에서 Parallels를 실행
* C:\ 디스크에 앱 저장

### 네트워크 속도 향상 {#increase-network-speed}

Parallels를 사용할 때 일부 사용자는 네트워크 속도가 느려질 수 있습니다. 예를 들어, 새 앱을 만들기 위해 **Blank Web App**을 업로드할 때 평소보다 훨씬 오래 걸릴 수 있습니다. 다음 방법을 시도하면 업로드 속도를 크게 향상시킬 수 있습니다:

1. Windows 10 또는 11에서 **시작** > **제어판** > **장치 관리자** > **네트워크 어댑터** > **Parallels VirtIO Ethernet Adapter**로 이동합니다.
2. **Parallels VirtIO Ethernet Adapter**를 마우스 오른쪽 버튼으로 클릭하고 드롭다운 목록에서 **속성**을 선택합니다.
3. **고급** 탭에서 **Large Send Offload (IPv4)** 속성을 찾아 값을 **Disabled**로 변경합니다.
4. **확인**을 클릭합니다.

이제 업로드 속도가 빨라집니다! 자세한 내용은 [Parallels Forum](https://forum.parallels.com/threads/horribly-slow-upload-download-speeds.264819/)을 참조하십시오.

## 더 읽기

* [모바일 시작하기](/refguide9/mobile/getting-started-with-mobile/)
