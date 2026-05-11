package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCatEntityFunc func(client *CataasSDK, entopts map[string]any) CataasEntity

var NewTagEntityFunc func(client *CataasSDK, entopts map[string]any) CataasEntity

