---
title: "Login Behavior"
url: /refguide/login-behavior/
category: "Mendix Runtime"
description: "Describes default and customized login behavior in Runtime."
tags: ["Runtime", "login", "studio pro"]
---

## 1 Default Login Behavior

A user is blocked after three consecutive bad login attempts, regardless of the time between the login attempts. The failed login count is reset after a successful login attempt or when a blocked user is unblocked. Blocking users only occurs when the app security level is set to **Production**.

Users that have been blocked for at least five minutes are unblocked each time the cluster manager runs and, at that point, the failed login count is reset to 0. By default, the cluster manager runs every five minutes. This interval can be changed using  [Runtime customization](/refguide/custom-settings/) to change the `ClusterManagerActionInterval` setting.

{{% alert color="warning" %}}
The cluster manager does more than just unblocking users. For example, it also removes expired sessions. So changing this interval has a broader impact.
{{% /alert %}}

{{% alert color="info" %}}
In versions of Mendix below 9.11.0, the cluster manager will unblock all blocked users immediately, even if they have been blocked for less than five minutes.
{{% /alert %}}

## 2 Customizing Login Behavior

Login behavior can be customized by implementing a custom Java action and registering it to be used instead of the default login action.

Cluster manager behavior currently cannot be changed.
