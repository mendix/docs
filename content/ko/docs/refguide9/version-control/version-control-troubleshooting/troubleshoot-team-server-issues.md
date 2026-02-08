---
title: "Team Server 문제 해결"
url: /refguide9/troubleshoot-team-server-issues/
linktitle: "Team Server 문제"
weight: 30
description: "Team Server 문제에 대한 문제 및 수정 사항 목록을 제공합니다."
---

## 소개

Mendix Studio Pro는 모든 앱이 저장되는 Team Server에 연결해야 합니다. Team Server는 버전 관리 서버입니다. 현재 SVN이 Team Server의 기본 버전 관리 시스템이지만 Git을 선택할 수 있습니다. 향후 Git이 기본 시스템이 될 것입니다. 이 문서에서는 Team Server에 연결하는 데 필요한 권한과 설정을 설명합니다.

## Team Server 앱 네트워크 설정 문제 해결

Team Server 앱을 다운로드할 수 없는 경우, 회사 네트워크의 보안 구성이 `https://home.mendix.com` 및 Team Server 자체에 대한 접근을 차단하고 있을 수 있습니다:

* Git 기반 앱의 경우 `https://git.api.mendix.com/`
* SVN 기반 앱의 경우 `https://teamserver.sprintr.com/`

Mendix Studio Pro는 HTTPS(TCP)를 사용하여 Team Server와 통신합니다. Studio Pro에서 Team Server에 접근하려면 해당 위치의 네트워크에 다음 설정이 필요합니다:

* HTTPS 포트(TCP 443)가 열려 있어야 합니다
* HTTP 포트(TCP 80)가 열려 있어야 합니다

버전 관리에 SVN을 사용하는 경우 다음도 필요합니다:

* 프록시 서버에서 WebDAV(HTTP 프로토콜 내의 동사)가 활성화되어 있어야 합니다

Mendix Studio Pro는 `https://teamserver.sprintr.com/`에 연결하고 아래 다이어그램에 표시된 도메인과 포트 443의 HTTPS를 통해 연결합니다. 이러한 도메인을 방화벽 허용 목록에 추가해야 합니다:

{{< figure src="/attachments/refguide9/version-control/troubleshoot-version-control-issues/networkaccessmendixplatform.png" alt="Domains home.mendix.com, cloud.mendix.com, and git.api.mendix.com (or teamserver.sprintr.com in case of SVN) need to be accessible on port 443 from your network" class="no-border" >}}

`https://teamserver.sprintr.com/` 또는 `https://git.api.mendix.com/`의 IP 주소를 조회할 수 있습니다.

{{% alert color="warning" %}}
Mendix는 사전 통지 없이 언제든지 IP 주소를 변경할 권리를 보유합니다. 예를 들어 Mendix가 다른 인프라로 이동하는 경우 이러한 상황이 발생할 수 있습니다.
{{% /alert %}}

{{% alert color="info" %}}
네트워크 관리자에게 연락하여 이 정보를 제공하면 네트워크(예: 방화벽 및 프록시 설정)를 올바르게 구성할 수 있습니다.
{{% /alert %}}

## 더 읽기

* [버전 관리 FAQ](/refguide9/version-control-faq/)
