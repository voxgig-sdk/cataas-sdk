<?php
declare(strict_types=1);

// Cataas SDK utility: result_body

class CataasResultBody
{
    public static function call(CataasContext $ctx): ?CataasResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
