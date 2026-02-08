---
title: "Mendix Workstation용 앱 빌드하기"
linktitle: "앱 빌드하기"
url: /mendix-workstation/build-app/
description: "Workstation Connector를 설치하고 Mendix Workstation과 연동하는 앱을 빌드하는 방법을 설명합니다."
weight: 30
---

## 소개

[Workstation Client를 설치](/mendix-workstation/installation/)한 후, 장치에 데이터 또는 명령을 보낼 Mendix 애플리케이션을 새로 빌드하거나 기존 앱을 확장해야 합니다. 이를 위해서는 Mendix Marketplace에서 [Mendix Workstation Connector](https://marketplace.mendix.com/link/component/247460)를 다운로드, 설치 및 구성해야 합니다.

### 연결 작동 방식

Workstation Connector는 Workstation Client에 자신을 인증하여 Client가 Connector를 사용하는 앱을 신뢰하고 연결을 설정할 수 있도록 해야 합니다. 이를 위해 Workstation Connector에서 키 쌍을 생성해야 합니다. 공개 키는 Workstation Management의 해당 앱에 구성해야 합니다. 공개 키를 확인할 수 있도록 Workstation Client 구성이 최신 상태여야 합니다.

Workstation Connector는 필요할 때 Workstation Client를 통해 장치와 연결을 설정합니다. 더 이상 필요하지 않으면 연결이 닫힙니다.

클라이언트 브라우저 또는 탭 인스턴스가 장치에 연결을 시도하면, 이전에 연결된 브라우저 또는 탭 인스턴스는 장치에서 연결이 해제됩니다.

Workstation Connector는 로컬 WebSocket 포트 8094를 사용하여 Workstation Client와 연결합니다. 각 구성된 장치와의 통신에는 별도의 WebSocket을 사용하며, 첫 번째 장치는 포트 8095, 두 번째 장치는 포트 8096 등으로, 사용되는 포트 범위는 포트 *8094*에서 *8094+n*이며 *n*은 보유한 장치 수입니다. Studio Pro에서 로컬 개발 서버의 Runtime 또는 Admin 포트(**App Settings** > **Configurations** > **Server**)가 8094 이상의 포트로 구성되어 있지 않은지 확인하십시오.  

## 전제 조건

* Mendix Workstation 3.0.0
* Mendix Studio Pro 9.24.11 이상

## Workstation Connector 설치 및 구성

Workstation Connector를 설치하고 구성하려면 다음 단계를 수행하십시오:

1. Mendix Studio Pro에서 Workstation 기능으로 확장할 기존 앱을 열거나 새 앱을 생성하십시오.
2. Mendix Marketplace에서 [Mendix Workstation Connector](https://marketplace.mendix.com/link/component/247460)를 가져오십시오.
3. Workstation Management에서 스테이션을 구성하기 위해 다음 단계를 수행하십시오:

    1. [Workstation Management](https://workstation.home.mendix.com/)에서 **Workspaces** 페이지로 이동하십시오.
    2. **Create Workspace**를 클릭하거나, 개요에서 기존 워크스페이스를 선택하십시오.
    3. **Create Station**을 클릭하십시오.
    4. 스테이션 이름을 입력하고, 선택적으로 *Assembly*와 같이 분류할 그룹을 선택하거나 생성하십시오.
    5. **Devices** 섹션에서 장치를 추가하십시오.
    6. **Register Computer**를 클릭하여 컴퓨터를 등록하십시오.
    7. **Download**를 클릭하여 Marketplace의 Workstation Client 목록으로 이동한 후, Windows용 Client 설치 프로그램을 다운로드하고, 설치한 다음, 실행하십시오.
    8. 등록 토큰을 복사하여 [Workstation Client](/mendix-workstation/installation/) 등록 필드에 붙여넣으십시오.

4. 앱을 허용된 앱으로 구성하기 위해 다음 단계를 수행하십시오:

    1. 앱에서 [앱 보안](/refguide/app-security/#user-roles)으로 이동하여 Administrator 사용자 역할에 **StationConnector.Administrator** 모듈 역할을 할당하십시오.
    2. 앱에서 **StationConnector_Security** 페이지를 내비게이션에 추가하거나 **Open page** 버튼에서 연결하십시오. 또는 Administrator 사용자 역할이 사용할 수 있는 페이지에 **SNIPPET_StationAdminPage** 스니펫을 배치하십시오.
    3. 앱을 실행하십시오.
    4. Administrator로 로그인하여 2단계에서 추가한 페이지로 이동하고 표시된 공개 키를 복사하십시오.
    5. [Workstation Management](https://workstation.home.mendix.com/)로 돌아가서 3.2단계에서 생성한 워크스페이스로 이동하십시오.
    6. 워크스페이스의 **Apps** 페이지로 이동하여 **Create App**을 클릭하십시오.
    7. 앱의 URL(예: `http://localhost:8080`, 앱을 로컬에서 실행할 때의 기본값)을 입력하고 복사한 공개 키를 **Public Key** 필드에 붙여넣으십시오.
    8. 다음 중 하나의 작업을 수행하십시오:
        * 모든 스테이션에서 앱을 활성화하려면 **Enable in all stations**를 선택하십시오.
        * 특정 스테이션에서 활성화하려면 **Stations**로 이동하여 해당 스테이션으로 이동하십시오. **Apps** 섹션에서 생성된 앱을 찾을 수 있습니다. 여기서 토글을 눌러 이 스테이션에서만 애플리케이션을 활성화할 수 있습니다.
    9. Workstation Client를 새로고침하십시오.
    10. 선택 사항: 키 쌍을 재생성하려면 Administrator 역할에 **StationConnector.SecurityAdministrator** 모듈 역할을 추가로 할당하십시오. 이렇게 하면 **StationConnector_Security** 페이지에 **Regenerate KeyPair** 버튼이 추가됩니다. 프로덕션 환경에서 이 버튼을 사용할 때는 Management에서 앱을 재구성하고 모든 Workstation Client를 새로고침해야 하는 상황을 피하기 위해 주의하십시오.  

## 앱 관리

이전 섹션에서 생성한 앱은 왼쪽 내비게이션 메뉴를 통해 접근할 수 있는 **Apps** 페이지에서 사용할 수 있습니다. 모든 스테이션 또는 스테이션 그룹에 대해 앱을 활성화하거나 비활성화하려면 앱 목록의 오른쪽 열에 있는 아이콘을 클릭한 다음 **Manage App**을 클릭하십시오.

## 사용자 관리

다른 Workstation Management 사용자를 워크스페이스에 초대하여 구성을 공유하고 협업할 수 있습니다. 이 기능은 Workstation 라이선스가 필요합니다.

사용자를 초대하려면 왼쪽 내비게이션 메뉴에서 **Team**을 클릭한 다음 **Invite Team Member**를 클릭하십시오. 사용자의 이메일 주소를 입력하고 역할을 선택하십시오. 사용 가능한 역할에 대한 자세한 내용은 [워크스페이스 팀 및 협업](/mendix-workstation/installation/#collaboration)을 참조하십시오.

사용자의 역할을 변경하거나 워크스페이스에서 제거하려면 사용자 목록의 오른쪽 열에 있는 점 세 개 아이콘을 클릭하십시오. 이 작업은 Owner 또는 Workspace Admin 역할이 필요합니다.

## 장치 상호 작용을 위한 커스텀 로직 시작하기

이제 Mendix Workstation을 사용할 준비가 되었으므로, 장치와 상호 작용하기 위한 커스텀 로직을 구현할 수 있습니다. 다음 나노플로우(Nanoflow)와 Java 액션은 연결 설정, 메시지 송수신 및 장치 상호 작용 관리에 필수적입니다:

* **GetStation** - Client에 연결된 컴퓨터 정보를 조회합니다.
* **SendMessage** - 연결된 장치에 데이터 또는 명령을 보냅니다. 지원되는 메시지 구문에 대한 자세한 내용은 [파일, 스마트 카드 및 블루투스 장치의 메시지 구문](/mendix-workstation/device-syntax/)을 참조하십시오.
* **SubscribeToMessages** - 장치 메시지를 구독하고 메시지가 수신되면 나노플로우(Nanoflow)를 트리거합니다.
* **SubscribeToErrors** - 장치 연결 오류를 구독하고 오류가 발생하면 나노플로우(Nanoflow)를 트리거합니다.
* **Unsubscribe** - 장치 메시지 또는 오류 구독을 종료합니다.
* **UnsubscribeByContext** - 컨텍스트 객체와 관련된 모든 구독을 종료합니다.
* **UnsubscribeByDevice** - 특정 장치와 관련된 모든 구독을 종료합니다.
* **DisconnectDevice** - 구독을 해제하고 특정 장치와의 연결을 완전히 끊습니다.

이러한 나노플로우(Nanoflow)와 액션은 장치를 Mendix 애플리케이션에 통합하고 특정 요구 사항에 맞게 기능을 맞춤화하기 위한 핵심 구성 요소입니다.

### 도메인 모델(Domain Model) 이해하기

도메인 모델(Domain Model)에는 다음 엔티티(Entity)가 포함됩니다:

* **Station** - 스테이션 이름, 컴퓨터 이름, 워크스페이스 이름 및 클라이언트 버전을 포함합니다(비영속 엔티티).
* **Device** - 스테이션과 연관된 장치 목록으로, 연결에 필요한 장치 이름과 속성을 포함합니다(비영속 엔티티).
* **AppKeyPair** - 앱의 키 쌍을 저장하는 영속 엔티티(Entity)입니다. 공개 키는 Workstation Management의 해당 앱에 입력해야 합니다. 

### 나노플로우(Nanoflow)와 액션 사용하기

다음 섹션에서는 Mendix 애플리케이션에서 나노플로우(Nanoflow)와 Java 액션을 사용하는 방법에 대한 자세한 정보를 제공합니다.

#### GetStation

`GetStation`을 호출하여 Workstation Client를 통해 현재 Client 컴퓨터의 구성을 조회하십시오. `GetStation`은 여러 번 사용할 수 있지만, 처음 한 번만 Workstation Client에 쿼리합니다. 이후 호출은 세션에 로드된 현재 객체를 반환합니다. Workstation Client와의 연결이 작동하지 않으면 `GetStation`은 빈 객체를 반환합니다.

#### SendMessage

`SendMessage`를 호출하여 장치에 메시지를 보내십시오. `SendMessage`에는 현재 나노플로우(Nanoflow)에서 장치의 응답을 기다리는 옵션이 포함되어 있습니다.

#### SubscribeToMessages

`SubscribeToMessages`를 호출하여 장치에서 메시지가 수신될 때 나노플로우(Nanoflow)를 트리거하십시오. `SubscribeToMessages`는 메시지가 수신될 때마다 콜백 나노플로우(Nanoflow)에 전달될 컨텍스트 객체를 지정하는 옵션을 제공합니다.

콜백 나노플로우(Nanoflow)에는 다음 매개변수가 있어야 합니다: 

* `Device` (객체) 
* `Message` (String)
* `Context object` (구독 시 사용한 이름과 동일)

#### SubscribeToErrors

`SubscribeToErrors`를 호출하여 장치 연결 오류 시 나노플로우(Nanoflow)를 트리거하십시오.

콜백 나노플로우(Nanoflow)에는 다음 매개변수가 있어야 합니다: 

* `Device` (객체) 
* `ErrorMessage` (String)
* `ErrorCode` (Integer)
* `Context object` (구독 시 사용한 이름과 동일)

#### Unsubscribe

`Unsubscribe`를 호출하여 구독을 종료하십시오.

#### UnsubscribeByContext

`UnsubscribeByContext`를 호출하여 컨텍스트 객체와 관련된 모든 구독을 종료하십시오.

## 오류 로그

문제가 발생한 경우 Workstation Management, Client 및 Connector에 대한 로그를 확인할 수 있습니다. 로그에 접근하는 방법에 대한 자세한 내용은 [Mendix Workstation 문제 해결](/mendix-workstation/troubleshooting/)을 참조하십시오.
