---
title: "Mendix Workstation 설치 및 구성"
linktitle: "설치 및 구성"
url: /mendix-workstation/installation/
description: "워크스페이스, 스테이션, 장치 설정을 포함한 Mendix Workstation의 빠른 시작 및 고급 설치, 구성 가이드를 제공합니다."
weight: 20
---

## 소개

이 문서에서는 Mendix Workstation의 설치 및 기본 구성에 대해 설명합니다. 초기 설정을 위한 빠른 시작 가이드와 워크스페이스 및 스테이션의 고급 구성에 대한 상세 지침을 제공합니다.

## 빠른 시작 가이드 

이 가이드는 Mendix Workstation의 최소 작동 버전을 구성하고 테스트하는 데 도움이 됩니다. 다음 단계를 따르면 아래 작업을 완료하게 됩니다:

* Workstation Management 내에서 기본 구성을 생성합니다.
* 테스트를 위한 가상 TCP/IP Client 및 Server 장치 쌍을 설정합니다.
* 컴퓨터에 Workstation Client를 설치합니다.
* Workstation Management에서 직접 가상 장치 간의 연결을 확인합니다.

### 워크스페이스 및 스테이션 생성

*스테이션*은 현장의 워크스테이션을 나타냅니다. 하나 이상의 앱 또는 장치에 연결할 수 있습니다. *워크스페이스*는 하나 이상의 스테이션을 그룹화한 것입니다. 예를 들어, 워크스페이스는 동일한 공장 또는 공장 라인에 속하는 모든 스테이션을 그룹화할 수 있습니다.

1. [Mendix Workstation Management](https://workstation.home.mendix.com/)로 이동하여 Mendix 계정으로 로그인하십시오.
2. **Workspace Overview**에서 **Create Workspace**를 클릭하십시오.

    {{< figure src="/attachments/workstation/wks-install1.png" class="no-border" >}}

3. 새 워크스페이스의 이름을 입력한 다음 **Create Workspace**를 클릭하십시오.

    {{< figure src="/attachments/workstation/wks-install2.png" class="no-border" >}}

4. 워크스페이스가 생성된 후, **Stations** 페이지에서 **Create a New Station**을 클릭하십시오.

    {{< figure src="/attachments/workstation/wks-install3.png" class="no-border" >}}

5. 스테이션 이름을 입력한 다음 **Create Station**을 클릭하십시오.

    {{< figure src="/attachments/workstation/wks-install4.png" class="no-border" >}}

6. 선택 사항: Workstation Management에서 스마트 카드 리더기를 감지하지 않도록 하려면 **Station** 뷰에서 **Detect Card Readers** 토글을 **Off**로 설정하십시오.

    {{< figure src="/attachments/workstation/wks-install16.png" class="no-border" >}}

### Workstation Client 다운로드 및 실행

Workstation Client는 장치와 로컬 PC 간의 커넥터입니다. 다음 단계를 수행하여 클라이언트를 다운로드하고 활성화할 수 있습니다:

1. 생성한 스테이션을 열고 **Register Computer**를 클릭하십시오.

    {{< figure src="/attachments/workstation/wks-install5.png" class="no-border" >}}

2. **Computer Registration** 대화 상자에서 **Download**를 클릭하십시오.

    [Workstation Client Windows Installer](https://marketplace.mendix.com/link/component/247448)의 Mendix Marketplace 페이지가 열립니다. 또는 Mendix Marketplace에서 "Workstation Client"를 검색하여 컴포넌트를 찾을 수 있습니다. 위 링크를 통해 또는 검색을 사용하여 [포터블](https://marketplace.mendix.com/link/component/247456) 및 [Linux](https://marketplace.mendix.com/link/component/247459) 버전도 찾을 수 있습니다. 

    {{< figure src="/attachments/workstation/wks-install6.png" class="no-border" >}}

3. 다음 중 하나의 작업을 수행하십시오:

    * Windows의 경우:

        * 컴퓨터에 관리자 권한이 있는 경우 **Download**를 클릭하고 NSIS 설치 패키지 형태의 Workstation Client 설치 프로그램을 실행하십시오. Windows 사용자 계정 컨트롤에서 프롬프트가 나타나면 **Yes**를 클릭하여 Workstation Client 설치를 허용하십시오. 자동 설치의 경우 `/S` 인수를 사용하여 관리자 권한으로 설치 프로그램을 실행할 수도 있습니다(예: `MendixWorkstationX.Y.Z.exe /S`). 기본 설치 폴더는 *C:\Program Files\Mendix Workstation*입니다. 앱 데이터 폴더는 *C:\ProgramData\Mendix Workstation*에서 찾을 수 있습니다. 설치가 완료되면 클라이언트가 자동으로 실행됩니다.
        * 컴퓨터에 관리자 권한이 없는 경우 대신 [Workstation Client Portable](https://marketplace.mendix.com/link/component/247456)을 다운로드하십시오. 모범 사례로서, 포터블 클라이언트를 새 폴더(예: 문서 폴더)에 넣은 다음 .exe 파일을 클릭하여 클라이언트를 실행하십시오.
    
    * Linux의 경우:
        * [Linux](https://marketplace.mendix.com/link/component/247459) 버전의 Client를 다운로드하십시오.
        * 다음 명령을 실행하여 설치하십시오: `sudo apt install ./MendixWorkstation_X.X.X.X_arm64.deb` (*X.X.X.X*를 다운로드한 .deb 패키지의 실제 버전 및 빌드 번호로 대체하십시오)
        * 카드 리더기 종속성을 설치하십시오: `sudo apt install pcscd libcap2-bin`
        * 카드 리더기 종속성을 활성화하십시오: `sudo systemctl enable pcscd --now`
        * 애플리케이션 메뉴 > **Accessories > Mendix Workstation**에서 애플리케이션을 시작하십시오.
        * Bluetooth 지원에는 `CAP_NET_RAW` 권한(원시 네트워크 패킷 접근용)으로 애플리케이션을 시작해야 합니다: `sudo capsh --user=$(whoami) --iab="^cap_net_raw" -- -c "'/opt/Mendix Workstation/Mendix Workstation'"`
    
### 컴퓨터 등록

Workstation Client가 컴퓨터에서 실행되고 있으면, Workstation Management에서 컴퓨터를 등록해야 합니다.

1. [Mendix Workstation Management](https://workstation.home.mendix.com/)로 이동하여 컴퓨터에 등록할 스테이션이 포함된 워크스페이스의 **Station Overview**로 이동하십시오. 
2. 개요에서 스테이션과 관련된 메뉴를 클릭한 다음 **Register computer**를 선택하십시오.
3. **Copy**를 클릭하여 등록 토큰을 클립보드에 복사하십시오.

    {{< figure src="/attachments/workstation/wks-install7.png" class="no-border" >}}

4. Workstation Client를 열고 복사한 등록 토큰을 **Enter your registration token** 필드에 붙여넣으십시오.
5. **Register computer**를 클릭하십시오.

    {{< figure src="/attachments/workstation/wks-install8.png" class="no-border" >}}

6. Workstation Management의 **Computer Registration** 대화 상자에서 **Done**을 클릭하십시오.

    {{< figure src="/attachments/workstation/wks-install9.png" class="no-border" >}}

**Stations** 페이지에 스테이션 상태가 **Computer Registered**로 표시됩니다.

    {{< figure src="/attachments/workstation/wks-install10.png" class="no-border" >}}

### 가상 장치 구성 및 테스트

컴퓨터를 등록한 후, 가상 장치 쌍(장치를 에뮬레이션할 TCP/IP 서버와 에뮬레이션된 장치에 연결할 TCP/IP 클라이언트)을 생성하여 연결을 테스트하십시오.

#### TCP/IP 서버 생성

1. [Mendix Workstation Management](https://workstation.home.mendix.com/)로 이동하십시오.
2. **Station** 페이지에서 **Add Device**를 클릭하십시오.
3. **Device Type**으로 **TCP/IP Server**를 선택한 다음 **Next**를 클릭하십시오.
4. **Device Name** 필드에 **Test Server**를 입력하십시오.
5. **Device Class** 필드에서 클래스를 선택하거나 생성하십시오(예: *Virtual*). 그런 다음 **Next**를 클릭하십시오.
6. **Port** 필드에서 기본값 **1705**를 그대로 두고 **Next**를 클릭하십시오.
7. **Messages** 대화 상자에서 모든 값을 기본값으로 두고 **Add Device**를 클릭하십시오.

    {{< figure src="/attachments/workstation/wks-install12.png" class="no-border" >}}

에뮬레이션된 장치(포트 1705에서 수신 대기하는 로컬 TCP/IP 서버)가 **Station** 페이지의 **Devices** 목록에 추가됩니다.

    {{< figure src="/attachments/workstation/wks-install13.png" class="no-border" >}}

#### TCP/IP 클라이언트 생성

1. [Mendix Workstation Management](https://workstation.home.mendix.com/)로 이동하십시오.
2. **Station** 페이지에서 **Add Device**를 클릭하십시오.
3. **Device Type**으로 **TCP/IP Client**를 선택한 다음 **Next**를 클릭하십시오.
4. **Device Name** 필드에 **Test Client**를 입력한 다음 **Next**를 클릭하십시오.
5. **Device Class** 필드에서 클래스를 선택하거나 생성하십시오(예: *Virtual*). 그런 다음 **Next**를 클릭하십시오.
6. **Host** 및 **Port** 필드에서 기본값 **localhost**와 **1705**를 그대로 두고 **Next**를 클릭하십시오.

    {{< figure src="/attachments/workstation/wks-install14.png" class="no-border" >}}

7. **Messages** 대화 상자에서 모든 값을 기본값으로 두고 **Add Device**를 클릭하십시오.

Workstation Client에서 실행 중인 TCP/IP 서버에 연결하는 데 사용될 장치가 **Station** 페이지의 **Devices** 목록에 추가됩니다.

#### 장치 테스트

서버 및 클라이언트 쌍을 구성한 후, 다음 단계를 수행하여 연결을 테스트하십시오:

1. 현재 워크스페이스의 왼쪽 내비게이션 메뉴에서 **Settings**를 클릭하고, **Enable Local Device Testing** 토글이 **On**으로 설정되어 있는지 확인하십시오.
2. 왼쪽 내비게이션 메뉴에서 **Test Your Station**을 클릭하십시오.

    페이지가 새로고침되고 모든 장치 목록이 표시됩니다. [6단계](/mendix-workstation/installation/#creating-a-workspace-and-station)에서 카드 리더기 감지를 비활성화하지 않았다면, 컴퓨터에서 사용 가능한 감지된 스마트 카드 리더기도 포함됩니다.

3. 웹 브라우저에서 **Test Your Station** 페이지를 연 탭을 복제하십시오.
4. 열린 두 개의 탭을 나란히 볼 수 있도록 배치하십시오.
5. 왼쪽 탭에서 클라이언트 장치(**Test Client**)를 클릭하십시오.
6. 오른쪽 탭에서 서버 장치(**Test Server**)를 클릭하십시오.
7. 왼쪽 탭에서 **Test Client** 장치에 테스트 메시지를 입력한 다음 **Send Message**를 클릭하십시오. 다른 탭의 **Test Server**에서 보낸 메시지가 **Last message received** 필드에 나타납니다.
8. 같은 방법으로 **Test Server**에서 **Test Client** 장치로 메시지를 보내십시오.

{{% alert color="info" %}}
장치 유형에 따라 메시지 구문 요구 사항이 다릅니다. 자세한 내용은 [파일, 스마트 카드 및 블루투스 장치의 메시지 구문](/mendix-workstation/device-syntax/)을 참조하십시오.
{{% /alert %}}

### Workstation Client 종료

**Close** 버튼은 Client 창을 닫지만 애플리케이션을 종료하지는 않으며, 백그라운드에서 계속 실행됩니다. Client를 완전히 종료하려면 Windows 시스템 트레이에서 해당 아이콘을 마우스 오른쪽 버튼으로 클릭하고 **Quit**을 선택하십시오. 이 작업은 [개발자 모드](#developer-mode)가 활성화된 경우에만 사용할 수 있습니다. 또는 Windows 작업 관리자를 통해 Workstation Client 프로세스를 항상 중지할 수 있습니다.

## 고급 구성

### 워크스페이스 앱

Workstation Connector를 통해 Workstation Client에 연결할 수 있는 Mendix 앱을 구성하는 것이 중요합니다. 이를 위해 앱은 워크스페이스 수준에서 관리되며, 워크스페이스의 모든 스테이션, 스테이션 그룹별 또는 개별 스테이션별로 활성화하거나 비활성화할 수 있습니다.

### 워크스페이스 설정

워크스페이스의 **Settings** 페이지로 이동하여 해당 워크스페이스의 모든 스테이션에 적용되는 설정을 구성하십시오.

#### 로그 설정

Workstation Client는 항상 설치된 파일 시스템에 로그를 저장합니다([문제 해결 - Workstation Client](/mendix-workstation/troubleshooting/#workstation-client) 참조). Workstation Management로는 로그가 전송되지 않습니다. 그러나 워크스페이스에 등록된 모든 Workstation Client의 로그 수준과 보존 정책을 구성할 수 있습니다.

##### 로그 수준

Workstation Client가 저장하는 로그의 로그 수준을 구성하십시오.

* Info (기본값) - 정상 작동 및 주요 애플리케이션 이벤트를 기록합니다. 예를 들어, Client가 시작되거나 종료된 시간을 기록합니다.
* Warn - Info 로그와 잠재적 문제 또는 최적이 아닌 상태를 기록합니다. 예를 들어, Client 구성 새로고침 요청이 시간 초과된 경우를 기록합니다.
* Error - Warning 로그와 눈에 보이는 문제(예상대로 작동하지 않는 상태)를 기록합니다. 예를 들어, 장치에 연결하기 위한 포트가 이미 사용 중인 경우를 기록합니다.
* Debug - Error 로그와 개발자 진단을 위한 상세 내부 상태를 기록합니다. 예를 들어, Workstation Management에 대한 요청, 장치와의 통신 등을 기록합니다.

#### 보존 정책

로그 수준이 높아질수록 상세도와 로그 파일 크기가 증가합니다. 이를 제한하기 위해 기본적으로 로그는 크기 10 MB, 보존 기간 7일로 제한됩니다. 

로깅 정책의 필요에 맞게 이 설정을 수정하십시오. 특히 프로덕션 환경에서 사후 문제 해결을 위해 Debug 수준 로그를 유지해야 하는 경우에 유용합니다.

#### 로컬 장치 테스트

기본적으로 Workstation Management는 워크스페이스의 **Test your Station** 페이지에서 Workstation Client에 연결할 수 있는 허용된 앱으로 사전 구성되어 있습니다. 이를 비활성화하려면 **Settings** 페이지의 "Local Device Testing" 탭으로 이동하여 토글을 끄십시오. 

### 워크스페이스 팀 및 협업 {#collaboration}

{{% alert color="info" %}}
워크스페이스에서 다른 사용자와 협업하려면 Workstation 라이선스가 필요합니다.
{{% /alert %}}

Team 페이지에서 워크스페이스 멤버를 초대하고 관리하십시오. Workstation Management에 로그인한 사용자만 이메일로 초대할 수 있습니다. 다음 역할 중 하나를 할당할 수 있습니다:

* Owner - Owner는 워크스페이스를 관리할 수 있는 전체 권한을 가집니다. 다음 작업을 수행할 수 있습니다:

    * 구성 읽기 및 편집
    * 팀 관리
    * 컴퓨터 등록
    * 워크스페이스 설정 관리
    * 워크스페이스 삭제 또는 새 Owner에게 소유권 이전
    
        기본적으로 워크스페이스를 생성한 사용자에게 Owner 역할이 할당됩니다. 워크스페이스 Owner가 회사를 떠난 경우 소유권을 이전하려면 Mendix Support에 문의하십시오. 
    
    * 스테이션 내보내기 및 가져오기(단일 및 일괄)
    * 가져온 스테이션을 기존 워크스페이스 앱에 연결
    * 스테이션 가져오기 시 앱 생성

* Workspace admin - Workspace admin은 Owner와 동일한 방식으로 워크스페이스를 관리할 수 있지만, 워크스페이스를 삭제하거나 소유권을 변경할 수 없습니다.
* Station admin - Station admin은 다음 작업을 수행할 수 있습니다:

    * 스테이션 구성 보기 및 편집
    * 스테이션에 컴퓨터 등록
    * 스테이션 내보내기 및 가져오기(단일 및 일괄)
    * 가져온 스테이션을 기존 워크스페이스 앱에 연결 

* Computer admin - Computer admin은 다음 작업을 수행할 수 있습니다:

    * 편집 없이 구성 보기
    * 스테이션에 컴퓨터 등록
    * 스테이션 내보내기(단일 및 일괄)

* View only - 이 역할은 다음 작업을 수행할 수 있습니다:

    * 편집 없이 구성 보기
    * 스테이션 내보내기(단일 및 일괄)

워크스페이스 Owner를 제외한 모든 멤버는 워크스페이스를 떠날 수 있습니다. 

### 고급 스테이션 설정

#### 스테이션 개발자 모드 {#developer-mode}

개발자 모드는 **Station** 페이지에서 **Enable Developer Mode** 토글을 통해 구성할 수 있습니다. 

*개발자 모드*는 각 스테이션에 대해 기본적으로 활성화되어 있습니다. 이를 통해 Workstation Client 사용자는 다음을 수행할 수 있습니다:

* 시작 메뉴에서 프로그램을 종료할 수 있습니다. 
* Workstation Client의 연결을 해제하여 다른 스테이션에 등록할 수 있습니다.
* 워크스페이스의 로그 수준이 다른 수준으로 설정되어 있더라도 Workstation Client의 **Logs** 창에 표시되는 Debug 수준 실시간 로그에 접근할 수 있습니다.
* 개발자 도구에 접근할 수 있습니다(*Ctrl + Shift + I*를 눌러 사용 가능). 

프로덕션 환경에서는 Workstation 운영자가 실수로 Workstation Client를 종료하거나 연결을 해제하는 것을 방지하기 위해 *개발자 모드*를 비활성화하는 것을 권장합니다. 

#### 장치 설정

##### 카드 리더기

카드 리더기 장치는 **Station** 페이지의 **Devices** 개요에서 별도의 장치로 구성할 수 없습니다. 대신 Workstation Client가 자동으로 감지하여 Client의 장치 목록에 추가합니다. 

카드 리더기 자동 감지는 기본적으로 활성화되어 있습니다. 이 설정은 **Station** 페이지에서 **Detect Card Readers** 토글을 통해 구성할 수 있습니다. 

카드 리더기와의 통신 방법에 대한 자세한 설명은 [메시지 구문 - 카드 리더기](/mendix-workstation/device-syntax/#card-readers)를 참조하십시오.

##### 파일 장치(File Device)

이 섹션에서는 파일 장치의 구성을 설명합니다. 파일 장치와의 통신 방법에 대한 자세한 설명은 [메시지 구문 - 파일 장치](/mendix-workstation/device-syntax/#file-device)를 참조하십시오.

###### 허용 폴더 구성

*허용 폴더* 기능은 환경 변수를 통한 유연한 경로 구성을 지원하여 Windows 및 Unix 기반 시스템 모두에 대한 크로스 플랫폼 호환성을 제공합니다. 이 기능을 통해 관리자는 Workstation Client가 작업을 수행할 수 있는 허용 폴더를 정의할 수 있습니다. 

###### 환경 변수 지원

시스템은 Workstation Management 인터페이스 내의 허용 폴더 구성에서 환경 변수를 허용합니다. Windows 및 Unix 구문 형식 모두 모든 플랫폼에서 지원되므로, Unix 시스템에서 Windows 스타일 환경 변수를 사용하거나 그 반대로 사용할 수 있습니다.

###### 지원되는 경로 형식

Workstation Client가 실행되는 운영 체제와 관계없이 Windows 및 Unix 스타일 경로를 사용할 수 있습니다. 다음 예제는 사용 가능한 다양한 구문 옵션을 보여줍니다:

###### 기본 예제

* **백슬래시를 사용한 Windows 스타일**: `%AppData%\test`
* **슬래시를 사용한 Windows 스타일**: `%AppData%/test`
* **백슬래시를 사용한 Unix 스타일**: `$EnvVar\test`
* **슬래시를 사용한 Unix 스타일**: `$EnvVar/test`

###### 허용되는 작업

관리자는 다음 권한 중 하나 또는 조합을 허용하도록 선택할 수 있습니다: 변경 이벤트 구독, 파일 읽기, 파일 쓰기.

##### Bluetooth 장치

ATT 프로토콜을 사용하는 Bluetooth LE (BLE) 장치를 OS의 장치 관리자에 표시된 정확한 장치 이름을 입력하여 간단히 추가하십시오. 

Bluetooth 장치와의 통신 방법에 대한 자세한 설명은 [메시지 구문 - Bluetooth](/mendix-workstation/device-syntax/#bluetooth)를 참조하십시오.
