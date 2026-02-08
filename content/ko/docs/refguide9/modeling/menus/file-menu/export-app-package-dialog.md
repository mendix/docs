---
title: "앱 패키지 내보내기"
url: /refguide9/export-app-package-dialog/
weight: 30
aliases:
    - /refguide9/export-project-package-dialog/
---

## 소개

Mendix Studio Pro에서 백업 목적이나 다른 Mendix 개발자와 공유하기 위해 앱 패키지(*.mpk*)를 내보낼 수 있습니다. 다른 사람에게 전체 앱을 제공하거나 티켓을 제출할 때 테스트 앱을 제공해야 하는 경우 유용합니다.

앱 패키지는 [Import App Package](/refguide9/import-app-package-dialog/)를 사용하여 새 앱으로 다시 가져올 수 있습니다.

패키지를 내보내려면 **File** 메뉴 > **Export App Package**를 열고 **Export App Package** 대화 상자에서 관련 옵션을 선택하십시오:

{{< figure src="/attachments/refguide9/modeling/menus/file-menu/export-app-package-dialog/export-app-package.png" alt="Export App Package Dialog Window" class="no-border" >}}

선택할 수 있는 옵션에 대한 자세한 내용은 아래 섹션을 참조하십시오.

## 패키지 유형

애드온 모듈 및 솔루션 게시에 대한 접근 권한이 있는 경우 앱을 **Solution** 또는 **Source Package**로 내보내도록 선택할 수 있습니다.

{{< figure src="/attachments/refguide9/modeling/menus/file-menu/export-app-package-dialog/export-app-package-types.png" alt="Export App Package Dialog Window with Different Package Types" class="no-border" >}}

접근 권한은 [Mendix Partner Program](/appstore/partner-program/)을 통해 얻을 수 있습니다.

### Solution 패키지

{{% alert color="info" %}}
**Solution** 및 **Source Package** 설정은 애드온 모듈 및 솔루션 게시에 대한 접근 권한이 있는 경우에만 볼 수 있습니다. 접근 권한은 [Mendix Partner Program](/appstore/partner-program/)을 통해 얻을 수 있습니다.
{{% /alert %}}

앱을 솔루션으로 개발하고 소비자에게 특정 문서/요소가 숨겨져 있는 경우 이 유형의 패키지를 선택하십시오. 앱은 *.mxsolution* 파일로 내보내집니다. 애드온 및 솔루션 모듈은 내보내기 중에 *.mxmodule* 형식으로 변환됩니다. 애드온 및 솔루션 모듈에 대한 자세한 내용은 [Configuring Add-on and Solution Modules for Publishing](/refguide9/configure-add-on-and-solution-modules/)을 참조하십시오.

### Source 패키지

{{% alert color="info" %}}
**Solution** 및 **Source Package** 설정은 애드온 모듈 및 솔루션 게시에 대한 접근 권한이 있는 경우에만 볼 수 있습니다. 접근 권한은 [Mendix Partner Program](/appstore/partner-program/)을 통해 얻을 수 있습니다.
{{% /alert %}}

소스 패키지는 소스 형식으로 앱을 배포하는 데 사용됩니다(즉, 모든 콘텐츠가 소스 코드와 함께 배포되어 소비자 측에서 문서/요소를 변경할 수 있습니다). 앱은 *.mpk* 형식으로 내보내집니다.

## 대상

패키지를 내보낼 폴더를 지정할 수 있습니다. 기본 위치는 앱 디렉토리 내의 *packages* 폴더입니다.

## 데이터 내보내기

Mendix 앱 패키지는 Mendix 패키지 파일(*.mpk*)로 내보낼 수 있습니다. 내장 배포 데이터베이스와 업로드된 파일을 함께 내보내거나 데이터 없이 내보내도록 선택할 수 있습니다. 다음 옵션 중 하나를 선택할 수 있습니다:

* **No data** – 데이터 없이 패키지가 내보내집니다.
* **Existing snapshot** – 이 옵션은 앱 패키지 내보내기에 기존 데이터베이스 스냅샷을 포함합니다

    {{% alert color="info" %}}이 옵션은 스냅샷이 이미 생성된 경우에만 사용할 수 있습니다. 필요한 경우 **Version Control** > **Add Snapshot of Data**를 통해 스냅샷을 생성할 수 있습니다.{{% /alert %}}

* **New snapshot from current database** – 데이터베이스에서 새 스냅샷을 생성하고 내보내기에 포함합니다

    {{% alert color="info" %}}이 옵션은 앱을 로컬에서 한 번 이상 실행한 후에 사용할 수 있습니다. 앱을 처음 실행할 때 로컬 데이터베이스가 생성되기 때문입니다.{{% /alert %}}

## 더 보기

* [Import App Package](/refguide9/import-app-package-dialog/)
* [Version Control Menu](/refguide9/version-control-menu/)
