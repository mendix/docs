require('rubygems')
require('json')
require('yaml')
require('open-uri')
require('html-proofer')

desc "test urls"
task :test do
  HTMLProofer.check_directory("./_site", {
    :disable_external => true, :allow_hash_href => true, :assume_extension => true, :empty_alt_ignore => true
  }).run
end

task :default => [:test]
