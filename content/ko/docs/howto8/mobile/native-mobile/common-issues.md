---
title: "일반적인 Native Mobile 문제 해결"
url: /howto8/mobile/common-issues/
weight: 80
description: 네이티브 모바일 앱 빌드 및 실행과 관련된 일반적인 문제를 해결합니다.
---

## 소개

Mendix는 네이티브 모바일 앱을 빌드하고 실행하는 것을 가능한 한 간단하게 만들기 위해 노력합니다. 그러나 앱 제작에 내재된 복잡성으로 인해 문제가 발생할 수 있습니다. 네이티브 모바일 앱을 빌드하거나 실행하는 동안 문제가 있는 경우 아래 섹션을 참조하여 해당 문제가 이미 해결되었는지 확인하십시오.

## Make It Native 앱

[Make it Native](/refguide8/getting-the-make-it-native-app/) 앱과 관련된 문제를 해결하려면 아래 섹션을 참조하십시오.

### 포트 문제

[구성](/refguide8/configuration/#server)에서 **Runtime port**를 **8080**으로 유지하는 것을 권장합니다. 변경하는 경우 **8083**으로 변경하지 마십시오. 이 포트는 앱 패키징에 지정되어 있습니다.

### Wi-Fi 네트워크 설정

Windows를 사용하는 경우 WiFi 네트워크가 **Private**로 설정되어 있는지 확인하십시오. Windows는 종종 WiFi를 기본적으로 **Public**으로 설정하며, 이는 들어오는 연결을 차단합니다.

### 오류: 스크립트를 로드할 수 없음

디바이스 설정 및 네트워크 특성에 따라 Make it Native 앱이 런타임에 연결하지 못할 수 있습니다. 이 경우 Make it Native 앱은 다음 오류 메시지를 표시할 수 있습니다:

* **Unable to load script**:

    {{< figure src="/attachments/howto8/mobile/native-mobile/common-issues/unabletoloadscript.png" alt="unable to load script"   width="250"  class="no-border" >}}

* **Cannot detect your runtime**:

    {{< figure src="/attachments/howto8/mobile/native-mobile/common-issues/min-error-firewall.png" alt="cannot detect runtime"   width="250"  class="no-border" >}}

이러한 오류는 종종 Windows Defender 방화벽으로 인해 발생합니다. 이 경우 모바일 브라우저에서 런타임 URL을 열려는 시도도 실패합니다. 이러한 문제를 완화하려면 다음을 수행하십시오:

1. 컴퓨터와 모바일 디바이스가 동일한 네트워크에 연결되어 있는지 확인하십시오.
1. 다음을 수행하여 들어오는 연결이 허용되는지 확인하십시오:<br />
    1. Windows에서 **Firewall & Network Protection** 설정을 여십시오.<br />
    1. **Advanced Settings**로 이동하십시오.<br />
    1. **Inbound Rules**를 선택하고 **Mendix Native Mobile** 항목으로 스크롤하십시오.<br />
    1. 각 Node.js 항목에 대해 **Program** 열의 값을 확인하십시오. 모두 앞에 녹색 체크 표시가 있어야 합니다.<br /> 
    1. **Program** 열에 Mendix 설치 디렉토리가 표시되면 항목 앞에 녹색 아이콘이 있어야 합니다. 그렇지 않은 경우 항목을 더블 클릭하고 **Allow the connection**을 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/native-mobile/common-issues/inboundrules.png" alt="inbound rules"   width="350"  class="no-border" >}}

1. Windows는 private와 public의 두 가지 유형의 네트워크를 구분합니다. Windows Defender 방화벽은 public 네트워크에 더 엄격한 규정을 적용합니다. 신뢰할 수 있는 네트워크에 연결된 경우에만 컴퓨터에서 네트워크를 **Private**로 구성하십시오.

## 추가 정보

* [Native Mobile 앱 디버그 방법 (고급)](/howto8/mobile/native-debug/)
* [Native Builder 참조 가이드](/refguide8/native-builder/)
