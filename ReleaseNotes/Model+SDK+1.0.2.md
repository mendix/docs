---
title: "Model SDK 1.0.2"
category: "releasenotes"
space: "Release Notes"
---
This release replaces all previous SDK versions as our API endpoints have been changed and finalized.
Please run `npm update mendixmodelsdk --save`.

| Story # | Impact | Description |
| --- | --- | --- |
| 585226 | High | All Model API infrastructure has been moved to Europe and the default endpoint of the API is updated. |
| 602450 | Low | SDK now throttles requests to avoid spamming our servers. This might degrade performance a little. |
| 606647 | None | SDK now handles EPIPE errors coming from AWS correctly. |