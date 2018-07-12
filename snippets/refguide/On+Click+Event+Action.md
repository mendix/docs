### On Click {#on-click}

This property specifies what action is executed when the element is clicked. These are the options:

| Action | Effect |
| --- | --- |
| Do nothing | Nothing happens. This is useful for setting up a page without defining the underlying functionality yet. |
| Show a page | The specified page is shown. |
| Call a microflow | The specified microflow is executed. |
| Call a nanoflow | The specified nanoflow is executed. |
| Open link | Triggers an action based on the link type, some of which are specific to mobile devices. |
| Create object | Creates a new object |
| Save changes | Commits all changes made on the page.  |
| Cancel changes | Rolls back all changes made on the page. |
| Close page | Closes the pop-up window (for pop-up pages) or navigates to the previously visited page (for content pages). |
| Delete | Deletes an object.<ul><li>* When placed in a data view, deletes the object to which the data view is bound; it does not delete objects in a nested data view unless configured through delete behavior</li><li>* When placed on a data grid, template grid, or reference set selector control bar, deletes the selected object(s)</li><li>* When placed inside a list view template, deletes the current item of the list view</li></ul> |
| Synchronize | Synchronizes the data stored locally on your device with the server database. |
| Sign out | Signs out the currently signed-in user. When no user is signed in, pressing this button has no effect. |

_Default value:_ Do nothing

#### Page (Only for "Show a page") {#on-click-page}

The [page](page) that should be shown.

See [Opening Pages](opening-pages).

#### Page for specializations (Only for "Show a page") {#on-click-page}

Allows to configure a different page for each specialization of the context object. If this action is placed inside a data view, it is possible to configure different page(s) for each specialization of the data view object. If this action is placed in a data grid, it is possible to configure different pages for each specialization of the grid entity. This setting is not visible when there is not a context object, or context object has no specializations.

#### Microflow (Only for "Call a microflow") {#on-click-microflow}

The [microflow](microflow) that should be executed.

#### Microflow Settings (Only for "Call a microflow") {#on-click-microflow-settings}

The microflow settings specify what parameters will be passed to the microflow, whether to show a progress bar or not, and more.

See [Starting Microflows](starting-microflows).

#### Nanoflow (Only for "Call a nanoflow") {#on-click-nanoflow}

The [nanoflow](nanoflow) that should be executed.

#### Link Type (Only for "Open link") {#on-click-link-type}

This specifies the type of action triggered when pressing the button. These are the options:

| Value | Description |
| --- | --- |
| Web | Navigate to a website URL. |
| Email | Compose an email. |
| Call | Start a phone call. |
| Text | Send a text message. |

_Default value:_ Web

#### Address (Only for "Open link") {#on-click-address}

Usage of the address property depends on the chosen link type. The property is used either as a URL (Web), as an email address (Email), or as a phone number (Call/Text).

The address can be set to either a literal value, or an attribute value.

#### Address Value (Only for "Open link") {#on-click-address-value}

If a literal value is chosen for the address, you can enter the value here.

#### Address Attribute (Only for "Open link") {#on-click-address-attribute}

If an attribute is chosen for the address, you can select the attribute here. An address attribute specifies a path to an attribute. The path starts at the entity of the data view in which the link button is contained.

#### Close Page (Only for "Save changes", "Cancel changes", and "Delete") {#on-click-close-page}

This flag indicates whether the current page should be closed.

#### Sync Automatically (Only for "Save changes") {#on-click-sync-automatically}

When an object is saved in a Mendix application running in an [offline profile](hybrid-phone-profile), this information is stored in a local database until it can be synchronized with the server. In practice, this means that uploading a new object to the server requires two distinct actions: saving the object and [syncing it](offline#synchronization).

This flag indicates whether synchronization should happen when the save button is clicked.

#### Entity (path) (Only for "Create object")

Specifies which entity to create. It is also possible to choose an association (if available) from the context object.

* If an entity is configured, a new instance of the entity will be created.
* If an entity throguh association from the context object is configured, a new instance of the entity will be created and associated with the context object.

#### On Click Page (Only for "Create object")

Specifies which [page](page) should be shown with the new created object. This page must accept a context parameter object with the same or sub-type of the created entity.
