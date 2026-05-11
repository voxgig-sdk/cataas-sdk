# Cataas SDK exists test

require "minitest/autorun"
require_relative "../Cataas_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CataasSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
