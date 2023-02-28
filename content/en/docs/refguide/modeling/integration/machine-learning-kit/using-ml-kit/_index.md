---
title: "Using ML Kit"
url: /refguide/machine-learning-kit/using-ml-kit/
category: Integration
weight: 15
tags: ["studio pro", "machine learning", "ml kit", "models", "integration"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---
{{% alert color="info" %}}Machine learning model support is currently in [Beta](/releasenotes/beta-features/), and is available in Studio Pro [9.23](/releasenotes/studio-pro/9.23/) and above.{{% /alert %}}

## 1 Introduction

Studio Pro [9.23](/releasenotes/studio-pro/9.23/) and above supports machine learning (ML) model integration in Mendix apps. Collectively called the *Machine Learning (ML) Kit*, this functionality allows Mendix developers to deploy a ML model built using common ML framework and language into Mendix Studio Pro runtime.

## 2 Usage {#usage}

To use a ML model in your app, you need to convert it to ONNX, then import it to create a model mapping.

### 2.1 Converting Your Model to ONNX {#convert-ml-model}

To embed your ML model into a Mendix app, you need to convert your model into the ONNX format. Depending upon the frameworks and tools used to create the ML model, there are many tools and sources to convert a model to ONNX format.

Examples include the following:

* [PyTorch](https://pytorch.org/docs/stable/onnx) 
* [TensorFlow to ONNX](https://github.com/onnx/tensorflow-onnx)
* [Scikit-learn to ONNX](https://github.com/onnx/sklearn-onnx)

### 2.2 Importing a Model and Creating the Mapping {#import-model}

To use the ML model in your app, you import it to create a mapping document.

1. Right-click on the desired module and select **Add other > ML model mapping**.
2. Add a name for the mapping document.
3. Click **Import Model** to import your ONNX file.

This will generate two non-persistable entities representing your ML Model input and outputs (see [Persistable and Non-Persistable Entities](#persist-nonpersist-entities) below).

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/ml-model-created-entities.png" alt="Two non-persistable entities generated when importing an ONNX file." >}}

If error CE1790 appears, you will need to [set dynamic tensor shapes](#set-dynamic-shapes).

#### 2.2.1 Locating the Model Directory {#model-directory}

The ML model in ONNX format will be placed in the `mlsource/<your_module_name>` folder from the App/Show App Directory in Explorer.

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/mlsource-location.png" alt="Location of the ML model in a file explorer." >}}

{{% alert color="info" %}}
Store any additional files in the same directory, including text files for storing class names and additional files that your model or ML process uses (encoders, text files, corpora).

This way, the files will be packaged with your app, and you can easily refer to them in microflow actions.
{{% /alert %}}

#### 2.2.2 Tensor Shapes {#tensor-shapes}

Tensors inject and retrieve information from a machine learning model. A distinctive trait of such an entity mapping is the tensor Shape, or the definition of the dimensions a tensor has.

##### 2.2.2.1 Static Shapes {#static-shapes}

Studio Pro detects models with static shapes automatically and display them in the mapping. The image below is a ResNet50 mapping with static dimensions that accepts 1 image of 3 channels (colors) with a size of 224x224 pixels:

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/mapping-static-dimensions.png" alt="ResNet50 mapping with static dimensions. Described in the paragraph above." >}}

##### 2.2.2.2 Dynamic Shapes {#dynamic-shapes}

Several models (including EasyOCR and Yolo) have tensors with dynamic shapes. In these cases, decide on a tensor mapped static shape and attribute type in a mapped entity before integrating in microflows.

###### 2.2.2.2.1 Setting Dynamic Tensor Shape Mapping (Error 1790) {#set-dynamic-shapes}

When importing your model, you might encounter error CE1790. Go to the error and double-click on the affected mapping line to open the **Edit ML model input shape**s dialog box:

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/edit-model-input-shapes.png" alt="Edit ML model input shape dialog box." >}}

In this case, the -1 dimensions should be configured before using the mapping in a [Call ML model](/refguide/call-ml-model/) activity. Once filled, static tensor shapes of an output mapping will be automatically calculated based on configured dimensions of the input entity mappings:

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/completed-mapping.png" alt="Completed ML mapping. Described in the paragraph above." >}}

{{% alert color="info" %}}Some these shapes should be handled in [Java Action pre- and post-processors](#java-pre-post) you may have.{{% /alert %}}

#### 2.2.3 Persistable and Non-Persistable Entities {#persist-nonpersist-entities}

After importing a model, two [non-persistable](/refguide/persistability/) entities will be created using the input type.

For non-structured data, such as most of the tensors for Neural Networks, an entity attribute will be a `String`.  This is because Base64 is used to to encode the tensors to and from MLKit.

##### 2.2.3.1 Converting to Persistable Entities

You can convert these entities into [peristable](/refguide/persistability/) ones and use other types, such as **Binary**. This can be done to decrease inference latency of ML mappings document used in the [Call ML model](/refguide/call-ml-model/) activity. 

To convert an entity, do the following:

1. Double-click on the entity to open its **Properties**.
2. Select **Yes** in the **Persistable** section.

You now have a [peristable](/refguide/persistability/) entity in your domain model that you can set as the type you need, and that can be used in [pre- and post-processors](#pre-post-processors).
 
### 2.3 Using the Model in a Microflow {#use-model-microflow}

Once the ML [mapping document](#import-model) is created by importing the model, the ML model is available in the Studio Pro. 

Drag and drop the [Call ML model](/refguide/call-ml-model/) activity from the toolbar in the Microflow editor to use call and use your ML model in your application logic..

#### 2.3.1 Example of a Model Microflow

In the microflow below, a [Create object](/refguide/create-object/) activity creates an object of input entity type, mapped to input tensors in the ML mapping document. The [Call ML model](/refguide/call-ml-model/) activity calls the model, and a [Change object](/refguide/change-object/) activity updates business object with predicted value.

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/drag-action-into-microflow.png" alt="Completed ML mapping. Described in the paragraph above." >}}

##### 2.3.1.2 Call ML Model Activity Details

The **Call ML model** activity is an **ML Kit** activity in the **Toolbar**. Detailed documentation on the properties of this activity can be found in the [Call ML model](/refguide/call-ml-model/) page.

##### 2.4 Logistic Regression Example

The images below show an example of a logistic regression, its [netron.app](https://netron.app/) schema and the component display, along with the ML Mapping:

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/output-type.png" alt="Example of a logistic regression." >}}

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/ml-model-created-entities.png" alt="Example of a netron.app schema." >}}

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/call-ml-mapping.png" alt="Example of the mapping call." >}}

Create pre-processed inputs with **Create object** activity for inference inside your Mendix App, and consume the inference output with microflow [expressions](/refguide/expressions/).

A **Create Object** activity is used for the first part in order to transfer entities from the Domain Model to the model input object. 

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/create-object.png" alt="Details of the log message in a microflow example." >}}

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/create-variable.png" alt="Details of the log message in a microflow example." >}}

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/change-object.png" alt="Details of the log message in a microflow example." >}}

## 3 Integrating Models with Pre-processors and Post-processors {#pre-post-processors}

Integrating machine learning models can sometimes require using a more complex structure. This incudes having a pre-processor, the model itself, and a post-processor:

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/pre-post-processing-microflow.png" alt="Example of a microflow that includes a pre-processor and post-processor." >}}

For information on design patterns that include pre-processors and post-processors, see [Pre/Post-Processor Design Patterns](/refguide/machine-learning-kit/design-patterns/pre-post-processor-patterns/).

### 3.1 Processing {#processing}

The *pre-processor* is the block of code that manipulates the data before being injected into the model. Some common examples of the pre-processing are [normalization](https://towardsdatascience.com/understand-data-normalization-in-machine-learning-8ff3062101f0) and [missing data handling](https://towardsdatascience.com/7-ways-to-handle-missing-values-in-machine-learning-1a6326adf79e). 

The required pre-processing varies a lot with each model and implementation, and can even be part of the ONNX file itself (see [Pre and post processing](https://onnxruntime.ai/docs/reference/build-web-app.html#pre-and-post-processing) in the ONNX runtime documentation). It is highly coupled with the model, its training process, and the domain of knowledge.

#### 3.1.1 Multidimensional Outputs

Currently, it is required to have any multidimensional data as a string encoded using the base64 format. Any multidimensional data has to be encoded, either in string base64 format if you are using non-persistable entities, or binary streams if you opt for persistable entities for the model in the mapping (see [Persistable and Non-Persistable Entities](#persist-nonpersist-entities) in this document).

Below are two models (a Scikit-learn [random forest](https://www.kaggle.com/code/prashant111/random-forest-classifier-tutorial) and a ResNet50 network), and their [netron.app](https://netron.app/) schemas, and how these are rendered by the [Call ML model](/refguide/call-ml-model/) activity.

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/advanced-model-rendering.png" alt="Example of how two models are rendered by the call ML model activity." >}}

In this example, the [Call ML Model][Call ML model](/refguide/call-ml-model/) activity adapts to the model output. If you intend to use a multidimensional output in this stage (such as in the ResNet), it will come out string-encoded using base64 (link to section about persistable entities), and will probably require post-processing.

Once you import your model, the Call ML Model activity allows you to add your input variable coming from the previous action, and name your output to be used in any ulterior steps:

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/name-your-output.png" alt="Example of naming the object output." >}}

### 3.2 Pre-processing and Post-processing using Java Actions {#java-pre-post}

Data transformations are usually complex tasks, and often require mathematical libraries or even more complex pieces of software (think OpenCV for computer vision). As a result, sometimes they are not integrated into the model. In this case, the best way to perform these transformations in Mendix using Java Actions (see [Extending Your Application with Custom Java](/refguide/extending-your-application-with-custom-java/)).
 
Read the sections below for an example of pre-processing and post-processing using Java Actions in Mendix.

#### 3.2.1 Pre-processing using Java Actions

This uses a [Random Forest](https://www.kaggle.com/code/prashant111/random-forest-classifier-tutorial) example trained with the Iris/Setosa dataset. The output is a long value, representing a flower type. The input is a base64 encoded float array, as we use Base64 encoded strings for passing multidimensional data to the Call ML Model action at this stage of development.

The pre-processor is essentially a standard Java Action that creates the multidimensional input for your model and in this case, encodes the data into a string with Base64 (see line 14 below). Another important step is to convert the Decimal data type into float, as the ONNX format uses that data type. But this may vary along models and implementations.

```
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
```

#### 3.2.2 Post-processing using Java Actions

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

For detailed information on pre-processing and post-processing patterns of machine learning designs, see [Pre/Post-Processor Design Patterns](/refguide/machine-learning-kit/design-patterns/pre-post-processor-patterns/).

## 4 Supported Frameworks and Libraries {#supported-frameworks}

To ensure that your model will work with the [Call ML Model](/refguide/call-ml-model/) activity, follow the guidelines in this section.

To learn more about design patterns that can be applied to the Inference process, and specifications that for pre/post-processing while using Mendix components, Java Actions, or embedding it into the model directly, see our documentation on [Design Patterns](/refguide/machine-learning-kit/design-patterns/).

### 4.1 Model Building

ML Kit comes with native support to [ONNX Runtime](https://onnxruntime.ai/about.html), which means Mendix developers are free to use the right machine learning framework or library for their use cases. Mendix developers can use the native ONNX operators or use the major machine learning libraries like Tensorflow, PyTorch, scikit-learn, and XGBoost to develop their models, preprocessing, and post-processing actions.

Artifacts (including HDF5, protocol buffers, and pickle) should be converted to ONNX computation graphs in order to integrate them into Mendix. 

The ONNX community develops and maintains the converters for many ML frameworks. Check out the [ONNX repository](https://github.com/onnx/onnxmltools) and [supported tools](https://onnx.ai/supported-tools.html) for further information.

### 4.2 Pre-Trained Models

To integrate a pre-built (propriety or public) ML model into a Mendix app, consider the following:

* Compatibility of the model internal representation (IR) version with the ML Kit
* Compatibility of the model OpSets with the ML Kit

See [Versioning] for details on versioning schemes
The ONNX community provides a model repository, called [ONNX Model Zoo](https://github.com/onnx/models), where common computer vision and language models can be found.

### 4.3 Versioning {#versioning}

Use [ONNX versioning schemes](https://github.com/onnx/onnx/blob/main/docs/Versioning.md) while creating and integrating ONNX computation graphs with Mendix apps. Mendix Studio Pro guides developers to comply with the suggested internal representation, and package OpSets.

In case of version conflicts in models (or pre- / post-processors), try the [version converter tool](https://github.com/onnx/onnx/blob/main/docs/VersionConverter.md) to align with the suggested IR and OpSets.

The released versions of the ML Kit and supported ONNX Runtime versions can be found below.

| Mendix Studio Pro | ML Kit   | ONNX Runtime |
| ----------------- | -------- | ------------ |
| 9.23              | Public Beta | 1.11.0       |

## 5 Monitoring and Troubleshooting

Machine learning models might be placed in the core of a Mendix application that makes automated decisions, and data quality is a crucial part of a machine learning system. Because of this, Mendix developers need to implement and configure monitoring tools that track not only service health but also the input and output of the MLKit actions.

The [Monitoring and Troubleshooting](/howto/monitoring-troubleshooting/) guide in Studio Pro helps

Typically microflows that contain an MLKit activity may also be composed of various helper activities (e.g. Java Actions, Aggregate List Activities) in order to provide necessary input features to the model or parse its outputs. Tools that are provided by Studio Pro can be easily used for monitoring and troubleshooting. 

Besides the traditional Mendix monitoring and troubleshooting tools, we share some tips for Mendix developers to get insights about inference calls in the development and production phases. 

One might need to observe the inputs/outputs of a model that is used in an MLKit activity, assess the performance (latency) of making a prediction, or debug an individual pre/post-processing unit on a test sample to verify that the Microflow works and to catch potential bugs in development time before rolling out the application to the production environments. The StudioPro allows us to fulfill these aims in many different ways.

### 5.1 Troubleshooting

The [Errors Pane](/refguide/errors-pane/) in Studio Pro shares informative messages about the metadata of the models that are consumed by the **Call ML Model** activity. Warning messages do not block deployment, but the application may not work seamlessly. All error messages have to be resolved in order to execute applications in local environments or deploy applications into the production environments.

    Warning
- CE9997: ONNX IR version Incompatibility. See [ONNX versioning docs](https://github.com/onnx/onnx/blob/main/docs/Versioning.md) and version compatibility matrixes in the following section.
- CE9998: ONNX Opset Incompatibility. See [ONNX versioning docs](https://github.com/onnx/onnx/blob/main/docs/Versioning.md) and version compatibility matrixes in the following section.
    Error
- CE9999: Missing input. The required model input has to be provided.

### 5.2 Console

The [Console](/refguide/view-menu/#console) pane displays the output of the Mendix [Runtime](/refguide/runtime/) while running an application.

#### 5.2.1 Mendix Runtime Logs

The responsibility of the Mendix Runtime is to make an inference call on the model which is integrated into an app via the `Call ML Model` activity. While making a prediction on the model, Mendix Runtime publishes several metrics on the ML Engine log node available in the Console and application logs. These instance-based metrics are provided in each inference call to provide insights to the Mendix developers.
`Trace` 

- ML Model Inference Time: This shows how many milliseconds it took to make an inference call.

#### 5.2.2 Using the Log Message Activity

The [Log Message](/refguide/log-message/) activity is very flexible and can be used to debug the inputs/outputs of any activity including Java Actions and the **Call ML Model** activities. It is useful when it comes to checking the state of the data at a specific point inside the Microflow.

For example, a log message after an inference call made by the **Call ML Model** activity helps us to observe the classification result of a ResNet model on a provided image:

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/exploit-log-message.png" alt="Image of a microflow with a log message activity." >}}

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/ml-kit/log-message.png" alt="Details of the log message in a microflow example." >}}

When you run the application and provide an image to make an inference, the **Console** will be populated with the related log message.

##### 5.2.2.1 Log Messages After Processing Actions

A similar log message can also be placed after pre-processing actions to observe the output of the pre-processing step. However, this approach is not feasible to analyze the multidimensional inputs and outputs as Base64 encodings of the multidimensional arrays are not human-readable and need additional conversion logic.

In general, the transformation of the multidimensional arrays is subject to Java Actions. Exploiting debugging tools or using logging mechanisms inside the Java Actions will help you debug the state of the variables. 

For more information, see [Debug Java Actions](/howto/monitoring-troubleshooting/debug-java-actions/).
 
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

The following chart displays tensor element types that are currently unsupported:

| Group                  | Types                 |
| ---------------------- | --------------------- |
| Floating Point Types   | float16               |
| Unsigned Integer Types | uint8, uint16         |
| Complex Types          | complex64, complex128 |

Similar to the data type restrictions, Studio Pro does not allow usage of the unsupported types in the input fields but having at least a single supported tensor type in the output fields is enough to load and integrate an ONNX model with MLKit. See the [ONNX IR documentation](https://github.com/onnx/onnx/blob/main/docs/IR.md) for all tensor types.
To integrate a pre-trained model with an unsupported type from model repositories (e.g. ONNX Model Zoo), one can use graph editing tools (e.g. onnx.helper, graphsurgeon) to convert an unsupported type to a supported type like float16 → float32.

### 6.3 GPU Inference

This is not supported.

## 7 FAQs

1.  My model did not import properly. Anything I can do?
   
    This may indicate a corrupt model file. Studio Pro supports importing a wide variety of models, ranging from simple logistic regressors to [Whisper](https://github.com/zhuzilin/whisper-openvino), and a wide range of computer vision models, so as far as the model is properly imported into ONNX and complies with the standard, Studio Pro will be able to run it.

    Try re-downloading the model or verifying the conversion process.

2.  My model outputs diverge from my training environment from the results in Studio Pro. What now?
   
    When converting your model to ONNX, and especially if you use pre- and post-processors, type casting and conversion will occur.
    Check that all the new types you use and that the mathematical operations you conduct in your Java actions (if you use pre- or post-processing) are suitable for the Types the model expect/uses (for example, a division is casted to float if a float is expected).

3.  My model crashes Studio Pro or its execution is too slow. Can this be fixed?
   
    While the model file size is small, the outputs or inputs of it may be not so. Look at the output for the detection model for [EasyOCR](https://github.com/JaidedAI/EasyOCR).

    There are two outputs with the `Rely281_dim` and `Transposeoutput_dim` labels, both of them of 4 bytes length, as they are float32. Assuming a standard 224x224 pixels image, we will receive a ~10 mb object. If it is a larger image of 986 pixels, the memory footprint of that output grows to 133 mb, and that is for a single inference. A parallel microflow that calls the model ten times will require obviously ten times more memory, probably crashing the JVM.

    In short: mind the growth of memory usage with very complex model outputs. 

    Another potential cause of crashing is if there is an inconsistency between the architecture of the model and the data injected into it, especially with complex operations in models that accepts complex calculations such as neural networks. For example, if your model has a `Convolution` layer of shape `16x16x1`, injecting a tensor of a shape whose algebraic division results in an integer result smaller than 1 (such as an input of `[1,3,15,15]` , will have unpredictable consequences. This might include Studio Pro crashing. Verify that the implementation of your model in Studio Pro matches, in shape and type of the data being sent into the component, the model architecture, or the model documentation if you obtained from third-party sources such as the ONNX Model Zoo.

4.  I have an exception when executing the model or running it. How can I handle this?
  
    This situation is the most difficult to solve as the causes may vary a lot, ranging from an incompatible Studio Pro version to a failure inside the model or a permission issues.

    We recommend turning the logs to trace level, as the ML Engine provides a great deal of information on what is going on, and using this as a basis to decide next steps.

## 8 Read More {#readmore}

* Learn about machine learning [Design Patterns](/refguide/machine-learning-kit/design-patterns/), including [Advanced Inference Design Patterns](/refguide/machine-learning-kit/design-patterns/advanced-inference/) and [Pre- and Post-Processor Design Patterns](/refguide/machine-learning-kit/design-patterns/pre-post-processor-patterns/)
* The [ML model mapping](/refguide/ml-model-mapping/) document covers details of the service document for machine learning models
* The [Call ML Model](/refguide/call-ml-model/) document covers the microflow [activity](/refguide/activities/) used to call an imported ML model in a microflow