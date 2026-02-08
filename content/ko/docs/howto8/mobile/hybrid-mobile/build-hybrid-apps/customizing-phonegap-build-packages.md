---
title: "로컬 빌드 패키지 사용자 지정"
url: /howto8/mobile/customizing-phonegap-build-packages/
weight: 30
aliases:
    - /refguide8/customizing-phonegap-build-packages.html
    - /refguide8/customizing-phonegap-build-packages
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

{{% alert color="warning" %}}
클라우드에서 하이브리드 앱을 빌드하는 것은 Adobe의 PhoneGap Build 서비스를 사용합니다. Adobe가 더 이상 이 서비스를 유지 관리하지 않으므로, 클라우드에서 하이브리드 앱을 빌드하고 앱 스토어에 게시하는 것은 더 이상 불가능합니다.

하이브리드 앱을 빌드하고 게시하려면 로컬 빌드에 대한 정보를 위해 [Mendix 하이브리드 앱 로컬 빌드 방법](/howto8/mobile/build-hybrid-locally/)을 참조하십시오.

앱 스토어에 앱을 게시하려면 Mendix는 대신 네이티브 iOS 앱을 빌드하는 것을 권장합니다. 자세한 내용은 [네이티브 앱 빌드 방법](/howto8/mobile/build-native-apps/)을 참조하십시오.
{{% /alert %}}

## 로컬 빌드 패키지 다운로드 {#download-local-package}

로컬 빌드 패키지를 다운로드하려면 Mendix Portal을 통해 모바일 앱 스토어용으로 앱을 게시하십시오. **Build Mobile App Store Packages** 페이지에서 **How should the device packages be built?** 아래의 기본이 아닌 옵션 **I will manage the build process manually myself**를 선택하십시오. 녹색 버튼을 클릭하여 로컬 빌드 패키지를 다운로드하십시오. 

## 로컬 빌드 패키지 사용자 지정

사용 사례에 맞게 로컬 빌드 패키지를 사용자 지정할 수 있습니다. 필요에 따라 앱을 사용자 지정한 후 [Mendix 하이브리드 앱 로컬 빌드 방법](/howto8/mobile/build-hybrid-locally/)을 따라 Cordova CLI 또는 Xcode를 사용하여 앱을 로컬에서 빌드할 수 있습니다.
