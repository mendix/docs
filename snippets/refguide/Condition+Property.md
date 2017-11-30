### Condition

The widget can be made editable only if the object of the data view that contains the widget satisfies the specificied criteria.

A practical example would be a personal details form in which the user must enter his marital status. In this case, you might wish to disable an input for the marriage date until the user indicates that he or she is married.

##### Based on Attribute Value

When selected, this enables the widget while a particular attribute has a certain value. Only Boolean and enumeration attributes can be used for this purpose.

##### Based on Expression

<div class="alert alert-info">

Added in Mendix 7.1.

</div>

When selected, this enables the widget while a provided [expression](microflow-expressions) evaluates to true. The object of the containg data view is available inside an expression as a `$currentObject` variable.

Note that the expression is evaluated in the browser, and hence, we advise against using "secret" values (like access keys) in it. In particular, we disallow usages of [constants](constants). Also, client-side expressions currently do not support all the functions that are available in the microflows. Please refer to an autocomplete list to know what functions are supported in your version.
