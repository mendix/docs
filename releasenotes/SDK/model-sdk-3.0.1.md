---
title: "Model SDK 3.0.1"
space: "Release Notes"
category: "SDK"
---
| Impact | Description |
| --- | --- |
| Low | Idempotent splices in listy part properties are recognized and do nothing (instead of potentially breaking the model). |
| None | Unresolved by-name references are now reported as part of running checks on a unit. |
| Low | The `deploy` operation has been deprecated and is replaced by `startAppUpdate` and `getAppUpdateStatus`. Similarly, `getDeploymentStatus` has been superseded by `getAppEnvironmentStatus` (Low impact, as deployment cannot be used for SDK created projects) |

Note: impact = low means "some code might work now".
