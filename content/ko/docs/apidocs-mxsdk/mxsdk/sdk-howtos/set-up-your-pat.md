---
title: "개인 액세스 토큰(PAT) 설정"
url: /apidocs-mxsdk/mxsdk/set-up-your-pat/
weight: 11
aliases:
    - /apidocs-mxsdk/mxsdk/setup-your-pat/
---

## 소개

첫 번째 스크립트를 실행하기 전에, 필요한 범위로 새 토큰을 만들고 컴퓨터에 환경 변수로 저장하여 개인 액세스 토큰을 설정해야 합니다.

## 개인 액세스 토큰 만들기

개인 액세스 토큰(PAT)을 만드는 방법에 대한 자세한 내용은 *Mendix 프로필*의 [개인 액세스 토큰](/portal/user-settings/#pat) 섹션을 참조하십시오.

최소한 다음 범위를 선택해야 합니다:

* **Model Repository** – `mx:modelrepository:repo:write`
* **Sprintr Project API** – `mx:app:create` 및 `mx:app:delete`

## 개인 액세스 토큰을 환경 변수로 저장

자격 증명(즉, PAT)을 스크립트에 하드 코딩하는 것은 권장하지 않습니다. 대신 `MENDIX_TOKEN`이라는 변수 이름으로 환경 변수에 저장하면 Mendix Platform SDK가 자동으로 읽습니다.

다음은 다른 운영 체제에서 환경 변수를 설정하는 데 유용한 정보입니다:

* [Create and Modify Environment Variables on Windows](https://docs.oracle.com/en/database/oracle/machine-learning/oml4r/1.5.1/oread/creating-and-modifying-environment-variables-on-windows.html#GUID-DD6F9982-60D5-48F6-8270-A27EC53807D0)
* [Setting up Environment Variables in MacOS](https://medium.com/@himanshuagarwal1395/setting-up-environment-variables-in-macos-sierra-f5978369b255)
* [How to Set Environment Variables in Linux](https://www.serverlab.ca/tutorials/linux/administration-linux/how-to-set-environment-variables-in-linux/)
