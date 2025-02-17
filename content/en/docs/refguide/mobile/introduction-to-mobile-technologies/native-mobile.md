---
title: "Native Mobile"
url: /refguide/mobile/introduction-to-mobile-technologies/native-mobile/
weight: 10
aliases:
    - /refguide/native-mobile/
    - /howto/mobile/native-mobile/
---

## Introduction

With Mendix you can build fully native mobile apps. Native mobile apps do not render inside a web view. Instead, they use native UI elements. This enables fast performance, smooth animations, like swipe gestures, and improved access to all native device capabilities.

You build Mendix native mobile apps the same way you build web apps. You can use familiar elements such as pages, widgets, nanoflows, JavaScript actions, and microflows to put together your app. However, there are some differences between building native apps and web apps. For example, the set of available widgets (and their properties) is slightly different. In addition, native styling is based on JavaScript instead of SASS/CSS. 

## Styling

Native mobile apps' theming and styling is based on JavaScript. For more information on styling, see [Native Styling](/refguide/native-styling-refguide/). 

## Using Device Capabilities

Native mobile apps have full access to all of the device's capabilities. Many capabilities are supported in through standard components. For other capabilities, you can implement a native module.

## Distribution

Native mobile apps must be distribute via AppStores. Updates can be distributed with Over-the-Air Updates.

## Limitations

### Bitcode Deprecation {#bitcode-deprecation}

The React Native version used in Studio Pro versions 10.11-10.16 includes Bitcode, which is not longer supported by Xcode 16 and above. This means that native mobile iOS applications created by customers **cannot be submitted to the App Store**. 

To address the issue, there are one of three things you can do:

* Use a newer version of Studio Pro (10.18+)
* Use the workaround [below](#bitcode-workaround)
* Downgrade Xcode to version 15.4 (although it does not work on latest MacOS version)

#### Workaround {#bitcode-workaround}

{{% alert color="info" %}}

In the workaround below, there might be paths (files) missing depending on the exact version of Studio Pro you are using. If the build process fails, Studio Pro shows you problematic paths that need to be added to the list.

{{% /alert %}}

Apply the following changes to the native mobile project in "ios/Podfile" file in the "post_install" block (For more information, see [Asset validation failed, NSLocalizedRecoverySuggestion=Invalid Executable](https://stackoverflow.com/questions/79022303/asset-validation-failed-nslocalizedrecoverysuggestion-invalid-executable-the-e/79022687)):

```
bitcode_strip_path = `xcrun --find bitcode_strip`.chop!
   def strip_bitcode_from_framework(bitcode_strip_path, framework_relative_path)
     framework_path = File.join(Dir.pwd, framework_relative_path)
     command = "#{bitcode_strip_path} #{framework_path} -r -o #{framework_path}"
     puts "Stripping bitcode: #{command}"
     system(command)
   end
   framework_paths = [
     "Pods/LogRocket/LogRocket.xcframework/ios-arm64/LogRocket.framework/LogRocket",
     "Pods/hermes-engine/destroot/Library/Frameworks/macosx/hermes.framework/hermes",
     "Pods/hermes-engine/destroot/Library/Frameworks/macosx/hermes.framework/Versions/Current/hermes",
     "Pods/hermes-engine/destroot/Library/Frameworks/universal/hermes.xcframework/ios-arm64/hermes.framework/hermes",
     "Pods/hermes-engine/destroot/Library/Frameworks/universal/hermes.xcframework/ios-arm64_x86_64-maccatalyst/hermes.framework/hermes"
   ]
   framework_paths.each do |framework_relative_path|
     strip_bitcode_from_framework(bitcode_strip_path, framework_relative_path)
   end
```

