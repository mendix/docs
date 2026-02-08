---
title: "백업 다운로드"
url: /developerportal/operate/download-backup/
weight: 20
description: "이 페이지에서는 백업을 다운로드하는 방법을 설명합니다."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

이 문서에서는 Free App 환경 또는 라이선스가 부여된 클라우드 노드에서 백업을 다운로드하는 방법을 설명합니다.

## 사전 요구 사항

이 문서를 시작하기 전에 다음 사전 요구 사항을 충족했는지 확인하십시오:

* 백업이 있는 Free App 또는 라이선스가 부여된 클라우드 노드가 있어야 합니다.
* 라이선스가 부여된 노드의 경우 올바른 [노드 권한](/developerportal/deploy/node-permissions/)이 있어야 합니다.

## Free App 백업 다운로드

Free App의 백업을 다운로드하려면 다음 단계를 따르십시오:

1. [Apps](https://sprintr.home.mendix.com)로 이동하여 앱을 엽니다.
1. [탐색 창](/developerportal/#navigation-pane)에서 **Backups**를 클릭합니다.
1. 다운로드할 백업에서 **More Options** ({{% icon name="three-dots-menu-horizontal" %}})를 클릭합니다. 드롭다운 목록에서 **Download**를 선택합니다.
1. 백업 유형을 선택합니다: **Full snapshot**, **Database only** 또는 **Files only**. 그런 다음 **Start**를 클릭합니다.

## 라이선스가 부여된 클라우드 노드 백업 다운로드

라이선스가 부여된 앱의 백업을 다운로드하려면 다음 단계를 따르십시오:

1. [Apps](https://sprintr.home.mendix.com)로 이동하여 앱을 엽니다.
1. 탐색 창에서 **Backups**를 클릭합니다.
1. 백업을 다운로드할 환경을 선택합니다.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/download-backup/environment.png" width="25%" class="no-border" >}}

1. 먼저 백업을 생성하려면 **Create Backup**을 클릭합니다.
1. 다운로드할 백업에서 **More Options** ({{% icon name="three-dots-menu-horizontal" %}})를 클릭합니다. 드롭다운 목록에서 **Download**를 선택합니다.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/download-backup/backupoptions.png" class="no-border" >}}

1. 백업 유형을 선택합니다: **Full snapshot**, **Database only** 또는 **Files only**. 그런 다음 **Start**를 클릭합니다.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/download-backup/backup-choice.png" alt="" width=75% class="no-border" >}}

    {{% alert color="info" %}}일부 백업은 아카이브되고 다운로드 준비가 되는 데 시간이 걸릴 수 있습니다. 창을 닫고 나중에 돌아올 수 있습니다. 아카이브 프로세스가 완료되면 동일한 백업에 대해 동일한 다운로드 유형을 선택하면 **Show URL** 및 **Download** 버튼이 즉시 활성화됩니다.{{% /alert %}}
   
    {{% alert color="info" %}}최근에 백업 아카이브가 준비된 경우 동일한 다운로드 유형을 선택하면 **Show URL** 및 **Download** 버튼이 활성화됩니다. 이 경우 백업 아카이브를 즉시 다운로드할 수 있습니다.{{% /alert %}}
    
1. 다운로드 아카이브가 준비되면 다음 중 하나를 수행할 수 있습니다:

    * **Show URL**을 클릭하여 백업의 URL을 확인합니다.
    * **Download**를 클릭하여 브라우저를 사용하여 아카이브 다운로드를 즉시 시작합니다.

    {{% alert color="info" %}} 백업 아카이브 및 **Download URL**(**Show URL** 클릭 시 접근 가능)은 생성 시점으로부터 24시간 동안만 다운로드할 수 있습니다. {{% /alert %}}

## 알려진 제한 사항

* Mendix Cloud는 Amazon Web Services에서 실행되며, 다운로드할 수 있는 백업 크기에 2TB 제한이 있습니다. Mendix Cloud에도 동일한 크기 제한이 적용됩니다.

## 추가 읽기

* [백업 생성](/developerportal/operate/create-backup/)
* [Mendix Cloud 앱 라이선싱](/developerportal/deploy/licensing-apps/)
* [백업 복원](/developerportal/operate/restore-backup/)
