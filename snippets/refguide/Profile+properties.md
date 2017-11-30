## Profile Properties

### General

**Enabled**

Specifies whether the profile is enabled. If a profile is enabled, it can be used to determine the home page when a user logs into the application. If it is disabled, users accessing the application with a matching profile will be redirected to the closest equivalent enabled profile.

<div class="alert alert-info">

The desktop profile is always enabled.

</div>

**Enable Offline Support (Only Hybrid Tablet and Hybrid Phone)**

Specifies whether the hybrid profile allows users to continue using their Mendix application without a working Internet connection. Pages that are available offline are subject to certain restrictions, which you can read [here](offline).

**Application Title**

Specify the application title. This title is shown in the title bar of the browser.

### Home Pages

**Default Home Page**

The default home page indicates which [page](page) or [microflow](microflow) is opened after a user has signs in. If role-based home pages (see below) are specified for one of the [user roles](user-roles) of the user, then that home page will be used instead.

### Role-Based Home Pages

By using role-based home pages you can show different home pages for different users. If a user logs in, the first role-based home page of which the user role matches a user role of the user is displayed. If no match is found, the default home page is used.

Per role-based home page you can specify the user role it applies to and the target (page or microflow) that will be opened.

### Authentication

If an [anonymous user](anonymous-users) tries to access a resource to which the user has no access, the configured [sign-in page](authentication-widgets) will be displayed, prompting the user to sign in.

If the sign-in page is set to none, a built-in pop-up window will appear instead. The page title may be overridden and is translatable.

### Menu

Each device type contains a default menu. You can use these menus in [menu widgets](menu-widgets). Defining the menu for a device type works in the same way as when editing a menu document.

See [Menu](menu).

<div class="alert alert-warning">

If [security](project-security) is enabled, the menu will only show items that the user has access to.

</div>
