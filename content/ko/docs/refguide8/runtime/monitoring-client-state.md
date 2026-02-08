---
title: "클라이언트 상태 모니터링"
url: /refguide8/monitoring-client-state/
---

## 소개

상태는 클라이언트(웹 브라우저)에 있습니다. 이를 통해 서버를 여러 인스턴스로 확장할 수 있습니다. 상태가 이제 클라이언트에 있으므로 특정 시점에서 상태에 무엇이 있고 왜 있는지 모니터링하는 것이 유용할 수 있습니다.

이를 수행하려면 <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>G</kbd> 키 조합을 사용하여 상태를 브라우저 콘솔에 덤프하십시오. 상태는 JSON 객체로 표시되며 Entity 유형별로 그룹화됩니다. Entity가 Non-Persistable인 경우 접미사 `[NPE]`로 표시됩니다.

{{% alert color="info" %}}
<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>G</kbd> 키 조합은 [Parallels](/howto8/general/using-mendix-studio-pro-on-a-mac/)에서의 Mozilla Firefox를 제외한 모든 브라우저에서 작동합니다.
{{% /alert %}}

## 세부 정보

각 Entity 유형에 대해 상태에 있는 객체 인스턴스의 ID가 나열됩니다. 각 객체 인스턴스는 다음 정보를 보여줍니다:

* 객체 ID 뒤의 접미사 `(new)` – 객체가 새로운지 여부(객체가 아직 커밋되지 않음)
* 객체 ID 뒤의 접미사 `(changed)` – 객체에 커밋되지 않은 변경 사항이 있는지 여부(객체가 이전에 커밋됨)
* `changes` 속성 – 객체에 존재하는 변경 사항
* `subscribedWidgets` 속성 – 객체를 사용하고 있는 위젯
    * 위젯 이름은 `Module.PageName.widgetName` 형식입니다(예: `MyFirstModule.Entity_NewEdit.dataView1`). 이를 통해 Studio Pro에서 참조된 위젯을 빠르게 찾을 수 있습니다
* `referencedBy` 속성 – 이 객체를 참조하는 객체

`subscribedWidgets`와 `referencedby` 속성은 모두 객체가 여전히 상태에 있는 이유를 설명합니다. 두 속성이 모두 비어 있으면 "Going to be garbage collected" 텍스트가 표시됩니다.
