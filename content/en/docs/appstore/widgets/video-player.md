---
title: "Video Player"
url: /appstore/widgets/video-player/
category: "Widgets"
description: "Describes the configuration and usage of the Video Player widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "platform support", "widget", "video player"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Video Player](https://marketplace.mendix.com/link/component/110700/) widget enables playing videos from Youtube, Vimeo, Dailymotion, and external MP4 files.

### 1.1 Features

* Identify the provider and auto-load the right player
* Enable and disable the controls bar
* Loop the video when it finishes
* Start the video on mute
* Auto-play the video when it is ready
* Define a poster image for external MP4 files
* Set a static URL and poster when dynamic data is not specified

### 1.2 Limitations

* File hosted in Mendix Server cannot be played in the Safari browser

## 2 Configuration

Place the widget inside or outside a context of an object that has a value attribute. If you do not place the widget
inside a context, you need to provide a static URL; otherwise, the player will not render.

Configure the following properties:

![](/attachments/appstore/widgets/video-player/general.jpg)

![](/attachments/appstore/widgets/video-player/behavior.jpg)

![](/attachments/appstore/widgets/video-player/dimensions.jpg)

### 2.1 Cordova Configuration

If your are building a hybrid mobile app, you need to add the following lines to enable access to YouTube, Vimeo, and Dailymotion videos as well as MP4 extensions through your Sprint in the Developer Portal > **Mobile App** > [Custom Cordova Configuration](/developerportal/deploy/mobileapp/#custom):

```xml
<allow-navigation href="*://*youtube.com/*" />
<allow-navigation href="*://*youtu.be/*" />
<allow-navigation href="*://*ytimg.com/*" />
<allow-navigation href="*://*dailymotion.com/*" />
<allow-navigation href="*://*vimeo.com/*" />
<allow-navigation href="*://*noembed.com/*" />
<allow-navigation href="*://*.mp4" />
```

{{% alert type="info" %}}
[Noembed](https://noembed.com/) is the API used to request video sizes in order to calculate aspect ratios.
{{% /alert %}}
