---
title: "Export Project Package"
url: /refguide8/export-project-package-dialog/
weight: 30
aliases:
    - /community-tools/support/export-a-project-package.html
    - /community-tools/support/export-a-project-package
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

백업 목적 또는 다른 Mendix 개발자와 공유하기 위해 Mendix Studio Pro에서 프로젝트 패키지(*.mpk*)를 내보낼 수 있습니다. 이는 다른 사람에게 전체 앱을 전달하거나 티켓 제출 시 테스트 앱을 제공해야 할 때 유용합니다.

프로젝트 패키지는 [Import Project Package](/refguide8/import-project-package-dialog/)를 사용하여 새 앱으로 다시 가져올 수 있습니다.

패키지를 내보내려면 **File** 메뉴 > **Export Project Package**를 열고 **Export Project Package** 대화 상자에서 관련 옵션을 선택하십시오:

{{< figure src="/attachments/refguide8/modeling/menus/file-menu/export-project-package-dialog/export-project-package.png" alt="Export Project Package Dialog Window" class="no-border" >}}

선택할 수 있는 옵션에 대한 자세한 내용은 아래 섹션을 참조하십시오.

## Destination

패키지를 내보낼 폴더를 지정할 수 있습니다. 기본 위치는 프로젝트 디렉터리 내의 *packages*라는 폴더입니다.

## Export Data

Mendix 프로젝트 패키지는 Mendix 패키지 파일(*.mpk*)로 내보낼 수 있습니다. 내장 배포 데이터베이스와 업로드된 파일도 함께 내보내거나, 데이터 없이 내보낼 수 있습니다. 다음 옵션 중 하나를 선택할 수 있습니다:

* **No data** – 데이터 없이 패키지가 내보내집니다.

* **Existing snapshot** – 이 옵션은 기존 데이터베이스 스냅샷을 내보내기 프로젝트 패키지에 포함합니다.

    {{% alert color="info" %}}이 옵션은 스냅샷이 이미 생성된 경우에만 사용할 수 있습니다. 필요한 경우 **Version Control** > **Add Snapshot of Data**를 통해 스냅샷을 생성할 수 있습니다.{{% /alert %}}

* **New snapshot from current database** – 데이터베이스에서 새 스냅샷을 생성하여 내보내기에 포함합니다.

    {{% alert color="info" %}}이 옵션은 앱을 로컬에서 최소 한 번 실행한 후에 사용할 수 있습니다. 앱을 처음 실행할 때 로컬 데이터베이스가 생성되기 때문입니다.{{% /alert %}}

## 더 보기

* [Import Project Package](/refguide8/import-project-package-dialog/)
* [Version Control Menu](/refguide8/version-control-menu/)
