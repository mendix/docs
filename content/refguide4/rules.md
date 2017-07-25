---
title: "Rules"
parent: "modules"
---
A rule is a special kind of microflow. Its result should be an enumeration or a boolean and it can be used in an [exclusive split](exclusive-split) to make a decision based on that result. The idea is that complicated decisions can be consolidated in rules and reused in various places.

Rules are very similar to microflows; see the documentation about [Microflows](microflows) for more information on how to build a rule. There are only a few differences between rules and microflows:

*   A rule can only be used in an exclusive split.
*   The return type has to be boolean or enumeration.
*   A rule has a different background in the Modeler so that you can quickly spot whether you are working on a rule.
*   A rule cannot change data in the database; the actions to create, delete, change and rollback objects are not available in rules.
*   A rule cannot perform interaction with the client; the actions to show or close forms, to show messages, send validation feedback and the download files are not available in rules.
*   A rule cannot call web services, generate documents or import XML.
