### Condition

The widget can be made editable only if the object of the data view that contains the widget satisfies specificied criteria.

A practical example would be a personal details form in which the user must enter his mariage information. In this case you might wish to disable an input for marriage date until the user indicates that he or she is married.

##### Based on attribute value

When selected, this enables the widget while a particular attribute has a certain value. Only boolean and enumeration attributes can be used to this purpose.

##### Based on expression

<div class="alert alert-info">{% markdown %}Added in Mendix 7.1.{% endmarkdown %}</div>

When selected, this enables the widget while a provided [expression](microflow-expressions) evaluates to true. The object of the containg data view is available inside an expression as a variable **$currentObject**.

Note that the expression is evaluated in the browser, and hence, we advise you against using "secret" values (like access keys) in it. In particular, we disallow usages of [constants]. Also currently client-side expressions do not support all functions that are available in the microflows. Please refer to an autocomplete list to know what functions are supported in your version.
