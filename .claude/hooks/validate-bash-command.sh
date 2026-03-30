#!/usr/bin/env bash
# validate-bash-command.sh — Pre-execution hook (Layer 3 guardrail)
#
# Claude Code invokes this hook before every Bash tool call.
# Input:  JSON on stdin  {"tool_name":"Bash","tool_input":{"command":"..."}}
# Output: exit 0 to allow, exit 2 with JSON {"error":"..."} to block.
#
# IMPORTANT: Do not modify, disable, or bypass this hook.

set -euo pipefail

# ---------------------------------------------------------------------------
# 1. Read hook input from stdin and extract the command
# ---------------------------------------------------------------------------
INPUT="$(cat)"

TOOL_NAME="$(printf '%s' "$INPUT" | python3 -c "import sys,json; print(json.load(sys.stdin).get('tool_name',''))" 2>/dev/null || true)"

# Only validate Bash commands — allow everything else through
if [[ "$TOOL_NAME" != "Bash" ]]; then
  exit 0
fi

COMMAND="$(printf '%s' "$INPUT" | python3 -c "import sys,json; print(json.load(sys.stdin).get('tool_input',{}).get('command',''))" 2>/dev/null || true)"

if [[ -z "$COMMAND" ]]; then
  exit 0
fi

# ---------------------------------------------------------------------------
# 2. Blocked patterns — glob-style matching
#    Each pattern is checked against the full command string (case-insensitive).
# ---------------------------------------------------------------------------
BLOCKED_PATTERNS=(
  # AWS — Destructive operations
  "aws * delete*"
  "aws * remove*"
  "aws * destroy*"
  "aws * terminate*"
  "aws * deregister*"
  "aws * purge*"
  "aws s3 rm *"
  "aws s3 rb *"
  "aws cloudformation delete-stack*"

  # AWS — Provisioning & scaling
  "aws ec2 run-instances*"
  "aws ec2 stop-instances*"
  "aws autoscaling set-desired-capacity*"
  "aws autoscaling update-auto-scaling-group*"
  "aws application-autoscaling *"
  "aws ecs update-service*"

  # AWS — IAM
  "aws iam delete*"
  "aws iam create*"
  "aws iam put*"
  "aws iam attach*"

  # Kubernetes — Mutations
  "kubectl delete *"
  "kubectl apply *"
  "kubectl create *"
  "kubectl patch *"
  "kubectl scale *"
  "kubectl rollout *"
  "kubectl drain *"
  "kubectl cordon *"
  "kubectl exec *"
  "kubectl edit *"

  # Terraform / IaC
  "terraform destroy*"
  "terraform apply*"
  "terraform import *"
  "terraform state rm *"
  "terraform taint *"

  # Helm
  "helm install *"
  "helm upgrade *"
  "helm delete *"
  "helm uninstall *"
  "helm rollback *"

  # Git — Destructive
  "git push --force*"
  "git push -f *"
  "git push --force-with-lease*"
  "git push origin main*"
  "git push origin master*"
  "git reset --hard*"
  "git clean -f*"

  # File system — Destructive
  "rm -rf /"
  "rm -rf /*"
  "rm -rf ~"
  "rm -rf ~/*"
  "rm -rf ..*"
  "mkfs.*"
  "dd if=*/dev/*"

  # Credential access via cat/less/head/tail
  "cat */.aws/*"
  "cat */.kube/*"
  "cat */.ssh/*"
  "cat *.env"
  "cat *.env.*"
  "cat */secrets/*"
  "cat *credentials*"
  "less */.aws/*"
  "less */.ssh/*"
  "head */.aws/*"
  "head */.ssh/*"
  "tail */.aws/*"
  "tail */.ssh/*"

  # Network & remote access
  "ssh *"
  "scp *"
  "curl *|*sh"
  "curl *|*bash"
  "wget *|*sh"
  "wget *|*bash"

  # Privilege escalation
  "sudo *"
  "sudo"
  "chmod 777 *"
  "chown root *"
)

# ---------------------------------------------------------------------------
# 3. Check function — matches a single sub-command against all patterns
# ---------------------------------------------------------------------------
check_command() {
  local cmd="$1"
  # Trim leading/trailing whitespace
  cmd="$(echo "$cmd" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')"

  if [[ -z "$cmd" ]]; then
    return 0
  fi

  # Convert to lowercase for case-insensitive matching
  local cmd_lower
  cmd_lower="$(echo "$cmd" | tr '[:upper:]' '[:lower:]')"

  for pattern in "${BLOCKED_PATTERNS[@]}"; do
    local pattern_lower
    pattern_lower="$(echo "$pattern" | tr '[:upper:]' '[:lower:]')"

    # shellcheck disable=SC2254
    if [[ "$cmd_lower" == $pattern_lower ]]; then
      printf '{"error":"BLOCKED by guardrail hook: command matches blocked pattern: %s"}\n' "$pattern" >&2
      exit 2
    fi
  done

  return 0
}

# ---------------------------------------------------------------------------
# 4. Split on pipes and command chains, then check each sub-command
# ---------------------------------------------------------------------------
# Replace common chain operators with a delimiter
NORMALIZED="$(echo "$COMMAND" | sed 's/&&/\n/g; s/||/\n/g; s/;/\n/g; s/|/\n/g')"

while IFS= read -r subcmd; do
  check_command "$subcmd"
done <<< "$NORMALIZED"

# If we reach here, the command is allowed
exit 0
