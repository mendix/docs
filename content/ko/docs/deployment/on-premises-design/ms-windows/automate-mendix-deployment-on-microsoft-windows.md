---
title: "Microsoft Windows에서 Mendix 배포 자동화"
url: /developerportal/deploy/automate-mendix-deployment-on-microsoft-windows/
linktitle: "Mendix 배포 자동화"
description: "Windows를 실행하는 서버에서 Mendix 배포를 자동화하는 방법"
weight: 5
---

## 소개

Windows 서버에서 애플리케이션을 수동으로 배포하는 대신 [PowerShell cmdlet](https://docs.microsoft.com/en-us/powershell/scripting/developer/cmdlet/cmdlet-overview)을 사용하여 CI/CD 파이프라인의 해당 부분을 자동화할 수 있습니다. 배포를 자동화하면 애플리케이션 업데이트 프로세스가 빨라지고 수동 배포 단계를 자동화 스크립트로 대체하여 사용자 오류의 가능성을 줄입니다. 이 문서에서는 필요한 구성을 설명하고 자체 배포 스크립트를 작성하기 위한 기반으로 사용할 수 있는 샘플 자동화 스크립트를 제공합니다.

## 전제 조건

이 사용 방법 문서를 시작하기 전에 다음 전제 조건을 완료하십시오:

* Mendix 앱을 수동으로 배포하고 배포 중 오류가 없는지 확인하십시오. 자세한 내용은 [Microsoft Windows](/developerportal/deploy/deploy-mendix-on-microsoft-windows/)를 참조하십시오.
* Windows PowerShell 버전이 5.1인지 확인하십시오. 다른 버전은 현재 지원되지 않습니다.
* Mendix Service Console 버전이 4.7.4 이상인지 확인하십시오.
* Windows에서 실행 중인 Mendix 앱의 업데이트 프로세스를 숙지하십시오. 자세한 내용은 [MS Windows: Mendix 앱 업데이트](/developerportal/deploy/updating-a-mendix-application/)를 참조하십시오.

## Windows PowerShell에 Mendix 전용 Cmdlet 가져오기 {#powershell}

앱 배포를 스크립트화하는 데 사용할 수 있는 Mendix 전용 cmdlet을 설치하려면 다음 단계를 따르십시오:

1. 다음 옵션 중 하나를 선택하여 Mendix Deployment Package를 빌드하십시오:
    * Mendix Build API를 사용하십시오. 자세한 내용은 [Build API](/apidocs-mxsdk/apidocs/build-api/)를 참조하십시오.
    * Team Server에서 소스를 가져오고 [MxBuild.exe](/refguide/mxbuild/)로 로컬에서 패키지를 빌드하십시오.
    * 수동으로 패키지를 생성하십시오. 자세한 내용은 [Create Deployment Package](/refguide/create-deployment-package-dialog/)를 참조하십시오.
2. Windows PowerShell에서 다음 명령을 실행하십시오: `Import-Module '{<Mendix Service Console 설치 디렉토리>}\Mendix.Service.Commands.dll'`.
    예를 들어, Mendix Service Console이 *C:\Program Files\Mendix\Service Console*에 설치된 경우 `Import-Module 'C:\Program Files\Mendix\Service Console\Mendix.Service.Commands.dll'`을 입력하십시오
3. PowerShell에서 다음 명령을 사용할 수 있는지 확인하십시오:
    * `Start-MxApp`
    * `Stop-MxApp`
    * `Update-MxApp`
    * `Install-MxServer`
    
    각 명령 및 매개변수에 대한 자세한 내용은 명령 뒤에 `-?`를 추가하십시오(예: `Start-MxApp -?`).

Mendix 전용 cmdlet을 설치한 후 이를 사용하여 Mendix 앱을 시작, 중지 또는 업데이트하는 자체 스크립트를 작성할 수 있습니다.

{{% alert color="info" %}}
PowerShell cmdlet을 사용하여 상태를 변경(예: 'Start-MxApp' 사용)하면 [Service Console GUI](/developerportal/deploy/deploy-mendix-on-microsoft-windows/#service-console)에서 업데이트된 서비스 상태가 자동으로 표시되지 않습니다. Service Console을 재시작하면 올바른 상태가 표시됩니다.
{{% /alert %}}

## 샘플 스크립트

이 섹션에서는 앱 배포를 스크립트화하는 데 도움이 되는 샘플 스크립트를 찾을 수 있습니다.

{{% alert color="info" %}}
이 스크립트는 사용 가능한 배포 옵션의 범위를 보여주기 위한 것입니다. 예시로만 제공되며, 자체 환경에서 작동하려면 상당한 수정이 필요할 수 있습니다.
{{% /alert %}}

### 샘플 스크립트 - 앱 업데이트 {#update}

다음 스크립트 예시는 앱을 업데이트하는 데 필요한 프로세스를 보여줍니다. 먼저 필요한 cmdlet을 가져옵니다. 그런 다음 앱을 중지하고 Mendix Deployment Package에서 추출된 파일로 업데이트합니다. 마지막으로 `SynchronizeDatabase` 매개변수를 사용하여 사용자 입력 없이 데이터베이스를 동기화하도록 앱을 재시작합니다.

```text
Import-Module '{<Mendix Service Console installation directory>}\Mendix.Service.Commands.dll'

$mdaPath = '{Location of your Mendix Deployment Package}'
$mdaFile = '{Name of your Mendix Deployment Package}' 
$literalPath = $mdaPath + "\" + $mdaFile
$appName = '{Name of your app}'

"Deploying " + $mdaPath + " to app " + $appName

# stop app
Stop-MxApp $appName

# unpack app                                                    
Update-MxApp $appName -LiteralPath $literalPath

# start app, update database                                     
Start-MxApp $appName -SynchronizeDatabase
```

{{% alert color="warning" %}}
업데이트하기 전에 앱을 중지하는 것은 프로세스의 필수 부분입니다. 앱이 실행 중인 동안 배포 패키지를 추출하려고 하지 마십시오.
{{% /alert %}}

아래 섹션에서 `Start-MxApp` cmdlet의 매개변수를 확인할 수 있습니다:

#### `NoService`

서비스 대신 로컬 프로세스로 앱을 시작하려면 `Start-MxApp` cmdlet에 `NoService` 인수를 추가하십시오. 다음 예시와 같습니다:

```text
Start-MxApp $appName -NoService -SynchronizeDatabase 
```

#### `EnableDebugger`

`EnableDebugger`는 Studio Pro가 디버깅을 위해 Mendix 앱에 연결할 수 있도록 합니다.

```text
Start-MxApp $appName -EnableDebugger "Abcd@1234"
```

#### `LicenseKey`

`LicenseKey` 매개변수를 사용하면 Mendix 앱의 라이선스를 활성화할 수 있습니다.

```text
Start-MxApp $appName -LicenseKey "Abcd@1234"
```

#### `AdminPassword`

`AdminPassword` 매개변수는 Start-MxApp cmdlet에 대해 Mendix 앱의 관리자 비밀번호를 설정합니다.

```text
Start-MxApp $appName -AdminPassword "Abcd@1234"
```

### 샘플 스크립트 - Mendix Runtime 버전 확인

다음 스크립트는 앱에 필요한 Mendix Runtime 버전을 확인하는 방법을 보여줍니다. 배포 패키지를 검사하고 필요한 Mendix Runtime 버전을 찾은 다음 올바른 버전을 다운로드합니다.

```text
Copy-Item -Path 'C:\Mendix\Some_Deployment.mda'-Destination C:\Temp\temp.zip
Expand-Archive -LiteralPath 'C:\Temp\temp.zip' -DestinationPath C:\temp\MxApp
$mxJson = Get-Content "C:\temp\MxApp\model\metadata.json" | ConvertFrom-Json
Remove-Item C:\Temp\temp.zip
Remove-Item C:\Temp\MxApp\ -Recurse

# determine the Mendix Runtime version
$mxJson.RuntimeVersion

# download the Mendix Runtime version
$targetURL = 'https://cdn.mendix.com/runtime/mendix-' + $mxJson.RuntimeVersion + ".tar.gz"
$targetFile = 'C:\Mendix\runtimes\mendix-' + $mxJson.RuntimeVersion + '.tar.gz'
wget $targetURL -OutFile $targetFile
```

### 샘플 스크립트 - Mendix Runtime 업데이트

다음 스크립트 예시는 배포하는 앱과 일치하는 버전으로 [Mendix Runtime](/refguide/runtime/)을 업데이트하는 방법을 보여줍니다. 이는 Mendix 버전을 업그레이드할 때만 필요합니다. 샘플 스크립트는 먼저 PowerShell을 통해 필요한 Mendix Runtime 버전을 다운로드한 다음 Mendix Platform 라이브러리를 서버 배포 폴더에 추출합니다. 이 경우 이 프로세스는 이전에 설치된 Mendix Platform 버전에 영향을 주지 않고 새 서버 버전만 추출하므로 앱이 계속 실행될 수 있습니다.

```text
# download Mendix Runtime
wget https://cdn.mendix.com/runtime/mendix-{<major>.<minor>.<patch>.<build>}.tar.gz -OutFile {<target folder for the downloaded file>}\mendix-{<major>.<minor>.<patch>.<build>}.gz

# extract Mendix Platform into the distribution folder
Install-MxServer -LiteralPath {<target folder for the downloaded file>}\mendix-{<major>.<minor>.<patch>.<build>}.gz
```

### 샘플 스크립트 - 새 Mendix 앱 생성

다음 스크립트 예시는 자체 폴더와 기본 `Settings.yaml` 파일로 새 Mendix 앱을 생성하는 방법을 보여줍니다. 앱이 실제로 시작되려면 데이터베이스 설정과 유효한 Java 경로로 `Settings.yaml` 파일을 확장해야 합니다.

```text
$appName = 'Name of Mendix app'

# Create new Mendix app
New-MxApp -Name $appName -Credential (Get-Credential)
```

### 샘플 스크립트 - Mendix 앱 로그 레벨 설정

다음 스크립트 예시는 로그 구독자의 모든 로그 노드에 대해 로그 레벨을 한 번에 설정하는 방법을 보여줍니다. 이는 `Settings.yaml` 파일에 자체 로그 구독자를 정의한 경우에만 적용됩니다.

```text
$appName = 'Name of Mendix app'
$subscriberName = 'Log subscriber name of the app'
$level = 'Log level which needs to be assigned'

# Set log level for all nodes of a log subscriber at once
Set-MxLogLevel $appName -SubscriberName $subscriberName -Level $level
```

### 샘플 스크립트 - Mendix 앱용 Windows 서비스 생성

다음 스크립트 예시는 Mendix 앱용 Windows 서비스를 생성하는 방법을 보여줍니다.

```text
$appName = 'Name of Mendix app'

# Create new Windows service
Install-MxService $appName
```

## 문제 해결

cmdlet을 사용하여 Windows에서 Mendix 배포를 자동화하는 동안 문제가 발생하면 다음 문제 해결 팁을 사용하여 해결하십시오.

### 파일 또는 어셈블리를 로드할 수 없음

PowerShell에서 다음과 유사한 오류 메시지가 표시됩니다:

```text
Could not load file or assembly, Version=3.3.0.0, Culture=neutral, PublicKeyToken= {token number}' or one of its dependencies. The system cannot find the file specified.
```

#### 원인

이 오류 또는 유사한 오류 메시지는 PowerShell과 Mendix cmdlet 간의 .NET 버전 불일치와 관련이 있을 수 있습니다. Mendix cmdlet은 .NET 버전 4가 필요하므로 PowerShell이 .NET 2 또는 3을 사용하는 경우 오류가 표시될 수 있습니다.

#### 해결 방법

이 문제를 해결하려면 다음 단계를 따르십시오:

1. 다음 명령 중 하나를 실행하여 PowerShell에서 현재 사용 중인 .NET 버전을 확인하십시오:
    * `[System.Reflection.Assembly]::GetExecutingAssembly().ImageRuntimeVersion`
    * `$PSVersionTable`
2. .NET 버전이 4가 아닌 경우 다음 구성 파일을 생성하십시오:
    * 파일 위치 - *powershell.exe* 파일이 포함된 폴더(예: *C:\Windows\System32\WindowsPowerShell\v1.0*)
    * 파일 이름: *powershell.exe.config*
3. *powershell.exe.config* 파일에 다음 구성을 제공하십시오:
    
    ```text
    <?xml version="1.0"?> 
    <configuration> 
    <startup useLegacyV2RuntimeActivationPolicy="true"> 
        <supportedRuntime version="{<Latest build of .NET version 4, for example, v4.0.30319>}"/> 
        <supportedRuntime version="{<.NET version currently used by PowerShell, for example, v2.0.50727>}"/> 
    </startup> 
    </configuration> 
    ```

위 구성을 사용하면 PowerShell은 주로 .NET 버전 4를 사용하지만 이전에 사용하던 버전(예: 버전 2)도 지원합니다.

### 파일 또는 어셈블리 System.Management.Automation을 로드할 수 없음

PowerShell에서 다음과 유사한 오류 메시지가 표시됩니다:

```text
Could not load file or assembly 'System.Management.Automation, Version=3.0.0.0, Culture=neutral, PublicKeyToken={token number}' or one of its dependencies. The system cannot find the file specified.
```

#### 원인

Windows Management Framework 3.0이 설치되어 있지 않습니다.

#### 해결 방법

[Windows Management Framework 3.0](https://www.microsoft.com/en-us/download/details.aspx?id=34595)을 설치하십시오.

### 컴퓨터에서 {App Name} 서비스를 열 수 없음

PowerShell에서 다음과 유사한 오류 메시지가 표시됩니다:

```text
Start-MxApp : Cannot open App1 service on computer '.'.
At line:1 char:1
+ Start-MxApp App1 -synchronizedatabase
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (App1:String) [Start-MxApp], InvalidOperationException
    + FullyQualifiedErrorId : AppProcessError,Mendix.Service.Commands.StartAppCommand
```

#### 원인

PowerShell이 관리자 권한 없이 실행되고 있습니다.

#### 해결 방법

관리자 권한으로 PowerShell을 실행하십시오.

### 파일 또는 어셈블리 Mendix.Service를 로드할 수 없음

PowerShell에서 다음과 유사한 오류 메시지가 표시됩니다:

```text
Start-MxApp: Could not load file or assembly 'Mendix.Service, Version=4.7.0.0, Culture=neutral, PublicKeyToken=null'. Het systeem kan het opgegeven bestand niet vinden.
```

#### 원인

5.1이 아닌 다른 버전의 PowerShell에서 `Start-MxApp` cmdlet을 실행했습니다.

#### 해결 방법

Windows PowerShell 5.1을 사용하여 Mendix cmdlet을 실행하십시오. 다른 버전의 PowerShell은 현재 지원되지 않습니다.

### 앱을 시작할 수 없음. 이유: 데이터베이스가 존재하지 않음

`Start-MxApp $APP_NAME` 또는 `Start-MxApp $APP_NAME -synchronizedatabase` cmdlet을 실행할 때 PowerShell에서 다음과 유사한 오류 메시지가 표시됩니다:

```text
Start-MxApp : Unable to start the app. Reason: The database does not exist. 
At line:1 char:1 
+ Start-MxApp MyFirstApp -synchronizedatabase 
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
+ CategoryInfo : InvalidOperation: (MyFirstApp:String) [Start-MxApp], Exception 
+ FullyQualifiedErrorId : AppProcessError,Mendix.Service.Commands.StartAppCommand
```

#### 원인

앱 데이터베이스를 먼저 생성하지 않고 앱을 시작하려고 했습니다.

#### 해결 방법

자동화된 배포 스크립트를 실행하기 전에 앱을 수동으로 배포하십시오. 자세한 내용은 [Microsoft Windows](/developerportal/deploy/deploy-mendix-on-microsoft-windows/)를 참조하십시오.

### 앱을 시작할 수 없음. 이유: 데이터베이스가 모델과 동기화되지 않음

`Start-MxApp $APP_NAME` cmdlet을 실행할 때 PowerShell에서 다음과 유사한 오류 메시지가 표시됩니다:

```text
Start-MxApp : Unable to start the app. Reason: The database is not synchronized with the model.
At line:1 char:1
+ Start-MxApp MyFirstApp
+ ~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (MyFirstApp:String) [Start-MxApp], Exception
    + FullyQualifiedErrorId : AppProcessError,Mendix.Service.Commands.StartAppCommand
```

#### 원인

`SynchronizeDatabase` 매개변수를 사용하지 않고 앱을 재시작하려고 했습니다.

#### 해결 방법

`SynchronizeDatabase` 매개변수와 함께 `Start-MxApp` 명령을 실행하십시오. 예시는 위의 [샘플 스크립트 - 앱 업데이트](#update)를 참조하십시오.
