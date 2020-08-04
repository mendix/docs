---
title: "Video Player"
category: "Widgets"
description: "Describes the configuration and usage of the Video Player widget, which is available in the Mendix App Store."
tags: ["app store", "app store component", "platform support", "widget", "video player"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Video Player](https://appstore.home.mendix.com/link/app/110700/) widget enables playing videos from Youtube, Vimeo, Dailymotion, and external MP4 files.

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

### 1.3 Demo App Project

For a demo app project that has been deployed with this widget, see [here](https://videoplayer-sandbox.mxapps.io/).

## 2 Configuration

Place the widget inside or outside a context of an object that has a value attribute. If you do not place the widget
inside a context, you need to provide a static URL; otherwise, the player will not render.

Configure the features on the following tabs:

![](attachments/video-player/general.jpg)

![](attachments/video-player/behavior.jpg)

![](attachments/video-player/dimensions.jpg)



### Phonegap/Cordova configuration

If your are developing a Hybrid Mobile App, please add these line through your Sprint in Mobile App -> Custom
Phonegap/Cordova configuration These lines are required to allow the access to YouTube, Vimeo, Dailymotion videos and
Mp4 extensions. Noembed.com is the API we use to request the Video Sizes to calculate Aspect Ratio.

```xml
<allow-navigation href="*://*youtube.com/*" />
<allow-navigation href="*://*youtu.be/*" />
<allow-navigation href="*://*ytimg.com/*" />
<allow-navigation href="*://*dailymotion.com/*" />
<allow-navigation href="*://*vimeo.com/*" />
<allow-navigation href="*://*noembed.com/*" />
<allow-navigation href="*://*.mp4" />
```




