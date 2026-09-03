# {{ .Title | strings.TrimSpace -}}

{{ $needSeparator := false -}}

{{/* Description */}}
{{ with .Description | strings.TrimSpace }}

> {{ replace . "\n" "\n> " -}}
{{ $needSeparator = true -}}
{{ end -}}

{{/* Page content with index.html.md link rewriting */}}
{{ $content := .RenderShortcodes | strings.TrimSpace | strings.ReplaceRE `\]\((/[^:)#" ]+/)(#[^)"]*)?\)` `](${1}index.html.md${2})` -}}
{{ with $content -}}
{{ if $needSeparator }}
---

{{ else }}
{{ end -}}
{{ . }}
{{ $needSeparator = true -}}
{{ end -}}

{{/* Child pages list */}}
{{ with .Pages -}}
{{ if $needSeparator }}
---

{{ else }}
{{ end -}}
Section pages:

{{ range . -}}
- [{{ .Title | strings.TrimSpace }}]({{ .RelPermalink }}index.html.md)
{{- with .Description | strings.TrimSpace }}: {{ . }}{{ end }}
{{ end -}}
{{ end -}}
