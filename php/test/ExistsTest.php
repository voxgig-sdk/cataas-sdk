<?php
declare(strict_types=1);

// Cataas SDK exists test

require_once __DIR__ . '/../cataas_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = CataasSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
