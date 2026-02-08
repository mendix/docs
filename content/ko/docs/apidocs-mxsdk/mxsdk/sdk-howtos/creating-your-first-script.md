---
title: "첫 번째 스크립트 만들기"
url: /apidocs-mxsdk/mxsdk/creating-your-first-script/
weight: 20
---

## 소개

[개발 환경 설정 방법](/apidocs-mxsdk/mxsdk/setting-up-your-development-environment/) 및 [개인 액세스 토큰 설정 방법](/apidocs-mxsdk/mxsdk/set-up-your-pat/)에서 모든 개발 도구와 보안 설정을 완료했습니다. 이제 자동으로 새 Mendix 앱을 부트스트랩하는 SDK 스크립트를 만들어 보겠습니다.

## 첫 번째 스크립트 작성하기

모든 사전 준비를 완료한 후, Mendix Platform SDK를 사용하는 첫 번째 스크립트를 작성할 수 있습니다.

1. VS Code에서 다른 파일이 있는 동일한 디렉토리에 `script.ts`라는 파일을 만드십시오.

    다음 스크립트는 새 앱을 생성하고, 도메인 모델(Domain Model)에 새 엔티티(Entity)를 추가한 다음, Team Server에 변경 사항을 커밋합니다.
2. 다음 코드를 `script.ts` 파일에 복사하십시오:

    ```ts
    import { domainmodels } from "mendixmodelsdk";
    import { MendixPlatformClient } from "mendixplatformsdk";

    async function main() {
        const client = new MendixPlatformClient();

        const app = await client.createNewApp(`NewApp-${Date.now()}`, {
            repositoryType: "git",
        });

        const workingCopy = await app.createTemporaryWorkingCopy("main");
        const model = await workingCopy.openModel();

        const domainModelInterface = model.allDomainModels().filter(dm => dm.containerAsModule.name === "MyFirstModule")[0];
        const domainModel = await domainModelInterface.load();

        const entity = domainmodels.Entity.createIn(domainModel);
        entity.name = `NewEntity_${Date.now()}`;

        await model.flushChanges();

        await workingCopy.commitToRepository("main");
    }

    main().catch(console.error);
    ```

스크립트를 실행하기 전에 [개인 액세스 토큰을 설정](/apidocs-mxsdk/mxsdk/set-up-your-pat/)하는 것을 잊지 마십시오.

{{% alert color="warning" %}}
작업 복사본 생성은 리소스 집약적인 프로세스입니다. `app.getOnlineWorkingCopy(workingCopyId)`를 호출하여 이전에 생성된 것을 재사용하는 것을 고려하십시오. 모든 작업 복사본은 24시간 후 자동으로 삭제됩니다.
{{% /alert %}}

### 코드 설명

스크립트에 대한 설명입니다.

```ts
const client = new MendixPlatformClient();
```

이 줄에서 MendixSdkClient 객체가 인스턴스화됩니다.

```ts
const app = await client.createNewApp(`NewApp-${Date.now()}`, {
    repositoryType: "git",
});

const workingCopy = await app.createTemporaryWorkingCopy("main");
```

`createNewApp()` 호출은 Mendix Platform에서 새 앱을 생성하는 프로세스를 시작하는 곳이며, 이는 Team Server 리포지토리에 커밋도 생성합니다. `await`를 사용하여 앱 생성을 위한 비동기 호출을 기다리고 이후 코드를 계속 실행합니다. 이 호출의 결과는 Studio Pro를 통해 접근할 수 있지만, SDK를 사용하여 조작하려면 온라인 작업 복사본으로 노출해야 합니다. 그 다음 `createTemporaryWorkingCopy()` 호출이 정확히 그 작업을 수행합니다.

Team Server의 기존 앱에서 온라인 작업 복사본을 생성하는 경우, 앱이 최신 Mendix Studio Pro 버전으로 저장되었는지 확인하십시오. 이전 버전은 지원되지 않을 수 있습니다!

```ts
const domainModelInterface = model.allDomainModels().filter(dm => dm.containerAsModule.name === "MyFirstModule")[0];
const domainModel = await domainModelInterface.load();

const entity = domainmodels.Entity.createIn(domainModel);
entity.name = `NewEntity_${Date.now()}`;
```

이제 온라인 작업 복사본이 있으므로 모델을 조작할 수 있습니다. 이 예제에서는 먼저 **MyFirstModule**이라는 기본 모듈의 도메인 모델(Domain Model)을 가져옵니다. 문서를 찾은 후 변경할 수 있도록 완전히 로드된 형태로 가져와야 합니다. 이는 Model SDK가 전체 모델을 클라이언트의 메모리에 로드하지 않고 문서의 공개 엘리먼트와 속성만 로드하기 때문입니다. `domainModelInterface.load()` 함수로 도메인 모델(Domain Model)을 메모리에 로드한 후, 도메인 모델(Domain Model)에 새 엔티티(Entity)를 생성하고 이름을 부여합니다.

```ts
await model.flushChanges();
await workingCopy.commitToRepository("main");
```

모델 변경을 완료하면 변경 사항이 전송되었는지 확인하기 위해 플러시하고, `workingCopy.commitToRepository()`를 호출하여 작업 복사본을 Team Server에 다시 커밋할 수 있습니다.

## 스크립트 컴파일 및 실행

1. `package.json`에 다음 섹션을 추가하십시오:

    ```json
    "scripts": {
        "start": "tsc && node script.js"
    }
    ```

    이 명령은 먼저 TypeScript 컴파일러를 사용하여 TypeScript 코드를 JavaScript로 컴파일합니다. 컴파일 후 `script.js`라는 파일이 생성됩니다. 그런 다음 Node.js를 사용하여 스크립트가 실행됩니다.

2. 스크립트를 실행하여 결과를 확인하십시오:

    ```text
    $ npm run start
    Creating new app 'NewApp-1637595970665'...
    Successfully created app with id '64760e41-9507-42d3-99da-3950454dd40a'
    Creating temporary working copy for branch 'main'...
    Successfully created temporary working copy with id 'c70b078e-a323-42a7-b95d-7407a0e611d3' based on branch 'main'
    Committing temporary working copy 'c70b078e-a323-42a7-b95d-7407a0e611d3' to branch 'main'...
    Successfully committed the working copy with id 'c70b078e-a323-42a7-b95d-7407a0e611d3' to branch 'main'
    ```

앱 생성 및 Team Server에 커밋하는 단계는 시간이 걸릴 수 있습니다. 잠시 기다려 주십시오.

## 다음 단계

[도메인 모델 만들기 방법](/apidocs-mxsdk/mxsdk/creating-the-domain-model/)을 계속하십시오.
