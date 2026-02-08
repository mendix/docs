---
title: "워크스페이스 및 스테이션 데이터 관리 및 공유"
linktitle: "데이터 관리 및 공유"
url: /mendix-workstation/import-export/
description: "워크스페이스와 환경 간에 워크스페이스 및 스테이션 데이터를 가져오고 내보내는 방법을 설명합니다."
weight: 30
---

## 소개

스테이션 및 워크스페이스 데이터를 내보내기(Export)와 가져오기(Import)를 통해 다양한 워크스페이스와 환경 간에 관리하고 공유할 수 있습니다. 단일 스테이션 또는 여러 스테이션의 구성을 동시에 내보내고 가져올 수 있습니다. 이를 통해 스테이션 구성의 다양한 단계와 버전을 별도의 워크스페이스에 보관하여 쉽게 관리할 수 있습니다.

### 워크스페이스 역할 및 권한

다양한 사용자 역할에 따라 가져오기 및 내보내기 작업에 대한 접근 수준이 다릅니다. 자세한 내용은 [워크스페이스 팀 및 협업](/mendix-workstation/installation/#collaboration)을 참조하십시오.

## 스테이션 일괄 가져오기 및 내보내기

{{% alert color="info" %}}
이 옵션은 라이선스를 보유한 사용자만 사용할 수 있습니다. 자세한 내용은 [Mendix Workstation](/mendix-workstation/)을 참조하십시오.
{{% /alert %}}

여러 스테이션 구성과 관련된 애플리케이션 및 장치를 워크스페이스 간에 전송하려면 다음 단계를 수행하십시오:

1. [Workspaces](https://workstation.home.mendix.com/) 페이지를 여십시오.
2. 스테이션을 내보내려는 워크스페이스를 클릭하십시오.
3. **Stations** 페이지에서 화면 오른쪽 상단의 점 세 개 메뉴를 클릭한 다음 **Export Stations**를 클릭하십시오.

    {{< figure src="/attachments/workstation/wks-import1.png" class="no-border" >}}

    **Download Stations** 대화 상자가 열립니다. 워크스페이스에 생성된 모든 스테이션을 다운로드하거나 목록에서 개별 스테이션을 선택할 수 있습니다.

4. **Download**를 클릭하십시오.

    내보내기 파일이 JSON 형식으로 컴퓨터에 저장됩니다.

5. 스테이션을 가져오려는 워크스페이스로 이동하십시오.

    이는 스테이션을 내보낸 워크스페이스이거나 다른 워크스페이스일 수 있습니다.

6. **Stations** 페이지에서 화면 오른쪽 상단의 점 세 개 메뉴를 클릭한 다음 **Import Stations**를 클릭하십시오.
7. 선택적으로 가져오기에 앱과 장치를 포함할지 지정하십시오:

    * **Include Apps** - 이 옵션을 선택하면, 가져오기 시 내보낸 스테이션에 연결되어 있지만 동일한 URL과 공개 키를 가진 앱이 워크스페이스에 아직 존재하지 않는 경우 해당 앱을 생성합니다.
    * **Include Devices** - 이 옵션을 선택하면, 가져오기에 내보낸 장치 구성이 포함됩니다.

가져오기가 완료되면 대상 워크스페이스에 소스 워크스페이스와 동일한 애플리케이션 및 스테이션 구성이 생성되지만, 스테이션은 아직 컴퓨터에 등록되지 않은 상태입니다.

## 단일 스테이션 가져오기 및 내보내기

단일 스테이션의 내용을 전송하려면 다음 단계를 수행하십시오:

1. **Stations** 페이지에서 복사하려는 스테이션 옆의 점 세 개 메뉴를 클릭한 다음 **Copy Station to Clipboard**를 클릭하십시오.

    {{< figure src="/attachments/workstation/wks-import2.png" class="no-border" >}}

    또는 **Download Station File**을 클릭하여 나중에 사용하거나 다른 사람과 공유하기 위해 구성을 JSON 형식으로 컴퓨터에 다운로드할 수 있습니다.

2. **Create Station**을 클릭한 다음 **Create station from clipboard**를 선택하십시오.

    또는 1단계에서 파일을 다운로드한 경우 **Create station from file**을 클릭하십시오.

3. **Paste Station Configuration** 필드에 구성을 붙여넣으십시오.

    {{< figure src="/attachments/workstation/wks-import3.png" class="no-border" >}}

4. **Continue**를 클릭하십시오.
5. **Summary** 화면에서 정보를 검토하고, 선택적으로 *Assembly*와 같이 분류할 그룹을 선택하십시오.
6. **Create Station**을 클릭하십시오.
