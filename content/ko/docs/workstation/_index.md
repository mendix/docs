---
title: "Mendix Workstation"
url: /mendix-workstation/
description: "Mendix Workstation의 구성 및 사용에 관한 문서를 제공합니다."
weight: 42
no_list: false 
description_list: true 
cascade:
    - content_type: "Mendix Workstation"
---
{{% alert color="info" %}}
Mendix Workstation은 프로덕션 사용을 위한 [제한적 가용성](https://docs.mendix.com/releasenotes/release-status/#limited-availability) 상태입니다. Workstation 라이선스를 구매한 경우 Mendix SLA에 따라 지원이 제공됩니다. Mendix Workstation을 프로덕션에 도입하려면 CSM에 문의하여 가능한 방안을 확인하십시오. 라이선스가 없는 경우 개발 목적으로 Mendix Workstation을 사용할 수 있지만, 워크스페이스(Workspace)는 개인용이며 공유할 수 없습니다.
{{% /alert %}}

## 소개

Mendix Workstation은 현장 작업자를 위한 더 스마트하고, 빠르고, 운영자 친화적인 애플리케이션을 구축할 수 있도록 설계되었습니다. 중간 서버나 과도한 네트워크 트래픽에 의존하지 않고, Mendix 클라우드 애플리케이션이 로컬 워크스테이션의 주변 장치와 직접 상호 작용할 수 있도록 합니다.

애플리케이션을 PC의 로컬 리소스에 직접 연결함으로써, Workstation은 프린터, 바코드 스캐너, 스마트 카드 리더기, 산업용 저울 등과 같은 장치와 거의 실시간으로 통신할 수 있으며, 이 모든 것이 Mendix 앱 내에서 이루어집니다. 이 설정은 저지연 성능을 보장하고 인프라 복잡성을 줄여줍니다.

Workstation은 정밀도, 속도, 신뢰성이 운영자 효율성의 핵심인 제조 및 산업 환경에서 특히 유용합니다.

연결 기능 외에도 Workstation은 여러 환경과 사이트에 걸친 프로젝트의 엔터프라이즈급 배포를 지원합니다. 분산된 팀이 효과적으로 협업하고, 다양한 이기종 장비 자산에 대한 연결을 제어되고 안전한 방식으로 중앙 관리할 수 있도록 합니다.

## Mendix Workstation의 기능

Mendix Workstation은 다음과 같은 기능을 제공합니다:

* 로컬 장치 직접 접근 - Mendix Workstation은 Mendix 클라이언트 애플리케이션이 PC의 로컬 하드웨어에서 직접 메시지를 송수신할 수 있도록 합니다.
* 서버 경유 없음 - 통신은 클라이언트 앱과 로컬 장치 사이에서 직접 이루어지며, 중앙 서버, 네트워크 과부하 또는 추가적인 중간 시스템을 거치지 않습니다.
* 로컬 PC와의 상호 작용(예: 이벤트 메시지 송수신)은 Mendix 나노플로우(Nanoflow)로 처리됩니다.
* 다중 인터페이스 지원:

    * PCSC (스마트 카드 리더기) - APDU 프로토콜
    * 시리얼 포트(Serial Port) (COM Port) RS232 표준
    * TCP-IP (이더넷)
    * Bluetooth LE (BLE) - ATT 프로토콜
    * 파일 시스템(File System)

* 인터페이스를 에뮬레이션 및 시뮬레이션할 수 있습니다.

## Mendix Workstation 사용의 이점

* 운영자의 사용자 경험과 효율성을 향상시킵니다.
* 자체 제작 애플리케이션을 혁신하고 레거시 시스템을 제어합니다.
* 핵심 시스템을 깔끔하게 유지합니다.
* 운영자가 소프트웨어에 업무를 맞추는 것이 아니라, 운영자의 업무에 맞춘 앱을 만듭니다.
* 제조 프로세스, 장비 및 환경에 맞춘 새로운 형태의 사용자 경험을 구성합니다.
* 핵심 시스템의 인접 사용자 및 도메인으로 확장하고 사일로 간의 경계를 넘습니다.

## 사용 사례

Mendix Workstation은 다음과 같은 사용 사례를 처리하는 앱을 만드는 데 사용할 수 있습니다:

* 산업용 열전사 라벨 프린터(예: Zebra 프린터)로 라벨 인쇄
* NFC 스마트 카드 리더기 및 PC/SC 사양을 사용한 운영자 배지 인증
* 바코드 스캔 및 파싱(예: GS1 사양)
* 산업용 저울을 사용한 재료 계량(예: Mettler Toledo SICS 호환 저울)
* 연결된 스마트 도구(예: 토크 제어 기능이 있는 드라이버)

## Mendix Workstation의 구성 요소

Mendix Workstation은 다음과 같은 구성 요소로 이루어져 있습니다:

* [Workstation Management](https://workstation.home.mendix.com/) - 중앙 집중식 구성을 가능하게 합니다.
* [Workstation Client](https://marketplace.mendix.com/link/component/247448) - 로컬 하드웨어와의 실시간 통신을 가능하게 합니다.
* [Workstation Connector](https://marketplace.mendix.com/link/component/247460) - 앱 통합을 가능하게 합니다.

이러한 구성 요소들은 Mendix 애플리케이션이 로컬 장치와 안전하고 효율적으로 통합할 수 있도록 하여, 디지털 워크플로와 물리적 운영 간의 격차를 해소합니다.

### 아키텍처 다이어그램

{{< figure src="/attachments/workstation/WorkstationDiagram.png" class="no-border" >}}

### Workstation Management (Mendix 서비스)

중앙 IT 및 애플리케이션 지원 팀이 사용합니다. Workstation Management는 조직 전체의 모든 워크스테이션과 장치를 구성하고 모니터링할 수 있는 중앙 집중식 인터페이스를 제공하는 Mendix 플랫폼 애플리케이션입니다. 몇 개의 스테이션이든 여러 글로벌 사이트에 걸친 수백 개의 스테이션이든, 관리자는 컴퓨터를 등록하고, 장치를 할당하고, 워크스페이스로 그룹화하고, 연결 문제를 원격으로 해결할 수 있습니다.

이를 통해 수동 설정이나 현장 지원 없이도 크고 다양한 장치 집합을 쉽게 관리할 수 있습니다.

### Workstation Client (네이티브 애플리케이션)

중앙 IT, 지원 팀, 운영자 및 감독자가 사용합니다. 각 로컬 워크스테이션에 설치되는 Workstation Client는 Mendix 클라이언트 앱과 로컬 하드웨어 간의 브리지 역할을 합니다. Workstation Management에서 제공하는 구성을 사용하여 연결된 장치와 클라이언트 애플리케이션 간의 트래픽을 처리합니다.

### Workstation Connector (Mendix 모듈)

Mendix 개발자가 사용합니다. App Connector는 개발자가 나노플로우(Nanoflow)를 사용하여 앱을 로컬 장치에 연결할 수 있도록 하는 플러그 앤 플레이 Mendix 모듈입니다. Workstation Client와 연결을 설정하며, Workstation Client는 Mendix 앱과 로컬 장치 사이의 중개자 역할을 합니다. 이 연결이 설정되면, 모듈은 앱과 장치 간에 메시지와 이벤트를 라우팅하여 원활한 데이터 교환을 용이하게 합니다.

커넥터는 다음 작업을 처리합니다:

* 로컬 스테이션 구성 조회(이름 및 장치 목록)
* 장치 연결 및 연결 해제
* 장치와의 메시지 교환
* 장치에서 메시지를 수신할 때 앱 로직을 트리거하기 위한 구독

## 더 보기
