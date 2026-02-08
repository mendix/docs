---
title: "SBOM 생성"
url: /refguide10/sbom-generation/
weight: 60
description: "Studio Pro에서 SBOM을 생성하는 방법을 설명합니다."
---

## 소개

Mendix 앱을 빌드할 때 Widget 및 Marketplace 모듈과 같은 많은 재사용 가능한 구성 요소를 사용하며, 이들은 Java 라이브러리 및 npm 모듈과 같은 구성 요소를 활용합니다. 또한 Java 및 JavaScript Action으로 자체 앱을 확장하고 Java 라이브러리 및 npm 모듈을 기반으로 할 수 있습니다. 앱에서 무엇을 사용하는지, 어떤 다른 구성 요소에 의존하는지, 어떤 라이선스를 사용하는지 알아야 합니다. 시간이 지남에 따라 이러한 구성 요소가 구식이 되거나 취약해질 수 있으므로, 즉시 사용할 수 있는 표준 형식으로 이 정보를 보유하는 것이 중요합니다. Studio Pro는 표준화된 CycloneDX 형식을 기반으로 소프트웨어 자재 명세서(SBOM)를 생성하여 이를 수행합니다.

## SBOM 생성하기

다음 옵션 중 하나를 사용하여 SBOM을 생성할 수 있습니다:

1. [MxBuild](/refguide10/mxbuild/).

    ```bat
   mxbuild --java-home="C:\Program Files\Eclipse Adoptium\jdk-11.0.16.101-hotspot" --java-exe-path="C:\Program Files\Eclipse Adoptium\jdk-11.0.16.101-hotspot\bin\java.exe" --generate-sbom  "C:\Mendix\MyApp\MyApp.mpr"
   ```

2. Studio Pro 버전 10.18 이상에서 메뉴 옵션 **App -> Tools -> Generate Bill of Materials**.

두 가지 모두 패키지 `.mda`의 deployment 폴더에 `sbom.json` 파일을 생성합니다. SBOM을 배포와 함께 번들링하면 SBOM이 빌드 시 존재했던 구성 요소를 나타내는 것을 보장합니다.

## SBOM 형식

SBOM은 [CycloneDX 1.4 JSON 형식](https://cyclonedx.org/docs/1.4/json/)을 기반으로 합니다. 여기에는 필수 필드와 `version` 및 `description`과 같은 정보가 포함됩니다. 다른 패키지 관리자의 구성 요소를 식별하기 위해 `purl` 필드가 사용됩니다. 콘텐츠는 `https://github.com/package-url/purl-spec`에 정의된 사양을 따릅니다. 여기에는 Mendix Marketplace 모듈 및 Widget, npm 패키지, Java 라이브러리가 포함됩니다.

## 출력 예시

전체 SBOM에는 모든 프로젝트 세부 사항이 포함되므로 이것은 전체 예시의 부분적인 표현입니다. 간단하게 하기 위해 아래는 패키지에 포함된 Java 라이브러리 중 하나입니다. `dependencies` 필드에는 Mendix Marketplace 모듈에서 npm 모듈 및 Java 라이브러리로의 종속성 관계가 포함됩니다.

```json

{
  "bomFormat": "CycloneDX",
  "specVersion": "1.4",
  "serialNumber": "urn:uuid:d1a93219-d2fb-4282-9cc8-b591f85e0551",
  "version": 1,
  "metadata": { },
  "components": 
    {
      "type": "framework",
      "bom-ref": "urn:uuid:5371eb81-0997-48a0-ad0a-1a3012bf87cb",
      "author": "",
      "publisher": "",
      "name": "Mendix-Runtime",
      "version": "10.10.0.34429",
      "licenses": [],
      "copyright": "",
      "purl": "pkg:mendix/Mendix-Runtime@10.10.0.34429?type=framework",
      "components": []
    },
    {
      "type": "library",
      "bom-ref": "pkg:maven/com.google.guava/guava@32.0.1-jre?type=jar",
      "group": "com.google.guava",
      "name": "guava",
      "version": "32.0.1-jre",
      "description": "Guava is a suite of core and expanded libraries that include utility classes, Google\u0027s collections, I/O classes, and much more.",
      "licenses": [
        {
          "license": {
            "id": "Apache-2.0"
          }
        }
      ],
      "purl": "pkg:maven/com.google.guava/guava@32.0.1-jre?type=jar",
      "modified": false
    },
   
  "externalReferences": [],
  "dependencies": []
}

```

## 지원되는 기능 {#supported-features}

아래 표는 생성된 SBOM에 현재 포함되는 구성 요소와 해당 버전을 설명합니다. 버전 `10.10`, `9.24.22` 또는 `10.6.9` 이상을 사용하는 것이 권장됩니다.

| 기능 | 설명 | 버전
| --- | --- | --- |
| Mendix Modules | `9.24.14`, `10.4.0` | Marketplace에서 가져온 Mendix 모듈입니다. Add-on 모듈, Solutions, Extensions 또는 수동으로 가져온 모듈은 포함되지 않습니다. |
| [Java Dependencies](/refguide10/managed-dependencies/) | `9.24.14`, `10.4.0` | [Managed Dependencies](/refguide10/managed-dependencies/)를 사용하여 프로젝트에 가져온 Java 라이브러리 또는 `userlib` 폴더에 수동으로 추가된 라이브러리입니다. Managed Dependencies를 통해 추가된 라이브러리는 패키지 관리자의 정보에 액세스할 수 있으며 사용된 라이선스와 같은 더 많은 세부 사항을 포함합니다. |
| [Widgets](/appstore/widgets/) | `10.9.0`, `10.6.6`, `10.10.0`, `9.24.18` | Marketplace에서 다운로드한 드롭다운이나 버튼과 같은 사용자 인터페이스 요소입니다. |
| JavaScript Actions(/refguide10/javascript-actions/) | `10.10` | JavaScript Action에서 사용되는 npm 라이브러리입니다. |

## 더 읽기

* [CycloneDX](https://cyclonedx.org/)
* [Package URL spec](https://github.com/package-url/purl-spec)
* [Software Composition](/control-center/software-composition/)
