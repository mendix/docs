---
title: "다양한 배포 전략에 대한 지원"
url: /support/deployment-strategy-support/
weight: 50
description: "Mendix 지원 포털에서 지원되는 구성 요소를 설명합니다."

#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

멀티 클라우드 전략을 통해 Mendix는 구축한 앱을 모든 클라우드에 배포할 수 있도록 합니다. [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/), Mendix Cloud Dedicated, [Mendix on Kubernetes](/developerportal/deploy/private-cloud/), [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/) 또는 기타 온프레미스 및 클라우드 아키텍처에 배포할 수 있습니다.

전체 스택은 아래 표에 나와 있습니다. 이 표는 **Mendix**에서 지원하는 구성 요소, **Mendix 파트너** 또는 제3자가 지원하는 구성 요소를 나타냅니다. 지원이 표시되지 않은 경우, 해당 구성 요소의 지원을 직접 준비해야 합니다. 각 구성 요소는 *Mendix 지원*의 [Mendix 스택의 구성 요소](/support/#components)에서 더 자세히 설명되어 있습니다.

| 스택 (자세한 내용은 [Mendix 스택의 구성 요소](/support/#components)를 참조하십시오) | Mendix Cloud | Cloud Dedi&shy;cated | Mendix on Kubernetes - Con&shy;nected | Mendix on Kubernetes - Stand&shy;alone | Private Mendix Platform | SAP BTP | Cloud Foundry/ Docker & Kuber&shy;netes | Tradi&shy;tional³ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Appli&shy;cation** | | | | | | | | |
| **Platform Support&shy;ed Marketplace content** | Mendix | Mendix | Mendix | Mendix | Mendix | Mendix | Mendix | Mendix |
| **Commun&shy;ity Support&shy;ed Marketplace content** | | | | | | | | |
| **Runtime** | Mendix | Mendix | Mendix | Mendix | Certified Mendix Partner² | Mendix | Mendix | Mendix |
| **Deploy&shy;ment Pipe&shy;line** | Mendix | Mendix | Mendix | | Certified Mendix Partner²  | | | |
| **Backups/ Logs/ Metrics** | Mendix | Mendix | | | Certified Mendix Partner² | Mendix Partner¹ | | |
| **Appli&shy;cation Opera&shy;tion** | Mendix | Mendix | Mendix | Mendix | Certified Mendix Partner² | Mendix | Mendix | |
| **Buildpack** | Mendix | Mendix | Mendix | Mendix | Certified Mendix Partner² | Mendix | Mendix | Mendix |
| **Contain&shy;er Platform/ OS/ Java/ Web Server** | Mendix | Mendix | | | Certified Mendix Partner² | Mendix Partner¹ | | |
| **Infra&shy;structure** | Mendix | Mendix | | | Certified Mendix Partner² | Mendix Partner¹ | | |
| **Database/ File Storage/ Network** | Mendix | Mendix | | | Certified Mendix Partner² | Mendix Partner¹ | | |

¹지원은 [SAP 지원](https://launchpad.support.sap.com/#/incident/create/prefilled/comp_name=XX-PART-MDX-RAD)을 통해 이루어집니다.

²지원은 Private Mendix Platform 인증 파트너를 통해 이루어집니다.

³Traditional은 컨테이너화를 사용하지 않고 Windows 또는 Linux에 직접 배포하는 것을 의미합니다.

아래 다이어그램에서는 다음 색상이 사용됩니다:

{{< figure src="/attachments/support/legend.png"   width="50%"  class="no-border" >}}

다이어그램의 개념은 다음과 같이 *Mendix 지원*의 [Mendix 스택의 구성 요소](/support/#components) 섹션에 설명되어 있습니다:

* <sup>1</sup>[데이터베이스, 파일 스토리지 및 네트워크](/support/#database-file-storage-and-network)
* <sup>2</sup>[인프라](/support/#infrastructure)
* <sup>3</sup>[컨테이너 런타임 플랫폼](/support/#container-runtime-platform)
* <sup>4</sup>[Buildpack, m2ee 및 Service Console](/support/#buildpack-m2ee-and-service-console)
* <sup>5</sup>[애플리케이션 운영](/support/#application-operation)
* <sup>6</sup>[로그 및 메트릭](/support/#logs-and-metrics)
* <sup>7</sup>[배포 파이프라인](/support/#deployment-pipeline)
* <sup>8</sup>[런타임](/support/#runtime)
* <sup>9</sup>[Marketplace 구성 요소](/support/#marketplace-components)
* <sup>10</sup>[애플리케이션](/support/#application)

## Mendix 퍼블릭 및 데디케이티드 클라우드

Mendix 퍼블릭 및 데디케이티드 클라우드는 Mendix 플랫폼의 통합된 부분이므로 SLA에 설명된 대로 완전히 지원됩니다.
Mendix 지원팀은 앱 상태, 로그, 그래프 및 모니터링에 접근할 수 있습니다.

{{< figure src="/attachments/support/mendix-cloud.png"   width="75%"  class="no-border" >}}

## Mendix on Kubernetes

Mendix on Kubernetes는 Kubernetes 네이티브 Operator 프레임워크를 기반으로 합니다. 지원되는 Kubernetes 플랫폼은 [Mendix on Kubernetes](/developerportal/deploy/private-cloud/) 문서에서 확인할 수 있습니다. 데이터베이스 및 스토리지와 같은 기타 지원되는 구성 요소는 [시스템 요구 사항](/refguide/system-requirements/)을 확인하십시오. Mendix Gateway Agent 및 Mendix Operator는 Mendix에서 지원합니다.
Mendix 지원팀은 앱 상태, 로그, 그래프 및 모니터링에 접근할 수 없습니다. 이러한 지원 구성 요소에 대한 문제가 있거나 질문을 하려면, 관련 로그, 데이터 및 지원 구성 요소 중 하나에 의해 이슈가 발생했다고 의심하는 이유를 설명하는 자체 분석을 항상 제공하십시오.

{{< figure src="/attachments/support/private-cloud.png"   width="75%"  class="no-border" >}}

## Mendix on Azure

[Mendix on Azure](/developerportal/deploy/mendix-on-azure/)는 Mendix on Kubernetes의 일부 기능을 의견이 반영된 방식으로 활용하는 배포 옵션입니다. Mendix on Azure에 대한 지원 정책의 자세한 내용은 [Mendix on Azure 지원 정책](/developerportal/deploy/mendix-on-azure/support/)을 참조하십시오.

## Private Mendix Platform

Private Mendix Platform은 온프레미스 또는 (가상) Mendix on Kubernetes 환경에서 플랫폼 경험을 제공합니다. Mendix on Kubernetes 및 Kubernetes에 의존하며, 고객 환경의 도구와 통합됩니다. 플랫폼을 설치하고 [구성](/private-mendix-platform-configuration/)을 설정하기 위한 [필수 조건](/private-mendix-platform-prerequisites/)은 [Private Mendix Platform](/private-mendix-platform/) 문서를 참조하고, [지원 환경](/developerportal/deploy/private-cloud-supported-environments/)은 [Mendix on Kubernetes](/developerportal/deploy/private-cloud/) 문서를 참조하십시오.

이 제품은 인증 파트너(또는 인증 고객)에 의해 제공, 관리 및 지원됩니다. 프라이빗 플랫폼과 관련된 문제가 있는 경우, 인증 파트너에게 지원을 문의하십시오.

## SAP Business Technology Platform

Mendix는 SAP Business Technology Platform(SAP BTP)의 SAP Cloud Foundry 환경과의 통합을 제공합니다. Mendix 애플리케이션은 Mendix Cloud Foundry buildpack을 사용하여 SAP BTP에서 실행되도록 빌드됩니다. [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/)에서 지원되는 구성 요소를 확인하십시오.
Mendix 지원팀은 앱 상태, 로그, 그래프 및 모니터링에 접근할 수 없습니다 – 이러한 구성 요소에 대한 지원은 [SAP 지원](https://launchpad.support.sap.com/#/incident/create/prefilled/comp_name=XX-PART-MDX-RAD)에 문의하십시오. 지원 구성 요소에 대한 문제가 있거나 질문을 하려면, 관련 로그, 데이터 및 지원 구성 요소 중 하나에 의해 이슈가 발생했다고 의심하는 이유를 설명하는 자체 분석을 항상 제공하십시오.

{{< figure src="/attachments/support/sap-cloud-platform.png"   width="40%"  class="no-border" >}}

## Cloud Foundry / Docker 및 Kubernetes / 전통적 아키텍처

Mendix는 IBM Cloud, Microsoft Azure, Amazon Web Services(AWS), Red Hat OpenShift 및 Google Cloud Platform을 포함한 모든 잘 알려진 클라우드 제공업체와 호환됩니다.
클라우드 아키텍처에 따라 Mendix 애플리케이션은 [Mendix Cloud Foundry buildpack](https://github.com/mendix/cf-mendix-buildpack), [Mendix Docker Buildpack](https://github.com/mendix/docker-mendix-buildpack)을 사용하거나 Unix 계열 또는 Windows 서버에 빌드됩니다.
Cloud Foundry / Docker 및 Kubernetes / 전통적 아키텍처의 지원되는 구성 요소는 [시스템 요구 사항](/refguide/system-requirements/)을 확인하십시오.

Mendix 지원팀은 앱 상태, 로그, 그래프 및 모니터링에 접근할 수 없습니다. 이러한 지원 구성 요소에 대한 문제가 있거나 질문을 하려면, 관련 로그, 데이터 및 지원 구성 요소 중 하나에 의해 이슈가 발생했다고 의심하는 이유를 설명하는 자체 분석을 항상 제공하십시오.

{{< figure src="/attachments/support/on-premises.png"   width="75%"  class="no-border" >}}
