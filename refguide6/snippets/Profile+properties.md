## Profile properties

### General

**Enabled (only Tablet, Phone, and Offline device)**

Specifies whether the profile is enabled. If a profile is enabled, it can be used to determine the home page when a user logs into the application. If it is disabled, users accessing the application with a matching profile will be redirected to the nearest equivalent enabled profile. 

<div class="alert alert-info">{% markdown %}

The Desktop profile is always enabled.

{% endmarkdown %}</div>

**Application title**

Here you can specify the application title. This title is shown in the title bar of the browser.

### Home Pages

**Default home page**

The default home page indicates which [page](Page) or [microflow](Microflow) is opened when a user has just signed in. If role-based home pages (see below) are specified for one of the [user roles](User+Roles) of the user, then that home page will be used instead.

### Role-based home pages

By using role-based home pages you can show different home pages for different users. If an end user logs in, the first role-based home page of which the user role matches a user role of the user is displayed. If no match is found, the default home page is used.

Per role-based home page you can specify the user role it applies to and the target (page or microflow) that will be opened.

### Menu

Each device type contains a default menu. You can use these menus in [menu widgets](Menu+Widgets). Defining the menu for a device type works in the same way as when editing a menu document.

See [Menu](Menu).

<div class="alert alert-warning">{% markdown %}

If [security](Project+Security) is enabled, the menu will only show items that the user has access to.

{% endmarkdown %}</div>
