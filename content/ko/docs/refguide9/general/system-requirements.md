---
title: "시스템 요구 사항"
url: /refguide9/system-requirements/
weight: 10
description: "Mendix Platform 사용을 위한 시스템 요구 사항을 안내합니다."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

이 문서에서는 Mendix Platform의 다양한 부분에 대한 시스템 요구 사항을 안내합니다.

## Mendix Studio Pro {#sp}

Mendix Studio Pro의 요구 사항은 다음 섹션에 나열되어 있습니다.

### 소프트웨어 사양

Mendix [Studio Pro](/refguide9/modeling/) 버전 9는 Windows 10 릴리스 1809 이상의 64비트 버전에서 지원됩니다. Windows 11도 포함됩니다. Mendix Studio Pro 9.6.5부터의 MTS 버전은 [Parallels 17](https://www.parallels.com/) 및 Windows 11이 필요한 M1과 같은 Apple Silicon Mac에서 실행이 활성화되고 테스트되었습니다.

다음 프레임워크가 필요합니다. 필요한 경우 Studio Pro 설치 프로그램이 자동으로 설치합니다:

* Microsoft .NET Desktop Runtime (x64) 및 모든 해당 Windows 보안 패치

    | Studio Pro 9.0.0 - 9.24.33 | Studio Pro 9.24.34 이상 |
    | --- | --- |
    | .NET 6 Desktop Runtime | .NET 8 Desktop Runtime |
    
* Microsoft Visual C++ 2015 Redistributable Package (x64)
* Microsoft Visual C++ 2019 Redistributable Package (x64)
* Java Developer Kit (JDK) 버전 11, 17 또는 21 - 올바른 Java 버전이 컴퓨터에 이미 설치되어 있지 않은 경우 설치될 버전은 Studio Pro 버전에 따라 다릅니다
    * AdoptOpenJDK 11 (x64) – Mendix 9.13 이하
    * Adoptium Temurin JDK 11 (x64) – Mendix 9.14~9.17
    * Eclipse Temurin JDK 11 (x64) – Mendix 9.18.1~9.18.15
    * Eclipse Temurin JDK 17 (x64) – Mendix 9.18.16 이상
* Git for Windows (x64)
* Mendix Native Mobile Builder
* Microsoft Edge WebView2 Evergreen Runtime (x64)
* Studio Pro 9.24 이상: Gradle 버전 8.5 이상(Java 버전이 11 또는 17인 경우 Gradle 버전 7.6 이상도 작동) - Gradle이 컴퓨터에 아직 설치되지 않은 경우 Mendix가 Gradle 버전 8.5를 설치합니다

ARM64 장치(예: M1 Mac)에서 Studio Pro를 실행하는 경우, 위에 나열된 x64 버전 외에 다음 버전의 .NET이 필요합니다:

| Studio Pro 9.0.0 - 9.24.33 | Studio Pro 9.24.34 이상 |
| --- | --- |
| .NET 6 Desktop Runtime (arm64) | .NET 8 Desktop Runtime (arm64) |

{{% alert color="info" %}}
Studio Pro의 **편집** > **환경 설정** 메뉴 항목에서 빌드 및 로컬 실행에 사용할 JDK를 선택할 수 있습니다.
{{% /alert %}}

{{% alert color="warning" %}}
Studio Pro에 내장된 데이터베이스 뷰어([개발 데이터베이스 공유 방법](/howto9/data-models/sharing-the-development-database/)에 설명됨)는 JDK 11.06 또는 11.07에서 작동하지 않는 제한이 있습니다.
{{% /alert %}}

### 하드웨어 사양

Mendix Studio Pro는 다음 추가 요구 사항과 함께 [Windows 10 64비트 실행을 위한 최소 요구 사항](https://www.microsoft.com/en-gb/windows/windows-10-specifications#primaryR2)을 충족하는 모든 컴퓨터에서 실행됩니다:

* **디스크 공간** – Studio Pro 설치에 2GB의 디스크 공간이 필요하며, 생성하는 각 앱의 크기는 기능에 따라 다르지만 최소 약 150MB가 필요합니다.
* **RAM** – 4GB
* **디스플레이 해상도** – 1080p (1920x1080)

### 방화벽 설정 {#firewall-settings}

Studio Pro가 작동하려면 다음 URL에 접근해야 합니다. 방화벽이 이를 차단하는 경우 허용 목록에 추가해야 합니다:

* `*.mendix.com`
* `*.mendixcloud.com`
* `*.teamserver.sprintr.com`

Mendix 앱을 실행하기 위해 Mendix Studio Pro는 기본적으로 다음 포트를 사용합니다. 방화벽이 이를 차단하는 경우 열어야 합니다:

* 8080: Runtime 포트
* 8083: 모바일 패키저
* 8090: 관리자 포트
* 8100: 로그인 포트(버전 9.18 이상)

포트 및 Studio Pro의 기본 포트 수정에 대한 자세한 내용은 [구성](/refguide9/configuration/) 및 *네이티브 앱 전제 조건 및 문제 해결*의 [일반적인 모바일 문제 해결](/refguide9/mobile/getting-started-with-mobile/prerequisites/#troubleshooting) 섹션을 참조하십시오.

### TortoiseSVN

TortoiseSVN을 Studio Pro와 함께 사용하려면 [TortoiseSVN](https://tortoisesvn.net/) 웹사이트에서 최신 버전을 다운로드하십시오.

{{% alert color="warning" %}}
Mendix Studio Pro는 Subversion 1.9 작업 사본을 사용합니다. 이전 버전의 Mendix Desktop Modeler는 Subversion 1.7 작업 사본을 사용했습니다. 이 작업 사본 버전들은 **호환되지 않습니다**.<br />
<br />
항상 앱 모델에 맞는 TortoiseSVN 버전을 사용하십시오. Mendix 7.x의 로컬 모델을 최신 버전의 TortoiseSVN으로 열면 **더 이상 Mendix에서 열 수 없습니다**.
{{% /alert %}}

### 파일 위치

활발한 개발 및 애플리케이션 로컬 실행을 위해, 앱 폴더는 로컬 드라이브(예: C:) 또는 [Windows 드라이브 문자](https://support.microsoft.com/en-us/windows/map-a-network-drive-in-windows-10-29ce55d1-34e3-a7e2-4801-131475f9557d)에 매핑된 네트워크 폴더에 있어야 합니다.

### 지원되는 Git 서비스 제공자 {#supported-providers}

Git 서비스 제공자는 커밋 및 리포지토리와 관련된 크기 제한이 있습니다.

Studio Pro는 어떤 제공자에 대해서도 Large File Storage(LFS)를 지원하지 않습니다.

아래에 알려진 제한 사항 목록이 있지만, 특정 서비스 제공자를 사용하기 전에 해당 웹사이트에서 최신 제한 사항을 확인하는 것이 좋습니다.

| 제공자 | 리포지토리 크기 제한 | Push 제한 | 비-LFS 파일 크기 제한 | LFS 파일 크기 제한 |
| ----------- | ------------------------------------------ | --------------- | ----------------------- | ------------------- |
| GitHub      | 5 GB 경고, 100 GB 이론적 제한 | 정보 없음 | 100 MB¹ (50 MB 경고) | 5 GB |
| GitLab      | 5 GB (무료) 및 250 GB (엔터프라이즈) | 5 GB | 없음 | 5 GB |
| Azure Repos | 250 GB | 5 GB | 없음 | 50 GB |
| Bitbucket   | 4 GB | 3.5 GB | 없음 | 10 + 100 GB |

¹ .mpr 파일이 제한을 초과하면 파일 크기 제한이 있는 GitHub 및 기타 제공자와 작업할 수 없습니다.

#### Azure Repos 및 Azure DevOps Server

Microsoft의 [Azure Repos](https://azure.microsoft.com/en-us/services/devops/repos/) 호스팅 Git 서비스와 자체 인프라에 Git 리포지토리를 호스팅하는 온프레미스 솔루션인 Azure DevOps Server(이전의 Team Foundation Server) 모두를 지원합니다.

사용자 계정의 PAT를 얻으려면 Microsoft 문서의 [개인용 액세스 토큰 사용](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=preview-page) 지침을 참조하십시오.

토큰에 `Code (full)` 권한이 필요합니다.

#### GitHub

무료 GitHub.com 클라우드 호스팅 서비스 및 GitHub Enterprise(호스팅(Enterprise Cloud)과 온프레미스(Enterprise Server) 모두)를 포함한 GitHub 호스팅 솔루션을 지원합니다.

사용자 계정의 PAT를 얻으려면 GitHub 문서의 [개인용 액세스 토큰 만들기](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) 지침을 참조하십시오.

토큰에 `repo` 권한이 필요합니다.

#### GitLab

GitLab.com, GitLab Community Edition 및 GitLab Enterprise Edition을 포함한 GitLab 서비스의 모든 티어를 지원합니다.

사용자 계정의 PAT를 얻으려면 GitLab 문서의 [개인용 액세스 토큰](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) 지침을 참조하십시오.

토큰에 `write_repository` 권한이 필요합니다.

#### Bitbucket

Bitbucket.org, Bitbucket Server 및 Bitbucket Data Center 온프레미스 솔루션을 포함한 Atlassian Bitbucket 서비스의 모든 티어를 지원합니다.

Bitbucket.org에서 개인용 액세스 토큰은 앱 비밀번호(App Password)라고 합니다.

Bitbucket.org 계정에 앱 비밀번호를 설정하려면 [앱 비밀번호](https://support.atlassian.com/bitbucket-cloud/docs/app-passwords/) 지침을 참조하십시오.

반면에 Bitbucket Server 및 Bitbucket Data Center는 여전히 "개인용 액세스 토큰"이라는 용어를 사용합니다. 개인용 액세스 토큰을 설정하려면 [개인용 액세스 토큰](https://confluence.atlassian.com/bitbucketserver/personal-access-tokens-939515499.html) 지침을 참조하십시오.

두 경우 모두 `repository write` 권한이 필요합니다.

### 그래픽 카드

Intel® UHD Graphics 630 그래픽 프로세서를 사용하는 경우, [드라이버 버전 27.20.100.9664](https://www.catalog.update.microsoft.com/Search.aspx?q=Intel(R)+UHD+Graphics+630) 이상을 사용하고 있는지 확인하십시오.

## Team Server {#ts}

[Team Server](/developerportal/repository/team-server/)는 Subversion을 사용하여 구현되며, Studio Pro는 HTTPS 프로토콜을 사용하여 해당 서버와 통신합니다. Studio Pro 내에서 Team Server에 접근하려면 해당 위치의 네트워크에 다음 설정이 필요합니다:

* HTTPS 포트(TCP 443)가 열려 있어야 합니다
* HTTP 포트(TCP 80)가 열려 있어야 합니다
* 프록시 서버(있는 경우)에서 WebDAV(HTTP 프로토콜 내의 동사)가 활성화되어 있어야 합니다

## Cloud Foundry

[Mendix Cloud Foundry 빌드팩](https://github.com/mendix/cf-mendix-buildpack)은 Cloud Foundry 버전 v9 이상을 지원합니다.

## Docker

[Mendix Docker 빌드팩](https://github.com/mendix/docker-mendix-buildpack)은 Docker 버전 18.09.0 이상을 지원합니다.

### Kubernetes

Mendix Docker 빌드팩은 다음 Kubernetes 버전을 지원합니다:

* Kubernetes 버전 v1.12 이상
* Red Hat OpenShift v3.11 및 v4.2 이상

## 서버

### 운영 체제 {#server-os}

* Microsoft Windows Server 2008 SP2 이상
* 다음 Unix 계열 운영 체제:
    * [Debian OldOldStable (LTS)](https://wiki.debian.org/DebianOldOldStable), [Debian OldStable, Debian Stable](https://wiki.debian.org/DebianReleases#Current_Releases.2FRepositories)

### 웹 서버

* Microsoft Internet Information Services 7 이상
* Nginx
* Apache

### Java {#java}

서버에서 Mendix를 실행하는 경우 Java Runtime Environment(JRE) 11, 17 또는 21이 필요합니다. Adoptium에서 Eclipse Temurin OpenJDK 배포판을 다운로드하려면 [Eclipse Temurin™ 최신 릴리스](https://adoptium.net/temurin/releases)를 참조하십시오. 상용 Oracle 배포판을 다운로드하려면 [Java SE 다운로드](https://www.oracle.com/technetwork/java/javase/downloads/index.html)를 참조하십시오.

{{% alert color="warning" %}}
JDK 17과의 호환성은 Studio Pro 버전 9.24.19부터 사용할 수 있습니다. Java 21과의 호환성은 Studio Pro 버전 9.24.22부터 사용할 수 있습니다. Mendix는 Java 21과 호환되는 Studio Pro 버전으로 전환하는 것을 권장합니다.
{{% /alert %}}

{{% alert color="info" %}}
Java 7 이후 특정 양의 데이터로 웹 서비스를 사용할 때 타임아웃이 발생하는 이슈가 있습니다. VM 매개변수 `-Djava.net.preferIPv4Stack=true`를 추가하여 이 문제를 해결할 수 있습니다. Mendix Studio Pro는 이를 자동으로 수행하지만, Windows 서버에서 온프레미스로 Mendix를 실행하는 경우 직접 수행해야 합니다. 이 이슈에 대한 자세한 내용은 [Java 7의 가능한 버그](https://community.oracle.com/tech/developers/discussion/comment/9987709)를 참조하십시오.
{{% /alert %}}

## 데이터베이스 {#databases}

Mendix는 데이터베이스 벤더의 가장 최근에 패치된 데이터베이스 서버 버전을 지원하려고 합니다. 벤더가 새 버전을 출시한 후 두 개의 마이너 Mendix 버전 이내에 지원을 추가하는 것을 목표로 합니다. 데이터베이스에 대한 지원 중단은 벤더가 지원을 중단하는 날짜에 릴리스 노트에서 공지됩니다. 두 개의 마이너 Mendix 버전 후에 지원을 중단합니다.

현재 지원:

* [IBM DB2](/refguide8/db2/) 11.5 (Linux, Unix 및 Windows용)
* [MariaDB](/refguide9/mysql/): 10.6, 10.11, 11.4, 11.8
* [Microsoft SQL Server](/developerportal/deploy/mendix-on-windows-microsoft-sql-server/): 2022, 2025
* [Azure SQL](https://docs.microsoft.com/en-us/sql/t-sql/statements/alter-database-transact-sql-compatibility-level?view=sql-server-2017): v12 호환성 모드 140 이상
* [MySQL](/refguide9/mysql/): 8.4
* [Oracle Database](/refguide9/oracle/): 19, 21c, 23ai (26ai 포함)
* PostgreSQL: 13, 14, 15, 16, 17, 18
* [SAP HANA](/refguide9/saphana/): 2.00.076.00.1705400033

{{% alert color="warning" %}}
각 앱은 자체 데이터베이스를 가져야 합니다. Mendix 앱은 동일한 데이터베이스를 공유하여 데이터를 공유할 수 없습니다.

두 앱이 동일한 데이터베이스를 공유하려면 API를 사용하여 한 앱에서 다른 앱으로 데이터를 공유해야 합니다. Mendix에서는 [Catalog](/refguide/share-data/) 또는 *Studio Pro 가이드*의 [통합](/refguide9/integration/) 섹션에 설명된 REST 및 OData 서비스를 통해 지원됩니다. 이를 마이크로서비스 아키텍처라고 합니다.

앱 간에 데이터를 공유할 수 없는 이유에 대한 자세한 내용은 [데이터 저장소](/refguide9/data-storage/#databases)를 참조하십시오. 한 앱에서 다른 앱으로 데이터를 복사해야 하는 경우 [Database Replication](/appstore/modules/database-replication/) 모듈을 사용하십시오.
{{% /alert %}}

## 파일 저장소 {#file-storage}

### 컨테이너용 스토리지 서비스

Docker, Kubernetes 또는 Cloud Foundry를 사용하는 컨테이너 기반 배포의 경우 다음 스토리지 서비스가 지원됩니다:

* AWS S3
* Azure Blob Storage
* IBM Cloud Object Storage
* SAP AWS S3 Object Storage
* SAP Azure Blob Storage

Kubernetes에서 외부 스토리지 클래스가 제공하는 컨테이너 마운트 스토리지에 대해서는 [Minikube에서 Docker 사용하기](/developerportal/deploy/run-mendix-on-minikube/)도 참조하십시오.

### 서버용 스토리지 유형

서버 기반 설치의 경우 OS가 마운트하는 다음 스토리지 유형이 지원됩니다:

* NAS
* SAN
* GFS
* 로컬 스토리지

## 브라우저 {#browsers}

* Google Chrome (최신 안정 데스크톱 및 Android 버전)
* Mozilla Firefox (최신 안정 데스크톱 버전)
* Apple Safari (최신 안정 데스크톱 버전 및 각 [지원 iOS](#mobile) 버전의 최신 버전)
* Microsoft Edge (최신 안정 데스크톱 버전)

{{% alert color="warning" %}}
Internet Explorer는 Studio Pro 9에서 더 이상 지원되지 않습니다. 시장이 Internet Explorer에서 벗어나고 Mendix가 현대 웹 생태계의 모범 사례와 계속 일치함에 따라 Internet Explorer 11에 대한 지원을 중단했습니다. 이를 통해 사용자 기대에 부응할 수 있습니다. 지원 제거로 이미 앱 로딩 시간과 성능이 개선되었으며, 현대 웹 기능을 사용하여 계속 개선하고 혁신할 수 있게 되었습니다.<br />
<br />
Studio Pro 9부터 IE를 계속 사용하는 앱 최종 사용자에게는 최신 브라우저로 업그레이드해야 한다는 **지원되지 않는 브라우저** 메시지가 표시됩니다. 필요에 맞게 [이 메시지를 사용자 정의](/howto9/front-end/customize-styling-new/#customize-unsupported-browsers)할 수 있습니다.<br />
<br />
여전히 IE11을 지원해야 하는 경우, Studio Pro [8](/releasenotes/studio-pro/8.18/)이 IE11을 계속 지원합니다. Mendix는 앱 최종 사용자가 브라우저를 업그레이드할 때까지 Studio Pro 8을 사용하는 것을 권장합니다.
{{% /alert %}}

## 모바일 {#mobile}

Mendix로 만든 네이티브 및 하이브리드 앱의 경우 다음 운영 체제 버전이 지원됩니다:

* 최신 iOS 버전
* 최신 세 가지 Android 버전

이러한 운영 체제 버전에서 실행되는 장치만 벤더로부터 최신 보안 수정을 받아 알려진 취약점에 노출되는 것을 최소화합니다.

Mendix를 사용하여 지원하는 버전보다 이전 운영 체제 버전에서 실행되는 네이티브 및 하이브리드 앱을 빌드할 수 있습니다. 그러나 공식 Mendix 지원을 받으려면 지원되는 운영 체제 버전에서도 문제가 발생하는지 증명해야 합니다.

Mendix는 네이티브 및 하이브리드 Mendix 앱을 실행하는 모든 모바일 장치에 대해 다음 최소 하드웨어 요구 사항을 권장합니다:

* CPU: 최소 2코어, 2 GHz
* 메모리: 최소 2 GB

앱의 복잡도에 따라 이러한 최소 하드웨어 요구 사항이 충분하지 않을 수 있으며 조정이 필요할 수 있습니다.

Mendix를 사용한 네이티브 모바일 앱 개발에는 [네이티브 앱 전제 조건 및 문제 해결](/refguide/mobile/getting-started-with-mobile/prerequisites/)에 설명된 특별한 요구 사항이 있습니다.

### 하이브리드 앱 미리보기

하이브리드 미리보기 기능을 사용하는 것은 전화기나 시뮬레이터에서 앱을 테스트하는 것과 다릅니다. 하이브리드 미리보기는 모바일 장치에서 해당 앱이 어떻게 보일 수 있는지에 대한 인상을 주기 위해 크기가 조정된 앱 뷰만 보여줍니다. 일부 하이브리드 앱 기능은 이 브라우저 뷰에서 지원되지 않습니다. 전체 테스트는 항상 장치나 에뮬레이터에서 수행해야 합니다. 오프라인 앱은 Google Chrome에서만 미리 볼 수 있습니다.

하이브리드 앱은 Android Emulator에서 테스트할 수 없으며, 실제 장치에서만 가능합니다.

## MxBuild {#mxbuild}

MxBuild는 Mendix Deployment Package를 빌드하는 데 사용할 수 있는 Windows 및 Linux 명령줄 도구입니다. 자세한 내용은 [MxBuild](/refguide9/mxbuild/)를 참조하십시오.

* Mono v5.20.x 또는 .NET v4.7.2
* JDK 11

## mx 명령줄 도구 {#mxtool}

**mx** 명령줄 도구는 Mendix 앱에 유용한 작업을 수행하는 데 사용할 수 있는 Windows 및 Linux 명령줄 도구입니다. 자세한 내용은 [mx 명령줄 도구](/refguide9/mx-command-line-tool/)를 참조하십시오.

* Mono v5.20.x 또는 .NET v4.7.2
