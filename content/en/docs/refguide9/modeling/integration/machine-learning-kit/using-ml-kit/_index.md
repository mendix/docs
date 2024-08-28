---
title: "Using ML Kit"
url: /refguide9/machine-learning-kit/using-ml-kit/
weight: 15
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---
{{% alert color="info" %}}Machine learning model support is currently in [beta](/releasenotes/beta-features/), and is available in Studio Pro [9.23](/releasenotes/studio-pro/9.23/) and above.{{% /alert %}}

## Introduction

Studio Pro [9.23](/releasenotes/studio-pro/9.23/) and above supports machine learning (ML) model integration in Mendix apps. Collectively called the *Machine Learning (ML) Kit*, this functionality allows Mendix developers to deploy an ML model built using common ML framework and language into the Mendix Runtime.

{{% alert color="info" %}}Check out a demo app and Jupyter Notebook examples in our [Demo for Mendix ML Kit](https://github.com/mendix/mlkit-example-app) repository for further information on working with machine learning models in Mendix.{{% /alert %}}

## Usage {#usage}

To use an ML model in your app, you need to convert it to ONNX, then import it to create an ML model mapping. For a visual walkthrough of the steps in this section, see the [Logistic Regression Example](/refguide9/machine-learning-kit/using-ml-kit/logistic-regression/).

### Converting Your Model to ONNX {#convert-ml-model}

To embed your ML model into a Mendix app using *ML Kit*, you need to convert your model into the ONNX format. See [Jupyter Notebook Examples](https://github.com/mendix/mlkit-example-app/tree/main/notebooks) in our *Demo for Mendix ML Kit* repository for examples that cover the process of converting models to ONNX.

Depending upon the frameworks and tools used to create the ML model, there are many tools and sources to convert a model to ONNX format:

* [PyTorch](https://pytorch.org/docs/stable/onnx) 
* [TensorFlow](https://github.com/onnx/tensorflow-onnx)
* [Scikit-learn](https://github.com/onnx/sklearn-onnx)
* [Keras](https://github.com/onnx/keras-onnyx)
* [CoreML](https://github.com/onnx/onnxmltools)
* [LightGBM](https://github.com/onnx/onnxmltools)
* [LibSVM](https://github.com/onnx/onnxmltools)
* [XGBoost](https://github.com/onnx/onnxmltools)
* [SparkML](https://github.com/onnx/onnxmltools)

### Importing an ML Model and Creating the ML Mapping Document {#import-model}

To use the ML model in your app, import it to create an ML mapping document.

1. Right-click on the desired module and select **Add other > ML model mapping**.
2. Add a name for the mapping document.
3. Click **Import Model** to import your ONNX file.

This generates two non-persistable entities representing your ML Model input and outputs (see [Persistable and Non-Persistable Entities](#persist-nonpersist-entities) below). Below is an example of import mapping of a [sample XGBoost ML model](https://github.com/mendix/mlkit-example-app/tree/main/mlsource/titanic_xgboost):

{{< figure src="/attachments/refguide9/modeling/integration/ml-kit/ml-kit/ml-model-created-entities.png" alt="Two non-persistable entities generated when importing an ONNX file." class="no-border" >}}

If error CE1790 appears, you need to [set dynamic tensor shapes](#set-dynamic-shapes).

#### Locating the ML Model Directory {#model-directory}

The ML model in ONNX format will be placed in the `mlsource/<your_module_name>` folder from the App/Show App Directory in Explorer.

{{% alert color="info" %}}
Store any additional files in the same directory, including text files for storing class names and additional files that your model or ML process uses (encoders, text files, corpora).

This way, the files will be packaged with your app, and you can easily refer to them in microflow actions.
{{% /alert %}}

#### Configuring Tensor Shapes {#tensor-shapes}

Tensors inject and retrieve information from a machine learning model. A distinctive trait of such an entity mapping is the tensor Shape, or the definition of the dimensions a tensor has.

##### Static Shapes {#static-shapes}

Studio Pro detects models with static shapes automatically and displays them in the mapping. The image below is a [ResNet50 model mapping](https://github.com/mendix/mlkit-example-app/tree/main/mlsource/resnet50) with static dimensions that accepts 1 image of 3 channels (colors) with a size of 224x224 pixels:

{{< figure src="/attachments/refguide9/modeling/integration/ml-kit/ml-kit/mapping-static-dimensions.png" alt="ResNet50 mapping with static dimensions. Described in the paragraph above." class="no-border" >}}

##### Dynamic Shapes {#dynamic-shapes}

Several models (for example, [Yolo](https://github.com/onnx/models/tree/main/vision/object_detection_segmentation/yolov3)) have tensors with dynamic shapes. In these cases, fill in a tensor shape and an attribute type in the mapped entity.

###### Setting Dynamic Tensor Shape Mapping (Error CE1790) {#set-dynamic-shapes}

When importing your model, you might encounter error CE1790 like in this [BERT](https://github.com/onnx/models/blob/main/text/machine_comprehension/bert-squad/model/bertsquad-12-int8.onnx) example:

{{< figure src="/attachments/refguide9/modeling/integration/ml-kit/ml-kit/model-input-errors.png" alt="Red dots indicating CE1790 error." class="no-border" >}} 

1. Go to the error and double-click on the affected mapping line to open the **Edit ML model input shapes** dialog box:

{{< figure src="/attachments/refguide9/modeling/integration/ml-kit/ml-kit/edit-model-input-shapes.png" alt="Edit ML model input shape dialog box." class="no-border" >}}

In this case, the -1 dimensions should be configured before using the mapping in a [Call ML model](/refguide9/call-ml-model/) activity. Once filled, static tensor shapes of an output mapping will be automatically calculated based on configured dimensions of the input entity mappings, like in this [BERT](https://github.com/onnx/models/blob/main/text/machine_comprehension/bert-squad/model/bertsquad-12-int8.onnx) example below.

The editor for the BERT model is below:

{{< figure src="/attachments/refguide9/modeling/integration/ml-kit/ml-kit/bert-model-input-shapes.png" class="no-border" >}} 

The completed mapping for the BERT model is below:

{{< figure src="/attachments/refguide9/modeling/integration/ml-kit/ml-kit/bert-model-entities.png" class="no-border" >}} 

{{% alert color="info" %}}Some of these shapes should be handled in [Java Action pre- and post-processors](#java-pre-post) you may have.{{% /alert %}}

#### Persistable and Non-Persistable Entities {#persist-nonpersist-entities}

After importing a model, two [non-persistable](/refguide9/persistability/) entities are created using the ML model *input* and *output* like in this [sample XGBoost ML model](https://github.com/mendix/mlkit-example-app/tree/main/mlsource/titanic_xgboost):

{{< figure src="/attachments/refguide9/modeling/integration/ml-kit/ml-kit/entities-example-1.png" alt="Input and output entities in the mapping document." class="no-border" >}}

In the image above, the attributes are mapped as closely as possible to data types in Studio Pro. 

For non-structured data, such as most of the tensors for Neural Networks, the attributes of a model with a multidimensional parameter will be represented as a string. This is because Base64 is used to encode the tensors to and from *ML Kit*.

In the image below from the [ResNet50 model mapping](https://github.com/mendix/mlkit-example-app/tree/main/mlsource/resnet50), the inputs and outputs are multidimensional and need to be encoded:

{{< figure src="/attachments/refguide9/modeling/integration/ml-kit/ml-kit/entities-example-2.png" alt="Multidimensional outputs that need to be encoded." class="no-border" >}}

See [Integrating Models with Pre-processors and Post-processors](#pre-post-processors).

##### Converting to Persistable Entities

You can convert non-persistable entities into [peristable](/refguide9/persistability/) ones and use other types, such as **Binary**. This can be done to decrease inference latency of ML mappings document used in the [Call ML model](/refguide9/call-ml-model/) activity. 

To convert an entity, do the following:

1. Double-click on the entity to open its **Properties**.
2. Select **Yes** in the **Persistable** section.

You now have a [persistable](/refguide9/persistability/) entity in your domain model that you can set as the type you need, and that can be used in [pre- and post-processors](#pre-post-processors).
 
### Using the ML Model in a Microflow {#use-model-microflow}

Once the ML [mapping document](#import-model) is created by importing the ML model, the ML model is available in Studio Pro. 

Drag and drop the [Call ML model](/refguide9/call-ml-model/) activity from the Toolbox in the microflow editor to use call and use your ML model in your application logic.

#### Example of a Model Microflow

In the microflow below, a [Create object](/refguide9/create-object/) activity creates an object of input entity type, mapped to input tensors in the ML mapping document. The [Call ML model](/refguide9/call-ml-model/) activity calls the ML model, and a [Change object](/refguide9/change-object/) activity updates business object with predicted value.

{{< figure src="/attachments/refguide9/modeling/integration/ml-kit/ml-kit/drag-action-into-microflow.png" alt="Completed ML mapping. Described in the paragraph above." class="no-border" >}}

#### Call ML Model Activity Details

The **Call ML model** activity is an **ML Kit** activity in the **Toolbox**. For further details, see [Call ML model](/refguide9/call-ml-model/).

## Integrating Models with Pre-processors and Post-processors {#pre-post-processors}

Integrating machine learning models can sometimes require using a more complex structure. This includes having a pre-processor, the ML model itself, and a post-processor:

{{< figure src="/attachments/refguide9/modeling/integration/ml-kit/ml-kit/pre-post-processing-microflow.png" alt="Example of a microflow that includes a pre-processor and post-processor." class="no-border" >}}

### Pre-processing and Post-processing Using Java Actions {#java-pre-post}

Data transformations are usually complex tasks, and often require mathematical libraries or even more complex pieces of software (think OpenCV for computer vision). As a result, sometimes they are not integrated into the ML model. In this case, the best way to perform these transformations in Mendix is using Java Actions (see [Extending Your Application with Custom Java](/refguide9/extending-your-application-with-custom-java/)).
 
Read the sections below for an example of pre-processing and post-processing using Java Actions in Mendix.

#### Pre-processing Using Java Actions

The *pre-processor* is the block of code that manipulates the data before being injected into the ML model. Some common examples of the pre-processing are [normalization](https://towardsdatascience.com/understand-data-normalization-in-machine-learning-8ff3062101f0) and [missing data handling](https://towardsdatascience.com/7-ways-to-handle-missing-values-in-machine-learning-1a6326adf79e). 

The required pre-processing varies a lot with each model and implementation, and can even be part of the ONNX file itself (see [Pre and post processing](https://onnxruntime.ai/docs/reference/build-web-app.html#pre-and-post-processing) in the ONNX Runtime documentation). It is highly coupled with the ML model, its training process, and the domain of knowledge.

This [Random Forest example](https://www.kaggle.com/code/prashant111/random-forest-classifier-tutorial) example is trained with the Iris/Setosa dataset. The output is a long value, representing a flower type. The input is a base64 encoded float array, as Base64 encoded strings are used for passing multidimensional data to the Call ML Model action at this stage of development.

The pre-processor is essentially a standard Java Action that creates the multidimensional input for your model and in this case, encodes the data into a string with Base64 (see line 14 below). Another important step is to convert the Decimal data type into float, as the ONNX format uses that data type. But this may vary along models and implementations.

See the following pre-processor example in our [Mendix ML Kit Demo Repository](https://github.com/mendix/mlkit-example-app/blob/main/javasource/iris_randomforest/actions/PreProcessor.java):

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

#### Post-processing Using Java Actions

The rationale for using a post-processor is similar to that of the pre-processor, but in the opposite direction: you extract something out of the ML model and do something with it. For more complex models, the output can be multidimensional, and then decoding is required. In this example, the post-processor is mapped using a class map in order to get the class name, not IDs or probabilities, using a file already present in the directory.

See the following post-processor example in our [Mendix ML Kit Demo Repository](https://github.com/mendix/mlkit-example-app/blob/main/javasource/iris_randomforest/actions/PostProcessor.java):

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

### Models with Multidimensional Inputs and Outputs {#multidimensional-outputs}

Currently, it is required to have any multidimensional data as a string encoded using the base64 format. Any multidimensional data has to be encoded, either in string base64 format if you are using non-persistable entities, or binary streams if you opt for persistable entities for the ML model in the mapping (see the [Persistable and Non-Persistable Entities](#persist-nonpersist-entities) section in this document).

Once you import your model, the **Call ML Model** activity allows you to add your input variable coming from the previous action, and name your output to be used in any ulterior steps.

For information on design patterns that include pre-processors and post-processors, see [Pre/Post-Processor Design Patterns](/refguide9/machine-learning-kit/design-patterns/pre-post-processor-patterns/).

{{% alert color="info" %}}Check out pre- and post-processor sample files in our [Mendix ML Kit Demo Respository](https://github.com/mendix/mlkit-example-app/tree/main/javasource). In **Actions** folders, look for Java files named `PreProcessor.java` and `PostProcessor.java`.{{% /alert %}}

## Supported Frameworks and Libraries {#supported-frameworks}

To ensure that your model will work with the [Call ML Model](/refguide9/call-ml-model/) activity, follow the guidelines in this section.

To learn more about design patterns that can be applied to the Inference process, and specifications that for pre/post-processing while using Mendix components, Java actions, or embedding it into the ML model directly, see our documentation on [Design Patterns](/refguide9/machine-learning-kit/design-patterns/).

### Model Building

ML Kit comes with native support for the [ONNX Runtime](https://onnxruntime.ai/about.html) which means Mendix developers can use the native ONNX operators. However, Mendix developers are free to use their preferred machine learning framework or library such as Tensorflow, PyTorch, scikit-learn, and XGBoost to build their ML models, pre-processing, and post-processing actions.

Artifacts (including HDF5, protocol buffers, and pickle) should be converted to ONNX computation graphs in order to integrate them into Mendix. 

The ONNX community develops and maintains the converters for many ML frameworks. Check out the [ONNX repository](https://github.com/onnx/onnxmltools) and [supported tools](https://onnx.ai/supported-tools.html) for further information.

{{% alert color="info" %}}Once you build a model, see examples of notebooks that show you how to export them to ONNX in our [Mendix ML Kit Demo Repository](https://github.com/mendix/mlkit-example-app/tree/main/notebooks).{{% /alert %}}

### Versioning {#versioning}

Use [ONNX versioning schemes](https://github.com/onnx/onnx/blob/main/docs/Versioning.md) while creating and integrating ONNX computation graphs with Mendix apps. Mendix Studio Pro guides developers to comply with the suggested internal representation, and package OpSets.

In case of version conflicts in models (or pre- / post-processors), try the [version converter tool](https://github.com/onnx/onnx/blob/main/docs/VersionConverter.md) to align with the suggested IR and OpSets.

The released versions of the *ML Kit* and supported ONNX Runtime versions can be found below.

| Mendix Studio Pro | ML Kit   | ONNX Runtime |
| ----------------- | -------- | ------------ |
| 9.23              | Public beta | 1.11.0       |

## Monitoring and Troubleshooting

Machine learning models might be placed in the core of a Mendix application that makes automated decisions, and data quality is a crucial part of a machine learning system. Because of this, Mendix developers need to implement and configure monitoring tools that track not only service health but also the input and output of the *ML Kit* actions.

In the section below, there are tips for Mendix developers to get insights about inference calls in the development and production phases. You might need to observe the inputs/outputs of a model that is used in an *ML Kit* activity, assess the performance (latency) of making a prediction, or debug an individual pre/post-processing unit on a test sample to verify that the Microflow works and to catch potential bugs in development time before rolling out the application to the production environments.

See the [Monitoring and Troubleshooting](/howto9/monitoring-troubleshooting/) guide for general monitoring and troubleshooting tips in Studio Pro.

### Troubleshooting

The [Errors Pane](/refguide9/errors-pane/) in Studio Pro shares informative messages about the metadata of the ML models that are consumed by the **Call ML Model** activity. Warning messages do not block deployment, but the application may not work seamlessly. All error messages have to be resolved in order to execute applications in local environments or deploy applications into the production environments.

Warning

* **CE9997**: ONNX IR version Incompatibility. See [ONNX versioning docs](https://github.com/onnx/onnx/blob/main/docs/Versioning.md) and version compatibility matrixes in the following section.
* **CE9998**: ONNX Opset Incompatibility. See [ONNX versioning docs](https://github.com/onnx/onnx/blob/main/docs/Versioning.md) and version compatibility matrixes in the following section.

Error

* **CE9999**: The required model input has to be provided.
* **CE1790**: See [Set dynamic tensor shapes](#set-dynamic-shapes).

### Console

The [Console](/refguide9/view-menu/#console) pane displays the output of the [Mendix Runtime](/refguide9/runtime/) while running an application.

#### Mendix Runtime Logs

The responsibility of the Mendix Runtime is to make an inference call on the ML model which is integrated into an app via the **Call ML Model** activity. While making a prediction on the ML model, the Mendix Runtime publishes several metrics on the ML Engine log node available in the Console and application logs. These instance-based metrics are provided in each inference call to provide insights to the Mendix developers.
`Trace` 

* ML Model Inference Time: This shows how many milliseconds it took to make an inference call.

#### Using the Log Message Activity

The [Log Message](/refguide9/log-message/) activity is very flexible and can be used to debug the inputs/outputs of any activity including Java Actions and the **Call ML Model** activities. It is useful when it comes to checking the state of the data at a specific point inside the Microflow.

For example, a log message after an inference call made by the **Call ML Model** activity helps to observe the classification result of a ResNet model on a provided image:

{{< figure src="/attachments/refguide9/modeling/integration/ml-kit/ml-kit/exploit-log-message.png" alt="Image of a microflow with a log message activity." class="no-border" >}}

{{< figure src="/attachments/refguide9/modeling/integration/ml-kit/ml-kit/log-message.png" alt="Details of the log message in a microflow example." class="no-border" >}}

When you run the application and provide an image to make an inference, the **Console** will be populated with the related log message.

##### Log Messages After Processing Actions

A similar log message can also be placed after pre-processing actions to observe the output of the pre-processing step. However, this approach is not feasible to analyze the multidimensional inputs and outputs as Base64 encodings of the multidimensional arrays are not human-readable and need additional conversion logic.

In general, the transformation of the multidimensional arrays is subject to Java Actions. Exploiting debugging tools or using logging mechanisms inside the Java Actions will help you debug the state of the variables. 

For more information, see [Debug Java Actions](/howto9/monitoring-troubleshooting/debug-java-actions/).
 
## Known Issues

### I/O Data Types

ONNX values could be in multiple I/O types. The most common type is a Tensor. As mentioned in the examples, a Tensor could represent a primitive value, string, a boolean, or multi-dimensional form of those data types. Additionally, ONNX allows the creation of a value that actually a sequence or a map of tensors for inputs and outputs. However, these types are currently not supported. 

Below are the common types and their support status in *ML Kit*:

| Input / Output Data Types | Support     |
| ------------------------- | ----------- |
| sequence                  | unsupported |
| map                       | unsupported |
| optional                  | unsupported |
| tensor                    | supported   |

The impact of using unsupported data types is different for inputs and outputs. All input features that are defined in the ONNX model are interpreted as mandatory fields and those fields need to be always provided for a successful inference. Therefore, when an unsupported type is used as an input feature in the ONNX model, Studio Pro gives a compilation error, and model loading will fail. On the other side, the output fields are interpreted as optional fields, thus model loading will not fail as long as at least a single supported data type is provided in the output fields.

### I/O Tensor Types

The following chart displays tensor element types that are currently unsupported:

| Group                  | Types                 |
| ---------------------- | --------------------- |
| Floating Point Types   | float16               |
| Unsigned Integer Types | uint8, uint16         |
| Complex Types          | complex64, complex128 |

Similar to the data type restrictions, Studio Pro does not allow usage of the unsupported types in the input fields but having at least a single supported tensor type in the output fields is enough to load and integrate an ONNX model with MLKit. See the [ONNX IR documentation](https://github.com/onnx/onnx/blob/main/docs/IR.md) for all tensor types.
To integrate a pre-trained model with an unsupported type from model repositories (for example, ONNX Model Zoo), one can use graph editing tools (for example, [onnx.helper](https://onnx.ai/onnx/api/helper.html) and [graphsurgeon](https://github.com/NVIDIA/TensorRT/tree/master/tools/onnx-graphsurgeon)) to convert an unsupported type to a supported type like float16 → float32.

### GPU Inference

This is currently not supported.

## FAQs

1. My model does not import properly. 
   
    This may indicate a corrupt model file. Studio Pro supports importing a wide variety of models, ranging from simple logistic regressors to [Whisper](https://github.com/zhuzilin/whisper-openvino), and a wide range of computer vision models, so as far as the ML model is properly imported into ONNX and complies with the standard, Studio Pro will be able to run it.

    Try re-downloading the ML model or verifying the conversion process.

2. The output from my model outputs in the training environment is different from the outputs in Studio Pro.
   
    When converting your model to ONNX, and especially if you use pre- and post-processors, type casting and conversion will occur.
    Check that all the new types you use and that the mathematical operations you conduct in your Java actions (if you use pre- or post-processing) are suitable for the Types the ML model expect/uses (for example, a division is casted to float if a float is expected).

3. My model crashes Studio Pro or its execution is too slow. 
   
    While the ML model file size is small, the outputs or inputs of it may be not so. Look at the output for the detection model for [EasyOCR](https://github.com/JaidedAI/EasyOCR).

    There are two outputs with the `Rely281_dim` and `Transposeoutput_dim` labels, both of them of 4 bytes length, as they are float32. Assuming a standard 224x224 pixels image, we will receive a ~10 mb object. If it is a larger image of 986 pixels, the memory footprint of that output grows to 133 mb, and that is for a single inference. A parallel microflow that calls the ML model ten times will require obviously ten times more memory, probably crashing the JVM.

    In short: mind the growth of memory usage with very complex model outputs. 

    Another potential cause of crashing is if there is an inconsistency between the architecture of the ML model and the data injected into it, especially with complex operations in models that accepts complex calculations such as neural networks. For example, if your model has a `Convolution` layer of shape `16x16x1`, injecting a tensor of a shape whose algebraic division results in an integer result smaller than 1 (such as an input of `[1,3,15,15]`), will have unpredictable consequences. This might include Studio Pro crashing. Verify that the implementation of your model in Studio Pro matches, in shape and type of the data being sent into the component, the ML model architecture, or the ML model documentation if you obtained from third-party sources such as the ONNX Model Zoo.

4. I have an exception when executing the ML model or running it. 
  
    This situation is the most difficult to solve as the causes may vary a lot, ranging from an incompatible Studio Pro version to a failure inside the ML model or a permission issues.

    Mendix recommends turning the logs to trace level, as the ML Engine provides a great deal of information on what is going on, and using this as a basis to decide next steps.

## Read More {#readmore}

* Learn about machine learning [Design Patterns](/refguide9/machine-learning-kit/design-patterns/), including [Advanced Inference Design Patterns](/refguide9/machine-learning-kit/design-patterns/advanced-inference/) and [Pre- and Post-Processor Design Patterns](/refguide9/machine-learning-kit/design-patterns/pre-post-processor-patterns/)
* See [Pre-Trained ML Models](/refguide9/machine-learning-kit/pretrained-ml-models/) to learn about models you can use with *Mendix ML Kit*.
* The [ML model mapping](/refguide9/ml-model-mapping/) document covers details of the service document for machine learning models
* The [Call ML Model](/refguide9/call-ml-model/) document covers the microflow [activity](/refguide9/activities/) used to call an imported ML model in a microflow
