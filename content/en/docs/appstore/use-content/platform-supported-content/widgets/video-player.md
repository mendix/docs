---
title: "Video Player"
url: /appstore/widgets/video-player/
description: "Describes the configuration and usage of the Video Player widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Video Player](https://marketplace.mendix.com/link/component/110700/) widget enables playing videos from YouTube, Vimeo, Dailymotion, and external MP4 files.

### Features

* Identify the provider and auto-load the right player
* Enable and disable the controls bar
* Loop the video when it finishes
* Start the video on mute
* Auto-play the video when it is ready
* Define a poster image for external MP4 files
* Set a static URL and poster when dynamic data is not specified

### Limitations

* File hosted in Mendix Server cannot be played in the Safari browser
* Using this widget with video files stored in file documents is not recommended, as the Mendix Runtime is not designed to perform as a media server
* On native mobile apps, the video player can only play back MP4 files (YouTube, Vimeo, and Dailymotion are not supported)

## Configuration

Place the widget inside or outside a context of an object that has a value attribute. If you do not place the widget
inside a context, you need to provide a static URL; otherwise, the player will not render.

Configure the following properties:

{{< figure src="/attachments/appstore/platform-supported-content/widgets/video-player/general.jpg" class="no-border" >}}

{{< figure src="/attachments/appstore/platform-supported-content/widgets/video-player/behavior.jpg" class="no-border" >}}

{{< figure src="/attachments/appstore/platform-supported-content/widgets/video-player/dimensions.jpg" class="no-border" >}}

### Cordova Configuration

If your are building a hybrid mobile app, you need to add the following lines to enable access to YouTube, Vimeo, and Dailymotion videos as well as MP4 extensions through your Sprint in **Apps** > **Mobile App** > [Custom Cordova Configuration](/developerportal/deploy/mobileapp/#custom):

```xml
<allow-navigation href="*://*youtube.com/*" />
<allow-navigation href="*://*youtu.be/*" />
<allow-navigation href="*://*ytimg.com/*" />
<allow-navigation href="*://*dailymotion.com/*" />
<allow-navigation href="*://*vimeo.com/*" />
<allow-navigation href="*://*noembed.com/*" />
<allow-navigation href="*://*.mp4" />
```

{{% alert color="info" %}}
[Noembed](https://noembed.com/) is the API used to request video sizes in order to calculate aspect ratios.
{{% /alert %}}

## Strict CSP Compatibility

This widget requires additional configuration to be compliant with strict content security policy (CSP). To make it work, you need to configure the CSP headers to allow the domain you are trying to load videos from. Otherwise, the videos are treated as external resources and blocked.
