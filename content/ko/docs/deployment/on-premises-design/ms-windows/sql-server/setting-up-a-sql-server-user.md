---
title: "SQL Server에서 사용자 설정"
url: /developerportal/deploy/setting-up-a-sql-server-user/
weight: 20
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 설명

이 문서에서는 Mendix 기반 애플리케이션을 위한 안전한 환경을 만들기 위해 SQL Server의 사용자를 구성하는 방법을 설명합니다.
안전한 환경을 만들려면 관리자 역할을 가진 사용자와 애플리케이션의 일반 사용자를 명확하게 구분하는 것이 중요합니다.

## 지침

* **관리자 생성:** 관리자 역할을 가진 사용자를 생성하십시오(예: 'MendixAdmin').
* **관리자의 서버 역할 설정:** 이 사용자가 실행해야 하는 작업에 따라 관리자 역할은 다음 데이터베이스 역할에 연결되어야 합니다:

    | | 데이터베이스 생성 | 사용자 생성 | 데이터베이스 유지 관리 | 전체 유지 관리 |
    | --- | --- | --- | --- | --- |
    | `dbcreator` | **X** |  |  | |
    | `diskadmin` | **X** |  |  | |
    | `processadmin` |  |  |  | |
    | `securityadmin` | | **X** |  | |
    | `serveradmin` |  |  | **X** | |
    | `setupadmin` |  |  |  | |
    | `sysadmin` |  |  |  | **X** |

* **관리자의 사용자 매핑 정의:** Mendix와 관련된 모든 데이터베이스를 관리자와 연결하십시오. 이 데이터베이스의 템플릿은 `dbo`여야 하고 관리자의 역할은 `db_owner`여야 합니다.
* **각 Mendix 애플리케이션에 대한 데이터베이스 사용자 생성:** 각 Mendix 애플리케이션에는 자체 데이터베이스 사용자(또는 사용자들)가 있어야 합니다.
* **각 사용자의 서버 역할 설정:** 각 사용자를 `public` 역할과 연결하십시오.
* **각 사용자의 사용자 매핑 정의:** Mendix와 관련된 모든 데이터베이스를 해당 사용자(또는 사용자들)와 연결하십시오. 이 데이터베이스의 템플릿은 `dbo`여야 하고 각 해당 사용자의 역할은 `db_datareader` 및 `db_datawriter`여야 합니다. 또한, 사용자에게 `view definition` 권한이 부여되어야 합니다.

이 페이지에서 단계별 지침을 찾을 수 있습니다: [데이터베이스 사용자 설정](/developerportal/deploy/setting-up-the-database-user/)

## 더 읽기

* [Microsoft Windows에서 Mendix 라이선스 활성화](/developerportal/deploy/activate-a-mendix-license-on-microsoft-windows/)
* [데이터베이스 사용자 설정](/developerportal/deploy/setting-up-the-database-user/)
* [문제 해결](/developerportal/deploy/troubleshooting-iis/)
* [SQL Server 데이터베이스 복원](/developerportal/deploy/restoring-a-sql-server-database/)
* [SQL Server 문제 해결](/developerportal/deploy/troubleshooting-sql-server/)
* [Mendix SQL 유지 관리 계획](/developerportal/deploy/mendix-sql-maintenance-plans/)
* [새 SQL Server 데이터베이스 설정](/developerportal/deploy/setting-up-a-new-sql-server-database/)
