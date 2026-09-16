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
						"format": "date-time",
						"name": "created_at",
						"short": "Creation timestamp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the cat",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mimetype",
						"short": "MIME type of the image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "size",
						"short": "Size of the image in bytes",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "tags",
						"short": "Tags associated with the cat",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updated_at",
						"short": "Last update timestamp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "URL to access the cat image",
						"type": "`$STRING`",
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
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "b",
											"orig": "b",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "brightness",
											"orig": "brightness",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "g",
											"orig": "g",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "height",
											"orig": "height",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "html",
											"orig": "html",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "hue",
											"orig": "hue",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "json",
											"orig": "json",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "lightness",
											"orig": "lightness",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "r",
											"orig": "r",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "saturation",
											"orig": "saturation",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "width",
											"orig": "width",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cat",
								"segments": []any{
									map[string]any{
										"lit": "cat",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.tags`",
								},
								"parts": []any{
									"cat",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "html",
											"orig": "html",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "json",
											"orig": "json",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
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
								"select": map[string]any{
									"$action": "gif",
									"exist": []any{
										"filter",
										"html",
										"json",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.tags`",
								},
								"parts": []any{
									"cat",
									"gif",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "skip",
											"orig": "skip",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "cute,funny",
											"kind": "query",
											"name": "tag",
											"orig": "tag",
											"type": "`$STRING`",
										},
									},
								},
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
								"select": map[string]any{
									"exist": []any{
										"limit",
										"skip",
										"tag",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"cats",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "cute",
											"kind": "param",
											"name": "tag",
											"orig": "tag",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "hello",
											"kind": "param",
											"name": "text",
											"orig": "text",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "font_color",
											"orig": "font_color",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "font_size",
											"orig": "font_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "height",
											"orig": "height",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "html",
											"orig": "html",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "json",
											"orig": "json",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "width",
											"orig": "width",
											"type": "`$INTEGER`",
										},
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cat",
									"{tag}",
									"says",
									"{text}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "hello",
											"kind": "param",
											"name": "text",
											"orig": "text",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "font_color",
											"orig": "font_color",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "font_size",
											"orig": "font_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "height",
											"orig": "height",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "html",
											"orig": "html",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "json",
											"orig": "json",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "width",
											"orig": "width",
											"type": "`$INTEGER`",
										},
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cat",
									"says",
									"{text}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "Hello",
											"kind": "param",
											"name": "text",
											"orig": "text",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "font_color",
											"orig": "font_color",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "font_size",
											"orig": "font_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "html",
											"orig": "html",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "json",
											"orig": "json",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cat",
									"gif",
									"says",
									"{text}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "orange,cute",
											"kind": "param",
											"name": "id",
											"orig": "tag",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "height",
											"orig": "height",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "html",
											"orig": "html",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "json",
											"orig": "json",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "width",
											"orig": "width",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cat/{tag}",
								"rename": map[string]any{
									"param": map[string]any{
										"tag": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cat",
									},
									map[string]any{
										"var": "id",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cat",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"cat",
							"say",
						},
					},
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
								"args": map[string]any{},
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
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"tags",
								},
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
