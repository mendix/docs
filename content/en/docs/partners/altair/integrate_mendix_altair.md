---
title: "How to Integrate with Altair AI Studio and AI Hub"
url: /partners/altair/how-to-integrate-mendix-altair
linktitle: "How to Integrate with Altair AI"
weight: 20
description: "Learn how to build and deploy machine learning models using Altair AI Studio and AI Hub, and integrate them with your Mendix applications"
no_list: false
---

## Introduction

This document guides you through the process of creating machine learning models using Altair AI Studio and deploying them through AI Hub for integration with your Mendix applications. Using a practical employee attrition prediction example, you will learn how to build predictive models, manage them in a centralized repository, and create endpoints for seamless integration.

The tutorial walks you through building a model that predicts whether an employee will leave the company based on various factors such as demographics, job satisfaction, and compensation details. This real-world use case demonstrates the complete workflow from data exploration to production deployment.

In this document, you will:

* Learn how to build predictive models using Altair AI Studio's Auto Model feature with the Employee Attrition dataset
* Discover how to manage and version your models using AI Hub
* Create deployable endpoints for integration with Mendix applications
* Understand the process from model development to production deployment

{{% alert color="info" %}}
**Example Application Available**: A complete example application demonstrating the Mendix-Altair integration is available in the Mendix Marketplace. [PLACEHOLDER: Add link to marketplace listing]. This sample app shows how to consume Altair AI Hub endpoints within a Mendix application via REST and can serve as a reference implementation.
{{% /alert %}}

### Prerequisites

Before implementing this integration, ensure you meet the following requirements:

* Access to [Altair AI Studio](https://docs.rapidminer.com/latest/studio/) with appropriate licensing
* **Optional but recommended for Mendix integration**: Access to [Altair AI Hub](https://docs.rapidminer.com/latest/hub/) for model management and deployment
* [PLACEHOLDER: Mendix connector/integration requirements - please provide details]
* Basic understanding of machine learning concepts and predictive modeling
* Familiarity with data preparation and feature selection

{{% alert color="info" %}}
**AI Hub for Mendix Integration**: While you can explore AI Studio and build models without AI Hub, you will need AI Hub access to create deployable endpoints for Mendix integration. If you're just getting started with Altair AI Studio, you can skip the AI Hub sections initially and focus on model building.
{{% /alert %}}

## Setting Up Your AI Hub Project (Optional - Required for Mendix Integration) {#ai-hub-project}

If you plan to integrate your models with Mendix applications, you'll need to set up an AI Hub project first. This section can be skipped if you're only exploring model building capabilities.

### Creating a New Project

Proper project organization in AI Hub is essential for model lifecycle management and deployment:

1. Create a new project in AI Hub following the [project creation guide](https://docs.rapidminer.com/latest/hub/projects/index.html)
2. Choose a descriptive project name that reflects your use case (e.g., "Employee-Attrition-Prediction")

### Connecting AI Studio to AI Hub

If you created an AI Hub project, establish the connection between your development environment and the centralized repository:

1. In AI Studio, connect to your AI Hub instance
2. Follow the detailed [AI Studio project connection guide](https://docs.rapidminer.com/latest/studio/projects/index.html)
3. Ensure proper authentication and permissions are configured

## Building Predictive Models with AI Studio

### Accessing Sample Data

To get started with model building, you'll use the sample employee attrition dataset provided in AI Studio:

1. Navigate to **Data** > **Community Samples** > **Community Real World Use Cases** > **Employee Attrition**
2. Open the **EmployeeData** dataset

### Creating an Auto Model

Altair AI Studio's Auto Model feature simplifies the machine learning process by automatically testing multiple algorithms and selecting the best performing model. For comprehensive information about the Auto Model feature, its capabilities, and general usage guidelines, refer to the [Altair AI Studio Auto Model documentation](https://docs.rapidminer.com/latest/studio/guided/auto-model/).

The following steps provide specific guidance for working with the Employee Attrition dataset:

#### Starting the Auto Model Process

1. In the **EmployeeData** dataset view, select **Auto Model** from the top toolbar. The wizard will guide you through the machine learning pipeline setup
2. On the **Select Task** page:
   * Click **Predict** to set up a predictive modeling task
   * On the right side, select the **Status** column as your target variable
   * The **Status** column represents if the employee is still employed by the company (*Current*) or not (*Past*). Based on this information, the models can calculate how the other attributes influence the status.
3. Click **Next** to navigate to the **Prepare Target** page. The default settings are sufficient for this use case.
4. Click **Next** to navigate to the **Select Inputs** page
5. Review all available input features that will be used to predict employee attrition. For this specific dataset, deselect the following columns to improve model performance:
   * **Marital** - Not needed to predict the status of an employee.
   * **CanDoBetter** - Not part of our use case. The data represents textual feedback written by the employees.
6. Keep all other relevant features selected, as they provide valuable predictive information such as employee demographics and compensation details. The traffic-lights below *Status* and the *Quality* column indicate how well the attributes fit for a prediction of the employee attrition.
7. Click **Next** to navigate to the **Model Types** page. You can choose which models should be run for a later comparison. Keep the default settings and click **Run** to navigate to the results.
8. Auto Model will run various algorithms including:
   * Decision Tree
   * Random Forest
   * Gradient Boosted Trees
   * Logistic Regression
   * Deep Learning
9. Wait for the training process to complete - this typically takes a few minutes depending on:
   * Dataset size and complexity
   * Number of algorithms being tested
   * Available computing resources
10. Review the model performance results displayed in the interface. Auto Model compares how well each model was able to predict the status by automatically dividing the dataset into training and test subsets, validating if the model can predict the test results well enough. The classification error may indicate which model fits best for this use case (the smaller the better). You can dive deeper into each model's results and compare different parameters.

#### Saving Results

After reviewing model performance, you need to **Save Results** in the bottom-left corner:
* If you have access to an [AI Hub project](#ai-hub-project), select the respective repository
* Otherwise, you can store the results on your local machine


## Managing Models in AI Hub Repository (Required for Mendix Integration)

{{% alert color="info" %}}
This section applies only if you exported your results to an AI Hub repository. If you stored results locally, you cannot deploy your model for integration purposes.
{{% /alert %}}

### Committing Models to Repository

After exporting your model results to AI Hub:

1. In AI Studio, verify that all your model results are now in the connected repository
2. Create a new snapshot by right-clicking your repository and selecting **Create snapshot and add it to the AI Hub**
3. Add descriptive commit messages that explain model changes and improvements
4. Navigate to your AI Hub project to verify the snapshot was committed successfully by checking the **Snapshots** section.

### Creating Model Endpoints

This final step on the Altair side transforms your trained models into callable web services that can be accessed from Mendix applications:

1. In AI Hub, navigate to your project where you committed the model snapshots
2. Go to the **Endpoints** section by following the [endpoint creation guide](https://docs.rapidminer.com/latest/hub/endpoints/create/index.html)
3. Configure the deployment:
   * Choose a deployment path, for example `employeeattrition`
   * Choose a snapshot, for example your latest commit
   * It is recommended to restrict access, for example using the `Long-living API token` option
4. Click **Add Endpoint Configuration** and select the right process you want to deploy. In our case, the *Gradient Boosted Trees* performed the best. Select the `score_set.rmp` which you can review in AI Studio. This process accepts input data, applies preprocessing and predicts the *Status* attribute of an employee.
5. In this example, no parameter needs to be mapped, so you can skip step 2. In the last step **Dependencies**, you need to select every item from the project that the *score_set* depends on by navigating to the designated model and selecting the following:
    * Encoding Processing.rmmodel
    * Known Values.rmmodel
    * Missing Processing.rmmodel
    * Optimal Feature Set.rmfeatset
    * Production Model.rmmodel
    * Production Statistics.rmstats
    * Text Processing.rmmodel
6. Finally, you can click **Save & Deploy**. In a few moments, your endpoint will be ready to be consumed.

### Testing Model Endpoint

Now that your model (or rather the scoring process) is accessible for external invocation, you can first perform a test.

1. Navigate to your project and the **Endpoints** section and click the **Test** button.
2. For input data, paste the following JSON as an example:

    ```json
    {
        "data": [
            {
                "Training": "Y",
                "Status": "Current",
                "Est_Income": 45000.00,
                "PositionType": "Non-Managerial/ Professional",
                "DriveTime": "More than 90 mnts",
                "Benefit": "N",
                "Education": "Baccalaureate or 4 year college degree",
                "SpousalBenefit": "sadads",
                "StockPlan": "No",
                "Facility": "Facility A",
                "TrainingRecieved": "No",
                "length_of_hire": 17.11
            }
        ]
    }
    ```
3. Paste your token in the **Token** textbox. If you haven't copied it, you need to go back to the endpoint settings.
4. Click **Run Test**. In the *Test result* section, you can view the result of the model, indicating if the employee will stay with the company or rather quit soon, also providing a *confidence* factor.

If the test was sucessful, there is nothing stopping you from integrating the model into your Mendix app. For authentication purposes, it is recommended to store the token as well as the endpoint url in a safe vault. The api-token can be obtained when clicking **Show curl command** on the test page starting with `Bearer <base64 token>`.


## Integrate into your Mendix App

*Please provide details about:*
* How to connect Mendix applications to Altair AI Hub endpoints
* Required Mendix connector or integration modules
* Authentication and API key management
* Data format requirements for API calls
* Error handling and response processing

## Troubleshooting

### Common Issues and Solutions

[PLACEHOLDER: Add common issues and their solutions, such as:]
* Connection problems between AI Studio and AI Hub
* Model training failures and debugging steps
* Endpoint deployment and configuration issues
* Integration challenges with Mendix applications

## Next Steps

After successfully implementing this integration:

* [PLACEHOLDER: Add guidance for advanced use cases]
* [PLACEHOLDER: Include links to additional resources]
* [PLACEHOLDER: Suggest optimization and scaling strategies]

For additional support and documentation, refer to:
* [Altair AI Studio Documentation](https://docs.rapidminer.com/latest/studio/)
* [Altair AI Hub Documentation](https://docs.rapidminer.com/latest/hub/)
* [PLACEHOLDER: Add Mendix-specific documentation links]
