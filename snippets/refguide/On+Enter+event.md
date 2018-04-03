### On enter

The on-enter property optionally specifies an action that will be executed when the widget is entered, either by using the <kbd>Tab</kbd> key or by clicking it with the mouse.

| Action | Effect |
| --- | --- |
| Do nothing | Nothing happens. This is useful for setting up a page without defining the underlying functionality. |
| Show a page | The specified page is shown. |
| Call a microflow | The specified microflow is executed. |
| Call a nanoflow | The specified nanoflow is executed. |
| Open link | Triggers an action based on the link type, some of which are specific to mobile devices. |
| Save changes | Commits all changes made on the page.  |
| Cancel changes | Rolls back all changes made on the page. |
| Close page | Closes the pop-up window (for pop-up pages) or navigates to the previously visited page (for content pages). |
| Synchronize | Synchronizes the data stored locally on your device with the server database. |
| Sign out | Signs out the currently signed-in user. When no user is signed in, clicking this button has no effect. |

_Default value:_ Do nothing

#### Page (Only for "Show a page") {#on-enter-page}

The [page](page) that should be shown.

For more information, see [Opening Pages](opening-pages).

#### Microflow (Only for "Call a microflow") {#on-enter-microflow}

The [microflow](microflow) that should be executed.

#### Microflow Settings (Only for "Call a microflow") {#on-enter-microflow-settings}

The microflow settings specify what parameters will be passed to the microflow, whether to show a progress bar or not, and more.

For more information, see [Starting Microflows](starting-microflows).

#### Nanoflow (Only for "Call a nanoflow") {#on-enter-nanoflow}

The [nanoflow](nanoflow) that should be executed.

#### Link Type (Only for "Open link") {#on-enter-link-type}

This specifies the type of action triggered when pressing the button. These are the options:

| Value | Description |
| --- | --- |
| Web | Navigate to a website URL. |
| Email | Compose an email. |
| Call | Start a phone call. |
| Text | Send a text message. |

_Default value:_ Web

#### Address (Only for "Open link") {#on-enter-address}

Usage of the address property depends on the chosen link type. The property is used either as a URL (Web), as an email address (Email), or as a phone number (Call/Text).

The address can be set to either a literal value or an attribute value.

#### Address Value (Only for "Open link") {#on-enter-address-value}

If a literal value is chosen for the address, you can enter the value here.

#### Address Attribute (Only for "Open link") {#on-enter-address-attribute}

If an attribute is chosen for the address, you can select the attribute here. An address attribute specifies a path to an attribute. The path starts at the entity of the data view in which the link button is contained.

#### Close Page (Only for "Save changes" and "Cancel changes") {#on-enter-close-page}

This flag indicates whether the current page should be closed.

#### Sync Automatically (Only for "Save changes") {#on-enter-sync-automatically}

When an object is saved in a Mendix application running in an [offline profile](hybrid-phone-profile), this information is stored in a local database until it can be synchronized with the server. In practice, this means that uploading a new object to the server requires two distinct actions: saving the object and [syncing it](offline#synchronization).

This flag indicates whether synchronization should happen when the save button is clicked.
