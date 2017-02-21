### On click

This property specifies what action is executed when the element is clicked. There are three options:

| Action | Effect |
| --- | --- |
| Do nothing | Nothing happens. This is useful for setting up a page without defining the underlying functionality yet. |
| Show a page | The specified page is shown. |
| Call a microflow | The specified microflow is executed. |
| Save changes | Commit all changes made on the page.  |
| Cancel changes | Roll back all changes made on the page. |
| Close page | Close the popup for popup pages, or navigate to the previously visited page for content pages. |
| Synchronize | Synchronize the data stored locally on your device with the server database. |

_Default value:_ Do nothing

### Page (only for "Show a page")

The [page](page) that should be shown.

See [Opening Pages](opening-pages).

### Microflow (only for "Call a microflow")

The [microflow](microflow) that should be executed.

### Microflow settings (only for "Call a microflow")

The microflow settings specify what parameters will be passed to the microflow, whether to show a progress bar or not, and more.

See [Starting Microflows](starting-microflows).

### Close page (only for "Save changes" and "Cancel changes")

The flag indicates whether the current page should be closed. See "Close page".

### Sync automatically (only for "Save changes")

When an object is saved in a Mendix application running in an [offline profile](hybrid-phone-profile), this information is stored in a local database until it can be synchronized with the server. In practice, this means that uploading a new object to the server requires two distinct actions; saving the object and [syncing it.](offline#synchronization)

This flag indicates whether synchronization should happen when the save button is clicked.
