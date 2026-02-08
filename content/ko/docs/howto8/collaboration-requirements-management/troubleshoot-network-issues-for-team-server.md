---
title: "Team Server 연결을 위한 네트워크 문제 해결"
linktitle: "Team Server 네트워크 문제"
url: /howto8/collaboration-requirements-management/troubleshoot-network-issues-for-team-server/
weight: 14
description: "Team Server에 연결하기 위해 필요한 권한 및 설정과 연결 문제 해결 방법을 설명합니다."
---

## 소개

Mendix Studio Pro는 모든 프로젝트가 저장되는 Team Server에 연결해야 합니다.

**이 사용 방법 문서에서는 다음을 설명합니다:**

* Team Server에 연결하기 위해 필요한 권한 및 설정

## Team Server 프로젝트 네트워크 설정 문제 해결

Team Server 프로젝트를 다운로드할 수 없는 경우 회사 네트워크의 보안 구성이 `https://home.mendix.com` 및 `https://teamserver.sprintr.com/`에 대한 접근을 차단하고 있을 수 있습니다.

Team Server는 Subversion을 사용하여 구현되었으며, Mendix Studio Pro는 HTTPS (TCP) 프로토콜을 사용하여 해당 서버와 통신합니다. Studio Pro 내에서 Team Server에 접근하려면 위치의 네트워크에 다음 설정이 필요합니다:

* HTTPS 포트 (TCP 443)가 열려 있어야 합니다
* HTTP 포트 (TCP 80)가 열려 있어야 합니다
* WebDAV (HTTP 프로토콜 내의 동사)가 모든 프록시 서버에서 활성화되어 있어야 합니다

Mendix Studio Pro는 `https://teamserver.sprintr.com/`에 연결하며, 아래 다이어그램에 표시된 도메인과 포트 443을 통해 HTTPS로 연결합니다. 이 도메인들은 방화벽 허용 목록에 추가해야 합니다:

{{< figure src="/attachments/howto8/collaboration-requirements-management/troubleshoot-network-issues-for-team-server/networkaccessmendixplatform.jpg" alt="Domains home.mendix.com, cloud.mendix.com, and teamserver.sprintr.com need to be accessible on port 443 from your network" class="no-border" >}}

`https://teamserver.sprintr.com/`의 IP 주소를 조회할 수 있습니다.

{{% alert color="warning" %}}
Mendix는 사전 통보 없이 언제든지 IP 주소를 변경할 권리를 보유합니다. 예를 들어 Mendix가 다른 인프라로 이전하는 경우 이런 일이 발생할 수 있습니다.
{{% /alert %}}

{{% alert color="info" %}}
네트워크 관리자에게 이 정보를 전달하여 네트워크(예: 방화벽 및 프록시 설정)를 올바르게 구성할 수 있도록 하세요.
{{% /alert %}}

## 여전히 문제가 있나요?

이 솔루션이 작동하지 않으면 [Mendix Support](https://support.mendix.com/)에 요청을 제출하세요.
