---
title: "MS Windows: Mendix 앱 업데이트"
url: /developerportal/deploy/updating-a-mendix-application/
weight: 20
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 소개

Windows 서버의 Mendix 애플리케이션은 Mendix Service Console을 사용하여 업데이트할 수 있습니다. 서버 업데이트를 시작하기 전에 서버에서 접근 가능한 버전이 지정된 배포 아카이브(*.mda* 파일)가 있고, 동일한 버전의 서버 배포가 설치되어 있거나 서버에서 설치 패키지로 사용 가능한지 확인해야 합니다.

Service Console은 프로젝트 파일의 백업을 생성하므로 이전 배포를 복원할 수 있습니다.

{{% alert color="info" %}}
모든 업데이트 전에 데이터 및 업로드된 파일의 백업을 만드는 것이 좋습니다. Mendix Service Console은 이를 대신 수행하지 않습니다.
{{% /alert %}}

## Update App 버튼 사용

1. 앱이 현재 실행 중인 경우 먼저 중지하십시오. 그렇지 않으면 업데이트할 수 없습니다.

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/updating-a-mendix-application/1_stop_service.png" alt="Step 1, Stop the app" class="no-border" >}}

2. **Update app** 버튼을 클릭하여 애플리케이션을 업데이트할 수 있습니다.

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/updating-a-mendix-application/2_click_update.png" alt="Step 2, Start the update process" class="no-border" >}}

3. 나타나는 **Update App** 팝업에는 현재 활성 앱에 대한 정보가 표시됩니다. **App version**은 이 서버에서 현재 실행 중인 배포 패키지의 릴리스 번호를 표시합니다. **Mendix server version**은 앱에서 사용하는 서버 배포 버전을 표시하며, 이는 배포 패키지가 생성된 Studio Pro 버전과 동일합니다.

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/updating-a-mendix-application/3_update_app.png" alt="Step 3, Release details and overview of all server versions" class="no-border" >}}

4. 애플리케이션을 업데이트하려면 **Update app**을 클릭하십시오. 새 배포 아카이브(.mda)를 선택하고 **Open**을 클릭하십시오. 업데이트 프로세스가 즉시 시작됩니다.

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/updating-a-mendix-application/4_browse_mda.png" alt="Step 4, Choose the latest .mda package" class="no-border" >}}

이 프로세스는 프로젝트 소프트웨어의 새 버전을 구성된 위치에 복사합니다. 모든 모델이 추출되고, `mxclientsystem` 폴더에 대한 심볼릭 링크가 자동으로 생성되어 IIS에서 추가 구성 없이 JavaScript 라이브러리를 쉽게 포함할 수 있습니다.

## Mendix Runtime 버전 업데이트

1. Mendix 애플리케이션 버전을 업데이트한 후 Service Console에 `(missing)` 메시지가 표시될 수 있습니다. 이는 필요한 서버 배포가 서버에 설치되어 있지 않음을 의미합니다.

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/updating-a-mendix-application/update_server_missing.png" alt="Step 5, a missing Runtime version" class="no-border" >}}

2. 필요한 서버 배포를 설치하는 방법은 두 가지가 있습니다:

    1. 온라인 상태이고 Mendix Marketplace에 접근할 수 있는 경우 **Download server**를 클릭하면 올바른 서버 배포가 가져오기되어 설치됩니다. 그러면 다음이 표시됩니다

        {{< figure src="/attachments/deployment/on-premises-design/ms-windows/updating-a-mendix-application/update_server_download.png" class="no-border" >}}

    2. 오프라인이거나 자동 다운로드가 실패하는 경우 **Add Server**를 클릭하고 필요한 서버 배포(*.tar.gz*)를 선택하십시오. 서버 배포는 [Mendix Marketplace](https://marketplace.mendix.com/link/studiopro/)의 특정 Mendix Studio Pro 버전의 **Related Downloads**에서 찾을 수 있습니다. 서버 배포는 *tar.gz* 파일입니다. Service Console은 서버 배포를 다른 서버 배포와 동일한 폴더에 추출합니다.

    서버 배포가 업데이트된 후 새 프로젝트와 Mendix Runtime 버전을 사용하여 서비스를 시작할 수 있습니다.

    {{< figure src="/attachments/deployment/on-premises-design/ms-windows/updating-a-mendix-application/update_server_select.png" alt="Step 6, Choose the correct server distribution (.tar.gz)" class="no-border" >}}

### Mendix 서버 배포 위치

Mendix Service Console의 Preferences에서 모든 애플리케이션과 서버 배포의 기본 디렉토리를 구성할 수 있습니다. `/Servers` 폴더에서 설치된 플랫폼 버전을 찾을 수 있습니다. 이 폴더는 Service Console에서 구성된 기본 경로에 직접 위치합니다.

{{< figure src="/attachments/deployment/on-premises-design/ms-windows/updating-a-mendix-application/18580698.png" class="no-border" >}}

다음과 같은 경로여야 합니다:

```bash
D:\Mendix\MyApplications\Servers
```

{{% alert color="info" %}}
Service Account로 구성된 사용자는 이 전체 서버 폴더에 대한 읽기 및 실행 권한을 가져야 합니다. 특정 서버 배포에만 접근 권한을 부여할 수 있지만, 그럴 경우 플랫폼 버전 업데이트 후마다 폴더 접근 권한을 업데이트해야 합니다.
{{% /alert %}}

## 애플리케이션 시작

업데이트 후 앱 서비스를 다시 시작하는 것을 잊지 마십시오!

## 더 읽기

* [SQL Server 데이터베이스 복원](/developerportal/deploy/restoring-a-sql-server-database/)
* [SQL Server 문제 해결](/developerportal/deploy/troubleshooting-sql-server/)
* [Mendix SQL 유지 관리 계획](/developerportal/deploy/mendix-sql-maintenance-plans/)
* [새 SQL Server 데이터베이스 설정](/developerportal/deploy/setting-up-a-new-sql-server-database/)
* [SQL Server 사용자 설정](/developerportal/deploy/setting-up-a-sql-server-user/)
* [온프레미스 설치 보안 체크리스트](/developerportal/deploy/security-checklist-for-your-on-premises-installation/)
* [Windows에서 Mendix - Microsoft SQL Server](/developerportal/deploy/mendix-on-windows-microsoft-sql-server/)
* [Microsoft Windows에서 Mendix 배포](/developerportal/deploy/deploy-mendix-on-microsoft-windows/)
* [Linux 배포](/developerportal/deploy/linux/)
