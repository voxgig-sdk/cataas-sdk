<?php
declare(strict_types=1);

// Cataas SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class CataasFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new CataasBaseFeature();
            case "test":
                return new CataasTestFeature();
            default:
                return new CataasBaseFeature();
        }
    }
}
