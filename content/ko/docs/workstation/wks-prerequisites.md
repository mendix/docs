---
title: "Mendix Workstation 시작하기"
linktitle: "시작하기"
url: /mendix-workstation/prerequisites/
description: "Mendix Workstation의 요구 사항을 문서화합니다."
weight: 10
---

## 소개

이 문서에서는 Mendix Workstation의 시스템 요구 사항을 설명합니다.

## Workstation Client 다운로드 링크

Mendix Workstation은 Mendix Marketplace에서 다운로드할 수 있습니다:

* [Microsoft Windows (글로벌 설치 프로그램)](https://marketplace.mendix.com/link/component/247448)
* [Microsoft Windows (포터블)](https://marketplace.mendix.com/link/component/247456)
* [Linux ARM 64](https://marketplace.mendix.com/link/component/247459)

## 시스템 요구 사항

* 운영 체제 - Windows 10 또는 Windows 11 (64비트); Linux ARM64
* 메모리 - 최소 4 GB RAM (최적 성능을 위해 8 GB 권장)
* 디스크 공간 - 설치를 위한 400 MB의 여유 디스크 공간

## 접근 요구 사항

* Mendix 계정
* 구성을 위한 Mendix Workstation Management 접근 권한

## 네트워크 구성

Mendix Workstation을 구현하기 전에 다음 단계를 수행하십시오:

1. Workstation 사용자가 Mendix Cloud에 접근할 수 있는지 확인하십시오.
2. 통신에 필요한 포트를 개방하십시오(예: HTTPS용 TCP 443).
3. 해당되는 경우, 방화벽 또는 안티바이러스 소프트웨어의 허용 목록에 Workstation Client를 추가하십시오.

### 사용자 정의 인증서 및 프록시 설정

Workstation Client는 Workstation Management와의 연결을 설정하기 위해 운영 체제의 인증서와 프록시 환경 변수를 사용합니다. 대부분의 통제된 기업 환경에서는 IT 부서가 직원 컴퓨터에 이러한 설정을 사전 구성합니다.

사용자 정의 프록시 구성을 사용하려면 명령줄에서 Workstation Client를 시작하고 [여기](https://github.com/nodejs/undici/blob/main/docs/docs/api/EnvHttpProxyAgent.md#class-envhttpproxyagent)에 설명된 대로 환경 변수를 설정해야 합니다. 예를 들어, Windows 명령 프롬프트에서 다음 명령을 실행하십시오:

```
set HTTPS_PROXY=[PROXY_IP_ADDRESS] && "C:\Program Files\Mendix Workstation\Mendix Workstation.exe"
```

## 장치 연결

Mendix Workstation으로 장치를 연결하기 전에 다음 단계를 수행하십시오:

* 장치가 올바르게 설정되어 컴퓨터에 연결되어 있는지 확인하십시오.
* 장치 드라이버가 설치되어 있고 최신 상태인지 확인하십시오.
* 장치가 사용하는 연결 매개변수를 기록하십시오:

    * 시리얼 포트(Serial Port) 연결의 경우 - 보레이트(baud rate), 데이터 비트, 패리티 및 스톱 비트, 흐름 제어
    * TCP/IP 연결의 경우 - IP 주소 및 포트

* 통신 프로토콜 및 구성 방법을 설명하는 장을 포함한 장치의 매뉴얼 및 기술 문서를 확보하십시오.
* 장치 기술 문서에서 권장하는 도구 또는 PuTTY와 같은 일반적인 도구를 사용하여 운영 체제에서 연결과 프로토콜을 테스트하십시오.
    * 시리얼 포트(Serial Port) 연결의 경우 - 장치를 열고 기본 장치 명령을 테스트하십시오.
    * TCP/IP 연결의 경우 - 장치를 핑(Ping)하여 네트워크에서 접근 가능하고 방화벽에 의해 차단되지 않는지 확인한 다음, 기본 장치 명령을 테스트하십시오.

## Mendix Workstation 작업 시 모범 사례

Mendix Workstation으로 작업을 시작할 때 다음 모범 사례를 참고하십시오.

### 보안 권장 사항

자세한 내용은 [Mendix Workstation 보안 모범 사례](/mendix-workstation/security/)를 참조하십시오.

### 성능 최적화

* 워크스테이션이 권장 하드웨어 사양을 충족하는지 확인하십시오.
* 성능 향상을 위해 백그라운드 프로세스를 최소화하십시오.
* Connector의 나노플로우(Nanoflow)를 재사용하여 앱 로직을 구축할 때, 서버 연결이 필요한 마이크로플로우(Microflow) 호출 및 [기타 액션](https://docs.mendix.com/refguide/nanoflows/#logic-where-no-connection-is-needed)을 최소화하십시오. Mendix Workstation의 핵심 이점 중 하나는 클라이언트 측 데이터 처리입니다. Mendix 런타임에 대한 모든 호출은 성능 오버헤드를 추가합니다.  

### 유지 보수 가이드라인

* 워크스테이션 및 장치 구성을 정기적으로 검토하고 업데이트하십시오.
* 워크스테이션 상태를 모니터링하고 연결 문제를 신속하게 해결하십시오.
