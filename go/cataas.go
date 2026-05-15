package voxgigcataassdk

import (
	"github.com/voxgig-sdk/cataas-sdk/core"
	"github.com/voxgig-sdk/cataas-sdk/entity"
	"github.com/voxgig-sdk/cataas-sdk/feature"
	_ "github.com/voxgig-sdk/cataas-sdk/utility"
)

// Type aliases preserve external API.
type CataasSDK = core.CataasSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CataasEntity = core.CataasEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CataasError = core.CataasError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCatEntityFunc = func(client *core.CataasSDK, entopts map[string]any) core.CataasEntity {
		return entity.NewCatEntity(client, entopts)
	}
	core.NewTagEntityFunc = func(client *core.CataasSDK, entopts map[string]any) core.CataasEntity {
		return entity.NewTagEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCataasSDK = core.NewCataasSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
