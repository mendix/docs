---
title: "거버넌스 프로세스"
url: /appstore/submit-content/governance-process/
weight: 4
description: "Marketplace 콘텐츠를 승인하고 검토하기 위한 Mendix 프로세스를 설명합니다."
---

## 승인 프로세스

[공개 Marketplace](/appstore/submit-content/#support-licensing)에 리스팅될 모든 컴포넌트는 리스팅의 품질과 정확성을 보장하고 컴포넌트가 사용자의 기대를 충족하는지 확인하기 위한 승인 프로세스를 거칩니다. 컴포넌트 제출은 대기열에서 처리되며 제출 후 5영업일 이내에 선착순으로 검토됩니다.

{{% alert color="warning" %}}
Mendix는 승인을 위해 컴포넌트를 제출하기 전에 다음 검사를 수행할 것을 강력히 권장합니다. 이를 통해 승인 프로세스도 빨라집니다.
{{% /alert %}}

### 검사 항목

Mendix는 다음을 검사합니다:

* [Fossology](https://fossology.osuosl.org/repo/) 도구를 사용하여 업로드된 *.mpk* 파일에 사용된 라이선스.   
  GPL, LGPL 또는 MPL 라이선스를 사용해서는 안 됩니다.    
  자세한 내용은 [오픈 소스 소프트웨어 라이선스](/appstore/submit-content/#license)를 참조하십시오.
* QSM을 사용한 타사 취약점. 치명적이거나 높은 취약점이 발견되면 컴포넌트가 거부됩니다.
* 로고가 컴포넌트의 기능과 관련이 있는지 확인합니다.
* 스크린샷이 최종 사용자 앱에서 컴포넌트를 사용하는 데 필요한 구성과 관련이 있는지 확인합니다.

식별된 문제에 따라 컴포넌트가 승인되기까지 몇 번의 반복이 필요할 수 있습니다. 높은 수의 반복을 방지하려면 승인을 위해 컴포넌트를 제출하기 전에 [콘텐츠 제작자 가이드라인](/appstore/guidelines-content-creators/)을 따르고 위의 검사를 수행했는지 확인하십시오.

{{% alert color="info" %}}
공개 컴포넌트의 이후 모든 업로드 버전은 Mendix의 스캔 및 승인을 받아야 합니다.

비공개 Marketplace 콘텐츠는 검토나 승인이 필요하지 않습니다.
{{% /alert %}}

## 오래된 컴포넌트 검토

Mendix Marketplace가 성장함에 따라 사용자가 최신 및 관련 컴포넌트를 찾을 수 있는 것이 중요합니다. 사용자가 오래되거나 사용되지 않는 컴포넌트를 찾을 가능성을 줄이기 위해 Marketplace 콘텐츠를 검토하고 다음 사항을 평가합니다:

* 컴포넌트가 Mendix가 지원하는 Studio Pro 버전을 지원하는지 여부. 여기에는 현재 메이저 버전과 이전 두 메이저 버전이 포함됩니다.    
  자세한 내용은 [LTS, MTS 및 월별 릴리스](/releasenotes/studio-pro/lts-mts/)를 참조하십시오.
* 컴포넌트가 최근에 업데이트되었는지 여부.
* 컴포넌트가 활발히 사용되고 있는지, 또는 사용이 제한적이거나 다운로드, 리뷰 또는 평점이 매우 적은지 여부.

다음은 오래된 컴포넌트의 검토 및 개선 프로세스입니다: 

1. Mendix는 오래된 컴포넌트의 소유자와 [Mendix 관리자](/control-center/company-settings/)에게 알림을 보냅니다. 컴포넌트가 Marketplace에서 활성 상태를 유지하려면 30일 이내에 업데이트를 제출해야 합니다. 이 업데이트는 활성 버전의 Studio Pro 지원을 기반으로 해야 합니다.
2. Mendix는 이 30일 동안 두 번의 리마인더를 보냅니다: 15일째에 첫 번째, 25일째에 두 번째.
3. 컴포넌트 소유자 또는 Mendix 관리자가 규정된 기간 내에 필요한 업데이트를 수행할 수 없는 경우, Mendix는 Marketplace에서 컴포넌트를 게시 취소합니다. 게시 취소는 컴포넌트가 Marketplace에 리스팅되지 않지만 데이터베이스에 컴포넌트의 복사본이 남아 있음을 의미합니다.
4. 소유자 또는 Mendix 관리자가 게시 취소된 컴포넌트를 Marketplace에 복원하려면 필요한 업데이트를 수행하고 [Mendix 지원](/support/submit-support-request/) 요청을 만듭니다.
