#### Module Roles

The widget can be made visible to a subset of the user roles available in your application. These are the three options available:

| Option | Description |
| --- | --- |
| Applicable roles | All access determined by page and microflow access is maintained. For instance, if the user does not have access to the microflow triggered by a certain microflow button, that button will remain hidden from that user. |
| All roles | This setting overrides the setting above, rendering the element visible to all users, regardless of the security settings. Note that this does not provide the user access to the restricted data, it merely unveils the element. In the example above, the microflow button would become visible, but clicking it would still result in a return to the login page or an error.  |
| Selected roles | The widget can be made visible to a subset of the user roles available in your application. When activated, this setting will render the widget invisible to all the users that are not linked to one of the selected user roles. This does not provide the user access to the restricted data in the same way as the previous option. |
