---
title: "웹 API를 사용하여 탭 열기"
linktitle: "탭 열기"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-10/tab-api/
weight: 60
---

## 소개

이 사용 방법(how-to)에서는 확장 프로그램에서 Studio Pro의 탭을 여는 방법을 설명합니다. 이 탭에는 웹 콘텐츠가 포함됩니다.

## 전제 조건

이 사용 방법을 시작하기 전에 다음 전제 조건을 완료했는지 확인하십시오:

* 이 사용 방법은 [Web Extensibility API 시작하기](/apidocs-mxsdk/apidocs/web-extensibility-api-10/getting-started/)의 결과를 사용합니다. 이 사용 방법을 시작하기 전에 해당 사용 방법을 완료하십시오.
* [웹 API를 사용하여 메뉴 만들기](/apidocs-mxsdk/apidocs/web-extensibility-api-10/menu-api/)에 설명된 대로 메뉴를 만드는 데 익숙해지십시오.

## 탭 열기

탭을 열 메뉴 항목을 만듭니다. 이는 아래에 설명된 대로 `Main`의 `loaded` 이벤트 내부에서 수행됩니다. 자세한 내용은 [웹 API를 사용하여 메뉴 만들기](/apidocs-mxsdk/apidocs/web-extensibility-api-10/menu-api/)를 참조하십시오.

`menuItemActivated`라는 리스너 이벤트에서 `studioPro.ui.tabs.open(<tabinfo>, <uispec>)` 호출은 새 탭을 엽니다. 여기서:

* `<TabInfo>`는 탭의 `title`을 포함하는 객체로, Studio Pro 탭의 제목 표시줄에 표시됩니다.
* `<uispec>`는 두 개의 필수 속성을 포함하는 객체입니다:

    * `componentName` – "extension/"이 접두사로 붙은 확장 프로그램의 이름 (예: 아래 예제에서는 "extension/myextension")
    * `uiEntryPoint` – `manifest.json` 파일에서 매핑된 이름

{{% alert color="info" %}}
탭 API의 `open` 메서드가 호출될 때마다 반환된 `TabHandle`은 나중에 `close` 메서드를 호출하여 닫을 수 있도록 확장 프로그램에서 추적해야 합니다.
{{% /alert %}}

*My Extension Tab*이라는 탭을 열려면 메인 진입점에 다음 코드를 추가하십시오:

```typescript
import { IComponent, studioPro, TabHandle } from "@mendix/extensions-api";

class Main implements IComponent {
  tabs: { [menuId: string]: Promise<TabHandle> } = {};
  async loaded() {
    // 탭을 열고 닫기 위해 Extensions 메뉴에 메뉴 항목 추가
    await studioPro.ui.extensionsMenu.add({
      menuId: "myextension.MainMenu",
      caption: "MyExtension Menu",
      subMenus: [
        { menuId: "myextension.ShowTabMenuItem", caption: "탭 표시" },
        {
          menuId: "myextension.CloseTabMenuItem",
          caption: "탭 닫기",
        },
      ],
    });

    studioPro.ui.extensionsMenu.addEventListener(
      "menuItemActivated",
      async (args) => {
        // 메뉴 항목을 클릭하면 탭을 엽니다
        if (args.menuId === "myextension.ShowTabMenuItem") {
          const handle = studioPro.ui.tabs.open(
            {
              title: "My Extension Tab",
            },
            {
              componentName: "extension/myextension",
              uiEntrypoint: "tab",
            }
          );

          // 열린 탭 추적
          this.tabs["myextension.MainMenu"] = handle;
        }

        // 이전에 열린 탭 닫기
        if (args.menuId === "myextension.CloseTabMenuItem") {
          studioPro.ui.tabs.close(await this.tabs["myextension.MainMenu"]);
        }
      }
    );
  }
}

export const component: IComponent = new Main();
```

{{% alert color="info" %}}
이 예제에서는 부모 메뉴 ID를 키로 사용하여 열린 `TabHandle`을 추적하는 딕셔너리가 있습니다.
{{% /alert %}}

## 탭을 콘텐츠로 채우기

이전 예제에서 `<uispec>` 객체의 `uiEntryPoint` 속성 값은 `tab`이었습니다. 이 값은 매니페스트의 값과 일치해야 합니다.

확장 프로그램에 여러 탭을 원하는 경우 폴더를 구성하고 매니페스트 파일을 올바르게 설정해야 합니다. 이렇게 하려면 다음 단계를 따르십시오:

1. `Main` 클래스에 새 메서드 `createTabSpec`을 추가합니다.

    ```typescript
    createTabSpec(tab: string, title: string): { info: TabInfo, ui: UISpec} {
            const info: TabInfo = { title };
            const ui: UISpec = {
                componentName: "extension/myextension",
                uiEntrypoint: tab,
            };
    
            return {info, ui};
        }
    ```

2. 콘텐츠를 표시하려는 각 탭에 대해 하나씩, `ui` 폴더 내에 세 개의 폴더를 추가합니다.
3. 각 폴더에 `index.tsx` 파일을 만듭니다.
4. 각 `index.tsx` 파일에 다음 코드를 넣습니다 (이 예제는 **tab3**용입니다):

    ```typescript
    import { StrictMode } from "react";
    import { createRoot } from "react-dom/client";

    createRoot(document.getElementById("root")!).render(
      <StrictMode>
        <h1>tab3</h1>
      </StrictMode>
    );
    ```

    이 예제에서는 **tab1**, **tab2**, **tab3**의 3개 탭을 추가합니다.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/tabs/ui_folder_structure.png" >}}

5. 세 개의 탭 각각을 열 수 있도록 `Main` 클래스에 리스너 이벤트를 만듭니다. 그러면 `Main` 클래스는 다음과 같습니다:

    ```typescript
    import { IComponent, studioPro, TabInfo, UISpec } from "@mendix/extensions-api";

    class Main implements IComponent {
      async loaded() {
        // Extensions 메뉴에 메뉴 항목 추가
        await studioPro.ui.extensionsMenu.add({
          menuId: "myextension.MainMenu",
          caption: "탭 표시",
          subMenus: [
            { menuId: "myextension.ShowTab1", caption: "탭 1 표시" },
            { menuId: "myextension.ShowTab2", caption: "탭 2 표시" },
            { menuId: "myextension.ShowTab3", caption: "탭 3 표시" },
          ],
        });

        // 메뉴 항목을 클릭하면 탭을 엽니다
        studioPro.ui.extensionsMenu.addEventListener(
          "menuItemActivated",
          async (args) => {
            if (args.menuId === "myextension.ShowTab1") {
              const tab1Spec = this.createTabSpec("tab1", "탭 1 제목");
              studioPro.ui.tabs.open(tab1Spec.info, tab1Spec.ui);
            }
            if (args.menuId === "myextension.ShowTab2") {
              const tab2Spec = this.createTabSpec("tab2", "탭 2 제목");
              studioPro.ui.tabs.open(tab2Spec.info, tab2Spec.ui);
            }
            if (args.menuId === "myextension.ShowTab3") {
              const tab3Spec = this.createTabSpec("tab3", "탭 3 제목");
              studioPro.ui.tabs.open(tab3Spec.info, tab3Spec.ui);
            }
          }
        );
      }

      createTabSpec(tab: string, title: string): { info: TabInfo; ui: UISpec } {
        const info: TabInfo = { title };
        const ui: UISpec = {
          componentName: "extension/myextension",
          uiEntrypoint: tab,
        };

        return { info, ui };
      }
    }

    export const component: IComponent = new Main();
    ```

6. 탭이 `manifest.json` 파일에 추가되었는지 확인하십시오. 아래는 `ui` 속성 아래에 세 개의 탭이 있는 예입니다.

    ```json
    {
      "mendixComponent": {
        "entryPoints": {
          "main": "main.js",
          "ui": {
            "tab1": "tab1.js",
            "tab2": "tab2.js",
            "tab3": "tab3.js"
          }
        }
      }
    }
    ```

7. 각 탭에 대한 항목이 있는 매니페스트와 일치하도록 `vite.config`를 업데이트합니다. 예를 들면 다음과 같습니다:

    ```typescript
    import { defineConfig, ResolvedConfig, UserConfig } from "vite";
    
    export default defineConfig({
      build: {
        lib: {
          formats: ["es"],
          entry: {
            main: "src/main/index.ts",
            tab1: "src/ui/tab1/index.tsx",
            tab2: "src/ui/tab2/index.tsx",
            tab3: "src/ui/tab3/index.tsx",
          },
        },
        rollupOptions: {
          external: ["@mendix/component-framework", "@mendix/model-access-sdk"],
        },
        outDir: "./dist/myextension",
      },
    } satisfies UserConfig);
    ```

확장 프로그램을 빌드하고 Studio Pro 앱에 설치한 후 각 탭에는 관련 `index.tsx` 파일에 지정된 콘텐츠가 표시됩니다.

## Extensibility 피드백

추가 피드백을 제공하려면 간단한 [설문 조사](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)를 완료할 수 있습니다.

모든 피드백은 감사히 받겠습니다.
