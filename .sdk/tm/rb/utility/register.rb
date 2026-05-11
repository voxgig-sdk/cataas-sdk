# Cataas SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CataasUtility.registrar = ->(u) {
  u.clean = CataasUtilities::Clean
  u.done = CataasUtilities::Done
  u.make_error = CataasUtilities::MakeError
  u.feature_add = CataasUtilities::FeatureAdd
  u.feature_hook = CataasUtilities::FeatureHook
  u.feature_init = CataasUtilities::FeatureInit
  u.fetcher = CataasUtilities::Fetcher
  u.make_fetch_def = CataasUtilities::MakeFetchDef
  u.make_context = CataasUtilities::MakeContext
  u.make_options = CataasUtilities::MakeOptions
  u.make_request = CataasUtilities::MakeRequest
  u.make_response = CataasUtilities::MakeResponse
  u.make_result = CataasUtilities::MakeResult
  u.make_point = CataasUtilities::MakePoint
  u.make_spec = CataasUtilities::MakeSpec
  u.make_url = CataasUtilities::MakeUrl
  u.param = CataasUtilities::Param
  u.prepare_auth = CataasUtilities::PrepareAuth
  u.prepare_body = CataasUtilities::PrepareBody
  u.prepare_headers = CataasUtilities::PrepareHeaders
  u.prepare_method = CataasUtilities::PrepareMethod
  u.prepare_params = CataasUtilities::PrepareParams
  u.prepare_path = CataasUtilities::PreparePath
  u.prepare_query = CataasUtilities::PrepareQuery
  u.result_basic = CataasUtilities::ResultBasic
  u.result_body = CataasUtilities::ResultBody
  u.result_headers = CataasUtilities::ResultHeaders
  u.transform_request = CataasUtilities::TransformRequest
  u.transform_response = CataasUtilities::TransformResponse
}
