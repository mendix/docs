---
title: "Pre/Post-Processor Design Patterns"
url: /refguide/machine-learning-kit/design-patterns/pre-post-processor-patterns/
weight: 35
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Integrating Models with Pre-processors and Post-processors](/refguide/machine-learning-kit/using-ml-kit/#pre-post-processors) section of *Integrate Machine Learning Models* outlines considerations when importing a machine learning model with advanced processing needs. 

An ML algorithm typically gets and returns numerical values in various shapes (scalar, vector, matrix, etc.) as input and output. However, the input data in our applications could be used and stored in different formats like string, JPG, PNG, mp3, etc. Similarly, an output of an ML model could not be interpreted by our applications and need to be converted into a different data representation format. Therefore, we need pre- / post-processors to make the necessary data representation conversions in our ML-based applications in order to feed the ML model with the correct input data format and parse the relevant output. Mendix developers have multiple choices when it comes to implementing pre- / post-processors.

This document explores four pre-processor and post-processor design patterns for machine learning models. These include pre-processors and post-processors as the following:

* [Microflow activities](#microflow-activities)
* [Java actions](#java-actions)
* [ONNX operators](#onnx-operators)
* [Hybrid activities](#complex-hybrid)

{{% alert color="info" %}}Check out a demo app and Jupyter Notebook examples in our [Demo for Mendix ML Kit](https://github.com/mendix/mlkit-example-app) repository for further information on working with machine learning models in Mendix.{{% /alert %}}

### Pre-processors and Post-processors as Microflow Activities {#microflow-activities}

The most simple processors could be implemented using existing microflow activities that are provided by Studio Pro. Here is some example usage of Design Pattern #1.

#### Categorical-to-Numerical

Machine learning models cannot interpret categorical data without pre-processing steps. Hence, a raw feature that is a string or enumeration might need to be translated into a numerical format for a given model. 

A preprocessor activity

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/design-patterns/pre-postprocessor-design-patterns/ResNet-pre-processor-Model-Inference-single-activity.png" class="no-border" >}}

Create Variable Activity

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/design-patterns/pre-postprocessor-design-patterns/categorical-numerical-create-variable.png" alt="." class="no-border" >}}

As an example, production quality grade of a bike could be ranging from letter A to F. In order to feed that feature into model, the quality grade enumeration can be converted to ordinal data which holds priority ordering with each variable ranging from 1 to 6.

#### Numerical-to-Categorical

In a similar scenario, an output of an ML model that is a numerical value might need to be converted into a string representation to update a field in a domain entity or display a human-interpretable result in the user interface of an application. Such a post-processor can be converted in the below fashion.

A post-processor activity

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/design-patterns/pre-postprocessor-design-patterns/numerical-categorical-postprocessor-activity.png" class="no-border" >}}

Create Variable Activity

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/design-patterns/pre-postprocessor-design-patterns/numerical-categorical-create-variable.png" class="no-border" >}}

For instance, the output of the model that is called target_probability which is ranging from 0 and 1 can be converted into a binary value based on a threshold (0.80) value.

#### Aggregation

Some numerical features can be somewhat summarized using aggregation components. The most common aggregate functions are min(), max(), mean(), count(), sum(), etc. Those features could be very powerful features for use-cases like real-time data flow is a concern on time-series data. [List activities](/refguide/list-activities/) can be useful to calculate such features inside the microflows.

An aggregation activity

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/design-patterns/pre-postprocessor-design-patterns/aggregation-activity.png" class="no-border" >}}

Aggregate List Activity

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/design-patterns/pre-postprocessor-design-patterns/aggregate-list-activity.png" class="no-border" >}}
 
For instance, a new feature (minimum bike age) is calculated via Aggregate List activity and fed into the model.

### Pre-processors and Post-processors as Java Actions {#java-actions}

More advanced use cases would require to use the full power of a programming language in order to achieve some complex transformation, into and from the model itself.

If your model has multidimensional numeric inputs and/or outputs, you need to encode these as `strings`, using Base64. In this use case Java Actions will be required. See the [Multidimensional Outputs](/refguide/machine-learning-kit/using-ml-kit/#multidimensional-outputs) section of *Using ML Kit* for more information.

#### Java Actions for Encoding Features

Consider the following microflow:

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/design-patterns/pre-postprocessor-design-patterns/java-actions-encoding-features-microflow.png" alt="." class="no-border" >}}
 
Below there is a very simple pre-processing that essentially retrieves float values from the Iris entity, converts it InputStream, encodes it as Base64 string, and returns it as the result so that it can be injected into the model later on. See this Random Forest example in our [Mendix ML Kit Demo Repository](https://github.com/mendix/mlkit-example-app/blob/main/javasource/iris_randomforest/actions/PreProcessor.java):

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
 
The post-processor is even simpler (see this Random Forest example in our [Mendix ML Kit Demo Repository](https://github.com/mendix/mlkit-example-app/blob/main/javasource/iris_randomforest/actions/PostProcessor.java)):

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
 
Most of the code is related to creating a Map from Integer (the output of the model) to String (a valid class name) from a file that should be already in your artifacts folder and then returning it so that we can process it later.

#### Java Actions for Data Transformation Features

A common step required in most non-structured data inference using neural networks is to resize the image, normalize, et al. For NLP, a similar flow would require text-cleaning, stop word removal, lemmatization, etc. These would require more complex tasks to be executed. As an example, we share the Pre- and post-processing required for inference using an image through the [ResNet50 in the ONNX model zoo](https://github.com/onnx/models/tree/main/vision/classification/resnet), essentially, resizing and normalization.

##### Pre-Processing

As you can see, most of the code are the loops required for normalization and encoding (see this ResNet50 example in our [Mendix ML Kit Demo Repository](https://github.com/mendix/mlkit-example-app/blob/main/javasource/resnet50/actions/ResNet50Preprocessor.java)):

```

    // BEGIN EXTRA CODE
    static {
      nu.pattern.OpenCV.loadShared(); //OpenCV initialization
    }
    // END EXTRA CODE
    
    @java.lang.Override
    public IMendixObject executeAction() throws Exception
    {
      this.RawImage = this.__RawImage == null ? null : resnet50.proxies.ResNet.initialize(getContext(), __RawImage);
    
      // BEGIN USER CODE
      ByteArrayOutputStream bos = new ByteArrayOutputStream();
      this.RawImage.getContents(getContext(), bos);
      byte[] binaryImage = bos.toByteArray();
      Mat img = Imgcodecs.imdecode(new MatOfByte(binaryImage), Imgcodecs.IMREAD_COLOR);
    
      // 1. resize image
      Mat rim = new Mat();
      Size sz = new Size(224, 224); // this is ResNet50 Specific, change as per your current needs.
      Imgproc.resize(img, rim, sz);
    
      // 2. normalize image. Again, specific for this ResNet50 model.
      float[] mean = new float[] {0.485f, 0.456f, 0.406f};
      float[] std = new float[] {0.229f, 0.224f, 0.225f};
      float[][][][] inputArray = new float[1][3][224][224];
      for(int i = 0; i < 224; i++) {
        for(int j = 0; j < 224; j++) {
          for(int k = 0; k <= 2; k++) {
            double[] rawValue = rim.get(i, j);
            float normalizedValue = (((float) (rawValue[Math.abs(k - 2)] / 255) - mean[k]) / std[k]);
            inputArray[0][k][i][j] = normalizedValue;
          }
        }
      }    
      // 3. convert array to base64
      InputStream is = MLKit.toInputStream(inputArray);
      String base64 = MLKit.toBase64(is);
      // 4.create output entity object
      IMendixObject outputObject = Core.instantiate(getContext(), "ResNet50.ML_Input_Entity_ResNet50ModelMapping");
      outputObject.setValue(getContext(), "Data", base64);
      return outputObject;
      // END USER CODE
    }
```
 
##### Post-Processing

In this case, the bulk of the code is about creating a map for translating the id derived from the highest confidence class retrieved by the model, and the highest probability calculation. See this ResNet50 example in our [Mendix ML Kit Demo Repository](https://github.com/mendix/mlkit-example-app/blob/main/javasource/resnet50/actions/ResNet50Postprocessor.java):

```

    // BEGIN EXTRA CODE
    final Map<Integer, String> classes = new java.util.HashMap<>();
    {
      try {
        File basePath = new File(Core.getConfiguration().getBasePath(), "ml");
        File filePath = Paths.get("resnet50", "imagenet_classes.txt").toFile();
        File classesFile = new File(basePath, filePath.getPath());
        Scanner reader = new Scanner(classesFile);
        while (reader.hasNextLine()) {
          String line = reader.nextLine();
          String[] split = line.split(":");
          Integer id = Integer.valueOf(split[0].trim());
          String cls = split[1].trim();
          classes.put(id, cls);
        }
        reader.close();
      } catch (Exception e) {
        e.printStackTrace();
      }
    }
    // END EXTRA CODE
    
    @java.lang.Override
    public java.lang.String executeAction() throws Exception
    {
      this.ResnetCategory = this.__ResnetCategory == null ? null : resnet50.proxies.ML_Output_Entity_ResNet50ModelMapping.initialize(getContext(), __ResnetCategory);
    
      // BEGIN USER CODE
      // 1. convert base64 to array
      float[] outputScores = new float[1000];
      // 2. decode InputStream from Base64
      final InputStream is = MLKit.fromBase64(ResnetCategory.getResnetv17_dense0_fwd());
      // 3. read InputStream and write to provided array
      MLKit.toArray(is, outputScores);
      // 4. find index of Top 1 
      float max = Integer.MIN_VALUE;
      int index = 0;
      for(int i = 0; i < outputScores.length; i++) {
        if(outputScores[i] > max) {
          max = outputScores[i];
          index = i;
        }
      }
      String result = classes.get(index);
      return result;
      // END USER CODE
    }
```

### Pre-processors and Post-processors as ONNX Operators {#onnx-operators}

More often than not the pre- and post-processing steps are deeply coupled with the model being used, thus, supporting in-file embedded, model-training creation time entities is so important. ONNX allows doing pretty much any pre and post-processor except, maybe, in the most convoluted use cases, and even more so, these probably will be covered in the future as the format grows and expands.

#### Embedded ONNX Operators

There is an extensive [list of ONNX Operators](https://github.com/onnx/onnx/blob/main/docs/Operators.md) that can be embedded into the model file in order to perform several kinds of calculations. Several [examples](https://towardsdatascience.com/creating-onnx-from-scratch-4063eab80fcd) are also available online to demonstrate how this can be achieved. 

A specific example could be this spam filter trained out of a simple corpus that integrates a count-vectorizer into the ONNX file via a pipeline. It is not a Java action but a snipped of the Titanic XGBoost notebook in our [Mendix ML Kit Demo Repository](https://github.com/mendix/mlkit-example-app/blob/main/notebooks/titanic_survivors.ipynb):

```


    from skl2onnx import to_onnx
    from skl2onnx.common.data_types import StringTensorType
    from sklearn.feature_extraction.text import CountVectorizer
    from sklearn.metrics import accuracy_score
    from sklearn.model_selection import train_test_split
    from sklearn.naive_bayes import MultinomialNB
    from sklearn.pipeline import make_pipeline
    
    import pandas as pd
    
    df = pd.read_csv("spam.csv", encoding="L1")
    
    X = df["v2"].values
    y = df["v1"].values
    
    X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=345)
    
    # create a pipeline object
    pipe = make_pipeline(
       CountVectorizer(binary=True),
       MultinomialNB()
    )
    
    # fit the whole pipeline
    pipe.fit(X_train, y_train)
    
    # we can now use it like any other estimator
    print(accuracy_score(pipe.predict(X_test), y_test))
    
    onxx_pipeline = to_onnx(pipe, initial_types=[('message', StringTensorType([None, 1]))])
    
    with open("spam_nb.onnx", "wb") as f:
       f.write(onxx_pipeline.SerializeToString())
```

There is nothing to be done inside Studio Pro, as the Mendix Runtime supports it entirely without any extra steps required. Alternatively, a pre- / post-processor can also be constructed from scratch with native ONNX Operators without the need for a conversion library.

ResNet Pre-processor and Model Inference in Separate MLKit Activities

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/design-patterns/pre-postprocessor-design-patterns/ResNet-pre-processor-Model-Inference-sep-activities.png" alt="." class="no-border" >}}

The below code snippet creates a preprocessor ONNX artifact that contains the necessary feature pre-processor transformation steps by the [ResNet models](https://github.com/onnx/models/tree/main/vision/classification/resnet) that can be found in the ONNX Model Zoo (see in the example below):

```
    
    from onnx import helper, version_converter
    from onnx import TensorProto
    
    import numpy as np
    
    X = helper.make_tensor_value_info('X', TensorProto.FLOAT, [1, 3, None, None])
    sizes = helper.make_tensor_value_info('sizes', TensorProto.INT64, [4])
    n1 = onnx.helper.make_node(
        'Resize',
        inputs=['X', '', '', 'sizes'],
        outputs=['T1'],
        coordinate_transformation_mode='tf_crop_and_resize',
        name='n1'
    )
    
    scale = helper.make_tensor_value_info('scale', TensorProto.FLOAT, [3])
    bias = helper.make_tensor_value_info('bias', TensorProto.FLOAT, [3])
    mean = helper.make_tensor_value_info('mean', TensorProto.FLOAT, [3])
    var = helper.make_tensor_value_info('var', TensorProto.FLOAT, [3])
    n2 = onnx.helper.make_node(
        'BatchNormalization',
        inputs=['T1', 'scale', 'bias', 'mean', 'var'],
        outputs=['Y'],
        epsilon=0.0,
        momentum=0.0,
        name='n2'
    )
    
    Y = helper.make_tensor_value_info('Y', TensorProto.FLOAT, [1, 3, 224, 224])
    
    # Create the graph (GraphProto)
    graph_def = helper.make_graph(
        [n1, n2],
        'preprocessor',
        [X, sizes, scale, bias, mean, var],
        [Y]
    )
    
    model_def = helper.make_model(graph_def, producer_name='onnx-example')
    
    onnx.save(model_def, 'preprocessor.onnx')
```

#### Modifying ONNX Graphs

The computation graph of an existing ONNX artifact can be altered in various ways. An ONNX operator (node) can be added or removed, or replaced with another operator. [Python API](https://github.com/onnx/onnx/blob/rel-1.9.0/docs/PythonAPIOverview.md) of the ONNX provides a bunch of tools to make modifications to existing artifacts.

ONNX model is represented using protocol buffers. Dealing with ONNX protocol buffer is complicated and error-prone. The ONNX protocol buffer representation also depends on ONNX IR version and OpSet version.

ResNet Pre-processor and Model Inference Combined in a Single MLKit Activity

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/design-patterns/pre-postprocessor-design-patterns/ResNet-pre-processor-Model-Inference-single-activity.png" alt="." class="no-border" >}}

Another common scenario is merging multiple ONNX artifacts. For instance, an existing pre- / post-processor ONNX artifact can be merged with an existing/pre-trained ONNX model in order to create a single, all-in-one ONNX model that can handle model inference along with the related pre- / post-processing actions. See the example below, taken from the [Python API Overview](https://github.com/onnx/onnx/blob/main/docs/PythonAPIOverview.md) in the ONNX Model Zoo:

```


    preporcessor = onnx.load('preprocessor.onnx')
    resnet = onnx.load('resnet50-v1-12-int8.onnx')
    
    combined_model = onnx.compose.merge_models(
        preporcessor, resnet,
        io_map=[('Y', 'data')]
    )
    
    onnx.save(combined_model, 'combined_resnet.onnx')
```

The above snippet shows how to combine and save two ONNX artifacts which stores ONNX graphs for pre-processing operators and the relevant ResNet model that is being used in the previous examples.

### Pre-Processors and Post-processors as Hybrid Activities {#complex-hybrid}

The pre- / post-processing steps of an ML Model Call activity are not restricted by a single design pattern, and it can be composed of multiple design patterns. That means Mendix developers can combine many design patterns to construct complex pre- / post-processing actions.

Typically, the necessary pre-processing actions of Computer Vision models are quite complex where a raw image input needs to be cropped, resized, normalized, and converted into a multidimensional vector that holds multicolor channels before feeding into the models for inference. Similarly, the integration of a modern NLP model integration could be a tedious task due to tokenization issues. When an input to a model is in free-text format, that raw string structure has to be converted into a multidimensional vector by using an external tokenization mapping. Such pre- / post-processor pipelines may need to be composed of combinations of native Microflow Activities, Java Actions, and ONNX Operators.

Here is an overview of a typical NLP model inference pipeline in microflows.

{{< figure src="/attachments/refguide/modeling/integration/ml-kit/design-patterns/pre-postprocessor-design-patterns/hybrid-activity-microflow.png" class="no-border" >}}
