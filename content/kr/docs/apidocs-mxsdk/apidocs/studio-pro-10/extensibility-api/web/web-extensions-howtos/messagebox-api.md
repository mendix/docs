---
title: "웹 API를 사용하여 메시지 상자 표시"
linktitle: "메시지 상자"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-10/messagebox-api/
weight: 50
---

## 소개

이 사용 방법(how-to)에서는 사용자에게 메시지 상자를 표시하는 방법을 설명합니다. 이 예제에서는 텍스트가 포함된 대화 상자를 표시하는 세 개의 메뉴 항목을 생성합니다.

## 전제 조건

이 사용 방법은 [Web Extensibility API 시작하기](/apidocs-mxsdk/apidocs/web-extensibility-api-10/getting-started/)의 결과를 사용합니다. 이 사용 방법을 시작하기 전에 해당 사용 방법을 완료했는지 확인하십시오.

## 메시지 상자 표시

텍스트가 포함된 대화 상자를 표시하는 메뉴를 만듭니다. 이는 메인 진입점(`src/main/index.ts`)의 `loaded` 메서드에서 수행됩니다. 이를 수행하는 방법에 대한 자세한 내용은 [웹 API를 사용하여 메뉴 만들기](/apidocs-mxsdk/apidocs/web-extensibility-api-10/menu-api/)를 참조하십시오.

메뉴 항목에서 생성된 알림을 수신하고 그에 따라 조치를 취할 이벤트 리스너를 추가합니다. 리스너 이벤트는 선택된 메뉴 항목에 따라 다른 메시지 상자를 표시합니다. 메시지는 `messageBoxApi.show(<message-type>, <message>, <message-details>)` 형식을 가집니다. 여기서:

* `<message-type>`은 메시지 유형으로, 창 제목과 아이콘으로 표시됩니다. 값은 "info" {{% icon name="info-circle" color="blue" %}}, "warning" {{% icon name="alert-triangle" color="yellow" %}}, "error" {{% icon name="remove-circle" color="red" %}}입니다.
* `<message>`는 표시할 메시지입니다.
* `<message-details>`는 선택적인 확장 메시지로, 처음에는 접혀 있다가 확장 가능한 영역에 표시됩니다.

이 세 가지 메뉴 항목과 메시지 상자를 구현하기 위한 전체 TypeScript 파일(`src/main/index.ts`)은 다음과 같습니다:

```typescript
import { IComponent, Menu, studioPro } from "@mendix/extensions-api";
const messageBoxApi = studioPro.ui.messageBoxes;
const menuApi = studioPro.ui.extensionsMenu;

const show_info_menu_id = "show-info-id";
const show_error_menu_id = "show-error-id";
const show_warning_menu_id = "show-warning-id";

menuApi.addEventListener("menuItemActivated", (args) => {
  if (args.menuId === show_info_menu_id)
    messageBoxApi.show("info", "이것은 정보입니다.", "추가 정보");
  if (args.menuId === show_error_menu_id)
    messageBoxApi.show("error", "이것은 오류입니다.", "추가 오류 세부 정보");
  if (args.menuId === show_warning_menu_id)
    messageBoxApi.show(
      "warning",
      "이것은 경고입니다.",
      "추가 경고 세부 정보"
    );
});

class Main implements IComponent {
  async loaded() {
    const infoMenu: Menu = {
      caption: "정보 표시",
      menuId: show_info_menu_id,
    };

    const errorMenu: Menu = {
      caption: "오류 표시",
      menuId: show_error_menu_id,
    };

    const warningMenu: Menu = {
      caption: "경고 표시",
      menuId: show_warning_menu_id,
    };

    await menuApi.add(infoMenu);
    await menuApi.add(errorMenu);
    await menuApi.add(warningMenu);
  }
}

export const component: IComponent = new Main();
```

예를 들어, **정보 표시(Show Info)** 메뉴 항목은 다음과 같은 메시지 상자를 표시합니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/messageBoxes/info.png" width="400" >}}

## Extensibility 피드백

추가 피드백을 제공하려면 간단한 [설문 조사](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)를 완료할 수 있습니다.

모든 피드백은 감사히 받겠습니다.
