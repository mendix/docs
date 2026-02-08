---
title: "버전 관리 문제 해결"
url: /refguide9/troubleshoot-version-control-issues/
linktitle: "버전 관리 문제 해결"
weight: 20
description: "버전 관리 문제에 대한 문제 및 수정 사항 목록을 제공합니다."
aliases:
    - /howto9/collaboration-requirements-management/troubleshoot-version-control-issues/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Mendix Studio Pro에는 팀원과의 협업을 지원하는 버전 관리 시스템이 포함되어 있습니다. 이 문서에서는 버전 관리 문제가 발생했을 때 사용할 수 있는 수정 방법을 제공합니다.

버전 관리에 대한 자세한 정보와 일반적인 도움말은 다음 문서를 참조하십시오:

* [버전 관리](/refguide9/version-control/)
* [Studio Pro에서 버전 관리 사용하기](/refguide9/using-version-control-in-studio-pro/)

## 오류 및 수정 사항

아래는 알려진 오류 및 수정 단계 목록입니다.

### `SharpSvn.SvnAuthenticationException: Proxy authentication failed`를 포함하는 오류 발생

{{< figure src="/attachments/refguide9/version-control/troubleshoot-version-control-issues/oopsproxy.png" alt="Error dialog with proxy authentication failed" class="no-border" >}}

이 오류는 프록시 서버 때문에 Studio Pro가 버전 관리 서버에 도달하는 데 문제가 있음을 의미합니다.

다음 단계를 따르십시오:

1. **Edit** > **Preferences**로 이동합니다.
2. **Advanced** 탭으로 이동합니다.
3. **Proxy server** 섹션에서 **Proxy server** 설정을 변경합니다. 올바른 **User name**과 **Password**를 입력합니다.

    {{< figure src="/attachments/refguide9/version-control/troubleshoot-version-control-issues/proxysettings.png" alt="Proxy settings" class="no-border" >}}

### 다른 `SharpSvn.SvnAuthenticationException`을 포함하는 오류 발생

이 오류가 발생하면 Studio Pro에서 로그아웃한 다음 다시 로그인하여 해결하십시오.

### `Connection timed out` 메시지가 있는 오류 발생

이 문제를 해결하려면 다음 단계를 따르십시오:

1. *\Users\<username>\AppData\Roaming\Subversion\servers* 파일을 텍스트 편집기로 엽니다.
2. `[global]` 섹션 아래에 `http-timeout = 5000` 텍스트를 추가합니다.
3. 파일을 저장합니다.

### `<app folder> is already locked` 메시지가 있는 오류 발생

이 문제를 해결하려면 다음 단계를 따르십시오:

1. [시스템 요구 사항](/refguide9/system-requirements/)에서 제안한 대로 [TortoiseSVN](https://tortoisesvn.net/)을 설치합니다.

    {{% alert color="warning" %}}Mendix Studio Pro는 Subversion 1.9 작업 사본을 사용합니다. 이전 버전의 Mendix Desktop Modeler는 Subversion 1.7 작업 사본을 사용했습니다. 이 작업 사본 버전은 *호환되지 않습니다*. 항상 앱 모델에 맞는 TortoiseSVN 버전을 사용하십시오. Mendix 7.x의 로컬 모델을 최신 버전의 TortoiseSVN으로 열면 더 이상 Mendix에서 열 수 없습니다.{{% /alert %}}

2. 앱의 상위 디렉터리(폴더)로 이동합니다(오류 메시지의 **<folder_name>**이 있는 폴더).
3. 마우스 오른쪽 버튼을 클릭하여 폴더의 컨텍스트 메뉴를 열고 **TortoiseSVN** > **Clean up**을 선택합니다.

### `System.Security.Cryptography.CryptographicException: Key not valid for use in specified state` 메시지가 있는 오류 발생

사용자 설정을 제거하고 Studio Pro를 재시작하려면 다음 단계를 따르십시오:

1. *\Users\<username>\AppData\Local\Mendix\Settings.sqlite*의 이름을 *Settings.sqlite.old*로 변경합니다.
2. Studio Pro를 재시작합니다.

### `SharpSvn.SvnRepositoryIOException: At least one property change failed; repository is unchanged` 메시지가 있는 오류 발생 {#error-with-message}

이 문제를 해결하려면 아래 단계를 따르십시오:

1. [시스템 요구 사항](/refguide9/system-requirements/)에서 제안한 대로 [TortoiseSVN](https://tortoisesvn.net/)을 설치합니다.

    {{% alert color="warning" %}}Mendix Studio Pro는 Subversion 1.9 작업 사본을 사용합니다. 이전 버전의 Mendix Desktop Modeler는 Subversion 1.7 작업 사본을 사용했습니다. 이 작업 사본 버전은 *호환되지 않습니다*. 항상 앱 모델에 맞는 TortoiseSVN 버전을 사용하십시오. Mendix 7.x의 로컬 모델을 최신 버전의 TortoiseSVN으로 열면 더 이상 Mendix에서 열 수 없습니다.{{% /alert %}}

2. Studio Pro에서 **App** > **Show App Directory in Explorer**를 선택하여 앱 폴더를 엽니다.
3. 앱 폴더의 배경을 마우스 오른쪽 버튼으로 클릭하고 **TortoiseSVN** > **Properties**를 선택합니다. **Properties** 대화 상자가 열립니다.
4. `svn:ignore` 속성을 더블클릭합니다. **Edit Properties** 대화 상자가 열립니다.
5. <kbd>Ctrl</kbd> + <kbd>A</kbd>를 누른 다음 <kbd>Ctrl</kbd> + <kbd>C</kbd>를 눌러 **Property value**의 모든 텍스트를 복사합니다.
6. Notepad++(또는 줄 바꿈 규칙을 이해하는 다른 편집기)에서 새 문서에 텍스트를 붙여넣습니다.
7. 화면 오른쪽 하단에서 **Windows (CR LF)**를 더블클릭하고 대신 **Unix (LF)**를 선택합니다. 이렇게 하면 줄 바꿈 유형이 CRLF에서 LF로 변경됩니다.
8. 모든 텍스트를 다시 복사합니다.
9. **Edit Properties** 대화 상자로 돌아갑니다.
10. <kbd>Ctrl</kbd> + <kbd>A</kbd>를 누른 다음 <kbd>Ctrl</kbd> + <kbd>V</kbd>를 눌러 현재 내용을 클립보드에서 붙여넣기로 교체합니다.
11. **OK**를 클릭하여 **Edit Properties** 대화 상자를 닫습니다.
12. **OK**를 클릭하여 **Properties** 대화 상자를 닫습니다.
13. Studio Pro를 재시작합니다.

이제 앱을 커밋할 수 있습니다.

### `svn:ignore` 속성의 충돌 해결 {#svn-ignore}

브랜치를 병합하거나 업데이트할 때 개별 파일이 아닌 앱 폴더에서 충돌이 보고되는 경우가 있습니다. 이는 일반적으로 `svn:ignore` 속성에 충돌이 있음을 의미합니다.

`svn:ignore` 속성에서 Subversion은 무시해야 하는 파일을 기록합니다. 이러한 파일은 디스크에 있지만 Team Server에는 있어서는 안 됩니다.

예를 들어, **deployment** 디렉터리는 앱을 실행하는 데 필요하지만 Team Server에는 있어서는 안 됩니다. 각 사용자는 하드 디스크에 자체 **deployment** 폴더 버전을 가지고 있습니다.

앱을 Team Server에 커밋하기 전에 충돌을 해결해야 합니다.

#### 예제

이 예에서는 브랜치를 메인 라인에 병합하는 것에 초점을 맞춥니다. 메인 라인에서 무시된 파일 목록은 다음과 같습니다:

[//]: # "modeler-merge-marker has not yet been renamed for Studio Pro"

```text
modeler-merge-marker
.mendix-cache
ResolveIgnoreConflict.mpr.lock
*.launch
ResolveIgnoreConflict.mpr.bak
node_modules
```

브랜치에서 목록은 다음과 같습니다:

```text
modeler-merge-marker
.mendix-cache
ResolveIgnoreConflict.mpr.lock
*.launch
ResolveIgnoreConflict.mpr.bak
.project
.classpath
deployment
```

{{% alert color="info" %}}
처음 다섯 줄은 동일하며, 그 이후의 줄은 목록에서 다를 수 있습니다.
{{% /alert %}}

브랜치를 메인 라인에 병합하면 다음 정보 메시지가 표시됩니다:

{{< figure src="/attachments/refguide9/version-control/troubleshoot-version-control-issues/mergesuccessfuldialog.png" class="no-border" >}}

{{% alert color="info" %}}
앱 *폴더*에서 충돌이 보고됩니다. 이는 일반적으로 `svn:ignore` 속성에 충돌이 있음을 의미합니다.
{{% /alert %}}

`svn:ignore` 속성의 충돌을 해결하려면 다음 단계를 따르십시오:

1. [시스템 요구 사항](/refguide9/system-requirements/)에서 제안한 대로 [TortoiseSVN](https://tortoisesvn.net/)을 설치합니다.

    {{% alert color="warning" %}}Mendix Studio Pro는 Subversion 1.9 작업 사본을 사용합니다. 이전 버전의 Mendix Desktop Modeler는 Subversion 1.7 작업 사본을 사용했습니다. 이 작업 사본 버전은 *호환되지 않습니다*. 항상 앱 모델에 맞는 TortoiseSVN 버전을 사용하십시오. Mendix 7.x의 로컬 모델을 최신 버전의 TortoiseSVN으로 열면 더 이상 Mendix에서 열 수 없습니다.{{% /alert %}}

2. Windows 파일 탐색기에서 앱 디렉터리를 엽니다.
3. 앱 폴더의 배경을 마우스 오른쪽 버튼으로 클릭하고 **TortoiseSVN** > **Edit Conflicts**를 선택합니다. 다음 팝업 창이 표시됩니다(모든 정보를 표시하도록 창 크기 조정):

    {{< figure src="/attachments/refguide9/version-control/troubleshoot-version-control-issues/editconflictsdialog.png" class="no-border" >}}

4. `modeler-merge-marker`로 시작하는 모든 줄을 클립보드에 복사합니다.
5. **Manually edit property**를 클릭합니다.
6. 그리드에서 `svn:ignore` 줄을 더블클릭합니다.
7. <kbd>Ctrl</kbd> + <kbd>A</kbd>를 누른 다음 <kbd>Ctrl</kbd> + <kbd>V</kbd>를 눌러 이전에 복사한 줄을 붙여넣습니다.
8. `<<<<<<<`, `=======`, `>>>>>>>`로 시작하는 특수 줄을 제거합니다. 이 예에서 다음과 같은 결합된 무시 목록이 됩니다:

    {{< figure src="/attachments/refguide9/version-control/troubleshoot-version-control-issues/combinedignorelist.png" class="no-border" >}}

    {{% alert color="info" %}}메인 라인과 브랜치의 줄이 모두 포함됩니다. 순서는 중요하지 않습니다.{{% /alert %}}

9. **OK**를 클릭한 다음 **OK**를 다시 클릭하여 변경을 확인합니다.
10. 앱 디렉터리의 배경을 마우스 오른쪽 버튼으로 클릭하고 **TortoiseSVN** > **Edit Conflicts**를 다시 선택합니다.
11. **Resolve using local property**를 클릭합니다.

충돌이 해결되었으며 Studio Pro에서 커밋할 수 있습니다.

### `SharpSvn.SvnRepositoryIOForbiddenException: Access to '/.../!svn/rvr/1/trunk' forbidden` 메시지가 있는 오류 발생

이 오류가 발생하면 다음 옵션을 시도하십시오:

* [Apps](/developerportal/general/team/)에서 사용자가 앱에 접근할 수 있는지 확인합니다:
    * 접근 권한이 없으면 앱에 초대합니다
    * 접근 권한이 있으면 앱에서 제거하고 다시 추가합니다 – 이렇게 하면 접근 규칙이 다시 동기화됩니다
* 위의 방법이 작동하지 않으면 네트워크 내에서 [WebDAV 프로토콜](https://en.wikipedia.org/wiki/WebDAV)이 차단되지 않았는지 확인합니다. 이 프로토콜은 Studio Pro에서 [버전 관리](/refguide9/version-control/)가 작동하기 위해 [필요](/refguide9/system-requirements/)하지만, 프록시 서버나 방화벽과 같은 다른 소프트웨어에 의해 차단될 수 있습니다.

## 기타 문제

여기의 솔루션이 버전 관리 문제에 대해 작동하지 않는 경우, [Mendix Support](https://support.mendix.com/)에 요청을 제출하십시오.

## 더 읽기

* [지원 요청 제출](/support/submit-support-request/)
