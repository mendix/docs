---
title: "웹 API를 사용하여 메뉴 만들기"
linktitle: "메뉴 만들기"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-10/menu-api/
weight: 30
---

## 소개

이 사용 방법(how-to)에서는 웹 확장 API를 사용하여 간단한 메뉴 항목과 그 아래에 보조 항목이 있는 메뉴 항목을 모두 만드는 방법을 보여줍니다.

## 전제 조건

이 사용 방법은 [Web Extensibility API 시작하기](/apidocs-mxsdk/apidocs/web-extensibility-api-10/getting-started/)의 결과를 사용합니다. 이 사용 방법을 시작하기 전에 해당 사용 방법을 완료하십시오.

## 메뉴 속성

메뉴에는 다음 속성이 있습니다:

| 속성             | 설명 |
|----------------------|-------------|
| `caption`            | 메뉴 항목의 텍스트                                                     |
| `menuId`             | 메뉴 항목의 고유 식별자                                         |
| `subMenus`           | 하위 메뉴 항목 목록                                                      |
| `hasSeparatorBefore` <br> (기본값: `false`)  | 항목 앞에 시각적 구분선을 추가합니다.              |
| `hasSeparatorAfter` <br> (기본값: `false`)  | 항목 뒤에 시각적 구분선을 추가합니다.                |
| `enabled`  <br> (기본값: `true`)  | 메뉴 항목을 클릭할 때 리스너에게 알릴지 여부를 나타냅니다. |

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/menus/grouped_menus.png" width="200" >}}

## 간단한 메뉴 생성

아래 코드는 확장 프로그램에 간단한 메뉴를 추가합니다. 코드는 다음을 수행합니다:

* *My First Menu*라는 캡션이 있는 메뉴 항목 생성
* 메뉴를 클릭하면 대화 상자 표시
* 메뉴 API를 사용할 수 있도록 `studioPro.ui.extensionsMenu`에서 `menuApi` 가져오기
* 대화 상자를 표시하기 위해 `studioPro.ui.messageBoxes`에서 `messageBoxApi` 가져오기

`src/main/index.ts` 파일을 다음으로 바꿉니다:

```typescript
import { IComponent, Menu, studioPro } from "@mendix/extensions-api";

const menuApi = studioPro.ui.extensionsMenu;

const messageBoxApi = studioPro.ui.messageBoxes;
const menuId = "my-menu-unique-id";
const caption = "My First Menu";

// 메뉴 항목을 클릭하면 메시지 상자를 엽니다
studioPro.ui.extensionsMenu.addEventListener("menuItemActivated", (args) => {
  if (args.menuId === "my-menu-unique-id") {
    messageBoxApi.show("info", `My menu '${args.menuId}' was clicked`);
  }
});
class Main implements IComponent {
  async loaded() {
    const menu: Menu = {
      caption: caption,
      menuId: menuId,
      subMenus: [],
      hasSeparatorBefore: false,
      hasSeparatorAfter: true,
      enabled: true,
    };

    await menuApi.add(menu);
  }
}

export const component: IComponent = new Main();
```

이 코드가 추가되면 다음을 수행합니다:

1. Studio Pro가 `menuItemActivated` 엔드포인트를 수신 대기하기 시작합니다. 이는 **My First Menu**가 클릭될 때 확장 프로그램에 알립니다.
2. `args` 파라미터에는 Studio Pro에서 확장 프로그램으로 보낸 정보가 포함되어 어떤 메뉴 항목이 클릭되었는지 나타냅니다.
3. 리스너는 클릭된 `menuId`가 정의된 ID와 일치하는지 확인합니다. 일치하면 `messageBoxApi.show()`를 호출합니다.
4. Studio Pro가 제공한 메시지와 함께 정보 대화 상자를 표시합니다.

이제 확장 프로그램이 다음과 같이 나타나야 합니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/menus/my_first_menu.png" width="200" >}}

## 하위 메뉴가 있는 메뉴 생성

메뉴를 분기하는 여러 하위 메뉴를 가질 수도 있습니다.

이렇게 하려면 코드에 메뉴 항목을 추가하고 해당 메뉴 항목의 `subMenus` 배열에 추가하십시오. 이러한 자식 메뉴는 자체 하위 메뉴를 가질 수 있습니다. 아래 코드 샘플에 표시된 대로 `await menuApi.add()` 호출을 통해 부모 메뉴(다른 메뉴의 하위 메뉴가 아닌 메뉴)만 추가해야 합니다.

{{% alert color="info" %}}
부모 메뉴(`subMenus`가 있는 메뉴)는 `menuItemActivated` 이벤트를 생성하지 않습니다. 리프 메뉴(하위 메뉴가 없는 메뉴)를 클릭할 때만 전송됩니다.
{{% /alert %}}

다음 `src/main/index.ts`는 하위 메뉴가 있는 메뉴 항목 하나와 하위 메뉴가 없는 메뉴 항목 하나를 생성합니다.

```typescript
import { IComponent, Menu, studioPro } from "@mendix/extensions-api";

const menuApi = studioPro.ui.extensionsMenu;
const messageBoxApi = studioPro.ui.messageBoxes;

// 메뉴 항목을 클릭하면 메시지 상자를 엽니다
studioPro.ui.extensionsMenu.addEventListener("menuItemActivated", (args) => {
  messageBoxApi.show("info", `Child menu '${args.menuId}' was clicked`);
});
class Main implements IComponent {
  async loaded() {
    const grandChild: Menu = {
      caption: "Grandchild Menu",
      menuId: "grandChild",
    };

    const childMenu1: Menu = {
      caption: "Child Menu 1",
      menuId: "child_1",
      subMenus: [grandChild],
    };

    const childMenu2: Menu = {
      caption: "Child Menu 2",
      menuId: "child_2",
    };

    const menu1: Menu = {
      caption: "Menu 1",
      menuId: "menu1",
      subMenus: [childMenu1, childMenu2],
    };

    const menu2: Menu = {
      caption: "Menu 2",
      menuId: "menu2",
      subMenus: [],
    };

    await menuApi.add(menu1);
    await menuApi.add(menu2);
  }
}

export const component: IComponent = new Main();
```

메뉴 계층 구조는 다음과 같이 표시됩니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/menus/child_menus.png" width="400" >}}

## 메뉴 업데이트

조건에 따라 메뉴를 비활성화하거나 캡션을 업데이트할 수 있습니다. 메뉴 API의 `update` 메서드를 호출하여 이를 수행할 수 있습니다.

아래 코드에 예제가 나와 있습니다. 메뉴 항목을 클릭하면 비활성화되고 캡션이 업데이트됩니다.

{{% alert color="info" %}}
`caption` 및 `enabled`만 업데이트할 수 있습니다.
{{% /alert %}}

`src/main/index.ts`의 내용으로 다음 코드를 사용하여 테스트할 수 있습니다.

```typescript
import { IComponent, Menu, studioPro } from "@mendix/extensions-api";

const menuApi = studioPro.ui.extensionsMenu;

const menuId = "my-menu-unique-id";
const caption = "My First Menu";

menuApi.addEventListener("menuItemActivated", (args) => {
  if (args.menuId !== menuId) return;
  menuApi.update(menuId, {
    caption: `${caption} (Disabled)`,
    enabled: false,
  });
});
class Main implements IComponent {
  async loaded() {
    const menu: Menu = {
      caption: caption,
      menuId: menuId,
      subMenus: [],
      hasSeparatorBefore: false,
      hasSeparatorAfter: true,
      enabled: true,
    };

    await menuApi.add(menu);
  }
}

export const component: IComponent = new Main();
```

비활성화된 상태는 아래 이미지와 같이 표시됩니다.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/menus/disabled_menu.png" width="200" >}}

## Extensibility 피드백

추가 피드백을 제공하려면 간단한 [설문 조사](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)를 완료할 수 있습니다.

모든 피드백은 감사히 받겠습니다.
