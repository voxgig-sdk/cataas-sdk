# Cat entity test

require "minitest/autorun"
require "json"
require_relative "../Cataas_sdk"
require_relative "runner"

class CatEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CataasSDK.test(nil, nil)
    ent = testsdk.Cat(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = cat_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "cat." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CATAAS_TEST_CAT_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    cat_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.cat")))
    cat_ref01_data = nil
    if cat_ref01_data_raw.length > 0
      cat_ref01_data = Helpers.to_map(cat_ref01_data_raw[0][1])
    end

    # LIST
    cat_ref01_ent = client.Cat(nil)
    cat_ref01_match = {}

    cat_ref01_list_result, err = cat_ref01_ent.list(cat_ref01_match, nil)
    assert_nil err
    assert cat_ref01_list_result.is_a?(Array)

    # LOAD
    cat_ref01_match_dt0 = {
      "id" => cat_ref01_data["id"],
    }
    cat_ref01_data_dt0_loaded, err = cat_ref01_ent.load(cat_ref01_match_dt0, nil)
    assert_nil err
    cat_ref01_data_dt0_load_result = Helpers.to_map(cat_ref01_data_dt0_loaded)
    assert !cat_ref01_data_dt0_load_result.nil?
    assert_equal cat_ref01_data_dt0_load_result["id"], cat_ref01_data["id"]

  end
end

def cat_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "cat", "CatTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CataasSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["cat01", "cat02", "cat03", "say01", "say02", "say03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["CATAAS_TEST_CAT_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CATAAS_TEST_CAT_ENTID" => idmap,
    "CATAAS_TEST_LIVE" => "FALSE",
    "CATAAS_TEST_EXPLAIN" => "FALSE",
    "CATAAS_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["CATAAS_TEST_CAT_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["CATAAS_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["CATAAS_APIKEY"],
      },
      extra || {},
    ])
    client = CataasSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["CATAAS_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["CATAAS_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
