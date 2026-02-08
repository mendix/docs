---
title: "모듈 만들기"
url: /appstore/guidelines-creating-modules/
description: "Marketplace에서 모듈을 만들기 위한 가이드라인을 설명합니다."
weight: 3
tags: ["marketplace", "content creation", "guidelines", "modules"]
---

## 소개

Marketplace용 모듈을 개발할 때 다음 가이드라인을 따르십시오:

* **USE_ME**라는 이름의 폴더를 만들고, 사용자와 관련된 Microflow 및 페이지를 추가하십시오.
* 버전 번호를 이름으로 하는 빈 폴더를 만드십시오. 이 폴더는 Studio Pro의 App Explorer에 나타납니다.
* Java 종속성의 경우 다음 가이드라인을 따르십시오:

    * Mendix 10.3.0 이상 버전에서는 가능한 경우 [관리 종속성(managed dependencies)](/refguide/managed-dependencies/)을 사용하십시오. 
    * 10.3 미만 버전에서는 Java 종속성이 `userlib` 폴더에 넣어져 있는지 확인하십시오. 또한 공개적으로 사용할 수 없는 *.jar* 파일인 [비관리 종속성(unmanaged dependencies)](/refguide/managed-dependencies/#unmanaged)도 **userlib** 폴더에 넣어야 합니다.
    
        * **userlib** 폴더에 *.jar* 파일을 넣을 때 이름에 버전 번호가 포함되어 있는지 확인하고(예: `org.apache.commons.io-2.3.0.jar`), 빈 `{jarfile-including-version}.{module_name}.RequiredLib` 파일이 함께 있어야 합니다. 이를 통해 사용자가 *.jar* 파일의 출처를 알 수 있습니다. 예를 들어 *MyModule* 컴포넌트의 경우 `org.apache.commons.io-2.3.0.jar.MyModule.RequiredLib`가 됩니다.

  {{< figure src="/attachments/appstore/submit-content/userlibBlankFiles_boxed.jpg">}}

* 모듈의 Java Action이 올바르게 컴파일되는지 확인하십시오. 가장 쉬운 방법은 배포 패키지를 만드는 것입니다. 이렇게 하면 배포 폴더를 정리하고 앱을 다시 빌드합니다. 자세한 내용은 [Environments](/developerportal/deploy/environments/)를 참조하십시오.
* 레이아웃 사용을 줄이고 대신 스니펫을 사용하십시오. 이를 통해 모듈 종속성이 줄어들고, 누락된 레이아웃과 같은 잠재적 오류 수가 줄어듭니다.
* [사용자 역할](/refguide/user-roles/) 및 [보안](/refguide/security/)을 구현하십시오.
* 모듈을 포함하는 앱의 보안 수준이 *Production*으로 설정된 상태에서만 새 릴리스 또는 모듈 내보내기를 만드십시오.
* 페이지, Microflow, OData, Entity 및 데이터셋 액세스에 대해 [상태(status)](/refguide/app-security/#app-status)가 **Complete**여야 합니다.
* 다른 모듈로 복사할 예제 페이지와 Microflow의 경우, 문서에 대해 **Exclude from project** 옵션을 선택하십시오. 이는 복제를 장려하고 종속성 오류를 줄입니다.
* 새 버전을 만들 때 Entity 및 Attribute의 이름을 변경하지 마십시오. 이러한 Entity의 데이터가 손실됩니다. 기존 모듈 교체는 Entity 이름을 기반으로 합니다.
* 모듈에 영어를 포함해야 합니다.
