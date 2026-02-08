---
title: "Web API를 사용하여 로컬 앱 파일과 상호 작용하기"
linktitle: "로컬 파일"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/local-app-files-api/
---

## 소개

이 How-to에서는 interact with local application files from within an extension. In this example, you will:

* Add three new buttons to a tab
* Add three new event handlers for saving, loading, and deleting a file called `HelloWorld.txt`

## 전제 조건

이 How-to는 다음의 결과를 사용합니다: [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). 이 How-to를 시작하기 전에 해당 How-to를 먼저 완료하세요.

## 상호 작용 추가하기

Implement the code described in the [Code Descriptions](#code-descriptions) section by following the steps below:

1. Open `src/ui/index.tsx`.
2. Replace the contents of the file with the following code:

    ```typescript
    import React, { StrictMode } from "react";
    import { createRoot } from "react-dom/client";
    import { IComponent, getStudioProApi } from "@mendix/extensions-api";

    export const component: IComponent = {
        async loaded(componentContext) {
            const studioPro = getStudioProApi(componentContext);

            const saveFile = async () => {
                await studioPro.app.files.putFile(
                    "HelloWorld.txt",
                    "Hello world from a file!"
                );
                studioPro.ui.messageBoxes.show("info", "Saving HelloWorld.txt");
            };

            const loadFile = async () => {
                const message = await studioPro.app.files.getFile("HelloWorld.txt");
                studioPro.ui.messageBoxes.show(
                    "info",
                    `Loaded HelloWorld.txt it contained: ${message}`
                );
            };

            const deleteFile = async () => {
                await studioPro.app.files.deleteFile("HelloWorld.txt");
                studioPro.ui.messageBoxes.show("info", "Deleted HelloWorld.txt");
            };

            createRoot(document.getElementById("root")!).render(
                <StrictMode>
                    <h1>Mendix Studio Pro Extension</h1>
                    <p>Hello from an extension!</p>
                    <p>
                        <button onClick={saveFile}>Save Hello world File</button>
                        <button onClick={loadFile}>Load Hello world File</button>
                        <button onClick={deleteFile}>Delete Hello world File</button>
                    </p>
                </StrictMode>
            );
        },
    };
    ```

## 코드 설명 {#code-descriptions}

  The following sections explain the various parts of the code.

### saveFile

  The `saveFile` callback calls the `putFile` API. It sets the file name to `HelloWorld.txt` and the content to `Hello world from a file!`.

  ```typescript
  const saveFile = async () => {
    await studioPro.app.files.putFile(
      "HelloWorld.txt",
      "Hello world from a file!"
    );
    studioPro.ui.messageBoxes.show("info", "Saving HelloWorld.txt");
  };
  ```

### loadFile

  The `loadFile` callback calls the `getFile` API. It requests to load `HelloWorld.txt`, then shows a message box that displays the content of the file.

  ```typescript
  const loadFile = async () => {
    const message = await studioPro.app.files.getFile("HelloWorld.txt");
    studioPro.ui.messageBoxes.show(
      "info",
      `Loaded HelloWorld.txt it contained: ${message}`
    );
  };
  ```

### deleteFile

  The `deleteFile` callback calls the `deleteFile` API. It requests to delete `HelloWorld.txt`.

  ```typescript
  const deleteFile = async () => {
    await studioPro.app.files.deleteFile("HelloWorld.txt");
    studioPro.ui.messageBoxes.show("info", "Deleted HelloWorld.txt");
  };
  ```

### 버튼 추가하기

  The final part of the code adds three new buttons which, when clicked, call the callbacks described above.

  ```typescript
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <h1>Mendix Studio Pro Extension</h1>
      <p>Hello from an extension!</p>
      <p>
        <button onClick={saveFile}>Save Hello world File</button>
        <button onClick={loadFile}>Load Hello world File</button>
        <button onClick={deleteFile}>Delete Hello world File</button>
      </p>
    </StrictMode>
  );
  ```

## 제한 사항

The app files API allows you to modify files within your application's folder. It will not:

* Serve restricted files such as the `.mpr` file, or the contents of some folders, such as the `.git` folder
* Allow access to files outside of the app folder

## 확장성 피드백

추가 피드백을 제공하고 싶으시다면 간단한 [설문 조사](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)를 완료할 수 있습니다.

모든 피드백을 환영합니다.
