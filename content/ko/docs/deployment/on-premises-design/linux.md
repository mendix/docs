---
title: "Linux 배포"
url: /developerportal/deploy/linux/
description: "Linux 시스템에서 Mendix를 설치하고 구성하는 방법"
weight: 99
aliases:
    - /developerportal/deploy/unix-like/
---

{{% alert color="warning" %}} Linux 배포는 [Mendix Runtime 버전 9, 10, 11](https://docs.mendix.com/releasenotes/studio-pro/lts-mts/)에 대해 Debian 10(buster)에서만 지원됩니다. 다른 버전의 Mendix Runtime에 대한 지원은 추가하지 않을 예정입니다. {{% /alert %}}

## 소개

Mendix는 Linux를 실행하는 시스템에 온프레미스로 설치할 수 있습니다. 설치는 다음으로 구성됩니다:

* M2ee-tools - Mendix 설치를 관리하는 데 사용되는 명령줄 도구
* Mendix Runtime
* Java Runtime Environment
* 웹 서버

현재 지원되는 배포판 목록은 *시스템 요구 사항*의 [운영 체제](/refguide/system-requirements/#server-os)를 참조하십시오.

## 기술 문서

Linux 시스템에서 Mendix 소프트웨어의 설치 및 기본 구성을 설명하는 문서는 m2ee-tools 도우미 프로그램의 일부로 제공됩니다: [https://github.com/mendix/m2ee-tools/tree/develop/doc/README.md](https://github.com/mendix/m2ee-tools/tree/develop/doc/README.md).

## Linux에서 라이선스 키 활성화

라이선스 키를 활성화하려면 다음 단계를 따르십시오:

1. 대화형 m2ee 콘솔을 여십시오.
2. `show_license_information` 명령을 사용하여 생성된 서버 ID를 표시하십시오.
3. 서버 ID를 사용하여 Mendix에서 라이선스 키를 받으십시오(라이선스 키 요청에 대한 정보는 [앱 라이선싱](/developerportal/deploy/licensing-apps-outside-mxcloud/) 참조).
4. `activate_license` m2ee 명령을 사용하여 서버에서 라이선스를 활성화하십시오.
