---
title: "Mendix Workstation 문제 해결"
linktitle: "문제 해결"
url: /mendix-workstation/troubleshooting/
description: "Mendix Workstation의 잠재적 문제를 해결하는 방법을 설명합니다."
weight: 40
---

## 소개

Workstation Management, Connector 또는 Client에서 문제가 발생한 경우, 다음 문제 해결 팁을 활용하여 해결하십시오.

## Workstation Management

### 연결 해제된 Workstation Client의 스테이션 상태가 여전히 "Computer Registered"인 경우

이 문제는 Workstation Client가 Workstation Management와 연결을 설정할 수 없을 때 발생할 수 있습니다. 예를 들어, 컴퓨터가 네트워크에 연결되어 있지 않은 경우입니다. 

#### 해결 방법

Workstation Management에서 스테이션을 수동으로 등록 해제하십시오.

### 워크스페이스 Owner 계정 비활성화 

워크스페이스 Owner 계정이 비활성화되었고, Owner가 다른 워크스페이스 멤버에게 소유권을 이전하지 않은 경우입니다.

워크스페이스 소유권을 이전하려면 Mendix Support에 문의하십시오.

## Workstation Client

기본적으로 Client는 컴퓨터에 최대 10 MB 크기의 최근 7일 동안의 로그를 로컬에 저장합니다. Client UI의 **Logs** 버튼을 클릭한 다음, 확인하려는 로그 수준을 선택하여 로그에 접근하십시오. 브라우저 개발자 도구(**Ctrl + Shift + I**)를 통해 Client 콘솔을 열면 Client UI에서 발생한 오류에 대한 추가 정보를 확인할 수 있습니다.

로그 파일은 Client의 앱 데이터 폴더에서 날짜별로도 확인할 수 있습니다. Windows에서 **Win + R**을 누르고 다음을 입력하십시오:

* 모든 사용자용 설치 프로그램으로 Client를 설치한 경우: `%ProgramData%\Mendix Workstation\logs`
* 포터블 버전을 사용하는 경우: `%AppData%\Mendix Workstation\logs`

Linux에서 *Mendix Workstation/logs* 폴더는 `$XDG_CONFIG_HOME` 또는 `~/.config`에 위치합니다.

**실시간 로그**는 두 가지 방법으로 확인할 수 있습니다:

* Workstation Client를 시작하십시오. 오른쪽 상단의 점 세 개 아이콘을 클릭한 다음 **Logs**를 클릭하십시오. Debug 수준 로그는 *개발자 모드*에서만 사용할 수 있습니다.
* PowerShell에서 Workstation Client를 시작하십시오: `start "C:\Program Files\Mendix Workstation\Mendix Workstation.exe" -ArgumentList "--log-level=debug" -wait`.

### 등록 토큰을 파싱할 수 없는 경우

Client에서 다음과 같은 오류가 표시됩니다: *Registration token could not be parsed. Please enter another token!*

#### 원인 

잘못된 형식의 등록 토큰을 입력했습니다. 

#### 해결 방법

Workstation Management에 표시된 대로 추가 문자 없이 토큰을 정확하게 복사하여 붙여넣었는지 확인하십시오. 문제가 지속되면 새 등록 토큰을 생성하십시오.

### Workstation Management에서 등록 토큰이 거부된 경우

Client에서 다음과 같은 오류가 표시됩니다: *Registration token denied by Workstation Management. Please use another token*. 

#### 원인 

등록 토큰이 더 이상 유효하지 않습니다. 다음과 같은 경우에 발생할 수 있습니다:

* 토큰이 1시간 후에 만료된 경우
* Workstation Management에서 토큰이 재생성된 경우(**Refresh** 버튼을 사용하거나 등록 창을 다시 열어서)
* 토큰이 이미 다른 Workstation Client에서 사용된 경우

#### 해결 방법

Workstation Management에서 스테이션 상태가 여전히 *No computer registered*인 경우 토큰을 재생성하고 다시 시도하십시오. 그렇지 않으면 올바른 컴퓨터와 Client가 해당 스테이션에 등록되어 있는지 확인하고, 그렇지 않은 경우 등록을 해제하십시오. 

### HTTPError: Request failed with status code 503 Service Temporarily Unavailable

Client에서 다음과 같은 오류가 표시됩니다: *Station could not be synchronized with Management. Error invoking remote method 'refresh-station-config': HTTPError: Request failed with status code 503 Service Temporarily Unavailable: GET.*

#### 원인

Workstation Management가 일시적으로 오프라인 상태입니다. 대부분 유지 보수로 인한 것입니다. 

#### 해결 방법 

[Mendix Status Page](https://status.mendix.com/)를 확인하여 Workstation Management에 대한 예정된 유지 보수가 있는지 확인하십시오. 유지 보수 메시지가 없고 몇 분 후에도 문제가 지속되면 상태 페이지를 통해 인시던트를 보고하십시오.

### TimeoutError: Request timed out

Client에서 다음과 같은 오류가 표시됩니다: *Station could not be synchronized with Management. Error invoking remote method 'refresh-station-config': TimeoutError: Request timed out: GET [yourStationURL]*

#### 원인

Client의 Workstation Management에 대한 요청이 Workstation Management 서버로 전달되지 않아 시간이 초과됩니다. 이 문제는 보호된 기업 IT 환경에서 흔히 발생하는 것처럼 네트워크 트래픽이 프록시 서버를 통해 라우팅되고 해당 프록시 서버가 오프라인 상태인 경우에 발생할 수 있습니다.  

#### 해결 방법 

컴퓨터의 네트워크 트래픽이 프록시 서버를 통해 라우팅되는지 확인하고 프록시 설정을 적절히 구성하십시오. [네트워크 구성](/mendix-workstation/prerequisites/#network-configuration)을 참조하십시오.

### Workstation Management URL을 확인할 수 없는 경우

Client에서 다음과 같은 오류가 표시됩니다: *Station could not be synchronized with Management. Error invoking remote method 'refresh-station-config': Error: Workstation Management URL cannot be resolved. This might be an DNS issue or the host is offline.*

#### 원인

Client가 Workstation Management의 URL을 확인할 수 없습니다. 여러 원인이 있을 수 있으며, 가장 일반적으로 Workstation Client를 실행하는 컴퓨터에 인터넷 연결이 없는 경우입니다. 

#### 해결 방법 

먼저 인터넷 연결이 작동하는지 확인하십시오. 그런 다음 브라우저에서 [Workstation Management](https://workstation.home.mendix.com/)에 접근할 수 있는지 확인하십시오. 브라우저에서 해당 주소를 확인할 수 없는 경우, DNS 서버 또는 구성에 문제가 있을 수 있습니다. Windows에서는 명령 프롬프트에서 `ipconfig`를 입력하여 이더넷 또는 무선 LAN 어댑터의 DNS 설정을 확인하십시오. `nslookup www.mendix.com` 명령은 DNS 서버가 Mendix 도메인에 대해 확인한 IP 주소에 대한 추가 정보를 제공합니다. 

## Workstation Connector

Connector 로그는 로컬 개발 시 Studio Pro 콘솔에서 확인하거나 실행 중인 환경의 환경 로그에서 확인할 수 있습니다. Connector는 대부분의 작업을 나노플로우(Nanoflow)에서 클라이언트 측에서 수행하므로, 브라우저 콘솔에서 로컬 로그를 검사할 수도 있습니다.

### Workstation Client가 3초 이내에 응답하지 않은 경우. 연결 실패.

**StationConnector.GetStation** 나노플로우(Nanoflow)가 Workstation Client에 연결하지 못하면, 이 오류가 브라우저 콘솔과 Studio Pro 콘솔의 **Client_Nanoflow** 로그 노드에 표시됩니다.  

#### 원인

Client와 Connector 간의 연결을 설정할 수 없습니다. Workstation Client가 로컬 컴퓨터에서 찾을 수 없거나, 현재 애플리케이션이 연결을 설정할 수 있는 허용되지 않은 경우에 발생합니다. 

#### 해결 방법

* Workstation Client가 실행 중이며 StationConnector를 통해 연결을 시도하는 브라우저와 동일한 컴퓨터에 등록되어 있는지 확인하십시오.
* Client가 올바른 워크스페이스에 등록되어 있는지 Client UI에 표시된 워크스페이스 이름과 ID를 Workstation Management의 워크스페이스와 비교하여 확인하십시오.
* 연결을 시도하는 애플리케이션이 워크스페이스 및 스테이션에서 허용된 앱으로 올바르게 구성되어 있는지 확인하십시오. 이를 확인하려면, 워크스페이스의 **Apps** 섹션에 애플리케이션(예: `http://localhost:8080`)이 추가되어 있는지 확인하십시오. 앱이 추가되어 있는 경우, 구성된 워크스페이스 앱의 공개 키가 Connector를 사용하는 앱에 표시된 공개 키와 일치하는지 확인하십시오. 일치하지 않으면, 워크스페이스 앱의 공개 키 값을 앱에 표시된 최신 값으로 업데이트하십시오. 그런 다음, 해당 워크스페이스의 스테이션 상세 페이지로 이동하여 앱이 스테이션 구성에서 허용된 앱으로도 활성화되어 있는지 확인하십시오. Workstation Management에서 변경 사항을 적용한 후에는 항상 Workstation Client에서 **Refresh** 버튼을 클릭하십시오.  

### Client가 서버보다 앞선 시간으로 세션을 요청한 경우

이것은 **StationConnector - GetWebsocketSession** 로그 노드에 대한 Mendix 런타임 경고 로그입니다. 

#### 원인 

보안상의 이유로, Connector는 Workstation Client를 실행하는 컴퓨터의 시간이 앱을 호스팅하는 Mendix 런타임 서버의 시간과 24시간 이내인 경우에만 세션 설정을 허용합니다. 

#### 해결 방법

Workstation Client를 실행하는 컴퓨터의 시간을 Mendix 런타임 서버의 24시간 이내로 설정하십시오. 이것이 불가능한 경우, **StationConnector.GetWebsocketsSession** 마이크로플로우(Microflow)에서 이 동작을 커스터마이징할 수 있지만, 모듈을 새 버전으로 업데이트할 때 이 커스터마이징을 유지해야 합니다.

### 메시지를 보낸 후 컨텍스트 엔티티(Entity)가 업데이트되지 않는 경우

페이지의 컨텍스트 엔티티(Entity)가 메시지를 보낸 후 업데이트되지 않습니다. 특히, 처음으로 메시지를 보낸 직후 컨텍스트 엔티티(Entity)를 수정하면 항상 작동하지 않을 수 있습니다.

#### 원인

처음으로 메시지를 보내면 **Connected** 상태가 **true**로 설정되고 장치에 대한 커밋이 트리거됩니다. 이로 인해 장치와 장치 데이터 소스 내에 중첩된 모든 데이터 소스가 새로고침됩니다. 이러한 데이터 소스 중 일부는 업데이트된 엔티티(Entity)를 표시하는 대신 새 빈 엔티티(Entity)를 생성할 수 있습니다. 

#### 해결 방법

장치 데이터 소스 내에 중첩된 모든 데이터 소스가 싱글톤(Singleton, GetCreate라고도 함) 패턴을 따르도록 하십시오. 이 패턴에서는 엔티티(Entity)가 존재하지 않으면 생성하고, 존재하면 조회합니다.
