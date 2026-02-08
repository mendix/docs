---
title: "Mendix Workstation 릴리스 노트"
linktitle: Mendix Workstation
url: /releasenotes/workstation/
description: "Mendix Workstation 업데이트에 대한 릴리스 노트"
weight: 40
cascade:
    - numberless_headings: true
---

이 릴리스 노트는 [Mendix Workstation](/mendix-workstation/)에 적용된 변경 사항을 다루고 있습니다.

## 3.3.0

### Release date: January 8, 2026

### Workstation Management

#### New Features

* 중복 워크스테이션에 대한 자동 접미사 추가 - 워크스테이션 관리를 더 원활하게 하기 위해, 이름이 중복되는 가져온 워크스테이션에 자동 접미사를 구현했습니다. 이를 통해 이름 충돌을 방지하고 환경을 깔끔하게 유지할 수 있습니다.
* 새로운 Forum Space로 Feedback 모듈 대체 - Workstation Management에서 Feedback 기능을 제거했습니다. 질문, 아이디어, 피드백은 새로운 전용 [Mendix Forum Space for Mendix Workstation](https://community.mendix.com/link/spaces/mendix-workstation-client)에서 공유해 주세요. 이 변경을 통해 토론을 중앙화하고 더 나은 지원을 제공할 수 있습니다.
* Workspace 이름에 특수 문자 사용 - 이제 Workspace 이름에 특수 문자를 사용할 수 있어 더 많은 유연성과 개인화가 가능합니다.
* 고유한 자동 승인 컴퓨터 이름 - 대량 등록에 사용되는 **Auto-Accepted Computer Name** 필드에 고유성 유효성 검사를 추가했습니다. 이를 통해 각 컴퓨터 이름이 고유하게 유지되어 등록 과정에서 잠재적 충돌을 방지합니다.

#### Fixes

* 향상된 내보내기 및 가져오기 경험 - 더 나은 사용자 경험을 위해 가져오기 및 내보내기 프로세스의 UI를 개선했습니다.
    * **Select individual stations** 드롭다운이 더 나은 사용성을 위해 재작업되었습니다.
    * **Import summary**가 이제 가져오기 작업에 대한 더 명확한 인사이트를 제공합니다.
* 런타임 오류 방지 - 런타임 오류를 유발하던 여러 문제를 해결하여 더 안정적인 경험을 제공합니다.
* 가져오기 시 애플리케이션 중복 방지 - 스테이션을 가져올 때 애플리케이션이 중복되던 버그를 해결했습니다. 이제 애플리케이션을 참조하는 스테이션을 가져올 때 시스템이 동일한 식별 속성(URL 및 Public Key 등)을 가진 기존 애플리케이션을 확인합니다. 애플리케이션이 이미 존재하면 재사용되어 불필요한 중복을 방지하고 깨끗한 애플리케이션 레지스트리를 보장합니다.
* 스테이션 생성 시 입력 유효성 검사 - 스테이션 생성 과정에서 빈 입력 필드로 **Continue**를 클릭하면 오류가 발생할 수 있던 문제를 수정했습니다. 이제 프로세스가 더 안정적입니다.

### Workstation Client

#### Fixes

* 파일 커넥터의 파일 이름 출력 - 파일 변경 사항을 구독할 때 파일 커넥터가 변경된 파일 이름을 반환하지 않던 문제를 해결했습니다. 이제 파일 경로를 구독하면 파일 커넥터가 파일 변경 이벤트에서 특정 파일 이름을 올바르게 출력하여 더 정확한 정보를 제공합니다.

## 3.2.0

### Release date: December 4, 2025

### Workstation Management

#### New Features

##### 스테이션 설정 내보내기 및 가져오기

이제 워크스페이스에서 스테이션 목록의 설정을 파일로 내보내고 동일하거나 다른 워크스페이스로 가져올 수 있습니다. 이 기능에는 애플리케이션 및 디바이스를 포함하거나 제외하고 모든 스테이션을 내보내는 옵션이 포함됩니다.

{{% alert color="info" %}}
이 기능은 Mendix Workstation 라이선스가 있는 계정에서만 사용할 수 있습니다.
{{% /alert %}}

##### 원격 Workstation Client 새로고침

**Station** 페이지에 새로운 **Refresh Client** 액션을 추가했습니다. 이 액션을 사용하여 Workstation Client의 설정을 원격으로 새로 고침할 수 있습니다.

#### Fixes

* 다크 모드 표시 - Workstation Management를 다크 모드에서 사용할 때 발생할 수 있던 일부 표시 문제를 해결했습니다.
* 워크스페이스 정렬 - 워크스페이스의 정렬 동작에 영향을 미치던 문제를 수정했습니다.
* 애플리케이션 설정 중복 - 키 또는 URL 앞뒤에 공백을 추가하여 사용자가 실수로 중복 애플리케이션 설정을 생성할 수 있던 문제를 수정했습니다.

#### Known Bugs and Limitations

* 중복 앱 설정 가져오기 - 이미 정의된 애플리케이션(예: 기존 URL 및 Public Key)을 포함하는 설정을 가져오려고 하면 UI 오류가 발생합니다.

{{% alert color="info" %}}
이 문제를 해결하려면 애플리케이션을 제외하고 설정을 가져온 다음 수동으로 설정할 수 있습니다.
{{% /alert %}}

* 구분할 수 없는 스테이션 중복 - 동일한 스테이션을 여러 번 가져오면 현재 시스템에서 구분할 수 없는 중복이 생성됩니다.
* 가져오기 시 중복 애플리케이션 생성 - 동일한 애플리케이션을 사용하는 여러 스테이션을 가져올 때 애플리케이션이 포함되어 있으면 애플리케이션이 여러 번(스테이션당 한 번) 생성됩니다.

### Workstation Client

#### New Features

##### 실행 시 설정 새로고침

실행할 때마다 Workstation Client가 이제 설정에 대한 업데이트를 자동으로 확인하여 항상 최신 설정으로 실행되도록 합니다.

##### 자동 Client 리셋

연결된 컴퓨터가 Workstation Management에서 등록 해제되면 Workstation Client가 다음 새로 고침 시 자동으로 리셋됩니다.

#### Fixes and Other Changes

* Linux ARM64 실행 파일 이름 - 일관성을 개선하기 위해 Workstation Client(Linux ARM64 버전)의 실행 파일 이름에서 공백을 제거했습니다.
* Bluetooth LE 디바이스 검색 - Bluetooth LE 디바이스의 검색 프로세스가 전체 디바이스 이름을 올바르게 인식하지 못해 연결 시도가 실패하던 문제를 해결했습니다. 이제 Workstation Client가 Bluetooth BT 광고 이름을 정확하게 일치시킵니다.

### Workstation Connector

#### Fixes

* 업데이트된 디바이스 목록 새로고침 - 설정 업데이트 후 디바이스 목록 업데이트가 웹 애플리케이션에 즉시 전송되지 않아 수동 새로 고침이 필요하던 문제를 수정했습니다. 이제 목록이 즉시 업데이트됩니다.

## 3.1.0

### Release date: November 7, 2025

### Workstation Management

### New Features

#### 스테이션 설정 복사

이제 스테이션 설정을 클립보드에 복사하거나 파일로 다운로드할 수 있습니다. 새 스테이션을 생성할 때 복사된 설정 또는 다운로드된 파일에서 생성할 수 있습니다. 복사된 스테이션의 연결된 앱, 스테이션 그룹, 디바이스 클래스를 포함한 모든 속성이 복제됩니다. 등록된 컴퓨터는 복사되지 않으며, 새로 생성된 스테이션은 **No computer registered**로 설정됩니다.

#### Fixes

* Workstation Management에서 디바이스 편집을 위한 사이드 패널이 열리지 않거나 열기 위해 두 번 클릭해야 하던 문제를 수정했습니다. 이 문제는 느린 네트워크에서 특히 두드러졌습니다.

#### Known Bugs and Limitations

* 복사본에서 스테이션을 생성할 때, 사용자가 앱을 생성하는 데 필요한 워크스페이스 권한이 없더라도 연결된 애플리케이션이 생성됩니다.

### Workstation Client

#### Improvements

* 시스템 로그를 더 읽기 쉽고 간결하게 만들어 활동 모니터링 및 잠재적 문제 해결 프로세스를 단순화했습니다.

#### Fixes

* 컴퓨터 등록: 인증서가 필요한 네트워크 연결을 통해 Workstation Client가 Workstation Management에 연결할 수 없던 문제를 수정했습니다. 이번 릴리스에서 Workstation Client는 이제 클라이언트 운영 체제의 인증서를 사용하여 Workstation Management와의 연결을 설정합니다.
* 스마트 카드 리더 인터페이스: **Detect card readers**가 활성화되어 있고 운영 체제의 스마트 카드 서비스가 중지된 경우 Workstation Client가 멈추던 문제를 수정했습니다.
* Bluetooth LE 인터페이스: Bluetooth 속성을 구독할 때 Workstation Client 및 Connector에서 발생하던 문제를 수정했습니다. 구독 간의 대기 및 절전 시간이 더 이상 필요하지 않으며 여러 시리즈의 구독 및 구독 해제가 지원됩니다.

## 3.0.0

### Release date: September 25, 2025

{{% alert color="info" %}}
이것은 Mendix Workstation의 Limited Availability 릴리스입니다.

Mendix Workstation은 모든 Mendix 사용자가 개발 용도로 사용할 수 있습니다.

Mendix Workstation은 프로덕션 사용에 대해 [Limited Availability](https://docs.mendix.com/releasenotes/release-status/#limited-availability)입니다. Workstation 라이선스를 구매한 경우 Mendix SLA에 따라 지원이 제공됩니다. Mendix Workstation을 프로덕션에 도입하려면 CSM에 문의하여 가능한 조건을 확인하세요. 라이선스 없이는 개발용으로 Mendix Workstation을 사용할 수 있지만 워크스페이스는 개별적이며 공유할 수 없습니다.
{{% /alert %}}

### Improvements

#### Workspace Settings에서 로깅 설정 가능

로그 파일에 기록되고 클라이언트에서 표시되는 로그 수준을 Workspace Settings에서 설정할 수 있습니다. 다음 항목을 설정할 수 있습니다:

* 로그 수준: Info, Warn, Error, Debug.
* 로그 보존 정책: 최대 로그 폴더 크기(MB) 및 최대 저장 일수.

개발자 모드로 설정된 스테이션의 경우 워크스페이스 로그 수준이 *Debug*로 재정의됩니다.

#### 사이드 패널에서 디바이스 편집

디바이스를 편집할 때 디바이스 설정이 사이드 패널에서 편집됩니다. 모든 설정 매개변수가 하나의 뷰에 있고 편집 중에 다른 디바이스 설정을 볼 수 있어 디바이스 설정이 더 쉬워집니다.

### Known Bugs and Limitations

* 스마트 카드 리더 감지가 활성화되어 있고 *Smart Cards for Windows Service*가 비활성화된 경우 Windows Workstation Client가 멈춥니다.
* 보조 화면에서 열었을 때 해당 보조 화면이 더 이상 사용 가능하지 않으면 Workstation Client 창이 표시되지 않습니다.

## 2.6.0

### Release date: September 12, 2025

{{% alert color="info" %}}
Mendix Workstation의 네 번째 사전 릴리스는 Mendix Workstation Pre-Release Program의 조건에 따라 사용할 수 있습니다. 지원은 프로그램 멤버에게만 제공됩니다. 프로그램 멤버가 되려면 Mendix Sales에 문의하세요.
{{% /alert %}}

### New Features

#### Mendix Workstation Management 가용성

Mendix Workstation Management가 이제 모든 Mendix 사용자에게 제공됩니다.

{{% alert color="info" %}}
Mendix Workstation 라이선스가 없는 회사의 사용자는 소유한 워크스페이스에 멤버를 추가할 수 없습니다.

Workstation Client 및 기타 모든 관련 Mendix Marketplace 항목은 사전 릴리스 프로그램 멤버에게만 제공됩니다.
{{% /alert %}}

#### Workstation Client Developer Mode

각 스테이션에서 Workstation Client의 다음 기능 가용성을 제어하기 위해 개발자 모드를 켜거나 끌 수 있습니다:

* **Quit Workstation Client**는 비개발자 모드에서 사용할 수 없습니다.
* **Unlink Workstation Client**는 비개발자 모드에서 사용할 수 없습니다.
* **Developer tool** 단축키는 비개발자 모드에서 사용할 수 없습니다.

프로덕션 환경에서 사용하는 클라이언트에는 개발자 모드를 비활성화하는 것이 좋습니다.

#### Workstation Sample App

Mendix Workstation Sample App은 여러 주변 디바이스와 상호 작용하는 애플리케이션을 빌드하는 방법을 보여줍니다.

이 앱에는 다음을 위한 재사용 가능한 주변 장치 모듈이 포함됩니다:

* PC/SC 스마트 카드 리더(ADPU 프로토콜), 예: Omnikey, 5427 G2, ACR122U
* 바코드 스캐너(Serial Port에 설정), 예: NETUM C750
* 산업용 저울(MT-SICS 프로토콜), 예: Mettler Toledo ICS425, OHAUS Scout STX 620, 6200
* 라벨 프린터(ZPL 프로토콜), 예: Zebra ZD421D
* USB Andon 타워/스택 라이트, 예: ANDONT USB Stack LED Andon Tower Lights

각 모듈에는 물리적 디바이스 없이 앱을 빌드할 수 있는 주변 장치 에뮬레이터가 포함됩니다.

Sample App은 Mendix Marketplace에서 사용할 수 있습니다.

### Improvements

#### Workstation Management

* Mendix Portal Global Navigation Menu 상단 바 및 메뉴를 추가했습니다.
* 기타 사용성 개선을 적용했습니다.

#### Workstation Client

* 등록 토큰을 붙여넣는 버튼을 추가했습니다.

#### Workstation Connector

* SecurityAdministrator 보안 역할을 추가했습니다. 이 역할을 가진 사용자만 앱의 **Station connector Security**에서 `KeyPair`를 재생성할 수 있습니다.

### Fixes

* Workstation Client에서 클라이언트 앱이 연결을 닫고 다시 열었을 때 이전 세션에서 버퍼링된 데이터가 새 세션으로 전송되던 문제를 수정했습니다. 이제 연결이 닫히면 데이터 버퍼가 지워집니다.

## 2.4.0

### Release date: August 20, 2025

{{% alert color="info" %}}
Mendix Workstation의 세 번째 사전 릴리스는 Mendix Workstation Pre-Release Program의 조건에 따라 사용할 수 있습니다. 지원은 프로그램 멤버에게만 제공됩니다. 프로그램 멤버가 되려면 Mendix Sales에 문의하세요.
{{% /alert %}}

### New Features

#### Workstation Management

* **Team** 페이지를 통해 사용자가 워크스페이스를 공유하고 개별 권한을 배정하여 여러 환경과 사이트에서 Workstation 프로젝트의 협업 배포를 대규모로 지원합니다.
* 앱은 **Apps** 페이지에서 워크스페이스 수준으로 관리됩니다. 각 앱은 스테이션별, 스테이션 그룹별, 또는 워크스페이스 내 모든 스테이션에 대해 개별적으로 활성화하거나 비활성화할 수 있습니다.
* 앱 키는 **Apps**에서 생성된 다음 워크스페이스 앱에 복사되어, 배포된 앱의 단일 인스턴스를 여러 워크스페이스에서 사용할 수 있습니다.
* **Test Your Station** 페이지는 **Settings** 페이지에서 활성화하거나 비활성화할 수 있습니다.
* 워크스페이스의 스테이션을 **Station Group**으로 그룹화할 수 있습니다.
* 각 디바이스에 대해 **Device class**를 설정할 수 있습니다.
* **File Device** 인터페이스가 더 안전하고 설정 가능해졌습니다:

    * 읽기, 쓰기, 변경 감시할 폴더를 설정할 수 있습니다.
    * 읽기, 쓰기, 감시 권한을 설정할 수 있습니다.
    * 폴더 경로 정의를 위해 환경 변수가 지원됩니다.

#### Workstation Client 

* Workstation Client가 이제 Raspberry Pi와 같은 단일 보드 컴퓨터에서 클라이언트를 실행하기 위한 [Linux ARM 64 버전](https://marketplace.mendix.com/link/component/245627)으로 사용할 수 있습니다.

#### Workstation Connector

* 새로운 **Unsubscribe by Device** nanoflow 액션이 디바이스의 모든 구독을 제거합니다.
* 새로운 **Disconnect Device** nanoflow 액션이 디바이스의 연결을 끊습니다. 연결을 유지하는 구독 해제 액션과 다릅니다.

#### Other

* **Get Started** 앱에 Mendix Workstation 시작 및 디바이스 메신저 빌드 방법에 대한 단계별 가이드가 포함됩니다.
* Workstation 문서가 이제 [Mendix Docs](/mendix-workstation/)에서 사용할 수 있습니다.

### Improvements

#### Workstation Management 

* 주요 디바이스 연결 매개변수가 연결 문자열의 디바이스 목록에 표시됩니다.
* **Station** 뷰에서 Workstation Client 버전이 업데이트됩니다.

#### Workstation Client

* Workstation Client를 업그레이드한 후에도 클라이언트 설정이 유지됩니다.
* 감지된 스마트 카드 리더가 디바이스 목록에 표시됩니다. 감지는 재시작이나 설정 새로 고침 없이 동적으로 이루어집니다.
* 주요 페이지가 재설계되었습니다:

    * Workstation Client의 메인 창에 워크스페이스 이름이 표시됩니다.
    * 스테이션 및 워크스페이스 이름을 클릭하면 Workstation Management 앱으로 리다이렉트됩니다.
    * Workstation Client 버전이 표시됩니다.
    * 지원을 위해 내부 ID가 표시됩니다.

* Workstation Client에서 **Unlink** 기능을 사용하면 Workstation Management에서 컴퓨터가 등록 해제됩니다.
* Workstation Client에서 로그를 볼 수 있습니다.
* Workstation Client 설치 프로그램에 최종 사용자 라이선스 계약이 추가되었습니다.

#### Workstation Connector

* Workstation Connector에서 스테이션 및 클라이언트 컴퓨터 이름과 함께 워크스페이스 이름을 사용할 수 있습니다.
* Workstation Connector에서 Workstation Client 버전을 사용할 수 있습니다.

### Fixes

#### Workstation Client

* 시리얼 포트에서 빠르게 연결, 메시지 전송, 연결 해제할 때 *Port not open* 오류가 발생하던 문제를 수정했습니다.

#### Workstation Connector

* 앱의 개인 키가 관리자 사용자에게만 사용 가능하도록 보안 모델을 수정했습니다.
* Device가 매개변수인 페이지에서 취소 버튼을 사용할 때 Device 객체가 삭제되던 문제를 수정했습니다.
* 감지된 카드 리더 디바이스가 `CardReader` 클래스로 설정됩니다.
* Windows Hello for Business가 더 이상 카드 리더로 감지되지 않습니다.

### Upgrade

이전 버전에서 업그레이드하려면 다음 단계를 수행하세요:

1. 각 컴퓨터에 새 Workstation Client를 설치합니다.
2. 앱에서 Workstation Connector를 업데이트합니다.
3. 각 앱에 대해 다음 단계를 수행합니다:

    1. 앱을 실행하고 앱 키를 생성합니다.
    2. 복사된 키를 사용하여 워크스페이스의 **Apps** 페이지에 앱을 추가하고 모든 스테이션에서 사용할 수 있도록 합니다.

4. 각 컴퓨터에서 Workstation Client를 새로 고침하여 정의한 앱에 접근합니다.
5. 브라우저에서 앱 클라이언트를 새로 고침합니다.

## 2.1.0

### Release date: June 13, 2025

{{% alert color="info" %}}
Mendix Workstation의 두 번째 사전 릴리스는 Mendix Workstation Pre-Release Program의 조건에 따라 사용할 수 있습니다.
{{% /alert %}}

### New Features

#### Workstation Management

* 이제 워크스페이스별로 스테이션을 그룹화할 수 있습니다.

#### Workstation Client 

* Workstation Client가 이제 디지털 서명됩니다.
* 관리자 권한이 없는 사용자를 위한 포터블 버전의 Workstation Client를 제공합니다.

#### Workstation Connector

* Station Connector가 이제 보호 모듈 대신 오픈 모듈로 제공됩니다.
* Station Interface 모듈은 더 이상 필요하지 않으며 릴리스에서 제거되었습니다.
* 데이터 모델에서 Device 속성이 제거되어 비영속 엔티티 수가 10분의 1로 줄었습니다.
* 디바이스에 대한 연결 및 연결 해제가 Connector에 의해 자동으로 관리됩니다.
* Connector 액션이 Workstation 카테고리 아래 nanoflow 도구 상자에 노출됩니다.
* 이제 동기 nanoflow에서 메시지를 보내고 응답을 기다릴 수 있습니다.
* 구독 패턴을 사용하여 앱 nanoflow에서 디바이스 데이터를 직접 관리할 수 있습니다.
* 디바이스에 대한 동시 연결을 지원합니다. 클라이언트 브라우저 또는 탭 인스턴스가 디바이스에 연결을 시도하면 이전에 연결된 인스턴스가 디바이스에서 연결 해제됩니다.
* Workstation Management URL 상수가 앱에서 더 이상 필요하지 않습니다.

#### Starter App

* 커넥터 사용, 디바이스와의 메시지 교환, 교환 성능 측정 방법을 보여주는 Starter App을 만들었습니다.

#### Marketplace

* Workstation Client, Connector, Starter App이 Mendix Marketplace에 비공개 Marketplace 목록으로 제공됩니다. 사전 릴리스 프로그램의 모든 멤버가 **Shared with me** 페이지 및 Studio Pro의 Marketplace 검색을 통해 접근할 수 있습니다.

### Improvements

#### Workstation Management 

* **Test your Station** 페이지의 사용성을 개선했습니다.
* **Test your Station**에 Client에서 Workstation Client 설정을 새로 고침하는 버튼이 포함되었습니다.
* 스테이션 이름에 특수 문자가 포함되지 않도록 유효성 검사를 추가했습니다.
* 네비게이션을 동적 사이드바 메뉴로 변경했습니다.
* 수신 메시지 파싱을 분할 없이, 구분자 없이 설정할 수 있습니다.

#### Workstation Client

* Mendix Workstation 데이터 폴더가 이제 다음 위치에 있습니다:

    * `%ProgramData%\Mendix Workstation` 모든 사용자를 위해 설치된 경우
    * `%AppData%\Mendix Workstation` 포터블 버전용

#### Logging

* Workstation Client는 Powershell 또는 Command Prompt에서 명령줄 인수 `--log-level=debug`로 시작할 때 완전한 로그를 생성합니다.
* 로그 파일은 일별로 정리되며 Mendix Workstation 데이터 폴더의 *Logs* 하위 폴더에 위치합니다.

#### Security

* 비대칭 보안 키 쌍을 통한 Workstation Client 서명으로 통신에 사용되는 개인 키로 액세스 키를 교체하여 앱 보안을 단순화하고 개선했습니다.

### Fixes

#### Workstation Client

* 연결 오류 후 디바이스 연결을 더 이상 사용할 수 없던 버그를 수정했습니다. 이제 Client가 항상 재연결을 시도합니다.
* 다른 디바이스가 설정되지 않은 경우 스마트 카드 리더가 감지되지 않던 버그를 수정했습니다.
* 클라이언트 시간이 서버 시간과 동기화되지 않은 경우 컴퓨터 등록이 불가능하던 버그를 수정했습니다.

#### Breaking Changes

* 새 커넥터는 이전 릴리스와 호환되지 않습니다. 새 패턴을 채택하려면 Mendix 앱을 리팩터링해야 합니다.
* Workspace 도입으로 인해 기존 스테이션 설정이 삭제됩니다. 스테이션을 다시 설정해야 합니다.
* Workstation Management는 더 이상 Workstation Client 버전 2.0과 호환되지 않습니다. Client를 버전 2.1로 업데이트해야 합니다.

#### App Upgrade

이전 버전에서 앱을 업그레이드하려면 다음 단계를 수행하세요:

1. 기존 StationConnector 모듈을 제거합니다.
2. 기존 StationInterface 모듈을 제거합니다.
3. Mendix Marketplace에서 StationConnector 2.1.0 .mpk를 가져옵니다.
4. 이전 액션에 대한 호출을 새 액션으로 교체하여 앱을 리팩터링합니다:

    1. 연결 액션 호출을 **SubscribeToMessages** 호출로 교체합니다:

        1. 콜백 nanoflow를 설정합니다.
        2. **Subscribe once**를 **false**로 설정합니다.
        3. **Application context** 객체를 설정합니다. 메시지 수신 시 nanoflow로 전달됩니다.
        4. 객체에 **SubscriptionId**를 저장합니다.
        5. **Message call back** nanoflow에 다음 매개변수를 제공합니다:

            * Application context 객체(구독과 동일)
            * Device
            * Message (String)

    2. 오류 로직 관리를 위해 **SubscribeToError** 호출을 추가합니다:

        1. 객체에 **ErrorSubscriptionId**를 저장합니다.
        2. **Error call back nanoflow**에 다음 매개변수를 제공합니다:

            * Application context 객체(구독과 동일)
            * Device
            * ErrorMessage (String)
            * ErrorCode (Integer)

    3. Disconnect 호출을 **Unsubscribe**(**SubscriptionId** 및 **ErrorSubscriptionId** 전달) 또는 **Unsubscribe by Context**(**Application context** 객체 전달)로 교체합니다.
    4. Send Message를 새 **Send Message**로 교체합니다. 이전과 동일한 동작을 구현하려면 **Wait for response**를 **false**로 설정합니다. 또는 새 **Wait for response** 옵션을 활용하도록 앱 로직을 재작업합니다.

5. Workstation Management에서 다음 단계를 수행합니다:

    1. 스테이션에 설정된 앱 목록에 앱 URL을 추가합니다.
    2. 추가된 앱 옆에서 메뉴 아이콘을 클릭한 다음 **Generate Private Key**를 클릭합니다.
    3. 생성된 키를 복사합니다.
    4. **Use this private key**를 클릭합니다.

6. Workstation Client를 새로 고침합니다.
7. 앱을 실행합니다.
8. **StationConnector_Security** 페이지를 사용하여 App Data에 개인 키를 추가합니다.
9. 페이지를 새로 고침합니다.

#### Known Bugs and Limitations

* Workstation Connector는 현재 사용자 역할이 **ManagementPrivateKey** 엔티티를 읽고 쓸 수 있어 XAS API를 통해 키가 노출됩니다.
* Workstation Client 명령줄 인수 `log-level=debug`는 터미널에서 시작한 포터블 Client에서는 작동하지 않습니다.

## 2.0.0

### Release date: March 14, 2025

{{% alert color="info" %}}
Mendix Workstation의 첫 번째 사전 릴리스는 Mendix Workstation Pre-Release Program의 조건에 따라 사용할 수 있습니다.
{{% /alert %}}

### New Features

* Mendix Single Sign-On을 통해 Mendix 계정으로 Workstation Management에 로그인할 수 있습니다.
* Mendix 계정별로 스테이션을 관리할 수 있습니다.
* 스테이션별로 디바이스를 관리할 수 있습니다. 스테이션에 연결해야 하는 글로벌 디바이스 관리가 더 이상 없습니다.
* 라디오 버튼으로 스마트 카드 리더(PC/SC 사양)에 대한 감지 및 연결을 활성화하고 비활성화할 수 있습니다.
* Workstation Management에서 Workstation Agent 설치 프로그램 및 Workstation Mendix Connector를 다운로드할 수 있습니다.
* 이제 Workstation Management에서 등록 토큰을 복사하여 붙여넣어 Workstation Agent를 실행하는 컴퓨터를 스테이션에 등록할 수 있습니다.
* Workstation Management에서 컴퓨터 등록을 해제할 수도 있습니다.
* Workstation Management 내에서 로컬 디바이스와의 연결을 테스트할 수 있습니다.
* 액세스 키로 앱과 에이전트 간의 통신을 제한하고 보호할 수 있습니다.

### Improvements

#### Workstation Management

* 미리 채워진 값, 유효성 검사, 도구 설명으로 디바이스 및 앱 설정의 사용자 경험을 단순화했습니다.
* Mendix Platform Design이 이제 사용할 수 있습니다.
* 클라이언트 시리얼 포트(RS232)에 연결된 디바이스와의 연결을 활성화했습니다.
* Serial Port 연결 속성의 포괄적이고 오류 방지 설정을 사용할 수 있습니다.
* Serial Port 메시지 파싱의 포괄적이고 오류 방지 설정을 사용할 수 있습니다.
* 시리얼 포트 디바이스에서 오는 메시지를 시간 및 크기별로 파싱할 수 있습니다.
* 로컬 이더넷 네트워크(TCP/IP)에 연결된 디바이스와의 연결을 사용할 수 있습니다.
* TCP/IP 연결 속성의 포괄적이고 오류 방지 설정을 사용할 수 있습니다.
* TCP/IP 메시지 파싱의 포괄적이고 오류 방지 설정을 사용할 수 있습니다.
* 디바이스를 에뮬레이트하기 위해 클라이언트에서 실행되는 TCP/IP 서버와의 연결을 사용할 수 있습니다.
* TCP/IP Server 디바이스 속성(에뮬레이트된 디바이스)의 포괄적이고 오류 방지 설정을 사용할 수 있습니다.
* 스마트 카드 리더와의 연결을 사용할 수 있습니다.
* 이전 버전의 PCSC Smart Card 인터페이스를 제거했습니다. NFC 버전만 사용됩니다.

#### Workstation Agent

* 사용자 인터페이스를 단순화했습니다.
* 등록 토큰을 사용한 컴퓨터 등록이 내장 온보딩 페이지를 대체했습니다.
* 에이전트에 새 설치 프로그램을 추가했습니다.
* `C:\Program Files`에 모든 사용자를 위해 Workstation Agent를 설치할 수 있습니다.
* Workstation Agent 데이터 파일이 모든 사용자가 사용할 수 있도록 `C:\ProgramData`에 저장됩니다.
* 에이전트를 제거할 때 Workstation Agent 데이터 파일이 올바르게 정리됩니다.
* Windows 명령줄 셸(NSIS 사양)에 의한 자동 설치 및 제거 호출을 지원합니다.
* 단일 컴퓨터에서 Workstation Agent를 실행하는 여러 사용자 세션을 지원합니다.
* Workstation Agent가 리셋되면 클라이언트 컴퓨터의 Workstation Agent 데이터 파일이 삭제됩니다.

#### Workstation Connector

* Connector가 보호 애드온 모듈로 제공됩니다.
* Mendix Client 앱에서 프로그래밍 방식으로 Workstation Agent를 새로 고침할 수 있습니다.
* Workstation Agent에서 새로 고침이 발생하면 앱 클라이언트에 로드된 스테이션 및 디바이스 설정을 새로 고침할 수 있습니다.

### Fixes

* 종료 문자가 설정되지 않은 경우 시리얼 포트 디바이스에서 메시지가 수신되지 않던 문제를 수정했습니다.
* 시리얼 포트와 바이너리 데이터를 교환할 때 발생하던 문제를 수정했습니다.

### Deprecations

* 클라이언트에서 **Connect**, **Disconnect**, **Send Message** 버튼이 제거되고 Workstation Management의 **Local Device Testing**으로 대체되었습니다.
* 로그인 시 Workstation Agent를 시작하고 시스템 트레이에서 시작하는 옵션을 제거했습니다. 이 옵션은 향후 릴리스에서 복원될 예정입니다.
* Output Suffix Wait에 대한 지원은 향후 릴리스에서 제거됩니다.

### Breaking Changes

* 새 Workstation Management에서 스테이션과 디바이스를 수동으로 재설정해야 합니다.
* 클라이언트 컴퓨터에 새 Workstation Agent를 설치해야 합니다.
* Station Connector 및 Interface 모듈을 새 모듈로 교체해야 합니다.
* Workstation Management에서 Device Class 속성이 일시적으로 제거되었습니다. 이 속성은 StationConnector 모듈에서 사용할 때 디바이스 유형을 포함합니다.

### App Upgrade

이전 버전에서 앱을 업그레이드하려면 다음 단계를 수행하세요:

1. 기존 StationConnector 모듈을 제거합니다.
2. 다운로드한 *StationConnector-2.0.0.mxmodule*을 가져옵니다.
3. 기존 StationInterface 모듈을 대체하여 다운로드한 *StationInterface-2.0.0.mpk*를 가져옵니다.
4. Workstation Management에서 다음 단계를 수행합니다:

    1. 스테이션에 설정된 앱 목록에 앱 URL을 추가합니다.
    2. 추가된 앱 옆에서 메뉴 아이콘을 클릭한 다음 **Show Access Key**를 클릭합니다.
    3. 생성된 App Access Key를 복사합니다.

5. Workstation Agent를 새로 고침합니다.
6. 앱을 실행합니다.
7. App Data에서 앱 액세스 키를 입력합니다.
8. 클라이언트를 새로 고침합니다.

### Known Bugs and Limitations

* 스테이션 설정을 사용자 간에 공유할 수 없습니다.
* Connector를 사용하는 앱 인스턴스는 스테이션 설정에 대해 한 명의 사용자만 사용할 수 있습니다.
* Workstation Agent를 제거할 때 Mendix Workstation 폴더가 비워지지만 삭제되지 않습니다.
* 다른 디바이스가 설정되지 않은 경우 스마트 카드 리더가 감지되지 않습니다.
* Workstation Management의 디바이스 테스트 페이지 사이드바가 스케일링 배율이 큰 화면에서 스크롤할 수 없습니다. 전체 페이지를 표시하고 사용하려면 축소하세요.
