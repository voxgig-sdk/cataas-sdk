<?php
declare(strict_types=1);

// Cat entity test

require_once __DIR__ . '/../cataas_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class CatEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CataasSDK::test(null, null);
        $ent = $testsdk->Cat(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = cat_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "cat." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CATAAS_TEST_CAT_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $cat_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.cat")));
        $cat_ref01_data = null;
        if (count($cat_ref01_data_raw) > 0) {
            $cat_ref01_data = Helpers::to_map($cat_ref01_data_raw[0][1]);
        }

        // LIST
        $cat_ref01_ent = $client->Cat(null);
        $cat_ref01_match = [];

        [$cat_ref01_list_result, $err] = $cat_ref01_ent->list($cat_ref01_match, null);
        $this->assertNull($err);
        $this->assertIsArray($cat_ref01_list_result);

        // LOAD
        $cat_ref01_match_dt0 = [
            "id" => $cat_ref01_data["id"],
        ];
        [$cat_ref01_data_dt0_loaded, $err] = $cat_ref01_ent->load($cat_ref01_match_dt0, null);
        $this->assertNull($err);
        $cat_ref01_data_dt0_load_result = Helpers::to_map($cat_ref01_data_dt0_loaded);
        $this->assertNotNull($cat_ref01_data_dt0_load_result);
        $this->assertEquals($cat_ref01_data_dt0_load_result["id"], $cat_ref01_data["id"]);

    }
}

function cat_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/cat/CatTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CataasSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["cat01", "cat02", "cat03", "say01", "say02", "say03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CATAAS_TEST_CAT_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CATAAS_TEST_CAT_ENTID" => $idmap,
        "CATAAS_TEST_LIVE" => "FALSE",
        "CATAAS_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CATAAS_TEST_CAT_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["CATAAS_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new CataasSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["CATAAS_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["CATAAS_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
