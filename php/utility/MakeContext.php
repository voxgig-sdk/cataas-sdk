<?php
declare(strict_types=1);

// Cataas SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CataasMakeContext
{
    public static function call(array $ctxmap, ?CataasContext $basectx): CataasContext
    {
        return new CataasContext($ctxmap, $basectx);
    }
}
