<?php
declare(strict_types=1);

// Cataas SDK utility: result_headers

class CataasResultHeaders
{
    public static function call(CataasContext $ctx): ?CataasResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
