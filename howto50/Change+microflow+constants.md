---
title: "Change microflow constants"
category: "howto50"
space: "Mendix 5 How-to's"
---
## Description

This section describes how to change microflow constants under Linux.

## Instructions

To manage the scheduled events we have to edit the `m2ee.yaml` configuration file. See [Mendix Hosting Enviroment project structure and commands](Mendix+Hosting+Enviroment+project+structure+and+commands) about finding this file and opening it in an editor.

Somewhere at the middle of the configuration file, in the mxruntime section, you'll see the following content:

```
 MicroflowConstants:
  # put microflow constants in here
  #"Module.Constant": text
  #"AnotherModule.AnotherConstant": bla

```

In this configuration section, you can add constant definitions. The default values defined in the modeler will not be used in production environments, so you need to provide values for all used constants to be able to start the application.

Don't forget to indent the lines with the right amount of space characters.

Return to:
[![](attachments/819203/917564.png)](Change+microflow+constants)[(Back to Top)](Change+microflow+constants)