---
title: "그룹"
url: /control-center/groups/
description: "Mendix Control Center의 그룹 페이지에 대해 설명합니다."
weight: 30
no_list: true 
---

{{% alert color="info" %}}
Control Center에서 멤버란 개발 프로세스에 참여하는 Mendix 플랫폼 사용자를 의미합니다. Mendix 플랫폼에서 구축된 앱의 최종 사용자를 의미하지 않습니다.
{{% /alert %}}

## 소개

Mendix 관리자는 **앱 액세스 그룹**을 설정할 수 있습니다. 이 그룹은 특정 환경 및 역할로 [Mendix SSO](/appstore/modules/mendix-sso/) 사용 앱에 액세스할 수 있는 최종 사용자(회사 내 Mendix 플랫폼의 활성 사용자)로 구성됩니다.

## 액세스 그룹 추가

새 그룹을 만들려면 오른쪽 상단의 **액세스 그룹 추가**를 클릭한 다음 **이름** 및 **설명**을 입력하십시오.

## 액세스 그룹 개요

목록에서 그룹 이름을 클릭하면 그룹 세부 정보 팝업 창이 나타납니다. 그런 다음 **멤버 추가**를 클릭하여 회사의 Mendix 플랫폼 사용자를 그룹에 추가할 수 있습니다. 앱 액세스 그룹에 누군가를 추가하면 **접근 가능한 앱** 탭에 나열된 앱에 대한 액세스가 자동으로 부여됩니다. 그룹에 대해 접근 가능한 앱을 선택한 후에는 접근 가능한 특정 앱 [환경](/developerportal/deploy/environments/) 노드와 앱에 액세스할 수 있어야 하는 특정 [사용자 역할](/refguide/user-roles/)도 선택해야 합니다.

{{< figure src="/attachments/control-center/people/groups/access-group.jpg" class="no-border" >}}

{{% alert color="warning" %}}
앱 액세스 그룹에는 [Mendix SSO](/appstore/modules/mendix-sso/)를 사용하는 앱만 추가할 수 있습니다.
{{% /alert %}}

목록에서 그룹, 회사의 Mendix 플랫폼 사용자 또는 그룹 세부 정보 페이지의 접근 가능한 앱을 선택하면 항목 세부 정보를 *.xlsx* 파일로 내보내기, 액세스 그룹 삭제, 액세스 그룹에서 Mendix 플랫폼 사용자 제거, 접근 가능한 앱 제거 옵션이 있는 컨텍스트 메뉴가 나타납니다.
