# Cataas SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module CataasFeatures
  def self.make_feature(name)
    case name
    when "base"
      CataasBaseFeature.new
    when "ratelimit"
      CataasRatelimitFeature.new
    when "retry"
      CataasRetryFeature.new
    when "test"
      CataasTestFeature.new
    when "timeout"
      CataasTimeoutFeature.new
    else
      CataasBaseFeature.new
    end
  end
end
