---
title: "Distributing Native Apps"
url: /refguide9/mobile/distributing-mobile-apps/distributing-native-apps/
weight: 20
description: "This guide will help you distribute a mobile app to a mobile app store."
aliases:
    - /refguide9/managing-app-signing-keys/
---

## Introduction

To create a mobile app, you need platform-specific app signing keys. A mobile app is signed with a digital signature by its developers before publication. These signatures are used by both app stores and devices to verify that the app is authentic.

Depending on which platforms you want to target, you will need to create the required signing keys. The following sections describe (per platform) how to create those keys.

## iOS{#ios}

Unfortunately, signing keys are always required for iOS app deployment, even if you just want to test the app on your personal device and do not want to publish to the Apple App Store. This section describes how to create the required files.

It is convenient to have an Apple Mac available, but it is not a requirement. You do always need an Apple Developer Account.

### On Apple Macs

If you have an Apple Mac available, see the Apple developer documentation on [certificate management](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingCertificates/MaintainingCertificates.html) for information on how to obtain an iOS signing certificate and distribution profile. Next, see the Apple documentation on [how to create the required distribution profile](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingProfiles/MaintainingProfiles.html). 

### On Other Platforms

If you do not have an Apple Mac available, you can create a certificate signing request manually. First, create a private key and certificate signing request with the OpenSSL utility. 

{{% alert color="warning" %}}
**Do not use OpenSSL version 3.x on Windows**

If you use OpenSSL version 3.x on Windows and you get the error `Could not open certificate container. Wrong password or corrupted file. Please try again.`, please use the latest patch release of **version 1.x**, which can be downloaded here: [OpenSSL for Windows](https://slproweb.com/products/Win32OpenSSL.html).

Another option is to use OpenSSL from within the **Windows Subsystem for Linux** to generate the certificate. Use the instructions [Install Linux on Windows with WSL](https://learn.microsoft.com/en-us/windows/wsl/install) to set this up.
{{% /alert %}}

The following steps assume you have a Windows machine, but these are equally applicable to Linux machines, which usually have the OpenSSL package pre-installed.

To create a certificate signing request manually, follow these steps:

1. Download [OpenSSL for Windows](https://www.openssl.org/community/binaries.html) and install it. You just need to download and install the **Win32 OpenSSL Light** package (get the latest version at the top of the list).
    * If the setup process complains about a missing VC++ redistributable libraries package, cancel the installation, and first download and install the **Visual C++ 2008 Redistributables** from the same list of packages (you will be redirected to a Microsoft download page). Install OpenSSL to, for example, *C:\OpenSSL* (make note of this directory, as you will need it in step 3).
2. Open a command line interface (CLI) such as Command Prompt. On most systems, you need to do this as an administrator (right-click the Windows start menu link and select **Run as Administrator**).
3. Generate a private key with the OpenSSL program that you just installed. Replace `C:\OpenSSL` with where you installed OpenSSL in step 1. The private key file is stored at the location specified after the `-out` parameter. The following example will store the file in the root directory of your C: drive (you can change this to anything you want, just select a convenient place and keep track of where the file is stored): `"C:\OpenSSL\bin\openssl.exe" genrsa -out "C:\private.key" 2048`. The command will output "Generating RSA private key, 2048 bit long modulus" and lots of dots and plus signs.
4. Generate a certificate signing request (CSR). The file is again stored in the same folder, but can be placed anywhere. Make sure to point to the private key file that was created in the previous step: `"C:\OpenSSL\bin\openssl.exe" req -new -key "C:\private.key" -out "C:\ios.csr"`. The command will print some text and then ask you for several different pieces of information related to your identity. Only the **Common Name** is relevant. Fill in your own name, so that the certificate is easily recognized later on after uploading it to the Apple Developer Member Center.
5. Keep your CLI open.

The resulting *ios.csr* file must be uploaded to the Apple Developer Member Center to generate a signed certificate. Follow these steps to do that:

1. In the Apple Developer Member Center click [Create a New Certificate](https://developer.apple.com/account/resources/certificates/add).
2. Under **Software**, select **iOS App Development**.
3. Click **Continue** again. You are now at the **Create a New Certificate** step.
4. Under **Upload a Certificate Signing Request**, click **Choose File**.
5. Select the *ios.csr* certificate signing request file that you created.
6. Click **Continue**. Apple will sign your CSR and make the signed certificate available for download.
    * If you are presented with a message that says that your certificate signing request is pending approval, you do not have the required access rights. Ask your company account administrator to approve your certificate signing request.
7. Click **Download** and store the *.cer* file on your disk at a convenient place (for example, next to the private key and CSR files).
8. Click **Done**. The **iOS Certificates** overview page becomes visible again. Your new certificate should be in the list. Here, you can download it again, or you can revoke it (in case you lose the corresponding private key).

The downloaded *ios_development.cer* and *private.key* file must now be packaged:

1. Return to your CLI.
2. Convert the downloaded certificate to *pem* format with this command: `"C:\OpenSSL\bin\openssl.exe" x509 -in "C:\ios_development.cer" -inform der -out "C:\ios_development.pem"`.
3. Package your private key and certificate. The command will ask you for a password for the package: `"C:\OpenSSL\bin\openssl.exe" pkcs12 -export -inkey "C:\private.key" -in "C:\ios_development.pem" -out "C:\key_and_certificate.p12"`. The same password will be used later by the Mendix Native Mobile Builder.

The resulting *key_and_certificate.p12* will be used by the Mendix Native Mobile Builder to sign your apps.

### Creating the Required Distribution Profile

Once you have the certificate file, you need to obtain a distribution profile. The Apple Developer Member Center allows you to define an app identifier, a test device, and finally a distribution profile. For more information, check the Apple documentation on how to [maintain identifiers, devices and profiles](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingProfiles/MaintainingProfiles.html).

## Android{#android}

Android apps can be developed and deployed to Android devices without signing the apps. However, to publish to app stores, signed apps are required.

### Generating a Keystore {#generating-a-keystore}

To generate a keystore for Android, follow these steps:

1. Install Java JDK either for Mac or Windows. Remember where you installed your JDK, as the JDK bin folder will be used later.
2. Open your **Command Prompt** and run your new *keytool.exe* located in your JDK’s bin folder.
3. The *keytool.exe* program can be found in the bin directory of your Java installation (for example: *C:\Program Files\Java\jre1.8.0_20\bin*):

    {{< figure src="/attachments/refguide9/mobile/managing-app-signing-keys/cmdjdkexe.png" alt="keytool location" class="no-border" >}}

4. Type in the following command line prompt while still pointing to the *keystore.exe*: 

    ```powershell
    "{{keytool -genkey -v -keystore file.keystore -alias YOUR_ALIAS_NAME -storepass YOUR_ALIAS_PWD -keypass YOUR_ALIAS_PWD -keyalg RSA -validity 36500}}"
    ```

    Be sure to replace `YOUR_ALIAS_NAME` and `YOUR_ALIAS_PWD` with your alias name and password:

    {{< figure src="/attachments/refguide9/mobile/managing-app-signing-keys/ktoolsetup.png" alt="name and password" class="no-border" >}}

5. Answer the subsequent questions, click **Enter** after each question, and type *yes* when asked to confirm your information: 

    {{< figure src="/attachments/refguide9/mobile/managing-app-signing-keys/qanda.png" alt="info questions" class="no-border" >}}

6. Finishing these questions generates a keystore which will be saved into a *file.keystore* file in your current working directory. 
