---
title: "백업 생성"
url: /developerportal/operate/create-backup/
weight: 10
description: "이 페이지에서는 백업을 생성하는 방법을 설명합니다."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 소개

이 문서에서는 라이선스가 부여된 클라우드 노드의 백업을 생성하는 방법을 설명합니다.

## 사전 요구 사항

이 문서를 시작하기 전에 다음 사전 요구 사항을 충족했는지 확인하십시오:

* 라이선스가 부여된 클라우드 노드가 있어야 합니다. 이 옵션은 Free App에서는 사용할 수 없습니다.
* 노드에 대한 **백업 접근** 권한이 있어야 합니다. 자세한 내용은 [노드 권한](/developerportal/deploy/node-permissions/)을 참조하십시오.

## 백업 생성

라이선스가 부여된 앱의 백업 아카이브를 생성하려면 다음 단계를 따르십시오:

1. [Apps](https://sprintr.home.mendix.com)로 이동하여 앱을 선택합니다.
2. 탐색 창에서 **Backups**를 클릭합니다.
3. 백업 스냅샷을 생성할 환경을 선택합니다.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/create-backup/environment.png" width=25% class="no-border" >}}

4. **Create Backup**을 클릭합니다.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/create-backup/backupoptions.png" class="no-border" >}}
    백업 생성이 RDS 백업 또는 유지보수 기간과 겹치는 경우 백업이 즉시 실패할 수 있습니다. 실패한 백업의 **Comment** 열에 추가 세부 정보가 제공됩니다.

   {{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/create-backup/backup-rds-window-failure.png"  >}}


백업 아카이브를 생성한 후 **More Options** ({{% icon name="three-dots-menu-horizontal" %}})를 클릭한 다음 **Download**를 선택하여 다운로드할 수 있습니다. 자세한 내용은 [백업 다운로드](/developerportal/operate/download-backup/)를 참조하십시오.

{{% alert color="info" %}}
백업 아카이브를 생성한 후 환경을 다시 시작하려면 백업이 완료될 때까지 기다리십시오. 데이터베이스가 백업을 생성하는 동안 테이블이 잠기므로, 백업이 생성되는 동안 환경을 시작하려고 하면 시간 초과 오류가 발생할 수 있습니다.
{{% /alert %}}

## 백업의 파일

**DeleteAfterDownload** 속성이 **System.FileDocument** Entity 또는 그 일반화에서 **true**로 설정되지 않은 한 모든 파일이 백업에 포함됩니다.

**DeleteAfterDownload** 플래그는 성공적인 다운로드 직후 파일 저장 시스템에서 파일을 자동으로 제거하고 이러한 파일이 시스템 백업에서 제외되도록 하는 보안 기능입니다.

이 플래그는 민감하거나 기밀 데이터를 처리할 때 특히 중요합니다. 파일이 다운로드되고 삭제되면 활성 저장소나 백업 시스템에서 검색할 수 없으므로 파일 수명 주기 전반에 걸쳐 완전한 데이터 보안이 유지됩니다.

## 추가 읽기

* [Mendix Cloud에 배포하는 방법](/developerportal/deploy/mendix-cloud-deploy/)
* [백업 다운로드 방법](/developerportal/operate/download-backup/)
* [Mendix Cloud 앱 라이선싱](/developerportal/deploy/licensing-apps/)
* [백업 복원 방법](/developerportal/operate/restore-backup/)
