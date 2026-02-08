---
title: "Mendix Cloud"
url: /developerportal/deploy/mendix-cloud-deploy/
weight: 8
description: "이 문서에서는 Mendix 애플리케이션의 기본 AWS 기반 배포인 Mendix Cloud에 대해 설명합니다. Free App 기능, 제한 사항, 수동 및 자동 삭제 정책, 아카이빙에 대한 정보도 제공합니다. 또한 리소스 팩, 고가용성, 리전별 페일오버, 데이터베이스 구성, URL 및 Mendix 가격 플랜을 포함한 라이선스 앱 기능에 대한 정보를 제공하여 앱 배포 및 관리를 최적화할 수 있습니다."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchor #plans, below, is mapped from Control Center within the Mendix Portal.
---

## 소개

Mendix Cloud는 Mendix 애플리케이션의 기본 배포 옵션입니다. Mendix가 구축하고 유지 관리하며 Amazon Web Services(AWS) 위에 구축된 Mendix 애플리케이션을 위한 퍼블릭 클라우드 서비스입니다. Mendix Cloud는 Mendix 애플리케이션 실행에 최적화되어 있으며, 전 세계 여러 리전에서 사용 가능하고, 고가용성 옵션이 제공됩니다.

Mendix Cloud를 통한 배포에는 여러 옵션이 있습니다:

* [Mendix Free](https://www.mendix.com/pricing/start-for-free/) – Mendix 커뮤니티에 새로 가입하여 자체 앱을 만들고, 배포하고, 공유하고 싶다면 Mendix의 제한된 Free App 환경을 사용하여 무료로 할 수 있습니다. Free App은 복잡하거나 큰 애플리케이션을 지원하지 않으며, 몇 시간 실행 후 종료되고, 확장할 수 없으며, 제한된 운영 정보를 제공합니다.
* [라이선스가 부여된 노드를 사용하는 Mendix Cloud](https://www.mendix.com/evaluation-guide/app-lifecycle/mendix-cloud-features/) – 라이선스를 통해 심층 인사이트, 알림, 고가용성, 백업을 포함한 Mendix Cloud의 전체 기능을 활용할 수 있습니다.
* [Mendix Cloud Dedicated](https://www.mendix.com/evaluation-guide/app-lifecycle/mendix-cloud-overview/#mendix-cloud-vpc) – 조직은 퍼블릭 Mendix Cloud의 단일 테넌트 인스턴스인 Mendix Cloud Dedicated를 통해 자체 Mendix Cloud를 가질 수 있으며, 해당 조직의 애플리케이션만 실행합니다.

### Free App {#free-app}

Free App을 사용하면 무료로 Mendix에서 앱을 만들고 배포할 수 있습니다. Free App은 라이선스가 부여된 앱에 비해 여러 제한 사항이 있습니다. 주요 제한 사항은 아래 표에 요약되어 있습니다:

| 기능 | Free App | 라이선스 앱 |
| ------- | -------- | ------------ |
| 사용자 수 | 일반 Free App의 경우 무제한 사용자, 다른 클라우드 플랫폼(SAP BTP 등)에서 실행되는 비라이선스 앱의 경우 6명의 동시 사용자 | [가격 플랜](#plans)에 따라 다름 |
| 슬립 모드 | 약 1시간의 비활성 후 슬립 모드로 진입하며 사용자가 접근하면 자동으로 재개됨; 앱이 슬립 모드에 있는 동안 모든 데이터가 유지됨 | 슬립 모드 없음 |
| 디스크 스토리지 | 0.5 GiB 데이터베이스 및 1 GiB 파일 | 가격 플랜에 따라 다름 |
| 앱 vCPU | 0.5 | 가격 플랜에 따라 다름 |
| 예약된 이벤트 | 실행되지 않음 | 실행되며 Mendix Portal에서 구성 가능 |
| 환경 | Mendix Cloud의 단일 환경 | 프로덕션, 수락, 테스트 등 하나 이상의 환경을 가진 클라우드 노드 |
| 배포 | Mendix Studio Pro에서만 클라우드에 배포 가능 | Mendix Studio Pro, Mendix Portal 또는 API를 통해 배포 가능 |
| 사용자 정의 도메인 | 사용 불가 | Mendix Portal에서 구성 가능 |
| 접근 제한 프로필 | 사용 불가 | Mendix Portal에서 구성 가능 |
| 클라이언트 인증서 | 사용 불가 | Mendix Portal에서 구성 가능 |
| 앱 수동 시작 및 중지 | 사용 불가 | Mendix Portal에서 사용 가능 |
| 상수 | Studio Pro에서 정의 | Mendix Portal의 환경 변수를 통해 구성 가능 |
| 런타임 설정 | 사용 불가 | Mendix Portal의 런타임 및 설정을 통해 구성 가능 |
| 확장성 | 인스턴스 하나와 고정 메모리(1 GiB)만 사용 | Mendix Portal에서 구성 가능 |
| 메트릭, 알림, 로그 레벨 | 사용 불가 | 사용 가능 |
| 과거 앱 로그 | 사용 불가; 라이브 로그만 사용 가능 | 사용 가능 |
| 백업 | 매일 수행되며 수동으로 트리거할 수 없음; 최대 2주간 보관 | 매일 수행되며 수동으로 생성 가능; 플랜에 따라 최대 1년간 보관 |
| 지원 | 지원 없음 | 라이선스 옵션에 따라 다름 |

#### 슬립 모드

Free App의 제한 사항으로 인해 약 1시간의 비활성 후 슬립 모드에 진입합니다. 이 기간 동안 앱에 접근하면 다음 메시지가 표시됩니다:

{{< figure src="/attachments/deployment/mendix-cloud-deploy/appresumed.png" alt="A Resuming app message" width=60% class="no-border" >}}

몇 분 후에도 앱이 깨어나지 않으면 [Mendix Support](https://support.mendix.com)에 문의하십시오.

Free App이 슬립 모드로 진입하는 것을 방지하려면 Mendix Cloud의 노드에서 실행되는 라이선스 앱으로 업그레이드하십시오. 자세한 내용은 [Mendix Cloud 앱 라이선싱](/developerportal/deploy/licensing-apps/)을 참조하십시오.

#### Free App 삭제

이 섹션에서는 Mendix 플랫폼에서 Free App을 삭제할 수 있는 다양한 방법을 설명합니다.

##### Free App 수동 삭제 {#free-apps-manual-deletion}

[기술 담당자](/developerportal/general/app-roles/#technical-contact)로서 Studio Pro에서 게시한 후 다음 단계에 따라 Free App을 수동으로 삭제할 수 있습니다:

1. [Apps](https://sprintr.home.mendix.com)에서 앱의 **Environments** 페이지로 이동합니다.
2. **Sandbox** 환경에서 **More Options** ({{< icon name="three-dots-menu-horizontal" >}})를 클릭합니다.
3. **Delete**를 클릭합니다.

Free App을 삭제하면 실행 중인 앱, 데이터베이스, 파일 및 백업이 삭제됩니다. 그러나 Mendix 플랫폼의 프로젝트와 [Team Server](/developerportal/repository/team-server/)의 리포지토리는 활성 상태로 유지되며 접근 가능합니다.

##### Free App 자동 아카이빙 {#free-apps-archival}

Free App이 3개월 이상 슬립 모드에 있으면 아카이빙될 수 있습니다. 아카이빙 예정인 Free App의 경우 [기술 담당자](/developerportal/general/app-roles/#technical-contact)에게 2주 전에 알림이 전송됩니다.

아카이빙 시 Mendix 플랫폼의 프로젝트와 [Team Server](/developerportal/repository/team-server/)의 리포지토리는 유지되어 활성 상태로 접근 가능하지만, Free App의 실행 중인 앱, 데이터베이스, 파일 및 백업은 삭제됩니다.

Free App이 아카이빙되는 것을 방지하는 두 가지 방법이 있습니다:

* Free App 방문
* Free App 환경에 앱의 새 버전 배포

##### 미사용 프로젝트 자동 삭제 {#projects-deletion}

프로젝트가 생성된 이후 활동이 전혀 없었던 경우, Team Server에서 최대 1년간 보관됩니다. 이후 Mendix 플랫폼의 프로젝트, Team Server의 리포지토리, 프로젝트와 관련된 모든 Mendix Cloud 리소스가 영구적으로 삭제됩니다.

시스템은 앱이 미사용인지 판단할 때 다음 기준을 사용합니다:

* Free App (즉, 비라이선스)
* 퍼블릭 Mendix Cloud에 배포됨
* 고정되지 않음
* 팀 구성원이 1명뿐인 프로젝트 팀
* 앱이 1년 이상 전에 생성됨
* 앱 생성 이후 커밋 없음

프로젝트가 삭제 대상으로 표시되면 시스템은 영구 삭제 전에 14일의 유예 기간을 적용합니다.

다음 작업 중 하나를 수행하여 이 정리를 방지할 수 있습니다:

* 변경 사항을 만들고 Team Server에 커밋
* [앱 고정](/developerportal/#app-tiles)
* 앱에서 협업할 사람을 [초대](/developerportal/general/team/#inviting)

삭제 대상으로 표시된 프로젝트를 고정하면 즉시 표시가 해제됩니다. 다른 기준의 변경은 삭제 대상 표시에 즉시 영향을 미치지 않지만 실제 삭제 전에 확인됩니다.

### 라이선스 앱

라이선스 앱은 최소 두 개의 환경(프로덕션 및 수락)이 있는 노드에서 실행됩니다. 필요한 경우 테스트 환경을 추가하거나 [유연한 환경](#flexible-environments)을 사용할 수도 있습니다. 라이선스 앱은 노드에 연결되며 이러한 환경 중 어디에든 배포할 수 있습니다. 각 환경에 대해 다른 [리소스 팩](#resource-pack)을 지정할 수 있지만, Mendix는 프로덕션 환경과 수락 환경의 크기를 동일하게 설정할 것을 권장합니다.

{{% alert color="info" %}}
각 환경은 하나의 앱 버전만 실행할 수 있습니다. 또한 노드의 모든 환경은 노드에 연결된 동일한 앱의 버전을 실행하는 데 사용해야 합니다.
{{% /alert %}}

#### 유연한 환경 {#flexible-environments}

라이선스 앱에서 제공되는 표준 환경이 요구 사항을 충족하지 못하는 경우, 유연한 환경이 있는 Mendix Cloud 노드를 요청할 수 있습니다. 유연한 환경을 사용하면 노드에서 원하는 환경 수를 지정할 수 있습니다. 또한 환경의 이름을 정할 수도 있습니다.

### 데이터베이스

Mendix Cloud에 배포된 앱은 PostgreSQL 데이터베이스를 사용하도록 구성됩니다. Mendix Cloud에 배포된 경우 앱이 대체 데이터베이스를 사용하도록 구성하는 것은 불가능합니다.

다른 데이터베이스를 사용해야 하는 경우 앱을 다른 플랫폼에 배포하는 것을 고려하십시오. 자세한 내용은 [앱 배포](/deployment/)를 참조하십시오.

### URL 및 포트

Mendix Cloud에서 실행되는 앱에는 자동으로 자체 URL이 할당됩니다. URL의 형식은 라이선스 및 환경 유형에 따라 다르며, 다음 중 하나일 수 있습니다:

| 라이선스 유형 | 환경 | URL 형식 | 예시 URL |
| ------------ | ----------- | ---------- | ----------- |
| 라이선스 앱 | 프로덕션  | 리전에 따라 다름:<br /> `{app-name}.mendixcloud.com`<br />또는<br />`{app-name}.apps.{region}.mendixcloud.com` | `myappname.mendixcloud.com`, <br /> `myappname.apps.ap-3a.mendixcloud.com` |
| 라이선스 앱 | 테스트, 수락, 유연한 환경 | 리전에 따라 다름:<br /> `{app-name}-{environment-type}.mendixcloud.com`<br />또는<br />`{app-name}-{environment-type}.apps.{region}.mendixcloud.com` | `myappname-accp.mendixcloud.com`, <br /> `myappname-accp.apps.ap-3a.mendixcloud.com` |
| Free App     | 해당 없음         | `{app-name}-sandbox.mxapps.io`<br />또는<br />`{app-name}.mxapps.io` | `myfreeappname.mxapps.io` |

{{% alert color="info" %}}라이선스 앱은 AWS에 배포된 클러스터에서 실행됩니다. 앱의 리전은 선택할 수 있지만 클러스터는 선택할 수 없습니다. 리전에 여러 클러스터가 있을 수 있으며, 리전 내 일부 클러스터의 앱 URL에는 `apps.{region}`이 포함됩니다.{{% /alert %}}

라이선스 앱의 경우 [사용자 정의 도메인](/developerportal/deploy/custom-domains/)을 추가하여 URL을 사용자 정의할 수 있습니다.

Mendix 앱은 사용자 정의 포트를 사용할 수 없습니다. 표준 HTTP 및 HTTPS 포트(`80` 및 `443`)로 통신하며, HTTP(`80`)에 대한 연결은 HTTPS(`443`)로 리디렉션됩니다.

### 라이선스 앱의 최종 사용자 수

라이선스 앱에서 지원되는 최종 사용자 수는 [가격 플랜](#plans)에 따라 다릅니다. 앱의 최종 사용자는 내부 또는 외부로 분류됩니다. [USAGE_METRICS_EMAIL_FIELDS 사용자 정의 변수](/developerportal/deploy/environments-details/#custom-environment-variables)(이메일 도메인을 사용하여 최종 사용자를 구분하는 경우) 또는 앱의 각 최종 사용자에 대해 [사용자 유형 채우기](/developerportal/deploy/populate-user-type/)를 사용하여 라이선싱 목적으로 이를 보고해야 합니다. Mendix 계정이 **Active**로 표시된 최종 사용자만 앱의 최종 사용자 수에 포함됩니다.

### 지원되는 Mendix 버전 {#mendix-cloud-supported-versions}

Mendix Cloud는 [지원되는 모든 주요 버전](/releasenotes/studio-pro/lts-mts/#major-version)의 Mendix 배포 및 실행을 지원합니다. 여기에는 Extended Support 제품을 통해 지원되는 주요 버전이 포함됩니다. 지원되지 않는 버전을 Mendix Cloud에 배포하는 것은 불가능합니다.

## Mendix 가격 플랜 {#plans}

Mendix 라이선스는 플랜의 일부로 판매됩니다. 플랜은 다음 항목으로 구성됩니다:

* 플랜 구독
* 앱 환경에서 사용 가능한 리소스를 지정하는 클라우드 리소스 팩
* 페일오버 환경과 같은 추가 리소스

### 플랜

다음 플랜을 사용할 수 있습니다:

* Free
* Basic
* Standard
* Premium
* Premium Plus

자세한 내용은 [가격](https://www.mendix.com/pricing/)을 참조하십시오.

### 클라우드 리소스 팩 {#resource-pack}

Mendix 환경은 클라우드 리소스 팩을 참조하여 크기가 정해집니다. 이 리소스는 애플리케이션 런타임뿐만 아니라 추가한 서드파티 통합을 위한 에이전트 등 애플리케이션 실행에 필요한 모든 것에 사용됩니다. 아래 표는 Standard, Premium 및 Premium Plus 플랜의 현재 클라우드 리소스 팩을 보여줍니다.

Standard, Premium 또는 Premium Plus 플랜이 있는 경우 Mendix 플랫폼에서 클라우드 토큰이라는 가상 크레딧을 사용하여 클라우드 리소스 팩을 구매할 수 있습니다. 이 작동 방식에 대한 자세한 내용은 [Entitlements](/control-center/entitlements/)를 참조하십시오.

클라우드 리소스 팩의 기술 세부 사항은 아래에 나열되어 있습니다.

| 팩                                                                   | 앱 RAM | 앱 vCPU | DB RAM  | DB vCPU | DB 스토리지 | 파일 스토리지 |
| ---------------------------------------------------------------------- | ------- | -------- | ------- | ------- | ---------- | ------------ |
| XS21                                                                   | 1 GiB   | 0.25     | 1 GiB   | 2       | 5 GiB      | 10 GiB       |
| S21,<br>S21 Premium                                                    | 2 GiB   | 0.5      | 2 GiB   | 2       | 10 GiB     | 20 GiB       |
| M21,<br>M21 Premium                                                    | 4 GiB   | 1        | 4 GiB   | 2       | 20 GiB     | 40 GiB       |
| L21,<br>L21 Premium                                                    | 8 GiB   | 2        | 8 GiB   | 2       | 40 GiB     | 80 GiB       |
| XL21,<br>XL21 Premium,<br>XL21 Premium Plus                            | 16 GiB  | 4        | 16 GiB  | 4       | 80 GiB     | 160 GiB      |
| XXL21,<br>XXL21 Premium,<br>XXL21 Premium Plus                         | 32 GiB  | 8        | 32 GiB  | 4       | 160 GiB    | 320 GiB      |
| XXXL21,<br>XXXL21 Premium,<br>XXXL21 Premium Plus                      | 64 GiB  | 16       | 64 GiB  | 8       | 320 GiB    | 640 GiB      |
| XXXXL21,<br>XXXXL21 Premium,<br>XXXXL21 Premium Plus                   | 128 GiB | 32       | 128 GiB | 16      | 640 GiB    | 1280 GiB     |
| XXXXL21-5XLDB,<br>XXXXL21-5XLDB Premium,<br>XXXXL21-5XLDB Premium Plus | 128 GiB | 32       | 256 GiB | 32      | 1280 GiB   | 1280 GiB     |

{{% alert color="info" %}}Premium 플랜은 다중 AZ 페일오버를 제공하며, Premium Plus 플랜은 다중 리전 페일오버를 제공합니다. 자세한 내용은 아래 [추가 리소스](#additional-resources)를 참조하십시오.{{% /alert %}}

아래에 나열된 레거시 클라우드 리소스 팩은 여전히 사용 중이지만 새 고객에게는 제공되지 않습니다.

| 레거시 팩 | 앱 RAM | 앱 vCPU | DB RAM | DB vCPU | DB 스토리지 | 파일 스토리지 |
| ----------- | ------- | -------- | ------ | ------- | ---------- | ------------ |
| XS20        | 1 GiB   |          | 1 GiB  |         | 5 GiB      | 10 GiB       |
| S20         | 2 GiB   | 0.5      | 2 GiB  | 1       | 10 GiB     | 20 GiB       |
| M20         | 4 GiB   | 1        | 4 GiB  | 1       | 20 GiB     | 40 GiB       |
| L20         | 8 GiB   | 2        | 8 GiB  | 1       | 40 GiB     | 80 GiB       |
| XL20        | 16 GiB  | 4        | 16 GiB | 2       | 80 GiB     | 160 GiB      |
| XXL20       | 32 GiB  | 8        | 32 GiB | 2       | 160 GiB    | 320 GiB      |
| Strato      | 2 GiB   | 0.5      | 1 GiB  | 0.5     | 5 GiB      | 20 GiB       |
| Meso        | 2 GiB   | 0.5      | 8 GiB  | 2       | 20 GiB     | 20 GiB       |
| Iono        | 8 GiB   | 2        | 8 GiB  | 2       | 20 GiB     | 80 GiB       |
| Magneto     | 16 GiB  | 4        | 16 GiB | 4       | 80 GiB     | 320 GiB      |
| S           | 1 GiB   | 0.5      | 1 GiB  | 0.5     | 5 GiB      | 5 GiB        |
| M           | 2 GiB   | 0.5      | 2 GiB  | 1       | 10 GiB     | 10 GiB       |
| L           | 4 GiB   | 1        | 4 GiB  | 2       | 20 GiB     | 20 GiB       |
| XL          | 8 GiB   | 2        | 8 GiB  | 2       | 40 GiB     | 40 GiB       |
| XXL         | 16 GiB  | 4        | 16 GiB | 4       | 80 GiB     | 80 GiB       |

{{% alert color="info" %}}
vCPU의 일부를 사용하는 팩을 가질 수 있습니다. 이는 여러 환경이 단일 가상 머신에서 완전히 격리되어 실행될 수 있기 때문입니다.
{{% /alert %}}

### 추가 리소스{#additional-resources}

Premium 리소스 팩을 사용하는 Premium 고객의 경우 Mendix Cloud에 배포된 앱에 추가 기능이 제공됩니다. Mendix 앱을 배포하는 추가 방법도 있습니다.

#### 고가용성 및 페일오버 {#fallback}

Premium 플랜은 기본적으로 고가용성 및 페일오버를 제공합니다. 이를 통해 앱의 복사본이 여러 가용 영역(AZ)에 분산됩니다. 특정 AZ에 문제가 발생하면 다른 AZ에서 실행 중인 앱의 복사본이 계속 사용 가능합니다.

Premium 플랜을 사용하면 앱을 [수평으로 확장](/developerportal/deploy/scale-environment/)할 수 있습니다. 고가용성의 이점을 완전히 활용하려면 앱이 둘 이상의 AZ에서 실행되도록 최소 두 개의 인스턴스가 필요합니다. 이는 AWS 데이터 센터의 AZ 장애 시 다운타임을 감수할 수 없는 중요한 프로덕션 앱에 중요합니다.

페일오버는 데이터베이스의 데이터가 자동으로 두 번째 AZ의 데이터베이스에 복사되도록 합니다. 이를 통해 주 가용 영역에 문제가 발생하고 앱 인스턴스가 두 번째 AZ에서 시작되어야 할 때 모든 데이터를 앱에서 계속 사용할 수 있습니다.

AZ 간 연결은 저지연입니다. 그러나 이러한 기능의 구현은 모니터링이 Standard 플랜으로 배포된 앱에 비해 Premium 플랜으로 Mendix Cloud에 배포된 앱이 쿼리당 몇 밀리초의 추가 지연이 발생하는 것으로 나타날 수 있습니다. 잘 설계된 앱의 경우 이 차이는 최종 사용자에게 눈에 띄지 않습니다.

#### 애플리케이션 데이터 복제

Premium 플랜을 사용하면 보안 및 재해 복구 목적으로 Mendix Cloud의 애플리케이션 데이터를 다른 리전으로 복제할 수 있습니다. 자세한 내용은 *Control Center의 보안 설정*의 [애플리케이션 데이터 복제](/control-center/security-settings/#application-data-replication) 섹션을 참조하십시오.

#### 리전별 페일오버{#regional-fallback}

Premium 플랜의 모든 기능에 리전별 페일오버가 추가된 Premium Plus 플랜을 구매할 수도 있습니다.

리전별 페일오버를 사용하면 데이터베이스와 FileDocument의 복사본이 완전히 별도의 리전에 유지됩니다. 예를 들어, 앱이 일반적으로 us-east-1에서 실행되는 경우 데이터의 복사본이 us-west-2에 생성됩니다. 주 리전의 모든 AZ를 사용할 수 없게 되면 해당 리전에 복사된 데이터로 보조 리전에서 앱을 임시로 실행하도록 선택할 수 있습니다. 주 리전이 다시 온라인 상태가 되면 앱을 주 리전에서 실행하도록 되돌릴 수 있습니다.

이는 치명적인 리전 장애를 위해 설계되었으므로 일반 운영에 몇 가지 제한 사항이 있습니다. 예를 들어, 보조 리전에서 실행 중인 동안에는 앱의 새 버전을 배포할 수 없습니다. 보조 리전으로 전환하는 결정은 완전히 사용자의 통제 하에 있습니다.

#### 온프레미스 및 Mendix on Kubernetes

Mendix 앱을 다른 환경에 배포하려면 Mendix 플랜에 이를 추가할 수 있습니다. 예를 들어, [SAP BTP](/developerportal/deploy/sap-cloud-platform/) 또는 [Mendix on Kubernetes](/developerportal/deploy/private-cloud/)를 사용하여 자체 클라우드에 배포할 수 있습니다.

## 추가 읽기

* [Mendix Cloud에 앱 배포](/developerportal/deploy/mendix-cloud-deploy/deploying-an-app/)
* [사용자 정의 도메인](/developerportal/deploy/custom-domains/)
* [Mendix Cloud 앱 라이선싱](/developerportal/deploy/licensing-apps/)
* [앱 역할](/developerportal/general/app-roles/)
