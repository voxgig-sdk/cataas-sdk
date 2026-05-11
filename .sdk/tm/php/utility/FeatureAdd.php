<?php
declare(strict_types=1);

// Cataas SDK utility: feature_add

class CataasFeatureAdd
{
    public static function call(CataasContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
