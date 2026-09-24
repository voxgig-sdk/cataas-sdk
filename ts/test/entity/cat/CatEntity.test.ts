

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CataasSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


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
      if (!live && maybeSkipControl(t, 'entityOp', 'cat.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"sh":"Creation timestamp","t":"`$STRING`","key$":"created_at","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the cat","t":"`$STRING`","key$":"id","index$":1},"mimetype":{"a":true,"h":"Mimetype","n":"mimetype","r":false,"sh":"MIME type of the image","t":"`$STRING`","key$":"mimetype","index$":2},"size":{"a":true,"h":"Size","n":"size","r":false,"sh":"Size of the image in bytes","t":"`$INTEGER`","key$":"size","index$":3},"tags":{"a":true,"h":"Tags","n":"tags","r":false,"sh":"Tags associated with the cat","t":"`$ARRAY`","key$":"tags","index$":4},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":false,"sh":"Last update timestamp","t":"`$STRING`","key$":"updated_at","index$":5},"url":{"a":true,"h":"Url","n":"url","r":false,"sh":"URL to access the cat image","t":"`$STRING`","key$":"url","index$":6}},"id":{"field":"id","name":"id"},"name":"cat","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /cat","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"b","or":"b","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"brightness","or":"brightness","r":false,"t":"`$NUMBER`","index$":1},{"a":true,"k":"query","n":"filter","or":"filter","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"g","or":"g","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"height","or":"height","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"html","or":"html","r":false,"t":"`$BOOLEAN`","index$":5},{"a":true,"k":"query","n":"hue","or":"hue","r":false,"t":"`$NUMBER`","index$":6},{"a":true,"k":"query","n":"json","or":"json","r":false,"t":"`$BOOLEAN`","index$":7},{"a":true,"k":"query","n":"lightness","or":"lightness","r":false,"t":"`$NUMBER`","index$":8},{"a":true,"k":"query","n":"r","or":"r","r":false,"t":"`$INTEGER`","index$":9},{"a":true,"k":"query","n":"saturation","or":"saturation","r":false,"t":"`$NUMBER`","index$":10},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":11},{"a":true,"k":"query","n":"width","or":"width","r":false,"t":"`$INTEGER`","index$":12}]},"k":"http","m":"GET","o":"/cat","q":{"exist":["b","brightness","filter","g","height","html","hue","json","lightness","r","saturation","type","width"]},"r":{},"s":[{"lit":"cat"}],"t":{"req":"`reqdata`","res":"`body.tags`"},"index$":0},{"a":true,"co":{"id":"GET /cat/gif","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"filter","or":"filter","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"html","or":"html","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"k":"query","n":"json","or":"json","r":false,"t":"`$BOOLEAN`","index$":2},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/cat/gif","q":{"$action":"gif","exist":["filter","html","json","type"]},"r":{},"s":[{"lit":"cat"},{"lit":"gif"}],"t":{"req":"`reqdata`","res":"`body.tags`"},"index$":1},{"a":true,"co":{"id":"GET /api/cats","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":0,"k":"query","n":"skip","or":"skip","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":"cute,funny","k":"query","n":"tag","or":"tag","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/api/cats","q":{"exist":["limit","skip","tag"]},"r":{},"s":[{"lit":"api"},{"lit":"cats"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /cat/{tag}/says/{text}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"cute","k":"param","n":"tag","or":"tag","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"hello","k":"param","n":"text","or":"text","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"filter","or":"filter","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"font_color","or":"font_color","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"font_size","or":"font_size","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"height","or":"height","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"html","or":"html","r":false,"t":"`$BOOLEAN`","index$":4},{"a":true,"k":"query","n":"json","or":"json","r":false,"t":"`$BOOLEAN`","index$":5},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"width","or":"width","r":false,"t":"`$INTEGER`","index$":7}]},"k":"http","m":"GET","o":"/cat/{tag}/says/{text}","q":{"exist":["filter","font_color","font_size","height","html","json","tag","text","type","width"]},"r":{},"s":[{"lit":"cat"},{"var":"tag"},{"lit":"says"},{"var":"text"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /cat/says/{text}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"hello","k":"param","n":"text","or":"text","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"filter","or":"filter","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"font_color","or":"font_color","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"font_size","or":"font_size","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"height","or":"height","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"html","or":"html","r":false,"t":"`$BOOLEAN`","index$":4},{"a":true,"k":"query","n":"json","or":"json","r":false,"t":"`$BOOLEAN`","index$":5},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"width","or":"width","r":false,"t":"`$INTEGER`","index$":7}]},"k":"http","m":"GET","o":"/cat/says/{text}","q":{"exist":["filter","font_color","font_size","height","html","json","text","type","width"]},"r":{},"s":[{"lit":"cat"},{"lit":"says"},{"var":"text"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /cat/gif/says/{text}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"Hello","k":"param","n":"text","or":"text","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"filter","or":"filter","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"font_color","or":"font_color","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"font_size","or":"font_size","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"html","or":"html","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"query","n":"json","or":"json","r":false,"t":"`$BOOLEAN`","index$":4},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/cat/gif/says/{text}","q":{"exist":["filter","font_color","font_size","html","json","text","type"]},"r":{},"s":[{"lit":"cat"},{"lit":"gif"},{"lit":"says"},{"var":"text"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /cat/{tag}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"orange,cute","k":"param","n":"id","or":"tag","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"filter","or":"filter","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"height","or":"height","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"html","or":"html","r":false,"t":"`$BOOLEAN`","index$":2},{"a":true,"k":"query","n":"json","or":"json","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"width","or":"width","r":false,"t":"`$INTEGER`","index$":5}]},"k":"http","m":"GET","o":"/cat/{tag}","q":{"exist":["filter","height","html","id","json","type","width"]},"r":{"param":{"tag":"id"}},"s":[{"lit":"cat"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"cat","name__orig":"cat","Name":"Cat","name_":"cat","name-":"cat","NAME":"CAT","index$":0}, {"active":true,"entity":"cat","key$":"BasicCatFlow","kind":"basic","name":"BasicCatFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"cat_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"cat_ref01","srcdatavar":"cat_ref01_data","suffix":"_dt0"},"m":{"id":"cat01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-cat_ref01"}}],"index$":1}]}, 'Cat', {"GET /cat":{"protocol":"http","operationId":"getRandomCat","responses":{"200":{"description":"Successful response","content":{"image/jpeg":{"schema":{"type":"string","format":"binary"}},"image/png":{"schema":{"type":"string","format":"binary"}},"text/html":{"schema":{"type":"string"}},"application/json":{"schema":{"type":"object","properties":{"_id":{"description":"Unique identifier for the cat","key$":"_id","type":"string"},"mimetype":{"description":"MIME type of the image","key$":"mimetype","type":"string"},"size":{"description":"Size of the image in bytes","key$":"size","type":"integer"},"tags":{"description":"Tags associated with the cat","items":{"type":"string"},"key$":"tags","type":"array"},"url":{"description":"URL to access the cat image","key$":"url","type":"string"}},"x-ref":"#/components/schemas/CatResponse","index$":0}}}}},"parameters":[{"name":"type","in":"query","description":"Image type","required":false,"schema":{"type":"string","enum":["xsmall","small","medium","square"]},"index$":0},{"name":"filter","in":"query","description":"Image filter","required":false,"schema":{"type":"string","enum":["blur","mono","negate","custom"]},"index$":1},{"name":"brightness","in":"query","description":"Brightness level (used with filter=custom)","required":false,"schema":{"type":"number"},"index$":2},{"name":"lightness","in":"query","description":"Lightness level (used with filter=custom)","required":false,"schema":{"type":"number"},"index$":3},{"name":"saturation","in":"query","description":"Saturation level (used with filter=custom)","required":false,"schema":{"type":"number"},"index$":4},{"name":"hue","in":"query","description":"Hue level (used with filter=custom)","required":false,"schema":{"type":"number"},"index$":5},{"name":"r","in":"query","description":"Red channel (used with filter=custom)","required":false,"schema":{"type":"integer","minimum":0,"maximum":255},"index$":6},{"name":"g","in":"query","description":"Green channel (used with filter=custom)","required":false,"schema":{"type":"integer","minimum":0,"maximum":255},"index$":7},{"name":"b","in":"query","description":"Blue channel (used with filter=custom)","required":false,"schema":{"type":"integer","minimum":0,"maximum":255},"index$":8},{"name":"width","in":"query","description":"Custom width for the image","required":false,"schema":{"type":"integer"},"index$":9},{"name":"height","in":"query","description":"Custom height for the image","required":false,"schema":{"type":"integer"},"index$":10},{"name":"html","in":"query","description":"Return cat in HTML page (useful for Twitter or Facebook embedded render)","required":false,"schema":{"type":"boolean"},"index$":11},{"name":"json","in":"query","description":"Return cat in JSON object","required":false,"schema":{"type":"boolean"},"index$":12}],"securitySource":"unspecified"},"GET /cat/gif":{"protocol":"http","operationId":"getRandomCatGif","responses":{"200":{"description":"Successful response","content":{"image/gif":{"schema":{"type":"string","format":"binary"}},"text/html":{"schema":{"type":"string"}},"application/json":{"schema":{"type":"object","properties":{"_id":{"description":"Unique identifier for the cat","key$":"_id","type":"string"},"mimetype":{"description":"MIME type of the image","key$":"mimetype","type":"string"},"size":{"description":"Size of the image in bytes","key$":"size","type":"integer"},"tags":{"description":"Tags associated with the cat","items":{"type":"string"},"key$":"tags","type":"array"},"url":{"description":"URL to access the cat image","key$":"url","type":"string"}},"x-ref":"#/components/schemas/CatResponse"}}}}},"parameters":[{"name":"type","in":"query","description":"Image type","required":false,"schema":{"type":"string","enum":["xsmall","small","medium","square"]},"index$":0},{"name":"filter","in":"query","description":"Image filter","required":false,"schema":{"type":"string","enum":["blur","mono","negate","custom"]},"index$":1},{"name":"html","in":"query","description":"Return cat in HTML page","required":false,"schema":{"type":"boolean"},"index$":2},{"name":"json","in":"query","description":"Return cat in JSON object","required":false,"schema":{"type":"boolean"},"index$":3}],"securitySource":"unspecified"},"GET /api/cats":{"protocol":"http","operationId":"getAllCats","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"_id":{"type":"string","description":"Unique identifier for the cat","key$":"_id"},"mimetype":{"type":"string","description":"MIME type of the image","key$":"mimetype"},"size":{"type":"integer","description":"Size of the image in bytes","key$":"size"},"tags":{"type":"array","items":{"type":"string"},"description":"Tags associated with the cat","key$":"tags"},"url":{"type":"string","description":"URL to access the cat image","key$":"url"},"created_at":{"type":"string","format":"date-time","description":"Creation timestamp","key$":"created_at"},"updated_at":{"type":"string","format":"date-time","description":"Last update timestamp","key$":"updated_at"}},"x-ref":"#/components/schemas/Cat","index$":0}}}}}},"parameters":[{"name":"tags","in":"query","description":"Filter cats by tags (comma-separated)","required":false,"schema":{"type":"string"},"example":"cute,funny","index$":0},{"name":"skip","in":"query","description":"Number of records to skip for pagination","required":false,"schema":{"type":"integer","default":0},"index$":1},{"name":"limit","in":"query","description":"Maximum number of records to return","required":false,"schema":{"type":"integer","default":10},"index$":2}],"securitySource":"unspecified"},"GET /cat/{tag}/says/{text}":{"protocol":"http","operationId":"getRandomCatByTagWithText","responses":{"200":{"description":"Successful response","content":{"image/jpeg":{"schema":{"type":"string","format":"binary"}},"image/png":{"schema":{"type":"string","format":"binary"}},"text/html":{"schema":{"type":"string"}},"application/json":{"schema":{"type":"object","properties":{"_id":{"description":"Unique identifier for the cat","key$":"_id","type":"string"},"mimetype":{"description":"MIME type of the image","key$":"mimetype","type":"string"},"size":{"description":"Size of the image in bytes","key$":"size","type":"integer"},"tags":{"description":"Tags associated with the cat","items":{"type":"string"},"key$":"tags","type":"array"},"url":{"description":"URL to access the cat image","key$":"url","type":"string"}},"x-ref":"#/components/schemas/CatResponse","index$":0}}}}},"parameters":[{"name":"tag","in":"path","description":"Tag(s) to filter cats. Multiple tags can be separated by comma.","required":true,"schema":{"type":"string"},"example":"cute","index$":0},{"name":"text","in":"path","description":"Text to display on the cat image","required":true,"schema":{"type":"string"},"example":"hello","index$":1},{"name":"fontSize","in":"query","description":"Font size for the text","required":false,"schema":{"type":"integer"},"index$":2},{"name":"fontColor","in":"query","description":"Font color for the text","required":false,"schema":{"type":"string"},"index$":3},{"name":"type","in":"query","description":"Image type","required":false,"schema":{"type":"string","enum":["xsmall","small","medium","square"]},"index$":4},{"name":"filter","in":"query","description":"Image filter","required":false,"schema":{"type":"string","enum":["blur","mono","negate","custom"]},"index$":5},{"name":"width","in":"query","description":"Custom width for the image","required":false,"schema":{"type":"integer"},"index$":6},{"name":"height","in":"query","description":"Custom height for the image","required":false,"schema":{"type":"integer"},"index$":7},{"name":"html","in":"query","description":"Return cat in HTML page","required":false,"schema":{"type":"boolean"},"index$":8},{"name":"json","in":"query","description":"Return cat in JSON object","required":false,"schema":{"type":"boolean"},"index$":9}],"securitySource":"unspecified"},"GET /cat/says/{text}":{"protocol":"http","operationId":"getRandomCatWithText","responses":{"200":{"description":"Successful response","content":{"image/jpeg":{"schema":{"type":"string","format":"binary"}},"image/png":{"schema":{"type":"string","format":"binary"}},"text/html":{"schema":{"type":"string"}},"application/json":{"schema":{"type":"object","properties":{"_id":{"description":"Unique identifier for the cat","key$":"_id","type":"string"},"mimetype":{"description":"MIME type of the image","key$":"mimetype","type":"string"},"size":{"description":"Size of the image in bytes","key$":"size","type":"integer"},"tags":{"description":"Tags associated with the cat","items":{"type":"string"},"key$":"tags","type":"array"},"url":{"description":"URL to access the cat image","key$":"url","type":"string"}},"x-ref":"#/components/schemas/CatResponse","index$":0}}}}},"parameters":[{"name":"text","in":"path","description":"Text to display on the cat image","required":true,"schema":{"type":"string"},"example":"hello","index$":0},{"name":"fontSize","in":"query","description":"Font size for the text","required":false,"schema":{"type":"integer"},"index$":1},{"name":"fontColor","in":"query","description":"Font color for the text","required":false,"schema":{"type":"string"},"index$":2},{"name":"type","in":"query","description":"Image type","required":false,"schema":{"type":"string","enum":["xsmall","small","medium","square"]},"index$":3},{"name":"filter","in":"query","description":"Image filter","required":false,"schema":{"type":"string","enum":["blur","mono","negate","custom"]},"index$":4},{"name":"width","in":"query","description":"Custom width for the image","required":false,"schema":{"type":"integer"},"index$":5},{"name":"height","in":"query","description":"Custom height for the image","required":false,"schema":{"type":"integer"},"index$":6},{"name":"html","in":"query","description":"Return cat in HTML page","required":false,"schema":{"type":"boolean"},"index$":7},{"name":"json","in":"query","description":"Return cat in JSON object","required":false,"schema":{"type":"boolean"},"index$":8}],"securitySource":"unspecified"},"GET /cat/gif/says/{text}":{"protocol":"http","operationId":"getRandomCatGifWithText","responses":{"200":{"description":"Successful response","content":{"image/gif":{"schema":{"type":"string","format":"binary"}},"text/html":{"schema":{"type":"string"}},"application/json":{"schema":{"type":"object","properties":{"_id":{"description":"Unique identifier for the cat","key$":"_id","type":"string"},"mimetype":{"description":"MIME type of the image","key$":"mimetype","type":"string"},"size":{"description":"Size of the image in bytes","key$":"size","type":"integer"},"tags":{"description":"Tags associated with the cat","items":{"type":"string"},"key$":"tags","type":"array"},"url":{"description":"URL to access the cat image","key$":"url","type":"string"}},"x-ref":"#/components/schemas/CatResponse","index$":0}}}}},"parameters":[{"name":"text","in":"path","description":"Text to display on the cat gif","required":true,"schema":{"type":"string"},"example":"Hello","index$":0},{"name":"fontSize","in":"query","description":"Font size for the text","required":false,"schema":{"type":"integer"},"index$":1},{"name":"fontColor","in":"query","description":"Font color for the text","required":false,"schema":{"type":"string"},"index$":2},{"name":"type","in":"query","description":"Image type","required":false,"schema":{"type":"string","enum":["xsmall","small","medium","square"]},"index$":3},{"name":"filter","in":"query","description":"Image filter","required":false,"schema":{"type":"string","enum":["blur","mono","negate","custom"]},"index$":4},{"name":"html","in":"query","description":"Return cat in HTML page","required":false,"schema":{"type":"boolean"},"index$":5},{"name":"json","in":"query","description":"Return cat in JSON object","required":false,"schema":{"type":"boolean"},"index$":6}],"securitySource":"unspecified"},"GET /cat/{tag}":{"protocol":"http","operationId":"getRandomCatByTag","responses":{"200":{"description":"Successful response","content":{"image/jpeg":{"schema":{"type":"string","format":"binary"}},"image/png":{"schema":{"type":"string","format":"binary"}},"text/html":{"schema":{"type":"string"}},"application/json":{"schema":{"type":"object","properties":{"_id":{"description":"Unique identifier for the cat","key$":"_id","type":"string"},"mimetype":{"description":"MIME type of the image","key$":"mimetype","type":"string"},"size":{"description":"Size of the image in bytes","key$":"size","type":"integer"},"tags":{"description":"Tags associated with the cat","items":{"type":"string"},"key$":"tags","type":"array"},"url":{"description":"URL to access the cat image","key$":"url","type":"string"}},"x-ref":"#/components/schemas/CatResponse","index$":0}}}}},"parameters":[{"name":"tag","in":"path","description":"Tag(s) to filter cats. Multiple tags can be separated by comma.","required":true,"schema":{"type":"string"},"example":"orange,cute","index$":0},{"name":"type","in":"query","description":"Image type","required":false,"schema":{"type":"string","enum":["xsmall","small","medium","square"]},"index$":1},{"name":"filter","in":"query","description":"Image filter","required":false,"schema":{"type":"string","enum":["blur","mono","negate","custom"]},"index$":2},{"name":"width","in":"query","description":"Custom width for the image","required":false,"schema":{"type":"integer"},"index$":3},{"name":"height","in":"query","description":"Custom height for the image","required":false,"schema":{"type":"integer"},"index$":4},{"name":"html","in":"query","description":"Return cat in HTML page","required":false,"schema":{"type":"boolean"},"index$":5},{"name":"json","in":"query","description":"Return cat in JSON object","required":false,"schema":{"type":"boolean"},"index$":6}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let cat_ref01_data = Object.values(setup.data.existing.cat)[0] as any

    // LIST
    const cat_ref01_ent = client.Cat()
    const cat_ref01_match: any = {}

    const cat_ref01_list = (await cat_ref01_ent.list(cat_ref01_match)).map((e: any) => e.data())


    // LOAD
    const cat_ref01_match_dt0: any = {}
    cat_ref01_match_dt0.id = cat_ref01_data.id
    const cat_ref01_data_dt0 = (await cat_ref01_ent.load(cat_ref01_match_dt0)).data()
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
    ['cat01','cat02','cat03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CATAAS_TEST_CAT_ENTID': idmap,
    'CATAAS_TEST_LIVE': 'FALSE',
    'CATAAS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['CATAAS_TEST_CAT_ENTID']

  const live = 'TRUE' === env.CATAAS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CATAAS_TEST_CAT_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CataasSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
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
    transport,
    now: Date.now(),
  }

  return setup
}
  
