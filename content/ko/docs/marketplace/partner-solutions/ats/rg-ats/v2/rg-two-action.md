---
title: "Action"
url: /appstore/partner-solutions/ats/rg-two-action/
---

## Action

Action은 작업(예: 텍스트 박스 Widget에 텍스트 입력)을 수행합니다. Test Case의 빌딩 블록처럼 작동합니다. Test Case는 Action이 포함된 테스트 단계를 실행합니다. Action은 여러 Action을 포함할 수 있습니다.

Test Case와 달리 Action은 단독으로 실행할 수 없습니다.

ATS에서는 내비게이션 메뉴의 **Test Cases**로 이동한 다음 **Repository** 탭의 **Actions** 드롭다운 메뉴에서 **New Action**을 클릭하여 새 Action을 생성합니다. 대화 상자가 열리면 Action에 이름과 선택적 설명을 입력합니다. 새 Action을 생성한 후 이름을 클릭하면 **Action Details** 페이지가 열립니다.

Action을 생성하는 다른 방법은 Test Case의 테스트 단계에서 Action을 추출하는 것입니다. Action 추출 방법에 대한 자세한 내용은 [Test Case Reference](/appstore/partner-solutions/ats/rg-two-test-case/)의 "Extract Action, Copy, Paste, Delete" 섹션을 참조하세요.

## Action 세부 정보

**Action Details** 페이지의 왼쪽 상단에서 Action의 이름과 설명을 확인할 수 있습니다. 이를 변경하려면 클릭하여 텍스트를 편집하세요. ATS가 변경 사항을 자동으로 저장합니다.

페이지의 오른쪽 상단에서 **Export** 드롭다운 메뉴를 찾을 수 있으며, 여기서 Action 정의를 내보낼 수 있습니다. 이렇게 하면 XML 파일이 생성되며, 다른 ATS 프로젝트에 가져올 수 있습니다.

### 테스트 단계

**Test Steps**는 ATS가 수행하는 Action을 설명합니다. **Add step** 박스에서 Action을 검색하여 새 테스트 단계를 추가합니다.

테스트 단계를 추가하는 다른 방법은 **Record**를 클릭하여 레코더를 사용하는 것입니다. 자세한 내용은 [Recorder](/appstore/partner-solutions/ats/rg-two-recorder/)를 참조하세요.

테스트 단계 설명을 클릭하면 테스트 단계 세부 정보가 열립니다. 자세한 내용은 [Test Step](/appstore/partner-solutions/ats/rg-two-test-step/)을 참조하세요.

### 설정

**Settings** 탭에서 Action의 **Input Parameters** 및 **Output Parameters**를 설정합니다. 이러한 선택적 파라미터는 Action에 값을 전달하거나 Action의 결과를 반환합니다.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-action/action.png" class="no-border" >}}

#### 입력 파라미터

입력 파라미터는 Action 내부에서 사용하는 값입니다. 입력 파라미터는 테스트 단계의 [Action Parameter](/appstore/partner-solutions/ats/rg-two-test-step/#action-parameter)로 표시됩니다. Action에는 여러 개의 선택적 또는 필수 입력 파라미터가 있을 수 있지만, 출력 파라미터는 하나만 가질 수 있습니다.

다음 표는 **Input Parameters** 아래의 버튼을 설명합니다:

| 버튼 레이블 | 설명 |
| --- | --- |
| New | 새 입력 파라미터를 생성합니다. 대화 상자가 열리며 입력 파라미터에 이름과 선택적 설명을 입력하고 입력 파라미터 속성을 설정합니다. |
| Edit | 선택한 입력 파라미터의 편집기를 엽니다. |
| Delete | 선택한 입력 파라미터를 삭제합니다. |
| Up | 선택한 입력 파라미터의 순서를 위의 입력 파라미터와 교환합니다. |
| Down | 선택한 입력 파라미터의 순서를 아래의 입력 파라미터와 교환합니다. |

새 입력 파라미터를 생성하려면 **Input Parameters** 아래의 **New** 버튼을 클릭하세요. 대화 상자가 열리며 입력 파라미터에 이름과 선택적 설명을 입력합니다.

**Properties** 아래에서 입력 파라미터의 추가 설정을 확인할 수 있습니다:

| 속성 이름 | 설명 |
| --- | --- |
| Datatype | 입력 파라미터의 지정된 데이터 유형입니다. |
| Show as password | **Yes**로 설정하면 ATS가 입력 파라미터의 값을 별표로 표시합니다. |
| Required/Optional | **Required**로 설정하면 사용자가 테스트 단계 세부 정보에서 입력 파라미터를 설정해야 합니다. 그렇지 않으면 ATS가 Action을 실행하지 않습니다. |

#### 출력 파라미터

출력 파라미터는 Action의 결과입니다. 각 Action에는 최대 하나의 출력 파라미터가 있습니다. ATS는 출력 파라미터를 사용하여 Action의 결과를 다른 Action이나 테스트 단계에서 사용할 수 있게 합니다.

출력 파라미터를 설정하려면 **Output Parameter** 아래의 **Set**을 클릭하세요. 다음 입력 필드가 나타납니다:

| 이름 | 설명 |
| --- | --- |
| Name | 출력 파라미터의 이름입니다. |
| Description | 출력 파라미터에 대한 선택적 설명입니다. |
| Datatype | 출력 파라미터의 데이터 유형입니다. |

Action의 결과를 출력 파라미터에 전달하려면 Test Case에서 **Set Return Value** Action을 사용해야 합니다. ATS는 Set Return Value Action의 입력 값을 현재 Action의 출력 파라미터로 사용합니다.

Action에서 출력 파라미터를 제거하려면 **Remove**를 클릭하세요.

### 사용 현황 보기

**Show Usages** 탭은 현재 Action에서 사용되는 모든 다른 Action의 개요를 제공합니다. 또한 현재 Action을 사용하는 다른 Action 및 Test Case도 표시합니다.
