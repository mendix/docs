---
title: "Installing the SAP GUI"
parent: "sap-integration"
---
To test or demo the SAP integration, it is necessary to send IDocs from SAP, and to view the received IDocs in SAP.

In order to do this you need to install the SAP GUI, which can be done as follows:

1.  Insert the CD with the text 'SAP GUI for Windows' into your pc.
2.  Run from the CD PRES1\GUI\WINDOWS\WIN32\SapGuiSetup.exe, expand SAP GUI for Windows : SAP GUI Suite, select SAP GUI and SAP Logon, Next etc.
3.  Put the attached file saplogon.ini into C:\WINDOWS.
4.  At the end of file C:\WINDOWS\system32\drivers\etc\services add line `sapmsMXS 3600/tcp`.
5.  Test the SAP GUI by running it, and log on to SAP IDES ERP. Username and password are idadmin and ides.
