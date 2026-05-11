<?php
declare(strict_types=1);

// Cataas SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

CataasUtility::setRegistrar(function (CataasUtility $u): void {
    $u->clean = [CataasClean::class, 'call'];
    $u->done = [CataasDone::class, 'call'];
    $u->make_error = [CataasMakeError::class, 'call'];
    $u->feature_add = [CataasFeatureAdd::class, 'call'];
    $u->feature_hook = [CataasFeatureHook::class, 'call'];
    $u->feature_init = [CataasFeatureInit::class, 'call'];
    $u->fetcher = [CataasFetcher::class, 'call'];
    $u->make_fetch_def = [CataasMakeFetchDef::class, 'call'];
    $u->make_context = [CataasMakeContext::class, 'call'];
    $u->make_options = [CataasMakeOptions::class, 'call'];
    $u->make_request = [CataasMakeRequest::class, 'call'];
    $u->make_response = [CataasMakeResponse::class, 'call'];
    $u->make_result = [CataasMakeResult::class, 'call'];
    $u->make_point = [CataasMakePoint::class, 'call'];
    $u->make_spec = [CataasMakeSpec::class, 'call'];
    $u->make_url = [CataasMakeUrl::class, 'call'];
    $u->param = [CataasParam::class, 'call'];
    $u->prepare_auth = [CataasPrepareAuth::class, 'call'];
    $u->prepare_body = [CataasPrepareBody::class, 'call'];
    $u->prepare_headers = [CataasPrepareHeaders::class, 'call'];
    $u->prepare_method = [CataasPrepareMethod::class, 'call'];
    $u->prepare_params = [CataasPrepareParams::class, 'call'];
    $u->prepare_path = [CataasPreparePath::class, 'call'];
    $u->prepare_query = [CataasPrepareQuery::class, 'call'];
    $u->result_basic = [CataasResultBasic::class, 'call'];
    $u->result_body = [CataasResultBody::class, 'call'];
    $u->result_headers = [CataasResultHeaders::class, 'call'];
    $u->transform_request = [CataasTransformRequest::class, 'call'];
    $u->transform_response = [CataasTransformResponse::class, 'call'];
});
