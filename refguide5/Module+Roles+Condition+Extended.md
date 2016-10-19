---
title: "Module roles condition (extended)"
category: "refguide5"
space: "Reference Guide 5"
---
### Module roles 

Module role conditional visibility is split into three subcategories.

<table><thead><tr><th class="confluenceTh">Setting</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">for applicable roles</td><td class="confluenceTd">All access determined by page and microflow access is maintained. For instance; if the user does not have access to the microflow triggered by a certain microflow button, that button will remain hidden from that user.</td></tr><tr><td class="confluenceTd">for all roles</td><td class="confluenceTd">This setting overrides the setting above, rendering the element visible to all users, regardless of security settings. Note that this does not provide the user access to the restricted data, it merely unveils the element. In the example above, the microflow button would become visible, but clicking it would still result in a log-in page or error.&nbsp;</td></tr><tr><td class="confluenceTd">for selected roles</td><td class="confluenceTd">The widget can be made visible to a subset of the user roles available in your application. When activated, this setting will render the widget invisible to all users that are not linked to one of the selected user roles. Please note that this does not override project security. Any restrictions due to microflow, form, or entity access will remain in effect.</td></tr></tbody></table>