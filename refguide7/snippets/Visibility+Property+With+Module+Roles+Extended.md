### Visible

By default, whether or not an element is displayed in the browser is determined by how the page is designed and the user's roles within the application. However, the page can be configured to hide the element unless a certain condition is met. 

## Attribute Condition

### Attribute

When checked, this setting hides the widget unless a particular attribute has a certain value. Only boolean and enumeration attributes can be assigned to this purpose.

A practical example would be a web shop in which the user must submit both billing and delivery information. In this case you might not wish to bother the user with a second set of address input fields unless he or she indicates that the billing and delivery address are not the same. You can accomplish this by making the delivery address fields conditionally visible based on the boolean attribute SameBillingAndDeliveryAddress.

### Module roles 

Module role conditional visibility is split into three subcategories.

| Setting | Description |
| --- | --- |
| for applicable roles | All access determined by page and microflow access is maintained. For instance; if the user does not have access to the microflow triggered by a certain microflow button, that button will remain hidden from that user. |
| for all roles | This setting overrides the setting above, rendering the element visible to all users, regardless of security settings. Note that this does not provide the user access to the restricted data, it merely unveils the element. In the example above, the microflow button would become visible, but clicking it would still result in a log-in page or error.  |
| for selected roles | The widget can be made visible to a subset of the user roles available in your application. When activated, this setting will render the widget invisible to all users that are not linked to one of the selected user roles. Please note that this does not override project security. Any restrictions due to microflow, form, or entity access will remain in effect. |
