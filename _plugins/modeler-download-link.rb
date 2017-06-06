module Jekyll
  class ModelerDownload < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @input = text.strip
    end

    def render(context)
      @modeler = "https://appstore.home.mendix.com/link/modeler/#{@input}"

      <<-MARKUP.strip
      <a class="btn btn-primary" href="#{@modeler}" title="Download version #{@input} from the AppStore" target="_blank">Download</a>
      MARKUP
    end

  end
end

Liquid::Template.register_tag('modelerdownloadlink', Jekyll::ModelerDownload)
