---
title: "Machine Learning Kit"
url: /refguide/machine-learning-kit/
category: Integration
weight: 35
tags: ["studio pro", "machine learning", "ml kit", "models"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

[Machine learning model support is currently in [Beta](/releasenotes/beta-features/).

In Studio Pro [9.23] and above, you can build apps that support integration with machine learning models. Collectively called the Mendix Machine Learning (ML) Kit, these functionalities are built using common AI framework and language, and include deployment support for common AI frameworks.

### 1.1 Under the Hood {#ml-kit-hood}

The Mendix ML Kit is built with the Open Neural Network Exchange (ONNX), an open-source framework co-developed by Microsoft and Facebook in 2017 to enable framework interoperability. ONNX is an open standard format representing machine learning models. Models trained with various frameworks, ranging from scikit-learn to PyTorch or TensorFlow, can be converted to ONNX.

The ONNX Runtime is based on the ONNX standard, and is an optimized inference engine for efficiently running any model converted to the ONNX format across different hardware and operating systems with minimum effort. Due to this framework interoperability nature of ONNX, ONNX Runtime improves the development efficiency from model training to inference. With the ML Kit, we have extended Mendix runtime with ONNX runtime. ONNX bridges the gap between AI frameworks and Mendix.

## 2 Usage {#usage}

### 2.1 Converting Your Model to ONNX {#convert-ml-model}

To embed your ML model into a Mendix app, you need to convert your model into the ONNX format. Depending upon the frameworks and tools used to create the ML model, there are many tools and sources to convert a model to ONNX format. 

Examples include the following:

* [PyTorch](https://pytorch.org/docs/stable/onnx) 
* [TensorFlow to ONNX](https://github.com/onnx/tensorflow-onnx)
* [Scikit-learn to ONNX](https://github.com/onnx/sklearn-onnx)

### 2.2 Importing the Model {#import-model}

To use the ML model in your app, you first need to import it.

1. Right-click on the desired module and select **Add other > ML model mapping**.
2. Add a name for the mapping document.
3. Click **Import Model** to import your ONNX file.

This will generate two non-persistable entities representing your ML Model input and outputs (see [Persistable and Non-Persistable Entities](#persist-nonpersist-entities) below).


{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/ml-model-created-entities.png" alt="Two non-persistable entities generated when importing an ONNX file." >}}

If error CE1790 is thrown, you will need to [set dynamic tensor shapes](#tensor-shapes).

#### 2.2.1 Locating the Model Directory {#model-directory}

The ML model in ONNX format will be placed in the `mlsource/<your_module_name>` folder from the App/Show App Directory in Explorer.

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/mlsource-location.png" alt="Location of the ML model in a file explorer." >}}

Store any additional files in the same directory, including the following:

* Text files for storing class names
* Additional files that your model or ML process uses (encoders, text files, corpora)

This way, the files will be packaged with your app, and you can easily refer to them in microflow actions.

#### 2.2.2 Setting Tensor Shapes {#tensor-shapes}

Tensors inject and retrieve information from a machine learning model. A distinctive trait of such an entity mapping is the tensor Shape, or the definition of the dimensions a tensor has.

2.2.2.1 Static Shapes {#static-shapes}

ML Kit will detect models with static shapes automatically and display them in the Mapping:

![ResNet50 Mapping with static dimensions: It accepts 1 image of 3 channels (colors) of 224x224 pixels](https://paper-attachments.dropboxusercontent.com/s_F19B5057CF910819DD4979B74DBA21AFABE41F48C813CF87BBA941642B25F067_1674460605858_image.png)


##### 2.2.2.2 Dynamic Shapes {#dynamic-shapes}

Several models (including EasyOCR and Yolo) have tensors with dynamic shapes. In these cases, decide on a tensor mapped static shape and attribute type in a mapped entity before integrating in microflows.

###### 2.2.2.2.1 Setting Dynamic Tensor Shape Mapping (Error 1790)

When importing your model, you might encounter error CE1790. Go to the error and double-click on the affected mapping line to open the Edit ML model input shapes dialog box:

![Tensor mapping for an EasyOCR Detector model](https://paper-attachments.dropboxusercontent.com/s_F19B5057CF910819DD4979B74DBA21AFABE41F48C813CF87BBA941642B25F067_1674460858139_image.png)


In this case, the -1 dimensions should be configured before using the mapping in a Call ML Model Activity. Once filled, static tensor shapes of an output mapping will be automatically calculated based on configured dimensions of the input entity mappings:

![Properly filled model mapping with the desired dimensions](https://paper-attachments.dropboxusercontent.com/s_F19B5057CF910819DD4979B74DBA21AFABE41F48C813CF87BBA941642B25F067_1674460981201_image.png)


Note: some these shapes should be handled in Java Action pre- and post-processors you may have (see the topic below).

#### 2.2.3 Persistable and Non Persistable Entities {#persist-nonpersist-entities}
After importing a model non-persistable entities will be created using the input type. 

![Entities from the Titanic survivor xgboost model](https://paper-attachments.dropboxusercontent.com/s_F19B5057CF910819DD4979B74DBA21AFABE41F48C813CF87BBA941642B25F067_1674461423838_image.png)


For non-structured data, such as most of the tensors for Neural Networks, an entity attribute will be a `String`.  This is because Base64 is used to to encode the tensors to and from MLKit:

![Mapping from a ResNet50 from ONXX Model zoo](https://paper-attachments.dropboxusercontent.com/s_F19B5057CF910819DD4979B74DBA21AFABE41F48C813CF87BBA941642B25F067_1674461523505_image.png)


##### 2.2.3.1 Converting to Persistable Entities

You can convert these entities into Persistable ones and use other types, such as Binary. This can be done to decrease inference latency of ML mappings document used in Call ML Model Activity. 

To do so, open the entity Properties in the Domain Model, and select Yes in the Persistable section.

![](https://paper-attachments.dropboxusercontent.com/s_F19B5057CF910819DD4979B74DBA21AFABE41F48C813CF87BBA941642B25F067_1674461682924_image.png)


You now have a Persistable entity in your Domain Model that you can set as the type you need, and that can be used in pre- and post-processors [link to section].
 
### 2.3 Using the Model in a Microflow

Once the ML mapping document is created, the ML model is available in the Studio Pro. Use the Call ML model activity in microflows to call and use your ML model in your application logic.

Drag and drop the Call ML model action from the toolbar in the Microflow editor to use it. 

#### 2.3.1 Example of a Model Microflow


![](https://paper-attachments.dropboxusercontent.com/s_5E4F633166D614F309877C2287B1B3E5F838F0D45F24422C0A4FECBB43036E88_1673957667848_image.png)


In the microflow above, a Create object activity creates an object of input entity type, mapped to input tensors in the ML mapping document [link to section above]. The Call ML model activity calls the model, and a Change object activity updates business object with predicted value.

#### 2.3.1 Call ML Model Activity Details

The Call ML model activity consists of the following:


- a model drop-down dialog that will list all the mappings created in [Importing the Model]
- an Input section that consumes an object of type Input from the ML Mapping Document and produces an Output type object as per the mapping

The Input object in ML Kit expects the same Object Type—not the entity—as in the Import mapping.

The table below shows an example of a logistic regression, its netron.app schema and the component display, along with the ML Mapping:

![](https://paper-attachments.dropboxusercontent.com/s_5E4F633166D614F309877C2287B1B3E5F838F0D45F24422C0A4FECBB43036E88_1673957703921_image.png)

![](https://paper-attachments.dropboxusercontent.com/s_F19B5057CF910819DD4979B74DBA21AFABE41F48C813CF87BBA941642B25F067_1675867290215_image.png)


Create pre-processed inputs with Create Object Action for inference inside your Mendix App, and consume inference output with microflow expressions. 

In [Integrating Models with Pre- and Post-Processors] , a Create Object activity is used for the first part in order to transfer entities from the Domain Model to the model input object. Then, a create a variable action turns the numeric output into a string, and change variable stores it in the same Domain Model.


![](https://paper-attachments.dropboxusercontent.com/s_5E4F633166D614F309877C2287B1B3E5F838F0D45F24422C0A4FECBB43036E88_1673960611756_image.png)

![](https://paper-attachments.dropboxusercontent.com/s_5E4F633166D614F309877C2287B1B3E5F838F0D45F24422C0A4FECBB43036E88_1673960629720_image.png)

![](https://paper-attachments.dropboxusercontent.com/s_5E4F633166D614F309877C2287B1B3E5F838F0D45F24422C0A4FECBB43036E88_1673960638735_image.png)


## 3 Integrating Models with Pre-processors and Post-processors

Integrating machine learning models can sometimes require using a more complex structure. This incudes having a pre-processor, the model itself, and a post-processor:


![](https://paper-attachments.dropboxusercontent.com/s_5E4F633166D614F309877C2287B1B3E5F838F0D45F24422C0A4FECBB43036E88_1673614733623_pre-+post-processing+microflow.png)


### 3.1 How Processing Works {#processing}

The Pre-processor is the block of code that manipulates the data before being injected into the model. Some common examples of the pre-processing are Normalization and missing data handling. The required pre-processing vary a lot with each model and implementation, and even be part of the ONNX file itself, as they are quite coupled with the model, its training process, and the domain of knowledge. 

The important thing to keep in mind is that it is currently required to have any multidimensional data as a string encoded using the base64 format. Note: Any multidimensional data has to be encoded, either in string base64 format if you are using non-persistable entities, or binary streams if you opt for persistable entities for the model in the mapping (see section 2.2.3).

Below you can see two models (a very simple Scikit-learn random forest and a ResNet50 network), and their netron.app schemas, and how these are rendered by the Call ML Model activity.


![](https://paper-attachments.dropboxusercontent.com/s_5E4F633166D614F309877C2287B1B3E5F838F0D45F24422C0A4FECBB43036E88_1673261791292_image.png)


In this example, the [Call ML Model] action adapts to the model output. If you intend to use a multidimensional output in this stage (such as in the ResNet), it will come out string-encoded using base64 (link to section about persistable entities), and thus it will require probably that you post-process the output.

Once you import your model, the Call ML Model action allows you to add your input variable coming from the previous action, and name your output to be used in any ulterior steps.


![](https://paper-attachments.dropboxusercontent.com/s_5E4F633166D614F309877C2287B1B3E5F838F0D45F24422C0A4FECBB43036E88_1673960917525_image.png)


### 3.2 Pre-processing and Post-processing using Java Actions


Data transformations are usually complex tasks, and often require mathematical libraries or even more complex pieces of software (think OpenCV for computer vision). As a result, sometimes they are not integrated into the model. In this case, the best way to perform these transformations in Mendix using Java Actions (see https://docs.mendix.com/refguide/extending-your-application-with-custom-java/).
 
Read the sections below for an example of pre-processing and post-processing using Java Actions in Mendix.

#### 3.2.1 Pre-processing

[This uses a Random Forest example trained with the Iris/Setosa dataset. The output is a long single variable. The input is a string, as we will use Base64 encoded strings for passing multidimensional data to the Call ML Model action at this stage of development.

The pre-processor is essentially a standard Java Action that receives the multidimensional input for your model and in this case, encodes the data into a string with Base64 (see line 14 below). Another important step is to convert the Decimal data type into float, as the ONNX format uses that data type. But this may vary along models and implementations.


    @java.lang.Override
    public IMendixObject executeAction() throws Exception 
    {
      this.Parameter = this.__Parameter == null ? null : iris_randomforest.proxies.Iris.initialize(getContext(), __Parameter);
    
      // BEGIN USER CODE
      // 1. convert entity object to float array
      float[] inputFeature = new float[4];
      inputFeature[0] = Parameter.getsepalLength().floatValue();
      inputFeature[1] = Parameter.getsepalWidth().floatValue();
      inputFeature[2] = Parameter.getpetalLength().floatValue();
      inputFeature[3] = Parameter.getpetalWidth().floatValue();
      // 2. convert input feature array to base 64
      InputStream is = MLKit.toInputStream(inputFeature);
      String base64 = MLKit.toBase64(is);
      // 3. create output entity object
      IMendixObject outputObject = Core.instantiate(getContext(), "Iris_RandomForest.ML_Input_Entity_Iris_RF_ML_Model");
      outputObject.setValue(getContext(), "Float_input", base64);
      return outputObject;
      // END USER CODE
    }

#### 3.2.2 Post-processing

The rationale for using a post-processor is quite similar to the pre-processor but in the opposite direction. We’re going to extract something out of the model and do something with it. For more complex models, the output can be multidimensional, and then decoding is required. In this example, the post-processor is to map it using a class map in order to get not ids nor probabilities, but the class name, using a file already present in the artifacts directory.

```
    @java.lang.Override
    public java.lang.String executeAction() throws Exception
    {
    this.Parameter = this.__Parameter == null ? null : iris_randomforest.proxies.ML_Output_Entity_Iris_RF_ML_Model.initialize(getContext(), __Parameter);
    
      // BEGIN USER CODE
      if (Parameter.getOutput_label() == 0) {
        return "Setosa";
      } else if (Parameter.getOutput_label() == 1) {
        return "Versicolour";
      } else
        return "Virginica";
      // END USER CODE
    }
```

You can look into the CVPublicDemo app for more complex examples of Java Actions. It covers using a ResNet50 Neural Network, thus image pre-processing is required.

## 4 Supported Frameworks and Libraries {#supported-frameworks}

To ensure that your model will work with the Call ML Model action, follow the guidelines in this section.

The MLKit comes with native support to ONNX Runtime, which means Mendix developers are free to use the right machine learning framework or library for their use cases. Mendix developers can use the native ONNX operators or use the major machine learning libraries like Tensorflow, PyTorch, scikit-learn, XGBoost, etc. to develop their models, preprocessing, and post-processing actions.
To learn more about design patterns that can be applied to the Inference process, and  specifications that for pre/post-processing while using Mendix components, Java Actions, or embedding it into the model directly, see [Design Patterns].

### 4.1 Model Building

The MLKit comes with native support to ONNX Runtime, which means Mendix developers are free to use the right machine learning framework or library for their use cases. Mendix developers can use the native ONNX operators or use the major machine learning libraries like Tensorflow, PyTorch, XGBoost, etc. to develop their models, preprocessing, and post-processing actions.
The artifacts (HDF5, protocol buffers, pickle, etc.) should be converted to ONNX computation graphs in order to integrate them into apps using the ML Kit. ONNX community develops and maintains the converters for many ML frameworks. Please check out the ONNX repository for further information.

Please follow the link for getting information on supported tools.

### 4.2 Pre-Trained Models
To integrate a pre-built (propriety or public) ML model into a Mendix app, please take into the account the following:

- Compatibility of the model internal representation (IR) version with the ML Kit
- Compatibility of the model OpSets with the ML Kit

See [Versioning] for details on versioning schemes
The ONNX community provides a model repository, called ONNX Zoo, where common computer vision and language models can be found.

### 4.3 Versioning {#versioning}
Use ONNX versioning schemes while creating ONNX computation graphs and integrating them with Mendix apps using the ML Kit. Mendix Studio Pro guides developers to comply with the suggested internal representation, and package OpSets. In case of version conflicts in models (or pre- / post-processors), it is recommended to use the version converter tool to align with the suggested IR and OpSets.
Here is the link to extended information about the ONNX versioning scheme. The released versions of the ML Kit and supported ONNX Runtime versions can be found below.

| Mendix Studio Pro | ML Kit   | ONNX Runtime |
| ----------------- | -------- | ------------ |
| 9.13              | Beta 1.0 | 1.8.1        |
| 9.14              | Beta 2.0 | 1.8.1        |
| 9.18              | Beta 3.0 | 1.11.0       |

## 5 Monitoring and Troubleshooting

Machine learning models might be placed in the core of a Mendix application that makes automated decisions, and data quality is a crucial part of a machine learning system. Because of this, Mendix developers need to implement and configure monitoring tools that track not only service health but also the input and output of the MLKit actions.

The Monitoring and Troubleshooting guide in Studio Pro helps

Typically microflows that contain an MLKit activity may also be composed of various helper activities (e.g. Java Actions, Aggregate List Activities) in order to provide necessary input features to the model or parse its outputs. Tools that are provided by Studio Pro can be easily used for monitoring and troubleshooting. 

Besides the traditional Mendix monitoring and troubleshooting tools, we share some tips for Mendix developers to get insights about inference calls in the development and production phases. 

One might need to observe the inputs/outputs of a model that is used in an MLKit activity, assess the performance (latency) of making a prediction, or debug an individual pre/post-processing unit on a test sample to verify that the Microflow works and to catch potential bugs in development time before rolling out the application to the production environments. The StudioPro allows us to fulfill these aims in many different ways.

### 5.1 Troubleshooting Possible Errors

The Errors Pane in Studio Pro shares informative messages about the metadata of the models that are consumed by the `Call ML Model` activity. Warning messages do not block deployment, but MLKit does not guarantee that the application will work seamlessly. On the other hand, all the error messages have to be resolved in order to execute applications in local environments or deploy applications into the production environments.

    Warning
- CE9997: ONNX IR version Incompatibility. See ONNX versioning docs and version compatibility matrixes in the following section.
- CE9998: ONNX Opset Incompatibility. See ONNX versioning docs and version compatibility matrixes in the following section.
    Error
- CE9999: Missing input. The required model input has to be provided.

### 5.2 Console

The Console pane displays the output of the Mendix Runtime while running an application.

#### 5.2.1 Mendix Runtime Logs

The responsibility of the Mendix Runtime is to make an inference call on the model which is integrated into an app via the `Call ML Model` activity. While making a prediction on the model, Mendix Runtime publishes several metrics on the Console. These instance-based metrics are provided in each inference call to provide insights to the Mendix developers.
`Trace` 

- ML Model Inference Time: This shows how many milliseconds it took to make an inference call.

#### 5.2.2 Log Message Activity
The Log Message activity is very flexible and can be used to debug the inputs/outputs of any activity including `Java Actions` and `Call ML Model` activities. It is useful when it comes to checking the state of the data at a specific point inside the Microflow.
For example, we can exploit a log message after an inference call made by the `Call ML Model` activity that helps us to observe the classification result of a ResNet model on a provided image.

![](https://paper-attachments.dropboxusercontent.com/s_5E4F633166D614F309877C2287B1B3E5F838F0D45F24422C0A4FECBB43036E88_1673871142559_image.png)

![](https://paper-attachments.dropboxusercontent.com/s_5E4F633166D614F309877C2287B1B3E5F838F0D45F24422C0A4FECBB43036E88_1673871184574_image.png)


When we run the application and provide an image to make an inference, the StudioPro Console will be populated with the related log message.

A similar log message can also be placed after pre-processing actions to observe the output of the pre-processing step. However, this approach is not feasible to analyze the multidimensional inputs and outputs as Base64 encodings of the multidimensional arrays are not human-readable and need additional conversion logic.
In general, the transformation of the multidimensional arrays is subject to Java Actions. Exploiting debugging tools or using logging mechanisms inside the Java Actions will help Mendix developers easily debug the state of the variables. Here is a link to the official document about debugging Java Actions.
 

## 6 Known Issues

### 6.1 I/O Data Types
ONNX values could be in multiple I/O types. The most common type is a Tensor. As mentioned in the examples, a Tensor could represent a primitive value, string, a boolean, or multi-dimensional form of those data types. Additionally, ONNX allows the creation of a value that actually a sequence or a map of tensors for inputs and outputs. However, these types are currently not supported. Here are the types that are unsupported by MLKit.

| Input / Output Data Types | Support     |
| ------------------------- | ----------- |
| sequence                  | unsupported |
| map                       | unsupported |
| optional                  | unsupported |
| tensor                    | supported   |

The impact of using unsupported data types is different for inputs and outputs. All input features that are defined in the ONNX model are interpreted as mandatory fields and those fields need to be always provided for a successful inference. Therefore, when an unsupported type is used as an input feature in the ONNX model, Studio Pro gives a compilation error, and model loading will fail. On the other side, the output fields are interpreted as optional fields, thus model loading will not fail as long as at least a single supported data type is provided in the output fields.

### 6.2 I/O Tensor Types

Some tensor element types are currently out-of-scope. You can see element types that should be prohibited below.

| Group                  | Types                 |
| ---------------------- | --------------------- |
| Floating Point Types   | float16               |
| Unsigned Integer Types | uint8, uint16         |
| Complex Types          | complex64, complex128 |

Similar to the data type restrictions, Studio Pro does not allow usage of the unsupported types in the input fields but having at least a single supported tensor type in the output fields is enough to load and integrate an ONNX model with MLKit. Please see the ONNX IR documentation for all tensor types.
To integrate a pre-trained model with an unsupported type from model repositories (e.g. ONNX Zoo), one can use graph editing tools (e.g. onnx.helper, graphsurgeon) to convert an unsupported type to a supported type like float16 → float32.

### 6.3 GPU Inference

This is not supported.

## 7 FAQs

My model did not import properly

This may indicate a corrupt model file. Studio Pro supports importing a wide variety of models, ranging from simple logistic regressors to Whisper, and a wide range of Computer Vision models, so as far as the model is properly imported into ONNX and complies with the standard, Studio Pro will be able to run it.

Try re-downloading the model or verifying the conversion process.

My model outputs diverge from my training environment from the results in Studio Pro
When converting your model to ONNX, and especially if you use Pre and Post processors, there will be type casting/conversion.
We recommend double-checking that all the new types you use and the mathematical operations you conduct in your java actions if you use pre/post processor are suitable for the Types the model expect/uses, I.E, a division is casted to float if a float is expected, etc.

My model crashes Studio Pro or its execution is too slow.
Please mind that while the model file size is small, the outputs or inputs of it may be not so. Look this output for the detection model for EasyOCR.

We have two outputs with the Rely281_dim and Transposeoutput_dim labels, both of them of 4 bytes length, as they’re float32. So, assuming we’re dealing with a standard 224x224 pixels image, we will receive a ~10 mb object. Should we deal with a larger image of 986 pixels, the memory footprint of that output grows to 133 mb, and that is for a single inference. A parallel microflow that calls ML Kit ten times will require obviously ten times more memory, thus probably crashing the JVM.

The main takeaway point here is, mind the geometric growth of memory usage with very complex model outputs. See 2.2.3 for an example on how to mitigate this.

Another potential cause of crashing is, if there is an inconsistency between the architecture of the model and the data injected into it, especially with complex operations in models that accepts complex calculations such as neural networks. For example, if your model has a `Convolution` layer of shape `16x16x1`, injecting a tensor of a shape whose algebraic division results in an integer result smaller than 1 (such as an input of `[1,3,15,15]` , will have unpredictable consequences, among these, crashing StudioPro. As a rule of thumb, verify that the implementation of your model using MLKit matches, in shape and type of the data being sent into the component, the model architecture, whereas you trained it yourself using jupyter notebook -for instance-, or the model documentation if you obtained from third-party sources such as the ONNX Model Zoo.

I have an exception when executing the model or running it
This situation is the most difficult to solve as the causes may vary a lot, ranging from an incompatible Studio Pro version (See the Release Notes for which features are compatible and which are not) to a failure inside the model or a permission issues.

We recommend turning the logs to trace level, as the ML Engine provides a great deal of information on what is going on, and using this as a basis to decide next steps.
