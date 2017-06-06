module Jekyll
  module Categories
    class Indexer < Generator

      safe true
      priority :highest

      def generate(site)
        @site = site

        run
      end

      def run
        puts 'Indexing categories...'
        @site.data['category_index'] = {}

        # gather pages and posts
        items = @site.pages

        # only process files that will be converted to .html and only non excluded files
        items = items.find_all {|i| i.output_ext == '.html' && i['category'] != nil}

        items.each do |item|
          indexName = item.dir+item['category']
          index = @site.data['category_index'][indexName]

          if index == nil
            @site.data['category_index'][indexName] = Array.new
          end

          @site.data['category_index'][indexName].push(item);
        end

        puts 'Indexing categories done'
      end
    end
  end
end
