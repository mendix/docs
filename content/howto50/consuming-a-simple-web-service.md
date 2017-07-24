---
title: "Consuming a simple Web Service"
category: "Integration"
---

Mendix is "The App Platform for the Enterprise" and in enterprise software it is not likely that you work in a [green field](https://en.wikipedia.org/wiki/Greenfield_project). In almost every situation you will need to integrate with existing systems. Mendix supports many ways of integration and this how-to focuses on how you can consume web services with Mendix. For this how-to we'll be using an example web service of w3schools. Please note that this is a very simple web service that converts temperatures from Celsius to Fahrenheit and backwards. The converted temperature will be returned as a string value that can be stored in a variable directly. If you want to invoke a web service that returns a complex XML message you can use XML-to-Domain mappings explained in this [how-to](importing-xml-documents).

## 1\. Importing a WSDL

A WSDL describes the operations of a web service and can be imported in the Mendix Modeler. After importing the WSDL you can invoke the operations of the web service instantly within the Microflow editor.

1.  Right click a module in the project explorer and select **Add > Document** from the menu. You can also use shortcut **Ctrl+N**.
    ![](attachments/7831673/8028244.png)
2.  Select **Consumed web service** as document type and select a module or folder as target location.
    ![](attachments/7831673/8028245.png)
3.  Click **OK** and enter a name for the new consumed web service, e.g. _TemperatureConverter_.
4.  Click **OK** again. You should now see the consumed web service editor.
    ![](attachments/7831673/8028246.png)
5.  Enter `http://www.w3schools.com/xml/tempconvert.asmx?WSDL` as URL and click **Import**. You will see a popup asking you to select a web service port.
    ![](attachments/7831673/17662027.png)
6.  Click **OK** to select the default. The Mendix Modeler should now import the operations: **CelsiusToFahrenheit** and **FahrenheitToCelcius**.
    ![](attachments/7831673/8028247.png)
7.  Click **OK** to save the consumed web service.

## 2\. Creating logic to call web service

1.  Right click a module in the project explorer and select **Add > Document** from the menu. You can also use shortcut **Ctrl+N**.
    ![](attachments/7831673/8028244.png)
2.  Select **Microflow** as document type and select a module or folder as target location.
    ![](attachments/7831673/8028248.png)
3.  Click **OK** and enter a name for the new microflow, e.g. _ConvertCelsiusToFahrenheit_.
4.  Click **OK** again. You should now see an empty microflow.
    ![](attachments/7831673/8028250.png)
5.  Open the toolbox. It should be on the bottom right of the Mendix Modeler.
    ![](attachments/8784287/8946802.png)
6.  If you can't find the toolbox, you can re-open it from the view menu.
    ![](attachments/7831673/8945708.png)
7.  Drag a **Create variable** activity from the toolbox to the line between the start and end event. This inserts a new activity.
8.  Double click the new activity to open the properties editor.
    ![](attachments/7831673/8028251.png)
9.  Select **_Integer/Long_** as data type.
10.  Enter **100 **as value.
11.  Use **TemperatureInCelsius** as output variable name.
12.  Click **OK.** The microflow should look like this:
    ![](attachments/7831673/8028252.png)
13.  Drag a **Call web service** activity from the toolbox to the line between the start and end event. This inserts a new activity.
14.  Double click the new activity to open the properties editor.
    ![](attachments/7831673/8028254.png)
15.  Click **Select...** to open the web service operation selector.
    ![](attachments/7831673/8028255.png)
16.  Click 'CelsiusToFahrenheit' and click 'Select'.
17.  Double click to input parameter 'Celsius (optional)'.
    ![](attachments/7831673/8028256.png)
18.  Enter **toString($TemperatureInCelsius)**as expression. The web service operation expects a string value, that's why you need to use the toString function.
19.  Click **OK.
    **![](attachments/7831673/8028257.png)
20.  Make sure that you store the result in a variable.
21.  Name the variable **TemperatureInFahrenheit**.
22.  Click **OK**, the microflow should now look like this:
    ![](attachments/7831673/8028258.png)
23.  Drag a **Show message** activity from the toolbox to the line between the start and end event. This inserts a new activity.
24.  Double click the new activity to open the properties editor.
    ![](attachments/7831673/8028260.png)
25.  Select **Information** as type.
26.  Enter **The temperature in fahrenheit is: {1}**as template. The _{1} _functions as a placeholder for the parameters below.
27.  Create a new parameter and enter **_$TemperatureInFahrenheit_** as expression. This is the return value of the web service operation.
    ![](attachments/7831673/8028259.png)
28.  Click **OK**.
29.  Click **OK** again to save the **Show message activity** properties. The microflow should now look like this:
    ![](attachments/7831673/8028261.png)
30.  Create a menu item that triggers this microflow. If you don't know how to create a menu item take a look at this [how-to](setting-up-the-navigation-structure).
31.  Deploy the application and trigger the microflow to call the web service operation. You should see a message with the converted temperature.

## 3\. Related content

*   [Security](security)
