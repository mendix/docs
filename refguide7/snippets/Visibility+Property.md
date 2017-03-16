### Visible

By default, whether or not an element is displayed in the browser is determined by how the page is designed and the user's roles within the application. However, the page can be configured to hide the element unless a certain condition is met. 

#### Context

The widget can be made visible only if the object of the data view that contains the widget satisfies specificied criteria.

A practical example would be a web shop in which the user must submit both billing and delivery information. In this case you might not wish to bother the user with a second set of address input fields unless he or she indicates that the billing and delivery address are not the same. You can accomplish this by making the delivery address fields conditionally visible based on the boolean attribute SameBillingAndDeliveryAddress.

##### Based on attribute value

When selected, this shows the widget while a particular attribute has a certain value. Only boolean and enumeration attributes can be used to this purpose.

##### Based on expression

<div class="alert alert-info">{% markdown %}Added in Mendix 7.1.{% endmarkdown %}</div>

When selected, this shows the widget while a provided [expression](microflow-expressions) evaluates to true. The object of the containg data view is available inside an expression as a variable **$currentObject**.

Note that the expression is evaluated in the browser, and hence, we advise you against using "secret" values (like access keys) in it. In particular, we disallow usages of [constants]. Also currently client-side expressions do not support all functions that are available in the microflows. Please refer to an autocomplete list to know what functions are supported in your version.
