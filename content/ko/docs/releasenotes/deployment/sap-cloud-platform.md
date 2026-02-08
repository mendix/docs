---
title: "SAP BTP 릴리스 노트"
linktitle: "SAP BTP"
url: /releasenotes/developer-portal/sap-cloud-platform/
weight: 30
description: "SAP Business Technology Platform에 대한 배포 릴리스 노트"
---

이 릴리스 노트는 [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/)(SAP BTP)에 대한 배포 변경 사항을 다룹니다.

SAP Business Technology Platform 배포는 최신 버전의 [Mendix Cloud Foundry Buildpack](https://github.com/mendix/cf-mendix-buildpack)에도 의존합니다. [Mendix Cloud Foundry Buildpack 릴리스 노트](https://github.com/mendix/cf-mendix-buildpack/releases)는 다른 배포 대상도 해당 빌드팩에 의존하므로 별도로 게시됩니다.

SAP BTP 배포의 현재 상태 및 계획된 릴리스에 대한 정보는 [Mendix Status](https://status.mendix.com/)를 참조하세요.

## 2025

### September 28, 2025

#### Portal Improvements

* 포털이 이제 일본어와 한국어로 제공되어, 해당 언어 사용자의 경험을 향상시킵니다. 사용자는 [User Settings](https://user-settings.mendix.com/link/profile)의 **Profile** 탭에서 언어 기본 설정을 변경할 수 있습니다.
* 포털의 사이드 내비게이션도 일본어 및 한국어로 제공됩니다.

### July 17, 2025

#### New Features

* [SAP OData Connector](https://marketplace.mendix.com/link/component/74525)에 [Batch Processing](/appstore/modules/sap/sap-odata-connector/#batch-processing)을 지원하는 새로운 액션을 추가했습니다.
* **SAP Cloud Logging** 서비스를 지원하도록 [SAP Logging Connector](https://marketplace.mendix.com/link/component/110219)를 업데이트했습니다.

### June 29, 2025

#### New Features

* **SAP Cloud Logging** 서비스를 위한 서비스 구성기를 추가했습니다.

#### Bug Fixes

* 앱 상태 검사 **Timeout** 값 변경이 적용되지 않던 문제를 수정했습니다.

### June 1, 2025

#### New Features

* **Environment** 세부 정보 페이지에 SAP Application Logging 서비스에 대한 지원 중단 메시지 배너를 추가했습니다.

#### Bug Fixes

* 사용자가 XSUAA 구성에서 리다이렉트 URI를 삭제할 수 없던 문제를 수정했습니다.

### May 25, 2025

#### New Features

* 사용자가 포털에서 선호하는 **Logging** 서비스를 선택할 수 있는 새 기능을 도입했습니다. 자세한 내용은 [Creating a New Environment](/developerportal/deploy/sap-cloud-platform/#NewEnvironment)를 참조하세요.

### April 18, 2025

#### Portal Improvements

* 동적 엔드포인트를 지원하는 유연한 패턴 매칭을 가능하게 하기 위해, SAP [mandates](https://help.sap.com/whats-new/cf0cb2cb149647329b5d02aa96303f56?locale=en-US&Component=Authorization+and+Trust+Management+Service)에 따라 XSUAA 서비스의 포털 구성에 기본 와일드카드(`*`)를 리다이렉트 URL에 포함하도록 업데이트했습니다.
* SAP mandates에 따라 XSUAA 서비스 구성에서 `xsenablesyncservice` 속성을 제거했습니다.

### February 16, 2025

#### Portal Improvements

* SAP [mandates](https://help.sap.com/whats-new/cf0cb2cb149647329b5d02aa96303f56?locale=en-US&Component=Authorization+and+Trust+Management+Service)에 따라 리다이렉션을 위한 기본 URL을 구현했습니다.

#### Bug Fixes

* 빈 환경 상수를 설정해도 SAP BTP cockpit에서 환경 변수가 제거되지 않던 문제를 수정했습니다.
* 배포 패키지의 아이콘 크기 관련 문제를 수정했습니다.
  
### February 02, 2025

#### Portal Improvements

* Generative AI 기반의 내장 채팅 인터페이스인 [Maia](/refguide/mendix-ai-assistance/)를 SAP Deployment Portal에 통합했습니다.

#### Bug Fixes

* SAP Deployment Portal에서 MDA 다운로드 문제를 수정했습니다.
* Environment 목록에서 **Load more** 버튼이 추가 항목을 로드하지 못하던 문제를 수정했습니다.

## 2024

### August 27, 2024

#### Bug Fixes

* SAP BTP에서 애플리케이션 재배포 시 빌드팩 버전을 최신으로 업데이트하는 문제를 수정했습니다.

### August 25, 2024

#### Portal Improvements

* Mendix 버전 7 이하에 대한 배포 패키지 생성 및 배포가 더 이상 지원되지 않습니다.

#### Bug Fixes

* 배포 패키지의 태그 설명이 누락되던 문제를 해결했습니다.

### July 14, 2024

#### Portal Improvements

* CF 호출을 API v3으로 업그레이드했습니다. 여기에는 환경의 배포 및 관리가 포함됩니다.
* 포털 이름을 **Deployment**로 변경했습니다.

#### Bug Fixes

* MxDock 로그인 문제를 수정했습니다.

## 2022

### November 17, 2022

#### Improvements

* SAP HANA 데이터베이스로 환경을 생성할 때 사용자 정의 바인딩 파일을 업로드할 수 있도록 하여, 환경 생성 흐름을 개선했습니다.
* Mendix Studio에서 직접 배포할 대상 환경을 선택하는 기능을 추가했습니다.
* Cloud Foundry API 버전 2가 더 이상 사용되지 않아, Mendix를 버전 3을 사용하도록 업그레이드했습니다.

### August 4, 2022

#### Improvements

* [Runtime 탭](/developerportal/deploy/sap-cloud-platform/#runtime-tab)에서 사용자 정의 Mendix Runtime 설정을 추가할 수 있습니다.
    * 이는 User-Provided Variables를 사용하여 사용자 정의 설정을 추가하던 이전 방법을 대체합니다.

### June 20, 2022

#### Improvements

* Mendix Marketplace에서 [SAP Fiori 3 UI Resource](https://marketplace.mendix.com/link/component/116359) 및 [UI Package for SAP Fiori themed apps](https://marketplace.mendix.com/link/component/107625) 모듈의 새 버전을 릴리스했습니다. 이 모듈을 사용하면 Mendix 9.6.11 이상으로 Atlas Core 테마와 함께 작동하는 Fiori 스타일 앱을 만들 수 있습니다.

### March 2, 2022

#### BAPI Connector

* SAP 솔루션용 새로운 BAPI Connector를 추가했습니다. 이를 통해 Mendix 앱이 SAP Business Suite, SAP S/4HANA, SAP S/4HANA Cloud에서 사용 가능한 SAP Business API(SAP BAPI)를 사용하여 통합할 수 있습니다. 자세한 내용은 [BAPI Connector for SAP Solutions](/appstore/modules/sap/sap-bapi-connector/)를 참조하세요.

## 2021

### December 9, 2021

#### Improvements

* XSUAA 서비스를 구성하기 위한 사용자 정의 *xs-security-json* 파일을 생성하는 데 도움이 되는 구성기를 추가했습니다. 자세한 내용은 [XSUAA Connector for SAP Business Technology Platform](/appstore/modules/sap/sap-xsuaa-connector/)을 참조하세요.

### October 14, 2021

#### Improvements

* XSUAA 서비스를 구성하기 위한 사용자 정의 *xs-security.json* 파일을 제공하는 기능을 추가했습니다. 이를 통해 앱이 배포될 때마다 구성을 적용할 수 있습니다. [Services](/developerportal/deploy/sap-cloud-platform/#binding-services) 탭에서 XSUAA 서비스를 바인딩 해제하고 다시 바인딩하여 구성을 추가할 수 있습니다.

### August 30, 2021

* 이제 구성을 먼저 다운로드하지 않고도 Configurator에서 서비스 구성을 직접 업로드할 수 있습니다.
* 서비스를 삭제하지 않고 환경에서 서비스를 바인딩 해제하는 기능을 추가했습니다. 이를 통해 서비스의 구성을 변경한 후 다시 바인딩하는 것이 더 쉬워집니다.

### August 19, 2021

#### Improvements – OData Connector for SAP Solutions

* [Get Destination](/developerportal/deploy/sap-cloud-platform/sap-destination-service/) 사용 시 만료된 접근 토큰에 대한 오류 처리를 개선했습니다. 사용자는 이제 새 접근 토큰을 얻을 수 있도록 로그아웃됩니다.
* 애플리케이션이 XSUAA를 사용하지 않거나 XSUAA가 활성화되지 않은 경우에도 SAP Destination을 가져오는 기능을 추가했습니다.

### July 26, 2021

#### Improvements

* [XSUAA Connector for SAP Business Technology Platform](/appstore/modules/sap/sap-xsuaa-connector/)의 버전 2.1.1을 릴리스했습니다.

    {{% alert color="info" %}}이 버전은 **SapAuthentication**이라는 새 사용자 관리 모듈을 사용하며, *XSUAA Connector for SAP Business Technology Platform* 버전 2.0.0 이하를 사용하는 고객은 커뮤니티 지원 [User Migration](https://marketplace.mendix.com/link/component/118015) Marketplace 모듈을 사용하여 기존 사용자를 **Administration.Account**에서 **SapAuthentication.SapUser**로 마이그레이션해야 합니다.{{% /alert %}}

### July 14, 2021

#### Fix

* 환경 세부 정보의 **Services** 탭에 PostgreSQL, Hyperscaler Option 서비스가 표시되지 않던 문제를 해결했습니다. (Tickets 121404 and 123430)

### June 16, 2021

#### Improvements

* OData v4에 대한 읽기 전용 접근을 지원하는 [OData Model Creator for SAP Solutions](/appstore/services/use-sap-model-creator/) 및 [OData Connector for SAP Solutions](/appstore/modules/sap/sap-odata-connector/)의 새 버전을 릴리스했습니다. 이는 기존 OData v2 및 v3 지원에 추가됩니다.

#### Fix

* 환경 메모리를 스케일링할 때 활동 로그에 잘못된 값이 보고되던 문제를 수정했습니다. (Ticket 122642)

### June 2, 2021

#### Improvements

* SAP BTP에 배포하기 위해 Developer Portal에 MDA 파일을 업로드하는 기능을 추가했습니다.

### May 27, 2021

#### Improvements

* SAP XSUAA Connector를 사용하는 앱에 대한 [Deep Link](/appstore/modules/deep-link/) 모듈 지원을 추가했습니다. 모듈을 설정할 때 최종 사용자의 로그인을 보장하기 위해 **LoginLocation** 상수를 `/xsauaalogin/`으로 설정해야 합니다.

### March 28, 2021

#### Fix

* SAP BTP의 변경으로 인해 XSUAA를 사용하는 앱이 배포되지 못하던 문제를 해결했습니다.

    (Tickets 118831 118847 118861 118862 118874 118876 118908 118925 118935 118983 119020)

### February 10, 2021

#### Improvements

* SAP BTP에서 새 환경으로 앱을 전송할 때 Cloud Foundry 상태 검사의 타임아웃 기간을 연장하는 기능을 추가했습니다.
* SAP BTP에 배포된 앱에 대한 사용자 정의 환경 변수를 정의하는 기능을 추가했습니다.
* 지원되는 사용자 정의 환경 변수 목록에서 변수를 선택하여 SAP BTP에 배포된 앱에 대해 *Dynatrace*를 활성화하는 기능을 추가했습니다.
* SAP Cloud Platform이 SAP Business Technology Platform(SAP BTP)으로 이름이 변경되었으며, 이를 반영하여 문서가 변경되었습니다.

자세한 내용은 [SAP Business Technology Platform - deploy](/developerportal/deploy/sap-cloud-platform/)를 참조하세요.

## 2020

### December 21, 2020

#### Improvements

* Mendix Marketplace에서 [SAP Fiori 3 UI Resource](https://marketplace.mendix.com/link/component/116359) 모듈을 릴리스했습니다. 이를 통해 Mendix 앱에서 SAP Fiori 3 사용자 경험을 만들 수 있습니다. SAP Fiori 3은 *Intelligent Suite*의 모든 SAP 제품에 대한 새로운 대상 디자인 시스템입니다. 자세한 내용은 [SAP Fiori UI Resources](/appstore/modules/sap-ui-resources/sap-fiori-3-0/)를 참조하세요.

### December 9, 2020

#### Improvements

* SAP Cloud Platform에 배포된 Mendix 앱에 대한 SAP Cloud Platform, Hyperscaler Option의 PostgreSQL 지원을 추가했습니다.
    * 올바른 구성을 만드는 데 도움이 되는 구성기가 함께 제공됩니다.
    * 자세한 내용은 [Running Mendix on PostgreSQL on SAP Cloud Platform](/developerportal/deploy/sap-cloud-platform/#sap-hyperscaler)을 참조하세요.
* Developer Portal 정리의 일환으로, SAP Cloud Platform의 환경을 확인할 때 Developer Portal 메뉴의 *DEVELOP* 섹션에서 *Model* 옵션을 제거했습니다. 이 페이지의 기능은 환경 페이지의 **Edit in Studio Pro** 버튼을 통해 계속 사용할 수 있습니다.

### October 21, 2020

#### Improvements

* 일부 Developer Portal 페이지(Environments, App Services, Metrics, Alerts, Logs, Backups, Security의 Node Permissions 탭)에서 **Edit App** 버튼을 **Edit in Studio**와 **Edit in Studio Pro** 두 개의 별도 버튼으로 분리했습니다.
* **View App** 버튼의 드롭다운도 업데이트했습니다.

### April 24, 2020

#### Improvements

* SAP Cloud Platform에서 **Application Autoscaler**에 대한 JSON 구성 파일을 쉽게 만들 수 있는 사용하기 쉬운 자동 스케일러 구성기를 추가했습니다. 자세한 내용은 [Application Autoscaler for SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/sap-autoscaler/)을 참조하세요.
    * JSON 업로드 방식에 현재 문제가 있습니다. 수정 작업을 진행 중이지만, 그 동안 문서의 해결 방법을 확인하여 JSON이 올바르게 업로드되는지 확인하세요.

### March 26, 2020

#### Improvements

* SAP Cloud Platform의 Azure Netherlands 리전에 대한 배포 지원을 추가했습니다.
    * Azure Netherlands 리전에서 Object storage는 Mendix 8.7.0 이상에서만 지원됩니다.
* SAP Cloud Platform에 배포된 앱의 환경 페이지에 SAP 환경에서 수행된 모든 배포 활동의 로그를 추가했습니다.
* XSUAA를 사용한 로그인 후 사용자가 생성된 URL(예: `appname.cfapps.eu10.hana.ondemand.com`) 대신 사용자 정의 URL(예: `appname.subdomain.domain.com`)로 리다이렉트되도록 지정하는 기능을 추가했습니다.

### January 3, 2020

#### Improvements

* 새로운 SAP Cloud Platform 평가판 계정에서 사용 가능한 HANA 평가판 데이터베이스 사용 지원을 추가했습니다. 자세한 내용은 *SAP Cloud Platform* 배포 문서의 [Running Mendix on SAP HANA](/developerportal/deploy/sap-cloud-platform/#sap-hana) 섹션을 참조하세요.

## 2019

### September 13, 2019

#### Improvements

* SAP Cloud Platform에 배포할 때 AWS RDS PostgreSQL 데이터베이스 지원을 추가했습니다.

### July 4, 2019

#### Fixes

* 배포 후 XSUAA 구성이 업데이트되지 않던 문제를 수정했습니다. **6월 27일부터 7월 4일 8:00 CST 사이에 SAP Cloud Platform에 배포한 앱은 다시 배포하세요.**

### May 13, 2019

#### Fixes

* SAP Cloud Portal에 배포하는 사용자가 새로 바인딩된 서비스가 올바르게 바인딩되었지만 Mendix Developer Portal에 표시되지 않던 문제를 수정했습니다. (Ticket 81418)

### March 29, 2019

#### Improvements

* **SAP Cloud Platform**에 대한 Mendix 배포를 변경하여 Cloud Foundry 스택 cflinuxfs3을 사용하도록 했습니다. 이전에 Mendix 앱은 SAP에 의해 더 이상 사용되지 않는 cflinuxfs2를 사용했습니다. 자세한 내용은 2018년 11월 8일 SAP 릴리스 노트 [Cloud Foundry Environment – Deprecation of cflinuxfs2](https://help.sap.com/doc/43b304f99a8145809c78f292bfc0bc58/Cloud/en-US/98bf747111574187a7c76f8ced51cfeb.html?from=2018-11-08&sel3=Announcement&sel1=Cloud%20Foundry%20Environment&to=2018-11-08) 및 2019년 3월 29일 SAP 릴리스 노트 [Rapid Application Development by Mendix – Stack Switch](https://help.sap.com/doc/43b304f99a8145809c78f292bfc0bc58/Cloud/en-US/98bf747111574187a7c76f8ced51cfeb.html?from=2019-03-29&to=2019-03-29&sel3=Announcement)를 참조하세요. Mendix Developer Portal에서 *SAP Cloud Platform*에 새 또는 기존 Mendix 앱을 배포할 때 새 스택이 앱에 적용됩니다.

### March 21, 2019

#### Improvements

* Mendix Developer Portal 내에서 *SAP Cloud Platform* Cloud Foundry Marketplace 서비스를 관리하는 기능을 추가했습니다.

#### Limitation

* *Developer Portal에서 시작하기 전에* Desktop Modeler에서 SAP에 앱을 배포하면, Marketplace 서비스가 바인딩되지 않았기 때문에 배포가 실패합니다. Desktop Modeler에서 배포하기 전에 앱을 먼저 Developer Portal에서 배포하세요.

## 2018

### October 22, 2018

#### Improvements

* SAP Cloud Platform에 배포된 앱은 Developer Portal의 **Edit App** 버튼에서 적절한 옵션을 선택하여 Web Modeler 또는 Desktop Modeler에서 편집할 수 있습니다. 이전 앱은 **General** 설정 페이지의 **Enable Web Modeler** 버튼을 사용하여 이 기능을 활성화할 수 있습니다.
* SAP Cloud Platform에 배포된 앱의 로그를 Developer Portal의 **Logs** 페이지에서 Kibana를 통해 확인할 수 있습니다. 자세한 내용은 [Logs](/developerportal/operate/logs/)를 참조하세요.

### October 1, 2018

#### Improvements

* XSUAA 범위에서 Destination Service를 구성합니다. 이는 각 새 환경의 destination 인스턴스에 uaa.user 기본 범위를 추가한다는 의미입니다. 이는 destination 구성을 가져오는 데 필요합니다.

### August 7, 2018

#### Improvements

* SAP 앱에 대한 새로운 환경 라이프사이클을 도입하고 모든 이전 환경을 마이그레이션했습니다.
* SAP 앱의 **Environments** 화면에서 UX를 개선했습니다.

### July 3, 2018

#### Improvements

* Mendix와 SAP 간의 통합 및 보안을 개선하기 위해, SAP 자격 증명을 제공하기 위해 이제 SAP로 리다이렉트합니다. 이는 다음번에 자격 증명을 제공해야 할 때 Mendix와 SAP에 동일한 사용자 이름(이메일 주소)을 사용해야 함을 의미합니다. 이 기능은 현재 SAP 리전 **eu10 (Europe - Frankfurt)** 및 **us10 (US East - VA)**에서만 구현되었습니다.

### February 27, 2018

#### Fixes

* SAP Cloud 사용자가 **Mobile App** 섹션을 올바르게 볼 수 없었던 문제를 수정했습니다.
