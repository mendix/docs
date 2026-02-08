---
title: "찾기, 고급 찾기 및 사용 위치 찾기"
url: /refguide9/find-and-find-advanced/
description: "Mendix Studio Pro의 찾기(Find), 고급 찾기(Find Advanced), 사용 위치 찾기(Find Usages)에 대해 설명합니다."
weight: 10
---

## 소개

앱에서 다양한 요소의 변경 사항이나 사용 위치, 문서, XPath 등을 검색할 수 있습니다. **Edit** 메뉴의 **Find**, **Find Advanced**, **Find Usages** 옵션을 통해 수행합니다.

{{< figure src="/attachments/refguide9/modeling/menus/edit-menu/find-and-find-advanced/find-options.png" alt="Find Options"  >}}

## Find 옵션

**Find** 옵션을 통해 앱에서 다양한 요소를 찾을 수 있습니다. 예를 들어 "Employee"라는 단어가 사용되는 Domain Model, 페이지 편집기, Microflow 편집기의 요소(페이지, Entity, Association, 해당 표현식 등)를 찾고자 할 때 다음과 같이 하십시오:

1. 상단 바에서 **Edit** > **Find**를 클릭하거나 <kbd>Ctrl</kbd> + <kbd>F</kbd>를 누릅니다.
2. **Find** 대화 상자에서 **Match case**와 **Match the whole word**를 선택하지 않은 상태로 둡니다. 이렇게 하면 "employee", "Employees" 또는 "Department_Employee"와 같은 인스턴스를 포함하여 "Employee"라는 단어의 모든 인스턴스를 검색합니다:

    {{< figure src="/attachments/refguide9/modeling/menus/edit-menu/find-and-find-advanced/find.png" alt="Find" >}}

검색 결과는 **Find Results** 창에서 확인할 수 있습니다:

{{< figure src="/attachments/refguide9/modeling/menus/edit-menu/find-and-find-advanced/search-results.jpg" alt="Search Results" class="no-border" >}}

## Find Advanced 옵션 {#find-advanced}

**Find Advanced** 옵션을 사용하면 고급 기준을 설정하고 앱에서 모든 [객체 Activity](#find-object-activities) 또는 [사용되지 않는 요소](#find-unused-elements)와 같은 특정 요소를 찾을 수 있습니다.

### 객체 Activity 찾기 {#find-object-activities}

객체 Activity가 포함된 Microflow를 검색할 수 있습니다. 다음과 같이 하십시오:

1. 상단 바에서 **Edit** > **Find** **Advanced**를 클릭하거나 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>를 누릅니다.
    **Find Advanced** 대화 상자가 열립니다:
    {{< figure src="/attachments/refguide9/modeling/menus/edit-menu/find-and-find-advanced/find-advanced-dialog-box.png" class="no-border" >}}
2. **Search for** 옵션에서 **Microflow actions**를 선택합니다:
    {{< figure src="/attachments/refguide9/modeling/menus/edit-menu/find-and-find-advanced/search-for-microflow-actions.png" class="no-border" >}}
3. 객체 Activity를 검색할 Entity를 선택하고 **Find**를 클릭합니다.

검색 결과는 **Find Results** 창에서 확인할 수 있습니다.

### 사용되지 않는 요소 찾기 {#find-unused-elements}

앱을 개발하는 동안 최종 버전에서 특정 기능(예: 페이지 또는 Microflow)이 더 이상 적용되지 않을 수 있습니다. 앱을 깔끔하고 유지 관리하기 쉽게 유지하려면 사용되지 않는 항목을 정리하는 것이 좋습니다.

사용되지 않는 항목을 찾으려면 다음과 같이 하십시오:

1. Studio Pro 상단 바에서 **Edit** > **Find Advanced**를 클릭하거나 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>를 누릅니다.
2. **Find Advanced** 대화 상자에서 **Search for** 옵션의 **Unused items**를 선택합니다:

    {{< figure src="/attachments/refguide9/modeling/menus/edit-menu/find-and-find-advanced/search-for-unused-items.png" class="no-border" >}}

3. **Find**를 클릭합니다.

결과는 **Find Results** 창에 표시됩니다. 결과를 필터링하려면 창 우측 상단의 **Show all** 버튼을 클릭하십시오.

사용되지 않는 항목을 삭제하면 더 많은 사용되지 않는 항목이 발생할 수 있습니다. 예를 들어 사용되지 않는 페이지를 삭제하면 해당 페이지에서만 사용된 Microflow가 그 자체로 사용되지 않는 항목이 됩니다. 앱을 정리하는 경우 사용되지 않는 항목 목록을 정기적으로 새로 고치십시오.

{{% alert color="info" %}}
Marketplace에서 다운로드한 모듈에는 사용되지 않는 항목이 많이 포함될 수 있습니다. 해당 항목을 제거하고 모듈이 나중에 업데이트되면 해당 항목이 모델에 다시 나타나므로 Marketplace 모듈에서 사용되지 않는 항목을 제거하지 않는 것이 좋습니다.
{{% /alert %}}

{{% alert color="info" %}}
앱에서 제외된 객체는 사용되지 않는 항목 목록에 표시되지 않습니다.
{{% /alert %}}

### 사용되지 않는 객체를 사용됨으로 표시

일부 페이지와 Microflow는 Java 코드에서만 사용되며 Studio Pro가 Java 소스 코드를 볼 수 없기 때문에 사용되지 않는 항목으로 나열됩니다. 이러한 객체가 제거되는 것을 방지하려면 페이지 또는 Microflow를 사용됨으로 표시할 수 있습니다. 다음과 같이 하십시오:

1. 사용됨으로 표시해야 하는 페이지 또는 Microflow를 엽니다.
2. 속성으로 이동하여 **Mark as used** 속성을 **No**에서 **Yes**로 변경합니다.

## Find Usages 옵션 {#find-usages}

**Find Usages** 옵션을 사용하면 특정 요소가 사용되는 위치를 찾을 수 있습니다. 예를 들어 특정 페이지를 여는 모든 버튼을 찾을 수 있습니다.

{{% alert color="info" %}}
이 옵션은 선택한 Entity/Attribute가 직접 선택된 위치만 찾습니다. 이는 Entity/Attribute가 암시적으로 파생된 인스턴스(예: Association을 따르는 것)는 찾지 않는다는 것을 의미합니다.
{{% /alert %}}

특정 요소가 사용되는 위치를 찾으려면 다음과 같이 하십시오:

1. 요소가 포함된 문서를 엽니다. 예를 들어 Domain Model을 엽니다.
2. 요소(예: Entity)를 선택하고 상단 바에서 **Edit** > **Find usages**를 클릭하거나 요소를 마우스 오른쪽 버튼으로 클릭하고 **Find usages**를 선택합니다:
    {{< figure src="/attachments/refguide9/modeling/menus/edit-menu/find-and-find-advanced/find-usages.png" alt="Find Usages"   width="350"  class="no-border" >}}

Studio Pro가 이 Entity의 모든 사용 위치를 **Find Results** 창에 표시합니다.
{{< figure src="/attachments/refguide9/modeling/menus/edit-menu/find-and-find-advanced/found-usages.png" alt="Find Results Pane" class="no-border" >}}

**Find Results** 창에서 항목을 더블 클릭하면 해당 문서가 열립니다.

**Find Results** 창에서 **Lock results**를 클릭하십시오. 이제 **Find Usages**를 클릭하면 결과가 두 번째 **Find Results** 창에 표시됩니다. 이를 통해 여러 검색 결과를 유지할 수 있습니다.

## 더 보기

* [Go to Option](/refguide9/go-to-option/)
