---
title: "Siemens Advanced License Technology"
url: /developerportal/deploy/salt/
weight: 90
description: "Mendix에서 Siemens Advanced License Technology(SALT)를 사용하는 방법을 설명합니다"
aliases:
    - /deployment/salt/
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

{{% alert color="info" %}}
SALT 기반 라이선스는 선택된 고객에게만 발급됩니다. SALT 라이선스를 명시적으로 참조하고 이 페이지로 안내하는 이메일을 받은 경우 이 가이드를 따르십시오. 그렇지 않은 경우 [비 SALT Mendix 라이선스 가이드](/developerportal/deploy/licensing-apps-outside-mxcloud/)를 참조하십시오.
{{% /alert %}}

## 소개

Siemens Advanced License Technology(SALT)는 소프트웨어 라이선스를 검증하는 데 사용되는 Siemens 서비스입니다. 이 가이드에서는 SALT 기반 라이선스를 사용하여 Mendix 애플리케이션을 배포하는 단계를 설명합니다.

## 제한 사항

이 섹션에서는 SALT 기반 라이선스 사용에 대한 제한 사항을 설명합니다.

### 버전 호환성

SALT 라이선스는 다음 Mendix 버전에서만 사용할 수 있습니다:

* **Mendix 10**: 10.24.4 이상
* **Mendix 11**: 11.2.0 이상

각 SALT 라이선스는 Mendix의 특정 메이저 버전에 바인딩되며 새로운 메이저 버전에서는 사용할 수 없습니다.

### 배포 제한

SALT 라이선스를 사용하는 Mendix 애플리케이션은 Mendix Public Cloud에 배포할 수 없습니다.

## SALT 기반 라이선스 획득

구매 시 SALT 기반 라이선스 파일이 이메일로 전송됩니다.

## Siemens License Server 설치

Siemens License Server(SLS)는 SALT 기반 라이선스를 검증하는 데 필요합니다. 적절한 라이선스 검증을 위해 다음 요구 사항을 충족해야 합니다:

* SLS는 배포된 Mendix 애플리케이션과 동일한 환경 내에 설치되어야 합니다
* SALT 라이선스를 사용하는 모든 Mendix 애플리케이션은 SLS에 액세스할 수 있어야 합니다
* 라이선스 서버는 런타임에 Mendix 애플리케이션 라이선스를 검증하기 위해 SALT 라이선스 파일에 액세스할 수 있어야 합니다

Siemens License Server를 설치하고 라이선스 파일을 구성하는 방법에 대한 자세한 지침은 다음 Siemens 지원 리소스를 참조하십시오:

* [Siemens License Server](https://support.sw.siemens.com/en-US/product/1586485382)
* [Getting Started with Siemens Advanced Licensing Technology (SALT) and the Siemens License Server (SLS)](https://support.sw.siemens.com/en-US/product/1586485382/knowledge-base/MG612613)

## Mendix 애플리케이션 구성

SALT 라이선스를 사용하는 각 Mendix 애플리케이션은 다음 [런타임 설정](/refguide/custom-settings/)으로 구성해야 합니다:

```
License.SaltLicenseLocation = port@host
```

* `port`: 라이선스 서버 설치 중에 지정된 포트 번호입니다.
* `host`: 라이선스 서버가 실행되는 머신의 호스트 이름 또는 IP 주소입니다.

런타임 설정을 구성하고 Mendix 애플리케이션을 시작한 후 애플리케이션은 Siemens License Server에 연결하여 SALT 라이선스를 검증합니다.

## FAQ

### Mendix 애플리케이션은 언제 라이선스 서버에 연결합니까?

Mendix 애플리케이션은 시작 시 라이선스를 검색하기 위해 라이선스 서버에 연결합니다. 이 초기 연결 후에는 라이선스 서버에 대한 지속적인 연결을 유지하지 않습니다.

### 라이선스 서버를 사용할 수 없는 경우 어떻게 됩니까?

Mendix 애플리케이션이 실행 중일 때 라이선스 서버를 사용할 수 없게 되어도 애플리케이션의 현재 작업에는 영향을 미치지 않습니다. 그러나 시작 중에 라이선스 서버를 사용할 수 없으면 Mendix 애플리케이션은 체험판 모드로 시작됩니다. 이를 해결하려면 라이선스 서버가 사용 가능해지면 Mendix 애플리케이션을 다시 시작하십시오.
