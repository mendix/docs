#!/bin/bash

# Colors for terminal output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
WHITE='\033[0;37m'
GRAY='\033[0;90m'
BOLD='\033[1m'
DIM='\033[2m'
RESET='\033[0m'

# Read JSON input from stdin
input=$(cat)

# Extract data from JSON
model_name=$(echo "$input" | jq -r '.model.display_name')
model_id=$(echo "$input" | jq -r '.model.id')
current_dir=$(echo "$input" | jq -r '.workspace.current_dir')
output_style=$(echo "$input" | jq -r '.output_style.name')
session_id=$(echo "$input" | jq -r '.session_id')
transcript_path=$(echo "$input" | jq -r '.transcript_path')

# Get current time
current_time=$(date '+%H:%M:%S')

# Function to get token usage from JSON or estimate from transcript
get_token_stats() {
	# First try to get actual token usage from JSON input if available
	actual_tokens=$(echo "$input" | jq -r '.token_usage.input_tokens // .conversation.token_count // empty' 2>/dev/null)
	actual_messages=$(echo "$input" | jq -r '.conversation.message_count // empty' 2>/dev/null)

	if [[ -n "$actual_tokens" && "$actual_tokens" != "null" ]]; then
		# Use actual token count from JSON
		estimated_tokens="$actual_tokens"
		message_count="${actual_messages:-0}"
		echo "$estimated_tokens,$message_count"
	elif [[ -f "$transcript_path" ]]; then
		# Fallback: Count approximate tokens (rough estimate: 1 token ≈ 4 characters)
		total_chars=$(wc -c <"$transcript_path" 2>/dev/null || echo "0")
		estimated_tokens=$((total_chars / 4))

		# Count messages
		message_count=$(grep -c '"role":' "$transcript_path" 2>/dev/null || echo "0")

		echo "$estimated_tokens,$message_count"
	else
		echo "0,0"
	fi
}

# Function to estimate cost based on model and tokens
get_cost_estimate() {
	local tokens=$1
	local model=$2
	local cost=0

	# AWS Bedrock cost estimates per 1M tokens (input costs only, as of Feb 2026)
	case "$model" in
		*"sonnet-4-5"*) cost_per_1m=3.00 ;; # Claude Sonnet 4.5 - estimated
		*"haiku-4-5"*) cost_per_1m=1.00 ;;  # Claude Haiku 4.5 - estimated
		*"opus-4-6"*) cost_per_1m=5.00 ;;   # Claude Opus 4.6 - estimated
		*) cost_per_1m=3.00 ;;              # Default estimate
	esac

	# Calculate cost in dollars
	cost=$(echo "scale=4; $tokens * $cost_per_1m / 1000000" | bc 2>/dev/null || echo "0.0000")
	printf "%.4f" "$cost"
}

# Get token statistics
token_stats=$(get_token_stats)
estimated_tokens=$(echo "$token_stats" | cut -d',' -f1)
message_count=$(echo "$token_stats" | cut -d',' -f2)

# Get cost estimate
cost_estimate=$(get_cost_estimate "$estimated_tokens" "$model_id")

# Get git branch if in a git repo
git_info=""
if git rev-parse --git-dir >/dev/null 2>&1; then
	branch=$(git branch --show-current 2>/dev/null)
	if [[ -n "$branch" ]]; then
		# Check for changes
		if ! git diff --quiet 2>/dev/null || ! git diff --cached --quiet 2>/dev/null; then
			git_info=" ${YELLOW}🔀 ${branch} ±${RESET}"
		else
			git_info=" ${GREEN}🌿 ${branch}${RESET}"
		fi
	fi
fi

# Get kubectl context if available
kubectl_info=""
if command -v kubectl >/dev/null 2>&1; then
	context=$(kubectl config current-context 2>/dev/null)
	if [[ -n "$context" ]]; then
		# Highlight production contexts
		if [[ "$context" == *-prod* ]]; then
			kubectl_info=" ${RED}⚠️  ⎈ ${context}${RESET}"
		else
			kubectl_info=" ${BLUE}⎈ $(basename "$context")${RESET}"
		fi
	fi
fi

# Get AWS profile if set
aws_info=""
if [[ -n "$AWS_PROFILE" ]]; then
	if [[ "$AWS_PROFILE" == *-prod* ]]; then
		aws_info=" ${RED}⚠️  ☁️ ${AWS_PROFILE}${RESET}"
	else
		aws_info=" ${CYAN}☁️ ${AWS_PROFILE}${RESET}"
	fi
fi

# Build the status line with colors and emojis
status_line=""

# Add directory (folder name only)
dir_display=$(basename "$current_dir")
status_line+=" ${BOLD}${BLUE}📁 $dir_display${RESET}"

# Add git info
status_line+="$git_info"

# Add kubectl info
status_line+="$kubectl_info"

# Add AWS info
status_line+="$aws_info"

# Add Claude-specific information
status_line+=" ${GRAY}|${RESET}"

# Add model info with emoji
model_emoji="🤖"
case "$model_id" in
	*"sonnet-4"*) model_emoji="🧠" ;;
	*"sonnet-3-5"*) model_emoji="⚡" ;;
	*"haiku"*) model_emoji="🌸" ;;
	*"opus"*) model_emoji="👑" ;;
esac
status_line+=" ${PURPLE}${model_emoji} $model_name${RESET}"

# Add output style if not default
if [[ "$output_style" != "null" && "$output_style" != "default" ]]; then
	status_line+=" ${DIM}($output_style)${RESET}"
fi

# Add token and cost information
if [[ "$estimated_tokens" -gt 0 ]]; then
	# Format tokens with K/M suffixes
	if [[ "$estimated_tokens" -gt 1000000 ]]; then
		token_display=$(echo "scale=1; $estimated_tokens / 1000000" | bc 2>/dev/null || echo "0")M
	elif [[ "$estimated_tokens" -gt 1000 ]]; then
		token_display=$(echo "scale=1; $estimated_tokens / 1000" | bc 2>/dev/null || echo "0")K
	else
		token_display="$estimated_tokens"
	fi

	# Color code based on token usage
	if [[ "$estimated_tokens" -gt 50000 ]]; then
		token_color="$RED"
	elif [[ "$estimated_tokens" -gt 20000 ]]; then
		token_color="$YELLOW"
	else
		token_color="$GREEN"
	fi

	status_line+=" ${GRAY}|${RESET} ${token_color}🎯 ${token_display}t${RESET}"

	# Add cost if significant
	if (($(echo "$cost_estimate > 0.01" | bc -l 2>/dev/null || echo "0"))); then
		status_line+=" ${YELLOW}💰 \$${cost_estimate}${RESET}"
	fi

	# Add message count
	status_line+=" ${GRAY}💬 ${message_count}${RESET}"
fi

# Add session info (shortened)
short_session=$(echo "$session_id" | cut -c1-8)
status_line+=" ${GRAY}|${RESET} ${DIM}🔗 $short_session${RESET}"

# Add time
status_line+=" ${GRAY}|${RESET} ${WHITE}⏰ $current_time${RESET}"

printf "$status_line"
