---
title: "이니셔티브 내보내기 및 가져오기"
url: /developerportal/portfolio-management/export-import-initiatives/
parent: "portfolio-management"
weight: 30
description: "Mendix 포트폴리오 관리 앱에서 이니셔티브를 가져오고 내보내는 방법을 설명합니다."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

[포트폴리오 관리](/developerportal/portfolio-management/)에서 Excel 파일을 사용하여 포트폴리오에 이니셔티브를 가져올 수 있습니다. 이를 통해 이미 정의된 이니셔티브를 가져와 빠르게 시작할 수 있습니다. 또한 전체 포트폴리오 보드 또는 이니셔티브의 하위 집합을 Excel 파일로 내보낼 수 있습니다. 이를 통해 이니셔티브를 한 보드에서 다른 보드로 이동하거나 보고서를 생성하기 위해 이니셔티브를 내보낼 수 있습니다.

## 사전 요구 사항

* 포트폴리오에 대해 최소한 [기여자](/developerportal/portfolio-management/access-management/#members) 역할이 필요합니다.

## 절차

### 이니셔티브 내보내기 {#export-initiatives}

{{% alert color="info" %}}
매번 하나의 포트폴리오에서만 이니셔티브를 내보낼 수 있습니다. 모든 포트폴리오를 한 번에 내보내는 것은 불가능합니다.
{{% /alert %}}

1. 포트폴리오 관리에서 포트폴리오를 클릭하여 엽니다.
2. 이니셔티브가 나열된 페이지로 이동합니다:
   * 활성 이니셔티브를 내보내려면 **Initiatives Overview** 페이지로 이동합니다.
   * 아카이브된 이니셔티브를 내보내려면 **Archived** 페이지로 이동합니다.
3. 특정 이니셔티브만 내보내려면 페이지 오른쪽 상단의 **Filters** 옵션을 사용합니다.
4. 오른쪽 상단의 버튼을 클릭하여 이니셔티브를 내보냅니다:
   * **Initiatives Overview** 페이지에서 {{% icon name="office-sheet" %}} 아이콘을 클릭한 후 **Export Initiatives**를 선택합니다.
   * **Archive** 페이지에서 {{% icon name="office-sheet" %}} **Export Initiatives**를 클릭합니다.
   **Export Initiatives** 대화 상자가 열립니다.
5. 이니셔티브를 내보내는 방법을 선택합니다:
   * 포트폴리오의 모든 이니셔티브를 내보내려면 **Export All**을 클릭합니다.
   * 선택한 이니셔티브만 내보내려면 **Export Selection**을 클릭합니다.

이니셔티브가 Excel 파일로 내보내집니다.

{{% alert color="info" %}}
다음 필드의 데이터를 제외한 이니셔티브의 모든 세부 정보가 내보내집니다:

* **Linked Apps**
* **Linked Epics**
* **Owners**
* **Created By**
* **Comments**
* **Attachments**
* **Expected Value**의 **Additional Information**
* **Archived By**
  {{% /alert %}}

### 이니셔티브 가져오기 {#import-initiatives}

1. 포트폴리오 관리에서 포트폴리오를 클릭하여 엽니다. **Initiatives Overview** 페이지가 표시됩니다.
2. **Initiatives Overview** 페이지에서 오른쪽 상단의 {{% icon name="office-sheet" %}} 아이콘을 클릭한 후 드롭다운 메뉴에서 **Import Initiatives**를 선택합니다. **Import Initiatives** 대화 상자가 열립니다.
3. 오류를 방지하기 위해 **Import Initiatives** 대화 상자에서 Excel 파일 템플릿을 다운로드하고 이니셔티브를 가져오는 데 템플릿으로 사용하세요.
4. Excel 파일이 가져올 준비가 되면 **Import Initiatives** 대화 상자로 드래그하거나 **Upload**를 클릭하여 파일을 선택하세요.
5. **Import**를 클릭하세요.

Excel 파일의 모든 이니셔티브가 성공적으로 가져옵니다. **Initiatives Overview** 페이지에서 이니셔티브를 확인할 수 있습니다.
