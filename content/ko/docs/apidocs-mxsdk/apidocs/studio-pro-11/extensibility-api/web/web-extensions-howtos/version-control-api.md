---
title: "Web API를 사용하여 버전 관리 정보 표시하기"
linktitle: "버전 관리 정보 표시"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/version-control-api/
---

## 소개

이 How-to에서는 display version control information in Studio Pro. The extension adds a menu item that, when clicked, shows details about the current version control system, branch, and last commit.

## 전제 조건

{{% alert="info" %}}
If you are using Studio Pro 11.0–11.5 and your extension includes menus, your existing menu code will not work when you upgrade to Studio Pro 11.6. To restore full functionality and support, upgrade to the Extensibility API 11.6 and follow the steps in the [Migration Guide](/apidocs-mxsdk/apidocs/web-extensibility-api-11/migration-guide/).
{{% /alert%}}

이 How-to를 시작하기 전에 다음 전제 조건을 완료했는지 확인하세요:

* 이 How-to는 다음의 결과를 사용합니다: [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). 이 How-to를 시작하기 전에 해당 How-to를 먼저 완료하세요. 
* Make sure you are familiar with creating menus, as described in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/).

## 버전 관리 정보 표시하기

The extension creates a menu item named **Current version control system**. When the menu is activated, it fetches version control details (system type, branch, last commit) and displays them in a message box.

### 확장 구조 설정하기 

In the example below, you create one menu item that will show version control details in a message box.

It performs the following actions:

1. Creates a menu item named **Current version control system**
2. When clicked, it retrieves the version control information which includes:
   * The type of version control system (for example, Git)
   * Current branch name
   * Last commit details (SHA, author, message, and date)
3. Displays this information in a message box

Replace your `src/main/index.ts` file with the following:

```typescript
import { IComponent, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);
        const versionControlApi = studioPro.ui.versionControl;
        const messageBoxApi = studioPro.ui.messageBoxes;
        const menuId = "version-control-menu";

        await studioPro.ui.extensionsMenu.add({
            menuId,
            caption: "Current version control system",
            action: async () => {
                const versionControlSystemInfo = await versionControlApi.getVersionControlInfo();

                if (versionControlSystemInfo == null) {
                    messageBoxApi.show("info", "This app is not version controlled");
                    return;
                }

                let message = `The system is ${versionControlSystemInfo.versionControlSystem}. Branch: ${versionControlSystemInfo.branch}.`;

                if (versionControlSystemInfo.lastCommit == null) {
                    message += "\n\nLast Commit: No commit information available.";
                } else {
                    message += "\n\nLast Commit:\n";
                    message += `SHA: ${versionControlSystemInfo.lastCommit.sha}\n`;
                    message += `Author: ${versionControlSystemInfo.lastCommit.author}\n`;
                    message += `Message: ${versionControlSystemInfo.lastCommit.message}\n`;
                    message += `Date: ${versionControlSystemInfo.lastCommit.date}`;
                }

                await messageBoxApi.show("info", message);
            }
        });
    }
};
```

## 확장성 피드백

추가 피드백을 제공하고 싶으시다면 간단한 [설문 조사](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)를 완료할 수 있습니다.

모든 피드백을 환영합니다.
