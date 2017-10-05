---
title: "Preferences Dialog"
parent: "dialogs"
---
This dialog contains Modeler-wide user-specific settings.

The following preference categories are available:

## General

### Interface

#### Show a close button per tab instead of just one at the right

If checked, every document tab contains a close button (**X**). Otherwise, there is one close button on the right side of the document pane.

#### Keep active document selected in project explorer

If checked, the document selection in the project explorer automatically follows the document that is currently active in the document pane. Otherwise, the selection in the project explorer is remains unchanged when the active document changes.

### Error List

#### Auto-check delay

The auto-check delay is the number of milliseconds that the Modeler waits after a change, before starting the consistency checks. Increase this setting for large projects if the Modeler responses slowly after changes.

### Deployment

#### JDK directory

This is the directory in which the Java Development Kit (JDK) is located on the computer on which you deploy the application. Usually the correct directory is located automatically.

The JDK is necessary to run Mendix applications because the Mendix runtime is written in Java.

#### Enable run optimizations

Enable this setting to increase the speed at which a running application is updated after changes have been made in the Modeler. When only pages, layouts or snippets have been changed, an entire restart of the application is skipped to decrease deployment time. Also, no Java compilation is performed when no relevant files have changed.

## Model

### Pages

#### When prompted by a widget to automatically fill its contents, select 'Yes' by default.

This setting defines the default response to the question whether to automatically fill the contents of a data widget. This question is asked, for example, when dragging an Entity onto a Data View widget. When enabled, the preselected answer is 'yes', otherwise 'no'.

## Advanced

### File comparison

#### Executable

The path and name of the program that is used to view the details of file changes in the [commit dialog](commit-dialog).

#### Argument pattern

The pattern from which the arguments are derived that are passed to the file comparison program. The following two placeholders can be used in this pattern:

`{0}` this is replaced with the name of the original file before the arguments are passed to the file comparison program

`{1}` this is replaced with the name of the changed file before the arguments are passed to the file comparison program

### Version control

#### Enable support for SVN servers other than the Mendix Team Server.
Select this option when you want to work on an app that's not stored in the Team Server, but in another SVN server you have access to. This will allow you to specify the location of the app in the SVN server when, for example, opening or downloading an app, when managing branch lines, and when importing a project package.

### Proxy server

Sometimes the computer that's running the Modeler cannot access the internet directly, but has to connect to a proxy server that requires authentication. If this is the case, then these settings can be used to specify the user name and password to connect to the proxy server.
