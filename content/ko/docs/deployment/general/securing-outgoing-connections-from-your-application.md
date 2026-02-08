---
title: "애플리케이션의 안전한 아웃바운드 연결"
linktitle: "안전한 아웃바운드 연결"
url: /developerportal/deploy/securing-outgoing-connections-from-your-application/
weight: 20
description: "애플리케이션에서 외부 세계로의 연결을 보호하기 위해 사용할 수 있는 방법을 설명합니다."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Mendix Cloud의 모든 인바운드 연결은 TLS로 보호되지만, 앱은 인터넷을 통해 다른 서비스에도 연결할 수 있습니다. 이러한 서비스 중 일부는 타사 서비스이며 서비스 소유자가 설정한 보안 설정과 일치시켜야 합니다. 때로는 서비스가 사용자 또는 회사의 다른 사람이 소유할 수 있으며 연결 보안 구현 방법을 제어할 수 있습니다.

*백엔드 서비스*에서 인터넷을 통해 *앱*으로의 연결을 보호하는 데 사용되는 다양한 방법이 있습니다. 이 문서는 때때로 Mendix Cloud를 언급하지만, 방법들은 공용 클라우드 또는 온프레미스 배포와 같은 다른 모든 설정에도 적용 가능합니다.

## 시나리오

### 시나리오 1 - 암호화 없음

경우에 따라 연결에 대한 암호화 및 인증이 불필요합니다. 이 경우 암호화되지 않은 TCP/UDP 기반 프로토콜을 사용할 수 있습니다. 이는 이 연결을 통해 전송된 모든 데이터가 가로채지면 읽힐 수 있음을 의미합니다.

{{< figure src="/attachments/deployment/general/securing-outgoing-connections-from-your-application/19399049.png" class="no-border" >}}

### 시나리오 2 - TLS/HTTPS

가장 일반적인 시나리오입니다. 클라이언트 앱이 백엔드 서비스의 서버 인증서를 확인하고 암호화된 연결을 설정합니다. 신뢰는 클라이언트의 신뢰 저장소에 있는 인증 기관에 대한 신뢰 체인을 통해 확인됩니다.

암호화를 사용하면 연결을 통해 전송 및 수신된 데이터는 다른 당사자에 의해 가로채도 디코딩될 수 없으므로, 클라이언트를 인증하기 위해 HTTP 헤더와 함께 사용자 이름/비밀번호 또는 토큰을 사용할 수 있습니다. 이것은 기본적으로 TLS를 지원하는 서비스에 사용할 수 있습니다.

Mendix Cloud에서 서비스에 연결하려면 외부 IP 주소와 포트에서 서비스가 노출되어야 합니다. 이 서비스가 사용자 소유인 경우 Mendix Cloud만 연결하도록 방화벽을 설정할 수 있습니다. 앱의 IP 주소 범위에 대한 자세한 내용은 [Mendix IP Addresses: Outgoing IP](/developerportal/deploy/mendix-ip-addresses/#outgoing)를 참조하십시오.

{{< figure src="/attachments/deployment/general/securing-outgoing-connections-from-your-application/19399047.png" class="no-border" >}}

### 시나리오 3 - *클라이언트 인증서 검증*이 포함된 TLS/HTTPS

추가 보안을 위해 서버는 클라이언트 인증서를 확인하여 클라이언트의 신원을 검증할 수 있습니다. 자세한 내용은 [인증서](/developerportal/deploy/certificates/)를 참조하십시오.

시나리오 2의 나머지 보안 기능도 적용할 수 있습니다.

{{< figure src="/attachments/deployment/general/securing-outgoing-connections-from-your-application/19399050.png" class="no-border" >}}

### 시나리오 4 - TLS 오프로딩을 위한 프록시 서버

백엔드 서비스가 기본적으로 HTTPS를 지원하지 않는 경우 앞에 NGINX 또는 HAProxy와 같은 HTTPS 역방향 프록시 서버를 추가할 수 있습니다. 이 HTTPS 역방향 프록시는 선택적으로 방화벽 역할도 할 수 있으며 고가용성 방식으로 배포할 수 있습니다.

동일 리전 내의 백엔드 서비스 마이그레이션은 서비스의 공개 주소에서 분리하여 투명하게 수행할 수 있습니다. Mendix Cloud의 앱은 단순히 HTTPS 엔드포인트에 연결합니다.

{{< figure src="/attachments/deployment/general/securing-outgoing-connections-from-your-application/19399044.png" class="no-border" >}}

### 시나리오 5 - *클라이언트 인증서 검증*이 포함된 TLS 오프로딩 프록시 서버

이 시나리오는 시나리오 4와 동일하지만 한 가지 예외가 있습니다: 앱에 클라이언트 인증서가 포함되어 있으며 프록시 서버가 이를 사용하여 앱의 신원을 검증합니다.

{{< figure src="/attachments/deployment/general/securing-outgoing-connections-from-your-application/19399045.png" class="no-border" >}}

### 시나리오 6 - VPN

{{% alert color="warning" %}}
VPN은 Mendix Cloud에서 전혀 지원되지 않습니다.
{{% /alert %}}

많은 기업에서 자체 사무실, 데이터 센터 및 다른 회사 간의 네트워크 연결을 보호하기 위해 가상 사설망(VPN)을 사용합니다.

이 시나리오에서는 암호화되지 않은 TCP/UDP 프로토콜을 사용할 수 있습니다. 모든 네트워크 간 트래픽은 VPN IPSEC 게이트웨이에 의해 투명하게 암호화됩니다. VPN 연결을 통해 라우팅해야 하는 서브넷은 수동으로 관리해야 하며 DNS 확인은 로컬에서 수행됩니다. 따라서 앱은 도메인 이름이 아닌 IP 주소로 백엔드 서비스에 연결해야 합니다.

다음과 같은 단점이 있습니다:

* DNS를 사용할 수 없음
* 장애 조치 데이터 센터가 있는 경우 VPN은 관리가 매우 어려워짐
* 연결이 (가상) 머신에 추가되어 컨테이너화 기반 다중 테넌트 퍼블릭 클라우드 환경에 배포하는 것이 어려움
* VPN 게이트웨이가 두 개의 추가 단일 장애 지점을 추가할 수 있음

{{< figure src="/attachments/deployment/general/securing-outgoing-connections-from-your-application/19399048.png" class="no-border" >}}

### 시나리오 7 - TCP 프록시로서의 SSH 서버

특정 배포(예: 비 HTTP 프로토콜이 사용되는 경우)의 경우 프록시로 SSH 서버를 설정할 수 있습니다. 그런 다음 Mendix 내의 Java Action에서 [Jsch](http://www.jcraft.com/jsch/) 라이브러리를 사용하여 다른 네트워크로의 보안 채널을 설정하고 SOCKS 또는 HTTP 프록시를 사용하여 요청할 수 있습니다.

SSH 사용 서버를 설정하고 공개/개인 키 쌍을 설정하는 것은 대부분의 시스템 관리자에게 간단한 작업이지만 HTTPS(역방향) 프록시 서버만큼 간단하고 표준화되어 있지 않습니다. HTTP 기반 프로토콜을 사용할 수 있는 경우 시나리오 2~5가 선호됩니다.

{{< figure src="/attachments/deployment/general/securing-outgoing-connections-from-your-application/19399052.png" class="no-border" >}}

## 참고 사항

클라이언트 인증서는 Mendix Portal 내에서 Mendix Cloud 앱에 추가할 수 있습니다. 자세한 내용은 [인증서](/developerportal/deploy/certificates/)를 참조하십시오.

시나리오 2~5는 Mendix 핵심 기능뿐만 아니라 많은 Mendix Marketplace 모듈 및 기타 콘텐츠에서도 기본적으로 작동하는 HTTP 기반 프로토콜에 가장 적합합니다. 그러나 Java Action을 사용하면 추가 보안을 위해 TLS로 래핑할 수 있는 대부분의 TCP 기반 연결에 적용할 수 있습니다.
