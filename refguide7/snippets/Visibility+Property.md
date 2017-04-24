### Visible

By default, whether or not an element is displayed in the browser is determined by how the page is designed and the user's roles within the application. However, the page can be configured to hide the element unless a certain condition is met. 

#### Context

The widget can be made visible only if the object of the data view that contains the widget satisfies the specificied criteria.

A practical example would be a web shop in which the user must submit both billing and delivery information. In this case, you might not wish to bother the user with a second set of address input fields unless they indicate that the billing address and delivery address are not the same. You can accomplish this by making the delivery address fields conditionally visible based on the Boolean attribute `SameBillingAndDeliveryAddress`.

##### Based on Attribute Value

When selected, this shows the widget while a particular attribute has a certain value. Only boolean and enumeration attributes can be used for this purpose.

##### Based on Expression

<div class="alert alert-info">{% markdown %}

Added in Mendix 7.1.

{% endmarkdown %}</div>

When selected, this shows the widget while a provided [expression](microflow-expressions) evaluates to true. The object of the containing data view is available inside an expression as a `$currentObject` variable.

Note that the expression is evaluated in the browser, and hence, we advise against using "secret" values (like access keys) in it. In particular, we disallow usages of [constants](constants). Also, client-side expressions currently do not support all the functions that are available in the microflows. Please refer to an autocomplete list to know what functions are supported in your version.
