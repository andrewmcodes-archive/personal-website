source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

# Hello! This is where you manage which Bridgetown version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Bridgetown with `bundle exec`, like so:
#
#   bundle exec bridgetown serve
#
# This will help ensure the proper Bridgetown version is running.
#
# To install a plugin, simply run bundle add and specify the group
# "bridgetown_plugins". For example:
#
#   bundle add some-new-plugin -g bridgetown_plugins
#
# Happy Bridgetowning!

gem "bridgetown", "~> 0.16.0"

group :development do
  gem "solargraph"
end

group :development, :test do
  gem "standard"
  gem "html-proofer"
end

group :bridgetown_plugins do
  gem "bridgetown-cloudinary", "~> 1.0.2"
  gem "bridgetown-feed", "~> 1.1.2"
  gem "bridgetown-inline-svg", "~> 1.1.0"
  gem "bridgetown-quick-search", "~> 1.0.3"
  gem "bridgetown-seo-tag", "~> 3.0.5"
  gem "bridgetown-plausible-tag", "~> 0.0.1"
end
