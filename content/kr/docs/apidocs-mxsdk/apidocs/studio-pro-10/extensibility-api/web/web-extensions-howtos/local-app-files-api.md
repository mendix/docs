---
title: "웹 API를 사용하여 로컬 앱 파일과 상호 작용"
linktitle: "로컬 파일"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-10/local-app-files-api/
weight: 20
---

## 소개

이 사용 방법(how-to)에서는 확장 프로그램 내에서 로컬 애플리케이션 파일과 상호 작용하는 방법을 설명합니다. 이 예제에서는 다음을 수행합니다:

* 탭에 세 개의 새 버튼 추가
* `HelloWorld.txt`라는 파일을 저장, 로드 및 삭제하기 위한 세 개의 새 이벤트 핸들러 추가

## 전제 조건

이 사용 방법은 [Web Extensibility API 시작하기](/apidocs-mxsdk/apidocs/web-extensibility-api-10/getting-started/)의 결과를 사용합니다. 이 사용 방법을 시작하기 전에 해당 사용 방법을 완료했는지 확인하십시오.

## 상호 작용 추가

다음 단계에 따라 [코드 설명(#code-descriptions)](#code-descriptions) 섹션에 설명된 코드를 구현하십시오:

1. `src/ui/index.tsx`를 엽니다.
2. 파일의 내용을 다음 코드로 바꿉니다:

```typescript
import { studioPro } from "@mendix/extensions-api";
import { StrictMode, useCallback } from "react";
import { createRoot } from "react-dom/client";

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
```

## 코드 설명 {#code-descriptions}

다음 섹션에서는 코드의 다양한 부분에 대해 설명합니다.

### saveFile

`saveFile` 콜백은 `putFile` API를 호출합니다. 파일 이름을 `HelloWorld.txt`로 설정하고 내용을 `Hello world from a file!`로 설정합니다.

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

`loadFile` 콜백은 `getFile` API를 호출합니다. `HelloWorld.txt` 로드를 요청한 다음 파일 내용을 표시하는 메시지 상자를 표시합니다.

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

`deleteFile` 콜백은 `deleteFile` API를 호출합니다. `HelloWorld.txt` 삭제를 요청합니다.

```typescript
const deleteFile = async () => {
  await studioPro.app.files.deleteFile("HelloWorld.txt");
  studioPro.ui.messageBoxes.show("info", "Deleted HelloWorld.txt");
};
```

### 버튼 추가

코드의 마지막 부분은 클릭 시 위에서 설명한 콜백을 호출하는 세 개의 새 버튼을 추가합니다.

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

앱 파일 API를 사용하면 애플리케이션 폴더 내의 파일을 수정할 수 있습니다. 다음은 수행하지 않습니다:

* `.mpr` 파일과 같은 제한된 파일 또는 `.git` 폴더와 같은 일부 폴더의 콘텐츠 제공
* 앱 폴더 외부의 파일에 대한 액세스 허용

## Extensibility 피드백

추가 피드백을 제공하려면 간단한 [설문 조사](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)를 완료할 수 있습니다.

모든 피드백은 감사히 받겠습니다.
