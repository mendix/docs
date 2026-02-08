---
title: "인증서 관리"
linktitle: "인증서 관리"
url: /control-center/certificate-management/
description: "Mendix Control Center의 인증서 관리 페이지에 대해 설명합니다."
weight: 40
beta: true
---

{{% alert color="warning" %}}
이 기능은 공개 베타 버전입니다. 자세한 내용은 [릴리스 상태](/releasenotes/release-status/)를 참조하십시오.
{{% /alert %}}

## 소개

Mendix Cloud에서 SSL/TLS 인증서는 사용자 정의 도메인을 사용하는 애플리케이션에 대한 수신 연결의 안전한 HTTPS 통신을 가능하게 합니다.

**인증서 관리** 페이지는 Mendix 관리자에게 모든 회사 전체 인증서의 중앙 집중식 뷰를 제공합니다. 이 페이지에서 여러 애플리케이션 및 환경에서 재사용할 수 있는 인증서를 업로드, 교체, 갱신 및 모니터링할 수 있습니다.

인증서가 추가된 후:

* 기술 담당자는 애플리케이션 수준에서 [사용자 정의 도메인 구성](/developerportal/deploy/custom-domains/#Configuring) 시 이를 선택할 수 있습니다
* 인증서는 환경의 **클라우드 설정**의 [사용자 정의 도메인](/developerportal/deploy/environments/#custom-domains) 탭에서 중앙 관리됨으로 표시됩니다
* 인증서가 적용되는 도메인 이름이 포함되어 있는 한 동일한 인증서를 여러 애플리케이션 및 환경에서 재사용할 수 있습니다

## 인증서 요약

**인증서 관리** 페이지에는 구성된 모든 인증서의 요약이 표시됩니다:

* 현재 사용 중인 인증서
* 사용되지 않는 인증서
* 만료된 인증서
* 곧 만료되는 인증서

이 개요를 통해 인증서 갱신을 사전에 관리하고 서비스 중단을 방지할 수 있습니다.

## 인증서 세부 정보

구성된 각 인증서는 다음 필드와 함께 테이블에 표시됩니다:

* **설명** – 인증서에 대한 설명적 이름입니다. 인증서를 쉽게 식별할 수 있도록 명확하고 의미 있는 이름을 사용하십시오.
* **인증서 만료** – 인증서가 만료되는 날짜 및 시간
* **사용자 정의 도메인 수** – 현재 인증서를 사용하는 사용자 정의 도메인의 수
* **상태** – 인증서의 현재 상태:
    * **유효** – 현재 유효하고 사용 중
    * **곧 만료** – 인증서가 곧 만료됩니다
    * **만료됨** – 인증서가 만료되었습니다
    * **예정** – 인증서가 유효하지 않으며, 시작 날짜가 미래입니다

    이 상태별로 인증서를 필터링하여 갱신 또는 삭제가 필요한 인증서를 식별할 수 있습니다.

* **추가 옵션** – 인증서별 사용 가능한 작업:
    * **편집** 
    * **교체** 
    * **세부 정보**
    * **삭제** 
    {{% alert color="info" %}}현재 사용 중인 인증서는 삭제할 수 없습니다.
    {{% /alert %}}

Mendix 관리자가 **인증서 관리** 페이지를 사용하여 중앙 집중식 인증서를 업로드, 구성 및 관리하는 방법에 대한 자세한 정보는 [중앙 집중식 인증서](/developerportal/deploy/certificates/centralized-certificates/)를 참조하십시오.

## 더 읽기

* [인증서](/developerportal/deploy/certificates/)
* [애플리케이션 수준 인증서](/developerportal/deploy/application-level-certificates/)
* [사용자 정의 도메인](/developerportal/deploy/custom-domains/)
