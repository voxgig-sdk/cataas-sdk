package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Cataas",
			"slug": "cataas",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://cataas.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"cat": map[string]any{},
				"tag": map[string]any{},
			},
		},
		"entity": map[string]any{
			"cat": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"short": "Creation timestamp",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique identifier for the cat",
					},
					map[string]any{
						"name": "mimetype",
						"title": "Mimetype",
						"type": "`$STRING`",
						"short": "MIME type of the image",
					},
					map[string]any{
						"name": "size",
						"title": "Size",
						"type": "`$INTEGER`",
						"short": "Size of the image in bytes",
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$ARRAY`",
						"short": "Tags associated with the cat",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"short": "Last update timestamp",
						"format": "date-time",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "URL to access the cat image",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "cat",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/cat",
								"segments": []any{
									map[string]any{
										"lit": "cat",
									},
								},
								"parts": []any{
									"cat",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.tags`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "b",
											"orig": "b",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "brightness",
											"orig": "brightness",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "g",
											"orig": "g",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "height",
											"orig": "height",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "html",
											"orig": "html",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "hue",
											"orig": "hue",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "json",
											"orig": "json",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "lightness",
											"orig": "lightness",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "r",
											"orig": "r",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "saturation",
											"orig": "saturation",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "width",
											"orig": "width",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"b",
										"brightness",
										"filter",
										"g",
										"height",
										"html",
										"hue",
										"json",
										"lightness",
										"r",
										"saturation",
										"type",
										"width",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/cat/gif",
								"segments": []any{
									map[string]any{
										"lit": "cat",
									},
									map[string]any{
										"lit": "gif",
									},
								},
								"parts": []any{
									"cat",
									"gif",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.tags`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "html",
											"orig": "html",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "json",
											"orig": "json",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "gif",
									"exist": []any{
										"filter",
										"html",
										"json",
										"type",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/cats",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "cats",
									},
								},
								"parts": []any{
									"api",
									"cats",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "skip",
											"orig": "skip",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "tag",
											"orig": "tag",
											"type": "`$STRING`",
											"kind": "query",
											"example": "cute,funny",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"skip",
										"tag",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/cat/{tag}/says/{text}",
								"segments": []any{
									map[string]any{
										"lit": "cat",
									},
									map[string]any{
										"var": "tag",
									},
									map[string]any{
										"lit": "says",
									},
									map[string]any{
										"var": "text",
									},
								},
								"parts": []any{
									"cat",
									"{tag}",
									"says",
									"{text}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "tag",
											"orig": "tag",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "cute",
										},
										map[string]any{
											"name": "text",
											"orig": "text",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "hello",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "font_color",
											"orig": "font_color",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "font_size",
											"orig": "font_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "height",
											"orig": "height",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "html",
											"orig": "html",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "json",
											"orig": "json",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "width",
											"orig": "width",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"font_color",
										"font_size",
										"height",
										"html",
										"json",
										"tag",
										"text",
										"type",
										"width",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/cat/says/{text}",
								"segments": []any{
									map[string]any{
										"lit": "cat",
									},
									map[string]any{
										"lit": "says",
									},
									map[string]any{
										"var": "text",
									},
								},
								"parts": []any{
									"cat",
									"says",
									"{text}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "text",
											"orig": "text",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "hello",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "font_color",
											"orig": "font_color",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "font_size",
											"orig": "font_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "height",
											"orig": "height",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "html",
											"orig": "html",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "json",
											"orig": "json",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "width",
											"orig": "width",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"font_color",
										"font_size",
										"height",
										"html",
										"json",
										"text",
										"type",
										"width",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/cat/gif/says/{text}",
								"segments": []any{
									map[string]any{
										"lit": "cat",
									},
									map[string]any{
										"lit": "gif",
									},
									map[string]any{
										"lit": "says",
									},
									map[string]any{
										"var": "text",
									},
								},
								"parts": []any{
									"cat",
									"gif",
									"says",
									"{text}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "text",
											"orig": "text",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "Hello",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "font_color",
											"orig": "font_color",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "font_size",
											"orig": "font_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "html",
											"orig": "html",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "json",
											"orig": "json",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"font_color",
										"font_size",
										"html",
										"json",
										"text",
										"type",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/cat/{tag}",
								"segments": []any{
									map[string]any{
										"lit": "cat",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"cat",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"tag": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "tag",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "orange,cute",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "height",
											"orig": "height",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "html",
											"orig": "html",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "json",
											"orig": "json",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "width",
											"orig": "width",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"height",
										"html",
										"id",
										"json",
										"type",
										"width",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tag": map[string]any{
				"fields": []any{},
				"name": "tag",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/tags",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "tags",
									},
								},
								"parts": []any{
									"api",
									"tags",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
