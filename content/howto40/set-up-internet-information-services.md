---
title: "Set up Internet Information Services"
parent: "mendix-on-windows---service-console-3"
---
## Description

This section describes how to configure a separate IIS environment as front-end for the Mendix application. All static web files must be handled by IIS, but all other URLs must be handled by the Mendix application.

For this behavior we use the ASP.NET component Managed Fusion URL Rewriter. This piece of software redirects some of the requests of IIS to the Mendix Runtime.

## Instructions

### First steps

If IIS runs at another system than the Mendix server, then the following step must be completed first:

*   Create the same folder structure on the IIS system as on the Mendix server system, but only with the folders needed to serve. These are the folders Application\web and Mendix\Servers\<version number>\runtime\mxclientsystem. Copy the contents of these folders from the Mendix system to the IIS system, maintaining the same folder structure.
    In fact, in our example, we now have the following folders:
    *   D:\Mendix\Apps\CustomerPortal\Project\web
    *   D:\Mendix\Servers\<version number>\runtime\mxclientsystem

Now follow the next steps:

1.  Create a new website that points to the folder Project\web (in our example: D:\Mendix\Apps\CustomerPortal\Project\web).
2.  Create a virtual folder in this website that points to the folder Mendix\<version number>\runtime\mxclientsystem (in our example: D:\Mendix\Servers\<version number>\runtime\mxclientsystem). Give the virtual folder the same alias: mxclientsystem.
3.  Add the MIME type text/xml for the extension .mxf
    IIS 6: Properties of the website --> tab page HTTP Headers --> MIME Types... --> Add...
    IIS 7(.5): MIME Types --> Add...
4.  In IIS 7(.5) (Windows Server 2008 (R2)) and 8 (Windows Server 2012), you must disable the IIS custom errors for the 'xas' requests.
    Integrate the following XML lines in to the web.config file, between the <configuration> elements:**web.config**
    ```xml
    	<location path="xas">
    		<system.webServer>
    			<httpErrors errorMode="Detailed" />
    		</system.webServer>
    	</location>

    ```

### Rewriter configuration

1.  Download the latest version of the Url Rewriter from [this website](http://urlrewriter.codeplex.com/).
    This rewriter has a proxy timeout of 100 seconds. If an action requires more time to execute and a user invokes this action, then the user will be logged off after 100 seconds. Mendix has changed the Url Rewriter and has extended the proxy timeout to 24 hours. This changed version, based on the original version 3.5.2, can be [downloaded here](attachments/2621620/2752956.zip), until there is an official version from Managed Fusion which supports longer timeouts.
2.  Make sure Microsoft .NET 2.0 SP1 or greater is installed on the server.
3.  If the machine runs IIS 6, follow the next instructions. For IIS 7(.5) or 8, skip this step.
    1.  Right click on the web site node, choose Properties and click on the tab ASP.NET. Make sure that at least 2.0.50727 is chosen as ASP.NET version.
    2.  Click on the tab Home Directory.
    3.  Click the 'Configuration' button under Application Settings section
    4.  Click the 'Insert...' button to create a new wildcard mapping
    5.  Set the executable textbox to the aspnet_isapi.dll file location. For .NET 2.0, 3.0, 3.5, this path is mostly C:\Windows\Microsoft.NET\Framework64\v2.0.50727\aspnet_isapi.dll on x64 systems and C:\Windows\Microsoft.NET\Framework\v2.0.50727\aspnet_isapi.dll on x86 systems.
    6.  Make sure the checkbox 'Verify that file exists' is NOT checked.
    7.  Press 'OK' to confirm and close all the windows.
4.  In Windows Explorer, go to the root folder of the website. This is the folder 'web' of the Mendix application.
5.  In this folder, the file 'web.config' should exist. If it does not exist, create this file and put the following text into it:**web.config**
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <configuration>
        <!-- Place the following configuration lines at this place. -->
    </configuration>

    ```

6.  Integrate the following XML lines in to the web.config file, between the <configuration> elements:**web.config**
    ```xml
    	<configSections>
    		<section name="managedFusion.rewriter" type="ManagedFusion.Rewriter.Configuration.ManagedFusionRewriterSectionGroup"/>
    	</configSections>
    	<managedFusion.rewriter xmlns="http://managedfusion.com/xsd/managedFusion/rewriter"/>

    ```

7.  Integrate the following XML lines into the web.config file, between the <configuration> elements:
    *   If the server runs Windows Server 2003 (R2) (IIS 6):**web.config**
        ```xml
        	<system.web>
        		<httpModules>
        			<add name="RewriterModule" type="ManagedFusion.Rewriter.RewriterModule, ManagedFusion.Rewriter"/>
        		</httpModules>
        	</system.web>

        ```

    *   If the server runs Windows Server 2008 (R2) (IIS 7/7.5) or Windows Service 2012 (IIS 8):**web.config**
        ```xml
        	<system.webServer>
        		<validation validateIntegratedModeConfiguration="false"/>
        		<modules runAllManagedModulesForAllRequests="true">
        			<add name="RewriterModule" type="ManagedFusion.Rewriter.RewriterModule, ManagedFusion.Rewriter"/>
        		</modules>
        		<handlers>
        			<add name="RewriterProxyHandler" preCondition="integratedMode" verb="*" path="RewriterProxy.axd" type="System.Web.HttpForbiddenHandler, System.Web, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"/>
        		</handlers>
        	</system.webServer>

        ```

8.  Create a new folder called 'bin' in the 'web' folder of the Mendix application
9.  Put the following files into this folder:
    *   ManagedFusion.Rewriter.dll
    *   ManagedFusion.Rewriter.pdb
        These files can be found in the Libraries folder of the downloaded ZIP file.
10.  Now we create a file with mapping rules. These rules are needed to define that all traffic for the Mendix Runtime must be redirected to that server. All other traffic (static files) can be handled by IIS.
    Create a file for the rules named 'ManagedFusion.Rewriter.txt' in the 'web' folder of the Mendix application. Put the following text into this file:**ManagedFusion.Rewriter.txt**
    ```
    RewriteEngine On

    RewriteCond %{QUERY_STRING}     ^(.+)$
    RewriteCond %{PATH_INFO}        !^/$
    RewriteCond %{PATH_INFO}        !^/forms/
    RewriteCond %{PATH_INFO}        !^/mobile/
    RewriteCond %{PATH_INFO}        !^/mxclientsystem/
    RewriteCond %{PATH_INFO}        !^/ui/
    RewriteCond %{PATH_INFO}        !^/widgets/
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^/?(.*)             http://localhost:8080/$1?%1 [P,L]

    RewriteCond %{QUERY_STRING}     ^$
    RewriteCond %{PATH_INFO}        !^/$
    RewriteCond %{PATH_INFO}        !^/forms/
    RewriteCond %{PATH_INFO}        !^/mobile/
    RewriteCond %{PATH_INFO}        !^/mxclientsystem/
    RewriteCond %{PATH_INFO}        !^/ui/
    RewriteCond %{PATH_INFO}        !^/widgets/
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^/?(.*)             http://localhost:8080/$1 [P,L]

    ```
    If your application is mobile-enabled, add the following lines to the same file:
    ```

    RewriteCond %{PATH_INFO}        ^/$
    RewriteCond %{QUERY_STRING}     ^$
    RewriteCond %{HTTP_USER_AGENT}  Phone [OR] #iPhone, Windows Phone
    RewriteCond %{HTTP_USER_AGENT}  iP[ao]d [OR]
    RewriteCond %{HTTP_USER_AGENT}  Android [OR]
    RewriteCond %{HTTP_USER_AGENT}  BlackBerry
    RewriteRule ^/$                 index-mobile.html  [L]

    ```
    In this file, the address [http://localhost:8080](http://localhost:8080) is visible twice. The address [http://localhost:8080](http://localhost:8080) means that all Runtime requests (such as /xas and /ws) will be redirected to [http://localhost:8080](http://localhost:8080). In this case, localhost:8080 is the location of the Mendix Runtime server. Change this address (at both places!) to the real location of your Mendix Runtime server.
    More information about the rule syntax can be found [here](http://httpd.apache.org/docs/2.0/mod/mod_rewrite.html).

**Known errors**
![(warning)](images/icons/emoticons/warning.png) _Error page or white page shown_
When using IIS 6 (Windows Server 2003) and an error page is shown or a white page after login, probably the redirection does not work. The cause can be that ASP.NET 2.0 is not allowed by IIS. In the IIS Manager, go to Web Service Extensions and check if ASP.NET v2.0.50727 has the status Allowed. When the item does not exist (ASP.NET v1.1.4322 is not the correct one!), make a new item which points to the library 'aspnet_isapi.dll', see the correct path above.

### Compression (optional)

To speed up the loading times of the application via IIS, compression can be set up. However, compression does not work in combination with version 6 (Windows XP) of Microsoft Internet Explorer. See for information about compression:

IIS 6

*   [http://weblogs.asp.net/owscott/archive/2004/01/12/IIS-Compression-in-IIS6.0.aspx](http://weblogs.asp.net/owscott/archive/2004/01/12/IIS-Compression-in-IIS6.0.aspx)
*   [http://www.microsoft.com/technet/prodtechnol/WindowsServer2003/Library/IIS/d52ff289-94d3-4085-bc4e-24eb4f312e0e.mspx?mfr=true](http://www.microsoft.com/technet/prodtechnol/WindowsServer2003/Library/IIS/d52ff289-94d3-4085-bc4e-24eb4f312e0e.mspx?mfr=true)

IIS 7

*   [http://weblogs.asp.net/owscott/archive/2009/02/22/iis-7-compression-good-bad-how-much.aspx](http://weblogs.asp.net/owscott/archive/2009/02/22/iis-7-compression-good-bad-how-much.aspx)
*   [http://technet.microsoft.com/nl-nl/library/cc771003(WS.10).aspx](http://technet.microsoft.com/nl-nl/library/cc771003%28WS.10%29.aspx)
