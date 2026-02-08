---
title: "Private Mendix Platform 사전 요구사항"
url: /private-mendix-platform/prerequisites/
description: "Private Mendix Platform의 요구사항에 대해 설명합니다."
weight: 10
aliases:
    - /private-mendix-platform-prerequisites/
---

## 소개

이 문서는 Private Mendix Platform의 다양한 구성 요소에 대한 시스템 요구사항을 설명합니다.

## 하드웨어 요구사항

성능을 위해 Mendix는 다음과 같은 최소 하드웨어 요구사항을 권장합니다.

### Private Mendix Platform의 Kubernetes 하드웨어 요구사항

| 유형 | 최소 사양 |
| --- | --- |
| CPU | 2코어 |
| 메모리 | 4 GB |
| 데이터베이스 HA | CPU: 1코어; 메모리: 2x2 GB |

### Private Mendix Platform에서 실행되는 앱의 Kubernetes 하드웨어 요구사항

| 유형 | 최소 사양 |
| --- | --- |
| CPU | 1코어 |
| 메모리 | 2 GB |
| 데이터베이스 HA | CPU: 1코어; 메모리: 2x2 GB |

### 추가 권장사항

관측성을 위해 [추가 서비스](/developerportal/deploy/private-cloud-monitor/)(Prometheus, Grafana, Loki)를 권장합니다. 현재 Private Mendix Platform에 대해 검증된 버전은 다음과 같습니다:

| 도구 | 버전 |
| --- | --- |
| Grafana | 12.2.1 |
| Prometheus | 2.41.0 |

{{% alert color="info" %}}
현재 Private Mendix Platform은 단일 Loki 및 단일 Prometheus 데이터 소스가 있는 Grafana 구성만 지원합니다. 여러 Loki 또는 Prometheus 데이터 소스가 있는 중앙 Grafana 인스턴스를 사용하는 구성은 지원되지 않습니다.
{{% /alert %}}

#### Grafana 엔드포인트

Private Mendix Platform은 다음 Grafana 엔드포인트를 사용합니다:

* [GET /api/health](https://grafana.com/docs/grafana/latest/developers/http_api/other/#returns-health-information-about-grafana) - 이 엔드포인트는 Grafana 인스턴스 자체의 상태를 확인하는 데 사용됩니다. Private Mendix Platform이 로깅 및 모니터링 구성을 저장하기 전에 Grafana 버전을 가져오고 Grafana가 실행 중인지 확인할 수 있습니다.
* [GET /api/datasources](https://grafana.com/docs/grafana/latest/developers/http_api/data_source/) - 이 엔드포인트는 Loki(로그) 및 Prometheus(메트릭)와 같은 데이터 소스의 고유 식별자(ID)를 가져오는 데 사용됩니다. 이러한 ID는 후속 쿼리에 필요합니다.
* `GET /api/datasources/proxy/uid/:uid/*` - 이 엔드포인트는 지정된 UID로 식별되는 데이터 소스에 대한 호출의 프록시 역할을 합니다. Private Mendix Platform은 이를 사용하여 Loki 및 Prometheus API를 호출하여 로그 및 레이블을 쿼리합니다.
* [GET /loki/api/v1/query_range](https://grafana.com/docs/enterprise-logs/latest/reference/loki-http-api/#query-logs-within-a-range-of-time) - 로그 데이터를 가져오는 기본 엔드포인트입니다. Private Mendix Platform은 이 Loki API를 사용하여 특정 시간 범위에 걸쳐 애플리케이션 로그를 쿼리합니다. 이 쿼리의 결과는 실시간 모니터링에 사용되며 Private Mendix Platform 인터페이스 내에 표시됩니다.
* [GET /api/v1/labels](https://prometheus.io/docs/prometheus/latest/querying/api/#getting-label-names) (Grafana를 통한 Prometheus API) - 이 엔드포인트는 Prometheus에서 사용 가능한 레이블을 쿼리합니다. Private Mendix Platform은 이를 사용하여 특정 레이블(예: 네임스페이스)이 Prometheus에 존재하는지 확인합니다.
* [GET /api/v1/label/pod/values](https://prometheus.io/docs/prometheus/latest/querying/api/#querying-label-values) (Grafana를 통한 Prometheus API) - 이 엔드포인트는 대상 환경의 모든 고유한 파드 이름 목록을 검색합니다. 이는 Private Mendix Platform 인터페이스의 필터 드롭다운을 채우는 데 사용됩니다.
* [POST /api/ds/query?ds_type=prometheus](https://grafana.com/docs/grafana/latest/developers/http_api/data_source/#query-a-data-source) - 특정 데이터 소스에서 쿼리를 실행하기 위한 범용 Grafana API 엔드포인트입니다. Private Mendix Platform은 이를 사용하여 Prometheus 데이터 소스에 PromQL 쿼리를 전송하여 메트릭 대시보드의 메트릭 데이터를 가져옵니다.

## 일반 요구사항

* Private Mendix Platform이 설치된 머신은 컨테이너 레지스트리 및 Kubernetes 클러스터에 대한 연결이 가능해야 합니다.
* 클러스터의 내부 네트워크 정책은 기본 포트(8080)에서 서비스에 대한 통신(인그레스로부터)을 허용해야 합니다.
* Mendix Operator가 설치되어 완전히 구성되어야 합니다:

    * 데이터베이스 플랜이 생성되어야 합니다.
    * 데이터베이스 서버는 Kubernetes 클러스터에서 접근 가능해야 합니다.
    * 파일 스토리지 플랜이 생성되어야 합니다.
    * 파일 스토리지 서버는 Kubernetes 클러스터에서 접근 가능해야 합니다.

* Mendix Studio Pro는 Private Mendix Platform에 접근할 수 있어야 합니다.
* SSO용 IdP는 설치 과정에서 사용 가능하고 구성 가능해야 합니다.
* Git, Jenkins 및 기타 서비스는 동일한 가상 네트워크에서 접근 가능하거나 Private Mendix Platform과의 외부 양방향 통신을 허용해야 합니다.
* Mendix Marketplace의 경우 내부 네트워크 또는 Mendix 리포지토리 연결을 통해 HTTP(또는 HTTPS)로 접근 가능한 파일 서버가 있어야 합니다.
* Private Mendix Platform은 Kubernetes API에 직접 접근할 수 있어야 합니다.

## 소프트웨어 리소스 요구사항

Mendix 앱은 Kubernetes 위에서 Mendix on Kubernetes Operator를 사용하여 배포 및 실행됩니다. 이를 지원하기 위해 다음 리소스가 필요합니다:

### 플랫폼 포털

| 유형 | 도구 | 버전 | 비고 |
| --- | --- | --- | --- |
| OS | Linux 배포판 | Kubernetes를 지원할 수 있는 모든 배포판 | |
| 컨테이너 오케스트레이션 | Kubernetes | [지원 공급자](/developerportal/deploy/private-cloud-supported-environments/) 참조 | |
| 컨테이너 레지스트리 | 지원되는 모든 레지스트리 | [지원 공급자](/developerportal/deploy/private-cloud-supported-environments/) 참조 | |
| 데이터베이스 | PostgreSQL | [지원 공급자](/developerportal/deploy/private-cloud-supported-environments/) 참조 | |
| 오브젝트 스토리지 | S3 유형 버킷 | S3 API 호환 | |
| 애플리케이션 관리 | Mendix on Kubernetes Operator | 2.12 이상 | Private Mendix Platform 설치 프로그램에 의해 설치됩니다 |
| 런타임 | Mendix | 9.18.3.58938 | Private Mendix Platform 설치 프로그램에 의해 설치됩니다 |
| 라이선스 | Private Cloud License Manager (PCLM) | 최신 | Private Mendix Platform 설치 프로그램에 의해 설치됩니다<br />PostgreSQL 12 또는 MS SQL Server 19 또는 22가 필요합니다. 자세한 내용은 [Private Cloud License Manager](/developerportal/deploy/private-cloud/private-cloud-license-manager/#prerequisites)를 참조하십시오 |
| TLS | TLS 인증서 | | 선택 사항, 사용자가 제공해야 합니다 |

### 고객 환경 통합

Private Mendix Platform은 고객 환경 내의 서비스에 연결해야 합니다. 필수 서비스는 포털의 기본 기능에 필요하며, 선택 서비스는 포털에 통합될 때 로우코드 플랫폼 경험을 향상시킵니다.

| 유형 | 도구 | 버전 | 비고 |
| --- | --- | --- | --- |
| 버전 관리 | GitLab | 최신 | 프로젝트 및 협업에 필요 |
| 버전 관리 | GitHub Enterprise Server | 3.6 이상 | 프로젝트 및 협업에 필요 |
| 버전 관리 | Bitbucket | 최신 | 프로젝트 및 협업에 필요 |
| 버전 관리 | Azure DevOps | 최신 | 프로젝트 및 협업에 필요 |
| CI/CD | Kubernetes | [지원 공급자](/developerportal/deploy/private-cloud-supported-environments/) 참조 | CI/CD 기본값 |
| CI/CD | Jenkins | 2.346.1 이상, Docker 에이전트 지원 포함 | CI/CD에 필요 |
| CI/CD | Azure DevOps | 최신 | CI/CD에 필요 |
| 로깅 및 메트릭 | Prometheus | [지원 서비스](/developerportal/deploy/private-cloud-monitor/) 참조 | 로깅 및 메트릭에 필요 |
| 로깅 및 메트릭 | Grafana | [지원 서비스](/developerportal/deploy/private-cloud-monitor/) 참조 | 로깅 및 메트릭에 필요 |
| 로깅 및 메트릭 | Loki | [지원 서비스](/developerportal/deploy/private-cloud-monitor/) 참조 | 로깅 및 메트릭에 필요 |

### 고객 앱

| 유형 | 도구 | 버전 |
| --- | --- | --- |
| 컨테이너 오케스트레이션 | Kubernetes | [지원 공급자](/developerportal/deploy/private-cloud-supported-environments/) 참조 |
| 데이터베이스 | PostgreSQL | 12 |
| 오브젝트 스토리지 | S3 유형 버킷 | S3 API 호환 |
| 애플리케이션 관리 | Mendix on Kubernetes Operator | 2.12+ |
| 런타임 | Mendix | 9.24+ |

## 인프라 요구사항

인프라 요구사항에 대한 자세한 내용은 [지원 공급자](/developerportal/deploy/private-cloud-supported-environments/)를 참조하십시오.
