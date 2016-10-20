---
title: "Anonymous Users"
parent: "Project+Security"
space: "Reference Guide 5"
---


### Allow anonymous users

Here you can configure whether anonymous users are allowed to access your application.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Yes</td><td class="confluenceTd">Anonymous users are allowed. End-users do not have to sign in to access the application. If the user clicks a button of which the microflow requires a user role other than the anonymous user role, the user is presented with a sign in screen.</td></tr><tr><td class="confluenceTd">No</td><td class="confluenceTd">Anonymous users are not allowed. End-users have to sign in to access the application.</td></tr></tbody></table>

### Anonymous user role

This is the user role that end-users of your application have when they are not signed in.

### Sign-in microflow

When anonymous users are allowed, here you can optionally configure a sign-in microflow. This microflow can be used to transfer data from the anonymous user to the signed-in user. In this microflow the current user is set to the signed-in user.

The sign-in microflow has two parameters.

<table><thead><tr><th class="confluenceTh">Name</th><th class="confluenceTh">Type</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">AnonymousUser</td><td class="confluenceTd">Object of entity 'System.User'</td><td class="confluenceTd">The 'User' object of the anonymous user. This object will be automatically deleted after the execution of the sign-in microflow.</td></tr><tr><td class="confluenceTd">SignedInUser</td><td class="confluenceTd">Object of entity 'System.User'</td><td class="confluenceTd">The 'User' object of the signed-in user.</td></tr></tbody></table><div class="alert alert-warning">{% markdown %}

Clean up objects that were attached to the anonymous user and that you do _not_ transfer to the signed-in user. Since the anonymous user is deleted after running the sign-in microflow, you can use [delete behavior](Associations) to automatically clean objects that were attached to the anonymous user.

{% endmarkdown %}</div>

The sign-in microflow is executed when an end-user:

1.  Uses your application without signing in (thus as an anonymous user), and then
2.  clicks a button for which she does not have access, which causes a sign-in screen to appear, and then
3.  signs in to your application.

<div class="alert alert-info">{% markdown %}

An anonymous user in a web shop adds some items to her shopping cart and then clicks the 'Check out' button. A sign-in screen appears, and the user signs in. The sign-in microflow is executed and transfers the shopping cart of the anonymous user to the signed-in user.

{% endmarkdown %}</div>
