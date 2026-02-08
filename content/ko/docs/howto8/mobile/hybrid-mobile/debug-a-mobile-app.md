---
title: "하이브리드 모바일 앱 디버그"
url: /howto8/mobile/debug-a-mobile-app/
weight: 40
description: "로컬 머신에서 모바일 앱을 실행하고 Mendix 도구를 사용하여 디버그하는 방법"
---

## 소개

Mendix에는 오프라인 및 온라인 디버거를 포함한 훌륭한 웹 애플리케이션 디버깅 도구가 있지만, 이러한 도구를 모바일 애플리케이션의 디버그 및 테스트에도 사용할 수 있다는 것을 많은 사람들이 모릅니다.

{{% alert color="warning" %}}
클라우드에서 하이브리드 앱을 빌드하는 것은 Adobe의 PhoneGap Build 서비스를 사용합니다. Adobe가 더 이상 이 서비스를 유지 관리하지 않으므로, 클라우드에서 하이브리드 앱을 빌드하고 앱 스토어에 게시하는 것은 더 이상 불가능합니다.

하이브리드 앱을 빌드하고 게시하려면 로컬 빌드에 대한 정보를 위해 [Mendix 하이브리드 앱 로컬 빌드 방법](/howto8/mobile/build-hybrid-locally/)을 참조하십시오.

앱 스토어에 앱을 게시하려면 Mendix는 대신 네이티브 iOS 앱을 빌드하는 것을 권장합니다. 자세한 내용은 [네이티브 앱 빌드 방법](/howto8/mobile/build-native-apps/)을 참조하십시오.
{{% /alert %}}

이 사용법 가이드에서는 다음을 수행하는 방법을 알려드립니다:

* 로컬 개발 머신에 연결되는 하이브리드 Mendix 모바일 앱 빌드 및 실행
* Mendix 디버깅 도구, Chrome DevTools 및 Safari Web Inspector를 사용하여 모바일 앱 디버그

## 사전 요구 사항

이 사용법 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* 디바이스와 컴퓨터 간의 연결을 확인하기 위해 모바일 디바이스에 네트워크 유틸리티 도구가 있는지 확인하십시오(Android에서는 [PingTools](https://play.google.com/store/apps/details?id=ua.com.streamsoft.pingtools), iOS에서는 [NetworkPing Lite](https://itunes.apple.com/us/app/network-ping-lite/id289967115?mt=8)를 사용합니다)
* 유료 Apple Developer Membership을 취득하십시오 — 자세한 내용은 [Apple Membership](https://developer.apple.com/support/membership/)을 참조하십시오

## Android 및 macOS {#AndroidMac}

이것은 모바일 대상 플랫폼과 개발 환경의 조합 중 가장 쉬운 구성입니다.

### macOS 구성

Mendix Studio Pro는 Windows에서만 실행되므로, 가상(Windows) 머신이 외부 세계에서 접근할 수 있도록 해야 합니다. 이를 위해 네트워크 설정을 가상 머신과 Mac 간에 공유하고 적절한 포트를 포워딩해야 합니다. Parallels를 사용하여 개발 환경을 구성하려면 다음 단계를 따르십시오:

1. Parallels **Configure** 대화 상자를 여십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/mac-1.png" alt="mac-1" class="no-border" >}}

2. **Hardware** 탭으로 이동하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/mac-1b.png" alt="mac-1b" class="no-border" >}}

3. **Network 1**의 **Source**가 **Shared Network**으로 설정되어 있는지 확인하십시오. 잠금을 클릭하여 변경하십시오.

4. Parallels **Preferences** 대화 상자 창을 여십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/mac-3-1163108.png" alt="mac-3" class="no-border" >}}

5. **Network** 탭으로 이동하십시오.
6. **Connect Mac to this network** 옵션이 선택되어 있는지 확인하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/mac-3b-1163119.png" alt="mac-3b" class="no-border" >}}

7. 페이지 하단의 **+** 버튼을 클릭하여 다음 설정으로 새 Port Forwarding Rule을 추가하십시오:
    * Protocol: *TCP*
    * Source Port: *8080*
    * Forward to: *Win10*
    * Destination Port: *8080*

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/mac-4-1163092.png" alt="mac-4" class="no-border" >}}

8. 이번에는 포트 *8090*을 포워딩하는 또 다른 규칙을 추가하십시오.
9. Mendix 앱을 로컬에서 시작하고 모바일 디바이스가 개발 머신에 ping할 수 있는지 확인하십시오.
10. **settings > network**로 이동하여 네트워크에서 개발 머신의 로컬 IP를 찾으십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/mac-6-1163082.png" alt="mac-6" class="no-border" >}}

11. 디바이스가 이 주소에 ping할 수 있는지 확인하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/win-2.png" alt="win-2" class="no-border" >}}

### PhoneGap 구성

PhoneGap Build를 사용하여 네이티브 모바일 애플리케이션을 빌드하고 기본값 대신 이 새 URL을 기반으로 초기화하도록 할 수 있습니다. 패키지를 다운로드하고, 업데이트하고, PhoneGap Build에 업로드하려면 다음 단계를 따르십시오:

1. home.mendix.com으로 이동하여 앱을 여십시오.
1. **Mobile App** 페이지로 이동하십시오.
1. 이 페이지를 정상적으로 구성한 다음 **Publish for Mobile App Stores**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-1.png" alt="phonegap-1" class="no-border" >}}

1. **Do it Yourself**를 선택한 다음 **Download Customizable Package**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-3.png" alt="phonegap-3" class="no-border" >}}

1. 다운로드한 패키지를 압축 해제하고 `/dist/` 폴더로 이동하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-4.png" alt="phonegap-4" class="no-border" >}}

1. **phonegap.zip** 파일의 내용을 압축 해제하고 *www/settings.json* 파일을 여십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-5.png" alt="phonegap-5" class="no-border" >}}

1. `url` 속성을 로컬 머신의 IP 주소(포트 8080 포함)로 변경하십시오.

    ```json
    {
      "url": "http://10.140.149.92:8080",
      "hybridTabletProfile": "",
      "hybridPhoneProfile":  "",
      "enableOffline": false,
      "requirePin": false
    }
    ```

1. 변경 사항을 저장하고 방금 압축 해제한 **phonegap.zip** 파일을 다시 압축하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-7.png" alt="phonegap-7" class="no-border" >}}

1. 새 zip 파일을 PhoneGap Build의 새 앱에 업로드하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-8.png" alt="phonegap-8" class="no-border" >}}

1. 클라우드에서 앱 빌드가 완료되면 다운로드하여 실행하면 로컬 머신에서 실행 중인 Mendix 앱에 연결됩니다.

### Android 구성

1. Android 디바이스에서 개발자 옵션을 활성화하십시오. 자세한 내용은 [Configure On-Device Developer Options](https://developer.android.com/studio/debug/dev-options)를 참조하십시오.
2. 디바이스를 개발 머신에 연결하고 모바일 디바이스에 USB 디버깅을 허용하는 팝업 창이 나타나면 **Allow**를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/android-2.png" alt="android-2" class="no-border" >}}

3. **Chrome** 브라우저를 여십시오.
4. **Chrome Developer Tools (F12)**를 여십시오.
5. **Customize and control DevTools** ({{% icon name="three-dots-menu-vertical" %}})를 클릭하고 **More tools** > **Remote devices**를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/android-3.png" alt="android-3" class="no-border" >}}

6. 목록에서 디바이스를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/android-4.png" alt="android-4" class="no-border" >}}

7. 모바일 디바이스의 탭을 검사하여 화면에서 디바이스의 뷰를 미리 보고 Chrome 웹 검사기와 나머지 개발자 도구에 접근하십시오.

이제 오프라인 중단점, 빠른 업데이트/새로고침, Chrome Developer Tools를 포함하여 Mendix에서 알고 사랑하는 모든 디버깅 도구를 활용할 수 있습니다.

## iOS 및 macOS {#iosAndMac}

### Apple Developer 구성

Mendix iOS 앱을 빌드(및 디버그)하려면 Apple Developer Account에서 올바른 설정이 되어 있는지 확인해야 합니다. 디바이스 ID와 서명 인증서가 포함된 Developer Provisioning Profile이 필요합니다. 이미 iOS Development 프로비저닝 프로필이 있는 경우 [5.2 PhoneGap 구성](#PhonegapConfiguration)을 계속 진행할 수 있습니다. iOS 프로비저닝 프로필을 설정하려면 다음 단계를 따르십시오:

1. [developer.apple.com](https://developer.apple.com/)으로 이동하여 계정에 로그인하십시오.
1. 왼쪽 탐색에서 **Certificates, IDs & Profiles**를 클릭하십시오.
1. `+` 버튼을 클릭하여 새 인증서를 생성하십시오.
1. **iOS Development**를 선택하고 **Continue**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-5.png" alt="apple-5" class="no-border" >}}

1. Certificate Signing Request(CSR) 생성 지침을 따르고 **Continue**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-6.png" alt="apple-6" class="no-border" >}}

1. 새 CSR을 업로드하고 **Continue**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-7.png" alt="apple-7" class="no-border" >}}

1. 새 인증서를 다운로드하고 **Done**을 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-8.png" alt="apple-8" class="no-border" >}}

1. Mac에서 **Keychain Access**를 열고 **File** 메뉴에서 **Import Items…**를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-9.png" alt="apple-9" class="no-border" >}}

1. 새 인증서를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-10.png" alt="apple-10" class="no-border" >}}

1. 인증서 목록에서 인증서를 마우스 오른쪽 버튼으로 클릭하고 **Export**를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-11.png" alt="apple-11" class="no-border" >}}

1. **.p12** 파일로 저장하고 나중에 사용하기 위해 기억하십시오. Phonegap 애플리케이션을 빌드하는 데 필요합니다:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-12.png" alt="apple-12" class="no-border" >}}

1. **Certificates, Identifiers & Profiles** 페이지로 돌아가십시오.
1. **Identifiers** 아래의 **App IDs** 페이지로 이동하십시오.
1. `+` 버튼을 클릭하여 새 **App ID**를 생성하십시오.
1. **App ID Description**과 **Explicit App ID**를 입력하고 앱에 필요한 Apple 서비스를 선택한 다음 **Continue**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-15.png" alt="apple-15" class="no-border" >}}

1. **Register**를 클릭한 다음 **Done**을 클릭하십시오.
1. iOS 디바이스를 연결하고 **iTunes**를 여십시오.
1. iTunes에서 디바이스 개요로 이동하고 시리얼 번호가 나열된 곳을 클릭하여 UDID를 표시하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-18.png" alt="apple-18" class="no-border" >}}

1. UDID가 보이면 마우스 오른쪽 버튼으로 클릭하고 **Copy**를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-19.png" alt="apple-19" class="no-border" >}}

1. **Certificates, Identifiers & Profiles** 페이지로 돌아가서 **Devices** 아래의 **All** 페이지로 이동하십시오.
1. `+` 버튼을 클릭하여 새 디바이스를 추가하십시오.
1. 디바이스 이름을 입력하고 UDID를 붙여넣으십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-21.png" alt="apple-21" class="no-border" >}}

1. **Provisioning Profiles** 아래의 **All**로 이동하십시오.
1. `+` 버튼을 클릭하여 새 Provisioning Profile을 생성하십시오.
1. **iOS App Development**를 선택하고 **Continue**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-23.png" alt="apple-23" class="no-border" >}}

1. 드롭다운에서 새 **App ID**를 선택하고 **Continue**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-24.png" alt="apple-24" class="no-border" >}}

1. 새 Certificate를 선택하고 **Continue**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-25.png" alt="apple-25" class="no-border" >}}

1. 앱을 테스트할 디바이스를 선택하고 **Continue**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-26.png" alt="apple-26" class="no-border" >}}

1. 새 Provisioning Profile에 이름을 지정하고 **Continue**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-27.png" alt="apple-27" class="no-border" >}}

1. Provisioning Profile을 다운로드하십시오(Phonegap에 필요합니다).

### Phonegap 구성 {#PhonegapConfiguration}

PhoneGap Build를 사용하여 네이티브 모바일 애플리케이션을 빌드하고 기본값 대신 이 새 URL을 기반으로 초기화하도록 할 수 있습니다. PhoneGap Build를 변경하려면 다음 단계를 따르십시오

1. **home.mendix.com**으로 이동하여 앱을 여십시오.
2. Deploy 아래에 나열된 **Mobile App** 페이지로 이동하십시오.
3. 이 페이지를 정상적으로 구성하고 **Publish for Mobile App Stores**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-1.png" alt="phonegap-1" class="no-border" >}}

4. **Do it Yourself**를 선택하고 **Download Customizable Package**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-3.png" alt="phonegap-3" class="no-border" >}}

5. 다운로드한 패키지의 압축을 풀고 */dist/phonegap.zip* 파일로 이동하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-4.png" alt="phonegap-4" class="no-border" >}}

6. 이 파일의 내용을 압축 해제하고 *www/settings.json*을 찾으십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-5.png" alt="phonegap-5" class="no-border" >}}

7. `url` 속성을 로컬 머신의 IP 주소(포트 8080 포함)로 변경하십시오.

    ```json
    {
      "url": "http://10.140.149.92:8080",
      "hybridTabletProfile": "",
      "hybridPhoneProfile":  "",
      "enableOffline": false,
      "requirePin": false
    }
    ```

8. 변경 사항을 저장하고 */dist/*에서 *phonegap* 디렉토리를 다시 압축하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-7.png" alt="phonegap-7" class="no-border" >}}

9. 새 zip 파일을 Phonegap Build의 새 앱에 업로드하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-8.png" alt="phonegap-8" class="no-border" >}}

10. 계정 메뉴에서 **Edit Account**로 이동하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-9.png" alt="phonegap-9" class="no-border" >}}

11. **Signing Keys** 탭에서 **iOS** 아래의 **Add a Key**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-10.png" alt="phonegap-10" class="no-border" >}}

12. Apple Developer 구성 섹션의 12단계에서 가져온 .p12 인증서와 새 프로비저닝 프로필을 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-11.png" alt="phonegap-11" class="no-border" >}}

13. 자물쇠를 클릭하여 키를 일시적으로 잠금 해제하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-12.png" alt="phonegap-12" class="no-border" >}}

14. 온라인 앱으로 돌아가서 드롭다운에서 새 키를 선택하십시오. 이렇게 하면 앱의 새 빌드가 트리거됩니다:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-13.png" alt="phonegap-13" class="no-border" >}}

15. 클라우드에서 앱 빌드가 완료되면 QR 코드를 스캔하여 iOS 디바이스에서 앱을 다운로드하고 실행하십시오.

### iOS 구성

1. iOS 디바이스에서 **Settings > Safari**로 이동하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/ios-1.png" alt="ios-1" class="no-border" >}}

2. **Advanced**를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/ios-2.png" alt="ios-2" class="no-border" >}}

3. **Web Inspector**가 켜져 있는지 확인하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/ios-3.png" alt="ios-3" class="no-border" >}}

4. iPhone이 개발 머신에 ping할 수 있는지 확인하십시오(아직 확인하지 않은 경우):

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/ios-4.png" alt="ios-4" class="no-border" >}}

5. iOS 디바이스에서 실행 중인 Mendix 앱으로 돌아가십시오.
6. Mac에서 Safari를 여십시오.
7. 메뉴 바에 **Develop** 옵션이 없으면 **Safari > Preferences**를 여십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/ios-6.png" alt="ios-6" class="no-border" >}}

8. **Advanced** 탭에서 **Show Develop Menu in menu bar**가 선택되어 있는지 확인하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/ios-7.png" alt="ios-7" class="no-border" >}}

9. Develop 메뉴에서 디바이스와 실행 중인 애플리케이션을 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/ios-8.png" alt="ios-8" class="no-border" >}}

10. 디바이스의 **Safari Web Inspector**가 열립니다.

## Android + Windows {#AndroidAndWindows}

### Windows 구성

컴퓨터와 디바이스 간의 연결을 테스트하려면 다음 단계를 따르십시오:

1. 명령 프롬프트를 열고 `ipconfig /all`을 입력하여 무선 어댑터의 IPv4 주소를 찾으십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/win-1.png" alt="win-1" class="no-border" >}}

2. 디바이스가 이 주소에 ping할 수 있는지 확인하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/win-2-1162756.png" alt="win-2" class="no-border" >}}

### PhoneGap 구성

PhoneGap Build를 사용하여 네이티브 모바일 애플리케이션을 빌드하고 기본값 대신 이 새 URL을 기반으로 초기화하도록 할 수 있습니다. 새 구성을 생성하려면 다음 단계를 따르십시오:

1. **home.mendix.com**으로 이동하여 앱을 여십시오.
2. Deploy 아래의 **Mobile App** 페이지로 이동하십시오.
3. 이 페이지를 정상적으로 구성한 다음 **Publish for Mobile App Stores**를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-1.png" alt="phonegap-1" class="no-border" >}}

4. **Do it Yourself**를 선택한 다음 **Download Customizable Package**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-3.png" alt="phonegap-3" class="no-border" >}}

5. 다운로드한 패키지의 압축을 풀고 */dist/phonegap.zip* 파일로 이동하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-4-1162839.png" alt="phonegap-4" class="no-border" >}}

6. 이 파일의 내용을 압축 해제하고 *www/settings.json*을 찾으십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-5-1162847.png" alt="phonegap-5" class="no-border" >}}

7. `url` 속성을 로컬 머신의 IP 주소(포트 8080 포함)로 변경하십시오.

    ```json
    {
      "url": "http://10.140.149.92:8080",
      "hybridTabletProfile": "",
      "hybridPhoneProfile":  "",
      "enableOffline": false,
      "requirePin": false
    }
    ```

8. 변경 사항을 저장하고 `/dist/`에서 `phonegap/` 디렉토리를 다시 압축하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-7-1162855.png" alt="phonegap-7" class="no-border" >}}

9. 새 zip 파일을 Phonegap Build의 새 앱에 업로드하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-8.png" alt="phonegap-8" class="no-border" >}}

10. 클라우드에서 앱 빌드가 완료되면 앱을 다운로드하여 실행하면 로컬 머신에서 실행 중인 Mendix 앱에 연결됩니다!

### Android 구성

1. Android 디바이스에서 개발자 옵션을 활성화하십시오. 자세한 내용은 [Configure On-Device Developer Options](https://developer.android.com/studio/debug/dev-options)를 참조하십시오.
2. 디바이스를 개발 머신에 연결하고 모바일 디바이스에 USB 디버깅을 허용하는 팝업이 나타나면 **Allow**를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/android-2.png" alt="android-2" class="no-border" >}}

3. **Chrome** 브라우저를 여십시오.
4. **Chrome Developer Tools (F12)**를 여십시오.
5. **Customize and control DevTools** ({{% icon name="three-dots-menu-vertical" %}})를 클릭하고 **More tools** > **Remote devices**를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/android-3.png" alt="android-3" class="no-border" >}}

6. 목록에서 디바이스를 선택하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/android-4.png" alt="android-4" class="no-border" >}}

7. 모바일 디바이스의 탭을 검사하여 화면에서 디바이스의 뷰를 미리 보고 Chrome 웹 검사기와 나머지 개발자 도구에 접근하십시오.

이제 오프라인 중단점, 빠른 업데이트/새로고침, Chrome Developer Tools를 포함하여 Mendix에서 알고 사랑하는 모든 디버깅 도구를 활용할 수 있습니다.

Android 원격 디버깅에 대한 자세한 도움말은 [Get Started with Remote Debugging Android Devices](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/)를 확인하십시오.

## 추가 읽기

* [Microflow 디버그](/howto8/monitoring-troubleshooting/debug-microflows/)
* [Java Actions 디버그](/howto8/monitoring-troubleshooting/debug-java-actions/)
* [모바일 앱 스토어에 Mendix 하이브리드 모바일 앱 게시](/howto8/mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/)
