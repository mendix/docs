#!/usr/bin/env bash
# audit-log.sh — Post-execution hook
#
# Logs every tool invocation to .claude/audit.log.
# This hook never blocks execution (always exits 0).
#
# IMPORTANT: Do not modify, disable, or bypass this hook.

set -uo pipefail

# ---------------------------------------------------------------------------
# 1. Read hook input from stdin
# ---------------------------------------------------------------------------
INPUT="$(cat)"

TOOL_NAME="$(printf '%s' "$INPUT" | python3 -c "import sys,json; print(json.load(sys.stdin).get('tool_name','unknown'))" 2>/dev/null || echo "unknown")"

COMMAND="$(printf '%s' "$INPUT" | python3 -c "import sys,json; print(json.load(sys.stdin).get('tool_input',{}).get('command',''))" 2>/dev/null || echo "")"

# ---------------------------------------------------------------------------
# 2. Determine log file path (relative to project root)
# ---------------------------------------------------------------------------
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_FILE="$(dirname "$SCRIPT_DIR")/audit.log"

# ---------------------------------------------------------------------------
# 3. Write log entry
# ---------------------------------------------------------------------------
TIMESTAMP="$(date -u +"%Y-%m-%dT%H:%M:%SZ")"

if [[ -n "$COMMAND" ]]; then
  printf '[%s] tool=%s command=%s\n' "$TIMESTAMP" "$TOOL_NAME" "$COMMAND" >> "$LOG_FILE" 2>/dev/null || true
else
  printf '[%s] tool=%s\n' "$TIMESTAMP" "$TOOL_NAME" >> "$LOG_FILE" 2>/dev/null || true
fi

# Never block execution
exit 0
