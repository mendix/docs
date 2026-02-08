---
title: "C# Extensibility API 시작하기"
linktitle: "시작하기"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-10/get-started/
weight: 2
---

## 소개

이 문서는 확장 프로그램을 구축하기 위한 기본 개발 환경을 설정하는 방법을 설명합니다.

## 개발 설정

{{% alert color="info" %}}
기본 프레임워크가 크로스 플랫폼이므로 모든 운영 체제에서 확장 프로그램을 구축할 수 있습니다.
{{% /alert %}}

권장 개발 환경은 Windows에서 실행되는 [Visual Studio 2022](https://visualstudio.microsoft.com/)입니다. 이 문서는 이 설정을 중심으로 작성되었습니다. 다른 IDE 및 [F#](https://fsharp.org/)과 같은 다른 .NET 호환 프로그래밍 언어를 사용할 수도 있습니다.

Mendix [Marketplace](https://marketplace.mendix.com/link/studiopro/)에서 최신 Studio Pro 버전을 설치하십시오. 새로운 기능과 수정 사항의 혜택을 받으려면 이 Studio Pro 설치를 최신 상태로 유지하십시오.

## 호스팅된 NuGet 패키지를 통해 Extensibility API 사용

NuGet에서 *Mendix.Studio.ExtensionsAPI*를 검색하여 프로젝트에 `Mendix.StudioPro.ExtensionsAPI` NuGet 패키지를 포함함으로써 확장 프로그램 개발을 시작하십시오.

{{% alert color="warning" %}}Mendix 10.12.0과 호환되는 초기 릴리스 패키지 버전은 10.12.38909였습니다. 이는 Studio Pro 버전과 일치하도록 10.12.0+38909로 업데이트되었습니다.
{{% /alert %}}

로컬 환경 설정에 따라 솔루션에 NuGet 패키지를 수동으로 추가해야 할 수도 있습니다. **Tools** > **Options** > **NuGet Package Manager** > **Package Sources**를 클릭하여 메뉴를 통해 Visual Studio에 패키지 소스를 추가할 수 있습니다.

## 로컬 저장소에 호스팅된 NuGet 패키지를 통해 Extensibility API 가져오기

확장 프로그램 개발을 시작하는 또 다른 방법은 로컬로 호스팅된 `Mendix.StudioPro.ExtensionsAPI` NuGet 패키지를 프로젝트로 가져오는 것입니다.

공유된 NuGet 패키지를 호스팅하고 사용할 수 있는 로컬 NuGet 저장소를 만들려면 다음 단계를 따르십시오:

1. **Tools** > **Options** > **NuGet Package Manager** > **Package Sources**로 이동합니다.
2. 녹색 더하기 기호를 클릭하고 네트워크 위치 대신 로컬 폴더를 지정합니다.
3. 패키지를 로컬 폴더에 넣습니다.
4. NuGet 관리자를 새로 고쳐 다른 패키지와 함께 패키지를 확인합니다.

{{% alert color="info" %}}
검색 프로세스를 더 쉽게 하기 위해 NuGet 관리자 창 내에서 특정 패키지 소스를 구체적으로 선택할 수 있습니다.
{{% /alert %}}

{{% alert color="info" %}}
로컬 NuGet 저장소에 대한 자세한 내용은 *Microsoft 문서*의 공식 [Local Feeds](https://learn.microsoft.com/en-us/nuget/hosting-packages/local-feeds)를 참조하십시오.
{{% /alert %}}

## 확장 프로그램 개발 설정

확장 프로그램은 Mendix 애플리케이션 내에서 로드되며 앱이 열려 있는 동안에만 로드됩니다.

`--enable-extension-development` 플래그를 지정하면 앱 디렉토리 내의 새 하위 폴더에 확장 프로그램을 배치하여 디버그할 수 있습니다. 폴더 형식은 `<Mendix app folder>\extensions\<your extension name>`이어야 하며, 로드하려는 모든 확장 프로그램은 <`Mendix app folder>\extensions` 하위 폴더 내에 있어야 합니다.

Studio Pro는 다음 규칙을 준수하는 경우에만 확장 프로그램을 로드합니다:

* 확장 프로그램은 `manifest.json` 파일을 제공해야 합니다.
* 이 매니페스트 파일에는 확장 프로그램에 대한 진입점 목록이 포함되어야 합니다. 예를 들면 다음과 같습니다:

    ```
    {
        "mx_extensions": [ "MyExtension.dll" ]
    }
    ```
