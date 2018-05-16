---
title: "Managing App Signing Keys"
category: "Mobile"
---


To create any mobile apps, you need platform-specific app signing keys. Mobile apps are signed with a digital signature by their developers before publication. These signatures are used by both app stores and devices to verify that apps are authentic.

Depending on which platforms you want to target, you will need to create the required signing keys. The following sections describe, per platform, how to create those keys.

*   [iOS](managing-app-signing-keys)
*   [Android](managing-app-signing-keys)

## iOS

Unfortunately, signing keys are always required for iOS app deployment, even if you just want to test the app on your personal device, and do not want to publish to the Apple App Store yet. This section describes how to create the required files.

It is convenient to have an Apple Mac available, however, that is not a requirement. You do always need an Apple Developer Account.

### On Apple Macs

If you have an Apple Mac available, see the Apple developer documentation on [certificate management](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingCertificates/MaintainingCertificates.html) for information on how to obtain an iOS signing certificate and distribution profile. Afterwards, see the Apple documentation on [how to create the required distribution profile](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingProfiles/MaintainingProfiles.html). Finally, check the end of this section for information on [how to upload the signing key files to Adobe PhoneGap Build](managing-app-signing-keys).

### On other platforms

If you do not have an Apple Mac available, you can create a certificate signing request manually.First, create a private key and certificate signing request with the OpenSSL utilty (the following assumes you have a Windows machine, but this is equally applicable to Linux machines, which usually have the openssl package pre-installed):

1.  [Download openssl for windows](https://www.openssl.org/community/binaries.html) and install it. You just need to download and install the "Win32 OpenSSL Light" package (get the latest version at the top of the list).
    *   If the setup process complains about a missing VC++ redistributable libraries package, cancel the installation, and first download and install the "Visual C++ 2008 Redistributables" from the same list of packages (you will be redirected to a Microsoft download page). Install OpenSSL to e.g. "C:\OpenSSL" - make note of this directory, you will need it in step 3.
2.  Open a command prompt. On most systems, you need to do this as Administrator (right-click the Windows Start Menu link and select "Run as Administrator").
3.  Generate a private key with the openssl program that you just installed. Replace the "C:\OpenSSL" part with where you installed OpenSSL in step 1. The private key file is stored at the location specified after the "-out" parameter. The following example will store the file in the root directory of your C: drive. You can change this to anything you want, just choose a convenient place and make sure to keep track of where the file is stored.

    `    "C:\OpenSSL\bin\openssl.exe" genrsa -out "C:\private.key" 2048`
    The command will output, among others, "Generating RSA private key, 2048 bit long modulus" and lots of dots and pluses.
4.  Generate a certificate signing request (CSR). The file is again stored in the same folder, but can be placed anywhere. Make sure to point to the private key file that was created in the previous step:

    `    "C:\OpenSSL\bin\openssl.exe" req -new -key "C:\private.key" -out "C:\ios.csr"`

    The command will print some text and then ask you for several different pieces of information related to your identity. Only the Common Name is relevant. Fill in your own name, so that the certificate is easily recognized later on after uploading it to the Apple Developer Member Center.

The resulting "ios.csr" file must be uploaded to the Apple Developer Member Center to generate a signed certificate.

1.  Open the [Apple Developer Member Center](https://developer.apple.com/account/overview.action).
2.  Under "iOS Apps", click "Certificates".
3.  In the "iOS Certificates" overview, click the 'plus' button on the top right. This will open the "Add iOS Certificate" wizard, in the "Select Type" step with caption "What type of certificate do you need?".
    *   If the 'plus' button is disabled (greyed out), you do not have enough rights. Ask the company account administrator to give you extra rights.
4.  Under "Development", choose "iOS Development Certificate".
5.  Click "Continue". You are now at step "Request". This page describes how to create a certificate signing request on Macs. You can ignore it.
6.  Click "Continue" again. You are now at step "Generate", captioned "Generate your certificate".
7.  Under "Upload CSR file", click "Choose File ...".
8.  Select the "ios.csr" certificate signing request file that you created.
9.  Click "Generate". Apple will sign your CSR and make the signed certificate available for download.
    *   If you are presented with a message that says that your certificate signing request is pending approval, you do not have enough rights. Ask the company account administrator to approve your certificate signing request.
10.  Click "Download" and store the ".cer" file on your disk at a convenient place, e.g. next to the private key and CSR files.
11.  Click "Done". The "iOS Certificates" overview page becomes visible again. Your new certificate should be in the list. Here, you can download it again, or you can revoke it (in case you lose the corresponding private key).

### Creating the required distribution profile

Once you have the certificate file, you need to obtain a distribution profile. The Apple Developer Member Center allows you to define an app identifier, a test device, and finally a distribution profile. Check the Apple documentation on [how to maintain identifiers, devices and profiles](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingProfiles/MaintainingProfiles.html).

### Uploading the key to Adobe PhoneGap Build

Once you have downloaded the signing certificate (a `.cer` file), you need to convert signing certificate from a .cer to a .p12. Use openssl program in 2 steps.
1. Create from the signing certificate a PEM format:
`    "C:\OpenSSL\bin\openssl.exe" x509 -in "C:\ios.cer" -inform DER -out "C:\ios_pem.pem" -outform PEM`
2. Create from the PEM certificate a password secured. This action requires the PEM certificate, the private key that was created in step 3 earlier and the password thas was given on the creation of the ios.csr.
`    "C:\OpenSSL\bin\openssl.exe" pkcs12 -export -out "C:\ios.p12" -inkey "C:\private.key" -in "C:\ios_pem.pem"`
Then you can upload the signing certificate (now a `.p12` file) and the distribution profile (a `.mobileprovision` file) to Adobe PhoneGap Build on your [account page](https://build.phonegap.com/people/edit). Go to tab "Signing Keys" and click "add a key ..." under "iOS". Select the two files and give the key a name. Unlock the key by clicking the yellow lock icon on the right of the key and filling in the certificate passphrase. The key is now ready to be used by your build job.

## Android

Android apps can be developed and deployed to Android devices without signing the apps. However, to publish to app stores, signed apps are required. The Android developer documentation on [app signing](http://developer.android.com/tools/publishing/app-signing.html) contains the information you need. Follow step 1 of "Signing Your App Manually" to obtain a key store with key. Make note of the alias, the key store password and the key password.

*   The "keytool.exe" program can be found in the "bin" directory of your Java installation.
    *   On Windows, it can be found in e.g. "C:\Program Files\Java\jre1.8.0_20\bin".

After creating the key store file, upload it to Adobe PhoneGap Build on your [account page](https://build.phonegap.com/people/edit). Go to tab "Signing Keys" and click "add a key ..." under "Android". Select the key store file, fill in a title for the key, and fill in the alias that you noted down in the previous step. After uploading the key store file, unlock the key. Click the yellow lock icon on the right of the key and fill in both the key store and the key passwords. The key is now ready to be used by your build job.
