---
title: "온프레미스"
url: /developerportal/deploy/on-premises-design/
description: "다양한 온프레미스 플랫폼에 배포하는 방법을 설명합니다."
weight: 80
aliases:
    - /deployment/on-premises.html
    - /deployment/on-premises
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 소개

서버 아키텍처를 설계할 때 환경을 설정하는 방법에는 무한한 가능성이 있습니다. 올바르거나 잘못된 구성은 없으며, 모든 것은 보안, 가용성 및 성능 요구 사항에 따라 달라집니다.

아래 옵션은 가장 일반적으로 사용되는 아키텍처 설정의 몇 가지 예시일 뿐입니다. Mendix Cloud는 별도의 데이터베이스 서버로 호스팅(자세한 내용은 [별도 데이터베이스 서버로 호스팅 (옵션 2)](#Option2) 참조)을 기반으로 한 (더 복잡한) 아키텍처를 사용하며, 별도의 파일 서버 없이 프록시 서버를 통해 트래픽을 올바른 환경으로 리다이렉트합니다.

이 사용 방법 문서에서는 다음을 학습합니다:

* 최적의 아키텍처 옵션 선택

## 옵션

### 최소 서버 아키텍처 (옵션 1)

이것은 구성 및 연결 문제가 가장 적은 가장 간단한 솔루션입니다. 이 구성은 Mendix Cloud에서도 사용되지만, 클라우드는 Linux 기반이며 IIS 대신 NGINX를 사용하고 데이터베이스 서버로 PostgreSQL을 사용합니다.

{{< figure src="/attachments/deployment/on-premises-design/18580719.jpg" class="no-border" >}}

### 별도 데이터베이스 서버로 호스팅 (옵션 2){#Option2}

{{< figure src="/attachments/deployment/on-premises-design/18580718.jpg" class="no-border" >}}

### 별도 데이터베이스 서버와 별도 웹 서버 (옵션 3)

이 옵션은 유지 관리가 가장 어려우며, 모든 업데이트를 두 번 수행해야 합니다(한 번은 애플리케이션 서버에서 정상적으로, 그 후에는 모든 정적 콘텐츠를 웹 서버에 복제하는 업데이트). 이는 업데이트를 수행할 때마다 웹 폴더(MxClientSystem 포함)의 내용을 웹 서버에 복사해야 한다는 것을 의미합니다.

가능하면 이 옵션의 사용을 피하십시오.

{{< figure src="/attachments/deployment/on-premises-design/18580717.jpg" class="no-border" >}}

### DMZ에 별도 Mendix 웹 서버 (옵션 4)

{{< figure src="/attachments/deployment/on-premises-design/18580720.jpg" class="no-border" >}}

## 로드 밸런싱 지원 및 구성

플랫폼은 플랫폼 앞에 로드 밸런서를 배치할 수 있습니다. 단일 인스턴스에서 문제가 발생하면 활성 사용자가 잃을 수 있는 것은 작업 중인 데이터뿐입니다. 실패한 인스턴스의 메모리에만 존재하던 모든 것은 사라지고, 저장된 모든 데이터는 사용자에게 계속 제공됩니다.

애플리케이션을 업데이트할 때는 모든 인스턴스를 중지하는 것이 가장 좋습니다. 데이터베이스 구조가 변경되고 단일 인스턴스가 데이터베이스 구조를 업데이트하면, 실행 중인 모든 인스턴스가 여전히 이전 데이터베이스 구조를 기대하고 있으므로 이상한 동작이 발생할 수 있습니다.

## 더 읽기

* [온프레미스 설치를 위한 보안 체크리스트 사용 방법](/developerportal/deploy/security-checklist-for-your-on-premises-installation/)
* [Mendix 애플리케이션 업데이트 방법](/developerportal/deploy/updating-a-mendix-application/)
* [Windows에서 Mendix용 Microsoft SQL Server 설정 방법](/developerportal/deploy/mendix-on-windows-microsoft-sql-server/)
* [새 SQL Server 데이터베이스 설정 방법](/developerportal/deploy/setting-up-a-new-sql-server-database/)
* [Mendix SQL 유지 관리 계획 구성 방법](/developerportal/deploy/mendix-sql-maintenance-plans/)
* [SQL Server 데이터베이스 복원 방법](/developerportal/deploy/restoring-a-sql-server-database/)
* [SQL Server 사용자 설정 방법](/developerportal/deploy/setting-up-a-sql-server-user/)
* [데이터베이스 사용자 설정 방법](/developerportal/deploy/setting-up-the-database-user/)
* [SQL Server 문제 해결 방법](/developerportal/deploy/troubleshooting-sql-server/)
