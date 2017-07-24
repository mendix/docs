---
title: "Commit an Object"
category: "Custom Widgets"
---
## Description

This section describes how to commit an object from your widget in JavaScript. Tutorials related to this subject can be found [here](custom-widgets).

## Instructions

 **Create or retrieve the object.**

Make sure you have your object in the scope for your function. You can get one by creating a new one or by retrieving it from either context or a mx.processor.getObject() call.

 **Set the object's attributes.**

To change an attribute of an object, you can use setAttribute().

```javascript
orderObj.setAttribute("ProductName", "Margarita pizza");

```

 **Save the object.**

Now we'll send the changes to cache and the server using object.save(). This function saves the object in cache and results in an asynchronous call, sending the changes to the server. This function accepts 2 functions, a callback and an error function.

```javascript
orderObj.save({
  callback : dojo.hitch(this, function (orderObj) {                     
    this.afterSave(orderObj);
  }, orderObj),
  error : dojo.hitch(this, function (orderObj) {
    logger.error('Could not save object: '+orderObj);
  }, orderObj)
});

```

 **Commit the object.**

Committing an object from a widget is really simple. All you need is to call the commit() function on the object in question.

You can call it without any arguments to run it as fire & forget.

```javascript
orderObj.commit();
```

If you want to execute any code as callback or if an error is returned, you can give it the needed arguments.

```javascript
orderObj.commit({
callback : dojo.hitch(this, function (orderObj) {
    this.afterCommit(orderObj);
  }, orderObj),
error : dojo.hitch(this, function (orderObj) {
    logger.error('Could not commit object: '+orderObj);
  }, orderObj)
});
```
{{% alert type="warning" %}}

If your widget is in a Data view and you are editing the object of the Data view, it will be automatically committed when the form is saved. Use this for any changes to the actual Data view object, as the user might want to cancel their changes without committing the object.

{{% /alert %}}
