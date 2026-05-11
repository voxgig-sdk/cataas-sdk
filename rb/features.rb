# Cataas SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CataasFeatures
  def self.make_feature(name)
    case name
    when "base"
      CataasBaseFeature.new
    when "test"
      CataasTestFeature.new
    else
      CataasBaseFeature.new
    end
  end
end
