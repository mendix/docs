---
title: "앱 서명 키 관리"
url: /refguide8/managing-app-signing-keys/
weight: 21
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

모바일 앱을 만들려면 플랫폼별 앱 서명 키가 필요합니다. 모바일 앱은 게시 전에 개발자에 의해 디지털 서명으로 서명됩니다. 이러한 서명은 앱 스토어와 디바이스 모두에서 앱의 진위 여부를 확인하는 데 사용됩니다.

대상으로 하는 플랫폼에 따라 필요한 서명 키를 생성해야 합니다. 다음 섹션에서는 플랫폼별로 이러한 키를 생성하는 방법을 설명합니다.

{{% alert color="warning" %}} 클라우드에서 하이브리드 앱을 빌드하는 것은 Adobe의 PhoneGap Build 서비스를 사용합니다. Adobe가 더 이상 이 서비스를 유지관리하지 않기 때문에 클라우드에서 하이브리드 앱을 빌드하고 앱 스토어에 게시하는 것은 더 이상 불가능합니다.

PhoneGap Build를 언급하는 이 문서의 부분은 곧 새로운 지침으로 업데이트될 예정입니다. {{% /alert %}}

## iOS{#ios}

안타깝게도, 개인 디바이스에서 앱을 테스트하기만 하고 Apple App Store에 게시할 의도가 없더라도 iOS 앱 배포에는 항상 서명 키가 필요합니다. 이 섹션에서는 필요한 파일을 생성하는 방법을 설명합니다.

Apple Mac이 있으면 편리하지만 필수 사항은 아닙니다. 항상 Apple Developer Account가 필요합니다.

### Apple Mac에서

Apple Mac이 있는 경우, iOS 서명 인증서 및 배포 프로필을 얻는 방법에 대한 Apple 개발자 문서의 [인증서 관리](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingCertificates/MaintainingCertificates.html)를 참조하십시오. 다음으로 [필요한 배포 프로필을 생성하는 방법](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingProfiles/MaintainingProfiles.html)에 대한 Apple 문서를 참조하십시오. 마지막으로, 이 섹션 끝에서 [Adobe PhoneGap Build에 서명 키 파일을 업로드하는 방법](/refguide8/managing-app-signing-keys/#uploading-keys)에 대한 정보를 확인하십시오.

### 기타 플랫폼에서

Apple Mac이 없는 경우, 인증서 서명 요청을 수동으로 생성할 수 있습니다. 먼저 OpenSSL 유틸리티를 사용하여 개인 키와 인증서 서명 요청을 생성하십시오. OpenSSL에 대한 자세한 내용은 다음 리소스를 참조하십시오:

* [OpenSSL 문서](https://www.openssl.org/docs/manmaster/man1/openssl.html)
* [Windows에서 WSL로 Linux 설치](https://learn.microsoft.com/en-us/windows/wsl/install)

다음 단계는 Windows 머신을 가정하지만 일반적으로 OpenSSL 패키지가 사전 설치된 Linux 머신에도 동일하게 적용됩니다.

인증서 서명 요청을 수동으로 생성하려면 다음 단계를 따르십시오:

1. LTS [OpenSSL for Windows](https://slproweb.com/products/Win32OpenSSL.html)를 다운로드하고 설치하십시오. **Win64 OpenSSL Light** 패키지만 다운로드하고 설치하면 됩니다(목록 상단의 최신 버전을 가져오십시오).
    * 설치 과정에서 VC++ 재배포 가능 라이브러리 패키지가 없다는 메시지가 나타나면 설치를 취소하고, 먼저 동일한 패키지 목록에서 **Visual C++ 2008 Redistributables**를 다운로드하여 설치하십시오(Microsoft 다운로드 페이지로 리디렉션됩니다). OpenSSL을 예를 들어 *C:\OpenSSL*에 설치하십시오(3단계에서 이 디렉토리가 필요하므로 기록해 두십시오).
2. 명령 프롬프트와 같은 CLI(명령줄 인터페이스)를 여십시오. 대부분의 시스템에서 관리자 권한으로 실행해야 합니다(Windows 시작 메뉴 링크를 마우스 오른쪽 버튼으로 클릭하고 **관리자 권한으로 실행**을 선택).
3. 방금 설치한 OpenSSL 프로그램으로 개인 키를 생성하십시오. `C:\OpenSSL`을 1단계에서 OpenSSL을 설치한 위치로 바꾸십시오. 개인 키 파일은 `-out` 매개변수 뒤에 지정된 위치에 저장됩니다. 다음 예시는 C: 드라이브의 루트 디렉토리에 파일을 저장합니다(원하는 위치로 변경할 수 있으며, 편리한 위치를 선택하고 파일이 저장된 위치를 추적하십시오): `"C:\OpenSSL\bin\openssl.exe" genrsa -out "C:\private.key" 2048`. 명령은 "Generating RSA private key, 2048 bit long modulus"와 많은 점과 더하기 기호를 출력합니다.
4. 인증서 서명 요청(CSR)을 생성하십시오. 파일은 동일한 폴더에 저장되지만 어디에나 배치할 수 있습니다. 이전 단계에서 생성된 개인 키 파일을 가리키십시오: `"C:\OpenSSL\bin\openssl.exe" req -new -key "C:\private.key" -out "C:\ios.csr"`. 명령은 일부 텍스트를 출력한 다음 신원과 관련된 여러 정보를 요청합니다. **Common Name**만 관련이 있습니다. Apple Developer Member Center에 업로드한 후 나중에 인증서를 쉽게 인식할 수 있도록 자신의 이름을 입력하십시오.

생성된 *ios.csr* 파일은 서명된 인증서를 생성하기 위해 Apple Developer Member Center에 업로드해야 합니다. 다음 단계를 따르십시오:

1. [Apple Developer Member Center](https://developer.apple.com/account/overview.action)를 여십시오.
2. **iOS, tvOS, watchOS** 아래에서 **Certificates, All**을 클릭하십시오.
3. **iOS Certificates** 개요에서 오른쪽 상단의 더하기 버튼을 클릭하십시오. "What type of certificate do you need?" 캡션이 있는 **Select Type** 단계에서 **Add iOS Certificate** 마법사가 열립니다.
    * 더하기 버튼이 비활성화(회색)되어 있으면 충분한 권한이 없습니다. 회사 계정 관리자에게 추가 권한을 요청하십시오.
4. **Development** 아래에서 **iOS Development Certificate**를 선택하십시오.
5. **Continue**를 클릭하십시오. 이제 **About Creating a Certificate Signing Request (CSR)** 단계에 있습니다. 이 페이지는 Mac에서 인증서 서명 요청을 생성하는 방법을 설명합니다. 무시해도 됩니다.
6. **Continue**를 다시 클릭하십시오. 이제 **Generate your certificate** 캡션이 있는 **Generate** 단계에 있습니다.
7. **Upload CSR file** 아래에서 **Choose File ...**을 클릭하십시오.
8. 생성한 *ios.csr* 인증서 서명 요청 파일을 선택하십시오.
9. **Continue**를 클릭하십시오. Apple이 CSR에 서명하고 서명된 인증서를 다운로드할 수 있도록 합니다.
    * 인증서 서명 요청이 승인 대기 중이라는 메시지가 표시되면 충분한 권한이 없습니다. 회사 계정 관리자에게 인증서 서명 요청을 승인해 달라고 요청하십시오.
10. **Download**를 클릭하고 *.cer* 파일을 편리한 위치(예: 개인 키 및 CSR 파일 옆)에 저장하십시오.
11. **Done**을 클릭하십시오. **iOS Certificates** 개요 페이지가 다시 표시됩니다. 새 인증서가 목록에 있어야 합니다. 여기에서 다시 다운로드하거나 취소할 수 있습니다(해당 개인 키를 분실한 경우).

### 필요한 배포 프로필 생성

인증서 파일이 있으면 배포 프로필을 얻어야 합니다. Apple Developer Member Center에서 앱 식별자, 테스트 디바이스, 그리고 최종적으로 배포 프로필을 정의할 수 있습니다. 자세한 내용은 [식별자, 디바이스 및 프로필 유지관리](https://developer.apple.com/help/account/configure-app-capabilities/create-order-type-identifiers-and-certificates/) 방법에 대한 Apple 문서를 확인하십시오.

### Adobe PhoneGap Build에 키 업로드 {#uploading-keys}

서명 인증서(*.cer* 파일)를 다운로드한 후에는 서명 인증서를 *.cer*에서 *.p12*로 변환해야 합니다. 다음 단계에서 OpenSSL을 사용하십시오:

1. 서명 인증서에서 PEM 형식을 생성하십시오: `"C:\OpenSSL\bin\openssl.exe" x509 -in "C:\ios.cer" -inform DER -out "C:\ios_pem.pem" -outform PEM`.
2. PEM 인증서에서 비밀번호로 보호된 파일을 생성하십시오. 이 작업에는 PEM 인증서, 앞서 3단계에서 생성된 개인 키, 그리고 *ios.csr* 생성 시 부여된 비밀번호가 필요합니다: `"C:\OpenSSL\bin\openssl.exe" pkcs12 -export -out "C:\ios.p12" -inkey "C:\private.key" -in "C:\ios_pem.pem"`.
3. 서명 인증서(이제 `.p12` 파일)와 배포 프로필(`.mobileprovision` 파일)을 [계정 페이지](https://helpx.adobe.com/experience-manager/kb/adobe-phonegap-end-of-service.html)에서 Adobe PhoneGap Build에 업로드할 수 있습니다. **Signing Keys** 탭으로 이동하여 **iOS** 아래의 **Add a key**를 클릭하십시오. 두 파일을 선택하고 키에 이름을 부여하십시오. 키 오른쪽의 노란색 잠금 아이콘을 클릭하고 인증서 비밀번호를 입력하여 키를 잠금 해제하십시오. 이제 키가 빌드 작업에 사용할 준비가 되었습니다.

## Android{#android}

Android 앱은 앱에 서명하지 않고도 개발하여 Android 디바이스에 배포할 수 있습니다. 그러나 앱 스토어에 게시하려면 서명된 앱이 필요합니다. 이를 위해 키스토어를 생성한 다음 Adobe PhoneGap Build에 업로드해야 합니다.

### 키스토어 생성 {#generating-a-keystore}

Android용 키스토어를 생성하려면 다음 단계를 따르십시오:

1. Mac 또는 Windows용 Java JDK를 설치하십시오. JDK bin 폴더는 나중에 사용되므로 JDK를 설치한 위치를 기억하십시오.
2. **명령 프롬프트**를 열고 JDK의 bin 폴더에 있는 새 *keytool.exe*를 실행하십시오.
3. *keytool.exe* 프로그램은 Java 설치의 bin 디렉토리에 있습니다(예: *C:\Program Files\Java\jre1.8.0_20\bin*):

    {{< figure src="/attachments/refguide8/mobile/managing-app-signing-keys/cmdjdkexe.png" alt="keytool location" class="no-border" >}}

4. *keystore.exe*를 가리키는 상태에서 다음 명령줄 프롬프트를 입력하십시오:

    ```text
    "{{keytool -genkey -v -keystore file.keystore -alias YOUR_ALIAS_NAME -storepass YOUR_ALIAS_PWD -keypass YOUR_ALIAS_PWD -keyalg RSA -validity 36500}}"
    ```

    `YOUR_ALIAS_NAME`과 `YOUR_ALIAS_PWD`를 자신의 별칭 이름과 비밀번호로 바꾸십시오:

    {{< figure src="/attachments/refguide8/mobile/managing-app-signing-keys/ktoolsetup.png" alt="name and password" class="no-border" >}}

5. 후속 질문에 답하고, 각 질문 후 **Enter**를 클릭하며, 정보를 확인하라는 요청 시 *yes*를 입력하십시오:

    {{< figure src="/attachments/refguide8/mobile/managing-app-signing-keys/qanda.png" alt="info questions" class="no-border" >}}

6. 이러한 질문을 완료하면 현재 작업 디렉토리에 *file.keystore* 파일로 저장되는 키스토어가 생성됩니다.

### PhoneGap Build에 키스토어 업로드

키스토어 파일을 생성한 후 [계정 페이지](https://helpx.adobe.com/experience-manager/kb/adobe-phonegap-end-of-service.html)에서 Adobe PhoneGap Build에 업로드하십시오. 그런 다음 다음 지침을 완료하십시오:

1. **Signing Keys** 탭으로 이동하여 **Android** 아래의 **Add a key**를 클릭하십시오.
2. 키스토어 파일을 선택하고, 키의 제목을 입력하며, 이전 단계에서 기록한 별칭을 입력하십시오.
3. 키스토어 파일을 업로드한 후 키를 잠금 해제하십시오. 키 오른쪽의 노란색 잠금 아이콘을 클릭하고 키스토어와 키 비밀번호를 모두 입력하십시오. 이제 키가 빌드 작업에 사용할 준비가 되었습니다.
4. [Apps](https://sprintr.home.mendix.com/)에서 **Deploy** > **Mobile app**으로 이동하고 **Publish for Mobile App Stores** 버튼을 클릭하십시오. 그런 다음 **Start PhoneGap Build job** 버튼을 클릭하십시오.
