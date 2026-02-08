---
title: "Mendix on Azure 릴리스 노트"
linktitle: "Mendix on Azure"
url: /releasenotes/developer-portal/mendix-on-azure/
description: "Mendix on Azure에 대한 릴리스 노트"
weight: 25
---

이 릴리스 노트는 [Mendix on Azure](/developerportal/deploy/mendix-on-azure/)에 대한 배포 변경 사항을 다룹니다. 다른 배포 대상에 대한 별도의 릴리스 노트가 있습니다. 자세한 내용은 [배포](/releasenotes/developer-portal/deployment/) 릴리스 노트 페이지를 참조하세요.

Mendix 배포의 현재 상태에 대한 정보는 [Mendix Status](https://status.mendix.com/)를 참조하세요.

### Release date: January 29, 2026

* 로그인 경험을 개선하기 위해, Azure에 성공적으로 로그인한 후 이전에 표시되던 불필요한 팝업을 제거했습니다.
* 이제 Cluster Overview 페이지에서 클러스터의 Azure Resource Group 이름을 직접 확인하실 수 있습니다.
* 클러스터 초기화 시 Platform 계정에 대한 사전 검사에서 사용자가 멈추는 문제를 해결했습니다.

### Release date: January 22, 2026

* 새 클러스터 초기화 시 사용자 정의 CA 인증서를 추가할 수 없던 문제를 수정했습니다.
* 클러스터에 추가된 사용자 정의 CA 인증서를 제거할 수 없던 문제를 수정했습니다.
* PostgreSQL에 연결할 수 없을 때 표시되는 사전 검증 오류 메시지를 개선하여, 근본 원인을 더 명확하고 쉽게 진단할 수 있도록 했습니다.

### Known issues:

* 한번 추가된 사용자 정의 CA 인증서는 제거할 수 없습니다. 이 문제는 향후 릴리스에서 수정될 예정입니다.

### Release date: January 8, 2026

* Mendix on Azure 포털에서 사용자 정의 CA 인증서를 업로드하고 활성화하는 옵션을 추가했습니다.
* 클러스터 초기화 후 다음 단계를 안내하는 동영상이 이제 Mendix on Azure 포털의 **Cluster Overview** 페이지에서 제공됩니다.
* Platform 계정의 사전 검사가 실패하는 문제를 수정했습니다. 이 수정으로 불필요한 지원 티켓 생성을 방지합니다.
* 클러스터 관리자가 자신이 초기화한 클러스터를 볼 수 없는 경우가 있던 문제를 수정했습니다.

### Known issues:

* **Infrastructure Redundancy** 및 **Custom CA Certificates**와 같은 필드에 아직 번역이 제공되지 않습니다.
* 클러스터 초기화 설정 중에는 사용자 정의 CA 인증서를 활성화할 수 없으며, 초기화 후에 추가해야 합니다.
* 한번 추가된 사용자 정의 CA 인증서는 제거할 수 없습니다. 이 문제는 향후 릴리스에서 수정될 예정입니다.

### Release date: November 27, 2025

* Operator, Agent, Build, Sidecars 및 NGINX 로그를 이제 Grafana 내에서 직접 모니터링 및 문제 해결을 위해 접근할 수 있습니다.
* 클러스터 초기화 및 클러스터 편집 시 사용할 수 있는 새로운 Infrastructure Redundancy 구성 옵션을 도입하여, 복원력을 강화하고 VM, Storage 및 Database 이중화에 대한 더 명확한 제어를 제공합니다.
* Read replica가 활성화된 경우 Terraform apply가 실패하는 문제를 수정했습니다. (Ticket 458)

### Known issues:

* 일부 시나리오에서는 로그인된 계정에 따라 초기화된 클러스터가 동일 구독 내 다른 사용자에게 생성 직후 표시될 수 있습니다. 이 문제에 대한 수정 작업을 적극적으로 진행하고 있습니다.

### Release date: November 6, 2025

* 해당 Microsoft 엔드포인트를 사용할 수 없는 경우 AKS Node VM Size 필드가 비어 있게 표시되는 문제를 해결했습니다. 이제 이러한 경우 해당 필드는 선택할 수 없으며, 클러스터 초기화 시 선택된 값이 자동으로 적용됩니다.
* Cluster Details 섹션에서 AKS Node VM Size와 Postgres Compute Size를 모두 직접 확인할 수 있어, 클러스터 구성에 대한 즉각적인 인사이트를 얻을 수 있습니다.
* 새로 추가된 Cluster Manager가 포털을 최초 방문하기 전까지 Mendix on Azure Portal에서 클러스터를 볼 수 없던 문제를 해결했습니다.
* Edit Cluster 흐름에서 AKS Network Isolation 기능이 비활성화되었습니다.
* 더 나은 명확성을 위해 **Initialize Cluster** 및 **Edit Cluster** 페이지에서 텍스트를 **Managed Grafana**에서 **Managed Grafana Accessibility**로 업데이트했습니다.
* 선택한 리전에서 PostgreSQL 할당량을 사용할 수 없는 경우, 이제 명확한 오류 메시지를 받아 상황을 더 빠르게 이해하고 해결할 수 있습니다.
* **Initialize Cluster** 흐름에서 Preflight 검사 레이블을 **Provisioning**에서 **Checking**으로 업데이트하여 더 정확한 상태 표시를 제공합니다.
* 동일 구독 내에서 두 개 이상의 클러스터가 동시에 초기화될 때 클러스터 초기화가 진행되지 않던 문제를 해결했습니다. 이제 문제 없이 여러 클러스터를 초기화할 수 있습니다.

### Release date: October 23, 2025 - [General Availability (GA) Release](/releasenotes/release-status/#general-availability)

* 보안 침해 및 네트워킹 문제의 위험을 최소화하기 위해, 새 클러스터 생성 시 **Enable AKS Network Isolation** 기능을 추가했습니다. 이 기능은 Initialize cluster 및 Edit cluster 흐름에서 활성화할 수 있습니다. 단, Initialize 흐름에서 활성화된 경우 Edit Cluster 흐름에서 비활성화할 수 없습니다.
* Grafana 대시보드의 로그 수준 처리를 개선했습니다. 이제 로그가 JSON 형식으로 제공됩니다.
* Read replica 데이터베이스에 클러스터 태그가 추가되지 않던 문제를 수정했습니다.
* 클러스터 초기화 흐름에 하나의 Platform 계정만 사용해야 하는지 검증하는 새로운 사전 검사를 추가했습니다.
* Mendix on Azure 사용자는 이제 Mendix on Kubernetes Portal을 통해 환경 백업을 업로드하고 다운로드할 수 있습니다. 자세한 내용은 [Backups in Mendix on Azure](/developerportal/deploy/mendix-on-azure/backups/)를 참조하세요.
* 환경의 자동 야간, 주간 또는 월간 백업을 수행하는 새 기능을 추가했습니다. 자세한 내용은 [Backups in Mendix on Azure](/developerportal/deploy/mendix-on-azure/backups/)를 참조하세요.
* [Cloud tokens](/control-center/cloud-tokens/)는 이제 120일 이상 전에 생성된 환경에서 소비됩니다. 이는 앱 환경 생성 후 처음 120일(4개월)이 지나면 Mendix가 Cloud Token을 통해 Mendix on Azure 사용 요금을 부과하기 시작한다는 것을 의미합니다. Cloud Token이 충분하지 않은 경우 Mendix에서 고객에게 연락합니다.

### Release date: October 16, 2025

* Mendix on Kubernetes Portal에서 [Mendix on Azure](/developerportal/deploy/mendix-on-azure/) 클러스터에 추가된 후, [cluster manager](/developerportal/deploy/mendix-on-azure/configuration/#cluster-manager)는 이제 Mendix on Azure Portal에서 클러스터를 보고 편집할 수 있습니다.
* 기존 클러스터에서 Read replica를 활성화할 때 발생하던 PostgreSQL 티어 유효성 검사 오류를 해결했습니다.

### Release date: September 25, 2025

* 인프라 업그레이드 중 앱 가용성을 보장하기 위해, 새로 생성된 Mendix 앱의 기본 복제본 수가 2로 설정되었습니다.
* 데이터 접근의 유연성을 높이기 위해, 새 클러스터 생성 시 **Enable Read Replica Database access**를 허용하는 새 기능을 추가했습니다. 이 기능은 기본적으로 **No**(비활성화)로 설정되어 있습니다. 활성화 방법에 대한 자세한 내용은 [Direct App Database Access](/developerportal/deploy/mendix-on-azure/configuration/direct-database-access/)를 참조하세요.
* 기본 Grafana 대시보드의 레이블을 개선하여 표시되는 메트릭을 더 잘 반영하도록 했습니다.
* 사용자가 생성한 지원 티켓이 동일 구독 내 다른 사용자에게 표시되지 않던 문제를 수정했습니다.
* 가독성과 이해를 위해 **Initialize Cluster** 및 **Edit Cluster** 페이지의 일부 문구와 구조를 업데이트했습니다.
* 이전 릴리스에서 새 환경 생성 시 데이터베이스 프로비저닝이 실패하던 문제를 해결했습니다.

### Known issues:

* 현재 클러스터 **Edit** 화면의 **updated** 또는 **created** 태그가 클러스터 리소스에 첨부되지 않습니다.

### Release date: September 11, 2025

* **Cluster Overview** 페이지의 오류 메시지에 대한 번역 지원을 추가하여 번역을 개선했습니다.
* Cluster Details 페이지에서 **Logging and Monitoring**이 두 번 표시되던 번역 문제를 수정했습니다.
* Admin 및 Contributor 그룹의 사용자가 **Cluster Overview**에서 관리 앱을 볼 수 없던 문제를 수정했습니다.

### Known issues:

* 현재 클러스터 **Edit** 화면의 **updated** 또는 **created** 태그가 클러스터 리소스에 첨부되지 않습니다.
* 지원 티켓 가시성은 현재 구독 내 모든 티켓이 아닌 개별 사용자가 생성한 티켓으로 제한됩니다.
* 현재 Mendix on Azure 클러스터에서 새 환경을 생성할 수 없습니다. 이 문제에 대한 수정을 곧 릴리스할 예정입니다.

### Release date: August 7, 2025

* Owner 또는 Contributor 역할을 가진 사용자는 이제 구독 내의 초기화되지 않은 모든 클러스터를 볼 수 있어, 더 나은 가시성과 조율이 가능합니다.
* 클러스터 배포 진행 상태가 이제 실제 배포 상태를 더 정확하게 반영합니다.
* 새 사용자가 클러스터를 초기화하기 전에 먼저 Mendix on Kubernetes 포털을 방문해야 하던 문제를 수정했습니다. 이제 Mendix on Kubernetes에서 직접 클러스터를 초기화할 수 있습니다.
* Mendix on Azure 포털에서 일본어 및 한국어 번역의 정확성과 일관성을 개선했습니다.
* 클러스터 초기화가 이제 Owner 역할을 가진 사용자로 제한됩니다. 이전에 Contributor 역할을 가진 사용자도 클러스터를 초기화할 수 있었던 문제가 해결되었습니다.

### Release date: July 3, 2025

* Mendix on Azure 사용자는 이제 Mendix on Kubernetes Portal을 통해 환경 백업을 생성하고 복원할 수 있습니다. 자세한 내용은 [Backups in Mendix on Azure](/developerportal/deploy/mendix-on-azure/backups/)를 참조하세요.
* [Cloud tokens](/control-center/cloud-tokens/)는 이제 평가판이 활성화된 경우를 제외하고, Mendix on Azure에서 클러스터 초기화 및 환경 생성에 필요합니다. 사전 검사에서 이제 충분한 유효 cloud token이 있는지 검증합니다.
* Mendix on Azure 포털이 이제 일본어와 한국어로 제공되어, 해당 언어 사용자의 경험을 향상시킵니다. 언어 기본 설정은 **Preferences**의 **Work environment** 탭에서 조정할 수 있습니다.
* 리소스 프로비저닝이 성공적으로 완료되었음에도 불구하고 오류 메시지가 잘못 표시되던 포털 문제를 수정했습니다.
* 클러스터 배포 재시도 처리를 개선했습니다.
* Managed Grafana를 버전 11.0으로 업그레이드했습니다.
* 클러스터의 **Initialize** 및 **Edit** 단계에서 프라이빗 접근으로 Managed Grafana를 활성화하는 옵션을 추가했습니다.
* 사전 검사에서 이제 클러스터를 초기화하는 데 사용된 Azure 계정에 대상 구독에 Owner 역할이 할당되어 있는지 검증할 수 있습니다.

### Release date: May 29, 2025

* 더 나은 사용자 경험을 제공하기 위해 사전 검사 프로세스를 강화했습니다.

### Release date: April 24, 2025

* 이제 클러스터가 초기화된 후에도 **Additional Options**를 업데이트할 수 있습니다.
* 더 나은 사용자 경험을 제공하기 위해 사전 검사 프로세스를 강화했습니다.
* **Review and Initialize** 화면에 뒤로가기 버튼이 추가되어, 사용자가 Provision 화면으로 돌아갈 수 있습니다.
* **Cluster Overview** 페이지에 상태별 클러스터 필터링을 위한 새로운 드롭다운 필터가 도입되었습니다.
* 사용자는 이제 클러스터 내 프로비저닝된 리소스의 배포 진행 상황을 나타내는 메시지를 볼 수 있습니다.
* **Support Overview** 페이지에 각 지원 티켓을 누가 생성했는지 표시하는 Creator 열이 추가되었습니다.
* 해당 지원 티켓을 생성하지 않은 사용자에 대해 Zendesk 티켓 링크를 비활성화하여 문제를 해결했습니다.

### Release date: March 20, 2025

* 초기화 흐름에 Custom Tags 옵션을 도입했습니다.
* 특정 클러스터에 대해 Mendix on Kubernetes Portal에서 제거된 후에도 삭제된 클러스터 관리자가 Mendix on Azure 포털에서 여전히 클러스터에 접근할 수 있던 문제를 해결했습니다.
* 초기화 흐름에서 Postgress Compute SKU 및 Postgress Storage Performance Tier for IOPS를 구성할 수 있습니다.

### Release date: March 3, 2025

Mendix on Azure의 초기 릴리스는 Microsoft Azure 환경에 Mendix 애플리케이션을 배포하기 위한 간소화되고 통합된 방법을 제공합니다. 사용 가능한 기능에 대한 자세한 내용은 [Mendix on Azure](/developerportal/deploy/mendix-on-azure/)를 참조하세요.
