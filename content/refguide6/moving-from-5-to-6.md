---
title: "Moving from 5 to 6"
category: "General"
---


Please read the [Release Notes](/releasenotes/) to see what new major improvements we added in Mendix 6.

This documentation aims to help you to update your project from Mendix 5 to Mendix 6\. It contains the following topics:

*   [Converting your project](moving-from-5-to-6): preparing for conversion and actually converting your project to Mendix 6.
*   [Java 8 required](moving-from-5-to-6): from Mendix 6 on Java 8 is required to run your applications.
*   [Deprecated features](moving-from-5-to-6): see which platform features have been deprecated in Mendix 6.
*   [Removed deprecated functionality](moving-from-5-to-6): see which features which were deprecated in Mendix 4 have been removed in Mendix 6.

## Converting your project

Before converting your project we advise you to look at the following points.

### Backup Project

If you are not using the team server, make a backup of your project. Check that the backup was successful by opening the project.

{{% alert type="success" %}}

Really make a backup!

{{% /alert %}}

### Convert to version 5.18.0 or newer

Conversion to Mendix 6 will only work for projects created with version 5.18.0 or newer. However, we advise to convert to the latest 5.x version before converting to Mendix 6\. At the time of writing this is 5.21.0.

### Fix errors and warnings

Fix errors and warnings as far as possible. Take special note of the 'Deprecations' in the Errors dock. Most features that are deprecated in Mendix 5 will be completely gone in Mendix 6, and will result in an error in your project.

### Fix deprecations in Java actions

Fix deprecations in your Java actions by importing your project in Eclipse and solving all the deprecations in the "Problems" tab. For details of the removed and deprecated APIs, see the section "Removed features" of the [Mendix 6.0.0 release notes](/releasenotes/desktop-modeler/6.0).

### Double check project changes

Verify that during migration steps listed above, no modules are replaced by removing and importing the module again. This operation by design insructs Mendix Modeler to delete whole module and create it again and leads to empty entities and assicoations after migration has been finished. 

### Converting!

Now you are ready to convert. Simply open your project in the new Mendix Modeler. There are no explicit actions required after opening your Mendix 5 project in Mendix 6. When you deloy your app from Mendix Modeler, double check all the domain model changes in the synchronization dialog in order to avoid unexpected modifications. 

## Java 8 required

From Mendix 6 on, it is required to use Java 8 instead of Java 7 to run your applications.

## Deprecated features

The following features have been deprecated in Mendix 6\. Using these features is discouraged, since they will be removed in a future release of Mendix.

*   The data types Float and Currency have been deprecated in favor of the high-precision Decimal type. This includes all microflow expression functions that operate on those types, i.e. 'currenciesEqual', 'floatsEqual', 'toFloat', 'formatFloat' and 'parseFloat'.
*   The specification of project-level access rules for the File and Image system entities has been deprecated. Instead create a specialized entity for each use case and configure access rules for those entities.
*   With the introduction of cluster support for Mendix Runtime, Java API to store objects into the session have been deprecated. This includes ISession.retain(), ISession.release() and ISession.getData() methods. The alternative solution is to store objects by associating them to System.Session entity. See [custom session data](isession-api-usage) for more information and an example.

## Removed deprecated functionality

Features deprecated in Mendix 4 have been removed in Mendix 6\. These steps will help you upgrade your existing project and the custom widgets you might have written.

### Client

Below is a list of namespaces which were renamed. This is only relevant if you wrote custom widgets.

| Removed | Replacement |
| --- | --- |
| mendix.dom | mxui/dom |
| mendix.html | mxui/html |
| mxui.addon | mxui/mixin |
| mendix.widget | mxui/widget |
| mobile.dom | mxui/dom |

Besides namespaces quite a few methods are removed. Look at the [client documentation](https://apidocs.mendix.com/6/client/) on how to use the new APIs.

| Removed | Replacement |
| --- | --- |
| mendix.dom.liveconnect | mxui/dom.liveConnect |
| mobile.widget._Widget | mxui/widget/_WidgetBase |
| mxui.html.setContent | mxui/dom.text |
| mxui.html.sanatizeHTMLString | mxui/dom.unescapeString |
| mxui.dom.removeElement | mxui.dom.orphan |
| mxui.dom.setTextContent | mxui.dom.text |
| mxui.dom.getTextContent | mxui.dom.text |
| mxui.dom.textContent | mxui.dom.text |
| mxui.dom.removeChildNodes | dojo.empty |
| mxui.dom.clearSelectOptions | dojo.empty |
| mxui.dom.getAncestorClass | Element#querySelectorAll |
| mxui.dom.getElementsByTagNames | Element#querySelectorAll |
| mxui.dom.getAncestorNodeWithAttribute | Element#querySelectorAll |
| mxui.dom.setHTML | mxui.dom.html |
| mxui.dom.getSelectOptions | mxui.dom.getSelectedValue |
| mxui.dom.selectOption | Element#value |
| mxui.dom.hasClass | dojo/dom-class.contains |
| mxui.dom.getClass | Element#className |
| mxui.dom.setClass | Element#className |
| mxui.dom.addClass | dojo/dom-class.add |
| mxui.dom.addClasses | dojo/dom-class.add |
| mxui.dom.removeClass | dojo/dom-class.remove |
| mxui.dom.height | dojo/dom-style.set |
| mxui.dom.show | dojo/dom-style.set |
| mxui.dom.setReadOnly | Element#setAttribute |
| mxui.dom.unsetReadOnly | Element#removeAttribute |
| mxui.dom.applyDisableStyle | Element#setAttribute |
| mxui.dom.applyEnableStyle | Element#removeAttribute |
| mxui.dom.setOpacity | Element#style |
| mxui.dom.insertCss | mxui/dom.addCss |
| mxui.dom.escapeHTML | mxui/dom.escapeString |
| mxui.dom.getFormElementText | dojo/dom-attr.get |
| mxui.dom.getStringSize | dojo/dom-geometry.getContentSize |
| mxui.dom.clone | dojo/_base/lang.clone |
| mxui.dom.getFirstElement | Element#children |
| mx.ui.confirm | mx.ui.confirmation |
| mx.ui.executeAction | mx.ui.action |
| mx.ui.showDialogMessage | mx.ui.{info,warn,error} |
| mx.ui.newContext | new mendix/lib/MxContext |
| mx.ui.getProgressIndicator | mx.ui.getProgress |
| mx.ui.getLocale | dojo/_base/kernel.locale |
| mx.screen.setContent | mx.ui.openForm |
| mx.screen.showProgress | mx.ui.showProgress |
| mx.screen.hideProgress | mx.ui.hideProgress |
| mx.screen.subscribe | mx.form.listen |
| mx.screen.unsubscribe | mx.form.unlisten |
| mx.screen.sendMessage | Form#{save,commit,rollback} |
| mx.screen.getUIPlace | Form#place |
| mx.screen.getTitle | Form#getTitle |
| mx.screen.resumeContent | noop |
| mx.screen.suspendContent | noop |
| mx.screen.disposeContent | Form#close |
| mx.screen.resizeContent | Form#resize |
| mx.screen.reloadContent | mx.ui.reload |
| mx.screen.refresh | mx.ui.reload |
| mx.screen.showLogin | mx.ui.showLogin |
| mx.screen.hideLogin | mx.ui.hideLogin |
| mx.screen.logout | mx.logout |
| mx.screen.layout | mx.ui.resize |
| mx.screen.applyToNode | mx.ui.applyToNode |
| mxui.lib.putContent | mx.ui.openForm |
| mx.data.action | _arguments changed_ |
| mx.data.sizeOfXPathSet | _arguments changed_ |
| mx.metadata | mx.meta |
| mx.processor | mx.data |
| mendix.lang.runBindActions | mendix.lang.sequence |
| mendix.lang.runAsyncActions | mendix/lang.collect |
| mendix.lang.runActions | mendix/lang.sequence |
| mendix.lang.clone | dojo.clone |
| mendix.lang.dupObject | dojo.clone |
| mendix.lang.round | dojo.number.round |
| mendix.lang.toFixed | dojo.number.round |
| mendix.lang.sequence(scope, chain, callback) | mendix/lang.sequence(chain, callback, scope) |
| mendix/lang.collect(scope, chain, callback) | mendix/lang.collect(chain, callback, scope) |
| mx.moduleUrl | dojo.require.toUrl |
| mx.meta.geMetaMap | mx.meta.getMap |
| mx.meta.getMetaEntity | mx.meta.getEntity |
| mx.server.getResource | mx.server.get |
| mx.xas.action | mx.data.action |
| mx.data.distributeChange | mx.data.update |
| mx.data.addChangeListener | mx.data.subscribe |
| mx.data.removeChangeListener | mx.data.unsubscribe |
| mx.data.subscribeToClass | mx.data.subscribe |
| mx.data.unSubscribeFromClass | mx.data.unsubscribe |
| mx.data.subscribeToGUID | mx.data.subscribe |
| mx.data.unSubscribeFromGUID | mx.data.unsubscribe |
| mx.data.xasAction | mx.data.action |
| mx.data.getObjectsByXPath | mx.data.get |
| mx.data.getAttributeListByXPath | mx.data.get |
| mx.data.getObjectsByXPathSchema | mx.data.get |
| mx.data.getObjectsByMicroflow | mx.data.get |
| mx.data.getObjectsById | mx.data.get |
| mx.data.getObjectsByXPath | mx.data.get |
| mx.data.getObject | mx.data.get |
| mx.data.createObjectByClass | mx.data.create |
| mx.data.createObject | mx.data.create |
| mx.data.deleteObjectsByGuid | mx.data.remove |
| mx.data.saveObject | mx.data.save |
| mx.data.commitObject | mx.data.commit |
| mx.data.rollbackObject | mx.data.rollback |
| mx.data.deleteObject | mx.data.remove |
| mx.data.deleteMxObjects | mx.data.remove |
| mx.data.sumOfXPathQuery | mx.data.sumOfXPathSet |
| mx.data.sizeOfXPathQuery | mx.data.sizeOfXPathSet |
| mx.data.countOfXPathQuery | mx.data.siezeOfXPathSet |
| mx.data.avgOfXPathQuery | mx.data.avgOfXPathSet |
| mx.data.maxOfXPathQuery | mx.data.maxOfXPathSet |
| mx.data.minOfXPathQuery | mx.data.minOfXPathSet |
| mx.data.ceilingOfXPathQuery | mx.data.ceilingOfXPathSet |
| mx.data.floorOfXPathQuery | mx.data.floorOfXPathSet |
| mendix.lib.MxContext#hasActiveClass | mendix/lib/hasTrackEntity |
| mendix.lib.MxContext#hasActiveGUID | mendix/lib/MxContext#hasTrackId |
| mendix.lib.MxContext#hasTrackID | mendix/lib/MxContext#hasTrackId |
| mendix.lib.MxContext#getActiveClass | mendix/lib/MxContext#getTrackEntity |
| mendix.lib.MxContext#getActiveGUID | mendix/lib/MxContext#getTrackId |
| mendix.lib.MxContext#getTrackID | mendix/lib/MxContext#getTrackId |
| mendix.lib.MxContext#setActiveClass | mendix/lib/MxContext#setTrackEntity |
| mendix.lib.MxContext#setActive | mendix/lib/MxContext#setTrackEntity |
| mendix.lib.MxContext#setTrackID | mendix/lib/MxContext#setTrackId |
| mendix.lib.MxContext#setContextFromMxObject | mendix/lib/MxContext#setContext |
| mendix.lib.MxObject#getGUID | mendix/lib/MxObject#getGuid |
| mendix.lib.MxObject#getClass | mendix/lib/MxObject#getEntity |
| mendix.lib.MxObject#getAttribute | mendix/lib/MxObject#get |
| mendix.lib.MxObject#setAttribute | mendix/lib/MxObject#set |
| mendix.lib.MxObject#hasAttribute | mendix/lib/MxObject#has |
| mendix.lib.MxObject#getAttributeClass | mendix/lib/MxObject#getAttributeType |
| mendix.lib.MxObject#inheritsOf | mendix/lib/MxObject#inheritsFrom |
| mendix.lib.MxObject#hasSubClasses | mendix/lib/MxObject#hasSubEntities |
| mendix.lib.MxObject#getSubClassess | mendix/lib/MxObject#getSubEntities |
| mendix.lib.MxObject#hasSuperClasses | mendix/lib/MxObject#hasSuperEntities |
| mendix.lib.MxObject#getSuperClasses | mendix/lib/MxObject#getSuperEntities |
| mendix.lib.MxObject#getSelectorClass | mendix/lib/MxObject#getSelectorEntity |
| mendix.lib.MxObject#save | mx.data.save |
| mendix.lib.MxObject#commit | mx.data.commit |
| mendix.lib.MxObject#rollback | mx.data.rollback |
| mendix.lib.MxObject#saveSequence | mx.data.save + mx.data.commit |
| mendix.lib.MxMetaObject#getGUID | mendix/lib/MxMetaObject#getGuid |
| mendix.lib.MxMetaObject#getClass | mendix/lib/MxMetaObject#getEntity |
| mendix.lib.MxMetaObject#hasAttribute | mendix/lib/MxMetaObject#has |
| mendix.lib.MxMetaObject#getAttributeClass | mendix/lib/MxMetaObject#getAttributeType |
| mendix.lib.MxMetaObject#inheritsOf | mendix/lib/MxMetaObject#inheritsFrom |
| mendix.lib.MxMetaObject#hasSubClasses | mendix/lib/MxMetaObject#hasSubEntities |
| mendix.lib.MxMetaObject#getSubClasses | mendix/lib/MxMetaObject#getSubEntities |
| mendix.lib.MxMetaObject#hasSuperClasses | mendix/lib/MxMetaObject#hasSuperEntities |
| mendix.lib.MxMetaObject#getSuperClasses | mendix/lib/MxMetaObject#getSuperEntities |
| mendix.lib.MxMetaObject#getSelectorClass | mendix/lib/MxMetaObject#getSelectorEntity |
