---
title: "Mendix Metamodel의 프로젝트"
linktitle: "Metamodel의 프로젝트"
url: /apidocs-mxsdk/mxsdk/projects-metamodel/
description: "이 문서는 Mendix Metamodel이 모듈 및 문서와 관련하여 프로젝트를 어떻게 처리하는지 설명합니다."
weight: 1
---

## 소개

Mendix 앱 모델은 프로젝트로 시작됩니다. 프로젝트에는 설정 및 보안과 같은 여러 최상위 또는 프로젝트 문서가 포함되어 있으며, Mendix 앱을 구성하는 모듈이 포함됩니다.

### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/projects-metamodel/16842800.svg" class="no-border" >}}

Studio Pro 가이드 | Model SDK API 문서
| --- | --- |
| [앱](/refguide/app/) | TypeScript 모듈 [projects](https://apidocs.rnd.mendix.com/modelsdk/latest/modules/projects.html) |
| [모듈](/refguide/modules/) |[Project](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.Project.html) |
| |[Module](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.Module.html) |
| |[ProjectDocument](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.ProjectDocument.html) |

### 프로젝트 문서

프로젝트 수준 문서는 앱 보안, 앱 설정, 앱 내비게이션(다양한 내비게이션 모드용) 및 앱 내 텍스트의 번역을 설명합니다.

#### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/projects-metamodel/16842801.svg" class="no-border" >}}

Studio Pro 가이드 | Model SDK API 문서
| --- | --- |
|[앱 설정](/refguide/app-settings/)| [ProjectSettings](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/settings.ProjectSettings.html) |
| [앱 보안](/refguide/app-security/) | [ProjectSecurity](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/security.ProjectSecurity.html)|
| [내비게이션](/refguide/navigation/) |[NavigationDocument](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/navigation.NavigationDocument.html)|
| [시스템 텍스트](/refguide/system-texts/) |[SystemTextCollection](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/texts.SystemTextCollection.html) |

## 모듈

### 개요

모듈은 도메인 모델(Domain Model), 모델 보안 설정 및 0개 이상의 문서(예: 마이크로플로우(Microflow), 페이지)로 구성됩니다.

#### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/projects-metamodel/18582255.svg" class="no-border" >}}

Studio Pro 가이드 | Model SDK API 문서
| --- | --- |
| [도메인 모델](/refguide/domain-model/) | Project의 속성 [`domainModel`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.Module.html#domainModel) |
| [모듈 보안](/refguide/module-security/) | Project의 속성 [`moduleSecurity`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.Module.html#moduleSecurity) |

### 문서

모듈은 문서로 구성됩니다. 예를 들어 마이크로플로우(Microflow), 페이지 또는 게시/소비된 서비스 등입니다. 이러한 문서는 폴더로 구성할 수 있습니다.

이런 점에서 Module과 Folder는 정확히 같은 방식으로 동작하며, 따라서 FolderBase를 상속합니다: 둘 다 문서와 폴더를 포함합니다.

#### 그래픽 개요

{{< figure src="/attachments/apidocs-mxsdk/mxsdk/sdk-refguide/understanding-the-metamodel/projects-metamodel/18582254.svg" class="no-border" >}}

Studio Pro 가이드 | Model SDK API 문서
| --- | --- |
| [모듈](/refguide/modules/) | Project의 속성 [`modules`](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.Project.html#modules) |
| [Module](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.Module.html) | |
| [FolderBase](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.FolderBase.html) | |
| [Folder](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.Folder.html) | |
| [ModuleDocument](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.ModuleDocument.html) | |
| [Document](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/projects.Document.html) | |
