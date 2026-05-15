
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { CataasSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('CatEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CATAAS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CATAAS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CataasSDK.test()
    const ent = testsdk.Cat()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CATAAS_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (maybeSkipControl(t, 'entityOp', 'cat.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set CATAAS_TEST_CAT_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let cat_ref01_data = Object.values(setup.data.existing.cat)[0] as any

    // LIST
    const cat_ref01_ent = client.Cat()
    const cat_ref01_match: any = {}

    const cat_ref01_list = await cat_ref01_ent.list(cat_ref01_match)


    // LOAD
    const cat_ref01_match_dt0: any = {}
    cat_ref01_match_dt0.id = cat_ref01_data.id
    const cat_ref01_data_dt0 = await cat_ref01_ent.load(cat_ref01_match_dt0)
    assert(cat_ref01_data_dt0.id === cat_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/cat/CatTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CataasSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['cat01','cat02','cat03','cat01','cat02','cat03','say01','say02','say03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['CATAAS_TEST_CAT_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'CATAAS_TEST_CAT_ENTID': idmap,
    'CATAAS_TEST_LIVE': 'FALSE',
    'CATAAS_TEST_EXPLAIN': 'FALSE',
    'CATAAS_APIKEY': 'NONE',
  })

  idmap = env['CATAAS_TEST_CAT_ENTID']

  const live = 'TRUE' === env.CATAAS_TEST_LIVE

  if (live) {
    client = new CataasSDK(merge([
      {
        apikey: env.CATAAS_APIKEY,
      },
      extra
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.CATAAS_TEST_EXPLAIN,
    live,
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
