---
title: "앱 배포"
linktitle: "배포"
url: /deployment/
description: "다양한 환경에 Mendix 앱을 배포하는 방법과 해당 배포를 관리하는 방법을 설명합니다."
weight: 32
no_list: false 
description_list: true
cascade:
  - content_type: "Deployment"
  - mendix_version: 10
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 소개

Mendix 애플리케이션을 배포하는 방법에는 여러 가지가 있습니다. 개발 및 테스트를 위해 로컬 머신에 배포할 수 있습니다. 무료 앱과 라이선스 앱 모두의 기본 배포 위치인 Mendix Cloud에 배포할 수 있습니다. 또한 SAP Business Technology(SAP BTP) Platform, Kubernetes 및 Cloud Foundry 기반 플랫폼, Docker 컨테이너, Azure, 또는 직접 구성한 서버에도 배포할 수 있습니다.

{{% alert color="warning" %}}
각 앱은 로컬 테스트 외에 하나의 대상 플랫폼 유형(예: Mendix Cloud 노드)에만 배포할 수 있습니다.
{{% /alert %}}

{{% alert color="warning" %}}
대상 플랫폼에 따라 지원되는 기능이 다를 수 있으므로, 플랫폼에 의존하는 일부 기능은 다르게 동작할 수 있습니다(예: Cloud Foundry, Kubernetes, 또는 Windows 서버). 특정 기능을 사용하려면 선택한 대상 플랫폼에서 해당 기능이 지원되는지 확인하십시오.
{{% /alert %}}

이 문서 카테고리에는 클라우드 또는 온프레미스에서 Mendix 앱을 배포하고 관리하는 데 도움이 되는 단계별 지침과 추가 참조 자료가 포함되어 있습니다. 다음과 같은 섹션으로 구성되어 있습니다:

* [일반](/developerportal/deploy/general/) – 다양한 환경에서의 배포에 적용되는 정보를 포함합니다
* 환경별 섹션 – [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) 및 [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/)과 같은 특정 환경에서의 앱 배포 및 유지 관리에 대한 지침을 포함합니다
* [모바일 앱](/developerportal/deploy/mobileapp/) – 모바일 앱을 게시하기 위한 지침을 포함합니다(예: Apple 또는 Google 스토어)

## 로컬 실행 또는 미리 보기

Studio Pro에서 도구 모음의 **Run Locally** ({{% icon name="controls-play-filled" %}})를 클릭하여 앱을 로컬에서 실행할 수 있습니다. **View App** 버튼을 사용하여 *localhost*에서 브라우저를 통해 실행 중인 앱을 직접 확인할 수 있습니다.

개발 프로세스의 속도를 높이기 위해 Studio Pro 내에서 수행하는 대부분의 변경 사항은 "즉시 업데이트"를 사용하여 로컬에서 실행 중인 앱에 즉시 반영됩니다. 그러나 일부 변경 사항(예: 도메인 모델 변경)은 전체 앱이 다시 시작될 때까지 반영되지 않습니다.

## Mendix Cloud {#mendix-cloud}

Mendix Cloud는 Mendix Platform을 시작할 때 기본 배포 옵션입니다. 통합 솔루션으로서, Mendix Cloud의 라이선스 노드에는 여러 환경, 백업, 모니터링 및 고가용성이 포함됩니다.

Mendix Studio Pro 내에서 Mendix Cloud에서 사용 가능한 클라우드 노드를 확인할 수 있습니다. Mendix Portal에서 배포 패키지(MDA)를 생성할 수 있으며, 거기서 패키지를 전송하고 애플리케이션 실행을 시작할 수 있습니다.

자세한 내용은 [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) 및 [Mendix Cloud에 앱 배포](/developerportal/deploy/mendix-cloud-deploy/deploying-an-app/)를 참조하십시오.

### Mendix Cloud Dedicated {#mendix-cloud-dedicated}

조직은 [Mendix Cloud Dedicated](https://www.mendix.com/evaluation-guide/app-lifecycle/mendix-cloud-overview/#mendix-cloud-vpc)라는 자체 Mendix Cloud를 보유할 수도 있습니다. 이것은 Mendix Cloud와 동일하게 작동하며, 앱이 실행되는 클러스터가 다른 고객과 공유되지 않는다는 점이 다릅니다. 조직의 앱만 이 클러스터에서 실행됩니다. 또한 네트워크를 통해 다른 시스템에 직접 액세스할 수 있습니다.

## SAP Business Technology Platform (SAP BTP)

SAP 앱 템플릿에서 앱을 생성하면 Mendix Portal이 SAP BTP에서 환경 생성을 안내합니다. 그런 다음 Studio Pro 내에서 직접 SAP BTP 환경에 앱을 배포할 수 있습니다.

자세한 내용은 [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/)을 참조하십시오.

## Siemens Insights Hub

Siemens의 클라우드 기반 개방형 IoT 운영 체제인 Insights Hub에 앱을 배포할 수 있습니다. 여기서 Insights Hub 내에 보유된 정보를 활용하고 선택한 Insights Hub 테넌트와 앱을 공유할 수 있습니다.

이 방법에 대해 알아보려면 [Siemens Insights Hub](/developerportal/deploy/deploying-to-mindsphere/)를 참조하십시오.

## Mendix on Kubernetes

Mendix on Kubernetes를 사용하면 프라이빗 Kubernetes 클러스터에서 Mendix 앱을 배포하고 관리할 수 있습니다.

이에 대한 지침은 [Mendix on Kubernetes](/developerportal/deploy/private-cloud/)에서 확인할 수 있습니다.

## Cloud Foundry

Studio Pro 내에서 Cloud Foundry 기반 플랫폼에 직접 배포할 수 있습니다. 시작하려면 [Cloud Foundry](/developerportal/deploy/cloud-foundry-deploy/) 및 [Cloud Foundry Mendix Buildpack](https://github.com/mendix/cf-mendix-buildpack)을 참조하십시오.

## Docker 및 Kubernetes

Mendix는 Docker 컨테이너에 배포하여 높은 확장성의 솔루션과 자동화된 전달 파이프라인(CI/CD)을 제공할 수 있습니다.

빌드팩 사용 방법에 대한 지침은 [Mendix 앱에서 Docker 이미지 빌드하기](/developerportal/deploy/docker-deploy/)에서 확인할 수 있습니다.

Docker 빌드팩은 [Mendix Docker Buildpack](https://github.com/mendix/docker-mendix-buildpack)에서 사용할 수 있습니다.

## Azure

Azure에 배포하는 것은 [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/mendix.mendix-pro)에서 가능합니다.

### Mendix on Azure

Mendix on Azure는 Mendix on Kubernetes의 일부 기능을 의견이 반영된 방식으로 활용하는 배포 옵션입니다. 자세한 내용은 [Mendix on Azure](/developerportal/deploy/mendix-on-azure/)를 참조하십시오.

{{% alert color="info" %}} 이 기능은 현재 참여 고객에게 제공됩니다. 자세한 내용은 Customer Success Manager에게 문의하십시오. {{% /alert %}}

## 온프레미스

Mendix 애플리케이션을 온프레미스에 배포하는 방법을 알아보려면 [Microsoft Windows에 Mendix 배포하기](/developerportal/deploy/deploy-mendix-on-microsoft-windows/) 및 [Linux 배포](/developerportal/deploy/linux/)를 참조하십시오.

## Industrial Edge의 Mendix 애플리케이션

Industrial Edge에 Mendix 앱을 가져올 수 있습니다. Industrial Edge는 공장 현장에 가까운 컴퓨팅 플랫폼에서 다양한 벤더의 애플리케이션을 호스팅하는 Siemens 플랫폼입니다. 이를 통해 자동화 확장, 까다로운 스트림 처리 및 학습 알고리즘의 배포, 그리고 사이트 자동화를 위한 통합 코드 호스팅이 가능합니다.

이 방법에 대한 자세한 내용은 [Industrial Edge의 Mendix 애플리케이션](/developerportal/deploy/mendix-app-on-industrial-edge/)을 참조하십시오.

## 이 카테고리의 문서
