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
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
								"parts": []any{
									"cat",
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
								"parts": []any{
									"cat",
									"gif",
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
								"parts": []any{
									"api",
									"cats",
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
								"parts": []any{
									"cat",
									"{tag}",
									"says",
									"{text}",
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
								"parts": []any{
									"cat",
									"says",
									"{text}",
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
								"parts": []any{
									"cat",
									"gif",
									"says",
									"{text}",
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
								"parts": []any{
									"cat",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"tag": "id",
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
								"parts": []any{
									"api",
									"tags",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
