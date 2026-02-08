---
title: "첫 번째 스크립트 만들기 (이전 버전)"
linktitle: "첫 번째 스크립트 만들기"
url: /apidocs-mxsdk/mxsdk/old-creating-your-first-script/
weight: 2
---

## 소개

[개발 환경 설정 방법](/apidocs-mxsdk/mxsdk/old-setting-up-your-development-environment/)에서 모든 개발 도구를 설정했습니다. 이제 자동으로 새 Mendix 앱을 부트스트랩하는 SDK 스크립트를 만들어 보겠습니다.

## 첫 번째 스크립트 작성하기

모든 사전 준비를 완료한 후, Mendix Platform SDK를 사용하는 첫 번째 스크립트를 작성하려면 다음 단계를 따르십시오:

1. VS Code에서 다른 파일이 있는 동일한 디렉토리에 *script.ts*라는 파일을 만드십시오. 아래 스크립트는 새 앱을 생성하고, 도메인 모델(Domain Model)에 새 엔티티(Entity)를 추가한 다음, Team Server에 변경 사항을 커밋합니다.
2. 다음 코드를 *script.ts* 파일에 복사하십시오:

    ```ts
    import { MendixSdkClient, OnlineWorkingCopy } from 'mendixplatformsdk';
    import { domainmodels } from 'mendixmodelsdk';

    const username = 'richard.ford51@example.com';
    const apikey = '364fbe6d-c34d-4568-bb7c-1baa5ecdf9d1';
    const client = new MendixSdkClient(username, apikey);

    async function main() {
        const project = await client.platform().createNewApp(`NewApp-${Date.now()}`);
        const workingCopy = await project.createWorkingCopy();

        const domainModel = await loadDomainModel(workingCopy);
        const entity = domainmodels.Entity.createIn(domainModel);
        entity.name = `NewEntity_${Date.now()}`;
        entity.location = { x: 100, y: 100 };

        try {
            const revision = await workingCopy.commit();
            console.log(`Successfully committed revision: ${revision.num()}. Done.`)
        } catch (error) {
            console.error('Something went wrong:', error);
        }
    }

    function loadDomainModel(workingCopy: OnlineWorkingCopy): Promise<domainmodels.DomainModel> {
        const dm = workingCopy.model().allDomainModels().filter(dm => dm.containerAsModule.name === 'MyFirstModule')[0];

        return dm.load();
    }

    main();
    ```

3. `username`(7행)과 `apikey`(8행)를 Mendix 계정의 이메일 주소로 바꾸십시오. [Mendix 프로필](/portal/user-settings/#profile-api-keys)에서 [API 키](/apidocs-mxsdk/apidocs/authentication/)를 생성할 수 있습니다.

## 코드 설명

아래 섹션에서는 스크립트를 설명합니다.

### 6행

```ts
const client = new MendixSdkClient(username, apikey);
```

이 줄에서 `MendixSdkClient` 객체가 인스턴스화됩니다.

### 9-10행

```ts
const project = await client.platform().createNewApp(`NewApp-${Date.now()}`);
const workingCopy = await project.createWorkingCopy();
```

`createNewApp()` 호출은 Mendix Platform에서 새 앱을 생성하는 프로세스를 실제로 시작하는 곳이며, Team Server 리포지토리에 커밋도 생성합니다. `await`를 사용하여 앱 생성을 위한 비동기 호출을 기다리고 이후 코드를 계속 실행합니다. 이 호출의 결과는 Studio Pro를 통해 접근할 수 있지만, SDK를 사용하여 조작하려면 온라인 작업 복사본으로 노출해야 합니다. 그 다음 `createWorkingCopy()` 호출이 정확히 그 작업을 수행합니다.

{{% alert color="info" %}}
Team Server의 기존 앱에서 온라인 작업 복사본을 생성하는 경우, 앱이 최신 Mendix Studio Pro 버전으로 저장되었는지 확인하십시오. 이전 버전은 지원되지 않을 수 있습니다!
{{% /alert %}}

### 12-15행

```ts
const domainModel = await loadDomainModel(workingCopy);
const entity = domainmodels.Entity.createIn(domainModel);
entity.name = `NewEntity_${Date.now()}`;
entity.location = { x: 100, y: 100 };
```

이제 온라인 작업 복사본이 있으므로 모델을 조작할 수 있습니다. 이 예제에서는 먼저 **MyFirstModule**이라는 기본 모듈을 가져옵니다(25-29행의 `loadDomainModel()` 함수 참조). `dm.load()` 함수로 도메인 모델(Domain Model)을 메모리에 로드한 후, 도메인 모델(Domain Model)에 새 엔티티(Entity)를 생성하고 이름과 좌표를 부여합니다.

### 22-29행

```ts
try {
    const revision = await workingCopy.commit();
    console.log(`Successfully committed revision: ${revision.num()}. Done.`)
} catch (error) {
    console.error('Something went wrong:', error);
}
```

모델 변경을 완료하면 `workingCopy.commit()`을 호출하여 변경 사항을 Team Server에 다시 커밋할 수 있습니다. 마지막으로, done 블록에서 정상 처리되면 성공 메시지를 출력하고, 그렇지 않으면 오류를 처리합니다.

자세한 내용은 [Async Await](https://basarat.gitbook.io/typescript/future-javascript/async-await) 및 [Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)를 참조하십시오.

## 스크립트 컴파일 및 실행

1. 다음 명령을 사용하여 TypeScript 컴파일러로 스크립트를 JavaScript로 컴파일하십시오:

    ```bash
    $ tsc
    ```

    `script.js`라는 파일이 나타나야 합니다(또는, 원래 TypeScript 파일의 이름이 `app.ts`인 경우 `app.js`가 됩니다).

    TypeScript 컴파일러는 *tsconfig.json*에 구성된 모든 파일을 단일 실행으로 컴파일합니다. 스크립트를 개발하는 동안 코드를 변경할 때마다 컴파일러가 즉시 실행되도록 하면 실용적일 수 있습니다. `tsc`에 `--watch` 플래그를 사용하여 *tsconfig.json* 파일에 구성된 파일의 변경 사항을 모니터링하고 파일을 저장할 때 즉시 컴파일러를 실행하십시오:

    ```bash
    $ tsc --watch
    ```

2. `node`로 스크립트를 실행하여 결과를 확인하십시오:

    ```text
    $ node script.js
    Creating new app with name NewApp-[...] for user [...]
    Project creation for user [...] underway with job id: [...]
    Project created successfully for user [...] with id [...]
    Creating new online working copy for project [...] : NewApp-[...]
    Successfully created new online working copy [...] for project [...]: NewApp-[...]
    Successfully opened new online working copy [...] for project [...]: NewApp-[...]
    Closing connection to Model API...
    Closed connection to Model API successfully.
    Committing changes in online working copy [...] to team server project [...] branch null base revision -1
    Successfully committed changes to team server: revision 3 on branch null
    Successfully committed revision: 3. Done.
    ```

{{% alert color="info" %}}
앱 생성(3행) 및 Team Server에 커밋(10행) 단계는 시간이 걸릴 수 있으므로 잠시 기다려 주십시오. 'revision -1'은 최신 리비전을 의미하며, 'branch null'은 메인 라인과 동일합니다.
{{% /alert %}}

## Studio Pro에서 앱 열기

1. [Apps](/developerportal/#my-apps)에서 방금 만든 앱이 목록 상단에 보이는지 확인하십시오.
2. 새 앱을 열고 오른쪽에서 **Edit**을 클릭하십시오.
3. 최신 [Mendix Studio Pro](https://marketplace.mendix.com/link/studiopro/)가 있으면, Team Server에서 방금 만든 앱을 시작하고 로드합니다.
