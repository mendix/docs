---
title: "3D Viewer API"
---

## 1 Introduction

The 3D Viewer API allows you to retrieve, create and update 3d model entities, actions, properties and more programmatically. You can easily create your custom logic on how you would like to interact and manipulate the 3D model.

## 2 3D Viewer API Reference

Browse [3D Viewer API Reference](http://3dviewer-apidoc.s3-website.eu-central-1.amazonaws.com/index/v2.1/apidoc/3dviewer.html) for details.

## 3 3D Viewer API Use Case Example

### 3.1 Use Javascript actions to Get properties of a selected part

Say if you want to get properties of a selected part on the viewer, you can first retrieve selected object information as a string through Viewer widget's [On Selection Change](/3d-viewer.md#on-selection-change) event attribute.

Now that you have this selected object information string, you can make use of the [`mx.viewer3D.getObjects()`](http://3dviewer-apidoc.s3-website.eu-central-1.amazonaws.com/index/v2.1/apidoc/3dviewer.mx.viewer3d.getobjects.html#mx-viewer3d-getobjects-function) API to get the object instances.

Next step, you can use [`IPart.getProperties() `](http://3dviewer-apidoc.s3-website.eu-central-1.amazonaws.com/index/v2.1/apidoc/3dviewer.ipart.getproperties.html), pass the selected object as parameter, then you will get the properties in key-value pair. 

Let's see how it looks in javascript action. You can create javascript action that takes 2 parameters, for example, give them name `selectedObject` and `propertyObject`.

Here is a sample code snippet of this simple javascript action

```js
/**
 * @param {string} selectedObject
 * @param {string} propertyObject
 * @returns {Promise.<MxObject[]>}
 */
export async function GetProperties(selectedObject, propertyObject) {
	// BEGIN USER CODE
	console.info(selectedObject);
    // Get the underlying 3D objects given its selection ids.
	let instances = mx.viewer3D.getObjects(selectedObject);
	let promises = [];
	let objects = [];
	if (instances && instances.length > 0) {
		let properties = await instances[0].getProperties();
		for(let key in properties) {
			if(properties.hasOwnProperty(key)) {
				promises.push(createPropertyObject(objects, key, properties[key]));
			}
		}
	}

	return Promise.all(promises).then(()=>objects);

	function createPropertyObject(objects, key, value) {
        return new Promise(function (resolve, reject) {
            mx.data.create({
                entity: propertyObject,
                callback: function(prop) {
                    prop.set("Key", key);
                    prop.set("Value", value);
					objects.push(prop);
                    resolve(prop);
                },
                error: function(error) {
                    reject(error.message);
                }
            });
        });
    }

	// END USER CODE
}
```

This javascript action can then be called in nanoflow to get all available properties of a given part.

Use a page to show all the properties returned :
![showproperties](attachments/3d-viewer-api/showproperties.jpg)

### 3.2 Other sample code snippets

Starting from version xxx(tbd), 3D Viewer module includes some out of box API actions, it allows you to manipulate model parts via `RotatePart`, `ScalePart`, `SetPartColor`, `TranslatePart` API actions. You can find them under **Viewer3D/USE_ME/API Actions**. You can directly use them to create your custom logic of manipulating models.

Alternatively, take a look at the code implementation of these javascript actions, along with the [3D Viewer API Reference](http://3dviewer-apidoc.s3-website.eu-central-1.amazonaws.com/index/v2.1/apidoc/3dviewer.html). This may give some insight on how you want to make use of 3D Viewer APIs

### 3.3 Feedback

If you have problem using the list of 3D Viewer APIs listed in [3D Viewer API Reference](http://3dviewer-apidoc.s3-website.eu-central-1.amazonaws.com/index/v2.1/apidoc/3dviewer.html) or you would like more APIs to be exposed, please raise a ticket in [Mendix Support portal](https://support.mendix.com/hc/en-us). We will address them accordingly. 
