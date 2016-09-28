=begin
  Jekyll tag to include Markdown text from _includes directory preprocessing with Liquid.
  Usage:
    {% markdown <filename> %}
  Dependency:
    - kramdown
=end
module Jekyll
  class MarkdownTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text.strip
    end
    require "kramdown"
    def render(context)
      dir = context.registers[:page]["dir"]
      tmpl = File.read File.join Dir.pwd, dir, "snippets", @text
      site = context.registers[:site]
      tmpl = (Liquid::Template.parse tmpl).render site.site_payload
      html = Kramdown::Document.new(tmpl).to_html
    end
  end
end
Liquid::Template.register_tag('snippet', Jekyll::MarkdownTag)
