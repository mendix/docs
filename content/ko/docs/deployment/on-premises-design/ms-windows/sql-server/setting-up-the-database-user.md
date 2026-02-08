---
title: "SQL Server에서 데이터베이스 사용자 설정"
url: /developerportal/deploy/setting-up-the-database-user/
weight: 30
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 일반

로그인 이름을 결정하십시오. 사용하려는 사용자가 로컬 SQL 서버 사용자인 경우 SQL Server 인증 옵션을 선택하십시오. 데이터베이스 접근에 AD 계정을 사용하려면 Windows 인증을 선택할 수 있습니다. AD 계정을 사용하기로 선택한 경우, 애플리케이션도 이 계정으로 실행되어야 하며 통합 인증을 사용하도록 데이터베이스 연결을 구성해야 합니다.

애플리케이션을 사용하여 데이터베이스에 연결하므로 비밀번호를 만료하거나 다음 로그인 시 비밀번호를 변경하도록 요구하는 옵션을 사용하고 싶지 않습니다.

애플리케이션 데이터베이스를 기본 데이터베이스로 선택하십시오.

{{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/setting-up-the-database-user/18580674.png" class="no-border" >}}

## 서버 역할

사용자에게 특별한 서버 역할이 필요하지 않습니다. SQL Server는 모든 사용자가 public 역할의 구성원이어야 하므로 'public' 서버 역할을 사용자의 유일한 역할로 유지하는 것으로 충분합니다.

서버 역할의 권한 수준에 대한 자세한 정보는 Microsoft SQL 문서의 [Server-level roles](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/server-level-roles?view=sql-server-ver15) 페이지에서 확인할 수 있습니다.

{{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/setting-up-the-database-user/18580673.png" class="no-border" >}}

## 사용자 매핑

사용자 매핑 속성을 사용하여 사용자에게 다른 데이터베이스에 대한 접근 권한을 부여할 수 있습니다. Mendix는 Mendix 애플리케이션당 하나의 계정을 사용할 것을 제안합니다. 이는 생성하는 사용자가 단일 애플리케이션 데이터베이스에만 접근해야 함을 의미합니다.

{{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/setting-up-the-database-user/18580672.png" class="no-border" >}}

Mendix Runtime은 데이터베이스의 일관성을 유지합니다. 이는 런타임이 시작 시 데이터베이스 구조를 검증하고 테이블 구조를 업데이트하기 위한 SQL 스크립트를 자동으로 생성한다는 것을 의미합니다. Mendix Service Console은 이러한 스크립트를 데이터베이스에서 직접 실행할 수 있는 옵션을 제공합니다. Mendix Runtime은 스키마 'dbo'를 사용해야 합니다.

권장 데이터베이스 역할은 `db_owner`입니다. `db_owner` 역할을 사용자에게 할당하지 않기로 선택한 경우 다음 역할을 할당해야 합니다. `db_datareader`, `db_datawriter` 및 `usp_nextsequencevalue`에 대한 실행 프로시저 권한은 사용자가 모든 테이블의 내용을 읽고 쓸 수 있는 최소 권한입니다.
다음 명령을 사용하여 실행 프로시저 권한을 부여할 수 있습니다:

`GRANT EXECUTE ON OBJECT::usp_nextsequencevalue TO <YourDatabaseUser>`

또한, 새 `.mda` 파일에서 애플리케이션을 시작하려면 데이터베이스 동기화가 필요하지 않더라도 `view definition` 권한이 필요합니다. 데이터베이스 업그레이드 중에 테이블과 저장 함수를 변경해야 합니다. 이 작업 중에는 일반적으로 `db_ddladmin` 역할이 충분하지만, 저장 함수를 추가해야 할 때는 `db_owner` 역할이 필요합니다(자세한 내용은 [SQL Server 문제 해결](/developerportal/deploy/troubleshooting-sql-server/) 참조).

## 상태

사용자가 데이터베이스에 연결할 수 있도록 허용하십시오. 사용자가 엔진에 연결하는 권한이 거부되면 애플리케이션으로 연결할 수 없습니다. 애플리케이션에 사용되는 자격 증명은 일반 로그인을 통해 데이터베이스에 접근할 수 있는 권한이 있어야 합니다. 그렇지 않으면 SQL Server가 계정을 비활성화된 것으로 간주합니다.

{{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/setting-up-the-database-user/18580671.png" class="no-border" >}}

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
