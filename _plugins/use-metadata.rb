require 'pathname'

def split_path(path)
    Pathname(path).each_filename.to_a
end

module Jekyll
  module Metadata
    class MetadataGenerator < Generator

      safe true
      priority :highest

      def generate(site)
        @site = site

        run
      end

      def run
        puts 'Indexing metadata'
        @site.data['dir_index'] = {}

        # gather pages and posts
        items = @site.pages

        # only process files that will be converted to .html and only non excluded files
        items = items.find_all {|i| i.output_ext == '.html'}

        items.each do |page|
          dirs = split_path(page.dir);
          title = page['title'] || false
          if title && dirs.length > 0;
            dir = dirs[0]
            root = @site.data['spaces'][dir] || false
            if root && root['space'] != nil
              page.data['space'] = root['space']
              index = @site.data['dir_index'][dir]

              if index == nil
                @site.data['dir_index'][dir] = Array.new
              end

              @site.data['dir_index'][dir].push(page);
            end
          end
        end

        puts 'Indexing metadata done'
      end
    end
  end
end
