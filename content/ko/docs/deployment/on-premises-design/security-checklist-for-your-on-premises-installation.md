---
title: "온프레미스 설치 보안"
linktitle: "온프레미스 설치 보안"
url: /developerportal/deploy/security-checklist-for-your-on-premises-installation/
description: "온프레미스에 Mendix를 배포할 때 보안을 구현하기 위한 체크리스트"
weight: 10
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 소개

이 사용 방법 문서는 온프레미스 설치의 보안을 구현하기 위한 체크리스트 역할을 합니다.

이 사용 방법 문서에서는 다음을 학습합니다:

* 최신 보안 패치가 포함된 Mendix 버전 사용
* 파일 시스템 접근 구성
* SSL 지원이 있는 HTTP 리버스 프록시 사용
* 방화벽 구성

## 전제 조건

이 사용 방법 문서를 시작하기 전에 다음 전제 조건을 완료하십시오:

* 최신 보안 패치가 포함된 Mendix 버전을 사용하십시오
    * 앱이 Mendix Cloud에서 실행되는 경우 배포 시 이 체크리스트를 자동으로 준수합니다

## 모든 애플리케이션에 대해 권한이 없는 전용 사용자 계정 사용

서버에서 실행하는 모든 Mendix 애플리케이션에 대해 별도의 권한이 없는 운영 체제 사용자 계정을 사용하십시오. Administrator 또는 root 권한으로 애플리케이션을 실행하지 마십시오. Windows에서는 Windows Service Console 자체만 권한이 있는 계정으로 실행해야 합니다. 이 계정을 애플리케이션의 서비스 사용자 계정으로 구성하지 마십시오.

## 파일 시스템 접근 구성

별도의 권한이 없는 사용자 계정이 프로젝트 위치의 데이터(파일, 데이터베이스 등) 및 모델 디렉토리에 대한 읽기 및/또는 쓰기 권한을 가진 유일한 사용자인지 확인하십시오. 다른 Mendix 애플리케이션에 사용되는 사용자 계정은 서로의 파일이나 구성을 읽을 수 없어야 합니다. 예외적으로 프로젝트의 웹 디렉토리에 있는 공개 콘텐츠는 보호할 필요가 없으므로 별도의 웹 서버에서 읽고 직접 제공할 수 있습니다.

## SSL 지원이 있는 HTTP 리버스 프록시 사용

애플리케이션 프로세스에 최대한 가깝게 HTTP 연결에 SSL을 구현하는 리버스 프록시(예: Nginx, IIS 또는 Apache)를 구성하십시오. 이렇게 하면 웹 브라우저를 사용하는 사용자가 `https://` URL을 사용하여 리버스 프록시를 통해 애플리케이션에 연결합니다. 사용 중인 URL과 일치하는 올바른 인증서가 준비되어 있고, 최신 웹 브라우저에 있는 인증 기관에 의해 인식되거나 모든 사용자의 웹 브라우저에 배포된 회사의 내부 인증 기관에 의해 인식되는지 확인하십시오.

SSL 종료 지점 역할을 하는 리버스 프록시에서 Mendix 애플리케이션으로 전송되는 요청에 `X-Forwarded-Scheme` HTTP 헤더를 삽입하고 값을 `https`로 설정하십시오. 이는 Mendix Runtime에 사용자가 HTTPS를 통해 애플리케이션을 사용하고 있음을 알려주고 세션 쿠키에 secure 플래그를 설정합니다. 세션 쿠키에 secure 플래그가 설정되지 않으면 브라우저는 일반 HTTP 연결을 시도할 때도 쿠키를 전송합니다. 따라서 쿠키에 secure가 설정되지 않았거나 일반 HTTP 포트에서 HTTPS로의 리다이렉트만 구현한 경우 세션 쿠키가 네트워크를 통해 암호화되지 않은 상태로 전송됩니다. `X-Forwarded-Scheme` 요청 헤더는 리버스 프록시에서 삽입해야 하며, 이는 Mendix Runtime이 자동으로 HTTPS 사용을 감지하는 유일한 방법입니다.

## 방화벽 구성

방화벽 규칙을 구성할 때 리버스 프록시를 제외하고 애플리케이션 프로세스(예: 포트 8000)에 직접 연결하는 것이 불가능한지 확인하십시오. 최종 사용자나 공격자가 애플리케이션 포트에 직접 연결하여 `https` 사용을 우회할 수 없어야 합니다.

로컬 서버에서만이 아닌 네트워크에서 연결할 수 있도록 애플리케이션을 명시적으로 구성해야 합니다.

## HTTP 리버스 프록시가 정적 콘텐츠를 제공하도록 설정

Mendix는 리버스 프록시가 애플리케이션 URL의 루트 위치에서 `web` 디렉토리의 정적 콘텐츠를 직접 제공하고, 설치된 Mendix Runtime 배포의 올바른 버전에 위치한 Mendix 클라이언트 시스템을 `/mxclientsystem`에서 제공하도록 구성하는 것을 강력히 권장합니다. 애플리케이션 프로세스 자체는 동적 콘텐츠(예: `/xas/` 및 `/ws/` 하위 URL)만 처리해야 합니다.

## Admin 포트 접근 보안 (m2ee-tools 및 Windows Service Console 접근용)

방화벽 규칙을 구성할 때 m2ee-tools 또는 Windows Service Console과 같은 관리 도구가 사용되는 위치 이외의 다른 위치에서 Mendix 애플리케이션 프로세스의 `Adminport`에 연결하는 것이 불가능한지 확인하십시오. 대부분의 상황에서 이는 포트가 로컬 호스트에서만 접근 가능하고 모든 외부 접근이 거부됨을 의미합니다. 네트워크에서의 접근을 허용하는 경우, 통신이 SSL로 보호되지 않으므로 완전히 신뢰할 수 없는 네트워크에서는 사용할 수 없음을 유의하십시오.

admin 포트는 기본적으로 로컬 호스트에서의 연결만 허용합니다. 네트워크에서 연결하려면 명시적으로 구성해야 합니다.

관리 TCP 포트에서 실행되는 관리 인터페이스를 보호하기 위해 강력한 비밀번호를 선택하십시오. 이 비밀번호를 길고 무작위한 문자열로 설정하십시오(Windows Service Console을 사용하는 경우 이는 자동으로 수행됩니다). 수동으로 사용되지 않으며, m2ee-tools 및 Windows Service Console과 같은 관리 도구가 관리 작업을 위해 시작된 Mendix 애플리케이션에 다시 연결하기 위해 백그라운드에서만 사용됩니다.

## 보안 헤더 설정

온프레미스에서 실행할 때 HTTP 헤더가 자동으로 설정되지 않습니다. 앱에 필요한 HTTP 헤더를 결정해야 합니다.

예를 들어, Content Security Policy(CSP)는 자동으로 활성화되지 않습니다. 앱에 CSP를 구현하지 않아도 직접적인 영향은 없습니다. 그러나 Cross-site Scripting 공격에 취약한 경우 CSP가 해당 취약점의 성공적인 악용을 방지할 수 있습니다. HTTP 헤더 `Content-Security-Policy`를 추가하고 값을 `default-src 'none'; img-src 'self'; script-src 'self' {URL}; style-src 'self'`로 설정하는 것이 좋습니다.

## Studio Pro로 프로덕션 데이터베이스에 연결하지 마십시오

Mendix Studio Pro를 사용하여 *프로덕션* 데이터베이스에 직접 연결하지 **마십시오** (예: 데이터베이스에 SSH 터널 사용 또는 Windows 서버에서 Studio Pro 사용). Studio Pro는 항상 개발 모드에서 실행되므로 Studio Pro에 정의된 "admin user"의 비밀번호를 즉시 개발 기본값으로 재설정합니다. 이는 비밀번호가 "1"로 설정된 "MxAdmin" 사용자가 존재하게 될 가능성이 높다는 것을 의미합니다(또는 존재하지 않는 경우 이 계정이 생성됩니다).

## 더 읽기

* [SQL Server 데이터베이스 복원 방법](/developerportal/deploy/restoring-a-sql-server-database/)
* [SQL Server 문제 해결 방법](/developerportal/deploy/troubleshooting-sql-server/)
* [Mendix SQL 유지 관리 계획 설정 방법](/developerportal/deploy/mendix-sql-maintenance-plans/)
* [새 SQL Server 데이터베이스 설정 방법](/developerportal/deploy/setting-up-a-new-sql-server-database/)
* [SQL Server 사용자 설정 방법](/developerportal/deploy/setting-up-a-sql-server-user/)
* [Microsoft Windows에서 Mendix 배포 방법](/developerportal/deploy/deploy-mendix-on-microsoft-windows/)
* [Linux 배포](/developerportal/deploy/linux/)
