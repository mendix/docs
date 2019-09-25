---
title: "SAML"
category: "Modules"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The SAML module can be used as a replacement or extension of your supported authentication methods. The module allows you to authenticate your user using SAML2.0 or the Shibboleth protocol.

By configuring the information about all Identity Providers in this module, you will allow the users to login using the correct IdP. There is no limit on the number of different IdentityProviders you can configure. 

## 2 Typical usage scenario

Authenticate agains your Microsoft Active Directory server in a secure manner. The SAML protocol allows for encryption of all the information transferred between the two servers, so no more need for vpn connections and ldap or kerberos authentication. 
Features and limitations

Configure all options allowed in the SAML2.0 specification. 

There is no support (yet) for the SOAP binding.SAML1.0 is not supported.
Dependencies

    Depending on the module version, Mx7, Mx6 or Mx5
    MxModelReflection

Installation

 

    Configure the microflow 'Startup' to run as the startup microflow. This microflow will initialize the custom request handler /SSO/, validates all IdP configurations, and prepares any configuration entities required during the configuration.
    Add the microflow 'OpenConfiguration' to the navigation, and allow the administrator to access this page.
    Review/Configure all Constants
        DefaultLoginPage,You could specify another login page here, for example when you configured the index.html page to redirect to '/SSO/'.   This constant is only used in case the login process fails.When the user cannot be authenticated in Mendix, he will be presented with a page. If this constant is specified a button will show up, and by clicking this button it will redirect the user to the default login page. For example index.html or login.html
        DefaultLogoutPage,It is recommended to remove the sign out button, but if you choose to keep the sign out button the user will be redirected to a page. To prevent it from confusing the user you can choose where the user is being redirected to. This can be back to /SSO/ or to your login.html page for example.Every user signed in via SAML will be redirected to this location when he is logged out.
        SSOLandingPage, You could specify a different landing page here, for example: When you would like to redirect all user, accessing the application url, to the Saml login.  This requires you to change the index.html page by adding '<meta http-equiv="refresh" content="0;URL=/SSO/" />', you don't want to end up on 'index.html' again after a login attempt.  By changing this constant to '/index3.html', you'll land on index3.html instead of index.html.  Off course you will need to add an 'index3.html' page to your theme in this case! (You can copy the original index.html into index3.html)
    Login to the application and configure the SAML module.

Configuration

Before any of the Identity Providers (IdPs) can be configured, you will need to configure the Service Provider (SP). Which is your current application. 

The SP Configuration, allows you to configure some basic information for the SP Metadata file, this allows for some basic information to be available in the IdP for reference of the IdP administrator.

The Entity Id, Organization and Contact person are for you to choose what you want to enter. There are no limitations here. This should be in line with the policies of the IdP, since all this information is for their reference. 

 

    Allow IdP DiscoveryWhen using multiplen IdPs, do you allow the users to get a list of all available IdPs if they haven't specified a specific IdP in the login request. When going to /SSO/, if you have only 1 active IdP the module will use the active IdP by default. In case you have multiple IdPs it is required to include the IdP in the URL. This can be done by using the url:  /SSO/login/[IdP Alias]  or with url: /SSO/login?_idp_id=[IdP_Alias]
    Keep log filesAll attempts to login are tracked in the SAMLRequest entity and the SSOLog entity. This attribute configures how long those records are kept before removing them. A scheduled event runs daily to remove all files outside that date range. This value is mandatory, when keeping it 0 all records will be removed daily. 
    Use Encryption [Key length: No Encryption / 1024bit Encryption / 2048bit Encryption] [Encryption method: SHA1 / SHA256]This allows the encryption of any messages being send from the SP to the IdP. If encryption is chosen, all messages going out to the IdP will be encrypted and a self signed certificate is being generated and stored in the keystore.Changing the encryption requires all IdPs to re-import the new metadata file. 
    KeyStoreAll certificates required for encryption are stored in the keystore. Resetting the keystore or uploading another keystore will require all IdPs to import the new metadata file. If you use a custom keystore, make sure the alias of the keystore is the same as the SP entity ID. Also make sure the new keystore password is set in the KeystorePassword constant.

Accessing the Metadata can be done by downloading the XML file, or you can access the metadata by opening the url:   http://www.app.com/SSO/metadata 
 
Create a new IdP Configuration
When creating a new IdP configuration you are guided through a 4-6 step workflow to help you to configure everything required for the IdP configuration.  Each option in the workflow is explained below.
Upon completing these steps you only need to send the metadata file to the IdP and have them to configure the authentication on their end. 
 
Configure the IdP specific settings
Each IdP (Entity Descriptor) should have its own configuration set. Every IdP can be configured and enabled separately. All changes made in the configuration are immediately applied when you save the configuration. 
 
General

    AliasThe alias will be used in the URL of the application to indicate the IdP configuration that should be used during login. There are no validations on this fields, besides that it's required. But you should make sure that this alias is compatible with usage in an url. So no /, &, ?, or any special character which can get lost in the communication.
    Log SAML requestsShould all requests and login attempts be logged and stored in an entity.

Identity Provider Metadata

    IdP Metadata LocationThe module is capable of re-importing all IdP Metadata files on a daily basis. Or you can choose to import the metadata from a file. 
        Metadata overviewThis overview shows all the information that has been found in the IdP metadata information. It's usually not necessary to do anything here, but it can be useful in order to review the possible IdP and SP configuration options.

User Provisioning 

    Uses InCommon Federation Standard IdPs that use the InCommon standard often don't specify the Assertion Attributes, when following the InCommon standard a fixed set of Assertion Attributes will be available to choose from later on. 
    Identifying assertion (aka Principal Key) Specifies which of the Assertion Attributes identifies the User Name. (Note: In Mx7 all usernames passing through the SAML module are converted to lowercase before login and creation, so we strongly advise you to convert all existing and new user names to lowercase as well)
    User entityThe Mendix entity in which you will store/lookup the user account. Most often something like Administration.Account
    AttributeOn which attribute you want to do the look-up, this attribute will be compared against the passed 'Identifying Assertion'.
    User ActionThe module will always search for the user, based on the Identifying Assertion. You can allow the module to create users with a predefined user role. If you allow the module to create users it will automatically create a new user account if the user cannot be found.  If the module is not allowed to create users, it will present a message to the user stating that the login action was successful but no user has been configured. 
    Default user roleThis role will be assigned to newly created users.
    Use custom logic in user provisioningIf you want to add your own logic to the user provisioning, enable this function and use the CustomUserProvisioning to point to your custom logic. This microflow will be executed after the user has been created or updated through the default user provisioning provided by the module (using the settings above).
    Just in time provisioningDuring the login process all fields from the Assertions can be copied into the user account entity. All Claim fields from the Assertion will be copied into the selected Mx User Attribute. 
        Claim
        Mx User attribute

 

Authentication Context

    Prefered entity descriptorThe IdP Metadata can contain references to many different IdPs or SPs. This option allows you to select which of the IdPs ought to be used when a user tries to login using this IdP configuration.
    IdP authentication propertiesWhen sending out requests the options below have to be configured according to the specification of the IdP server.
        Authentication context comparison
    Disable name ID policyCheck this to disable the use of a name ID policy. This means you will use another attribute or claim to identify users.
    Preferred name idIf using a name ID policy it is mandatory to specify the name id method. Every IdP is supposed to support transient, but that does not have to guarantee a fixed username. It is up to the IdP and your user Provisioning implementation what the best solution is here. 
    Authentication context classesPasses the allowed authentication methods. This has to be whatever the IdP requests, there are no requirements within this module and all options are available. For the SAML protocol the SP is required to pass in the authentication context, however it's not recommendable to pass all options since that leads to significantly bigger (and slower) message exchange.
    Allow Idp Initiated AuthenticationBy default the module does not allow for unsolicited request. That means that every login has to be initiated from the Mendix application, and all messages have to be exchanged using the same RequestID and RelayState. Some IdPs do not allow for the RelayState to be passed or the authentication could be initiated by the IdP instead of at the SP. For all situations where the RelayState is not being generated or passed from the original login action at Mendix this option should be enabled.By default it does not allow for unsolicited requests because that can be considered less secure.

 
Advanced Configuration
The resource folder contains a file called "SAMLConfig.properties". In this file you can optionally override advanced settings from the SAML module. Usage of this file is optional, when the file doesn't exists or when you don't specify a setting the module will keep using it's default behavior. 
The file contains the documented properties, and example lines show the default values of these options.
With these settings you can configure the behavior of this module and improve multitentant behavior of your application. For plain SAML authentication it is best to leave this file unchanged. 
 
 
Debugging the Configuration
When testing and debugging the configuration an option is to view the messages in the log files. A detailed cause of the failure will be printed in case something goes wrong. When enabling the lognode SSO to show trace messages, you can find detailed information from every step in the process. This allows for an easy analysis of where potential configuration errors recite.Enabling Trace messages for the SSO lognode will also allow for detailed response messages to the user trying to login. By default every failed login attempt will always result in the message: "Unable to validate the SAML message!". After enabling Trace logging you can see the exact cause of the failure in the browser. In case of exceptions you can even see the stacktrace.  Obviously you should not have this enable in production, but it does allow for easier and faster testing of the configuration.
 
Error Messages

    "The application hasn't been properly configured to support Single Sign On."This message indicates an incomplete IdP configuration. In the more detailed error messages (log file) you will be able to see which property in the IdP configuration has not been configured.
    "Unable to complete the request"A message has been received that doesn't have an RelayState / RequestID that matches any of the previously generated Ids (or the message has been answered already). If you get this message you should validate the message communication and confirm that you are not using unsolicited requests. Or if you want to enable that check the box to allow for IdP initiated authentication. 
    "The authentication was successful, but there is no account available in this application."There is no account that matches the Identifying Assertion, by downloading the SAMLResponse message you can see the Assertion attributes in the XML file to validate which username has been send. 
    "Your account hasn't been configured to access this application."There is a user account available in the application that matches the Identifying Assertion, but the user does not have userroles or the user is not Active. 
    "An unexpected error occured while creating a session"An uncaught exception occured, this can be a configuration error or a situation that has not been supported by the module. More information should be available in the stacktrace.
    "The response from the identity provider isn't valid."The response from the IdP does not contain any Assertion Attributes.
    "No valid SSO Configuration could be found for entity Id: [IdP Alias]"Either the specified IdP configuration has not been activated, or an error occurred when reloading the configuration. The error message when reloading the configuration should give more information about the exact problem.The configuration is being loaded on start-up, when (de-)activating the configuration, or when saving an active configuration. 
    "Unsupported action: [action], only ....."The URL is incorrect. Validate that the url is correctly structured: http://www.app.com/SSO/ [action:  login, assertion, metadata, discovery]
    “MSIS7046: The SAML protocol parameter ‘RelayState’ was not found or not valid.” This error can be shown on the ADFS server, most likely when you are using Mac OSX and a Safari browser. Setting the 'BindingURI_Redirect' constant to true might help you resolve the issue. By default we favour the Post binding as the maximum size exceeds that of a Redirect binding due to it using cookies and post information instead of URL parameters (redirect). The size can be a factor when using encryption.

    "Unable to validate Response, see SAMLRequest overview for detailed response. Error: An error occured while commiting user: p:'johndoe@company.com'/u:'JoHnDoE@CoMpAnY.CoM'" In Mx7 all usernames passing through the SAML module are converted to lowercase, so make sure all existing user names and new user names are also converted to lowercase. We have made this decision because certain systems are not case sensitive (e.g. Active Directory) and also because we do not believe it is a good idea to create two unique users for, for example, "JoHnDoE@CoMpAnY.CoM" and "johndoe@company.com".

URLs

    /SSO/metadataProvides a point for the IdP to automatically download the Metadata from this SP.
    /SSO/discoveryIn case of multiple active IdP configurations, and if discovery is enabled, this page can give a list of all the IdP configurations and allows the user to click on the correct url to login.
    /SSO/login/[IdP Alias]  /SSO/login?_idp_id=[IdP_Alias]For logging using a specific IdP you have to open either of these two urls, and pass the IdP alias as a parameter in the url.
    /SSO/login/SSO/If you have only 1 active IdP, opening these urls will automatically try to log you in using the active IdP. In case of multiple active IdPs and discovery enable, the user will be redirected to the discovery page.  If discovery is not allowed the user will receive an error message.

 
Custom Behavior

    evaluateMultipleUserMatches

The module tries to lookup the user that matches the provided username. When multiple System.User records are found this microflow is always executed. It is possible to customize this microflow to determine the correct user. Whichever user instance is returned will be signed in to the application (and passed on to any other microflow).

    CustomUserProvioning

When choosing in the SSO configuration to run the customUserProvisioning action (previously known as CustomLoginLogic) you can update the new or retrieved user with additional information from the assertion.All assertions are passed into the microflow which can be transformed and stored in the user record, or additional roles can be granted to the users based on the AssertionAttributes.

    CustomAfterSigninLogic

After a new session is created for the user this microflow can be called to copy any data from the previous session to the new session. This microflow behaves similar to the platform after sign-in microflow, using this microflow it is possible to copy records from the anonymous user to the newly signed-in user.

 
Custom Settings

The resources folder contains the file: SAMLConfig.properties through this file advanced settings can be configured for the module. The property file contains the settings with documentation for each of the settings. Through this file it is possible to alter the urls used, how the application behaves in a multi-tenant environment and it allows to setup several advanced settings.The file specifies all the default values and behavior in more detail.