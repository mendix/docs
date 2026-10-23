# AWS Rules

## Environment Context

- We use **AWS Bedrock** for AI model invocation
- Sandbox accounts are accessed via **Mendix SSO**
- **Production accounts exist on the same machine** — DO NOT use them
- If a command references an AWS profile or region you don't recognize, STOP and ask

## Credential Safety

- NEVER read files in `~/.aws/` (credentials, config, SSO cache)
- NEVER output or display AWS access keys, secret keys, or session tokens
- NEVER set or export `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, or `AWS_SESSION_TOKEN` in commands
- If you need to verify identity, use `aws sts get-caller-identity` — this is safe and read-only

## Allowed Operations (Read-Only)

These AWS CLI commands are safe and auto-approved:

- `aws * describe*` — describe any resource
- `aws * list*` — list any resources
- `aws * get*` — get resource details
- `aws s3 ls` — list S3 buckets and objects
- `aws sts get-caller-identity` — verify current identity

## Blocked Operations

### Destructive (deny — never allowed)
- `aws * delete*`, `aws * remove*`, `aws * destroy*`, `aws * terminate*`
- `aws * deregister*`, `aws * purge*`
- `aws s3 rm`, `aws s3 rb`
- `aws cloudformation delete-stack`

### Provisioning & Scaling (deny — never allowed)
- `aws ec2 run-instances`, `aws ec2 stop-instances`
- `aws autoscaling set-desired-capacity`, `aws autoscaling update-auto-scaling-group`
- `aws application-autoscaling *`
- `aws ecs update-service`

### IAM (deny — never allowed)
- `aws iam create*`, `aws iam delete*`, `aws iam put*`, `aws iam attach*`

## Verification Steps

Before running any AWS command:

1. **Check the profile** — is this a sandbox account? If unsure, run `aws sts get-caller-identity` first
2. **Check the region** — is this an expected region? If it looks unfamiliar, ask the user
3. **Check the action** — is this read-only? If it mutates state, do NOT run it
4. **When in doubt** — explain the command and let the human decide
