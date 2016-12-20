---
title: "Release Notes 2016-10-05"
category: "releasenotes"
space: "Release Notes"
---
#### Fix:

On Webkit-based browsers such as Safari a "connection error" dialog would sometimes pop up while loading the Dev Portal, after which the page would continue to load normally. We now prevent this dialog from appearing so that people can open the Dev Portal uninterrupted.