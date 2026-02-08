---
title: "버전 관리 FAQ"
url: /refguide9/version-control-faq/
weight: 30
description: "버전 관리에 관한 자주 묻는 질문을 소개하고 설명합니다."
---

## 소개

[Mendix Team Server](/developerportal/repository/team-server/)는 모든 Mendix 앱을 저장하는 Mendix 호스팅 환경입니다. 앱을 버전 관리 시스템에 통합하여 버전 관리를 용이하게 합니다. Mendix Studio Pro는 Team Server에 통합되어 한 번의 클릭으로 앱 생성 및 업데이트, 변경 사항 커밋, 모델 버전 병합을 수행할 수 있습니다.

## Team Server는 어떤 버전 관리 시스템을 기반으로 합니까? {#which-team-server}

Mendix Team Server는 검증된 기술을 기반으로 합니다. 처음에는 Subversion(SVN) 위에만 구축되었으며, Team Server SVN이라고도 합니다. Mendix 9.12.0부터 Team Server는 Git 기술을 사용한 앱 저장도 지원하며, Team Server Git이라고 합니다.

현재 SVN이 Team Server의 기본 버전 관리 시스템이지만 Git을 선택할 수 있습니다. 향후 Git이 기본 시스템이 될 것입니다.

Mendix 8은 Team Server SVN만 지원하며, 이 주요 버전이 사용 가능한 동안 Team Server SVN에 대한 지원이 유지됩니다.

## Team Server에 얼마나 많은 저장 공간이 제공됩니까?

상업용 라이선스에 연결된 앱의 저장 공간은 무제한입니다. 아직 상업용 라이선스에 연결되지 않은 앱의 경우 회사 계정에 1GB의 무료 저장 공간이 제공됩니다.

## 소중하고 기밀인 데이터는 어떻게 됩니까?

Mendix는 엄격한 보안 표준을 준수하며 귀하를 데이터의 유일한 소유자로 간주합니다. Mendix Cloud Infrastructure 엔지니어만 데이터에 접근할 수 있으며, 문제 해결 목적으로만 접근합니다. 데이터는 1년간 백업되며, 백업은 앱 삭제 후 1년간 보존됩니다. 기본 Subversion 도구를 사용하여 언제든지 데이터 백업을 받을 수 있으며, 앱이 삭제된 경우 [Mendix Support](https://support.mendix.com/) 티켓을 제출하여 받을 수 있습니다.

## Team Server SVN과 Team Server Git의 차이점은 무엇입니까?

SVN과 Git의 차이점에 대한 정보는 [Git으로 마이그레이션: SVN과 Git 프로세스 차이점](/refguide9/svn-git-differences/)을 참조하십시오.

## Team Server SVN에 비해 Team Server Git의 장점은 무엇입니까? {#git-advantages}

Team Server Git은 Team Server SVN에 비해 다음과 같은 장점이 있습니다:

* Git은 GitHub, GitLab, Azure, AWS, Atlassian 등에서 제공하는 소프트웨어 버전 관리의 표준입니다. Subversion(SVN)은 구식이 되었습니다. 따라서 이것은 더 넓은 시장 및 개발자 생태계와 일치하도록 Mendix Platform을 현대화하는 것입니다.
* Git은 리포지토리의 로컬 버전을 저장하므로 개발자가 고속 인터넷 연결과 중앙 리포지토리와의 지속적인 동기화 필요성에 덜 의존합니다.
* Git은 기술적으로 더 진보되고 최적화된 통신 프로토콜을 가지고 있어 중앙 리포지토리와의 변경 사항 동기화가 더 빠르고 안정적입니다.
* 변경 사항을 커밋하여 저장 지점을 만들 수 있으며, 해당 변경 사항을 중앙 리포지토리에 즉시 Push하지 않아도 됩니다. 이를 통해 한 번에 Push할 수 있는 일관된 변경 사항 집합을 만들 수 있으며, 중간에 커밋할 수도 있습니다.
* 로컬로 커밋한 변경 사항이 동료의 변경 사항과 충돌할 수 있습니다. 업데이트 시 이를 해결한 다음 해결된 변경 사항을 커밋해야 합니다. Git에서는 이러한 변경 사항을 검색하기 전에 로컬로 커밋해야 합니다. 이것이 번거로울 수 있지만, 충돌을 해결할 때 실수를 하더라도 귀하와 동료가 한 변경 사항을 여전히 볼 수 있고 적절하게 해결할 수 있는 이점이 있습니다.
* 파일 변경 처리와 같은 고급 버전 관리 사례를 위해 최신 서드파티 Git 도구를 사용할 수 있습니다.

## 검색 및 커밋 + Push 작업이 점점 느려지고 있습니다

이는 Git의 저장 형식이 Mendix 모델의 변경 저장 방식과 상호 작용하는 방식으로 인해 시간이 지남에 따라 상당한 디스크 공간이 축적될 수 있기 때문일 수 있습니다.

명령줄에서 `git gc`를 실행하여 이를 완화할 수 있습니다. `git gc`는 여러 하우스키핑 작업을 실행하지만, 주로 팩 파일이 생성됩니다. 팩 파일은 파일에 대한 변경 사항만 저장하므로 저장해야 하는 데이터 양이 줄어듭니다.

Team Server에서는 이미 이러한 하우스키핑 작업을 자동으로 수행하므로, 대안으로 새로운 사본을 체크아웃할 수도 있습니다. 향후 버전에서 Studio Pro에서 이를 개선하기 위해 노력하고 있습니다.

## Subversion 버전의 Team Server를 계속 사용할 수 있습니까?

네, Team Server Git을 도입하면서 Team Server SVN에 대한 지원을 유지할 것입니다. Team Server Git에 대한 제안을 개선하면서 Team Server SVN에서 Team Server Git으로 앱을 마이그레이션하는 옵션을 도입할 것입니다.
Mendix는 Team Server Git 지원을 개선하고 고객을 Team Server Git으로 마이그레이션하는 데 집중하고 있습니다.

## Team Server SVN에서 Git으로 마이그레이션할 수 있습니까?

Scrum Master는 Mendix Portal에서 SVN 앱을 Git으로 마이그레이션할 수 있습니다. 마이그레이션 방법에 대한 자세한 내용은 [Git으로 마이그레이션](/developerportal/general/migrate-to-git/)을 참조하십시오.

## 서드파티 도구를 사용하여 Team Server에 연결할 수 있습니까? {#third-party-tools}

네, Team Server는 Git 또는 SVN의 전체 구현을 기반으로 합니다. TortoiseSVN, TortoiseGit 또는 GitHub Desktop과 같은 서드파티 도구를 직접 사용할 수 있습니다. 설정 방법에 대한 자세한 내용은 *Studio Pro에서 버전 관리 사용하기*의 [외부 도구](/refguide9/using-version-control-in-studio-pro/#external-tools) 섹션을 참조하십시오.

## 서드파티 또는 온프레미스 버전 관리 서버에 연결할 수 있습니까?

네, 서드파티 Subversion 또는 Git 버전 관리 리포지토리에 연결할 수 있으며, 이를 종종 BYO-GIT 또는 BYO-SVN(Bring Your Own Git/SVN)이라고 합니다.

그러나 이 경우 다음 제품 및 기능을 사용할 수 없습니다:

* Team Server에서 직접 Mendix Portal을 사용한 배포
* [App repository API](/apidocs-mxsdk/apidocs/app-repository-api/), [Build API](/apidocs-mxsdk/apidocs/build-api/), [Platform SDK](/apidocs-mxsdk/mxsdk/), Permissions API, [Projects API](/apidocs-mxsdk/apidocs/projects-api/), [Epics API](/apidocs-mxsdk/apidocs/epics-api/) 및 [User management API](/apidocs-mxsdk/apidocs/user-management-api/)와 같은 통합 플랫폼 API
* [AQM](/addons/aqm-addon/)

{{% alert color="info" %}}
Git의 경우, 서드파티 Git 버전 관리 리포지토리에 연결하는 것은 베타 상태입니다. 지원되는 Git 리포지토리에 대한 자세한 내용은 [Git 온프레미스 버전 관리 서버 사용하기](/refguide9/on-premises-git/#preparing-your-repo)를 참조하십시오.
{{% /alert %}}

## Mendix 9는 Pull Request 및 피어 리뷰를 지원합니까?

Studio Pro는 Studio Pro에서 사용 가능한 버전 관리 기능을 통해 피어 리뷰 및 병합을 지원합니다. 이 프로세스를 설정하는 방법에 대한 자세한 내용은 [Studio Pro에서 버전 관리 사용하기](/refguide9/using-version-control-in-studio-pro/)를 참조하십시오.
현재 Mendix는 Mendix용 Team Server를 통한 Pull 또는 Merge Request를 지원하지 않습니다. 서드파티 도구를 사용하면 다음 코드 확장을 리뷰할 수 있습니다:

* Java 및 JavaScript Action용 코드
* 테마를 위한 HTML/CSS
