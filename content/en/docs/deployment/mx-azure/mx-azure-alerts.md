---
title: "Pre-Provisioned Grafana Alerts"
url: /developerportal/deploy/mendix-on-azure/alerts/
weight: 16
description: "Describes the example alert rules that are provisioned with Mendix on Azure and how to adjust them for your own operational requirements."
---

## Introduction

Every Mendix on Azure cluster is provisioned with a set of Grafana alert rules that monitor your apps and the underlying Kubernetes nodes. These rules are supplied as **examples**. They cover common failure conditions and give you a working starting point, but they are not intended to be a complete monitoring solution.

You own these rules after they are created. Mendix provisions them once, when the cluster is created, and does not change them afterwards. This means you can edit thresholds, change severities, disable rules, or delete them entirely without your changes being reverted by a later platform update.

Review the rules against your own availability targets and adjust them. The thresholds that ship with the cluster are generic defaults, and no default is correct for every app.

{{% alert color="info" %}}
Alert rules only send notifications after you configure SMTP for your Grafana instance. Until then, the rules still evaluate and appear in Grafana, but no email is delivered. See [Configuring SMTP for Email Notifications](#configuring-smtp).
{{% /alert %}}

## Viewing the Alert Rules

The rules are provisioned into the **Mendix** folder in Grafana.

To view them, perform the following steps:

1. In Grafana, go to **Alerting > Alert rules**.
2. Expand the **Mendix** folder.
3. Click a rule name to see its query, condition, and current state.

Accessing Grafana requires the Grafana Admin permission on the target Azure subscription. For more information, see [Monitoring Mendix on Azure with Grafana](/developerportal/deploy/mendix-on-azure/monitor/).

## Application Alerts {#application-alerts}

These rules monitor the apps running in the `mendix` namespace. Metrics come from Azure Managed Prometheus.

| Alert | Severity | Condition | Pending Period |
| --- | --- | --- | --- |
| High CPU Usage | Warning | Container CPU usage is above 80% of its configured CPU limit | 5 minutes |
| High Memory Usage | Warning | Container memory usage is above 80% of its configured memory limit | 5 minutes |
| Deployment Has No Available Replicas | Critical | A deployment has no available replicas while at least one is desired, and the deployment is more than 10 minutes old | 5 minutes |

The two resource alerts compare usage against the limits you set for the environment, not against the node capacity. If you raise an environment's memory limit, the alert adjusts automatically because the threshold is a percentage.

**Deployment Has No Available Replicas** is the most significant rule in the set, because it detects actual downtime rather than a warning sign. It fires when every replica of an app is unavailable. The rule ignores deployments younger than 10 minutes so that normal startup and rolling restarts do not trigger it.

## Node Alerts {#node-alerts}

These rules monitor the Azure Kubernetes Service nodes that host your apps.

| Alert | Severity | Condition | Pending Period |
| --- | --- | --- | --- |
| Node High CPU Usage | Warning | Node CPU usage is above 85% | 5 minutes |
| Node High Memory Usage | Warning | Node memory usage is above 85% | 5 minutes |
| Node Disk Pressure | Warning | Less than 15% of the root filesystem remains available | 5 minutes |

Node pressure is often relieved automatically, because cluster autoscaling adds nodes when the existing ones cannot schedule new pods. Treat these alerts as capacity-planning signals rather than incidents that need an immediate response.

## Database Alerts {#database-alerts}

These rules monitor the Azure Database for PostgreSQL flexible server instance. Metrics come from Azure Monitor rather than Prometheus.

| Alert | Severity | Condition | Pending Period |
| --- | --- | --- | --- |
| PostgreSQL High CPU Usage | Warning | Database CPU usage is above 85% | 5 minutes |
| PostgreSQL High Memory Usage | Warning | Database memory usage is above 85% | 5 minutes |
| PostgreSQL High Connection Usage | Warning | Active connections exceed 80% of `max_connections` | 5 minutes |
| PostgreSQL High Storage Usage | Info | Storage usage is above 90% | 10 minutes |

**PostgreSQL High Storage Usage** has an informational severity because storage auto-grow is enabled. Azure expands the volume before it fills, so this alert is for cost and capacity awareness rather than an outage risk.

{{% alert color="warning" %}}
The connection alert compares against a fixed `max_connections` value that matches the database size provisioned with your cluster. If you change the database SKU, review this rule, because the comparison value is not recalculated automatically.
{{% /alert %}}

## Configuring SMTP for Email Notifications {#configuring-smtp}

Each cluster is provisioned with a contact point named `email-alerts`, and a notification policy that routes all alerts to it. The email address is taken from the account that deployed the cluster.

Azure Managed Grafana does not include a mail server. You must supply your own SMTP relay before any notification can be delivered.

### Setting the SMTP Configuration

To configure SMTP, run the following Azure CLI command, replacing the values with those of your own mail relay:

```bash
az grafana update \
  --resource-group <your-resource-group> \
  --name <your-grafana-instance> \
  --smtp enabled \
  --host "smtp.example.com:587" \
  --user "<smtp-username>" \
  --password "<smtp-password>" \
  --from-address "grafana-alerts@example.com" \
  --from-name "Mendix on Azure Alerts" \
  --start-tls-policy OpportunisticStartTLS
```

The following table describes the parameters that most often need attention.

| Parameter | Description |
| --- | --- |
| `--host` | The SMTP server hostname including the port, such as `smtp.example.com:587` |
| `--from-address` | The sender address. Many relays reject messages whose sender is not a verified domain |
| `--start-tls-policy` | Set to `MandatoryStartTLS` to require encryption, `OpportunisticStartTLS` to use it when offered, or `NoStartTLS` to disable it |
| `--skip-verify` | Set to `true` only when the relay presents a self-signed certificate. Avoid this in production |

{{% alert color="warning" %}}
The `--password` value appears in your shell history and in Azure CLI logs. Use a dedicated SMTP credential with permission to send mail only, and rotate it independently of other secrets.
{{% /alert %}}

### Verifying Email Delivery

To confirm that the configuration works, perform the following steps:

1. In Grafana, go to **Alerting > Contact points**.
2. Click the edit icon for the `email-alerts` contact point.
3. Change the address in **Addresses** to your own if the deploying account's address is not the one you want to use.
4. Click **Test** and then click **Send test notification**.
5. Check the inbox of the recipient address.

If the test email does not arrive, verify that the relay accepts the sender address in `--from-address`, and that your STARTTLS policy matches what the relay expects.

## Adjusting the Alerts for Your Environment

Because these rules are examples, expect to change them. The following adjustments are the most common.

* **Change a threshold** - Open the rule in **Alerting > Alert rules**, edit the threshold expression, and save. An app that runs steadily at 85% memory by design needs a higher threshold than the default.
* **Change the pending period** - Increase the pending period to reduce noise from short spikes, or decrease it to detect problems sooner.
* **Route by severity** - Add nested routes under your notification policy so that critical alerts reach an on-call channel while warnings go to email.
* **Add a contact point** - Grafana supports Slack, Microsoft Teams, PagerDuty, Opsgenie, and webhooks. Create the contact point, then reference it from a notification policy.
* **Disable or delete a rule** - Pause a rule to stop it evaluating, or delete it if it does not apply to your environment.

For the procedure to build an entirely new rule, see [Setting up Grafana Alerts](/developerportal/deploy/mendix-on-azure/monitor/#setting-up-grafana-alerts).

{{% alert color="warning" %}}
Changes to alert rules and contact points persist across platform updates. Changes to the default notification policy do not. If you restructure the notification policy tree, keep a record of your configuration so that you can reapply it after a cluster update.
{{% /alert %}}

## Alerts That Report No Data

An alert rule shows the **No Data** state when its query returns no series. This is normal in several situations, and does not always indicate a problem.

| Situation | Explanation |
| --- | --- |
| No app is deployed yet | The application alerts have no container to measure. The two resource rules treat this as normal and stay silent |
| An app is stopped or scaled to zero | The same as above. **Deployment Has No Available Replicas** still reports correctly, because the deployment object continues to exist |
| A cluster was just created | Metric collection takes a few minutes to start after provisioning |
| Metric collection has stopped | If node or database alerts report no data for an extended period while the cluster is running, the metrics pipeline needs investigation |

## Read More

* [Monitoring Mendix on Azure with Grafana](/developerportal/deploy/mendix-on-azure/monitor/) - How to access Grafana and view logs and metrics
* [Export Logs to External Systems](/developerportal/deploy/mendix-on-azure/export-logs/) - How to send logs to a third-party observability tool
* [Support for Mendix on Azure](/developerportal/deploy/mendix-on-azure/support/) - The responsibility split between Mendix and you
* [Grafana Alerting documentation](https://grafana.com/docs/grafana/latest/alerting/) - Grafana's reference for alert rules, contact points, and notification policies
* [Configure SMTP settings in Azure Managed Grafana](https://learn.microsoft.com/en-us/azure/managed-grafana/how-to-smtp-settings) - Microsoft's documentation for the SMTP options
