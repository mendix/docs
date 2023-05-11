---
title: "After Startup Error?"
url: /addons/apd-addon/ig-one-after-startup-error/
---

Sometimes after startup an error in java occurs when Mendix generates a different parameter name in a different Mendix version. If this happens, let me know via apmtool@clevr.com, so CLEVR can rename the java action parameter that causes this.
You can solve this the following way. First you open the project folder:
{{< figure src="/attachments/addons/apd-addon/ig/ig-one/ig-one-installation-steps/ig-one-after-startup-error/Show_Project_Dir.png" >}}

And search for the file in the javasource/ apmagent/actions folder
{{< figure src="/attachments/addons/apd-addon/ig/ig-one/ig-one-installation-steps/ig-one-after-startup-error/Explorer_Actions_Folder.png" >}}

You have to change the old parameter name into the new parameter name in java in the code between the lines
// BEGIN USER CODE
and
// END USER CODE
.
Sample java file that Mendix generates with some fictive parameter mismatch:
{{< figure src="/attachments/addons/apd-addon/ig/ig-one/ig-one-installation-steps/ig-one-after-startup-error/Action_Java_Source.png" >}}
