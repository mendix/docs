---
title: "시스템 요구 사항"
url: /refguide8/system-requirements/
weight: 10
description: "Mendix 플랫폼 사용을 위한 시스템 요구 사항을 제시합니다."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

이 문서는 Mendix 플랫폼의 다양한 부분에 대한 시스템 요구 사항을 제시합니다.

## Mendix Studio Pro {#sp}

Mendix [Studio Pro](/refguide8/modeling/)는 64비트 버전의 Windows 7, 8 및 10을 지원합니다. Windows 7은 최소 Service Pack 1이어야 합니다. Mendix Studio Pro 8.18.14부터 시작하는 LTS 버전은 [Parallels 17](https://www.parallels.com/) 및 Windows 11이 필요한 M1과 같은 Apple Silicon Mac에서 실행되도록 활성화 및 테스트되었습니다.

다음 프레임워크가 자동으로 설치됩니다(필요한 경우):

* Microsoft .NET Framework 4.7.2 및 모든 적용 가능한 Windows 보안 패치
* Microsoft Visual C++ 2010 SP1 Redistributable Package
* Microsoft Visual C++ 2015 Redistributable Package
* Adoptium JDK 17 ([Mendix 8.18.29](/releasenotes/studio-pro/8.18/#81829)부터 JDK 17이 설치되어 있지 않은 경우 자동으로 설치됩니다)
* 8.18.29 미만 버전의 경우 AdoptOpenJDK 11

{{% alert color="info" %}}
Studio Pro의 **Edit** > **Preferences** 메뉴 항목을 통해 로컬에서 빌드 및 실행에 사용되는 JDK를 선택할 수 있습니다.
{{% /alert %}}

{{% alert color="warning" %}}
Studio Pro에 내장된 데이터베이스 뷰어([개발 데이터베이스 공유 방법](/howto8/collaboration-requirements-management/sharing-the-development-database/)에 설명)는 JDK 11.06 또는 11.07에서 작동하지 않는 제한 사항이 있습니다.
{{% /alert %}}

### 방화벽 설정

Studio Pro가 작동하려면 다음 URL에 대한 접근이 필요합니다. 방화벽이 현재 이를 차단하고 있다면 허용 목록에 추가해야 합니다.

* `*.mendix.com`
* `*.mendixcloud.com`
* `*.teamserver.sprintr.com`

### TortoiseSVN

Studio Pro와 함께 TortoiseSVN을 사용하려면 [TortoiseSVN](https://tortoisesvn.net/) 웹사이트에서 최신 버전을 다운로드하십시오.

{{% alert color="warning" %}}
Mendix Studio Pro는 Subversion 1.9 작업 복사본을 사용합니다. 이전 버전의 Mendix Desktop Modeler는 Subversion 1.7 작업 복사본을 사용했습니다. 이러한 작업 복사본 버전은 **호환되지 않습니다**.

항상 앱 모델과 일치하는 TortoiseSVN 버전을 사용하십시오. Mendix 7.x의 로컬 모델을 최신 버전의 TortoiseSVN으로 열면 **Mendix에서 더 이상 열 수 없게 됩니다**.
{{% /alert %}}

### 그래픽 카드

Intel® UHD Graphics 630 그래픽 프로세서를 사용하는 경우 [드라이버 버전 27.20.100.9664](https://www.catalog.update.microsoft.com/Search.aspx?q=Intel(R)+UHD+Graphics+630) 이상을 사용하고 있는지 확인하십시오.

## Team Server {#ts}

[Team Server](/developerportal/repository/team-server/)는 Subversion을 사용하여 구현되며, Studio Pro는 HTTPS 프로토콜을 사용하여 해당 서버와 통신합니다. Studio Pro 내에서 Team Server에 접근하려면 해당 위치의 네트워크에 다음 설정이 필요합니다:

* HTTPS 포트(TCP 443)가 열려 있어야 합니다
* HTTP 포트(TCP 80)가 열려 있어야 합니다
* WebDAV(HTTP 프로토콜 내의 동사)가 프록시 서버(있는 경우)에서 활성화되어야 합니다

## Cloud Foundry

[Mendix Cloud Foundry 빌드팩](https://github.com/mendix/cf-mendix-buildpack)은 Cloud Foundry 버전 v9 이상을 지원합니다.

## Docker

[Mendix Docker 빌드팩](https://github.com/mendix/docker-mendix-buildpack)은 Docker 버전 18.09.0 이상을 지원합니다.

### Kubernetes

Mendix Docker 빌드팩은 다음 Kubernetes 버전을 지원합니다:

* Kubernetes 버전 v1.12 이상
* Redhat Openshift v3.11 및 v4.2 이상

## 서버

### 운영 체제

* Microsoft Windows Server 2008 SP2 이상
* [Debian OldOldStable (LTS)](https://wiki.debian.org/DebianOldOldStable), [Debian OldStable, Debian Stable](https://wiki.debian.org/DebianReleases#Current_Releases.2FRepositories)

### 웹 서버

* Microsoft Internet Information Services 7 이상
* Nginx
* Apache

### Java

서버에서 Mendix를 실행할 때 Java Runtime Environment(JRE) 11 또는 (Mendix 버전 8.18.29 이상의 경우) 17이 필요합니다. Adoptium에서 OpenJDK 배포판을 다운로드하려면 [Adoptium 설치](https://adoptium.net/temurin/releases)를 참조하십시오. 상용 Oracle 배포판을 다운로드하려면 [Java SE 다운로드](https://www.oracle.com/technetwork/java/javase/downloads/index.html)를 참조하십시오.

{{% alert color="info" %}}
Java 7부터 특정 양의 데이터가 있는 웹 서비스를 사용할 때 타임아웃을 발생시키는 문제가 있습니다. VM 매개변수 `-Djava.net.preferIPv4Stack=true`를 추가하여 이 문제를 해결할 수 있습니다. Mendix Studio Pro가 이를 자동으로 처리하지만, Windows 서버에서 온프레미스로 Mendix를 실행하는 경우 직접 설정해야 합니다. 이 문제에 대한 자세한 내용은 [Java 7의 가능한 버그](https://community.oracle.com/tech/developers/discussion/comment/9987709)를 참조하십시오.
{{% /alert %}}

## 데이터베이스 {#databases}

Mendix는 데이터베이스 벤더의 가장 최신이고 패치된 데이터베이스 서버 버전을 지원하려고 합니다. 벤더가 릴리스한 후 두 번의 마이너 Mendix 버전 이후에 새 벤더 버전에 대한 지원을 추가하는 것을 목표로 합니다. 데이터베이스에 대한 지원 중단은 벤더가 지원을 중단하는 날짜에 릴리스 노트에 발표됩니다. 두 번의 마이너 Mendix 버전 이후에 지원을 중단합니다.

현재 지원:

* [IBM DB2](/refguide8/db2/) 11.5 for Linux, Unix, and Windows
* [MariaDB](/refguide8/mysql/): 10.6, 10.11, 11.4, 11.8
* [Microsoft SQL Server](/developerportal/deploy/mendix-on-windows-microsoft-sql-server/): 2019, 2022
* [Azure SQL](https://docs.microsoft.com/en-us/sql/t-sql/statements/alter-database-transact-sql-compatibility-level?view=sql-server-2017): v12 호환성 모드 140 이상
* [MySQL](/refguide8/mysql/): 8.4
* [Oracle Database](/refguide8/oracle/): 19, 21c
* PostgreSQL: 13, 14, 15, 16, 17
* [SAP HANA](/refguide8/saphana/): 2.00.076.00.1705400033

{{% alert color="warning" %}}
각 앱에는 자체 데이터베이스가 있어야 합니다. Mendix 앱은 동일한 데이터베이스를 공유하여 데이터를 공유할 수 없습니다.
{{% /alert %}}

## 파일 스토리지

### 컨테이너용 스토리지 서비스

Docker, Kubernetes 또는 Cloud Foundry를 사용하는 컨테이너 기반 배포의 경우 다음 스토리지 서비스가 지원됩니다:

* AWS S3
* Azure Blob Storage
* IBM Cloud Object Storage
* SAP AWS S3 Object Storage
* SAP Azure Blob Storage

Kubernetes에서 외부 스토리지 클래스가 제공하는 컨테이너 마운트 스토리지의 경우 [Minikube에서 Docker 사용](/developerportal/deploy/run-mendix-on-minikube/)도 참조하십시오.

### 서버용 스토리지 유형

서버 기반 설치의 경우 OS에서 마운트한 다음 스토리지 유형이 지원됩니다:

* NAS
* SAN
* GFS
* 로컬 스토리지

## 브라우저 {#browsers}

* Google Chrome (최신 안정 데스크톱 및 Android 버전)
* Mozilla Firefox (최신 안정 데스크톱 버전)
* Apple Safari (최신 안정 데스크톱 버전 및 각 [지원되는 iOS](#mobileos) 버전의 최신 버전)
* Microsoft Edge (최신 안정 데스크톱 버전)
* Microsoft Internet Explorer 11

## 하이브리드 미리보기

하이브리드 미리보기를 사용하는 것은 에뮬레이터를 사용하는 것과 같지 않습니다. 하이브리드 미리보기는 모바일 디바이스에서 앱이 어떻게 보일 수 있는지 인상을 주기 위해 앱의 크기 조정된 뷰만 보여줍니다. 일부 하이브리드 앱 기능은 이 브라우저 뷰에서 지원되지 않습니다. 전체 테스트는 항상 디바이스 또는 에뮬레이터에서 수행해야 합니다. 오프라인 앱은 Google Chrome에서만 미리볼 수 있습니다.

## 모바일 운영 체제 {#mobileos}

Mendix로 빌드된 네이티브 및 하이브리드 앱(및 [Mendix Developer App](/refguide8/getting-the-mendix-app/))의 경우 다음 운영 체제 버전이 지원됩니다:

* 최신 버전의 iOS
* 최신 세 버전의 Android

이러한 운영 체제 버전을 실행하는 디바이스만 벤더로부터 최신 보안 수정을 받으므로 알려진 취약점에 대한 노출을 최소화합니다.

지원하는 것보다 오래된 운영 체제 버전에서 실행되는 네이티브 및 하이브리드 앱을 Mendix로 빌드할 수 있습니다. 그러나 공식 Mendix 지원을 받으려면 지원되는 운영 체제 버전에서도 문제가 발생함을 입증해야 합니다.

Mendix는 네이티브 및 하이브리드 Mendix 앱을 실행하는 모든 모바일 디바이스에 대해 다음 최소 하드웨어 요구 사항을 권장합니다:

* CPU: 최소 2코어, 2 GHz
* 메모리: 최소 2 GB

앱의 복잡성에 따라 이러한 최소 하드웨어 요구 사항이 충분하지 않을 수 있으며 조정해야 할 수 있습니다.

## MxBuild {#mxbuild}

MxBuild는 Mendix Deployment Package를 빌드하는 데 사용할 수 있는 Windows 및 Linux 명령줄 도구입니다. 자세한 내용은 [MxBuild](/refguide8/mxbuild/)를 참조하십시오.

* Mono v5.20.x 또는 .NET v4.7.2
* JDK 11 또는 17

## mx 명령줄 도구 {#mxtool}

**mx** 명령줄 도구는 Mendix 앱에 유용한 작업을 수행할 수 있는 Windows 및 Linux 명령줄 도구입니다. 자세한 내용은 [mx 명령줄 도구](/refguide8/mx-command-line-tool/)를 참조하십시오.

* Mono v5.20.x 또는 .NET v4.7.2
