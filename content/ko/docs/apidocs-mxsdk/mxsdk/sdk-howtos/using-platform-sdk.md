---
title: "Platform SDK 사용하기"
url: /apidocs-mxsdk/mxsdk/using-platform-sdk/
weight: 12
---

## 소개

이 가이드는 Platform SDK를 사용하여 다음 작업을 수행하는 방법을 안내합니다:

* [새 앱 만들기](#creating-app)
* [기존 앱 열기](#opening-existing-app)
* [앱의 리포지토리 정보 가져오기](#getting)
* [앱 삭제하기](#deleting)
* [임시 작업 복사본 만들기](#creating-temp)
* [작업 복사본 모델 열기](#opening-working-copy)
* [임시 작업 복사본 커밋하기](#committing)
* [Platform SDK 구성 변경하기](#changing)

## Platform Client

Mendix Platform SDK의 진입점은 `MendixPlatformClient`입니다. 대부분의 경우 이 클래스에서 새 객체를 인스턴스화해야 합니다:

```ts
import { MendixPlatformClient } from "mendixplatformsdk";

const client = new MendixPlatformClient();
```

## 새 앱 만들기 {#creating-app}

Platform Client를 사용하면 앱 이름만 전달하여 새 Mendix 앱을 만들 수 있습니다:

```ts
const app = await client.createNewApp("My new App");

console.log(`App created with ID: ${app.appId}`);
```

`createNewApp`에 다음 옵션을 전달할 수 있습니다:

| 이름 | 설명 |
|--- | --- |
| `repositoryType` | 사용할 리포지토리 유형입니다. 가능한 값: `svn` 및 `git`. |
| `summary` | 앱에 대한 짧은 설명입니다. |
| `image` | 앱 이미지의 Base64 인코딩 데이터입니다(높이와 너비가 200px에서 400px 사이, 최대 크기 5 MB). |
| `templateDownloadURL` | 앱 템플릿 패키지 파일(*.mpk*)의 다운로드 위치 URL입니다. 템플릿 패키지가 비공개인 경우 이 URL은 서명으로 인증되어야 합니다. |
| `templateId` | 앱이 기반할 앱 템플릿의 UUID입니다. |

`templateDownloadURL`과 `templateId`를 모두 비워두면 최신 Mendix 버전의 표준 빈 앱 템플릿을 사용하여 앱이 생성됩니다.

다음은 [Blank GenAI App](https://marketplace.mendix.com/link/component/227934) 템플릿 버전 2.1.0을 기반으로 Mendix 앱을 만드는 예제입니다:

```ts
const app = await client.createNewApp("My GenAI App", {
    templateId: "ba6ca01b-e2a4-45fa-870d-9e28b6acb845"
});
```

## 기존 앱 열기 {#opening-existing-app}

Platform Client를 사용하면 앱 ID로 기존 앱을 열 수 있습니다:

```ts
const app = client.getApp("33118fbf-7053-482a-8aff-7bf1c626a6d9");
```

{{% alert color="info" %}}
**Apps**에서 앱을 연 후 앱의 [Settings](/developerportal/general-settings/) 페이지에서 **App ID**(**Project ID**로 표시됨)를 가져올 수 있습니다.
{{% /alert %}}

## 앱 리포지토리 정보 가져오기 {#getting}

앱 객체에서 리포지토리에 대한 정보(예: 리포지토리 유형, URL, 기본 브랜치 이름)를 가져올 수 있습니다:

```ts
const repository = app.getRepository();
    
const repositoryInfo = await repository.getInfo();
console.log("Repository Info: ", repositoryInfo);

const commitMessages = (await repository.getBranchCommits("main")).items.map(commit => commit.message);
console.log("Commit messages: ", commitMessages);
```

## 앱 삭제하기 {#deleting}

앱 객체를 사용하여 해당 Mendix 앱을 삭제할 수 있습니다.

```ts
await app.delete();
```

{{% alert color="warning" %}}
이 앱의 모든 리소스가 영구적으로 삭제됩니다!
{{% /alert %}}

## 임시 작업 복사본 만들기 {#creating-temp}

앱을 변경하려면 특정 Team Server 브랜치의 임시 작업 복사본을 만들고, 거기서 변경한 다음, 해당 작업 복사본을 Team Server에 제출해야 합니다:

```ts
const workingCopy = await app.createTemporaryWorkingCopy("main");

console.log(`Working ID: ${workingCopy.workingCopyId}`);
```

{{% alert color="warning" %}}
작업 복사본 생성은 리소스 집약적인 프로세스이므로, `app.getOnlineWorkingCopy(workingCopyId)`를 호출하여 이전에 생성된 것을 재사용하는 것을 고려하십시오. 모든 작업 복사본은 24시간 후 자동으로 삭제됩니다.
{{% /alert %}}

`createTemporaryWorkingCopy`에 다음 옵션을 전달할 수 있습니다:

| 이름 | 설명 |
|--- | --- |
| `commitId` | 작업 복사본이 기반할 커밋의 ID입니다. 전달하지 않으면 지정된 브랜치의 마지막 커밋에서 작업 복사본이 생성됩니다. |

## 작업 복사본 모델 열기 {#opening-working-copy}

작업 복사본을 만든 후 모델을 로드하여 변경할 수 있습니다:

```ts
const model = await workingCopy.openModel();
```

## 임시 작업 복사본 커밋하기 {#committing}

변경을 완료한 후 변경 사항을 Team Server에 다시 커밋해야 합니다. 변경 직후에 커밋할 때는 SDK가 변경 사항을 전송할 수 있도록 `await model.flushChanges()`를 반드시 호출하십시오:

```ts
await model.flushChanges();
await workingCopy.commitToRepository();
```

`commitToRepository`에 다음 옵션을 전달할 수 있습니다:

| 이름 | 설명 |
|--- | --- |
| `branchName` | 작업 복사본 기본 브랜치가 아닌 다른 브랜치를 지정할 수 있습니다. 이 경우 `force`를 `true`로 설정하십시오. |
| `commitMessage` | 기본 메시지("Imported model changes from online working copy") 대신 사용자 정의 커밋 메시지를 지정합니다. |
| `targetCommitId` | 지정하지 않으면 이 커밋 ID가 작업 복사본 기본 커밋 ID로 설정됩니다. |
| `force` | 작업 복사본의 기본 브랜치와 다른 브랜치에 커밋하려면 `true`로 설정하십시오. |

## Platform SDK 구성 변경 {#changing}

기본적으로 Platform SDK는 환경 변수에서 개인 액세스 토큰을 읽습니다(자세한 내용은 [개인 액세스 토큰 설정 방법](/apidocs-mxsdk/mxsdk/set-up-your-pat/)을 참조하십시오). 그러나 이 구성을 변경할 수 있습니다. 예를 들어, 다음 예제처럼 파일에서 로드할 수 있습니다:

```ts
setPlatformConfig({
    mendixToken: fs.readFileSync("mendix-token.txt", {encoding: "utf8"})
});
```

기본적으로 Platform SDK는 일부 로그를 콘솔에 출력합니다. 다음 API를 사용하여 로깅 환경을 사용자 정의할 수 있습니다:

```ts
disableLogger()          // Disables all logging
enableLogger()           // Enable logging through the console
setLogger(customLogger); // Override the logger object
```

사용자 정의 로거 객체에는 다음 메서드가 있어야 합니다:

```ts
info(message?: string, ...optionalParams: any[]): any;
warn(message?: string, ...optionalParams: any[]): any;
error(message?: string, ...optionalParams: any[]): any;
```
