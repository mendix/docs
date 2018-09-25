---
title: "Anonymous User Security"
category: "Security"
---
When setting up anonymous access for your application you have to be wary about where you give the users access to. There are a few guidelines you have to remember otherwise you could make your entire application accessible to the public. 

When creating an anonymous user role, always make sure you give it as few access as possible. Because of this you never want to re-use module rules from your named user accounts. This is probably faster, but makes it much easier to give the anonymous user to much access to information in your application. When you are using anonymous users, any changes made to your object can never be traced back to the actual user since the user was anonymous and no longer exists. 

## Transient objects

When you setup access to a Transient Object, the security rules you specify should be whatever you functionally need. Transient Objects only live in the Session cache from the user that created the object, therefore an anonymous user is never able to access any information that wasn't create specifically for or by him. However for Persistent object it is a completely different situation.

## Write Access

If you give the anonymous user write access on any field in the application, you MUST specify instance access as well. It is hardly ever the case that an anonymous user is allowed to change every single record of a certain object type. It is most likely that the anonymous user is only allowed to change the record he just created, therefore you will want to specify an access rule: [System.Owner='[%CurrentUser%]'] 
That way the anonymous user can only change the records he just created, during his session. 

## Read Access

If an anonymous user needs to have access to certain Master Data tables, or needs to a name of a user in an overview, the anonymous user needs read access on that entity. However always limit its access. If the user doesn't need to have access to all fields don't give it just because that is only 1 button click. If you see an anonymous user with full read access, always confirm if he can't work with less access.

## Security Review

When going over an application and reviewing an anonymous user, it is most often three things that trigger a red flag indicating an application is not secure.

*   Anonymous User Role, that re-uses the Module Roles from your regular application user

*   Anonymous Module Role, that has Write access buy No Instance Access XPath Constraint

*   Anonymous Module Role, that has Full Read access on an entity. 

Whenever you see any of these situations, you should look closely if that is really necessary to achieve what you want to achieve. 

**Always be aware that limiting data in pages does NOT make your application secure.** The only way to make an application secure is by specifying Access Rules on all of your entities, and limiting the instances of objects that you are allowed to see. 

Any user can always talk directly to the API, just download any tool that can Post messages to a url and you can try sending JSON queries to the platform. That would simulate the communication between the browser and server. The server doesn't care (and doesn't need to care) who sends the messages as long as it matches with what is allowed within the session.

## Best Practice 

If you have anonymous access you need to limit the access to as few entities as possible, never give full read access to all attributes if it is just for selecting items. (For example if an anonymous user is allowed to see the project name, then only give read access to the project name not the full entity).

If you need to give an anonymous user access to change an object ALWAYS apply instance access as well. An anonymous user should NEVER have write access on all records in an entity. 

Limiting the navigation or page display is not the same thing as security. All data can be accessed by talking directly to the Platform API, anything that is visible according to the security model is accessible by sending the correct messages to the server. Limiting data in the UI does not mean that it isn’t possible to access. Only instance access rules guarantee what you can and cannot do. 

For example to download a file, it is possible to get the URL `https://myMendixApp.com/file? fileID=2804771`. All that is necessary is to try random numbers until a file is found that is accessible. Unless you specify instance or object access, in that case the platform would always validate the request against your privileges before presenting the information.

## Related content

*   [Security](security)
*   [Creating a secure app](creating-a-secure-app)
*   [Required Network Access for connecting to the Mendix Platform](/howtogeneral/support/troubleshoot-network-issues-for-team-server)
*   [Anonymous User Security](anonymous-user-security)
