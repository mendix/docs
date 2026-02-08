---
title: "아카이브 이니셔티브"
linktitle: "아카이브"
url: /developerportal/portfolio-management/archive/
weight: 10
description: "Mendix 포트폴리오 관리 앱의 아카이브(Archive) 페이지를 설명합니다."
---

## 소개

**아카이브(Archive)** 페이지는 아카이브된 모든 이니셔티브를 표시합니다. 검색 바에서 이니셔티브를 검색할 수 있습니다. {{% icon name="office-sheet" %}} **Export Initiatives** 버튼을 클릭하여 [이니셔티브를 내보낼](/developerportal/portfolio-management/export-import-initiatives/) 수 있습니다. **Filters**를 클릭하면 이니셔티브를 필터링할 수 있습니다.

{{< figure src="/attachments/developerportal/portfolio-management/archived-initiatives.png" >}}

목록에는 다음 정보가 포함됩니다:

* **Initiative Name** – 클릭하면 아카이브된 이니셔티브의 세부 정보와 아카이브된 이유, 추가 코멘트, 아카이브한 사람, 시기를 보여주는 사이드 패널이 열립니다.

  {{% alert type="info" %}}아카이브된 이니셔티브의 세부 정보를 볼 때 **Post Comment**만 할 수 있습니다. 다른 정보는 편집할 수 없습니다.{{% /alert %}}

* **Department** – 이니셔티브가 속한 부서를 표시합니다.
* **Stage** – 이니셔티브가 아카이브되었을 때의 단계를 표시합니다.
* **Archiving Reason** – 이니셔티브가 아카이브된 이유를 표시합니다.
* **Archived Date** – 이니셔티브가 아카이브된 날짜를 표시합니다.
* **Archived By** – 이니셔티브를 아카이브한 사용자의 아바타를 표시합니다.
* 연결된 앱의 아이콘 – 연결된 앱이 하나인 경우 아이콘을 클릭하면 앱 정보가 표시됩니다. 여러 앱이 있거나 연결된 앱이 없는 경우 아이콘은 클릭할 수 없습니다.
* 이니셔티브 소유자의 아바타 – 아바타 위에 마우스를 올리면 이니셔티브 소유자의 이름이 표시됩니다.
* **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) – 클릭하면 아카이브된 이니셔티브를 [복원](#restore-delete-archived-initiative)하거나 [삭제](#restore-delete-archived-initiative)할 수 있는 메뉴가 열립니다.

  {{% alert type="info" %}}포트폴리오 관리자와 기여자 모두 아카이브된 이니셔티브를 복원하거나 삭제할 수 있습니다. 뷰어만 이러한 작업을 수행할 수 없습니다. 역할 및 권한에 대한 자세한 내용은 *접근 관리*의 [멤버](/developerportal/portfolio-management/access-management/#members) 섹션을 참조하세요.{{% /alert %}}

## 아카이브된 이니셔티브 복원 또는 삭제 {#restore-delete-archived-initiative}

{{% alert type="info" %}}
포트폴리오 관리자와 기여자 모두 아카이브된 이니셔티브를 복원하거나 삭제할 수 있습니다. 뷰어만 이러한 작업을 수행할 수 없습니다. 역할 및 권한에 대한 자세한 내용은 *접근 관리*의 [멤버](/developerportal/portfolio-management/access-management/#members) 섹션을 참조하세요.
{{% /alert %}}

아카이브된 이니셔티브를 복원하거나 삭제하려면 **Archive** 페이지에서 해당 이니셔티브의 **More Options** ({{% icon name="three-dots-menu-horizontal" %}})를 클릭한 후 **Restore** 또는 **Delete**를 선택하세요. 아카이브된 이니셔티브를 복원하면 [이니셔티브 개요](/developerportal/portfolio-management/initiatives-overview/) 페이지로 돌아갑니다.

또는 아카이브된 이니셔티브 세부 정보를 보는 사이드 패널에서 **More Options** ({{% icon name="three-dots-menu-horizontal" %}})를 클릭한 후 **Delete**를 선택하여 아카이브된 이니셔티브를 삭제할 수도 있습니다.
