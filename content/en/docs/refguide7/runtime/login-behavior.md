---
title: "Login Behavior"
url: /refguide7/login-behavior/
category: "Mendix Runtime"
description: "Describes default and customized login behavior in Runtime."
tags: ["Runtime", "login"]
---

## 1 Default Login Behavior

A user is blocked after three consecutive bad login attempts, regardless of the time between the login attempts. The failed login count is reset after a successful login attempt or when a blocked user is unblocked.

Users are unblocked each time the cluster manager runs, and at that point, the failed login count is also reset to 0. By default, the cluster manager runs every five minutes. This interval can be changed using the [custom setting](/refguide7/custom-settings/) `ClusterManagerActionInterval`.

{{% alert color="warning" %}}
The cluster manager does more than just unblocking users. For example, it also removes expired sessions. So, changing this interval has a broader impact.
{{% /alert %}}

{{% alert color="info" %}}
If a user is blocked just 1 second before the cluster manager starts to unblock all blocked users, the lock is removed after 1 second.
{{% /alert %}}

## 2 Customizing Login Behavior

Login behavior can be customized by implementing a custom Java action and registering it to be used instead of the default login action.

Cluster manager behavior currently cannot be changed.
