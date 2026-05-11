<?php
declare(strict_types=1);

// Cataas SDK utility: prepare_body

class CataasPrepareBody
{
    public static function call(CataasContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
