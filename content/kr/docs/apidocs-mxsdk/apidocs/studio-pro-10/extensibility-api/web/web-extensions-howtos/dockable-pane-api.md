---
title: "웹 API를 사용하여 도킹 가능한 창(Dockable Pane) 만들기"
linktitle: "도킹 가능한 창(Dockable Pane)"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-10/dockable-pane-api/
weight: 10
---

## 소개

이 사용 방법(how-to)에서는 웹 확장 API를 사용하여 도킹 가능한 창(Dockable Pane)을 만들고 관리하는 방법을 설명합니다. 도킹 가능한 창을 사용하면 Studio Pro 사용자 인터페이스 내에서 도킹하고 이동할 수 있는 웹 뷰를 만들 수 있습니다. Studio Pro의 도킹 가능한 창의 예는 다음과 같습니다:

* Marketplace
* Errors 
* Stories
* Toolbox

## 전제 조건

이 가이드에서는 [Web Extensibility API 시작하기](/apidocs-mxsdk/apidocs/web-extensibility-api-10/getting-started/)에서 만든 앱을 사용합니다. 이 사용 방법을 시작하기 전에 해당 사용 방법을 완료했는지 확인하십시오.

## 도킹 가능한 창 생성

도킹 가능한 창을 열려면 먼저 API에 도킹 가능한 창 핸들을 등록해야 합니다. 이렇게 하려면 `src/main/index.ts`의 확장 로드 메서드에 창을 등록하는 호출을 추가하십시오. 등록한 `paneHandle`을 사용하여 도킹 가능한 창과 상호 작용하십시오.

```typescript
        const paneHandle = await studioPro.ui.panes.register(
            {
                title: "My Extension Pane",
                initialPosition: "right",
            },
            {
                componentName: "extension/myextension",
                uiEntrypoint: "dockablepane",
            });
```

이 호출을 추가한 후 `loaded()` 메서드는 다음과 같습니다:

```typescript {hl_lines=["11-19"]}
    async loaded() {
        // Add a menu item to the Extensions menu
        await studioPro.ui.extensionsMenu.add({
            menuId: "myextension.MainMenu",
            caption: "MyExtension Menu",
            subMenus: [
                { menuId: "myextension.ShowTabMenuItem", caption: "Show tab" },
            ],
        });

        const paneHandle = await studioPro.ui.panes.register(
            {
                title: "My Extension Pane",
                initialPosition: "right",
            },
            {
                componentName: "extension/myextension",
                uiEntrypoint: "dockablepane",
            });

        // Open a tab when the menu item is clicked
        studioPro.ui.extensionsMenu.addEventListener(
            "menuItemActivated",
            (args) => {
                if (args.menuId === "myextension.ShowTabMenuItem") {
                    studioPro.ui.tabs.open(
                        {
                            title: "My Extension Tab",
                        },
                        {
                            componentName: "extension/myextension",
                            uiEntrypoint: "tab",
                        }
                    );
                }
            }
        );
    }
```

## 도킹 가능한 창을 여는 메뉴 추가

선택하면 창을 여는 메뉴를 추가합니다.

1. 10행의 기존 `extensionsMenu.add()` 메서드에 새 하위 메뉴를 추가합니다.

    ```typescript {linenos=table linenostart=10}
    // Add a menu item to the Extensions menu
    await studioPro.ui.extensionsMenu.add({
      menuId: "myextension.MainMenu",
      caption: "MyExtension Menu",
      subMenus: [
        { menuId: "myextension.ShowTabMenuItem", caption: "Show tab" },
        { menuId: "myextension.ShowDockMenuItem", caption: "Show dock pane" },
      ],
    });
    ```

2. 메뉴가 선택될 때 창을 여는 `addEventListener()` 호출에 줄을 추가합니다.

    ```typescript
        // Open a tab when the menu item is clicked
        studioPro.ui.extensionsMenu.addEventListener(
            "menuItemActivated",
            (args) => {
                if (args.menuId === "myextension.ShowTabMenuItem") {
                    studioPro.ui.tabs.open(
                        {
                            title: "My Extension Tab",
                        },
                        {
                            componentName: "extension/myextension",
                            uiEntrypoint: "tab",
                        }
                    );
                }
                else if (args.menuId === "myextension.ShowDockMenuItem") {
                    studioPro.ui.panes.open(paneHandle);
                }
            }
        );
    ```

이제 `loaded()` 메서드는 다음과 같아야 합니다:

```typescript {hl_lines=["3-10","22-41"]}
    async loaded() {
        // Add a menu item to the Extensions menu
        await studioPro.ui.extensionsMenu.add({
            menuId: "myextension.MainMenu",
            caption: "MyExtension Menu",
            subMenus: [
                { menuId: "myextension.ShowTabMenuItem", caption: "Show tab" },
                { menuId: "myextension.ShowDockMenuItem", caption: "Show dock pane" },
            ],
        });

        const paneHandle = await studioPro.ui.panes.register(
            {
                title: "My Extension Pane",
                initialPosition: "right",
            },
            {
                componentName: "extension/myextension",
                uiEntrypoint: "dockablepane",
            });

        // Open a tab when the menu item is clicked
        studioPro.ui.extensionsMenu.addEventListener(
            "menuItemActivated",
            (args) => {
                if (args.menuId === "myextension.ShowTabMenuItem") {
                    studioPro.ui.tabs.open(
                        {
                            title: "My Extension Tab",
                        },
                        {
                            componentName: "extension/myextension",
                            uiEntrypoint: "tab",
                        }
                    );
                }
                else if (args.menuId === "myextension.ShowDockMenuItem") {
                    studioPro.ui.panes.open(paneHandle);
                }
            }
        );
    }
```

## 웹 뷰 엔드포인트 지정

### 새 엔드포인트 핸들러 추가

창 내에서 렌더링될 사용자 인터페이스를 정의하는 새 웹 뷰 엔드포인트를 생성합니다. 기존 엔드포인트를 사용하고 이름을 바꿀 수 있습니다. 다음 단계를 따르십시오:

1. `ui/index.tsx`의 이름을 `ui/tab.tsx`로 바꿉니다.
2. `ui/tab.tsx`를 복사하여 새 엔드포인트 파일 `ui/dockablepane.tsx`를 추가합니다.

또한 다음 섹션에 설명된 대로 올바른 엔드포인트에 바인딩하도록 `vite.config.ts` 및 `manifest.json` 파일을 변경해야 합니다:

### `vite.config.js` 변경

`vite.config.js`의 entry 섹션을 다음으로 바꿉니다:

```typescript
        entry: {
            main: "src/main/index.ts",
            tab: "src/ui/tab.tsx",
            dockablepane: "src/ui/dockablepane.tsx",
        }
```

이렇게 하면 vite에 탭 엔드포인트가 `src/ui/tab.tsx`에 연결되고 도킹 가능한 창 엔드포인트가 `src/ui/dockablepane.tsx`에 연결되었음을 알립니다.

이제 `vite.config.js`는 다음과 같아야 합니다:

```typescript {hl_lines=["7-11"]}
import { defineConfig, ResolvedConfig, UserConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
        formats: ["es"],
        entry: {
            main: "src/main/index.ts",
            tab: "src/ui/tab.tsx",
            dockablepane: "src/ui/dockablepane.tsx",
        },
    },
    rollupOptions: {
        external: ["@mendix/component-framework", "@mendix/model-access-sdk"],
    },
    outDir: "./dist/myextension",
  },
} satisfies UserConfig);
```

### `public/manifest.json` 변경

또한 Studio Pro에 방금 만든 엔드포인트를 로드하도록 지시해야 합니다. 이렇게 하려면 매니페스트 파일 `public/manifest.json`을 수정하십시오.

다음과 같이 "ui" 섹션을 변경하십시오:

* `tab` 엔드포인트 변경
* `dockablepane` 엔드포인트 추가

```typescript
      "ui": {
        "tab": "tab.js",
        "dockablepane": "dockablepane.js"
      }
```

이제 `manifest.json` 파일은 다음과 같아야 합니다:

```typescript {hl_lines=["5-8"]}
{
  "mendixComponent": {
    "entryPoints": {
      "main": "main.js",
      "ui": {
        "tab": "tab.js",
        "dockablepane": "dockablepane.js"
      }
    }
  }
}
```

## 도킹 가능한 창 닫기

이제 창을 등록하고 여는 방법을 만들었으므로 닫는 방법도 제공하는 것이 중요합니다.

새 메뉴 항목을 사용하여 창을 닫습니다. 다음 단계를 따르십시오:

1. 11행의 메뉴에 새 하위 메뉴 항목을 추가합니다.

    ```typescript {linenos=table linenostart=11}
    { menuId: "myextension.HideDockMenuItem", caption: "Hide dock pane" },
    ```

2. loaded 메서드 끝에 새 메뉴에 대한 이벤트 핸들러를 변경합니다:

    ```typescript
        // Open a tab when the menu item is clicked
        studioPro.ui.extensionsMenu.addEventListener(
            "menuItemActivated",
            (args) => {
                if (args.menuId === "myextension.ShowTabMenuItem") {
                    studioPro.ui.tabs.open(
                        {
                            title: "My Extension Tab",
                        },
                        {
                            componentName: "extension/myextension",
                            uiEntrypoint: "tab",
                        }
                    );
                }
                else if (args.menuId === "myextension.ShowDockMenuItem") {
                    studioPro.ui.panes.open(paneHandle);
                }
                else if (args.menuId === "myextension.HideDockMenuItem") {
                    studioPro.ui.panes.close(paneHandle);
                }
            }
        );
    ```

이제 loaded 메서드는 다음과 같아야 합니다:

```typescript {hl_lines=["9","24-45"]}
    async loaded() {
        // Add a menu item to the Extensions menu
        await studioPro.ui.extensionsMenu.add({
            menuId: "myextension.MainMenu",
            caption: "MyExtension Menu",
            subMenus: [
                { menuId: "myextension.ShowTabMenuItem", caption: "Show tab" },
                { menuId: "myextension.ShowDockMenuItem", caption: "Show dock pane" },
                { menuId: "myextension.HideDockMenuItem", caption: "Hide dock pane" },
            ],
        });

        const paneHandle = await studioPro.ui.panes.register(
            {
                title: "My Extension Pane",
                initialPosition: "right",
            },
            {
                componentName: "extension/myextension",
                uiEntrypoint: "dockablepane",
            });

        // Open a tab when the menu item is clicked
        studioPro.ui.extensionsMenu.addEventListener(
            "menuItemActivated",
            (args) => {
                if (args.menuId === "myextension.ShowTabMenuItem") {
                    studioPro.ui.tabs.open(
                        {
                            title: "My Extension Tab",
                        },
                        {
                            componentName: "extension/myextension",
                            uiEntrypoint: "tab",
                        }
                    );
                }
                else if (args.menuId === "myextension.ShowDockMenuItem") {
                    studioPro.ui.panes.open(paneHandle);
                }
                else if (args.menuId === "myextension.HideDockMenuItem") {
                    studioPro.ui.panes.close(paneHandle);
                }
            }
        );
    }
```

## Extensibility 피드백

추가 피드백을 제공하려면 간단한 [설문 조사](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)를 완료할 수 있습니다.

모든 피드백은 감사히 받겠습니다.
